var Wp = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Wn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Fe = Wp.NODE_ENV !== "production" ? Object.freeze({}) : {}, yo = Wp.NODE_ENV !== "production" ? Object.freeze([]) : [], dt = () => {
}, E_ = () => !1, Fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bi = (e) => e.startsWith("onUpdate:"), st = Object.assign, _c = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, w_ = Object.prototype.hasOwnProperty, Le = (e, t) => w_.call(e, t), he = Array.isArray, Ps = (e) => Br(e) === "[object Map]", Lo = (e) => Br(e) === "[object Set]", wu = (e) => Br(e) === "[object Date]", Ae = (e) => typeof e == "function", Ge = (e) => typeof e == "string", rn = (e) => typeof e == "symbol", Be = (e) => e !== null && typeof e == "object", yc = (e) => (Be(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), Kp = Object.prototype.toString, Br = (e) => Kp.call(e), bc = (e) => Br(e).slice(8, -1), zp = (e) => Br(e) === "[object Object]", Ec = (e) => Ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cr = /* @__PURE__ */ Wn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), A_ = /* @__PURE__ */ Wn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), la = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, S_ = /-(\w)/g, _t = la(
  (e) => e.replace(S_, (t, n) => n ? n.toUpperCase() : "")
), C_ = /\B([A-Z])/g, Un = la(
  (e) => e.replace(C_, "-$1").toLowerCase()
), Us = la((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ss = la(
  (e) => e ? `on${Us(e)}` : ""
), xt = (e, t) => !Object.is(e, t), uo = (e, ...t) => {
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
}, O_ = (e) => {
  const t = Ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Au;
const jr = () => Au || (Au = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Ge(s) ? x_(s) : Vt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (Ge(e) || Be(e))
    return e;
}
const T_ = /;(?![^(]*\))/g, N_ = /:([^]+)/, D_ = /\/\*[^]*?\*\//g;
function x_(e) {
  const t = {};
  return e.replace(D_, "").split(T_).forEach((n) => {
    if (n) {
      const s = n.split(N_);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function pe(e) {
  let t = "";
  if (Ge(e))
    t = e;
  else if (he(e))
    for (let n = 0; n < e.length; n++) {
      const s = pe(e[n]);
      s && (t += s + " ");
    }
  else if (Be(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function it(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ge(t) && (e.class = pe(t)), n && (e.style = Vt(n)), e;
}
const k_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", R_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", I_ = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", P_ = /* @__PURE__ */ Wn(k_), M_ = /* @__PURE__ */ Wn(R_), V_ = /* @__PURE__ */ Wn(I_), L_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", F_ = /* @__PURE__ */ Wn(L_);
function qp(e) {
  return !!e || e === "";
}
function B_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Hs(e[s], t[s]);
  return n;
}
function Hs(e, t) {
  if (e === t) return !0;
  let n = wu(e), s = wu(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = rn(e), s = rn(t), n || s)
    return e === t;
  if (n = he(e), s = he(t), n || s)
    return n && s ? B_(e, t) : !1;
  if (n = Be(e), s = Be(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !Hs(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function wc(e, t) {
  return e.findIndex((n) => Hs(n, t));
}
const Yp = (e) => !!(e && e.__v_isRef === !0), M = (e) => Ge(e) ? e : e == null ? "" : he(e) || Be(e) && (e.toString === Kp || !Ae(e.toString)) ? Yp(e) ? M(e.value) : JSON.stringify(e, Xp, 2) : String(e), Xp = (e, t) => Yp(t) ? Xp(e, t.value) : Ps(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Ba(s, r) + " =>"] = o, n),
    {}
  )
} : Lo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ba(n))
} : rn(t) ? Ba(t) : Be(t) && !he(t) && !zp(t) ? String(t) : t, Ba = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    rn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var ze = {};
function Yt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let mt;
class Gp {
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
    } else ze.NODE_ENV !== "production" && Yt("cannot run an inactive effect scope.");
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
function Qp(e) {
  return new Gp(e);
}
function Jp() {
  return mt;
}
function j_(e, t = !1) {
  mt ? mt.cleanups.push(e) : ze.NODE_ENV !== "production" && !t && Yt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let We;
const ja = /* @__PURE__ */ new WeakSet();
class Zp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, mt && mt.active && mt.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || th(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Su(this), nh(this);
    const t = We, n = sn;
    We = this, sn = !0;
    try {
      return this.fn();
    } finally {
      ze.NODE_ENV !== "production" && We !== this && Yt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), sh(this), We = t, sn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Cc(t);
      this.deps = this.depsTail = void 0, Su(this), this.onStop && this.onStop(), this.flags &= -2;
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
let eh = 0, ur, dr;
function th(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = dr, dr = e;
    return;
  }
  e.next = ur, ur = e;
}
function Ac() {
  eh++;
}
function Sc() {
  if (--eh > 0)
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
function nh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function sh(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Cc(s), $_(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Sl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (oh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function oh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wr) || (e.globalVersion = wr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Sl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = We, s = sn;
  We = e, sn = !0;
  try {
    nh(e);
    const o = e.fn(e._value);
    (t.version === 0 || xt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    We = n, sn = s, sh(e), e.flags &= -3;
  }
}
function Cc(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), ze.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Cc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function $_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let sn = !0;
const rh = [];
function an() {
  rh.push(sn), sn = !1;
}
function ln() {
  const e = rh.pop();
  sn = e === void 0 ? !0 : e;
}
function Su(e) {
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
let wr = 0;
class U_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ca {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, ze.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!We || !sn || We === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== We)
      n = this.activeLink = new U_(We, this), We.deps ? (n.prevDep = We.depsTail, We.depsTail.nextDep = n, We.depsTail = n) : We.deps = We.depsTail = n, ih(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = We.depsTail, n.nextDep = void 0, We.depsTail.nextDep = n, We.depsTail = n, We.deps === n && (We.deps = s);
    }
    return ze.NODE_ENV !== "production" && We.onTrack && We.onTrack(
      st(
        {
          effect: We
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, wr++, this.notify(t);
  }
  notify(t) {
    Ac();
    try {
      if (ze.NODE_ENV !== "production")
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
      Sc();
    }
  }
}
function ih(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ih(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), ze.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const $i = /* @__PURE__ */ new WeakMap(), Ms = Symbol(
  ze.NODE_ENV !== "production" ? "Object iterate" : ""
), Cl = Symbol(
  ze.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ar = Symbol(
  ze.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ut(e, t, n) {
  if (sn && We) {
    let s = $i.get(e);
    s || $i.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new ca()), o.map = s, o.key = n), ze.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function bn(e, t, n, s, o, r) {
  const i = $i.get(e);
  if (!i) {
    wr++;
    return;
  }
  const a = (c) => {
    c && (ze.NODE_ENV !== "production" ? c.trigger({
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
    const c = he(e), f = c && Ec(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((d, p) => {
        (p === "length" || p === Ar || !rn(p) && p >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Ar)), t) {
        case "add":
          c ? f && a(i.get("length")) : (a(i.get(Ms)), Ps(e) && a(i.get(Cl)));
          break;
        case "delete":
          c || (a(i.get(Ms)), Ps(e) && a(i.get(Cl)));
          break;
        case "set":
          Ps(e) && a(i.get(Ms));
          break;
      }
  }
  Sc();
}
function H_(e, t) {
  const n = $i.get(e);
  return n && n.get(t);
}
function so(e) {
  const t = Oe(e);
  return t === e ? t : (ut(t, "iterate", Ar), St(e) ? t : t.map(ht));
}
function ua(e) {
  return ut(e = Oe(e), "iterate", Ar), e;
}
const W_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return $a(this, Symbol.iterator, ht);
  },
  concat(...e) {
    return so(this).concat(
      ...e.map((t) => he(t) ? so(t) : t)
    );
  },
  entries() {
    return $a(this, "entries", (e) => (e[1] = ht(e[1]), e));
  },
  every(e, t) {
    return Rn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Rn(this, "filter", e, t, (n) => n.map(ht), arguments);
  },
  find(e, t) {
    return Rn(this, "find", e, t, ht, arguments);
  },
  findIndex(e, t) {
    return Rn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Rn(this, "findLast", e, t, ht, arguments);
  },
  findLastIndex(e, t) {
    return Rn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Rn(this, "forEach", e, t, void 0, arguments);
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
    return Rn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Go(this, "pop");
  },
  push(...e) {
    return Go(this, "push", e);
  },
  reduce(e, ...t) {
    return Cu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Cu(this, "reduceRight", e, t);
  },
  shift() {
    return Go(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Rn(this, "some", e, t, void 0, arguments);
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
    return $a(this, "values", ht);
  }
};
function $a(e, t, n) {
  const s = ua(e), o = s[t]();
  return s !== e && !St(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const K_ = Array.prototype;
function Rn(e, t, n, s, o, r) {
  const i = ua(e), a = i !== e && !St(e), c = i[t];
  if (c !== K_[t]) {
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
function Cu(e, t, n, s) {
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
  an(), Ac();
  const s = Oe(e)[t].apply(e, n);
  return Sc(), ln(), s;
}
const z_ = /* @__PURE__ */ Wn("__proto__,__v_isRef,__isVue"), ah = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rn)
);
function q_(e) {
  rn(e) || (e = String(e));
  const t = Oe(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
class lh {
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
      return s === (o ? r ? hh : ph : r ? fh : dh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = he(t);
    if (!o) {
      let c;
      if (i && (c = W_[n]))
        return c;
      if (n === "hasOwnProperty")
        return q_;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      qe(t) ? t : s
    );
    return (rn(n) ? ah.has(n) : z_(n)) || (o || ut(t, "get", n), r) ? a : qe(a) ? i && Ec(n) ? a : a.value : Be(a) ? o ? gh(a) : Ws(a) : a;
  }
}
class ch extends lh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const c = Tn(r);
      if (!St(s) && !Tn(s) && (r = Oe(r), s = Oe(s)), !he(t) && qe(r) && !qe(s))
        return c ? !1 : (r.value = s, !0);
    }
    const i = he(t) && Ec(n) ? Number(n) < t.length : Le(t, n), a = Reflect.set(
      t,
      n,
      s,
      qe(t) ? t : o
    );
    return t === Oe(o) && (i ? xt(s, r) && bn(t, "set", n, s, r) : bn(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = Le(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && bn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!rn(n) || !ah.has(n)) && ut(t, "has", n), s;
  }
  ownKeys(t) {
    return ut(
      t,
      "iterate",
      he(t) ? "length" : Ms
    ), Reflect.ownKeys(t);
  }
}
class uh extends lh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return ze.NODE_ENV !== "production" && Yt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return ze.NODE_ENV !== "production" && Yt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Y_ = /* @__PURE__ */ new ch(), X_ = /* @__PURE__ */ new uh(), G_ = /* @__PURE__ */ new ch(!0), Q_ = /* @__PURE__ */ new uh(!0), Ol = (e) => e, si = (e) => Reflect.getPrototypeOf(e);
function J_(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = Oe(o), i = Ps(r), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, f = o[e](...s), u = n ? Ol : t ? Ui : ht;
    return !t && ut(
      r,
      "iterate",
      c ? Cl : Ms
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
    if (ze.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Yt(
        `${Us(e)} operation ${n}failed: target is readonly.`,
        Oe(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Z_(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = Oe(r), a = Oe(o);
      e || (xt(o, a) && ut(i, "get", o), ut(i, "get", a));
      const { has: c } = si(i), f = t ? Ol : e ? Ui : ht;
      if (c.call(i, o))
        return f(r.get(o));
      if (c.call(i, a))
        return f(r.get(a));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ut(Oe(o), "iterate", Ms), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = Oe(r), a = Oe(o);
      return e || (xt(o, a) && ut(i, "has", o), ut(i, "has", a)), o === a ? r.has(o) : r.has(o) || r.has(a);
    },
    forEach(o, r) {
      const i = this, a = i.__v_raw, c = Oe(a), f = t ? Ol : e ? Ui : ht;
      return !e && ut(c, "iterate", Ms), a.forEach((u, d) => o.call(r, f(u), f(d), i));
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
        !t && !St(o) && !Tn(o) && (o = Oe(o));
        const r = Oe(this);
        return si(r).has.call(r, o) || (r.add(o), bn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !St(r) && !Tn(r) && (r = Oe(r));
        const i = Oe(this), { has: a, get: c } = si(i);
        let f = a.call(i, o);
        f ? ze.NODE_ENV !== "production" && Ou(i, a, o) : (o = Oe(o), f = a.call(i, o));
        const u = c.call(i, o);
        return i.set(o, r), f ? xt(r, u) && bn(i, "set", o, r, u) : bn(i, "add", o, r), this;
      },
      delete(o) {
        const r = Oe(this), { has: i, get: a } = si(r);
        let c = i.call(r, o);
        c ? ze.NODE_ENV !== "production" && Ou(r, i, o) : (o = Oe(o), c = i.call(r, o));
        const f = a ? a.call(r, o) : void 0, u = r.delete(o);
        return c && bn(r, "delete", o, void 0, f), u;
      },
      clear() {
        const o = Oe(this), r = o.size !== 0, i = ze.NODE_ENV !== "production" ? Ps(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
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
    n[o] = J_(o, e, t);
  }), n;
}
function da(e, t) {
  const n = Z_(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Le(n, o) && o in s ? n : s,
    o,
    r
  );
}
const ey = {
  get: /* @__PURE__ */ da(!1, !1)
}, ty = {
  get: /* @__PURE__ */ da(!1, !0)
}, ny = {
  get: /* @__PURE__ */ da(!0, !1)
}, sy = {
  get: /* @__PURE__ */ da(!0, !0)
};
function Ou(e, t, n) {
  const s = Oe(n);
  if (s !== n && t.call(e, s)) {
    const o = bc(e);
    Yt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const dh = /* @__PURE__ */ new WeakMap(), fh = /* @__PURE__ */ new WeakMap(), ph = /* @__PURE__ */ new WeakMap(), hh = /* @__PURE__ */ new WeakMap();
function oy(e) {
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
function ry(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : oy(bc(e));
}
function Ws(e) {
  return Tn(e) ? e : fa(
    e,
    !1,
    Y_,
    ey,
    dh
  );
}
function mh(e) {
  return fa(
    e,
    !1,
    G_,
    ty,
    fh
  );
}
function gh(e) {
  return fa(
    e,
    !0,
    X_,
    ny,
    ph
  );
}
function wn(e) {
  return fa(
    e,
    !0,
    Q_,
    sy,
    hh
  );
}
function fa(e, t, n, s, o) {
  if (!Be(e))
    return ze.NODE_ENV !== "production" && Yt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = ry(e);
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
  return Tn(e) ? on(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Tn(e) {
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
  return !Le(e, "__v_skip") && Object.isExtensible(e) && Er(e, "__v_skip", !0), e;
}
const ht = (e) => Be(e) ? Ws(e) : e, Ui = (e) => Be(e) ? gh(e) : e;
function qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function U(e) {
  return vh(e, !1);
}
function iy(e) {
  return vh(e, !0);
}
function vh(e, t) {
  return qe(e) ? e : new ay(e, t);
}
class ay {
  constructor(t, n) {
    this.dep = new ca(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Oe(t), this._value = n ? t : ht(t), this.__v_isShallow = n;
  }
  get value() {
    return ze.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || St(t) || Tn(t);
    t = s ? t : Oe(t), xt(t, n) && (this._rawValue = t, this._value = s ? t : ht(t), ze.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function oe(e) {
  return qe(e) ? e.value : e;
}
const ly = {
  get: (e, t, n) => t === "__v_raw" ? e : oe(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return qe(o) && !qe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function _h(e) {
  return on(e) ? e : new Proxy(e, ly);
}
class cy {
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
function uy(e) {
  return new cy(e);
}
function cn(e) {
  ze.NODE_ENV !== "production" && !Sr(e) && Yt("toRefs() expects a reactive object but received a plain one.");
  const t = he(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = yh(e, n);
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
    return H_(Oe(this._object), this._key);
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
function yi(e, t, n) {
  return qe(e) ? e : Ae(e) ? new fy(e) : Be(e) && arguments.length > 1 ? yh(e, t, n) : U(e);
}
function yh(e, t, n) {
  const s = e[t];
  return qe(s) ? s : new dy(e, t, n);
}
class py {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ca(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    We !== this)
      return th(this, !0), !0;
  }
  get value() {
    const t = ze.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return oh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : ze.NODE_ENV !== "production" && Yt("Write operation failed: computed value is readonly");
  }
}
function hy(e, t, n = !1) {
  let s, o;
  return Ae(e) ? s = e : (s = e.get, o = e.set), new py(s, o, n);
}
const ri = {}, Hi = /* @__PURE__ */ new WeakMap();
let Cs;
function my(e, t = !1, n = Cs) {
  if (n) {
    let s = Hi.get(n);
    s || Hi.set(n, s = []), s.push(e);
  } else ze.NODE_ENV !== "production" && !t && Yt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function gy(e, t, n = Fe) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: a, call: c } = n, f = (R) => {
    (n.onWarn || Yt)(
      "Invalid watch source: ",
      R,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (R) => o ? R : St(R) || o === !1 || o === 0 ? Fn(R, 1) : Fn(R);
  let d, p, h, g, v = !1, _ = !1;
  if (qe(e) ? (p = () => e.value, v = St(e)) : on(e) ? (p = () => u(e), v = !0) : he(e) ? (_ = !0, v = e.some((R) => on(R) || St(R)), p = () => e.map((R) => {
    if (qe(R))
      return R.value;
    if (on(R))
      return u(R);
    if (Ae(R))
      return c ? c(R, 2) : R();
    ze.NODE_ENV !== "production" && f(R);
  })) : Ae(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (h) {
      an();
      try {
        h();
      } finally {
        ln();
      }
    }
    const R = Cs;
    Cs = d;
    try {
      return c ? c(e, 3, [g]) : e(g);
    } finally {
      Cs = R;
    }
  } : (p = dt, ze.NODE_ENV !== "production" && f(e)), t && o) {
    const R = p, O = o === !0 ? 1 / 0 : o;
    p = () => Fn(R(), O);
  }
  const y = Jp(), b = () => {
    d.stop(), y && y.active && _c(y.effects, d);
  };
  if (r && t) {
    const R = t;
    t = (...O) => {
      R(...O), b();
    };
  }
  let m = _ ? new Array(e.length).fill(ri) : ri;
  const T = (R) => {
    if (!(!(d.flags & 1) || !d.dirty && !R))
      if (t) {
        const O = d.run();
        if (o || v || (_ ? O.some((x, k) => xt(x, m[k])) : xt(O, m))) {
          h && h();
          const x = Cs;
          Cs = d;
          try {
            const k = [
              O,
              // pass undefined as the old value when it's changed for the first time
              m === ri ? void 0 : _ && m[0] === ri ? [] : m,
              g
            ];
            m = O, c ? c(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            );
          } finally {
            Cs = x;
          }
        }
      } else
        d.run();
  };
  return a && a(T), d = new Zp(p), d.scheduler = i ? () => i(T, !1) : T, g = (R) => my(R, !1, d), h = d.onStop = () => {
    const R = Hi.get(d);
    if (R) {
      if (c)
        c(R, 4);
      else
        for (const O of R) O();
      Hi.delete(d);
    }
  }, ze.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? T(!0) : m = d.run() : i ? i(T.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function Fn(e, t = 1 / 0, n) {
  if (t <= 0 || !Be(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, qe(e))
    Fn(e.value, t, n);
  else if (he(e))
    for (let s = 0; s < e.length; s++)
      Fn(e[s], t, n);
  else if (Lo(e) || Ps(e))
    e.forEach((s) => {
      Fn(s, t, n);
    });
  else if (zp(e)) {
    for (const s in e)
      Fn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Fn(e[s], t, n);
  }
  return e;
}
var P = {};
const Vs = [];
function bi(e) {
  Vs.push(e);
}
function Ei() {
  Vs.pop();
}
let Ha = !1;
function Z(e, ...t) {
  if (Ha) return;
  Ha = !0, an();
  const n = Vs.length ? Vs[Vs.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = vy();
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
`, ..._y(o)), console.warn(...r);
  }
  ln(), Ha = !1;
}
function vy() {
  let e = Vs[Vs.length - 1];
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${ya(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...by(e.props), r] : [o + r];
}
function by(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...bh(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function bh(e, t, n) {
  return Ge(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : qe(t) ? (t = bh(e, Oe(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Ae(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Oe(t), n ? t : [`${e}=`, t]);
}
function Ey(e, t) {
  P.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? Z(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && Z(`${t} is NaN - the duration expression might be incorrect.`));
}
const Oc = {
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
    $r(o, t, n);
  }
}
function un(e, t, n, s) {
  if (Ae(e)) {
    const o = Fo(e, t, n, s);
    return o && yc(o) && o.catch((r) => {
      $r(r, t, n);
    }), o;
  }
  if (he(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(un(e[r], t, n, s));
    return o;
  } else P.NODE_ENV !== "production" && Z(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function $r(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Fe;
  if (t) {
    let a = t.parent;
    const c = t.proxy, f = P.NODE_ENV !== "production" ? Oc[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
  if (P.NODE_ENV !== "production") {
    const r = Oc[t];
    if (n && bi(n), Z(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Ei(), s)
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
const bo = [];
let ts = null, fo = 0;
const Eh = /* @__PURE__ */ Promise.resolve();
let Wi = null;
const Ay = 100;
function Ks(e) {
  const t = Wi || Eh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sy(e) {
  let t = yn + 1, n = wt.length;
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
    !(e.flags & 2) && t >= Cr(n) ? wt.push(e) : wt.splice(Sy(t), 0, e), e.flags |= 1, wh();
  }
}
function wh() {
  Wi || (Wi = Eh.then(Ch));
}
function Ah(e) {
  he(e) ? bo.push(...e) : ts && e.id === -1 ? ts.splice(fo + 1, 0, e) : e.flags & 1 || (bo.push(e), e.flags |= 1), wh();
}
function Tu(e, t, n = yn + 1) {
  for (P.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < wt.length; n++) {
    const s = wt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || P.NODE_ENV !== "production" && Tc(t, s))
        continue;
      wt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Sh(e) {
  if (bo.length) {
    const t = [...new Set(bo)].sort(
      (n, s) => Cr(n) - Cr(s)
    );
    if (bo.length = 0, ts) {
      ts.push(...t);
      return;
    }
    for (ts = t, P.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fo = 0; fo < ts.length; fo++) {
      const n = ts[fo];
      P.NODE_ENV !== "production" && Tc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ts = null, fo = 0;
  }
}
const Cr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ch(e) {
  P.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = P.NODE_ENV !== "production" ? (n) => Tc(e, n) : dt;
  try {
    for (yn = 0; yn < wt.length; yn++) {
      const n = wt[yn];
      if (n && !(n.flags & 8)) {
        if (P.NODE_ENV !== "production" && t(n))
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
    yn = -1, wt.length = 0, Sh(e), Wi = null, (wt.length || bo.length) && Ch(e);
  }
}
function Tc(e, t) {
  const n = e.get(t) || 0;
  if (n > Ay) {
    const s = t.i, o = s && Pc(s.type);
    return $r(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let tn = !1;
const wi = /* @__PURE__ */ new Map();
P.NODE_ENV !== "production" && (jr().__VUE_HMR_RUNTIME__ = {
  createRecord: Wa(Oh),
  rerender: Wa(Ty),
  reload: Wa(Ny)
});
const zs = /* @__PURE__ */ new Map();
function Cy(e) {
  const t = e.type.__hmrId;
  let n = zs.get(t);
  n || (Oh(t, e.type), n = zs.get(t)), n.instances.add(e);
}
function Oy(e) {
  zs.get(e.type.__hmrId).instances.delete(e);
}
function Oh(e, t) {
  return zs.has(e) ? !1 : (zs.set(e, {
    initialDef: Ki(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ki(e) {
  return gm(e) ? e.__vccOpts : e;
}
function Ty(e, t) {
  const n = zs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Ki(s.type).render = t), s.renderCache = [], tn = !0, s.update(), tn = !1;
  }));
}
function Ny(e, t) {
  const n = zs.get(e);
  if (!n) return;
  t = Ki(t), Nu(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Ki(r.type);
    let a = wi.get(i);
    a || (i !== n.initialDef && Nu(i, t), wi.set(i, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? pa(() => {
      tn = !0, r.parent.update(), tn = !1, a.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Ah(() => {
    wi.clear();
  });
}
function Nu(e, t) {
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
let En, rr = [], Tl = !1;
function Ur(e, ...t) {
  En ? En.emit(e, ...t) : Tl || rr.push({ event: e, args: t });
}
function Th(e, t) {
  var n, s;
  En = e, En ? (En.enabled = !0, rr.forEach(({ event: o, args: r }) => En.emit(o, ...r)), rr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Th(r, t);
  }), setTimeout(() => {
    En || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Tl = !0, rr = []);
  }, 3e3)) : (Tl = !0, rr = []);
}
function Dy(e, t) {
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
const ky = /* @__PURE__ */ Nc(
  "component:added"
  /* COMPONENT_ADDED */
), Nh = /* @__PURE__ */ Nc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ry = /* @__PURE__ */ Nc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Iy = (e) => {
  En && typeof En.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !En.cleanupBuffer(e) && Ry(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Nc(e) {
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
const Py = /* @__PURE__ */ Dh(
  "perf:start"
  /* PERFORMANCE_START */
), My = /* @__PURE__ */ Dh(
  "perf:end"
  /* PERFORMANCE_END */
);
function Dh(e) {
  return (t, n, s) => {
    Ur(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Vy(e, t, n) {
  Ur(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let rt = null, xh = null;
function zi(e) {
  const t = rt;
  return rt = e, xh = e && e.type.__scopeId || null, t;
}
function be(e, t = rt, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ku(-1);
    const r = zi(t);
    let i;
    try {
      i = e(...o);
    } finally {
      zi(r), s._d && Ku(1);
    }
    return P.NODE_ENV !== "production" && Nh(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function kh(e) {
  A_(e) && Z("Do not use built-in directive ids as custom directive id: " + e);
}
function nt(e, t) {
  if (rt === null)
    return P.NODE_ENV !== "production" && Z("withDirectives can only be used inside render functions."), e;
  const n = _a(rt), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, a, c = Fe] = t[o];
    r && (Ae(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Fn(i), s.push({
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
function bs(e, t, n, s) {
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
const Rh = Symbol("_vte"), Ih = (e) => e.__isTeleport, Ls = (e) => e && (e.disabled || e.disabled === ""), Du = (e) => e && (e.defer || e.defer === ""), xu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ku = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Nl = (e, t) => {
  const n = e && e.to;
  if (Ge(n))
    if (t) {
      const s = t(n);
      return P.NODE_ENV !== "production" && !s && !Ls(e) && Z(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return P.NODE_ENV !== "production" && Z(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return P.NODE_ENV !== "production" && !n && !Ls(e) && Z(`Invalid Teleport target: ${n}`), n;
}, Ph = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, a, c, f) {
    const {
      mc: u,
      pc: d,
      pbc: p,
      o: { insert: h, querySelector: g, createText: v, createComment: _ }
    } = f, y = Ls(t.props);
    let { shapeFlag: b, children: m, dynamicChildren: T } = t;
    if (P.NODE_ENV !== "production" && tn && (c = !1, T = null), e == null) {
      const R = t.el = P.NODE_ENV !== "production" ? _("teleport start") : v(""), O = t.anchor = P.NODE_ENV !== "production" ? _("teleport end") : v("");
      h(R, n, s), h(O, n, s);
      const x = (S, w) => {
        b & 16 && (o && o.isCE && (o.ce._teleportTarget = S), u(
          m,
          S,
          w,
          o,
          r,
          i,
          a,
          c
        ));
      }, k = () => {
        const S = t.target = Nl(t.props, g), w = Mh(S, t, v, h);
        S ? (i !== "svg" && xu(S) ? i = "svg" : i !== "mathml" && ku(S) && (i = "mathml"), y || (x(S, w), Ai(t, !1))) : P.NODE_ENV !== "production" && !y && Z(
          "Invalid Teleport target on mount:",
          S,
          `(${typeof S})`
        );
      };
      y && (x(n, O), Ai(t, !0)), Du(t.props) ? (t.el.__isMounted = !1, Et(() => {
        k(), delete t.el.__isMounted;
      }, r)) : k();
    } else {
      if (Du(t.props) && e.el.__isMounted === !1) {
        Et(() => {
          Ph.process(
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
      const R = t.anchor = e.anchor, O = t.target = e.target, x = t.targetAnchor = e.targetAnchor, k = Ls(e.props), S = k ? n : O, w = k ? R : x;
      if (i === "svg" || xu(O) ? i = "svg" : (i === "mathml" || ku(O)) && (i = "mathml"), T ? (p(
        e.dynamicChildren,
        T,
        S,
        o,
        r,
        i,
        a
      ), pr(e, t, P.NODE_ENV === "production")) : c || d(
        e,
        t,
        S,
        w,
        o,
        r,
        i,
        a,
        !1
      ), y)
        k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ii(
          t,
          n,
          R,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = t.target = Nl(
          t.props,
          g
        );
        D ? ii(
          t,
          D,
          null,
          f,
          0
        ) : P.NODE_ENV !== "production" && Z(
          "Invalid Teleport target on update:",
          O,
          `(${typeof O})`
        );
      } else k && ii(
        t,
        O,
        x,
        f,
        1
      );
      Ai(t, y);
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
      const h = r || !Ls(p);
      for (let g = 0; g < a.length; g++) {
        const v = a[g];
        s(
          v,
          t,
          n,
          h,
          !!v.dynamicChildren
        );
      }
    }
  },
  move: ii,
  hydrate: Ly
};
function ii(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: c, children: f, props: u } = e, d = r === 2;
  if (d && s(i, t, n), (!d || Ls(u)) && c & 16)
    for (let p = 0; p < f.length; p++)
      o(
        f[p],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function Ly(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: a, querySelector: c, insert: f, createText: u }
}, d) {
  const p = t.target = Nl(
    t.props,
    c
  );
  if (p) {
    const h = Ls(t.props), g = p._lpa || p.firstChild;
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
        ), t.targetStart = g, t.targetAnchor = g && i(g);
      else {
        t.anchor = i(e);
        let v = g;
        for (; v; ) {
          if (v && v.nodeType === 8) {
            if (v.data === "teleport start anchor")
              t.targetStart = v;
            else if (v.data === "teleport anchor") {
              t.targetAnchor = v, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          v = i(v);
        }
        t.targetAnchor || Mh(p, t, u, f), d(
          g && i(g),
          t,
          p,
          n,
          s,
          o,
          r
        );
      }
    Ai(t, h);
  }
  return t.anchor && i(t.anchor);
}
const Hr = Ph;
function Ai(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Mh(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[Rh] = r, e && (s(o, e), s(r, e)), r;
}
const ns = Symbol("_leaveCb"), ai = Symbol("_enterCb");
function Fy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Tt(() => {
    e.isMounted = !0;
  }), Hh(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ht = [Function, Array], Vh = {
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
}, Lh = (e) => {
  const t = e.subTree;
  return t.component ? Lh(t.component) : t;
}, By = {
  name: "BaseTransition",
  props: Vh,
  setup(e, { slots: t }) {
    const n = zn(), s = Fy();
    return () => {
      const o = t.default && jh(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Fh(o), i = Oe(e), { mode: a } = i;
      if (P.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && Z(`invalid <transition> mode: ${a}`), s.isLeaving)
        return Ka(r);
      const c = Ru(r);
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
      c.type !== at && Or(c, f);
      let u = n.subTree && Ru(n.subTree);
      if (u && u.type !== at && !Ns(c, u) && Lh(n).type !== at) {
        let d = Dl(
          u,
          i,
          s,
          n
        );
        if (Or(u, d), a === "out-in" && c.type !== at)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, Ka(r);
        a === "in-out" && c.type !== at ? d.delayLeave = (p, h, g) => {
          const v = Bh(
            s,
            u
          );
          v[String(u.key)] = u, p[ns] = () => {
            h(), p[ns] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            g(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Fh(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== at) {
        if (P.NODE_ENV !== "production" && n) {
          Z(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, P.NODE_ENV === "production") break;
      }
  }
  return t;
}
const jy = By;
function Bh(e, t) {
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
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: g,
    onLeaveCancelled: v,
    onBeforeAppear: _,
    onAppear: y,
    onAfterAppear: b,
    onAppearCancelled: m
  } = t, T = String(e.key), R = Bh(n, e), O = (S, w) => {
    S && un(
      S,
      s,
      9,
      w
    );
  }, x = (S, w) => {
    const D = w[1];
    O(S, w), he(S) ? S.every((A) => A.length <= 1) && D() : S.length <= 1 && D();
  }, k = {
    mode: i,
    persisted: a,
    beforeEnter(S) {
      let w = c;
      if (!n.isMounted)
        if (r)
          w = _ || c;
        else
          return;
      S[ns] && S[ns](
        !0
        /* cancelled */
      );
      const D = R[T];
      D && Ns(e, D) && D.el[ns] && D.el[ns](), O(w, [S]);
    },
    enter(S) {
      let w = f, D = u, A = d;
      if (!n.isMounted)
        if (r)
          w = y || f, D = b || u, A = m || d;
        else
          return;
      let F = !1;
      const ce = S[ai] = (Y) => {
        F || (F = !0, Y ? O(A, [S]) : O(D, [S]), k.delayedLeave && k.delayedLeave(), S[ai] = void 0);
      };
      w ? x(w, [S, ce]) : ce();
    },
    leave(S, w) {
      const D = String(e.key);
      if (S[ai] && S[ai](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return w();
      O(p, [S]);
      let A = !1;
      const F = S[ns] = (ce) => {
        A || (A = !0, w(), ce ? O(v, [S]) : O(g, [S]), S[ns] = void 0, R[D] === e && delete R[D]);
      };
      R[D] = e, h ? x(h, [S, F]) : F();
    },
    clone(S) {
      const w = Dl(
        S,
        t,
        n,
        s,
        o
      );
      return o && o(w), w;
    }
  };
  return k;
}
function Ka(e) {
  if (Wr(e))
    return e = Nn(e), e.children = null, e;
}
function Ru(e) {
  if (!Wr(e))
    return Ih(e.type) && e.children ? Fh(e.children) : e;
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
function jh(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === Se ? (i.patchFlag & 128 && o++, s = s.concat(
      jh(i.children, t, a)
    )) : (t || i.type !== at) && s.push(a != null ? Nn(i, { key: a }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  return Ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    st({ name: e.name }, t, { setup: e })
  ) : e;
}
function $h(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const $y = /* @__PURE__ */ new WeakSet();
function fr(e, t, n, s, o = !1) {
  if (he(e)) {
    e.forEach(
      (g, v) => fr(
        g,
        t && (he(t) ? t[v] : t),
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
  if (P.NODE_ENV !== "production" && !a) {
    Z(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === Fe ? a.refs = {} : a.refs, d = a.setupState, p = Oe(d), h = d === Fe ? () => !1 : (g) => P.NODE_ENV !== "production" && (Le(p, g) && !qe(p[g]) && Z(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), $y.has(p[g])) ? !1 : Le(p, g);
  if (f != null && f !== c && (Ge(f) ? (u[f] = null, h(f) && (d[f] = null)) : qe(f) && (f.value = null)), Ae(c))
    Fo(c, a, 12, [i, u]);
  else {
    const g = Ge(c), v = qe(c);
    if (g || v) {
      const _ = () => {
        if (e.f) {
          const y = g ? h(c) ? d[c] : u[c] : c.value;
          o ? he(y) && _c(y, r) : he(y) ? y.includes(r) || y.push(r) : g ? (u[c] = [r], h(c) && (d[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else g ? (u[c] = i, h(c) && (d[c] = i)) : v ? (c.value = i, e.k && (u[e.k] = i)) : P.NODE_ENV !== "production" && Z("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (_.id = -1, Et(_, n)) : _();
    } else P.NODE_ENV !== "production" && Z("Invalid template ref type:", c, `(${typeof c})`);
  }
}
jr().requestIdleCallback;
jr().cancelIdleCallback;
const Eo = (e) => !!e.type.__asyncLoader, Wr = (e) => e.type.__isKeepAlive;
function Uy(e, t) {
  Uh(e, "a", t);
}
function Hy(e, t) {
  Uh(e, "da", t);
}
function Uh(e, t, n = ct) {
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
      Wr(o.parent.vnode) && Wy(s, t, n, o), o = o.parent;
  }
}
function Wy(e, t, n, s) {
  const o = ha(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Kr(() => {
    _c(s[t], o);
  }, n);
}
function ha(e, t, n = ct, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      an();
      const a = qr(n), c = un(t, n, e, i);
      return a(), ln(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (P.NODE_ENV !== "production") {
    const o = Ss(Oc[e].replace(/ hook$/, ""));
    Z(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Kn = (e) => (t, n = ct) => {
  (!Nr || e === "sp") && ha(e, (...s) => t(...s), n);
}, Ky = Kn("bm"), Tt = Kn("m"), zy = Kn(
  "bu"
), qy = Kn("u"), Hh = Kn(
  "bum"
), Kr = Kn("um"), Yy = Kn(
  "sp"
), Xy = Kn("rtg"), Gy = Kn("rtc");
function Qy(e, t = ct) {
  ha("ec", e, t);
}
const xl = "components", Jy = "directives";
function Qe(e, t) {
  return Wh(xl, e, !0, t) || e;
}
const Zy = Symbol.for("v-ndc");
function eb(e) {
  return Wh(Jy, e);
}
function Wh(e, t, n = !0, s = !1) {
  const o = rt || ct;
  if (o) {
    const r = o.type;
    if (e === xl) {
      const a = Pc(
        r,
        !1
      );
      if (a && (a === t || a === _t(t) || a === Us(_t(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Iu(o[e] || r[e], t) || // global registration
      Iu(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (P.NODE_ENV !== "production" && n && !i) {
      const a = e === xl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      Z(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else P.NODE_ENV !== "production" && Z(
    `resolve${Us(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Iu(e, t) {
  return e && (e[t] || e[_t(t)] || e[Us(_t(t))]);
}
function Je(e, t, n, s) {
  let o;
  const r = n, i = he(e);
  if (i || Ge(e)) {
    const a = i && on(e);
    let c = !1, f = !1;
    a && (c = !St(e), f = Tn(e), e = ua(e)), o = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      o[u] = t(
        c ? f ? Ui(ht(e[u])) : ht(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    P.NODE_ENV !== "production" && !Number.isInteger(e) && Z(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, r);
  } else if (Be(e))
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
function Pe(e, t, n = {}, s, o) {
  if (rt.ce || rt.parent && Eo(rt.parent) && rt.parent.ce)
    return t !== "default" && (n.name = t), N(), et(
      Se,
      null,
      [fe("slot", n, s && s())],
      64
    );
  let r = e[t];
  P.NODE_ENV !== "production" && r && r.length > 1 && (Z(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), N();
  const i = r && Kh(r(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = et(
    Se,
    {
      key: (a && !rn(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), r && r._c && (r._d = !0), c;
}
function Kh(e) {
  return e.some((t) => qs(t) ? !(t.type === at || t.type === Se && !Kh(t.children)) : !0) ? e : null;
}
const kl = (e) => e ? hm(e) ? _a(e) : kl(e.parent) : null, Fs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ st(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => P.NODE_ENV !== "production" ? wn(e.props) : e.props,
    $attrs: (e) => P.NODE_ENV !== "production" ? wn(e.attrs) : e.attrs,
    $slots: (e) => P.NODE_ENV !== "production" ? wn(e.slots) : e.slots,
    $refs: (e) => P.NODE_ENV !== "production" ? wn(e.refs) : e.refs,
    $parent: (e) => kl(e.parent),
    $root: (e) => kl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      pa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ks.bind(e.proxy)),
    $watch: (e) => Pb.bind(e)
  })
), Dc = (e) => e === "_" || e === "$", za = (e, t) => e !== Fe && !e.__isScriptSetup && Le(e, t), zh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: c } = e;
    if (P.NODE_ENV !== "production" && t === "__isVue")
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
        if (o !== Fe && Le(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Le(f, t)
        )
          return i[t] = 3, r[t];
        if (n !== Fe && Le(n, t))
          return i[t] = 4, n[t];
        Rl && (i[t] = 0);
      }
    }
    const u = Fs[t];
    let d, p;
    if (u)
      return t === "$attrs" ? (ut(e.attrs, "get", ""), P.NODE_ENV !== "production" && Xi()) : P.NODE_ENV !== "production" && t === "$slots" && ut(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Fe && Le(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, Le(p, t)
    )
      return p[t];
    P.NODE_ENV !== "production" && rt && (!Ge(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Fe && Dc(t[0]) && Le(o, t) ? Z(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === rt && Z(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return za(o, t) ? (o[t] = n, !0) : P.NODE_ENV !== "production" && o.__isScriptSetup && Le(o, t) ? (Z(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Fe && Le(s, t) ? (s[t] = n, !0) : Le(e.props, t) ? (P.NODE_ENV !== "production" && Z(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (P.NODE_ENV !== "production" && Z(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (P.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let a;
    return !!n[i] || e !== Fe && Le(e, i) || za(t, i) || (a = r[0]) && Le(a, i) || Le(s, i) || Le(Fs, i) || Le(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
P.NODE_ENV !== "production" && (zh.ownKeys = (e) => (Z(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function tb(e) {
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
      set: dt
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
      set: dt
    });
  });
}
function sb(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Oe(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Dc(s[0])) {
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
function Pu(e) {
  return he(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ob() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? Z(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Rl = !0;
function rb(e) {
  const t = Yh(e), n = e.proxy, s = e.ctx;
  Rl = !1, t.beforeCreate && Mu(t.beforeCreate, e, "bc");
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
    updated: g,
    activated: v,
    deactivated: _,
    beforeDestroy: y,
    beforeUnmount: b,
    destroyed: m,
    unmounted: T,
    render: R,
    renderTracked: O,
    renderTriggered: x,
    errorCaptured: k,
    serverPrefetch: S,
    // public API
    expose: w,
    inheritAttrs: D,
    // assets
    components: A,
    directives: F,
    filters: ce
  } = t, Y = P.NODE_ENV !== "production" ? ob() : null;
  if (P.NODE_ENV !== "production") {
    const [K] = e.propsOptions;
    if (K)
      for (const le in K)
        Y("Props", le);
  }
  if (f && ib(f, s, Y), i)
    for (const K in i) {
      const le = i[K];
      Ae(le) ? (P.NODE_ENV !== "production" ? Object.defineProperty(s, K, {
        value: le.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[K] = le.bind(n), P.NODE_ENV !== "production" && Y("Methods", K)) : P.NODE_ENV !== "production" && Z(
        `Method "${K}" has type "${typeof le}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    P.NODE_ENV !== "production" && !Ae(o) && Z(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const K = o.call(n, n);
    if (P.NODE_ENV !== "production" && yc(K) && Z(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Be(K))
      P.NODE_ENV !== "production" && Z("data() should return an object.");
    else if (e.data = Ws(K), P.NODE_ENV !== "production")
      for (const le in K)
        Y("Data", le), Dc(le[0]) || Object.defineProperty(s, le, {
          configurable: !0,
          enumerable: !0,
          get: () => K[le],
          set: dt
        });
  }
  if (Rl = !0, r)
    for (const K in r) {
      const le = r[K], ye = Ae(le) ? le.bind(n, n) : Ae(le.get) ? le.get.bind(n, n) : dt;
      P.NODE_ENV !== "production" && ye === dt && Z(`Computed property "${K}" has no getter.`);
      const Ze = !Ae(le) && Ae(le.set) ? le.set.bind(n) : P.NODE_ENV !== "production" ? () => {
        Z(
          `Write operation failed: computed property "${K}" is readonly.`
        );
      } : dt, H = $({
        get: ye,
        set: Ze
      });
      Object.defineProperty(s, K, {
        enumerable: !0,
        configurable: !0,
        get: () => H.value,
        set: (se) => H.value = se
      }), P.NODE_ENV !== "production" && Y("Computed", K);
    }
  if (a)
    for (const K in a)
      qh(a[K], s, n, K);
  if (c) {
    const K = Ae(c) ? c.call(n) : c;
    Reflect.ownKeys(K).forEach((le) => {
      Si(le, K[le]);
    });
  }
  u && Mu(u, e, "c");
  function re(K, le) {
    he(le) ? le.forEach((ye) => K(ye.bind(n))) : le && K(le.bind(n));
  }
  if (re(Ky, d), re(Tt, p), re(zy, h), re(qy, g), re(Uy, v), re(Hy, _), re(Qy, k), re(Gy, O), re(Xy, x), re(Hh, b), re(Kr, T), re(Yy, S), he(w))
    if (w.length) {
      const K = e.exposed || (e.exposed = {});
      w.forEach((le) => {
        Object.defineProperty(K, le, {
          get: () => n[le],
          set: (ye) => n[le] = ye
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === dt && (e.render = R), D != null && (e.inheritAttrs = D), A && (e.components = A), F && (e.directives = F), S && $h(e);
}
function ib(e, t, n = dt) {
  he(e) && (e = Il(e));
  for (const s in e) {
    const o = e[s];
    let r;
    Be(o) ? "default" in o ? r = Ft(
      o.from || s,
      o.default,
      !0
    ) : r = Ft(o.from || s) : r = Ft(o), qe(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, P.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Mu(e, t, n) {
  un(
    he(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function qh(e, t, n, s) {
  let o = s.includes(".") ? rm(n, s) : () => n[s];
  if (Ge(e)) {
    const r = t[e];
    Ae(r) ? Rt(o, r) : P.NODE_ENV !== "production" && Z(`Invalid watch handler specified by key "${e}"`, r);
  } else if (Ae(e))
    Rt(o, e.bind(n));
  else if (Be(e))
    if (he(e))
      e.forEach((r) => qh(r, t, n, s));
    else {
      const r = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ae(r) ? Rt(o, r, e) : P.NODE_ENV !== "production" && Z(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else P.NODE_ENV !== "production" && Z(`Invalid watch option: "${s}"`, e);
}
function Yh(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (f) => qi(c, f, i, !0)
  ), qi(c, t, i)), Be(t) && r.set(t, c), c;
}
function qi(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && qi(e, r, n, !0), o && o.forEach(
    (i) => qi(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      P.NODE_ENV !== "production" && Z(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = ab[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const ab = {
  data: Vu,
  props: Lu,
  emits: Lu,
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
  watch: cb,
  // provide / inject
  provide: Vu,
  inject: lb
};
function Vu(e, t) {
  return t ? e ? function() {
    return st(
      Ae(e) ? e.call(this, this) : e,
      Ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function lb(e, t) {
  return ir(Il(e), Il(t));
}
function Il(e) {
  if (he(e)) {
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
function Lu(e, t) {
  return e ? he(e) && he(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : st(
    /* @__PURE__ */ Object.create(null),
    Pu(e),
    Pu(t ?? {})
  ) : t;
}
function cb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = st(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = bt(e[s], t[s]);
  return n;
}
function Xh() {
  return {
    app: null,
    config: {
      isNativeTag: E_,
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
    Ae(s) || (s = st({}, s)), o != null && !Be(o) && (P.NODE_ENV !== "production" && Z("root props passed to app.mount() must be an object."), o = null);
    const r = Xh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const f = r.app = {
      _uid: ub++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Xu,
      get config() {
        return r.config;
      },
      set config(u) {
        P.NODE_ENV !== "production" && Z(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return i.has(u) ? P.NODE_ENV !== "production" && Z("Plugin has already been applied to target app.") : u && Ae(u.install) ? (i.add(u), u.install(f, ...d)) : Ae(u) ? (i.add(u), u(f, ...d)) : P.NODE_ENV !== "production" && Z(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? P.NODE_ENV !== "production" && Z(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, d) {
        return P.NODE_ENV !== "production" && Fl(u, r.config), d ? (P.NODE_ENV !== "production" && r.components[u] && Z(`Component "${u}" has already been registered in target app.`), r.components[u] = d, f) : r.components[u];
      },
      directive(u, d) {
        return P.NODE_ENV !== "production" && kh(u), d ? (P.NODE_ENV !== "production" && r.directives[u] && Z(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, f) : r.directives[u];
      },
      mount(u, d, p) {
        if (c)
          P.NODE_ENV !== "production" && Z(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          P.NODE_ENV !== "production" && u.__vue_app__ && Z(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = f._ceVNode || fe(s, o);
          return h.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), P.NODE_ENV !== "production" && (r.reload = () => {
            const g = Nn(h);
            g.el = null, e(g, u, p);
          }), e(h, u, p), c = !0, f._container = u, u.__vue_app__ = f, P.NODE_ENV !== "production" && (f._instance = h.component, Dy(f, Xu)), _a(h.component);
        }
      },
      onUnmount(u) {
        P.NODE_ENV !== "production" && typeof u != "function" && Z(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        c ? (un(
          a,
          f._instance,
          16
        ), e(null, f._container), P.NODE_ENV !== "production" && (f._instance = null, xy(f)), delete f._container.__vue_app__) : P.NODE_ENV !== "production" && Z("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return P.NODE_ENV !== "production" && u in r.provides && (Le(r.provides, u) ? Z(
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
function Si(e, t) {
  if (!ct)
    P.NODE_ENV !== "production" && Z("provide() can only be used inside setup().");
  else {
    let n = ct.provides;
    const s = ct.parent && ct.parent.provides;
    s === n && (n = ct.provides = Object.create(s)), n[e] = t;
  }
}
function Ft(e, t, n = !1) {
  const s = ct || rt;
  if (s || Bs) {
    let o = Bs ? Bs._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Ae(t) ? t.call(s && s.proxy) : t;
    P.NODE_ENV !== "production" && Z(`injection "${String(e)}" not found.`);
  } else P.NODE_ENV !== "production" && Z("inject() can only be used inside setup() or functional components.");
}
function fb() {
  return !!(ct || rt || Bs);
}
const Gh = {}, Qh = () => Object.create(Gh), Jh = (e) => Object.getPrototypeOf(e) === Gh;
function pb(e, t, n, s = !1) {
  const o = {}, r = Qh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zh(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  P.NODE_ENV !== "production" && tm(t || {}, o, e), n ? e.props = s ? o : mh(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
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
  } = e, a = Oe(o), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(P.NODE_ENV !== "production" && hb(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (va(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (c)
          if (Le(r, p))
            h !== r[p] && (r[p] = h, f = !0);
          else {
            const g = _t(p);
            o[g] = Pl(
              c,
              a,
              g,
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
    Zh(e, t, o, r) && (f = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !Le(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Un(d)) === d || !Le(t, u))) && (c ? n && // for camelCase
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
  f && bn(e.attrs, "set", ""), P.NODE_ENV !== "production" && tm(t || {}, o, e);
}
function Zh(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (cr(c))
        continue;
      const f = t[c];
      let u;
      o && Le(o, u = _t(c)) ? !r || !r.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : va(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, i = !0);
    }
  if (r) {
    const c = Oe(n), f = a || Fe;
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
    ] && (s === "" || s === Un(n)) && (s = !0));
  }
  return s;
}
const gb = /* @__PURE__ */ new WeakMap();
function em(e, t, n = !1) {
  const s = n ? gb : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let c = !1;
  if (!Ae(e)) {
    const u = (d) => {
      c = !0;
      const [p, h] = em(d, t, !0);
      st(i, p), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return Be(e) && s.set(e, yo), yo;
  if (he(r))
    for (let u = 0; u < r.length; u++) {
      P.NODE_ENV !== "production" && !Ge(r[u]) && Z("props must be strings when using array syntax.", r[u]);
      const d = _t(r[u]);
      Fu(d) && (i[d] = Fe);
    }
  else if (r) {
    P.NODE_ENV !== "production" && !Be(r) && Z("invalid props options", r);
    for (const u in r) {
      const d = _t(u);
      if (Fu(d)) {
        const p = r[u], h = i[d] = he(p) || Ae(p) ? { type: p } : st({}, p), g = h.type;
        let v = !1, _ = !0;
        if (he(g))
          for (let y = 0; y < g.length; ++y) {
            const b = g[y], m = Ae(b) && b.name;
            if (m === "Boolean") {
              v = !0;
              break;
            } else m === "String" && (_ = !1);
          }
        else
          v = Ae(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = v, h[
          1
          /* shouldCastTrue */
        ] = _, (v || Le(h, "default")) && a.push(d);
      }
    }
  }
  const f = [i, a];
  return Be(e) && s.set(e, f), f;
}
function Fu(e) {
  return e[0] !== "$" && !cr(e) ? !0 : (P.NODE_ENV !== "production" && Z(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function vb(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function tm(e, t, n) {
  const s = Oe(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => _t(i));
  for (const i in o) {
    let a = o[i];
    a != null && _b(
      i,
      s[i],
      a,
      P.NODE_ENV !== "production" ? wn(s) : s,
      !r.includes(i)
    );
  }
}
function _b(e, t, n, s, o) {
  const { type: r, required: i, validator: a, skipCheck: c } = n;
  if (i && o) {
    Z('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let f = !1;
      const u = he(r) ? r : [r], d = [];
      for (let p = 0; p < u.length && !f; p++) {
        const { valid: h, expectedType: g } = bb(t, u[p]);
        d.push(g || ""), f = h;
      }
      if (!f) {
        Z(Eb(e, t, d));
        return;
      }
    }
    a && !a(t, s) && Z('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const yb = /* @__PURE__ */ Wn(
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
  } else s === "Object" ? n = Be(e) : s === "Array" ? n = he(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Eb(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Us).join(" | ")}`;
  const o = n[0], r = bc(t), i = Bu(t, o), a = Bu(t, r);
  return n.length === 1 && ju(o) && !wb(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, ju(r) && (s += `with value ${a}.`), s;
}
function Bu(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ju(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function wb(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const xc = (e) => e[0] === "_" || e === "$stable", kc = (e) => he(e) ? e.map(en) : [en(e)], Ab = (e, t, n) => {
  if (t._n)
    return t;
  const s = be((...o) => (P.NODE_ENV !== "production" && ct && !(n === null && rt) && !(n && n.root !== ct.root) && Z(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), kc(t(...o))), n);
  return s._c = !1, s;
}, nm = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (xc(o)) continue;
    const r = e[o];
    if (Ae(r))
      t[o] = Ab(o, r, s);
    else if (r != null) {
      P.NODE_ENV !== "production" && Z(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = kc(r);
      t[o] = () => i;
    }
  }
}, sm = (e, t) => {
  P.NODE_ENV !== "production" && !Wr(e.vnode) && Z(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = kc(t);
  e.slots.default = () => n;
}, Ml = (e, t, n) => {
  for (const s in t)
    (n || !xc(s)) && (e[s] = t[s]);
}, Sb = (e, t, n) => {
  const s = e.slots = Qh();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && Er(s, "__", o, !0);
    const r = t._;
    r ? (Ml(s, t, n), n && Er(s, "_", r, !0)) : nm(t, s);
  } else t && sm(e, t);
}, Cb = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Fe;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? P.NODE_ENV !== "production" && tn ? (Ml(o, t, n), bn(e, "set", "$slots")) : n && a === 1 ? r = !1 : Ml(o, t, n) : (r = !t.$stable, nm(t, o)), i = t;
  } else t && (sm(e, t), i = { default: 1 });
  if (r)
    for (const a in o)
      !xc(a) && i[a] == null && delete o[a];
};
let Qo, rs;
function oo(e, t) {
  e.appContext.config.performance && Yi() && rs.mark(`vue-${t}-${e.uid}`), P.NODE_ENV !== "production" && Py(e, t, Yi() ? rs.now() : Date.now());
}
function ro(e, t) {
  if (e.appContext.config.performance && Yi()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    rs.mark(s), rs.measure(
      `<${ya(e, e.type)}> ${t}`,
      n,
      s
    ), rs.clearMarks(n), rs.clearMarks(s);
  }
  P.NODE_ENV !== "production" && My(e, t, Yi() ? rs.now() : Date.now());
}
function Yi() {
  return Qo !== void 0 || (typeof window < "u" && window.performance ? (Qo = !0, rs = window.performance) : Qo = !1), Qo;
}
function Ob() {
  const e = [];
  if (P.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Et = $b;
function Tb(e) {
  return Nb(e);
}
function Nb(e, t) {
  Ob();
  const n = jr();
  n.__VUE__ = !0, P.NODE_ENV !== "production" && Th(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    insertStaticContent: g
  } = e, v = (E, C, V, z = null, j = null, q = null, ae = void 0, ee = null, te = P.NODE_ENV !== "production" && tn ? !1 : !!C.dynamicChildren) => {
    if (E === C)
      return;
    E && !Ns(E, C) && (z = Q(E), ue(E, j, q, !0), E = null), C.patchFlag === -2 && (te = !1, C.dynamicChildren = null);
    const { type: J, ref: ve, shapeFlag: ie } = C;
    switch (J) {
      case zr:
        _(E, C, V, z);
        break;
      case at:
        y(E, C, V, z);
        break;
      case hr:
        E == null ? b(C, V, z, ae) : P.NODE_ENV !== "production" && m(E, C, V, ae);
        break;
      case Se:
        F(
          E,
          C,
          V,
          z,
          j,
          q,
          ae,
          ee,
          te
        );
        break;
      default:
        ie & 1 ? O(
          E,
          C,
          V,
          z,
          j,
          q,
          ae,
          ee,
          te
        ) : ie & 6 ? ce(
          E,
          C,
          V,
          z,
          j,
          q,
          ae,
          ee,
          te
        ) : ie & 64 || ie & 128 ? J.process(
          E,
          C,
          V,
          z,
          j,
          q,
          ae,
          ee,
          te,
          ke
        ) : P.NODE_ENV !== "production" && Z("Invalid VNode type:", J, `(${typeof J})`);
    }
    ve != null && j ? fr(ve, E && E.ref, q, C || E, !C) : ve == null && E && E.ref != null && fr(E.ref, null, q, E, !0);
  }, _ = (E, C, V, z) => {
    if (E == null)
      s(
        C.el = a(C.children),
        V,
        z
      );
    else {
      const j = C.el = E.el;
      C.children !== E.children && f(j, C.children);
    }
  }, y = (E, C, V, z) => {
    E == null ? s(
      C.el = c(C.children || ""),
      V,
      z
    ) : C.el = E.el;
  }, b = (E, C, V, z) => {
    [E.el, E.anchor] = g(
      E.children,
      C,
      V,
      z,
      E.el,
      E.anchor
    );
  }, m = (E, C, V, z) => {
    if (C.children !== E.children) {
      const j = p(E.anchor);
      R(E), [C.el, C.anchor] = g(
        C.children,
        V,
        j,
        z
      );
    } else
      C.el = E.el, C.anchor = E.anchor;
  }, T = ({ el: E, anchor: C }, V, z) => {
    let j;
    for (; E && E !== C; )
      j = p(E), s(E, V, z), E = j;
    s(C, V, z);
  }, R = ({ el: E, anchor: C }) => {
    let V;
    for (; E && E !== C; )
      V = p(E), o(E), E = V;
    o(C);
  }, O = (E, C, V, z, j, q, ae, ee, te) => {
    C.type === "svg" ? ae = "svg" : C.type === "math" && (ae = "mathml"), E == null ? x(
      C,
      V,
      z,
      j,
      q,
      ae,
      ee,
      te
    ) : w(
      E,
      C,
      j,
      q,
      ae,
      ee,
      te
    );
  }, x = (E, C, V, z, j, q, ae, ee) => {
    let te, J;
    const { props: ve, shapeFlag: ie, transition: ge, dirs: Ce } = E;
    if (te = E.el = i(
      E.type,
      q,
      ve && ve.is,
      ve
    ), ie & 8 ? u(te, E.children) : ie & 16 && S(
      E.children,
      te,
      null,
      z,
      j,
      qa(E, q),
      ae,
      ee
    ), Ce && bs(E, null, z, "created"), k(te, E, E.scopeId, ae, z), ve) {
      for (const He in ve)
        He !== "value" && !cr(He) && r(te, He, null, ve[He], q, z);
      "value" in ve && r(te, "value", null, ve.value, q), (J = ve.onVnodeBeforeMount) && gn(J, z, E);
    }
    P.NODE_ENV !== "production" && (Er(te, "__vnode", E, !0), Er(te, "__vueParentComponent", z, !0)), Ce && bs(E, null, z, "beforeMount");
    const Me = Db(j, ge);
    Me && ge.beforeEnter(te), s(te, C, V), ((J = ve && ve.onVnodeMounted) || Me || Ce) && Et(() => {
      J && gn(J, z, E), Me && ge.enter(te), Ce && bs(E, null, z, "mounted");
    }, j);
  }, k = (E, C, V, z, j) => {
    if (V && h(E, V), z)
      for (let q = 0; q < z.length; q++)
        h(E, z[q]);
    if (j) {
      let q = j.subTree;
      if (P.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && (q = Rc(q.children) || q), C === q || cm(q.type) && (q.ssContent === C || q.ssFallback === C)) {
        const ae = j.vnode;
        k(
          E,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          j.parent
        );
      }
    }
  }, S = (E, C, V, z, j, q, ae, ee, te = 0) => {
    for (let J = te; J < E.length; J++) {
      const ve = E[J] = ee ? ss(E[J]) : en(E[J]);
      v(
        null,
        ve,
        C,
        V,
        z,
        j,
        q,
        ae,
        ee
      );
    }
  }, w = (E, C, V, z, j, q, ae) => {
    const ee = C.el = E.el;
    P.NODE_ENV !== "production" && (ee.__vnode = C);
    let { patchFlag: te, dynamicChildren: J, dirs: ve } = C;
    te |= E.patchFlag & 16;
    const ie = E.props || Fe, ge = C.props || Fe;
    let Ce;
    if (V && Es(V, !1), (Ce = ge.onVnodeBeforeUpdate) && gn(Ce, V, C, E), ve && bs(C, E, V, "beforeUpdate"), V && Es(V, !0), P.NODE_ENV !== "production" && tn && (te = 0, ae = !1, J = null), (ie.innerHTML && ge.innerHTML == null || ie.textContent && ge.textContent == null) && u(ee, ""), J ? (D(
      E.dynamicChildren,
      J,
      ee,
      V,
      z,
      qa(C, j),
      q
    ), P.NODE_ENV !== "production" && pr(E, C)) : ae || ye(
      E,
      C,
      ee,
      null,
      V,
      z,
      qa(C, j),
      q,
      !1
    ), te > 0) {
      if (te & 16)
        A(ee, ie, ge, V, j);
      else if (te & 2 && ie.class !== ge.class && r(ee, "class", null, ge.class, j), te & 4 && r(ee, "style", ie.style, ge.style, j), te & 8) {
        const Me = C.dynamicProps;
        for (let He = 0; He < Me.length; He++) {
          const Ke = Me[He], Nt = ie[Ke], Dt = ge[Ke];
          (Dt !== Nt || Ke === "value") && r(ee, Ke, Nt, Dt, j, V);
        }
      }
      te & 1 && E.children !== C.children && u(ee, C.children);
    } else !ae && J == null && A(ee, ie, ge, V, j);
    ((Ce = ge.onVnodeUpdated) || ve) && Et(() => {
      Ce && gn(Ce, V, C, E), ve && bs(C, E, V, "updated");
    }, z);
  }, D = (E, C, V, z, j, q, ae) => {
    for (let ee = 0; ee < C.length; ee++) {
      const te = E[ee], J = C[ee], ve = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        te.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (te.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ns(te, J) || // - In the case of a component, it could contain anything.
        te.shapeFlag & 198) ? d(te.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      v(
        te,
        J,
        ve,
        null,
        z,
        j,
        q,
        ae,
        !0
      );
    }
  }, A = (E, C, V, z, j) => {
    if (C !== V) {
      if (C !== Fe)
        for (const q in C)
          !cr(q) && !(q in V) && r(
            E,
            q,
            C[q],
            null,
            j,
            z
          );
      for (const q in V) {
        if (cr(q)) continue;
        const ae = V[q], ee = C[q];
        ae !== ee && q !== "value" && r(E, q, ee, ae, j, z);
      }
      "value" in V && r(E, "value", C.value, V.value, j);
    }
  }, F = (E, C, V, z, j, q, ae, ee, te) => {
    const J = C.el = E ? E.el : a(""), ve = C.anchor = E ? E.anchor : a("");
    let { patchFlag: ie, dynamicChildren: ge, slotScopeIds: Ce } = C;
    P.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (tn || ie & 2048) && (ie = 0, te = !1, ge = null), Ce && (ee = ee ? ee.concat(Ce) : Ce), E == null ? (s(J, V, z), s(ve, V, z), S(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      V,
      ve,
      j,
      q,
      ae,
      ee,
      te
    )) : ie > 0 && ie & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (D(
      E.dynamicChildren,
      ge,
      V,
      j,
      q,
      ae,
      ee
    ), P.NODE_ENV !== "production" ? pr(E, C) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (C.key != null || j && C === j.subTree) && pr(
        E,
        C,
        !0
        /* shallow */
      )
    )) : ye(
      E,
      C,
      V,
      ve,
      j,
      q,
      ae,
      ee,
      te
    );
  }, ce = (E, C, V, z, j, q, ae, ee, te) => {
    C.slotScopeIds = ee, E == null ? C.shapeFlag & 512 ? j.ctx.activate(
      C,
      V,
      z,
      ae,
      te
    ) : Y(
      C,
      V,
      z,
      j,
      q,
      ae,
      te
    ) : re(E, C, te);
  }, Y = (E, C, V, z, j, q, ae) => {
    const ee = E.component = zb(
      E,
      z,
      j
    );
    if (P.NODE_ENV !== "production" && ee.type.__hmrId && Cy(ee), P.NODE_ENV !== "production" && (bi(E), oo(ee, "mount")), Wr(E) && (ee.ctx.renderer = ke), P.NODE_ENV !== "production" && oo(ee, "init"), Yb(ee, !1, ae), P.NODE_ENV !== "production" && ro(ee, "init"), P.NODE_ENV !== "production" && tn && (E.el = null), ee.asyncDep) {
      if (j && j.registerDep(ee, K, ae), !E.el) {
        const te = ee.subTree = fe(at);
        y(null, te, C, V);
      }
    } else
      K(
        ee,
        E,
        C,
        V,
        j,
        q,
        ae
      );
    P.NODE_ENV !== "production" && (Ei(), ro(ee, "mount"));
  }, re = (E, C, V) => {
    const z = C.component = E.component;
    if (Bb(E, C, V))
      if (z.asyncDep && !z.asyncResolved) {
        P.NODE_ENV !== "production" && bi(C), le(z, C, V), P.NODE_ENV !== "production" && Ei();
        return;
      } else
        z.next = C, z.update();
    else
      C.el = E.el, z.vnode = C;
  }, K = (E, C, V, z, j, q, ae) => {
    const ee = () => {
      if (E.isMounted) {
        let { next: ie, bu: ge, u: Ce, parent: Me, vnode: He } = E;
        {
          const hn = om(E);
          if (hn) {
            ie && (ie.el = He.el, le(E, ie, ae)), hn.asyncDep.then(() => {
              E.isUnmounted || ee();
            });
            return;
          }
        }
        let Ke = ie, Nt;
        P.NODE_ENV !== "production" && bi(ie || E.vnode), Es(E, !1), ie ? (ie.el = He.el, le(E, ie, ae)) : ie = He, ge && uo(ge), (Nt = ie.props && ie.props.onVnodeBeforeUpdate) && gn(Nt, Me, ie, He), Es(E, !0), P.NODE_ENV !== "production" && oo(E, "render");
        const Dt = Uu(E);
        P.NODE_ENV !== "production" && ro(E, "render");
        const pn = E.subTree;
        E.subTree = Dt, P.NODE_ENV !== "production" && oo(E, "patch"), v(
          pn,
          Dt,
          // parent may have changed if it's in a teleport
          d(pn.el),
          // anchor may have changed if it's in a fragment
          Q(pn),
          E,
          j,
          q
        ), P.NODE_ENV !== "production" && ro(E, "patch"), ie.el = Dt.el, Ke === null && jb(E, Dt.el), Ce && Et(Ce, j), (Nt = ie.props && ie.props.onVnodeUpdated) && Et(
          () => gn(Nt, Me, ie, He),
          j
        ), P.NODE_ENV !== "production" && Nh(E), P.NODE_ENV !== "production" && Ei();
      } else {
        let ie;
        const { el: ge, props: Ce } = C, { bm: Me, m: He, parent: Ke, root: Nt, type: Dt } = E, pn = Eo(C);
        Es(E, !1), Me && uo(Me), !pn && (ie = Ce && Ce.onVnodeBeforeMount) && gn(ie, Ke, C), Es(E, !0);
        {
          Nt.ce && // @ts-expect-error _def is private
          Nt.ce._def.shadowRoot !== !1 && Nt.ce._injectChildStyle(Dt), P.NODE_ENV !== "production" && oo(E, "render");
          const hn = E.subTree = Uu(E);
          P.NODE_ENV !== "production" && ro(E, "render"), P.NODE_ENV !== "production" && oo(E, "patch"), v(
            null,
            hn,
            V,
            z,
            E,
            j,
            q
          ), P.NODE_ENV !== "production" && ro(E, "patch"), C.el = hn.el;
        }
        if (He && Et(He, j), !pn && (ie = Ce && Ce.onVnodeMounted)) {
          const hn = C;
          Et(
            () => gn(ie, Ke, hn),
            j
          );
        }
        (C.shapeFlag & 256 || Ke && Eo(Ke.vnode) && Ke.vnode.shapeFlag & 256) && E.a && Et(E.a, j), E.isMounted = !0, P.NODE_ENV !== "production" && ky(E), C = V = z = null;
      }
    };
    E.scope.on();
    const te = E.effect = new Zp(ee);
    E.scope.off();
    const J = E.update = te.run.bind(te), ve = E.job = te.runIfDirty.bind(te);
    ve.i = E, ve.id = E.uid, te.scheduler = () => pa(ve), Es(E, !0), P.NODE_ENV !== "production" && (te.onTrack = E.rtc ? (ie) => uo(E.rtc, ie) : void 0, te.onTrigger = E.rtg ? (ie) => uo(E.rtg, ie) : void 0), J();
  }, le = (E, C, V) => {
    C.component = E;
    const z = E.vnode.props;
    E.vnode = C, E.next = null, mb(E, C.props, z, V), Cb(E, C.children, V), an(), Tu(E), ln();
  }, ye = (E, C, V, z, j, q, ae, ee, te = !1) => {
    const J = E && E.children, ve = E ? E.shapeFlag : 0, ie = C.children, { patchFlag: ge, shapeFlag: Ce } = C;
    if (ge > 0) {
      if (ge & 128) {
        H(
          J,
          ie,
          V,
          z,
          j,
          q,
          ae,
          ee,
          te
        );
        return;
      } else if (ge & 256) {
        Ze(
          J,
          ie,
          V,
          z,
          j,
          q,
          ae,
          ee,
          te
        );
        return;
      }
    }
    Ce & 8 ? (ve & 16 && L(J, j, q), ie !== J && u(V, ie)) : ve & 16 ? Ce & 16 ? H(
      J,
      ie,
      V,
      z,
      j,
      q,
      ae,
      ee,
      te
    ) : L(J, j, q, !0) : (ve & 8 && u(V, ""), Ce & 16 && S(
      ie,
      V,
      z,
      j,
      q,
      ae,
      ee,
      te
    ));
  }, Ze = (E, C, V, z, j, q, ae, ee, te) => {
    E = E || yo, C = C || yo;
    const J = E.length, ve = C.length, ie = Math.min(J, ve);
    let ge;
    for (ge = 0; ge < ie; ge++) {
      const Ce = C[ge] = te ? ss(C[ge]) : en(C[ge]);
      v(
        E[ge],
        Ce,
        V,
        null,
        j,
        q,
        ae,
        ee,
        te
      );
    }
    J > ve ? L(
      E,
      j,
      q,
      !0,
      !1,
      ie
    ) : S(
      C,
      V,
      z,
      j,
      q,
      ae,
      ee,
      te,
      ie
    );
  }, H = (E, C, V, z, j, q, ae, ee, te) => {
    let J = 0;
    const ve = C.length;
    let ie = E.length - 1, ge = ve - 1;
    for (; J <= ie && J <= ge; ) {
      const Ce = E[J], Me = C[J] = te ? ss(C[J]) : en(C[J]);
      if (Ns(Ce, Me))
        v(
          Ce,
          Me,
          V,
          null,
          j,
          q,
          ae,
          ee,
          te
        );
      else
        break;
      J++;
    }
    for (; J <= ie && J <= ge; ) {
      const Ce = E[ie], Me = C[ge] = te ? ss(C[ge]) : en(C[ge]);
      if (Ns(Ce, Me))
        v(
          Ce,
          Me,
          V,
          null,
          j,
          q,
          ae,
          ee,
          te
        );
      else
        break;
      ie--, ge--;
    }
    if (J > ie) {
      if (J <= ge) {
        const Ce = ge + 1, Me = Ce < ve ? C[Ce].el : z;
        for (; J <= ge; )
          v(
            null,
            C[J] = te ? ss(C[J]) : en(C[J]),
            V,
            Me,
            j,
            q,
            ae,
            ee,
            te
          ), J++;
      }
    } else if (J > ge)
      for (; J <= ie; )
        ue(E[J], j, q, !0), J++;
    else {
      const Ce = J, Me = J, He = /* @__PURE__ */ new Map();
      for (J = Me; J <= ge; J++) {
        const yt = C[J] = te ? ss(C[J]) : en(C[J]);
        yt.key != null && (P.NODE_ENV !== "production" && He.has(yt.key) && Z(
          "Duplicate keys found during update:",
          JSON.stringify(yt.key),
          "Make sure keys are unique."
        ), He.set(yt.key, J));
      }
      let Ke, Nt = 0;
      const Dt = ge - Me + 1;
      let pn = !1, hn = 0;
      const Xo = new Array(Dt);
      for (J = 0; J < Dt; J++) Xo[J] = 0;
      for (J = Ce; J <= ie; J++) {
        const yt = E[J];
        if (Nt >= Dt) {
          ue(yt, j, q, !0);
          continue;
        }
        let mn;
        if (yt.key != null)
          mn = He.get(yt.key);
        else
          for (Ke = Me; Ke <= ge; Ke++)
            if (Xo[Ke - Me] === 0 && Ns(yt, C[Ke])) {
              mn = Ke;
              break;
            }
        mn === void 0 ? ue(yt, j, q, !0) : (Xo[mn - Me] = J + 1, mn >= hn ? hn = mn : pn = !0, v(
          yt,
          C[mn],
          V,
          null,
          j,
          q,
          ae,
          ee,
          te
        ), Nt++);
      }
      const bu = pn ? xb(Xo) : yo;
      for (Ke = bu.length - 1, J = Dt - 1; J >= 0; J--) {
        const yt = Me + J, mn = C[yt], Eu = yt + 1 < ve ? C[yt + 1].el : z;
        Xo[J] === 0 ? v(
          null,
          mn,
          V,
          Eu,
          j,
          q,
          ae,
          ee,
          te
        ) : pn && (Ke < 0 || J !== bu[Ke] ? se(mn, V, Eu, 2) : Ke--);
      }
    }
  }, se = (E, C, V, z, j = null) => {
    const { el: q, type: ae, transition: ee, children: te, shapeFlag: J } = E;
    if (J & 6) {
      se(E.component.subTree, C, V, z);
      return;
    }
    if (J & 128) {
      E.suspense.move(C, V, z);
      return;
    }
    if (J & 64) {
      ae.move(E, C, V, ke);
      return;
    }
    if (ae === Se) {
      s(q, C, V);
      for (let ie = 0; ie < te.length; ie++)
        se(te[ie], C, V, z);
      s(E.anchor, C, V);
      return;
    }
    if (ae === hr) {
      T(E, C, V);
      return;
    }
    if (z !== 2 && J & 1 && ee)
      if (z === 0)
        ee.beforeEnter(q), s(q, C, V), Et(() => ee.enter(q), j);
      else {
        const { leave: ie, delayLeave: ge, afterLeave: Ce } = ee, Me = () => {
          E.ctx.isUnmounted ? o(q) : s(q, C, V);
        }, He = () => {
          ie(q, () => {
            Me(), Ce && Ce();
          });
        };
        ge ? ge(q, Me, He) : He();
      }
    else
      s(q, C, V);
  }, ue = (E, C, V, z = !1, j = !1) => {
    const {
      type: q,
      props: ae,
      ref: ee,
      children: te,
      dynamicChildren: J,
      shapeFlag: ve,
      patchFlag: ie,
      dirs: ge,
      cacheIndex: Ce
    } = E;
    if (ie === -2 && (j = !1), ee != null && (an(), fr(ee, null, V, E, !0), ln()), Ce != null && (C.renderCache[Ce] = void 0), ve & 256) {
      C.ctx.deactivate(E);
      return;
    }
    const Me = ve & 1 && ge, He = !Eo(E);
    let Ke;
    if (He && (Ke = ae && ae.onVnodeBeforeUnmount) && gn(Ke, C, E), ve & 6)
      Ue(E.component, V, z);
    else {
      if (ve & 128) {
        E.suspense.unmount(V, z);
        return;
      }
      Me && bs(E, null, C, "beforeUnmount"), ve & 64 ? E.type.remove(
        E,
        C,
        V,
        ke,
        z
      ) : J && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !J.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (q !== Se || ie > 0 && ie & 64) ? L(
        J,
        C,
        V,
        !1,
        !0
      ) : (q === Se && ie & 384 || !j && ve & 16) && L(te, C, V), z && we(E);
    }
    (He && (Ke = ae && ae.onVnodeUnmounted) || Me) && Et(() => {
      Ke && gn(Ke, C, E), Me && bs(E, null, C, "unmounted");
    }, V);
  }, we = (E) => {
    const { type: C, el: V, anchor: z, transition: j } = E;
    if (C === Se) {
      P.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && j && !j.persisted ? E.children.forEach((ae) => {
        ae.type === at ? o(ae.el) : we(ae);
      }) : De(V, z);
      return;
    }
    if (C === hr) {
      R(E);
      return;
    }
    const q = () => {
      o(V), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (E.shapeFlag & 1 && j && !j.persisted) {
      const { leave: ae, delayLeave: ee } = j, te = () => ae(V, q);
      ee ? ee(E.el, q, te) : te();
    } else
      q();
  }, De = (E, C) => {
    let V;
    for (; E !== C; )
      V = p(E), o(E), E = V;
    o(C);
  }, Ue = (E, C, V) => {
    P.NODE_ENV !== "production" && E.type.__hmrId && Oy(E);
    const {
      bum: z,
      scope: j,
      job: q,
      subTree: ae,
      um: ee,
      m: te,
      a: J,
      parent: ve,
      slots: { __: ie }
    } = E;
    $u(te), $u(J), z && uo(z), ve && he(ie) && ie.forEach((ge) => {
      ve.renderCache[ge] = void 0;
    }), j.stop(), q && (q.flags |= 8, ue(ae, E, C, V)), ee && Et(ee, C), Et(() => {
      E.isUnmounted = !0;
    }, C), C && C.pendingBranch && !C.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === C.pendingId && (C.deps--, C.deps === 0 && C.resolve()), P.NODE_ENV !== "production" && Iy(E);
  }, L = (E, C, V, z = !1, j = !1, q = 0) => {
    for (let ae = q; ae < E.length; ae++)
      ue(E[ae], C, V, z, j);
  }, Q = (E) => {
    if (E.shapeFlag & 6)
      return Q(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const C = p(E.anchor || E.el), V = C && C[Rh];
    return V ? p(V) : C;
  };
  let ne = !1;
  const me = (E, C, V) => {
    E == null ? C._vnode && ue(C._vnode, null, null, !0) : v(
      C._vnode || null,
      E,
      C,
      null,
      null,
      null,
      V
    ), C._vnode = E, ne || (ne = !0, Tu(), Sh(), ne = !1);
  }, ke = {
    p: v,
    um: ue,
    m: se,
    r: we,
    mt: Y,
    mc: S,
    pc: ye,
    pbc: D,
    n: Q,
    o: e
  };
  return {
    render: me,
    hydrate: void 0,
    createApp: db(me)
  };
}
function qa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Es({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Db(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (he(s) && he(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = ss(o[r]), a.el = i.el), !n && a.patchFlag !== -2 && pr(i, a)), a.type === zr && (a.el = i.el), a.type === at && !a.el && (a.el = i.el), P.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
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
function om(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : om(t);
}
function $u(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const kb = Symbol.for("v-scx"), Rb = () => {
  {
    const e = Ft(kb);
    return e || P.NODE_ENV !== "production" && Z(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ma(e, t) {
  return ga(e, null, t);
}
function Ib(e, t) {
  return ga(
    e,
    null,
    P.NODE_ENV !== "production" ? st({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Rt(e, t, n) {
  return P.NODE_ENV !== "production" && !Ae(t) && Z(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ga(e, t, n);
}
function ga(e, t, n = Fe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  P.NODE_ENV !== "production" && !t && (s !== void 0 && Z(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && Z(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && Z(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = st({}, n);
  P.NODE_ENV !== "production" && (a.onWarn = Z);
  const c = t && s || !t && r !== "post";
  let f;
  if (Nr) {
    if (r === "sync") {
      const h = Rb();
      f = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = dt, h.resume = dt, h.pause = dt, h;
    }
  }
  const u = ct;
  a.call = (h, g, v) => un(h, u, g, v);
  let d = !1;
  r === "post" ? a.scheduler = (h) => {
    Et(h, u && u.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (h, g) => {
    g ? h() : pa(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const p = gy(e, t, a);
  return Nr && (f ? f.push(p) : c && p()), p;
}
function Pb(e, t, n) {
  const s = this.proxy, o = Ge(e) ? e.includes(".") ? rm(s, e) : () => s[e] : e.bind(s, s);
  let r;
  Ae(t) ? r = t : (r = t.handler, n = t);
  const i = qr(this), a = ga(o, r.bind(s), n);
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
function Mb(e, t, n = Fe) {
  const s = zn();
  if (P.NODE_ENV !== "production" && !s)
    return Z("useModel() called without active instance."), U();
  const o = _t(t);
  if (P.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return Z(`useModel() called with prop "${t}" which is not declared.`), U();
  const r = Un(t), i = im(e, o), a = uy((c, f) => {
    let u, d = Fe, p;
    return Ib(() => {
      const h = e[o];
      xt(u, h) && (u = h, f());
    }), {
      get() {
        return c(), n.get ? n.get(u) : u;
      },
      set(h) {
        const g = n.set ? n.set(h) : h;
        if (!xt(g, u) && !(d !== Fe && xt(h, d)))
          return;
        const v = s.vnode.props;
        v && // check if parent has passed v-model
        (t in v || o in v || r in v) && (`onUpdate:${t}` in v || `onUpdate:${o}` in v || `onUpdate:${r}` in v) || (u = h, f()), s.emit(`update:${t}`, g), xt(h, g) && xt(h, d) && !xt(g, p) && f(), d = h, p = g;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? i || Fe : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const im = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${Un(t)}Modifiers`];
function Vb(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Fe;
  if (P.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(Ss(_t(t)) in d)) && Z(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ss(_t(t))}" prop.`
        );
      else {
        const p = u[t];
        Ae(p) && (p(...n) || Z(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && im(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => Ge(u) ? u.trim() : u)), i.number && (o = n.map(ji))), P.NODE_ENV !== "production" && Vy(e, t, o), P.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[Ss(u)] && Z(
      `Event "${u}" is emitted in component ${ya(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Un(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = s[a = Ss(t)] || // also try camelCase event handler (#2249)
  s[a = Ss(_t(t))];
  !c && r && (c = s[a = Ss(Un(t))]), c && un(
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
function am(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, a = !1;
  if (!Ae(e)) {
    const c = (f) => {
      const u = am(f, t, !0);
      u && (a = !0, st(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !a ? (Be(e) && s.set(e, null), null) : (he(r) ? r.forEach((c) => i[c] = null) : st(i, r), Be(e) && s.set(e, i), i);
}
function va(e, t) {
  return !e || !Fr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Le(e, t[0].toLowerCase() + t.slice(1)) || Le(e, Un(t)) || Le(e, t));
}
let Vl = !1;
function Xi() {
  Vl = !0;
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
    emit: c,
    render: f,
    renderCache: u,
    props: d,
    data: p,
    setupState: h,
    ctx: g,
    inheritAttrs: v
  } = e, _ = zi(e);
  let y, b;
  P.NODE_ENV !== "production" && (Vl = !1);
  try {
    if (n.shapeFlag & 4) {
      const R = o || s, O = P.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(R, {
        get(x, k, S) {
          return Z(
            `Property '${String(
              k
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(x, k, S);
        }
      }) : R;
      y = en(
        f.call(
          O,
          R,
          u,
          P.NODE_ENV !== "production" ? wn(d) : d,
          h,
          p,
          g
        )
      ), b = a;
    } else {
      const R = t;
      P.NODE_ENV !== "production" && a === d && Xi(), y = en(
        R.length > 1 ? R(
          P.NODE_ENV !== "production" ? wn(d) : d,
          P.NODE_ENV !== "production" ? {
            get attrs() {
              return Xi(), wn(a);
            },
            slots: i,
            emit: c
          } : { attrs: a, slots: i, emit: c }
        ) : R(
          P.NODE_ENV !== "production" ? wn(d) : d,
          null
        )
      ), b = t.props ? a : Lb(a);
    }
  } catch (R) {
    mr.length = 0, $r(R, e, 1), y = fe(at);
  }
  let m = y, T;
  if (P.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([m, T] = lm(y)), b && v !== !1) {
    const R = Object.keys(b), { shapeFlag: O } = m;
    if (R.length) {
      if (O & 7)
        r && R.some(Bi) && (b = Fb(
          b,
          r
        )), m = Nn(m, b, !1, !0);
      else if (P.NODE_ENV !== "production" && !Vl && m.type !== at) {
        const x = Object.keys(a), k = [], S = [];
        for (let w = 0, D = x.length; w < D; w++) {
          const A = x[w];
          Fr(A) ? Bi(A) || k.push(A[2].toLowerCase() + A.slice(3)) : S.push(A);
        }
        S.length && Z(
          `Extraneous non-props attributes (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), k.length && Z(
          `Extraneous non-emits event listeners (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (P.NODE_ENV !== "production" && !Hu(m) && Z(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), m = Nn(m, null, !1, !0), m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs), n.transition && (P.NODE_ENV !== "production" && !Hu(m) && Z(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Or(m, n.transition)), P.NODE_ENV !== "production" && T ? T(m) : y = m, zi(_), y;
}
const lm = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Rc(t, !1);
  if (s) {
    if (P.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return lm(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (a) => {
    t[o] = a, n && (r > -1 ? n[r] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [en(s), i];
};
function Rc(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (qs(o)) {
      if (o.type !== at || o.children === "v-if") {
        if (n)
          return;
        if (n = o, P.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Rc(n.children);
      }
    } else
      return;
  }
  return n;
}
const Lb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Fr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fb = (e, t) => {
  const n = {};
  for (const s in e)
    (!Bi(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Hu = (e) => e.shapeFlag & 7 || e.type === at;
function Bb(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: a, patchFlag: c } = t, f = r.emitsOptions;
  if (P.NODE_ENV !== "production" && (o || a) && tn || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Wu(s, i, f) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (i[p] !== s[p] && !va(f, p))
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
const cm = (e) => e.__isSuspense;
function $b(e, t) {
  t && t.pendingBranch ? he(e) ? t.effects.push(...e) : t.effects.push(e) : Ah(e);
}
const Se = Symbol.for("v-fgt"), zr = Symbol.for("v-txt"), at = Symbol.for("v-cmt"), hr = Symbol.for("v-stc"), mr = [];
let Lt = null;
function N(e = !1) {
  mr.push(Lt = e ? null : []);
}
function Ub() {
  mr.pop(), Lt = mr[mr.length - 1] || null;
}
let Tr = 1;
function Ku(e, t = !1) {
  Tr += e, e < 0 && Lt && t && (Lt.hasOnce = !0);
}
function um(e) {
  return e.dynamicChildren = Tr > 0 ? Lt || yo : null, Ub(), Tr > 0 && Lt && Lt.push(e), e;
}
function I(e, t, n, s, o, r) {
  return um(
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
  return um(
    fe(
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
function Ns(e, t) {
  if (P.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = wi.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Hb = (...e) => fm(
  ...e
), dm = ({ key: e }) => e ?? null, Ci = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ge(e) || qe(e) || Ae(e) ? { i: rt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, s = 0, o = null, r = e === Se ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dm(t),
    ref: t && Ci(t),
    scopeId: xh,
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
  return a ? (Ic(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ge(n) ? 8 : 16), P.NODE_ENV !== "production" && c.key !== c.key && Z("VNode created with invalid key (NaN). VNode type:", c.type), Tr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Lt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Lt.push(c), c;
}
const fe = P.NODE_ENV !== "production" ? Hb : fm;
function fm(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Zy) && (P.NODE_ENV !== "production" && !e && Z(`Invalid vnode type when creating vnode: ${e}.`), e = at), qs(e)) {
    const a = Nn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ic(a, n), Tr > 0 && !r && Lt && (a.shapeFlag & 6 ? Lt[Lt.indexOf(e)] = a : Lt.push(a)), a.patchFlag = -2, a;
  }
  if (gm(e) && (e = e.__vccOpts), t) {
    t = ot(t);
    let { class: a, style: c } = t;
    a && !Ge(a) && (t.class = pe(a)), Be(c) && (Sr(c) && !he(c) && (c = st({}, c)), t.style = Vt(c));
  }
  const i = Ge(e) ? 1 : cm(e) ? 128 : Ih(e) ? 64 : Be(e) ? 4 : Ae(e) ? 2 : 0;
  return P.NODE_ENV !== "production" && i & 4 && Sr(e) && (e = Oe(e), Z(
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
  return e ? Sr(e) || Jh(e) ? st({}, e) : e : null;
}
function Nn(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: a, transition: c } = e, f = t ? gs(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && dm(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? he(r) ? r.concat(Ci(t)) : [r, Ci(t)] : Ci(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: P.NODE_ENV !== "production" && i === -1 && he(a) ? a.map(pm) : a,
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
    ssContent: e.ssContent && Nn(e.ssContent),
    ssFallback: e.ssFallback && Nn(e.ssFallback),
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
function pm(e) {
  const t = Nn(e);
  return he(e.children) && (t.children = e.children.map(pm)), t;
}
function W(e = " ", t = 0) {
  return fe(zr, null, e, t);
}
function Gi(e, t) {
  const n = fe(hr, null, e);
  return n.staticCount = t, n;
}
function _e(e = "", t = !1) {
  return t ? (N(), et(at, null, e)) : fe(at, null, e);
}
function en(e) {
  return e == null || typeof e == "boolean" ? fe(at) : he(e) ? fe(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qs(e) ? ss(e) : fe(zr, null, String(e));
}
function ss(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nn(e);
}
function Ic(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (he(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ic(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Jh(t) ? t._ctx = rt : o === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ae(t) ? (t = { default: t, _ctx: rt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [W(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gs(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = pe([t.class, s.class]));
      else if (o === "style")
        t.style = Vt([t.style, s.style]);
      else if (Fr(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(he(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
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
const Wb = Xh();
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
    scope: new Gp(
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
    propsDefaults: Fe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Fe,
    data: Fe,
    props: Fe,
    attrs: Fe,
    slots: Fe,
    refs: Fe,
    setupState: Fe,
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
  return P.NODE_ENV !== "production" ? r.ctx = tb(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Vb.bind(null, r), e.ce && e.ce(r), r;
}
let ct = null;
const zn = () => ct || rt;
let Qi, Ll;
{
  const e = jr(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Qi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ct = n
  ), Ll = t(
    "__VUE_SSR_SETTERS__",
    (n) => Nr = n
  );
}
const qr = (e) => {
  const t = ct;
  return Qi(e), e.scope.on(), () => {
    e.scope.off(), Qi(t);
  };
}, zu = () => {
  ct && ct.scope.off(), Qi(null);
}, qb = /* @__PURE__ */ Wn("slot,component");
function Fl(e, { isNativeTag: t }) {
  (qb(e) || t(e)) && Z(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function hm(e) {
  return e.vnode.shapeFlag & 4;
}
let Nr = !1;
function Yb(e, t = !1, n = !1) {
  t && Ll(t);
  const { props: s, children: o } = e.vnode, r = hm(e);
  pb(e, s, r, t), Sb(e, o, n || t);
  const i = r ? Xb(e, t) : void 0;
  return t && Ll(!1), i;
}
function Xb(e, t) {
  var n;
  const s = e.type;
  if (P.NODE_ENV !== "production") {
    if (s.name && Fl(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Fl(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        kh(r[i]);
    }
    s.compilerOptions && Gb() && Z(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zh), P.NODE_ENV !== "production" && nb(e);
  const { setup: o } = s;
  if (o) {
    an();
    const r = e.setupContext = o.length > 1 ? Jb(e) : null, i = qr(e), a = Fo(
      o,
      e,
      0,
      [
        P.NODE_ENV !== "production" ? wn(e.props) : e.props,
        r
      ]
    ), c = yc(a);
    if (ln(), i(), (c || e.sp) && !Eo(e) && $h(e), c) {
      if (a.then(zu, zu), t)
        return a.then((f) => {
          qu(e, f, t);
        }).catch((f) => {
          $r(f, e, 0);
        });
      if (e.asyncDep = a, P.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        Z(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      qu(e, a, t);
  } else
    mm(e, t);
}
function qu(e, t, n) {
  Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Be(t) ? (P.NODE_ENV !== "production" && qs(t) && Z(
    "setup() should not return VNodes directly - return a render function instead."
  ), P.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = _h(t), P.NODE_ENV !== "production" && sb(e)) : P.NODE_ENV !== "production" && t !== void 0 && Z(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), mm(e, n);
}
const Gb = () => !0;
function mm(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || dt);
  {
    const o = qr(e);
    an();
    try {
      rb(e);
    } finally {
      ln(), o();
    }
  }
  P.NODE_ENV !== "production" && !s.render && e.render === dt && !t && (s.template ? Z(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : Z("Component is missing template or render function: ", s));
}
const Yu = P.NODE_ENV !== "production" ? {
  get(e, t) {
    return Xi(), ut(e, "get", ""), e[t];
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
function Qb(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ut(e, "get", "$slots"), t[n];
    }
  });
}
function Jb(e) {
  const t = (n) => {
    if (P.NODE_ENV !== "production" && (e.exposed && Z("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (he(n) ? s = "array" : qe(n) && (s = "ref")), s !== "object" && Z(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (P.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Yu));
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
      attrs: new Proxy(e.attrs, Yu),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function _a(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_h(is(e.exposed)), {
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
const Zb = /(?:^|[-_])(\w)/g, eE = (e) => e.replace(Zb, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Pc(e, t = !0) {
  return Ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ya(e, t, n = !1) {
  let s = Pc(t);
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
function gm(e) {
  return Ae(e) && "__vccOpts" in e;
}
const $ = (e, t) => {
  const n = hy(e, t, Nr);
  if (P.NODE_ENV !== "production") {
    const s = zn();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Mc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? Be(t) && !he(t) ? qs(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && qs(n) && (n = [n]), fe(e, t, n));
}
function tE() {
  if (P.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!Be(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (qe(d)) {
        an();
        const p = d.value;
        return ln(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          a(p),
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
            `>${Tn(d) ? " (readonly)" : ""}`
          ];
        if (Tn(d))
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
    d.type.props && d.props && p.push(i("props", Oe(d.props))), d.setupState !== Fe && p.push(i("setup", d.setupState)), d.data !== Fe && p.push(i("data", Oe(d.data)));
    const h = c(d, "computed");
    h && p.push(i("computed", h));
    const g = c(d, "inject");
    return g && p.push(i("injected", g)), p.push([
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
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : Be(d) ? ["object", { object: p ? Oe(d) : d }] : ["span", n, String(d)];
  }
  function c(d, p) {
    const h = d.type;
    if (Ae(h))
      return;
    const g = {};
    for (const v in d.ctx)
      f(h, v, p) && (g[v] = d.ctx[v]);
    return g;
  }
  function f(d, p, h) {
    const g = d[h];
    if (he(g) && g.includes(p) || Be(g) && p in g || d.extends && f(d.extends, p, h) || d.mixins && d.mixins.some((v) => f(v, p, h)))
      return !0;
  }
  function u(d) {
    return St(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Xu = "3.5.17", An = P.NODE_ENV !== "production" ? Z : dt;
var Xt = {};
let Bl;
const Gu = typeof window < "u" && window.trustedTypes;
if (Gu)
  try {
    Bl = /* @__PURE__ */ Gu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Xt.NODE_ENV !== "production" && An(`Error creating trusted types policy: ${e}`);
  }
const vm = Bl ? (e) => Bl.createHTML(e) : (e) => e, nE = "http://www.w3.org/2000/svg", sE = "http://www.w3.org/1998/Math/MathML", Vn = typeof document < "u" ? document : null, Qu = Vn && /* @__PURE__ */ Vn.createElement("template"), oE = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Vn.createElementNS(nE, e) : t === "mathml" ? Vn.createElementNS(sE, e) : n ? Vn.createElement(e, { is: n }) : Vn.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Vn.createTextNode(e),
  createComment: (e) => Vn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Vn.querySelector(e),
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
      Qu.innerHTML = vm(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Qu.content;
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
}, Jn = "transition", Jo = "animation", Dr = Symbol("_vtc"), _m = {
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
}, rE = /* @__PURE__ */ st(
  {},
  Vh,
  _m
), iE = (e) => (e.displayName = "Transition", e.props = rE, e), aE = /* @__PURE__ */ iE(
  (e, { slots: t }) => Mc(jy, lE(e), t)
), ws = (e, t = []) => {
  he(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ju = (e) => e ? he(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function lE(e) {
  const t = {};
  for (const A in e)
    A in _m || (t[A] = e[A]);
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
  } = e, g = cE(o), v = g && g[0], _ = g && g[1], {
    onBeforeEnter: y,
    onEnter: b,
    onEnterCancelled: m,
    onLeave: T,
    onLeaveCancelled: R,
    onBeforeAppear: O = y,
    onAppear: x = b,
    onAppearCancelled: k = m
  } = t, S = (A, F, ce, Y) => {
    A._enterCancelled = Y, As(A, F ? u : a), As(A, F ? f : i), ce && ce();
  }, w = (A, F) => {
    A._isLeaving = !1, As(A, d), As(A, h), As(A, p), F && F();
  }, D = (A) => (F, ce) => {
    const Y = A ? x : b, re = () => S(F, A, ce);
    ws(Y, [F, re]), Zu(() => {
      As(F, A ? c : r), In(F, A ? u : a), Ju(Y) || ed(F, s, v, re);
    });
  };
  return st(t, {
    onBeforeEnter(A) {
      ws(y, [A]), In(A, r), In(A, i);
    },
    onBeforeAppear(A) {
      ws(O, [A]), In(A, c), In(A, f);
    },
    onEnter: D(!1),
    onAppear: D(!0),
    onLeave(A, F) {
      A._isLeaving = !0;
      const ce = () => w(A, F);
      In(A, d), A._enterCancelled ? (In(A, p), sd()) : (sd(), In(A, p)), Zu(() => {
        A._isLeaving && (As(A, d), In(A, h), Ju(T) || ed(A, s, _, ce));
      }), ws(T, [A, ce]);
    },
    onEnterCancelled(A) {
      S(A, !1, void 0, !0), ws(m, [A]);
    },
    onAppearCancelled(A) {
      S(A, !0, void 0, !0), ws(k, [A]);
    },
    onLeaveCancelled(A) {
      w(A), ws(R, [A]);
    }
  });
}
function cE(e) {
  if (e == null)
    return null;
  if (Be(e))
    return [Ya(e.enter), Ya(e.leave)];
  {
    const t = Ya(e);
    return [t, t];
  }
}
function Ya(e) {
  const t = O_(e);
  return Xt.NODE_ENV !== "production" && Ey(t, "<transition> explicit duration"), t;
}
function In(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Dr] || (e[Dr] = /* @__PURE__ */ new Set())).add(t);
}
function As(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Dr];
  n && (n.delete(t), n.size || (e[Dr] = void 0));
}
function Zu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let uE = 0;
function ed(e, t, n, s) {
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
    e.removeEventListener(f, p), r();
  }, p = (h) => {
    h.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, a + 1), e.addEventListener(f, p);
}
function dE(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${Jn}Delay`), r = s(`${Jn}Duration`), i = td(o, r), a = s(`${Jo}Delay`), c = s(`${Jo}Duration`), f = td(a, c);
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
function td(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => nd(n) + nd(e[s])));
}
function nd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function sd() {
  return document.body.offsetHeight;
}
function fE(e, t, n) {
  const s = e[Dr];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ji = Symbol("_vod"), ym = Symbol("_vsh"), bm = {
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
Xt.NODE_ENV !== "production" && (bm.name = "show");
function Zo(e, t) {
  e.style.display = t ? e[Ji] : "none", e[ym] = !t;
}
const pE = Symbol(Xt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), hE = /(^|;)\s*display\s*:/;
function mE(e, t, n) {
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
      const i = s[pE];
      i && (n += ";" + i), s.cssText = n, r = hE.test(n);
    }
  } else t && e.removeAttribute("style");
  Ji in e && (e[Ji] = r ? s.display : "", e[ym] && (s.display = "none"));
}
const gE = /[^\\];\s*$/, od = /\s*!important$/;
function Oi(e, t, n) {
  if (he(n))
    n.forEach((s) => Oi(e, t, s));
  else if (n == null && (n = ""), Xt.NODE_ENV !== "production" && gE.test(n) && An(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = vE(e, t);
    od.test(n) ? e.setProperty(
      Un(s),
      n.replace(od, ""),
      "important"
    ) : e[s] = n;
  }
}
const rd = ["Webkit", "Moz", "ms"], Xa = {};
function vE(e, t) {
  const n = Xa[t];
  if (n)
    return n;
  let s = _t(t);
  if (s !== "filter" && s in e)
    return Xa[t] = s;
  s = Us(s);
  for (let o = 0; o < rd.length; o++) {
    const r = rd[o] + s;
    if (r in e)
      return Xa[t] = r;
  }
  return t;
}
const id = "http://www.w3.org/1999/xlink";
function ad(e, t, n, s, o, r = F_(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(id, t.slice(6, t.length)) : e.setAttributeNS(id, t, n) : n == null || r && !qp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : rn(n) ? String(n) : n
  );
}
function ld(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? vm(n) : n);
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
    a === "boolean" ? n = qp(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
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
function Bn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function _E(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const cd = Symbol("_vei");
function yE(e, t, n, s, o = null) {
  const r = e[cd] || (e[cd] = {}), i = r[t];
  if (s && i)
    i.value = Xt.NODE_ENV !== "production" ? dd(s, t) : s;
  else {
    const [a, c] = bE(t);
    if (s) {
      const f = r[t] = AE(
        Xt.NODE_ENV !== "production" ? dd(s, t) : s,
        o
      );
      Bn(e, a, f, c);
    } else i && (_E(e, a, i, c), r[t] = void 0);
  }
}
const ud = /(?:Once|Passive|Capture)$/;
function bE(e) {
  let t;
  if (ud.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ud); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Un(e.slice(2)), t];
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
function dd(e, t) {
  return Ae(e) || he(e) ? e : (An(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), dt);
}
function SE(e, t) {
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
const fd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, CE = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? fE(e, s, i) : t === "style" ? mE(e, n, s) : Fr(t) ? Bi(t) || yE(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : OE(e, t, s, i)) ? (ld(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ad(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ge(s)) ? ld(e, _t(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ad(e, t, s, i));
};
function OE(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fd(t) && Ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return fd(t) && Ge(n) ? !1 : t in e;
}
const us = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return he(t) ? (n) => uo(t, n) : t;
};
function TE(e) {
  e.target.composing = !0;
}
function pd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const zt = Symbol("_assign"), wo = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[zt] = us(o);
    const r = s || o.props && o.props.type === "number";
    Bn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), r && (a = ji(a)), e[zt](a);
    }), n && Bn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Bn(e, "compositionstart", TE), Bn(e, "compositionend", pd), Bn(e, "change", pd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[zt] = us(i), e.composing) return;
    const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? ji(e.value) : e.value, c = t ?? "";
    a !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, NE = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[zt] = us(n), Bn(e, "change", () => {
      const s = e._modelValue, o = So(e), r = e.checked, i = e[zt];
      if (he(s)) {
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
        i(Em(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: hd,
  beforeUpdate(e, t, n) {
    e[zt] = us(n), hd(e, t, n);
  }
};
function hd(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (he(t))
    o = wc(t, s.props.value) > -1;
  else if (Lo(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Hs(t, Em(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Ao = {
  created(e, { value: t }, n) {
    e.checked = Hs(t, n.props.value), e[zt] = us(n), Bn(e, "change", () => {
      e[zt](So(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[zt] = us(s), t !== n && (e.checked = Hs(t, s.props.value));
  }
}, cs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Lo(t);
    Bn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? ji(So(i)) : So(i)
      );
      e[zt](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, Ks(() => {
        e._assigning = !1;
      });
    }), e[zt] = us(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    md(e, t);
  },
  beforeUpdate(e, t, n) {
    e[zt] = us(n);
  },
  updated(e, { value: t }) {
    e._assigning || md(e, t);
  }
};
function md(e, t) {
  const n = e.multiple, s = he(t);
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
    else if (Hs(So(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function So(e) {
  return "_value" in e ? e._value : e.value;
}
function Em(e, t) {
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
}, wm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const a = xE[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...r);
  });
}, kE = /* @__PURE__ */ st({ patchProp: CE }, oE);
let gd;
function RE() {
  return gd || (gd = Tb(kE));
}
const ba = (...e) => {
  const t = RE().createApp(...e);
  Xt.NODE_ENV !== "production" && (PE(t), ME(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = VE(s);
    if (!o) return;
    const r = t._component;
    !Ae(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, IE(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function IE(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function PE(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => P_(t) || M_(t) || V_(t),
    writable: !1
  });
}
function ME(e) {
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
function VE(e) {
  if (Ge(e)) {
    const t = document.querySelector(e);
    return Xt.NODE_ENV !== "production" && !t && An(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Xt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && An(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var LE = {};
function FE() {
  tE();
}
LE.NODE_ENV !== "production" && FE();
var BE = Object.create, Am = Object.defineProperty, jE = Object.getOwnPropertyDescriptor, Vc = Object.getOwnPropertyNames, $E = Object.getPrototypeOf, UE = Object.prototype.hasOwnProperty, HE = (e, t) => function() {
  return e && (t = (0, e[Vc(e)[0]])(e = 0)), t;
}, WE = (e, t) => function() {
  return t || (0, e[Vc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, KE = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Vc(t))
      !UE.call(e, o) && o !== n && Am(e, o, { get: () => t[o], enumerable: !(s = jE(t, o)) || s.enumerable });
  return e;
}, zE = (e, t, n) => (n = e != null ? BE($E(e)) : {}, KE(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Am(n, "default", { value: e, enumerable: !0 }),
  e
)), Yr = HE({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), qE = WE({
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
        const h = Object.keys(d), g = new Array(h.length);
        for (let v = 0; v < h.length; v++) {
          const _ = h[v], y = d[_];
          typeof y != "object" || y === null ? g[_] = y : y.constructor !== Object && (a = i.get(y.constructor)) ? g[_] = a(y, p) : ArrayBuffer.isView(y) ? g[_] = n(y) : g[_] = p(y);
        }
        return g;
      }
      function f(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, f);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, f);
        const p = {};
        for (const h in d) {
          if (Object.hasOwnProperty.call(d, h) === !1) continue;
          const g = d[h];
          typeof g != "object" || g === null ? p[h] = g : g.constructor !== Object && (a = i.get(g.constructor)) ? p[h] = a(g, f) : ArrayBuffer.isView(g) ? p[h] = n(g) : p[h] = f(g);
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
          const g = d[h];
          typeof g != "object" || g === null ? p[h] = g : g.constructor !== Object && (a = i.get(g.constructor)) ? p[h] = a(g, u) : ArrayBuffer.isView(g) ? p[h] = n(g) : p[h] = u(g);
        }
        return p;
      }
    }
    function o(r) {
      const i = [], a = [], c = /* @__PURE__ */ new Map();
      if (c.set(Date, (h) => new Date(h)), c.set(Map, (h, g) => new Map(u(Array.from(h), g))), c.set(Set, (h, g) => new Set(u(Array.from(h), g))), r.constructorHandlers)
        for (const h of r.constructorHandlers)
          c.set(h[0], h[1]);
      let f = null;
      return r.proto ? p : d;
      function u(h, g) {
        const v = Object.keys(h), _ = new Array(v.length);
        for (let y = 0; y < v.length; y++) {
          const b = v[y], m = h[b];
          if (typeof m != "object" || m === null)
            _[b] = m;
          else if (m.constructor !== Object && (f = c.get(m.constructor)))
            _[b] = f(m, g);
          else if (ArrayBuffer.isView(m))
            _[b] = n(m);
          else {
            const T = i.indexOf(m);
            T !== -1 ? _[b] = a[T] : _[b] = g(m);
          }
        }
        return _;
      }
      function d(h) {
        if (typeof h != "object" || h === null) return h;
        if (Array.isArray(h)) return u(h, d);
        if (h.constructor !== Object && (f = c.get(h.constructor)))
          return f(h, d);
        const g = {};
        i.push(h), a.push(g);
        for (const v in h) {
          if (Object.hasOwnProperty.call(h, v) === !1) continue;
          const _ = h[v];
          if (typeof _ != "object" || _ === null)
            g[v] = _;
          else if (_.constructor !== Object && (f = c.get(_.constructor)))
            g[v] = f(_, d);
          else if (ArrayBuffer.isView(_))
            g[v] = n(_);
          else {
            const y = i.indexOf(_);
            y !== -1 ? g[v] = a[y] : g[v] = d(_);
          }
        }
        return i.pop(), a.pop(), g;
      }
      function p(h) {
        if (typeof h != "object" || h === null) return h;
        if (Array.isArray(h)) return u(h, p);
        if (h.constructor !== Object && (f = c.get(h.constructor)))
          return f(h, p);
        const g = {};
        i.push(h), a.push(g);
        for (const v in h) {
          const _ = h[v];
          if (typeof _ != "object" || _ === null)
            g[v] = _;
          else if (_.constructor !== Object && (f = c.get(_.constructor)))
            g[v] = f(_, p);
          else if (ArrayBuffer.isView(_))
            g[v] = n(_);
          else {
            const y = i.indexOf(_);
            y !== -1 ? g[v] = a[y] : g[v] = p(_);
          }
        }
        return i.pop(), a.pop(), g;
      }
    }
  }
});
Yr();
Yr();
Yr();
var Sm = typeof navigator < "u", de = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof de.chrome < "u" && de.chrome.devtools;
Sm && (de.self, de.top);
var vd;
typeof navigator < "u" && ((vd = navigator.userAgent) == null || vd.toLowerCase().includes("electron"));
Yr();
var YE = zE(qE()), XE = /(?:^|[-_/])(\w)/g;
function GE(e, t) {
  return t ? t.toUpperCase() : "";
}
function QE(e) {
  return e && `${e}`.replace(XE, GE);
}
function JE(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const s = n.lastIndexOf("/"), o = n.substring(s + 1);
  {
    const r = o.lastIndexOf(t);
    return o.substring(0, r);
  }
}
var _d = (0, YE.default)({ circles: !0 });
const ZE = {
  trailing: !0
};
function Co(e, t = 25, n = {}) {
  if (n = { ...ZE, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let s, o, r = [], i, a;
  const c = (f, u) => (i = e1(e, f, u), i.finally(() => {
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
async function e1(e, t, n) {
  return await e.apply(t, n);
}
function jl(e, t = {}, n) {
  for (const s in e) {
    const o = e[s], r = n ? `${n}:${s}` : s;
    typeof o == "object" && o !== null ? jl(o, t, r) : typeof o == "function" && (t[r] = o);
  }
  return t;
}
const t1 = { run: (e) => e() }, n1 = () => t1, Cm = typeof console.createTask < "u" ? console.createTask : n1;
function s1(e, t) {
  const n = t.shift(), s = Cm(n);
  return e.reduce(
    (o, r) => o.then(() => s.run(() => r(...t))),
    Promise.resolve()
  );
}
function o1(e, t) {
  const n = t.shift(), s = Cm(n);
  return Promise.all(e.map((o) => s.run(() => o(...t))));
}
function Qa(e, t) {
  for (const n of [...e])
    n(t);
}
class r1 {
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
    return n.unshift(t), this.callHookWith(s1, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(o1, t, ...n);
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
function Om() {
  return new r1();
}
var i1 = Object.create, Tm = Object.defineProperty, a1 = Object.getOwnPropertyDescriptor, Lc = Object.getOwnPropertyNames, l1 = Object.getPrototypeOf, c1 = Object.prototype.hasOwnProperty, u1 = (e, t) => function() {
  return e && (t = (0, e[Lc(e)[0]])(e = 0)), t;
}, Nm = (e, t) => function() {
  return t || (0, e[Lc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, d1 = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Lc(t))
      !c1.call(e, o) && o !== n && Tm(e, o, { get: () => t[o], enumerable: !(s = a1(t, o)) || s.enumerable });
  return e;
}, f1 = (e, t, n) => (n = e != null ? i1(l1(e)) : {}, d1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Tm(n, "default", { value: e, enumerable: !0 }),
  e
)), X = u1({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), p1 = Nm({
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
      }, c = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), u = [".", "!", "~", "*", "'", "(", ")"].join(""), d = function(_, y) {
        var b = "-", m = "", T = "", R = !0, O = {}, x, k, S, w, D, A, F, ce, Y, re, K, le, ye, Ze, H = "";
        if (typeof _ != "string")
          return "";
        if (typeof y == "string" && (b = y), F = a.en, ce = i.en, typeof y == "object") {
          x = y.maintainCase || !1, O = y.custom && typeof y.custom == "object" ? y.custom : O, S = +y.truncate > 1 && y.truncate || !1, w = y.uric || !1, D = y.uricNoSlash || !1, A = y.mark || !1, R = !(y.symbols === !1 || y.lang === !1), b = y.separator || b, w && (H += c), D && (H += f), A && (H += u), F = y.lang && a[y.lang] && R ? a[y.lang] : R ? a.en : {}, ce = y.lang && i[y.lang] ? i[y.lang] : y.lang === !1 || y.lang === !0 ? {} : i.en, y.titleCase && typeof y.titleCase.length == "number" && Array.prototype.toString.call(y.titleCase) ? (y.titleCase.forEach(function(se) {
            O[se + ""] = se + "";
          }), k = !0) : k = !!y.titleCase, y.custom && typeof y.custom.length == "number" && Array.prototype.toString.call(y.custom) && y.custom.forEach(function(se) {
            O[se + ""] = se + "";
          }), Object.keys(O).forEach(function(se) {
            var ue;
            se.length > 1 ? ue = new RegExp("\\b" + h(se) + "\\b", "gi") : ue = new RegExp(h(se), "gi"), _ = _.replace(ue, O[se]);
          });
          for (K in O)
            H += K;
        }
        for (H += b, H = h(H), _ = _.replace(/(^\s+|\s+$)/g, ""), ye = !1, Ze = !1, re = 0, le = _.length; re < le; re++)
          K = _[re], g(K, O) ? ye = !1 : ce[K] ? (K = ye && ce[K].match(/[A-Za-z0-9]/) ? " " + ce[K] : ce[K], ye = !1) : K in s ? (re + 1 < le && o.indexOf(_[re + 1]) >= 0 ? (T += K, K = "") : Ze === !0 ? (K = r[T] + s[K], T = "") : K = ye && s[K].match(/[A-Za-z0-9]/) ? " " + s[K] : s[K], ye = !1, Ze = !1) : K in r ? (T += K, K = "", re === le - 1 && (K = r[T]), Ze = !0) : /* process symbol chars */ F[K] && !(w && c.indexOf(K) !== -1) && !(D && f.indexOf(K) !== -1) ? (K = ye || m.substr(-1).match(/[A-Za-z0-9]/) ? b + F[K] : F[K], K += _[re + 1] !== void 0 && _[re + 1].match(/[A-Za-z0-9]/) ? b : "", ye = !0) : (Ze === !0 ? (K = r[T] + K, T = "", Ze = !1) : ye && (/[A-Za-z0-9]/.test(K) || m.substr(-1).match(/A-Za-z0-9]/)) && (K = " " + K), ye = !1), m += K.replace(new RegExp("[^\\w\\s" + H + "_-]", "g"), b);
        return k && (m = m.replace(/(\w)(\S*)/g, function(se, ue, we) {
          var De = ue.toUpperCase() + (we !== null ? we : "");
          return Object.keys(O).indexOf(De.toLowerCase()) < 0 ? De : De.toLowerCase();
        })), m = m.replace(/\s+/g, b).replace(new RegExp("\\" + b + "+", "g"), b).replace(new RegExp("(^\\" + b + "+|\\" + b + "+$)", "g"), ""), S && m.length > S && (Y = m.charAt(S) === b, m = m.slice(0, S), Y || (m = m.slice(0, m.lastIndexOf(b)))), !x && !k && (m = m.toLowerCase()), m;
      }, p = function(_) {
        return function(b) {
          return d(b, _);
        };
      }, h = function(_) {
        return _.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, g = function(v, _) {
        for (var y in _)
          if (_[y] === v)
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
}), h1 = Nm({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    X(), t.exports = p1();
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
function m1(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function g1(e) {
  const t = e.__file;
  if (t)
    return QE(JE(t, ".vue"));
}
function yd(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Fc(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Dm(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, o = Fc(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === s : !1;
}
function Ea(e) {
  var t, n, s;
  const o = m1(e?.type || {});
  if (o)
    return o;
  if (e?.root === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === e?.type)
      return yd(e, i);
  for (const i in (s = e.appContext) == null ? void 0 : s.components)
    if (e.appContext.components[i] === e?.type)
      return yd(e, i);
  const r = g1(e?.type || {});
  return r || "Anonymous Component";
}
function v1(e) {
  var t, n, s;
  const o = (s = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, r = e === e?.root ? "root" : e.uid;
  return `${o}:${r}`;
}
function $l(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function _1() {
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
function y1(e) {
  return li || (li = document.createRange()), li.selectNode(e), li.getBoundingClientRect();
}
function b1(e) {
  const t = _1();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const o = e.children[n];
    let r;
    if (o.component)
      r = Ys(o.component);
    else if (o.el) {
      const i = o.el;
      i.nodeType === 1 || i.getBoundingClientRect ? r = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (r = y1(i));
    }
    r && E1(t, r);
  }
  return t;
}
function E1(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var bd = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Ys(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? bd : Dm(e) ? b1(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Ys(e.subTree.component) : bd;
}
X();
function Bc(e) {
  return Dm(e) ? w1(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function w1(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...Bc(n.component)) : n?.el && t.push(n.el);
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
}, A1 = {
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
}, S1 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Bo() {
  return document.getElementById(xm);
}
function C1() {
  return document.getElementById(km);
}
function O1() {
  return document.getElementById(Im);
}
function T1() {
  return document.getElementById(Rm);
}
function jc(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function $c(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : xm, Object.assign(n.style, {
    ...Pm,
    ...jc(e.bounds),
    ...e.style
  });
  const s = document.createElement("span");
  s.id = km, Object.assign(s.style, {
    ...A1,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const o = document.createElement("span");
  o.id = Rm, o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const r = document.createElement("i");
  return r.id = Im, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(r.style, S1), s.appendChild(o), s.appendChild(r), n.appendChild(s), document.body.appendChild(n), n;
}
function Uc(e) {
  const t = Bo(), n = C1(), s = T1(), o = O1();
  t && (Object.assign(t.style, {
    ...Pm,
    ...jc(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function N1(e) {
  const t = Ys(e);
  if (!t.width && !t.height)
    return;
  const n = Ea(e);
  Bo() ? Uc({ bounds: t, name: n }) : $c({ bounds: t, name: n });
}
function Mm() {
  const e = Bo();
  e && (e.style.display = "none");
}
var Ul = null;
function Hl(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Ul = n, n.vnode.el)) {
      const o = Ys(n), r = Ea(n);
      Bo() ? Uc({ bounds: o, name: r }) : $c({ bounds: o, name: r });
    }
  }
}
function D1(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Ul) {
    const n = v1(Ul);
    t(n);
  }
}
var Zi = null;
function x1() {
  Mm(), window.removeEventListener("mouseover", Hl), window.removeEventListener("click", Zi, !0), Zi = null;
}
function k1() {
  return window.addEventListener("mouseover", Hl), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), D1(n, (s) => {
        window.removeEventListener("click", t, !0), Zi = null, window.removeEventListener("mouseover", Hl);
        const o = Bo();
        o && (o.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    Zi = t, window.addEventListener("click", t, !0);
  });
}
function R1(e) {
  const t = $l(At.value, e.id);
  if (t) {
    const [n] = Bc(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = Ys(t), o = document.createElement("div"), r = {
        ...jc(s),
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
        r ? Uc({ ...e, name: o, bounds: s }) : $c({ ...e, name: o, bounds: s }), setTimeout(() => {
          r && (r.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
X();
var Ed, wd;
(wd = (Ed = de).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Ed.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function I1(e) {
  let t = 0;
  const n = setInterval(() => {
    de.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function P1() {
  const e = de.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function M1() {
  return new Promise((e) => {
    function t() {
      P1(), e(de.__VUE_INSPECTOR__);
    }
    de.__VUE_INSPECTOR__ ? t() : I1(() => {
      t();
    });
  });
}
X();
X();
function V1(e) {
  return !!(e && e.__v_isReadonly);
}
function Vm(e) {
  return V1(e) ? Vm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ja(e) {
  return !!(e && e.__v_isRef === !0);
}
function ar(e) {
  const t = e && e.__v_raw;
  return t ? ar(t) : e;
}
var L1 = class {
  constructor() {
    this.refEditor = new F1();
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
}, F1 = class {
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
    return Ja(e) || Vm(e);
  }
};
X();
X();
X();
var B1 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function j1() {
  if (!Sm || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(B1);
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
var Ad, Sd;
(Sd = (Ad = de).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Ad.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var $1 = new Proxy(de.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function U1(e, t) {
  ft.timelineLayersState[t.id] = !1, $1.push({
    ...e,
    descriptorId: t.id,
    appRecord: Fc(t.app)
  });
}
var Cd, Od;
(Od = (Cd = de).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Cd.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Hc = new Proxy(de.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), Lm = Co(() => {
  jo.hooks.callHook("sendInspectorToClient", Fm());
});
function H1(e, t) {
  var n, s;
  Hc.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Fc(t.app)
  }), Lm();
}
function Fm() {
  return Hc.filter((e) => e.descriptor.app === At.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function Ti(e, t) {
  return Hc.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function W1() {
  const e = Om();
  e.hook("addInspector", ({ inspector: s, plugin: o }) => {
    H1(s, o.descriptor);
  });
  const t = Co(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ft.highPerfModeEnabled)
      return;
    const i = Ti(s, o.descriptor.app), a = {
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
    const i = Ti(s, o.descriptor.app), a = {
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
    const i = Ti(s, r.descriptor.app);
    i && (i.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: o }) => {
    U1(s, o.descriptor);
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
    o && N1(o);
  }), e.hook("componentUnhighlight", () => {
    Mm();
  }), e;
}
var Td, Nd;
(Nd = (Td = de).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Td.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Dd, xd;
(xd = (Dd = de).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Dd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var kd, Rd;
(Rd = (kd = de).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (kd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Id, Pd;
(Pd = (Id = de).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Id.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Md, Vd;
(Vd = (Md = de).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Md.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Ds = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function K1() {
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
var Ld, Fd;
(Fd = (Ld = de)[Ds]) != null || (Ld[Ds] = K1());
var z1 = Co((e) => {
  jo.hooks.callHook("devtoolsStateUpdated", { state: e });
});
Co((e, t) => {
  jo.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var wa = new Proxy(de.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? de.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : de.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), At = new Proxy(de.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? de.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? de.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : de.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Bm() {
  z1({
    ...de[Ds],
    appRecords: wa.value,
    activeAppRecordId: At.id,
    tabs: de.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: de.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function q1(e) {
  de.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Bm();
}
function Y1(e) {
  de.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Bm();
}
var ft = new Proxy(de[Ds], {
  get(e, t) {
    return t === "appRecords" ? wa : t === "activeAppRecordId" ? At.id : t === "tabs" ? de.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? de.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : de[Ds][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...de[Ds] }, e[t] = n, de[Ds][t] = n, !0;
  }
});
function X1(e = {}) {
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
      const f = (s = de.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? s : i;
      de.__VUE_INSPECTOR__.openInEditor(f, o, a, c);
    }
  }
}
X();
X();
X();
X();
X();
var Bd, jd;
(jd = (Bd = de).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Bd.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Wc = new Proxy(de.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
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
function Kc(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function G1(e) {
  var t, n, s;
  const o = (n = (t = Wc.find((r) => {
    var i;
    return r[0].id === e && !!((i = r[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = o?.settings) != null ? s : null;
}
function jm(e, t) {
  var n, s, o;
  const r = Kc(e);
  if (r) {
    const i = localStorage.getItem(r);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (s = (n = Wc.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? s : null;
    return Wl((o = i?.settings) != null ? o : {});
  }
  return Wl(t);
}
function Q1(e, t) {
  const n = Kc(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Wl(t)));
}
function J1(e, t, n) {
  const s = Kc(e), o = localStorage.getItem(s), r = JSON.parse(o || "{}"), i = {
    ...r,
    [t]: n
  };
  localStorage.setItem(s, JSON.stringify(i)), jo.hooks.callHookWith(
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
var $d, Ud, Mt = (Ud = ($d = de).__VUE_DEVTOOLS_HOOK) != null ? Ud : $d.__VUE_DEVTOOLS_HOOK = Om(), Z1 = {
  vueAppInit(e) {
    Mt.hook("app:init", e);
  },
  vueAppUnmount(e) {
    Mt.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    Mt.hook("app:connected", e);
  },
  componentAdded(e) {
    return Mt.hook("component:added", e);
  },
  componentEmit(e) {
    return Mt.hook("component:emit", e);
  },
  componentUpdated(e) {
    return Mt.hook("component:updated", e);
  },
  componentRemoved(e) {
    return Mt.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    Mt.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return Mt.hook("perf:start", e);
  },
  perfEnd(e) {
    return Mt.hook("perf:end", e);
  }
}, $m = {
  on: Z1,
  setupDevToolsPlugin(e, t) {
    return Mt.callHook("devtools-plugin:setup", e, t);
  }
}, e0 = class {
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
    const n = Fm().find((s) => s.packageName === this.plugin.descriptor.packageName);
    if (n?.id) {
      if (e) {
        const s = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        Mt.callHook("component:updated", ...s);
      } else
        Mt.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Q1(e.id, this.plugin.descriptor.settings);
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
}, t0 = e0;
X();
X();
X();
X();
var n0 = "__vue_devtool_undefined__", s0 = "__vue_devtool_infinity__", o0 = "__vue_devtool_negative_infinity__", r0 = "__vue_devtool_nan__";
X();
X();
var i0 = {
  [n0]: "undefined",
  [r0]: "NaN",
  [s0]: "Infinity",
  [o0]: "-Infinity"
};
Object.entries(i0).reduce((e, [t, n]) => (e[n] = t, e), {});
X();
X();
X();
X();
X();
var Hd, Wd;
(Wd = (Hd = de).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Hd.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Um(e, t) {
  return $m.setupDevToolsPlugin(e, t);
}
function a0(e, t) {
  const [n, s] = e;
  if (n.app !== t)
    return;
  const o = new t0({
    plugin: {
      setupFn: s,
      descriptor: n
    },
    ctx: jo
  });
  n.packageName === "vuex" && o.on.editInspectorState((r) => {
    o.sendInspectorState(r.inspectorId);
  }), s(o);
}
function Hm(e, t) {
  de.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || ft.highPerfModeEnabled && !t?.inspectingComponent || (de.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Wc.forEach((n) => {
    a0(n, e);
  }));
}
X();
X();
var xr = "__VUE_DEVTOOLS_ROUTER__", Oo = "__VUE_DEVTOOLS_ROUTER_INFO__", Kd, zd;
(zd = (Kd = de)[Oo]) != null || (Kd[Oo] = {
  currentRoute: null,
  routes: []
});
var qd, Yd;
(Yd = (qd = de)[xr]) != null || (qd[xr] = {});
new Proxy(de[Oo], {
  get(e, t) {
    return de[Oo][t];
  }
});
new Proxy(de[xr], {
  get(e, t) {
    if (t === "value")
      return de[xr];
  }
});
function l0(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function zc(e) {
  return e.map((t) => {
    let { path: n, name: s, children: o, meta: r } = t;
    return o?.length && (o = zc(o)), {
      path: n,
      name: s,
      children: o,
      meta: r
    };
  });
}
function c0(e) {
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
      matched: zc(i)
    };
  }
  return e;
}
function u0(e, t) {
  function n() {
    var s;
    const o = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, r = c0(o?.currentRoute.value), i = zc(l0(o)), a = console.warn;
    console.warn = () => {
    }, de[Oo] = {
      currentRoute: r ? _d(r) : {},
      routes: _d(i)
    }, de[xr] = o, console.warn = a;
  }
  n(), $m.on.componentUpdated(Co(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !ft.highPerfModeEnabled && jo.hooks.callHook("routerInfoUpdated", { state: de[Oo] }));
  }, 200));
}
function d0(e) {
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
      const n = new L1(), s = {
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
      const n = Ti(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return k1();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return x1();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = $l(At.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return R1({ id: t });
    },
    // open in editor
    openInEditor: X1,
    // get vue inspector
    getVueInspector: M1,
    // toggle app
    toggleApp(t, n) {
      const s = wa.value.find((o) => o.id === t);
      s && (Y1(t), q1(s), u0(s, At), Lm(), Hm(s.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = $l(At.value, t);
      if (n) {
        const [s] = Bc(n);
        s && (de.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = s);
      }
    },
    updatePluginSettings(t, n, s) {
      J1(t, n, s);
    },
    getPluginSettings(t) {
      return {
        options: G1(t),
        values: jm(t)
      };
    }
  };
}
X();
var Xd, Gd;
(Gd = (Xd = de).__VUE_DEVTOOLS_ENV__) != null || (Xd.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var Qd = W1(), Jd, Zd;
(Zd = (Jd = de).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (Jd.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Qd,
  get state() {
    return {
      ...ft,
      activeAppRecordId: At.id,
      activeAppRecord: At.value,
      appRecords: wa.value
    };
  },
  api: d0(Qd)
});
var jo = de.__VUE_DEVTOOLS_KIT_CONTEXT__;
X();
f1(h1());
var ef, tf;
(tf = (ef = de).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (ef.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
X();
X();
function f0(e) {
  ft.highPerfModeEnabled = e ?? !ft.highPerfModeEnabled, !e && At.value && Hm(At.value.app);
}
X();
X();
X();
function p0(e) {
  ft.devtoolsClientDetected = {
    ...ft.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(ft.devtoolsClientDetected).some(Boolean);
  f0(!t);
}
var nf, sf;
(sf = (nf = de).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (nf.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = p0);
X();
X();
X();
X();
X();
X();
X();
var h0 = class {
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
}, Wm = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new h0();
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
}, m0 = class extends Wm {
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
function g0(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function v0(e, t) {
  const n = g0(e);
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
function Ni(e, t) {
  return e.indexOf(t) !== -1;
}
function of(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var _0 = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return v0(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
X();
X();
var y0 = (e) => Object.prototype.toString.call(e).slice(8, -1), Km = (e) => typeof e > "u", b0 = (e) => e === null, kr = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Kl = (e) => kr(e) && Object.keys(e).length === 0, ds = (e) => Array.isArray(e), E0 = (e) => typeof e == "string", w0 = (e) => typeof e == "number" && !isNaN(e), A0 = (e) => typeof e == "boolean", S0 = (e) => e instanceof RegExp, Rr = (e) => e instanceof Map, Ir = (e) => e instanceof Set, zm = (e) => y0(e) === "Symbol", C0 = (e) => e instanceof Date && !isNaN(e.valueOf()), O0 = (e) => e instanceof Error, rf = (e) => typeof e == "number" && isNaN(e), T0 = (e) => A0(e) || b0(e) || Km(e) || w0(e) || E0(e) || zm(e), N0 = (e) => typeof e == "bigint", D0 = (e) => e === 1 / 0 || e === -1 / 0, x0 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), k0 = (e) => e instanceof URL;
X();
var qm = (e) => e.replace(/\./g, "\\."), Za = (e) => e.map(String).map(qm).join("."), gr = (e) => {
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
function vn(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Ym = [
  vn(Km, "undefined", () => null, () => {
  }),
  vn(N0, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  vn(C0, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  vn(O0, "Error", (e, t) => {
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
  vn(S0, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  vn(
    Ir,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  vn(Rr, "map", (e) => [...e.entries()], (e) => new Map(e)),
  vn((e) => rf(e) || D0(e), "number", (e) => rf(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  vn((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  vn(k0, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Aa(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Xm = Aa((e, t) => zm(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const s = n.symbolRegistry.getValue(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown symbol");
  return s;
}), R0 = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Gm = Aa(x0, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = R0[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Qm(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Jm = Aa(Qm, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), Zm = Aa((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), I0 = [Jm, Xm, Zm, Gm], af = (e, t) => {
  const n = of(I0, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = of(Ym, (o) => o.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, eg = {};
Ym.forEach((e) => {
  eg[e.annotation] = e;
});
var P0 = (e, t, n) => {
  if (ds(t))
    switch (t[0]) {
      case "symbol":
        return Xm.untransform(e, t, n);
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
X();
var go = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function tg(e) {
  if (Ni(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Ni(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Ni(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var M0 = (e, t) => {
  tg(t);
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
}, zl = (e, t, n) => {
  if (tg(t), t.length === 0)
    return n(e);
  let s = e;
  for (let r = 0; r < t.length - 1; r++) {
    const i = t[r];
    if (ds(s)) {
      const a = +i;
      s = s[a];
    } else if (kr(s))
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
  if (ds(s) ? s[+o] = n(s[+o]) : kr(s) && (s[o] = n(s[o])), Ir(s)) {
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
function ql(e, t, n = []) {
  if (!e)
    return;
  if (!ds(e)) {
    To(e, (r, i) => ql(r, t, [...n, ...gr(i)]));
    return;
  }
  const [s, o] = e;
  o && To(o, (r, i) => {
    ql(r, t, [...n, ...gr(i)]);
  }), t(s, n);
}
function V0(e, t, n) {
  return ql(t, (s, o) => {
    e = zl(e, o, (r) => P0(r, s, n));
  }), e;
}
function L0(e, t) {
  function n(s, o) {
    const r = M0(e, gr(o));
    s.map(gr).forEach((i) => {
      e = zl(e, i, () => r);
    });
  }
  if (ds(t)) {
    const [s, o] = t;
    s.forEach((r) => {
      e = zl(e, gr(r), () => e);
    }), o && To(o, n);
  } else
    To(t, n);
  return e;
}
var F0 = (e, t) => kr(e) || ds(e) || Rr(e) || Ir(e) || Qm(e, t);
function B0(e, t, n) {
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
  }), s ? Kl(n) ? [s] : [s, n] : Kl(n) ? void 0 : n;
}
var ng = (e, t, n, s, o = [], r = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const c = T0(e);
  if (!c) {
    B0(e, o, t);
    const g = i.get(e);
    if (g)
      return s ? {
        transformedValue: null
      } : g;
  }
  if (!F0(e, n)) {
    const g = af(e, n), v = g ? {
      transformedValue: g.value,
      annotations: [g.type]
    } : {
      transformedValue: e
    };
    return c || i.set(e, v), v;
  }
  if (Ni(r, e))
    return {
      transformedValue: null
    };
  const f = af(e, n), u = (a = f?.value) != null ? a : e, d = ds(u) ? [] : {}, p = {};
  To(u, (g, v) => {
    if (v === "__proto__" || v === "constructor" || v === "prototype")
      throw new Error(`Detected property ${v}. This is a prototype pollution risk, please remove it from your object.`);
    const _ = ng(g, t, n, s, [...o, v], [...r, e], i);
    d[v] = _.transformedValue, ds(_.annotations) ? p[v] = _.annotations : kr(_.annotations) && To(_.annotations, (y, b) => {
      p[qm(v) + "." + b] = y;
    });
  });
  const h = Kl(p) ? {
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
function sg(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function lf(e) {
  return sg(e) === "Array";
}
function $0(e) {
  if (sg(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function U0(e, t, n, s, o) {
  const r = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  r === "enumerable" && (e[t] = n), o && r === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Yl(e, t = {}) {
  if (lf(e))
    return e.map((o) => Yl(o, t));
  if (!$0(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((o, r) => {
    if (lf(t.props) && !t.props.includes(r))
      return o;
    const i = e[r], a = Yl(i, t);
    return U0(o, r, a, e, t.nonenumerable), o;
  }, {});
}
var Xe = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new m0(), this.symbolRegistry = new Wm((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new _0(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = ng(e, t, this, this.dedupe), s = {
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
    let s = Yl(t);
    return n?.values && (s = V0(s, n.values, this)), n?.referentialEqualities && (s = L0(s, n.referentialEqualities)), s;
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
var cf, uf;
(uf = (cf = de).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (cf.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var df, ff;
(ff = (df = de).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (df.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var pf, hf;
(hf = (pf = de).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (pf.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var mf, gf;
(gf = (mf = de).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (mf.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var vf, _f;
(_f = (vf = de).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (vf.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var yf, bf;
(bf = (yf = de).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (yf.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
X();
X();
X();
X();
X();
X();
X();
var Ve = {};
let lr;
const Pr = (e) => lr = e, og = Ve.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Xs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Sn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Sn || (Sn = {}));
const as = typeof window < "u", Ef = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function H0(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function qc(e, t, n) {
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
function Di(e) {
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
const xi = typeof navigator == "object" ? navigator : { userAgent: "" }, ig = /Macintosh/.test(xi.userAgent) && /AppleWebKit/.test(xi.userAgent) && !/Safari/.test(xi.userAgent), ag = as ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ig ? W0 : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in xi ? K0 : (
      // Fallback to using FileReader and a popup
      z0
    )
  )
) : () => {
};
function W0(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? rg(s.href) ? qc(e, t, n) : (s.target = "_blank", Di(s)) : Di(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    Di(s);
  }, 0));
}
function K0(e, t = "download", n) {
  if (typeof e == "string")
    if (rg(e))
      qc(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        Di(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(H0(e, n), t);
}
function z0(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return qc(e, t, n);
  const o = e.type === "application/octet-stream", r = /constructor/i.test(String(Ef.HTMLElement)) || "safari" in Ef, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && r || ig) && typeof FileReader < "u") {
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
function Yc(e) {
  return "_a" in e && "install" in e;
}
function lg() {
  if (!("clipboard" in navigator))
    return pt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function cg(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (pt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function q0(e) {
  if (!lg())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), pt("Global state copied to clipboard.");
    } catch (t) {
      if (cg(t))
        return;
      pt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Y0(e) {
  if (!lg())
    try {
      ug(e, JSON.parse(await navigator.clipboard.readText())), pt("Global state pasted from clipboard.");
    } catch (t) {
      if (cg(t))
        return;
      pt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function X0(e) {
  try {
    ag(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    pt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Pn;
function G0() {
  Pn || (Pn = document.createElement("input"), Pn.type = "file", Pn.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Pn.onchange = async () => {
        const s = Pn.files;
        if (!s)
          return t(null);
        const o = s.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Pn.oncancel = () => t(null), Pn.onerror = n, Pn.click();
    });
  }
  return e;
}
async function Q0(e) {
  try {
    const n = await G0()();
    if (!n)
      return;
    const { text: s, file: o } = n;
    ug(e, JSON.parse(s)), pt(`Global state imported from "${o.name}".`);
  } catch (t) {
    pt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function ug(e, t) {
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
const dg = "🍍 Pinia (root)", ki = "_root";
function J0(e) {
  return Yc(e) ? {
    id: ki,
    label: dg
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Z0(e) {
  if (Yc(e)) {
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
function ew(e) {
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
function tw(e) {
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
let vo = !0;
const Ri = [], Os = "pinia:mutations", gt = "pinia", { assign: nw } = Object, ea = (e) => "🍍 " + e;
function sw(e, t) {
  Um({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ri,
    app: e
  }, (n) => {
    typeof n.now != "function" && pt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Os,
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
            q0(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Y0(t), n.sendInspectorTree(gt), n.sendInspectorState(gt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            X0(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Q0(t), n.sendInspectorTree(gt), n.sendInspectorState(gt);
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
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(s.filter.toLowerCase()) : dg.toLowerCase().includes(s.filter.toLowerCase())) : o).map(J0);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === gt) {
        const o = s.nodeId === ki ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.nodeId !== ki && (globalThis.$store = Oe(o)), s.state = Z0(o));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === gt) {
        const o = s.nodeId === ki ? t : t._s.get(s.nodeId);
        if (!o)
          return pt(`store "${s.nodeId}" not found`, "error");
        const { path: r } = s;
        Yc(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), vo = !1, s.set(o, r, s.state.value), vo = !0;
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
function ow(e, t) {
  Ri.includes(ea(t.$id)) || Ri.push(ea(t.$id)), Um({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ri,
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
      const u = fg++;
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
        ls = void 0, n.addTimelineEvent({
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
        ls = void 0, n.addTimelineEvent({
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
      Rt(() => oe(t[i]), (a, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(gt), vo && n.addTimelineEvent({
          layerId: Os,
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
        title: tw(a),
        data: nw({ store: Zt(t.$id) }, ew(i)),
        groupId: ls
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
    t._hotUpdate = is((i) => {
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
      }), n.notifyComponentUpdate(), n.sendInspectorTree(gt), n.sendInspectorState(gt);
    });
    const { $dispose: r } = t;
    t.$dispose = () => {
      r(), n.notifyComponentUpdate(), n.sendInspectorTree(gt), n.sendInspectorState(gt), n.getSettings().logStoreChanges && pt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(gt), n.sendInspectorState(gt), n.getSettings().logStoreChanges && pt(`"${t.$id}" store installed 🆕`);
  });
}
let fg = 0, ls;
function wf(e, t, n) {
  const s = t.reduce((o, r) => (o[r] = Oe(e)[r], o), {});
  for (const o in s)
    e[o] = function() {
      const r = fg, i = n ? new Proxy(e, {
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
function rw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      wf(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      Oe(t)._hotUpdate = function(o) {
        s.apply(this, arguments), wf(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    ow(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function iw() {
  const e = Qp(!0), t = e.run(() => U({}));
  let n = [], s = [];
  const o = is({
    install(r) {
      Pr(o), o._a = r, r.provide(og, o), r.config.globalProperties.$pinia = o, Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && as && sw(r, o), s.forEach((i) => n.push(i)), s = [];
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
  return Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && as && typeof Proxy < "u" && o.use(rw), o;
}
function pg(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Xs(o) && Xs(s) && !qe(s) && !on(s) ? e[n] = pg(o, s) : e[n] = s;
  }
  return e;
}
const hg = () => {
};
function Af(e, t, n, s = hg) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && Jp() && j_(o), o;
}
function io(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const aw = (e) => e(), Sf = Symbol(), el = Symbol();
function Xl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Xs(o) && Xs(s) && e.hasOwnProperty(n) && !qe(s) && !on(s) ? e[n] = Xl(o, s) : e[n] = s;
  }
  return e;
}
const lw = Ve.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function cw(e) {
  return !Xs(e) || !Object.prototype.hasOwnProperty.call(e, lw);
}
const { assign: Kt } = Object;
function Cf(e) {
  return !!(qe(e) && e.effect);
}
function Of(e, t, n, s) {
  const { state: o, actions: r, getters: i } = t, a = n.state.value[e];
  let c;
  function f() {
    !a && (Ve.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const u = Ve.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      cn(U(o ? o() : {}).value)
    ) : cn(n.state.value[e]);
    return Kt(u, r, Object.keys(i || {}).reduce((d, p) => (Ve.NODE_ENV !== "production" && p in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${e}".`), d[p] = is($(() => {
      Pr(n);
      const h = n._s.get(e);
      return i[p].call(h, h);
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
  Ve.NODE_ENV !== "production" && (c.onTrigger = (w) => {
    f ? h = w : f == !1 && !x._hotUpdating && (Array.isArray(h) ? h.push(w) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, d = [], p = [], h;
  const g = s.state.value[e];
  !r && !g && (Ve.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const v = U({});
  let _;
  function y(w) {
    let D;
    f = u = !1, Ve.NODE_ENV !== "production" && (h = []), typeof w == "function" ? (w(s.state.value[e]), D = {
      type: Sn.patchFunction,
      storeId: e,
      events: h
    }) : (Xl(s.state.value[e], w), D = {
      type: Sn.patchObject,
      payload: w,
      storeId: e,
      events: h
    });
    const A = _ = Symbol();
    Ks().then(() => {
      _ === A && (f = !0);
    }), u = !0, io(d, D, s.state.value[e]);
  }
  const b = r ? function() {
    const { state: D } = n, A = D ? D() : {};
    this.$patch((F) => {
      Kt(F, A);
    });
  } : (
    /* istanbul ignore next */
    Ve.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : hg
  );
  function m() {
    i.stop(), d = [], p = [], s._s.delete(e);
  }
  const T = (w, D = "") => {
    if (Sf in w)
      return w[el] = D, w;
    const A = function() {
      Pr(s);
      const F = Array.from(arguments), ce = [], Y = [];
      function re(ye) {
        ce.push(ye);
      }
      function K(ye) {
        Y.push(ye);
      }
      io(p, {
        args: F,
        name: A[el],
        store: x,
        after: re,
        onError: K
      });
      let le;
      try {
        le = w.apply(this && this.$id === e ? this : x, F);
      } catch (ye) {
        throw io(Y, ye), ye;
      }
      return le instanceof Promise ? le.then((ye) => (io(ce, ye), ye)).catch((ye) => (io(Y, ye), Promise.reject(ye))) : (io(ce, le), le);
    };
    return A[Sf] = !0, A[el] = D, A;
  }, R = /* @__PURE__ */ is({
    actions: {},
    getters: {},
    state: [],
    hotState: v
  }), O = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Af.bind(null, p),
    $patch: y,
    $reset: b,
    $subscribe(w, D = {}) {
      const A = Af(d, w, D.detached, () => F()), F = i.run(() => Rt(() => s.state.value[e], (ce) => {
        (D.flush === "sync" ? u : f) && w({
          storeId: e,
          type: Sn.direct,
          events: h
        }, ce);
      }, Kt({}, c, D)));
      return A;
    },
    $dispose: m
  }, x = Ws(Ve.NODE_ENV !== "production" || Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && as ? Kt(
    {
      _hmrPayload: R,
      _customProperties: is(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    O
    // must be added later
    // setupStore
  ) : O);
  s._s.set(e, x);
  const S = (s._a && s._a.runWithContext || aw)(() => s._e.run(() => (i = Qp()).run(() => t({ action: T }))));
  for (const w in S) {
    const D = S[w];
    if (qe(D) && !Cf(D) || on(D))
      Ve.NODE_ENV !== "production" && o ? v.value[w] = yi(S, w) : r || (g && cw(D) && (qe(D) ? D.value = g[w] : Xl(D, g[w])), s.state.value[e][w] = D), Ve.NODE_ENV !== "production" && R.state.push(w);
    else if (typeof D == "function") {
      const A = Ve.NODE_ENV !== "production" && o ? D : T(D, w);
      S[w] = A, Ve.NODE_ENV !== "production" && (R.actions[w] = D), a.actions[w] = D;
    } else Ve.NODE_ENV !== "production" && Cf(D) && (R.getters[w] = r ? (
      // @ts-expect-error
      n.getters[w]
    ) : D, as && (S._getters || // @ts-expect-error: same
    (S._getters = is([]))).push(w));
  }
  if (Kt(x, S), Kt(Oe(x), S), Object.defineProperty(x, "$state", {
    get: () => Ve.NODE_ENV !== "production" && o ? v.value : s.state.value[e],
    set: (w) => {
      if (Ve.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      y((D) => {
        Kt(D, w);
      });
    }
  }), Ve.NODE_ENV !== "production" && (x._hotUpdate = is((w) => {
    x._hotUpdating = !0, w._hmrPayload.state.forEach((D) => {
      if (D in x.$state) {
        const A = w.$state[D], F = x.$state[D];
        typeof A == "object" && Xs(A) && Xs(F) ? pg(A, F) : w.$state[D] = F;
      }
      x[D] = yi(w.$state, D);
    }), Object.keys(x.$state).forEach((D) => {
      D in w.$state || delete x[D];
    }), f = !1, u = !1, s.state.value[e] = yi(w._hmrPayload, "hotState"), u = !0, Ks().then(() => {
      f = !0;
    });
    for (const D in w._hmrPayload.actions) {
      const A = w[D];
      x[D] = //
      T(A, D);
    }
    for (const D in w._hmrPayload.getters) {
      const A = w._hmrPayload.getters[D], F = r ? (
        // special handling of options api
        $(() => (Pr(s), A.call(x, x)))
      ) : A;
      x[D] = //
      F;
    }
    Object.keys(x._hmrPayload.getters).forEach((D) => {
      D in w._hmrPayload.getters || delete x[D];
    }), Object.keys(x._hmrPayload.actions).forEach((D) => {
      D in w._hmrPayload.actions || delete x[D];
    }), x._hmrPayload = w._hmrPayload, x._getters = w._getters, x._hotUpdating = !1;
  })), Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && as) {
    const w = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((D) => {
      Object.defineProperty(x, D, Kt({ value: x[D] }, w));
    });
  }
  return s._p.forEach((w) => {
    if (Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && as) {
      const D = i.run(() => w({
        store: x,
        app: s._a,
        pinia: s,
        options: a
      }));
      Object.keys(D || {}).forEach((A) => x._customProperties.add(A)), Kt(x, D);
    } else
      Kt(x, i.run(() => w({
        store: x,
        app: s._a,
        pinia: s,
        options: a
      })));
  }), Ve.NODE_ENV !== "production" && x.$state && typeof x.$state == "object" && typeof x.$state.constructor == "function" && !x.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${x.$id}".`), g && r && n.hydrate && n.hydrate(x.$state, g), f = !0, u = !0, x;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qn(e, t, n) {
  let s;
  const o = typeof t == "function";
  s = o ? n : t;
  function r(i, a) {
    const c = fb();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (Ve.NODE_ENV === "test" && lr && lr._testing ? null : i) || (c ? Ft(og, null) : null), i && Pr(i), Ve.NODE_ENV !== "production" && !lr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = lr, i._s.has(e) || (o ? Gl(e, t, s, i) : Of(e, s, i), Ve.NODE_ENV !== "production" && (r._pinia = i));
    const f = i._s.get(e);
    if (Ve.NODE_ENV !== "production" && a) {
      const u = "__hot:" + e, d = o ? Gl(u, t, s, i, !0) : Of(u, Kt({}, s), i, !0);
      a._hotUpdate(d), delete i.state.value[u], i._s.delete(u);
    }
    if (Ve.NODE_ENV !== "production" && as) {
      const u = zn();
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
function $o(e) {
  const t = Oe(e), n = {};
  for (const s in t) {
    const o = t[s];
    o.effect ? n[s] = // ...
    $({
      get: () => e[s],
      set(r) {
        e[s] = r;
      }
    }) : (qe(o) || on(o)) && (n[s] = // ---
    yi(e, s));
  }
  return n;
}
function uw() {
  return mg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function mg() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const dw = typeof Proxy == "function", fw = "devtools-plugin:setup", pw = "plugin:settings:set";
let ao, Ql;
function hw() {
  var e;
  return ao !== void 0 || (typeof window < "u" && window.performance ? (ao = !0, Ql = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (ao = !0, Ql = globalThis.perf_hooks.performance) : ao = !1), ao;
}
function mw() {
  return hw() ? Ql.now() : Date.now();
}
class gw {
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
        return mw();
      }
    }, n && n.on(pw, (i, a) => {
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
function vw(e, t) {
  const n = e, s = mg(), o = uw(), r = dw && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    o.emit(fw, e, t);
  else {
    const i = r ? new gw(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
var Te = {};
const Ln = typeof document < "u";
function gg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function _w(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && gg(e.default);
}
const $e = Object.assign;
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
function Ie(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const vg = /#/g, yw = /&/g, bw = /\//g, Ew = /=/g, ww = /\?/g, _g = /\+/g, Aw = /%5B/g, Sw = /%5D/g, yg = /%5E/g, Cw = /%60/g, bg = /%7B/g, Ow = /%7C/g, Eg = /%7D/g, Tw = /%20/g;
function Xc(e) {
  return encodeURI("" + e).replace(Ow, "|").replace(Aw, "[").replace(Sw, "]");
}
function Nw(e) {
  return Xc(e).replace(bg, "{").replace(Eg, "}").replace(yg, "^");
}
function Jl(e) {
  return Xc(e).replace(_g, "%2B").replace(Tw, "+").replace(vg, "%23").replace(yw, "%26").replace(Cw, "`").replace(bg, "{").replace(Eg, "}").replace(yg, "^");
}
function Dw(e) {
  return Jl(e).replace(Ew, "%3D");
}
function xw(e) {
  return Xc(e).replace(vg, "%23").replace(ww, "%3F");
}
function kw(e) {
  return e == null ? "" : xw(e).replace(bw, "%2F");
}
function No(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    Te.NODE_ENV !== "production" && Ie(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Rw = /\/$/, Iw = (e) => e.replace(Rw, "");
function nl(e, t, n = "/") {
  let s, o = {}, r = "", i = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return a < c && a >= 0 && (c = -1), c > -1 && (s = t.slice(0, c), r = t.slice(c + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (s = s || t.slice(0, a), i = t.slice(a, t.length)), s = Vw(s ?? t, n), {
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
function Tf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Nf(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && fs(t.matched[s], n.matched[o]) && wg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function fs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Mw(e[n], t[n]))
      return !1;
  return !0;
}
function Mw(e, t) {
  return Bt(e) ? Df(e, t) : Bt(t) ? Df(t, e) : e === t;
}
function Df(e, t) {
  return Bt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Vw(e, t) {
  if (e.startsWith("/"))
    return e;
  if (Te.NODE_ENV !== "production" && !t.startsWith("/"))
    return Ie(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Mr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Mr || (Mr = {}));
var _r;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(_r || (_r = {}));
function Lw(e) {
  if (!e)
    if (Ln) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Iw(e);
}
const Fw = /^[^#]+#/;
function Bw(e, t) {
  return e.replace(Fw, "#") + t;
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
function $w(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if (Te.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const r = document.querySelector(e.el);
        if (s && r) {
          Ie(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Ie(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      Te.NODE_ENV !== "production" && Ie(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = jw(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function xf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Zl = /* @__PURE__ */ new Map();
function Uw(e, t) {
  Zl.set(e, t);
}
function Hw(e) {
  const t = Zl.get(e);
  return Zl.delete(e), t;
}
let Ww = () => location.protocol + "//" + location.host;
function Ag(e, t) {
  const { pathname: n, search: s, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, c = o.slice(a);
    return c[0] !== "/" && (c = "/" + c), Tf(c, "");
  }
  return Tf(n, e) + s + o;
}
function Kw(e, t, n, s) {
  let o = [], r = [], i = null;
  const a = ({ state: p }) => {
    const h = Ag(e, location), g = n.value, v = t.value;
    let _ = 0;
    if (p) {
      if (n.value = h, t.value = p, i && i === g) {
        i = null;
        return;
      }
      _ = v ? p.position - v.position : 0;
    } else
      s(h);
    o.forEach((y) => {
      y(n.value, g, {
        delta: _,
        type: Mr.pop,
        direction: _ ? _ > 0 ? _r.forward : _r.back : _r.unknown
      });
    });
  };
  function c() {
    i = n.value;
  }
  function f(p) {
    o.push(p);
    const h = () => {
      const g = o.indexOf(p);
      g > -1 && o.splice(g, 1);
    };
    return r.push(h), h;
  }
  function u() {
    const { history: p } = window;
    p.state && p.replaceState($e({}, p.state, { scroll: Sa() }), "");
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
function kf(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? Sa() : null
  };
}
function zw(e) {
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
  function r(c, f, u) {
    const d = e.indexOf("#"), p = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : Ww() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](f, "", p), o.value = f;
    } catch (h) {
      Te.NODE_ENV !== "production" ? Ie("Error with push/replace State", h) : console.error(h), n[u ? "replace" : "assign"](p);
    }
  }
  function i(c, f) {
    const u = $e({}, t.state, kf(
      o.value.back,
      // keep back and forward entries but override current position
      c,
      o.value.forward,
      !0
    ), f, { position: o.value.position });
    r(c, u, !0), s.value = c;
  }
  function a(c, f) {
    const u = $e(
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
    Te.NODE_ENV !== "production" && !t.state && Ie(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), r(u.current, u, !0);
    const d = $e({}, kf(s.value, c, null), { position: u.position + 1 }, f);
    r(c, d, !1), s.value = c;
  }
  return {
    location: s,
    state: o,
    push: a,
    replace: i
  };
}
function qw(e) {
  e = Lw(e);
  const t = zw(e), n = Kw(e, t.state, t.location, t.replace);
  function s(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const o = $e({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: Bw.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function Yw(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Te.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Ie(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), qw(e);
}
function ta(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Sg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ec = Symbol(Te.NODE_ENV !== "production" ? "navigation failure" : "");
var Rf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Rf || (Rf = {}));
const Xw = {
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
function Do(e, t) {
  return Te.NODE_ENV !== "production" ? $e(new Error(Xw[e](t)), {
    type: e,
    [ec]: !0
  }, t) : $e(new Error(), {
    type: e,
    [ec]: !0
  }, t);
}
function Mn(e, t) {
  return e instanceof Error && ec in e && (t == null || !!(e.type & t));
}
const Gw = ["params", "query", "hash"];
function Qw(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of Gw)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const If = "[^/]+?", Jw = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Zw = /[.+*?^${}()[\]/\\]/g;
function eA(e, t) {
  const n = $e({}, Jw, t), s = [];
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
        d || (o += "/"), o += p.value.replace(Zw, "\\$&"), h += 40;
      else if (p.type === 1) {
        const { value: g, repeatable: v, optional: _, regexp: y } = p;
        r.push({
          name: g,
          repeatable: v,
          optional: _
        });
        const b = y || If;
        if (b !== If) {
          h += 10;
          try {
            new RegExp(`(${b})`);
          } catch (T) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${b}): ` + T.message);
          }
        }
        let m = v ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        d || (m = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        _ && f.length < 2 ? `(?:/${m})` : "/" + m), _ && (m += "?"), o += m, h += 20, _ && (h += -8), v && (h += -20), b === ".*" && (h += -50);
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
      const h = u[p] || "", g = r[p - 1];
      d[g.name] = h && g.repeatable ? h.split("/") : h;
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
          const { value: g, repeatable: v, optional: _ } = h, y = g in f ? f[g] : "";
          if (Bt(y) && !v)
            throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
          const b = Bt(y) ? y.join("/") : y;
          if (!b)
            if (_)
              p.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
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
    stringify: c
  };
}
function tA(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Cg(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const r = tA(s[n], o[n]);
    if (r)
      return r;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Pf(s))
      return 1;
    if (Pf(o))
      return -1;
  }
  return o.length - s.length;
}
function Pf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const nA = {
  type: 0,
  value: ""
}, sA = /[a-zA-Z0-9_]/;
function oA(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[nA]];
  if (!e.startsWith("/"))
    throw new Error(Te.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
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
        c === "(" ? n = 2 : sA.test(c) ? p() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--);
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
function rA(e, t, n) {
  const s = eA(oA(e.path), n);
  if (Te.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const i of s.keys)
      r.has(i.name) && Ie(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(i.name);
  }
  const o = $e(s, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function iA(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Ff({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(d) {
    return s.get(d);
  }
  function r(d, p, h) {
    const g = !h, v = Vf(d);
    Te.NODE_ENV !== "production" && uA(v, p), v.aliasOf = h && h.record;
    const _ = Ff(t, d), y = [v];
    if ("alias" in d) {
      const T = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const R of T)
        y.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Vf($e({}, v, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: h ? h.record.components : v.components,
            path: R,
            // we might be the child of an alias
            aliasOf: h ? h.record : v
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let b, m;
    for (const T of y) {
      const { path: R } = T;
      if (p && R[0] !== "/") {
        const O = p.record.path, x = O[O.length - 1] === "/" ? "" : "/";
        T.path = p.record.path + (R && x + R);
      }
      if (Te.NODE_ENV !== "production" && T.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (b = rA(T, p, _), Te.NODE_ENV !== "production" && p && R[0] === "/" && fA(b, p), h ? (h.alias.push(b), Te.NODE_ENV !== "production" && cA(h, b)) : (m = m || b, m !== b && m.alias.push(b), g && d.name && !Lf(b) && (Te.NODE_ENV !== "production" && dA(d, p), i(d.name))), Og(b) && c(b), v.children) {
        const O = v.children;
        for (let x = 0; x < O.length; x++)
          r(O[x], b, h && h.children[x]);
      }
      h = h || b;
    }
    return m ? () => {
      i(m);
    } : vr;
  }
  function i(d) {
    if (Sg(d)) {
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
    const p = pA(d, n);
    n.splice(p, 0, d), d.record.name && !Lf(d) && s.set(d.record.name, d);
  }
  function f(d, p) {
    let h, g = {}, v, _;
    if ("name" in d && d.name) {
      if (h = s.get(d.name), !h)
        throw Do(1, {
          location: d
        });
      if (Te.NODE_ENV !== "production") {
        const m = Object.keys(d.params || {}).filter((T) => !h.keys.find((R) => R.name === T));
        m.length && Ie(`Discarded invalid param(s) "${m.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      _ = h.record.name, g = $e(
        // paramsFromLocation is a new object
        Mf(
          p.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          h.keys.filter((m) => !m.optional).concat(h.parent ? h.parent.keys.filter((m) => m.optional) : []).map((m) => m.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && Mf(d.params, h.keys.map((m) => m.name))
      ), v = h.stringify(g);
    } else if (d.path != null)
      v = d.path, Te.NODE_ENV !== "production" && !v.startsWith("/") && Ie(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((m) => m.re.test(v)), h && (g = h.parse(v), _ = h.record.name);
    else {
      if (h = p.name ? s.get(p.name) : n.find((m) => m.re.test(p.path)), !h)
        throw Do(1, {
          location: d,
          currentLocation: p
        });
      _ = h.record.name, g = $e({}, p.params, d.params), v = h.stringify(g);
    }
    const y = [];
    let b = h;
    for (; b; )
      y.unshift(b.record), b = b.parent;
    return {
      name: _,
      path: v,
      params: g,
      matched: y,
      meta: lA(y)
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
function Mf(e, t) {
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
    props: aA(e),
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
function aA(e) {
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
function lA(e) {
  return e.reduce((t, n) => $e(t, n.meta), {});
}
function Ff(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function tc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function cA(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(tc.bind(null, n)))
      return Ie(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(tc.bind(null, n)))
      return Ie(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function uA(e, t) {
  t && t.record.name && !e.name && !e.path && Ie(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function dA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function fA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(tc.bind(null, n)))
      return Ie(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function pA(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const r = n + s >> 1;
    Cg(e, t[r]) < 0 ? s = r : n = r + 1;
  }
  const o = hA(e);
  return o && (s = t.lastIndexOf(o, s - 1), Te.NODE_ENV !== "production" && s < 0 && Ie(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), s;
}
function hA(e) {
  let t = e;
  for (; t = t.parent; )
    if (Og(t) && Cg(e, t) === 0)
      return t;
}
function Og({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function mA(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(_g, " "), i = r.indexOf("="), a = No(i < 0 ? r : r.slice(0, i)), c = i < 0 ? null : No(r.slice(i + 1));
    if (a in t) {
      let f = t[a];
      Bt(f) || (f = t[a] = [f]), f.push(c);
    } else
      t[a] = c;
  }
  return t;
}
function Bf(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = Dw(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Bt(s) ? s.map((r) => r && Jl(r)) : [s && Jl(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function gA(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = Bt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const vA = Symbol(Te.NODE_ENV !== "production" ? "router view location matched" : ""), jf = Symbol(Te.NODE_ENV !== "production" ? "router view depth" : ""), Gc = Symbol(Te.NODE_ENV !== "production" ? "router" : ""), Qc = Symbol(Te.NODE_ENV !== "production" ? "route location" : ""), nc = Symbol(Te.NODE_ENV !== "production" ? "router view location" : "");
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
    }, u = r(() => e.call(s && s.instances[o], t, n, Te.NODE_ENV !== "production" ? _A(f, t, n) : f));
    let d = Promise.resolve(u);
    if (e.length < 3 && (d = d.then(f)), Te.NODE_ENV !== "production" && e.length > 2) {
      const p = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        d = d.then((h) => f._called ? h : (Ie(p), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        Ie(p), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((p) => c(p));
  });
}
function _A(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && Ie(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function sl(e, t, n, s, o = (r) => r()) {
  const r = [];
  for (const i of e) {
    Te.NODE_ENV !== "production" && !i.components && !i.children.length && Ie(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let c = i.components[a];
      if (Te.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Ie(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Ie(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = c;
          c = () => f;
        } else c.__asyncLoader && // warn only once per component
        !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Ie(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (gg(c)) {
          const u = (c.__vccOpts || c)[t];
          u && r.push(os(u, n, s, i, a, o));
        } else {
          let f = c();
          Te.NODE_ENV !== "production" && !("catch" in f) && (Ie(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), r.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const d = _w(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = d;
            const h = (d.__vccOpts || d)[t];
            return h && os(h, n, s, i, a, o)();
          }));
        }
    }
  }
  return r;
}
function $f(e) {
  const t = Ft(Gc), n = Ft(Qc);
  let s = !1, o = null;
  const r = $(() => {
    const u = oe(e.to);
    return Te.NODE_ENV !== "production" && (!s || u !== o) && (ta(u) || (s ? Ie(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, o, `
- props:`, e) : Ie(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), o = u, s = !0), t.resolve(u);
  }), i = $(() => {
    const { matched: u } = r.value, { length: d } = u, p = u[d - 1], h = n.matched;
    if (!p || !h.length)
      return -1;
    const g = h.findIndex(fs.bind(null, p));
    if (g > -1)
      return g;
    const v = Uf(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Uf(p) === v && // avoid comparing the child with its parent
      h[h.length - 1].path !== v ? h.findIndex(fs.bind(null, u[d - 2])) : g
    );
  }), a = $(() => i.value > -1 && AA(n.params, r.value.params)), c = $(() => i.value > -1 && i.value === n.matched.length - 1 && wg(n.params, r.value.params));
  function f(u = {}) {
    if (wA(u)) {
      const d = t[oe(e.replace) ? "replace" : "push"](
        oe(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(vr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (Te.NODE_ENV !== "production" && Ln) {
    const u = zn();
    if (u) {
      const d = {
        route: r.value,
        isActive: a.value,
        isExactActive: c.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), ma(() => {
        d.route = r.value, d.isActive = a.value, d.isExactActive = c.value, d.error = ta(oe(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: $(() => r.value.href),
    isActive: a,
    isExactActive: c,
    navigate: f
  };
}
function yA(e) {
  return e.length === 1 ? e[0] : e;
}
const bA = /* @__PURE__ */ Ne({
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
    const n = Ws($f(e)), { options: s } = Ft(Gc), o = $(() => ({
      [Hf(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Hf(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && yA(t.default(n));
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
}), EA = bA;
function wA(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function AA(e, t) {
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
function Uf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Hf = (e, t, n) => e ?? t ?? n, SA = /* @__PURE__ */ Ne({
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
    Te.NODE_ENV !== "production" && OA();
    const s = Ft(nc), o = $(() => e.route || s.value), r = Ft(jf, 0), i = $(() => {
      let f = oe(r);
      const { matched: u } = o.value;
      let d;
      for (; (d = u[f]) && !d.components; )
        f++;
      return f;
    }), a = $(() => o.value.matched[i.value]);
    Si(jf, $(() => i.value + 1)), Si(vA, a), Si(nc, o);
    const c = U();
    return Rt(() => [c.value, a.value, e.name], ([f, u, d], [p, h, g]) => {
      u && (u.instances[d] = f, h && h !== u && f && f === p && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!h || !fs(u, h) || !p) && (u.enterCallbacks[d] || []).forEach((v) => v(f));
    }, { flush: "post" }), () => {
      const f = o.value, u = e.name, d = a.value, p = d && d.components[u];
      if (!p)
        return Wf(n.default, { Component: p, route: f });
      const h = d.props[u], g = h ? h === !0 ? f.params : typeof h == "function" ? h(f) : h : null, _ = Mc(p, $e({}, g, t, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (d.instances[u] = null);
        },
        ref: c
      }));
      if (Te.NODE_ENV !== "production" && Ln && _.ref) {
        const y = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (Bt(_.ref) ? _.ref.map((m) => m.i) : [_.ref.i]).forEach((m) => {
          m.__vrv_devtools = y;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Wf(n.default, { Component: _, route: f }) || _
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
const CA = SA;
function OA() {
  const e = zn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    Ie(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function tr(e, t) {
  const n = $e({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => LA(s, ["instances", "children", "aliasOf"]))
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
let TA = 0;
function NA(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = TA++;
  vw({
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
          backgroundColor: Tg
        });
      }
      Bt(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((p) => {
        let h = p.route.path, g = xg, v = "", _ = 0;
        p.error ? (h = p.error, g = IA, _ = PA) : p.isExactActive ? (g = Dg, v = "This is exactly active") : p.isActive && (g = Ng, v = "This link is active"), u.tags.push({
          label: h,
          textColor: _,
          tooltip: v,
          backgroundColor: g
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
      d.forEach(Ig), u.filter && (d = d.filter((p) => (
        // save matches state based on the payload
        sc(p, u.filter.toLowerCase())
      ))), d.forEach((p) => Rg(p, t.currentRoute.value)), u.rootNodes = d.map(kg);
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
function DA(e) {
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
        display: e.keys.map((s) => `${s.name}${DA(s)}`).join(" "),
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
const Tg = 15485081, Ng = 2450411, Dg = 8702998, kA = 2282478, xg = 16486972, RA = 6710886, IA = 16704226, PA = 12131356;
function kg(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: kA
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
    backgroundColor: RA
  });
  let s = n.__vd_id;
  return s == null && (s = String(MA++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(kg)
  };
}
let MA = 0;
const VA = /^\/(.*)\/([a-z]*)$/;
function Rg(e, t) {
  const n = t.matched.length && fs(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => fs(s, e.record))), e.children.forEach((s) => Rg(s, t));
}
function Ig(e) {
  e.__vd_match = !1, e.children.forEach(Ig);
}
function sc(e, t) {
  const n = String(e.re).match(VA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => sc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = No(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => sc(i, t));
}
function LA(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function FA(e) {
  const t = iA(e.routes, e), n = e.parseQuery || mA, s = e.stringifyQuery || Bf, o = e.history;
  if (Te.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const r = er(), i = er(), a = er(), c = iy(Zn);
  let f = Zn;
  Ln && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = tl.bind(null, (L) => "" + L), d = tl.bind(null, kw), p = (
    // @ts-expect-error: intentionally avoid the type check
    tl.bind(null, No)
  );
  function h(L, Q) {
    let ne, me;
    return Sg(L) ? (ne = t.getRecordMatcher(L), Te.NODE_ENV !== "production" && !ne && Ie(`Parent route "${String(L)}" not found when adding child route`, Q), me = Q) : me = L, t.addRoute(me, ne);
  }
  function g(L) {
    const Q = t.getRecordMatcher(L);
    Q ? t.removeRoute(Q) : Te.NODE_ENV !== "production" && Ie(`Cannot remove non-existent route "${String(L)}"`);
  }
  function v() {
    return t.getRoutes().map((L) => L.record);
  }
  function _(L) {
    return !!t.getRecordMatcher(L);
  }
  function y(L, Q) {
    if (Q = $e({}, Q || c.value), typeof L == "string") {
      const C = nl(n, L, Q.path), V = t.resolve({ path: C.path }, Q), z = o.createHref(C.fullPath);
      return Te.NODE_ENV !== "production" && (z.startsWith("//") ? Ie(`Location "${L}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : V.matched.length || Ie(`No match found for location with path "${L}"`)), $e(C, V, {
        params: p(V.params),
        hash: No(C.hash),
        redirectedFrom: void 0,
        href: z
      });
    }
    if (Te.NODE_ENV !== "production" && !ta(L))
      return Ie(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, L), y({});
    let ne;
    if (L.path != null)
      Te.NODE_ENV !== "production" && "params" in L && !("name" in L) && // @ts-expect-error: the type is never
      Object.keys(L.params).length && Ie(`Path "${L.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), ne = $e({}, L, {
        path: nl(n, L.path, Q.path).path
      });
    else {
      const C = $e({}, L.params);
      for (const V in C)
        C[V] == null && delete C[V];
      ne = $e({}, L, {
        params: d(C)
      }), Q.params = d(Q.params);
    }
    const me = t.resolve(ne, Q), ke = L.hash || "";
    Te.NODE_ENV !== "production" && ke && !ke.startsWith("#") && Ie(`A \`hash\` should always start with the character "#". Replace "${ke}" with "#${ke}".`), me.params = u(p(me.params));
    const tt = Pw(s, $e({}, L, {
      hash: Nw(ke),
      path: me.path
    })), E = o.createHref(tt);
    return Te.NODE_ENV !== "production" && (E.startsWith("//") ? Ie(`Location "${L}" resolved to "${E}". A resolved location cannot start with multiple slashes.`) : me.matched.length || Ie(`No match found for location with path "${L.path != null ? L.path : L}"`)), $e({
      fullPath: tt,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: ke,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === Bf ? gA(L.query) : L.query || {}
      )
    }, me, {
      redirectedFrom: void 0,
      href: E
    });
  }
  function b(L) {
    return typeof L == "string" ? nl(n, L, c.value.path) : $e({}, L);
  }
  function m(L, Q) {
    if (f !== L)
      return Do(8, {
        from: Q,
        to: L
      });
  }
  function T(L) {
    return x(L);
  }
  function R(L) {
    return T($e(b(L), { replace: !0 }));
  }
  function O(L) {
    const Q = L.matched[L.matched.length - 1];
    if (Q && Q.redirect) {
      const { redirect: ne } = Q;
      let me = typeof ne == "function" ? ne(L) : ne;
      if (typeof me == "string" && (me = me.includes("?") || me.includes("#") ? me = b(me) : (
        // force empty params
        { path: me }
      ), me.params = {}), Te.NODE_ENV !== "production" && me.path == null && !("name" in me))
        throw Ie(`Invalid redirect found:
${JSON.stringify(me, null, 2)}
 when navigating to "${L.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return $e({
        query: L.query,
        hash: L.hash,
        // avoid transferring params if the redirect has a path
        params: me.path != null ? {} : L.params
      }, me);
    }
  }
  function x(L, Q) {
    const ne = f = y(L), me = c.value, ke = L.state, tt = L.force, E = L.replace === !0, C = O(ne);
    if (C)
      return x(
        $e(b(C), {
          state: typeof C == "object" ? $e({}, ke, C.state) : ke,
          force: tt,
          replace: E
        }),
        // keep original redirectedFrom if it exists
        Q || ne
      );
    const V = ne;
    V.redirectedFrom = Q;
    let z;
    return !tt && Nf(s, me, ne) && (z = Do(16, { to: V, from: me }), H(
      me,
      me,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (z ? Promise.resolve(z) : w(V, me)).catch((j) => Mn(j) ? (
      // navigation redirects still mark the router as ready
      Mn(
        j,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? j : Ze(j)
    ) : (
      // reject any unknown error
      le(j, V, me)
    )).then((j) => {
      if (j) {
        if (Mn(
          j,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return Te.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Nf(s, y(j.to), V) && // and we have done it a couple of times
          Q && // @ts-expect-error: added only in dev
          (Q._count = Q._count ? (
            // @ts-expect-error
            Q._count + 1
          ) : 1) > 30 ? (Ie(`Detected a possibly infinite redirection in a navigation guard when going from "${me.fullPath}" to "${V.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : x(
            // keep options
            $e({
              // preserve an existing replacement but allow the redirect to override it
              replace: E
            }, b(j.to), {
              state: typeof j.to == "object" ? $e({}, ke, j.to.state) : ke,
              force: tt
            }),
            // preserve the original redirectedFrom if any
            Q || V
          );
      } else
        j = A(V, me, !0, E, ke);
      return D(V, me, j), j;
    });
  }
  function k(L, Q) {
    const ne = m(L, Q);
    return ne ? Promise.reject(ne) : Promise.resolve();
  }
  function S(L) {
    const Q = we.values().next().value;
    return Q && typeof Q.runWithContext == "function" ? Q.runWithContext(L) : L();
  }
  function w(L, Q) {
    let ne;
    const [me, ke, tt] = BA(L, Q);
    ne = sl(me.reverse(), "beforeRouteLeave", L, Q);
    for (const C of me)
      C.leaveGuards.forEach((V) => {
        ne.push(os(V, L, Q));
      });
    const E = k.bind(null, L, Q);
    return ne.push(E), Ue(ne).then(() => {
      ne = [];
      for (const C of r.list())
        ne.push(os(C, L, Q));
      return ne.push(E), Ue(ne);
    }).then(() => {
      ne = sl(ke, "beforeRouteUpdate", L, Q);
      for (const C of ke)
        C.updateGuards.forEach((V) => {
          ne.push(os(V, L, Q));
        });
      return ne.push(E), Ue(ne);
    }).then(() => {
      ne = [];
      for (const C of tt)
        if (C.beforeEnter)
          if (Bt(C.beforeEnter))
            for (const V of C.beforeEnter)
              ne.push(os(V, L, Q));
          else
            ne.push(os(C.beforeEnter, L, Q));
      return ne.push(E), Ue(ne);
    }).then(() => (L.matched.forEach((C) => C.enterCallbacks = {}), ne = sl(tt, "beforeRouteEnter", L, Q, S), ne.push(E), Ue(ne))).then(() => {
      ne = [];
      for (const C of i.list())
        ne.push(os(C, L, Q));
      return ne.push(E), Ue(ne);
    }).catch((C) => Mn(
      C,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? C : Promise.reject(C));
  }
  function D(L, Q, ne) {
    a.list().forEach((me) => S(() => me(L, Q, ne)));
  }
  function A(L, Q, ne, me, ke) {
    const tt = m(L, Q);
    if (tt)
      return tt;
    const E = Q === Zn, C = Ln ? history.state : {};
    ne && (me || E ? o.replace(L.fullPath, $e({
      scroll: E && C && C.scroll
    }, ke)) : o.push(L.fullPath, ke)), c.value = L, H(L, Q, ne, E), Ze();
  }
  let F;
  function ce() {
    F || (F = o.listen((L, Q, ne) => {
      if (!De.listening)
        return;
      const me = y(L), ke = O(me);
      if (ke) {
        x($e(ke, { replace: !0, force: !0 }), me).catch(vr);
        return;
      }
      f = me;
      const tt = c.value;
      Ln && Uw(xf(tt.fullPath, ne.delta), Sa()), w(me, tt).catch((E) => Mn(
        E,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? E : Mn(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (x(
        $e(b(E.to), {
          force: !0
        }),
        me
        // avoid an uncaught rejection, let push call triggerError
      ).then((C) => {
        Mn(
          C,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !ne.delta && ne.type === Mr.pop && o.go(-1, !1);
      }).catch(vr), Promise.reject()) : (ne.delta && o.go(-ne.delta, !1), le(E, me, tt))).then((E) => {
        E = E || A(
          // after navigation, all matched components are resolved
          me,
          tt,
          !1
        ), E && (ne.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Mn(
          E,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-ne.delta, !1) : ne.type === Mr.pop && Mn(
          E,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), D(me, tt, E);
      }).catch(vr);
    }));
  }
  let Y = er(), re = er(), K;
  function le(L, Q, ne) {
    Ze(L);
    const me = re.list();
    return me.length ? me.forEach((ke) => ke(L, Q, ne)) : (Te.NODE_ENV !== "production" && Ie("uncaught error during route navigation:"), console.error(L)), Promise.reject(L);
  }
  function ye() {
    return K && c.value !== Zn ? Promise.resolve() : new Promise((L, Q) => {
      Y.add([L, Q]);
    });
  }
  function Ze(L) {
    return K || (K = !L, ce(), Y.list().forEach(([Q, ne]) => L ? ne(L) : Q()), Y.reset()), L;
  }
  function H(L, Q, ne, me) {
    const { scrollBehavior: ke } = e;
    if (!Ln || !ke)
      return Promise.resolve();
    const tt = !ne && Hw(xf(L.fullPath, 0)) || (me || !ne) && history.state && history.state.scroll || null;
    return Ks().then(() => ke(L, Q, tt)).then((E) => E && $w(E)).catch((E) => le(E, L, Q));
  }
  const se = (L) => o.go(L);
  let ue;
  const we = /* @__PURE__ */ new Set(), De = {
    currentRoute: c,
    listening: !0,
    addRoute: h,
    removeRoute: g,
    clearRoutes: t.clearRoutes,
    hasRoute: _,
    getRoutes: v,
    resolve: y,
    options: e,
    push: T,
    replace: R,
    go: se,
    back: () => se(-1),
    forward: () => se(1),
    beforeEach: r.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: re.add,
    isReady: ye,
    install(L) {
      const Q = this;
      L.component("RouterLink", EA), L.component("RouterView", CA), L.config.globalProperties.$router = Q, Object.defineProperty(L.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => oe(c)
      }), Ln && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ue && c.value === Zn && (ue = !0, T(o.location).catch((ke) => {
        Te.NODE_ENV !== "production" && Ie("Unexpected error when starting the router:", ke);
      }));
      const ne = {};
      for (const ke in Zn)
        Object.defineProperty(ne, ke, {
          get: () => c.value[ke],
          enumerable: !0
        });
      L.provide(Gc, Q), L.provide(Qc, mh(ne)), L.provide(nc, c);
      const me = L.unmount;
      we.add(L), L.unmount = function() {
        we.delete(L), we.size < 1 && (f = Zn, F && F(), F = null, c.value = Zn, ue = !1, K = !1), me();
      }, Te.NODE_ENV !== "production" && Ln && NA(L, Q, t);
    }
  };
  function Ue(L) {
    return L.reduce((Q, ne) => Q.then(() => S(ne)), Promise.resolve());
  }
  return De;
}
function BA(e, t) {
  const n = [], s = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => fs(f, a)) ? s.push(a) : n.push(a));
    const c = e.matched[i];
    c && (t.matched.find((f) => fs(f, c)) || o.push(c));
  }
  return [n, s, o];
}
function Pg(e) {
  return Ft(Qc);
}
const jA = { class: "nav nav-tabs mb-4" }, $A = { class: "nav-item" }, UA = { class: "nav-item" }, HA = { class: "nav-item" }, WA = { class: "nav-item" }, KA = /* @__PURE__ */ Ne({
  __name: "NavigationMenu",
  setup(e) {
    const t = Pg();
    return (n, s) => {
      const o = Qe("router-link");
      return N(), I("ul", jA, [
        l("li", $A, [
          fe(o, {
            to: "/",
            class: pe(["nav-link", { active: oe(t).name === "home" }]),
            "aria-current": oe(t).name === "home" ? "page" : void 0
          }, {
            default: be(() => s[0] || (s[0] = [
              l("i", { class: "fas fa-home me-2" }, null, -1),
              W(" Home ")
            ])),
            _: 1,
            __: [0]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", UA, [
          fe(o, {
            to: "/setup",
            class: pe(["nav-link", { active: oe(t).name === "setup" }]),
            "aria-current": oe(t).name === "setup" ? "page" : void 0
          }, {
            default: be(() => s[1] || (s[1] = [
              l("i", { class: "fas fa-cogs me-2" }, null, -1),
              W(" Setup ")
            ])),
            _: 1,
            __: [1]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", HA, [
          fe(o, {
            to: "/monitor",
            class: pe(["nav-link", { active: oe(t).name === "monitor" }]),
            "aria-current": oe(t).name === "monitor" ? "page" : void 0
          }, {
            default: be(() => s[2] || (s[2] = [
              l("i", { class: "fas fa-database me-2" }, null, -1),
              W(" Resources ")
            ])),
            _: 1,
            __: [2]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", WA, [
          fe(o, {
            to: "/tasks",
            class: pe(["nav-link", { active: oe(t).name === "tasks" }]),
            "aria-current": oe(t).name === "tasks" ? "page" : void 0
          }, {
            default: be(() => s[3] || (s[3] = [
              l("i", { class: "fas fa-tasks me-2" }, null, -1),
              W(" Tasks ")
            ])),
            _: 1,
            __: [3]
          }, 8, ["class", "aria-current"])
        ])
      ]);
    };
  }
}), Yn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, zA = /* @__PURE__ */ Yn(KA, [["__scopeId", "data-v-9bcac56a"]]), qA = /* @__PURE__ */ Ne({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const s = Qe("router-view");
      return N(), I("div", null, [
        l("main", null, [
          fe(zA),
          fe(s)
        ])
      ]);
    };
  }
}), YA = /* @__PURE__ */ Yn(qA, [["__scopeId", "data-v-a42a7003"]]);
function Mg(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: XA } = Object.prototype, { getPrototypeOf: Jc } = Object, { iterator: Ca, toStringTag: Vg } = Symbol, Oa = /* @__PURE__ */ ((e) => (t) => {
  const n = XA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dn = (e) => (e = e.toLowerCase(), (t) => Oa(t) === e), Ta = (e) => (t) => typeof t === e, { isArray: Uo } = Array, Vr = Ta("undefined");
function GA(e) {
  return e !== null && !Vr(e) && e.constructor !== null && !Vr(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Lg = dn("ArrayBuffer");
function QA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Lg(e.buffer), t;
}
const JA = Ta("string"), It = Ta("function"), Fg = Ta("number"), Na = (e) => e !== null && typeof e == "object", ZA = (e) => e === !0 || e === !1, Ii = (e) => {
  if (Oa(e) !== "object")
    return !1;
  const t = Jc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Vg in e) && !(Ca in e);
}, eS = dn("Date"), tS = dn("File"), nS = dn("Blob"), sS = dn("FileList"), oS = (e) => Na(e) && It(e.pipe), rS = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = Oa(e)) === "formdata" || // detect form-data instance
  t === "object" && It(e.toString) && e.toString() === "[object FormData]"));
}, iS = dn("URLSearchParams"), [aS, lS, cS, uS] = ["ReadableStream", "Request", "Response", "Headers"].map(dn), dS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Bg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, jg = (e) => !Vr(e) && e !== xs;
function oc() {
  const { caseless: e } = jg(this) && this || {}, t = {}, n = (s, o) => {
    const r = e && Bg(t, o) || o;
    Ii(t[r]) && Ii(s) ? t[r] = oc(t[r], s) : Ii(s) ? t[r] = oc({}, s) : Uo(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Xr(arguments[s], n);
  return t;
}
const fS = (e, t, n, { allOwnKeys: s } = {}) => (Xr(t, (o, r) => {
  n && It(o) ? e[r] = Mg(o, n) : e[r] = o;
}, { allOwnKeys: s }), e), pS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), hS = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, mS = (e, t, n, s) => {
  let o, r, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), r = o.length; r-- > 0; )
      i = o[r], (!s || s(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Jc(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, gS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, vS = (e) => {
  if (!e) return null;
  if (Uo(e)) return e;
  let t = e.length;
  if (!Fg(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, _S = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Jc(Uint8Array)), yS = (e, t) => {
  const s = (e && e[Ca]).call(e);
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
}, ES = dn("HTMLFormElement"), wS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), Kf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), AS = dn("RegExp"), $g = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Xr(n, (o, r) => {
    let i;
    (i = t(o, r, e)) !== !1 && (s[r] = i || o);
  }), Object.defineProperties(e, s);
}, SS = (e) => {
  $g(e, (t, n) => {
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
}, CS = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((r) => {
      n[r] = !0;
    });
  };
  return Uo(e) ? s(e) : s(String(e).split(t)), n;
}, OS = () => {
}, TS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function NS(e) {
  return !!(e && It(e.append) && e[Vg] === "FormData" && e[Ca]);
}
const DS = (e) => {
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
}, xS = dn("AsyncFunction"), kS = (e) => e && (Na(e) || It(e)) && It(e.then) && It(e.catch), Ug = ((e, t) => e ? setImmediate : t ? ((n, s) => (xs.addEventListener("message", ({ source: o, data: r }) => {
  o === xs && r === n && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), xs.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  It(xs.postMessage)
), RS = typeof queueMicrotask < "u" ? queueMicrotask.bind(xs) : typeof process < "u" && process.nextTick || Ug, IS = (e) => e != null && It(e[Ca]), B = {
  isArray: Uo,
  isArrayBuffer: Lg,
  isBuffer: GA,
  isFormData: rS,
  isArrayBufferView: QA,
  isString: JA,
  isNumber: Fg,
  isBoolean: ZA,
  isObject: Na,
  isPlainObject: Ii,
  isReadableStream: aS,
  isRequest: lS,
  isResponse: cS,
  isHeaders: uS,
  isUndefined: Vr,
  isDate: eS,
  isFile: tS,
  isBlob: nS,
  isRegExp: AS,
  isFunction: It,
  isStream: oS,
  isURLSearchParams: iS,
  isTypedArray: _S,
  isFileList: sS,
  forEach: Xr,
  merge: oc,
  extend: fS,
  trim: dS,
  stripBOM: pS,
  inherits: hS,
  toFlatObject: mS,
  kindOf: Oa,
  kindOfTest: dn,
  endsWith: gS,
  toArray: vS,
  forEachEntry: yS,
  matchAll: bS,
  isHTMLForm: ES,
  hasOwnProperty: Kf,
  hasOwnProp: Kf,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $g,
  freezeMethods: SS,
  toObjectSet: CS,
  toCamelCase: wS,
  noop: OS,
  toFiniteNumber: TS,
  findKey: Bg,
  global: xs,
  isContextDefined: jg,
  isSpecCompliantForm: NS,
  toJSONObject: DS,
  isAsyncFn: xS,
  isThenable: kS,
  setImmediate: Ug,
  asap: RS,
  isIterable: IS
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
const Hg = xe.prototype, Wg = {};
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
  Wg[e] = { value: e };
});
Object.defineProperties(xe, Wg);
Object.defineProperty(Hg, "isAxiosError", { value: !0 });
xe.from = (e, t, n, s, o, r) => {
  const i = Object.create(Hg);
  return B.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), xe.call(i, e.message, t, n, s, o), i.cause = e, i.name = e.name, r && Object.assign(i, r), i;
};
const PS = null;
function rc(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function Kg(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function zf(e, t, n) {
  return e ? e.concat(t).map(function(o, r) {
    return o = Kg(o), !n && r ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function MS(e) {
  return B.isArray(e) && !e.some(rc);
}
const VS = B.toFlatObject(B, {}, null, function(t) {
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
  function f(g) {
    if (g === null) return "";
    if (B.isDate(g))
      return g.toISOString();
    if (B.isBoolean(g))
      return g.toString();
    if (!c && B.isBlob(g))
      throw new xe("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(g) || B.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, v, _) {
    let y = g;
    if (g && !_ && typeof g == "object") {
      if (B.endsWith(v, "{}"))
        v = s ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (B.isArray(g) && MS(g) || (B.isFileList(g) || B.endsWith(v, "[]")) && (y = B.toArray(g)))
        return v = Kg(v), y.forEach(function(m, T) {
          !(B.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? zf([v], T, r) : i === null ? v : v + "[]",
            f(m)
          );
        }), !1;
    }
    return rc(g) ? !0 : (t.append(zf(_, v, r), f(g)), !1);
  }
  const d = [], p = Object.assign(VS, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: rc
  });
  function h(g, v) {
    if (!B.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g), B.forEach(g, function(y, b) {
        (!(B.isUndefined(y) || y === null) && o.call(
          t,
          y,
          B.isString(b) ? b.trim() : b,
          v,
          p
        )) === !0 && h(y, v ? v.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function qf(e) {
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
function Zc(e, t) {
  this._pairs = [], e && Da(e, this, t);
}
const zg = Zc.prototype;
zg.append = function(t, n) {
  this._pairs.push([t, n]);
};
zg.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, qf);
  } : qf;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function LS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function qg(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || LS;
  B.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let r;
  if (o ? r = o(t, n) : r = B.isURLSearchParams(t) ? t.toString() : new Zc(t, n).toString(s), r) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class Yf {
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
const Yg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, FS = typeof URLSearchParams < "u" ? URLSearchParams : Zc, BS = typeof FormData < "u" ? FormData : null, jS = typeof Blob < "u" ? Blob : null, $S = {
  isBrowser: !0,
  classes: {
    URLSearchParams: FS,
    FormData: BS,
    Blob: jS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, eu = typeof window < "u" && typeof document < "u", ic = typeof navigator == "object" && navigator || void 0, US = eu && (!ic || ["ReactNative", "NativeScript", "NS"].indexOf(ic.product) < 0), HS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", WS = eu && window.location.href || "http://localhost", KS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: eu,
  hasStandardBrowserEnv: US,
  hasStandardBrowserWebWorkerEnv: HS,
  navigator: ic,
  origin: WS
}, Symbol.toStringTag, { value: "Module" })), vt = {
  ...KS,
  ...$S
};
function zS(e, t) {
  return Da(e, new vt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, r) {
      return vt.isNode && B.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function qS(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function YS(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const o = n.length;
  let r;
  for (s = 0; s < o; s++)
    r = n[s], t[r] = e[r];
  return t;
}
function Xg(e) {
  function t(n, s, o, r) {
    let i = n[r++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = r >= n.length;
    return i = !i && B.isArray(o) ? o.length : i, c ? (B.hasOwnProp(o, i) ? o[i] = [o[i], s] : o[i] = s, !a) : ((!o[i] || !B.isObject(o[i])) && (o[i] = []), t(n, s, o[i], r) && B.isArray(o[i]) && (o[i] = YS(o[i])), !a);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const n = {};
    return B.forEachEntry(e, (s, o) => {
      t(qS(s), o, n, 0);
    }), n;
  }
  return null;
}
function XS(e, t, n) {
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
  transitional: Yg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = B.isObject(t);
    if (r && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return o ? JSON.stringify(Xg(t)) : t;
    if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t) || B.isReadableStream(t))
      return t;
    if (B.isArrayBufferView(t))
      return t.buffer;
    if (B.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return zS(t, this.formSerializer).toString();
      if ((a = B.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Da(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return r || o ? (n.setContentType("application/json", !1), XS(t)) : t;
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
const GS = B.toObjectSet([
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
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), s = i.substring(o + 1).trim(), !(!n || t[n] && GS[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Xf = Symbol("internals");
function nr(e) {
  return e && String(e).trim().toLowerCase();
}
function Pi(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Pi) : String(e);
}
function JS(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const ZS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function eC(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function tC(e, t) {
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
let Pt = class {
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
    else if (B.isString(t) && (t = t.trim()) && !ZS(t))
      i(QS(t), n);
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
          return JS(o);
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
      const a = t ? eC(r) : String(r).trim();
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
    const s = (this[Xf] = this[Xf] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function r(i) {
      const a = nr(i);
      s[a] || (tC(o, i), s[a] = !0);
    }
    return B.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
Pt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(Pt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
B.freezeMethods(Pt);
function rl(e, t) {
  const n = this || Gr, s = t || n, o = Pt.from(s.headers);
  let r = s.data;
  return B.forEach(e, function(a) {
    r = a.call(n, r, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), r;
}
function Gg(e) {
  return !!(e && e.__CANCEL__);
}
function Ho(e, t, n) {
  xe.call(this, e ?? "canceled", xe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
B.inherits(Ho, xe, {
  __CANCEL__: !0
});
function Qg(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new xe(
    "Request failed with status code " + n.status,
    [xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function nC(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function sC(e, t) {
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
function oC(e, t) {
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
  const o = sC(50, 250);
  return oC((r) => {
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
}, Gf = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, Qf = (e) => (...t) => B.asap(() => e(...t)), rC = vt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, vt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(vt.origin),
  vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent)
) : () => !0, iC = vt.hasStandardBrowserEnv ? (
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
function aC(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function lC(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Jg(e, t, n) {
  let s = !aC(t);
  return e && (s || n == !1) ? lC(e, t) : t;
}
const Jf = (e) => e instanceof Pt ? { ...e } : e;
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
    headers: (f, u, d) => o(Jf(f), Jf(u), d, !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, p = d(e[u], t[u], u);
    B.isUndefined(p) && d !== a || (n[u] = p);
  }), n;
}
const Zg = (e) => {
  const t = Gs({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: r, headers: i, auth: a } = t;
  t.headers = i = Pt.from(i), t.url = qg(Jg(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
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
  if (vt.hasStandardBrowserEnv && (s && B.isFunction(s) && (s = s(t)), s || s !== !1 && rC(t.url))) {
    const f = o && r && iC.read(r);
    f && i.set(o, f);
  }
  return t;
}, cC = typeof XMLHttpRequest < "u", uC = cC && function(e) {
  return new Promise(function(n, s) {
    const o = Zg(e);
    let r = o.data;
    const i = Pt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: f } = o, u, d, p, h, g;
    function v() {
      h && h(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let _ = new XMLHttpRequest();
    _.open(o.method.toUpperCase(), o.url, !0), _.timeout = o.timeout;
    function y() {
      if (!_)
        return;
      const m = Pt.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), R = {
        data: !a || a === "text" || a === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: m,
        config: e,
        request: _
      };
      Qg(function(x) {
        n(x), v();
      }, function(x) {
        s(x), v();
      }, R), _ = null;
    }
    "onloadend" in _ ? _.onloadend = y : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, _.onabort = function() {
      _ && (s(new xe("Request aborted", xe.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      s(new xe("Network Error", xe.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const R = o.transitional || Yg;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), s(new xe(
        T,
        R.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, r === void 0 && i.setContentType(null), "setRequestHeader" in _ && B.forEach(i.toJSON(), function(T, R) {
      _.setRequestHeader(R, T);
    }), B.isUndefined(o.withCredentials) || (_.withCredentials = !!o.withCredentials), a && a !== "json" && (_.responseType = o.responseType), f && ([p, g] = na(f, !0), _.addEventListener("progress", p)), c && _.upload && ([d, h] = na(c), _.upload.addEventListener("progress", d), _.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (m) => {
      _ && (s(!m || m.type ? new Ho(null, e, _) : m), _.abort(), _ = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = nC(o.url);
    if (b && vt.protocols.indexOf(b) === -1) {
      s(new xe("Unsupported protocol " + b + ":", xe.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(r || null);
  });
}, dC = (e, t) => {
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
}, fC = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, o;
  for (; s < n; )
    o = s + t, yield e.slice(s, o), s = o;
}, pC = async function* (e, t) {
  for await (const n of hC(e))
    yield* fC(n, t);
}, hC = async function* (e) {
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
}, Zf = (e, t, n, s) => {
  const o = pC(e, t);
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
}, xa = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ev = xa && typeof ReadableStream == "function", mC = xa && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), tv = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, gC = ev && tv(() => {
  let e = !1;
  const t = new Request(vt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), ep = 64 * 1024, ac = ev && tv(() => B.isReadableStream(new Response("").body)), sa = {
  stream: ac && ((e) => e.body)
};
xa && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !sa[t] && (sa[t] = B.isFunction(e[t]) ? (n) => n[t]() : (n, s) => {
      throw new xe(`Response type '${t}' is not supported`, xe.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const vC = async (e) => {
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
    return (await mC(e)).byteLength;
}, _C = async (e, t) => {
  const n = B.toFiniteNumber(e.getContentLength());
  return n ?? vC(t);
}, yC = xa && (async (e) => {
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
  } = Zg(e);
  f = f ? (f + "").toLowerCase() : "text";
  let h = dC([o, r && r.toAbortSignal()], i), g;
  const v = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let _;
  try {
    if (c && gC && n !== "get" && n !== "head" && (_ = await _C(u, s)) !== 0) {
      let R = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), O;
      if (B.isFormData(s) && (O = R.headers.get("content-type")) && u.setContentType(O), R.body) {
        const [x, k] = Gf(
          _,
          na(Qf(c))
        );
        s = Zf(R.body, ep, x, k);
      }
    }
    B.isString(d) || (d = d ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    g = new Request(t, {
      ...p,
      signal: h,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: y ? d : void 0
    });
    let b = await fetch(g, p);
    const m = ac && (f === "stream" || f === "response");
    if (ac && (a || m && v)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((S) => {
        R[S] = b[S];
      });
      const O = B.toFiniteNumber(b.headers.get("content-length")), [x, k] = a && Gf(
        O,
        na(Qf(a), !0)
      ) || [];
      b = new Response(
        Zf(b.body, ep, x, () => {
          k && k(), v && v();
        }),
        R
      );
    }
    f = f || "text";
    let T = await sa[B.findKey(sa, f) || "text"](b, e);
    return !m && v && v(), await new Promise((R, O) => {
      Qg(R, O, {
        data: T,
        headers: Pt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: g
      });
    });
  } catch (y) {
    throw v && v(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new xe("Network Error", xe.ERR_NETWORK, e, g),
      {
        cause: y.cause || y
      }
    ) : xe.from(y, y && y.code, e, g);
  }
}), lc = {
  http: PS,
  xhr: uC,
  fetch: yC
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
const tp = (e) => `- ${e}`, bC = (e) => B.isFunction(e) || e === null || e === !1, nv = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const o = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let i;
      if (s = n, !bC(n) && (s = lc[(i = String(n)).toLowerCase()], s === void 0))
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
` + r.map(tp).join(`
`) : " " + tp(r[0]) : "as no adapter specified";
      throw new xe(
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
    throw new Ho(null, e);
}
function np(e) {
  return il(e), e.headers = Pt.from(e.headers), e.data = rl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), nv.getAdapter(e.adapter || Gr.adapter)(e).then(function(s) {
    return il(e), s.data = rl.call(
      e,
      e.transformResponse,
      s
    ), s.headers = Pt.from(s.headers), s;
  }, function(s) {
    return Gg(s) || (il(e), s && s.response && (s.response.data = rl.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = Pt.from(s.response.headers))), Promise.reject(s);
  });
}
const sv = "1.10.0", ka = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ka[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const sp = {};
ka.transitional = function(t, n, s) {
  function o(r, i) {
    return "[Axios v" + sv + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "");
  }
  return (r, i, a) => {
    if (t === !1)
      throw new xe(
        o(i, " has been removed" + (n ? " in " + n : "")),
        xe.ERR_DEPRECATED
      );
    return n && !sp[i] && (sp[i] = !0, console.warn(
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
function EC(e, t, n) {
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
const Mi = {
  assertOptions: EC,
  validators: ka
}, _n = Mi.validators;
let js = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Yf(),
      response: new Yf()
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
    s !== void 0 && Mi.assertOptions(s, {
      silentJSONParsing: _n.transitional(_n.boolean),
      forcedJSONParsing: _n.transitional(_n.boolean),
      clarifyTimeoutError: _n.transitional(_n.boolean)
    }, !1), o != null && (B.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Mi.assertOptions(o, {
      encode: _n.function,
      serialize: _n.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Mi.assertOptions(n, {
      baseUrl: _n.spelling("baseURL"),
      withXsrfToken: _n.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = r && B.merge(
      r.common,
      r[n.method]
    );
    r && B.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete r[g];
      }
    ), n.headers = Pt.concat(i, r);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (c = c && v.synchronous, a.unshift(v.fulfilled, v.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(v) {
      f.push(v.fulfilled, v.rejected);
    });
    let u, d = 0, p;
    if (!c) {
      const g = [np.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, f), p = g.length, u = Promise.resolve(n); d < p; )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    p = a.length;
    let h = n;
    for (d = 0; d < p; ) {
      const g = a[d++], v = a[d++];
      try {
        h = g(h);
      } catch (_) {
        v.call(this, _);
        break;
      }
    }
    try {
      u = np.call(this, h);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, p = f.length; d < p; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = Gs(this.defaults, t);
    const n = Jg(t.baseURL, t.url, t.allowAbsoluteUrls);
    return qg(n, t.params, t.paramsSerializer);
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
let wC = class ov {
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
      token: new ov(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function AC(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function SC(e) {
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
function rv(e) {
  const t = new js(e), n = Mg(js.prototype.request, t);
  return B.extend(n, js.prototype, t, { allOwnKeys: !0 }), B.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return rv(Gs(e, o));
  }, n;
}
const lt = rv(Gr);
lt.Axios = js;
lt.CanceledError = Ho;
lt.CancelToken = wC;
lt.isCancel = Gg;
lt.VERSION = sv;
lt.toFormData = Da;
lt.AxiosError = xe;
lt.Cancel = lt.CanceledError;
lt.all = function(t) {
  return Promise.all(t);
};
lt.spread = AC;
lt.isAxiosError = SC;
lt.mergeConfig = Gs;
lt.AxiosHeaders = Pt;
lt.formToJSON = (e) => Xg(B.isHTMLForm(e) ? new FormData(e) : e);
lt.getAdapter = nv.getAdapter;
lt.HttpStatusCode = cc;
lt.default = lt;
const {
  Axios: D3,
  AxiosError: x3,
  CanceledError: k3,
  isCancel: R3,
  CancelToken: I3,
  VERSION: P3,
  all: M3,
  Cancel: V3,
  isAxiosError: L3,
  spread: F3,
  toFormData: B3,
  AxiosHeaders: j3,
  HttpStatusCode: $3,
  formToJSON: U3,
  getAdapter: H3,
  mergeConfig: W3
} = lt, CC = "fhir_snapshot", OC = "api", TC = () => {
  let n = {
    pid: new URLSearchParams(location.search).get("pid"),
    page: OC,
    // content: "externalModule",
    type: "module",
    prefix: CC
  };
  return window.redcap_csrf_token && (n.redcap_csrf_token = window.redcap_csrf_token), n;
}, NC = () => {
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
    const n = TC();
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
}, je = NC(), Ye = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return je.get("", { params: e });
  },
  updateProjectSettings(e) {
    const t = { route: "project-settings" };
    return je.put("", e, { params: t });
  },
  listMrns(e, t) {
    const n = { route: "mrns" };
    return e && (n._page = e), t && (n._per_page = t), je.get("", { params: n });
  },
  addMrns(e) {
    const t = { route: "mrns" };
    return je.post("", { mrns: e }, { params: t });
  },
  addMrn(e) {
    const t = { route: "mrns" };
    return je.post("", { mrns: [e] }, { params: t });
  },
  removeMrn(e) {
    const t = { route: `mrns/${e}` };
    return je.delete("", { params: t, data: e });
  },
  triggerFetch(e, t) {
    const n = { route: "trigger-fetch" };
    return je.post("", { mrns: e, resources: t }, { params: n });
  },
  getFetchStatus() {
    const e = { route: "fetch-status" };
    return je.get("", { params: e });
  },
  createZipArchive(e) {
    const t = { route: "create-zip-archive" };
    return je.post("", { mrns: e }, { params: t });
  },
  downloadZip(e) {
    const t = { route: "download-zip", zip_id: e };
    return je.get("", { params: t, responseType: "blob" });
  },
  // Archive management API methods
  listArchives() {
    const e = { route: "archives" };
    return je.get("", { params: e });
  },
  createArchiveSelected(e, t) {
    const n = { route: "archives/selected" }, s = { mrns: e };
    return t && Object.assign(s, t), je.post("", s, { params: n });
  },
  createArchiveAll(e) {
    const t = { route: "archives/all" }, n = e || {};
    return je.post("", n, { params: t });
  },
  downloadArchive(e) {
    const t = { route: `archives/${e}/download` };
    return je.get("", { params: t, responseType: "blob" });
  },
  deleteArchive(e) {
    const t = { route: `archives/${e}` };
    return je.delete("", { params: t });
  },
  // Enhanced MRN and resource management
  getMrnResources(e) {
    const t = { route: `mrns/${e}/resources` };
    return je.get("", { params: t });
  },
  getProjectSummary() {
    const e = { route: "project-summary" };
    return je.get("", { params: e });
  },
  triggerFetchMrns(e, t) {
    const n = { route: "trigger-fetch" }, s = { mrns: e };
    return t && t.length > 0 && (s.resources = t), je.post("", s, { params: n });
  },
  performFullSync() {
    const e = { route: "perform-full-sync" };
    return je.post("", {}, { params: e });
  },
  retryFailedResource(e, t, n) {
    const s = { route: "retry-failed" };
    return je.post("", {
      mrn: e,
      resource_type: t,
      repeat_instance: n,
      bulk: !1
    }, { params: s });
  },
  bulkRetryFailed(e) {
    const t = { route: "retry-failed" }, n = { bulk: !0 };
    return e && (n.resource_type = e), je.post("", n, { params: t });
  },
  retryFailed(e) {
    const t = { route: "retry-failed" };
    return je.post("", e, { params: t });
  },
  // Task management API methods
  listTasks(e, t, n) {
    const s = { route: "tasks" };
    return e && (s.page = e), t && (s.limit = t), n && Object.assign(s, n), je.get("", { params: s });
  },
  getTaskDetails(e) {
    const t = { route: `tasks/${e}` };
    return je.get("", { params: t });
  },
  performTaskFullSync() {
    const e = { route: "tasks/full-sync" };
    return je.post("", {}, { params: e });
  },
  retryFailedResources(e) {
    const t = { route: "tasks/retry-failed" }, n = e ? { filters: e } : {};
    return je.post("", n, { params: t });
  },
  deleteTask(e) {
    const t = { route: `tasks/${e}` };
    return je.delete("", { params: t });
  },
  getQueueStatistics() {
    const e = { route: "tasks/stats" };
    return je.get("", { params: e });
  },
  cleanupCompletedTasks() {
    const e = { route: "tasks/cleanup" };
    return je.post("", {}, { params: e });
  },
  // Streaming archive API methods
  streamSelectedArchive(e, t) {
    const n = { route: "archives/stream/selected" }, s = { mrns: e, ...t };
    return je.post("", s, {
      params: n,
      responseType: "blob",
      timeout: 0
      // No timeout for streaming
    });
  },
  streamAllArchive(e) {
    const t = { route: "archives/stream/all" };
    return je.post("", e || {}, {
      params: t,
      responseType: "blob",
      timeout: 0
    });
  },
  // Resource content viewing API method
  getResourceContent(e, t, n, s) {
    const o = { route: `records/${e}/resources/${t}/content/${n}` };
    return s && (o.preview_limit = s), je.get("", { params: o });
  }
}, Wo = /* @__PURE__ */ qn("errors", () => {
  const e = U([]);
  return {
    errors: e,
    addError: (s, o) => {
      const r = DC(s);
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
function DC(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
var Ct = "top", jt = "bottom", $t = "right", Ot = "left", Ra = "auto", Ko = [Ct, jt, $t, Ot], Qs = "start", xo = "end", iv = "clippingParents", tu = "viewport", po = "popper", av = "reference", uc = /* @__PURE__ */ Ko.reduce(function(e, t) {
  return e.concat([t + "-" + Qs, t + "-" + xo]);
}, []), nu = /* @__PURE__ */ [].concat(Ko, [Ra]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qs, t + "-" + xo]);
}, []), lv = "beforeRead", cv = "read", uv = "afterRead", dv = "beforeMain", fv = "main", pv = "afterMain", hv = "beforeWrite", mv = "write", gv = "afterWrite", vv = [lv, cv, uv, dv, fv, pv, hv, mv, gv];
function Dn(e) {
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
function su(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ut(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xC(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var s = t.styles[n] || {}, o = t.attributes[n] || {}, r = t.elements[n];
    !qt(r) || !Dn(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(i) {
      var a = o[i];
      a === !1 ? r.removeAttribute(i) : r.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function kC(e) {
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
      !qt(o) || !Dn(o) || (Object.assign(o.style, a), Object.keys(r).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const ou = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xC,
  effect: kC,
  requires: ["computeStyles"]
};
function Cn(e) {
  return e.split("-")[0];
}
var $s = Math.max, oa = Math.min, ko = Math.round;
function dc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _v() {
  return !/^((?!chrome|android).)*safari/i.test(dc());
}
function Ro(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(), o = 1, r = 1;
  t && qt(e) && (o = e.offsetWidth > 0 && ko(s.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && ko(s.height) / e.offsetHeight || 1);
  var i = Js(e) ? Ut(e) : window, a = i.visualViewport, c = !_v() && n, f = (s.left + (c && a ? a.offsetLeft : 0)) / o, u = (s.top + (c && a ? a.offsetTop : 0)) / r, d = s.width / o, p = s.height / r;
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
function ru(e) {
  var t = Ro(e), n = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: s
  };
}
function yv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && su(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Hn(e) {
  return Ut(e).getComputedStyle(e);
}
function RC(e) {
  return ["table", "td", "th"].indexOf(Dn(e)) >= 0;
}
function vs(e) {
  return ((Js(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ia(e) {
  return Dn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (su(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    vs(e)
  );
}
function op(e) {
  return !qt(e) || // https://github.com/popperjs/popper-core/issues/837
  Hn(e).position === "fixed" ? null : e.offsetParent;
}
function IC(e) {
  var t = /firefox/i.test(dc()), n = /Trident/i.test(dc());
  if (n && qt(e)) {
    var s = Hn(e);
    if (s.position === "fixed")
      return null;
  }
  var o = Ia(e);
  for (su(o) && (o = o.host); qt(o) && ["html", "body"].indexOf(Dn(o)) < 0; ) {
    var r = Hn(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Qr(e) {
  for (var t = Ut(e), n = op(e); n && RC(n) && Hn(n).position === "static"; )
    n = op(n);
  return n && (Dn(n) === "html" || Dn(n) === "body" && Hn(n).position === "static") ? t : n || IC(e) || t;
}
function iu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yr(e, t, n) {
  return $s(e, oa(t, n));
}
function PC(e, t, n) {
  var s = yr(e, t, n);
  return s > n ? n : s;
}
function bv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ev(e) {
  return Object.assign({}, bv(), e);
}
function wv(e, t) {
  return t.reduce(function(n, s) {
    return n[s] = e, n;
  }, {});
}
var MC = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ev(typeof t != "number" ? t : wv(t, Ko));
};
function VC(e) {
  var t, n = e.state, s = e.name, o = e.options, r = n.elements.arrow, i = n.modifiersData.popperOffsets, a = Cn(n.placement), c = iu(a), f = [Ot, $t].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!r || !i)) {
    var d = MC(o.padding, n), p = ru(r), h = c === "y" ? Ct : Ot, g = c === "y" ? jt : $t, v = n.rects.reference[u] + n.rects.reference[c] - i[c] - n.rects.popper[u], _ = i[c] - n.rects.reference[c], y = Qr(r), b = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, m = v / 2 - _ / 2, T = d[h], R = b - p[u] - d[g], O = b / 2 - p[u] / 2 + m, x = yr(T, O, R), k = c;
    n.modifiersData[s] = (t = {}, t[k] = x, t.centerOffset = x - O, t);
  }
}
function LC(e) {
  var t = e.state, n = e.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || yv(t.elements.popper, o) && (t.elements.arrow = o));
}
const Av = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: VC,
  effect: LC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Io(e) {
  return e.split("-")[1];
}
var FC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function BC(e, t) {
  var n = e.x, s = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ko(n * o) / o || 0,
    y: ko(s * o) / o || 0
  };
}
function rp(e) {
  var t, n = e.popper, s = e.popperRect, o = e.placement, r = e.variation, i = e.offsets, a = e.position, c = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, p = i.x, h = p === void 0 ? 0 : p, g = i.y, v = g === void 0 ? 0 : g, _ = typeof u == "function" ? u({
    x: h,
    y: v
  }) : {
    x: h,
    y: v
  };
  h = _.x, v = _.y;
  var y = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), m = Ot, T = Ct, R = window;
  if (f) {
    var O = Qr(n), x = "clientHeight", k = "clientWidth";
    if (O === Ut(n) && (O = vs(n), Hn(O).position !== "static" && a === "absolute" && (x = "scrollHeight", k = "scrollWidth")), O = O, o === Ct || (o === Ot || o === $t) && r === xo) {
      T = jt;
      var S = d && O === R && R.visualViewport ? R.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[x]
      );
      v -= S - s.height, v *= c ? 1 : -1;
    }
    if (o === Ot || (o === Ct || o === jt) && r === xo) {
      m = $t;
      var w = d && O === R && R.visualViewport ? R.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[k]
      );
      h -= w - s.width, h *= c ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: a
  }, f && FC), A = u === !0 ? BC({
    x: h,
    y: v
  }, Ut(n)) : {
    x: h,
    y: v
  };
  if (h = A.x, v = A.y, c) {
    var F;
    return Object.assign({}, D, (F = {}, F[T] = b ? "0" : "", F[m] = y ? "0" : "", F.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", F));
  }
  return Object.assign({}, D, (t = {}, t[T] = b ? v + "px" : "", t[m] = y ? h + "px" : "", t.transform = "", t));
}
function jC(e) {
  var t = e.state, n = e.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, r = n.adaptive, i = r === void 0 ? !0 : r, a = n.roundOffsets, c = a === void 0 ? !0 : a, f = {
    placement: Cn(t.placement),
    variation: Io(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, rp(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, rp(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const au = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: jC,
  data: {}
};
var ui = {
  passive: !0
};
function $C(e) {
  var t = e.state, n = e.instance, s = e.options, o = s.scroll, r = o === void 0 ? !0 : o, i = s.resize, a = i === void 0 ? !0 : i, c = Ut(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, ui);
  }), a && c.addEventListener("resize", n.update, ui), function() {
    r && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, ui);
    }), a && c.removeEventListener("resize", n.update, ui);
  };
}
const lu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $C,
  data: {}
};
var UC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Vi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return UC[t];
  });
}
var HC = {
  start: "end",
  end: "start"
};
function ip(e) {
  return e.replace(/start|end/g, function(t) {
    return HC[t];
  });
}
function cu(e) {
  var t = Ut(e), n = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: s
  };
}
function uu(e) {
  return Ro(vs(e)).left + cu(e).scrollLeft;
}
function WC(e, t) {
  var n = Ut(e), s = vs(e), o = n.visualViewport, r = s.clientWidth, i = s.clientHeight, a = 0, c = 0;
  if (o) {
    r = o.width, i = o.height;
    var f = _v();
    (f || !f && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: a + uu(e),
    y: c
  };
}
function KC(e) {
  var t, n = vs(e), s = cu(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = $s(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = $s(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -s.scrollLeft + uu(e), c = -s.scrollTop;
  return Hn(o || n).direction === "rtl" && (a += $s(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: i,
    x: a,
    y: c
  };
}
function du(e) {
  var t = Hn(e), n = t.overflow, s = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function Sv(e) {
  return ["html", "body", "#document"].indexOf(Dn(e)) >= 0 ? e.ownerDocument.body : qt(e) && du(e) ? e : Sv(Ia(e));
}
function br(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = Sv(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ut(s), i = o ? [r].concat(r.visualViewport || [], du(s) ? s : []) : s, a = t.concat(i);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(br(Ia(i)))
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
function zC(e, t) {
  var n = Ro(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ap(e, t, n) {
  return t === tu ? fc(WC(e, n)) : Js(t) ? zC(t, n) : fc(KC(vs(e)));
}
function qC(e) {
  var t = br(Ia(e)), n = ["absolute", "fixed"].indexOf(Hn(e).position) >= 0, s = n && qt(e) ? Qr(e) : e;
  return Js(s) ? t.filter(function(o) {
    return Js(o) && yv(o, s) && Dn(o) !== "body";
  }) : [];
}
function YC(e, t, n, s) {
  var o = t === "clippingParents" ? qC(e) : [].concat(t), r = [].concat(o, [n]), i = r[0], a = r.reduce(function(c, f) {
    var u = ap(e, f, s);
    return c.top = $s(u.top, c.top), c.right = oa(u.right, c.right), c.bottom = oa(u.bottom, c.bottom), c.left = $s(u.left, c.left), c;
  }, ap(e, i, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Cv(e) {
  var t = e.reference, n = e.element, s = e.placement, o = s ? Cn(s) : null, r = s ? Io(s) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case Ct:
      c = {
        x: i,
        y: t.y - n.height
      };
      break;
    case jt:
      c = {
        x: i,
        y: t.y + t.height
      };
      break;
    case $t:
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
  var f = o ? iu(o) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (r) {
      case Qs:
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
  var n = t, s = n.placement, o = s === void 0 ? e.placement : s, r = n.strategy, i = r === void 0 ? e.strategy : r, a = n.boundary, c = a === void 0 ? iv : a, f = n.rootBoundary, u = f === void 0 ? tu : f, d = n.elementContext, p = d === void 0 ? po : d, h = n.altBoundary, g = h === void 0 ? !1 : h, v = n.padding, _ = v === void 0 ? 0 : v, y = Ev(typeof _ != "number" ? _ : wv(_, Ko)), b = p === po ? av : po, m = e.rects.popper, T = e.elements[g ? b : p], R = YC(Js(T) ? T : T.contextElement || vs(e.elements.popper), c, u, i), O = Ro(e.elements.reference), x = Cv({
    reference: O,
    element: m,
    placement: o
  }), k = fc(Object.assign({}, m, x)), S = p === po ? k : O, w = {
    top: R.top - S.top + y.top,
    bottom: S.bottom - R.bottom + y.bottom,
    left: R.left - S.left + y.left,
    right: S.right - R.right + y.right
  }, D = e.modifiersData.offset;
  if (p === po && D) {
    var A = D[o];
    Object.keys(w).forEach(function(F) {
      var ce = [$t, jt].indexOf(F) >= 0 ? 1 : -1, Y = [Ct, jt].indexOf(F) >= 0 ? "y" : "x";
      w[F] += A[Y] * ce;
    });
  }
  return w;
}
function XC(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = n.boundary, r = n.rootBoundary, i = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? nu : c, u = Io(s), d = u ? a ? uc : uc.filter(function(g) {
    return Io(g) === u;
  }) : Ko, p = d.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  p.length === 0 && (p = d);
  var h = p.reduce(function(g, v) {
    return g[v] = Po(e, {
      placement: v,
      boundary: o,
      rootBoundary: r,
      padding: i
    })[Cn(v)], g;
  }, {});
  return Object.keys(h).sort(function(g, v) {
    return h[g] - h[v];
  });
}
function GC(e) {
  if (Cn(e) === Ra)
    return [];
  var t = Vi(e);
  return [ip(e), t, ip(t)];
}
function QC(e) {
  var t = e.state, n = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !0 : i, c = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, g = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, _ = t.options.placement, y = Cn(_), b = y === _, m = c || (b || !g ? [Vi(_)] : GC(_)), T = [_].concat(m).reduce(function(we, De) {
      return we.concat(Cn(De) === Ra ? XC(t, {
        placement: De,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: v
      }) : De);
    }, []), R = t.rects.reference, O = t.rects.popper, x = /* @__PURE__ */ new Map(), k = !0, S = T[0], w = 0; w < T.length; w++) {
      var D = T[w], A = Cn(D), F = Io(D) === Qs, ce = [Ct, jt].indexOf(A) >= 0, Y = ce ? "width" : "height", re = Po(t, {
        placement: D,
        boundary: u,
        rootBoundary: d,
        altBoundary: p,
        padding: f
      }), K = ce ? F ? $t : Ot : F ? jt : Ct;
      R[Y] > O[Y] && (K = Vi(K));
      var le = Vi(K), ye = [];
      if (r && ye.push(re[A] <= 0), a && ye.push(re[K] <= 0, re[le] <= 0), ye.every(function(we) {
        return we;
      })) {
        S = D, k = !1;
        break;
      }
      x.set(D, ye);
    }
    if (k)
      for (var Ze = g ? 3 : 1, H = function(De) {
        var Ue = T.find(function(L) {
          var Q = x.get(L);
          if (Q)
            return Q.slice(0, De).every(function(ne) {
              return ne;
            });
        });
        if (Ue)
          return S = Ue, "break";
      }, se = Ze; se > 0; se--) {
        var ue = H(se);
        if (ue === "break") break;
      }
    t.placement !== S && (t.modifiersData[s]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const Ov = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: QC,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function lp(e, t, n) {
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
function cp(e) {
  return [Ct, $t, jt, Ot].some(function(t) {
    return e[t] >= 0;
  });
}
function JC(e) {
  var t = e.state, n = e.name, s = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = Po(t, {
    elementContext: "reference"
  }), a = Po(t, {
    altBoundary: !0
  }), c = lp(i, s), f = lp(a, o, r), u = cp(c), d = cp(f);
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
const Tv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: JC
};
function ZC(e, t, n) {
  var s = Cn(e), o = [Ot, Ct].indexOf(s) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = r[0], a = r[1];
  return i = i || 0, a = (a || 0) * o, [Ot, $t].indexOf(s) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function eO(e) {
  var t = e.state, n = e.options, s = e.name, o = n.offset, r = o === void 0 ? [0, 0] : o, i = nu.reduce(function(u, d) {
    return u[d] = ZC(d, t.rects, r), u;
  }, {}), a = i[t.placement], c = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[s] = i;
}
const Nv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: eO
};
function tO(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Cv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const fu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: tO,
  data: {}
};
function nO(e) {
  return e === "x" ? "y" : "x";
}
function sO(e) {
  var t = e.state, n = e.options, s = e.name, o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !1 : i, c = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, p = n.tether, h = p === void 0 ? !0 : p, g = n.tetherOffset, v = g === void 0 ? 0 : g, _ = Po(t, {
    boundary: c,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), y = Cn(t.placement), b = Io(t.placement), m = !b, T = iu(y), R = nO(T), O = t.modifiersData.popperOffsets, x = t.rects.reference, k = t.rects.popper, S = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, w = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (O) {
    if (r) {
      var F, ce = T === "y" ? Ct : Ot, Y = T === "y" ? jt : $t, re = T === "y" ? "height" : "width", K = O[T], le = K + _[ce], ye = K - _[Y], Ze = h ? -k[re] / 2 : 0, H = b === Qs ? x[re] : k[re], se = b === Qs ? -k[re] : -x[re], ue = t.elements.arrow, we = h && ue ? ru(ue) : {
        width: 0,
        height: 0
      }, De = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bv(), Ue = De[ce], L = De[Y], Q = yr(0, x[re], we[re]), ne = m ? x[re] / 2 - Ze - Q - Ue - w.mainAxis : H - Q - Ue - w.mainAxis, me = m ? -x[re] / 2 + Ze + Q + L + w.mainAxis : se + Q + L + w.mainAxis, ke = t.elements.arrow && Qr(t.elements.arrow), tt = ke ? T === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, E = (F = D?.[T]) != null ? F : 0, C = K + ne - E - tt, V = K + me - E, z = yr(h ? oa(le, C) : le, K, h ? $s(ye, V) : ye);
      O[T] = z, A[T] = z - K;
    }
    if (a) {
      var j, q = T === "x" ? Ct : Ot, ae = T === "x" ? jt : $t, ee = O[R], te = R === "y" ? "height" : "width", J = ee + _[q], ve = ee - _[ae], ie = [Ct, Ot].indexOf(y) !== -1, ge = (j = D?.[R]) != null ? j : 0, Ce = ie ? J : ee - x[te] - k[te] - ge + w.altAxis, Me = ie ? ee + x[te] + k[te] - ge - w.altAxis : ve, He = h && ie ? PC(Ce, ee, Me) : yr(h ? Ce : J, ee, h ? Me : ve);
      O[R] = He, A[R] = He - ee;
    }
    t.modifiersData[s] = A;
  }
}
const Dv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: sO,
  requiresIfExists: ["offset"]
};
function oO(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function rO(e) {
  return e === Ut(e) || !qt(e) ? cu(e) : oO(e);
}
function iO(e) {
  var t = e.getBoundingClientRect(), n = ko(t.width) / e.offsetWidth || 1, s = ko(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function aO(e, t, n) {
  n === void 0 && (n = !1);
  var s = qt(t), o = qt(t) && iO(t), r = vs(t), i = Ro(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((Dn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  du(r)) && (a = rO(t)), qt(t) ? (c = Ro(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = uu(r))), {
    x: i.left + a.scrollLeft - c.x,
    y: i.top + a.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function lO(e) {
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
function cO(e) {
  var t = lO(e);
  return vv.reduce(function(n, s) {
    return n.concat(t.filter(function(o) {
      return o.phase === s;
    }));
  }, []);
}
function uO(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function dO(e) {
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
var up = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function dp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Pa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, s = n === void 0 ? [] : n, o = t.defaultOptions, r = o === void 0 ? up : o;
  return function(a, c, f) {
    f === void 0 && (f = r);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, up, r),
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
        v(), u.options = Object.assign({}, r, u.options, b), u.scrollParents = {
          reference: Js(a) ? br(a) : a.contextElement ? br(a.contextElement) : [],
          popper: br(c)
        };
        var m = cO(dO([].concat(s, u.options.modifiers)));
        return u.orderedModifiers = m.filter(function(T) {
          return T.enabled;
        }), g(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var y = u.elements, b = y.reference, m = y.popper;
          if (dp(b, m)) {
            u.rects = {
              reference: aO(b, Qr(m), u.options.strategy === "fixed"),
              popper: ru(m)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(w) {
              return u.modifiersData[w.name] = Object.assign({}, w.data);
            });
            for (var T = 0; T < u.orderedModifiers.length; T++) {
              if (u.reset === !0) {
                u.reset = !1, T = -1;
                continue;
              }
              var R = u.orderedModifiers[T], O = R.fn, x = R.options, k = x === void 0 ? {} : x, S = R.name;
              typeof O == "function" && (u = O({
                state: u,
                options: k,
                name: S,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: uO(function() {
        return new Promise(function(_) {
          h.forceUpdate(), _(u);
        });
      }),
      destroy: function() {
        v(), p = !0;
      }
    };
    if (!dp(a, c))
      return h;
    h.setOptions(f).then(function(_) {
      !p && f.onFirstUpdate && f.onFirstUpdate(_);
    });
    function g() {
      u.orderedModifiers.forEach(function(_) {
        var y = _.name, b = _.options, m = b === void 0 ? {} : b, T = _.effect;
        if (typeof T == "function") {
          var R = T({
            state: u,
            name: y,
            instance: h,
            options: m
          }), O = function() {
          };
          d.push(R || O);
        }
      });
    }
    function v() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return h;
  };
}
var fO = /* @__PURE__ */ Pa(), pO = [lu, fu, au, ou], hO = /* @__PURE__ */ Pa({
  defaultModifiers: pO
}), mO = [lu, fu, au, ou, Nv, Ov, Dv, Av, Tv], pu = /* @__PURE__ */ Pa({
  defaultModifiers: mO
});
const xv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: pv,
  afterRead: uv,
  afterWrite: gv,
  applyStyles: ou,
  arrow: Av,
  auto: Ra,
  basePlacements: Ko,
  beforeMain: dv,
  beforeRead: lv,
  beforeWrite: hv,
  bottom: jt,
  clippingParents: iv,
  computeStyles: au,
  createPopper: pu,
  createPopperBase: fO,
  createPopperLite: hO,
  detectOverflow: Po,
  end: xo,
  eventListeners: lu,
  flip: Ov,
  hide: Tv,
  left: Ot,
  main: fv,
  modifierPhases: vv,
  offset: Nv,
  placements: nu,
  popper: po,
  popperGenerator: Pa,
  popperOffsets: fu,
  preventOverflow: Dv,
  read: cv,
  reference: av,
  right: $t,
  start: Qs,
  top: Ct,
  variationPlacements: uc,
  viewport: tu,
  write: mv
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
}, gO = 1e6, vO = 1e3, pc = "transitionend", kv = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), _O = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), yO = (e) => {
  do
    e += Math.floor(Math.random() * gO);
  while (document.getElementById(e));
  return e;
}, bO = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), o = Number.parseFloat(n);
  return !s && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * vO);
}, Rv = (e) => {
  e.dispatchEvent(new Event(pc));
}, jn = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), ps = (e) => jn(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(kv(e)) : null, zo = (e) => {
  if (!jn(e) || e.getClientRects().length === 0)
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
}, hs = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Iv = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Iv(e.parentNode) : null;
}, ra = () => {
}, Jr = (e) => {
  e.offsetHeight;
}, Pv = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, ll = [], EO = (e) => {
  document.readyState === "loading" ? (ll.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of ll)
      t();
  }), ll.push(e)) : e();
}, Gt = () => document.documentElement.dir === "rtl", Jt = (e) => {
  EO(() => {
    const t = Pv();
    if (t) {
      const n = e.NAME, s = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = s, e.jQueryInterface);
    }
  });
}, kt = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, Mv = (e, t, n = !0) => {
  if (!n) {
    kt(e);
    return;
  }
  const o = bO(t) + 5;
  let r = !1;
  const i = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(pc, i), kt(e));
  };
  t.addEventListener(pc, i), setTimeout(() => {
    r || Rv(t);
  }, o);
}, hu = (e, t, n, s) => {
  const o = e.length;
  let r = e.indexOf(t);
  return r === -1 ? !n && s ? e[o - 1] : e[0] : (r += n ? 1 : -1, s && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))]);
}, wO = /[^.]*(?=\..*)\.|.*/, AO = /\..*/, SO = /::\d+$/, cl = {};
let fp = 1;
const Vv = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, CO = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Lv(e, t) {
  return t && `${t}::${fp++}` || e.uidEvent || fp++;
}
function Fv(e) {
  const t = Lv(e);
  return e.uidEvent = t, cl[t] = cl[t] || {}, cl[t];
}
function OO(e, t) {
  return function n(s) {
    return mu(s, {
      delegateTarget: e
    }), n.oneOff && G.off(e, s.type, t), t.apply(e, [s]);
  };
}
function TO(e, t, n) {
  return function s(o) {
    const r = e.querySelectorAll(t);
    for (let {
      target: i
    } = o; i && i !== this; i = i.parentNode)
      for (const a of r)
        if (a === i)
          return mu(o, {
            delegateTarget: i
          }), s.oneOff && G.off(e, o.type, t, n), n.apply(i, [o]);
  };
}
function Bv(e, t, n = null) {
  return Object.values(e).find((s) => s.callable === t && s.delegationSelector === n);
}
function jv(e, t, n) {
  const s = typeof t == "string", o = s ? n : t || n;
  let r = $v(e);
  return CO.has(r) || (r = e), [s, o, r];
}
function pp(e, t, n, s, o) {
  if (typeof t != "string" || !e)
    return;
  let [r, i, a] = jv(t, n, s);
  t in Vv && (i = ((g) => function(v) {
    if (!v.relatedTarget || v.relatedTarget !== v.delegateTarget && !v.delegateTarget.contains(v.relatedTarget))
      return g.call(this, v);
  })(i));
  const c = Fv(e), f = c[a] || (c[a] = {}), u = Bv(f, i, r ? n : null);
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const d = Lv(i, t.replace(wO, "")), p = r ? TO(e, n, i) : OO(e, i);
  p.delegationSelector = r ? n : null, p.callable = i, p.oneOff = o, p.uidEvent = d, f[d] = p, e.addEventListener(a, p, r);
}
function hc(e, t, n, s, o) {
  const r = Bv(t[n], s, o);
  r && (e.removeEventListener(n, r, !!o), delete t[n][r.uidEvent]);
}
function NO(e, t, n, s) {
  const o = t[n] || {};
  for (const [r, i] of Object.entries(o))
    r.includes(s) && hc(e, t, n, i.callable, i.delegationSelector);
}
function $v(e) {
  return e = e.replace(AO, ""), Vv[e] || e;
}
const G = {
  on(e, t, n, s) {
    pp(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    pp(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e)
      return;
    const [o, r, i] = jv(t, n, s), a = i !== t, c = Fv(e), f = c[i] || {}, u = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(f).length)
        return;
      hc(e, c, i, r, o ? n : null);
      return;
    }
    if (u)
      for (const d of Object.keys(c))
        NO(e, c, d, t.slice(1));
    for (const [d, p] of Object.entries(f)) {
      const h = d.replace(SO, "");
      (!a || t.includes(h)) && hc(e, c, i, p.callable, p.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const s = Pv(), o = $v(t), r = t !== o;
    let i = null, a = !0, c = !0, f = !1;
    r && s && (i = s.Event(t, n), s(e).trigger(i), a = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const u = mu(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && u.preventDefault(), c && e.dispatchEvent(u), u.defaultPrevented && i && i.preventDefault(), u;
  }
};
function mu(e, t = {}) {
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
function hp(e) {
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
const $n = {
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
      o = o.charAt(0).toLowerCase() + o.slice(1), t[o] = hp(e.dataset[s]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return hp(e.getAttribute(`data-bs-${ul(t)}`));
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
    const s = jn(n) ? $n.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof s == "object" ? s : {},
      ...jn(n) ? $n.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, o] of Object.entries(n)) {
      const r = t[s], i = jn(r) ? "element" : _O(r);
      if (!new RegExp(o).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${o}".`);
    }
  }
}
const DO = "5.3.7";
class fn extends Zr {
  constructor(t, n) {
    super(), t = ps(t), t && (this._element = t, this._config = this._getConfig(n), al.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    al.remove(this._element, this.constructor.DATA_KEY), G.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  // Private
  _queueCallback(t, n, s = !0) {
    Mv(t, n, s);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return al.get(ps(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return DO;
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
  return t ? t.split(",").map((n) => kv(n)).join(",") : null;
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
    return this.find(t, e).filter((n) => !hs(n) && zo(n));
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
}, Ma = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, s = e.NAME;
  G.on(document, n, `[data-bs-dismiss="${s}"]`, function(o) {
    if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), hs(this))
      return;
    const r = Ee.getElementFromSelector(this) || this.closest(`.${s}`);
    e.getOrCreateInstance(r)[t]();
  });
}, xO = "alert", kO = "bs.alert", Uv = `.${kO}`, RO = `close${Uv}`, IO = `closed${Uv}`, PO = "fade", MO = "show";
class Va extends fn {
  // Getters
  static get NAME() {
    return xO;
  }
  // Public
  close() {
    if (G.trigger(this._element, RO).defaultPrevented)
      return;
    this._element.classList.remove(MO);
    const n = this._element.classList.contains(PO);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), G.trigger(this._element, IO), this.dispose();
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
Ma(Va, "close");
Jt(Va);
const VO = "button", LO = "bs.button", FO = `.${LO}`, BO = ".data-api", jO = "active", mp = '[data-bs-toggle="button"]', $O = `click${FO}${BO}`;
class La extends fn {
  // Getters
  static get NAME() {
    return VO;
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
G.on(document, $O, mp, (e) => {
  e.preventDefault();
  const t = e.target.closest(mp);
  La.getOrCreateInstance(t).toggle();
});
Jt(La);
const UO = "swipe", qo = ".bs.swipe", HO = `touchstart${qo}`, WO = `touchmove${qo}`, KO = `touchend${qo}`, zO = `pointerdown${qo}`, qO = `pointerup${qo}`, YO = "touch", XO = "pen", GO = "pointer-event", QO = 40, JO = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, ZO = {
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
    return JO;
  }
  static get DefaultType() {
    return ZO;
  }
  static get NAME() {
    return UO;
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
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), kt(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= QO)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && kt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (G.on(this._element, zO, (t) => this._start(t)), G.on(this._element, qO, (t) => this._end(t)), this._element.classList.add(GO)) : (G.on(this._element, HO, (t) => this._start(t)), G.on(this._element, WO, (t) => this._move(t)), G.on(this._element, KO, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === XO || t.pointerType === YO);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const eT = "carousel", tT = "bs.carousel", _s = `.${tT}`, Hv = ".data-api", nT = "ArrowLeft", sT = "ArrowRight", oT = 500, sr = "next", lo = "prev", ho = "left", Li = "right", rT = `slide${_s}`, fl = `slid${_s}`, iT = `keydown${_s}`, aT = `mouseenter${_s}`, lT = `mouseleave${_s}`, cT = `dragstart${_s}`, uT = `load${_s}${Hv}`, dT = `click${_s}${Hv}`, Wv = "carousel", di = "active", fT = "slide", pT = "carousel-item-end", hT = "carousel-item-start", mT = "carousel-item-next", gT = "carousel-item-prev", Kv = ".active", zv = ".carousel-item", vT = Kv + zv, _T = ".carousel-item img", yT = ".carousel-indicators", bT = "[data-bs-slide], [data-bs-slide-to]", ET = '[data-bs-ride="carousel"]', wT = {
  [nT]: Li,
  [sT]: ho
}, AT = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, ST = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class ei extends fn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Ee.findOne(yT, this._element), this._addEventListeners(), this._config.ride === Wv && this.cycle();
  }
  // Getters
  static get Default() {
    return AT;
  }
  static get DefaultType() {
    return ST;
  }
  static get NAME() {
    return eT;
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
    this._isSliding && Rv(this._element), this._clearInterval();
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
    this._config.keyboard && G.on(this._element, iT, (t) => this._keydown(t)), this._config.pause === "hover" && (G.on(this._element, aT, () => this.pause()), G.on(this._element, lT, () => this._maybeEnableCycle())), this._config.touch && ia.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of Ee.find(_T, this._element))
      G.on(s, cT, (o) => o.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(ho)),
      rightCallback: () => this._slide(this._directionToOrder(Li)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), oT + this._config.interval));
      }
    };
    this._swipeHelper = new ia(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = wT[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = Ee.findOne(Kv, this._indicatorsElement);
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
    const s = this._getActive(), o = t === sr, r = n || hu(this._getItems(), s, o, this._config.wrap);
    if (r === s)
      return;
    const i = this._getItemIndex(r), a = (h) => G.trigger(this._element, h, {
      relatedTarget: r,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(s),
      to: i
    });
    if (a(rT).defaultPrevented || !s || !r)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = r;
    const u = o ? hT : pT, d = o ? mT : gT;
    r.classList.add(d), Jr(r), s.classList.add(u), r.classList.add(u);
    const p = () => {
      r.classList.remove(u, d), r.classList.add(di), s.classList.remove(di, d, u), this._isSliding = !1, a(fl);
    };
    this._queueCallback(p, s, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(fT);
  }
  _getActive() {
    return Ee.findOne(vT, this._element);
  }
  _getItems() {
    return Ee.find(zv, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Gt() ? t === ho ? lo : sr : t === ho ? sr : lo;
  }
  _orderToDirection(t) {
    return Gt() ? t === lo ? ho : Li : t === lo ? Li : ho;
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
G.on(document, dT, bT, function(e) {
  const t = Ee.getElementFromSelector(this);
  if (!t || !t.classList.contains(Wv))
    return;
  e.preventDefault();
  const n = ei.getOrCreateInstance(t), s = this.getAttribute("data-bs-slide-to");
  if (s) {
    n.to(s), n._maybeEnableCycle();
    return;
  }
  if ($n.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
G.on(window, uT, () => {
  const e = Ee.find(ET);
  for (const t of e)
    ei.getOrCreateInstance(t);
});
Jt(ei);
const CT = "collapse", OT = "bs.collapse", ti = `.${OT}`, TT = ".data-api", NT = `show${ti}`, DT = `shown${ti}`, xT = `hide${ti}`, kT = `hidden${ti}`, RT = `click${ti}${TT}`, pl = "show", _o = "collapse", fi = "collapsing", IT = "collapsed", PT = `:scope .${_o} .${_o}`, MT = "collapse-horizontal", VT = "width", LT = "height", FT = ".collapse.show, .collapse.collapsing", mc = '[data-bs-toggle="collapse"]', BT = {
  parent: null,
  toggle: !0
}, jT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Lr extends fn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const s = Ee.find(mc);
    for (const o of s) {
      const r = Ee.getSelectorFromElement(o), i = Ee.find(r).filter((a) => a === this._element);
      r !== null && i.length && this._triggerArray.push(o);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return BT;
  }
  static get DefaultType() {
    return jT;
  }
  static get NAME() {
    return CT;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(FT).filter((a) => a !== this._element).map((a) => Lr.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || G.trigger(this._element, NT).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(_o), this._element.classList.add(fi), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(fi), this._element.classList.add(_o, pl), this._element.style[s] = "", G.trigger(this._element, DT);
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
      this._isTransitioning = !1, this._element.classList.remove(fi), this._element.classList.add(_o), G.trigger(this._element, kT);
    };
    this._element.style[n] = "", this._queueCallback(s, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(pl);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = ps(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(MT) ? VT : LT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(mc);
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
        s.classList.toggle(IT, !n), s.setAttribute("aria-expanded", n);
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
G.on(document, RT, mc, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of Ee.getMultipleElementsFromSelector(this))
    Lr.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Jt(Lr);
const gp = "dropdown", $T = "bs.dropdown", eo = `.${$T}`, gu = ".data-api", UT = "Escape", vp = "Tab", HT = "ArrowUp", _p = "ArrowDown", WT = 2, KT = `hide${eo}`, zT = `hidden${eo}`, qT = `show${eo}`, YT = `shown${eo}`, qv = `click${eo}${gu}`, Yv = `keydown${eo}${gu}`, XT = `keyup${eo}${gu}`, mo = "show", GT = "dropup", QT = "dropend", JT = "dropstart", ZT = "dropup-center", eN = "dropdown-center", ks = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', tN = `${ks}.${mo}`, Fi = ".dropdown-menu", nN = ".navbar", sN = ".navbar-nav", oN = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", rN = Gt() ? "top-end" : "top-start", iN = Gt() ? "top-start" : "top-end", aN = Gt() ? "bottom-end" : "bottom-start", lN = Gt() ? "bottom-start" : "bottom-end", cN = Gt() ? "left-start" : "right-start", uN = Gt() ? "right-start" : "left-start", dN = "top", fN = "bottom", pN = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, hN = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class On extends fn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = Ee.next(this._element, Fi)[0] || Ee.prev(this._element, Fi)[0] || Ee.findOne(Fi, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return pN;
  }
  static get DefaultType() {
    return hN;
  }
  static get NAME() {
    return gp;
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
    if (!G.trigger(this._element, qT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(sN))
        for (const s of [].concat(...document.body.children))
          G.on(s, "mouseover", ra);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(mo), this._element.classList.add(mo), G.trigger(this._element, YT, t);
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
    if (!G.trigger(this._element, KT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          G.off(s, "mouseover", ra);
      this._popper && this._popper.destroy(), this._menu.classList.remove(mo), this._element.classList.remove(mo), this._element.setAttribute("aria-expanded", "false"), $n.removeDataAttribute(this._menu, "popper"), G.trigger(this._element, zT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !jn(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${gp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof xv > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : jn(this._config.reference) ? t = ps(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = pu(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(mo);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(QT))
      return cN;
    if (t.classList.contains(JT))
      return uN;
    if (t.classList.contains(ZT))
      return dN;
    if (t.classList.contains(eN))
      return fN;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(GT) ? n ? iN : rN : n ? lN : aN;
  }
  _detectNavbar() {
    return this._element.closest(nN) !== null;
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
    return (this._inNavbar || this._config.display === "static") && ($n.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
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
    const s = Ee.find(oN, this._menu).filter((o) => zo(o));
    s.length && hu(s, n, t === _p, !s.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = On.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === WT || t.type === "keyup" && t.key !== vp)
      return;
    const n = Ee.find(tN);
    for (const s of n) {
      const o = On.getInstance(s);
      if (!o || o._config.autoClose === !1)
        continue;
      const r = t.composedPath(), i = r.includes(o._menu);
      if (r.includes(o._element) || o._config.autoClose === "inside" && !i || o._config.autoClose === "outside" && i || o._menu.contains(t.target) && (t.type === "keyup" && t.key === vp || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: o._element
      };
      t.type === "click" && (a.clickEvent = t), o._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), s = t.key === UT, o = [HT, _p].includes(t.key);
    if (!o && !s || n && !s)
      return;
    t.preventDefault();
    const r = this.matches(ks) ? this : Ee.prev(this, ks)[0] || Ee.next(this, ks)[0] || Ee.findOne(ks, t.delegateTarget.parentNode), i = On.getOrCreateInstance(r);
    if (o) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), r.focus());
  }
}
G.on(document, Yv, ks, On.dataApiKeydownHandler);
G.on(document, Yv, Fi, On.dataApiKeydownHandler);
G.on(document, qv, On.clearMenus);
G.on(document, XT, On.clearMenus);
G.on(document, qv, ks, function(e) {
  e.preventDefault(), On.getOrCreateInstance(this).toggle();
});
Jt(On);
const Xv = "backdrop", mN = "fade", yp = "show", bp = `mousedown.bs.${Xv}`, gN = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, vN = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Gv extends Zr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return gN;
  }
  static get DefaultType() {
    return vN;
  }
  static get NAME() {
    return Xv;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      kt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Jr(n), n.classList.add(yp), this._emulateAnimation(() => {
      kt(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      kt(t);
      return;
    }
    this._getElement().classList.remove(yp), this._emulateAnimation(() => {
      this.dispose(), kt(t);
    });
  }
  dispose() {
    this._isAppended && (G.off(this._element, bp), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(mN), this._element = t;
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
    this._config.rootElement.append(t), G.on(t, bp, () => {
      kt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Mv(t, this._getElement(), this._config.isAnimated);
  }
}
const _N = "focustrap", yN = "bs.focustrap", aa = `.${yN}`, bN = `focusin${aa}`, EN = `keydown.tab${aa}`, wN = "Tab", AN = "forward", Ep = "backward", SN = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, CN = {
  autofocus: "boolean",
  trapElement: "element"
};
class Qv extends Zr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return SN;
  }
  static get DefaultType() {
    return CN;
  }
  static get NAME() {
    return _N;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), G.off(document, aa), G.on(document, bN, (t) => this._handleFocusin(t)), G.on(document, EN, (t) => this._handleKeydown(t)), this._isActive = !0);
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
    s.length === 0 ? n.focus() : this._lastTabNavDirection === Ep ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === wN && (this._lastTabNavDirection = t.shiftKey ? Ep : AN);
  }
}
const wp = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Ap = ".sticky-top", pi = "padding-right", Sp = "margin-right";
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
    this._disableOverFlow(), this._setElementAttributes(this._element, pi, (n) => n + t), this._setElementAttributes(wp, pi, (n) => n + t), this._setElementAttributes(Ap, Sp, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, pi), this._resetElementAttributes(wp, pi), this._resetElementAttributes(Ap, Sp);
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
    s && $n.setDataAttribute(t, n, s);
  }
  _resetElementAttributes(t, n) {
    const s = (o) => {
      const r = $n.getDataAttribute(o, n);
      if (r === null) {
        o.style.removeProperty(n);
        return;
      }
      $n.removeDataAttribute(o, n), o.style.setProperty(n, r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, n) {
    if (jn(t)) {
      n(t);
      return;
    }
    for (const s of Ee.find(t, this._element))
      n(s);
  }
}
const ON = "modal", TN = "bs.modal", Qt = `.${TN}`, NN = ".data-api", DN = "Escape", xN = `hide${Qt}`, kN = `hidePrevented${Qt}`, Jv = `hidden${Qt}`, Zv = `show${Qt}`, RN = `shown${Qt}`, IN = `resize${Qt}`, PN = `click.dismiss${Qt}`, MN = `mousedown.dismiss${Qt}`, VN = `keydown.dismiss${Qt}`, LN = `click${Qt}${NN}`, Cp = "modal-open", FN = "fade", Op = "show", hl = "modal-static", BN = ".modal.show", jN = ".modal-dialog", $N = ".modal-body", UN = '[data-bs-toggle="modal"]', HN = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, WN = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Zs extends fn {
  constructor(t, n) {
    super(t, n), this._dialog = Ee.findOne(jN, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new gc(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return HN;
  }
  static get DefaultType() {
    return WN;
  }
  static get NAME() {
    return ON;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || G.trigger(this._element, Zv, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Cp), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || G.trigger(this._element, xN).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Op), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    G.off(window, Qt), G.off(this._dialog, Qt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
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
    const n = Ee.findOne($N, this._dialog);
    n && (n.scrollTop = 0), Jr(this._element), this._element.classList.add(Op);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, G.trigger(this._element, RN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    G.on(this._element, VN, (t) => {
      if (t.key === DN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), G.on(window, IN, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), G.on(this._element, MN, (t) => {
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
      document.body.classList.remove(Cp), this._resetAdjustments(), this._scrollBar.reset(), G.trigger(this._element, Jv);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(FN);
  }
  _triggerBackdropTransition() {
    if (G.trigger(this._element, kN).defaultPrevented)
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
G.on(document, LN, UN, function(e) {
  const t = Ee.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), G.one(t, Zv, (o) => {
    o.defaultPrevented || G.one(t, Jv, () => {
      zo(this) && this.focus();
    });
  });
  const n = Ee.findOne(BN);
  n && Zs.getInstance(n).hide(), Zs.getOrCreateInstance(t).toggle(this);
});
Ma(Zs);
Jt(Zs);
const KN = "offcanvas", zN = "bs.offcanvas", Xn = `.${zN}`, e_ = ".data-api", qN = `load${Xn}${e_}`, YN = "Escape", Tp = "show", Np = "showing", Dp = "hiding", XN = "offcanvas-backdrop", t_ = ".offcanvas.show", GN = `show${Xn}`, QN = `shown${Xn}`, JN = `hide${Xn}`, xp = `hidePrevented${Xn}`, n_ = `hidden${Xn}`, ZN = `resize${Xn}`, eD = `click${Xn}${e_}`, tD = `keydown.dismiss${Xn}`, nD = '[data-bs-toggle="offcanvas"]', sD = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, oD = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class ms extends fn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return sD;
  }
  static get DefaultType() {
    return oD;
  }
  static get NAME() {
    return KN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || G.trigger(this._element, GN, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new gc().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Np);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Tp), this._element.classList.remove(Np), G.trigger(this._element, QN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || G.trigger(this._element, JN).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Dp), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Tp, Dp), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new gc().reset(), G.trigger(this._element, n_);
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
        G.trigger(this._element, xp);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Gv({
      className: XN,
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
    G.on(this._element, tD, (t) => {
      if (t.key === YN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        G.trigger(this._element, xp);
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
G.on(document, eD, nD, function(e) {
  const t = Ee.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), hs(this))
    return;
  G.one(t, n_, () => {
    zo(this) && this.focus();
  });
  const n = Ee.findOne(t_);
  n && n !== t && ms.getInstance(n).hide(), ms.getOrCreateInstance(t).toggle(this);
});
G.on(window, qN, () => {
  for (const e of Ee.find(t_))
    ms.getOrCreateInstance(e).show();
});
G.on(window, ZN, () => {
  for (const e of Ee.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && ms.getOrCreateInstance(e).hide();
});
Ma(ms);
Jt(ms);
const rD = /^aria-[\w-]*$/i, s_ = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", rD],
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
}, iD = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), aD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, lD = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? iD.has(n) ? !!aD.test(e.nodeValue) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
};
function cD(e, t, n) {
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
      lD(u, f) || i.removeAttribute(u.nodeName);
  }
  return o.body.innerHTML;
}
const uD = "TemplateFactory", dD = {
  allowList: s_,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, fD = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, pD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class hD extends Zr {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return dD;
  }
  static get DefaultType() {
    return fD;
  }
  static get NAME() {
    return uD;
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
      }, pD);
  }
  _setContent(t, n, s) {
    const o = Ee.findOne(s, t);
    if (o) {
      if (n = this._resolvePossibleFunction(n), !n) {
        o.remove();
        return;
      }
      if (jn(n)) {
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
    return this._config.sanitize ? cD(t, this._config.allowList, this._config.sanitizeFn) : t;
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
const mD = "tooltip", gD = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ml = "fade", vD = "modal", hi = "show", _D = ".tooltip-inner", kp = `.${vD}`, Rp = "hide.bs.modal", or = "hover", gl = "focus", vl = "click", yD = "manual", bD = "hide", ED = "hidden", wD = "show", AD = "shown", SD = "inserted", CD = "click", OD = "focusin", TD = "focusout", ND = "mouseenter", DD = "mouseleave", xD = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Gt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Gt() ? "right" : "left"
}, kD = {
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
}, RD = {
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
class to extends fn {
  constructor(t, n) {
    if (typeof xv > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return kD;
  }
  static get DefaultType() {
    return RD;
  }
  static get NAME() {
    return mD;
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
    clearTimeout(this._timeout), G.off(this._element.closest(kp), Rp, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = G.trigger(this._element, this.constructor.eventName(wD)), s = (Iv(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const o = this._getTipElement();
    this._element.setAttribute("aria-describedby", o.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(o), G.trigger(this._element, this.constructor.eventName(SD))), this._popper = this._createPopper(o), o.classList.add(hi), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        G.on(a, "mouseover", ra);
    const i = () => {
      G.trigger(this._element, this.constructor.eventName(AD)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || G.trigger(this._element, this.constructor.eventName(bD)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(hi), "ontouchstart" in document.documentElement)
      for (const o of [].concat(...document.body.children))
        G.off(o, "mouseover", ra);
    this._activeTrigger[vl] = !1, this._activeTrigger[gl] = !1, this._activeTrigger[or] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), G.trigger(this._element, this.constructor.eventName(ED)));
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
    const s = yO(this.constructor.NAME).toString();
    return n.setAttribute("id", s), this._isAnimated() && n.classList.add(ml), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new hD({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [_D]: this._getTitle()
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
    const n = kt(this._config.placement, [this, t, this._element]), s = xD[n.toUpperCase()];
    return pu(this._element, t, this._getPopperConfig(s));
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
        G.on(this._element, this.constructor.eventName(CD), this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          o._activeTrigger[vl] = !(o._isShown() && o._activeTrigger[vl]), o.toggle();
        });
      else if (n !== yD) {
        const s = n === or ? this.constructor.eventName(ND) : this.constructor.eventName(OD), o = n === or ? this.constructor.eventName(DD) : this.constructor.eventName(TD);
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
    }, G.on(this._element.closest(kp), Rp, this._hideModalHandler);
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
    const n = $n.getDataAttributes(this._element);
    for (const s of Object.keys(n))
      gD.has(s) && delete n[s];
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
const ID = "popover", PD = ".popover-header", MD = ".popover-body", VD = {
  ...to.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, LD = {
  ...to.DefaultType,
  content: "(null|string|element|function)"
};
class vu extends to {
  // Getters
  static get Default() {
    return VD;
  }
  static get DefaultType() {
    return LD;
  }
  static get NAME() {
    return ID;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [PD]: this._getTitle(),
      [MD]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = vu.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Jt(vu);
const FD = "scrollspy", BD = "bs.scrollspy", _u = `.${BD}`, jD = ".data-api", $D = `activate${_u}`, Ip = `click${_u}`, UD = `load${_u}${jD}`, HD = "dropdown-item", co = "active", WD = '[data-bs-spy="scroll"]', _l = "[href]", KD = ".nav, .list-group", Pp = ".nav-link", zD = ".nav-item", qD = ".list-group-item", YD = `${Pp}, ${zD} > ${Pp}, ${qD}`, XD = ".dropdown", GD = ".dropdown-toggle", QD = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, JD = {
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
    return QD;
  }
  static get DefaultType() {
    return JD;
  }
  static get NAME() {
    return FD;
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
    this._config.smoothScroll && (G.off(this._config.target, Ip), G.on(this._config.target, Ip, _l, (t) => {
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
      if (!n.hash || hs(n))
        continue;
      const s = Ee.findOne(decodeURI(n.hash), this._element);
      zo(s) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(co), this._activateParents(t), G.trigger(this._element, $D, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(HD)) {
      Ee.findOne(GD, t.closest(XD)).classList.add(co);
      return;
    }
    for (const n of Ee.parents(t, KD))
      for (const s of Ee.prev(n, YD))
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
G.on(window, UD, () => {
  for (const e of Ee.find(WD))
    Fa.getOrCreateInstance(e);
});
Jt(Fa);
const ZD = "tab", ex = "bs.tab", no = `.${ex}`, tx = `hide${no}`, nx = `hidden${no}`, sx = `show${no}`, ox = `shown${no}`, rx = `click${no}`, ix = `keydown${no}`, ax = `load${no}`, lx = "ArrowLeft", Mp = "ArrowRight", cx = "ArrowUp", Vp = "ArrowDown", yl = "Home", Lp = "End", Rs = "active", Fp = "fade", bl = "show", ux = "dropdown", o_ = ".dropdown-toggle", dx = ".dropdown-menu", El = `:not(${o_})`, fx = '.list-group, .nav, [role="tablist"]', px = ".nav-item, .list-group-item", hx = `.nav-link${El}, .list-group-item${El}, [role="tab"]${El}`, r_ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', wl = `${hx}, ${r_}`, mx = `.${Rs}[data-bs-toggle="tab"], .${Rs}[data-bs-toggle="pill"], .${Rs}[data-bs-toggle="list"]`;
class Mo extends fn {
  constructor(t) {
    super(t), this._parent = this._element.closest(fx), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), G.on(this._element, ix, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return ZD;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), s = n ? G.trigger(n, tx, {
      relatedTarget: t
    }) : null;
    G.trigger(t, sx, {
      relatedTarget: n
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(Rs), this._activate(Ee.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(bl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), G.trigger(t, ox, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Fp));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(Rs), t.blur(), this._deactivate(Ee.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(bl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), G.trigger(t, nx, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Fp));
  }
  _keydown(t) {
    if (![lx, Mp, cx, Vp, yl, Lp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((o) => !hs(o));
    let s;
    if ([yl, Lp].includes(t.key))
      s = n[t.key === yl ? 0 : n.length - 1];
    else {
      const o = [Mp, Vp].includes(t.key);
      s = hu(n, t.target, o, !0);
    }
    s && (s.focus({
      preventScroll: !0
    }), Mo.getOrCreateInstance(s).show());
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
    if (!s.classList.contains(ux))
      return;
    const o = (r, i) => {
      const a = Ee.findOne(r, s);
      a && a.classList.toggle(i, n);
    };
    o(o_, Rs), o(dx, bl), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(Rs);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(wl) ? t : Ee.findOne(wl, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(px) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Mo.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
G.on(document, rx, r_, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !hs(this) && Mo.getOrCreateInstance(this).show();
});
G.on(window, ax, () => {
  for (const e of Ee.find(mx))
    Mo.getOrCreateInstance(e);
});
Jt(Mo);
const gx = "toast", vx = "bs.toast", ys = `.${vx}`, _x = `mouseover${ys}`, yx = `mouseout${ys}`, bx = `focusin${ys}`, Ex = `focusout${ys}`, wx = `hide${ys}`, Ax = `hidden${ys}`, Sx = `show${ys}`, Cx = `shown${ys}`, Ox = "fade", Bp = "hide", mi = "show", gi = "showing", Tx = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Nx = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class ni extends fn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Nx;
  }
  static get DefaultType() {
    return Tx;
  }
  static get NAME() {
    return gx;
  }
  // Public
  show() {
    if (G.trigger(this._element, Sx).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Ox);
    const n = () => {
      this._element.classList.remove(gi), G.trigger(this._element, Cx), this._maybeScheduleHide();
    };
    this._element.classList.remove(Bp), Jr(this._element), this._element.classList.add(mi, gi), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || G.trigger(this._element, wx).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Bp), this._element.classList.remove(gi, mi), G.trigger(this._element, Ax);
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
    G.on(this._element, _x, (t) => this._onInteraction(t, !0)), G.on(this._element, yx, (t) => this._onInteraction(t, !1)), G.on(this._element, bx, (t) => this._onInteraction(t, !0)), G.on(this._element, Ex, (t) => this._onInteraction(t, !1));
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
Ma(ni);
Jt(ni);
var Dx = Object.defineProperty, xx = (e, t, n) => t in e ? Dx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nn = (e, t, n) => xx(e, typeof t != "symbol" ? t + "" : t, n);
const kx = { class: "toast-header" }, Rx = ["textContent"], Ix = ["textContent"], Px = { class: "toast-body" }, Mx = ["textContent"], Vx = /* @__PURE__ */ Ne({
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
    const s = e, o = n, { visible: r, animation: i, autohide: a, delay: c } = cn(s), f = U(), u = U();
    Rt(r, (x) => {
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
    function g() {
      f.value.isShown();
    }
    function v() {
      f.value.getOrCreateInstance();
    }
    function _() {
      f.value.getInstance();
    }
    function y() {
      f.value && (r.value === !0 ? d() : p());
    }
    function b() {
      o("hide", f.value);
    }
    function m() {
      o("hidden", f.value);
    }
    function T() {
      o("show", f.value);
    }
    async function R() {
      o("shown", f.value);
    }
    const O = { show: d, hide: p, dispose: h, isShown: g, getOrCreateInstance: v, getInstance: _ };
    return t({ ...O }), Tt(() => {
      u.value.addEventListener("hide.bs.toast", b), u.value.addEventListener("hidden.bs.toast", m), u.value.addEventListener("show.bs.toast", T), u.value.addEventListener("shown.bs.toast", R), f.value = new ni(u.value, {
        animation: i.value,
        autohide: a.value,
        delay: c.value
      }), y();
    }), (x, k) => (N(), I("div", {
      ref_key: "toastRef",
      ref: u,
      class: pe(["toast", [x.variant ? `text-bg-${x.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      Pe(x.$slots, "header", it(ot({ ...O })), () => [
        l("div", kx, [
          Pe(x.$slots, "title", it(ot({ ...O })), () => [
            l("strong", {
              class: "me-auto",
              textContent: M(x.title)
            }, null, 8, Rx)
          ], !0),
          Pe(x.$slots, "subtitle", it(ot({ ...O })), () => [
            l("small", {
              textContent: M(x.subtitle)
            }, null, 8, Ix)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ], !0),
      Pe(x.$slots, "body", it(ot({ ...O })), () => [
        l("div", Px, [
          Pe(x.$slots, "default", it(ot({ ...O })), () => [
            l("span", {
              textContent: M(x.body)
            }, null, 8, Mx)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), kn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, i_ = /* @__PURE__ */ kn(Vx, [["__scopeId", "data-v-c0cdbae8"]]);
function Lx() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Fx = { id: "toast-wrapper" };
let jp;
const Bx = /* @__PURE__ */ Ne({
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
    }, s = U(/* @__PURE__ */ new Map());
    jp = (r, i = "top right") => {
      const a = Lx(), c = { ...n, ...r, id: a };
      let f = s.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), s.value.set(i, f);
    };
    function o(r, i) {
      const a = s.value.get(r);
      a?.delete(i);
    }
    return t({ toast: jp }), (r, i) => (N(), et(Hr, { to: "body" }, [
      l("div", Fx, [
        (N(!0), I(Se, null, Je(s.value, ([a, c]) => (N(), I("div", {
          key: a,
          class: pe(["toast-group", `${a}`])
        }, [
          (N(!0), I(Se, null, Je(c, (f, u) => (N(), et(i_, gs({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (d) => o(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), jx = /* @__PURE__ */ kn(Bx, [["__scopeId", "data-v-786d1c50"]]), a_ = () => {
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
const Vo = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(xn).includes(n) || n == "" ? "" : `${t}${n}`;
}, $x = { class: "modal-content" }, Ux = { class: "modal-header" }, Hx = ["innerHTML"], Wx = { class: "modal-body" }, Kx = ["innerHTML"], zx = { class: "modal-footer" }, qx = ["innerHTML"], Yx = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const Xx = /* @__PURE__ */ Ne({
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
      size: c,
      btnSize: f
    } = cn(s), u = n, d = $(() => Vo(c.value, "modal-")), p = $(() => Vo(f.value, "btn-")), h = U();
    let g;
    const v = zn(), _ = () => document.querySelectorAll(".modal.show").length, y = () => typeof window < "u" && window._managedModals ? window._managedModals : [], b = 1055, m = U(b), T = () => {
      const re = _();
      m.value = b + re;
    };
    let R;
    const O = a_();
    function x() {
      return new Promise((re, K) => {
        if (!h.value) return;
        O.removeStickyElements(), T(), h.value.classList.add("managed-modal");
        const le = y(), ye = le.length + 1, Ze = {
          element: h.value,
          priority: ye,
          instance: v
        };
        le.push(Ze), h.value.addEventListener("shown.bs.modal", () => {
          w();
        }, { once: !0 }), g?.show(), R = re, u("onShown", g);
      });
    }
    function k(re = !0) {
      if (!h.value) return;
      const K = y(), le = K.findIndex((ye) => ye.element === h.value);
      le > -1 && K.splice(le, 1), h.value.addEventListener("hidden.bs.modal", () => {
        h.value && (h.value.style.display = ""), w();
      }, { once: !0 }), g?.hide(), typeof R == "function" && R(re), u("onHidden", g), O.restoreStickyElements();
    }
    function S() {
      g?.toggle();
    }
    const w = () => {
      const re = y();
      if (re.length === 0) return;
      re.sort((le, ye) => le.priority - ye.priority);
      const K = re[re.length - 1];
      re.forEach((le) => {
        le.element !== K.element ? le.element.style.opacity = "0" : le.element.style.opacity = "1";
      });
    };
    Tt(() => {
      g = new Zs(h.value, {
        backdrop: o?.value,
        keyboard: r.value,
        focus: i.value
      }), h.value.classList.add("managed-modal"), ma(() => {
        s?.visible === !0 ? g?.show() : g?.hide();
      });
    });
    function D(re) {
      o?.value !== "static" && k(!1);
    }
    function A() {
      k(!1);
    }
    function F() {
      k(!1);
    }
    function ce() {
      k(!0);
    }
    t({
      modal: g,
      show: x,
      hide: k,
      toggle: S,
      onHeaderCloseClicked: A,
      onCancelClicked: F,
      onOkCLicked: ce
    });
    const Y = { show: x, hide: k, toggle: S, modal: g };
    return (re, K) => (N(), I("div", gs({
      ref_key: "modalElement",
      ref: h,
      class: "modal fade",
      tabindex: "-1"
    }, { ...re.$attrs }, {
      onClick: wm(D, ["self"]),
      style: { zIndex: m.value }
    }), [
      l("div", {
        class: pe(["modal-dialog", d.value])
      }, [
        l("div", $x, [
          Pe(re.$slots, "header", it(ot({ ...Y })), () => [
            l("div", Ux, [
              Pe(re.$slots, "title", it(ot({ ...Y })), () => [
                l("h5", {
                  class: "modal-title",
                  innerHTML: re.title
                }, null, 8, Hx)
              ], !0),
              Pe(re.$slots, "header-close-button", it(ot({ ...Y })), () => [
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: A
                })
              ], !0)
            ])
          ], !0),
          l("div", Wx, [
            Pe(re.$slots, "default", it(ot({ ...Y })), () => [
              l("span", { innerHTML: re.body }, null, 8, Kx)
            ], !0)
          ]),
          l("div", zx, [
            Pe(re.$slots, "footer", it(ot({ ...Y })), () => [
              re.okOnly ? _e("", !0) : (N(), I("button", {
                key: 0,
                type: "button",
                class: pe(["btn btn-secondary", p.value]),
                onClick: F
              }, [
                Pe(re.$slots, "button-cancel", it(ot({ ...Y })), () => [
                  l("span", { innerHTML: re.textCancel }, null, 8, qx)
                ], !0)
              ], 2)),
              l("button", {
                type: "button",
                class: pe(["btn btn-primary", p.value]),
                onClick: ce
              }, [
                Pe(re.$slots, "button-ok", it(ot({ ...Y })), () => [
                  l("span", { innerHTML: re.textOk }, null, 8, Yx)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), l_ = /* @__PURE__ */ kn(Xx, [["__scopeId", "data-v-b8ba4eaa"]]), Gx = /* @__PURE__ */ Ne({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = U(void 0), s = U({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (N(), et(Hr, { to: "body" }, [
      fe(l_, gs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), Qx = {
  "data-header": "",
  class: "border-bottom"
}, Jx = { class: "d-flex gap-2 p-2" }, Zx = { class: "p-2" }, ek = {
  "data-footer": "",
  class: "border-top p-2"
}, tk = { class: "buttons" }, nk = /* @__PURE__ */ Ne({
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
    const n = e, { backdrop: s, disableOutsideClick: o, modal: r, size: i, btnSize: a } = cn(n), c = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = U(f), d = U(!1), p = U(!1), h = U(!1), g = U(), v = U(!1), _ = $(() => Vo(i.value, "modal-")), y = $(() => Vo(a.value, "btn-")), b = $(() => ({
      opening: d.value,
      closing: p.value,
      "no-backdrop": s.value === !1,
      static: v.value
    }));
    let m = null;
    const T = () => {
      const A = c();
      u.value = f + A;
    }, R = a_(), O = async () => (T(), R.removeStickyElements(), d.value = !0, g.value.addEventListener(
      "animationend",
      () => {
        d.value = !1, h.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? g.value.showModal() : g.value.show(), new Promise((A, F) => {
      m = A;
    })), x = async (A = !1) => {
      p.value = !0, g.value.addEventListener(
        "animationend",
        () => {
          g.value.close(), p.value = !1, h.value = !1, typeof m == "function" && m(A), m = null, R.restoreStickyElements();
        },
        { once: !0 }
      );
    }, k = async () => {
      h.value === !0 ? x() : O();
    }, S = () => {
      v.value = !0, setTimeout(() => {
        v.value = !1;
      }, 200);
    }, w = () => {
      if (s.value === "static" || o.value === !0) {
        S();
        return;
      }
      x(!1);
    };
    if (r.value === !0) {
      let A = function(ce) {
        if (s.value === "static" || o.value === !0) {
          S();
          return;
        }
        ce.target === g.value && x(!1);
      };
      const F = new AbortController();
      Tt(() => {
        document.addEventListener("click", (ce) => {
          A(ce);
        }, { signal: F.signal });
      }), Kr(() => {
        F.abort();
      });
    }
    const D = { show: O, hide: x, toggle: k, dialog: g };
    return t({
      show: O,
      hide: x,
      toggle: k
    }), (A, F) => (N(), I("div", {
      class: "dialog-wrapper",
      style: Vt({ zIndex: u.value })
    }, [
      l("div", {
        class: "backdrop",
        onClick: w
      }),
      l("dialog", {
        ref_key: "dialog",
        ref: g,
        class: pe(b.value)
      }, [
        l("div", {
          class: pe(["content", _.value])
        }, [
          Pe(A.$slots, "header", it(ot({ ...D })), () => [
            l("div", Qx, [
              l("div", Jx, [
                Pe(A.$slots, "title", it(ot({ ...D })), () => [
                  W(M(A.title), 1)
                ], !0),
                Pe(A.$slots, "header-close-button", {}, () => [
                  l("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: F[0] || (F[0] = (ce) => x(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          l("div", Zx, [
            Pe(A.$slots, "default", it(ot({ ...D })), () => [
              W(M(A.body), 1)
            ], !0)
          ]),
          Pe(A.$slots, "footer", it(ot({ ...D })), () => [
            l("div", ek, [
              l("div", tk, [
                A.okOnly ? _e("", !0) : (N(), I("button", {
                  key: 0,
                  type: "button",
                  class: pe(["btn btn-secondary", y.value]),
                  onClick: F[1] || (F[1] = (ce) => x(!1))
                }, [
                  Pe(A.$slots, "textCancel", it(ot({ ...D })), () => [
                    W(M(A.textCancel), 1)
                  ], !0)
                ], 2)),
                l("button", {
                  type: "button",
                  class: pe(["btn btn-primary", y.value]),
                  onClick: F[2] || (F[2] = (ce) => x(!0))
                }, [
                  Pe(A.$slots, "textOk", it(ot({ ...D })), () => [
                    W(M(A.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), c_ = /* @__PURE__ */ kn(nk, [["__scopeId", "data-v-0990c791"]]), sk = /* @__PURE__ */ Ne({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = U(void 0), s = U({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (N(), et(Hr, { to: "body" }, [
      fe(c_, gs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), ok = { "data-first": "" }, rk = ["disabled", "innerHTML"], ik = { "data-prev": "" }, ak = ["disabled", "innerHTML"], lk = { key: 0 }, ck = ["innerHTML"], uk = ["onClick"], dk = { "data-next": "" }, fk = ["disabled", "innerHTML"], pk = { "data-last": "" }, hk = ["disabled", "innerHTML"], mk = /* @__PURE__ */ Ne({
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
    function n(m, T = 0) {
      return [...Array(m).keys()].map((R) => R + T);
    }
    const s = t, o = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: a } = cn(o), c = Math.floor(i.value / 2), f = $(() => {
      let m = i.value, T = r.value <= c ? 1 : r.value - c;
      return r.value >= p.value - c && (T = p.value - m + 1), T < 1 && (T = 1), p.value < m && (m = p.value), n(m, T);
    }), u = $(() => r.value <= 1), d = $(() => r.value >= p.value), p = $(() => {
      const { perPage: m, totalItems: T } = o;
      return Math.ceil(T / m);
    });
    ma(() => {
      p.value > 0 && r.value > p.value && s("update:modelValue", p.value);
    });
    function h(m) {
      const T = i.value - 1;
      return !(a.value === !0 || m === 0 && r.value - c - 1 <= 0 || m === T && r.value + c >= p.value || m > 0 && m < T);
    }
    function g(m) {
      m < 1 && (m = 1), m > p.value && (m = p.value), s("update:modelValue", m);
    }
    function v() {
      s("update:modelValue", 1);
    }
    function _() {
      s("update:modelValue", p.value);
    }
    function y() {
      let m = r.value - 1;
      m < 1 && (m = 1), s("update:modelValue", m);
    }
    function b() {
      let m = r.value + 1;
      m > p.value && (m = p.value), s("update:modelValue", m);
    }
    return (m, T) => (N(), I("ul", {
      class: pe(["pagination", m.size])
    }, [
      l("li", ok, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: m.firstText,
          onClick: v
        }, null, 8, rk)
      ]),
      l("li", ik, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: m.prevText,
          onClick: y
        }, null, 8, ak)
      ]),
      (N(!0), I(Se, null, Je(f.value, (R, O) => (N(), I(Se, null, [
        h(O) ? (N(), I("li", lk, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: m.ellipsisText
          }, null, 8, ck)
        ])) : (N(), I("li", {
          key: 1,
          "data-prev": "",
          class: pe({ active: m.modelValue === R })
        }, [
          l("button", {
            class: "",
            onClick: (x) => g(R)
          }, M(R), 9, uk)
        ], 2))
      ], 64))), 256)),
      l("li", dk, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: m.nextText,
          onClick: b
        }, null, 8, fk)
      ]),
      l("li", pk, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: m.lastText,
          onClick: _
        }, null, 8, hk)
      ])
    ], 2));
  }
}), gk = /* @__PURE__ */ kn(mk, [["__scopeId", "data-v-2bfd7085"]]), vk = { class: "d-inline" }, _k = { class: "fw-bold" }, yk = /* @__PURE__ */ Ne({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = cn(n), r = $({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => {
      const c = Qe("b-dropdown-item"), f = Qe("b-dropdown");
      return N(), et(f, gs({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: be(() => [
          l("div", vk, [
            Pe(i.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = l("span", null, "Per page: ", -1)),
              l("span", _k, M(r.value), 1)
            ])
          ])
        ]),
        default: be(() => [
          (N(!0), I(Se, null, Je(oe(o), (u, d) => (N(), et(c, {
            key: u,
            onClick: (p) => r.value = u,
            active: u === i.modelValue
          }, {
            default: be(() => [
              W(M(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), bk = ["value"], Ek = /* @__PURE__ */ Ne({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = cn(n), r = $({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => nt((N(), I("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (c) => r.value = c)
    }, [
      (N(!0), I(Se, null, Je(oe(o), (c, f) => (N(), I("option", {
        key: c,
        value: c
      }, M(c), 9, bk))), 128))
    ], 512)), [
      [cs, r.value]
    ]);
  }
});
var Ts = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Ts || {});
class wk {
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
      let { key: d, direction: p, sortFn: h } = u, g = p === "ASC" ? 1 : -1, v = a[d], _ = c[d];
      if (h = typeof h == "function" ? h : r(v, _), f = h(v, _, a, c, t, u, g) * g, f !== 0) return f;
    }
    return f;
  }), i;
}, Ak = ["onClick"], Sk = { class: "th-wrapper" }, Ck = {
  key: 0,
  "data-sort-indicator": ""
}, Ok = { class: "sort-index" }, Tk = { class: "sort-direction" }, Nk = ["onMouseover"], Dk = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, xk = ["colspan"], kk = ["innerHTML"];
class Al {
  constructor(t = "", n = "", s = !1, o) {
    nn(this, "key"), nn(this, "label"), nn(this, "sortable"), nn(this, "sortFn"), this.key = t, this.label = n, this.sortable = s, this.sortFn = o;
  }
}
const Rk = /* @__PURE__ */ Ne({
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
      return _ = _.filter((y, b) => _.indexOf(y) == b), _;
    }, s = t, o = e, r = U([]), { fields: i, items: a } = cn(o), c = $(() => {
      if (o.externalSort || r.value.length == 0) return o.items;
      const v = [...o.items];
      return $p(r.value, v);
    }), f = $(() => {
      let v = i.value, _ = [];
      return v.length === 0 && (v = n([...a.value])), v.reduce((y, b, m) => {
        if (typeof b == "string")
          y.push(new Al(b, b));
        else if (b instanceof Al)
          y.push(b);
        else if (typeof b == "object") {
          const { key: T, label: R, sortable: O, sortFn: x } = b;
          y.push(new Al(T, R, O, x));
        }
        return y;
      }, _);
    });
    function u(v) {
      const _ = r.value.findIndex((y) => y.key === v.key);
      return _ < 0 ? "" : _ + 1;
    }
    function d(v) {
      const _ = r.value.findIndex((b) => b.key === v.key);
      if (_ < 0) return "fas fa-sort";
      const y = r.value[_];
      return y.direction === Ts.ASC ? "fas fa-sort-up" : y.direction === Ts.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(v) {
      const { key: _ } = v, y = r.value.findIndex((b) => b.key === _);
      if (y < 0) {
        const b = new wk(_, Ts.ASC, v.sortFn);
        r.value.push(b);
      } else {
        const b = r.value[y], m = b.direction;
        m === Ts.ASC ? b.direction = Ts.DESC : m === Ts.DESC && r.value.splice(y, 1);
      }
      s("sort", r.value, $p);
    }
    function h(v, _, y, b) {
      s("onMouseOverCell", v, _, y, b);
    }
    let g = U(null);
    return Tt(() => {
      g.value = zn();
    }), (v, _) => (N(), I("table", gs({ ...v.$attrs }, {
      class: { striped: v.striped, hover: v.hover }
    }), [
      l("thead", null, [
        (N(!0), I(Se, null, Je(f.value, (y) => (N(), I("th", {
          key: `thead-${y.key}`,
          class: pe({ sortable: y.sortable }),
          onClick: (b) => y.sortable && p(y)
        }, [
          l("span", Sk, [
            Pe(v.$slots, `head(${y.key})`, {
              field: y,
              data: oe(g),
              value: y.label
            }, () => [
              W(M(y.label), 1)
            ], !0),
            y.sortable ? (N(), I("span", Ck, [
              l("span", Ok, M(u(y)), 1),
              l("span", Tk, [
                l("i", {
                  class: pe(d(y))
                }, null, 2)
              ])
            ])) : _e("", !0)
          ])
        ], 10, Ak))), 128))
      ]),
      l("tbody", null, [
        (N(!0), I(Se, null, Je(c.value, (y, b) => (N(), I(Se, {
          key: `trow-${y?.id ?? b}`
        }, [
          Pe(v.$slots, "row", {
            item: y,
            index: b,
            colspan: f.value.length
          }, void 0, !0),
          l("tr", null, [
            (N(!0), I(Se, null, Je(f.value, (m) => (N(), I("td", {
              key: `tcell-${m.key + (y?.id ?? b)}`,
              class: pe({ [`tcell-${m?.key}`]: !0 }),
              onMouseover: (T) => h(T, y, b, m)
            }, [
              Pe(v.$slots, `cell(${m?.key})`, {
                data: oe(g),
                item: y,
                field: m,
                value: y[m?.key]
              }, () => [
                W(M(y[m?.key]), 1)
              ], !0)
            ], 42, Nk))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        Pe(v.$slots, "footer", { data: oe(g) }, void 0, !0)
      ]),
      v.showEmpty && c.value.length === 0 ? (N(), I("tr", Dk, [
        l("td", {
          colspan: f.value.length
        }, [
          Pe(v.$slots, "empty", {
            items: c.value,
            data: oe(g),
            fields: f.value
          }, () => [
            l("span", { innerHTML: v.emptyText }, null, 8, kk)
          ], !0)
        ], 8, xk)
      ])) : _e("", !0)
    ], 16));
  }
}), Ik = /* @__PURE__ */ kn(Rk, [["__scopeId", "data-v-b1e9b5de"]]);
var u_ = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(u_ || {});
const Pk = { class: "d-inline-block position-relative" }, Mk = ["disabled"], Up = "data-prevent-close", Vk = /* @__PURE__ */ Ne({
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
    const s = U(), o = e, r = U(), i = U(!1), a = U(o.variant), c = U(o.centered), f = U(o.dropup), u = U(o.dropend), d = U(o.dropstart), p = U(o.menuEnd), h = n, g = $(() => {
      const k = [];
      return a != null && a.value && k.push(`btn-${a.value}`), o.size && k.push(`btn-${o.size}`), k;
    }), v = $(() => {
      const k = [];
      return c != null && c.value && k.push("dropdown-center"), f != null && f.value && k.push("dropup"), d != null && d.value && k.push("dropstart"), !(d != null && d.value) && u != null && u.value && k.push("dropend"), k.length === 0 && k.push("dropdown"), k.unshift("btn-group"), k;
    }), _ = $(() => {
      const k = [];
      return i.value && k.push("show"), p.value && k.push("dropdown-menu-end"), k;
    }), y = () => {
      if (!i.value) return;
      const k = r.value.getBoundingClientRect(), S = s.value.getBoundingClientRect(), w = window.innerHeight - k.bottom, D = k.top, A = window.innerWidth - k.right, F = k.left;
      f.value = w < S.height && D >= S.height, p.value = A < S.width && F >= S.width;
    };
    async function b() {
      i.value = !0, await Ks(), y();
    }
    function m() {
      i.value = !1;
    }
    function T(k) {
      i.value ? m() : b();
    }
    function R(k) {
      const { target: S } = k;
      S?.closest(`[${Up}],[${Up}=true]`) || m();
    }
    function O() {
      i.value && m();
    }
    Rt(i, (k, S) => {
      typeof S > "u" || k !== S && (h("toggle", { show: k }), k === !0 ? h("open", { show: k }) : h("close", { show: k }));
    }, { immediate: !0 });
    const x = {
      show: i,
      disabled: o.disabled,
      buttonClasses: g,
      onButtonClicked: T,
      onMenuClicked: R,
      onClickOutside: O,
      open: b,
      close: m
    };
    return t({
      ...x
    }), (k, S) => {
      const w = eb("click-outside");
      return N(), I("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: pe([v.value, "dropdown-wrapper"])
      }, [
        nt((N(), I("div", Pk, [
          Pe(k.$slots, "header", it(ot({ ...x })), () => [
            l("button", {
              class: pe(["btn dropdown-toggle", g.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: T,
              disabled: k.disabled
            }, [
              Pe(k.$slots, "button", it(ot({ ...x })), () => [
                W(M(k.text), 1)
              ], !0)
            ], 10, Mk)
          ], !0),
          l("ul", {
            ref_key: "dropDownMenuRef",
            ref: s,
            class: pe(["dropdown-menu", _.value]),
            onClick: R
          }, [
            Pe(k.$slots, "default", it(ot({ ...x })), void 0, !0)
          ], 2)
        ])), [
          [w, O]
        ])
      ], 2);
    };
  }
}), Lk = /* @__PURE__ */ kn(Vk, [["__scopeId", "data-v-4910c394"]]), Fk = ["data-prevent-close"], Bk = /* @__PURE__ */ Ne({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = cn(t);
    return (s, o) => (N(), I("li", {
      "data-prevent-close": oe(n) ? "" : null
    }, [
      l("span", {
        class: pe(["dropdown-item", { active: s.active }]),
        role: "button",
        tabindex: "0"
      }, [
        Pe(s.$slots, "default")
      ], 2)
    ], 8, Fk));
  }
}), jk = {}, $k = { "data-prevent-close": "" }, Uk = { class: "dropdown-header" };
function Hk(e, t) {
  return N(), I("li", $k, [
    l("h6", Uk, [
      Pe(e.$slots, "default")
    ])
  ]);
}
const Wk = /* @__PURE__ */ kn(jk, [["render", Hk]]), Kk = {};
function zk(e, t) {
  return N(), I("li", null, t[0] || (t[0] = [
    l("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const qk = /* @__PURE__ */ kn(Kk, [["render", zk]]), Yk = {
  mounted(e, t, n, s) {
    new to(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Xk = (e, t) => {
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
}, Gk = {
  mounted(e, t, n, s) {
    const o = t.value;
    Xk(e, o);
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
const Qk = { class: "drawer-content" }, Jk = { class: "drawer-header" }, Zk = ["innerHTML"], eR = { class: "drawer-body" }, tR = ["innerHTML"], nR = { class: "drawer-footer" }, sR = ["innerHTML"], oR = ["innerHTML"], rR = /* @__PURE__ */ Ne({
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
    } = cn(n), c = $(() => Vo(i.value, "drawer-")), f = $(() => Vo(a.value, "btn-")), u = U(), d = U(!1), p = zn();
    let h;
    async function g() {
      return d.value === !0 ? void 0 : new Promise((O, x) => {
        d.value = !0, h = O;
      });
    }
    function v(O = !0) {
      d.value = !1, typeof h == "function" && h(O);
    }
    function _() {
      d.value === !0 ? g() : v(!1);
    }
    function y(O) {
      s?.value !== "static" && v(!1);
    }
    function b() {
      v(!1);
    }
    function m() {
      v(!1);
    }
    function T() {
      v(!0);
    }
    function R() {
      d.value === !0 ? vc.add(p) : vc.delete(p);
    }
    return t({
      show: g,
      hide: v,
      toggle: _
    }), (O, x) => (N(), et(aE, {
      onBeforeEnter: R,
      onAfterLeave: R
    }, {
      default: be(() => [
        d.value ? (N(), I("div", gs({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...O.$attrs }, {
          onClick: wm(y, ["self"])
        }), [
          l("div", {
            class: pe(["drawer-dialog", c.value])
          }, [
            l("div", Qk, [
              l("div", Jk, [
                Pe(O.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: O.title
                  }, null, 8, Zk)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: b
                })
              ]),
              l("div", eR, [
                Pe(O.$slots, "default", {}, () => [
                  l("span", { innerHTML: O.body }, null, 8, tR)
                ], !0)
              ]),
              l("div", nR, [
                Pe(O.$slots, "footer", {}, () => [
                  O.okOnly ? _e("", !0) : (N(), I("button", {
                    key: 0,
                    type: "button",
                    class: pe(["ms-auto btn btn-secondary", f.value]),
                    onClick: m
                  }, [
                    Pe(O.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: O.textCancel }, null, 8, sR)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: pe(["btn btn-primary", f.value]),
                    onClick: T
                  }, [
                    Pe(O.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: O.textOk }, null, 8, oR)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : _e("", !0)
      ]),
      _: 3
    }));
  }
}), iR = /* @__PURE__ */ kn(rR, [["__scopeId", "data-v-2e49e8cb"]]), Wt = "b", d_ = "$toaster", f_ = "$modalManager", aR = "$dialogManager";
class p_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ba(Gx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
nn(p_, "component");
class h_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ba(sk).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
nn(h_, "component");
class m_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ba(jx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
nn(m_, "component");
function g_() {
  return Ft(d_);
}
function lR() {
  return Ft(f_);
}
function cR(e) {
  e.component(`${Wt}-drawer`, iR), e.component(`${Wt}-modal`, l_), e.component(`${Wt}-dialog`, c_), e.component(`${Wt}-pagination`, gk), e.component(`${Wt}-pagination-dropdown`, yk), e.component(`${Wt}-pagination-select`, Ek), e.component(`${Wt}-dropdown`, Lk), e.component(`${Wt}-dropdown-item`, Bk), e.component(`${Wt}-dropdown-header`, Wk), e.component(`${Wt}-dropdown-divider`, qk), e.component(`${Wt}-table`, Ik), e.component(`${Wt}-toast`, i_);
}
function uR(e) {
  e.directive("tooltip", Yk), e.directive("click-outside", Gk);
}
const dR = {
  install(e) {
    cR(e), uR(e);
    const t = m_.getComponent(), n = p_.getComponent(), s = h_.getComponent();
    e.provide(d_, t), e.provide(f_, n), e.provide(aR, s);
  }
}, Yo = /* @__PURE__ */ qn("settings", () => {
  const e = Wo(), t = g_(), n = "1", s = Ws({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), o = U(null), r = U([]), i = U([]), a = Ws({
    fetch: !1,
    save: !1
  }), c = async () => {
    try {
      a.fetch = !0;
      const b = (await Ye.getProjectSettings()).data ?? {};
      Object.assign(s, b), o.value = s.fhir_system, r.value = [...s.selected_mapping_resources], i.value = [...s.selected_custom_mapping_resources];
    } catch (y) {
      e.addError(y, "settingsStore"), console.error("Failed to load project settings:", y);
    } finally {
      a.fetch = !1;
    }
  }, f = (y, b) => {
    const m = { name: y, resourceSpec: b, type: "predefined" };
    r.value.push(m);
  }, u = (y, b) => {
    const m = {
      name: y,
      resourceSpec: b,
      type: "custom"
    };
    i.value.push(m);
  }, d = (y, b) => {
    if (b === "predefined") {
      const m = r.value.findIndex((T) => T.name === y.name && T.resourceSpec === y.resourceSpec);
      m > -1 && r.value.splice(m, 1);
    } else {
      const m = i.value.findIndex((T) => T.name === y.name && T.resourceSpec === y.resourceSpec);
      m > -1 && i.value.splice(m, 1);
    }
  }, p = (y) => {
    o.value = y;
  }, h = async () => {
    try {
      a.save = !0;
      const y = {
        fhir_system: o.value,
        selected_mapping_resources: r.value,
        selected_custom_mapping_resources: i.value
      }, b = await Ye.updateProjectSettings(y);
      b.data.sync_results && _(b.data.sync_results), await c();
    } catch (y) {
      throw e.addError(y, "settingsStore"), console.error("Failed to save project settings:", y), y;
    } finally {
      a.save = !1;
    }
  }, g = () => {
    const y = [
      ...r.value,
      ...i.value
    ];
    return {
      version: n,
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      items: y
    };
  }, v = (y, b = {}) => {
    const m = b.mode ?? "merge";
    if (!y || typeof y != "object")
      throw new Error("Invalid JSON payload");
    const T = y;
    if (!T.version || T.version !== n)
      throw new Error("Unsupported or missing version");
    if (!Array.isArray(T.items))
      throw new Error("Invalid payload: items must be an array");
    const R = (k) => k && typeof k.name == "string" && typeof k.resourceSpec == "string" && (k.type === "predefined" || k.type === "custom"), O = [];
    for (const k of T.items)
      R(k) && O.push({ name: k.name, resourceSpec: k.resourceSpec, type: k.type });
    const x = { added: 0, updated: 0, skipped: 0, total: O.length };
    if (m === "replace") {
      const k = O.filter((w) => w.type === "predefined"), S = O.filter((w) => w.type === "custom");
      return r.value = [...k], i.value = [...S], x.added = O.length, x;
    }
    for (const k of O) {
      const S = k.type === "predefined" ? r.value : i.value, w = S.findIndex((A) => A.resourceSpec === k.resourceSpec);
      if (w > -1) {
        const A = S[w];
        A.name !== k.name ? (S[w] = { ...A, name: k.name }, x.updated += 1) : x.skipped += 1;
        continue;
      }
      S.some((A) => A.name === k.name && A.resourceSpec === k.resourceSpec) ? x.skipped += 1 : (S.push(k), x.added += 1);
    }
    return x;
  }, _ = (y) => {
    const {
      resources_added: b,
      resources_modified: m,
      resources_removed: T,
      tasks_created: R,
      total_mrns: O,
      error: x
    } = y;
    if (x) {
      t.toast({
        title: "Sync Warning",
        body: `Settings saved but sync failed: ${x}`,
        variant: "warning",
        delay: 8e3
      });
      return;
    }
    if (b + m + T === 0)
      return;
    const S = [];
    b > 0 && S.push(`${b} added`), m > 0 && S.push(`${m} modified`), T > 0 && S.push(`${T} removed`);
    const w = "Resources Synchronized", D = `${S.join(", ")}. Created ${R} tasks for ${O} patients.`;
    t.toast({
      title: w,
      body: D,
      variant: "success",
      delay: 6e3
    });
  };
  return {
    loading: a,
    settings: s,
    selectedFhirSystem: o,
    selectedMappingResources: r,
    selectedCustomMappingResources: i,
    fetchProjectSettings: c,
    addPredefinedResource: f,
    addCustomResource: u,
    removeResource: d,
    updateSelectedFhirSystem: p,
    saveProjectSettings: h,
    exportResources: g,
    importResources: v
  };
}), Re = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed",
  Outdated: "Outdated",
  Deleted: "Deleted"
}, Gn = /* @__PURE__ */ qn("monitor", () => {
  const e = Wo(), t = U(!1), n = U([]), s = U([]), o = U(null), r = U(!1), i = 500, a = U({
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
      const H = await Ye.listMrns(a.value.page, a.value.limit);
      H.data.data && H.data.pagination ? (n.value = H.data.data, a.value.total = H.data.pagination.total, a.value.totalPages = H.data.pagination.total_pages, a.value.hasNext = H.data.pagination.has_next, a.value.hasPrevious = H.data.pagination.has_previous, H.data.project_summary && (o.value = H.data.project_summary)) : n.value = H.data, s.value = [];
    } catch (H) {
      e.addError(H, "monitorStore"), console.error("Failed to load MRNs:", H), n.value = [];
    } finally {
      t.value = !1;
    }
  }, f = (H) => Array.from(new Set(
    (H || "").split(/[\s,]+/).map((se) => se.trim()).filter(Boolean)
  )), u = (H) => {
    const se = (H || "").length ? (H || "").split(/[\s,]+/) : [], ue = se.map((ne) => ne.trim()), we = ue.filter((ne) => !ne).length, De = f(H), Ue = De.length, L = Math.max(0, ue.filter(Boolean).length - Ue), Q = De.slice(0, 10);
    return {
      tokens: se.length,
      unique: Ue,
      duplicates: L,
      empties: we,
      overLimit: Ue > i,
      limit: i,
      parsed: De,
      sample: Q
    };
  }, d = async (H) => {
    try {
      r.value = !0;
      const se = await Ye.addMrns(H);
      return await c(), se.data;
    } catch (se) {
      throw e.addError(se, "monitorStore"), console.error("Failed to add MRNs:", se), se;
    } finally {
      r.value = !1;
    }
  }, p = async (H) => {
    const se = f(H);
    if (se.length === 0)
      throw new Error("No MRNs provided");
    return await d(se);
  }, h = async (H) => await d([H]), g = async (H) => {
  }, v = async () => {
    try {
      t.value = !0;
      for (const H of s.value)
        await g(H);
    } catch (H) {
      e.addError(H, "monitorStore"), console.error("Failed to fetch selected MRNs:", H);
    } finally {
      t.value = !1;
    }
  }, _ = $(() => n.value.length > 0 && s.value.length === n.value.length), y = $(() => s.value.length > 0 && s.value.length < n.value.length), b = () => {
    _.value ? s.value = [] : s.value = n.value.map((H) => H.id);
  }, m = (H) => {
    const se = s.value.indexOf(H);
    se === -1 ? s.value.push(H) : s.value.splice(se, 1);
  }, T = (H) => {
    a.value.page = H, c();
  }, R = (H) => {
    a.value.limit = H, a.value.page = 1, c();
  }, O = async (H) => {
    try {
      return (await Ye.getMrnResources(H)).data;
    } catch (se) {
      return e.addError(se, "monitorStore"), console.error(`Failed to get resource status for MRN ${H}:`, se), { mrn: H, resources: [], total_resources: 0 };
    }
  }, x = async () => {
    try {
      const H = await Ye.getProjectSummary();
      return o.value = H.data, H.data;
    } catch (H) {
      return e.addError(H, "monitorStore"), console.error("Failed to get project summary:", H), null;
    }
  }, k = async (H, se) => {
    try {
      r.value = !0;
      const ue = await Ye.triggerFetchMrns(H, se);
      return await c(), ue.data;
    } catch (ue) {
      throw e.addError(ue, "monitorStore"), console.error("Failed to trigger fetch:", ue), ue;
    } finally {
      r.value = !1;
    }
  }, S = async (H) => {
    const se = n.value.filter((ue) => s.value.includes(ue.id)).map((ue) => ue.mrn);
    if (se.length === 0)
      throw new Error("No MRNs selected");
    return await k(se, H);
  }, w = async () => {
    try {
      r.value = !0;
      const H = await Ye.performFullSync();
      return await c(), await x(), H.data;
    } catch (H) {
      throw e.addError(H, "monitorStore"), console.error("Failed to perform full sync:", H), H;
    } finally {
      r.value = !1;
    }
  }, D = async (H, se, ue) => {
    try {
      const we = await Ye.retryFailedResource(H, se, ue);
      return await c(), we.data;
    } catch (we) {
      throw e.addError(we, "monitorStore"), console.error("Failed to retry resource:", we), we;
    }
  }, A = async (H) => {
    try {
      r.value = !0;
      const se = await Ye.bulkRetryFailed(H);
      return await c(), se.data;
    } catch (se) {
      throw e.addError(se, "monitorStore"), console.error("Failed to bulk retry failed resources:", se), se;
    } finally {
      r.value = !1;
    }
  }, F = (H) => {
    if (H.status_summary)
      return H.status_summary.smart_status_display;
    const se = H.resources.filter((Q) => Q.status !== Re.Deleted), ue = se.length, we = se.filter((Q) => Q.status === Re.Completed).length;
    if (ue === 0) return "No Resources";
    if (we === ue) return "Completed";
    const De = we / ue * 100;
    if (De >= 75) return `Mostly Completed (${Math.round(De)}%)`;
    if (De >= 25) return `Mixed Progress (${Math.round(De)}%)`;
    if (De > 0) return `Starting (${Math.round(De)}%)`;
    const Ue = {};
    return se.forEach((Q) => {
      Ue[Q.status] = (Ue[Q.status] || 0) + 1;
    }), Object.keys(Ue).reduce((Q, ne) => Ue[Q] > Ue[ne] ? Q : ne, Re.Pending);
  }, ce = (H) => {
    if (H.status_summary)
      return H.status_summary.overall_status;
    const se = H.resources.filter((we) => we.status !== Re.Deleted);
    if (se.length === 0) return Re.Pending;
    const ue = {};
    return se.forEach((we) => {
      ue[we.status] = (ue[we.status] || 0) + 1;
    }), Object.keys(ue).reduce((we, De) => ue[we] > ue[De] ? we : De, Re.Pending);
  }, Y = (H) => {
    if (H.status_summary)
      return H.status_summary.archive_button_config;
    const se = H.resources.filter((De) => De.status !== Re.Deleted), ue = se.filter((De) => De.status === Re.Completed).length, we = se.length;
    return ue === 0 ? {
      variant: "secondary",
      disabled: !0,
      tooltip: "No completed resources to archive",
      text: "Archive"
    } : ue === we ? {
      variant: "success",
      disabled: !1,
      tooltip: `Archive all ${ue} completed resources`,
      text: "Archive All"
    } : {
      variant: "outline-success",
      disabled: !1,
      tooltip: `Archive ${ue} of ${we} completed resources`,
      text: "Archive Available"
    };
  }, re = (H) => H.status_summary ? H.status_summary.has_archivable_resources : H.resources.some((se) => se.status === Re.Completed), K = (H) => {
    if (H.status_summary)
      return H.status_summary.progress_bar_config;
    const se = H.resources.filter((L) => L.status !== Re.Deleted), ue = se.length;
    if (ue === 0)
      return { segments: [], completion_percentage: 0, total_resources: 0 };
    const we = {};
    se.forEach((L) => {
      we[L.status] = (we[L.status] || 0) + 1;
    });
    const De = Object.entries(we).map(([L, Q]) => ({
      status: L,
      count: Q,
      percentage: Math.round(Q / ue * 100 * 10) / 10,
      color: Ze(L)
    })), Ue = we[Re.Completed] || 0;
    return {
      segments: De,
      completion_percentage: Math.round(Ue / ue * 100 * 10) / 10,
      total_resources: ue
    };
  }, le = (H) => {
    if (H.status_summary)
      return H.status_summary.available_resource_types;
    const se = /* @__PURE__ */ new Set();
    return H.resources.filter((ue) => ue.status === Re.Completed).forEach((ue) => se.add(ue.name)), Array.from(se).sort();
  }, ye = (H, se) => {
    if (H.status_summary?.resource_type_statuses[se])
      return H.status_summary.resource_type_statuses[se];
    const ue = H.resources.filter(
      (L) => L.name === se && L.status !== Re.Deleted
    );
    if (ue.length === 0) return null;
    const we = ue.reduce((L, Q) => (L[Q.status] = (L[Q.status] || 0) + 1, L), {}), De = we[Re.Completed] || 0, Ue = ue.length;
    return {
      total_count: Ue,
      completed_count: De,
      failed_count: we[Re.Failed] || 0,
      pending_count: we[Re.Pending] || 0,
      fetching_count: we[Re.Fetching] || 0,
      outdated_count: we[Re.Outdated] || 0,
      has_completed: De > 0,
      completion_percentage: Ue > 0 ? De / Ue * 100 : 0,
      is_archivable: De > 0
    };
  }, Ze = (H) => {
    switch (H) {
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
    pagination: a,
    // Computed
    allSelected: _,
    indeterminate: y,
    // Basic methods
    fetchMrns: c,
    addMrn: h,
    addMrns: d,
    addMrnsFromString: p,
    parseMrnsFromInput: f,
    analyzeMrnInput: u,
    fetchMrn: g,
    fetchSelected: v,
    toggleSelectAll: b,
    toggleSelection: m,
    setPage: T,
    setLimit: R,
    // Enhanced resource management
    getResourceStatus: O,
    getProjectSummary: x,
    triggerFetchMrns: k,
    triggerFetchSelected: S,
    performFullSync: w,
    retryFailedResource: D,
    bulkRetryFailed: A,
    // Enhanced status methods
    getSmartStatusDisplay: F,
    getStatusForStyling: ce,
    getArchiveButtonConfig: Y,
    hasArchivableResources: re,
    getProgressBarConfig: K,
    getAvailableResourceTypesForArchive: le,
    getResourceTypeStatus: ye,
    getStatusColor: Ze
  };
}), fR = "data:image/png;base64,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", pR = { class: "home-page" }, hR = { class: "hero-section text-center mb-5" }, mR = { class: "d-flex flex-column gap-2 align-items-center" }, gR = ["src"], vR = { class: "features-section mb-5" }, _R = { class: "row g-4" }, yR = { class: "col-md-6 col-lg-4" }, bR = { class: "card h-100 border-0 shadow-sm" }, ER = { class: "card-body text-center d-flex flex-column" }, wR = { class: "col-md-6 col-lg-4" }, AR = { class: "card h-100 border-0 shadow-sm" }, SR = { class: "card-body text-center d-flex flex-column" }, CR = { class: "col-md-6 col-lg-4" }, OR = { class: "card h-100 border-0 shadow-sm" }, TR = { class: "card-body text-center d-flex flex-column" }, NR = { class: "getting-started-section mb-5" }, DR = { class: "row align-items-center" }, xR = { class: "col-lg-8 mx-auto" }, kR = { class: "workflow-steps" }, RR = { class: "step d-flex align-items-center mb-4" }, IR = { class: "step-content flex-grow-1" }, PR = { class: "step d-flex align-items-center mb-4" }, MR = { class: "step-content flex-grow-1" }, VR = { class: "step d-flex align-items-center mb-4" }, LR = { class: "step-content flex-grow-1" }, FR = { class: "step d-flex align-items-center" }, BR = { class: "step-content flex-grow-1" }, jR = {
  key: 0,
  class: "status-section"
}, $R = { class: "row g-4 mb-4" }, UR = { class: "col-md-3 col-sm-6" }, HR = { class: "stat-card card border-0 bg-primary text-white text-center h-100" }, WR = { class: "card-body" }, KR = { class: "mb-1" }, zR = { class: "col-md-3 col-sm-6" }, qR = { class: "stat-card card border-0 bg-secondary text-white text-center h-100" }, YR = { class: "card-body" }, XR = { class: "mb-1" }, GR = { class: "col-md-3 col-sm-6" }, QR = { class: "stat-card card border-0 bg-dark text-white text-center h-100" }, JR = { class: "card-body" }, ZR = { class: "mb-1" }, e2 = { class: "col-md-3 col-sm-6" }, t2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, n2 = { class: "card-body" }, s2 = { class: "mb-1" }, o2 = { class: "row g-4" }, r2 = { class: "col-md-3 col-sm-6" }, i2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, a2 = { class: "card-body" }, l2 = { class: "mb-1" }, c2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, u2 = { class: "col-md-3 col-sm-6" }, d2 = { class: "stat-card card border-0 bg-danger text-white text-center h-100" }, f2 = { class: "card-body" }, p2 = { class: "mb-1" }, h2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, m2 = { class: "col-md-3 col-sm-6" }, g2 = { class: "stat-card card border-0 bg-info text-white text-center h-100" }, v2 = { class: "card-body" }, _2 = { class: "mb-1" }, y2 = { class: "col-md-3 col-sm-6" }, b2 = { class: "stat-card card border-0 bg-warning text-white text-center h-100" }, E2 = { class: "card-body" }, w2 = { class: "mb-1" }, A2 = {
  key: 0,
  class: "mt-4 text-center"
}, S2 = {
  class: "btn-group gap-2",
  role: "group"
}, C2 = {
  key: 1,
  class: "alert alert-info text-center"
}, O2 = /* @__PURE__ */ Ne({
  __name: "HomePage",
  setup(e) {
    const t = Yo(), n = Gn(), {
      selectedFhirSystem: s,
      selectedMappingResources: o,
      selectedCustomMappingResources: r
    } = $o(t);
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
    const i = $(() => s.value && (o.value?.length > 0 || r.value?.length > 0)), a = $(() => i.value && n.projectSummary), c = $(() => n.projectSummary?.total_mrns || 0), f = $(() => {
      const b = o.value?.length || 0, m = r.value?.length || 0;
      return b + m;
    }), u = $(() => n.projectSummary?.overall_status_counts?.completed || 0), d = $(() => n.projectSummary?.overall_status_counts?.pending || 0), p = $(() => n.projectSummary?.overall_status_counts?.fetching || 0), h = $(() => n.projectSummary?.overall_status_counts?.failed || 0), g = $(() => n.projectSummary ? Object.values(n.projectSummary.overall_status_counts).reduce((b, m) => b + m, 0) : 0), v = $(() => {
      if (!n.projectSummary) return 0;
      const b = n.projectSummary.overall_status_counts?.deleted || 0;
      return g.value - b;
    }), _ = $(() => {
      if (!v.value) return 0;
      const b = h.value;
      return Math.round(b / v.value * 100);
    }), y = $(() => {
      if (!v.value) return 0;
      const b = u.value;
      return Math.round(b / v.value * 100);
    });
    return (b, m) => {
      const T = Qe("router-link");
      return N(), I("div", pR, [
        l("div", hR, [
          l("div", mR, [
            l("img", {
              src: oe(fR),
              title: "ALL FHIR",
              style: { height: "200px" }
            }, null, 8, gR),
            m[0] || (m[0] = l("p", { class: "text-muted mb-4" }, " Automatically fetch and stream download FHIR resources from configured healthcare systems ", -1))
          ]),
          m[1] || (m[1] = Gi('<div class="row justify-content-center" data-v-94a7bbc8><div class="col-md-8" data-v-94a7bbc8><div class="bg-light p-4 rounded" data-v-94a7bbc8><div class="row text-center" data-v-94a7bbc8><div class="col-md-4" data-v-94a7bbc8><div class="d-flex gap-2 align-items-start" data-v-94a7bbc8><i class="fas fa-robot fa-2x text-primary mb-2" data-v-94a7bbc8></i><h6 data-v-94a7bbc8>Background Automation</h6></div><small class="text-muted" data-v-94a7bbc8>Silent cron-based fetching</small></div><div class="col-md-4" data-v-94a7bbc8><div class="d-flex gap-2 align-items-start" data-v-94a7bbc8><i class="fas fa-stream fa-2x text-success mb-2" data-v-94a7bbc8></i><h6 data-v-94a7bbc8>Zero Storage</h6></div><small class="text-muted" data-v-94a7bbc8>Direct streaming, no archives</small></div><div class="col-md-4" data-v-94a7bbc8><div class="d-flex gap-2 align-items-start" data-v-94a7bbc8><i class="fas fa-sliders-h fa-2x text-info mb-2" data-v-94a7bbc8></i><h6 data-v-94a7bbc8>Selective Downloads</h6></div><small class="text-muted" data-v-94a7bbc8>Custom MRN &amp; resource combinations</small></div></div></div></div></div>', 1))
        ]),
        l("div", vR, [
          m[14] || (m[14] = l("h2", { class: "text-center mb-4" }, "Key Features", -1)),
          l("div", _R, [
            l("div", yR, [
              l("div", bR, [
                l("div", ER, [
                  m[3] || (m[3] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-cogs fa-3x text-primary" })
                  ], -1)),
                  m[4] || (m[4] = l("h5", { class: "card-title" }, "Setup & Configuration", -1)),
                  m[5] || (m[5] = l("p", { class: "card-text text-muted" }, " Select your FHIR system and configure resource types to fetch using predefined categories or custom FHIR queries. ", -1)),
                  fe(T, {
                    to: "/setup",
                    class: "btn btn-outline-primary btn-sm mt-auto"
                  }, {
                    default: be(() => m[2] || (m[2] = [
                      l("i", { class: "fas fa-cogs me-1" }, null, -1),
                      W(" Configure ")
                    ])),
                    _: 1,
                    __: [2]
                  })
                ])
              ])
            ]),
            l("div", wR, [
              l("div", AR, [
                l("div", SR, [
                  m[7] || (m[7] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-database fa-3x text-success" })
                  ], -1)),
                  m[8] || (m[8] = l("h5", { class: "card-title" }, "Resources & Downloads", -1)),
                  m[9] || (m[9] = l("p", { class: "card-text text-muted" }, " Manage patient MRNs, monitor FHIR resource status, and stream download customized ZIP archives with selective MRN and resource type combinations. ", -1)),
                  fe(T, {
                    to: "/resources",
                    class: "btn btn-outline-success btn-sm mt-auto"
                  }, {
                    default: be(() => m[6] || (m[6] = [
                      l("i", { class: "fas fa-database me-1" }, null, -1),
                      W(" View Resources ")
                    ])),
                    _: 1,
                    __: [6]
                  })
                ])
              ])
            ]),
            l("div", CR, [
              l("div", OR, [
                l("div", TR, [
                  m[11] || (m[11] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-tasks fa-3x text-info" })
                  ], -1)),
                  m[12] || (m[12] = l("h5", { class: "card-title" }, "Task Management", -1)),
                  m[13] || (m[13] = l("p", { class: "card-text text-muted" }, " Queue manual operations like full sync and retry failed resources. Automatic fetching runs invisibly in background. ", -1)),
                  fe(T, {
                    to: "/tasks",
                    class: "btn btn-outline-info btn-sm mt-auto"
                  }, {
                    default: be(() => m[10] || (m[10] = [
                      l("i", { class: "fas fa-tasks me-1" }, null, -1),
                      W(" Manage Tasks ")
                    ])),
                    _: 1,
                    __: [10]
                  })
                ])
              ])
            ])
          ])
        ]),
        l("div", NR, [
          m[31] || (m[31] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Getting Started"),
            l("p", { class: "text-muted" }, "Follow these steps to start fetching and streaming FHIR resources")
          ], -1)),
          l("div", DR, [
            l("div", xR, [
              l("div", kR, [
                l("div", RR, [
                  m[18] || (m[18] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "1")
                    ])
                  ], -1)),
                  l("div", IR, [
                    m[16] || (m[16] = l("h5", null, "Configure Your Setup", -1)),
                    m[17] || (m[17] = l("p", { class: "text-muted mb-2" }, "Select FHIR system and resource types to fetch", -1)),
                    fe(T, {
                      to: "/setup",
                      class: "btn btn-primary btn-sm"
                    }, {
                      default: be(() => m[15] || (m[15] = [
                        l("i", { class: "fas fa-cogs me-1" }, null, -1),
                        W(" Go to Setup ")
                      ])),
                      _: 1,
                      __: [15]
                    })
                  ])
                ]),
                l("div", PR, [
                  m[22] || (m[22] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-success text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "2")
                    ])
                  ], -1)),
                  l("div", MR, [
                    m[20] || (m[20] = l("h5", null, "Add Patient MRNs", -1)),
                    m[21] || (m[21] = l("p", { class: "text-muted mb-2" }, "Add patient identifiers to fetch FHIR resources", -1)),
                    fe(T, {
                      to: "/resources",
                      class: "btn btn-success btn-sm"
                    }, {
                      default: be(() => m[19] || (m[19] = [
                        l("i", { class: "fas fa-database me-1" }, null, -1),
                        W(" Manage MRNs ")
                      ])),
                      _: 1,
                      __: [19]
                    })
                  ])
                ]),
                l("div", VR, [
                  m[26] || (m[26] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-info text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "3")
                    ])
                  ], -1)),
                  l("div", LR, [
                    m[24] || (m[24] = l("h5", null, "Automatic Processing", -1)),
                    m[25] || (m[25] = l("p", { class: "text-muted mb-2" }, "Resources fetch automatically in background; optionally queue manual operations", -1)),
                    fe(T, {
                      to: "/tasks",
                      class: "btn btn-info btn-sm"
                    }, {
                      default: be(() => m[23] || (m[23] = [
                        l("i", { class: "fas fa-tasks me-1" }, null, -1),
                        W(" Queue Operations ")
                      ])),
                      _: 1,
                      __: [23]
                    })
                  ])
                ]),
                l("div", FR, [
                  m[30] || (m[30] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "4")
                    ])
                  ], -1)),
                  l("div", BR, [
                    m[28] || (m[28] = l("h5", null, "Stream Download", -1)),
                    m[29] || (m[29] = l("p", { class: "text-muted mb-2" }, "Generate and download ZIP files on-demand with filtering", -1)),
                    fe(T, {
                      to: "/resources",
                      class: "btn btn-warning btn-sm"
                    }, {
                      default: be(() => m[27] || (m[27] = [
                        l("i", { class: "fas fa-download me-1" }, null, -1),
                        W(" Stream Download ")
                      ])),
                      _: 1,
                      __: [27]
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        a.value ? (N(), I("div", jR, [
          m[52] || (m[52] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Project Status"),
            l("p", { class: "text-muted" }, "Current overview of your FHIR snapshot project")
          ], -1)),
          l("div", $R, [
            l("div", UR, [
              l("div", HR, [
                l("div", WR, [
                  m[32] || (m[32] = l("i", { class: "fas fa-user-injured fa-2x mb-2" }, null, -1)),
                  l("h3", KR, M(c.value), 1),
                  m[33] || (m[33] = l("p", { class: "mb-0 small" }, "Total MRNs", -1))
                ])
              ])
            ]),
            l("div", zR, [
              l("div", qR, [
                l("div", YR, [
                  m[34] || (m[34] = l("i", { class: "fas fa-database fa-2x mb-2" }, null, -1)),
                  l("h3", XR, M(g.value), 1),
                  m[35] || (m[35] = l("p", { class: "mb-0 small" }, "Total Resources", -1)),
                  m[36] || (m[36] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "includes deleted", -1))
                ])
              ])
            ]),
            l("div", GR, [
              l("div", QR, [
                l("div", JR, [
                  m[37] || (m[37] = l("i", { class: "fas fa-play-circle fa-2x mb-2" }, null, -1)),
                  l("h3", ZR, M(v.value), 1),
                  m[38] || (m[38] = l("p", { class: "mb-0 small" }, "Active Resources", -1)),
                  m[39] || (m[39] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "excludes deleted", -1))
                ])
              ])
            ]),
            l("div", e2, [
              l("div", t2, [
                l("div", n2, [
                  m[40] || (m[40] = l("i", { class: "fas fa-file-medical fa-2x mb-2" }, null, -1)),
                  l("h3", s2, M(f.value), 1),
                  m[41] || (m[41] = l("p", { class: "mb-0 small" }, "Resource Types", -1))
                ])
              ])
            ])
          ]),
          l("div", o2, [
            l("div", r2, [
              l("div", i2, [
                l("div", a2, [
                  m[42] || (m[42] = l("i", { class: "fas fa-check-circle fa-2x mb-2" }, null, -1)),
                  l("h3", l2, M(u.value), 1),
                  m[43] || (m[43] = l("p", { class: "mb-0 small" }, "Completed", -1)),
                  y.value > 0 ? (N(), I("p", c2, M(y.value) + "% complete", 1)) : _e("", !0)
                ])
              ])
            ]),
            l("div", u2, [
              l("div", d2, [
                l("div", f2, [
                  m[44] || (m[44] = l("i", { class: "fas fa-exclamation-circle fa-2x mb-2" }, null, -1)),
                  l("h3", p2, M(h.value), 1),
                  m[45] || (m[45] = l("p", { class: "mb-0 small" }, "Failed", -1)),
                  _.value > 0 ? (N(), I("p", h2, M(_.value) + "% error rate", 1)) : _e("", !0)
                ])
              ])
            ]),
            l("div", m2, [
              l("div", g2, [
                l("div", v2, [
                  m[46] || (m[46] = l("i", { class: "fas fa-sync fa-2x mb-2" }, null, -1)),
                  l("h3", _2, M(p.value), 1),
                  m[47] || (m[47] = l("p", { class: "mb-0 small" }, "Fetching", -1))
                ])
              ])
            ]),
            l("div", y2, [
              l("div", b2, [
                l("div", E2, [
                  m[48] || (m[48] = l("i", { class: "fas fa-clock fa-2x mb-2" }, null, -1)),
                  l("h3", w2, M(d.value), 1),
                  m[49] || (m[49] = l("p", { class: "mb-0 small" }, "Pending", -1))
                ])
              ])
            ])
          ]),
          i.value ? (N(), I("div", A2, [
            l("div", S2, [
              fe(T, {
                to: "/resources",
                class: "btn btn-primary"
              }, {
                default: be(() => m[50] || (m[50] = [
                  l("i", { class: "fas fa-database me-1" }, null, -1),
                  W(" Manage Resources ")
                ])),
                _: 1,
                __: [50]
              }),
              fe(T, {
                to: "/tasks",
                class: "btn btn-outline-secondary"
              }, {
                default: be(() => m[51] || (m[51] = [
                  l("i", { class: "fas fa-tasks me-1" }, null, -1),
                  W(" View Tasks ")
                ])),
                _: 1,
                __: [51]
              })
            ])
          ])) : _e("", !0)
        ])) : (N(), I("div", C2, [
          m[54] || (m[54] = l("i", { class: "fas fa-info-circle fa-2x mb-3" }, null, -1)),
          m[55] || (m[55] = l("h4", null, "Get Started", -1)),
          m[56] || (m[56] = l("p", { class: "mb-3" }, "Configure your FHIR system and resource types to begin fetching data.", -1)),
          fe(T, {
            to: "/setup",
            class: "btn btn-primary"
          }, {
            default: be(() => m[53] || (m[53] = [
              l("i", { class: "fas fa-cogs me-1" }, null, -1),
              W(" Configure Now ")
            ])),
            _: 1,
            __: [53]
          })
        ]))
      ]);
    };
  }
}), T2 = /* @__PURE__ */ Yn(O2, [["__scopeId", "data-v-94a7bbc8"]]), N2 = ["value"], D2 = ["value"], x2 = /* @__PURE__ */ Ne({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = Yo(), { settings: n, selectedFhirSystem: s } = $o(t), o = (r) => {
      const i = r.target, a = parseInt(i.value);
      t.updateSelectedFhirSystem(a);
    };
    return (r, i) => (N(), I("div", null, [
      i[1] || (i[1] = l("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      l("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: oe(s) || "",
        onChange: o
      }, [
        i[0] || (i[0] = l("option", { value: "" }, "Select a FHIR System", -1)),
        (N(!0), I(Se, null, Je(oe(n).fhir_systems, (a) => (N(), I("option", {
          key: a.ehr_id,
          value: a.ehr_id
        }, M(a.ehr_name), 9, D2))), 128))
      ], 40, N2)
    ]));
  }
}), k2 = { class: "d-flex" }, R2 = { class: "d-flex gap-2" }, I2 = "Import resources from JSON. Choose Merge to add/update or Replace to overwrite your current list.", P2 = "Export current resources to a JSON file.", M2 = "Manage the list of mapping resources. Import/Export uses JSON; Import supports Merge or Replace.", V2 = /* @__PURE__ */ Ne({
  __name: "ResourcesToolbar",
  emits: ["import", "export", "add"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => (N(), I("div", k2, [
      l("div", { class: "me-auto d-flex align-items-center gap-2" }, [
        o[3] || (o[3] = l("span", null, "Resources", -1)),
        l("i", {
          class: "fas fa-info-circle text-muted",
          title: M2,
          "aria-label": "Resources help",
          role: "img"
        })
      ]),
      l("div", R2, [
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: o[0] || (o[0] = (r) => n("import")),
          title: I2
        }, o[4] || (o[4] = [
          l("i", { class: "fas fa-upload fa-fw" }, null, -1),
          l("span", null, "Import", -1)
        ])),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: o[1] || (o[1] = (r) => n("export")),
          title: P2
        }, o[5] || (o[5] = [
          l("i", { class: "fas fa-download fa-fw" }, null, -1),
          l("span", null, "Export", -1)
        ])),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: o[2] || (o[2] = (r) => n("add"))
        }, o[6] || (o[6] = [
          l("i", { class: "fas fa-plus fa-fw" }, null, -1),
          l("span", null, "Add", -1)
        ]))
      ])
    ]));
  }
}), L2 = { class: "table table-striped table-hover table-sm border-top" }, F2 = ["onClick"], B2 = { key: 0 }, j2 = /* @__PURE__ */ Ne({
  __name: "ResourcesTable",
  setup(e) {
    const t = Yo(), { selectedMappingResources: n, selectedCustomMappingResources: s } = $o(t), o = $(() => [
      ...n.value,
      ...s.value
    ]);
    function r(i) {
      t.removeResource(i, i.type);
    }
    return (i, a) => (N(), I("table", L2, [
      a[2] || (a[2] = l("thead", null, [
        l("tr", null, [
          l("th", null, "Name"),
          l("th", null, "Type"),
          l("th", null, "Resource Specification"),
          l("th", null, "Actions")
        ])
      ], -1)),
      l("tbody", null, [
        (N(!0), I(Se, null, Je(o.value, (c) => (N(), I("tr", {
          key: `${c.type}-${c.name}`
        }, [
          l("td", null, M(c.name), 1),
          l("td", null, M(c.type), 1),
          l("td", null, M(c.resourceSpec || "-"), 1),
          l("td", null, [
            l("button", {
              type: "button",
              class: "btn btn-outline-danger btn-sm",
              onClick: (f) => r(c)
            }, a[0] || (a[0] = [
              l("i", { class: "fas fa-trash fa-fw" }, null, -1)
            ]), 8, F2)
          ])
        ]))), 128)),
        o.value.length === 0 ? (N(), I("tr", B2, a[1] || (a[1] = [
          l("td", {
            colspan: "4",
            class: "text-muted text-center"
          }, "No resources configured", -1)
        ]))) : _e("", !0)
      ])
    ]));
  }
}), Is = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), $2 = { class: "mb-3" }, U2 = ["value"], H2 = ["disabled"], W2 = ["value"], K2 = ["value"], z2 = ["disabled"], q2 = /* @__PURE__ */ Ne({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Yo(), { settings: n } = $o(t), s = $(() => n.value.mapping_resources), o = Mb(e, "modelValue");
    return (r, i) => (N(), I("div", null, [
      l("form", null, [
        l("div", $2, [
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
            value: oe(Is).PREDEFINED,
            "onUpdate:modelValue": i[1] || (i[1] = (a) => o.value.resourceType = a)
          }, null, 8, U2), [
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
            disabled: o.value.resourceType !== oe(Is).PREDEFINED
          }, [
            i[6] || (i[6] = l("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (N(!0), I(Se, null, Je(s.value, (a) => (N(), I("option", {
              key: a.resourceSpec,
              value: a.resourceSpec
            }, M(a.name), 9, W2))), 128))
          ], 8, H2), [
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
            value: oe(Is).CUSTOM,
            "onUpdate:modelValue": i[3] || (i[3] = (a) => o.value.resourceType = a)
          }, null, 8, K2), [
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
            disabled: o.value.resourceType !== oe(Is).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, z2), [
            [wo, o.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
}), Y2 = { class: "d-flex gap-2 justify-content-end" }, X2 = ["onClick"], G2 = ["onClick", "disabled"], Q2 = /* @__PURE__ */ Ne({
  __name: "ResourceFormModal",
  setup(e, { expose: t }) {
    const n = U(null), s = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: Is.PREDEFINED
    }), o = U(s()), r = $(() => o.value.displayName.trim() ? o.value.resourceType === Is.PREDEFINED ? !!o.value.predefinedResource : !!o.value.customResourceSpec.trim() : !1), i = async () => (o.value = s(), await n.value?.show() ? o.value : null), a = (c) => {
      r.value && c(!0);
    };
    return t({ show: i }), (c, f) => {
      const u = Qe("b-modal");
      return N(), et(u, {
        ref_key: "resourceFormModal",
        ref: n
      }, {
        title: be(() => f[1] || (f[1] = [
          W("Resource")
        ])),
        footer: be(({ hide: d }) => [
          l("div", Y2, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (p) => d(!1)
            }, f[2] || (f[2] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              W("Cancel ")
            ]), 8, X2),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (p) => a(d),
              disabled: !r.value
            }, f[3] || (f[3] = [
              l("i", { class: "fas fa-plus fa-fw me-1" }, null, -1),
              W("Add ")
            ]), 8, G2)
          ])
        ]),
        default: be(() => [
          fe(q2, {
            modelValue: o.value,
            "onUpdate:modelValue": f[0] || (f[0] = (d) => o.value = d)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 512);
    };
  }
}), J2 = { class: "mb-3" }, Z2 = { class: "form-check" }, eI = { class: "form-check" }, tI = { class: "d-flex gap-2 justify-content-end" }, nI = ["onClick"], sI = ["onClick"], oI = /* @__PURE__ */ Ne({
  __name: "ImportResourcesModal",
  setup(e, { expose: t }) {
    const n = U(null), s = U("merge"), o = async () => (s.value = "merge", await n.value?.show() ? s.value : null), r = (i) => {
      i(!0);
    };
    return t({ show: o }), (i, a) => {
      const c = Qe("b-modal");
      return N(), et(c, {
        ref_key: "importModal",
        ref: n
      }, {
        title: be(() => a[2] || (a[2] = [
          W("Import Resources")
        ])),
        footer: be(({ hide: f }) => [
          l("div", tI, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (u) => f(!1)
            }, a[5] || (a[5] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              W("Cancel ")
            ]), 8, nI),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (u) => r(f)
            }, a[6] || (a[6] = [
              l("i", { class: "fas fa-file-import fa-fw me-1" }, null, -1),
              W("Continue ")
            ]), 8, sI)
          ])
        ]),
        default: be(() => [
          l("div", J2, [
            l("div", Z2, [
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
            l("div", eI, [
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
}), vi = {
  BOTTOM_RIGHT: "bottom right"
}, Qn = /* @__PURE__ */ qn("notifications", () => {
  const e = lR(), t = g_();
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
}), rI = { class: "d-flex flex-column gap-4" }, iI = { class: "card" }, aI = { class: "card-body px-0 py-2" }, lI = { class: "p-2" }, cI = { class: "d-flex gap-2 justify-content-end" }, uI = ["disabled"], dI = /* @__PURE__ */ Ne({
  __name: "SetupPage",
  setup(e) {
    const t = Yo(), n = Qn(), { loading: s } = $o(t), o = $(() => s.value.fetch || s.value.save), r = U(null), i = U(null), a = U(null), c = U("merge");
    async function f() {
      if (!r.value) return;
      const g = await r.value.show();
      g && (g.resourceType === Is.PREDEFINED ? t.addPredefinedResource(g.displayName, g.predefinedResource) : t.addCustomResource(g.displayName, g.customResourceSpec), n.showSuccess("Resource added successfully"));
    }
    async function u() {
      try {
        await t.saveProjectSettings(), n.showSuccess("Settings saved successfully");
      } catch (g) {
        console.error("Failed to save settings:", g), n.showError("Failed to save settings");
      }
    }
    async function d() {
      if (!i.value) return;
      const g = await i.value.show();
      g && (g === "replace" && !await n.confirmAction(
        "Replace Resources",
        "This will replace your current resources with the ones from the file. This action will discard your current list. Continue?"
      ) || (c.value = g, a.value?.click()));
    }
    async function p(g) {
      try {
        const v = g.target, _ = v.files && v.files[0];
        if (!_) return;
        const y = await _.text(), b = JSON.parse(y), m = t.importResources(b, { mode: c.value });
        n.showSuccess(`Imported ${m.added} new, updated ${m.updated}, skipped ${m.skipped}.`);
      } catch (v) {
        console.error("Import failed:", v), n.showError("Failed to import resources. Please check the JSON file.");
      } finally {
        a.value && (a.value.value = ""), c.value = "merge";
      }
    }
    function h() {
      try {
        const g = t.exportResources(), v = new Blob([JSON.stringify(g, null, 2)], { type: "application/json" }), _ = window.URL.createObjectURL(v), y = document.createElement("a"), b = /* @__PURE__ */ new Date(), m = `${b.getFullYear()}${String(b.getMonth() + 1).padStart(2, "0")}${String(b.getDate()).padStart(2, "0")}-${String(b.getHours()).padStart(2, "0")}${String(b.getMinutes()).padStart(2, "0")}`;
        y.href = _, y.download = `resources-${m}.json`, document.body.appendChild(y), y.click(), y.remove(), window.URL.revokeObjectURL(_), n.showSuccess("Exported resources successfully");
      } catch (g) {
        console.error("Export failed:", g), n.showError("Failed to export resources");
      }
    }
    return (g, v) => (N(), I("div", rI, [
      fe(x2),
      l("div", iI, [
        l("div", aI, [
          l("div", lI, [
            fe(V2, {
              onAdd: f,
              onImport: d,
              onExport: h
            })
          ]),
          fe(j2)
        ])
      ]),
      l("input", {
        ref_key: "importInput",
        ref: a,
        type: "file",
        accept: "application/json",
        class: "d-none",
        onChange: p
      }, null, 544),
      l("div", cI, [
        v[1] || (v[1] = l("button", {
          type: "button",
          class: "btn btn-secondary btn-sm"
        }, [
          l("i", { class: "fas fa-xmark fa-fw" }),
          l("span", null, "Cancel")
        ], -1)),
        l("button", {
          type: "button",
          class: "btn btn-primary btn-sm",
          onClick: u,
          disabled: o.value
        }, v[0] || (v[0] = [
          l("i", { class: "fas fa-save fa-fw" }, null, -1),
          l("span", null, "Save", -1)
        ]), 8, uI)
      ]),
      fe(oI, {
        ref_key: "importModal",
        ref: i
      }, null, 512),
      fe(Q2, {
        ref_key: "resourceFormModal",
        ref: r
      }, null, 512)
    ]));
  }
}), v_ = /* @__PURE__ */ qn("operations", () => {
  const e = U(!1), t = U(null), n = U(!0), s = U({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), o = U({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), r = (T) => {
    e.value = T;
  }, i = (T, R, O, x) => {
    t.value = {
      operation: T,
      success: R,
      message: O,
      data: x,
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
  }, p = () => {
    o.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, h = () => {
    o.value.visible = !1;
  }, g = $(() => s.value.visible), v = $(() => s.value.archiveType), _ = $(() => s.value.selectedMrns), y = $(() => o.value.visible), b = $(() => o.value.archiveType), m = $(() => o.value.selectedMrns);
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
    archiveModalVisible: g,
    archiveModalType: v,
    archiveModalSelectedMrns: _,
    showArchiveModalSelected: c,
    showArchiveModalAll: f,
    hideArchiveModal: u,
    // Streaming Modal
    streamingModalVisible: y,
    streamingModalType: b,
    streamingModalSelectedMrns: m,
    showStreamingModalSelected: d,
    showStreamingModalAll: p,
    hideStreamingModal: h
  };
}), fI = { class: "mb-3" }, pI = { class: "d-flex flex-wrap gap-2 align-items-center" }, hI = {
  class: "btn-group",
  role: "group"
}, mI = ["disabled"], gI = { key: 0 }, vI = { key: 1 }, _I = ["disabled"], yI = /* @__PURE__ */ Ne({
  __name: "MonitorToolbar",
  emits: ["addMrn"],
  setup(e) {
    const t = Gn(), n = v_(), s = Qn(), o = $(() => t.selectedMrns.length === 0), r = $(() => t.operationLoading), i = $(() => t.loading), a = async () => {
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
      const h = Qe("b-dropdown-item"), g = Qe("b-dropdown");
      return N(), I("div", fI, [
        l("div", pI, [
          l("div", hI, [
            l("button", {
              class: "btn btn-primary",
              onClick: p[0] || (p[0] = (v) => d.$emit("addMrn"))
            }, p[1] || (p[1] = [
              l("i", { class: "fas fa-plus-circle fa-fw" }, null, -1),
              W(" Add MRN ")
            ])),
            l("button", {
              class: "btn btn-outline-primary",
              onClick: a,
              disabled: o.value || r.value,
              title: "Trigger fetch for selected MRNs"
            }, [
              r.value ? (N(), I("span", vI, p[3] || (p[3] = [
                l("span", null, [
                  l("i", { class: "fas fa-spinner fa-spin fa-fw" }),
                  W(" Fetch Selected")
                ], -1)
              ]))) : (N(), I("span", gI, p[2] || (p[2] = [
                l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1),
                W(" Fetch Selected")
              ])))
            ], 8, mI)
          ]),
          fe(g, {
            variant: "success",
            title: "Stream download archives"
          }, {
            button: be(() => p[4] || (p[4] = [
              l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
              W("Download ")
            ])),
            default: be(() => [
              fe(h, {
                onClick: f,
                class: pe({ disabled: o.value }),
                "prevent-close": !1
              }, {
                default: be(() => p[5] || (p[5] = [
                  l("i", { class: "fas fa-download me-2" }, null, -1),
                  W("Download Selected Records ")
                ])),
                _: 1,
                __: [5]
              }, 8, ["class"]),
              fe(h, {
                onClick: u,
                "prevent-close": !1
              }, {
                default: be(() => p[6] || (p[6] = [
                  l("i", { class: "fas fa-download me-2" }, null, -1),
                  W("Download All Records ")
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
              class: pe(["fas fa-rotate-right fa-fw", { "fa-spin": i.value }])
            }, null, 2)
          ], 8, _I)
        ])
      ]);
    };
  }
}), yu = /* @__PURE__ */ qn("streaming", () => {
  const e = U({
    active: !1,
    filename: "",
    startTime: null
  }), t = $(() => e.value.active), n = $(() => e.value.startTime ? Math.round((Date.now() - e.value.startTime.getTime()) / 1e3) : 0);
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
}), __ = /* @__PURE__ */ qn("resourceContent", () => {
  const e = Wo(), t = U(!1), n = U(null), s = U(null), o = async (g, v, _, y) => {
    try {
      t.value = !0;
      const b = await Ye.getResourceContent(g, v, _, y);
      if (b.data.success)
        return n.value = b.data, b.data;
      throw new Error(b.data.error || "Failed to fetch resource content");
    } catch (b) {
      throw e.addError(b, "resourceContentStore"), console.error("Failed to fetch resource content:", b), b;
    } finally {
      t.value = !1;
    }
  }, r = async (g, v, _, y) => await o(g, v, _, y);
  return {
    // State
    loading: t,
    currentContent: n,
    // Actions
    fetchResourceContent: o,
    loadResourceContent: r,
    showResourceContent: async (g, v, _, y) => (await r(g, v, _, y), s.value?.show()),
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
          const v = document.createElement("textarea");
          v.value = g, v.style.position = "fixed", v.style.left = "-999999px", v.style.top = "-999999px", document.body.appendChild(v), v.focus(), v.select();
          const _ = document.execCommand("copy");
          return document.body.removeChild(v), _;
        }
      } catch (v) {
        return console.error("Failed to copy to clipboard:", v), !1;
      }
    },
    // Getters
    getContentStats: () => {
      if (!n.value) return null;
      const { content: g, metadata: v } = n.value, _ = g.split(`
`).length, y = g.length;
      return {
        lines: _,
        characters: y,
        size_human: v.preview_size_human,
        is_truncated: v.is_truncated,
        full_size_human: v.full_size_human
      };
    },
    isJsonContent: () => n.value?.metadata.is_valid_json || !1,
    getDisplayTitle: () => {
      if (!n.value) return "Resource Content";
      const { mrn: g, resource_name: v, repeat_instance: _ } = n.value;
      return `${v} - ${g} (Instance ${_})`;
    }
  };
}), bI = { class: "align-middle" }, EI = { class: "d-flex flex-column" }, wI = { class: "text-muted" }, AI = {
  key: 0,
  class: "d-block text-muted"
}, SI = {
  key: 0,
  class: "text-success"
}, CI = {
  key: 1,
  class: "text-muted"
}, OI = {
  key: 0,
  class: "text-danger"
}, TI = ["title"], NI = ["title"], DI = {
  key: 1,
  class: "text-muted"
}, xI = {
  class: "btn-group",
  role: "group"
}, kI = ["disabled"], RI = ["disabled"], II = ["disabled"], PI = {
  key: 0,
  class: "table-warning"
}, MI = { colspan: "5" }, VI = { class: "p-2" }, LI = { class: "mb-0 mt-1" }, FI = /* @__PURE__ */ Ne({
  __name: "MonitorResourceRow",
  props: {
    resource: {},
    mrn: {},
    recordId: {}
  },
  setup(e) {
    const t = e, n = Gn(), s = yu(), o = Qn(), r = __(), i = U(!1), a = U(!1), c = U(!1), f = (v) => {
      const _ = "badge";
      switch (v) {
        case Re.Pending:
          return `${_} bg-warning text-dark`;
        case Re.Fetching:
          return `${_} bg-info text-dark`;
        case Re.Completed:
          return `${_} bg-success`;
        case Re.Failed:
          return `${_} bg-danger`;
        case Re.Outdated:
          return `${_} bg-secondary`;
        case Re.Deleted:
          return `${_} bg-dark`;
        default:
          return `${_} bg-secondary`;
      }
    }, u = (v) => {
      if (!v) return "-";
      try {
        const _ = new Date(v);
        return _.toLocaleDateString() + " " + _.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch {
        return v;
      }
    }, d = (v) => v ? v.length > 50 ? v.substring(0, 50) + "..." : v : "-", p = async () => {
      try {
        a.value = !0, await n.retryFailedResource(
          t.mrn,
          t.resource.name,
          t.resource.repeat_instance
        );
      } catch (v) {
        console.error("Failed to retry resource:", v);
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
      } catch (v) {
        console.error("Failed to load resource content:", v), o.showError("Failed to load resource content");
      } finally {
        c.value = !1;
      }
    }, g = async () => {
      try {
        a.value = !0;
        const v = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), _ = `${t.mrn}_${t.resource.name}_${v}`;
        s.startStreaming(_), o.showInfo(`Started streaming download: ${_}`);
        const y = {
          mrns: [t.mrn],
          resource_types: [t.resource.name],
          archive_name: _
        }, b = await Ye.streamSelectedArchive([t.mrn], y), m = new Blob([b.data]), T = window.URL.createObjectURL(m), R = document.createElement("a");
        R.href = T, R.download = `${_}.zip`, document.body.appendChild(R), R.click(), document.body.removeChild(R), window.URL.revokeObjectURL(T);
        const O = s.finishStreaming();
        o.showSuccess(`Download completed: ${_} (${O}s)`);
      } catch (v) {
        s.finishStreaming(), o.showError(`Streaming download failed: ${v.message}`), console.error("Failed to stream download resource:", v);
      } finally {
        a.value = !1;
      }
    };
    return (v, _) => (N(), I(Se, null, [
      l("tr", bI, [
        l("td", null, [
          l("div", EI, [
            l("strong", null, M(v.resource.name), 1),
            l("small", wI, M(v.resource.mapping_type) + " | " + M(v.resource.resource_spec), 1)
          ])
        ]),
        l("td", null, [
          l("span", {
            class: pe(f(v.resource.status))
          }, M(v.resource.status), 3),
          v.resource.repeat_instance ? (N(), I("small", AI, " Instance #" + M(v.resource.repeat_instance), 1)) : _e("", !0)
        ]),
        l("td", null, [
          v.resource.fetch_date ? (N(), I("div", SI, [
            _[1] || (_[1] = l("i", { class: "fas fa-check-circle fa-fw" }, null, -1)),
            W(" " + M(u(v.resource.fetch_date)), 1)
          ])) : (N(), I("div", CI, "-"))
        ]),
        l("td", null, [
          v.resource.error_message ? (N(), I("div", OI, [
            _[2] || (_[2] = l("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            l("span", {
              title: v.resource.error_message
            }, M(d(v.resource.error_message)), 9, TI),
            v.resource.error_message.length > 50 ? (N(), I("button", {
              key: 0,
              class: "btn btn-link btn-sm p-0 ms-1",
              onClick: _[0] || (_[0] = (y) => i.value = !i.value),
              title: i.value ? "Show less" : "Show more"
            }, [
              l("i", {
                class: pe(`fas fa-chevron-${i.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, NI)) : _e("", !0)
          ])) : (N(), I("div", DI, "-"))
        ]),
        l("td", null, [
          l("div", xI, [
            v.resource.status === "Failed" ? (N(), I("button", {
              key: 0,
              class: "btn btn-sm btn-warning",
              onClick: p,
              disabled: a.value,
              title: "Retry this resource"
            }, _[3] || (_[3] = [
              l("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)
            ]), 8, kI)) : _e("", !0),
            v.resource.status === "Completed" ? (N(), I("button", {
              key: 1,
              class: "btn btn-sm btn-outline-primary",
              onClick: h,
              disabled: c.value,
              title: "View resource details"
            }, [
              l("i", {
                class: pe(`fas fa-fw ${c.value ? "fa-spinner fa-spin" : "fa-eye"}`)
              }, null, 2)
            ], 8, RI)) : _e("", !0),
            v.resource.status === "Completed" ? (N(), I("button", {
              key: 2,
              class: "btn btn-sm btn-success",
              onClick: g,
              disabled: a.value || oe(s).isStreamingActive,
              title: "Stream download this resource"
            }, _[4] || (_[4] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, II)) : _e("", !0)
          ])
        ])
      ]),
      i.value && v.resource.error_message ? (N(), I("tr", PI, [
        l("td", MI, [
          l("div", VI, [
            _[5] || (_[5] = l("strong", null, "Error Details:", -1)),
            l("pre", LI, M(v.resource.error_message), 1)
          ])
        ])
      ])) : _e("", !0)
    ], 64));
  }
}), BI = { class: "align-middle" }, jI = ["checked"], $I = {
  key: 0,
  class: "status-display-smart"
}, UI = ["title"], HI = {
  key: 1,
  class: "status-display-progress"
}, WI = {
  class: "progress position-relative",
  style: { height: "20px" }
}, KI = ["title"], zI = { class: "text-muted" }, qI = {
  key: 2,
  class: "status-display-badges"
}, YI = ["title"], XI = {
  key: 3,
  class: "status-display-legacy"
}, GI = ["title"], QI = {
  key: 0,
  class: "position-absolute bg-dark text-white p-2 rounded shadow-lg",
  style: { "z-index": "1000", top: "100%", left: "0", width: "250px" }
}, JI = { class: "small" }, ZI = { class: "d-flex justify-content-between" }, eP = { class: "d-flex justify-content-between" }, tP = { class: "d-flex align-items-center" }, nP = ["aria-expanded"], sP = {
  class: "btn-group",
  role: "group"
}, oP = ["disabled"], rP = ["disabled", "title"], iP = ["disabled", "title"], aP = {
  colspan: "5",
  class: "p-0"
}, lP = { class: "ps-3" }, cP = { class: "table table-sm table-bordered mb-0" }, uP = /* @__PURE__ */ Ne({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  setup(e) {
    const t = Gn(), n = yu(), s = Qn(), o = e, r = U(!1), i = U(!1), a = U(!1), c = U("progress"), f = () => {
      r.value = !r.value;
    }, u = $(() => {
      const k = o.item.resources.filter((Y) => Y.status !== Re.Deleted), S = k.length, w = k.filter((Y) => Y.status === Re.Completed).length, D = k.filter((Y) => Y.status === Re.Failed).length, A = k.filter((Y) => Y.status === Re.Pending).length, F = k.filter((Y) => Y.status === Re.Fetching).length;
      let ce = `${w}/${S} completed`;
      return D > 0 && (ce += `, ${D} failed`), F > 0 && (ce += `, ${F} fetching`), A > 0 && (ce += `, ${A} pending`), ce;
    }), d = $(() => t.getProgressBarConfig(o.item)), p = $(() => o.item.resources.some((k) => k.status === Re.Failed)), h = $(() => !p.value), g = $(() => {
      if (p.value) {
        const k = o.item.resources.filter((S) => S.status === Re.Failed).length;
        return `Retry ${k} failed resource${k > 1 ? "s" : ""} for this record`;
      } else
        return "No failed resources to retry";
    }), v = $(() => o.item.resources.some((k) => k.status === Re.Completed)), _ = $(() => !v.value), y = $(() => {
      if (v.value) {
        const k = o.item.resources.filter((S) => S.status === Re.Completed).length;
        return `Stream download ${k} completed resource${k > 1 ? "s" : ""} for MRN ${o.item.mrn}`;
      } else
        return "No completed resources to stream";
    }), b = () => {
      const k = d.value;
      return k.segments.length === 0 ? "No resources" : `${k.segments.map((w) => `${w.status}: ${w.count}`).join(", ")} | ${Math.round(k.completion_percentage)}% complete`;
    }, m = () => b() + " (hover for details)", T = () => {
      const k = t.getStatusForStyling(o.item);
      return `badge bg-${t.getStatusColor(k)}`;
    }, R = async () => {
      try {
        i.value = !0, await t.triggerFetchMrns([o.item.mrn]);
      } catch (k) {
        console.error("Failed to trigger fetch for MRN:", k);
      } finally {
        i.value = !1;
      }
    }, O = async () => {
      if (p.value)
        try {
          i.value = !0, await Ye.retryFailed({ record_ids: [o.item.id] }), await t.getProjectSummary();
        } catch (k) {
          console.error("Failed to retry failed resources:", k);
        } finally {
          i.value = !1;
        }
    }, x = async () => {
      if (v.value)
        try {
          i.value = !0;
          const k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), S = `${o.item.mrn}_all_resources_${k}`;
          n.startStreaming(S), s.showInfo(`Started streaming download: ${S}`);
          const w = o.item.resources.filter((K) => K.status === Re.Completed).map((K) => K.name).filter((K, le, ye) => ye.indexOf(K) === le), D = {
            mrns: [o.item.mrn],
            resource_types: w,
            archive_name: S
          }, A = await Ye.streamSelectedArchive([o.item.mrn], D), F = new Blob([A.data]), ce = window.URL.createObjectURL(F), Y = document.createElement("a");
          Y.href = ce, Y.download = `${S}.zip`, document.body.appendChild(Y), Y.click(), document.body.removeChild(Y), window.URL.revokeObjectURL(ce);
          const re = n.finishStreaming();
          s.showSuccess(`Download completed: ${S} (${re}s)`);
        } catch (k) {
          n.finishStreaming(), s.showError(`Streaming download failed: ${k.message}`), console.error("Failed to stream download MRN:", k);
        } finally {
          i.value = !1;
        }
    };
    return (k, S) => (N(), I(Se, null, [
      l("tr", BI, [
        l("td", null, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: k.selected,
            onChange: S[0] || (S[0] = (w) => oe(t).toggleSelection(k.item.id))
          }, null, 40, jI)
        ]),
        l("td", null, M(k.item.mrn), 1),
        l("td", null, [
          c.value === "smart" ? (N(), I("div", $I, [
            l("span", {
              class: pe(T()),
              title: b()
            }, M(oe(t).getSmartStatusDisplay(k.item)), 11, UI)
          ])) : c.value === "progress" ? (N(), I("div", HI, [
            l("div", WI, [
              (N(!0), I(Se, null, Je(d.value.segments, (w) => (N(), I("div", {
                key: w.status,
                class: pe(`progress-bar bg-${w.color}`),
                style: Vt({ width: w.percentage + "%" }),
                title: `${w.status}: ${w.count} (${w.percentage}%)`
              }, null, 14, KI))), 128))
            ]),
            l("small", zI, M(Math.round(d.value.completion_percentage)) + "% complete", 1)
          ])) : c.value === "badges" ? (N(), I("div", qI, [
            (N(!0), I(Se, null, Je(d.value.segments, (w) => (N(), I("span", {
              key: w.status,
              class: pe(`badge bg-${w.color} me-1`),
              title: `${w.status}: ${w.count} resources`,
              style: { "font-size": "0.7em" }
            }, M(w.status.charAt(0).toUpperCase()) + ": " + M(w.count), 11, YI))), 128))
          ])) : (N(), I("div", XI, [
            l("span", {
              class: pe(T()),
              title: m(),
              onMouseenter: S[1] || (S[1] = (w) => a.value = !0),
              onMouseleave: S[2] || (S[2] = (w) => a.value = !1)
            }, M(oe(t).getSmartStatusDisplay(k.item)), 43, GI),
            a.value ? (N(), I("div", QI, [
              S[6] || (S[6] = l("div", { class: "fw-bold mb-1" }, "Status Breakdown", -1)),
              l("div", JI, [
                (N(!0), I(Se, null, Je(d.value.segments, (w) => (N(), I("div", {
                  key: w.status,
                  class: "d-flex justify-content-between"
                }, [
                  l("span", null, M(w.status) + ":", 1),
                  l("span", null, M(w.count) + " (" + M(w.percentage) + "%)", 1)
                ]))), 128)),
                S[5] || (S[5] = l("hr", { class: "my-1" }, null, -1)),
                l("div", ZI, [
                  S[3] || (S[3] = l("span", null, "Total Resources:", -1)),
                  l("span", null, M(d.value.total_resources), 1)
                ]),
                l("div", eP, [
                  S[4] || (S[4] = l("span", null, "Completion:", -1)),
                  l("span", null, M(Math.round(d.value.completion_percentage)) + "%", 1)
                ])
              ])
            ])) : _e("", !0)
          ]))
        ]),
        l("td", null, [
          l("div", tP, [
            l("span", null, M(u.value), 1),
            l("button", {
              class: "btn btn-sm btn-light ms-2",
              onClick: f,
              "aria-expanded": r.value
            }, [
              l("i", {
                class: pe(`fas fa-chevron-${r.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, nP)
          ])
        ]),
        l("td", null, [
          l("div", sP, [
            l("button", {
              class: "btn btn-sm btn-primary",
              onClick: R,
              disabled: i.value,
              title: "Trigger fetch for this MRN"
            }, [
              i.value ? (N(), I(Se, { key: 1 }, [
                S[9] || (S[9] = l("i", { class: "fas fa-spinner fa-spin fa-fw" }, null, -1)),
                S[10] || (S[10] = W(" Fetch "))
              ], 64)) : (N(), I(Se, { key: 0 }, [
                S[7] || (S[7] = l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1)),
                S[8] || (S[8] = W(" Fetch "))
              ], 64))
            ], 8, oP),
            l("button", {
              class: "btn btn-sm btn-warning",
              onClick: O,
              disabled: h.value || i.value,
              title: g.value
            }, [
              i.value ? (N(), I(Se, { key: 1 }, [
                S[13] || (S[13] = l("i", { class: "fas fa-spinner fa-spin fa-fw" }, null, -1)),
                S[14] || (S[14] = W(" Retry "))
              ], 64)) : (N(), I(Se, { key: 0 }, [
                S[11] || (S[11] = l("i", { class: "fas fa-redo fa-fw" }, null, -1)),
                S[12] || (S[12] = W(" Retry "))
              ], 64))
            ], 8, rP),
            l("button", {
              class: "btn btn-sm btn-success",
              disabled: _.value || i.value || oe(n).isStreamingActive,
              onClick: x,
              title: y.value
            }, S[15] || (S[15] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, iP)
          ])
        ])
      ]),
      nt(l("tr", null, [
        l("td", aP, [
          l("div", lP, [
            l("table", cP, [
              S[16] || (S[16] = l("thead", { class: "table-light" }, [
                l("tr", null, [
                  l("th", { scope: "col" }, "Resource"),
                  l("th", { scope: "col" }, "Status"),
                  l("th", { scope: "col" }, "Fetch Date"),
                  l("th", { scope: "col" }, "Error"),
                  l("th", { scope: "col" }, "Actions")
                ])
              ], -1)),
              l("tbody", null, [
                (N(!0), I(Se, null, Je(k.item.resources, (w) => (N(), et(FI, {
                  key: `${w.name}-${w.repeat_instance}`,
                  resource: w,
                  mrn: k.item.mrn,
                  recordId: k.item.id.toString()
                }, null, 8, ["resource", "mrn", "recordId"]))), 128))
              ])
            ])
          ])
        ])
      ], 512), [
        [bm, r.value]
      ])
    ], 64));
  }
}), dP = /* @__PURE__ */ Yn(uP, [["__scopeId", "data-v-bc76bd81"]]), fP = {
  key: 0,
  class: "d-flex justify-content-center"
}, pP = {
  key: 1,
  class: "table table-bordered table-striped table-hover"
}, hP = { class: "table-light" }, mP = { scope: "col" }, gP = ["checked", "indeterminate"], vP = { key: 0 }, _P = /* @__PURE__ */ Ne({
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
    const t = e, n = U(null);
    return Rt(() => t.indeterminate, (s) => {
      n.value && (n.value.indeterminate = s);
    }, { immediate: !0 }), (s, o) => (N(), I("div", null, [
      s.loading ? (N(), I("div", fP, o[1] || (o[1] = [
        l("div", {
          class: "spinner-border",
          role: "status"
        }, [
          l("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (N(), I("table", pP, [
        l("thead", hP, [
          l("tr", null, [
            l("th", mP, [
              l("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: s.allSelected,
                indeterminate: s.indeterminate,
                onChange: o[0] || (o[0] = (r) => s.$emit("toggle-select-all"))
              }, null, 40, gP)
            ]),
            o[2] || (o[2] = l("th", { scope: "col" }, "MRN", -1)),
            o[3] || (o[3] = l("th", { scope: "col" }, "Status", -1)),
            o[4] || (o[4] = l("th", { scope: "col" }, "Resources", -1)),
            o[5] || (o[5] = l("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        l("tbody", null, [
          s.items.length === 0 ? (N(), I("tr", vP, o[6] || (o[6] = [
            l("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (N(!0), I(Se, { key: 1 }, Je(s.items, (r) => (N(), et(dP, {
            key: r.id,
            item: r,
            selected: s.selectedMrns.includes(r.id)
          }, null, 8, ["item", "selected"]))), 128))
        ])
      ]))
    ]));
  }
}), yP = { class: "mb-3" }, bP = { class: "mt-2 small" }, EP = { key: 0 }, wP = { key: 1 }, AP = {
  key: 0,
  class: "text-danger"
}, SP = {
  key: 1,
  class: "text-muted"
}, CP = { class: "d-flex gap-2 justify-content-end" }, OP = ["onClick"], TP = ["onClick", "disabled"], NP = /* @__PURE__ */ Ne({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = U(null), s = U(""), o = Gn(), r = $(() => o.analyzeMrnInput(s.value)), i = $(() => r.value.unique === 0 || r.value.overLimit), a = $(() => r.value.unique > 0 ? `Add ${r.value.unique}` : "Add"), c = async () => (s.value = "", await n.value?.show() ? s.value : null), f = (u) => {
      i.value || u(!0);
    };
    return t({ show: c }), (u, d) => {
      const p = Qe("b-modal");
      return N(), et(p, {
        ref_key: "addMrnModal",
        ref: n
      }, {
        title: be(() => d[1] || (d[1] = [
          W("Add MRN")
        ])),
        footer: be(({ hide: h }) => [
          l("div", CP, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (g) => h(!1)
            }, d[11] || (d[11] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              W("Cancel ")
            ]), 8, OP),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (g) => f(h),
              disabled: i.value
            }, [
              d[12] || (d[12] = l("i", { class: "fas fa-plus fa-fw me-1" }, null, -1)),
              W(M(a.value), 1)
            ], 8, TP)
          ])
        ]),
        default: be(() => [
          l("div", yP, [
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
            l("div", bP, [
              l("div", null, [
                d[6] || (d[6] = W(" Parsed: ")),
                l("strong", null, M(r.value.unique), 1),
                d[7] || (d[7] = W(" unique ")),
                r.value.duplicates > 0 ? (N(), I("span", EP, [
                  d[2] || (d[2] = W("(")),
                  l("strong", null, M(r.value.duplicates), 1),
                  d[3] || (d[3] = W(" duplicates ignored)"))
                ])) : _e("", !0),
                r.value.empties > 0 ? (N(), I("span", wP, [
                  d[4] || (d[4] = W(", ")),
                  l("strong", null, M(r.value.empties), 1),
                  d[5] || (d[5] = W(" empty tokens"))
                ])) : _e("", !0)
              ]),
              r.value.overLimit ? (N(), I("div", AP, " Limit exceeded: " + M(r.value.unique) + " › " + M(r.value.limit) + ". Please reduce the list. ", 1)) : _e("", !0),
              r.value.sample.length ? (N(), I("div", SP, [
                d[8] || (d[8] = W(" Sample: ")),
                l("code", null, M(r.value.sample.join(", ")), 1)
              ])) : _e("", !0)
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), DP = { class: "p-0" }, xP = {
  key: 0,
  class: "d-flex justify-content-center align-items-center py-5"
}, kP = {
  key: 1,
  class: "h-100"
}, RP = { class: "bg-light border-bottom p-3" }, IP = { class: "row align-items-center" }, PP = { class: "col-md-8" }, MP = { class: "d-flex flex-wrap gap-3" }, VP = { class: "d-flex align-items-center" }, LP = { class: "text-muted" }, FP = { class: "d-flex align-items-center" }, BP = { class: "text-muted" }, jP = {
  key: 0,
  class: "text-warning"
}, $P = {
  key: 0,
  class: "d-flex align-items-center"
}, UP = { class: "col-md-4 text-end" }, HP = ["disabled"], WP = {
  key: 0,
  class: "alert alert-warning mt-2 mb-0 py-2"
}, KP = { class: "content-display" }, zP = {
  key: 2,
  class: "p-4 text-center"
}, qP = ["onClick"], YP = /* @__PURE__ */ Ne({
  __name: "ResourceContentModal",
  setup(e) {
    const t = __(), n = Qn(), s = U(null), o = U(!1), r = U(!1), i = $(() => t.getContentStats()), a = () => {
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
      return N(), et(d, {
        ref_key: "resourceContentModal",
        ref: s,
        size: "xl",
        onHidden: a
      }, {
        title: be(() => [
          u[0] || (u[0] = l("i", { class: "fas fa-file-alt fa-fw me-2" }, null, -1)),
          W(" " + M(oe(t).getDisplayTitle()), 1)
        ]),
        footer: be(({ hide: p }) => [
          l("button", {
            type: "button",
            class: "btn btn-secondary",
            onClick: (h) => p()
          }, " Close ", 8, qP)
        ]),
        default: be(() => [
          l("div", DP, [
            oe(t).loading ? (N(), I("div", xP, u[1] || (u[1] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading content...")
              ], -1),
              l("span", { class: "ms-3" }, "Loading resource content...", -1)
            ]))) : oe(t).currentContent ? (N(), I("div", kP, [
              l("div", RP, [
                l("div", IP, [
                  l("div", PP, [
                    l("div", MP, [
                      l("div", VP, [
                        u[2] || (u[2] = l("i", { class: "fas fa-info-circle text-info me-1" }, null, -1)),
                        l("small", LP, M(i.value?.lines || 0) + " lines, " + M(i.value?.characters || 0) + " characters ", 1)
                      ]),
                      l("div", FP, [
                        u[3] || (u[3] = l("i", { class: "fas fa-hdd text-secondary me-1" }, null, -1)),
                        l("small", BP, [
                          W(M(i.value?.size_human) + " ", 1),
                          i.value?.is_truncated ? (N(), I("span", jP, " of " + M(i.value?.full_size_human) + " (truncated) ", 1)) : _e("", !0)
                        ])
                      ]),
                      oe(t).isJsonContent() ? (N(), I("div", $P, u[4] || (u[4] = [
                        l("i", { class: "fas fa-check-circle text-success me-1" }, null, -1),
                        l("small", { class: "text-muted" }, "Valid JSON", -1)
                      ]))) : _e("", !0)
                    ])
                  ]),
                  l("div", UP, [
                    l("button", {
                      class: "btn btn-outline-secondary btn-sm",
                      onClick: c,
                      disabled: o.value,
                      title: "Copy content to clipboard"
                    }, [
                      l("i", {
                        class: pe(`fas ${o.value ? "fa-spinner fa-spin" : r.value ? "fa-check" : "fa-copy"} fa-fw`)
                      }, null, 2),
                      W(" " + M(o.value ? "Copying..." : r.value ? "Copied!" : "Copy"), 1)
                    ], 8, HP)
                  ])
                ]),
                i.value?.is_truncated ? (N(), I("div", WP, [
                  u[5] || (u[5] = l("i", { class: "fas fa-exclamation-triangle me-2" }, null, -1)),
                  u[6] || (u[6] = l("strong", null, "Content Truncated:", -1)),
                  W(" This file is " + M(i.value.full_size_human) + " but only the first " + M(i.value.size_human) + " are shown for performance. The full content is preserved in the system. ", 1)
                ])) : _e("", !0)
              ]),
              l("div", KP, [
                l("pre", {
                  class: pe(["content-pre", { "json-content": oe(t).isJsonContent() }])
                }, [
                  l("code", null, M(oe(t).currentContent.content), 1)
                ], 2)
              ])
            ])) : (N(), I("div", zP, u[7] || (u[7] = [
              l("div", { class: "alert alert-danger" }, [
                l("i", { class: "fas fa-exclamation-circle me-2" }),
                W(" No content available or failed to load. ")
              ], -1)
            ])))
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), XP = /* @__PURE__ */ Yn(YP, [["__scopeId", "data-v-8148176a"]]), GP = { class: "mb-3" }, QP = ["placeholder"], JP = { class: "mb-3" }, ZP = {
  key: 0,
  class: "text-center text-muted py-3"
}, eM = {
  key: 1,
  class: "resource-type-list"
}, tM = ["value", "id", "disabled"], nM = ["for"], sM = { class: "mb-3" }, oM = { class: "form-check" }, rM = { class: "form-check" }, iM = { class: "d-flex align-items-center mb-2" }, aM = { key: 0 }, lM = { class: "mb-2" }, cM = { class: "small text-muted" }, uM = { key: 1 }, dM = { class: "small text-muted" }, fM = { key: 0 }, pM = { key: 1 }, hM = { class: "d-flex gap-2 justify-content-end" }, mM = ["onClick"], gM = ["onClick", "disabled"], vM = /* @__PURE__ */ Ne({
  __name: "ArchiveOptionsModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {},
    estimatedResources: { default: 0 }
  },
  emits: ["create"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = Gn(), r = n, i = U(null), a = U({
      archive_name: "",
      resource_types: [],
      background_mode: !1
    }), c = $(() => {
      const v = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
      return (s.archiveType === "selected" ? o.mrns.filter((b) => s.selectedMrns.includes(b.mrn)) : o.mrns).forEach((b) => {
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([m, T]) => {
          v.add(m), T.is_archivable && _.add(m);
        }) : b.resources.forEach((m) => {
          m.status !== "Deleted" && (v.add(m.name), m.status === "Completed" && _.add(m.name));
        });
      }), Array.from(v).sort().map((b) => ({
        name: b,
        isAvailable: _.has(b)
      }));
    }), f = $(() => {
      const v = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `fhir_archive_${s.archiveType === "selected" ? "selected" : "all"}_${v}`;
    }), u = $(() => {
      const v = a.value.resource_types || [], _ = s.archiveType === "selected" ? o.mrns.filter((b) => s.selectedMrns.includes(b.mrn)) : o.mrns;
      let y = 0;
      return _.forEach((b) => {
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([m, T]) => {
          v.length === 0 ? T.is_archivable && (y += T.completed_count) : v.includes(m) && T.is_archivable && (y += T.completed_count);
        }) : b.resources.forEach((m) => {
          m.status === "Completed" && (v.length === 0 || v.includes(m.name)) && (y += 1);
        });
      }), y;
    }), d = $(() => {
      const v = c.value.filter((y) => y.isAvailable), _ = c.value.length;
      return {
        availableTypes: v.length,
        totalTypes: _
      };
    }), p = $(() => !(a.value.archive_name && !/^[a-zA-Z0-9_-]+$/.test(a.value.archive_name.trim()) || s.archiveType === "selected" && s.selectedMrns.length === 0)), h = async () => (a.value = {
      archive_name: "",
      resource_types: [],
      background_mode: !1
      // Will be calculated dynamically
    }, a.value.background_mode = u.value > 50, await i.value?.show() ?? !1), g = (v) => {
      if (!p.value) return;
      const _ = { ...a.value };
      _.archive_name && (_.archive_name = _.archive_name.trim()), _.resource_types && _.resource_types.length === 0 && delete _.resource_types, r("create", _, s.archiveType, s.selectedMrns), v(!0);
    };
    return t({ show: h }), (v, _) => {
      const y = Qe("b-modal");
      return N(), et(y, {
        ref_key: "archiveOptionsModal",
        ref: i
      }, {
        title: be(() => _[4] || (_[4] = [
          W("Archive Options")
        ])),
        footer: be(({ hide: b }) => [
          l("div", hM, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (m) => b(!1)
            }, _[16] || (_[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              W("Cancel ")
            ]), 8, mM),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (m) => g(b),
              disabled: !p.value
            }, _[17] || (_[17] = [
              l("i", { class: "fas fa-archive fa-fw me-1" }, null, -1),
              W("Create Archive ")
            ]), 8, gM)
          ])
        ]),
        default: be(() => [
          l("div", null, [
            l("div", GP, [
              _[5] || (_[5] = l("label", {
                for: "archive-name",
                class: "form-label"
              }, "Archive Name", -1)),
              nt(l("input", {
                type: "text",
                class: "form-control",
                id: "archive-name",
                "onUpdate:modelValue": _[0] || (_[0] = (b) => a.value.archive_name = b),
                placeholder: f.value,
                maxlength: "100"
              }, null, 8, QP), [
                [wo, a.value.archive_name]
              ]),
              _[6] || (_[6] = l("div", { class: "form-text" }, "Optional custom name for the archive file (without extension)", -1))
            ]),
            l("div", JP, [
              _[8] || (_[8] = l("label", { class: "form-label" }, "Resource Types", -1)),
              _[9] || (_[9] = l("div", { class: "form-text mb-2" }, "Select which resource types to include", -1)),
              c.value.length === 0 ? (N(), I("div", ZP, _[7] || (_[7] = [
                l("i", { class: "fas fa-info-circle me-2" }, null, -1),
                W(" No resource types found ")
              ]))) : (N(), I("div", eM, [
                (N(!0), I(Se, null, Je(c.value, (b) => (N(), I("div", {
                  class: "form-check",
                  key: b.name
                }, [
                  nt(l("input", {
                    class: "form-check-input",
                    type: "checkbox",
                    value: b.name,
                    "onUpdate:modelValue": _[1] || (_[1] = (m) => a.value.resource_types = m),
                    id: `resource-${b.name}`,
                    disabled: !b.isAvailable
                  }, null, 8, tM), [
                    [NE, a.value.resource_types]
                  ]),
                  l("label", {
                    class: "form-check-label",
                    for: `resource-${b.name}`
                  }, M(b.name), 9, nM)
                ]))), 128))
              ]))
            ]),
            l("div", sM, [
              _[12] || (_[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
              l("div", oM, [
                nt(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "immediate-mode",
                  value: !1,
                  "onUpdate:modelValue": _[2] || (_[2] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [Ao, a.value.background_mode]
                ]),
                _[10] || (_[10] = l("label", {
                  class: "form-check-label",
                  for: "immediate-mode"
                }, [
                  l("strong", null, "Immediate Processing"),
                  l("div", { class: "small text-muted" }, "Process archive immediately (recommended for small selections)")
                ], -1))
              ]),
              l("div", rM, [
                nt(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "background-mode",
                  value: !0,
                  "onUpdate:modelValue": _[3] || (_[3] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [Ao, a.value.background_mode]
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
              l("div", iM, [
                l("i", {
                  class: pe([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                _[13] || (_[13] = l("strong", null, "Archive Summary", -1))
              ]),
              u.value > 0 ? (N(), I("div", aM, [
                l("div", lM, [
                  l("strong", null, M(u.value), 1),
                  _[14] || (_[14] = W(" completed resources will be included "))
                ]),
                l("div", cM, M(d.value.availableTypes) + " of " + M(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (N(), I("div", uM, [
                _[15] || (_[15] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for archiving")
                ], -1)),
                l("div", dM, [
                  d.value.totalTypes === 0 ? (N(), I("span", fM, " No resource types found ")) : (N(), I("span", pM, M(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), _M = { key: 0 }, yM = { key: 1 }, bM = { class: "row" }, EM = { class: "col-md-6" }, wM = { class: "card" }, AM = { class: "card-body" }, SM = { class: "list-unstyled mb-0" }, CM = { key: 0 }, OM = { class: "col-md-6" }, TM = { class: "card" }, NM = { class: "card-body" }, DM = { key: 0 }, xM = { key: 1 }, kM = { key: 2 }, RM = { class: "alert alert-danger" }, IM = { class: "d-flex gap-2 justify-content-end" }, PM = ["onClick"], MM = ["onClick"], VM = ["onClick"], LM = /* @__PURE__ */ Ne({
  __name: "ArchiveCreationModal",
  setup(e, { expose: t }) {
    const n = U(null), s = U(null), o = (a) => {
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
      return N(), et(f, {
        ref_key: "archiveCreationModal",
        ref: n,
        size: "lg",
        "hide-footer": ""
      }, {
        title: be(() => c[0] || (c[0] = [
          W("Archive Creation")
        ])),
        footer: be(({ hide: u }) => [
          l("div", IM, [
            s.value ? s.value.success ? (N(), I(Se, { key: 1 }, [
              s.value.processing_mode === "immediate" && s.value.download_url ? (N(), I("button", {
                key: 0,
                type: "button",
                class: "btn btn-sm btn-primary",
                onClick: r
              }, c[14] || (c[14] = [
                l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
                W("Download Now ")
              ]))) : _e("", !0),
              l("button", {
                type: "button",
                class: "btn btn-sm btn-secondary",
                onClick: (d) => u(!0)
              }, c[15] || (c[15] = [
                l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
                W("Done ")
              ]), 8, MM)
            ], 64)) : (N(), I("button", {
              key: 2,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[16] || (c[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              W("Close ")
            ]), 8, VM)) : (N(), I("button", {
              key: 0,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[13] || (c[13] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              W("Cancel ")
            ]), 8, PM))
          ])
        ]),
        default: be(() => [
          s.value ? s.value.success ? (N(), I("div", yM, [
            c[10] || (c[10] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-check-circle text-success",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Created Successfully")
            ], -1)),
            l("div", bM, [
              l("div", EM, [
                l("div", wM, [
                  l("div", AM, [
                    c[6] || (c[6] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                    l("ul", SM, [
                      l("li", null, [
                        c[2] || (c[2] = l("strong", null, "Archive ID:", -1)),
                        W(" " + M(s.value.archive_id), 1)
                      ]),
                      l("li", null, [
                        c[3] || (c[3] = l("strong", null, "Resources:", -1)),
                        W(" " + M(s.value.total_resources), 1)
                      ]),
                      s.value.file_size ? (N(), I("li", CM, [
                        c[4] || (c[4] = l("strong", null, "Size:", -1)),
                        W(" " + M(i(s.value.file_size)), 1)
                      ])) : _e("", !0),
                      l("li", null, [
                        c[5] || (c[5] = l("strong", null, "Mode:", -1)),
                        W(" " + M(s.value.processing_mode), 1)
                      ])
                    ])
                  ])
                ])
              ]),
              l("div", OM, [
                l("div", TM, [
                  l("div", NM, [
                    c[9] || (c[9] = l("h6", { class: "card-title" }, "Status", -1)),
                    s.value.processing_mode === "immediate" ? (N(), I("div", DM, c[7] || (c[7] = [
                      l("span", { class: "badge bg-success" }, [
                        l("i", { class: "fas fa-check me-1" }),
                        W("Ready for Download ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is ready for immediate download.", -1)
                    ]))) : (N(), I("div", xM, c[8] || (c[8] = [
                      l("span", { class: "badge bg-info" }, [
                        l("i", { class: "fas fa-clock me-1" }),
                        W("Processing in Background ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is being processed. You'll be able to download it when complete.", -1)
                    ])))
                  ])
                ])
              ])
            ])
          ])) : (N(), I("div", kM, [
            c[12] || (c[12] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-exclamation-triangle text-danger",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Creation Failed")
            ], -1)),
            l("div", RM, [
              c[11] || (c[11] = l("strong", null, "Error:", -1)),
              W(" " + M(s.value.message), 1)
            ])
          ])) : (N(), I("div", _M, c[1] || (c[1] = [
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
}), FM = { class: "mb-3" }, BM = ["for"], jM = ["id", "value", "placeholder"], $M = {
  key: 0,
  class: "invalid-feedback"
}, UM = {
  key: 1,
  class: "form-text"
}, HM = /* @__PURE__ */ Ne({
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
    const t = e, n = $(() => t.errorMessage && t.errorMessage.trim().length > 0);
    return (s, o) => (N(), I("div", FM, [
      l("label", {
        for: s.inputId,
        class: "form-label"
      }, "Archive Name", 8, BM),
      l("input", {
        type: "text",
        class: pe(["form-control", { "is-invalid": n.value }]),
        id: s.inputId,
        value: s.modelValue,
        onInput: o[0] || (o[0] = (r) => s.$emit("update:modelValue", r.target.value)),
        placeholder: s.placeholder,
        maxlength: "100"
      }, null, 42, jM),
      n.value ? (N(), I("div", $M, M(s.errorMessage), 1)) : _e("", !0),
      s.showHelp ? (N(), I("div", UM, M(s.helpText), 1)) : _e("", !0)
    ]));
  }
}), WM = { class: "mb-3" }, KM = {
  key: 0,
  class: "text-center text-muted py-3"
}, zM = {
  key: 1,
  class: "resource-type-list"
}, qM = {
  key: 0,
  class: "form-check mb-2"
}, YM = ["checked", "indeterminate"], XM = ["value", "checked", "id", "disabled"], GM = ["for"], QM = /* @__PURE__ */ Ne({
  __name: "ResourceTypesSelector",
  props: {
    selectedTypes: {},
    availableTypes: {},
    showSelectAll: { type: Boolean, default: !0 }
  },
  emits: ["update:selectedTypes"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = U(null), r = $(() => {
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
    }), (c, f) => (N(), I("div", WM, [
      f[2] || (f[2] = l("label", { class: "form-label" }, "Resource Types", -1)),
      f[3] || (f[3] = l("div", { class: "form-text mb-2" }, [
        W(" Select which resource types to include "),
        l("br"),
        l("small", { class: "text-muted" }, "Note: No selection will download all available resources")
      ], -1)),
      c.availableTypes.length === 0 ? (N(), I("div", KM, f[0] || (f[0] = [
        l("i", { class: "fas fa-info-circle me-2" }, null, -1),
        W(" No resource types found ")
      ]))) : (N(), I("div", zM, [
        c.showSelectAll ? (N(), I("div", qM, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: r.value.checked,
            indeterminate: r.value.indeterminate,
            onChange: i,
            id: "select-all-types",
            ref_key: "selectAllCheckbox",
            ref: o
          }, null, 40, YM),
          f[1] || (f[1] = l("label", {
            class: "form-check-label fw-bold",
            for: "select-all-types"
          }, " Select All ", -1))
        ])) : _e("", !0),
        (N(!0), I(Se, null, Je(c.availableTypes, (u) => (N(), I("div", {
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
          }, null, 40, XM),
          l("label", {
            class: "form-check-label",
            for: `resource-${u.name}`
          }, M(u.name), 9, GM)
        ]))), 128))
      ]))
    ]));
  }
}), JM = { class: "mb-3" }, ZM = { class: "bg-light p-3 rounded" }, eV = { key: 0 }, tV = { class: "small text-muted" }, nV = { key: 0 }, sV = { key: 1 }, oV = { class: "d-flex align-items-center mb-2" }, rV = { key: 0 }, iV = { class: "mb-2" }, aV = { class: "small text-muted" }, lV = { key: 1 }, cV = { class: "small text-muted" }, uV = { key: 0 }, dV = { key: 1 }, fV = { class: "d-flex gap-2 justify-content-end" }, pV = ["onClick"], hV = ["onClick", "disabled"], mV = /* @__PURE__ */ Ne({
  __name: "StreamingArchiveModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {}
  },
  setup(e, { expose: t }) {
    const n = e, s = Gn(), o = yu(), r = Qn(), i = U(null), a = U({
      mrns: [],
      archive_name: "",
      resource_types: []
    }), c = $(() => {
      const b = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set();
      return (n.archiveType === "selected" ? s.mrns.filter((R) => n.selectedMrns.includes(R.mrn)) : s.mrns).forEach((R) => {
        R.status_summary ? Object.entries(R.status_summary.resource_type_statuses).forEach(([O, x]) => {
          b.add(O), x.is_archivable && m.add(O);
        }) : R.resources.forEach((O) => {
          O.status !== "Deleted" && (b.add(O.name), O.status === "Completed" && m.add(O.name));
        });
      }), Array.from(b).sort().map((R) => ({
        name: R,
        isAvailable: m.has(R)
      }));
    }), f = $(() => {
      const b = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `streaming_archive_${n.archiveType === "selected" ? "selected" : "all"}_${b}`;
    }), u = $(() => {
      const b = a.value.resource_types || [], m = n.archiveType === "selected" ? s.mrns.filter((R) => n.selectedMrns.includes(R.mrn)) : s.mrns;
      let T = 0;
      return m.forEach((R) => {
        R.status_summary ? Object.entries(R.status_summary.resource_type_statuses).forEach(([O, x]) => {
          b.length === 0 ? x.is_archivable && (T += x.completed_count) : b.includes(O) && x.is_archivable && (T += x.completed_count);
        }) : R.resources.forEach((O) => {
          O.status === "Completed" && (b.length === 0 || b.includes(O.name)) && (T += 1);
        });
      }), T;
    }), d = $(() => {
      const b = c.value.filter((T) => T.isAvailable), m = c.value.length;
      return {
        availableTypes: b.length,
        totalTypes: m
      };
    }), p = $(() => {
      if (!a.value.archive_name)
        return "";
      const b = a.value.archive_name.trim();
      return b.length === 0 || /^[a-zA-Z0-9_-]+$/.test(b) ? "" : "Archive name contains invalid characters. Only letters, numbers, hyphens, and underscores are allowed.";
    }), h = $(() => !(p.value || n.archiveType === "selected" && n.selectedMrns.length === 0)), g = (b) => {
      a.value.resource_types = b;
    }, v = async () => (a.value = {
      mrns: n.archiveType === "selected" ? n.selectedMrns : [],
      archive_name: "",
      resource_types: []
    }, await i.value?.show() ?? !1), _ = () => a.value.archive_name || f.value, y = async (b) => {
      if (!h.value) return;
      const m = _();
      try {
        o.startStreaming(m), r.showInfo(`Started streaming download: ${m}`), b(!0);
        const T = {
          ...a.value,
          mrns: n.archiveType === "selected" ? n.selectedMrns : []
        };
        T.archive_name || delete T.archive_name, T.resource_types?.length || delete T.resource_types;
        let R;
        n.archiveType === "selected" ? R = await Ye.streamSelectedArchive(n.selectedMrns, T) : R = await Ye.streamAllArchive(T);
        const O = new Blob([R.data]), x = window.URL.createObjectURL(O), k = document.createElement("a");
        k.href = x, k.download = `${m}.zip`, document.body.appendChild(k), k.click(), document.body.removeChild(k), window.URL.revokeObjectURL(x);
        const S = o.finishStreaming();
        r.showSuccess(`Download completed: ${m} (${S}s)`);
      } catch (T) {
        o.finishStreaming(), r.showError(`Streaming download failed: ${T.message}`);
      }
    };
    return t({ show: v }), (b, m) => {
      const T = Qe("b-modal");
      return N(), et(T, {
        ref_key: "streamingArchiveModal",
        ref: i,
        size: "lg"
      }, {
        title: be(() => m[1] || (m[1] = [
          l("i", { class: "fas fa-download text-primary me-2" }, null, -1),
          W(" Archive Download ")
        ])),
        footer: be(({ hide: R }) => [
          l("div", fV, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (O) => R(!1)
            }, m[9] || (m[9] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              W("Cancel ")
            ]), 8, pV),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (O) => y(R),
              disabled: !h.value || oe(o).isStreamingActive
            }, [
              m[10] || (m[10] = l("i", { class: "fas fa-download fa-fw me-1" }, null, -1)),
              W(" " + M(oe(o).isStreamingActive ? "Downloading..." : "Download"), 1)
            ], 8, hV)
          ])
        ]),
        default: be(() => [
          l("div", null, [
            m[8] || (m[8] = l("div", { class: "alert alert-info mb-4" }, [
              l("i", { class: "fas fa-info-circle me-2" }),
              l("strong", null, "Download"),
              l("div", { class: "small" }, " Your archive will be generated and downloaded immediately without storing on the server. ")
            ], -1)),
            fe(HM, {
              modelValue: a.value.archive_name,
              "onUpdate:modelValue": m[0] || (m[0] = (R) => a.value.archive_name = R),
              placeholder: f.value,
              "show-help": !0,
              "help-text": "Archive will be downloaded immediately as [name].zip",
              "input-id": "streaming-archive-name",
              "error-message": p.value
            }, null, 8, ["modelValue", "placeholder", "error-message"]),
            fe(QM, {
              "selected-types": a.value.resource_types || [],
              "available-types": c.value,
              "onUpdate:selectedTypes": g,
              "show-select-all": !0
            }, null, 8, ["selected-types", "available-types"]),
            l("div", JM, [
              m[4] || (m[4] = l("label", { class: "form-label" }, "Selected Records", -1)),
              l("div", ZM, [
                b.archiveType === "selected" ? (N(), I("div", eV, [
                  l("strong", null, M(b.selectedMrns.length), 1),
                  m[2] || (m[2] = W(" selected MRNs ")),
                  l("div", tV, [
                    W(M(b.selectedMrns.slice(0, 3).join(", ")) + " ", 1),
                    b.selectedMrns.length > 3 ? (N(), I("span", nV, " and " + M(b.selectedMrns.length - 3) + " more... ", 1)) : _e("", !0)
                  ])
                ])) : (N(), I("div", sV, m[3] || (m[3] = [
                  l("strong", null, "All project records", -1),
                  l("div", { class: "small text-muted" }, "Complete project dataset", -1)
                ])))
              ])
            ]),
            l("div", {
              class: pe(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", oV, [
                l("i", {
                  class: pe([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                m[5] || (m[5] = l("strong", null, "Streaming Summary", -1))
              ]),
              u.value > 0 ? (N(), I("div", rV, [
                l("div", iV, [
                  l("strong", null, M(u.value), 1),
                  m[6] || (m[6] = W(" completed resources will be streamed "))
                ]),
                l("div", aV, M(d.value.availableTypes) + " of " + M(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (N(), I("div", lV, [
                m[7] || (m[7] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for streaming")
                ], -1)),
                l("div", cV, [
                  d.value.totalTypes === 0 ? (N(), I("span", uV, " No resource types found ")) : (N(), I("span", dV, M(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), gV = {
  key: 0,
  class: "alert alert-warning"
}, vV = { class: "table-responsive" }, _V = { class: "table table-sm align-middle" }, yV = { class: "d-flex justify-content-end" }, bV = ["onClick"], EV = /* @__PURE__ */ Ne({
  __name: "BulkMrnErrorsModal",
  setup(e, { expose: t }) {
    const n = U(null), s = U([]), o = U(null);
    return t({ show: (i, a, c) => {
      s.value = i, o.value = {
        added: a ?? 0,
        failed: c ?? i.length
      }, n.value?.show();
    } }), (i, a) => {
      const c = Qe("b-modal");
      return N(), et(c, {
        ref_key: "errorsModal",
        ref: n,
        size: "lg"
      }, {
        title: be(() => a[0] || (a[0] = [
          W("Some MRNs Could Not Be Added")
        ])),
        footer: be(({ hide: f }) => [
          l("div", yV, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (u) => f(!0)
            }, a[3] || (a[3] = [
              l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
              W("Close ")
            ]), 8, bV)
          ])
        ]),
        default: be(() => [
          o.value ? (N(), I("div", gV, [
            a[1] || (a[1] = l("strong", null, "Summary:", -1)),
            W(" " + M(o.value.added) + " added, " + M(o.value.failed) + " failed ", 1)
          ])) : _e("", !0),
          l("div", vV, [
            l("table", _V, [
              a[2] || (a[2] = l("thead", null, [
                l("tr", null, [
                  l("th", { style: { width: "35%" } }, "MRN"),
                  l("th", null, "Error")
                ])
              ], -1)),
              l("tbody", null, [
                (N(!0), I(Se, null, Je(s.value, (f, u) => (N(), I("tr", { key: u }, [
                  l("td", null, [
                    l("code", null, M(f.mrn), 1)
                  ]),
                  l("td", null, M(f.error), 1)
                ]))), 128))
              ])
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), wV = /* @__PURE__ */ Yn(EV, [["__scopeId", "data-v-40a75814"]]), AV = { class: "card" }, SV = { class: "card-header d-flex justify-content-between align-items-center" }, CV = ["disabled"], OV = { class: "card-body" }, TV = {
  key: 0,
  class: "text-center"
}, NV = {
  key: 1,
  class: "row g-3"
}, DV = { class: "col-md-6" }, xV = { class: "border rounded p-3 h-100" }, kV = { class: "row g-2" }, RV = { class: "col-6" }, IV = { class: "text-center" }, PV = { class: "h4 mb-1 text-primary" }, MV = { class: "col-6" }, VV = { class: "text-center" }, LV = { class: "h4 mb-1 text-info" }, FV = { class: "col-md-6" }, BV = { class: "border rounded p-3 h-100" }, jV = { class: "row g-2" }, $V = { class: "text-center" }, UV = { class: "text-muted" }, HV = { class: "col-12" }, WV = { class: "border rounded p-3" }, KV = { class: "mb-2" }, zV = { class: "d-flex justify-content-between align-items-center mb-1" }, qV = { class: "text-muted" }, YV = {
  class: "progress",
  style: { height: "8px" }
}, XV = ["aria-valuenow"], GV = {
  key: 0,
  class: "mb-2"
}, QV = { class: "d-flex justify-content-between align-items-center mb-1" }, JV = { class: "text-muted" }, ZV = {
  class: "progress",
  style: { height: "6px" }
}, eL = ["aria-valuenow"], tL = { class: "mb-2" }, nL = { class: "d-flex justify-content-between align-items-center mb-1" }, sL = { class: "text-muted" }, oL = {
  class: "progress",
  style: { height: "12px" }
}, rL = ["title"], iL = ["title"], aL = ["title"], lL = ["title"], cL = ["title"], uL = {
  class: "d-flex justify-content-start mt-1",
  style: { "font-size": "0.75rem" }
}, dL = {
  key: 0,
  class: "me-3"
}, fL = {
  key: 1,
  class: "me-3"
}, pL = {
  key: 2,
  class: "me-3"
}, hL = {
  key: 3,
  class: "me-3"
}, mL = {
  key: 4,
  class: "me-3"
}, gL = {
  key: 2,
  class: "text-center text-muted"
}, vL = /* @__PURE__ */ Ne({
  __name: "ProjectSummaryWidget",
  setup(e) {
    const t = Gn(), n = U(!1), s = $(() => t.projectSummary), o = $(() => s.value ? Object.values(s.value.overall_status_counts).reduce((p, h) => p + h, 0) : 0), r = $(() => {
      if (!s.value) return 0;
      const h = s.value.overall_status_counts.deleted || 0;
      return o.value - h;
    }), i = $(() => {
      if (!s.value || r.value === 0) return 0;
      const p = s.value.overall_status_counts.completed || 0;
      return Math.round(p / r.value * 100);
    }), a = $(() => {
      if (!s.value || r.value === 0) return 0;
      const p = s.value.overall_status_counts.failed || 0;
      return Math.round(p / r.value * 100);
    }), c = $(() => {
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
    }), (p, h) => (N(), I("div", AV, [
      l("div", SV, [
        h[0] || (h[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-chart-bar fa-fw" }),
          W(" Project Summary ")
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
        ], 8, CV)
      ]),
      l("div", OV, [
        n.value ? (N(), I("div", TV, h[1] || (h[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : s.value ? (N(), I("div", NV, [
          l("div", DV, [
            l("div", xV, [
              h[4] || (h[4] = l("h6", { class: "text-muted mb-3" }, "Overall Statistics", -1)),
              l("div", kV, [
                l("div", RV, [
                  l("div", IV, [
                    l("div", PV, M(s.value.total_mrns), 1),
                    h[2] || (h[2] = l("small", { class: "text-muted" }, "Total MRNs", -1))
                  ])
                ]),
                l("div", MV, [
                  l("div", VV, [
                    l("div", LV, M(o.value), 1),
                    h[3] || (h[3] = l("small", { class: "text-muted" }, "Total Resources", -1))
                  ])
                ])
              ])
            ])
          ]),
          l("div", FV, [
            l("div", BV, [
              h[5] || (h[5] = l("h6", { class: "text-muted mb-3" }, "Resource Status", -1)),
              l("div", jV, [
                (N(!0), I(Se, null, Je(s.value.overall_status_counts, (g, v) => (N(), I("div", {
                  key: v,
                  class: "col-6"
                }, [
                  l("div", $V, [
                    l("div", {
                      class: pe(["h5 mb-1", f(v)])
                    }, M(g), 3),
                    l("small", UV, M(u(v)), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          l("div", HV, [
            l("div", WV, [
              h[14] || (h[14] = l("h6", { class: "text-muted mb-3" }, "Completion Progress", -1)),
              l("div", KV, [
                l("div", zV, [
                  h[6] || (h[6] = l("small", { class: "text-muted" }, "Overall Completion", -1)),
                  l("small", qV, M(i.value) + "%", 1)
                ]),
                l("div", YV, [
                  l("div", {
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: i.value + "%" }),
                    "aria-valuenow": i.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, XV)
                ])
              ]),
              a.value > 0 ? (N(), I("div", GV, [
                l("div", QV, [
                  h[7] || (h[7] = l("small", { class: "text-muted" }, "Error Rate", -1)),
                  l("small", JV, M(a.value) + "%", 1)
                ]),
                l("div", ZV, [
                  l("div", {
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: a.value + "%" }),
                    "aria-valuenow": a.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, eL)
                ])
              ])) : _e("", !0),
              l("div", tL, [
                l("div", nL, [
                  h[8] || (h[8] = l("small", { class: "text-muted" }, "Resource States Breakdown", -1)),
                  l("small", sL, M(r.value) + " active resources", 1)
                ]),
                l("div", oL, [
                  c.value.completed > 0 ? (N(), I("div", {
                    key: 0,
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: c.value.completed + "%" }),
                    title: `Completed: ${s.value?.overall_status_counts.completed || 0} (${c.value.completed}%)`
                  }, null, 12, rL)) : _e("", !0),
                  c.value.fetching > 0 ? (N(), I("div", {
                    key: 1,
                    class: "progress-bar bg-info",
                    role: "progressbar",
                    style: Vt({ width: c.value.fetching + "%" }),
                    title: `Fetching: ${s.value?.overall_status_counts.fetching || 0} (${c.value.fetching}%)`
                  }, null, 12, iL)) : _e("", !0),
                  c.value.pending > 0 ? (N(), I("div", {
                    key: 2,
                    class: "progress-bar bg-warning",
                    role: "progressbar",
                    style: Vt({ width: c.value.pending + "%" }),
                    title: `Pending: ${s.value?.overall_status_counts.pending || 0} (${c.value.pending}%)`
                  }, null, 12, aL)) : _e("", !0),
                  c.value.failed > 0 ? (N(), I("div", {
                    key: 3,
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: c.value.failed + "%" }),
                    title: `Failed: ${s.value?.overall_status_counts.failed || 0} (${c.value.failed}%)`
                  }, null, 12, lL)) : _e("", !0),
                  c.value.outdated > 0 ? (N(), I("div", {
                    key: 4,
                    class: "progress-bar bg-secondary",
                    role: "progressbar",
                    style: Vt({ width: c.value.outdated + "%" }),
                    title: `Outdated: ${s.value?.overall_status_counts.outdated || 0} (${c.value.outdated}%)`
                  }, null, 12, cL)) : _e("", !0)
                ]),
                l("div", uL, [
                  c.value.completed > 0 ? (N(), I("div", dL, h[9] || (h[9] = [
                    l("span", { class: "badge bg-success me-1" }, "●", -1),
                    W("Completed ")
                  ]))) : _e("", !0),
                  c.value.fetching > 0 ? (N(), I("div", fL, h[10] || (h[10] = [
                    l("span", { class: "badge bg-info me-1" }, "●", -1),
                    W("Fetching ")
                  ]))) : _e("", !0),
                  c.value.pending > 0 ? (N(), I("div", pL, h[11] || (h[11] = [
                    l("span", { class: "badge bg-warning me-1" }, "●", -1),
                    W("Pending ")
                  ]))) : _e("", !0),
                  c.value.failed > 0 ? (N(), I("div", hL, h[12] || (h[12] = [
                    l("span", { class: "badge bg-danger me-1" }, "●", -1),
                    W("Failed ")
                  ]))) : _e("", !0),
                  c.value.outdated > 0 ? (N(), I("div", mL, h[13] || (h[13] = [
                    l("span", { class: "badge bg-secondary me-1" }, "●", -1),
                    W("Outdated ")
                  ]))) : _e("", !0)
                ])
              ])
            ])
          ])
        ])) : (N(), I("div", gL, h[15] || (h[15] = [
          l("i", { class: "fas fa-info-circle fa-fw" }, null, -1),
          W(" No summary data available ")
        ])))
      ])
    ]));
  }
}), _L = /* @__PURE__ */ Yn(vL, [["__scopeId", "data-v-437ee7dd"]]), y_ = /* @__PURE__ */ qn("archive", () => {
  const e = Wo(), t = U(!1), n = U([]), s = U(!1), o = U(/* @__PURE__ */ new Set()), r = U({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100]
  }), i = U({
    status: "",
    searchQuery: "",
    processingMode: ""
  }), a = $(() => {
    let O = n.value;
    if (i.value.status && (O = O.filter((x) => x.status === i.value.status)), i.value.processingMode && (O = O.filter((x) => x.processing_mode === i.value.processingMode)), i.value.searchQuery) {
      const x = i.value.searchQuery.toLowerCase();
      O = O.filter(
        (k) => k.file_name.toLowerCase().includes(x) || k.archive_id.toLowerCase().includes(x)
      );
    }
    return O;
  }), c = $(() => {
    const O = (r.value.page - 1) * r.value.limit, x = O + r.value.limit, k = a.value;
    return r.value.total = k.length, r.value.totalPages = Math.ceil(k.length / r.value.limit), r.value.hasNext = r.value.page < r.value.totalPages, r.value.hasPrevious = r.value.page > 1, k.slice(O, x);
  }), f = $(
    () => n.value.filter(
      (O) => O.status === "pending" || O.status === "processing"
    )
  ), u = $(
    () => n.value.filter((O) => O.status === "completed")
  ), d = async () => {
    try {
      t.value = !0;
      const O = await Ye.listArchives();
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
    createArchiveSelected: async (O, x = {}) => {
      try {
        s.value = !0;
        const k = await Ye.createArchiveSelected(O, x);
        return k.data.success ? (await d(), k.data) : (e.addError({
          message: k.data.message || "Failed to create archive for selected MRNs",
          source: "ArchiveStore.createArchiveSelected",
          timestamp: /* @__PURE__ */ new Date()
        }), k.data);
      } catch (k) {
        return e.addError({
          message: `Failed to create archive for selected MRNs: ${k}`,
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
        const x = await Ye.createArchiveAll(O);
        return x.data.success ? (await d(), x.data) : (e.addError({
          message: x.data.message || "Failed to create archive for all resources",
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), x.data);
      } catch (x) {
        return e.addError({
          message: `Failed to create archive for all resources: ${x}`,
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    downloadArchive: async (O) => {
      try {
        const x = await Ye.downloadArchive(O), k = new Blob([x.data], { type: "application/zip" }), S = window.URL.createObjectURL(k), w = document.createElement("a"), A = n.value.find((F) => F.archive_id === O)?.file_name || `archive_${O}.zip`;
        w.href = S, w.download = A, document.body.appendChild(w), w.click(), document.body.removeChild(w), window.URL.revokeObjectURL(S);
      } catch (x) {
        e.addError({
          message: `Failed to download archive: ${x}`,
          source: "ArchiveStore.downloadArchive",
          timestamp: /* @__PURE__ */ new Date()
        });
      }
    },
    deleteArchive: async (O) => {
      const x = n.value.findIndex((S) => S.archive_id === O);
      if (x === -1)
        return e.addError({
          message: "Archive not found",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      const k = n.value[x];
      try {
        o.value.add(O), n.value.splice(x, 1);
        const S = await Ye.deleteArchive(O);
        return S.data.success || (n.value.splice(x, 0, k), e.addError({
          message: S.data.message || "Failed to delete archive",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        })), S.data;
      } catch (S) {
        return n.value.splice(x, 0, k), e.addError({
          message: `Failed to delete archive: ${S}`,
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
    setFilter: (O, x) => {
      i.value[O] = x, r.value.page = 1;
    },
    clearFilters: () => {
      i.value.status = "", i.value.searchQuery = "", i.value.processingMode = "", r.value.page = 1;
    },
    isArchiveDeleting: (O) => o.value.has(O)
  };
}), yL = { class: "p-0" }, bL = {
  key: 0,
  class: "mb-4"
}, EL = {
  key: 1,
  class: "d-flex justify-content-between align-items-center mt-3"
}, wL = { class: "text-muted" }, AL = { class: "d-flex gap-2" }, SL = /* @__PURE__ */ Ne({
  __name: "MonitorPage",
  setup(e) {
    const t = Gn(), n = v_(), s = y_(), o = Qn(), r = U(null), i = U(null), a = U(null), c = U(null), f = U(null);
    Rt(() => n.archiveModalVisible, async (y) => {
      y && (await i.value?.show(), n.hideArchiveModal());
    }), Rt(() => n.streamingModalVisible, async (y) => {
      y && (await c.value?.show(), n.hideStreamingModal());
    });
    const u = $({
      get: () => t.pagination.page,
      set: (y) => t.setPage(y)
    }), d = $({
      get: () => t.pagination.limit,
      set: (y) => t.setLimit(y)
    }), p = $(() => t.pagination.total), h = $(() => t.pagination.perPageOptions), g = $(() => {
      const y = t.pagination.total, b = t.pagination.page, m = t.pagination.limit, T = y === 0 ? 0 : (b - 1) * m + 1, R = Math.min(b * m, y);
      return { start: T, end: R, total: y };
    }), v = async () => {
      if (r.value) {
        const y = await r.value.show();
        if (y)
          try {
            const b = await t.addMrnsFromString(y), m = b.added_count || 0, T = b.failed_count || 0;
            T === 0 ? o.showSuccess(`Added ${m} MRN(s).`) : f.value?.show(b.failures, m, T);
          } catch {
            o.showError("Failed to add MRNs");
          }
      }
    }, _ = async (y, b, m) => {
      try {
        let T;
        b === "selected" && m ? T = await s.createArchiveSelected(m, y) : T = await s.createArchiveAll(y), T && (a.value?.show(T), T.success ? o.showSuccess(T.message) : o.showError(T.message));
      } catch (T) {
        console.error("Failed to create archive:", T), o.showError("Failed to create archive");
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
      const m = Qe("b-pagination"), T = Qe("b-pagination-dropdown");
      return N(), I("div", yL, [
        oe(n).showSummary ? (N(), I("div", bL, [
          fe(_L)
        ])) : _e("", !0),
        fe(yI, { onAddMrn: v }),
        fe(_P, {
          items: oe(t).mrns,
          loading: oe(t).loading,
          "selected-mrns": oe(t).selectedMrns,
          "all-selected": oe(t).allSelected,
          indeterminate: oe(t).indeterminate,
          onToggleSelectAll: oe(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelectAll"]),
        oe(t).pagination.total > 0 ? (N(), I("div", EL, [
          l("small", wL, " Showing " + M(g.value.start) + "-" + M(g.value.end) + " of " + M(g.value.total) + " MRNs ", 1),
          l("div", AL, [
            fe(m, {
              size: "sm",
              perPage: d.value,
              totalItems: p.value,
              modelValue: u.value,
              "onUpdate:modelValue": b[0] || (b[0] = (R) => u.value = R)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            fe(T, {
              options: h.value,
              modelValue: d.value,
              "onUpdate:modelValue": b[1] || (b[1] = (R) => d.value = R)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : _e("", !0),
        fe(NP, {
          ref_key: "addMrnModal",
          ref: r
        }, null, 512),
        fe(XP),
        (N(), et(Hr, { to: "body" }, [
          fe(vM, {
            ref_key: "archiveOptionsModal",
            ref: i,
            "selected-mrns": oe(n).archiveModalSelectedMrns,
            "archive-type": oe(n).archiveModalType,
            onCreate: _
          }, null, 8, ["selected-mrns", "archive-type"]),
          fe(LM, {
            ref_key: "archiveCreationModal",
            ref: a
          }, null, 512),
          fe(mV, {
            ref_key: "streamingArchiveModal",
            ref: c,
            "selected-mrns": oe(n).streamingModalSelectedMrns,
            "archive-type": oe(n).streamingModalType
          }, null, 8, ["selected-mrns", "archive-type"]),
          fe(wV, {
            ref_key: "bulkMrnErrorsModal",
            ref: f
          }, null, 512)
        ]))
      ]);
    };
  }
}), b_ = /* @__PURE__ */ qn("task", () => {
  const e = Wo(), t = U(!1), n = U([]), s = U(!1), o = U(/* @__PURE__ */ new Set()), r = U({
    page: 1,
    limit: 25,
    total: 0,
    total_pages: 0,
    has_next: !1,
    has_previous: !1
  }), i = U({
    status: "",
    task_type: "",
    search_query: ""
  }), a = $(() => {
    let w = n.value;
    if (i.value.status && (w = w.filter((D) => D.status === i.value.status)), i.value.task_type && (w = w.filter((D) => D.key === i.value.task_type)), i.value.search_query) {
      const D = i.value.search_query.toLowerCase();
      w = w.filter(
        (A) => A.id.toLowerCase().includes(D) || A.key.toLowerCase().includes(D)
      );
    }
    return w;
  }), c = $(() => {
    const w = (r.value.page - 1) * r.value.limit, D = w + r.value.limit;
    return a.value.slice(w, D);
  }), f = $(
    () => n.value.filter((w) => w.status === "pending")
  ), u = $(
    () => n.value.filter((w) => w.status === "processing")
  ), d = $(
    () => n.value.filter((w) => w.status === "completed")
  ), p = $(
    () => n.value.filter((w) => w.status === "failed")
  ), h = $(() => ({
    total: n.value.length,
    pending: f.value.length,
    processing: u.value.length,
    completed: d.value.length,
    failed: p.value.length
  })), g = async () => {
    try {
      t.value = !0;
      const D = (await Ye.listTasks(
        r.value.page,
        r.value.limit,
        i.value
      )).data;
      D.success ? (n.value = D.tasks || [], D.pagination && (r.value = { ...r.value, ...D.pagination }), m()) : e.addError({
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
  }, v = async () => {
    try {
      s.value = !0;
      const D = (await Ye.performTaskFullSync()).data;
      return D.success ? (await g(), D) : (e.addError({
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
  }, _ = async () => {
    try {
      s.value = !0;
      const D = (await Ye.retryFailedResources()).data;
      return D.success ? (await g(), D) : (e.addError({
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
      const A = (await Ye.getTaskDetails(w)).data;
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
      const F = await Ye.deleteTask(w);
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
  }, m = () => {
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
    fetchTasks: g,
    performFullSync: v,
    retryFailed: _,
    getTaskDetails: y,
    deleteTask: b,
    refreshTaskStatus: async () => {
      await g();
    },
    updatePagination: m,
    setPage: (w) => {
      w >= 1 && w <= r.value.total_pages && (r.value.page = w);
    },
    setLimit: (w) => {
      r.value.limit = w, r.value.page = 1, m();
    },
    setFilter: (w, D) => {
      i.value[w] = D, r.value.page = 1, m();
    },
    clearFilters: () => {
      i.value.status = "", i.value.task_type = "", i.value.search_query = "", r.value.page = 1, m();
    },
    isTaskDeleting: (w) => o.value.has(w)
  };
}), CL = { class: "card" }, OL = { class: "card-header d-flex justify-content-between align-items-center" }, TL = ["disabled"], NL = { class: "card-body" }, DL = {
  key: 0,
  class: "text-center"
}, xL = {
  key: 1,
  class: "row g-3"
}, kL = { class: "col-md-4" }, RL = { class: "d-flex align-items-center" }, IL = { class: "fw-bold" }, PL = { class: "col-md-4" }, ML = { class: "d-flex align-items-center" }, VL = { class: "fw-bold" }, LL = { class: "col-md-4" }, FL = { class: "d-flex align-items-center" }, BL = { class: "fw-bold" }, jL = { class: "col-12 mt-3" }, $L = { class: "border-top pt-3" }, UL = { class: "row g-3" }, HL = { class: "col-md-3" }, WL = { class: "d-flex align-items-center" }, KL = { class: "fw-bold" }, zL = { class: "col-md-3" }, qL = { class: "d-flex align-items-center" }, YL = { class: "fw-bold" }, XL = { class: "col-md-3" }, GL = { class: "d-flex align-items-center" }, QL = { class: "fw-bold" }, JL = { class: "col-md-3" }, ZL = { class: "d-flex align-items-center" }, e4 = { class: "fw-bold" }, t4 = /* @__PURE__ */ Ne({
  __name: "QueueStatusWidget",
  setup(e) {
    const t = b_(), n = U(!1), s = $(() => t.taskStatusCounts), o = $(() => {
      const { pending: a, failed: c, processing: f } = s.value;
      return c > 5 ? "Poor" : a + f > 10 ? "Busy" : c > 0 || a > 0 || f > 0 ? "Active" : "Healthy";
    }), r = $(() => {
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
    }), (a, c) => (N(), I("div", CL, [
      l("div", OL, [
        c[0] || (c[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-clock-rotate-left fa-fw" }),
          W(" Background Queue Status ")
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
        ], 8, TL)
      ]),
      l("div", NL, [
        n.value ? (N(), I("div", DL, c[1] || (c[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : (N(), I("div", xL, [
          l("div", kL, [
            l("div", RL, [
              c[3] || (c[3] = l("i", { class: "fas fa-check-circle fa-fw text-success me-2" }, null, -1)),
              l("div", null, [
                l("div", IL, M(o.value), 1),
                c[2] || (c[2] = l("small", { class: "text-muted" }, "Queue Health", -1))
              ])
            ])
          ]),
          l("div", PL, [
            l("div", ML, [
              c[5] || (c[5] = l("i", { class: "fas fa-hourglass-half fa-fw text-warning me-2" }, null, -1)),
              l("div", null, [
                l("div", VL, M(s.value.pending), 1),
                c[4] || (c[4] = l("small", { class: "text-muted" }, "Pending Tasks", -1))
              ])
            ])
          ]),
          l("div", LL, [
            l("div", FL, [
              c[7] || (c[7] = l("i", { class: "fas fa-exclamation-triangle fa-fw text-danger me-2" }, null, -1)),
              l("div", null, [
                l("div", BL, M(s.value.failed), 1),
                c[6] || (c[6] = l("small", { class: "text-muted" }, "Failed Tasks", -1))
              ])
            ])
          ]),
          l("div", jL, [
            l("div", $L, [
              l("div", UL, [
                l("div", HL, [
                  l("div", WL, [
                    c[9] || (c[9] = l("i", { class: "fas fa-list fa-fw text-primary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", KL, M(s.value.total), 1),
                      c[8] || (c[8] = l("small", { class: "text-muted" }, "Total Tasks", -1))
                    ])
                  ])
                ]),
                l("div", zL, [
                  l("div", qL, [
                    c[11] || (c[11] = l("i", { class: "fas fa-play fa-fw text-info me-2" }, null, -1)),
                    l("div", null, [
                      l("div", YL, M(s.value.processing), 1),
                      c[10] || (c[10] = l("small", { class: "text-muted" }, "Processing", -1))
                    ])
                  ])
                ]),
                l("div", XL, [
                  l("div", GL, [
                    c[13] || (c[13] = l("i", { class: "fas fa-check fa-fw text-success me-2" }, null, -1)),
                    l("div", null, [
                      l("div", QL, M(s.value.completed), 1),
                      c[12] || (c[12] = l("small", { class: "text-muted" }, "Completed", -1))
                    ])
                  ])
                ]),
                l("div", JL, [
                  l("div", ZL, [
                    c[15] || (c[15] = l("i", { class: "fas fa-percentage fa-fw text-secondary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", e4, M(r.value) + "%", 1),
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
}), n4 = /* @__PURE__ */ Yn(t4, [["__scopeId", "data-v-e7530d59"]]), s4 = { class: "p-3" }, o4 = { class: "d-flex justify-content-between align-items-center mb-4" }, r4 = { class: "d-flex gap-2" }, i4 = ["disabled"], a4 = ["disabled"], l4 = ["disabled"], c4 = { class: "mb-4" }, u4 = { class: "card mb-4" }, d4 = { class: "card-body" }, f4 = { class: "row g-3" }, p4 = { class: "col-md-3" }, h4 = { class: "col-md-3" }, m4 = { class: "col-md-3" }, g4 = { class: "col-md-3" }, v4 = ["value"], _4 = {
  key: 0,
  class: "row mt-3"
}, y4 = { class: "card" }, b4 = { class: "card-body p-0" }, E4 = {
  key: 0,
  class: "text-center py-5"
}, w4 = {
  key: 1,
  class: "d-flex flex-column gap-2 py-5 align-items-center"
}, A4 = { class: "" }, S4 = { class: "text-muted mb-0" }, C4 = { key: 2 }, O4 = { class: "table-responsive" }, T4 = { class: "table table-hover mb-0" }, N4 = { class: "d-flex flex-column" }, D4 = { class: "fw-semibold" }, x4 = {
  key: 0,
  class: "text-muted"
}, k4 = { class: "badge bg-secondary" }, R4 = ["title"], I4 = ["title"], P4 = { class: "text-end" }, M4 = { class: "btn-group btn-group-sm" }, V4 = ["onClick"], L4 = ["disabled", "onClick"], F4 = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, B4 = { class: "text-muted" }, j4 = { class: "d-flex gap-2" }, $4 = { class: "modal-dialog modal-lg" }, U4 = { class: "modal-content" }, H4 = {
  key: 0,
  class: "modal-body"
}, W4 = { class: "row" }, K4 = { class: "col-md-6" }, z4 = { class: "row" }, q4 = { class: "col-sm-8" }, Y4 = { class: "col-sm-8" }, X4 = { class: "col-sm-8" }, G4 = { class: "col-sm-8" }, Q4 = { class: "col-sm-8" }, J4 = { class: "col-md-6" }, Z4 = { class: "bg-light p-3 rounded small" }, eF = {
  key: 0,
  class: "row mt-3"
}, tF = { class: "col-12" }, nF = { class: "bg-light p-3 rounded small" }, sF = /* @__PURE__ */ Ne({
  __name: "TasksPage",
  setup(e) {
    const t = b_(), n = Qn(), s = U(""), o = U(""), r = U(""), i = U(null), a = U(null), c = [10, 25, 50, 100], f = $({
      get: () => t.pagination.page,
      set: (D) => t.setPage(D)
    }), u = $({
      get: () => t.pagination.limit,
      set: (D) => t.setLimit(D)
    }), d = $(() => s.value || o.value || r.value), p = $(() => {
      const D = t.filteredTasks.length, A = (t.pagination.page - 1) * t.pagination.limit + 1, F = Math.min(A + t.pagination.limit - 1, D);
      return { start: A, end: F, total: D };
    }), h = async () => {
      try {
        await t.fetchTasks();
      } catch (D) {
        console.error("Failed to refresh tasks:", D), n.showError("Failed to refresh tasks");
      }
    }, g = async () => {
      if (await n.confirmAction(
        "Full Synchronization",
        "Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances."
      )) {
        const A = await t.performFullSync();
        A?.success && n.showSuccess(`Full sync initiated successfully. Task ID: ${A.task_id}`);
      }
    }, v = async () => {
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
    }, m = () => {
      s.value = "", o.value = "", r.value = "", t.clearFilters();
    }, T = async (D) => {
      i.value = D, new window.bootstrap.Modal(a.value).show();
    }, R = async (D) => {
      await n.confirmAction(
        "Delete Task",
        `Are you sure you want to delete task ${D.id}? This action cannot be undone.`
      ) && await t.deleteTask(D.id) && n.showSuccess("Task deleted successfully.");
    }, O = (D) => {
      if (!D) return "Unknown";
      try {
        const A = new Date(D), ce = (/* @__PURE__ */ new Date()).getTime() - A.getTime(), Y = Math.floor(ce / 6e4), re = Math.floor(Y / 60), K = Math.floor(re / 24);
        return Y < 60 ? `${Y}m ago` : re < 24 ? `${re}h ago` : K < 7 ? `${K}d ago` : A.toLocaleDateString();
      } catch {
        return D;
      }
    }, x = (D) => {
      if (!D) return "Unknown";
      try {
        return new Date(D).toLocaleString();
      } catch {
        return D;
      }
    }, k = (D) => ({
      fhir_fetch: "FHIR Fetch",
      full_sync: "Full Sync",
      retry_failed: "Retry Failed",
      archive: "Archive",
      cleanup: "Cleanup"
    })[D] || D, S = (D) => ({
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
      const F = Qe("b-pagination"), ce = Qe("b-pagination-dropdown");
      return N(), I("div", s4, [
        l("div", o4, [
          A[9] || (A[9] = l("div", null, [
            l("h4", { class: "mb-1" }, "Task Management"),
            l("p", { class: "text-muted mb-0" }, "Monitor and manage background processing tasks")
          ], -1)),
          l("div", r4, [
            l("button", {
              class: "btn btn-warning btn-sm",
              onClick: g,
              disabled: oe(t).operationLoading
            }, [
              l("i", {
                class: pe(["fas fa-arrows-rotate fa-fw me-1", { "fa-spin": oe(t).operationLoading }])
              }, null, 2),
              A[6] || (A[6] = W(" Full Sync "))
            ], 8, i4),
            l("button", {
              class: "btn btn-outline-warning btn-sm",
              onClick: v,
              disabled: oe(t).operationLoading
            }, A[7] || (A[7] = [
              l("i", { class: "fas fa-exclamation-triangle fa-fw me-1" }, null, -1),
              W(" Retry Failed ")
            ]), 8, a4),
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: h,
              disabled: oe(t).loading
            }, [
              l("i", {
                class: pe(["fas fa-sync-alt fa-fw me-1", { "fa-spin": oe(t).loading }])
              }, null, 2),
              A[8] || (A[8] = W(" Refresh "))
            ], 8, l4)
          ])
        ]),
        l("div", c4, [
          fe(n4)
        ]),
        l("div", u4, [
          l("div", d4, [
            l("div", f4, [
              l("div", p4, [
                A[10] || (A[10] = l("label", { class: "form-label" }, "Search Tasks", -1)),
                nt(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by ID or type...",
                  "onUpdate:modelValue": A[0] || (A[0] = (Y) => s.value = Y),
                  onInput: _
                }, null, 544), [
                  [wo, s.value]
                ])
              ]),
              l("div", h4, [
                A[12] || (A[12] = l("label", { class: "form-label" }, "Status", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[1] || (A[1] = (Y) => o.value = Y),
                  onChange: y
                }, A[11] || (A[11] = [
                  Gi('<option value="">All Statuses</option><option value="pending">Pending</option><option value="processing">Processing</option><option value="completed">Completed</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [cs, o.value]
                ])
              ]),
              l("div", m4, [
                A[14] || (A[14] = l("label", { class: "form-label" }, "Task Type", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[2] || (A[2] = (Y) => r.value = Y),
                  onChange: b
                }, A[13] || (A[13] = [
                  Gi('<option value="">All Types</option><option value="fhir_fetch">FHIR Fetch</option><option value="full_sync">Full Sync</option><option value="retry_failed">Retry Failed</option><option value="archive">Archive</option><option value="cleanup">Cleanup</option>', 6)
                ]), 544), [
                  [cs, r.value]
                ])
              ]),
              l("div", g4, [
                A[15] || (A[15] = l("label", { class: "form-label" }, "Per Page", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[3] || (A[3] = (Y) => u.value = Y)
                }, [
                  (N(), I(Se, null, Je(c, (Y) => l("option", {
                    key: Y,
                    value: Y
                  }, M(Y), 9, v4)), 64))
                ], 512), [
                  [cs, u.value]
                ])
              ])
            ]),
            d.value ? (N(), I("div", _4, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: m
                }, A[16] || (A[16] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  W("Clear Filters ")
                ]))
              ])
            ])) : _e("", !0)
          ])
        ]),
        l("div", y4, [
          l("div", b4, [
            oe(t).loading ? (N(), I("div", E4, A[17] || (A[17] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading tasks...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading tasks...", -1)
            ]))) : oe(t).paginatedTasks.length === 0 ? (N(), I("div", w4, [
              A[18] || (A[18] = l("i", {
                class: "fas fa-tasks text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", A4, M(d.value ? "No tasks match your filters" : "No tasks found"), 1),
              l("span", S4, M(d.value ? "Try adjusting your search criteria." : "Tasks will appear here when created."), 1)
            ])) : (N(), I("div", C4, [
              l("div", O4, [
                l("table", T4, [
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
                    (N(!0), I(Se, null, Je(oe(t).paginatedTasks, (Y) => (N(), I("tr", {
                      key: Y.id
                    }, [
                      l("td", null, [
                        l("div", N4, [
                          l("span", D4, M(Y.id), 1),
                          Y.params.mrn ? (N(), I("small", x4, "MRN: " + M(Y.params.mrn), 1)) : _e("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: pe(S(Y.status))
                        }, [
                          l("i", {
                            class: pe([w(Y.status), "me-1"])
                          }, null, 2),
                          W(" " + M(Y.status.charAt(0).toUpperCase() + Y.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", k4, M(k(Y.key)), 1)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: x(Y.created_at)
                        }, M(O(Y.created_at)), 9, R4)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: x(Y.updated_at)
                        }, M(O(Y.updated_at)), 9, I4)
                      ]),
                      l("td", P4, [
                        l("div", M4, [
                          l("button", {
                            class: "btn btn-outline-info",
                            onClick: (re) => T(Y),
                            title: "View Details"
                          }, A[19] || (A[19] = [
                            l("i", { class: "fas fa-info-circle" }, null, -1)
                          ]), 8, V4),
                          l("button", {
                            class: "btn btn-outline-danger",
                            title: "Delete Task",
                            disabled: Y.status === "processing" || oe(t).isTaskDeleting(Y.id),
                            onClick: (re) => R(Y)
                          }, [
                            l("i", {
                              class: pe(["fas", oe(t).isTaskDeleting(Y.id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, L4)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        oe(t).filteredTasks.length > 0 ? (N(), I("div", F4, [
          l("small", B4, " Showing " + M(p.value.start) + "-" + M(p.value.end) + " of " + M(p.value.total) + " tasks ", 1),
          l("div", j4, [
            fe(F, {
              size: "sm",
              perPage: u.value,
              totalItems: oe(t).filteredTasks.length,
              modelValue: f.value,
              "onUpdate:modelValue": A[4] || (A[4] = (Y) => f.value = Y)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            fe(ce, {
              options: c,
              modelValue: u.value,
              "onUpdate:modelValue": A[5] || (A[5] = (Y) => u.value = Y)
            }, null, 8, ["modelValue"])
          ])
        ])) : _e("", !0),
        l("div", {
          class: "modal fade",
          id: "taskDetailsModal",
          tabindex: "-1",
          ref_key: "taskDetailsModal",
          ref: a
        }, [
          l("div", $4, [
            l("div", U4, [
              A[29] || (A[29] = l("div", { class: "modal-header" }, [
                l("h5", { class: "modal-title" }, "Task Details"),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "data-bs-dismiss": "modal"
                })
              ], -1)),
              i.value ? (N(), I("div", H4, [
                l("div", W4, [
                  l("div", K4, [
                    A[26] || (A[26] = l("h6", null, "Basic Information", -1)),
                    l("dl", z4, [
                      A[21] || (A[21] = l("dt", { class: "col-sm-4" }, "ID:", -1)),
                      l("dd", q4, [
                        l("code", null, M(i.value.id), 1)
                      ]),
                      A[22] || (A[22] = l("dt", { class: "col-sm-4" }, "Type:", -1)),
                      l("dd", Y4, M(k(i.value.key)), 1),
                      A[23] || (A[23] = l("dt", { class: "col-sm-4" }, "Status:", -1)),
                      l("dd", X4, [
                        l("span", {
                          class: pe(S(i.value.status))
                        }, M(i.value.status.charAt(0).toUpperCase() + i.value.status.slice(1)), 3)
                      ]),
                      A[24] || (A[24] = l("dt", { class: "col-sm-4" }, "Created:", -1)),
                      l("dd", G4, M(x(i.value.created_at)), 1),
                      A[25] || (A[25] = l("dt", { class: "col-sm-4" }, "Updated:", -1)),
                      l("dd", Q4, M(x(i.value.updated_at)), 1)
                    ])
                  ]),
                  l("div", J4, [
                    A[27] || (A[27] = l("h6", null, "Parameters", -1)),
                    l("pre", Z4, M(JSON.stringify(i.value.params, null, 2)), 1)
                  ])
                ]),
                Object.keys(i.value.metadata).length > 0 ? (N(), I("div", eF, [
                  l("div", tF, [
                    A[28] || (A[28] = l("h6", null, "Metadata", -1)),
                    l("pre", nF, M(JSON.stringify(i.value.metadata, null, 2)), 1)
                  ])
                ])) : _e("", !0)
              ])) : _e("", !0),
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
}), oF = { key: 0 }, rF = { class: "card" }, iF = { class: "card-body" }, aF = { class: "list-unstyled mb-0" }, lF = {
  key: 1,
  class: "text-center mt-3"
}, cF = { class: "d-flex gap-2 justify-content-end" }, uF = ["onClick", "disabled"], dF = ["onClick", "disabled"], fF = /* @__PURE__ */ Ne({
  __name: "ArchiveDeleteModal",
  emits: ["deleted"],
  setup(e, { expose: t, emit: n }) {
    const s = n, o = U(null), r = U(null), i = U(!1), a = async (h) => (r.value = h, i.value = !1, await o.value?.show() ?? !1), c = async (h) => {
      if (!(!r.value || i.value)) {
        i.value = !0;
        try {
          s("deleted", r.value.archive_id), h(!0);
        } catch (g) {
          console.error("Delete confirmation failed:", g);
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
      const g = 1024, v = ["Bytes", "KB", "MB", "GB"], _ = Math.floor(Math.log(h) / Math.log(g));
      return parseFloat((h / Math.pow(g, _)).toFixed(2)) + " " + v[_];
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
    return t({ show: a }), (h, g) => {
      const v = Qe("b-modal");
      return N(), et(v, {
        ref_key: "deleteModal",
        ref: o
      }, {
        title: be(() => g[0] || (g[0] = [
          W("Delete Archive")
        ])),
        footer: be(({ hide: _ }) => [
          l("div", cF, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (y) => _(!1),
              disabled: i.value
            }, g[12] || (g[12] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              W("Cancel ")
            ]), 8, uF),
            l("button", {
              class: "btn btn-sm btn-danger",
              type: "button",
              onClick: (y) => c(_),
              disabled: i.value
            }, [
              g[13] || (g[13] = l("i", { class: "fas fa-trash fa-fw me-1" }, null, -1)),
              W(" " + M(i.value ? "Deleting..." : "Delete Archive"), 1)
            ], 8, dF)
          ])
        ]),
        default: be(() => [
          r.value ? (N(), I("div", oF, [
            g[8] || (g[8] = l("div", { class: "alert alert-warning" }, [
              l("i", { class: "fas fa-exclamation-triangle me-2" }),
              l("strong", null, "Warning:"),
              W(" This action cannot be undone. ")
            ], -1)),
            g[9] || (g[9] = l("p", null, "Are you sure you want to delete this archive?", -1)),
            l("div", rF, [
              l("div", iF, [
                g[7] || (g[7] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                l("ul", aF, [
                  l("li", null, [
                    g[1] || (g[1] = l("strong", null, "Archive ID:", -1)),
                    W(" " + M(r.value.archive_id), 1)
                  ]),
                  l("li", null, [
                    g[2] || (g[2] = l("strong", null, "File Name:", -1)),
                    W(" " + M(r.value.file_name), 1)
                  ]),
                  l("li", null, [
                    g[3] || (g[3] = l("strong", null, "Created:", -1)),
                    W(" " + M(f(r.value.created_at)), 1)
                  ]),
                  l("li", null, [
                    g[4] || (g[4] = l("strong", null, "Size:", -1)),
                    W(" " + M(u(r.value.file_size)), 1)
                  ]),
                  l("li", null, [
                    g[5] || (g[5] = l("strong", null, "Resources:", -1)),
                    W(" " + M(r.value.total_resources), 1)
                  ]),
                  l("li", null, [
                    g[6] || (g[6] = l("strong", null, "Status:", -1)),
                    l("span", {
                      class: pe(d(r.value.status))
                    }, [
                      l("i", {
                        class: pe([p(r.value.status), "me-1"])
                      }, null, 2),
                      W(" " + M(r.value.status.charAt(0).toUpperCase() + r.value.status.slice(1)), 1)
                    ], 2)
                  ])
                ])
              ])
            ]),
            g[10] || (g[10] = l("div", { class: "mt-3" }, [
              l("p", { class: "mb-2" }, [
                l("strong", null, "This will:")
              ]),
              l("ul", { class: "mb-0" }, [
                l("li", null, "Remove the archive file from storage"),
                l("li", null, "Delete all archive metadata"),
                l("li", null, "Remove the archive from the archives list")
              ])
            ], -1))
          ])) : _e("", !0),
          i.value ? (N(), I("div", lF, g[11] || (g[11] = [
            l("div", {
              class: "spinner-border spinner-border-sm text-danger me-2",
              role: "status"
            }, [
              l("span", { class: "visually-hidden" }, "Deleting...")
            ], -1),
            l("span", null, "Deleting archive...", -1)
          ]))) : _e("", !0)
        ]),
        _: 1
      }, 512);
    };
  }
}), pF = { class: "p-3" }, hF = { class: "d-flex justify-content-between align-items-center mb-4" }, mF = ["disabled"], gF = { class: "card mb-4" }, vF = { class: "card-body" }, _F = { class: "row g-3" }, yF = { class: "col-md-3" }, bF = { class: "col-md-3" }, EF = { class: "col-md-3" }, wF = { class: "col-md-3" }, AF = ["value"], SF = {
  key: 0,
  class: "row mt-3"
}, CF = { class: "row mb-4" }, OF = { class: "col-md-3" }, TF = { class: "card text-center" }, NF = { class: "card-body py-3" }, DF = { class: "card-title text-primary mb-1" }, xF = { class: "col-md-3" }, kF = { class: "card text-center" }, RF = { class: "card-body py-3" }, IF = { class: "card-title text-success mb-1" }, PF = { class: "col-md-3" }, MF = { class: "card text-center" }, VF = { class: "card-body py-3" }, LF = { class: "card-title text-warning mb-1" }, FF = { class: "col-md-3" }, BF = { class: "card text-center" }, jF = { class: "card-body py-3" }, $F = { class: "card-title text-info mb-1" }, UF = { class: "card" }, HF = { class: "card-body p-0" }, WF = {
  key: 0,
  class: "text-center py-5"
}, KF = {
  key: 1,
  class: "text-center py-5"
}, zF = { class: "mt-3 mb-2" }, qF = { class: "text-muted mb-0" }, YF = { key: 2 }, XF = { class: "table-responsive" }, GF = { class: "table table-hover mb-0" }, QF = { class: "d-flex flex-column" }, JF = { class: "fw-semibold" }, ZF = { class: "text-muted" }, e3 = ["title"], t3 = { class: "d-flex flex-column" }, n3 = {
  key: 0,
  class: "text-danger"
}, s3 = { class: "text-end" }, o3 = { class: "btn-group btn-group-sm" }, r3 = ["onClick"], i3 = ["onClick", "disabled"], a3 = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, l3 = { class: "text-muted" }, c3 = { class: "d-flex gap-2" }, u3 = /* @__PURE__ */ Ne({
  __name: "ArchivesPage",
  setup(e) {
    const t = y_(), n = Qn(), s = U(null), o = U(""), r = U(""), i = U(""), a = $({
      get: () => t.pagination.page,
      set: (S) => t.setPage(S)
    }), c = $({
      get: () => t.pagination.limit,
      set: (S) => t.setLimit(S)
    });
    Tt(async () => {
      await p();
    });
    const f = $(() => o.value || r.value || i.value), u = $(() => {
      const S = t.completedArchives.reduce((w, D) => w + (D.file_size || 0), 0);
      return T(S);
    }), d = $(() => {
      const S = t.filteredArchives.length, w = (t.pagination.page - 1) * t.pagination.limit + 1, D = Math.min(w + t.pagination.limit - 1, S);
      return { start: w, end: D, total: S };
    }), p = async () => {
      try {
        await t.fetchArchives(), n.showSuccess("Archives refreshed successfully");
      } catch (S) {
        console.error("Failed to refresh archives:", S), n.showError("Failed to refresh archives");
      }
    }, h = () => {
      t.setFilter("searchQuery", o.value);
    }, g = () => {
      t.setFilter("status", r.value);
    }, v = () => {
      t.setFilter("processingMode", i.value);
    }, _ = () => {
      o.value = "", r.value = "", i.value = "", t.clearFilters();
    }, y = async (S) => {
      try {
        await t.downloadArchive(S.archive_id), n.showSuccess(`Archive ${S.file_name} downloaded successfully`);
      } catch (w) {
        console.error("Failed to download archive:", w), n.showError(`Failed to download archive ${S.file_name}`);
      }
    }, b = async (S) => {
      await s.value?.show(S);
    }, m = async (S) => {
      try {
        await t.deleteArchive(S), n.showSuccess("Archive deleted successfully");
      } catch (w) {
        console.error("Failed to delete archive:", w), n.showError("Failed to delete archive");
      }
    }, T = (S) => {
      if (S === 0) return "0 Bytes";
      const w = 1024, D = ["Bytes", "KB", "MB", "GB"], A = Math.floor(Math.log(S) / Math.log(w));
      return parseFloat((S / Math.pow(w, A)).toFixed(2)) + " " + D[A];
    }, R = (S) => {
      if (!S) return "Unknown";
      try {
        const w = new Date(S), A = (/* @__PURE__ */ new Date()).getTime() - w.getTime(), F = Math.floor(A / 6e4), ce = Math.floor(F / 60), Y = Math.floor(ce / 24);
        return F < 60 ? `${F}m ago` : ce < 24 ? `${ce}h ago` : Y < 7 ? `${Y}d ago` : w.toLocaleDateString();
      } catch {
        return S;
      }
    }, O = (S) => {
      if (!S) return "Unknown";
      try {
        return new Date(S).toLocaleString();
      } catch {
        return S;
      }
    }, x = (S) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[S] || "badge bg-secondary", k = (S) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[S] || "fas fa-question-circle";
    return Rt(() => t.filters, (S) => {
      o.value = S.searchQuery, r.value = S.status, i.value = S.processingMode;
    }, { deep: !0 }), Kr(() => {
    }), (S, w) => {
      const D = Qe("b-pagination"), A = Qe("b-pagination-dropdown");
      return N(), I("div", pF, [
        l("div", hF, [
          w[7] || (w[7] = l("div", null, [
            l("h4", { class: "mb-1" }, "Archive Management"),
            l("p", { class: "text-muted mb-0" }, "Manage and download your FHIR resource archives")
          ], -1)),
          l("div", null, [
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: p,
              disabled: oe(t).loading
            }, [
              l("i", {
                class: pe(["fas fa-sync-alt fa-fw me-1", { "fa-spin": oe(t).loading }])
              }, null, 2),
              w[6] || (w[6] = W(" Refresh "))
            ], 8, mF)
          ])
        ]),
        l("div", gF, [
          l("div", vF, [
            l("div", _F, [
              l("div", yF, [
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
              l("div", bF, [
                w[10] || (w[10] = l("label", { class: "form-label" }, "Status", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[1] || (w[1] = (F) => r.value = F),
                  onChange: g
                }, w[9] || (w[9] = [
                  Gi('<option value="">All Statuses</option><option value="completed">Completed</option><option value="processing">Processing</option><option value="pending">Pending</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [cs, r.value]
                ])
              ]),
              l("div", EF, [
                w[12] || (w[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[2] || (w[2] = (F) => i.value = F),
                  onChange: v
                }, w[11] || (w[11] = [
                  l("option", { value: "" }, "All Modes", -1),
                  l("option", { value: "immediate" }, "Immediate", -1),
                  l("option", { value: "background" }, "Background", -1)
                ]), 544), [
                  [cs, i.value]
                ])
              ]),
              l("div", wF, [
                w[13] || (w[13] = l("label", { class: "form-label" }, "Per Page", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[3] || (w[3] = (F) => c.value = F)
                }, [
                  (N(!0), I(Se, null, Je(oe(t).pagination.perPageOptions, (F) => (N(), I("option", {
                    key: F,
                    value: F
                  }, M(F), 9, AF))), 128))
                ], 512), [
                  [cs, c.value]
                ])
              ])
            ]),
            f.value ? (N(), I("div", SF, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: _
                }, w[14] || (w[14] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  W("Clear Filters ")
                ]))
              ])
            ])) : _e("", !0)
          ])
        ]),
        l("div", CF, [
          l("div", OF, [
            l("div", TF, [
              l("div", NF, [
                l("h5", DF, M(oe(t).archives.length), 1),
                w[15] || (w[15] = l("p", { class: "card-text small text-muted mb-0" }, "Total Archives", -1))
              ])
            ])
          ]),
          l("div", xF, [
            l("div", kF, [
              l("div", RF, [
                l("h5", IF, M(oe(t).completedArchives.length), 1),
                w[16] || (w[16] = l("p", { class: "card-text small text-muted mb-0" }, "Completed", -1))
              ])
            ])
          ]),
          l("div", PF, [
            l("div", MF, [
              l("div", VF, [
                l("h5", LF, M(oe(t).pendingArchives.length), 1),
                w[17] || (w[17] = l("p", { class: "card-text small text-muted mb-0" }, "In Progress", -1))
              ])
            ])
          ]),
          l("div", FF, [
            l("div", BF, [
              l("div", jF, [
                l("h5", $F, M(u.value), 1),
                w[18] || (w[18] = l("p", { class: "card-text small text-muted mb-0" }, "Total Size", -1))
              ])
            ])
          ])
        ]),
        l("div", UF, [
          l("div", HF, [
            oe(t).loading ? (N(), I("div", WF, w[19] || (w[19] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading archives...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading archives...", -1)
            ]))) : oe(t).paginatedArchives.length === 0 ? (N(), I("div", KF, [
              w[20] || (w[20] = l("i", {
                class: "fas fa-archive text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", zF, M(f.value ? "No archives match your filters" : "No archives found"), 1),
              l("p", qF, M(f.value ? "Try adjusting your search criteria." : "Archives will appear here when created."), 1)
            ])) : (N(), I("div", YF, [
              l("div", XF, [
                l("table", GF, [
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
                    (N(!0), I(Se, null, Je(oe(t).paginatedArchives, (F) => (N(), I("tr", {
                      key: F.archive_id
                    }, [
                      l("td", null, [
                        l("div", QF, [
                          l("span", JF, M(F.file_name), 1),
                          l("small", ZF, M(F.archive_id), 1)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: pe(x(F.status))
                        }, [
                          l("i", {
                            class: pe([k(F.status), "me-1"])
                          }, null, 2),
                          W(" " + M(F.status.charAt(0).toUpperCase() + F.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: O(F.created_at)
                        }, M(R(F.created_at)), 9, e3)
                      ]),
                      l("td", null, M(T(F.file_size)), 1),
                      l("td", null, [
                        l("div", t3, [
                          l("span", null, M(F.total_resources), 1),
                          F.failed_files > 0 ? (N(), I("small", n3, M(F.failed_files) + " failed ", 1)) : _e("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: pe(["badge", F.processing_mode === "immediate" ? "bg-info" : "bg-secondary"])
                        }, M(F.processing_mode), 3)
                      ]),
                      l("td", s3, [
                        l("div", o3, [
                          F.status === "completed" && F.download_url ? (N(), I("button", {
                            key: 0,
                            class: "btn btn-outline-primary",
                            onClick: (ce) => y(F),
                            title: "Download Archive"
                          }, w[21] || (w[21] = [
                            l("i", { class: "fas fa-download" }, null, -1)
                          ]), 8, r3)) : _e("", !0),
                          l("button", {
                            class: "btn btn-outline-danger",
                            onClick: (ce) => b(F),
                            title: "Delete Archive",
                            disabled: oe(t).isArchiveDeleting(F.archive_id)
                          }, [
                            l("i", {
                              class: pe(["fas", oe(t).isArchiveDeleting(F.archive_id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, i3)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        oe(t).filteredArchives.length > 0 ? (N(), I("div", a3, [
          l("small", l3, " Showing " + M(d.value.start) + "-" + M(d.value.end) + " of " + M(d.value.total) + " archives ", 1),
          l("div", c3, [
            fe(D, {
              size: "sm",
              perPage: c.value,
              totalItems: oe(t).filteredArchives.length,
              modelValue: a.value,
              "onUpdate:modelValue": w[4] || (w[4] = (F) => a.value = F)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            fe(A, {
              options: oe(t).pagination.perPageOptions,
              modelValue: c.value,
              "onUpdate:modelValue": w[5] || (w[5] = (F) => c.value = F)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : _e("", !0),
        (N(), et(Hr, { to: "body" }, [
          fe(fF, {
            ref_key: "deleteModal",
            ref: s,
            onDeleted: m
          }, null, 512)
        ]))
      ]);
    };
  }
}), d3 = {}, f3 = { class: "error-wrapper" }, p3 = { class: "mt-5" };
function h3(e, t) {
  const n = Qe("router-link");
  return N(), I("div", f3, [
    Pe(e.$slots, "title", {}, () => [
      t[0] || (t[0] = l("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    Pe(e.$slots, "description", {}, () => [
      t[1] || (t[1] = l("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    Pe(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = l("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    l("div", p3, [
      fe(n, {
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
const m3 = /* @__PURE__ */ Yn(d3, [["render", h3], ["__scopeId", "data-v-d4f8fed2"]]), g3 = { class: "card shadow-sm" }, v3 = { class: "card-body" }, _3 = { class: "text-center" }, y3 = {
  key: 0,
  class: "lead text-danger"
}, b3 = {
  key: 1,
  class: "text-muted"
}, E3 = /* @__PURE__ */ Ne({
  __name: "ErrorPage",
  setup(e) {
    const n = Pg().query.message;
    return (s, o) => {
      const r = Qe("router-link");
      return N(), I("div", g3, [
        l("div", v3, [
          l("div", _3, [
            o[1] || (o[1] = l("h1", { class: "display-4" }, "Something went wrong", -1)),
            oe(n) ? (N(), I("p", y3, "Error: " + M(oe(n)), 1)) : (N(), I("p", b3, "We're sorry for the inconvenience. Please try again later.")),
            fe(r, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: be(() => o[0] || (o[0] = [
                W("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), w3 = [
  {
    path: "/",
    component: YA,
    children: [
      { path: "", name: "home", component: T2 },
      { path: "setup", name: "setup", component: dI },
      { path: "monitor", name: "monitor", component: SL },
      { path: "tasks", name: "tasks", component: sF },
      { path: "archives", name: "archives", component: u3 },
      { path: "error", name: "error", component: E3 },
      { path: "/:pathMatch(.*)*", component: m3 }
    ]
  }
];
let _i;
const Hp = () => _i || (_i = FA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: Yw(),
  routes: w3
}), _i), A3 = {
  key: 0,
  class: "alert alert-danger"
}, S3 = { style: { "word-break": "break-all" } }, C3 = /* @__PURE__ */ Ne({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = U(), n = Wo(), { errors: s } = $o(n), o = (r) => JSON.stringify(r);
    return ma(async () => {
      if (s.value?.length === 0) return;
      const r = t.value;
      r && (await r.show(), n.resetErrors());
    }), (r, i) => {
      const a = Qe("b-modal");
      return N(), et(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: be(() => i[0] || (i[0] = [
          l("span", null, "Error", -1)
        ])),
        default: be(() => [
          (N(!0), I(Se, null, Je(oe(s), (c, f) => (N(), I(Se, { key: f }, [
            c ? (N(), I("div", A3, [
              l("div", S3, M(o(c)), 1)
            ])) : _e("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), O3 = /* @__PURE__ */ Ne({
  __name: "App",
  setup(e) {
    const t = Yo();
    return Tt(() => {
      t.fetchProjectSettings();
    }), (n, s) => {
      const o = Qe("router-view");
      return N(), I("div", null, [
        fe(o),
        fe(C3)
      ]);
    };
  }
}), K3 = (e) => {
  const t = ba(O3);
  t.config.errorHandler = (o, r, i) => {
    console.error("💥 Vue Error:", o), console.error("📍 Component:", r), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      o instanceof Error ? Hp().push({ name: "error", query: { message: o.message } }) : console.error("Unhandled non-Error exception:", o);
    });
  };
  const n = iw();
  t.use(dR), t.use(n);
  const s = Hp();
  return t.use(s), t.mount(e), t;
};
export {
  K3 as default
};
