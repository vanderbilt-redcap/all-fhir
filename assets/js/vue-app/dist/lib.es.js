var Wp = {};
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
const Ve = Wp.NODE_ENV !== "production" ? Object.freeze({}) : {}, vo = Wp.NODE_ENV !== "production" ? Object.freeze([]) : [], ct = () => {
}, E_ = () => !1, Fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Mi = (e) => e.startsWith("onUpdate:"), Qe = Object.assign, _c = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, w_ = Object.prototype.hasOwnProperty, Me = (e, t) => w_.call(e, t), de = Array.isArray, ks = (e) => Br(e) === "[object Map]", Mo = (e) => Br(e) === "[object Set]", wu = (e) => Br(e) === "[object Date]", ve = (e) => typeof e == "function", qe = (e) => typeof e == "string", rn = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", yc = (e) => (Fe(e) || ve(e)) && ve(e.then) && ve(e.catch), Kp = Object.prototype.toString, Br = (e) => Kp.call(e), bc = (e) => Br(e).slice(8, -1), zp = (e) => Br(e) === "[object Object]", Ec = (e) => qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cr = /* @__PURE__ */ zn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), A_ = /* @__PURE__ */ zn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ia = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, S_ = /-(\w)/g, vt = ia(
  (e) => e.replace(S_, (t, n) => n ? n.toUpperCase() : "")
), O_ = /\B([A-Z])/g, Tn = ia(
  (e) => e.replace(O_, "-$1").toLowerCase()
), Bs = ia((e) => e.charAt(0).toUpperCase() + e.slice(1)), ws = ia(
  (e) => e ? `on${Bs(e)}` : ""
), xt = (e, t) => !Object.is(e, t), ao = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Er = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Li = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, C_ = (e) => {
  const t = qe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Au;
const jr = () => Au || (Au = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (de(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = qe(s) ? x_(s) : Vt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (qe(e) || Fe(e))
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
function ue(e) {
  let t = "";
  if (qe(e))
    t = e;
  else if (de(e))
    for (let n = 0; n < e.length; n++) {
      const s = ue(e[n]);
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
  return t && !qe(t) && (e.class = ue(t)), n && (e.style = Vt(n)), e;
}
const k_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", R_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", I_ = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", P_ = /* @__PURE__ */ zn(k_), V_ = /* @__PURE__ */ zn(R_), M_ = /* @__PURE__ */ zn(I_), L_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", F_ = /* @__PURE__ */ zn(L_);
function qp(e) {
  return !!e || e === "";
}
function B_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = js(e[s], t[s]);
  return n;
}
function js(e, t) {
  if (e === t) return !0;
  let n = wu(e), s = wu(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = rn(e), s = rn(t), n || s)
    return e === t;
  if (n = de(e), s = de(t), n || s)
    return n && s ? B_(e, t) : !1;
  if (n = Fe(e), s = Fe(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !js(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function wc(e, t) {
  return e.findIndex((n) => js(n, t));
}
const Yp = (e) => !!(e && e.__v_isRef === !0), B = (e) => qe(e) ? e : e == null ? "" : de(e) || Fe(e) && (e.toString === Kp || !ve(e.toString)) ? Yp(e) ? B(e.value) : JSON.stringify(e, Xp, 2) : String(e), Xp = (e, t) => Yp(t) ? Xp(e, t.value) : ks(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Ba(s, r) + " =>"] = o, n),
    {}
  )
} : Mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ba(n))
} : rn(t) ? Ba(t) : Fe(t) && !de(t) && !zp(t) ? String(t) : t, Ba = (e, t = "") => {
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
class Gp {
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
function Qp(e) {
  return new Gp(e);
}
function Jp() {
  return ht;
}
function j_(e, t = !1) {
  ht ? ht.cleanups.push(e) : We.NODE_ENV !== "production" && !t && Yt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let He;
const ja = /* @__PURE__ */ new WeakSet();
class Zp {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || th(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Su(this), nh(this);
    const t = He, n = sn;
    He = this, sn = !0;
    try {
      return this.fn();
    } finally {
      We.NODE_ENV !== "production" && He !== this && Yt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), sh(this), He = t, sn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Oc(t);
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
    s.version === -1 ? (s === n && (n = o), Oc(s), U_(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
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
  const t = e.dep, n = He, s = sn;
  He = e, sn = !0;
  try {
    nh(e);
    const o = e.fn(e._value);
    (t.version === 0 || xt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    He = n, sn = s, sh(e), e.flags &= -3;
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
function U_(e) {
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
    const n = He;
    He = void 0;
    try {
      t();
    } finally {
      He = n;
    }
  }
}
let wr = 0;
class H_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class aa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, We.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!He || !sn || He === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== He)
      n = this.activeLink = new H_(He, this), He.deps ? (n.prevDep = He.depsTail, He.depsTail.nextDep = n, He.depsTail = n) : He.deps = He.depsTail = n, ih(n);
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
    this.version++, wr++, this.notify(t);
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
function ih(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ih(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), We.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Fi = /* @__PURE__ */ new WeakMap(), Rs = Symbol(
  We.NODE_ENV !== "production" ? "Object iterate" : ""
), Ol = Symbol(
  We.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ar = Symbol(
  We.NODE_ENV !== "production" ? "Array iterate" : ""
);
function lt(e, t, n) {
  if (sn && He) {
    let s = Fi.get(e);
    s || Fi.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new aa()), o.map = s, o.key = n), We.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function bn(e, t, n, s, o, r) {
  const i = Fi.get(e);
  if (!i) {
    wr++;
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
      i.forEach((d, h) => {
        (h === "length" || h === Ar || !rn(h) && h >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Ar)), t) {
        case "add":
          c ? f && a(i.get("length")) : (a(i.get(Rs)), ks(e) && a(i.get(Ol)));
          break;
        case "delete":
          c || (a(i.get(Rs)), ks(e) && a(i.get(Ol)));
          break;
        case "set":
          ks(e) && a(i.get(Rs));
          break;
      }
  }
  Sc();
}
function $_(e, t) {
  const n = Fi.get(e);
  return n && n.get(t);
}
function eo(e) {
  const t = ye(e);
  return t === e ? t : (lt(t, "iterate", Ar), St(e) ? t : t.map(pt));
}
function la(e) {
  return lt(e = ye(e), "iterate", Ar), e;
}
const W_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ua(this, Symbol.iterator, pt);
  },
  concat(...e) {
    return eo(this).concat(
      ...e.map((t) => de(t) ? eo(t) : t)
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
    return eo(this).join(e);
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
    return Ou(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ou(this, "reduceRight", e, t);
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
    return eo(this).toReversed();
  },
  toSorted(e) {
    return eo(this).toSorted(e);
  },
  toSpliced(...e) {
    return eo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xo(this, "unshift", e);
  },
  values() {
    return Ua(this, "values", pt);
  }
};
function Ua(e, t, n) {
  const s = la(e), o = s[t]();
  return s !== e && !St(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const K_ = Array.prototype;
function Pn(e, t, n, s, o, r) {
  const i = la(e), a = i !== e && !St(e), c = i[t];
  if (c !== K_[t]) {
    const d = c.apply(e, r);
    return a ? pt(d) : d;
  }
  let f = n;
  i !== e && (a ? f = function(d, h) {
    return n.call(this, pt(d), h, e);
  } : n.length > 2 && (f = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const u = c.call(i, f, s);
  return a && o ? o(u) : u;
}
function Ou(e, t, n, s) {
  const o = la(e);
  let r = n;
  return o !== e && (St(e) ? n.length > 3 && (r = function(i, a, c) {
    return n.call(this, i, a, c, e);
  }) : r = function(i, a, c) {
    return n.call(this, i, pt(a), c, e);
  }), o[t](r, ...s);
}
function Ha(e, t, n) {
  const s = ye(e);
  lt(s, "iterate", Ar);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Sr(n[0]) ? (n[0] = ye(n[0]), s[t](...n)) : o;
}
function Xo(e, t, n = []) {
  an(), Ac();
  const s = ye(e)[t].apply(e, n);
  return Sc(), ln(), s;
}
const z_ = /* @__PURE__ */ zn("__proto__,__v_isRef,__isVue"), ah = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rn)
);
function q_(e) {
  rn(e) || (e = String(e));
  const t = ye(this);
  return lt(t, "has", e), t.hasOwnProperty(e);
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
    const i = de(t);
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
      Ke(t) ? t : s
    );
    return (rn(n) ? ah.has(n) : z_(n)) || (o || lt(t, "get", n), r) ? a : Ke(a) ? i && Ec(n) ? a : a.value : Fe(a) ? o ? Cc(a) : Us(a) : a;
  }
}
class ch extends lh {
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
    const i = de(t) && Ec(n) ? Number(n) < t.length : Me(t, n), a = Reflect.set(
      t,
      n,
      s,
      Ke(t) ? t : o
    );
    return t === ye(o) && (i ? xt(s, r) && bn(t, "set", n, s, r) : bn(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = Me(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && bn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!rn(n) || !ah.has(n)) && lt(t, "has", n), s;
  }
  ownKeys(t) {
    return lt(
      t,
      "iterate",
      de(t) ? "length" : Rs
    ), Reflect.ownKeys(t);
  }
}
class uh extends lh {
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
const Y_ = /* @__PURE__ */ new ch(), X_ = /* @__PURE__ */ new uh(), G_ = /* @__PURE__ */ new ch(!0), Q_ = /* @__PURE__ */ new uh(!0), Cl = (e) => e, ni = (e) => Reflect.getPrototypeOf(e);
function J_(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = ye(o), i = ks(r), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, f = o[e](...s), u = n ? Cl : t ? Bi : pt;
    return !t && lt(
      r,
      "iterate",
      c ? Ol : Rs
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
function si(e) {
  return function(...t) {
    if (We.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Yt(
        `${Bs(e)} operation ${n}failed: target is readonly.`,
        ye(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Z_(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = ye(r), a = ye(o);
      e || (xt(o, a) && lt(i, "get", o), lt(i, "get", a));
      const { has: c } = ni(i), f = t ? Cl : e ? Bi : pt;
      if (c.call(i, o))
        return f(r.get(o));
      if (c.call(i, a))
        return f(r.get(a));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && lt(ye(o), "iterate", Rs), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = ye(r), a = ye(o);
      return e || (xt(o, a) && lt(i, "has", o), lt(i, "has", a)), o === a ? r.has(o) : r.has(o) || r.has(a);
    },
    forEach(o, r) {
      const i = this, a = i.__v_raw, c = ye(a), f = t ? Cl : e ? Bi : pt;
      return !e && lt(c, "iterate", Rs), a.forEach((u, d) => o.call(r, f(u), f(d), i));
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
        f ? We.NODE_ENV !== "production" && Cu(i, a, o) : (o = ye(o), f = a.call(i, o));
        const u = c.call(i, o);
        return i.set(o, r), f ? xt(r, u) && bn(i, "set", o, r, u) : bn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ye(this), { has: i, get: a } = ni(r);
        let c = i.call(r, o);
        c ? We.NODE_ENV !== "production" && Cu(r, i, o) : (o = ye(o), c = i.call(r, o));
        const f = a ? a.call(r, o) : void 0, u = r.delete(o);
        return c && bn(r, "delete", o, void 0, f), u;
      },
      clear() {
        const o = ye(this), r = o.size !== 0, i = We.NODE_ENV !== "production" ? ks(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
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
function ca(e, t) {
  const n = Z_(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Me(n, o) && o in s ? n : s,
    o,
    r
  );
}
const ey = {
  get: /* @__PURE__ */ ca(!1, !1)
}, ty = {
  get: /* @__PURE__ */ ca(!1, !0)
}, ny = {
  get: /* @__PURE__ */ ca(!0, !1)
}, sy = {
  get: /* @__PURE__ */ ca(!0, !0)
};
function Cu(e, t, n) {
  const s = ye(n);
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
function Us(e) {
  return Nn(e) ? e : ua(
    e,
    !1,
    Y_,
    ey,
    dh
  );
}
function mh(e) {
  return ua(
    e,
    !1,
    G_,
    ty,
    fh
  );
}
function Cc(e) {
  return ua(
    e,
    !0,
    X_,
    ny,
    ph
  );
}
function wn(e) {
  return ua(
    e,
    !0,
    Q_,
    sy,
    hh
  );
}
function ua(e, t, n, s, o) {
  if (!Fe(e))
    return We.NODE_ENV !== "production" && Yt(
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
  return Nn(e) ? on(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Nn(e) {
  return !!(e && e.__v_isReadonly);
}
function St(e) {
  return !!(e && e.__v_isShallow);
}
function Sr(e) {
  return e ? !!e.__v_raw : !1;
}
function ye(e) {
  const t = e && e.__v_raw;
  return t ? ye(t) : e;
}
function ss(e) {
  return !Me(e, "__v_skip") && Object.isExtensible(e) && Er(e, "__v_skip", !0), e;
}
const pt = (e) => Fe(e) ? Us(e) : e, Bi = (e) => Fe(e) ? Cc(e) : e;
function Ke(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function G(e) {
  return vh(e, !1);
}
function gh(e) {
  return vh(e, !0);
}
function vh(e, t) {
  return Ke(e) ? e : new iy(e, t);
}
class iy {
  constructor(t, n) {
    this.dep = new aa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ye(t), this._value = n ? t : pt(t), this.__v_isShallow = n;
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
function te(e) {
  return Ke(e) ? e.value : e;
}
const ay = {
  get: (e, t, n) => t === "__v_raw" ? e : te(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ke(o) && !Ke(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function _h(e) {
  return on(e) ? e : new Proxy(e, ay);
}
class ly {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new aa(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function cy(e) {
  return new ly(e);
}
function cn(e) {
  We.NODE_ENV !== "production" && !Sr(e) && Yt("toRefs() expects a reactive object but received a plain one.");
  const t = de(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = yh(e, n);
  return t;
}
class uy {
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
    return $_(ye(this._object), this._key);
  }
}
class dy {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function vi(e, t, n) {
  return Ke(e) ? e : ve(e) ? new dy(e) : Fe(e) && arguments.length > 1 ? yh(e, t, n) : G(e);
}
function yh(e, t, n) {
  const s = e[t];
  return Ke(s) ? s : new uy(e, t, n);
}
class fy {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new aa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    He !== this)
      return th(this, !0), !0;
  }
  get value() {
    const t = We.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return oh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : We.NODE_ENV !== "production" && Yt("Write operation failed: computed value is readonly");
  }
}
function py(e, t, n = !1) {
  let s, o;
  return ve(e) ? s = e : (s = e.get, o = e.set), new fy(s, o, n);
}
const oi = {}, ji = /* @__PURE__ */ new WeakMap();
let As;
function hy(e, t = !1, n = As) {
  if (n) {
    let s = ji.get(n);
    s || ji.set(n, s = []), s.push(e);
  } else We.NODE_ENV !== "production" && !t && Yt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function my(e, t, n = Ve) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: a, call: c } = n, f = (I) => {
    (n.onWarn || Yt)(
      "Invalid watch source: ",
      I,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (I) => o ? I : St(I) || o === !1 || o === 0 ? jn(I, 1) : jn(I);
  let d, h, p, g, v = !1, _ = !1;
  if (Ke(e) ? (h = () => e.value, v = St(e)) : on(e) ? (h = () => u(e), v = !0) : de(e) ? (_ = !0, v = e.some((I) => on(I) || St(I)), h = () => e.map((I) => {
    if (Ke(I))
      return I.value;
    if (on(I))
      return u(I);
    if (ve(I))
      return c ? c(I, 2) : I();
    We.NODE_ENV !== "production" && f(I);
  })) : ve(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (p) {
      an();
      try {
        p();
      } finally {
        ln();
      }
    }
    const I = As;
    As = d;
    try {
      return c ? c(e, 3, [g]) : e(g);
    } finally {
      As = I;
    }
  } : (h = ct, We.NODE_ENV !== "production" && f(e)), t && o) {
    const I = h, C = o === !0 ? 1 / 0 : o;
    h = () => jn(I(), C);
  }
  const y = Jp(), E = () => {
    d.stop(), y && y.active && _c(y.effects, d);
  };
  if (r && t) {
    const I = t;
    t = (...C) => {
      I(...C), E();
    };
  }
  let m = _ ? new Array(e.length).fill(oi) : oi;
  const D = (I) => {
    if (!(!(d.flags & 1) || !d.dirty && !I))
      if (t) {
        const C = d.run();
        if (o || v || (_ ? C.some((A, T) => xt(A, m[T])) : xt(C, m))) {
          p && p();
          const A = As;
          As = d;
          try {
            const T = [
              C,
              // pass undefined as the old value when it's changed for the first time
              m === oi ? void 0 : _ && m[0] === oi ? [] : m,
              g
            ];
            m = C, c ? c(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            As = A;
          }
        }
      } else
        d.run();
  };
  return a && a(D), d = new Zp(h), d.scheduler = i ? () => i(D, !1) : D, g = (I) => hy(I, !1, d), p = d.onStop = () => {
    const I = ji.get(d);
    if (I) {
      if (c)
        c(I, 4);
      else
        for (const C of I) C();
      ji.delete(d);
    }
  }, We.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? D(!0) : m = d.run() : i ? i(D.bind(null, !0), !0) : d.run(), E.pause = d.pause.bind(d), E.resume = d.resume.bind(d), E.stop = E, E;
}
function jn(e, t = 1 / 0, n) {
  if (t <= 0 || !Fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ke(e))
    jn(e.value, t, n);
  else if (de(e))
    for (let s = 0; s < e.length; s++)
      jn(e[s], t, n);
  else if (Mo(e) || ks(e))
    e.forEach((s) => {
      jn(s, t, n);
    });
  else if (zp(e)) {
    for (const s in e)
      jn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && jn(e[s], t, n);
  }
  return e;
}
var x = {};
const Is = [];
function _i(e) {
  Is.push(e);
}
function yi() {
  Is.pop();
}
let $a = !1;
function Y(e, ...t) {
  if ($a) return;
  $a = !0, an();
  const n = Is.length ? Is[Is.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = gy();
  if (s)
    Lo(
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
          ({ vnode: r }) => `at <${va(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...vy(o)), console.warn(...r);
  }
  ln(), $a = !1;
}
function gy() {
  let e = Is[Is.length - 1];
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
function vy(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ..._y(n));
  }), t;
}
function _y({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${va(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...yy(e.props), r] : [o + r];
}
function yy(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...bh(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function bh(e, t, n) {
  return qe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ke(t) ? (t = bh(e, ye(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ve(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ye(t), n ? t : [`${e}=`, t]);
}
function by(e, t) {
  x.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? Y(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && Y(`${t} is NaN - the duration expression might be incorrect.`));
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
function Lo(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Ur(o, t, n);
  }
}
function un(e, t, n, s) {
  if (ve(e)) {
    const o = Lo(e, t, n, s);
    return o && yc(o) && o.catch((r) => {
      Ur(r, t, n);
    }), o;
  }
  if (de(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(un(e[r], t, n, s));
    return o;
  } else x.NODE_ENV !== "production" && Y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ur(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Ve;
  if (t) {
    let a = t.parent;
    const c = t.proxy, f = x.NODE_ENV !== "production" ? Tc[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      an(), Lo(r, null, 10, [
        e,
        c,
        f
      ]), ln();
      return;
    }
  }
  Ey(e, n, o, s, i);
}
function Ey(e, t, n, s = !0, o = !1) {
  if (x.NODE_ENV !== "production") {
    const r = Tc[t];
    if (n && _i(n), Y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && yi(), s)
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
const _o = [];
let Jn = null, lo = 0;
const Eh = /* @__PURE__ */ Promise.resolve();
let Ui = null;
const wy = 100;
function Eo(e) {
  const t = Ui || Eh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ay(e) {
  let t = yn + 1, n = wt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = wt[s], r = Or(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function da(e) {
  if (!(e.flags & 1)) {
    const t = Or(e), n = wt[wt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Or(n) ? wt.push(e) : wt.splice(Ay(t), 0, e), e.flags |= 1, wh();
  }
}
function wh() {
  Ui || (Ui = Eh.then(Oh));
}
function Ah(e) {
  de(e) ? _o.push(...e) : Jn && e.id === -1 ? Jn.splice(lo + 1, 0, e) : e.flags & 1 || (_o.push(e), e.flags |= 1), wh();
}
function Tu(e, t, n = yn + 1) {
  for (x.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < wt.length; n++) {
    const s = wt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || x.NODE_ENV !== "production" && Nc(t, s))
        continue;
      wt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Sh(e) {
  if (_o.length) {
    const t = [...new Set(_o)].sort(
      (n, s) => Or(n) - Or(s)
    );
    if (_o.length = 0, Jn) {
      Jn.push(...t);
      return;
    }
    for (Jn = t, x.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), lo = 0; lo < Jn.length; lo++) {
      const n = Jn[lo];
      x.NODE_ENV !== "production" && Nc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Jn = null, lo = 0;
  }
}
const Or = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Oh(e) {
  x.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = x.NODE_ENV !== "production" ? (n) => Nc(e, n) : ct;
  try {
    for (yn = 0; yn < wt.length; yn++) {
      const n = wt[yn];
      if (n && !(n.flags & 8)) {
        if (x.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Lo(
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
    yn = -1, wt.length = 0, Sh(e), Ui = null, (wt.length || _o.length) && Oh(e);
  }
}
function Nc(e, t) {
  const n = e.get(t) || 0;
  if (n > wy) {
    const s = t.i, o = s && Vc(s.type);
    return Ur(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let tn = !1;
const bi = /* @__PURE__ */ new Map();
x.NODE_ENV !== "production" && (jr().__VUE_HMR_RUNTIME__ = {
  createRecord: Wa(Ch),
  rerender: Wa(Cy),
  reload: Wa(Ty)
});
const Hs = /* @__PURE__ */ new Map();
function Sy(e) {
  const t = e.type.__hmrId;
  let n = Hs.get(t);
  n || (Ch(t, e.type), n = Hs.get(t)), n.instances.add(e);
}
function Oy(e) {
  Hs.get(e.type.__hmrId).instances.delete(e);
}
function Ch(e, t) {
  return Hs.has(e) ? !1 : (Hs.set(e, {
    initialDef: Hi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Hi(e) {
  return vm(e) ? e.__vccOpts : e;
}
function Cy(e, t) {
  const n = Hs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Hi(s.type).render = t), s.renderCache = [], tn = !0, s.update(), tn = !1;
  }));
}
function Ty(e, t) {
  const n = Hs.get(e);
  if (!n) return;
  t = Hi(t), Nu(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Hi(r.type);
    let a = bi.get(i);
    a || (i !== n.initialDef && Nu(i, t), bi.set(i, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? da(() => {
      tn = !0, r.parent.update(), tn = !1, a.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Ah(() => {
    bi.clear();
  });
}
function Nu(e, t) {
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
function Hr(e, ...t) {
  En ? En.emit(e, ...t) : Tl || or.push({ event: e, args: t });
}
function Th(e, t) {
  var n, s;
  En = e, En ? (En.enabled = !0, or.forEach(({ event: o, args: r }) => En.emit(o, ...r)), or = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Th(r, t);
  }), setTimeout(() => {
    En || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Tl = !0, or = []);
  }, 3e3)) : (Tl = !0, or = []);
}
function Ny(e, t) {
  Hr("app:init", e, t, {
    Fragment: we,
    Text: Wr,
    Comment: ot,
    Static: hr
  });
}
function Dy(e) {
  Hr("app:unmount", e);
}
const xy = /* @__PURE__ */ Dc(
  "component:added"
  /* COMPONENT_ADDED */
), Nh = /* @__PURE__ */ Dc(
  "component:updated"
  /* COMPONENT_UPDATED */
), ky = /* @__PURE__ */ Dc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Ry = (e) => {
  En && typeof En.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !En.cleanupBuffer(e) && ky(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Dc(e) {
  return (t) => {
    Hr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Iy = /* @__PURE__ */ Dh(
  "perf:start"
  /* PERFORMANCE_START */
), Py = /* @__PURE__ */ Dh(
  "perf:end"
  /* PERFORMANCE_END */
);
function Dh(e) {
  return (t, n, s) => {
    Hr(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Vy(e, t, n) {
  Hr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let tt = null, xh = null;
function $i(e) {
  const t = tt;
  return tt = e, xh = e && e.type.__scopeId || null, t;
}
function be(e, t = tt, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ku(-1);
    const r = $i(t);
    let i;
    try {
      i = e(...o);
    } finally {
      $i(r), s._d && Ku(1);
    }
    return x.NODE_ENV !== "production" && Nh(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function kh(e) {
  A_(e) && Y("Do not use built-in directive ids as custom directive id: " + e);
}
function et(e, t) {
  if (tt === null)
    return x.NODE_ENV !== "production" && Y("withDirectives can only be used inside render functions."), e;
  const n = ga(tt), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, a, c = Ve] = t[o];
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
function _s(e, t, n, s) {
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
const Rh = Symbol("_vte"), Ih = (e) => e.__isTeleport, Ps = (e) => e && (e.disabled || e.disabled === ""), Du = (e) => e && (e.defer || e.defer === ""), xu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ku = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Nl = (e, t) => {
  const n = e && e.to;
  if (qe(n))
    if (t) {
      const s = t(n);
      return x.NODE_ENV !== "production" && !s && !Ps(e) && Y(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return x.NODE_ENV !== "production" && Y(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return x.NODE_ENV !== "production" && !n && !Ps(e) && Y(`Invalid Teleport target: ${n}`), n;
}, Ph = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, a, c, f) {
    const {
      mc: u,
      pc: d,
      pbc: h,
      o: { insert: p, querySelector: g, createText: v, createComment: _ }
    } = f, y = Ps(t.props);
    let { shapeFlag: E, children: m, dynamicChildren: D } = t;
    if (x.NODE_ENV !== "production" && tn && (c = !1, D = null), e == null) {
      const I = t.el = x.NODE_ENV !== "production" ? _("teleport start") : v(""), C = t.anchor = x.NODE_ENV !== "production" ? _("teleport end") : v("");
      p(I, n, s), p(C, n, s);
      const A = (S, k) => {
        E & 16 && (o && o.isCE && (o.ce._teleportTarget = S), u(
          m,
          S,
          k,
          o,
          r,
          i,
          a,
          c
        ));
      }, T = () => {
        const S = t.target = Nl(t.props, g), k = Vh(S, t, v, p);
        S ? (i !== "svg" && xu(S) ? i = "svg" : i !== "mathml" && ku(S) && (i = "mathml"), y || (A(S, k), Ei(t, !1))) : x.NODE_ENV !== "production" && !y && Y(
          "Invalid Teleport target on mount:",
          S,
          `(${typeof S})`
        );
      };
      y && (A(n, C), Ei(t, !0)), Du(t.props) ? (t.el.__isMounted = !1, Et(() => {
        T(), delete t.el.__isMounted;
      }, r)) : T();
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
      const I = t.anchor = e.anchor, C = t.target = e.target, A = t.targetAnchor = e.targetAnchor, T = Ps(e.props), S = T ? n : C, k = T ? I : A;
      if (i === "svg" || xu(C) ? i = "svg" : (i === "mathml" || ku(C)) && (i = "mathml"), D ? (h(
        e.dynamicChildren,
        D,
        S,
        o,
        r,
        i,
        a
      ), pr(e, t, x.NODE_ENV === "production")) : c || d(
        e,
        t,
        S,
        k,
        o,
        r,
        i,
        a,
        !1
      ), y)
        T ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ri(
          t,
          n,
          I,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = Nl(
          t.props,
          g
        );
        R ? ri(
          t,
          R,
          null,
          f,
          0
        ) : x.NODE_ENV !== "production" && Y(
          "Invalid Teleport target on update:",
          C,
          `(${typeof C})`
        );
      } else T && ri(
        t,
        C,
        A,
        f,
        1
      );
      Ei(t, y);
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
      props: h
    } = e;
    if (d && (o(f), o(u)), r && o(c), i & 16) {
      const p = r || !Ps(h);
      for (let g = 0; g < a.length; g++) {
        const v = a[g];
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
  hydrate: My
};
function ri(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: c, children: f, props: u } = e, d = r === 2;
  if (d && s(i, t, n), (!d || Ps(u)) && c & 16)
    for (let h = 0; h < f.length; h++)
      o(
        f[h],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function My(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: a, querySelector: c, insert: f, createText: u }
}, d) {
  const h = t.target = Nl(
    t.props,
    c
  );
  if (h) {
    const p = Ps(t.props), g = h._lpa || h.firstChild;
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
        let v = g;
        for (; v; ) {
          if (v && v.nodeType === 8) {
            if (v.data === "teleport start anchor")
              t.targetStart = v;
            else if (v.data === "teleport anchor") {
              t.targetAnchor = v, h._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          v = i(v);
        }
        t.targetAnchor || Vh(h, t, u, f), d(
          g && i(g),
          t,
          h,
          n,
          s,
          o,
          r
        );
      }
    Ei(t, p);
  }
  return t.anchor && i(t.anchor);
}
const Fo = Ph;
function Ei(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Vh(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[Rh] = r, e && (s(o, e), s(r, e)), r;
}
const Zn = Symbol("_leaveCb"), ii = Symbol("_enterCb");
function Ly() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ht(() => {
    e.isMounted = !0;
  }), Wh(() => {
    e.isUnmounting = !0;
  }), e;
}
const $t = [Function, Array], Mh = {
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
}, Lh = (e) => {
  const t = e.subTree;
  return t.component ? Lh(t.component) : t;
}, Fy = {
  name: "BaseTransition",
  props: Mh,
  setup(e, { slots: t }) {
    const n = Rn(), s = Ly();
    return () => {
      const o = t.default && jh(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Fh(o), i = ye(e), { mode: a } = i;
      if (x.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && Y(`invalid <transition> mode: ${a}`), s.isLeaving)
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
      c.type !== ot && Cr(c, f);
      let u = n.subTree && Ru(n.subTree);
      if (u && u.type !== ot && !Cs(c, u) && Lh(n).type !== ot) {
        let d = Dl(
          u,
          i,
          s,
          n
        );
        if (Cr(u, d), a === "out-in" && c.type !== ot)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, Ka(r);
        a === "in-out" && c.type !== ot ? d.delayLeave = (h, p, g) => {
          const v = Bh(
            s,
            u
          );
          v[String(u.key)] = u, h[Zn] = () => {
            p(), h[Zn] = void 0, delete f.delayedLeave, u = void 0;
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
      if (s.type !== ot) {
        if (x.NODE_ENV !== "production" && n) {
          Y(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, x.NODE_ENV === "production") break;
      }
  }
  return t;
}
const By = Fy;
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
    onBeforeLeave: h,
    onLeave: p,
    onAfterLeave: g,
    onLeaveCancelled: v,
    onBeforeAppear: _,
    onAppear: y,
    onAfterAppear: E,
    onAppearCancelled: m
  } = t, D = String(e.key), I = Bh(n, e), C = (S, k) => {
    S && un(
      S,
      s,
      9,
      k
    );
  }, A = (S, k) => {
    const R = k[1];
    C(S, k), de(S) ? S.every((w) => w.length <= 1) && R() : S.length <= 1 && R();
  }, T = {
    mode: i,
    persisted: a,
    beforeEnter(S) {
      let k = c;
      if (!n.isMounted)
        if (r)
          k = _ || c;
        else
          return;
      S[Zn] && S[Zn](
        !0
        /* cancelled */
      );
      const R = I[D];
      R && Cs(e, R) && R.el[Zn] && R.el[Zn](), C(k, [S]);
    },
    enter(S) {
      let k = f, R = u, w = d;
      if (!n.isMounted)
        if (r)
          k = y || f, R = E || u, w = m || d;
        else
          return;
      let $ = !1;
      const he = S[ii] = (ne) => {
        $ || ($ = !0, ne ? C(w, [S]) : C(R, [S]), T.delayedLeave && T.delayedLeave(), S[ii] = void 0);
      };
      k ? A(k, [S, he]) : he();
    },
    leave(S, k) {
      const R = String(e.key);
      if (S[ii] && S[ii](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return k();
      C(h, [S]);
      let w = !1;
      const $ = S[Zn] = (he) => {
        w || (w = !0, k(), he ? C(v, [S]) : C(g, [S]), S[Zn] = void 0, I[R] === e && delete I[R]);
      };
      I[R] = e, p ? A(p, [S, $]) : $();
    },
    clone(S) {
      const k = Dl(
        S,
        t,
        n,
        s,
        o
      );
      return o && o(k), k;
    }
  };
  return T;
}
function Ka(e) {
  if ($r(e))
    return e = Dn(e), e.children = null, e;
}
function Ru(e) {
  if (!$r(e))
    return Ih(e.type) && e.children ? Fh(e.children) : e;
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
function Cr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Cr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function jh(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === we ? (i.patchFlag & 128 && o++, s = s.concat(
      jh(i.children, t, a)
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
function Uh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Hh = /* @__PURE__ */ new WeakSet();
function jy(e) {
  const t = Rn(), n = gh(null);
  if (t) {
    const o = t.refs === Ve ? t.refs = {} : t.refs;
    let r;
    x.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? Y(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else x.NODE_ENV !== "production" && Y(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = x.NODE_ENV !== "production" ? Cc(n) : n;
  return x.NODE_ENV !== "production" && Hh.add(s), s;
}
function fr(e, t, n, s, o = !1) {
  if (de(e)) {
    e.forEach(
      (g, v) => fr(
        g,
        t && (de(t) ? t[v] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (yo(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && fr(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? ga(s.component) : s.el, i = o ? null : r, { i: a, r: c } = e;
  if (x.NODE_ENV !== "production" && !a) {
    Y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === Ve ? a.refs = {} : a.refs, d = a.setupState, h = ye(d), p = d === Ve ? () => !1 : (g) => x.NODE_ENV !== "production" && (Me(h, g) && !Ke(h[g]) && Y(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), Hh.has(h[g])) ? !1 : Me(h, g);
  if (f != null && f !== c && (qe(f) ? (u[f] = null, p(f) && (d[f] = null)) : Ke(f) && (f.value = null)), ve(c))
    Lo(c, a, 12, [i, u]);
  else {
    const g = qe(c), v = Ke(c);
    if (g || v) {
      const _ = () => {
        if (e.f) {
          const y = g ? p(c) ? d[c] : u[c] : c.value;
          o ? de(y) && _c(y, r) : de(y) ? y.includes(r) || y.push(r) : g ? (u[c] = [r], p(c) && (d[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else g ? (u[c] = i, p(c) && (d[c] = i)) : v ? (c.value = i, e.k && (u[e.k] = i)) : x.NODE_ENV !== "production" && Y("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (_.id = -1, Et(_, n)) : _();
    } else x.NODE_ENV !== "production" && Y("Invalid template ref type:", c, `(${typeof c})`);
  }
}
jr().requestIdleCallback;
jr().cancelIdleCallback;
const yo = (e) => !!e.type.__asyncLoader, $r = (e) => e.type.__isKeepAlive;
function Uy(e, t) {
  $h(e, "a", t);
}
function Hy(e, t) {
  $h(e, "da", t);
}
function $h(e, t, n = at) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (fa(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      $r(o.parent.vnode) && $y(s, t, n, o), o = o.parent;
  }
}
function $y(e, t, n, s) {
  const o = fa(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Bo(() => {
    _c(s[t], o);
  }, n);
}
function fa(e, t, n = at, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      an();
      const a = Kr(n), c = un(t, n, e, i);
      return a(), ln(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (x.NODE_ENV !== "production") {
    const o = ws(Tc[e].replace(/ hook$/, ""));
    Y(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const qn = (e) => (t, n = at) => {
  (!Nr || e === "sp") && fa(e, (...s) => t(...s), n);
}, Wy = qn("bm"), Ht = qn("m"), Ky = qn(
  "bu"
), zy = qn("u"), Wh = qn(
  "bum"
), Bo = qn("um"), qy = qn(
  "sp"
), Yy = qn("rtg"), Xy = qn("rtc");
function Gy(e, t = at) {
  fa("ec", e, t);
}
const xl = "components", Qy = "directives";
function Je(e, t) {
  return Kh(xl, e, !0, t) || e;
}
const Jy = Symbol.for("v-ndc");
function Zy(e) {
  return Kh(Qy, e);
}
function Kh(e, t, n = !0, s = !1) {
  const o = tt || at;
  if (o) {
    const r = o.type;
    if (e === xl) {
      const a = Vc(
        r,
        !1
      );
      if (a && (a === t || a === vt(t) || a === Bs(vt(t))))
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
    if (x.NODE_ENV !== "production" && n && !i) {
      const a = e === xl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      Y(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else x.NODE_ENV !== "production" && Y(
    `resolve${Bs(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Iu(e, t) {
  return e && (e[t] || e[vt(t)] || e[Bs(vt(t))]);
}
function Ye(e, t, n, s) {
  let o;
  const r = n, i = de(e);
  if (i || qe(e)) {
    const a = i && on(e);
    let c = !1, f = !1;
    a && (c = !St(e), f = Nn(e), e = la(e)), o = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      o[u] = t(
        c ? f ? Bi(pt(e[u])) : pt(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    x.NODE_ENV !== "production" && !Number.isInteger(e) && Y(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
function ke(e, t, n = {}, s, o) {
  if (tt.ce || tt.parent && yo(tt.parent) && tt.parent.ce)
    return t !== "default" && (n.name = t), N(), rt(
      we,
      null,
      [le("slot", n, s && s())],
      64
    );
  let r = e[t];
  x.NODE_ENV !== "production" && r && r.length > 1 && (Y(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), N();
  const i = r && zh(r(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
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
function zh(e) {
  return e.some((t) => $s(t) ? !(t.type === ot || t.type === we && !zh(t.children)) : !0) ? e : null;
}
const kl = (e) => e ? mm(e) ? ga(e) : kl(e.parent) : null, Vs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Qe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => x.NODE_ENV !== "production" ? wn(e.props) : e.props,
    $attrs: (e) => x.NODE_ENV !== "production" ? wn(e.attrs) : e.attrs,
    $slots: (e) => x.NODE_ENV !== "production" ? wn(e.slots) : e.slots,
    $refs: (e) => x.NODE_ENV !== "production" ? wn(e.refs) : e.refs,
    $parent: (e) => kl(e.parent),
    $root: (e) => kl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      da(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Eo.bind(e.proxy)),
    $watch: (e) => Ib.bind(e)
  })
), xc = (e) => e === "_" || e === "$", za = (e, t) => e !== Ve && !e.__isScriptSetup && Me(e, t), qh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: c } = e;
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
        if (za(s, t))
          return i[t] = 1, s[t];
        if (o !== Ve && Me(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Me(f, t)
        )
          return i[t] = 3, r[t];
        if (n !== Ve && Me(n, t))
          return i[t] = 4, n[t];
        Rl && (i[t] = 0);
      }
    }
    const u = Vs[t];
    let d, h;
    if (u)
      return t === "$attrs" ? (lt(e.attrs, "get", ""), x.NODE_ENV !== "production" && zi()) : x.NODE_ENV !== "production" && t === "$slots" && lt(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Ve && Me(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, Me(h, t)
    )
      return h[t];
    x.NODE_ENV !== "production" && tt && (!qe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Ve && xc(t[0]) && Me(o, t) ? Y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === tt && Y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return za(o, t) ? (o[t] = n, !0) : x.NODE_ENV !== "production" && o.__isScriptSetup && Me(o, t) ? (Y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Ve && Me(s, t) ? (s[t] = n, !0) : Me(e.props, t) ? (x.NODE_ENV !== "production" && Y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (x.NODE_ENV !== "production" && Y(
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
    return !!n[i] || e !== Ve && Me(e, i) || za(t, i) || (a = r[0]) && Me(a, i) || Me(s, i) || Me(Vs, i) || Me(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
x.NODE_ENV !== "production" && (qh.ownKeys = (e) => (Y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function eb(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Vs).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Vs[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ct
    });
  }), t;
}
function tb(e) {
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
function nb(e) {
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
function Pu(e) {
  return de(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function sb() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? Y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Rl = !0;
function ob(e) {
  const t = Xh(e), n = e.proxy, s = e.ctx;
  Rl = !1, t.beforeCreate && Vu(t.beforeCreate, e, "bc");
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
    mounted: h,
    beforeUpdate: p,
    updated: g,
    activated: v,
    deactivated: _,
    beforeDestroy: y,
    beforeUnmount: E,
    destroyed: m,
    unmounted: D,
    render: I,
    renderTracked: C,
    renderTriggered: A,
    errorCaptured: T,
    serverPrefetch: S,
    // public API
    expose: k,
    inheritAttrs: R,
    // assets
    components: w,
    directives: $,
    filters: he
  } = t, ne = x.NODE_ENV !== "production" ? sb() : null;
  if (x.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const W in L)
        ne("Props", W);
  }
  if (f && rb(f, s, ne), i)
    for (const L in i) {
      const W = i[L];
      ve(W) ? (x.NODE_ENV !== "production" ? Object.defineProperty(s, L, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[L] = W.bind(n), x.NODE_ENV !== "production" && ne("Methods", L)) : x.NODE_ENV !== "production" && Y(
        `Method "${L}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    x.NODE_ENV !== "production" && !ve(o) && Y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const L = o.call(n, n);
    if (x.NODE_ENV !== "production" && yc(L) && Y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Fe(L))
      x.NODE_ENV !== "production" && Y("data() should return an object.");
    else if (e.data = Us(L), x.NODE_ENV !== "production")
      for (const W in L)
        ne("Data", W), xc(W[0]) || Object.defineProperty(s, W, {
          configurable: !0,
          enumerable: !0,
          get: () => L[W],
          set: ct
        });
  }
  if (Rl = !0, r)
    for (const L in r) {
      const W = r[L], oe = ve(W) ? W.bind(n, n) : ve(W.get) ? W.get.bind(n, n) : ct;
      x.NODE_ENV !== "production" && oe === ct && Y(`Computed property "${L}" has no getter.`);
      const Oe = !ve(W) && ve(W.set) ? W.set.bind(n) : x.NODE_ENV !== "production" ? () => {
        Y(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : ct, Le = H({
        get: oe,
        set: Oe
      });
      Object.defineProperty(s, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Se) => Le.value = Se
      }), x.NODE_ENV !== "production" && ne("Computed", L);
    }
  if (a)
    for (const L in a)
      Yh(a[L], s, n, L);
  if (c) {
    const L = ve(c) ? c.call(n) : c;
    Reflect.ownKeys(L).forEach((W) => {
      bo(W, L[W]);
    });
  }
  u && Vu(u, e, "c");
  function V(L, W) {
    de(W) ? W.forEach((oe) => L(oe.bind(n))) : W && L(W.bind(n));
  }
  if (V(Wy, d), V(Ht, h), V(Ky, p), V(zy, g), V(Uy, v), V(Hy, _), V(Gy, T), V(Xy, C), V(Yy, A), V(Wh, E), V(Bo, D), V(qy, S), de(k))
    if (k.length) {
      const L = e.exposed || (e.exposed = {});
      k.forEach((W) => {
        Object.defineProperty(L, W, {
          get: () => n[W],
          set: (oe) => n[W] = oe
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === ct && (e.render = I), R != null && (e.inheritAttrs = R), w && (e.components = w), $ && (e.directives = $), S && Uh(e);
}
function rb(e, t, n = ct) {
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
    }) : t[s] = r, x.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Vu(e, t, n) {
  un(
    de(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Yh(e, t, n, s) {
  let o = s.includes(".") ? im(n, s) : () => n[s];
  if (qe(e)) {
    const r = t[e];
    ve(r) ? Lt(o, r) : x.NODE_ENV !== "production" && Y(`Invalid watch handler specified by key "${e}"`, r);
  } else if (ve(e))
    Lt(o, e.bind(n));
  else if (Fe(e))
    if (de(e))
      e.forEach((r) => Yh(r, t, n, s));
    else {
      const r = ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      ve(r) ? Lt(o, r, e) : x.NODE_ENV !== "production" && Y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else x.NODE_ENV !== "production" && Y(`Invalid watch option: "${s}"`, e);
}
function Xh(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (f) => Wi(c, f, i, !0)
  ), Wi(c, t, i)), Fe(t) && r.set(t, c), c;
}
function Wi(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Wi(e, r, n, !0), o && o.forEach(
    (i) => Wi(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      x.NODE_ENV !== "production" && Y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = ib[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const ib = {
  data: Mu,
  props: Lu,
  emits: Lu,
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
  watch: lb,
  // provide / inject
  provide: Mu,
  inject: ab
};
function Mu(e, t) {
  return t ? e ? function() {
    return Qe(
      ve(e) ? e.call(this, this) : e,
      ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ab(e, t) {
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
function Lu(e, t) {
  return e ? de(e) && de(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qe(
    /* @__PURE__ */ Object.create(null),
    Pu(e),
    Pu(t ?? {})
  ) : t;
}
function lb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Qe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = bt(e[s], t[s]);
  return n;
}
function Gh() {
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
let cb = 0;
function ub(e, t) {
  return function(s, o = null) {
    ve(s) || (s = Qe({}, s)), o != null && !Fe(o) && (x.NODE_ENV !== "production" && Y("root props passed to app.mount() must be an object."), o = null);
    const r = Gh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const f = r.app = {
      _uid: cb++,
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
        x.NODE_ENV !== "production" && Y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return i.has(u) ? x.NODE_ENV !== "production" && Y("Plugin has already been applied to target app.") : u && ve(u.install) ? (i.add(u), u.install(f, ...d)) : ve(u) ? (i.add(u), u(f, ...d)) : x.NODE_ENV !== "production" && Y(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? x.NODE_ENV !== "production" && Y(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, d) {
        return x.NODE_ENV !== "production" && Fl(u, r.config), d ? (x.NODE_ENV !== "production" && r.components[u] && Y(`Component "${u}" has already been registered in target app.`), r.components[u] = d, f) : r.components[u];
      },
      directive(u, d) {
        return x.NODE_ENV !== "production" && kh(u), d ? (x.NODE_ENV !== "production" && r.directives[u] && Y(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, f) : r.directives[u];
      },
      mount(u, d, h) {
        if (c)
          x.NODE_ENV !== "production" && Y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          x.NODE_ENV !== "production" && u.__vue_app__ && Y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = f._ceVNode || le(s, o);
          return p.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), x.NODE_ENV !== "production" && (r.reload = () => {
            const g = Dn(p);
            g.el = null, e(g, u, h);
          }), e(p, u, h), c = !0, f._container = u, u.__vue_app__ = f, x.NODE_ENV !== "production" && (f._instance = p.component, Ny(f, Xu)), ga(p.component);
        }
      },
      onUnmount(u) {
        x.NODE_ENV !== "production" && typeof u != "function" && Y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        c ? (un(
          a,
          f._instance,
          16
        ), e(null, f._container), x.NODE_ENV !== "production" && (f._instance = null, Dy(f)), delete f._container.__vue_app__) : x.NODE_ENV !== "production" && Y("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return x.NODE_ENV !== "production" && u in r.provides && (Me(r.provides, u) ? Y(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : Y(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = d, f;
      },
      runWithContext(u) {
        const d = Ms;
        Ms = f;
        try {
          return u();
        } finally {
          Ms = d;
        }
      }
    };
    return f;
  };
}
let Ms = null;
function bo(e, t) {
  if (!at)
    x.NODE_ENV !== "production" && Y("provide() can only be used inside setup().");
  else {
    let n = at.provides;
    const s = at.parent && at.parent.provides;
    s === n && (n = at.provides = Object.create(s)), n[e] = t;
  }
}
function _t(e, t, n = !1) {
  const s = at || tt;
  if (s || Ms) {
    let o = Ms ? Ms._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ve(t) ? t.call(s && s.proxy) : t;
    x.NODE_ENV !== "production" && Y(`injection "${String(e)}" not found.`);
  } else x.NODE_ENV !== "production" && Y("inject() can only be used inside setup() or functional components.");
}
function db() {
  return !!(at || tt || Ms);
}
const Qh = {}, Jh = () => Object.create(Qh), Zh = (e) => Object.getPrototypeOf(e) === Qh;
function fb(e, t, n, s = !1) {
  const o = {}, r = Jh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), em(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  x.NODE_ENV !== "production" && nm(t || {}, o, e), n ? e.props = s ? o : mh(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function pb(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function hb(e, t, n, s) {
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
    !(x.NODE_ENV !== "production" && pb(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        if (ma(e.emitsOptions, h))
          continue;
        const p = t[h];
        if (c)
          if (Me(r, h))
            p !== r[h] && (r[h] = p, f = !0);
          else {
            const g = vt(h);
            o[g] = Pl(
              c,
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
    em(e, t, o, r) && (f = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !Me(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Tn(d)) === d || !Me(t, u))) && (c ? n && // for camelCase
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
        (!t || !Me(t, d)) && (delete r[d], f = !0);
  }
  f && bn(e.attrs, "set", ""), x.NODE_ENV !== "production" && nm(t || {}, o, e);
}
function em(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (cr(c))
        continue;
      const f = t[c];
      let u;
      o && Me(o, u = vt(c)) ? !r || !r.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : ma(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, i = !0);
    }
  if (r) {
    const c = ye(n), f = a || Ve;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Pl(
        o,
        c,
        d,
        f[d],
        e,
        !Me(f, d)
      );
    }
  }
  return i;
}
function Pl(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const a = Me(i, "default");
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
const mb = /* @__PURE__ */ new WeakMap();
function tm(e, t, n = !1) {
  const s = n ? mb : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let c = !1;
  if (!ve(e)) {
    const u = (d) => {
      c = !0;
      const [h, p] = tm(d, t, !0);
      Qe(i, h), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return Fe(e) && s.set(e, vo), vo;
  if (de(r))
    for (let u = 0; u < r.length; u++) {
      x.NODE_ENV !== "production" && !qe(r[u]) && Y("props must be strings when using array syntax.", r[u]);
      const d = vt(r[u]);
      Fu(d) && (i[d] = Ve);
    }
  else if (r) {
    x.NODE_ENV !== "production" && !Fe(r) && Y("invalid props options", r);
    for (const u in r) {
      const d = vt(u);
      if (Fu(d)) {
        const h = r[u], p = i[d] = de(h) || ve(h) ? { type: h } : Qe({}, h), g = p.type;
        let v = !1, _ = !0;
        if (de(g))
          for (let y = 0; y < g.length; ++y) {
            const E = g[y], m = ve(E) && E.name;
            if (m === "Boolean") {
              v = !0;
              break;
            } else m === "String" && (_ = !1);
          }
        else
          v = ve(g) && g.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = v, p[
          1
          /* shouldCastTrue */
        ] = _, (v || Me(p, "default")) && a.push(d);
      }
    }
  }
  const f = [i, a];
  return Fe(e) && s.set(e, f), f;
}
function Fu(e) {
  return e[0] !== "$" && !cr(e) ? !0 : (x.NODE_ENV !== "production" && Y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function gb(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function nm(e, t, n) {
  const s = ye(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => vt(i));
  for (const i in o) {
    let a = o[i];
    a != null && vb(
      i,
      s[i],
      a,
      x.NODE_ENV !== "production" ? wn(s) : s,
      !r.includes(i)
    );
  }
}
function vb(e, t, n, s, o) {
  const { type: r, required: i, validator: a, skipCheck: c } = n;
  if (i && o) {
    Y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let f = !1;
      const u = de(r) ? r : [r], d = [];
      for (let h = 0; h < u.length && !f; h++) {
        const { valid: p, expectedType: g } = yb(t, u[h]);
        d.push(g || ""), f = p;
      }
      if (!f) {
        Y(bb(e, t, d));
        return;
      }
    }
    a && !a(t, s) && Y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const _b = /* @__PURE__ */ zn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function yb(e, t) {
  let n;
  const s = gb(t);
  if (s === "null")
    n = e === null;
  else if (_b(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = Fe(e) : s === "Array" ? n = de(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function bb(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Bs).join(" | ")}`;
  const o = n[0], r = bc(t), i = Bu(t, o), a = Bu(t, r);
  return n.length === 1 && ju(o) && !Eb(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, ju(r) && (s += `with value ${a}.`), s;
}
function Bu(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ju(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Eb(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const kc = (e) => e[0] === "_" || e === "$stable", Rc = (e) => de(e) ? e.map(en) : [en(e)], wb = (e, t, n) => {
  if (t._n)
    return t;
  const s = be((...o) => (x.NODE_ENV !== "production" && at && !(n === null && tt) && !(n && n.root !== at.root) && Y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Rc(t(...o))), n);
  return s._c = !1, s;
}, sm = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (kc(o)) continue;
    const r = e[o];
    if (ve(r))
      t[o] = wb(o, r, s);
    else if (r != null) {
      x.NODE_ENV !== "production" && Y(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Rc(r);
      t[o] = () => i;
    }
  }
}, om = (e, t) => {
  x.NODE_ENV !== "production" && !$r(e.vnode) && Y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Rc(t);
  e.slots.default = () => n;
}, Vl = (e, t, n) => {
  for (const s in t)
    (n || !kc(s)) && (e[s] = t[s]);
}, Ab = (e, t, n) => {
  const s = e.slots = Jh();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && Er(s, "__", o, !0);
    const r = t._;
    r ? (Vl(s, t, n), n && Er(s, "_", r, !0)) : sm(t, s);
  } else t && om(e, t);
}, Sb = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Ve;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? x.NODE_ENV !== "production" && tn ? (Vl(o, t, n), bn(e, "set", "$slots")) : n && a === 1 ? r = !1 : Vl(o, t, n) : (r = !t.$stable, sm(t, o)), i = t;
  } else t && (om(e, t), i = { default: 1 });
  if (r)
    for (const a in o)
      !kc(a) && i[a] == null && delete o[a];
};
let Go, ns;
function to(e, t) {
  e.appContext.config.performance && Ki() && ns.mark(`vue-${t}-${e.uid}`), x.NODE_ENV !== "production" && Iy(e, t, Ki() ? ns.now() : Date.now());
}
function no(e, t) {
  if (e.appContext.config.performance && Ki()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    ns.mark(s), ns.measure(
      `<${va(e, e.type)}> ${t}`,
      n,
      s
    ), ns.clearMarks(n), ns.clearMarks(s);
  }
  x.NODE_ENV !== "production" && Py(e, t, Ki() ? ns.now() : Date.now());
}
function Ki() {
  return Go !== void 0 || (typeof window < "u" && window.performance ? (Go = !0, ns = window.performance) : Go = !1), Go;
}
function Ob() {
  const e = [];
  if (x.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Et = jb;
function Cb(e) {
  return Tb(e);
}
function Tb(e, t) {
  Ob();
  const n = jr();
  n.__VUE__ = !0, x.NODE_ENV !== "production" && Th(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    nextSibling: h,
    setScopeId: p = ct,
    insertStaticContent: g
  } = e, v = (b, O, M, K = null, U = null, z = null, ie = void 0, Z = null, ee = x.NODE_ENV !== "production" && tn ? !1 : !!O.dynamicChildren) => {
    if (b === O)
      return;
    b && !Cs(b, O) && (K = re(b), xe(b, U, z, !0), b = null), O.patchFlag === -2 && (ee = !1, O.dynamicChildren = null);
    const { type: Q, ref: me, shapeFlag: se } = O;
    switch (Q) {
      case Wr:
        _(b, O, M, K);
        break;
      case ot:
        y(b, O, M, K);
        break;
      case hr:
        b == null ? E(O, M, K, ie) : x.NODE_ENV !== "production" && m(b, O, M, ie);
        break;
      case we:
        $(
          b,
          O,
          M,
          K,
          U,
          z,
          ie,
          Z,
          ee
        );
        break;
      default:
        se & 1 ? C(
          b,
          O,
          M,
          K,
          U,
          z,
          ie,
          Z,
          ee
        ) : se & 6 ? he(
          b,
          O,
          M,
          K,
          U,
          z,
          ie,
          Z,
          ee
        ) : se & 64 || se & 128 ? Q.process(
          b,
          O,
          M,
          K,
          U,
          z,
          ie,
          Z,
          ee,
          Ne
        ) : x.NODE_ENV !== "production" && Y("Invalid VNode type:", Q, `(${typeof Q})`);
    }
    me != null && U ? fr(me, b && b.ref, z, O || b, !O) : me == null && b && b.ref != null && fr(b.ref, null, z, b, !0);
  }, _ = (b, O, M, K) => {
    if (b == null)
      s(
        O.el = a(O.children),
        M,
        K
      );
    else {
      const U = O.el = b.el;
      O.children !== b.children && f(U, O.children);
    }
  }, y = (b, O, M, K) => {
    b == null ? s(
      O.el = c(O.children || ""),
      M,
      K
    ) : O.el = b.el;
  }, E = (b, O, M, K) => {
    [b.el, b.anchor] = g(
      b.children,
      O,
      M,
      K,
      b.el,
      b.anchor
    );
  }, m = (b, O, M, K) => {
    if (O.children !== b.children) {
      const U = h(b.anchor);
      I(b), [O.el, O.anchor] = g(
        O.children,
        M,
        U,
        K
      );
    } else
      O.el = b.el, O.anchor = b.anchor;
  }, D = ({ el: b, anchor: O }, M, K) => {
    let U;
    for (; b && b !== O; )
      U = h(b), s(b, M, K), b = U;
    s(O, M, K);
  }, I = ({ el: b, anchor: O }) => {
    let M;
    for (; b && b !== O; )
      M = h(b), o(b), b = M;
    o(O);
  }, C = (b, O, M, K, U, z, ie, Z, ee) => {
    O.type === "svg" ? ie = "svg" : O.type === "math" && (ie = "mathml"), b == null ? A(
      O,
      M,
      K,
      U,
      z,
      ie,
      Z,
      ee
    ) : k(
      b,
      O,
      U,
      z,
      ie,
      Z,
      ee
    );
  }, A = (b, O, M, K, U, z, ie, Z) => {
    let ee, Q;
    const { props: me, shapeFlag: se, transition: pe, dirs: _e } = b;
    if (ee = b.el = i(
      b.type,
      z,
      me && me.is,
      me
    ), se & 8 ? u(ee, b.children) : se & 16 && S(
      b.children,
      ee,
      null,
      K,
      U,
      qa(b, z),
      ie,
      Z
    ), _e && _s(b, null, K, "created"), T(ee, b, b.scopeId, ie, K), me) {
      for (const je in me)
        je !== "value" && !cr(je) && r(ee, je, null, me[je], z, K);
      "value" in me && r(ee, "value", null, me.value, z), (Q = me.onVnodeBeforeMount) && gn(Q, K, b);
    }
    x.NODE_ENV !== "production" && (Er(ee, "__vnode", b, !0), Er(ee, "__vueParentComponent", K, !0)), _e && _s(b, null, K, "beforeMount");
    const Re = Nb(U, pe);
    Re && pe.beforeEnter(ee), s(ee, O, M), ((Q = me && me.onVnodeMounted) || Re || _e) && Et(() => {
      Q && gn(Q, K, b), Re && pe.enter(ee), _e && _s(b, null, K, "mounted");
    }, U);
  }, T = (b, O, M, K, U) => {
    if (M && p(b, M), K)
      for (let z = 0; z < K.length; z++)
        p(b, K[z]);
    if (U) {
      let z = U.subTree;
      if (x.NODE_ENV !== "production" && z.patchFlag > 0 && z.patchFlag & 2048 && (z = Ic(z.children) || z), O === z || um(z.type) && (z.ssContent === O || z.ssFallback === O)) {
        const ie = U.vnode;
        T(
          b,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          U.parent
        );
      }
    }
  }, S = (b, O, M, K, U, z, ie, Z, ee = 0) => {
    for (let Q = ee; Q < b.length; Q++) {
      const me = b[Q] = Z ? es(b[Q]) : en(b[Q]);
      v(
        null,
        me,
        O,
        M,
        K,
        U,
        z,
        ie,
        Z
      );
    }
  }, k = (b, O, M, K, U, z, ie) => {
    const Z = O.el = b.el;
    x.NODE_ENV !== "production" && (Z.__vnode = O);
    let { patchFlag: ee, dynamicChildren: Q, dirs: me } = O;
    ee |= b.patchFlag & 16;
    const se = b.props || Ve, pe = O.props || Ve;
    let _e;
    if (M && ys(M, !1), (_e = pe.onVnodeBeforeUpdate) && gn(_e, M, O, b), me && _s(O, b, M, "beforeUpdate"), M && ys(M, !0), x.NODE_ENV !== "production" && tn && (ee = 0, ie = !1, Q = null), (se.innerHTML && pe.innerHTML == null || se.textContent && pe.textContent == null) && u(Z, ""), Q ? (R(
      b.dynamicChildren,
      Q,
      Z,
      M,
      K,
      qa(O, U),
      z
    ), x.NODE_ENV !== "production" && pr(b, O)) : ie || oe(
      b,
      O,
      Z,
      null,
      M,
      K,
      qa(O, U),
      z,
      !1
    ), ee > 0) {
      if (ee & 16)
        w(Z, se, pe, M, U);
      else if (ee & 2 && se.class !== pe.class && r(Z, "class", null, pe.class, U), ee & 4 && r(Z, "style", se.style, pe.style, U), ee & 8) {
        const Re = O.dynamicProps;
        for (let je = 0; je < Re.length; je++) {
          const $e = Re[je], Nt = se[$e], Dt = pe[$e];
          (Dt !== Nt || $e === "value") && r(Z, $e, Nt, Dt, U, M);
        }
      }
      ee & 1 && b.children !== O.children && u(Z, O.children);
    } else !ie && Q == null && w(Z, se, pe, M, U);
    ((_e = pe.onVnodeUpdated) || me) && Et(() => {
      _e && gn(_e, M, O, b), me && _s(O, b, M, "updated");
    }, K);
  }, R = (b, O, M, K, U, z, ie) => {
    for (let Z = 0; Z < O.length; Z++) {
      const ee = b[Z], Q = O[Z], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ee.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ee.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Cs(ee, Q) || // - In the case of a component, it could contain anything.
        ee.shapeFlag & 198) ? d(ee.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          M
        )
      );
      v(
        ee,
        Q,
        me,
        null,
        K,
        U,
        z,
        ie,
        !0
      );
    }
  }, w = (b, O, M, K, U) => {
    if (O !== M) {
      if (O !== Ve)
        for (const z in O)
          !cr(z) && !(z in M) && r(
            b,
            z,
            O[z],
            null,
            U,
            K
          );
      for (const z in M) {
        if (cr(z)) continue;
        const ie = M[z], Z = O[z];
        ie !== Z && z !== "value" && r(b, z, Z, ie, U, K);
      }
      "value" in M && r(b, "value", O.value, M.value, U);
    }
  }, $ = (b, O, M, K, U, z, ie, Z, ee) => {
    const Q = O.el = b ? b.el : a(""), me = O.anchor = b ? b.anchor : a("");
    let { patchFlag: se, dynamicChildren: pe, slotScopeIds: _e } = O;
    x.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (tn || se & 2048) && (se = 0, ee = !1, pe = null), _e && (Z = Z ? Z.concat(_e) : _e), b == null ? (s(Q, M, K), s(me, M, K), S(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      M,
      me,
      U,
      z,
      ie,
      Z,
      ee
    )) : se > 0 && se & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (R(
      b.dynamicChildren,
      pe,
      M,
      U,
      z,
      ie,
      Z
    ), x.NODE_ENV !== "production" ? pr(b, O) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (O.key != null || U && O === U.subTree) && pr(
        b,
        O,
        !0
        /* shallow */
      )
    )) : oe(
      b,
      O,
      M,
      me,
      U,
      z,
      ie,
      Z,
      ee
    );
  }, he = (b, O, M, K, U, z, ie, Z, ee) => {
    O.slotScopeIds = Z, b == null ? O.shapeFlag & 512 ? U.ctx.activate(
      O,
      M,
      K,
      ie,
      ee
    ) : ne(
      O,
      M,
      K,
      U,
      z,
      ie,
      ee
    ) : V(b, O, ee);
  }, ne = (b, O, M, K, U, z, ie) => {
    const Z = b.component = Kb(
      b,
      K,
      U
    );
    if (x.NODE_ENV !== "production" && Z.type.__hmrId && Sy(Z), x.NODE_ENV !== "production" && (_i(b), to(Z, "mount")), $r(b) && (Z.ctx.renderer = Ne), x.NODE_ENV !== "production" && to(Z, "init"), qb(Z, !1, ie), x.NODE_ENV !== "production" && no(Z, "init"), x.NODE_ENV !== "production" && tn && (b.el = null), Z.asyncDep) {
      if (U && U.registerDep(Z, L, ie), !b.el) {
        const ee = Z.subTree = le(ot);
        y(null, ee, O, M);
      }
    } else
      L(
        Z,
        b,
        O,
        M,
        U,
        z,
        ie
      );
    x.NODE_ENV !== "production" && (yi(), no(Z, "mount"));
  }, V = (b, O, M) => {
    const K = O.component = b.component;
    if (Fb(b, O, M))
      if (K.asyncDep && !K.asyncResolved) {
        x.NODE_ENV !== "production" && _i(O), W(K, O, M), x.NODE_ENV !== "production" && yi();
        return;
      } else
        K.next = O, K.update();
    else
      O.el = b.el, K.vnode = O;
  }, L = (b, O, M, K, U, z, ie) => {
    const Z = () => {
      if (b.isMounted) {
        let { next: se, bu: pe, u: _e, parent: Re, vnode: je } = b;
        {
          const hn = rm(b);
          if (hn) {
            se && (se.el = je.el, W(b, se, ie)), hn.asyncDep.then(() => {
              b.isUnmounted || Z();
            });
            return;
          }
        }
        let $e = se, Nt;
        x.NODE_ENV !== "production" && _i(se || b.vnode), ys(b, !1), se ? (se.el = je.el, W(b, se, ie)) : se = je, pe && ao(pe), (Nt = se.props && se.props.onVnodeBeforeUpdate) && gn(Nt, Re, se, je), ys(b, !0), x.NODE_ENV !== "production" && to(b, "render");
        const Dt = Hu(b);
        x.NODE_ENV !== "production" && no(b, "render");
        const pn = b.subTree;
        b.subTree = Dt, x.NODE_ENV !== "production" && to(b, "patch"), v(
          pn,
          Dt,
          // parent may have changed if it's in a teleport
          d(pn.el),
          // anchor may have changed if it's in a fragment
          re(pn),
          b,
          U,
          z
        ), x.NODE_ENV !== "production" && no(b, "patch"), se.el = Dt.el, $e === null && Bb(b, Dt.el), _e && Et(_e, U), (Nt = se.props && se.props.onVnodeUpdated) && Et(
          () => gn(Nt, Re, se, je),
          U
        ), x.NODE_ENV !== "production" && Nh(b), x.NODE_ENV !== "production" && yi();
      } else {
        let se;
        const { el: pe, props: _e } = O, { bm: Re, m: je, parent: $e, root: Nt, type: Dt } = b, pn = yo(O);
        ys(b, !1), Re && ao(Re), !pn && (se = _e && _e.onVnodeBeforeMount) && gn(se, $e, O), ys(b, !0);
        {
          Nt.ce && // @ts-expect-error _def is private
          Nt.ce._def.shadowRoot !== !1 && Nt.ce._injectChildStyle(Dt), x.NODE_ENV !== "production" && to(b, "render");
          const hn = b.subTree = Hu(b);
          x.NODE_ENV !== "production" && no(b, "render"), x.NODE_ENV !== "production" && to(b, "patch"), v(
            null,
            hn,
            M,
            K,
            b,
            U,
            z
          ), x.NODE_ENV !== "production" && no(b, "patch"), O.el = hn.el;
        }
        if (je && Et(je, U), !pn && (se = _e && _e.onVnodeMounted)) {
          const hn = O;
          Et(
            () => gn(se, $e, hn),
            U
          );
        }
        (O.shapeFlag & 256 || $e && yo($e.vnode) && $e.vnode.shapeFlag & 256) && b.a && Et(b.a, U), b.isMounted = !0, x.NODE_ENV !== "production" && xy(b), O = M = K = null;
      }
    };
    b.scope.on();
    const ee = b.effect = new Zp(Z);
    b.scope.off();
    const Q = b.update = ee.run.bind(ee), me = b.job = ee.runIfDirty.bind(ee);
    me.i = b, me.id = b.uid, ee.scheduler = () => da(me), ys(b, !0), x.NODE_ENV !== "production" && (ee.onTrack = b.rtc ? (se) => ao(b.rtc, se) : void 0, ee.onTrigger = b.rtg ? (se) => ao(b.rtg, se) : void 0), Q();
  }, W = (b, O, M) => {
    O.component = b;
    const K = b.vnode.props;
    b.vnode = O, b.next = null, hb(b, O.props, K, M), Sb(b, O.children, M), an(), Tu(b), ln();
  }, oe = (b, O, M, K, U, z, ie, Z, ee = !1) => {
    const Q = b && b.children, me = b ? b.shapeFlag : 0, se = O.children, { patchFlag: pe, shapeFlag: _e } = O;
    if (pe > 0) {
      if (pe & 128) {
        Le(
          Q,
          se,
          M,
          K,
          U,
          z,
          ie,
          Z,
          ee
        );
        return;
      } else if (pe & 256) {
        Oe(
          Q,
          se,
          M,
          K,
          U,
          z,
          ie,
          Z,
          ee
        );
        return;
      }
    }
    _e & 8 ? (me & 16 && j(Q, U, z), se !== Q && u(M, se)) : me & 16 ? _e & 16 ? Le(
      Q,
      se,
      M,
      K,
      U,
      z,
      ie,
      Z,
      ee
    ) : j(Q, U, z, !0) : (me & 8 && u(M, ""), _e & 16 && S(
      se,
      M,
      K,
      U,
      z,
      ie,
      Z,
      ee
    ));
  }, Oe = (b, O, M, K, U, z, ie, Z, ee) => {
    b = b || vo, O = O || vo;
    const Q = b.length, me = O.length, se = Math.min(Q, me);
    let pe;
    for (pe = 0; pe < se; pe++) {
      const _e = O[pe] = ee ? es(O[pe]) : en(O[pe]);
      v(
        b[pe],
        _e,
        M,
        null,
        U,
        z,
        ie,
        Z,
        ee
      );
    }
    Q > me ? j(
      b,
      U,
      z,
      !0,
      !1,
      se
    ) : S(
      O,
      M,
      K,
      U,
      z,
      ie,
      Z,
      ee,
      se
    );
  }, Le = (b, O, M, K, U, z, ie, Z, ee) => {
    let Q = 0;
    const me = O.length;
    let se = b.length - 1, pe = me - 1;
    for (; Q <= se && Q <= pe; ) {
      const _e = b[Q], Re = O[Q] = ee ? es(O[Q]) : en(O[Q]);
      if (Cs(_e, Re))
        v(
          _e,
          Re,
          M,
          null,
          U,
          z,
          ie,
          Z,
          ee
        );
      else
        break;
      Q++;
    }
    for (; Q <= se && Q <= pe; ) {
      const _e = b[se], Re = O[pe] = ee ? es(O[pe]) : en(O[pe]);
      if (Cs(_e, Re))
        v(
          _e,
          Re,
          M,
          null,
          U,
          z,
          ie,
          Z,
          ee
        );
      else
        break;
      se--, pe--;
    }
    if (Q > se) {
      if (Q <= pe) {
        const _e = pe + 1, Re = _e < me ? O[_e].el : K;
        for (; Q <= pe; )
          v(
            null,
            O[Q] = ee ? es(O[Q]) : en(O[Q]),
            M,
            Re,
            U,
            z,
            ie,
            Z,
            ee
          ), Q++;
      }
    } else if (Q > pe)
      for (; Q <= se; )
        xe(b[Q], U, z, !0), Q++;
    else {
      const _e = Q, Re = Q, je = /* @__PURE__ */ new Map();
      for (Q = Re; Q <= pe; Q++) {
        const yt = O[Q] = ee ? es(O[Q]) : en(O[Q]);
        yt.key != null && (x.NODE_ENV !== "production" && je.has(yt.key) && Y(
          "Duplicate keys found during update:",
          JSON.stringify(yt.key),
          "Make sure keys are unique."
        ), je.set(yt.key, Q));
      }
      let $e, Nt = 0;
      const Dt = pe - Re + 1;
      let pn = !1, hn = 0;
      const Yo = new Array(Dt);
      for (Q = 0; Q < Dt; Q++) Yo[Q] = 0;
      for (Q = _e; Q <= se; Q++) {
        const yt = b[Q];
        if (Nt >= Dt) {
          xe(yt, U, z, !0);
          continue;
        }
        let mn;
        if (yt.key != null)
          mn = je.get(yt.key);
        else
          for ($e = Re; $e <= pe; $e++)
            if (Yo[$e - Re] === 0 && Cs(yt, O[$e])) {
              mn = $e;
              break;
            }
        mn === void 0 ? xe(yt, U, z, !0) : (Yo[mn - Re] = Q + 1, mn >= hn ? hn = mn : pn = !0, v(
          yt,
          O[mn],
          M,
          null,
          U,
          z,
          ie,
          Z,
          ee
        ), Nt++);
      }
      const bu = pn ? Db(Yo) : vo;
      for ($e = bu.length - 1, Q = Dt - 1; Q >= 0; Q--) {
        const yt = Re + Q, mn = O[yt], Eu = yt + 1 < me ? O[yt + 1].el : K;
        Yo[Q] === 0 ? v(
          null,
          mn,
          M,
          Eu,
          U,
          z,
          ie,
          Z,
          ee
        ) : pn && ($e < 0 || Q !== bu[$e] ? Se(mn, M, Eu, 2) : $e--);
      }
    }
  }, Se = (b, O, M, K, U = null) => {
    const { el: z, type: ie, transition: Z, children: ee, shapeFlag: Q } = b;
    if (Q & 6) {
      Se(b.component.subTree, O, M, K);
      return;
    }
    if (Q & 128) {
      b.suspense.move(O, M, K);
      return;
    }
    if (Q & 64) {
      ie.move(b, O, M, Ne);
      return;
    }
    if (ie === we) {
      s(z, O, M);
      for (let se = 0; se < ee.length; se++)
        Se(ee[se], O, M, K);
      s(b.anchor, O, M);
      return;
    }
    if (ie === hr) {
      D(b, O, M);
      return;
    }
    if (K !== 2 && Q & 1 && Z)
      if (K === 0)
        Z.beforeEnter(z), s(z, O, M), Et(() => Z.enter(z), U);
      else {
        const { leave: se, delayLeave: pe, afterLeave: _e } = Z, Re = () => {
          b.ctx.isUnmounted ? o(z) : s(z, O, M);
        }, je = () => {
          se(z, () => {
            Re(), _e && _e();
          });
        };
        pe ? pe(z, Re, je) : je();
      }
    else
      s(z, O, M);
  }, xe = (b, O, M, K = !1, U = !1) => {
    const {
      type: z,
      props: ie,
      ref: Z,
      children: ee,
      dynamicChildren: Q,
      shapeFlag: me,
      patchFlag: se,
      dirs: pe,
      cacheIndex: _e
    } = b;
    if (se === -2 && (U = !1), Z != null && (an(), fr(Z, null, M, b, !0), ln()), _e != null && (O.renderCache[_e] = void 0), me & 256) {
      O.ctx.deactivate(b);
      return;
    }
    const Re = me & 1 && pe, je = !yo(b);
    let $e;
    if (je && ($e = ie && ie.onVnodeBeforeUnmount) && gn($e, O, b), me & 6)
      Tt(b.component, M, K);
    else {
      if (me & 128) {
        b.suspense.unmount(M, K);
        return;
      }
      Re && _s(b, null, O, "beforeUnmount"), me & 64 ? b.type.remove(
        b,
        O,
        M,
        Ne,
        K
      ) : Q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== we || se > 0 && se & 64) ? j(
        Q,
        O,
        M,
        !1,
        !0
      ) : (z === we && se & 384 || !U && me & 16) && j(ee, O, M), K && nt(b);
    }
    (je && ($e = ie && ie.onVnodeUnmounted) || Re) && Et(() => {
      $e && gn($e, O, b), Re && _s(b, null, O, "unmounted");
    }, M);
  }, nt = (b) => {
    const { type: O, el: M, anchor: K, transition: U } = b;
    if (O === we) {
      x.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && U && !U.persisted ? b.children.forEach((ie) => {
        ie.type === ot ? o(ie.el) : nt(ie);
      }) : ft(M, K);
      return;
    }
    if (O === hr) {
      I(b);
      return;
    }
    const z = () => {
      o(M), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (b.shapeFlag & 1 && U && !U.persisted) {
      const { leave: ie, delayLeave: Z } = U, ee = () => ie(M, z);
      Z ? Z(b.el, z, ee) : ee();
    } else
      z();
  }, ft = (b, O) => {
    let M;
    for (; b !== O; )
      M = h(b), o(b), b = M;
    o(O);
  }, Tt = (b, O, M) => {
    x.NODE_ENV !== "production" && b.type.__hmrId && Oy(b);
    const {
      bum: K,
      scope: U,
      job: z,
      subTree: ie,
      um: Z,
      m: ee,
      a: Q,
      parent: me,
      slots: { __: se }
    } = b;
    Uu(ee), Uu(Q), K && ao(K), me && de(se) && se.forEach((pe) => {
      me.renderCache[pe] = void 0;
    }), U.stop(), z && (z.flags |= 8, xe(ie, b, O, M)), Z && Et(Z, O), Et(() => {
      b.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve()), x.NODE_ENV !== "production" && Ry(b);
  }, j = (b, O, M, K = !1, U = !1, z = 0) => {
    for (let ie = z; ie < b.length; ie++)
      xe(b[ie], O, M, K, U);
  }, re = (b) => {
    if (b.shapeFlag & 6)
      return re(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const O = h(b.anchor || b.el), M = O && O[Rh];
    return M ? h(M) : O;
  };
  let ae = !1;
  const fe = (b, O, M) => {
    b == null ? O._vnode && xe(O._vnode, null, null, !0) : v(
      O._vnode || null,
      b,
      O,
      null,
      null,
      null,
      M
    ), O._vnode = b, ae || (ae = !0, Tu(), Sh(), ae = !1);
  }, Ne = {
    p: v,
    um: xe,
    m: Se,
    r: nt,
    mt: ne,
    mc: S,
    pc: oe,
    pbc: R,
    n: re,
    o: e
  };
  return {
    render: fe,
    hydrate: void 0,
    createApp: ub(fe)
  };
}
function qa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ys({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Nb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (de(s) && de(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = es(o[r]), a.el = i.el), !n && a.patchFlag !== -2 && pr(i, a)), a.type === Wr && (a.el = i.el), a.type === ot && !a.el && (a.el = i.el), x.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function Db(e) {
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
function rm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : rm(t);
}
function Uu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const xb = Symbol.for("v-scx"), kb = () => {
  {
    const e = _t(xb);
    return e || x.NODE_ENV !== "production" && Y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function pa(e, t) {
  return ha(e, null, t);
}
function Rb(e, t) {
  return ha(
    e,
    null,
    x.NODE_ENV !== "production" ? Qe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Lt(e, t, n) {
  return x.NODE_ENV !== "production" && !ve(t) && Y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ha(e, t, n);
}
function ha(e, t, n = Ve) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  x.NODE_ENV !== "production" && !t && (s !== void 0 && Y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && Y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && Y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Qe({}, n);
  x.NODE_ENV !== "production" && (a.onWarn = Y);
  const c = t && s || !t && r !== "post";
  let f;
  if (Nr) {
    if (r === "sync") {
      const p = kb();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!c) {
      const p = () => {
      };
      return p.stop = ct, p.resume = ct, p.pause = ct, p;
    }
  }
  const u = at;
  a.call = (p, g, v) => un(p, u, g, v);
  let d = !1;
  r === "post" ? a.scheduler = (p) => {
    Et(p, u && u.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (p, g) => {
    g ? p() : da(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const h = my(e, t, a);
  return Nr && (f ? f.push(h) : c && h()), h;
}
function Ib(e, t, n) {
  const s = this.proxy, o = qe(e) ? e.includes(".") ? im(s, e) : () => s[e] : e.bind(s, s);
  let r;
  ve(t) ? r = t : (r = t.handler, n = t);
  const i = Kr(this), a = ha(o, r.bind(s), n);
  return i(), a;
}
function im(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Pb(e, t, n = Ve) {
  const s = Rn();
  if (x.NODE_ENV !== "production" && !s)
    return Y("useModel() called without active instance."), G();
  const o = vt(t);
  if (x.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return Y(`useModel() called with prop "${t}" which is not declared.`), G();
  const r = Tn(t), i = am(e, o), a = cy((c, f) => {
    let u, d = Ve, h;
    return Rb(() => {
      const p = e[o];
      xt(u, p) && (u = p, f());
    }), {
      get() {
        return c(), n.get ? n.get(u) : u;
      },
      set(p) {
        const g = n.set ? n.set(p) : p;
        if (!xt(g, u) && !(d !== Ve && xt(p, d)))
          return;
        const v = s.vnode.props;
        v && // check if parent has passed v-model
        (t in v || o in v || r in v) && (`onUpdate:${t}` in v || `onUpdate:${o}` in v || `onUpdate:${r}` in v) || (u = p, f()), s.emit(`update:${t}`, g), xt(p, g) && xt(p, d) && !xt(g, h) && f(), d = p, h = g;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? i || Ve : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const am = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${Tn(t)}Modifiers`];
function Vb(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Ve;
  if (x.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(ws(vt(t)) in d)) && Y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ws(vt(t))}" prop.`
        );
      else {
        const h = u[t];
        ve(h) && (h(...n) || Y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && am(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => qe(u) ? u.trim() : u)), i.number && (o = n.map(Li))), x.NODE_ENV !== "production" && Vy(e, t, o), x.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[ws(u)] && Y(
      `Event "${u}" is emitted in component ${va(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Tn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = s[a = ws(t)] || // also try camelCase event handler (#2249)
  s[a = ws(vt(t))];
  !c && r && (c = s[a = ws(Tn(t))]), c && un(
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
function lm(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, a = !1;
  if (!ve(e)) {
    const c = (f) => {
      const u = lm(f, t, !0);
      u && (a = !0, Qe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !a ? (Fe(e) && s.set(e, null), null) : (de(r) ? r.forEach((c) => i[c] = null) : Qe(i, r), Fe(e) && s.set(e, i), i);
}
function ma(e, t) {
  return !e || !Fr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Me(e, t[0].toLowerCase() + t.slice(1)) || Me(e, Tn(t)) || Me(e, t));
}
let Ml = !1;
function zi() {
  Ml = !0;
}
function Hu(e) {
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
    data: h,
    setupState: p,
    ctx: g,
    inheritAttrs: v
  } = e, _ = $i(e);
  let y, E;
  x.NODE_ENV !== "production" && (Ml = !1);
  try {
    if (n.shapeFlag & 4) {
      const I = o || s, C = x.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(I, {
        get(A, T, S) {
          return Y(
            `Property '${String(
              T
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(A, T, S);
        }
      }) : I;
      y = en(
        f.call(
          C,
          I,
          u,
          x.NODE_ENV !== "production" ? wn(d) : d,
          p,
          h,
          g
        )
      ), E = a;
    } else {
      const I = t;
      x.NODE_ENV !== "production" && a === d && zi(), y = en(
        I.length > 1 ? I(
          x.NODE_ENV !== "production" ? wn(d) : d,
          x.NODE_ENV !== "production" ? {
            get attrs() {
              return zi(), wn(a);
            },
            slots: i,
            emit: c
          } : { attrs: a, slots: i, emit: c }
        ) : I(
          x.NODE_ENV !== "production" ? wn(d) : d,
          null
        )
      ), E = t.props ? a : Mb(a);
    }
  } catch (I) {
    mr.length = 0, Ur(I, e, 1), y = le(ot);
  }
  let m = y, D;
  if (x.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([m, D] = cm(y)), E && v !== !1) {
    const I = Object.keys(E), { shapeFlag: C } = m;
    if (I.length) {
      if (C & 7)
        r && I.some(Mi) && (E = Lb(
          E,
          r
        )), m = Dn(m, E, !1, !0);
      else if (x.NODE_ENV !== "production" && !Ml && m.type !== ot) {
        const A = Object.keys(a), T = [], S = [];
        for (let k = 0, R = A.length; k < R; k++) {
          const w = A[k];
          Fr(w) ? Mi(w) || T.push(w[2].toLowerCase() + w.slice(3)) : S.push(w);
        }
        S.length && Y(
          `Extraneous non-props attributes (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), T.length && Y(
          `Extraneous non-emits event listeners (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (x.NODE_ENV !== "production" && !$u(m) && Y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), m = Dn(m, null, !1, !0), m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs), n.transition && (x.NODE_ENV !== "production" && !$u(m) && Y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Cr(m, n.transition)), x.NODE_ENV !== "production" && D ? D(m) : y = m, $i(_), y;
}
const cm = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ic(t, !1);
  if (s) {
    if (x.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return cm(s);
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
    if ($s(o)) {
      if (o.type !== ot || o.children === "v-if") {
        if (n)
          return;
        if (n = o, x.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ic(n.children);
      }
    } else
      return;
  }
  return n;
}
const Mb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Fr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lb = (e, t) => {
  const n = {};
  for (const s in e)
    (!Mi(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, $u = (e) => e.shapeFlag & 7 || e.type === ot;
function Fb(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: a, patchFlag: c } = t, f = r.emitsOptions;
  if (x.NODE_ENV !== "production" && (o || a) && tn || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Wu(s, i, f) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (i[h] !== s[h] && !ma(f, h))
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
    if (t[r] !== e[r] && !ma(n, r))
      return !0;
  }
  return !1;
}
function Bb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const um = (e) => e.__isSuspense;
function jb(e, t) {
  t && t.pendingBranch ? de(e) ? t.effects.push(...e) : t.effects.push(e) : Ah(e);
}
const we = Symbol.for("v-fgt"), Wr = Symbol.for("v-txt"), ot = Symbol.for("v-cmt"), hr = Symbol.for("v-stc"), mr = [];
let Mt = null;
function N(e = !1) {
  mr.push(Mt = e ? null : []);
}
function Ub() {
  mr.pop(), Mt = mr[mr.length - 1] || null;
}
let Tr = 1;
function Ku(e, t = !1) {
  Tr += e, e < 0 && Mt && t && (Mt.hasOnce = !0);
}
function dm(e) {
  return e.dynamicChildren = Tr > 0 ? Mt || vo : null, Ub(), Tr > 0 && Mt && Mt.push(e), e;
}
function P(e, t, n, s, o, r) {
  return dm(
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
  return dm(
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
function $s(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Cs(e, t) {
  if (x.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = bi.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Hb = (...e) => pm(
  ...e
), fm = ({ key: e }) => e ?? null, wi = ({
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
    key: t && fm(t),
    ref: t && wi(t),
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
    ctx: tt
  };
  return a ? (Pc(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= qe(n) ? 8 : 16), x.NODE_ENV !== "production" && c.key !== c.key && Y("VNode created with invalid key (NaN). VNode type:", c.type), Tr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Mt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Mt.push(c), c;
}
const le = x.NODE_ENV !== "production" ? Hb : pm;
function pm(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Jy) && (x.NODE_ENV !== "production" && !e && Y(`Invalid vnode type when creating vnode: ${e}.`), e = ot), $s(e)) {
    const a = Dn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Pc(a, n), Tr > 0 && !r && Mt && (a.shapeFlag & 6 ? Mt[Mt.indexOf(e)] = a : Mt.push(a)), a.patchFlag = -2, a;
  }
  if (vm(e) && (e = e.__vccOpts), t) {
    t = Ze(t);
    let { class: a, style: c } = t;
    a && !qe(a) && (t.class = ue(a)), Fe(c) && (Sr(c) && !de(c) && (c = Qe({}, c)), t.style = Vt(c));
  }
  const i = qe(e) ? 1 : um(e) ? 128 : Ih(e) ? 64 : Fe(e) ? 4 : ve(e) ? 2 : 0;
  return x.NODE_ENV !== "production" && i & 4 && Sr(e) && (e = ye(e), Y(
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
  return e ? Sr(e) || Zh(e) ? Qe({}, e) : e : null;
}
function Dn(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: a, transition: c } = e, f = t ? fs(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && fm(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? de(r) ? r.concat(wi(t)) : [r, wi(t)] : wi(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: x.NODE_ENV !== "production" && i === -1 && de(a) ? a.map(hm) : a,
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
  return c && s && Cr(
    u,
    c.clone(u)
  ), u;
}
function hm(e) {
  const t = Dn(e);
  return de(e.children) && (t.children = e.children.map(hm)), t;
}
function J(e = " ", t = 0) {
  return le(Wr, null, e, t);
}
function qi(e, t) {
  const n = le(hr, null, e);
  return n.staticCount = t, n;
}
function Ee(e = "", t = !1) {
  return t ? (N(), rt(ot, null, e)) : le(ot, null, e);
}
function en(e) {
  return e == null || typeof e == "boolean" ? le(ot) : de(e) ? le(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : $s(e) ? es(e) : le(Wr, null, String(e));
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
      !o && !Zh(t) ? t._ctx = tt : o === 3 && tt && (tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ve(t) ? (t = { default: t, _ctx: tt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [J(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function fs(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ue([t.class, s.class]));
      else if (o === "style")
        t.style = Vt([t.style, s.style]);
      else if (Fr(o)) {
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
const $b = Gh();
let Wb = 0;
function Kb(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || $b, r = {
    uid: Wb++,
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
    propsOptions: tm(s, o),
    emitsOptions: lm(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ve,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Ve,
    data: Ve,
    props: Ve,
    attrs: Ve,
    slots: Ve,
    refs: Ve,
    setupState: Ve,
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
  return x.NODE_ENV !== "production" ? r.ctx = eb(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Vb.bind(null, r), e.ce && e.ce(r), r;
}
let at = null;
const Rn = () => at || tt;
let Yi, Ll;
{
  const e = jr(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Yi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => at = n
  ), Ll = t(
    "__VUE_SSR_SETTERS__",
    (n) => Nr = n
  );
}
const Kr = (e) => {
  const t = at;
  return Yi(e), e.scope.on(), () => {
    e.scope.off(), Yi(t);
  };
}, zu = () => {
  at && at.scope.off(), Yi(null);
}, zb = /* @__PURE__ */ zn("slot,component");
function Fl(e, { isNativeTag: t }) {
  (zb(e) || t(e)) && Y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function mm(e) {
  return e.vnode.shapeFlag & 4;
}
let Nr = !1;
function qb(e, t = !1, n = !1) {
  t && Ll(t);
  const { props: s, children: o } = e.vnode, r = mm(e);
  fb(e, s, r, t), Ab(e, o, n || t);
  const i = r ? Yb(e, t) : void 0;
  return t && Ll(!1), i;
}
function Yb(e, t) {
  var n;
  const s = e.type;
  if (x.NODE_ENV !== "production") {
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
    s.compilerOptions && Xb() && Y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, qh), x.NODE_ENV !== "production" && tb(e);
  const { setup: o } = s;
  if (o) {
    an();
    const r = e.setupContext = o.length > 1 ? Qb(e) : null, i = Kr(e), a = Lo(
      o,
      e,
      0,
      [
        x.NODE_ENV !== "production" ? wn(e.props) : e.props,
        r
      ]
    ), c = yc(a);
    if (ln(), i(), (c || e.sp) && !yo(e) && Uh(e), c) {
      if (a.then(zu, zu), t)
        return a.then((f) => {
          qu(e, f, t);
        }).catch((f) => {
          Ur(f, e, 0);
        });
      if (e.asyncDep = a, x.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        Y(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      qu(e, a, t);
  } else
    gm(e, t);
}
function qu(e, t, n) {
  ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) ? (x.NODE_ENV !== "production" && $s(t) && Y(
    "setup() should not return VNodes directly - return a render function instead."
  ), x.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = _h(t), x.NODE_ENV !== "production" && nb(e)) : x.NODE_ENV !== "production" && t !== void 0 && Y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), gm(e, n);
}
const Xb = () => !0;
function gm(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ct);
  {
    const o = Kr(e);
    an();
    try {
      ob(e);
    } finally {
      ln(), o();
    }
  }
  x.NODE_ENV !== "production" && !s.render && e.render === ct && !t && (s.template ? Y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : Y("Component is missing template or render function: ", s));
}
const Yu = x.NODE_ENV !== "production" ? {
  get(e, t) {
    return zi(), lt(e, "get", ""), e[t];
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
function Gb(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return lt(e, "get", "$slots"), t[n];
    }
  });
}
function Qb(e) {
  const t = (n) => {
    if (x.NODE_ENV !== "production" && (e.exposed && Y("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (de(n) ? s = "array" : Ke(n) && (s = "ref")), s !== "object" && Y(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (x.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Yu));
      },
      get slots() {
        return s || (s = Gb(e));
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
function ga(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_h(ss(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Vs)
        return Vs[n](e);
    },
    has(t, n) {
      return n in t || n in Vs;
    }
  })) : e.proxy;
}
const Jb = /(?:^|[-_])(\w)/g, Zb = (e) => e.replace(Jb, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vc(e, t = !0) {
  return ve(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function va(e, t, n = !1) {
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
  return s ? Zb(s) : n ? "App" : "Anonymous";
}
function vm(e) {
  return ve(e) && "__vccOpts" in e;
}
const H = (e, t) => {
  const n = py(e, t, Nr);
  if (x.NODE_ENV !== "production") {
    const s = Rn();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Mc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? Fe(t) && !de(t) ? $s(t) ? le(e, null, [t]) : le(e, t) : le(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && $s(n) && (n = [n]), le(e, t, n));
}
function eE() {
  if (x.NODE_ENV === "production" || typeof window > "u")
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
        const h = d.value;
        return ln(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          a(h),
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
    const h = [];
    d.type.props && d.props && h.push(i("props", ye(d.props))), d.setupState !== Ve && h.push(i("setup", d.setupState)), d.data !== Ve && h.push(i("data", ye(d.data)));
    const p = c(d, "computed");
    p && h.push(i("computed", p));
    const g = c(d, "inject");
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
    return h = Qe({}, h), Object.keys(h).length ? [
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
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : Fe(d) ? ["object", { object: h ? ye(d) : d }] : ["span", n, String(d)];
  }
  function c(d, h) {
    const p = d.type;
    if (ve(p))
      return;
    const g = {};
    for (const v in d.ctx)
      f(p, v, h) && (g[v] = d.ctx[v]);
    return g;
  }
  function f(d, h, p) {
    const g = d[p];
    if (de(g) && g.includes(h) || Fe(g) && h in g || d.extends && f(d.extends, h, p) || d.mixins && d.mixins.some((v) => f(v, h, p)))
      return !0;
  }
  function u(d) {
    return St(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Xu = "3.5.17", An = x.NODE_ENV !== "production" ? Y : ct;
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
const _m = Bl ? (e) => Bl.createHTML(e) : (e) => e, tE = "http://www.w3.org/2000/svg", nE = "http://www.w3.org/1998/Math/MathML", Fn = typeof document < "u" ? document : null, Qu = Fn && /* @__PURE__ */ Fn.createElement("template"), sE = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Fn.createElementNS(tE, e) : t === "mathml" ? Fn.createElementNS(nE, e) : n ? Fn.createElement(e, { is: n }) : Fn.createElement(e);
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
      Qu.innerHTML = _m(
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
}, Xn = "transition", Qo = "animation", Dr = Symbol("_vtc"), ym = {
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
}, oE = /* @__PURE__ */ Qe(
  {},
  Mh,
  ym
), rE = (e) => (e.displayName = "Transition", e.props = oE, e), iE = /* @__PURE__ */ rE(
  (e, { slots: t }) => Mc(By, aE(e), t)
), bs = (e, t = []) => {
  de(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ju = (e) => e ? de(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function aE(e) {
  const t = {};
  for (const w in e)
    w in ym || (t[w] = e[w]);
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
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, g = lE(o), v = g && g[0], _ = g && g[1], {
    onBeforeEnter: y,
    onEnter: E,
    onEnterCancelled: m,
    onLeave: D,
    onLeaveCancelled: I,
    onBeforeAppear: C = y,
    onAppear: A = E,
    onAppearCancelled: T = m
  } = t, S = (w, $, he, ne) => {
    w._enterCancelled = ne, Es(w, $ ? u : a), Es(w, $ ? f : i), he && he();
  }, k = (w, $) => {
    w._isLeaving = !1, Es(w, d), Es(w, p), Es(w, h), $ && $();
  }, R = (w) => ($, he) => {
    const ne = w ? A : E, V = () => S($, w, he);
    bs(ne, [$, V]), Zu(() => {
      Es($, w ? c : r), Vn($, w ? u : a), Ju(ne) || ed($, s, v, V);
    });
  };
  return Qe(t, {
    onBeforeEnter(w) {
      bs(y, [w]), Vn(w, r), Vn(w, i);
    },
    onBeforeAppear(w) {
      bs(C, [w]), Vn(w, c), Vn(w, f);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(w, $) {
      w._isLeaving = !0;
      const he = () => k(w, $);
      Vn(w, d), w._enterCancelled ? (Vn(w, h), sd()) : (sd(), Vn(w, h)), Zu(() => {
        w._isLeaving && (Es(w, d), Vn(w, p), Ju(D) || ed(w, s, _, he));
      }), bs(D, [w, he]);
    },
    onEnterCancelled(w) {
      S(w, !1, void 0, !0), bs(m, [w]);
    },
    onAppearCancelled(w) {
      S(w, !0, void 0, !0), bs(T, [w]);
    },
    onLeaveCancelled(w) {
      k(w), bs(I, [w]);
    }
  });
}
function lE(e) {
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
  const t = C_(e);
  return Xt.NODE_ENV !== "production" && by(t, "<transition> explicit duration"), t;
}
function Vn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Dr] || (e[Dr] = /* @__PURE__ */ new Set())).add(t);
}
function Es(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Dr];
  n && (n.delete(t), n.size || (e[Dr] = void 0));
}
function Zu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let cE = 0;
function ed(e, t, n, s) {
  const o = e._endId = ++cE, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: a, propCount: c } = uE(e, t);
  if (!i)
    return s();
  const f = i + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(f, h), r();
  }, h = (p) => {
    p.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, a + 1), e.addEventListener(f, h);
}
function uE(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${Xn}Delay`), r = s(`${Xn}Duration`), i = td(o, r), a = s(`${Qo}Delay`), c = s(`${Qo}Duration`), f = td(a, c);
  let u = null, d = 0, h = 0;
  t === Xn ? i > 0 && (u = Xn, d = i, h = r.length) : t === Qo ? f > 0 && (u = Qo, d = f, h = c.length) : (d = Math.max(i, f), u = d > 0 ? i > f ? Xn : Qo : null, h = u ? u === Xn ? r.length : c.length : 0);
  const p = u === Xn && /\b(transform|all)(,|$)/.test(
    s(`${Xn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: h,
    hasTransform: p
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
function dE(e, t, n) {
  const s = e[Dr];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Xi = Symbol("_vod"), bm = Symbol("_vsh"), Em = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Xi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Jo(e, t);
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
Xt.NODE_ENV !== "production" && (Em.name = "show");
function Jo(e, t) {
  e.style.display = t ? e[Xi] : "none", e[bm] = !t;
}
const fE = Symbol(Xt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), pE = /(^|;)\s*display\s*:/;
function hE(e, t, n) {
  const s = e.style, o = qe(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (qe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Ai(s, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Ai(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Ai(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[fE];
      i && (n += ";" + i), s.cssText = n, r = pE.test(n);
    }
  } else t && e.removeAttribute("style");
  Xi in e && (e[Xi] = r ? s.display : "", e[bm] && (s.display = "none"));
}
const mE = /[^\\];\s*$/, od = /\s*!important$/;
function Ai(e, t, n) {
  if (de(n))
    n.forEach((s) => Ai(e, t, s));
  else if (n == null && (n = ""), Xt.NODE_ENV !== "production" && mE.test(n) && An(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = gE(e, t);
    od.test(n) ? e.setProperty(
      Tn(s),
      n.replace(od, ""),
      "important"
    ) : e[s] = n;
  }
}
const rd = ["Webkit", "Moz", "ms"], Xa = {};
function gE(e, t) {
  const n = Xa[t];
  if (n)
    return n;
  let s = vt(t);
  if (s !== "filter" && s in e)
    return Xa[t] = s;
  s = Bs(s);
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
    n != null && (e[t] = t === "innerHTML" ? _m(n) : n);
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
function Un(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function vE(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const cd = Symbol("_vei");
function _E(e, t, n, s, o = null) {
  const r = e[cd] || (e[cd] = {}), i = r[t];
  if (s && i)
    i.value = Xt.NODE_ENV !== "production" ? dd(s, t) : s;
  else {
    const [a, c] = yE(t);
    if (s) {
      const f = r[t] = wE(
        Xt.NODE_ENV !== "production" ? dd(s, t) : s,
        o
      );
      Un(e, a, f, c);
    } else i && (vE(e, a, i, c), r[t] = void 0);
  }
}
const ud = /(?:Once|Passive|Capture)$/;
function yE(e) {
  let t;
  if (ud.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ud); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Tn(e.slice(2)), t];
}
let Ga = 0;
const bE = /* @__PURE__ */ Promise.resolve(), EE = () => Ga || (bE.then(() => Ga = 0), Ga = Date.now());
function wE(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    un(
      AE(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = EE(), n;
}
function dd(e, t) {
  return ve(e) || de(e) ? e : (An(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ct);
}
function AE(e, t) {
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
const fd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, SE = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? dE(e, s, i) : t === "style" ? hE(e, n, s) : Fr(t) ? Mi(t) || _E(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : OE(e, t, s, i)) ? (ld(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ad(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !qe(s)) ? ld(e, vt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ad(e, t, s, i));
};
function OE(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fd(t) && ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return fd(t) && qe(n) ? !1 : t in e;
}
const is = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return de(t) ? (n) => ao(t, n) : t;
};
function CE(e) {
  e.target.composing = !0;
}
function pd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const zt = Symbol("_assign"), wo = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[zt] = is(o);
    const r = s || o.props && o.props.type === "number";
    Un(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), r && (a = Li(a)), e[zt](a);
    }), n && Un(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Un(e, "compositionstart", CE), Un(e, "compositionend", pd), Un(e, "change", pd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[zt] = is(i), e.composing) return;
    const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? Li(e.value) : e.value, c = t ?? "";
    a !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, TE = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[zt] = is(n), Un(e, "change", () => {
      const s = e._modelValue, o = Ao(e), r = e.checked, i = e[zt];
      if (de(s)) {
        const a = wc(s, o), c = a !== -1;
        if (r && !c)
          i(s.concat(o));
        else if (!r && c) {
          const f = [...s];
          f.splice(a, 1), i(f);
        }
      } else if (Mo(s)) {
        const a = new Set(s);
        r ? a.add(o) : a.delete(o), i(a);
      } else
        i(wm(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: hd,
  beforeUpdate(e, t, n) {
    e[zt] = is(n), hd(e, t, n);
  }
};
function hd(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (de(t))
    o = wc(t, s.props.value) > -1;
  else if (Mo(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = js(t, wm(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Gi = {
  created(e, { value: t }, n) {
    e.checked = js(t, n.props.value), e[zt] = is(n), Un(e, "change", () => {
      e[zt](Ao(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[zt] = is(s), t !== n && (e.checked = js(t, s.props.value));
  }
}, Hn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Mo(t);
    Un(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Li(Ao(i)) : Ao(i)
      );
      e[zt](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, Eo(() => {
        e._assigning = !1;
      });
    }), e[zt] = is(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    md(e, t);
  },
  beforeUpdate(e, t, n) {
    e[zt] = is(n);
  },
  updated(e, { value: t }) {
    e._assigning || md(e, t);
  }
};
function md(e, t) {
  const n = e.multiple, s = de(t);
  if (n && !s && !Mo(t)) {
    Xt.NODE_ENV !== "production" && An(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], a = Ao(i);
    if (n)
      if (s) {
        const c = typeof a;
        c === "string" || c === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = wc(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (js(Ao(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Ao(e) {
  return "_value" in e ? e._value : e.value;
}
function wm(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const NE = ["ctrl", "shift", "alt", "meta"], DE = {
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
  exact: (e, t) => NE.some((n) => e[`${n}Key`] && !t.includes(n))
}, Am = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const a = DE[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...r);
  });
}, xE = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, kE = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = Tn(o.key);
    if (t.some(
      (i) => i === r || xE[i] === r
    ))
      return e(o);
  });
}, RE = /* @__PURE__ */ Qe({ patchProp: SE }, sE);
let gd;
function IE() {
  return gd || (gd = Cb(RE));
}
const _a = (...e) => {
  const t = IE().createApp(...e);
  Xt.NODE_ENV !== "production" && (VE(t), ME(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = LE(s);
    if (!o) return;
    const r = t._component;
    !ve(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, PE(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function PE(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function VE(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => P_(t) || V_(t) || M_(t),
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
function LE(e) {
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
var FE = {};
function BE() {
  eE();
}
FE.NODE_ENV !== "production" && BE();
var jE = Object.create, Sm = Object.defineProperty, UE = Object.getOwnPropertyDescriptor, Lc = Object.getOwnPropertyNames, HE = Object.getPrototypeOf, $E = Object.prototype.hasOwnProperty, WE = (e, t) => function() {
  return e && (t = (0, e[Lc(e)[0]])(e = 0)), t;
}, KE = (e, t) => function() {
  return t || (0, e[Lc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, zE = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Lc(t))
      !$E.call(e, o) && o !== n && Sm(e, o, { get: () => t[o], enumerable: !(s = UE(t, o)) || s.enumerable });
  return e;
}, qE = (e, t, n) => (n = e != null ? jE(HE(e)) : {}, zE(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Sm(n, "default", { value: e, enumerable: !0 }),
  e
)), zr = WE({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), YE = KE({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    zr(), t.exports = s;
    function n(r) {
      return r instanceof Buffer ? Buffer.from(r) : new r.constructor(r.buffer.slice(), r.byteOffset, r.length);
    }
    function s(r) {
      if (r = r || {}, r.circles) return o(r);
      const i = /* @__PURE__ */ new Map();
      if (i.set(Date, (d) => new Date(d)), i.set(Map, (d, h) => new Map(c(Array.from(d), h))), i.set(Set, (d, h) => new Set(c(Array.from(d), h))), r.constructorHandlers)
        for (const d of r.constructorHandlers)
          i.set(d[0], d[1]);
      let a = null;
      return r.proto ? u : f;
      function c(d, h) {
        const p = Object.keys(d), g = new Array(p.length);
        for (let v = 0; v < p.length; v++) {
          const _ = p[v], y = d[_];
          typeof y != "object" || y === null ? g[_] = y : y.constructor !== Object && (a = i.get(y.constructor)) ? g[_] = a(y, h) : ArrayBuffer.isView(y) ? g[_] = n(y) : g[_] = h(y);
        }
        return g;
      }
      function f(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, f);
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
        if (Array.isArray(d)) return c(d, u);
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
      const i = [], a = [], c = /* @__PURE__ */ new Map();
      if (c.set(Date, (p) => new Date(p)), c.set(Map, (p, g) => new Map(u(Array.from(p), g))), c.set(Set, (p, g) => new Set(u(Array.from(p), g))), r.constructorHandlers)
        for (const p of r.constructorHandlers)
          c.set(p[0], p[1]);
      let f = null;
      return r.proto ? h : d;
      function u(p, g) {
        const v = Object.keys(p), _ = new Array(v.length);
        for (let y = 0; y < v.length; y++) {
          const E = v[y], m = p[E];
          if (typeof m != "object" || m === null)
            _[E] = m;
          else if (m.constructor !== Object && (f = c.get(m.constructor)))
            _[E] = f(m, g);
          else if (ArrayBuffer.isView(m))
            _[E] = n(m);
          else {
            const D = i.indexOf(m);
            D !== -1 ? _[E] = a[D] : _[E] = g(m);
          }
        }
        return _;
      }
      function d(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, d);
        if (p.constructor !== Object && (f = c.get(p.constructor)))
          return f(p, d);
        const g = {};
        i.push(p), a.push(g);
        for (const v in p) {
          if (Object.hasOwnProperty.call(p, v) === !1) continue;
          const _ = p[v];
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
      function h(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, h);
        if (p.constructor !== Object && (f = c.get(p.constructor)))
          return f(p, h);
        const g = {};
        i.push(p), a.push(g);
        for (const v in p) {
          const _ = p[v];
          if (typeof _ != "object" || _ === null)
            g[v] = _;
          else if (_.constructor !== Object && (f = c.get(_.constructor)))
            g[v] = f(_, h);
          else if (ArrayBuffer.isView(_))
            g[v] = n(_);
          else {
            const y = i.indexOf(_);
            y !== -1 ? g[v] = a[y] : g[v] = h(_);
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
var Om = typeof navigator < "u", ce = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof ce.chrome < "u" && ce.chrome.devtools;
Om && (ce.self, ce.top);
var vd;
typeof navigator < "u" && ((vd = navigator.userAgent) == null || vd.toLowerCase().includes("electron"));
zr();
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
var _d = (0, XE.default)({ circles: !0 });
const e1 = {
  trailing: !0
};
function So(e, t = 25, n = {}) {
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
        const h = n.leading ? s : c(this, f);
        for (const p of r)
          p(h);
        r = [];
      }, t), d ? (s = c(this, f), u(s)) : r.push(u);
    });
  };
}
async function t1(e, t, n) {
  return await e.apply(t, n);
}
function jl(e, t = {}, n) {
  for (const s in e) {
    const o = e[s], r = n ? `${n}:${s}` : s;
    typeof o == "object" && o !== null ? jl(o, t, r) : typeof o == "function" && (t[r] = o);
  }
  return t;
}
const n1 = { run: (e) => e() }, s1 = () => n1, Cm = typeof console.createTask < "u" ? console.createTask : s1;
function o1(e, t) {
  const n = t.shift(), s = Cm(n);
  return e.reduce(
    (o, r) => o.then(() => s.run(() => r(...t))),
    Promise.resolve()
  );
}
function r1(e, t) {
  const n = t.shift(), s = Cm(n);
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
function Tm() {
  return new i1();
}
var a1 = Object.create, Nm = Object.defineProperty, l1 = Object.getOwnPropertyDescriptor, Fc = Object.getOwnPropertyNames, c1 = Object.getPrototypeOf, u1 = Object.prototype.hasOwnProperty, d1 = (e, t) => function() {
  return e && (t = (0, e[Fc(e)[0]])(e = 0)), t;
}, Dm = (e, t) => function() {
  return t || (0, e[Fc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, f1 = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Fc(t))
      !u1.call(e, o) && o !== n && Nm(e, o, { get: () => t[o], enumerable: !(s = l1(t, o)) || s.enumerable });
  return e;
}, p1 = (e, t, n) => (n = e != null ? a1(c1(e)) : {}, f1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Nm(n, "default", { value: e, enumerable: !0 }),
  e
)), q = d1({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), h1 = Dm({
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
        var E = "-", m = "", D = "", I = !0, C = {}, A, T, S, k, R, w, $, he, ne, V, L, W, oe, Oe, Le = "";
        if (typeof _ != "string")
          return "";
        if (typeof y == "string" && (E = y), $ = a.en, he = i.en, typeof y == "object") {
          A = y.maintainCase || !1, C = y.custom && typeof y.custom == "object" ? y.custom : C, S = +y.truncate > 1 && y.truncate || !1, k = y.uric || !1, R = y.uricNoSlash || !1, w = y.mark || !1, I = !(y.symbols === !1 || y.lang === !1), E = y.separator || E, k && (Le += c), R && (Le += f), w && (Le += u), $ = y.lang && a[y.lang] && I ? a[y.lang] : I ? a.en : {}, he = y.lang && i[y.lang] ? i[y.lang] : y.lang === !1 || y.lang === !0 ? {} : i.en, y.titleCase && typeof y.titleCase.length == "number" && Array.prototype.toString.call(y.titleCase) ? (y.titleCase.forEach(function(Se) {
            C[Se + ""] = Se + "";
          }), T = !0) : T = !!y.titleCase, y.custom && typeof y.custom.length == "number" && Array.prototype.toString.call(y.custom) && y.custom.forEach(function(Se) {
            C[Se + ""] = Se + "";
          }), Object.keys(C).forEach(function(Se) {
            var xe;
            Se.length > 1 ? xe = new RegExp("\\b" + p(Se) + "\\b", "gi") : xe = new RegExp(p(Se), "gi"), _ = _.replace(xe, C[Se]);
          });
          for (L in C)
            Le += L;
        }
        for (Le += E, Le = p(Le), _ = _.replace(/(^\s+|\s+$)/g, ""), oe = !1, Oe = !1, V = 0, W = _.length; V < W; V++)
          L = _[V], g(L, C) ? oe = !1 : he[L] ? (L = oe && he[L].match(/[A-Za-z0-9]/) ? " " + he[L] : he[L], oe = !1) : L in s ? (V + 1 < W && o.indexOf(_[V + 1]) >= 0 ? (D += L, L = "") : Oe === !0 ? (L = r[D] + s[L], D = "") : L = oe && s[L].match(/[A-Za-z0-9]/) ? " " + s[L] : s[L], oe = !1, Oe = !1) : L in r ? (D += L, L = "", V === W - 1 && (L = r[D]), Oe = !0) : /* process symbol chars */ $[L] && !(k && c.indexOf(L) !== -1) && !(R && f.indexOf(L) !== -1) ? (L = oe || m.substr(-1).match(/[A-Za-z0-9]/) ? E + $[L] : $[L], L += _[V + 1] !== void 0 && _[V + 1].match(/[A-Za-z0-9]/) ? E : "", oe = !0) : (Oe === !0 ? (L = r[D] + L, D = "", Oe = !1) : oe && (/[A-Za-z0-9]/.test(L) || m.substr(-1).match(/A-Za-z0-9]/)) && (L = " " + L), oe = !1), m += L.replace(new RegExp("[^\\w\\s" + Le + "_-]", "g"), E);
        return T && (m = m.replace(/(\w)(\S*)/g, function(Se, xe, nt) {
          var ft = xe.toUpperCase() + (nt !== null ? nt : "");
          return Object.keys(C).indexOf(ft.toLowerCase()) < 0 ? ft : ft.toLowerCase();
        })), m = m.replace(/\s+/g, E).replace(new RegExp("\\" + E + "+", "g"), E).replace(new RegExp("(^\\" + E + "+|\\" + E + "+$)", "g"), ""), S && m.length > S && (ne = m.charAt(S) === E, m = m.slice(0, S), ne || (m = m.slice(0, m.lastIndexOf(E)))), !A && !T && (m = m.toLowerCase()), m;
      }, h = function(_) {
        return function(E) {
          return d(E, _);
        };
      }, p = function(_) {
        return _.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, g = function(v, _) {
        for (var y in _)
          if (_[y] === v)
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
}), m1 = Dm({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    q(), t.exports = h1();
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
function yd(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Bc(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function xm(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, o = Bc(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === s : !1;
}
function ya(e) {
  var t, n, s;
  const o = g1(e?.type || {});
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
  const r = v1(e?.type || {});
  return r || "Anonymous Component";
}
function _1(e) {
  var t, n, s;
  const o = (s = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, r = e === e?.root ? "root" : e.uid;
  return `${o}:${r}`;
}
function Ul(e, t) {
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
var ai;
function b1(e) {
  return ai || (ai = document.createRange()), ai.selectNode(e), ai.getBoundingClientRect();
}
function E1(e) {
  const t = y1();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const o = e.children[n];
    let r;
    if (o.component)
      r = Ws(o.component);
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
var bd = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Ws(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? bd : xm(e) ? E1(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Ws(e.subTree.component) : bd;
}
q();
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
var km = "__vue-devtools-component-inspector__", Rm = "__vue-devtools-component-inspector__card__", Im = "__vue-devtools-component-inspector__name__", Pm = "__vue-devtools-component-inspector__indicator__", Vm = {
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
}, O1 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function jo() {
  return document.getElementById(km);
}
function C1() {
  return document.getElementById(Rm);
}
function T1() {
  return document.getElementById(Pm);
}
function N1() {
  return document.getElementById(Im);
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
  n.id = (t = e.elementId) != null ? t : km, Object.assign(n.style, {
    ...Vm,
    ...Uc(e.bounds),
    ...e.style
  });
  const s = document.createElement("span");
  s.id = Rm, Object.assign(s.style, {
    ...S1,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const o = document.createElement("span");
  o.id = Im, o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const r = document.createElement("i");
  return r.id = Pm, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(r.style, O1), s.appendChild(o), s.appendChild(r), n.appendChild(s), document.body.appendChild(n), n;
}
function $c(e) {
  const t = jo(), n = C1(), s = N1(), o = T1();
  t && (Object.assign(t.style, {
    ...Vm,
    ...Uc(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function D1(e) {
  const t = Ws(e);
  if (!t.width && !t.height)
    return;
  const n = ya(e);
  jo() ? $c({ bounds: t, name: n }) : Hc({ bounds: t, name: n });
}
function Mm() {
  const e = jo();
  e && (e.style.display = "none");
}
var Hl = null;
function $l(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Hl = n, n.vnode.el)) {
      const o = Ws(n), r = ya(n);
      jo() ? $c({ bounds: o, name: r }) : Hc({ bounds: o, name: r });
    }
  }
}
function x1(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Hl) {
    const n = _1(Hl);
    t(n);
  }
}
var Qi = null;
function k1() {
  Mm(), window.removeEventListener("mouseover", $l), window.removeEventListener("click", Qi, !0), Qi = null;
}
function R1() {
  return window.addEventListener("mouseover", $l), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), x1(n, (s) => {
        window.removeEventListener("click", t, !0), Qi = null, window.removeEventListener("mouseover", $l);
        const o = jo();
        o && (o.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    Qi = t, window.addEventListener("click", t, !0);
  });
}
function I1(e) {
  const t = Ul(At.value, e.id);
  if (t) {
    const [n] = jc(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = Ws(t), o = document.createElement("div"), r = {
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
      const s = Ws(t);
      if (s.width || s.height) {
        const o = ya(t), r = jo();
        r ? $c({ ...e, name: o, bounds: s }) : Hc({ ...e, name: o, bounds: s }), setTimeout(() => {
          r && (r.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
q();
var Ed, wd;
(wd = (Ed = ce).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Ed.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function P1(e) {
  let t = 0;
  const n = setInterval(() => {
    ce.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function V1() {
  const e = ce.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function M1() {
  return new Promise((e) => {
    function t() {
      V1(), e(ce.__VUE_INSPECTOR__);
    }
    ce.__VUE_INSPECTOR__ ? t() : P1(() => {
      t();
    });
  });
}
q();
q();
function L1(e) {
  return !!(e && e.__v_isReadonly);
}
function Lm(e) {
  return L1(e) ? Lm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ja(e) {
  return !!(e && e.__v_isRef === !0);
}
function ir(e) {
  const t = e && e.__v_raw;
  return t ? ir(t) : e;
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
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : ir(t) instanceof Map ? t.delete(n) : ir(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const o = t[e.newKey || n];
        this.refEditor.isRef(o) ? this.refEditor.set(o, s) : ir(t) instanceof Map ? t.set(e.newKey || n, s) : ir(t) instanceof Set ? t.add(s) : t[e.newKey || n] = s;
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
    return Ja(e) || Lm(e);
  }
};
q();
q();
q();
var j1 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function U1() {
  if (!Om || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(j1);
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
var Ad, Sd;
(Sd = (Ad = ce).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Ad.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var H1 = new Proxy(ce.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function $1(e, t) {
  ut.timelineLayersState[t.id] = !1, H1.push({
    ...e,
    descriptorId: t.id,
    appRecord: Bc(t.app)
  });
}
var Od, Cd;
(Cd = (Od = ce).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Od.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Wc = new Proxy(ce.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), Fm = So(() => {
  Uo.hooks.callHook("sendInspectorToClient", Bm());
});
function W1(e, t) {
  var n, s;
  Wc.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Bc(t.app)
  }), Fm();
}
function Bm() {
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
function Si(e, t) {
  return Wc.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function K1() {
  const e = Tm();
  e.hook("addInspector", ({ inspector: s, plugin: o }) => {
    W1(s, o.descriptor);
  });
  const t = So(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ut.highPerfModeEnabled)
      return;
    const i = Si(s, o.descriptor.app), a = {
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
  const n = So(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ut.highPerfModeEnabled)
      return;
    const i = Si(s, o.descriptor.app), a = {
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
    const i = Si(s, r.descriptor.app);
    i && (i.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: o }) => {
    $1(s, o.descriptor);
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
  }), e.hook("getComponentBounds", async ({ instance: s }) => Ws(s)), e.hook("getComponentName", ({ instance: s }) => ya(s)), e.hook("componentHighlight", ({ uid: s }) => {
    const o = At.value.instanceMap.get(s);
    o && D1(o);
  }), e.hook("componentUnhighlight", () => {
    Mm();
  }), e;
}
var Td, Nd;
(Nd = (Td = ce).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Td.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Dd, xd;
(xd = (Dd = ce).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Dd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var kd, Rd;
(Rd = (kd = ce).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (kd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Id, Pd;
(Pd = (Id = ce).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Id.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Vd, Md;
(Md = (Vd = ce).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Vd.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Ts = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
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
    timelineLayersState: U1()
  };
}
var Ld, Fd;
(Fd = (Ld = ce)[Ts]) != null || (Ld[Ts] = z1());
var q1 = So((e) => {
  Uo.hooks.callHook("devtoolsStateUpdated", { state: e });
});
So((e, t) => {
  Uo.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var ba = new Proxy(ce.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? ce.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : ce.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), At = new Proxy(ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function jm() {
  q1({
    ...ce[Ts],
    appRecords: ba.value,
    activeAppRecordId: At.id,
    tabs: ce.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: ce.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Y1(e) {
  ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, jm();
}
function X1(e) {
  ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, jm();
}
var ut = new Proxy(ce[Ts], {
  get(e, t) {
    return t === "appRecords" ? ba : t === "activeAppRecordId" ? At.id : t === "tabs" ? ce.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? ce.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : ce[Ts][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...ce[Ts] }, e[t] = n, ce[Ts][t] = n, !0;
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
          const h = `Opening component ${f} failed`;
          console.log(`%c${h}`, "color:red");
        }
      });
    } else if (ut.vitePluginDetected) {
      const f = (s = ce.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? s : i;
      ce.__VUE_INSPECTOR__.openInEditor(f, o, a, c);
    }
  }
}
q();
q();
q();
q();
q();
var Bd, jd;
(jd = (Bd = ce).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Bd.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Kc = new Proxy(ce.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
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
function Q1(e) {
  var t, n, s;
  const o = (n = (t = Kc.find((r) => {
    var i;
    return r[0].id === e && !!((i = r[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = o?.settings) != null ? s : null;
}
function Um(e, t) {
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
function J1(e, t) {
  const n = zc(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Wl(t)));
}
function Z1(e, t, n) {
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
var Ud, Hd, Pt = (Hd = (Ud = ce).__VUE_DEVTOOLS_HOOK) != null ? Hd : Ud.__VUE_DEVTOOLS_HOOK = Tm(), e0 = {
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
    if (ut.highPerfModeEnabled)
      return;
    const n = Bm().find((s) => s.packageName === this.plugin.descriptor.packageName);
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
q();
q();
q();
q();
var s0 = "__vue_devtool_undefined__", o0 = "__vue_devtool_infinity__", r0 = "__vue_devtool_negative_infinity__", i0 = "__vue_devtool_nan__";
q();
q();
var a0 = {
  [s0]: "undefined",
  [i0]: "NaN",
  [o0]: "Infinity",
  [r0]: "-Infinity"
};
Object.entries(a0).reduce((e, [t, n]) => (e[n] = t, e), {});
q();
q();
q();
q();
q();
var $d, Wd;
(Wd = ($d = ce).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || ($d.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function $m(e, t) {
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
    ctx: Uo
  });
  n.packageName === "vuex" && o.on.editInspectorState((r) => {
    o.sendInspectorState(r.inspectorId);
  }), s(o);
}
function Wm(e, t) {
  ce.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || ut.highPerfModeEnabled && !t?.inspectingComponent || (ce.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Kc.forEach((n) => {
    l0(n, e);
  }));
}
q();
q();
var xr = "__VUE_DEVTOOLS_ROUTER__", Oo = "__VUE_DEVTOOLS_ROUTER_INFO__", Kd, zd;
(zd = (Kd = ce)[Oo]) != null || (Kd[Oo] = {
  currentRoute: null,
  routes: []
});
var qd, Yd;
(Yd = (qd = ce)[xr]) != null || (qd[xr] = {});
new Proxy(ce[Oo], {
  get(e, t) {
    return ce[Oo][t];
  }
});
new Proxy(ce[xr], {
  get(e, t) {
    if (t === "value")
      return ce[xr];
  }
});
function c0(e) {
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
      matched: qc(i)
    };
  }
  return e;
}
function d0(e, t) {
  function n() {
    var s;
    const o = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, r = u0(o?.currentRoute.value), i = qc(c0(o)), a = console.warn;
    console.warn = () => {
    }, ce[Oo] = {
      currentRoute: r ? _d(r) : {},
      routes: _d(i)
    }, ce[xr] = o, console.warn = a;
  }
  n(), Hm.on.componentUpdated(So(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !ut.highPerfModeEnabled && Uo.hooks.callHook("routerInfoUpdated", { state: ce[Oo] }));
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
      const n = Si(t);
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
      return k1();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Ul(At.value, t);
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
    getVueInspector: M1,
    // toggle app
    toggleApp(t, n) {
      const s = ba.value.find((o) => o.id === t);
      s && (X1(t), Y1(s), d0(s, At), Fm(), Wm(s.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Ul(At.value, t);
      if (n) {
        const [s] = jc(n);
        s && (ce.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = s);
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
q();
var Xd, Gd;
(Gd = (Xd = ce).__VUE_DEVTOOLS_ENV__) != null || (Xd.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var Qd = K1(), Jd, Zd;
(Zd = (Jd = ce).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (Jd.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Qd,
  get state() {
    return {
      ...ut,
      activeAppRecordId: At.id,
      activeAppRecord: At.value,
      appRecords: ba.value
    };
  },
  api: f0(Qd)
});
var Uo = ce.__VUE_DEVTOOLS_KIT_CONTEXT__;
q();
p1(m1());
var ef, tf;
(tf = (ef = ce).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (ef.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
q();
q();
function p0(e) {
  ut.highPerfModeEnabled = e ?? !ut.highPerfModeEnabled, !e && At.value && Wm(At.value.app);
}
q();
q();
q();
function h0(e) {
  ut.devtoolsClientDetected = {
    ...ut.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(ut.devtoolsClientDetected).some(Boolean);
  p0(!t);
}
var nf, sf;
(sf = (nf = ce).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (nf.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = h0);
q();
q();
q();
q();
q();
q();
q();
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
}, Km = class {
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
}, g0 = class extends Km {
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
function Co(e, t) {
  Object.entries(e).forEach(([n, s]) => t(s, n));
}
function Oi(e, t) {
  return e.indexOf(t) !== -1;
}
function of(e, t) {
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
q();
q();
var b0 = (e) => Object.prototype.toString.call(e).slice(8, -1), zm = (e) => typeof e > "u", E0 = (e) => e === null, kr = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Kl = (e) => kr(e) && Object.keys(e).length === 0, as = (e) => Array.isArray(e), w0 = (e) => typeof e == "string", A0 = (e) => typeof e == "number" && !isNaN(e), S0 = (e) => typeof e == "boolean", O0 = (e) => e instanceof RegExp, Rr = (e) => e instanceof Map, Ir = (e) => e instanceof Set, qm = (e) => b0(e) === "Symbol", C0 = (e) => e instanceof Date && !isNaN(e.valueOf()), T0 = (e) => e instanceof Error, rf = (e) => typeof e == "number" && isNaN(e), N0 = (e) => S0(e) || E0(e) || zm(e) || A0(e) || w0(e) || qm(e), D0 = (e) => typeof e == "bigint", x0 = (e) => e === 1 / 0 || e === -1 / 0, k0 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), R0 = (e) => e instanceof URL;
q();
var Ym = (e) => e.replace(/\./g, "\\."), Za = (e) => e.map(String).map(Ym).join("."), gr = (e) => {
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
var Xm = [
  vn(zm, "undefined", () => null, () => {
  }),
  vn(D0, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  vn(C0, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  vn(T0, "Error", (e, t) => {
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
  vn(O0, "regexp", (e) => "" + e, (e) => {
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
  vn((e) => rf(e) || x0(e), "number", (e) => rf(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  vn((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  vn(R0, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Ea(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Gm = Ea((e, t) => qm(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
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
].reduce((e, t) => (e[t.name] = t, e), {}), Qm = Ea(k0, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = I0[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Jm(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Zm = Ea(Jm, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), eg = Ea((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), P0 = [Zm, Gm, eg, Qm], af = (e, t) => {
  const n = of(P0, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = of(Xm, (o) => o.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, tg = {};
Xm.forEach((e) => {
  tg[e.annotation] = e;
});
var V0 = (e, t, n) => {
  if (as(t))
    switch (t[0]) {
      case "symbol":
        return Gm.untransform(e, t, n);
      case "class":
        return Zm.untransform(e, t, n);
      case "custom":
        return eg.untransform(e, t, n);
      case "typed-array":
        return Qm.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const s = tg[t];
    if (!s)
      throw new Error("Unknown transformation: " + t);
    return s.untransform(e, n);
  }
};
q();
var po = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function ng(e) {
  if (Oi(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Oi(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Oi(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var M0 = (e, t) => {
  ng(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Ir(e))
      e = po(e, +s);
    else if (Rr(e)) {
      const o = +s, r = +t[++n] == 0 ? "key" : "value", i = po(e, o);
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
  if (ng(t), t.length === 0)
    return n(e);
  let s = e;
  for (let r = 0; r < t.length - 1; r++) {
    const i = t[r];
    if (as(s)) {
      const a = +i;
      s = s[a];
    } else if (kr(s))
      s = s[i];
    else if (Ir(s)) {
      const a = +i;
      s = po(s, a);
    } else if (Rr(s)) {
      if (r === t.length - 2)
        break;
      const c = +i, f = +t[++r] == 0 ? "key" : "value", u = po(s, c);
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
  if (as(s) ? s[+o] = n(s[+o]) : kr(s) && (s[o] = n(s[o])), Ir(s)) {
    const r = po(s, +o), i = n(r);
    r !== i && (s.delete(r), s.add(i));
  }
  if (Rr(s)) {
    const r = +t[t.length - 2], i = po(s, r);
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
    Co(e, (r, i) => ql(r, t, [...n, ...gr(i)]));
    return;
  }
  const [s, o] = e;
  o && Co(o, (r, i) => {
    ql(r, t, [...n, ...gr(i)]);
  }), t(s, n);
}
function L0(e, t, n) {
  return ql(t, (s, o) => {
    e = zl(e, o, (r) => V0(r, s, n));
  }), e;
}
function F0(e, t) {
  function n(s, o) {
    const r = M0(e, gr(o));
    s.map(gr).forEach((i) => {
      e = zl(e, i, () => r);
    });
  }
  if (as(t)) {
    const [s, o] = t;
    s.forEach((r) => {
      e = zl(e, gr(r), () => e);
    }), o && Co(o, n);
  } else
    Co(t, n);
  return e;
}
var B0 = (e, t) => kr(e) || as(e) || Rr(e) || Ir(e) || Jm(e, t);
function j0(e, t, n) {
  const s = n.get(e);
  s ? s.push(t) : n.set(e, [t]);
}
function U0(e, t) {
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
var sg = (e, t, n, s, o = [], r = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const c = N0(e);
  if (!c) {
    j0(e, o, t);
    const g = i.get(e);
    if (g)
      return s ? {
        transformedValue: null
      } : g;
  }
  if (!B0(e, n)) {
    const g = af(e, n), v = g ? {
      transformedValue: g.value,
      annotations: [g.type]
    } : {
      transformedValue: e
    };
    return c || i.set(e, v), v;
  }
  if (Oi(r, e))
    return {
      transformedValue: null
    };
  const f = af(e, n), u = (a = f?.value) != null ? a : e, d = as(u) ? [] : {}, h = {};
  Co(u, (g, v) => {
    if (v === "__proto__" || v === "constructor" || v === "prototype")
      throw new Error(`Detected property ${v}. This is a prototype pollution risk, please remove it from your object.`);
    const _ = sg(g, t, n, s, [...o, v], [...r, e], i);
    d[v] = _.transformedValue, as(_.annotations) ? h[v] = _.annotations : kr(_.annotations) && Co(_.annotations, (y, E) => {
      h[Ym(v) + "." + E] = y;
    });
  });
  const p = Kl(h) ? {
    transformedValue: d,
    annotations: f ? [f.type] : void 0
  } : {
    transformedValue: d,
    annotations: f ? [f.type, h] : h
  };
  return c || i.set(e, p), p;
};
q();
q();
function og(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function lf(e) {
  return og(e) === "Array";
}
function H0(e) {
  if (og(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function $0(e, t, n, s, o) {
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
  if (!H0(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((o, r) => {
    if (lf(t.props) && !t.props.includes(r))
      return o;
    const i = e[r], a = Yl(i, t);
    return $0(o, r, a, e, t.nonenumerable), o;
  }, {});
}
var ze = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new g0(), this.symbolRegistry = new Km((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new y0(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = sg(e, t, this, this.dedupe), s = {
      json: n.transformedValue
    };
    n.annotations && (s.meta = {
      ...s.meta,
      values: n.annotations
    });
    const o = U0(t, this.dedupe);
    return o && (s.meta = {
      ...s.meta,
      referentialEqualities: o
    }), s;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let s = Yl(t);
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
var cf, uf;
(uf = (cf = ce).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (cf.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var df, ff;
(ff = (df = ce).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (df.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var pf, hf;
(hf = (pf = ce).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (pf.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var mf, gf;
(gf = (mf = ce).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (mf.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var vf, _f;
(_f = (vf = ce).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (vf.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var yf, bf;
(bf = (yf = ce).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (yf.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
q();
q();
q();
q();
q();
q();
q();
var Pe = {};
let ar;
const Pr = (e) => ar = e, rg = Pe.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Ks(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Sn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Sn || (Sn = {}));
const os = typeof window < "u", Ef = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function W0(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Yc(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    lg(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function ig(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Ci(e) {
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
const Ti = typeof navigator == "object" ? navigator : { userAgent: "" }, ag = /Macintosh/.test(Ti.userAgent) && /AppleWebKit/.test(Ti.userAgent) && !/Safari/.test(Ti.userAgent), lg = os ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ag ? K0 : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Ti ? z0 : (
      // Fallback to using FileReader and a popup
      q0
    )
  )
) : () => {
};
function K0(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? ig(s.href) ? Yc(e, t, n) : (s.target = "_blank", Ci(s)) : Ci(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    Ci(s);
  }, 0));
}
function z0(e, t = "download", n) {
  if (typeof e == "string")
    if (ig(e))
      Yc(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        Ci(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(W0(e, n), t);
}
function q0(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return Yc(e, t, n);
  const o = e.type === "application/octet-stream", r = /constructor/i.test(String(Ef.HTMLElement)) || "safari" in Ef, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && r || ag) && typeof FileReader < "u") {
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
function cg() {
  if (!("clipboard" in navigator))
    return dt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function ug(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (dt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Y0(e) {
  if (!cg())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), dt("Global state copied to clipboard.");
    } catch (t) {
      if (ug(t))
        return;
      dt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function X0(e) {
  if (!cg())
    try {
      dg(e, JSON.parse(await navigator.clipboard.readText())), dt("Global state pasted from clipboard.");
    } catch (t) {
      if (ug(t))
        return;
      dt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function G0(e) {
  try {
    lg(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    dt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Mn;
function Q0() {
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
async function J0(e) {
  try {
    const n = await Q0()();
    if (!n)
      return;
    const { text: s, file: o } = n;
    dg(e, JSON.parse(s)), dt(`Global state imported from "${o.name}".`);
  } catch (t) {
    dt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function dg(e, t) {
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
const fg = "🍍 Pinia (root)", Ni = "_root";
function Z0(e) {
  return Xc(e) ? {
    id: Ni,
    label: fg
  } : {
    id: e.$id,
    label: e.$id
  };
}
function ew(e) {
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
function tw(e) {
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
function nw(e) {
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
let ho = !0;
const Di = [], Ss = "pinia:mutations", mt = "pinia", { assign: sw } = Object, Ji = (e) => "🍍 " + e;
function ow(e, t) {
  $m({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Di,
    app: e
  }, (n) => {
    typeof n.now != "function" && dt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Ss,
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
            Y0(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await X0(t), n.sendInspectorTree(mt), n.sendInspectorState(mt);
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
            await J0(t), n.sendInspectorTree(mt), n.sendInspectorState(mt);
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
            type: Ji(i.$id),
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
            type: Ji(i.$id),
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
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(s.filter.toLowerCase()) : fg.toLowerCase().includes(s.filter.toLowerCase())) : o).map(Z0);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === mt) {
        const o = s.nodeId === Ni ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.nodeId !== Ni && (globalThis.$store = ye(o)), s.state = ew(o));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === mt) {
        const o = s.nodeId === Ni ? t : t._s.get(s.nodeId);
        if (!o)
          return dt(`store "${s.nodeId}" not found`, "error");
        const { path: r } = s;
        Xc(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), ho = !1, s.set(o, r, s.state.value), ho = !0;
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
        i[0] = "$state", ho = !1, s.set(r, i, s.state.value), ho = !0;
      }
    });
  });
}
function rw(e, t) {
  Di.includes(Ji(t.$id)) || Di.push(Ji(t.$id)), $m({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Di,
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
      const u = pg++;
      n.addTimelineEvent({
        layerId: Ss,
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
          layerId: Ss,
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
          layerId: Ss,
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
      Lt(() => te(t[i]), (a, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(mt), ho && n.addTimelineEvent({
          layerId: Ss,
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
      if (n.notifyComponentUpdate(), n.sendInspectorState(mt), !ho)
        return;
      const f = {
        time: s(),
        title: nw(a),
        data: sw({ store: Zt(t.$id) }, tw(i)),
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
        layerId: Ss,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = ss((i) => {
      o(i), n.addTimelineEvent({
        layerId: Ss,
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
let pg = 0, rs;
function wf(e, t, n) {
  const s = t.reduce((o, r) => (o[r] = ye(e)[r], o), {});
  for (const o in s)
    e[o] = function() {
      const r = pg, i = n ? new Proxy(e, {
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
function iw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      wf(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      ye(t)._hotUpdate = function(o) {
        s.apply(this, arguments), wf(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
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
  const e = Qp(!0), t = e.run(() => G({}));
  let n = [], s = [];
  const o = ss({
    install(r) {
      Pr(o), o._a = r, r.provide(rg, o), r.config.globalProperties.$pinia = o, Pe.NODE_ENV !== "production" && Pe.NODE_ENV !== "test" && os && ow(r, o), s.forEach((i) => n.push(i)), s = [];
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
  return Pe.NODE_ENV !== "production" && Pe.NODE_ENV !== "test" && os && typeof Proxy < "u" && o.use(iw), o;
}
function hg(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Ks(o) && Ks(s) && !Ke(s) && !on(s) ? e[n] = hg(o, s) : e[n] = s;
  }
  return e;
}
const mg = () => {
};
function Af(e, t, n, s = mg) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && Jp() && j_(o), o;
}
function so(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const lw = (e) => e(), Sf = Symbol(), el = Symbol();
function Xl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Ks(o) && Ks(s) && e.hasOwnProperty(n) && !Ke(s) && !on(s) ? e[n] = Xl(o, s) : e[n] = s;
  }
  return e;
}
const cw = Pe.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function uw(e) {
  return !Ks(e) || !Object.prototype.hasOwnProperty.call(e, cw);
}
const { assign: Kt } = Object;
function Of(e) {
  return !!(Ke(e) && e.effect);
}
function Cf(e, t, n, s) {
  const { state: o, actions: r, getters: i } = t, a = n.state.value[e];
  let c;
  function f() {
    !a && (Pe.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const u = Pe.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      cn(G(o ? o() : {}).value)
    ) : cn(n.state.value[e]);
    return Kt(u, r, Object.keys(i || {}).reduce((d, h) => (Pe.NODE_ENV !== "production" && h in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${e}".`), d[h] = ss(H(() => {
      Pr(n);
      const p = n._s.get(e);
      return i[h].call(p, p);
    })), d), {}));
  }
  return c = Gl(e, f, t, n, s, !0), c;
}
function Gl(e, t, n = {}, s, o, r) {
  let i;
  const a = Kt({ actions: {} }, n);
  if (Pe.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const c = { deep: !0 };
  Pe.NODE_ENV !== "production" && (c.onTrigger = (k) => {
    f ? p = k : f == !1 && !A._hotUpdating && (Array.isArray(p) ? p.push(k) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, d = [], h = [], p;
  const g = s.state.value[e];
  !r && !g && (Pe.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const v = G({});
  let _;
  function y(k) {
    let R;
    f = u = !1, Pe.NODE_ENV !== "production" && (p = []), typeof k == "function" ? (k(s.state.value[e]), R = {
      type: Sn.patchFunction,
      storeId: e,
      events: p
    }) : (Xl(s.state.value[e], k), R = {
      type: Sn.patchObject,
      payload: k,
      storeId: e,
      events: p
    });
    const w = _ = Symbol();
    Eo().then(() => {
      _ === w && (f = !0);
    }), u = !0, so(d, R, s.state.value[e]);
  }
  const E = r ? function() {
    const { state: R } = n, w = R ? R() : {};
    this.$patch(($) => {
      Kt($, w);
    });
  } : (
    /* istanbul ignore next */
    Pe.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : mg
  );
  function m() {
    i.stop(), d = [], h = [], s._s.delete(e);
  }
  const D = (k, R = "") => {
    if (Sf in k)
      return k[el] = R, k;
    const w = function() {
      Pr(s);
      const $ = Array.from(arguments), he = [], ne = [];
      function V(oe) {
        he.push(oe);
      }
      function L(oe) {
        ne.push(oe);
      }
      so(h, {
        args: $,
        name: w[el],
        store: A,
        after: V,
        onError: L
      });
      let W;
      try {
        W = k.apply(this && this.$id === e ? this : A, $);
      } catch (oe) {
        throw so(ne, oe), oe;
      }
      return W instanceof Promise ? W.then((oe) => (so(he, oe), oe)).catch((oe) => (so(ne, oe), Promise.reject(oe))) : (so(he, W), W);
    };
    return w[Sf] = !0, w[el] = R, w;
  }, I = /* @__PURE__ */ ss({
    actions: {},
    getters: {},
    state: [],
    hotState: v
  }), C = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Af.bind(null, h),
    $patch: y,
    $reset: E,
    $subscribe(k, R = {}) {
      const w = Af(d, k, R.detached, () => $()), $ = i.run(() => Lt(() => s.state.value[e], (he) => {
        (R.flush === "sync" ? u : f) && k({
          storeId: e,
          type: Sn.direct,
          events: p
        }, he);
      }, Kt({}, c, R)));
      return w;
    },
    $dispose: m
  }, A = Us(Pe.NODE_ENV !== "production" || Pe.NODE_ENV !== "production" && Pe.NODE_ENV !== "test" && os ? Kt(
    {
      _hmrPayload: I,
      _customProperties: ss(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    C
    // must be added later
    // setupStore
  ) : C);
  s._s.set(e, A);
  const S = (s._a && s._a.runWithContext || lw)(() => s._e.run(() => (i = Qp()).run(() => t({ action: D }))));
  for (const k in S) {
    const R = S[k];
    if (Ke(R) && !Of(R) || on(R))
      Pe.NODE_ENV !== "production" && o ? v.value[k] = vi(S, k) : r || (g && uw(R) && (Ke(R) ? R.value = g[k] : Xl(R, g[k])), s.state.value[e][k] = R), Pe.NODE_ENV !== "production" && I.state.push(k);
    else if (typeof R == "function") {
      const w = Pe.NODE_ENV !== "production" && o ? R : D(R, k);
      S[k] = w, Pe.NODE_ENV !== "production" && (I.actions[k] = R), a.actions[k] = R;
    } else Pe.NODE_ENV !== "production" && Of(R) && (I.getters[k] = r ? (
      // @ts-expect-error
      n.getters[k]
    ) : R, os && (S._getters || // @ts-expect-error: same
    (S._getters = ss([]))).push(k));
  }
  if (Kt(A, S), Kt(ye(A), S), Object.defineProperty(A, "$state", {
    get: () => Pe.NODE_ENV !== "production" && o ? v.value : s.state.value[e],
    set: (k) => {
      if (Pe.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      y((R) => {
        Kt(R, k);
      });
    }
  }), Pe.NODE_ENV !== "production" && (A._hotUpdate = ss((k) => {
    A._hotUpdating = !0, k._hmrPayload.state.forEach((R) => {
      if (R in A.$state) {
        const w = k.$state[R], $ = A.$state[R];
        typeof w == "object" && Ks(w) && Ks($) ? hg(w, $) : k.$state[R] = $;
      }
      A[R] = vi(k.$state, R);
    }), Object.keys(A.$state).forEach((R) => {
      R in k.$state || delete A[R];
    }), f = !1, u = !1, s.state.value[e] = vi(k._hmrPayload, "hotState"), u = !0, Eo().then(() => {
      f = !0;
    });
    for (const R in k._hmrPayload.actions) {
      const w = k[R];
      A[R] = //
      D(w, R);
    }
    for (const R in k._hmrPayload.getters) {
      const w = k._hmrPayload.getters[R], $ = r ? (
        // special handling of options api
        H(() => (Pr(s), w.call(A, A)))
      ) : w;
      A[R] = //
      $;
    }
    Object.keys(A._hmrPayload.getters).forEach((R) => {
      R in k._hmrPayload.getters || delete A[R];
    }), Object.keys(A._hmrPayload.actions).forEach((R) => {
      R in k._hmrPayload.actions || delete A[R];
    }), A._hmrPayload = k._hmrPayload, A._getters = k._getters, A._hotUpdating = !1;
  })), Pe.NODE_ENV !== "production" && Pe.NODE_ENV !== "test" && os) {
    const k = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(A, R, Kt({ value: A[R] }, k));
    });
  }
  return s._p.forEach((k) => {
    if (Pe.NODE_ENV !== "production" && Pe.NODE_ENV !== "test" && os) {
      const R = i.run(() => k({
        store: A,
        app: s._a,
        pinia: s,
        options: a
      }));
      Object.keys(R || {}).forEach((w) => A._customProperties.add(w)), Kt(A, R);
    } else
      Kt(A, i.run(() => k({
        store: A,
        app: s._a,
        pinia: s,
        options: a
      })));
  }), Pe.NODE_ENV !== "production" && A.$state && typeof A.$state == "object" && typeof A.$state.constructor == "function" && !A.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${A.$id}".`), g && r && n.hydrate && n.hydrate(A.$state, g), f = !0, u = !0, A;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ps(e, t, n) {
  let s;
  const o = typeof t == "function";
  s = o ? n : t;
  function r(i, a) {
    const c = db();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (Pe.NODE_ENV === "test" && ar && ar._testing ? null : i) || (c ? _t(rg, null) : null), i && Pr(i), Pe.NODE_ENV !== "production" && !ar)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = ar, i._s.has(e) || (o ? Gl(e, t, s, i) : Cf(e, s, i), Pe.NODE_ENV !== "production" && (r._pinia = i));
    const f = i._s.get(e);
    if (Pe.NODE_ENV !== "production" && a) {
      const u = "__hot:" + e, d = o ? Gl(u, t, s, i, !0) : Cf(u, Kt({}, s), i, !0);
      a._hotUpdate(d), delete i.state.value[u], i._s.delete(u);
    }
    if (Pe.NODE_ENV !== "production" && os) {
      const u = Rn();
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
function wa(e) {
  const t = ye(e), n = {};
  for (const s in t) {
    const o = t[s];
    o.effect ? n[s] = // ...
    H({
      get: () => e[s],
      set(r) {
        e[s] = r;
      }
    }) : (Ke(o) || on(o)) && (n[s] = // ---
    vi(e, s));
  }
  return n;
}
function dw() {
  return gg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gg() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const fw = typeof Proxy == "function", pw = "devtools-plugin:setup", hw = "plugin:settings:set";
let oo, Ql;
function mw() {
  var e;
  return oo !== void 0 || (typeof window < "u" && window.performance ? (oo = !0, Ql = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (oo = !0, Ql = globalThis.perf_hooks.performance) : oo = !1), oo;
}
function gw() {
  return mw() ? Ql.now() : Date.now();
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
  const n = e, s = gg(), o = dw(), r = fw && n.enableEarlyProxy;
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
var Ae = {};
const Bn = typeof document < "u";
function vg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function yw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && vg(e.default);
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
const vr = () => {
}, Ft = Array.isArray;
function De(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const _g = /#/g, bw = /&/g, Ew = /\//g, ww = /=/g, Aw = /\?/g, yg = /\+/g, Sw = /%5B/g, Ow = /%5D/g, bg = /%5E/g, Cw = /%60/g, Eg = /%7B/g, Tw = /%7C/g, wg = /%7D/g, Nw = /%20/g;
function Gc(e) {
  return encodeURI("" + e).replace(Tw, "|").replace(Sw, "[").replace(Ow, "]");
}
function Dw(e) {
  return Gc(e).replace(Eg, "{").replace(wg, "}").replace(bg, "^");
}
function Jl(e) {
  return Gc(e).replace(yg, "%2B").replace(Nw, "+").replace(_g, "%23").replace(bw, "%26").replace(Cw, "`").replace(Eg, "{").replace(wg, "}").replace(bg, "^");
}
function xw(e) {
  return Jl(e).replace(ww, "%3D");
}
function kw(e) {
  return Gc(e).replace(_g, "%23").replace(Aw, "%3F");
}
function Rw(e) {
  return e == null ? "" : kw(e).replace(Ew, "%2F");
}
function To(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    Ae.NODE_ENV !== "production" && De(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Iw = /\/$/, Pw = (e) => e.replace(Iw, "");
function nl(e, t, n = "/") {
  let s, o = {}, r = "", i = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return a < c && a >= 0 && (c = -1), c > -1 && (s = t.slice(0, c), r = t.slice(c + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (s = s || t.slice(0, a), i = t.slice(a, t.length)), s = Lw(s ?? t, n), {
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
function Tf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Nf(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && ls(t.matched[s], n.matched[o]) && Ag(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ls(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ag(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Mw(e[n], t[n]))
      return !1;
  return !0;
}
function Mw(e, t) {
  return Ft(e) ? Df(e, t) : Ft(t) ? Df(t, e) : e === t;
}
function Df(e, t) {
  return Ft(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Lw(e, t) {
  if (e.startsWith("/"))
    return e;
  if (Ae.NODE_ENV !== "production" && !t.startsWith("/"))
    return De(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Vr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Vr || (Vr = {}));
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
const Aa = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Hw(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if (Ae.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const r = document.querySelector(e.el);
        if (s && r) {
          De(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        De(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      Ae.NODE_ENV !== "production" && De(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Uw(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function xf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Zl = /* @__PURE__ */ new Map();
function $w(e, t) {
  Zl.set(e, t);
}
function Ww(e) {
  const t = Zl.get(e);
  return Zl.delete(e), t;
}
let Kw = () => location.protocol + "//" + location.host;
function Sg(e, t) {
  const { pathname: n, search: s, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, c = o.slice(a);
    return c[0] !== "/" && (c = "/" + c), Tf(c, "");
  }
  return Tf(n, e) + s + o;
}
function zw(e, t, n, s) {
  let o = [], r = [], i = null;
  const a = ({ state: h }) => {
    const p = Sg(e, location), g = n.value, v = t.value;
    let _ = 0;
    if (h) {
      if (n.value = p, t.value = h, i && i === g) {
        i = null;
        return;
      }
      _ = v ? h.position - v.position : 0;
    } else
      s(p);
    o.forEach((y) => {
      y(n.value, g, {
        delta: _,
        type: Vr.pop,
        direction: _ ? _ > 0 ? _r.forward : _r.back : _r.unknown
      });
    });
  };
  function c() {
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
    h.state && h.replaceState(Be({}, h.state, { scroll: Aa() }), "");
  }
  function d() {
    for (const h of r)
      h();
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
    scroll: o ? Aa() : null
  };
}
function qw(e) {
  const { history: t, location: n } = window, s = {
    value: Sg(e, n)
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
    const d = e.indexOf("#"), h = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : Kw() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](f, "", h), o.value = f;
    } catch (p) {
      Ae.NODE_ENV !== "production" ? De("Error with push/replace State", p) : console.error(p), n[u ? "replace" : "assign"](h);
    }
  }
  function i(c, f) {
    const u = Be({}, t.state, kf(
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
        scroll: Aa()
      }
    );
    Ae.NODE_ENV !== "production" && !t.state && De(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), r(u.current, u, !0);
    const d = Be({}, kf(s.value, c, null), { position: u.position + 1 }, f);
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
  const o = Be({
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
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Ae.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && De(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Yw(e);
}
function Zi(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Og(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ec = Symbol(Ae.NODE_ENV !== "production" ? "navigation failure" : "");
var Rf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Rf || (Rf = {}));
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
function No(e, t) {
  return Ae.NODE_ENV !== "production" ? Be(new Error(Gw[e](t)), {
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
const If = "[^/]+?", Zw = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, eA = /[.+*?^${}()[\]/\\]/g;
function tA(e, t) {
  const n = Be({}, Zw, t), s = [];
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
        const { value: g, repeatable: v, optional: _, regexp: y } = h;
        r.push({
          name: g,
          repeatable: v,
          optional: _
        });
        const E = y || If;
        if (E !== If) {
          p += 10;
          try {
            new RegExp(`(${E})`);
          } catch (D) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${E}): ` + D.message);
          }
        }
        let m = v ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
        d || (m = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        _ && f.length < 2 ? `(?:/${m})` : "/" + m), _ && (m += "?"), o += m, p += 20, _ && (p += -8), v && (p += -20), E === ".*" && (p += -50);
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
  function c(f) {
    let u = "", d = !1;
    for (const h of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const p of h)
        if (p.type === 0)
          u += p.value;
        else if (p.type === 1) {
          const { value: g, repeatable: v, optional: _ } = p, y = g in f ? f[g] : "";
          if (Ft(y) && !v)
            throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
          const E = Ft(y) ? y.join("/") : y;
          if (!E)
            if (_)
              h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${g}"`);
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
function Cg(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const r = nA(s[n], o[n]);
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
    throw new Error(Ae.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
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
  function h() {
    f += c;
  }
  for (; a < e.length; ) {
    if (c = e[a++], c === "\\" && n !== 2) {
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (f && d(), i()) : c === ":" ? (d(), n = 1) : h();
        break;
      case 4:
        h(), n = s;
        break;
      case 1:
        c === "(" ? n = 2 : oA.test(c) ? h() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--);
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
  if (Ae.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const i of s.keys)
      r.has(i.name) && De(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(i.name);
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
function aA(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Ff({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(d) {
    return s.get(d);
  }
  function r(d, h, p) {
    const g = !p, v = Mf(d);
    Ae.NODE_ENV !== "production" && dA(v, h), v.aliasOf = p && p.record;
    const _ = Ff(t, d), y = [v];
    if ("alias" in d) {
      const D = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const I of D)
        y.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Mf(Be({}, v, {
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
    let E, m;
    for (const D of y) {
      const { path: I } = D;
      if (h && I[0] !== "/") {
        const C = h.record.path, A = C[C.length - 1] === "/" ? "" : "/";
        D.path = h.record.path + (I && A + I);
      }
      if (Ae.NODE_ENV !== "production" && D.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (E = iA(D, h, _), Ae.NODE_ENV !== "production" && h && I[0] === "/" && pA(E, h), p ? (p.alias.push(E), Ae.NODE_ENV !== "production" && uA(p, E)) : (m = m || E, m !== E && m.alias.push(E), g && d.name && !Lf(E) && (Ae.NODE_ENV !== "production" && fA(d, h), i(d.name))), Tg(E) && c(E), v.children) {
        const C = v.children;
        for (let A = 0; A < C.length; A++)
          r(C[A], E, p && p.children[A]);
      }
      p = p || E;
    }
    return m ? () => {
      i(m);
    } : vr;
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
  function c(d) {
    const h = hA(d, n);
    n.splice(h, 0, d), d.record.name && !Lf(d) && s.set(d.record.name, d);
  }
  function f(d, h) {
    let p, g = {}, v, _;
    if ("name" in d && d.name) {
      if (p = s.get(d.name), !p)
        throw No(1, {
          location: d
        });
      if (Ae.NODE_ENV !== "production") {
        const m = Object.keys(d.params || {}).filter((D) => !p.keys.find((I) => I.name === D));
        m.length && De(`Discarded invalid param(s) "${m.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      _ = p.record.name, g = Be(
        // paramsFromLocation is a new object
        Vf(
          h.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          p.keys.filter((m) => !m.optional).concat(p.parent ? p.parent.keys.filter((m) => m.optional) : []).map((m) => m.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && Vf(d.params, p.keys.map((m) => m.name))
      ), v = p.stringify(g);
    } else if (d.path != null)
      v = d.path, Ae.NODE_ENV !== "production" && !v.startsWith("/") && De(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), p = n.find((m) => m.re.test(v)), p && (g = p.parse(v), _ = p.record.name);
    else {
      if (p = h.name ? s.get(h.name) : n.find((m) => m.re.test(h.path)), !p)
        throw No(1, {
          location: d,
          currentLocation: h
        });
      _ = p.record.name, g = Be({}, h.params, d.params), v = p.stringify(g);
    }
    const y = [];
    let E = p;
    for (; E; )
      y.unshift(E.record), E = E.parent;
    return {
      name: _,
      path: v,
      params: g,
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
function Vf(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function Mf(e) {
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
function Lf(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function cA(e) {
  return e.reduce((t, n) => Be(t, n.meta), {});
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
function uA(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(tc.bind(null, n)))
      return De(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(tc.bind(null, n)))
      return De(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function dA(e, t) {
  t && t.record.name && !e.name && !e.path && De(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function fA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function pA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(tc.bind(null, n)))
      return De(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function hA(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const r = n + s >> 1;
    Cg(e, t[r]) < 0 ? s = r : n = r + 1;
  }
  const o = mA(e);
  return o && (s = t.lastIndexOf(o, s - 1), Ae.NODE_ENV !== "production" && s < 0 && De(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), s;
}
function mA(e) {
  let t = e;
  for (; t = t.parent; )
    if (Tg(t) && Cg(e, t) === 0)
      return t;
}
function Tg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function gA(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(yg, " "), i = r.indexOf("="), a = To(i < 0 ? r : r.slice(0, i)), c = i < 0 ? null : To(r.slice(i + 1));
    if (a in t) {
      let f = t[a];
      Ft(f) || (f = t[a] = [f]), f.push(c);
    } else
      t[a] = c;
  }
  return t;
}
function Bf(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = xw(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ft(s) ? s.map((r) => r && Jl(r)) : [s && Jl(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function vA(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = Ft(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const _A = Symbol(Ae.NODE_ENV !== "production" ? "router view location matched" : ""), jf = Symbol(Ae.NODE_ENV !== "production" ? "router view depth" : ""), Qc = Symbol(Ae.NODE_ENV !== "production" ? "router" : ""), Jc = Symbol(Ae.NODE_ENV !== "production" ? "route location" : ""), nc = Symbol(Ae.NODE_ENV !== "production" ? "router view location" : "");
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
    const f = (h) => {
      h === !1 ? c(No(4, {
        from: n,
        to: t
      })) : h instanceof Error ? c(h) : Zi(h) ? c(No(2, {
        from: t,
        to: h
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === i && typeof h == "function" && i.push(h), a());
    }, u = r(() => e.call(s && s.instances[o], t, n, Ae.NODE_ENV !== "production" ? yA(f, t, n) : f));
    let d = Promise.resolve(u);
    if (e.length < 3 && (d = d.then(f)), Ae.NODE_ENV !== "production" && e.length > 2) {
      const h = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        d = d.then((p) => f._called ? p : (De(h), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        De(h), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((h) => c(h));
  });
}
function yA(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && De(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function sl(e, t, n, s, o = (r) => r()) {
  const r = [];
  for (const i of e) {
    Ae.NODE_ENV !== "production" && !i.components && !i.children.length && De(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let c = i.components[a];
      if (Ae.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw De(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          De(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = c;
          c = () => f;
        } else c.__asyncLoader && // warn only once per component
        !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, De(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (vg(c)) {
          const u = (c.__vccOpts || c)[t];
          u && r.push(ts(u, n, s, i, a, o));
        } else {
          let f = c();
          Ae.NODE_ENV !== "production" && !("catch" in f) && (De(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), r.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const d = yw(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = d;
            const p = (d.__vccOpts || d)[t];
            return p && ts(p, n, s, i, a, o)();
          }));
        }
    }
  }
  return r;
}
function Uf(e) {
  const t = _t(Qc), n = _t(Jc);
  let s = !1, o = null;
  const r = H(() => {
    const u = te(e.to);
    return Ae.NODE_ENV !== "production" && (!s || u !== o) && (Zi(u) || (s ? De(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, o, `
- props:`, e) : De(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), o = u, s = !0), t.resolve(u);
  }), i = H(() => {
    const { matched: u } = r.value, { length: d } = u, h = u[d - 1], p = n.matched;
    if (!h || !p.length)
      return -1;
    const g = p.findIndex(ls.bind(null, h));
    if (g > -1)
      return g;
    const v = Hf(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Hf(h) === v && // avoid comparing the child with its parent
      p[p.length - 1].path !== v ? p.findIndex(ls.bind(null, u[d - 2])) : g
    );
  }), a = H(() => i.value > -1 && SA(n.params, r.value.params)), c = H(() => i.value > -1 && i.value === n.matched.length - 1 && Ag(n.params, r.value.params));
  function f(u = {}) {
    if (AA(u)) {
      const d = t[te(e.replace) ? "replace" : "push"](
        te(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(vr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (Ae.NODE_ENV !== "production" && Bn) {
    const u = Rn();
    if (u) {
      const d = {
        route: r.value,
        isActive: a.value,
        isExactActive: c.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), pa(() => {
        d.route = r.value, d.isActive = a.value, d.isExactActive = c.value, d.error = Zi(te(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: H(() => r.value.href),
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
  useLink: Uf,
  setup(e, { slots: t }) {
    const n = Us(Uf(e)), { options: s } = _t(Qc), o = H(() => ({
      [$f(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [$f(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && bA(t.default(n));
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
    } else if (!Ft(o) || o.length !== s.length || s.some((r, i) => r !== o[i]))
      return !1;
  }
  return !0;
}
function Hf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const $f = (e, t, n) => e ?? t ?? n, OA = /* @__PURE__ */ Te({
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
    Ae.NODE_ENV !== "production" && TA();
    const s = _t(nc), o = H(() => e.route || s.value), r = _t(jf, 0), i = H(() => {
      let f = te(r);
      const { matched: u } = o.value;
      let d;
      for (; (d = u[f]) && !d.components; )
        f++;
      return f;
    }), a = H(() => o.value.matched[i.value]);
    bo(jf, H(() => i.value + 1)), bo(_A, a), bo(nc, o);
    const c = G();
    return Lt(() => [c.value, a.value, e.name], ([f, u, d], [h, p, g]) => {
      u && (u.instances[d] = f, p && p !== u && f && f === h && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !ls(u, p) || !h) && (u.enterCallbacks[d] || []).forEach((v) => v(f));
    }, { flush: "post" }), () => {
      const f = o.value, u = e.name, d = a.value, h = d && d.components[u];
      if (!h)
        return Wf(n.default, { Component: h, route: f });
      const p = d.props[u], g = p ? p === !0 ? f.params : typeof p == "function" ? p(f) : p : null, _ = Mc(h, Be({}, g, t, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (d.instances[u] = null);
        },
        ref: c
      }));
      if (Ae.NODE_ENV !== "production" && Bn && _.ref) {
        const y = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (Ft(_.ref) ? _.ref.map((m) => m.i) : [_.ref.i]).forEach((m) => {
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
const CA = OA;
function TA() {
  const e = Rn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    De(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
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
function li(e) {
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
        value: er(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const h = d.__vrv_devtools;
        u.tags.push({
          label: (h.name ? `${h.name.toString()}: ` : "") + h.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Ng
        });
      }
      Ft(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((h) => {
        let p = h.route.path, g = kg, v = "", _ = 0;
        h.error ? (p = h.error, g = PA, _ = VA) : h.isExactActive ? (g = xg, v = "This is exactly active") : h.isActive && (g = Dg, v = "This link is active"), u.tags.push({
          label: p,
          textColor: _,
          tooltip: v,
          backgroundColor: g
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
      const h = {
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
          data: h,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, d, h) => {
      const p = {
        guard: li("afterEach")
      };
      h ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: h ? h.message : "",
          tooltip: "Navigation Failure",
          value: h
        }
      }, p.status = li("❌")) : p.status = li("✅"), p.from = er(d, "Current Location during this navigation"), p.to = er(u, "Target location"), o.addTimelineEvent({
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
    function c() {
      if (!f)
        return;
      const u = f;
      let d = n.getRoutes().filter((h) => !h.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !h.parent.record.components);
      d.forEach(Pg), u.filter && (d = d.filter((h) => (
        // save matches state based on the payload
        sc(h, u.filter.toLowerCase())
      ))), d.forEach((h) => Ig(h, t.currentRoute.value)), u.rootNodes = d.map(Rg);
    }
    let f;
    o.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === a && c();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const h = n.getRoutes().find((p) => p.record.__vd_id === u.nodeId);
        h && (u.state = {
          options: kA(h)
        });
      }
    }), o.sendInspectorTree(a), o.sendInspectorState(a);
  });
}
function xA(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function kA(e) {
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
        display: e.keys.map((s) => `${s.name}${xA(s)}`).join(" "),
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
const Ng = 15485081, Dg = 2450411, xg = 8702998, RA = 2282478, kg = 16486972, IA = 6710886, PA = 16704226, VA = 12131356;
function Rg(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: RA
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: kg
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Ng
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: xg
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Dg
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
    children: e.children.map(Rg)
  };
}
let MA = 0;
const LA = /^\/(.*)\/([a-z]*)$/;
function Ig(e, t) {
  const n = t.matched.length && ls(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => ls(s, e.record))), e.children.forEach((s) => Ig(s, t));
}
function Pg(e) {
  e.__vd_match = !1, e.children.forEach(Pg);
}
function sc(e, t) {
  const n = String(e.re).match(LA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => sc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = To(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => sc(i, t));
}
function FA(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function BA(e) {
  const t = aA(e.routes, e), n = e.parseQuery || gA, s = e.stringifyQuery || Bf, o = e.history;
  if (Ae.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const r = Zo(), i = Zo(), a = Zo(), c = gh(Gn);
  let f = Gn;
  Bn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = tl.bind(null, (j) => "" + j), d = tl.bind(null, Rw), h = (
    // @ts-expect-error: intentionally avoid the type check
    tl.bind(null, To)
  );
  function p(j, re) {
    let ae, fe;
    return Og(j) ? (ae = t.getRecordMatcher(j), Ae.NODE_ENV !== "production" && !ae && De(`Parent route "${String(j)}" not found when adding child route`, re), fe = re) : fe = j, t.addRoute(fe, ae);
  }
  function g(j) {
    const re = t.getRecordMatcher(j);
    re ? t.removeRoute(re) : Ae.NODE_ENV !== "production" && De(`Cannot remove non-existent route "${String(j)}"`);
  }
  function v() {
    return t.getRoutes().map((j) => j.record);
  }
  function _(j) {
    return !!t.getRecordMatcher(j);
  }
  function y(j, re) {
    if (re = Be({}, re || c.value), typeof j == "string") {
      const O = nl(n, j, re.path), M = t.resolve({ path: O.path }, re), K = o.createHref(O.fullPath);
      return Ae.NODE_ENV !== "production" && (K.startsWith("//") ? De(`Location "${j}" resolved to "${K}". A resolved location cannot start with multiple slashes.`) : M.matched.length || De(`No match found for location with path "${j}"`)), Be(O, M, {
        params: h(M.params),
        hash: To(O.hash),
        redirectedFrom: void 0,
        href: K
      });
    }
    if (Ae.NODE_ENV !== "production" && !Zi(j))
      return De(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, j), y({});
    let ae;
    if (j.path != null)
      Ae.NODE_ENV !== "production" && "params" in j && !("name" in j) && // @ts-expect-error: the type is never
      Object.keys(j.params).length && De(`Path "${j.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), ae = Be({}, j, {
        path: nl(n, j.path, re.path).path
      });
    else {
      const O = Be({}, j.params);
      for (const M in O)
        O[M] == null && delete O[M];
      ae = Be({}, j, {
        params: d(O)
      }), re.params = d(re.params);
    }
    const fe = t.resolve(ae, re), Ne = j.hash || "";
    Ae.NODE_ENV !== "production" && Ne && !Ne.startsWith("#") && De(`A \`hash\` should always start with the character "#". Replace "${Ne}" with "#${Ne}".`), fe.params = u(h(fe.params));
    const Xe = Vw(s, Be({}, j, {
      hash: Dw(Ne),
      path: fe.path
    })), b = o.createHref(Xe);
    return Ae.NODE_ENV !== "production" && (b.startsWith("//") ? De(`Location "${j}" resolved to "${b}". A resolved location cannot start with multiple slashes.`) : fe.matched.length || De(`No match found for location with path "${j.path != null ? j.path : j}"`)), Be({
      fullPath: Xe,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: Ne,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === Bf ? vA(j.query) : j.query || {}
      )
    }, fe, {
      redirectedFrom: void 0,
      href: b
    });
  }
  function E(j) {
    return typeof j == "string" ? nl(n, j, c.value.path) : Be({}, j);
  }
  function m(j, re) {
    if (f !== j)
      return No(8, {
        from: re,
        to: j
      });
  }
  function D(j) {
    return A(j);
  }
  function I(j) {
    return D(Be(E(j), { replace: !0 }));
  }
  function C(j) {
    const re = j.matched[j.matched.length - 1];
    if (re && re.redirect) {
      const { redirect: ae } = re;
      let fe = typeof ae == "function" ? ae(j) : ae;
      if (typeof fe == "string" && (fe = fe.includes("?") || fe.includes("#") ? fe = E(fe) : (
        // force empty params
        { path: fe }
      ), fe.params = {}), Ae.NODE_ENV !== "production" && fe.path == null && !("name" in fe))
        throw De(`Invalid redirect found:
${JSON.stringify(fe, null, 2)}
 when navigating to "${j.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Be({
        query: j.query,
        hash: j.hash,
        // avoid transferring params if the redirect has a path
        params: fe.path != null ? {} : j.params
      }, fe);
    }
  }
  function A(j, re) {
    const ae = f = y(j), fe = c.value, Ne = j.state, Xe = j.force, b = j.replace === !0, O = C(ae);
    if (O)
      return A(
        Be(E(O), {
          state: typeof O == "object" ? Be({}, Ne, O.state) : Ne,
          force: Xe,
          replace: b
        }),
        // keep original redirectedFrom if it exists
        re || ae
      );
    const M = ae;
    M.redirectedFrom = re;
    let K;
    return !Xe && Nf(s, fe, ae) && (K = No(16, { to: M, from: fe }), Le(
      fe,
      fe,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (K ? Promise.resolve(K) : k(M, fe)).catch((U) => Ln(U) ? (
      // navigation redirects still mark the router as ready
      Ln(
        U,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? U : Oe(U)
    ) : (
      // reject any unknown error
      W(U, M, fe)
    )).then((U) => {
      if (U) {
        if (Ln(
          U,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return Ae.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Nf(s, y(U.to), M) && // and we have done it a couple of times
          re && // @ts-expect-error: added only in dev
          (re._count = re._count ? (
            // @ts-expect-error
            re._count + 1
          ) : 1) > 30 ? (De(`Detected a possibly infinite redirection in a navigation guard when going from "${fe.fullPath}" to "${M.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : A(
            // keep options
            Be({
              // preserve an existing replacement but allow the redirect to override it
              replace: b
            }, E(U.to), {
              state: typeof U.to == "object" ? Be({}, Ne, U.to.state) : Ne,
              force: Xe
            }),
            // preserve the original redirectedFrom if any
            re || M
          );
      } else
        U = w(M, fe, !0, b, Ne);
      return R(M, fe, U), U;
    });
  }
  function T(j, re) {
    const ae = m(j, re);
    return ae ? Promise.reject(ae) : Promise.resolve();
  }
  function S(j) {
    const re = nt.values().next().value;
    return re && typeof re.runWithContext == "function" ? re.runWithContext(j) : j();
  }
  function k(j, re) {
    let ae;
    const [fe, Ne, Xe] = jA(j, re);
    ae = sl(fe.reverse(), "beforeRouteLeave", j, re);
    for (const O of fe)
      O.leaveGuards.forEach((M) => {
        ae.push(ts(M, j, re));
      });
    const b = T.bind(null, j, re);
    return ae.push(b), Tt(ae).then(() => {
      ae = [];
      for (const O of r.list())
        ae.push(ts(O, j, re));
      return ae.push(b), Tt(ae);
    }).then(() => {
      ae = sl(Ne, "beforeRouteUpdate", j, re);
      for (const O of Ne)
        O.updateGuards.forEach((M) => {
          ae.push(ts(M, j, re));
        });
      return ae.push(b), Tt(ae);
    }).then(() => {
      ae = [];
      for (const O of Xe)
        if (O.beforeEnter)
          if (Ft(O.beforeEnter))
            for (const M of O.beforeEnter)
              ae.push(ts(M, j, re));
          else
            ae.push(ts(O.beforeEnter, j, re));
      return ae.push(b), Tt(ae);
    }).then(() => (j.matched.forEach((O) => O.enterCallbacks = {}), ae = sl(Xe, "beforeRouteEnter", j, re, S), ae.push(b), Tt(ae))).then(() => {
      ae = [];
      for (const O of i.list())
        ae.push(ts(O, j, re));
      return ae.push(b), Tt(ae);
    }).catch((O) => Ln(
      O,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? O : Promise.reject(O));
  }
  function R(j, re, ae) {
    a.list().forEach((fe) => S(() => fe(j, re, ae)));
  }
  function w(j, re, ae, fe, Ne) {
    const Xe = m(j, re);
    if (Xe)
      return Xe;
    const b = re === Gn, O = Bn ? history.state : {};
    ae && (fe || b ? o.replace(j.fullPath, Be({
      scroll: b && O && O.scroll
    }, Ne)) : o.push(j.fullPath, Ne)), c.value = j, Le(j, re, ae, b), Oe();
  }
  let $;
  function he() {
    $ || ($ = o.listen((j, re, ae) => {
      if (!ft.listening)
        return;
      const fe = y(j), Ne = C(fe);
      if (Ne) {
        A(Be(Ne, { replace: !0, force: !0 }), fe).catch(vr);
        return;
      }
      f = fe;
      const Xe = c.value;
      Bn && $w(xf(Xe.fullPath, ae.delta), Aa()), k(fe, Xe).catch((b) => Ln(
        b,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? b : Ln(
        b,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (A(
        Be(E(b.to), {
          force: !0
        }),
        fe
        // avoid an uncaught rejection, let push call triggerError
      ).then((O) => {
        Ln(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !ae.delta && ae.type === Vr.pop && o.go(-1, !1);
      }).catch(vr), Promise.reject()) : (ae.delta && o.go(-ae.delta, !1), W(b, fe, Xe))).then((b) => {
        b = b || w(
          // after navigation, all matched components are resolved
          fe,
          Xe,
          !1
        ), b && (ae.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Ln(
          b,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-ae.delta, !1) : ae.type === Vr.pop && Ln(
          b,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), R(fe, Xe, b);
      }).catch(vr);
    }));
  }
  let ne = Zo(), V = Zo(), L;
  function W(j, re, ae) {
    Oe(j);
    const fe = V.list();
    return fe.length ? fe.forEach((Ne) => Ne(j, re, ae)) : (Ae.NODE_ENV !== "production" && De("uncaught error during route navigation:"), console.error(j)), Promise.reject(j);
  }
  function oe() {
    return L && c.value !== Gn ? Promise.resolve() : new Promise((j, re) => {
      ne.add([j, re]);
    });
  }
  function Oe(j) {
    return L || (L = !j, he(), ne.list().forEach(([re, ae]) => j ? ae(j) : re()), ne.reset()), j;
  }
  function Le(j, re, ae, fe) {
    const { scrollBehavior: Ne } = e;
    if (!Bn || !Ne)
      return Promise.resolve();
    const Xe = !ae && Ww(xf(j.fullPath, 0)) || (fe || !ae) && history.state && history.state.scroll || null;
    return Eo().then(() => Ne(j, re, Xe)).then((b) => b && Hw(b)).catch((b) => W(b, j, re));
  }
  const Se = (j) => o.go(j);
  let xe;
  const nt = /* @__PURE__ */ new Set(), ft = {
    currentRoute: c,
    listening: !0,
    addRoute: p,
    removeRoute: g,
    clearRoutes: t.clearRoutes,
    hasRoute: _,
    getRoutes: v,
    resolve: y,
    options: e,
    push: D,
    replace: I,
    go: Se,
    back: () => Se(-1),
    forward: () => Se(1),
    beforeEach: r.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: V.add,
    isReady: oe,
    install(j) {
      const re = this;
      j.component("RouterLink", wA), j.component("RouterView", CA), j.config.globalProperties.$router = re, Object.defineProperty(j.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => te(c)
      }), Bn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !xe && c.value === Gn && (xe = !0, D(o.location).catch((Ne) => {
        Ae.NODE_ENV !== "production" && De("Unexpected error when starting the router:", Ne);
      }));
      const ae = {};
      for (const Ne in Gn)
        Object.defineProperty(ae, Ne, {
          get: () => c.value[Ne],
          enumerable: !0
        });
      j.provide(Qc, re), j.provide(Jc, mh(ae)), j.provide(nc, c);
      const fe = j.unmount;
      nt.add(j), j.unmount = function() {
        nt.delete(j), nt.size < 1 && (f = Gn, $ && $(), $ = null, c.value = Gn, xe = !1, L = !1), fe();
      }, Ae.NODE_ENV !== "production" && Bn && DA(j, re, t);
    }
  };
  function Tt(j) {
    return j.reduce((re, ae) => re.then(() => S(ae)), Promise.resolve());
  }
  return ft;
}
function jA(e, t) {
  const n = [], s = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => ls(f, a)) ? s.push(a) : n.push(a));
    const c = e.matched[i];
    c && (t.matched.find((f) => ls(f, c)) || o.push(c));
  }
  return [n, s, o];
}
function Vg(e) {
  return _t(Jc);
}
const UA = { class: "nav nav-tabs mb-4" }, HA = { class: "nav-item" }, $A = { class: "nav-item" }, WA = { class: "nav-item" }, KA = { class: "nav-item" }, zA = { class: "nav-item" }, qA = /* @__PURE__ */ Te({
  __name: "NavigationMenu",
  setup(e) {
    const t = Vg();
    return (n, s) => {
      const o = Je("router-link");
      return N(), P("ul", UA, [
        l("li", HA, [
          le(o, {
            to: "/",
            class: ue(["nav-link", { active: te(t).name === "home" }]),
            "aria-current": te(t).name === "home" ? "page" : void 0
          }, {
            default: be(() => s[0] || (s[0] = [
              l("i", { class: "fas fa-home me-2" }, null, -1),
              J(" Home ")
            ])),
            _: 1,
            __: [0]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", $A, [
          le(o, {
            to: "/setup",
            class: ue(["nav-link", { active: te(t).name === "setup" }]),
            "aria-current": te(t).name === "setup" ? "page" : void 0
          }, {
            default: be(() => s[1] || (s[1] = [
              l("i", { class: "fas fa-cogs me-2" }, null, -1),
              J(" Setup ")
            ])),
            _: 1,
            __: [1]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", WA, [
          le(o, {
            to: "/monitor",
            class: ue(["nav-link", { active: te(t).name === "monitor" }]),
            "aria-current": te(t).name === "monitor" ? "page" : void 0
          }, {
            default: be(() => s[2] || (s[2] = [
              l("i", { class: "fas fa-search me-2" }, null, -1),
              J(" Monitor ")
            ])),
            _: 1,
            __: [2]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", KA, [
          le(o, {
            to: "/tasks",
            class: ue(["nav-link", { active: te(t).name === "tasks" }]),
            "aria-current": te(t).name === "tasks" ? "page" : void 0
          }, {
            default: be(() => s[3] || (s[3] = [
              l("i", { class: "fas fa-tasks me-2" }, null, -1),
              J(" Tasks ")
            ])),
            _: 1,
            __: [3]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", zA, [
          le(o, {
            to: "/archives",
            class: ue(["nav-link", { active: te(t).name === "archives" }]),
            "aria-current": te(t).name === "archives" ? "page" : void 0
          }, {
            default: be(() => s[4] || (s[4] = [
              l("i", { class: "fas fa-archive me-2" }, null, -1),
              J(" Archives ")
            ])),
            _: 1,
            __: [4]
          }, 8, ["class", "aria-current"])
        ])
      ]);
    };
  }
}), Gs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, YA = /* @__PURE__ */ Gs(qA, [["__scopeId", "data-v-18016484"]]), XA = /* @__PURE__ */ Te({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const s = Je("router-view");
      return N(), P("div", null, [
        l("main", null, [
          le(YA),
          le(s)
        ])
      ]);
    };
  }
}), GA = /* @__PURE__ */ Gs(XA, [["__scopeId", "data-v-a42a7003"]]);
function Mg(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: QA } = Object.prototype, { getPrototypeOf: Zc } = Object, { iterator: Sa, toStringTag: Lg } = Symbol, Oa = /* @__PURE__ */ ((e) => (t) => {
  const n = QA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dn = (e) => (e = e.toLowerCase(), (t) => Oa(t) === e), Ca = (e) => (t) => typeof t === e, { isArray: Ho } = Array, Mr = Ca("undefined");
function JA(e) {
  return e !== null && !Mr(e) && e.constructor !== null && !Mr(e.constructor) && Rt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Fg = dn("ArrayBuffer");
function ZA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Fg(e.buffer), t;
}
const eS = Ca("string"), Rt = Ca("function"), Bg = Ca("number"), Ta = (e) => e !== null && typeof e == "object", tS = (e) => e === !0 || e === !1, xi = (e) => {
  if (Oa(e) !== "object")
    return !1;
  const t = Zc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Lg in e) && !(Sa in e);
}, nS = dn("Date"), sS = dn("File"), oS = dn("Blob"), rS = dn("FileList"), iS = (e) => Ta(e) && Rt(e.pipe), aS = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Rt(e.append) && ((t = Oa(e)) === "formdata" || // detect form-data instance
  t === "object" && Rt(e.toString) && e.toString() === "[object FormData]"));
}, lS = dn("URLSearchParams"), [cS, uS, dS, fS] = ["ReadableStream", "Request", "Response", "Headers"].map(dn), pS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function jg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const Ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ug = (e) => !Mr(e) && e !== Ns;
function oc() {
  const { caseless: e } = Ug(this) && this || {}, t = {}, n = (s, o) => {
    const r = e && jg(t, o) || o;
    xi(t[r]) && xi(s) ? t[r] = oc(t[r], s) : xi(s) ? t[r] = oc({}, s) : Ho(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && qr(arguments[s], n);
  return t;
}
const hS = (e, t, n, { allOwnKeys: s } = {}) => (qr(t, (o, r) => {
  n && Rt(o) ? e[r] = Mg(o, n) : e[r] = o;
}, { allOwnKeys: s }), e), mS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gS = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, vS = (e, t, n, s) => {
  let o, r, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), r = o.length; r-- > 0; )
      i = o[r], (!s || s(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Zc(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, _S = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, yS = (e) => {
  if (!e) return null;
  if (Ho(e)) return e;
  let t = e.length;
  if (!Bg(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, bS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Zc(Uint8Array)), ES = (e, t) => {
  const s = (e && e[Sa]).call(e);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const r = o.value;
    t.call(e, r[0], r[1]);
  }
}, wS = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, AS = dn("HTMLFormElement"), SS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), Kf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), OS = dn("RegExp"), Hg = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  qr(n, (o, r) => {
    let i;
    (i = t(o, r, e)) !== !1 && (s[r] = i || o);
  }), Object.defineProperties(e, s);
}, CS = (e) => {
  Hg(e, (t, n) => {
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
}, TS = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((r) => {
      n[r] = !0;
    });
  };
  return Ho(e) ? s(e) : s(String(e).split(t)), n;
}, NS = () => {
}, DS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function xS(e) {
  return !!(e && Rt(e.append) && e[Lg] === "FormData" && e[Sa]);
}
const kS = (e) => {
  const t = new Array(10), n = (s, o) => {
    if (Ta(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[o] = s;
        const r = Ho(s) ? [] : {};
        return qr(s, (i, a) => {
          const c = n(i, o + 1);
          !Mr(c) && (r[a] = c);
        }), t[o] = void 0, r;
      }
    }
    return s;
  };
  return n(e, 0);
}, RS = dn("AsyncFunction"), IS = (e) => e && (Ta(e) || Rt(e)) && Rt(e.then) && Rt(e.catch), $g = ((e, t) => e ? setImmediate : t ? ((n, s) => (Ns.addEventListener("message", ({ source: o, data: r }) => {
  o === Ns && r === n && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), Ns.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Rt(Ns.postMessage)
), PS = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ns) : typeof process < "u" && process.nextTick || $g, VS = (e) => e != null && Rt(e[Sa]), F = {
  isArray: Ho,
  isArrayBuffer: Fg,
  isBuffer: JA,
  isFormData: aS,
  isArrayBufferView: ZA,
  isString: eS,
  isNumber: Bg,
  isBoolean: tS,
  isObject: Ta,
  isPlainObject: xi,
  isReadableStream: cS,
  isRequest: uS,
  isResponse: dS,
  isHeaders: fS,
  isUndefined: Mr,
  isDate: nS,
  isFile: sS,
  isBlob: oS,
  isRegExp: OS,
  isFunction: Rt,
  isStream: iS,
  isURLSearchParams: lS,
  isTypedArray: bS,
  isFileList: rS,
  forEach: qr,
  merge: oc,
  extend: hS,
  trim: pS,
  stripBOM: mS,
  inherits: gS,
  toFlatObject: vS,
  kindOf: Oa,
  kindOfTest: dn,
  endsWith: _S,
  toArray: yS,
  forEachEntry: ES,
  matchAll: wS,
  isHTMLForm: AS,
  hasOwnProperty: Kf,
  hasOwnProp: Kf,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hg,
  freezeMethods: CS,
  toObjectSet: TS,
  toCamelCase: SS,
  noop: NS,
  toFiniteNumber: DS,
  findKey: jg,
  global: Ns,
  isContextDefined: Ug,
  isSpecCompliantForm: xS,
  toJSONObject: kS,
  isAsyncFn: RS,
  isThenable: IS,
  setImmediate: $g,
  asap: PS,
  isIterable: VS
};
function Ce(e, t, n, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
F.inherits(Ce, Error, {
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
      config: F.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Wg = Ce.prototype, Kg = {};
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
  Kg[e] = { value: e };
});
Object.defineProperties(Ce, Kg);
Object.defineProperty(Wg, "isAxiosError", { value: !0 });
Ce.from = (e, t, n, s, o, r) => {
  const i = Object.create(Wg);
  return F.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Ce.call(i, e.message, t, n, s, o), i.cause = e, i.name = e.name, r && Object.assign(i, r), i;
};
const MS = null;
function rc(e) {
  return F.isPlainObject(e) || F.isArray(e);
}
function zg(e) {
  return F.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function zf(e, t, n) {
  return e ? e.concat(t).map(function(o, r) {
    return o = zg(o), !n && r ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function LS(e) {
  return F.isArray(e) && !e.some(rc);
}
const FS = F.toFlatObject(F, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Na(e, t, n) {
  if (!F.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = F.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, _) {
    return !F.isUndefined(_[v]);
  });
  const s = n.metaTokens, o = n.visitor || u, r = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && F.isSpecCompliantForm(t);
  if (!F.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(g) {
    if (g === null) return "";
    if (F.isDate(g))
      return g.toISOString();
    if (F.isBoolean(g))
      return g.toString();
    if (!c && F.isBlob(g))
      throw new Ce("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(g) || F.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, v, _) {
    let y = g;
    if (g && !_ && typeof g == "object") {
      if (F.endsWith(v, "{}"))
        v = s ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (F.isArray(g) && LS(g) || (F.isFileList(g) || F.endsWith(v, "[]")) && (y = F.toArray(g)))
        return v = zg(v), y.forEach(function(m, D) {
          !(F.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? zf([v], D, r) : i === null ? v : v + "[]",
            f(m)
          );
        }), !1;
    }
    return rc(g) ? !0 : (t.append(zf(_, v, r), f(g)), !1);
  }
  const d = [], h = Object.assign(FS, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: rc
  });
  function p(g, v) {
    if (!F.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g), F.forEach(g, function(y, E) {
        (!(F.isUndefined(y) || y === null) && o.call(
          t,
          y,
          F.isString(E) ? E.trim() : E,
          v,
          h
        )) === !0 && p(y, v ? v.concat(E) : [E]);
      }), d.pop();
    }
  }
  if (!F.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
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
function eu(e, t) {
  this._pairs = [], e && Na(e, this, t);
}
const qg = eu.prototype;
qg.append = function(t, n) {
  this._pairs.push([t, n]);
};
qg.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, qf);
  } : qf;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function BS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Yg(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || BS;
  F.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let r;
  if (o ? r = o(t, n) : r = F.isURLSearchParams(t) ? t.toString() : new eu(t, n).toString(s), r) {
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
    F.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const Xg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jS = typeof URLSearchParams < "u" ? URLSearchParams : eu, US = typeof FormData < "u" ? FormData : null, HS = typeof Blob < "u" ? Blob : null, $S = {
  isBrowser: !0,
  classes: {
    URLSearchParams: jS,
    FormData: US,
    Blob: HS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, tu = typeof window < "u" && typeof document < "u", ic = typeof navigator == "object" && navigator || void 0, WS = tu && (!ic || ["ReactNative", "NativeScript", "NS"].indexOf(ic.product) < 0), KS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", zS = tu && window.location.href || "http://localhost", qS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: tu,
  hasStandardBrowserEnv: WS,
  hasStandardBrowserWebWorkerEnv: KS,
  navigator: ic,
  origin: zS
}, Symbol.toStringTag, { value: "Module" })), gt = {
  ...qS,
  ...$S
};
function YS(e, t) {
  return Na(e, new gt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, r) {
      return gt.isNode && F.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function XS(e) {
  return F.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function GS(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const o = n.length;
  let r;
  for (s = 0; s < o; s++)
    r = n[s], t[r] = e[r];
  return t;
}
function Gg(e) {
  function t(n, s, o, r) {
    let i = n[r++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = r >= n.length;
    return i = !i && F.isArray(o) ? o.length : i, c ? (F.hasOwnProp(o, i) ? o[i] = [o[i], s] : o[i] = s, !a) : ((!o[i] || !F.isObject(o[i])) && (o[i] = []), t(n, s, o[i], r) && F.isArray(o[i]) && (o[i] = GS(o[i])), !a);
  }
  if (F.isFormData(e) && F.isFunction(e.entries)) {
    const n = {};
    return F.forEachEntry(e, (s, o) => {
      t(XS(s), o, n, 0);
    }), n;
  }
  return null;
}
function QS(e, t, n) {
  if (F.isString(e))
    try {
      return (t || JSON.parse)(e), F.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const Yr = {
  transitional: Xg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = F.isObject(t);
    if (r && F.isHTMLForm(t) && (t = new FormData(t)), F.isFormData(t))
      return o ? JSON.stringify(Gg(t)) : t;
    if (F.isArrayBuffer(t) || F.isBuffer(t) || F.isStream(t) || F.isFile(t) || F.isBlob(t) || F.isReadableStream(t))
      return t;
    if (F.isArrayBufferView(t))
      return t.buffer;
    if (F.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return YS(t, this.formSerializer).toString();
      if ((a = F.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Na(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return r || o ? (n.setContentType("application/json", !1), QS(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Yr.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (F.isResponse(t) || F.isReadableStream(t))
      return t;
    if (t && F.isString(t) && (s && !this.responseType || o)) {
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
F.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Yr.headers[e] = {};
});
const JS = F.toObjectSet([
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
]), ZS = (e) => {
  const t = {};
  let n, s, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), s = i.substring(o + 1).trim(), !(!n || t[n] && JS[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Xf = Symbol("internals");
function tr(e) {
  return e && String(e).trim().toLowerCase();
}
function ki(e) {
  return e === !1 || e == null ? e : F.isArray(e) ? e.map(ki) : String(e);
}
function eO(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const tO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ol(e, t, n, s, o) {
  if (F.isFunction(s))
    return s.call(this, t, n);
  if (o && (t = n), !!F.isString(t)) {
    if (F.isString(s))
      return t.indexOf(s) !== -1;
    if (F.isRegExp(s))
      return s.test(t);
  }
}
function nO(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function sO(e, t) {
  const n = F.toCamelCase(" " + t);
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
      const d = F.findKey(o, u);
      (!d || o[d] === void 0 || f === !0 || f === void 0 && o[d] !== !1) && (o[d || c] = ki(a));
    }
    const i = (a, c) => F.forEach(a, (f, u) => r(f, u, c));
    if (F.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (F.isString(t) && (t = t.trim()) && !tO(t))
      i(ZS(t), n);
    else if (F.isObject(t) && F.isIterable(t)) {
      let a = {}, c, f;
      for (const u of t) {
        if (!F.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = u[0]] = (c = a[f]) ? F.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      i(a, n);
    } else
      t != null && r(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = tr(t), t) {
      const s = F.findKey(this, t);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return eO(o);
        if (F.isFunction(n))
          return n.call(this, o, s);
        if (F.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = tr(t), t) {
      const s = F.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || ol(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let o = !1;
    function r(i) {
      if (i = tr(i), i) {
        const a = F.findKey(s, i);
        a && (!n || ol(s, s[a], a, n)) && (delete s[a], o = !0);
      }
    }
    return F.isArray(t) ? t.forEach(r) : r(t), o;
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
    return F.forEach(this, (o, r) => {
      const i = F.findKey(s, r);
      if (i) {
        n[i] = ki(o), delete n[r];
        return;
      }
      const a = t ? nO(r) : String(r).trim();
      a !== r && delete n[r], n[a] = ki(o), s[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return F.forEach(this, (s, o) => {
      s != null && s !== !1 && (n[o] = t && F.isArray(s) ? s.join(", ") : s);
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
      const a = tr(i);
      s[a] || (sO(o, i), s[a] = !0);
    }
    return F.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
It.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
F.reduceDescriptors(It.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
F.freezeMethods(It);
function rl(e, t) {
  const n = this || Yr, s = t || n, o = It.from(s.headers);
  let r = s.data;
  return F.forEach(e, function(a) {
    r = a.call(n, r, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), r;
}
function Qg(e) {
  return !!(e && e.__CANCEL__);
}
function $o(e, t, n) {
  Ce.call(this, e ?? "canceled", Ce.ERR_CANCELED, t, n), this.name = "CanceledError";
}
F.inherits($o, Ce, {
  __CANCEL__: !0
});
function Jg(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new Ce(
    "Request failed with status code " + n.status,
    [Ce.ERR_BAD_REQUEST, Ce.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function oO(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function rO(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let o = 0, r = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const f = Date.now(), u = s[r];
    i || (i = f), n[o] = c, s[o] = f;
    let d = r, h = 0;
    for (; d !== o; )
      h += n[d++], d = d % e;
    if (o = (o + 1) % e, o === r && (r = (r + 1) % e), f - i < t)
      return;
    const p = u && f - u;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function iO(e, t) {
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
const ea = (e, t, n = 3) => {
  let s = 0;
  const o = rO(50, 250);
  return iO((r) => {
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
}, Qf = (e) => (...t) => F.asap(() => e(...t)), aO = gt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, gt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(gt.origin),
  gt.navigator && /(msie|trident)/i.test(gt.navigator.userAgent)
) : () => !0, lO = gt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, o, r) {
      const i = [e + "=" + encodeURIComponent(t)];
      F.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), F.isString(s) && i.push("path=" + s), F.isString(o) && i.push("domain=" + o), r === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function cO(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uO(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Zg(e, t, n) {
  let s = !cO(t);
  return e && (s || n == !1) ? uO(e, t) : t;
}
const Jf = (e) => e instanceof It ? { ...e } : e;
function zs(e, t) {
  t = t || {};
  const n = {};
  function s(f, u, d, h) {
    return F.isPlainObject(f) && F.isPlainObject(u) ? F.merge.call({ caseless: h }, f, u) : F.isPlainObject(u) ? F.merge({}, u) : F.isArray(u) ? u.slice() : u;
  }
  function o(f, u, d, h) {
    if (F.isUndefined(u)) {
      if (!F.isUndefined(f))
        return s(void 0, f, d, h);
    } else return s(f, u, d, h);
  }
  function r(f, u) {
    if (!F.isUndefined(u))
      return s(void 0, u);
  }
  function i(f, u) {
    if (F.isUndefined(u)) {
      if (!F.isUndefined(f))
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
  return F.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, h = d(e[u], t[u], u);
    F.isUndefined(h) && d !== a || (n[u] = h);
  }), n;
}
const ev = (e) => {
  const t = zs({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: r, headers: i, auth: a } = t;
  t.headers = i = It.from(i), t.url = Yg(Zg(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (F.isFormData(n)) {
    if (gt.hasStandardBrowserEnv || gt.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [f, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (gt.hasStandardBrowserEnv && (s && F.isFunction(s) && (s = s(t)), s || s !== !1 && aO(t.url))) {
    const f = o && r && lO.read(r);
    f && i.set(o, f);
  }
  return t;
}, dO = typeof XMLHttpRequest < "u", fO = dO && function(e) {
  return new Promise(function(n, s) {
    const o = ev(e);
    let r = o.data;
    const i = It.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: f } = o, u, d, h, p, g;
    function v() {
      p && p(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let _ = new XMLHttpRequest();
    _.open(o.method.toUpperCase(), o.url, !0), _.timeout = o.timeout;
    function y() {
      if (!_)
        return;
      const m = It.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), I = {
        data: !a || a === "text" || a === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: m,
        config: e,
        request: _
      };
      Jg(function(A) {
        n(A), v();
      }, function(A) {
        s(A), v();
      }, I), _ = null;
    }
    "onloadend" in _ ? _.onloadend = y : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, _.onabort = function() {
      _ && (s(new Ce("Request aborted", Ce.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      s(new Ce("Network Error", Ce.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let D = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const I = o.transitional || Xg;
      o.timeoutErrorMessage && (D = o.timeoutErrorMessage), s(new Ce(
        D,
        I.clarifyTimeoutError ? Ce.ETIMEDOUT : Ce.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, r === void 0 && i.setContentType(null), "setRequestHeader" in _ && F.forEach(i.toJSON(), function(D, I) {
      _.setRequestHeader(I, D);
    }), F.isUndefined(o.withCredentials) || (_.withCredentials = !!o.withCredentials), a && a !== "json" && (_.responseType = o.responseType), f && ([h, g] = ea(f, !0), _.addEventListener("progress", h)), c && _.upload && ([d, p] = ea(c), _.upload.addEventListener("progress", d), _.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (u = (m) => {
      _ && (s(!m || m.type ? new $o(null, e, _) : m), _.abort(), _ = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const E = oO(o.url);
    if (E && gt.protocols.indexOf(E) === -1) {
      s(new Ce("Unsupported protocol " + E + ":", Ce.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(r || null);
  });
}, pO = (e, t) => {
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
    return c.unsubscribe = () => F.asap(a), c;
  }
}, hO = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, o;
  for (; s < n; )
    o = s + t, yield e.slice(s, o), s = o;
}, mO = async function* (e, t) {
  for await (const n of gO(e))
    yield* hO(n, t);
}, gO = async function* (e) {
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
  const o = mO(e, t);
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
          let h = r += d;
          n(h);
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
}, Da = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", tv = Da && typeof ReadableStream == "function", vO = Da && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), nv = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, _O = tv && nv(() => {
  let e = !1;
  const t = new Request(gt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), ep = 64 * 1024, ac = tv && nv(() => F.isReadableStream(new Response("").body)), ta = {
  stream: ac && ((e) => e.body)
};
Da && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ta[t] && (ta[t] = F.isFunction(e[t]) ? (n) => n[t]() : (n, s) => {
      throw new Ce(`Response type '${t}' is not supported`, Ce.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const yO = async (e) => {
  if (e == null)
    return 0;
  if (F.isBlob(e))
    return e.size;
  if (F.isSpecCompliantForm(e))
    return (await new Request(gt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (F.isArrayBufferView(e) || F.isArrayBuffer(e))
    return e.byteLength;
  if (F.isURLSearchParams(e) && (e = e + ""), F.isString(e))
    return (await vO(e)).byteLength;
}, bO = async (e, t) => {
  const n = F.toFiniteNumber(e.getContentLength());
  return n ?? yO(t);
}, EO = Da && (async (e) => {
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
    fetchOptions: h
  } = ev(e);
  f = f ? (f + "").toLowerCase() : "text";
  let p = pO([o, r && r.toAbortSignal()], i), g;
  const v = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let _;
  try {
    if (c && _O && n !== "get" && n !== "head" && (_ = await bO(u, s)) !== 0) {
      let I = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), C;
      if (F.isFormData(s) && (C = I.headers.get("content-type")) && u.setContentType(C), I.body) {
        const [A, T] = Gf(
          _,
          ea(Qf(c))
        );
        s = Zf(I.body, ep, A, T);
      }
    }
    F.isString(d) || (d = d ? "include" : "omit");
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
    let E = await fetch(g, h);
    const m = ac && (f === "stream" || f === "response");
    if (ac && (a || m && v)) {
      const I = {};
      ["status", "statusText", "headers"].forEach((S) => {
        I[S] = E[S];
      });
      const C = F.toFiniteNumber(E.headers.get("content-length")), [A, T] = a && Gf(
        C,
        ea(Qf(a), !0)
      ) || [];
      E = new Response(
        Zf(E.body, ep, A, () => {
          T && T(), v && v();
        }),
        I
      );
    }
    f = f || "text";
    let D = await ta[F.findKey(ta, f) || "text"](E, e);
    return !m && v && v(), await new Promise((I, C) => {
      Jg(I, C, {
        data: D,
        headers: It.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: e,
        request: g
      });
    });
  } catch (y) {
    throw v && v(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new Ce("Network Error", Ce.ERR_NETWORK, e, g),
      {
        cause: y.cause || y
      }
    ) : Ce.from(y, y && y.code, e, g);
  }
}), lc = {
  http: MS,
  xhr: fO,
  fetch: EO
};
F.forEach(lc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const tp = (e) => `- ${e}`, wO = (e) => F.isFunction(e) || e === null || e === !1, sv = {
  getAdapter: (e) => {
    e = F.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const o = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let i;
      if (s = n, !wO(n) && (s = lc[(i = String(n)).toLowerCase()], s === void 0))
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
` + r.map(tp).join(`
`) : " " + tp(r[0]) : "as no adapter specified";
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
function np(e) {
  return il(e), e.headers = It.from(e.headers), e.data = rl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), sv.getAdapter(e.adapter || Yr.adapter)(e).then(function(s) {
    return il(e), s.data = rl.call(
      e,
      e.transformResponse,
      s
    ), s.headers = It.from(s.headers), s;
  }, function(s) {
    return Qg(s) || (il(e), s && s.response && (s.response.data = rl.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = It.from(s.response.headers))), Promise.reject(s);
  });
}
const ov = "1.10.0", xa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  xa[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const sp = {};
xa.transitional = function(t, n, s) {
  function o(r, i) {
    return "[Axios v" + ov + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "");
  }
  return (r, i, a) => {
    if (t === !1)
      throw new Ce(
        o(i, " has been removed" + (n ? " in " + n : "")),
        Ce.ERR_DEPRECATED
      );
    return n && !sp[i] && (sp[i] = !0, console.warn(
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
function AO(e, t, n) {
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
const Ri = {
  assertOptions: AO,
  validators: xa
}, _n = Ri.validators;
let Ls = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = zs(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: r } = n;
    s !== void 0 && Ri.assertOptions(s, {
      silentJSONParsing: _n.transitional(_n.boolean),
      forcedJSONParsing: _n.transitional(_n.boolean),
      clarifyTimeoutError: _n.transitional(_n.boolean)
    }, !1), o != null && (F.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ri.assertOptions(o, {
      encode: _n.function,
      serialize: _n.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ri.assertOptions(n, {
      baseUrl: _n.spelling("baseURL"),
      withXsrfToken: _n.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = r && F.merge(
      r.common,
      r[n.method]
    );
    r && F.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete r[g];
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
    let u, d = 0, h;
    if (!c) {
      const g = [np.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, f), h = g.length, u = Promise.resolve(n); d < h; )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    h = a.length;
    let p = n;
    for (d = 0; d < h; ) {
      const g = a[d++], v = a[d++];
      try {
        p = g(p);
      } catch (_) {
        v.call(this, _);
        break;
      }
    }
    try {
      u = np.call(this, p);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, h = f.length; d < h; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = zs(this.defaults, t);
    const n = Zg(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Yg(n, t.params, t.paramsSerializer);
  }
};
F.forEach(["delete", "get", "head", "options"], function(t) {
  Ls.prototype[t] = function(n, s) {
    return this.request(zs(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
F.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(r, i, a) {
      return this.request(zs(a || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: i
      }));
    };
  }
  Ls.prototype[t] = n(), Ls.prototype[t + "Form"] = n(!0);
});
let SO = class rv {
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
      token: new rv(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function OO(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function CO(e) {
  return F.isObject(e) && e.isAxiosError === !0;
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
function iv(e) {
  const t = new Ls(e), n = Mg(Ls.prototype.request, t);
  return F.extend(n, Ls.prototype, t, { allOwnKeys: !0 }), F.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return iv(zs(e, o));
  }, n;
}
const it = iv(Yr);
it.Axios = Ls;
it.CanceledError = $o;
it.CancelToken = SO;
it.isCancel = Qg;
it.VERSION = ov;
it.toFormData = Na;
it.AxiosError = Ce;
it.Cancel = it.CanceledError;
it.all = function(t) {
  return Promise.all(t);
};
it.spread = OO;
it.isAxiosError = CO;
it.mergeConfig = zs;
it.AxiosHeaders = It;
it.formToJSON = (e) => Gg(F.isHTMLForm(e) ? new FormData(e) : e);
it.getAdapter = sv.getAdapter;
it.HttpStatusCode = cc;
it.default = it;
const {
  Axios: qF,
  AxiosError: YF,
  CanceledError: XF,
  isCancel: GF,
  CancelToken: QF,
  VERSION: JF,
  all: ZF,
  Cancel: e3,
  isAxiosError: t3,
  spread: n3,
  toFormData: s3,
  AxiosHeaders: o3,
  HttpStatusCode: r3,
  formToJSON: i3,
  getAdapter: a3,
  mergeConfig: l3
} = it, TO = "fhir_snapshot", NO = "api", DO = () => {
  let n = {
    pid: new URLSearchParams(location.search).get("pid"),
    page: NO,
    // content: "externalModule",
    type: "module",
    prefix: TO
  };
  return window.redcap_csrf_token && (n.redcap_csrf_token = window.redcap_csrf_token), n;
}, xO = () => {
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
}, Ue = xO(), Ge = {
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
      const r = kO(s);
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
function kO(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
var Ot = "top", Bt = "bottom", jt = "right", Ct = "left", ka = "auto", Wo = [Ot, Bt, jt, Ct], qs = "start", Do = "end", av = "clippingParents", nu = "viewport", co = "popper", lv = "reference", uc = /* @__PURE__ */ Wo.reduce(function(e, t) {
  return e.concat([t + "-" + qs, t + "-" + Do]);
}, []), su = /* @__PURE__ */ [].concat(Wo, [ka]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qs, t + "-" + Do]);
}, []), cv = "beforeRead", uv = "read", dv = "afterRead", fv = "beforeMain", pv = "main", hv = "afterMain", mv = "beforeWrite", gv = "write", vv = "afterWrite", _v = [cv, uv, dv, fv, pv, hv, mv, gv, vv];
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
function Ys(e) {
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
function RO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var s = t.styles[n] || {}, o = t.attributes[n] || {}, r = t.elements[n];
    !qt(r) || !xn(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(i) {
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
  fn: RO,
  effect: IO,
  requires: ["computeStyles"]
};
function On(e) {
  return e.split("-")[0];
}
var Fs = Math.max, na = Math.min, xo = Math.round;
function dc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function yv() {
  return !/^((?!chrome|android).)*safari/i.test(dc());
}
function ko(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(), o = 1, r = 1;
  t && qt(e) && (o = e.offsetWidth > 0 && xo(s.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && xo(s.height) / e.offsetHeight || 1);
  var i = Ys(e) ? Ut(e) : window, a = i.visualViewport, c = !yv() && n, f = (s.left + (c && a ? a.offsetLeft : 0)) / o, u = (s.top + (c && a ? a.offsetTop : 0)) / r, d = s.width / o, h = s.height / r;
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
function iu(e) {
  var t = ko(e), n = e.offsetWidth, s = e.offsetHeight;
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
function PO(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function hs(e) {
  return ((Ys(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ra(e) {
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
function op(e) {
  return !qt(e) || // https://github.com/popperjs/popper-core/issues/837
  Kn(e).position === "fixed" ? null : e.offsetParent;
}
function VO(e) {
  var t = /firefox/i.test(dc()), n = /Trident/i.test(dc());
  if (n && qt(e)) {
    var s = Kn(e);
    if (s.position === "fixed")
      return null;
  }
  var o = Ra(e);
  for (ou(o) && (o = o.host); qt(o) && ["html", "body"].indexOf(xn(o)) < 0; ) {
    var r = Kn(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Gr(e) {
  for (var t = Ut(e), n = op(e); n && PO(n) && Kn(n).position === "static"; )
    n = op(n);
  return n && (xn(n) === "html" || xn(n) === "body" && Kn(n).position === "static") ? t : n || VO(e) || t;
}
function au(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yr(e, t, n) {
  return Fs(e, na(t, n));
}
function MO(e, t, n) {
  var s = yr(e, t, n);
  return s > n ? n : s;
}
function Ev() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function wv(e) {
  return Object.assign({}, Ev(), e);
}
function Av(e, t) {
  return t.reduce(function(n, s) {
    return n[s] = e, n;
  }, {});
}
var LO = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, wv(typeof t != "number" ? t : Av(t, Wo));
};
function FO(e) {
  var t, n = e.state, s = e.name, o = e.options, r = n.elements.arrow, i = n.modifiersData.popperOffsets, a = On(n.placement), c = au(a), f = [Ct, jt].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!r || !i)) {
    var d = LO(o.padding, n), h = iu(r), p = c === "y" ? Ot : Ct, g = c === "y" ? Bt : jt, v = n.rects.reference[u] + n.rects.reference[c] - i[c] - n.rects.popper[u], _ = i[c] - n.rects.reference[c], y = Gr(r), E = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, m = v / 2 - _ / 2, D = d[p], I = E - h[u] - d[g], C = E / 2 - h[u] / 2 + m, A = yr(D, C, I), T = c;
    n.modifiersData[s] = (t = {}, t[T] = A, t.centerOffset = A - C, t);
  }
}
function BO(e) {
  var t = e.state, n = e.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || bv(t.elements.popper, o) && (t.elements.arrow = o));
}
const Sv = {
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
    x: xo(n * o) / o || 0,
    y: xo(s * o) / o || 0
  };
}
function rp(e) {
  var t, n = e.popper, s = e.popperRect, o = e.placement, r = e.variation, i = e.offsets, a = e.position, c = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, h = i.x, p = h === void 0 ? 0 : h, g = i.y, v = g === void 0 ? 0 : g, _ = typeof u == "function" ? u({
    x: p,
    y: v
  }) : {
    x: p,
    y: v
  };
  p = _.x, v = _.y;
  var y = i.hasOwnProperty("x"), E = i.hasOwnProperty("y"), m = Ct, D = Ot, I = window;
  if (f) {
    var C = Gr(n), A = "clientHeight", T = "clientWidth";
    if (C === Ut(n) && (C = hs(n), Kn(C).position !== "static" && a === "absolute" && (A = "scrollHeight", T = "scrollWidth")), C = C, o === Ot || (o === Ct || o === jt) && r === Do) {
      D = Bt;
      var S = d && C === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[A]
      );
      v -= S - s.height, v *= c ? 1 : -1;
    }
    if (o === Ct || (o === Ot || o === Bt) && r === Do) {
      m = jt;
      var k = d && C === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[T]
      );
      p -= k - s.width, p *= c ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: a
  }, f && jO), w = u === !0 ? UO({
    x: p,
    y: v
  }, Ut(n)) : {
    x: p,
    y: v
  };
  if (p = w.x, v = w.y, c) {
    var $;
    return Object.assign({}, R, ($ = {}, $[D] = E ? "0" : "", $[m] = y ? "0" : "", $.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", $));
  }
  return Object.assign({}, R, (t = {}, t[D] = E ? v + "px" : "", t[m] = y ? p + "px" : "", t.transform = "", t));
}
function HO(e) {
  var t = e.state, n = e.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, r = n.adaptive, i = r === void 0 ? !0 : r, a = n.roundOffsets, c = a === void 0 ? !0 : a, f = {
    placement: On(t.placement),
    variation: Ro(t.placement),
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
const lu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: HO,
  data: {}
};
var ci = {
  passive: !0
};
function $O(e) {
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
  effect: $O,
  data: {}
};
var WO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ii(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return WO[t];
  });
}
var KO = {
  start: "end",
  end: "start"
};
function ip(e) {
  return e.replace(/start|end/g, function(t) {
    return KO[t];
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
  return ko(hs(e)).left + uu(e).scrollLeft;
}
function zO(e, t) {
  var n = Ut(e), s = hs(e), o = n.visualViewport, r = s.clientWidth, i = s.clientHeight, a = 0, c = 0;
  if (o) {
    r = o.width, i = o.height;
    var f = yv();
    (f || !f && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: a + du(e),
    y: c
  };
}
function qO(e) {
  var t, n = hs(e), s = uu(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = Fs(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Fs(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -s.scrollLeft + du(e), c = -s.scrollTop;
  return Kn(o || n).direction === "rtl" && (a += Fs(n.clientWidth, o ? o.clientWidth : 0) - r), {
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
function Ov(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : qt(e) && fu(e) ? e : Ov(Ra(e));
}
function br(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = Ov(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ut(s), i = o ? [r].concat(r.visualViewport || [], fu(s) ? s : []) : s, a = t.concat(i);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(br(Ra(i)))
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
function YO(e, t) {
  var n = ko(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ap(e, t, n) {
  return t === nu ? fc(zO(e, n)) : Ys(t) ? YO(t, n) : fc(qO(hs(e)));
}
function XO(e) {
  var t = br(Ra(e)), n = ["absolute", "fixed"].indexOf(Kn(e).position) >= 0, s = n && qt(e) ? Gr(e) : e;
  return Ys(s) ? t.filter(function(o) {
    return Ys(o) && bv(o, s) && xn(o) !== "body";
  }) : [];
}
function GO(e, t, n, s) {
  var o = t === "clippingParents" ? XO(e) : [].concat(t), r = [].concat(o, [n]), i = r[0], a = r.reduce(function(c, f) {
    var u = ap(e, f, s);
    return c.top = Fs(u.top, c.top), c.right = na(u.right, c.right), c.bottom = na(u.bottom, c.bottom), c.left = Fs(u.left, c.left), c;
  }, ap(e, i, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Cv(e) {
  var t = e.reference, n = e.element, s = e.placement, o = s ? On(s) : null, r = s ? Ro(s) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
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
      case qs:
        c[f] = c[f] - (t[u] / 2 - n[u] / 2);
        break;
      case Do:
        c[f] = c[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return c;
}
function Io(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = s === void 0 ? e.placement : s, r = n.strategy, i = r === void 0 ? e.strategy : r, a = n.boundary, c = a === void 0 ? av : a, f = n.rootBoundary, u = f === void 0 ? nu : f, d = n.elementContext, h = d === void 0 ? co : d, p = n.altBoundary, g = p === void 0 ? !1 : p, v = n.padding, _ = v === void 0 ? 0 : v, y = wv(typeof _ != "number" ? _ : Av(_, Wo)), E = h === co ? lv : co, m = e.rects.popper, D = e.elements[g ? E : h], I = GO(Ys(D) ? D : D.contextElement || hs(e.elements.popper), c, u, i), C = ko(e.elements.reference), A = Cv({
    reference: C,
    element: m,
    placement: o
  }), T = fc(Object.assign({}, m, A)), S = h === co ? T : C, k = {
    top: I.top - S.top + y.top,
    bottom: S.bottom - I.bottom + y.bottom,
    left: I.left - S.left + y.left,
    right: S.right - I.right + y.right
  }, R = e.modifiersData.offset;
  if (h === co && R) {
    var w = R[o];
    Object.keys(k).forEach(function($) {
      var he = [jt, Bt].indexOf($) >= 0 ? 1 : -1, ne = [Ot, Bt].indexOf($) >= 0 ? "y" : "x";
      k[$] += w[ne] * he;
    });
  }
  return k;
}
function QO(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = n.boundary, r = n.rootBoundary, i = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? su : c, u = Ro(s), d = u ? a ? uc : uc.filter(function(g) {
    return Ro(g) === u;
  }) : Wo, h = d.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  h.length === 0 && (h = d);
  var p = h.reduce(function(g, v) {
    return g[v] = Io(e, {
      placement: v,
      boundary: o,
      rootBoundary: r,
      padding: i
    })[On(v)], g;
  }, {});
  return Object.keys(p).sort(function(g, v) {
    return p[g] - p[v];
  });
}
function JO(e) {
  if (On(e) === ka)
    return [];
  var t = Ii(e);
  return [ip(e), t, ip(t)];
}
function ZO(e) {
  var t = e.state, n = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !0 : i, c = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, h = n.altBoundary, p = n.flipVariations, g = p === void 0 ? !0 : p, v = n.allowedAutoPlacements, _ = t.options.placement, y = On(_), E = y === _, m = c || (E || !g ? [Ii(_)] : JO(_)), D = [_].concat(m).reduce(function(nt, ft) {
      return nt.concat(On(ft) === ka ? QO(t, {
        placement: ft,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: v
      }) : ft);
    }, []), I = t.rects.reference, C = t.rects.popper, A = /* @__PURE__ */ new Map(), T = !0, S = D[0], k = 0; k < D.length; k++) {
      var R = D[k], w = On(R), $ = Ro(R) === qs, he = [Ot, Bt].indexOf(w) >= 0, ne = he ? "width" : "height", V = Io(t, {
        placement: R,
        boundary: u,
        rootBoundary: d,
        altBoundary: h,
        padding: f
      }), L = he ? $ ? jt : Ct : $ ? Bt : Ot;
      I[ne] > C[ne] && (L = Ii(L));
      var W = Ii(L), oe = [];
      if (r && oe.push(V[w] <= 0), a && oe.push(V[L] <= 0, V[W] <= 0), oe.every(function(nt) {
        return nt;
      })) {
        S = R, T = !1;
        break;
      }
      A.set(R, oe);
    }
    if (T)
      for (var Oe = g ? 3 : 1, Le = function(ft) {
        var Tt = D.find(function(j) {
          var re = A.get(j);
          if (re)
            return re.slice(0, ft).every(function(ae) {
              return ae;
            });
        });
        if (Tt)
          return S = Tt, "break";
      }, Se = Oe; Se > 0; Se--) {
        var xe = Le(Se);
        if (xe === "break") break;
      }
    t.placement !== S && (t.modifiersData[s]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const Tv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ZO,
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
  return [Ot, jt, Bt, Ct].some(function(t) {
    return e[t] >= 0;
  });
}
function eC(e) {
  var t = e.state, n = e.name, s = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = Io(t, {
    elementContext: "reference"
  }), a = Io(t, {
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
const Nv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: eC
};
function tC(e, t, n) {
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
function nC(e) {
  var t = e.state, n = e.options, s = e.name, o = n.offset, r = o === void 0 ? [0, 0] : o, i = su.reduce(function(u, d) {
    return u[d] = tC(d, t.rects, r), u;
  }, {}), a = i[t.placement], c = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[s] = i;
}
const Dv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: nC
};
function sC(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Cv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const pu = {
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
  var t = e.state, n = e.options, s = e.name, o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !1 : i, c = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, h = n.tether, p = h === void 0 ? !0 : h, g = n.tetherOffset, v = g === void 0 ? 0 : g, _ = Io(t, {
    boundary: c,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), y = On(t.placement), E = Ro(t.placement), m = !E, D = au(y), I = oC(D), C = t.modifiersData.popperOffsets, A = t.rects.reference, T = t.rects.popper, S = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, k = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, w = {
    x: 0,
    y: 0
  };
  if (C) {
    if (r) {
      var $, he = D === "y" ? Ot : Ct, ne = D === "y" ? Bt : jt, V = D === "y" ? "height" : "width", L = C[D], W = L + _[he], oe = L - _[ne], Oe = p ? -T[V] / 2 : 0, Le = E === qs ? A[V] : T[V], Se = E === qs ? -T[V] : -A[V], xe = t.elements.arrow, nt = p && xe ? iu(xe) : {
        width: 0,
        height: 0
      }, ft = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ev(), Tt = ft[he], j = ft[ne], re = yr(0, A[V], nt[V]), ae = m ? A[V] / 2 - Oe - re - Tt - k.mainAxis : Le - re - Tt - k.mainAxis, fe = m ? -A[V] / 2 + Oe + re + j + k.mainAxis : Se + re + j + k.mainAxis, Ne = t.elements.arrow && Gr(t.elements.arrow), Xe = Ne ? D === "y" ? Ne.clientTop || 0 : Ne.clientLeft || 0 : 0, b = ($ = R?.[D]) != null ? $ : 0, O = L + ae - b - Xe, M = L + fe - b, K = yr(p ? na(W, O) : W, L, p ? Fs(oe, M) : oe);
      C[D] = K, w[D] = K - L;
    }
    if (a) {
      var U, z = D === "x" ? Ot : Ct, ie = D === "x" ? Bt : jt, Z = C[I], ee = I === "y" ? "height" : "width", Q = Z + _[z], me = Z - _[ie], se = [Ot, Ct].indexOf(y) !== -1, pe = (U = R?.[I]) != null ? U : 0, _e = se ? Q : Z - A[ee] - T[ee] - pe + k.altAxis, Re = se ? Z + A[ee] + T[ee] - pe - k.altAxis : me, je = p && se ? MO(_e, Z, Re) : yr(p ? _e : Q, Z, p ? Re : me);
      C[I] = je, w[I] = je - Z;
    }
    t.modifiersData[s] = w;
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
  return e === Ut(e) || !qt(e) ? uu(e) : iC(e);
}
function lC(e) {
  var t = e.getBoundingClientRect(), n = xo(t.width) / e.offsetWidth || 1, s = xo(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function cC(e, t, n) {
  n === void 0 && (n = !1);
  var s = qt(t), o = qt(t) && lC(t), r = hs(t), i = ko(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((xn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  fu(r)) && (a = aC(t)), qt(t) ? (c = ko(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = du(r))), {
    x: i.left + a.scrollLeft - c.x,
    y: i.top + a.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function uC(e) {
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
function dC(e) {
  var t = uC(e);
  return _v.reduce(function(n, s) {
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
function Ia(e) {
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
    }, d = [], h = !1, p = {
      state: u,
      setOptions: function(y) {
        var E = typeof y == "function" ? y(u.options) : y;
        v(), u.options = Object.assign({}, r, u.options, E), u.scrollParents = {
          reference: Ys(a) ? br(a) : a.contextElement ? br(a.contextElement) : [],
          popper: br(c)
        };
        var m = dC(pC([].concat(s, u.options.modifiers)));
        return u.orderedModifiers = m.filter(function(D) {
          return D.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var y = u.elements, E = y.reference, m = y.popper;
          if (dp(E, m)) {
            u.rects = {
              reference: cC(E, Gr(m), u.options.strategy === "fixed"),
              popper: iu(m)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(k) {
              return u.modifiersData[k.name] = Object.assign({}, k.data);
            });
            for (var D = 0; D < u.orderedModifiers.length; D++) {
              if (u.reset === !0) {
                u.reset = !1, D = -1;
                continue;
              }
              var I = u.orderedModifiers[D], C = I.fn, A = I.options, T = A === void 0 ? {} : A, S = I.name;
              typeof C == "function" && (u = C({
                state: u,
                options: T,
                name: S,
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
        v(), h = !0;
      }
    };
    if (!dp(a, c))
      return p;
    p.setOptions(f).then(function(_) {
      !h && f.onFirstUpdate && f.onFirstUpdate(_);
    });
    function g() {
      u.orderedModifiers.forEach(function(_) {
        var y = _.name, E = _.options, m = E === void 0 ? {} : E, D = _.effect;
        if (typeof D == "function") {
          var I = D({
            state: u,
            name: y,
            instance: p,
            options: m
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
var hC = /* @__PURE__ */ Ia(), mC = [cu, pu, lu, ru], gC = /* @__PURE__ */ Ia({
  defaultModifiers: mC
}), vC = [cu, pu, lu, ru, Dv, Tv, xv, Sv, Nv], hu = /* @__PURE__ */ Ia({
  defaultModifiers: vC
});
const kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: hv,
  afterRead: dv,
  afterWrite: vv,
  applyStyles: ru,
  arrow: Sv,
  auto: ka,
  basePlacements: Wo,
  beforeMain: fv,
  beforeRead: cv,
  beforeWrite: mv,
  bottom: Bt,
  clippingParents: av,
  computeStyles: lu,
  createPopper: hu,
  createPopperBase: hC,
  createPopperLite: gC,
  detectOverflow: Io,
  end: Do,
  eventListeners: cu,
  flip: Tv,
  hide: Nv,
  left: Ct,
  main: pv,
  modifierPhases: _v,
  offset: Dv,
  placements: su,
  popper: co,
  popperGenerator: Ia,
  popperOffsets: pu,
  preventOverflow: xv,
  read: uv,
  reference: lv,
  right: jt,
  start: qs,
  top: Ot,
  variationPlacements: uc,
  viewport: nu,
  write: gv
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
}, _C = 1e6, yC = 1e3, pc = "transitionend", Rv = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), bC = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), EC = (e) => {
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
}, Iv = (e) => {
  e.dispatchEvent(new Event(pc));
}, $n = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), cs = (e) => $n(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Rv(e)) : null, Ko = (e) => {
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
}, us = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Pv = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Pv(e.parentNode) : null;
}, sa = () => {
}, Qr = (e) => {
  e.offsetHeight;
}, Vv = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, ll = [], AC = (e) => {
  document.readyState === "loading" ? (ll.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of ll)
      t();
  }), ll.push(e)) : e();
}, Gt = () => document.documentElement.dir === "rtl", Jt = (e) => {
  AC(() => {
    const t = Vv();
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
  const o = wC(t) + 5;
  let r = !1;
  const i = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(pc, i), kt(e));
  };
  t.addEventListener(pc, i), setTimeout(() => {
    r || Iv(t);
  }, o);
}, mu = (e, t, n, s) => {
  const o = e.length;
  let r = e.indexOf(t);
  return r === -1 ? !n && s ? e[o - 1] : e[0] : (r += n ? 1 : -1, s && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))]);
}, SC = /[^.]*(?=\..*)\.|.*/, OC = /\..*/, CC = /::\d+$/, cl = {};
let fp = 1;
const Lv = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, TC = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Fv(e, t) {
  return t && `${t}::${fp++}` || e.uidEvent || fp++;
}
function Bv(e) {
  const t = Fv(e);
  return e.uidEvent = t, cl[t] = cl[t] || {}, cl[t];
}
function NC(e, t) {
  return function n(s) {
    return gu(s, {
      delegateTarget: e
    }), n.oneOff && X.off(e, s.type, t), t.apply(e, [s]);
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
          return gu(o, {
            delegateTarget: i
          }), s.oneOff && X.off(e, o.type, t, n), n.apply(i, [o]);
  };
}
function jv(e, t, n = null) {
  return Object.values(e).find((s) => s.callable === t && s.delegationSelector === n);
}
function Uv(e, t, n) {
  const s = typeof t == "string", o = s ? n : t || n;
  let r = Hv(e);
  return TC.has(r) || (r = e), [s, o, r];
}
function pp(e, t, n, s, o) {
  if (typeof t != "string" || !e)
    return;
  let [r, i, a] = Uv(t, n, s);
  t in Lv && (i = ((g) => function(v) {
    if (!v.relatedTarget || v.relatedTarget !== v.delegateTarget && !v.delegateTarget.contains(v.relatedTarget))
      return g.call(this, v);
  })(i));
  const c = Bv(e), f = c[a] || (c[a] = {}), u = jv(f, i, r ? n : null);
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const d = Fv(i, t.replace(SC, "")), h = r ? DC(e, n, i) : NC(e, i);
  h.delegationSelector = r ? n : null, h.callable = i, h.oneOff = o, h.uidEvent = d, f[d] = h, e.addEventListener(a, h, r);
}
function hc(e, t, n, s, o) {
  const r = jv(t[n], s, o);
  r && (e.removeEventListener(n, r, !!o), delete t[n][r.uidEvent]);
}
function xC(e, t, n, s) {
  const o = t[n] || {};
  for (const [r, i] of Object.entries(o))
    r.includes(s) && hc(e, t, n, i.callable, i.delegationSelector);
}
function Hv(e) {
  return e = e.replace(OC, ""), Lv[e] || e;
}
const X = {
  on(e, t, n, s) {
    pp(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    pp(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e)
      return;
    const [o, r, i] = Uv(t, n, s), a = i !== t, c = Bv(e), f = c[i] || {}, u = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(f).length)
        return;
      hc(e, c, i, r, o ? n : null);
      return;
    }
    if (u)
      for (const d of Object.keys(c))
        xC(e, c, d, t.slice(1));
    for (const [d, h] of Object.entries(f)) {
      const p = d.replace(CC, "");
      (!a || t.includes(p)) && hc(e, c, i, h.callable, h.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const s = Vv(), o = Hv(t), r = t !== o;
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
      o = o.charAt(0).toLowerCase() + o.slice(1), t[o] = hp(e.dataset[s]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return hp(e.getAttribute(`data-bs-${ul(t)}`));
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
      const r = t[s], i = $n(r) ? "element" : bC(r);
      if (!new RegExp(o).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${o}".`);
    }
  }
}
const kC = "5.3.7";
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
    Mv(t, n, s);
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
    return kC;
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
  return t ? t.split(",").map((n) => Rv(n)).join(",") : null;
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
}, Pa = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, s = e.NAME;
  X.on(document, n, `[data-bs-dismiss="${s}"]`, function(o) {
    if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), us(this))
      return;
    const r = ge.getElementFromSelector(this) || this.closest(`.${s}`);
    e.getOrCreateInstance(r)[t]();
  });
}, RC = "alert", IC = "bs.alert", $v = `.${IC}`, PC = `close${$v}`, VC = `closed${$v}`, MC = "fade", LC = "show";
class Va extends fn {
  // Getters
  static get NAME() {
    return RC;
  }
  // Public
  close() {
    if (X.trigger(this._element, PC).defaultPrevented)
      return;
    this._element.classList.remove(LC);
    const n = this._element.classList.contains(MC);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), X.trigger(this._element, VC), this.dispose();
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
const FC = "button", BC = "bs.button", jC = `.${BC}`, UC = ".data-api", HC = "active", mp = '[data-bs-toggle="button"]', $C = `click${jC}${UC}`;
class Ma extends fn {
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
      const n = Ma.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
X.on(document, $C, mp, (e) => {
  e.preventDefault();
  const t = e.target.closest(mp);
  Ma.getOrCreateInstance(t).toggle();
});
Jt(Ma);
const WC = "swipe", zo = ".bs.swipe", KC = `touchstart${zo}`, zC = `touchmove${zo}`, qC = `touchend${zo}`, YC = `pointerdown${zo}`, XC = `pointerup${zo}`, GC = "touch", QC = "pen", JC = "pointer-event", ZC = 40, eT = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, tT = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class oa extends Jr {
  constructor(t, n) {
    super(), this._element = t, !(!t || !oa.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
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
    if (t <= ZC)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && kt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (X.on(this._element, YC, (t) => this._start(t)), X.on(this._element, XC, (t) => this._end(t)), this._element.classList.add(JC)) : (X.on(this._element, KC, (t) => this._start(t)), X.on(this._element, zC, (t) => this._move(t)), X.on(this._element, qC, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === QC || t.pointerType === GC);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const nT = "carousel", sT = "bs.carousel", ms = `.${sT}`, Wv = ".data-api", oT = "ArrowLeft", rT = "ArrowRight", iT = 500, nr = "next", ro = "prev", uo = "left", Pi = "right", aT = `slide${ms}`, fl = `slid${ms}`, lT = `keydown${ms}`, cT = `mouseenter${ms}`, uT = `mouseleave${ms}`, dT = `dragstart${ms}`, fT = `load${ms}${Wv}`, pT = `click${ms}${Wv}`, Kv = "carousel", ui = "active", hT = "slide", mT = "carousel-item-end", gT = "carousel-item-start", vT = "carousel-item-next", _T = "carousel-item-prev", zv = ".active", qv = ".carousel-item", yT = zv + qv, bT = ".carousel-item img", ET = ".carousel-indicators", wT = "[data-bs-slide], [data-bs-slide-to]", AT = '[data-bs-ride="carousel"]', ST = {
  [oT]: Pi,
  [rT]: uo
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
class Zr extends fn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ge.findOne(ET, this._element), this._addEventListeners(), this._config.ride === Kv && this.cycle();
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
    this._slide(nr);
  }
  nextWhenVisible() {
    !document.hidden && Ko(this._element) && this.next();
  }
  prev() {
    this._slide(ro);
  }
  pause() {
    this._isSliding && Iv(this._element), this._clearInterval();
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
    const o = t > s ? nr : ro;
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
    this._config.keyboard && X.on(this._element, lT, (t) => this._keydown(t)), this._config.pause === "hover" && (X.on(this._element, cT, () => this.pause()), X.on(this._element, uT, () => this._maybeEnableCycle())), this._config.touch && oa.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of ge.find(bT, this._element))
      X.on(s, dT, (o) => o.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(uo)),
      rightCallback: () => this._slide(this._directionToOrder(Pi)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), iT + this._config.interval));
      }
    };
    this._swipeHelper = new oa(this._element, n);
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
    const n = ge.findOne(zv, this._indicatorsElement);
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
    if (a(aT).defaultPrevented || !s || !r)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = r;
    const u = o ? gT : mT, d = o ? vT : _T;
    r.classList.add(d), Qr(r), s.classList.add(u), r.classList.add(u);
    const h = () => {
      r.classList.remove(u, d), r.classList.add(ui), s.classList.remove(ui, d, u), this._isSliding = !1, a(fl);
    };
    this._queueCallback(h, s, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(hT);
  }
  _getActive() {
    return ge.findOne(yT, this._element);
  }
  _getItems() {
    return ge.find(qv, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Gt() ? t === uo ? ro : nr : t === uo ? nr : ro;
  }
  _orderToDirection(t) {
    return Gt() ? t === ro ? uo : Pi : t === ro ? Pi : uo;
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
X.on(document, pT, wT, function(e) {
  const t = ge.getElementFromSelector(this);
  if (!t || !t.classList.contains(Kv))
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
X.on(window, fT, () => {
  const e = ge.find(AT);
  for (const t of e)
    Zr.getOrCreateInstance(t);
});
Jt(Zr);
const TT = "collapse", NT = "bs.collapse", ei = `.${NT}`, DT = ".data-api", xT = `show${ei}`, kT = `shown${ei}`, RT = `hide${ei}`, IT = `hidden${ei}`, PT = `click${ei}${DT}`, pl = "show", mo = "collapse", di = "collapsing", VT = "collapsed", MT = `:scope .${mo} .${mo}`, LT = "collapse-horizontal", FT = "width", BT = "height", jT = ".collapse.show, .collapse.collapsing", mc = '[data-bs-toggle="collapse"]', UT = {
  parent: null,
  toggle: !0
}, HT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Lr extends fn {
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
    if (this._config.parent && (t = this._getFirstLevelChildren(jT).filter((a) => a !== this._element).map((a) => Lr.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || X.trigger(this._element, xT).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(mo), this._element.classList.add(di), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(di), this._element.classList.add(mo, pl), this._element.style[s] = "", X.trigger(this._element, kT);
    }, i = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[s] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || X.trigger(this._element, RT).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Qr(this._element), this._element.classList.add(di), this._element.classList.remove(mo, pl);
    for (const o of this._triggerArray) {
      const r = ge.getElementFromSelector(o);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(di), this._element.classList.add(mo), X.trigger(this._element, IT);
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
    return this._element.classList.contains(LT) ? FT : BT;
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
    const n = ge.find(MT, this._config.parent);
    return ge.find(t, this._config.parent).filter((s) => !n.includes(s));
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
      const s = Lr.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
}
X.on(document, PT, mc, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of ge.getMultipleElementsFromSelector(this))
    Lr.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Jt(Lr);
const gp = "dropdown", $T = "bs.dropdown", Qs = `.${$T}`, vu = ".data-api", WT = "Escape", vp = "Tab", KT = "ArrowUp", _p = "ArrowDown", zT = 2, qT = `hide${Qs}`, YT = `hidden${Qs}`, XT = `show${Qs}`, GT = `shown${Qs}`, Yv = `click${Qs}${vu}`, Xv = `keydown${Qs}${vu}`, QT = `keyup${Qs}${vu}`, fo = "show", JT = "dropup", ZT = "dropend", eN = "dropstart", tN = "dropup-center", nN = "dropdown-center", Ds = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', sN = `${Ds}.${fo}`, Vi = ".dropdown-menu", oN = ".navbar", rN = ".navbar-nav", iN = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", aN = Gt() ? "top-end" : "top-start", lN = Gt() ? "top-start" : "top-end", cN = Gt() ? "bottom-end" : "bottom-start", uN = Gt() ? "bottom-start" : "bottom-end", dN = Gt() ? "left-start" : "right-start", fN = Gt() ? "right-start" : "left-start", pN = "top", hN = "bottom", mN = {
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
class Cn extends fn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = ge.next(this._element, Vi)[0] || ge.prev(this._element, Vi)[0] || ge.findOne(Vi, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return mN;
  }
  static get DefaultType() {
    return gN;
  }
  static get NAME() {
    return gp;
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
    if (!X.trigger(this._element, XT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(rN))
        for (const s of [].concat(...document.body.children))
          X.on(s, "mouseover", sa);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(fo), this._element.classList.add(fo), X.trigger(this._element, GT, t);
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
    if (!X.trigger(this._element, qT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          X.off(s, "mouseover", sa);
      this._popper && this._popper.destroy(), this._menu.classList.remove(fo), this._element.classList.remove(fo), this._element.setAttribute("aria-expanded", "false"), Wn.removeDataAttribute(this._menu, "popper"), X.trigger(this._element, YT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !$n(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${gp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof kv > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : $n(this._config.reference) ? t = cs(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = hu(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(fo);
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
    return t.classList.contains(JT) ? n ? lN : aN : n ? uN : cN;
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
    const s = ge.find(iN, this._menu).filter((o) => Ko(o));
    s.length && mu(s, n, t === _p, !s.includes(n)).focus();
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
    if (t.button === zT || t.type === "keyup" && t.key !== vp)
      return;
    const n = ge.find(sN);
    for (const s of n) {
      const o = Cn.getInstance(s);
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
    const n = /input|textarea/i.test(t.target.tagName), s = t.key === WT, o = [KT, _p].includes(t.key);
    if (!o && !s || n && !s)
      return;
    t.preventDefault();
    const r = this.matches(Ds) ? this : ge.prev(this, Ds)[0] || ge.next(this, Ds)[0] || ge.findOne(Ds, t.delegateTarget.parentNode), i = Cn.getOrCreateInstance(r);
    if (o) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), r.focus());
  }
}
X.on(document, Xv, Ds, Cn.dataApiKeydownHandler);
X.on(document, Xv, Vi, Cn.dataApiKeydownHandler);
X.on(document, Yv, Cn.clearMenus);
X.on(document, QT, Cn.clearMenus);
X.on(document, Yv, Ds, function(e) {
  e.preventDefault(), Cn.getOrCreateInstance(this).toggle();
});
Jt(Cn);
const Gv = "backdrop", vN = "fade", yp = "show", bp = `mousedown.bs.${Gv}`, _N = {
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
    return Gv;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      kt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Qr(n), n.classList.add(yp), this._emulateAnimation(() => {
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
    this._isAppended && (X.off(this._element, bp), this._element.remove(), this._isAppended = !1);
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
    return t.rootElement = cs(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), X.on(t, bp, () => {
      kt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Mv(t, this._getElement(), this._config.isAnimated);
  }
}
const bN = "focustrap", EN = "bs.focustrap", ra = `.${EN}`, wN = `focusin${ra}`, AN = `keydown.tab${ra}`, SN = "Tab", ON = "forward", Ep = "backward", CN = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, TN = {
  autofocus: "boolean",
  trapElement: "element"
};
class Jv extends Jr {
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
    return bN;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), X.off(document, ra), X.on(document, wN, (t) => this._handleFocusin(t)), X.on(document, AN, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, X.off(document, ra));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const s = ge.focusableChildren(n);
    s.length === 0 ? n.focus() : this._lastTabNavDirection === Ep ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === SN && (this._lastTabNavDirection = t.shiftKey ? Ep : ON);
  }
}
const wp = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Ap = ".sticky-top", fi = "padding-right", Sp = "margin-right";
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
    this._disableOverFlow(), this._setElementAttributes(this._element, fi, (n) => n + t), this._setElementAttributes(wp, fi, (n) => n + t), this._setElementAttributes(Ap, Sp, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, fi), this._resetElementAttributes(wp, fi), this._resetElementAttributes(Ap, Sp);
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
const NN = "modal", DN = "bs.modal", Qt = `.${DN}`, xN = ".data-api", kN = "Escape", RN = `hide${Qt}`, IN = `hidePrevented${Qt}`, Zv = `hidden${Qt}`, e_ = `show${Qt}`, PN = `shown${Qt}`, VN = `resize${Qt}`, MN = `click.dismiss${Qt}`, LN = `mousedown.dismiss${Qt}`, FN = `keydown.dismiss${Qt}`, BN = `click${Qt}${xN}`, Op = "modal-open", jN = "fade", Cp = "show", hl = "modal-static", UN = ".modal.show", HN = ".modal-dialog", $N = ".modal-body", WN = '[data-bs-toggle="modal"]', KN = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, zN = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Xs extends fn {
  constructor(t, n) {
    super(t, n), this._dialog = ge.findOne(HN, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new gc(), this._addEventListeners();
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
    this._isShown || this._isTransitioning || X.trigger(this._element, e_, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Op), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || X.trigger(this._element, RN).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Cp), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    X.off(window, Qt), X.off(this._dialog, Qt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
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
    return new Jv({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = ge.findOne($N, this._dialog);
    n && (n.scrollTop = 0), Qr(this._element), this._element.classList.add(Cp);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, X.trigger(this._element, PN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    X.on(this._element, FN, (t) => {
      if (t.key === kN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), X.on(window, VN, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), X.on(this._element, LN, (t) => {
      X.one(this._element, MN, (n) => {
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
      document.body.classList.remove(Op), this._resetAdjustments(), this._scrollBar.reset(), X.trigger(this._element, Zv);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(jN);
  }
  _triggerBackdropTransition() {
    if (X.trigger(this._element, IN).defaultPrevented)
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
      const s = Xs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
X.on(document, BN, WN, function(e) {
  const t = ge.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), X.one(t, e_, (o) => {
    o.defaultPrevented || X.one(t, Zv, () => {
      Ko(this) && this.focus();
    });
  });
  const n = ge.findOne(UN);
  n && Xs.getInstance(n).hide(), Xs.getOrCreateInstance(t).toggle(this);
});
Pa(Xs);
Jt(Xs);
const qN = "offcanvas", YN = "bs.offcanvas", Yn = `.${YN}`, t_ = ".data-api", XN = `load${Yn}${t_}`, GN = "Escape", Tp = "show", Np = "showing", Dp = "hiding", QN = "offcanvas-backdrop", n_ = ".offcanvas.show", JN = `show${Yn}`, ZN = `shown${Yn}`, eD = `hide${Yn}`, xp = `hidePrevented${Yn}`, s_ = `hidden${Yn}`, tD = `resize${Yn}`, nD = `click${Yn}${t_}`, sD = `keydown.dismiss${Yn}`, oD = '[data-bs-toggle="offcanvas"]', rD = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, iD = {
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
    if (this._isShown || X.trigger(this._element, JN, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new gc().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Np);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Tp), this._element.classList.remove(Np), X.trigger(this._element, ZN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || X.trigger(this._element, eD).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Dp), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Tp, Dp), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new gc().reset(), X.trigger(this._element, s_);
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
        X.trigger(this._element, xp);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Qv({
      className: QN,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new Jv({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    X.on(this._element, sD, (t) => {
      if (t.key === GN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        X.trigger(this._element, xp);
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
X.on(document, nD, oD, function(e) {
  const t = ge.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), us(this))
    return;
  X.one(t, s_, () => {
    Ko(this) && this.focus();
  });
  const n = ge.findOne(n_);
  n && n !== t && ds.getInstance(n).hide(), ds.getOrCreateInstance(t).toggle(this);
});
X.on(window, XN, () => {
  for (const e of ge.find(n_))
    ds.getOrCreateInstance(e).show();
});
X.on(window, tD, () => {
  for (const e of ge.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && ds.getOrCreateInstance(e).hide();
});
Pa(ds);
Jt(ds);
const aD = /^aria-[\w-]*$/i, o_ = {
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
}, lD = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), cD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, uD = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? lD.has(n) ? !!cD.test(e.nodeValue) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
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
    const c = [].concat(...i.attributes), f = [].concat(t["*"] || [], t[a] || []);
    for (const u of c)
      uD(u, f) || i.removeAttribute(u.nodeName);
  }
  return o.body.innerHTML;
}
const fD = "TemplateFactory", pD = {
  allowList: o_,
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
    return this._config.sanitize ? dD(t, this._config.allowList, this._config.sanitizeFn) : t;
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
const vD = "tooltip", _D = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ml = "fade", yD = "modal", pi = "show", bD = ".tooltip-inner", kp = `.${yD}`, Rp = "hide.bs.modal", sr = "hover", gl = "focus", vl = "click", ED = "manual", wD = "hide", AD = "hidden", SD = "show", OD = "shown", CD = "inserted", TD = "click", ND = "focusin", DD = "focusout", xD = "mouseenter", kD = "mouseleave", RD = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Gt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Gt() ? "right" : "left"
}, ID = {
  allowList: o_,
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
class Js extends fn {
  constructor(t, n) {
    if (typeof kv > "u")
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
    clearTimeout(this._timeout), X.off(this._element.closest(kp), Rp, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = X.trigger(this._element, this.constructor.eventName(SD)), s = (Pv(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const o = this._getTipElement();
    this._element.setAttribute("aria-describedby", o.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(o), X.trigger(this._element, this.constructor.eventName(CD))), this._popper = this._createPopper(o), o.classList.add(pi), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        X.on(a, "mouseover", sa);
    const i = () => {
      X.trigger(this._element, this.constructor.eventName(OD)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || X.trigger(this._element, this.constructor.eventName(wD)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(pi), "ontouchstart" in document.documentElement)
      for (const o of [].concat(...document.body.children))
        X.off(o, "mouseover", sa);
    this._activeTrigger[vl] = !1, this._activeTrigger[gl] = !1, this._activeTrigger[sr] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), X.trigger(this._element, this.constructor.eventName(AD)));
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
    const s = EC(this.constructor.NAME).toString();
    return n.setAttribute("id", s), this._isAnimated() && n.classList.add(ml), n;
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
      [bD]: this._getTitle()
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
    const n = kt(this._config.placement, [this, t, this._element]), s = RD[n.toUpperCase()];
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
        X.on(this._element, this.constructor.eventName(TD), this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          o._activeTrigger[vl] = !(o._isShown() && o._activeTrigger[vl]), o.toggle();
        });
      else if (n !== ED) {
        const s = n === sr ? this.constructor.eventName(xD) : this.constructor.eventName(ND), o = n === sr ? this.constructor.eventName(kD) : this.constructor.eventName(DD);
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
    }, X.on(this._element.closest(kp), Rp, this._hideModalHandler);
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
      _D.has(s) && delete n[s];
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
      const n = Js.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Jt(Js);
const VD = "popover", MD = ".popover-header", LD = ".popover-body", FD = {
  ...Js.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, BD = {
  ...Js.DefaultType,
  content: "(null|string|element|function)"
};
class _u extends Js {
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
const jD = "scrollspy", UD = "bs.scrollspy", yu = `.${UD}`, HD = ".data-api", $D = `activate${yu}`, Ip = `click${yu}`, WD = `load${yu}${HD}`, KD = "dropdown-item", io = "active", zD = '[data-bs-spy="scroll"]', _l = "[href]", qD = ".nav, .list-group", Pp = ".nav-link", YD = ".nav-item", XD = ".list-group-item", GD = `${Pp}, ${YD} > ${Pp}, ${XD}`, QD = ".dropdown", JD = ".dropdown-toggle", ZD = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, ex = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class La extends fn {
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
    return ex;
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
    return t.target = cs(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (X.off(this._config.target, Ip), X.on(this._config.target, Ip, _l, (t) => {
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
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(io), this._activateParents(t), X.trigger(this._element, $D, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(KD)) {
      ge.findOne(JD, t.closest(QD)).classList.add(io);
      return;
    }
    for (const n of ge.parents(t, qD))
      for (const s of ge.prev(n, GD))
        s.classList.add(io);
  }
  _clearActiveClass(t) {
    t.classList.remove(io);
    const n = ge.find(`${_l}.${io}`, t);
    for (const s of n)
      s.classList.remove(io);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = La.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
X.on(window, WD, () => {
  for (const e of ge.find(zD))
    La.getOrCreateInstance(e);
});
Jt(La);
const tx = "tab", nx = "bs.tab", Zs = `.${nx}`, sx = `hide${Zs}`, ox = `hidden${Zs}`, rx = `show${Zs}`, ix = `shown${Zs}`, ax = `click${Zs}`, lx = `keydown${Zs}`, cx = `load${Zs}`, ux = "ArrowLeft", Vp = "ArrowRight", dx = "ArrowUp", Mp = "ArrowDown", yl = "Home", Lp = "End", xs = "active", Fp = "fade", bl = "show", fx = "dropdown", r_ = ".dropdown-toggle", px = ".dropdown-menu", El = `:not(${r_})`, hx = '.list-group, .nav, [role="tablist"]', mx = ".nav-item, .list-group-item", gx = `.nav-link${El}, .list-group-item${El}, [role="tab"]${El}`, i_ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', wl = `${gx}, ${i_}`, vx = `.${xs}[data-bs-toggle="tab"], .${xs}[data-bs-toggle="pill"], .${xs}[data-bs-toggle="list"]`;
class Po extends fn {
  constructor(t) {
    super(t), this._parent = this._element.closest(hx), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), X.on(this._element, lx, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return tx;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), s = n ? X.trigger(n, sx, {
      relatedTarget: t
    }) : null;
    X.trigger(t, rx, {
      relatedTarget: n
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(xs), this._activate(ge.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(bl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), X.trigger(t, ix, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Fp));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(xs), t.blur(), this._deactivate(ge.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(bl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), X.trigger(t, ox, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Fp));
  }
  _keydown(t) {
    if (![ux, Vp, dx, Mp, yl, Lp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((o) => !us(o));
    let s;
    if ([yl, Lp].includes(t.key))
      s = n[t.key === yl ? 0 : n.length - 1];
    else {
      const o = [Vp, Mp].includes(t.key);
      s = mu(n, t.target, o, !0);
    }
    s && (s.focus({
      preventScroll: !0
    }), Po.getOrCreateInstance(s).show());
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
    if (!s.classList.contains(fx))
      return;
    const o = (r, i) => {
      const a = ge.findOne(r, s);
      a && a.classList.toggle(i, n);
    };
    o(r_, xs), o(px, bl), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(xs);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(wl) ? t : ge.findOne(wl, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(mx) || t;
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
X.on(document, ax, i_, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !us(this) && Po.getOrCreateInstance(this).show();
});
X.on(window, cx, () => {
  for (const e of ge.find(vx))
    Po.getOrCreateInstance(e);
});
Jt(Po);
const _x = "toast", yx = "bs.toast", gs = `.${yx}`, bx = `mouseover${gs}`, Ex = `mouseout${gs}`, wx = `focusin${gs}`, Ax = `focusout${gs}`, Sx = `hide${gs}`, Ox = `hidden${gs}`, Cx = `show${gs}`, Tx = `shown${gs}`, Nx = "fade", Bp = "hide", hi = "show", mi = "showing", Dx = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, xx = {
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
    return xx;
  }
  static get DefaultType() {
    return Dx;
  }
  static get NAME() {
    return _x;
  }
  // Public
  show() {
    if (X.trigger(this._element, Cx).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Nx);
    const n = () => {
      this._element.classList.remove(mi), X.trigger(this._element, Tx), this._maybeScheduleHide();
    };
    this._element.classList.remove(Bp), Qr(this._element), this._element.classList.add(hi, mi), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || X.trigger(this._element, Sx).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Bp), this._element.classList.remove(mi, hi), X.trigger(this._element, Ox);
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
    X.on(this._element, bx, (t) => this._onInteraction(t, !0)), X.on(this._element, Ex, (t) => this._onInteraction(t, !1)), X.on(this._element, wx, (t) => this._onInteraction(t, !0)), X.on(this._element, Ax, (t) => this._onInteraction(t, !1));
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
Pa(ti);
Jt(ti);
var kx = Object.defineProperty, Rx = (e, t, n) => t in e ? kx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nn = (e, t, n) => Rx(e, typeof t != "symbol" ? t + "" : t, n);
const Ix = { class: "toast-header" }, Px = ["textContent"], Vx = ["textContent"], Mx = { class: "toast-body" }, Lx = ["textContent"], Fx = /* @__PURE__ */ Te({
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
    Lt(r, (A) => {
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
    function v() {
      f.value.getOrCreateInstance();
    }
    function _() {
      f.value.getInstance();
    }
    function y() {
      f.value && (r.value === !0 ? d() : h());
    }
    function E() {
      o("hide", f.value);
    }
    function m() {
      o("hidden", f.value);
    }
    function D() {
      o("show", f.value);
    }
    async function I() {
      o("shown", f.value);
    }
    const C = { show: d, hide: h, dispose: p, isShown: g, getOrCreateInstance: v, getInstance: _ };
    return t({ ...C }), Ht(() => {
      u.value.addEventListener("hide.bs.toast", E), u.value.addEventListener("hidden.bs.toast", m), u.value.addEventListener("show.bs.toast", D), u.value.addEventListener("shown.bs.toast", I), f.value = new ti(u.value, {
        animation: i.value,
        autohide: a.value,
        delay: c.value
      }), y();
    }), (A, T) => (N(), P("div", {
      ref_key: "toastRef",
      ref: u,
      class: ue(["toast", [A.variant ? `text-bg-${A.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      ke(A.$slots, "header", st(Ze({ ...C })), () => [
        l("div", Ix, [
          ke(A.$slots, "title", st(Ze({ ...C })), () => [
            l("strong", {
              class: "me-auto",
              textContent: B(A.title)
            }, null, 8, Px)
          ], !0),
          ke(A.$slots, "subtitle", st(Ze({ ...C })), () => [
            l("small", {
              textContent: B(A.subtitle)
            }, null, 8, Vx)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: h
          })
        ])
      ], !0),
      ke(A.$slots, "body", st(Ze({ ...C })), () => [
        l("div", Mx, [
          ke(A.$slots, "default", st(Ze({ ...C })), () => [
            l("span", {
              textContent: B(A.body)
            }, null, 8, Lx)
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
}, a_ = /* @__PURE__ */ In(Fx, [["__scopeId", "data-v-c0cdbae8"]]);
function Bx() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const jx = { id: "toast-wrapper" };
let jp;
const Ux = /* @__PURE__ */ Te({
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
    jp = (r, i = "top right") => {
      const a = Bx(), c = { ...n, ...r, id: a };
      let f = s.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), s.value.set(i, f);
    };
    function o(r, i) {
      const a = s.value.get(r);
      a?.delete(i);
    }
    return t({ toast: jp }), (r, i) => (N(), rt(Fo, { to: "body" }, [
      l("div", jx, [
        (N(!0), P(we, null, Ye(s.value, ([a, c]) => (N(), P("div", {
          key: a,
          class: ue(["toast-group", `${a}`])
        }, [
          (N(!0), P(we, null, Ye(c, (f, u) => (N(), rt(a_, fs({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (d) => o(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Hx = /* @__PURE__ */ In(Ux, [["__scopeId", "data-v-786d1c50"]]), l_ = () => {
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
const Vo = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(kn).includes(n) || n == "" ? "" : `${t}${n}`;
}, $x = { class: "modal-content" }, Wx = { class: "modal-header" }, Kx = ["innerHTML"], zx = { class: "modal-body" }, qx = ["innerHTML"], Yx = { class: "modal-footer" }, Xx = ["innerHTML"], Gx = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const Qx = /* @__PURE__ */ Te({
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
    } = cn(s), u = n, d = H(() => Vo(c.value, "modal-")), h = H(() => Vo(f.value, "btn-")), p = G();
    let g;
    const v = Rn(), _ = () => document.querySelectorAll(".modal.show").length, y = () => typeof window < "u" && window._managedModals ? window._managedModals : [], E = 1055, m = G(E), D = () => {
      const V = _();
      m.value = E + V;
    };
    let I;
    const C = l_();
    function A() {
      return new Promise((V, L) => {
        if (!p.value) return;
        C.removeStickyElements(), D(), p.value.classList.add("managed-modal");
        const W = y(), oe = W.length + 1, Oe = {
          element: p.value,
          priority: oe,
          instance: v
        };
        W.push(Oe), p.value.addEventListener("shown.bs.modal", () => {
          k();
        }, { once: !0 }), g?.show(), I = V, u("onShown", g);
      });
    }
    function T(V = !0) {
      if (!p.value) return;
      const L = y(), W = L.findIndex((oe) => oe.element === p.value);
      W > -1 && L.splice(W, 1), p.value.addEventListener("hidden.bs.modal", () => {
        p.value && (p.value.style.display = ""), k();
      }, { once: !0 }), g?.hide(), typeof I == "function" && I(V), u("onHidden", g), C.restoreStickyElements();
    }
    function S() {
      g?.toggle();
    }
    const k = () => {
      const V = y();
      if (V.length === 0) return;
      V.sort((W, oe) => W.priority - oe.priority);
      const L = V[V.length - 1];
      V.forEach((W) => {
        W.element !== L.element ? W.element.style.opacity = "0" : W.element.style.opacity = "1";
      });
    };
    Ht(() => {
      g = new Xs(p.value, {
        backdrop: o?.value,
        keyboard: r.value,
        focus: i.value
      }), p.value.classList.add("managed-modal"), pa(() => {
        s?.visible === !0 ? g?.show() : g?.hide();
      });
    });
    function R(V) {
      o?.value !== "static" && T(!1);
    }
    function w() {
      T(!1);
    }
    function $() {
      T(!1);
    }
    function he() {
      T(!0);
    }
    t({
      modal: g,
      show: A,
      hide: T,
      toggle: S,
      onHeaderCloseClicked: w,
      onCancelClicked: $,
      onOkCLicked: he
    });
    const ne = { show: A, hide: T, toggle: S, modal: g };
    return (V, L) => (N(), P("div", fs({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...V.$attrs }, {
      onClick: Am(R, ["self"]),
      style: { zIndex: m.value }
    }), [
      l("div", {
        class: ue(["modal-dialog", d.value])
      }, [
        l("div", $x, [
          ke(V.$slots, "header", st(Ze({ ...ne })), () => [
            l("div", Wx, [
              ke(V.$slots, "title", st(Ze({ ...ne })), () => [
                l("h5", {
                  class: "modal-title",
                  innerHTML: V.title
                }, null, 8, Kx)
              ], !0),
              ke(V.$slots, "header-close-button", st(Ze({ ...ne })), () => [
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: w
                })
              ], !0)
            ])
          ], !0),
          l("div", zx, [
            ke(V.$slots, "default", st(Ze({ ...ne })), () => [
              l("span", { innerHTML: V.body }, null, 8, qx)
            ], !0)
          ]),
          l("div", Yx, [
            ke(V.$slots, "footer", st(Ze({ ...ne })), () => [
              V.okOnly ? Ee("", !0) : (N(), P("button", {
                key: 0,
                type: "button",
                class: ue(["btn btn-secondary", h.value]),
                onClick: $
              }, [
                ke(V.$slots, "button-cancel", st(Ze({ ...ne })), () => [
                  l("span", { innerHTML: V.textCancel }, null, 8, Xx)
                ], !0)
              ], 2)),
              l("button", {
                type: "button",
                class: ue(["btn btn-primary", h.value]),
                onClick: he
              }, [
                ke(V.$slots, "button-ok", st(Ze({ ...ne })), () => [
                  l("span", { innerHTML: V.textOk }, null, 8, Gx)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), c_ = /* @__PURE__ */ In(Qx, [["__scopeId", "data-v-b8ba4eaa"]]), Jx = /* @__PURE__ */ Te({
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
    return t({ confirm: o, alert: r }), (i, a) => (N(), rt(Fo, { to: "body" }, [
      le(c_, fs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), Zx = {
  "data-header": "",
  class: "border-bottom"
}, ek = { class: "d-flex gap-2 p-2" }, tk = { class: "p-2" }, nk = {
  "data-footer": "",
  class: "border-top p-2"
}, sk = { class: "buttons" }, ok = /* @__PURE__ */ Te({
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
    const n = e, { backdrop: s, disableOutsideClick: o, modal: r, size: i, btnSize: a } = cn(n), c = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = G(f), d = G(!1), h = G(!1), p = G(!1), g = G(), v = G(!1), _ = H(() => Vo(i.value, "modal-")), y = H(() => Vo(a.value, "btn-")), E = H(() => ({
      opening: d.value,
      closing: h.value,
      "no-backdrop": s.value === !1,
      static: v.value
    }));
    let m = null;
    const D = () => {
      const w = c();
      u.value = f + w;
    }, I = l_(), C = async () => (D(), I.removeStickyElements(), d.value = !0, g.value.addEventListener(
      "animationend",
      () => {
        d.value = !1, p.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? g.value.showModal() : g.value.show(), new Promise((w, $) => {
      m = w;
    })), A = async (w = !1) => {
      h.value = !0, g.value.addEventListener(
        "animationend",
        () => {
          g.value.close(), h.value = !1, p.value = !1, typeof m == "function" && m(w), m = null, I.restoreStickyElements();
        },
        { once: !0 }
      );
    }, T = async () => {
      p.value === !0 ? A() : C();
    }, S = () => {
      v.value = !0, setTimeout(() => {
        v.value = !1;
      }, 200);
    }, k = () => {
      if (s.value === "static" || o.value === !0) {
        S();
        return;
      }
      A(!1);
    };
    if (r.value === !0) {
      let w = function(he) {
        if (s.value === "static" || o.value === !0) {
          S();
          return;
        }
        he.target === g.value && A(!1);
      };
      const $ = new AbortController();
      Ht(() => {
        document.addEventListener("click", (he) => {
          w(he);
        }, { signal: $.signal });
      }), Bo(() => {
        $.abort();
      });
    }
    const R = { show: C, hide: A, toggle: T, dialog: g };
    return t({
      show: C,
      hide: A,
      toggle: T
    }), (w, $) => (N(), P("div", {
      class: "dialog-wrapper",
      style: Vt({ zIndex: u.value })
    }, [
      l("div", {
        class: "backdrop",
        onClick: k
      }),
      l("dialog", {
        ref_key: "dialog",
        ref: g,
        class: ue(E.value)
      }, [
        l("div", {
          class: ue(["content", _.value])
        }, [
          ke(w.$slots, "header", st(Ze({ ...R })), () => [
            l("div", Zx, [
              l("div", ek, [
                ke(w.$slots, "title", st(Ze({ ...R })), () => [
                  J(B(w.title), 1)
                ], !0),
                ke(w.$slots, "header-close-button", {}, () => [
                  l("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: $[0] || ($[0] = (he) => A(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          l("div", tk, [
            ke(w.$slots, "default", st(Ze({ ...R })), () => [
              J(B(w.body), 1)
            ], !0)
          ]),
          ke(w.$slots, "footer", st(Ze({ ...R })), () => [
            l("div", nk, [
              l("div", sk, [
                w.okOnly ? Ee("", !0) : (N(), P("button", {
                  key: 0,
                  type: "button",
                  class: ue(["btn btn-secondary", y.value]),
                  onClick: $[1] || ($[1] = (he) => A(!1))
                }, [
                  ke(w.$slots, "textCancel", st(Ze({ ...R })), () => [
                    J(B(w.textCancel), 1)
                  ], !0)
                ], 2)),
                l("button", {
                  type: "button",
                  class: ue(["btn btn-primary", y.value]),
                  onClick: $[2] || ($[2] = (he) => A(!0))
                }, [
                  ke(w.$slots, "textOk", st(Ze({ ...R })), () => [
                    J(B(w.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), u_ = /* @__PURE__ */ In(ok, [["__scopeId", "data-v-0990c791"]]), rk = /* @__PURE__ */ Te({
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
    return t({ confirm: o, alert: r }), (i, a) => (N(), rt(Fo, { to: "body" }, [
      le(u_, fs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), ik = { "data-first": "" }, ak = ["disabled", "innerHTML"], lk = { "data-prev": "" }, ck = ["disabled", "innerHTML"], uk = { key: 0 }, dk = ["innerHTML"], fk = ["onClick"], pk = { "data-next": "" }, hk = ["disabled", "innerHTML"], mk = { "data-last": "" }, gk = ["disabled", "innerHTML"], vk = /* @__PURE__ */ Te({
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
    function n(m, D = 0) {
      return [...Array(m).keys()].map((I) => I + D);
    }
    const s = t, o = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: a } = cn(o), c = Math.floor(i.value / 2), f = H(() => {
      let m = i.value, D = r.value <= c ? 1 : r.value - c;
      return r.value >= h.value - c && (D = h.value - m + 1), D < 1 && (D = 1), h.value < m && (m = h.value), n(m, D);
    }), u = H(() => r.value <= 1), d = H(() => r.value >= h.value), h = H(() => {
      const { perPage: m, totalItems: D } = o;
      return Math.ceil(D / m);
    });
    pa(() => {
      h.value > 0 && r.value > h.value && s("update:modelValue", h.value);
    });
    function p(m) {
      const D = i.value - 1;
      return !(a.value === !0 || m === 0 && r.value - c - 1 <= 0 || m === D && r.value + c >= h.value || m > 0 && m < D);
    }
    function g(m) {
      m < 1 && (m = 1), m > h.value && (m = h.value), s("update:modelValue", m);
    }
    function v() {
      s("update:modelValue", 1);
    }
    function _() {
      s("update:modelValue", h.value);
    }
    function y() {
      let m = r.value - 1;
      m < 1 && (m = 1), s("update:modelValue", m);
    }
    function E() {
      let m = r.value + 1;
      m > h.value && (m = h.value), s("update:modelValue", m);
    }
    return (m, D) => (N(), P("ul", {
      class: ue(["pagination", m.size])
    }, [
      l("li", ik, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: m.firstText,
          onClick: v
        }, null, 8, ak)
      ]),
      l("li", lk, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: m.prevText,
          onClick: y
        }, null, 8, ck)
      ]),
      (N(!0), P(we, null, Ye(f.value, (I, C) => (N(), P(we, null, [
        p(C) ? (N(), P("li", uk, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: m.ellipsisText
          }, null, 8, dk)
        ])) : (N(), P("li", {
          key: 1,
          "data-prev": "",
          class: ue({ active: m.modelValue === I })
        }, [
          l("button", {
            class: "",
            onClick: (A) => g(I)
          }, B(I), 9, fk)
        ], 2))
      ], 64))), 256)),
      l("li", pk, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: m.nextText,
          onClick: E
        }, null, 8, hk)
      ]),
      l("li", mk, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: m.lastText,
          onClick: _
        }, null, 8, gk)
      ])
    ], 2));
  }
}), _k = /* @__PURE__ */ In(vk, [["__scopeId", "data-v-2bfd7085"]]), yk = { class: "d-inline" }, bk = { class: "fw-bold" }, Ek = /* @__PURE__ */ Te({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = cn(n), r = H({
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
          l("div", yk, [
            ke(i.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = l("span", null, "Per page: ", -1)),
              l("span", bk, B(r.value), 1)
            ])
          ])
        ]),
        default: be(() => [
          (N(!0), P(we, null, Ye(te(o), (u, d) => (N(), rt(c, {
            key: u,
            onClick: (h) => r.value = u,
            active: u === i.modelValue
          }, {
            default: be(() => [
              J(B(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), wk = ["value"], Ak = /* @__PURE__ */ Te({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = cn(n), r = H({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => et((N(), P("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (c) => r.value = c)
    }, [
      (N(!0), P(we, null, Ye(te(o), (c, f) => (N(), P("option", {
        key: c,
        value: c
      }, B(c), 9, wk))), 128))
    ], 512)), [
      [Hn, r.value]
    ]);
  }
});
var Os = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Os || {});
class Sk {
  constructor(t, n = "ASC", s) {
    nn(this, "key"), nn(this, "direction"), nn(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = s;
  }
}
const Up = (e, t) => {
  const n = (a, c) => {
    let f = typeof a, u = typeof c;
    return f == "number" && f == u;
  }, s = (a, c) => a - c, o = (a, c) => (a = a ?? "", c = c ?? "", a.localeCompare(c)), r = (a, c) => n(a, c) ? s : o, i = [...t];
  return i.sort((a, c) => {
    let f = 0;
    for (let u of e) {
      let { key: d, direction: h, sortFn: p } = u, g = h === "ASC" ? 1 : -1, v = a[d], _ = c[d];
      if (p = typeof p == "function" ? p : r(v, _), f = p(v, _, a, c, t, u, g) * g, f !== 0) return f;
    }
    return f;
  }), i;
}, Ok = ["onClick"], Ck = { class: "th-wrapper" }, Tk = {
  key: 0,
  "data-sort-indicator": ""
}, Nk = { class: "sort-index" }, Dk = { class: "sort-direction" }, xk = ["onMouseover"], kk = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Rk = ["colspan"], Ik = ["innerHTML"];
class Al {
  constructor(t = "", n = "", s = !1, o) {
    nn(this, "key"), nn(this, "label"), nn(this, "sortable"), nn(this, "sortFn"), this.key = t, this.label = n, this.sortable = s, this.sortFn = o;
  }
}
const Pk = /* @__PURE__ */ Te({
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
    }, s = t, o = e, r = G([]), { fields: i, items: a } = cn(o), c = H(() => {
      if (o.externalSort || r.value.length == 0) return o.items;
      const v = [...o.items];
      return Up(r.value, v);
    }), f = H(() => {
      let v = i.value, _ = [];
      return v.length === 0 && (v = n([...a.value])), v.reduce((y, E, m) => {
        if (typeof E == "string")
          y.push(new Al(E, E));
        else if (E instanceof Al)
          y.push(E);
        else if (typeof E == "object") {
          const { key: D, label: I, sortable: C, sortFn: A } = E;
          y.push(new Al(D, I, C, A));
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
      return y.direction === Os.ASC ? "fas fa-sort-up" : y.direction === Os.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function h(v) {
      const { key: _ } = v, y = r.value.findIndex((E) => E.key === _);
      if (y < 0) {
        const E = new Sk(_, Os.ASC, v.sortFn);
        r.value.push(E);
      } else {
        const E = r.value[y], m = E.direction;
        m === Os.ASC ? E.direction = Os.DESC : m === Os.DESC && r.value.splice(y, 1);
      }
      s("sort", r.value, Up);
    }
    function p(v, _, y, E) {
      s("onMouseOverCell", v, _, y, E);
    }
    let g = G(null);
    return Ht(() => {
      g.value = Rn();
    }), (v, _) => (N(), P("table", fs({ ...v.$attrs }, {
      class: { striped: v.striped, hover: v.hover }
    }), [
      l("thead", null, [
        (N(!0), P(we, null, Ye(f.value, (y) => (N(), P("th", {
          key: `thead-${y.key}`,
          class: ue({ sortable: y.sortable }),
          onClick: (E) => y.sortable && h(y)
        }, [
          l("span", Ck, [
            ke(v.$slots, `head(${y.key})`, {
              field: y,
              data: te(g),
              value: y.label
            }, () => [
              J(B(y.label), 1)
            ], !0),
            y.sortable ? (N(), P("span", Tk, [
              l("span", Nk, B(u(y)), 1),
              l("span", Dk, [
                l("i", {
                  class: ue(d(y))
                }, null, 2)
              ])
            ])) : Ee("", !0)
          ])
        ], 10, Ok))), 128))
      ]),
      l("tbody", null, [
        (N(!0), P(we, null, Ye(c.value, (y, E) => (N(), P(we, {
          key: `trow-${y?.id ?? E}`
        }, [
          ke(v.$slots, "row", {
            item: y,
            index: E,
            colspan: f.value.length
          }, void 0, !0),
          l("tr", null, [
            (N(!0), P(we, null, Ye(f.value, (m) => (N(), P("td", {
              key: `tcell-${m.key + (y?.id ?? E)}`,
              class: ue({ [`tcell-${m?.key}`]: !0 }),
              onMouseover: (D) => p(D, y, E, m)
            }, [
              ke(v.$slots, `cell(${m?.key})`, {
                data: te(g),
                item: y,
                field: m,
                value: y[m?.key]
              }, () => [
                J(B(y[m?.key]), 1)
              ], !0)
            ], 42, xk))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        ke(v.$slots, "footer", { data: te(g) }, void 0, !0)
      ]),
      v.showEmpty && c.value.length === 0 ? (N(), P("tr", kk, [
        l("td", {
          colspan: f.value.length
        }, [
          ke(v.$slots, "empty", {
            items: c.value,
            data: te(g),
            fields: f.value
          }, () => [
            l("span", { innerHTML: v.emptyText }, null, 8, Ik)
          ], !0)
        ], 8, Rk)
      ])) : Ee("", !0)
    ], 16));
  }
}), Vk = /* @__PURE__ */ In(Pk, [["__scopeId", "data-v-b1e9b5de"]]);
var d_ = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(d_ || {});
const Mk = { class: "d-inline-block position-relative" }, Lk = ["disabled"], Hp = "data-prevent-close", Fk = /* @__PURE__ */ Te({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: d_.PRIMARY },
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
    const s = G(), o = e, r = G(), i = G(!1), a = G(o.variant), c = G(o.centered), f = G(o.dropup), u = G(o.dropend), d = G(o.dropstart), h = G(o.menuEnd), p = n, g = H(() => {
      const T = [];
      return a != null && a.value && T.push(`btn-${a.value}`), o.size && T.push(`btn-${o.size}`), T;
    }), v = H(() => {
      const T = [];
      return c != null && c.value && T.push("dropdown-center"), f != null && f.value && T.push("dropup"), d != null && d.value && T.push("dropstart"), !(d != null && d.value) && u != null && u.value && T.push("dropend"), T.length === 0 && T.push("dropdown"), T.unshift("btn-group"), T;
    }), _ = H(() => {
      const T = [];
      return i.value && T.push("show"), h.value && T.push("dropdown-menu-end"), T;
    }), y = () => {
      if (!i.value) return;
      const T = r.value.getBoundingClientRect(), S = s.value.getBoundingClientRect(), k = window.innerHeight - T.bottom, R = T.top, w = window.innerWidth - T.right, $ = T.left;
      f.value = k < S.height && R >= S.height, h.value = w < S.width && $ >= S.width;
    };
    async function E() {
      i.value = !0, await Eo(), y();
    }
    function m() {
      i.value = !1;
    }
    function D(T) {
      i.value ? m() : E();
    }
    function I(T) {
      const { target: S } = T;
      S?.closest(`[${Hp}],[${Hp}=true]`) || m();
    }
    function C() {
      i.value && m();
    }
    Lt(i, (T, S) => {
      typeof S > "u" || T !== S && (p("toggle", { show: T }), T === !0 ? p("open", { show: T }) : p("close", { show: T }));
    }, { immediate: !0 });
    const A = {
      show: i,
      disabled: o.disabled,
      buttonClasses: g,
      onButtonClicked: D,
      onMenuClicked: I,
      onClickOutside: C,
      open: E,
      close: m
    };
    return t({
      ...A
    }), (T, S) => {
      const k = Zy("click-outside");
      return N(), P("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: ue([v.value, "dropdown-wrapper"])
      }, [
        et((N(), P("div", Mk, [
          ke(T.$slots, "header", st(Ze({ ...A })), () => [
            l("button", {
              class: ue(["btn dropdown-toggle", g.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: D,
              disabled: T.disabled
            }, [
              ke(T.$slots, "button", st(Ze({ ...A })), () => [
                J(B(T.text), 1)
              ], !0)
            ], 10, Lk)
          ], !0),
          l("ul", {
            ref_key: "dropDownMenuRef",
            ref: s,
            class: ue(["dropdown-menu", _.value]),
            onClick: I
          }, [
            ke(T.$slots, "default", st(Ze({ ...A })), void 0, !0)
          ], 2)
        ])), [
          [k, C]
        ])
      ], 2);
    };
  }
}), Bk = /* @__PURE__ */ In(Fk, [["__scopeId", "data-v-4910c394"]]), jk = ["data-prevent-close"], Uk = /* @__PURE__ */ Te({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = cn(t);
    return (s, o) => (N(), P("li", {
      "data-prevent-close": te(n) ? "" : null
    }, [
      l("span", {
        class: ue(["dropdown-item", { active: s.active }]),
        role: "button",
        tabindex: "0"
      }, [
        ke(s.$slots, "default")
      ], 2)
    ], 8, jk));
  }
}), Hk = {}, $k = { "data-prevent-close": "" }, Wk = { class: "dropdown-header" };
function Kk(e, t) {
  return N(), P("li", $k, [
    l("h6", Wk, [
      ke(e.$slots, "default")
    ])
  ]);
}
const zk = /* @__PURE__ */ In(Hk, [["render", Kk]]), qk = {};
function Yk(e, t) {
  return N(), P("li", null, t[0] || (t[0] = [
    l("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Xk = /* @__PURE__ */ In(qk, [["render", Yk]]), Gk = {
  mounted(e, t, n, s) {
    new Js(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Qk = (e, t) => {
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
}, Jk = {
  mounted(e, t, n, s) {
    const o = t.value;
    Qk(e, o);
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
const Zk = { class: "drawer-content" }, eR = { class: "drawer-header" }, tR = ["innerHTML"], nR = { class: "drawer-body" }, sR = ["innerHTML"], oR = { class: "drawer-footer" }, rR = ["innerHTML"], iR = ["innerHTML"], aR = /* @__PURE__ */ Te({
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
    } = cn(n), c = H(() => Vo(i.value, "drawer-")), f = H(() => Vo(a.value, "btn-")), u = G(), d = G(!1), h = Rn();
    let p;
    async function g() {
      return d.value === !0 ? void 0 : new Promise((C, A) => {
        d.value = !0, p = C;
      });
    }
    function v(C = !0) {
      d.value = !1, typeof p == "function" && p(C);
    }
    function _() {
      d.value === !0 ? g() : v(!1);
    }
    function y(C) {
      s?.value !== "static" && v(!1);
    }
    function E() {
      v(!1);
    }
    function m() {
      v(!1);
    }
    function D() {
      v(!0);
    }
    function I() {
      d.value === !0 ? vc.add(h) : vc.delete(h);
    }
    return t({
      show: g,
      hide: v,
      toggle: _
    }), (C, A) => (N(), rt(iE, {
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
          onClick: Am(y, ["self"])
        }), [
          l("div", {
            class: ue(["drawer-dialog", c.value])
          }, [
            l("div", Zk, [
              l("div", eR, [
                ke(C.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: C.title
                  }, null, 8, tR)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: E
                })
              ]),
              l("div", nR, [
                ke(C.$slots, "default", {}, () => [
                  l("span", { innerHTML: C.body }, null, 8, sR)
                ], !0)
              ]),
              l("div", oR, [
                ke(C.$slots, "footer", {}, () => [
                  C.okOnly ? Ee("", !0) : (N(), P("button", {
                    key: 0,
                    type: "button",
                    class: ue(["ms-auto btn btn-secondary", f.value]),
                    onClick: m
                  }, [
                    ke(C.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: C.textCancel }, null, 8, rR)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: ue(["btn btn-primary", f.value]),
                    onClick: D
                  }, [
                    ke(C.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: C.textOk }, null, 8, iR)
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
}), lR = /* @__PURE__ */ In(aR, [["__scopeId", "data-v-2e49e8cb"]]), Wt = "b", f_ = "$toaster", p_ = "$modalManager", cR = "$dialogManager";
class h_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = _a(Jx).mount(t);
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
      const n = _a(rk).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
nn(m_, "component");
class g_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = _a(Hx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
nn(g_, "component");
function v_() {
  return _t(f_);
}
function uR() {
  return _t(p_);
}
function dR(e) {
  e.component(`${Wt}-drawer`, lR), e.component(`${Wt}-modal`, c_), e.component(`${Wt}-dialog`, u_), e.component(`${Wt}-pagination`, _k), e.component(`${Wt}-pagination-dropdown`, Ek), e.component(`${Wt}-pagination-select`, Ak), e.component(`${Wt}-dropdown`, Bk), e.component(`${Wt}-dropdown-item`, Uk), e.component(`${Wt}-dropdown-header`, zk), e.component(`${Wt}-dropdown-divider`, Xk), e.component(`${Wt}-table`, Vk), e.component(`${Wt}-toast`, a_);
}
function fR(e) {
  e.directive("tooltip", Gk), e.directive("click-outside", Jk);
}
const pR = {
  install(e) {
    dR(e), fR(e);
    const t = g_.getComponent(), n = h_.getComponent(), s = m_.getComponent();
    e.provide(f_, t), e.provide(p_, n), e.provide(cR, s);
  }
}, qo = /* @__PURE__ */ ps("settings", () => {
  const e = Xr(), t = v_(), n = Us({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), s = G(null), o = G([]), r = G([]), i = Us({
    fetch: !1,
    save: !1
  }), a = async () => {
    try {
      i.fetch = !0;
      const v = (await Ge.getProjectSettings()).data ?? {};
      Object.assign(n, v), s.value = n.fhir_system, o.value = [...n.selected_mapping_resources], r.value = [...n.selected_custom_mapping_resources];
    } catch (g) {
      e.addError(g, "settingsStore"), console.error("Failed to load project settings:", g);
    } finally {
      i.fetch = !1;
    }
  }, c = (g, v) => {
    const _ = { name: g, resourceSpec: v, type: "predefined" };
    o.value.push(_);
  }, f = (g, v) => {
    const _ = {
      name: g,
      resourceSpec: v,
      type: "custom"
    };
    r.value.push(_);
  }, u = (g, v) => {
    if (v === "predefined") {
      const _ = o.value.findIndex((y) => y.name === g.name && y.resourceSpec === g.resourceSpec);
      _ > -1 && o.value.splice(_, 1);
    } else {
      const _ = r.value.findIndex((y) => y.name === g.name && y.resourceSpec === g.resourceSpec);
      _ > -1 && r.value.splice(_, 1);
    }
  }, d = (g) => {
    s.value = g;
  }, h = async () => {
    try {
      i.save = !0;
      const g = {
        fhir_system: s.value,
        selected_mapping_resources: o.value,
        selected_custom_mapping_resources: r.value
      }, v = await Ge.updateProjectSettings(g);
      v.data.sync_results && p(v.data.sync_results), await a();
    } catch (g) {
      throw e.addError(g, "settingsStore"), console.error("Failed to save project settings:", g), g;
    } finally {
      i.save = !1;
    }
  }, p = (g) => {
    const {
      resources_added: v,
      resources_modified: _,
      resources_removed: y,
      tasks_created: E,
      total_mrns: m,
      error: D
    } = g;
    if (D) {
      t.toast({
        title: "Sync Warning",
        body: `Settings saved but sync failed: ${D}`,
        variant: "warning",
        delay: 8e3
      });
      return;
    }
    if (v + _ + y === 0)
      return;
    const C = [];
    v > 0 && C.push(`${v} added`), _ > 0 && C.push(`${_} modified`), y > 0 && C.push(`${y} removed`);
    const A = "Resources Synchronized", T = `${C.join(", ")}. Created ${E} tasks for ${m} patients.`;
    t.toast({
      title: A,
      body: T,
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
    saveProjectSettings: h
  };
}), Ie = {
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
      const V = await Ge.listMrns(i.value.page, i.value.limit);
      V.data.data && V.data.pagination ? (n.value = V.data.data, i.value.total = V.data.pagination.total, i.value.totalPages = V.data.pagination.total_pages, i.value.hasNext = V.data.pagination.has_next, i.value.hasPrevious = V.data.pagination.has_previous, V.data.project_summary && (o.value = V.data.project_summary)) : n.value = V.data, s.value = [];
    } catch (V) {
      e.addError(V, "monitorStore"), console.error("Failed to load MRNs:", V), n.value = [];
    } finally {
      t.value = !1;
    }
  }, c = async (V) => {
    try {
      await Ge.addMrn(V), await a();
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
  }, d = H(() => n.value.length > 0 && s.value.length === n.value.length), h = H(() => s.value.length > 0 && s.value.length < n.value.length), p = () => {
    d.value ? s.value = [] : s.value = n.value.map((V) => V.id);
  }, g = (V) => {
    const L = s.value.indexOf(V);
    L === -1 ? s.value.push(V) : s.value.splice(L, 1);
  }, v = (V) => {
    i.value.page = V, a();
  }, _ = (V) => {
    i.value.limit = V, i.value.page = 1, a();
  }, y = async (V) => {
    try {
      return (await Ge.getMrnResources(V)).data;
    } catch (L) {
      return e.addError(L, "monitorStore"), console.error(`Failed to get resource status for MRN ${V}:`, L), { mrn: V, resources: [], total_resources: 0 };
    }
  }, E = async () => {
    try {
      const V = await Ge.getProjectSummary();
      return o.value = V.data, V.data;
    } catch (V) {
      return e.addError(V, "monitorStore"), console.error("Failed to get project summary:", V), null;
    }
  }, m = async (V, L) => {
    try {
      r.value = !0;
      const W = await Ge.triggerFetchMrns(V, L);
      return await a(), W.data;
    } catch (W) {
      throw e.addError(W, "monitorStore"), console.error("Failed to trigger fetch:", W), W;
    } finally {
      r.value = !1;
    }
  }, D = async (V) => {
    const L = n.value.filter((W) => s.value.includes(W.id)).map((W) => W.mrn);
    if (L.length === 0)
      throw new Error("No MRNs selected");
    return await m(L, V);
  }, I = async () => {
    try {
      r.value = !0;
      const V = await Ge.performFullSync();
      return await a(), await E(), V.data;
    } catch (V) {
      throw e.addError(V, "monitorStore"), console.error("Failed to perform full sync:", V), V;
    } finally {
      r.value = !1;
    }
  }, C = async (V, L, W) => {
    try {
      const oe = await Ge.retryFailedResource(V, L, W);
      return await a(), oe.data;
    } catch (oe) {
      throw e.addError(oe, "monitorStore"), console.error("Failed to retry resource:", oe), oe;
    }
  }, A = async (V) => {
    try {
      r.value = !0;
      const L = await Ge.bulkRetryFailed(V);
      return await a(), L.data;
    } catch (L) {
      throw e.addError(L, "monitorStore"), console.error("Failed to bulk retry failed resources:", L), L;
    } finally {
      r.value = !1;
    }
  }, T = (V) => {
    if (V.status_summary)
      return V.status_summary.smart_status_display;
    const L = V.resources.filter((xe) => xe.status !== Ie.Deleted), W = L.length, oe = L.filter((xe) => xe.status === Ie.Completed).length;
    if (W === 0) return "No Resources";
    if (oe === W) return "Completed";
    const Oe = oe / W * 100;
    if (Oe >= 75) return `Mostly Completed (${Math.round(Oe)}%)`;
    if (Oe >= 25) return `Mixed Progress (${Math.round(Oe)}%)`;
    if (Oe > 0) return `Starting (${Math.round(Oe)}%)`;
    const Le = {};
    return L.forEach((xe) => {
      Le[xe.status] = (Le[xe.status] || 0) + 1;
    }), Object.keys(Le).reduce((xe, nt) => Le[xe] > Le[nt] ? xe : nt, Ie.Pending);
  }, S = (V) => {
    if (V.status_summary)
      return V.status_summary.overall_status;
    const L = V.resources.filter((oe) => oe.status !== Ie.Deleted);
    if (L.length === 0) return Ie.Pending;
    const W = {};
    return L.forEach((oe) => {
      W[oe.status] = (W[oe.status] || 0) + 1;
    }), Object.keys(W).reduce((oe, Oe) => W[oe] > W[Oe] ? oe : Oe, Ie.Pending);
  }, k = (V) => {
    if (V.status_summary)
      return V.status_summary.archive_button_config;
    const L = V.resources.filter((Oe) => Oe.status !== Ie.Deleted), W = L.filter((Oe) => Oe.status === Ie.Completed).length, oe = L.length;
    return W === 0 ? {
      variant: "secondary",
      disabled: !0,
      tooltip: "No completed resources to archive",
      text: "Archive"
    } : W === oe ? {
      variant: "success",
      disabled: !1,
      tooltip: `Archive all ${W} completed resources`,
      text: "Archive All"
    } : {
      variant: "outline-success",
      disabled: !1,
      tooltip: `Archive ${W} of ${oe} completed resources`,
      text: "Archive Available"
    };
  }, R = (V) => V.status_summary ? V.status_summary.has_archivable_resources : V.resources.some((L) => L.status === Ie.Completed), w = (V) => {
    if (V.status_summary)
      return V.status_summary.progress_bar_config;
    const L = V.resources.filter((Se) => Se.status !== Ie.Deleted), W = L.length;
    if (W === 0)
      return { segments: [], completion_percentage: 0, total_resources: 0 };
    const oe = {};
    L.forEach((Se) => {
      oe[Se.status] = (oe[Se.status] || 0) + 1;
    });
    const Oe = Object.entries(oe).map(([Se, xe]) => ({
      status: Se,
      count: xe,
      percentage: Math.round(xe / W * 100 * 10) / 10,
      color: ne(Se)
    })), Le = oe[Ie.Completed] || 0;
    return {
      segments: Oe,
      completion_percentage: Math.round(Le / W * 100 * 10) / 10,
      total_resources: W
    };
  }, $ = (V) => {
    if (V.status_summary)
      return V.status_summary.available_resource_types;
    const L = /* @__PURE__ */ new Set();
    return V.resources.filter((W) => W.status === Ie.Completed).forEach((W) => L.add(W.name)), Array.from(L).sort();
  }, he = (V, L) => {
    if (V.status_summary?.resource_type_statuses[L])
      return V.status_summary.resource_type_statuses[L];
    const W = V.resources.filter(
      (Se) => Se.name === L && Se.status !== Ie.Deleted
    );
    if (W.length === 0) return null;
    const oe = W.reduce((Se, xe) => (Se[xe.status] = (Se[xe.status] || 0) + 1, Se), {}), Oe = oe[Ie.Completed] || 0, Le = W.length;
    return {
      total_count: Le,
      completed_count: Oe,
      failed_count: oe[Ie.Failed] || 0,
      pending_count: oe[Ie.Pending] || 0,
      fetching_count: oe[Ie.Fetching] || 0,
      outdated_count: oe[Ie.Outdated] || 0,
      has_completed: Oe > 0,
      completion_percentage: Le > 0 ? Oe / Le * 100 : 0,
      is_archivable: Oe > 0
    };
  }, ne = (V) => {
    switch (V) {
      case Ie.Completed:
        return "success";
      case Ie.Failed:
        return "danger";
      case Ie.Fetching:
        return "info";
      case Ie.Pending:
        return "warning";
      case Ie.Outdated:
        return "secondary";
      case Ie.Deleted:
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
    addMrn: c,
    fetchMrn: f,
    fetchSelected: u,
    toggleSelectAll: p,
    toggleSelection: g,
    setPage: v,
    setLimit: _,
    // Enhanced resource management
    getResourceStatus: y,
    getProjectSummary: E,
    triggerFetchMrns: m,
    triggerFetchSelected: D,
    performFullSync: I,
    retryFailedResource: C,
    bulkRetryFailed: A,
    // Enhanced status methods
    getSmartStatusDisplay: T,
    getStatusForStyling: S,
    getArchiveButtonConfig: k,
    hasArchivableResources: R,
    getProgressBarConfig: w,
    getAvailableResourceTypesForArchive: $,
    getResourceTypeStatus: he,
    getStatusColor: ne
  };
}), hR = "data:image/png;base64,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", mR = { class: "home-page" }, gR = { class: "hero-section text-center mb-5" }, vR = { class: "d-flex flex-column gap-2 align-items-center" }, _R = ["src"], yR = { class: "features-section mb-5" }, bR = { class: "row g-4" }, ER = { class: "col-md-6 col-lg-3" }, wR = { class: "card h-100 border-0 shadow-sm" }, AR = { class: "card-body text-center d-flex flex-column" }, SR = { class: "col-md-6 col-lg-3" }, OR = { class: "card h-100 border-0 shadow-sm" }, CR = { class: "card-body text-center d-flex flex-column" }, TR = { class: "col-md-6 col-lg-3" }, NR = { class: "card h-100 border-0 shadow-sm" }, DR = { class: "card-body text-center d-flex flex-column" }, xR = { class: "col-md-6 col-lg-3" }, kR = { class: "card h-100 border-0 shadow-sm" }, RR = { class: "card-body text-center d-flex flex-column" }, IR = { class: "getting-started-section mb-5" }, PR = { class: "row align-items-center" }, VR = { class: "col-lg-8 mx-auto" }, MR = { class: "workflow-steps" }, LR = { class: "step d-flex align-items-center mb-4" }, FR = { class: "step-content flex-grow-1" }, BR = { class: "step d-flex align-items-center mb-4" }, jR = { class: "step-content flex-grow-1" }, UR = { class: "step d-flex align-items-center mb-4" }, HR = { class: "step-content flex-grow-1" }, $R = { class: "step d-flex align-items-center mb-4" }, WR = { class: "step-content flex-grow-1" }, KR = { class: "step d-flex align-items-center" }, zR = { class: "step-content flex-grow-1" }, qR = {
  key: 0,
  class: "status-section"
}, YR = { class: "row g-4 mb-4" }, XR = { class: "col-md-3 col-sm-6" }, GR = { class: "stat-card card border-0 bg-primary text-white text-center h-100" }, QR = { class: "card-body" }, JR = { class: "mb-1" }, ZR = { class: "col-md-3 col-sm-6" }, e2 = { class: "stat-card card border-0 bg-secondary text-white text-center h-100" }, t2 = { class: "card-body" }, n2 = { class: "mb-1" }, s2 = { class: "col-md-3 col-sm-6" }, o2 = { class: "stat-card card border-0 bg-dark text-white text-center h-100" }, r2 = { class: "card-body" }, i2 = { class: "mb-1" }, a2 = { class: "col-md-3 col-sm-6" }, l2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, c2 = { class: "card-body" }, u2 = { class: "mb-1" }, d2 = { class: "row g-4" }, f2 = { class: "col-md-3 col-sm-6" }, p2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, h2 = { class: "card-body" }, m2 = { class: "mb-1" }, g2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, v2 = { class: "col-md-3 col-sm-6" }, _2 = { class: "stat-card card border-0 bg-danger text-white text-center h-100" }, y2 = { class: "card-body" }, b2 = { class: "mb-1" }, E2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, w2 = { class: "col-md-3 col-sm-6" }, A2 = { class: "stat-card card border-0 bg-info text-white text-center h-100" }, S2 = { class: "card-body" }, O2 = { class: "mb-1" }, C2 = { class: "col-md-3 col-sm-6" }, T2 = { class: "stat-card card border-0 bg-warning text-white text-center h-100" }, N2 = { class: "card-body" }, D2 = { class: "mb-1" }, x2 = {
  key: 0,
  class: "mt-4 text-center"
}, k2 = {
  class: "btn-group gap-2",
  role: "group"
}, R2 = {
  key: 1,
  class: "alert alert-info text-center"
}, I2 = /* @__PURE__ */ Te({
  __name: "HomePage",
  setup(e) {
    const t = qo(), n = vs(), {
      selectedFhirSystem: s,
      selectedMappingResources: o,
      selectedCustomMappingResources: r
    } = wa(t);
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
    const i = H(() => s.value && (o.value?.length > 0 || r.value?.length > 0)), a = H(() => i.value && n.projectSummary), c = H(() => n.projectSummary?.total_mrns || 0), f = H(() => {
      const E = o.value?.length || 0, m = r.value?.length || 0;
      return E + m;
    }), u = H(() => n.projectSummary?.overall_status_counts?.completed || 0), d = H(() => n.projectSummary?.overall_status_counts?.pending || 0), h = H(() => n.projectSummary?.overall_status_counts?.fetching || 0), p = H(() => n.projectSummary?.overall_status_counts?.failed || 0), g = H(() => n.projectSummary ? Object.values(n.projectSummary.overall_status_counts).reduce((E, m) => E + m, 0) : 0), v = H(() => {
      if (!n.projectSummary) return 0;
      const E = n.projectSummary.overall_status_counts?.deleted || 0;
      return g.value - E;
    }), _ = H(() => {
      if (!v.value) return 0;
      const E = p.value;
      return Math.round(E / v.value * 100);
    }), y = H(() => {
      if (!v.value) return 0;
      const E = u.value;
      return Math.round(E / v.value * 100);
    });
    return (E, m) => {
      const D = Je("router-link");
      return N(), P("div", mR, [
        l("div", gR, [
          l("div", vR, [
            l("img", {
              src: te(hR),
              title: "ALL FHIR",
              style: { height: "200px" }
            }, null, 8, _R),
            m[0] || (m[0] = l("p", { class: "text-muted mb-4" }, " Fetch, archive, and download FHIR resources from your configured healthcare systems ", -1))
          ]),
          m[1] || (m[1] = qi('<div class="row justify-content-center" data-v-88a4c917><div class="col-md-8" data-v-88a4c917><div class="bg-light p-4 rounded" data-v-88a4c917><div class="row text-center" data-v-88a4c917><div class="col-md-4" data-v-88a4c917><div class="d-flex gap-2 align-items-start" data-v-88a4c917><i class="fas fa-cloud-download-alt fa-2x text-success mb-2" data-v-88a4c917></i><h6 data-v-88a4c917>Background Processing</h6></div><small class="text-muted" data-v-88a4c917>Reliable queue-based fetching</small></div><div class="col-md-4" data-v-88a4c917><div class="d-flex gap-2 align-items-start" data-v-88a4c917><i class="fas fa-shield-alt fa-2x text-info mb-2" data-v-88a4c917></i><h6 data-v-88a4c917>Secure Storage</h6></div><small class="text-muted" data-v-88a4c917>REDCap-native data security</small></div><div class="col-md-4" data-v-88a4c917><div class="d-flex gap-2 align-items-start" data-v-88a4c917><i class="fas fa-file-archive fa-2x text-warning mb-2" data-v-88a4c917></i><h6 data-v-88a4c917>Easy Downloads</h6></div><small class="text-muted" data-v-88a4c917>ZIP archives for research</small></div></div></div></div></div>', 1))
        ]),
        l("div", yR, [
          m[18] || (m[18] = l("h2", { class: "text-center mb-4" }, "Key Features", -1)),
          l("div", bR, [
            l("div", ER, [
              l("div", wR, [
                l("div", AR, [
                  m[3] || (m[3] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-cogs fa-3x text-primary" })
                  ], -1)),
                  m[4] || (m[4] = l("h5", { class: "card-title" }, "Setup & Configuration", -1)),
                  m[5] || (m[5] = l("p", { class: "card-text text-muted" }, " Select your FHIR system and configure which resource types to fetch from predefined options or custom queries. ", -1)),
                  le(D, {
                    to: "/setup",
                    class: "btn btn-outline-primary btn-sm mt-auto"
                  }, {
                    default: be(() => m[2] || (m[2] = [
                      l("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      J(" Configure ")
                    ])),
                    _: 1,
                    __: [2]
                  })
                ])
              ])
            ]),
            l("div", SR, [
              l("div", OR, [
                l("div", CR, [
                  m[7] || (m[7] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-search fa-3x text-success" })
                  ], -1)),
                  m[8] || (m[8] = l("h5", { class: "card-title" }, "Monitor & Track", -1)),
                  m[9] || (m[9] = l("p", { class: "card-text text-muted" }, " Add MRNs, trigger fetches, and monitor real-time status per resource with detailed progress tracking. ", -1)),
                  le(D, {
                    to: "/monitor",
                    class: "btn btn-outline-success btn-sm mt-auto"
                  }, {
                    default: be(() => m[6] || (m[6] = [
                      l("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      J(" Monitor ")
                    ])),
                    _: 1,
                    __: [6]
                  })
                ])
              ])
            ]),
            l("div", TR, [
              l("div", NR, [
                l("div", DR, [
                  m[11] || (m[11] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-tasks fa-3x text-info" })
                  ], -1)),
                  m[12] || (m[12] = l("h5", { class: "card-title" }, "Background Processing", -1)),
                  m[13] || (m[13] = l("p", { class: "card-text text-muted" }, " Robust queue-based system manages large-scale FHIR fetching with automatic retry, task monitoring, and resource management. ", -1)),
                  le(D, {
                    to: "/tasks",
                    class: "btn btn-outline-info btn-sm mt-auto"
                  }, {
                    default: be(() => m[10] || (m[10] = [
                      l("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      J(" View Tasks ")
                    ])),
                    _: 1,
                    __: [10]
                  })
                ])
              ])
            ]),
            l("div", xR, [
              l("div", kR, [
                l("div", RR, [
                  m[15] || (m[15] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-archive fa-3x text-warning" })
                  ], -1)),
                  m[16] || (m[16] = l("h5", { class: "card-title" }, "Archive & Download", -1)),
                  m[17] || (m[17] = l("p", { class: "card-text text-muted" }, " Create ZIP archives of completed FHIR resources with flexible filtering and background processing options. ", -1)),
                  le(D, {
                    to: "/archives",
                    class: "btn btn-outline-warning btn-sm mt-auto"
                  }, {
                    default: be(() => m[14] || (m[14] = [
                      l("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      J(" Archives ")
                    ])),
                    _: 1,
                    __: [14]
                  })
                ])
              ])
            ])
          ])
        ]),
        l("div", IR, [
          m[43] || (m[43] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Getting Started"),
            l("p", { class: "text-muted" }, "Follow these simple steps to start fetching and archiving FHIR resources")
          ], -1)),
          l("div", PR, [
            l("div", VR, [
              l("div", MR, [
                l("div", LR, [
                  m[22] || (m[22] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "1")
                    ])
                  ], -1)),
                  l("div", FR, [
                    m[20] || (m[20] = l("h5", null, "Configure Your Setup", -1)),
                    m[21] || (m[21] = l("p", { class: "text-muted mb-2" }, "Select your FHIR system and choose which resource types to fetch", -1)),
                    le(D, {
                      to: "/setup",
                      class: "btn btn-primary btn-sm"
                    }, {
                      default: be(() => m[19] || (m[19] = [
                        l("i", { class: "fas fa-cogs me-1" }, null, -1),
                        J(" Go to Setup ")
                      ])),
                      _: 1,
                      __: [19]
                    })
                  ]),
                  m[23] || (m[23] = l("div", { class: "step-icon ms-3" }, [
                    l("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                l("div", BR, [
                  m[27] || (m[27] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-success text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "2")
                    ])
                  ], -1)),
                  l("div", jR, [
                    m[25] || (m[25] = l("h5", null, "Add Patient MRNs", -1)),
                    m[26] || (m[26] = l("p", { class: "text-muted mb-2" }, "Input the patient identifiers you want to fetch FHIR data for", -1)),
                    le(D, {
                      to: "/monitor",
                      class: "btn btn-success btn-sm"
                    }, {
                      default: be(() => m[24] || (m[24] = [
                        l("i", { class: "fas fa-plus me-1" }, null, -1),
                        J(" Add MRNs ")
                      ])),
                      _: 1,
                      __: [24]
                    })
                  ]),
                  m[28] || (m[28] = l("div", { class: "step-icon ms-3" }, [
                    l("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                l("div", UR, [
                  m[32] || (m[32] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-info text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "3")
                    ])
                  ], -1)),
                  l("div", HR, [
                    m[30] || (m[30] = l("h5", null, "Trigger Data Fetch", -1)),
                    m[31] || (m[31] = l("p", { class: "text-muted mb-2" }, "Start the background processing to retrieve FHIR resources", -1)),
                    le(D, {
                      to: "/monitor",
                      class: "btn btn-info btn-sm"
                    }, {
                      default: be(() => m[29] || (m[29] = [
                        l("i", { class: "fas fa-play me-1" }, null, -1),
                        J(" Start Fetch ")
                      ])),
                      _: 1,
                      __: [29]
                    })
                  ]),
                  m[33] || (m[33] = l("div", { class: "step-icon ms-3" }, [
                    l("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                l("div", $R, [
                  m[37] || (m[37] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "4")
                    ])
                  ], -1)),
                  l("div", WR, [
                    m[35] || (m[35] = l("h5", null, "Monitor Tasks", -1)),
                    m[36] || (m[36] = l("p", { class: "text-muted mb-2" }, "Track background processing and manage synchronization tasks", -1)),
                    le(D, {
                      to: "/tasks",
                      class: "btn btn-secondary btn-sm"
                    }, {
                      default: be(() => m[34] || (m[34] = [
                        l("i", { class: "fas fa-tasks me-1" }, null, -1),
                        J(" View Tasks ")
                      ])),
                      _: 1,
                      __: [34]
                    })
                  ]),
                  m[38] || (m[38] = l("div", { class: "step-icon ms-3" }, [
                    l("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                l("div", KR, [
                  m[42] || (m[42] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "5")
                    ])
                  ], -1)),
                  l("div", zR, [
                    m[40] || (m[40] = l("h5", null, "Download Archives", -1)),
                    m[41] || (m[41] = l("p", { class: "text-muted mb-2" }, "Create and download ZIP files containing your FHIR resources", -1)),
                    le(D, {
                      to: "/archives",
                      class: "btn btn-warning btn-sm"
                    }, {
                      default: be(() => m[39] || (m[39] = [
                        l("i", { class: "fas fa-download me-1" }, null, -1),
                        J(" View Archives ")
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
        a.value ? (N(), P("div", qR, [
          m[65] || (m[65] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Project Status"),
            l("p", { class: "text-muted" }, "Current overview of your FHIR snapshot project")
          ], -1)),
          l("div", YR, [
            l("div", XR, [
              l("div", GR, [
                l("div", QR, [
                  m[44] || (m[44] = l("i", { class: "fas fa-user-injured fa-2x mb-2" }, null, -1)),
                  l("h3", JR, B(c.value), 1),
                  m[45] || (m[45] = l("p", { class: "mb-0 small" }, "Total MRNs", -1))
                ])
              ])
            ]),
            l("div", ZR, [
              l("div", e2, [
                l("div", t2, [
                  m[46] || (m[46] = l("i", { class: "fas fa-database fa-2x mb-2" }, null, -1)),
                  l("h3", n2, B(g.value), 1),
                  m[47] || (m[47] = l("p", { class: "mb-0 small" }, "Total Resources", -1)),
                  m[48] || (m[48] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "includes deleted", -1))
                ])
              ])
            ]),
            l("div", s2, [
              l("div", o2, [
                l("div", r2, [
                  m[49] || (m[49] = l("i", { class: "fas fa-play-circle fa-2x mb-2" }, null, -1)),
                  l("h3", i2, B(v.value), 1),
                  m[50] || (m[50] = l("p", { class: "mb-0 small" }, "Active Resources", -1)),
                  m[51] || (m[51] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "excludes deleted", -1))
                ])
              ])
            ]),
            l("div", a2, [
              l("div", l2, [
                l("div", c2, [
                  m[52] || (m[52] = l("i", { class: "fas fa-file-medical fa-2x mb-2" }, null, -1)),
                  l("h3", u2, B(f.value), 1),
                  m[53] || (m[53] = l("p", { class: "mb-0 small" }, "Resource Types", -1))
                ])
              ])
            ])
          ]),
          l("div", d2, [
            l("div", f2, [
              l("div", p2, [
                l("div", h2, [
                  m[54] || (m[54] = l("i", { class: "fas fa-check-circle fa-2x mb-2" }, null, -1)),
                  l("h3", m2, B(u.value), 1),
                  m[55] || (m[55] = l("p", { class: "mb-0 small" }, "Completed", -1)),
                  y.value > 0 ? (N(), P("p", g2, B(y.value) + "% complete", 1)) : Ee("", !0)
                ])
              ])
            ]),
            l("div", v2, [
              l("div", _2, [
                l("div", y2, [
                  m[56] || (m[56] = l("i", { class: "fas fa-exclamation-circle fa-2x mb-2" }, null, -1)),
                  l("h3", b2, B(p.value), 1),
                  m[57] || (m[57] = l("p", { class: "mb-0 small" }, "Failed", -1)),
                  _.value > 0 ? (N(), P("p", E2, B(_.value) + "% error rate", 1)) : Ee("", !0)
                ])
              ])
            ]),
            l("div", w2, [
              l("div", A2, [
                l("div", S2, [
                  m[58] || (m[58] = l("i", { class: "fas fa-sync fa-2x mb-2" }, null, -1)),
                  l("h3", O2, B(h.value), 1),
                  m[59] || (m[59] = l("p", { class: "mb-0 small" }, "Fetching", -1))
                ])
              ])
            ]),
            l("div", C2, [
              l("div", T2, [
                l("div", N2, [
                  m[60] || (m[60] = l("i", { class: "fas fa-clock fa-2x mb-2" }, null, -1)),
                  l("h3", D2, B(d.value), 1),
                  m[61] || (m[61] = l("p", { class: "mb-0 small" }, "Pending", -1))
                ])
              ])
            ])
          ]),
          i.value ? (N(), P("div", x2, [
            l("div", k2, [
              le(D, {
                to: "/monitor",
                class: "btn btn-primary"
              }, {
                default: be(() => m[62] || (m[62] = [
                  l("i", { class: "fas fa-plus me-1" }, null, -1),
                  J(" Add MRNs ")
                ])),
                _: 1,
                __: [62]
              }),
              le(D, {
                to: "/tasks",
                class: "btn btn-outline-secondary"
              }, {
                default: be(() => m[63] || (m[63] = [
                  l("i", { class: "fas fa-tasks me-1" }, null, -1),
                  J(" View Tasks ")
                ])),
                _: 1,
                __: [63]
              }),
              le(D, {
                to: "/archives",
                class: "btn btn-outline-primary"
              }, {
                default: be(() => m[64] || (m[64] = [
                  l("i", { class: "fas fa-archive me-1" }, null, -1),
                  J(" View Archives ")
                ])),
                _: 1,
                __: [64]
              })
            ])
          ])) : Ee("", !0)
        ])) : (N(), P("div", R2, [
          m[67] || (m[67] = l("i", { class: "fas fa-info-circle fa-2x mb-3" }, null, -1)),
          m[68] || (m[68] = l("h4", null, "Get Started", -1)),
          m[69] || (m[69] = l("p", { class: "mb-3" }, "Configure your FHIR system and resource types to begin fetching data.", -1)),
          le(D, {
            to: "/setup",
            class: "btn btn-primary"
          }, {
            default: be(() => m[66] || (m[66] = [
              l("i", { class: "fas fa-cogs me-1" }, null, -1),
              J(" Configure Now ")
            ])),
            _: 1,
            __: [66]
          })
        ]))
      ]);
    };
  }
}), P2 = /* @__PURE__ */ Gs(I2, [["__scopeId", "data-v-88a4c917"]]), V2 = ["value"], M2 = ["value"], L2 = /* @__PURE__ */ Te({
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
        value: te(n)?.selectedFhirSystem.value || "",
        onChange: o
      }, [
        i[0] || (i[0] = l("option", { value: "" }, "Select a FHIR System", -1)),
        (N(!0), P(we, null, Ye(te(t).fhir_systems, (a) => (N(), P("option", {
          key: a.ehr_id,
          value: a.ehr_id
        }, B(a.ehr_name), 9, M2))), 128))
      ], 40, V2)
    ]));
  }
}), F2 = { class: "d-flex" }, B2 = { class: "d-flex gap-2" }, j2 = /* @__PURE__ */ Te({
  __name: "ResourcesToolbar",
  emits: ["import", "export", "add"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => (N(), P("div", F2, [
      o[6] || (o[6] = l("div", { class: "me-auto" }, [
        l("span", null, "Resources")
      ], -1)),
      l("div", B2, [
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
}), U2 = { class: "table table-striped table-hover table-sm border-top" }, H2 = ["onClick"], $2 = { key: 0 }, W2 = /* @__PURE__ */ Te({
  __name: "ResourcesTable",
  setup(e) {
    const t = qo(), n = _t("draftResources"), s = H(() => n ? [
      ...n.selectedMappingResources.value,
      ...n.selectedCustomMappingResources.value
    ] : []);
    function o(r) {
      t.removeResource(r, r.type);
    }
    return (r, i) => (N(), P("table", U2, [
      i[2] || (i[2] = l("thead", null, [
        l("tr", null, [
          l("th", null, "Name"),
          l("th", null, "Type"),
          l("th", null, "Resource Specification"),
          l("th", null, "Actions")
        ])
      ], -1)),
      l("tbody", null, [
        (N(!0), P(we, null, Ye(s.value, (a) => (N(), P("tr", {
          key: `${a.type}-${a.name}`
        }, [
          l("td", null, B(a.name), 1),
          l("td", null, B(a.type), 1),
          l("td", null, B(a.resourceSpec || "-"), 1),
          l("td", null, [
            l("button", {
              type: "button",
              class: "btn btn-outline-danger btn-sm",
              onClick: (c) => o(a)
            }, i[0] || (i[0] = [
              l("i", { class: "fas fa-trash fa-fw" }, null, -1)
            ]), 8, H2)
          ])
        ]))), 128)),
        s.value.length === 0 ? (N(), P("tr", $2, i[1] || (i[1] = [
          l("td", {
            colspan: "4",
            class: "text-muted text-center"
          }, "No resources configured", -1)
        ]))) : Ee("", !0)
      ])
    ]));
  }
}), K2 = { class: "mb-3" }, z2 = ["value"], q2 = ["disabled"], Y2 = ["value"], X2 = ["value"], G2 = ["disabled"], go = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), Q2 = /* @__PURE__ */ Te({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = qo(), { settings: n } = wa(t), s = H(() => n.value.mapping_resources), o = Pb(e, "modelValue");
    return (r, i) => (N(), P("div", null, [
      l("form", null, [
        l("div", K2, [
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
            [wo, o.value.displayName]
          ])
        ]),
        l("div", null, [
          et(l("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: te(go).PREDEFINED,
            "onUpdate:modelValue": i[1] || (i[1] = (a) => o.value.resourceType = a)
          }, null, 8, z2), [
            [Gi, o.value.resourceType]
          ]),
          i[7] || (i[7] = l("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          et(l("select", {
            "onUpdate:modelValue": i[2] || (i[2] = (a) => o.value.predefinedResource = a),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: o.value.resourceType !== te(go).PREDEFINED
          }, [
            i[6] || (i[6] = l("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (N(!0), P(we, null, Ye(s.value, (a) => (N(), P("option", {
              key: a.resourceSpec,
              value: a.resourceSpec
            }, B(a.name), 9, Y2))), 128))
          ], 8, q2), [
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
            value: te(go).CUSTOM,
            "onUpdate:modelValue": i[3] || (i[3] = (a) => o.value.resourceType = a)
          }, null, 8, X2), [
            [Gi, o.value.resourceType]
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
            disabled: o.value.resourceType !== te(go).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, G2), [
            [wo, o.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
});
var lr = /* @__PURE__ */ ((e) => (e.TOP_LEFT = "top left", e.TOP_CENTER = "top center", e.TOP_RIGHT = "top right", e.MIDDLE_LEFT = "middle left", e.MIDDLE_CENTER = "middle center", e.MIDDLE_RIGHT = "middle right", e.BOTTOM_LEFT = "bottom left", e.BOTTOM_CENTER = "bottom center", e.BOTTOM_RIGHT = "bottom right", e))(lr || {});
const __ = /* @__PURE__ */ ps("notifications", () => {
  const e = uR(), t = v_();
  return {
    showSuccess: (c, f = "Success") => {
      t.toast({
        title: f,
        body: c,
        variant: "primary",
        delay: 4e3
      }, lr.TOP_RIGHT);
    },
    showError: (c, f = "Error") => {
      t.toast({
        title: f,
        body: c,
        variant: "danger",
        delay: 6e3
      }, lr.TOP_RIGHT);
    },
    showWarning: (c, f = "Warning") => {
      t.toast({
        title: f,
        body: c,
        variant: "warning",
        delay: 5e3
      }, lr.TOP_RIGHT);
    },
    showInfo: (c, f = "Information") => {
      t.toast({
        title: f,
        body: c,
        variant: "info",
        delay: 4e3
      }, lr.TOP_RIGHT);
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
}), J2 = { class: "d-flex flex-column gap-4" }, Z2 = { class: "card" }, eI = { class: "card-body px-0 py-2" }, tI = { class: "p-2" }, nI = { class: "d-flex gap-2 justify-content-end" }, sI = ["disabled"], oI = /* @__PURE__ */ Te({
  __name: "SetupPage",
  setup(e) {
    const t = qo(), n = __(), { settings: s, loading: o, selectedMappingResources: r, selectedCustomMappingResources: i, selectedFhirSystem: a } = wa(t);
    bo("settings", s), bo("draftResources", { selectedMappingResources: r, selectedCustomMappingResources: i, selectedFhirSystem: a });
    const c = H(() => o.value.fetch || o.value.save), f = jy("resourceModal"), u = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: go.PREDEFINED
    }), d = G(u());
    async function h() {
      if (!f.value) return;
      if (d.value = u(), await f.value.show()) {
        if (!d.value.displayName.trim()) {
          n.showError("Display Name is required");
          return;
        }
        if (d.value.resourceType === go.PREDEFINED) {
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
        await t.saveProjectSettings();
      } catch (g) {
        console.error("Failed to save settings:", g);
      }
    }
    return (g, v) => {
      const _ = Je("b-modal");
      return N(), P("div", J2, [
        le(L2),
        l("div", Z2, [
          l("div", eI, [
            l("div", tI, [
              le(j2, { onAdd: h })
            ]),
            le(W2),
            (N(), rt(Fo, { to: "body" }, [
              le(_, {
                ref_key: "resourceModal",
                ref: f
              }, {
                title: be(() => v[1] || (v[1] = [
                  J("Resource")
                ])),
                default: be(() => [
                  le(Q2, {
                    modelValue: d.value,
                    "onUpdate:modelValue": v[0] || (v[0] = (y) => d.value = y)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 512)
            ]))
          ])
        ]),
        l("div", nI, [
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
          ]), 8, sI)
        ])
      ]);
    };
  }
}), Fa = /* @__PURE__ */ ps("operations", () => {
  const e = G(!1), t = G(null), n = G(!1), s = G(!1), o = G({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), r = G({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), i = (A) => {
    e.value = A;
  }, a = (A, T, S, k) => {
    t.value = {
      operation: A,
      success: T,
      message: S,
      data: k,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }, s.value = !0, setTimeout(() => {
      s.value = !1;
    }, 5e3);
  }, c = () => {
    s.value = !1;
  }, f = () => {
    n.value = !n.value;
  }, u = (A) => {
    o.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: A
    };
  }, d = () => {
    o.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, h = () => {
    o.value.visible = !1;
  }, p = (A) => {
    r.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: A
    };
  }, g = () => {
    r.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, v = () => {
    r.value.visible = !1;
  }, _ = (A, T = "info") => {
    a("Toast", T === "success", A);
  }, y = H(() => o.value.visible), E = H(() => o.value.archiveType), m = H(() => o.value.selectedMrns), D = H(() => r.value.visible), I = H(() => r.value.archiveType), C = H(() => r.value.selectedMrns);
  return {
    // State
    loading: e,
    lastOperation: t,
    showSummary: n,
    showToast: s,
    // Actions
    setLoading: i,
    recordOperation: a,
    clearToast: c,
    toggleSummary: f,
    displayToast: _,
    // Archive Modal
    archiveModalVisible: y,
    archiveModalType: E,
    archiveModalSelectedMrns: m,
    showArchiveModalSelected: u,
    showArchiveModalAll: d,
    hideArchiveModal: h,
    // Streaming Modal
    streamingModalVisible: D,
    streamingModalType: I,
    streamingModalSelectedMrns: C,
    showStreamingModalSelected: p,
    showStreamingModalAll: g,
    hideStreamingModal: v
  };
}), rI = { class: "mb-3" }, iI = { class: "d-flex flex-wrap gap-2 align-items-center" }, aI = {
  class: "btn-group",
  role: "group"
}, lI = ["disabled"], cI = { key: 0 }, uI = { key: 1 }, dI = {
  class: "btn-group",
  role: "group"
}, fI = ["disabled"], pI = ["disabled"], hI = /* @__PURE__ */ Te({
  __name: "MonitorToolbar",
  emits: ["addMrn"],
  setup(e) {
    const t = vs(), n = Fa(), s = H(() => t.selectedMrns.length === 0), o = H(() => t.operationLoading), r = H(() => t.loading), i = async () => {
      try {
        const h = await t.triggerFetchSelected();
        n.recordOperation(
          "fetch-selected",
          !0,
          `Fetch triggered for ${h.mrns?.length || 0} MRN(s). ${h.tasks_created || 0} tasks created.`,
          h
        );
      } catch (h) {
        console.error("Failed to trigger fetch for selected MRNs:", h), n.recordOperation("fetch-selected", !1, "Failed to trigger fetch for selected MRNs");
      }
    }, a = async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]), n.recordOperation("refresh", !0, "Data refreshed successfully.");
      } catch (h) {
        console.error("Failed to refresh data:", h), n.recordOperation("refresh", !1, "Failed to refresh data");
      }
    }, c = () => {
      if (s.value) {
        n.recordOperation("archive-selected", !1, "No MRNs selected for archive");
        return;
      }
      const h = t.mrns.filter((p) => t.selectedMrns.includes(p.id)).map((p) => p.mrn);
      n.showArchiveModalSelected(h);
    }, f = () => {
      n.showArchiveModalAll();
    }, u = () => {
      if (s.value) {
        n.recordOperation("streaming-archive-selected", !1, "No MRNs selected for streaming archive");
        return;
      }
      const h = t.mrns.filter((p) => t.selectedMrns.includes(p.id)).map((p) => p.mrn);
      n.showStreamingModalSelected(h);
    }, d = () => {
      n.showStreamingModalAll();
    };
    return (h, p) => {
      const g = Je("b-dropdown-item"), v = Je("b-dropdown");
      return N(), P("div", rI, [
        l("div", iI, [
          l("div", aI, [
            l("button", {
              class: "btn btn-primary",
              onClick: p[0] || (p[0] = (_) => h.$emit("addMrn"))
            }, p[2] || (p[2] = [
              l("i", { class: "fas fa-plus-circle fa-fw" }, null, -1),
              J(" Add MRN ")
            ])),
            l("button", {
              class: "btn btn-outline-primary",
              onClick: i,
              disabled: s.value || o.value,
              title: "Trigger fetch for selected MRNs"
            }, [
              o.value ? (N(), P("span", uI, p[4] || (p[4] = [
                l("span", null, [
                  l("i", { class: "fas fa-spinner fa-spin fa-fw" }),
                  J(" Fetch Selected")
                ], -1)
              ]))) : (N(), P("span", cI, p[3] || (p[3] = [
                l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1),
                J(" Fetch Selected")
              ])))
            ], 8, lI)
          ]),
          l("div", dI, [
            l("button", {
              class: "btn btn-success",
              onClick: c,
              disabled: s.value,
              title: "Create archive for selected completed MRNs"
            }, p[5] || (p[5] = [
              l("i", { class: "fas fa-archive fa-fw" }, null, -1),
              J(" Create Archive ")
            ]), 8, fI),
            l("button", {
              class: "btn btn-outline-success",
              onClick: f,
              title: "Create archive for all completed resources"
            }, p[6] || (p[6] = [
              l("i", { class: "fas fa-archive fa-fw" }, null, -1),
              J(" Archive All ")
            ]))
          ]),
          le(v, {
            text: "Stream Download",
            variant: "info",
            title: "Stream download archives"
          }, {
            button: be(() => p[7] || (p[7] = [
              l("i", { class: "fas fa-bolt fa-fw me-1" }, null, -1),
              J("Stream Download ")
            ])),
            default: be(() => [
              le(g, {
                onClick: u,
                class: ue({ disabled: s.value }),
                "prevent-close": !1
              }, {
                default: be(() => p[8] || (p[8] = [
                  l("i", { class: "fas fa-bolt me-2" }, null, -1),
                  J("Stream Selected Records ")
                ])),
                _: 1,
                __: [8]
              }, 8, ["class"]),
              le(g, {
                onClick: d,
                "prevent-close": !1
              }, {
                default: be(() => p[9] || (p[9] = [
                  l("i", { class: "fas fa-bolt me-2" }, null, -1),
                  J("Stream All Records ")
                ])),
                _: 1,
                __: [9]
              })
            ]),
            _: 1
          }),
          l("button", {
            class: "btn btn-outline-secondary",
            onClick: a,
            disabled: r.value,
            title: "Refresh data"
          }, [
            l("i", {
              class: ue(["fas fa-rotate-right fa-fw", { "fa-spin": r.value }])
            }, null, 2)
          ], 8, pI),
          l("button", {
            class: "btn btn-outline-info",
            onClick: p[1] || (p[1] = (_) => te(n).toggleSummary()),
            title: "Toggle project summary"
          }, p[10] || (p[10] = [
            l("i", { class: "fas fa-chart-bar fa-fw" }, null, -1),
            J(" Summary ")
          ]))
        ])
      ]);
    };
  }
}), mI = { class: "align-middle" }, gI = { class: "d-flex flex-column" }, vI = { class: "text-muted" }, _I = {
  key: 0,
  class: "d-block text-muted"
}, yI = {
  key: 0,
  class: "text-success"
}, bI = {
  key: 1,
  class: "text-muted"
}, EI = {
  key: 0,
  class: "text-danger"
}, wI = ["title"], AI = ["title"], SI = {
  key: 1,
  class: "text-muted"
}, OI = {
  class: "btn-group",
  role: "group"
}, CI = ["disabled"], TI = {
  key: 0,
  class: "table-warning"
}, NI = { colspan: "5" }, DI = { class: "p-2" }, xI = { class: "mb-0 mt-1" }, kI = /* @__PURE__ */ Te({
  __name: "MonitorResourceRow",
  props: {
    resource: {},
    mrn: {}
  },
  setup(e) {
    const t = e, n = vs(), s = G(!1), o = G(!1), r = (u) => {
      const d = "badge";
      switch (u) {
        case Ie.Pending:
          return `${d} bg-warning text-dark`;
        case Ie.Fetching:
          return `${d} bg-info text-dark`;
        case Ie.Completed:
          return `${d} bg-success`;
        case Ie.Failed:
          return `${d} bg-danger`;
        case Ie.Outdated:
          return `${d} bg-secondary`;
        case Ie.Deleted:
          return `${d} bg-dark`;
        default:
          return `${d} bg-secondary`;
      }
    }, i = (u) => {
      if (!u) return "-";
      try {
        const d = new Date(u);
        return d.toLocaleDateString() + " " + d.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch {
        return u;
      }
    }, a = (u) => u ? u.length > 50 ? u.substring(0, 50) + "..." : u : "-", c = async () => {
      try {
        o.value = !0, await n.retryFailedResource(
          t.mrn,
          t.resource.name,
          t.resource.repeat_instance
        );
      } catch (u) {
        console.error("Failed to retry resource:", u);
      } finally {
        o.value = !1;
      }
    }, f = () => {
      console.log("View details for resource:", t.resource);
    };
    return (u, d) => (N(), P(we, null, [
      l("tr", mI, [
        l("td", null, [
          l("div", gI, [
            l("strong", null, B(u.resource.name), 1),
            l("small", vI, B(u.resource.mapping_type) + " | " + B(u.resource.resource_spec), 1)
          ])
        ]),
        l("td", null, [
          l("span", {
            class: ue(r(u.resource.status))
          }, B(u.resource.status), 3),
          u.resource.repeat_instance ? (N(), P("small", _I, " Instance #" + B(u.resource.repeat_instance), 1)) : Ee("", !0)
        ]),
        l("td", null, [
          u.resource.fetch_date ? (N(), P("div", yI, [
            d[1] || (d[1] = l("i", { class: "fas fa-check-circle fa-fw" }, null, -1)),
            J(" " + B(i(u.resource.fetch_date)), 1)
          ])) : (N(), P("div", bI, "-"))
        ]),
        l("td", null, [
          u.resource.error_message ? (N(), P("div", EI, [
            d[2] || (d[2] = l("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            l("span", {
              title: u.resource.error_message
            }, B(a(u.resource.error_message)), 9, wI),
            u.resource.error_message.length > 50 ? (N(), P("button", {
              key: 0,
              class: "btn btn-link btn-sm p-0 ms-1",
              onClick: d[0] || (d[0] = (h) => s.value = !s.value),
              title: s.value ? "Show less" : "Show more"
            }, [
              l("i", {
                class: ue(`fas fa-chevron-${s.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, AI)) : Ee("", !0)
          ])) : (N(), P("div", SI, "-"))
        ]),
        l("td", null, [
          l("div", OI, [
            u.resource.status === "Failed" ? (N(), P("button", {
              key: 0,
              class: "btn btn-sm btn-warning",
              onClick: c,
              disabled: o.value,
              title: "Retry this resource"
            }, d[3] || (d[3] = [
              l("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)
            ]), 8, CI)) : Ee("", !0),
            u.resource.status === "Completed" ? (N(), P("button", {
              key: 1,
              class: "btn btn-sm btn-outline-primary",
              onClick: f,
              title: "View resource details"
            }, d[4] || (d[4] = [
              l("i", { class: "fas fa-eye fa-fw" }, null, -1)
            ]))) : Ee("", !0)
          ])
        ])
      ]),
      s.value && u.resource.error_message ? (N(), P("tr", TI, [
        l("td", NI, [
          l("div", DI, [
            d[5] || (d[5] = l("strong", null, "Error Details:", -1)),
            l("pre", xI, B(u.resource.error_message), 1)
          ])
        ])
      ])) : Ee("", !0)
    ], 64));
  }
}), RI = { class: "align-middle" }, II = ["checked"], PI = {
  key: 0,
  class: "status-display-smart"
}, VI = ["title"], MI = {
  key: 1,
  class: "status-display-progress"
}, LI = {
  class: "progress position-relative",
  style: { height: "20px" }
}, FI = ["title"], BI = { class: "text-muted" }, jI = {
  key: 2,
  class: "status-display-badges"
}, UI = ["title"], HI = {
  key: 3,
  class: "status-display-legacy"
}, $I = ["title"], WI = {
  key: 0,
  class: "position-absolute bg-dark text-white p-2 rounded shadow-lg",
  style: { "z-index": "1000", top: "100%", left: "0", width: "250px" }
}, KI = { class: "small" }, zI = { class: "d-flex justify-content-between" }, qI = { class: "d-flex justify-content-between" }, YI = { class: "d-flex align-items-center" }, XI = ["aria-expanded"], GI = {
  key: 0,
  class: "ms-2"
}, QI = {
  class: "btn-group",
  role: "group"
}, JI = ["disabled"], ZI = ["disabled", "title"], eP = ["disabled", "title"], tP = {
  colspan: "5",
  class: "p-0"
}, nP = { class: "ps-3" }, sP = { class: "table table-sm table-bordered mb-0" }, oP = /* @__PURE__ */ Te({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  setup(e) {
    const t = vs(), n = Fa(), s = e, o = G(!1), r = G(!1), i = G(!1), a = G("smart"), c = G(!1), f = () => {
      o.value = !o.value;
    }, u = H(() => {
      const C = s.item.resources.filter(($) => $.status !== Ie.Deleted), A = C.length, T = C.filter(($) => $.status === Ie.Completed).length, S = C.filter(($) => $.status === Ie.Failed).length, k = C.filter(($) => $.status === Ie.Pending).length, R = C.filter(($) => $.status === Ie.Fetching).length;
      let w = `${T}/${A} completed`;
      return S > 0 && (w += `, ${S} failed`), R > 0 && (w += `, ${R} fetching`), k > 0 && (w += `, ${k} pending`), w;
    }), d = H(() => t.getProgressBarConfig(s.item)), h = H(() => t.getArchiveButtonConfig(s.item)), p = H(() => s.item.resources.some((C) => C.status === Ie.Failed)), g = H(() => !p.value), v = H(() => {
      if (p.value) {
        const C = s.item.resources.filter((A) => A.status === Ie.Failed).length;
        return `Retry ${C} failed resource${C > 1 ? "s" : ""} for this record`;
      } else
        return "No failed resources to retry";
    }), _ = () => {
      const C = d.value;
      return C.segments.length === 0 ? "No resources" : `${C.segments.map((T) => `${T.status}: ${T.count}`).join(", ")} | ${Math.round(C.completion_percentage)}% complete`;
    }, y = () => _() + " (hover for details)", E = () => {
      const C = t.getStatusForStyling(s.item);
      return `badge bg-${t.getStatusColor(C)}`;
    }, m = async () => {
      try {
        r.value = !0, await t.triggerFetchMrns([s.item.mrn]);
      } catch (C) {
        console.error("Failed to trigger fetch for MRN:", C);
      } finally {
        r.value = !1;
      }
    }, D = async () => {
      try {
        n.showArchiveModalSelected([s.item.mrn]);
      } catch (C) {
        console.error("Failed to show archive modal:", C);
      }
    }, I = async () => {
      if (p.value)
        try {
          r.value = !0, await Ge.retryFailed({ record_ids: [s.item.id] }), await t.getProjectSummary();
        } catch (C) {
          console.error("Failed to retry failed resources:", C);
        } finally {
          r.value = !1;
        }
    };
    return (C, A) => (N(), P(we, null, [
      l("tr", RI, [
        l("td", null, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: C.selected,
            onChange: A[0] || (A[0] = (T) => te(t).toggleSelection(C.item.id))
          }, null, 40, II)
        ]),
        l("td", null, B(C.item.mrn), 1),
        l("td", null, [
          a.value === "smart" ? (N(), P("div", PI, [
            l("span", {
              class: ue(E()),
              title: _()
            }, B(te(t).getSmartStatusDisplay(C.item)), 11, VI)
          ])) : a.value === "progress" ? (N(), P("div", MI, [
            l("div", LI, [
              (N(!0), P(we, null, Ye(d.value.segments, (T) => (N(), P("div", {
                key: T.status,
                class: ue(`progress-bar bg-${T.color}`),
                style: Vt({ width: T.percentage + "%" }),
                title: `${T.status}: ${T.count} (${T.percentage}%)`
              }, null, 14, FI))), 128))
            ]),
            l("small", BI, B(Math.round(d.value.completion_percentage)) + "% complete", 1)
          ])) : a.value === "badges" ? (N(), P("div", jI, [
            (N(!0), P(we, null, Ye(d.value.segments, (T) => (N(), P("span", {
              key: T.status,
              class: ue(`badge bg-${T.color} me-1`),
              title: `${T.status}: ${T.count} resources`,
              style: { "font-size": "0.7em" }
            }, B(T.status.charAt(0).toUpperCase()) + ": " + B(T.count), 11, UI))), 128))
          ])) : (N(), P("div", HI, [
            l("span", {
              class: ue(E()),
              title: y(),
              onMouseenter: A[1] || (A[1] = (T) => i.value = !0),
              onMouseleave: A[2] || (A[2] = (T) => i.value = !1)
            }, B(te(t).getSmartStatusDisplay(C.item)), 43, $I),
            i.value ? (N(), P("div", WI, [
              A[7] || (A[7] = l("div", { class: "fw-bold mb-1" }, "Status Breakdown", -1)),
              l("div", KI, [
                (N(!0), P(we, null, Ye(d.value.segments, (T) => (N(), P("div", {
                  key: T.status,
                  class: "d-flex justify-content-between"
                }, [
                  l("span", null, B(T.status) + ":", 1),
                  l("span", null, B(T.count) + " (" + B(T.percentage) + "%)", 1)
                ]))), 128)),
                A[6] || (A[6] = l("hr", { class: "my-1" }, null, -1)),
                l("div", zI, [
                  A[4] || (A[4] = l("span", null, "Total Resources:", -1)),
                  l("span", null, B(d.value.total_resources), 1)
                ]),
                l("div", qI, [
                  A[5] || (A[5] = l("span", null, "Completion:", -1)),
                  l("span", null, B(Math.round(d.value.completion_percentage)) + "%", 1)
                ])
              ])
            ])) : Ee("", !0)
          ]))
        ]),
        l("td", null, [
          l("div", YI, [
            l("span", null, B(u.value), 1),
            l("button", {
              class: "btn btn-sm btn-light ms-2",
              onClick: f,
              "aria-expanded": o.value
            }, [
              l("i", {
                class: ue(`fas fa-chevron-${o.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, XI),
            c.value ? (N(), P("div", GI, [
              et(l("select", {
                "onUpdate:modelValue": A[3] || (A[3] = (T) => a.value = T),
                class: "form-select form-select-sm",
                style: { width: "100px", "font-size": "0.75em" },
                title: "Status Display Mode (Dev)"
              }, A[8] || (A[8] = [
                l("option", { value: "smart" }, "Smart", -1),
                l("option", { value: "progress" }, "Progress", -1),
                l("option", { value: "badges" }, "Badges", -1),
                l("option", { value: "legacy" }, "Legacy", -1)
              ]), 512), [
                [Hn, a.value]
              ])
            ])) : Ee("", !0)
          ])
        ]),
        l("td", null, [
          l("div", QI, [
            l("button", {
              class: "btn btn-sm btn-primary",
              onClick: m,
              disabled: r.value,
              title: "Trigger fetch for this MRN"
            }, [
              r.value ? (N(), P(we, { key: 1 }, [
                A[11] || (A[11] = l("i", { class: "fas fa-spinner fa-spin fa-fw" }, null, -1)),
                A[12] || (A[12] = J(" Fetch "))
              ], 64)) : (N(), P(we, { key: 0 }, [
                A[9] || (A[9] = l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1)),
                A[10] || (A[10] = J(" Fetch "))
              ], 64))
            ], 8, JI),
            l("button", {
              class: "btn btn-sm btn-warning",
              onClick: I,
              disabled: g.value || r.value,
              title: v.value
            }, [
              r.value ? (N(), P(we, { key: 1 }, [
                A[15] || (A[15] = l("i", { class: "fas fa-spinner fa-spin fa-fw" }, null, -1)),
                A[16] || (A[16] = J(" Retry "))
              ], 64)) : (N(), P(we, { key: 0 }, [
                A[13] || (A[13] = l("i", { class: "fas fa-redo fa-fw" }, null, -1)),
                A[14] || (A[14] = J(" Retry "))
              ], 64))
            ], 8, ZI),
            l("button", {
              class: ue(`btn btn-sm btn-${h.value.variant}`),
              disabled: h.value.disabled,
              onClick: D,
              title: h.value.tooltip
            }, A[17] || (A[17] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 10, eP)
          ])
        ])
      ]),
      et(l("tr", null, [
        l("td", tP, [
          l("div", nP, [
            l("table", sP, [
              A[18] || (A[18] = l("thead", { class: "table-light" }, [
                l("tr", null, [
                  l("th", { scope: "col" }, "Resource"),
                  l("th", { scope: "col" }, "Status"),
                  l("th", { scope: "col" }, "Fetch Date"),
                  l("th", { scope: "col" }, "Error"),
                  l("th", { scope: "col" }, "Actions")
                ])
              ], -1)),
              l("tbody", null, [
                (N(!0), P(we, null, Ye(C.item.resources, (T) => (N(), rt(kI, {
                  key: `${T.name}-${T.repeat_instance}`,
                  resource: T,
                  mrn: C.item.mrn
                }, null, 8, ["resource", "mrn"]))), 128))
              ])
            ])
          ])
        ])
      ], 512), [
        [Em, o.value]
      ])
    ], 64));
  }
}), rP = /* @__PURE__ */ Gs(oP, [["__scopeId", "data-v-0fe51ea4"]]), iP = {
  key: 0,
  class: "d-flex justify-content-center"
}, aP = {
  key: 1,
  class: "table table-striped table-hover"
}, lP = { class: "table-light" }, cP = { scope: "col" }, uP = ["checked", "indeterminate"], dP = { key: 0 }, fP = /* @__PURE__ */ Te({
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
      s.loading ? (N(), P("div", iP, o[1] || (o[1] = [
        l("div", {
          class: "spinner-border",
          role: "status"
        }, [
          l("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (N(), P("table", aP, [
        l("thead", lP, [
          l("tr", null, [
            l("th", cP, [
              l("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: s.allSelected,
                indeterminate: s.indeterminate,
                onChange: o[0] || (o[0] = (r) => s.$emit("toggle-select-all"))
              }, null, 40, uP)
            ]),
            o[2] || (o[2] = l("th", { scope: "col" }, "MRN", -1)),
            o[3] || (o[3] = l("th", { scope: "col" }, "Status", -1)),
            o[4] || (o[4] = l("th", { scope: "col" }, "Resources", -1)),
            o[5] || (o[5] = l("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        l("tbody", null, [
          s.items.length === 0 ? (N(), P("tr", dP, o[6] || (o[6] = [
            l("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (N(!0), P(we, { key: 1 }, Ye(s.items, (r) => (N(), rt(rP, {
            key: r.id,
            item: r,
            selected: s.selectedMrns.includes(r.id)
          }, null, 8, ["item", "selected"]))), 128))
        ])
      ]))
    ]));
  }
}), pP = { class: "mb-3" }, hP = { class: "d-flex gap-2 justify-content-end" }, mP = ["onClick"], gP = ["onClick", "disabled"], vP = /* @__PURE__ */ Te({
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
          J("Add MRN")
        ])),
        footer: be(({ hide: u }) => [
          l("div", hP, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[3] || (c[3] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              J("Cancel ")
            ]), 8, mP),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (d) => r(u),
              disabled: !s.value.trim()
            }, c[4] || (c[4] = [
              l("i", { class: "fas fa-plus fa-fw me-1" }, null, -1),
              J("Add ")
            ]), 8, gP)
          ])
        ]),
        default: be(() => [
          l("div", pP, [
            c[2] || (c[2] = l("label", {
              for: "mrn-input",
              class: "form-label"
            }, "MRN", -1)),
            et(l("input", {
              type: "text",
              class: "form-control",
              id: "mrn-input",
              "onUpdate:modelValue": c[0] || (c[0] = (u) => s.value = u),
              onKeyup: kE(i, ["enter"]),
              placeholder: "Enter MRN"
            }, null, 544), [
              [wo, s.value]
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), _P = { class: "mb-3" }, yP = ["placeholder"], bP = { class: "mb-3" }, EP = {
  key: 0,
  class: "text-center text-muted py-3"
}, wP = {
  key: 1,
  class: "resource-type-list"
}, AP = ["value", "id", "disabled"], SP = ["for"], OP = { class: "mb-3" }, CP = { class: "form-check" }, TP = { class: "form-check" }, NP = { class: "d-flex align-items-center mb-2" }, DP = { key: 0 }, xP = { class: "mb-2" }, kP = { class: "small text-muted" }, RP = { key: 1 }, IP = { class: "small text-muted" }, PP = { key: 0 }, VP = { key: 1 }, MP = { class: "d-flex gap-2 justify-content-end" }, LP = ["onClick"], FP = ["onClick", "disabled"], BP = /* @__PURE__ */ Te({
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
    }), c = H(() => {
      const v = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
      return (s.archiveType === "selected" ? o.mrns.filter((E) => s.selectedMrns.includes(E.mrn)) : o.mrns).forEach((E) => {
        E.status_summary ? Object.entries(E.status_summary.resource_type_statuses).forEach(([m, D]) => {
          v.add(m), D.is_archivable && _.add(m);
        }) : E.resources.forEach((m) => {
          m.status !== "Deleted" && (v.add(m.name), m.status === "Completed" && _.add(m.name));
        });
      }), Array.from(v).sort().map((E) => ({
        name: E,
        isAvailable: _.has(E)
      }));
    }), f = H(() => {
      const v = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `fhir_archive_${s.archiveType === "selected" ? "selected" : "all"}_${v}`;
    }), u = H(() => {
      const v = a.value.resource_types || [], _ = s.archiveType === "selected" ? o.mrns.filter((E) => s.selectedMrns.includes(E.mrn)) : o.mrns;
      let y = 0;
      return _.forEach((E) => {
        E.status_summary ? Object.entries(E.status_summary.resource_type_statuses).forEach(([m, D]) => {
          v.length === 0 ? D.is_archivable && (y += D.completed_count) : v.includes(m) && D.is_archivable && (y += D.completed_count);
        }) : E.resources.forEach((m) => {
          m.status === "Completed" && (v.length === 0 || v.includes(m.name)) && (y += 1);
        });
      }), y;
    }), d = H(() => {
      const v = c.value.filter((y) => y.isAvailable), _ = c.value.length;
      return {
        availableTypes: v.length,
        totalTypes: _
      };
    }), h = H(() => !(a.value.archive_name && !/^[a-zA-Z0-9_-]+$/.test(a.value.archive_name.trim()) || s.archiveType === "selected" && s.selectedMrns.length === 0)), p = async () => (a.value = {
      archive_name: "",
      resource_types: [],
      background_mode: !1
      // Will be calculated dynamically
    }, a.value.background_mode = u.value > 50, await i.value?.show()), g = (v) => {
      if (!h.value) return;
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
          J("Archive Options")
        ])),
        footer: be(({ hide: E }) => [
          l("div", MP, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (m) => E(!1)
            }, _[16] || (_[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              J("Cancel ")
            ]), 8, LP),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (m) => g(E),
              disabled: !h.value
            }, _[17] || (_[17] = [
              l("i", { class: "fas fa-archive fa-fw me-1" }, null, -1),
              J("Create Archive ")
            ]), 8, FP)
          ])
        ]),
        default: be(() => [
          l("div", null, [
            l("div", _P, [
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
              }, null, 8, yP), [
                [wo, a.value.archive_name]
              ]),
              _[6] || (_[6] = l("div", { class: "form-text" }, "Optional custom name for the archive file (without extension)", -1))
            ]),
            l("div", bP, [
              _[8] || (_[8] = l("label", { class: "form-label" }, "Resource Types", -1)),
              _[9] || (_[9] = l("div", { class: "form-text mb-2" }, "Select which resource types to include", -1)),
              c.value.length === 0 ? (N(), P("div", EP, _[7] || (_[7] = [
                l("i", { class: "fas fa-info-circle me-2" }, null, -1),
                J(" No resource types found ")
              ]))) : (N(), P("div", wP, [
                (N(!0), P(we, null, Ye(c.value, (E) => (N(), P("div", {
                  class: "form-check",
                  key: E.name
                }, [
                  et(l("input", {
                    class: "form-check-input",
                    type: "checkbox",
                    value: E.name,
                    "onUpdate:modelValue": _[1] || (_[1] = (m) => a.value.resource_types = m),
                    id: `resource-${E.name}`,
                    disabled: !E.isAvailable
                  }, null, 8, AP), [
                    [TE, a.value.resource_types]
                  ]),
                  l("label", {
                    class: "form-check-label",
                    for: `resource-${E.name}`
                  }, B(E.name), 9, SP)
                ]))), 128))
              ]))
            ]),
            l("div", OP, [
              _[12] || (_[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
              l("div", CP, [
                et(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "immediate-mode",
                  value: !1,
                  "onUpdate:modelValue": _[2] || (_[2] = (E) => a.value.background_mode = E)
                }, null, 512), [
                  [Gi, a.value.background_mode]
                ]),
                _[10] || (_[10] = l("label", {
                  class: "form-check-label",
                  for: "immediate-mode"
                }, [
                  l("strong", null, "Immediate Processing"),
                  l("div", { class: "small text-muted" }, "Process archive immediately (recommended for small selections)")
                ], -1))
              ]),
              l("div", TP, [
                et(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "background-mode",
                  value: !0,
                  "onUpdate:modelValue": _[3] || (_[3] = (E) => a.value.background_mode = E)
                }, null, 512), [
                  [Gi, a.value.background_mode]
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
              class: ue(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", NP, [
                l("i", {
                  class: ue([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                _[13] || (_[13] = l("strong", null, "Archive Summary", -1))
              ]),
              u.value > 0 ? (N(), P("div", DP, [
                l("div", xP, [
                  l("strong", null, B(u.value), 1),
                  _[14] || (_[14] = J(" completed resources will be included "))
                ]),
                l("div", kP, B(d.value.availableTypes) + " of " + B(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (N(), P("div", RP, [
                _[15] || (_[15] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for archiving")
                ], -1)),
                l("div", IP, [
                  d.value.totalTypes === 0 ? (N(), P("span", PP, " No resource types found ")) : (N(), P("span", VP, B(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), jP = { key: 0 }, UP = { key: 1 }, HP = { class: "row" }, $P = { class: "col-md-6" }, WP = { class: "card" }, KP = { class: "card-body" }, zP = { class: "list-unstyled mb-0" }, qP = { key: 0 }, YP = { class: "col-md-6" }, XP = { class: "card" }, GP = { class: "card-body" }, QP = { key: 0 }, JP = { key: 1 }, ZP = { key: 2 }, eV = { class: "alert alert-danger" }, tV = { class: "d-flex gap-2 justify-content-end" }, nV = ["onClick"], sV = ["onClick"], oV = ["onClick"], rV = /* @__PURE__ */ Te({
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
          J("Archive Creation")
        ])),
        footer: be(({ hide: u }) => [
          l("div", tV, [
            s.value ? s.value.success ? (N(), P(we, { key: 1 }, [
              s.value.processing_mode === "immediate" && s.value.download_url ? (N(), P("button", {
                key: 0,
                type: "button",
                class: "btn btn-sm btn-primary",
                onClick: r
              }, c[14] || (c[14] = [
                l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
                J("Download Now ")
              ]))) : Ee("", !0),
              l("button", {
                type: "button",
                class: "btn btn-sm btn-secondary",
                onClick: (d) => u(!0)
              }, c[15] || (c[15] = [
                l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
                J("Done ")
              ]), 8, sV)
            ], 64)) : (N(), P("button", {
              key: 2,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[16] || (c[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              J("Close ")
            ]), 8, oV)) : (N(), P("button", {
              key: 0,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[13] || (c[13] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              J("Cancel ")
            ]), 8, nV))
          ])
        ]),
        default: be(() => [
          s.value ? s.value.success ? (N(), P("div", UP, [
            c[10] || (c[10] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-check-circle text-success",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Created Successfully")
            ], -1)),
            l("div", HP, [
              l("div", $P, [
                l("div", WP, [
                  l("div", KP, [
                    c[6] || (c[6] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                    l("ul", zP, [
                      l("li", null, [
                        c[2] || (c[2] = l("strong", null, "Archive ID:", -1)),
                        J(" " + B(s.value.archive_id), 1)
                      ]),
                      l("li", null, [
                        c[3] || (c[3] = l("strong", null, "Resources:", -1)),
                        J(" " + B(s.value.total_resources), 1)
                      ]),
                      s.value.file_size ? (N(), P("li", qP, [
                        c[4] || (c[4] = l("strong", null, "Size:", -1)),
                        J(" " + B(i(s.value.file_size)), 1)
                      ])) : Ee("", !0),
                      l("li", null, [
                        c[5] || (c[5] = l("strong", null, "Mode:", -1)),
                        J(" " + B(s.value.processing_mode), 1)
                      ])
                    ])
                  ])
                ])
              ]),
              l("div", YP, [
                l("div", XP, [
                  l("div", GP, [
                    c[9] || (c[9] = l("h6", { class: "card-title" }, "Status", -1)),
                    s.value.processing_mode === "immediate" ? (N(), P("div", QP, c[7] || (c[7] = [
                      l("span", { class: "badge bg-success" }, [
                        l("i", { class: "fas fa-check me-1" }),
                        J("Ready for Download ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is ready for immediate download.", -1)
                    ]))) : (N(), P("div", JP, c[8] || (c[8] = [
                      l("span", { class: "badge bg-info" }, [
                        l("i", { class: "fas fa-clock me-1" }),
                        J("Processing in Background ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is being processed. You'll be able to download it when complete.", -1)
                    ])))
                  ])
                ])
              ])
            ])
          ])) : (N(), P("div", ZP, [
            c[12] || (c[12] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-exclamation-triangle text-danger",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Creation Failed")
            ], -1)),
            l("div", eV, [
              c[11] || (c[11] = l("strong", null, "Error:", -1)),
              J(" " + B(s.value.message), 1)
            ])
          ])) : (N(), P("div", jP, c[1] || (c[1] = [
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
}), iV = /* @__PURE__ */ ps("streaming", () => {
  const e = G({
    active: !1,
    filename: "",
    startTime: null
  }), t = H(() => e.value.active), n = H(() => e.value.startTime ? Math.round((Date.now() - e.value.startTime.getTime()) / 1e3) : 0);
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
}), aV = { class: "mb-3" }, lV = ["for"], cV = ["id", "value", "placeholder"], uV = {
  key: 0,
  class: "form-text"
}, dV = /* @__PURE__ */ Te({
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
    return (t, n) => (N(), P("div", aV, [
      l("label", {
        for: t.inputId,
        class: "form-label"
      }, "Archive Name", 8, lV),
      l("input", {
        type: "text",
        class: "form-control",
        id: t.inputId,
        value: t.modelValue,
        onInput: n[0] || (n[0] = (s) => t.$emit("update:modelValue", s.target.value)),
        placeholder: t.placeholder,
        maxlength: "100"
      }, null, 40, cV),
      t.showHelp ? (N(), P("div", uV, B(t.helpText), 1)) : Ee("", !0)
    ]));
  }
}), fV = { class: "mb-3" }, pV = {
  key: 0,
  class: "text-center text-muted py-3"
}, hV = {
  key: 1,
  class: "resource-type-list"
}, mV = {
  key: 0,
  class: "form-check mb-2"
}, gV = ["checked"], vV = ["value", "checked", "id", "disabled"], _V = ["for"], yV = /* @__PURE__ */ Te({
  __name: "ResourceTypesSelector",
  props: {
    selectedTypes: {},
    availableTypes: {},
    showSelectAll: { type: Boolean, default: !0 }
  },
  emits: ["update:selectedTypes"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = H(() => {
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
    return (a, c) => (N(), P("div", fV, [
      c[2] || (c[2] = l("label", { class: "form-label" }, "Resource Types", -1)),
      c[3] || (c[3] = l("div", { class: "form-text mb-2" }, "Select which resource types to include", -1)),
      a.availableTypes.length === 0 ? (N(), P("div", pV, c[0] || (c[0] = [
        l("i", { class: "fas fa-info-circle me-2" }, null, -1),
        J(" No resource types found ")
      ]))) : (N(), P("div", hV, [
        a.showSelectAll ? (N(), P("div", mV, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: o.value,
            onChange: r,
            id: "select-all-types"
          }, null, 40, gV),
          c[1] || (c[1] = l("label", {
            class: "form-check-label fw-bold",
            for: "select-all-types"
          }, " Select All ", -1))
        ])) : Ee("", !0),
        (N(!0), P(we, null, Ye(a.availableTypes, (f) => (N(), P("div", {
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
          }, null, 40, vV),
          l("label", {
            class: "form-check-label",
            for: `resource-${f.name}`
          }, B(f.name), 9, _V)
        ]))), 128))
      ]))
    ]));
  }
}), bV = { class: "mb-3" }, EV = { class: "bg-light p-3 rounded" }, wV = { key: 0 }, AV = { class: "small text-muted" }, SV = { key: 0 }, OV = { key: 1 }, CV = { class: "d-flex align-items-center mb-2" }, TV = { key: 0 }, NV = { class: "mb-2" }, DV = { class: "small text-muted" }, xV = { key: 1 }, kV = { class: "small text-muted" }, RV = { key: 0 }, IV = { key: 1 }, PV = { class: "d-flex gap-2 justify-content-end" }, VV = ["onClick"], MV = ["onClick", "disabled"], LV = /* @__PURE__ */ Te({
  __name: "StreamingArchiveModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {}
  },
  setup(e, { expose: t }) {
    const n = e, s = vs(), o = Fa(), r = iV(), i = G(null), a = G({
      mrns: [],
      archive_name: "",
      resource_types: []
    }), c = H(() => {
      const y = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set();
      return (n.archiveType === "selected" ? s.mrns.filter((D) => n.selectedMrns.includes(D.mrn)) : s.mrns).forEach((D) => {
        D.status_summary ? Object.entries(D.status_summary.resource_type_statuses).forEach(([I, C]) => {
          y.add(I), C.is_archivable && E.add(I);
        }) : D.resources.forEach((I) => {
          I.status !== "Deleted" && (y.add(I.name), I.status === "Completed" && E.add(I.name));
        });
      }), Array.from(y).sort().map((D) => ({
        name: D,
        isAvailable: E.has(D)
      }));
    }), f = H(() => {
      const y = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `streaming_archive_${n.archiveType === "selected" ? "selected" : "all"}_${y}`;
    }), u = H(() => {
      const y = a.value.resource_types || [], E = n.archiveType === "selected" ? s.mrns.filter((D) => n.selectedMrns.includes(D.mrn)) : s.mrns;
      let m = 0;
      return E.forEach((D) => {
        D.status_summary ? Object.entries(D.status_summary.resource_type_statuses).forEach(([I, C]) => {
          y.length === 0 ? C.is_archivable && (m += C.completed_count) : y.includes(I) && C.is_archivable && (m += C.completed_count);
        }) : D.resources.forEach((I) => {
          I.status === "Completed" && (y.length === 0 || y.includes(I.name)) && (m += 1);
        });
      }), m;
    }), d = H(() => {
      const y = c.value.filter((m) => m.isAvailable), E = c.value.length;
      return {
        availableTypes: y.length,
        totalTypes: E
      };
    }), h = H(() => !(a.value.archive_name && !/^[a-zA-Z0-9_-]+$/.test(a.value.archive_name.trim()) || n.archiveType === "selected" && n.selectedMrns.length === 0)), p = (y) => {
      a.value.resource_types = y;
    }, g = async () => (a.value = {
      mrns: n.archiveType === "selected" ? n.selectedMrns : [],
      archive_name: "",
      resource_types: []
    }, await i.value?.show()), v = () => a.value.archive_name || f.value, _ = async (y) => {
      if (!h.value) return;
      const E = v();
      try {
        r.startStreaming(E), o.displayToast(`Started streaming download: ${E}`, "info"), y(!0);
        const m = {
          ...a.value,
          mrns: n.archiveType === "selected" ? n.selectedMrns : []
        };
        m.archive_name || delete m.archive_name, m.resource_types?.length || delete m.resource_types;
        let D;
        n.archiveType === "selected" ? D = await Ge.streamSelectedArchive(n.selectedMrns, m) : D = await Ge.streamAllArchive(m);
        const I = new Blob([D.data]), C = window.URL.createObjectURL(I), A = document.createElement("a");
        A.href = C, A.download = `${E}.zip`, document.body.appendChild(A), A.click(), document.body.removeChild(A), window.URL.revokeObjectURL(C);
        const T = r.finishStreaming();
        o.displayToast(
          `Download completed: ${E} (${T}s)`,
          "success"
        );
      } catch (m) {
        r.finishStreaming(), o.displayToast(`Streaming download failed: ${m.message}`, "error");
      }
    };
    return t({ show: g }), (y, E) => {
      const m = Je("b-modal");
      return N(), rt(m, {
        ref_key: "streamingArchiveModal",
        ref: i,
        size: "lg"
      }, {
        title: be(() => E[1] || (E[1] = [
          l("i", { class: "fas fa-bolt text-primary me-2" }, null, -1),
          J(" Streaming Archive Download ")
        ])),
        footer: be(({ hide: D }) => [
          l("div", PV, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (I) => D(!1)
            }, E[9] || (E[9] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              J("Cancel ")
            ]), 8, VV),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (I) => _(D),
              disabled: !h.value || te(r).isStreamingActive
            }, [
              E[10] || (E[10] = l("i", { class: "fas fa-download fa-fw me-1" }, null, -1)),
              J(" " + B(te(r).isStreamingActive ? "Downloading..." : "Start Streaming Download"), 1)
            ], 8, MV)
          ])
        ]),
        default: be(() => [
          l("div", null, [
            E[8] || (E[8] = l("div", { class: "alert alert-info mb-4" }, [
              l("i", { class: "fas fa-info-circle me-2" }),
              l("strong", null, "Streaming Download"),
              l("div", { class: "small" }, " Your archive will be generated and downloaded immediately without storing on the server. Perfect for one-time downloads or when server storage is limited. ")
            ], -1)),
            le(dV, {
              modelValue: a.value.archive_name,
              "onUpdate:modelValue": E[0] || (E[0] = (D) => a.value.archive_name = D),
              placeholder: f.value,
              "show-help": !0,
              "help-text": "Archive will be downloaded immediately as [name].zip",
              "input-id": "streaming-archive-name"
            }, null, 8, ["modelValue", "placeholder"]),
            le(yV, {
              "selected-types": a.value.resource_types || [],
              "available-types": c.value,
              "onUpdate:selectedTypes": p,
              "show-select-all": !0
            }, null, 8, ["selected-types", "available-types"]),
            l("div", bV, [
              E[4] || (E[4] = l("label", { class: "form-label" }, "Selected Records", -1)),
              l("div", EV, [
                y.archiveType === "selected" ? (N(), P("div", wV, [
                  l("strong", null, B(y.selectedMrns.length), 1),
                  E[2] || (E[2] = J(" selected MRNs ")),
                  l("div", AV, [
                    J(B(y.selectedMrns.slice(0, 3).join(", ")) + " ", 1),
                    y.selectedMrns.length > 3 ? (N(), P("span", SV, " and " + B(y.selectedMrns.length - 3) + " more... ", 1)) : Ee("", !0)
                  ])
                ])) : (N(), P("div", OV, E[3] || (E[3] = [
                  l("strong", null, "All project records", -1),
                  l("div", { class: "small text-muted" }, "Complete project dataset", -1)
                ])))
              ])
            ]),
            l("div", {
              class: ue(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", CV, [
                l("i", {
                  class: ue([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                E[5] || (E[5] = l("strong", null, "Streaming Summary", -1))
              ]),
              u.value > 0 ? (N(), P("div", TV, [
                l("div", NV, [
                  l("strong", null, B(u.value), 1),
                  E[6] || (E[6] = J(" completed resources will be streamed "))
                ]),
                l("div", DV, B(d.value.availableTypes) + " of " + B(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (N(), P("div", xV, [
                E[7] || (E[7] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for streaming")
                ], -1)),
                l("div", kV, [
                  d.value.totalTypes === 0 ? (N(), P("span", RV, " No resource types found ")) : (N(), P("span", IV, B(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), FV = { class: "card" }, BV = { class: "card-header d-flex justify-content-between align-items-center" }, jV = ["disabled"], UV = { class: "card-body" }, HV = {
  key: 0,
  class: "text-center"
}, $V = {
  key: 1,
  class: "row g-3"
}, WV = { class: "col-md-6" }, KV = { class: "border rounded p-3 h-100" }, zV = { class: "row g-2" }, qV = { class: "col-6" }, YV = { class: "text-center" }, XV = { class: "h4 mb-1 text-primary" }, GV = { class: "col-6" }, QV = { class: "text-center" }, JV = { class: "h4 mb-1 text-info" }, ZV = { class: "col-md-6" }, eM = { class: "border rounded p-3 h-100" }, tM = { class: "row g-2" }, nM = { class: "text-center" }, sM = { class: "text-muted" }, oM = { class: "col-12" }, rM = { class: "border rounded p-3" }, iM = { class: "mb-2" }, aM = { class: "d-flex justify-content-between align-items-center mb-1" }, lM = { class: "text-muted" }, cM = {
  class: "progress",
  style: { height: "8px" }
}, uM = ["aria-valuenow"], dM = {
  key: 0,
  class: "mb-2"
}, fM = { class: "d-flex justify-content-between align-items-center mb-1" }, pM = { class: "text-muted" }, hM = {
  class: "progress",
  style: { height: "6px" }
}, mM = ["aria-valuenow"], gM = { class: "mb-2" }, vM = { class: "d-flex justify-content-between align-items-center mb-1" }, _M = { class: "text-muted" }, yM = {
  class: "progress",
  style: { height: "12px" }
}, bM = ["title"], EM = ["title"], wM = ["title"], AM = ["title"], SM = ["title"], OM = {
  class: "d-flex justify-content-start mt-1",
  style: { "font-size": "0.75rem" }
}, CM = {
  key: 0,
  class: "me-3"
}, TM = {
  key: 1,
  class: "me-3"
}, NM = {
  key: 2,
  class: "me-3"
}, DM = {
  key: 3,
  class: "me-3"
}, xM = {
  key: 4,
  class: "me-3"
}, kM = {
  key: 2,
  class: "text-center text-muted"
}, RM = /* @__PURE__ */ Te({
  __name: "ProjectSummaryWidget",
  setup(e) {
    const t = vs(), n = G(!1), s = H(() => t.projectSummary), o = H(() => s.value ? Object.values(s.value.overall_status_counts).reduce((h, p) => h + p, 0) : 0), r = H(() => {
      if (!s.value) return 0;
      const p = s.value.overall_status_counts.deleted || 0;
      return o.value - p;
    }), i = H(() => {
      if (!s.value || r.value === 0) return 0;
      const h = s.value.overall_status_counts.completed || 0;
      return Math.round(h / r.value * 100);
    }), a = H(() => {
      if (!s.value || r.value === 0) return 0;
      const h = s.value.overall_status_counts.failed || 0;
      return Math.round(h / r.value * 100);
    }), c = H(() => {
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
    return Ht(() => {
      d();
    }), (h, p) => (N(), P("div", FV, [
      l("div", BV, [
        p[0] || (p[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-chart-bar fa-fw" }),
          J(" Project Summary ")
        ], -1)),
        l("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: d,
          disabled: n.value,
          title: "Refresh summary"
        }, [
          l("i", {
            class: ue(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, jV)
      ]),
      l("div", UV, [
        n.value ? (N(), P("div", HV, p[1] || (p[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : s.value ? (N(), P("div", $V, [
          l("div", WV, [
            l("div", KV, [
              p[4] || (p[4] = l("h6", { class: "text-muted mb-3" }, "Overall Statistics", -1)),
              l("div", zV, [
                l("div", qV, [
                  l("div", YV, [
                    l("div", XV, B(s.value.total_mrns), 1),
                    p[2] || (p[2] = l("small", { class: "text-muted" }, "Total MRNs", -1))
                  ])
                ]),
                l("div", GV, [
                  l("div", QV, [
                    l("div", JV, B(o.value), 1),
                    p[3] || (p[3] = l("small", { class: "text-muted" }, "Total Resources", -1))
                  ])
                ])
              ])
            ])
          ]),
          l("div", ZV, [
            l("div", eM, [
              p[5] || (p[5] = l("h6", { class: "text-muted mb-3" }, "Resource Status", -1)),
              l("div", tM, [
                (N(!0), P(we, null, Ye(s.value.overall_status_counts, (g, v) => (N(), P("div", {
                  key: v,
                  class: "col-6"
                }, [
                  l("div", nM, [
                    l("div", {
                      class: ue(["h5 mb-1", f(v)])
                    }, B(g), 3),
                    l("small", sM, B(u(v)), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          l("div", oM, [
            l("div", rM, [
              p[14] || (p[14] = l("h6", { class: "text-muted mb-3" }, "Completion Progress", -1)),
              l("div", iM, [
                l("div", aM, [
                  p[6] || (p[6] = l("small", { class: "text-muted" }, "Overall Completion", -1)),
                  l("small", lM, B(i.value) + "%", 1)
                ]),
                l("div", cM, [
                  l("div", {
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: i.value + "%" }),
                    "aria-valuenow": i.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, uM)
                ])
              ]),
              a.value > 0 ? (N(), P("div", dM, [
                l("div", fM, [
                  p[7] || (p[7] = l("small", { class: "text-muted" }, "Error Rate", -1)),
                  l("small", pM, B(a.value) + "%", 1)
                ]),
                l("div", hM, [
                  l("div", {
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: a.value + "%" }),
                    "aria-valuenow": a.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, mM)
                ])
              ])) : Ee("", !0),
              l("div", gM, [
                l("div", vM, [
                  p[8] || (p[8] = l("small", { class: "text-muted" }, "Resource States Breakdown", -1)),
                  l("small", _M, B(r.value) + " active resources", 1)
                ]),
                l("div", yM, [
                  c.value.completed > 0 ? (N(), P("div", {
                    key: 0,
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: c.value.completed + "%" }),
                    title: `Completed: ${s.value?.overall_status_counts.completed || 0} (${c.value.completed}%)`
                  }, null, 12, bM)) : Ee("", !0),
                  c.value.fetching > 0 ? (N(), P("div", {
                    key: 1,
                    class: "progress-bar bg-info",
                    role: "progressbar",
                    style: Vt({ width: c.value.fetching + "%" }),
                    title: `Fetching: ${s.value?.overall_status_counts.fetching || 0} (${c.value.fetching}%)`
                  }, null, 12, EM)) : Ee("", !0),
                  c.value.pending > 0 ? (N(), P("div", {
                    key: 2,
                    class: "progress-bar bg-warning",
                    role: "progressbar",
                    style: Vt({ width: c.value.pending + "%" }),
                    title: `Pending: ${s.value?.overall_status_counts.pending || 0} (${c.value.pending}%)`
                  }, null, 12, wM)) : Ee("", !0),
                  c.value.failed > 0 ? (N(), P("div", {
                    key: 3,
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: c.value.failed + "%" }),
                    title: `Failed: ${s.value?.overall_status_counts.failed || 0} (${c.value.failed}%)`
                  }, null, 12, AM)) : Ee("", !0),
                  c.value.outdated > 0 ? (N(), P("div", {
                    key: 4,
                    class: "progress-bar bg-secondary",
                    role: "progressbar",
                    style: Vt({ width: c.value.outdated + "%" }),
                    title: `Outdated: ${s.value?.overall_status_counts.outdated || 0} (${c.value.outdated}%)`
                  }, null, 12, SM)) : Ee("", !0)
                ]),
                l("div", OM, [
                  c.value.completed > 0 ? (N(), P("div", CM, p[9] || (p[9] = [
                    l("span", { class: "badge bg-success me-1" }, "●", -1),
                    J("Completed ")
                  ]))) : Ee("", !0),
                  c.value.fetching > 0 ? (N(), P("div", TM, p[10] || (p[10] = [
                    l("span", { class: "badge bg-info me-1" }, "●", -1),
                    J("Fetching ")
                  ]))) : Ee("", !0),
                  c.value.pending > 0 ? (N(), P("div", NM, p[11] || (p[11] = [
                    l("span", { class: "badge bg-warning me-1" }, "●", -1),
                    J("Pending ")
                  ]))) : Ee("", !0),
                  c.value.failed > 0 ? (N(), P("div", DM, p[12] || (p[12] = [
                    l("span", { class: "badge bg-danger me-1" }, "●", -1),
                    J("Failed ")
                  ]))) : Ee("", !0),
                  c.value.outdated > 0 ? (N(), P("div", xM, p[13] || (p[13] = [
                    l("span", { class: "badge bg-secondary me-1" }, "●", -1),
                    J("Outdated ")
                  ]))) : Ee("", !0)
                ])
              ])
            ])
          ])
        ])) : (N(), P("div", kM, p[15] || (p[15] = [
          l("i", { class: "fas fa-info-circle fa-fw" }, null, -1),
          J(" No summary data available ")
        ])))
      ])
    ]));
  }
}), IM = /* @__PURE__ */ Gs(RM, [["__scopeId", "data-v-437ee7dd"]]), y_ = /* @__PURE__ */ ps("archive", () => {
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
  }), a = H(() => {
    let C = n.value;
    if (i.value.status && (C = C.filter((A) => A.status === i.value.status)), i.value.processingMode && (C = C.filter((A) => A.processing_mode === i.value.processingMode)), i.value.searchQuery) {
      const A = i.value.searchQuery.toLowerCase();
      C = C.filter(
        (T) => T.file_name.toLowerCase().includes(A) || T.archive_id.toLowerCase().includes(A)
      );
    }
    return C;
  }), c = H(() => {
    const C = (r.value.page - 1) * r.value.limit, A = C + r.value.limit, T = a.value;
    return r.value.total = T.length, r.value.totalPages = Math.ceil(T.length / r.value.limit), r.value.hasNext = r.value.page < r.value.totalPages, r.value.hasPrevious = r.value.page > 1, T.slice(C, A);
  }), f = H(
    () => n.value.filter(
      (C) => C.status === "pending" || C.status === "processing"
    )
  ), u = H(
    () => n.value.filter((C) => C.status === "completed")
  ), d = async () => {
    try {
      t.value = !0;
      const C = await Ge.listArchives();
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
    createArchiveSelected: async (C, A = {}) => {
      try {
        s.value = !0;
        const T = await Ge.createArchiveSelected(C, A);
        return T.data.success ? (await d(), T.data) : (e.addError({
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
    createArchiveAll: async (C = {}) => {
      try {
        s.value = !0;
        const A = await Ge.createArchiveAll(C);
        return A.data.success ? (await d(), A.data) : (e.addError({
          message: A.data.message || "Failed to create archive for all resources",
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), A.data);
      } catch (A) {
        return e.addError({
          message: `Failed to create archive for all resources: ${A}`,
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    downloadArchive: async (C) => {
      try {
        const A = await Ge.downloadArchive(C), T = new Blob([A.data], { type: "application/zip" }), S = window.URL.createObjectURL(T), k = document.createElement("a"), w = n.value.find(($) => $.archive_id === C)?.file_name || `archive_${C}.zip`;
        k.href = S, k.download = w, document.body.appendChild(k), k.click(), document.body.removeChild(k), window.URL.revokeObjectURL(S);
      } catch (A) {
        e.addError({
          message: `Failed to download archive: ${A}`,
          source: "ArchiveStore.downloadArchive",
          timestamp: /* @__PURE__ */ new Date()
        });
      }
    },
    deleteArchive: async (C) => {
      const A = n.value.findIndex((S) => S.archive_id === C);
      if (A === -1)
        return e.addError({
          message: "Archive not found",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      const T = n.value[A];
      try {
        o.value.add(C), n.value.splice(A, 1);
        const S = await Ge.deleteArchive(C);
        return S.data.success || (n.value.splice(A, 0, T), e.addError({
          message: S.data.message || "Failed to delete archive",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        })), S.data;
      } catch (S) {
        return n.value.splice(A, 0, T), e.addError({
          message: `Failed to delete archive: ${S}`,
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
    setFilter: (C, A) => {
      i.value[C] = A, r.value.page = 1;
    },
    clearFilters: () => {
      i.value.status = "", i.value.searchQuery = "", i.value.processingMode = "", r.value.page = 1;
    },
    isArchiveDeleting: (C) => o.value.has(C)
  };
}), PM = { class: "p-3" }, VM = {
  key: 0,
  class: "mb-4"
}, MM = {
  key: 1,
  class: "d-flex justify-content-between align-items-center mt-3"
}, LM = { class: "text-muted" }, FM = { class: "d-flex gap-2" }, BM = {
  key: 2,
  class: "toast-container position-fixed bottom-0 end-0 p-3"
}, jM = { class: "d-flex" }, UM = { class: "toast-body text-white" }, HM = /* @__PURE__ */ Te({
  __name: "MonitorPage",
  setup(e) {
    const t = vs(), n = Fa(), s = y_(), o = G(null), r = G(null), i = G(null), a = G(null);
    Lt(() => n.archiveModalVisible, async (v) => {
      v && (await r.value?.show(), n.hideArchiveModal());
    }), Lt(() => n.streamingModalVisible, async (v) => {
      v && (await a.value?.show(), n.hideStreamingModal());
    });
    const c = H({
      get: () => t.pagination.page,
      set: (v) => t.setPage(v)
    }), f = H({
      get: () => t.pagination.limit,
      set: (v) => t.setLimit(v)
    }), u = H(() => t.pagination.total), d = H(() => t.pagination.perPageOptions), h = H(() => {
      const v = t.pagination.total, _ = t.pagination.page, y = t.pagination.limit, E = v === 0 ? 0 : (_ - 1) * y + 1, m = Math.min(_ * y, v);
      return { start: E, end: m, total: v };
    }), p = async () => {
      if (o.value) {
        const v = await o.value.show();
        if (v)
          try {
            await t.addMrn(v), n.recordOperation("add-mrn", !0, "MRN added successfully");
          } catch {
            n.recordOperation("add-mrn", !1, "Failed to add MRN");
          }
      }
    }, g = async (v, _, y) => {
      try {
        let E;
        _ === "selected" && y ? E = await s.createArchiveSelected(y, v) : E = await s.createArchiveAll(v), E && (i.value?.show(E), n.recordOperation(
          "archive-create",
          E.success,
          E.message
        ));
      } catch (E) {
        console.error("Failed to create archive:", E), n.recordOperation("archive-create", !1, "Failed to create archive");
      }
    };
    return Ht(async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]);
      } catch (v) {
        console.error("Failed to load initial data:", v), n.recordOperation("initial-load", !1, "Failed to load initial data");
      }
    }), (v, _) => {
      const y = Je("b-pagination"), E = Je("b-pagination-dropdown");
      return N(), P("div", PM, [
        le(hI, { onAddMrn: p }),
        te(n).showSummary ? (N(), P("div", VM, [
          le(IM)
        ])) : Ee("", !0),
        le(fP, {
          items: te(t).mrns,
          loading: te(t).loading,
          "selected-mrns": te(t).selectedMrns,
          "all-selected": te(t).allSelected,
          indeterminate: te(t).indeterminate,
          onToggleSelectAll: te(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelectAll"]),
        te(t).pagination.total > 0 ? (N(), P("div", MM, [
          l("small", LM, " Showing " + B(h.value.start) + "-" + B(h.value.end) + " of " + B(h.value.total) + " MRNs ", 1),
          l("div", FM, [
            le(y, {
              size: "sm",
              perPage: f.value,
              totalItems: u.value,
              modelValue: c.value,
              "onUpdate:modelValue": _[0] || (_[0] = (m) => c.value = m)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            le(E, {
              options: d.value,
              modelValue: f.value,
              "onUpdate:modelValue": _[1] || (_[1] = (m) => f.value = m)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : Ee("", !0),
        le(vP, {
          ref_key: "addMrnModal",
          ref: o
        }, null, 512),
        (N(), rt(Fo, { to: "body" }, [
          le(BP, {
            ref_key: "archiveOptionsModal",
            ref: r,
            "selected-mrns": te(n).archiveModalSelectedMrns,
            "archive-type": te(n).archiveModalType,
            onCreate: g
          }, null, 8, ["selected-mrns", "archive-type"]),
          le(rV, {
            ref_key: "archiveCreationModal",
            ref: i
          }, null, 512),
          le(LV, {
            ref_key: "streamingArchiveModal",
            ref: a,
            "selected-mrns": te(n).streamingModalSelectedMrns,
            "archive-type": te(n).streamingModalType
          }, null, 8, ["selected-mrns", "archive-type"])
        ])),
        te(n).showToast && te(n).lastOperation ? (N(), P("div", BM, [
          l("div", {
            class: ue(["toast show", te(n).lastOperation.success ? "bg-success" : "bg-danger"]),
            role: "alert"
          }, [
            l("div", jM, [
              l("div", UM, [
                l("i", {
                  class: ue(te(n).lastOperation.success ? "fas fa-check-circle fa-fw" : "fas fa-exclamation-triangle fa-fw")
                }, null, 2),
                J(" " + B(te(n).lastOperation.message), 1)
              ]),
              l("button", {
                type: "button",
                class: "btn-close btn-close-white me-2 m-auto",
                onClick: _[2] || (_[2] = (m) => te(n).clearToast())
              })
            ])
          ], 2)
        ])) : Ee("", !0)
      ]);
    };
  }
}), b_ = /* @__PURE__ */ ps("task", () => {
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
  }), a = H(() => {
    let S = n.value;
    if (i.value.status && (S = S.filter((k) => k.status === i.value.status)), i.value.task_type && (S = S.filter((k) => k.key === i.value.task_type)), i.value.search_query) {
      const k = i.value.search_query.toLowerCase();
      S = S.filter(
        (R) => R.id.toLowerCase().includes(k) || R.key.toLowerCase().includes(k)
      );
    }
    return S;
  }), c = H(() => {
    const S = (r.value.page - 1) * r.value.limit, k = S + r.value.limit, R = a.value;
    return r.value.total = R.length, r.value.total_pages = Math.ceil(R.length / r.value.limit), r.value.has_next = r.value.page < r.value.total_pages, r.value.has_previous = r.value.page > 1, R.slice(S, k);
  }), f = H(
    () => n.value.filter((S) => S.status === "pending")
  ), u = H(
    () => n.value.filter((S) => S.status === "processing")
  ), d = H(
    () => n.value.filter((S) => S.status === "completed")
  ), h = H(
    () => n.value.filter((S) => S.status === "failed")
  ), p = H(() => ({
    total: n.value.length,
    pending: f.value.length,
    processing: u.value.length,
    completed: d.value.length,
    failed: h.value.length
  })), g = async () => {
    try {
      t.value = !0;
      const k = (await Ge.listTasks(
        r.value.page,
        r.value.limit,
        i.value
      )).data;
      k.success ? (n.value = k.tasks || [], k.pagination && (r.value = { ...r.value, ...k.pagination })) : e.addError({
        message: k.message || "Failed to fetch tasks",
        source: "TaskStore.fetchTasks",
        timestamp: /* @__PURE__ */ new Date()
      });
    } catch (S) {
      e.addError({
        message: `Failed to fetch tasks: ${S}`,
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
    failedTasks: h,
    taskStatusCounts: p,
    // Actions
    fetchTasks: g,
    performFullSync: async () => {
      try {
        s.value = !0;
        const k = (await Ge.performTaskFullSync()).data;
        return k.success ? (await g(), k) : (e.addError({
          message: k.message || "Failed to perform full sync",
          source: "TaskStore.performFullSync",
          timestamp: /* @__PURE__ */ new Date()
        }), k);
      } catch (S) {
        return e.addError({
          message: `Failed to perform full sync: ${S}`,
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
        const k = (await Ge.retryFailedResources()).data;
        return k.success ? (await g(), k) : (e.addError({
          message: k.message || "Failed to retry failed resources",
          source: "TaskStore.retryFailed",
          timestamp: /* @__PURE__ */ new Date()
        }), k);
      } catch (S) {
        return e.addError({
          message: `Failed to retry failed resources: ${S}`,
          source: "TaskStore.retryFailed",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    getTaskDetails: async (S) => {
      try {
        const R = (await Ge.getTaskDetails(S)).data;
        return R.success || e.addError({
          message: R.message || "Failed to get task details",
          source: "TaskStore.getTaskDetails",
          timestamp: /* @__PURE__ */ new Date()
        }), R;
      } catch (k) {
        return e.addError({
          message: `Failed to get task details: ${k}`,
          source: "TaskStore.getTaskDetails",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      }
    },
    deleteTask: async (S) => {
      const k = n.value.findIndex((w) => w.id === S);
      if (k === -1)
        return e.addError({
          message: "Task not found",
          source: "TaskStore.deleteTask",
          timestamp: /* @__PURE__ */ new Date()
        }), !1;
      const R = n.value[k];
      try {
        o.value.add(S), n.value.splice(k, 1);
        const w = await Ge.deleteTask(S);
        return w.data.success ? !0 : (n.value.splice(k, 0, R), e.addError({
          message: w.data.message || "Failed to delete task",
          source: "TaskStore.deleteTask",
          timestamp: /* @__PURE__ */ new Date()
        }), !1);
      } catch (w) {
        return n.value.splice(k, 0, R), e.addError({
          message: `Failed to delete task: ${w}`,
          source: "TaskStore.deleteTask",
          timestamp: /* @__PURE__ */ new Date()
        }), !1;
      } finally {
        o.value.delete(S);
      }
    },
    refreshTaskStatus: async () => {
      await g();
    },
    setPage: (S) => {
      S >= 1 && S <= r.value.total_pages && (r.value.page = S);
    },
    setLimit: (S) => {
      r.value.limit = S, r.value.page = 1;
    },
    setFilter: (S, k) => {
      i.value[S] = k, r.value.page = 1;
    },
    clearFilters: () => {
      i.value.status = "", i.value.task_type = "", i.value.search_query = "", r.value.page = 1;
    },
    isTaskDeleting: (S) => o.value.has(S)
  };
}), $M = { class: "card" }, WM = { class: "card-header d-flex justify-content-between align-items-center" }, KM = ["disabled"], zM = { class: "card-body" }, qM = {
  key: 0,
  class: "text-center"
}, YM = {
  key: 1,
  class: "row g-3"
}, XM = { class: "col-md-4" }, GM = { class: "d-flex align-items-center" }, QM = { class: "fw-bold" }, JM = { class: "col-md-4" }, ZM = { class: "d-flex align-items-center" }, eL = { class: "fw-bold" }, tL = { class: "col-md-4" }, nL = { class: "d-flex align-items-center" }, sL = { class: "fw-bold" }, oL = { class: "col-12 mt-3" }, rL = { class: "border-top pt-3" }, iL = { class: "row g-3" }, aL = { class: "col-md-3" }, lL = { class: "d-flex align-items-center" }, cL = { class: "fw-bold" }, uL = { class: "col-md-3" }, dL = { class: "d-flex align-items-center" }, fL = { class: "fw-bold" }, pL = { class: "col-md-3" }, hL = { class: "d-flex align-items-center" }, mL = { class: "fw-bold" }, gL = { class: "col-md-3" }, vL = { class: "d-flex align-items-center" }, _L = { class: "fw-bold" }, yL = /* @__PURE__ */ Te({
  __name: "QueueStatusWidget",
  setup(e) {
    const t = b_(), n = G(!1), s = H(() => t.taskStatusCounts), o = H(() => {
      const { pending: a, failed: c, processing: f } = s.value;
      return c > 5 ? "Poor" : a + f > 10 ? "Busy" : c > 0 || a > 0 || f > 0 ? "Active" : "Healthy";
    }), r = H(() => {
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
    }), Bo(() => {
    }), (a, c) => (N(), P("div", $M, [
      l("div", WM, [
        c[0] || (c[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-clock-rotate-left fa-fw" }),
          J(" Background Queue Status ")
        ], -1)),
        l("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: i,
          disabled: n.value,
          title: "Refresh queue status"
        }, [
          l("i", {
            class: ue(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, KM)
      ]),
      l("div", zM, [
        n.value ? (N(), P("div", qM, c[1] || (c[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : (N(), P("div", YM, [
          l("div", XM, [
            l("div", GM, [
              c[3] || (c[3] = l("i", { class: "fas fa-check-circle fa-fw text-success me-2" }, null, -1)),
              l("div", null, [
                l("div", QM, B(o.value), 1),
                c[2] || (c[2] = l("small", { class: "text-muted" }, "Queue Health", -1))
              ])
            ])
          ]),
          l("div", JM, [
            l("div", ZM, [
              c[5] || (c[5] = l("i", { class: "fas fa-hourglass-half fa-fw text-warning me-2" }, null, -1)),
              l("div", null, [
                l("div", eL, B(s.value.pending), 1),
                c[4] || (c[4] = l("small", { class: "text-muted" }, "Pending Tasks", -1))
              ])
            ])
          ]),
          l("div", tL, [
            l("div", nL, [
              c[7] || (c[7] = l("i", { class: "fas fa-exclamation-triangle fa-fw text-danger me-2" }, null, -1)),
              l("div", null, [
                l("div", sL, B(s.value.failed), 1),
                c[6] || (c[6] = l("small", { class: "text-muted" }, "Failed Tasks", -1))
              ])
            ])
          ]),
          l("div", oL, [
            l("div", rL, [
              l("div", iL, [
                l("div", aL, [
                  l("div", lL, [
                    c[9] || (c[9] = l("i", { class: "fas fa-list fa-fw text-primary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", cL, B(s.value.total), 1),
                      c[8] || (c[8] = l("small", { class: "text-muted" }, "Total Tasks", -1))
                    ])
                  ])
                ]),
                l("div", uL, [
                  l("div", dL, [
                    c[11] || (c[11] = l("i", { class: "fas fa-play fa-fw text-info me-2" }, null, -1)),
                    l("div", null, [
                      l("div", fL, B(s.value.processing), 1),
                      c[10] || (c[10] = l("small", { class: "text-muted" }, "Processing", -1))
                    ])
                  ])
                ]),
                l("div", pL, [
                  l("div", hL, [
                    c[13] || (c[13] = l("i", { class: "fas fa-check fa-fw text-success me-2" }, null, -1)),
                    l("div", null, [
                      l("div", mL, B(s.value.completed), 1),
                      c[12] || (c[12] = l("small", { class: "text-muted" }, "Completed", -1))
                    ])
                  ])
                ]),
                l("div", gL, [
                  l("div", vL, [
                    c[15] || (c[15] = l("i", { class: "fas fa-percentage fa-fw text-secondary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", _L, B(r.value) + "%", 1),
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
}), bL = /* @__PURE__ */ Gs(yL, [["__scopeId", "data-v-1083bc04"]]), EL = { class: "p-3" }, wL = { class: "d-flex justify-content-between align-items-center mb-4" }, AL = { class: "d-flex gap-2" }, SL = ["disabled"], OL = ["disabled"], CL = ["disabled"], TL = { class: "mb-4" }, NL = { class: "card mb-4" }, DL = { class: "card-body" }, xL = { class: "row g-3" }, kL = { class: "col-md-3" }, RL = { class: "col-md-3" }, IL = { class: "col-md-3" }, PL = { class: "col-md-3" }, VL = ["value"], ML = {
  key: 0,
  class: "row mt-3"
}, LL = { class: "card" }, FL = { class: "card-body p-0" }, BL = {
  key: 0,
  class: "text-center py-5"
}, jL = {
  key: 1,
  class: "d-flex flex-column gap-2 py-5 align-items-center"
}, UL = { class: "" }, HL = { class: "text-muted mb-0" }, $L = { key: 2 }, WL = { class: "table-responsive" }, KL = { class: "table table-hover mb-0" }, zL = { class: "d-flex flex-column" }, qL = { class: "fw-semibold" }, YL = {
  key: 0,
  class: "text-muted"
}, XL = { class: "badge bg-secondary" }, GL = ["title"], QL = ["title"], JL = { class: "text-end" }, ZL = { class: "btn-group btn-group-sm" }, e4 = ["onClick"], t4 = ["disabled", "onClick"], n4 = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, s4 = { class: "text-muted" }, o4 = { class: "d-flex gap-2" }, r4 = { class: "modal-dialog modal-lg" }, i4 = { class: "modal-content" }, a4 = {
  key: 0,
  class: "modal-body"
}, l4 = { class: "row" }, c4 = { class: "col-md-6" }, u4 = { class: "row" }, d4 = { class: "col-sm-8" }, f4 = { class: "col-sm-8" }, p4 = { class: "col-sm-8" }, h4 = { class: "col-sm-8" }, m4 = { class: "col-sm-8" }, g4 = { class: "col-md-6" }, v4 = { class: "bg-light p-3 rounded small" }, _4 = {
  key: 0,
  class: "row mt-3"
}, y4 = { class: "col-12" }, b4 = { class: "bg-light p-3 rounded small" }, E4 = /* @__PURE__ */ Te({
  __name: "TasksPage",
  setup(e) {
    const t = b_(), n = __(), s = G(""), o = G(""), r = G(""), i = G(null), a = G(null), c = [10, 25, 50, 100], f = H({
      get: () => t.pagination.page,
      set: (R) => t.setPage(R)
    }), u = H({
      get: () => t.pagination.limit,
      set: (R) => t.setLimit(R)
    }), d = H(() => s.value || o.value || r.value), h = H(() => {
      const R = t.filteredTasks.length, w = (t.pagination.page - 1) * t.pagination.limit + 1, $ = Math.min(w + t.pagination.limit - 1, R);
      return { start: w, end: $, total: R };
    }), p = async () => {
      await t.fetchTasks();
    }, g = async () => {
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
    }, m = () => {
      s.value = "", o.value = "", r.value = "", t.clearFilters();
    }, D = async (R) => {
      i.value = R, new window.bootstrap.Modal(a.value).show();
    }, I = async (R) => {
      await n.confirmAction(
        "Delete Task",
        `Are you sure you want to delete task ${R.id}? This action cannot be undone.`
      ) && await t.deleteTask(R.id) && n.showSuccess("Task deleted successfully.");
    }, C = (R) => {
      if (!R) return "Unknown";
      try {
        const w = new Date(R), he = (/* @__PURE__ */ new Date()).getTime() - w.getTime(), ne = Math.floor(he / 6e4), V = Math.floor(ne / 60), L = Math.floor(V / 24);
        return ne < 60 ? `${ne}m ago` : V < 24 ? `${V}h ago` : L < 7 ? `${L}d ago` : w.toLocaleDateString();
      } catch {
        return R;
      }
    }, A = (R) => {
      if (!R) return "Unknown";
      try {
        return new Date(R).toLocaleString();
      } catch {
        return R;
      }
    }, T = (R) => ({
      fhir_fetch: "FHIR Fetch",
      full_sync: "Full Sync",
      retry_failed: "Retry Failed",
      archive: "Archive",
      cleanup: "Cleanup"
    })[R] || R, S = (R) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[R] || "badge bg-secondary", k = (R) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[R] || "fas fa-question-circle";
    return Ht(async () => {
      await p();
    }), Bo(() => {
    }), (R, w) => {
      const $ = Je("b-pagination"), he = Je("b-pagination-dropdown");
      return N(), P("div", EL, [
        l("div", wL, [
          w[9] || (w[9] = l("div", null, [
            l("h4", { class: "mb-1" }, "Task Management"),
            l("p", { class: "text-muted mb-0" }, "Monitor and manage background processing tasks")
          ], -1)),
          l("div", AL, [
            l("button", {
              class: "btn btn-warning btn-sm",
              onClick: g,
              disabled: te(t).operationLoading
            }, [
              l("i", {
                class: ue(["fas fa-arrows-rotate fa-fw me-1", { "fa-spin": te(t).operationLoading }])
              }, null, 2),
              w[6] || (w[6] = J(" Full Sync "))
            ], 8, SL),
            l("button", {
              class: "btn btn-outline-warning btn-sm",
              onClick: v,
              disabled: te(t).operationLoading
            }, w[7] || (w[7] = [
              l("i", { class: "fas fa-exclamation-triangle fa-fw me-1" }, null, -1),
              J(" Retry Failed ")
            ]), 8, OL),
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: p,
              disabled: te(t).loading
            }, [
              l("i", {
                class: ue(["fas fa-sync-alt fa-fw me-1", { "fa-spin": te(t).loading }])
              }, null, 2),
              w[8] || (w[8] = J(" Refresh "))
            ], 8, CL)
          ])
        ]),
        l("div", TL, [
          le(bL)
        ]),
        l("div", NL, [
          l("div", DL, [
            l("div", xL, [
              l("div", kL, [
                w[10] || (w[10] = l("label", { class: "form-label" }, "Search Tasks", -1)),
                et(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by ID or type...",
                  "onUpdate:modelValue": w[0] || (w[0] = (ne) => s.value = ne),
                  onInput: _
                }, null, 544), [
                  [wo, s.value]
                ])
              ]),
              l("div", RL, [
                w[12] || (w[12] = l("label", { class: "form-label" }, "Status", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[1] || (w[1] = (ne) => o.value = ne),
                  onChange: y
                }, w[11] || (w[11] = [
                  qi('<option value="">All Statuses</option><option value="pending">Pending</option><option value="processing">Processing</option><option value="completed">Completed</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [Hn, o.value]
                ])
              ]),
              l("div", IL, [
                w[14] || (w[14] = l("label", { class: "form-label" }, "Task Type", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[2] || (w[2] = (ne) => r.value = ne),
                  onChange: E
                }, w[13] || (w[13] = [
                  qi('<option value="">All Types</option><option value="fhir_fetch">FHIR Fetch</option><option value="full_sync">Full Sync</option><option value="retry_failed">Retry Failed</option><option value="archive">Archive</option><option value="cleanup">Cleanup</option>', 6)
                ]), 544), [
                  [Hn, r.value]
                ])
              ]),
              l("div", PL, [
                w[15] || (w[15] = l("label", { class: "form-label" }, "Per Page", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[3] || (w[3] = (ne) => u.value = ne)
                }, [
                  (N(), P(we, null, Ye(c, (ne) => l("option", {
                    key: ne,
                    value: ne
                  }, B(ne), 9, VL)), 64))
                ], 512), [
                  [Hn, u.value]
                ])
              ])
            ]),
            d.value ? (N(), P("div", ML, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: m
                }, w[16] || (w[16] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  J("Clear Filters ")
                ]))
              ])
            ])) : Ee("", !0)
          ])
        ]),
        l("div", LL, [
          l("div", FL, [
            te(t).loading ? (N(), P("div", BL, w[17] || (w[17] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading tasks...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading tasks...", -1)
            ]))) : te(t).paginatedTasks.length === 0 ? (N(), P("div", jL, [
              w[18] || (w[18] = l("i", {
                class: "fas fa-tasks text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", UL, B(d.value ? "No tasks match your filters" : "No tasks found"), 1),
              l("span", HL, B(d.value ? "Try adjusting your search criteria." : "Tasks will appear here when created."), 1)
            ])) : (N(), P("div", $L, [
              l("div", WL, [
                l("table", KL, [
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
                    (N(!0), P(we, null, Ye(te(t).paginatedTasks, (ne) => (N(), P("tr", {
                      key: ne.id
                    }, [
                      l("td", null, [
                        l("div", zL, [
                          l("span", qL, B(ne.id), 1),
                          ne.params.mrn ? (N(), P("small", YL, "MRN: " + B(ne.params.mrn), 1)) : Ee("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: ue(S(ne.status))
                        }, [
                          l("i", {
                            class: ue([k(ne.status), "me-1"])
                          }, null, 2),
                          J(" " + B(ne.status.charAt(0).toUpperCase() + ne.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", XL, B(T(ne.key)), 1)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: A(ne.created_at)
                        }, B(C(ne.created_at)), 9, GL)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: A(ne.updated_at)
                        }, B(C(ne.updated_at)), 9, QL)
                      ]),
                      l("td", JL, [
                        l("div", ZL, [
                          l("button", {
                            class: "btn btn-outline-info",
                            onClick: (V) => D(ne),
                            title: "View Details"
                          }, w[19] || (w[19] = [
                            l("i", { class: "fas fa-info-circle" }, null, -1)
                          ]), 8, e4),
                          l("button", {
                            class: "btn btn-outline-danger",
                            title: "Delete Task",
                            disabled: ne.status === "processing" || te(t).isTaskDeleting(ne.id),
                            onClick: (V) => I(ne)
                          }, [
                            l("i", {
                              class: ue(["fas", te(t).isTaskDeleting(ne.id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, t4)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        te(t).filteredTasks.length > 0 ? (N(), P("div", n4, [
          l("small", s4, " Showing " + B(h.value.start) + "-" + B(h.value.end) + " of " + B(h.value.total) + " tasks ", 1),
          l("div", o4, [
            le($, {
              size: "sm",
              perPage: u.value,
              totalItems: te(t).filteredTasks.length,
              modelValue: f.value,
              "onUpdate:modelValue": w[4] || (w[4] = (ne) => f.value = ne)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            le(he, {
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
          l("div", r4, [
            l("div", i4, [
              w[29] || (w[29] = l("div", { class: "modal-header" }, [
                l("h5", { class: "modal-title" }, "Task Details"),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "data-bs-dismiss": "modal"
                })
              ], -1)),
              i.value ? (N(), P("div", a4, [
                l("div", l4, [
                  l("div", c4, [
                    w[26] || (w[26] = l("h6", null, "Basic Information", -1)),
                    l("dl", u4, [
                      w[21] || (w[21] = l("dt", { class: "col-sm-4" }, "ID:", -1)),
                      l("dd", d4, [
                        l("code", null, B(i.value.id), 1)
                      ]),
                      w[22] || (w[22] = l("dt", { class: "col-sm-4" }, "Type:", -1)),
                      l("dd", f4, B(T(i.value.key)), 1),
                      w[23] || (w[23] = l("dt", { class: "col-sm-4" }, "Status:", -1)),
                      l("dd", p4, [
                        l("span", {
                          class: ue(S(i.value.status))
                        }, B(i.value.status.charAt(0).toUpperCase() + i.value.status.slice(1)), 3)
                      ]),
                      w[24] || (w[24] = l("dt", { class: "col-sm-4" }, "Created:", -1)),
                      l("dd", h4, B(A(i.value.created_at)), 1),
                      w[25] || (w[25] = l("dt", { class: "col-sm-4" }, "Updated:", -1)),
                      l("dd", m4, B(A(i.value.updated_at)), 1)
                    ])
                  ]),
                  l("div", g4, [
                    w[27] || (w[27] = l("h6", null, "Parameters", -1)),
                    l("pre", v4, B(JSON.stringify(i.value.params, null, 2)), 1)
                  ])
                ]),
                Object.keys(i.value.metadata).length > 0 ? (N(), P("div", _4, [
                  l("div", y4, [
                    w[28] || (w[28] = l("h6", null, "Metadata", -1)),
                    l("pre", b4, B(JSON.stringify(i.value.metadata, null, 2)), 1)
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
}), w4 = { key: 0 }, A4 = { class: "card" }, S4 = { class: "card-body" }, O4 = { class: "list-unstyled mb-0" }, C4 = {
  key: 1,
  class: "text-center mt-3"
}, T4 = { class: "d-flex gap-2 justify-content-end" }, N4 = ["onClick", "disabled"], D4 = ["onClick", "disabled"], x4 = /* @__PURE__ */ Te({
  __name: "ArchiveDeleteModal",
  emits: ["deleted"],
  setup(e, { expose: t, emit: n }) {
    const s = n, o = G(null), r = G(null), i = G(!1), a = async (p) => (r.value = p, i.value = !1, await o.value?.show()), c = async (p) => {
      if (!(!r.value || i.value)) {
        i.value = !0;
        try {
          s("deleted", r.value.archive_id), p(!0);
        } catch (g) {
          console.error("Delete confirmation failed:", g);
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
      const g = 1024, v = ["Bytes", "KB", "MB", "GB"], _ = Math.floor(Math.log(p) / Math.log(g));
      return parseFloat((p / Math.pow(g, _)).toFixed(2)) + " " + v[_];
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
    return t({ show: a }), (p, g) => {
      const v = Je("b-modal");
      return N(), rt(v, {
        ref_key: "deleteModal",
        ref: o
      }, {
        title: be(() => g[0] || (g[0] = [
          J("Delete Archive")
        ])),
        footer: be(({ hide: _ }) => [
          l("div", T4, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (y) => _(!1),
              disabled: i.value
            }, g[12] || (g[12] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              J("Cancel ")
            ]), 8, N4),
            l("button", {
              class: "btn btn-sm btn-danger",
              type: "button",
              onClick: (y) => c(_),
              disabled: i.value
            }, [
              g[13] || (g[13] = l("i", { class: "fas fa-trash fa-fw me-1" }, null, -1)),
              J(" " + B(i.value ? "Deleting..." : "Delete Archive"), 1)
            ], 8, D4)
          ])
        ]),
        default: be(() => [
          r.value ? (N(), P("div", w4, [
            g[8] || (g[8] = l("div", { class: "alert alert-warning" }, [
              l("i", { class: "fas fa-exclamation-triangle me-2" }),
              l("strong", null, "Warning:"),
              J(" This action cannot be undone. ")
            ], -1)),
            g[9] || (g[9] = l("p", null, "Are you sure you want to delete this archive?", -1)),
            l("div", A4, [
              l("div", S4, [
                g[7] || (g[7] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                l("ul", O4, [
                  l("li", null, [
                    g[1] || (g[1] = l("strong", null, "Archive ID:", -1)),
                    J(" " + B(r.value.archive_id), 1)
                  ]),
                  l("li", null, [
                    g[2] || (g[2] = l("strong", null, "File Name:", -1)),
                    J(" " + B(r.value.file_name), 1)
                  ]),
                  l("li", null, [
                    g[3] || (g[3] = l("strong", null, "Created:", -1)),
                    J(" " + B(f(r.value.created_at)), 1)
                  ]),
                  l("li", null, [
                    g[4] || (g[4] = l("strong", null, "Size:", -1)),
                    J(" " + B(u(r.value.file_size)), 1)
                  ]),
                  l("li", null, [
                    g[5] || (g[5] = l("strong", null, "Resources:", -1)),
                    J(" " + B(r.value.total_resources), 1)
                  ]),
                  l("li", null, [
                    g[6] || (g[6] = l("strong", null, "Status:", -1)),
                    l("span", {
                      class: ue(d(r.value.status))
                    }, [
                      l("i", {
                        class: ue([h(r.value.status), "me-1"])
                      }, null, 2),
                      J(" " + B(r.value.status.charAt(0).toUpperCase() + r.value.status.slice(1)), 1)
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
          ])) : Ee("", !0),
          i.value ? (N(), P("div", C4, g[11] || (g[11] = [
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
}), k4 = { class: "p-3" }, R4 = { class: "d-flex justify-content-between align-items-center mb-4" }, I4 = ["disabled"], P4 = { class: "card mb-4" }, V4 = { class: "card-body" }, M4 = { class: "row g-3" }, L4 = { class: "col-md-3" }, F4 = { class: "col-md-3" }, B4 = { class: "col-md-3" }, j4 = { class: "col-md-3" }, U4 = ["value"], H4 = {
  key: 0,
  class: "row mt-3"
}, $4 = { class: "row mb-4" }, W4 = { class: "col-md-3" }, K4 = { class: "card text-center" }, z4 = { class: "card-body py-3" }, q4 = { class: "card-title text-primary mb-1" }, Y4 = { class: "col-md-3" }, X4 = { class: "card text-center" }, G4 = { class: "card-body py-3" }, Q4 = { class: "card-title text-success mb-1" }, J4 = { class: "col-md-3" }, Z4 = { class: "card text-center" }, eF = { class: "card-body py-3" }, tF = { class: "card-title text-warning mb-1" }, nF = { class: "col-md-3" }, sF = { class: "card text-center" }, oF = { class: "card-body py-3" }, rF = { class: "card-title text-info mb-1" }, iF = { class: "card" }, aF = { class: "card-body p-0" }, lF = {
  key: 0,
  class: "text-center py-5"
}, cF = {
  key: 1,
  class: "text-center py-5"
}, uF = { class: "mt-3 mb-2" }, dF = { class: "text-muted mb-0" }, fF = { key: 2 }, pF = { class: "table-responsive" }, hF = { class: "table table-hover mb-0" }, mF = { class: "d-flex flex-column" }, gF = { class: "fw-semibold" }, vF = { class: "text-muted" }, _F = ["title"], yF = { class: "d-flex flex-column" }, bF = {
  key: 0,
  class: "text-danger"
}, EF = { class: "text-end" }, wF = { class: "btn-group btn-group-sm" }, AF = ["onClick"], SF = ["onClick", "disabled"], OF = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, CF = { class: "text-muted" }, TF = { class: "d-flex gap-2" }, NF = /* @__PURE__ */ Te({
  __name: "ArchivesPage",
  setup(e) {
    const t = y_(), n = G(null), s = G(""), o = G(""), r = G(""), i = H({
      get: () => t.pagination.page,
      set: (T) => t.setPage(T)
    }), a = H({
      get: () => t.pagination.limit,
      set: (T) => t.setLimit(T)
    });
    Ht(async () => {
      await d();
    });
    const c = H(() => s.value || o.value || r.value), f = H(() => {
      const T = t.completedArchives.reduce((S, k) => S + (k.file_size || 0), 0);
      return m(T);
    }), u = H(() => {
      const T = t.filteredArchives.length, S = (t.pagination.page - 1) * t.pagination.limit + 1, k = Math.min(S + t.pagination.limit - 1, T);
      return { start: S, end: k, total: T };
    }), d = async () => {
      await t.fetchArchives();
    }, h = () => {
      t.setFilter("searchQuery", s.value);
    }, p = () => {
      t.setFilter("status", o.value);
    }, g = () => {
      t.setFilter("processingMode", r.value);
    }, v = () => {
      s.value = "", o.value = "", r.value = "", t.clearFilters();
    }, _ = async (T) => {
      await t.downloadArchive(T.archive_id);
    }, y = async (T) => {
      await n.value?.show(T);
    }, E = async (T) => {
      await t.deleteArchive(T);
    }, m = (T) => {
      if (T === 0) return "0 Bytes";
      const S = 1024, k = ["Bytes", "KB", "MB", "GB"], R = Math.floor(Math.log(T) / Math.log(S));
      return parseFloat((T / Math.pow(S, R)).toFixed(2)) + " " + k[R];
    }, D = (T) => {
      if (!T) return "Unknown";
      try {
        const S = new Date(T), R = (/* @__PURE__ */ new Date()).getTime() - S.getTime(), w = Math.floor(R / 6e4), $ = Math.floor(w / 60), he = Math.floor($ / 24);
        return w < 60 ? `${w}m ago` : $ < 24 ? `${$}h ago` : he < 7 ? `${he}d ago` : S.toLocaleDateString();
      } catch {
        return T;
      }
    }, I = (T) => {
      if (!T) return "Unknown";
      try {
        return new Date(T).toLocaleString();
      } catch {
        return T;
      }
    }, C = (T) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[T] || "badge bg-secondary", A = (T) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[T] || "fas fa-question-circle";
    return Lt(() => t.filters, (T) => {
      s.value = T.searchQuery, o.value = T.status, r.value = T.processingMode;
    }, { deep: !0 }), Bo(() => {
    }), (T, S) => {
      const k = Je("b-pagination"), R = Je("b-pagination-dropdown");
      return N(), P("div", k4, [
        l("div", R4, [
          S[7] || (S[7] = l("div", null, [
            l("h4", { class: "mb-1" }, "Archive Management"),
            l("p", { class: "text-muted mb-0" }, "Manage and download your FHIR resource archives")
          ], -1)),
          l("div", null, [
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: d,
              disabled: te(t).loading
            }, [
              l("i", {
                class: ue(["fas fa-sync-alt fa-fw me-1", { "fa-spin": te(t).loading }])
              }, null, 2),
              S[6] || (S[6] = J(" Refresh "))
            ], 8, I4)
          ])
        ]),
        l("div", P4, [
          l("div", V4, [
            l("div", M4, [
              l("div", L4, [
                S[8] || (S[8] = l("label", { class: "form-label" }, "Search Archives", -1)),
                et(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by name or ID...",
                  "onUpdate:modelValue": S[0] || (S[0] = (w) => s.value = w),
                  onInput: h
                }, null, 544), [
                  [wo, s.value]
                ])
              ]),
              l("div", F4, [
                S[10] || (S[10] = l("label", { class: "form-label" }, "Status", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": S[1] || (S[1] = (w) => o.value = w),
                  onChange: p
                }, S[9] || (S[9] = [
                  qi('<option value="">All Statuses</option><option value="completed">Completed</option><option value="processing">Processing</option><option value="pending">Pending</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [Hn, o.value]
                ])
              ]),
              l("div", B4, [
                S[12] || (S[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": S[2] || (S[2] = (w) => r.value = w),
                  onChange: g
                }, S[11] || (S[11] = [
                  l("option", { value: "" }, "All Modes", -1),
                  l("option", { value: "immediate" }, "Immediate", -1),
                  l("option", { value: "background" }, "Background", -1)
                ]), 544), [
                  [Hn, r.value]
                ])
              ]),
              l("div", j4, [
                S[13] || (S[13] = l("label", { class: "form-label" }, "Per Page", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": S[3] || (S[3] = (w) => a.value = w)
                }, [
                  (N(!0), P(we, null, Ye(te(t).pagination.perPageOptions, (w) => (N(), P("option", {
                    key: w,
                    value: w
                  }, B(w), 9, U4))), 128))
                ], 512), [
                  [Hn, a.value]
                ])
              ])
            ]),
            c.value ? (N(), P("div", H4, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: v
                }, S[14] || (S[14] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  J("Clear Filters ")
                ]))
              ])
            ])) : Ee("", !0)
          ])
        ]),
        l("div", $4, [
          l("div", W4, [
            l("div", K4, [
              l("div", z4, [
                l("h5", q4, B(te(t).archives.length), 1),
                S[15] || (S[15] = l("p", { class: "card-text small text-muted mb-0" }, "Total Archives", -1))
              ])
            ])
          ]),
          l("div", Y4, [
            l("div", X4, [
              l("div", G4, [
                l("h5", Q4, B(te(t).completedArchives.length), 1),
                S[16] || (S[16] = l("p", { class: "card-text small text-muted mb-0" }, "Completed", -1))
              ])
            ])
          ]),
          l("div", J4, [
            l("div", Z4, [
              l("div", eF, [
                l("h5", tF, B(te(t).pendingArchives.length), 1),
                S[17] || (S[17] = l("p", { class: "card-text small text-muted mb-0" }, "In Progress", -1))
              ])
            ])
          ]),
          l("div", nF, [
            l("div", sF, [
              l("div", oF, [
                l("h5", rF, B(f.value), 1),
                S[18] || (S[18] = l("p", { class: "card-text small text-muted mb-0" }, "Total Size", -1))
              ])
            ])
          ])
        ]),
        l("div", iF, [
          l("div", aF, [
            te(t).loading ? (N(), P("div", lF, S[19] || (S[19] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading archives...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading archives...", -1)
            ]))) : te(t).paginatedArchives.length === 0 ? (N(), P("div", cF, [
              S[20] || (S[20] = l("i", {
                class: "fas fa-archive text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", uF, B(c.value ? "No archives match your filters" : "No archives found"), 1),
              l("p", dF, B(c.value ? "Try adjusting your search criteria." : "Archives will appear here when created."), 1)
            ])) : (N(), P("div", fF, [
              l("div", pF, [
                l("table", hF, [
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
                    (N(!0), P(we, null, Ye(te(t).paginatedArchives, (w) => (N(), P("tr", {
                      key: w.archive_id
                    }, [
                      l("td", null, [
                        l("div", mF, [
                          l("span", gF, B(w.file_name), 1),
                          l("small", vF, B(w.archive_id), 1)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: ue(C(w.status))
                        }, [
                          l("i", {
                            class: ue([A(w.status), "me-1"])
                          }, null, 2),
                          J(" " + B(w.status.charAt(0).toUpperCase() + w.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: I(w.created_at)
                        }, B(D(w.created_at)), 9, _F)
                      ]),
                      l("td", null, B(m(w.file_size)), 1),
                      l("td", null, [
                        l("div", yF, [
                          l("span", null, B(w.total_resources), 1),
                          w.failed_files > 0 ? (N(), P("small", bF, B(w.failed_files) + " failed ", 1)) : Ee("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: ue(["badge", w.processing_mode === "immediate" ? "bg-info" : "bg-secondary"])
                        }, B(w.processing_mode), 3)
                      ]),
                      l("td", EF, [
                        l("div", wF, [
                          w.status === "completed" && w.download_url ? (N(), P("button", {
                            key: 0,
                            class: "btn btn-outline-primary",
                            onClick: ($) => _(w),
                            title: "Download Archive"
                          }, S[21] || (S[21] = [
                            l("i", { class: "fas fa-download" }, null, -1)
                          ]), 8, AF)) : Ee("", !0),
                          l("button", {
                            class: "btn btn-outline-danger",
                            onClick: ($) => y(w),
                            title: "Delete Archive",
                            disabled: te(t).isArchiveDeleting(w.archive_id)
                          }, [
                            l("i", {
                              class: ue(["fas", te(t).isArchiveDeleting(w.archive_id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, SF)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        te(t).filteredArchives.length > 0 ? (N(), P("div", OF, [
          l("small", CF, " Showing " + B(u.value.start) + "-" + B(u.value.end) + " of " + B(u.value.total) + " archives ", 1),
          l("div", TF, [
            le(k, {
              size: "sm",
              perPage: a.value,
              totalItems: te(t).filteredArchives.length,
              modelValue: i.value,
              "onUpdate:modelValue": S[4] || (S[4] = (w) => i.value = w)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            le(R, {
              options: te(t).pagination.perPageOptions,
              modelValue: a.value,
              "onUpdate:modelValue": S[5] || (S[5] = (w) => a.value = w)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : Ee("", !0),
        (N(), rt(Fo, { to: "body" }, [
          le(x4, {
            ref_key: "deleteModal",
            ref: n,
            onDeleted: E
          }, null, 512)
        ]))
      ]);
    };
  }
}), DF = {}, xF = { class: "error-wrapper" }, kF = { class: "mt-5" };
function RF(e, t) {
  const n = Je("router-link");
  return N(), P("div", xF, [
    ke(e.$slots, "title", {}, () => [
      t[0] || (t[0] = l("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    ke(e.$slots, "description", {}, () => [
      t[1] || (t[1] = l("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    ke(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = l("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    l("div", kF, [
      le(n, {
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
const IF = /* @__PURE__ */ Gs(DF, [["render", RF], ["__scopeId", "data-v-d4f8fed2"]]), PF = { class: "card shadow-sm" }, VF = { class: "card-body" }, MF = { class: "text-center" }, LF = {
  key: 0,
  class: "lead text-danger"
}, FF = {
  key: 1,
  class: "text-muted"
}, BF = /* @__PURE__ */ Te({
  __name: "ErrorPage",
  setup(e) {
    const n = Vg().query.message;
    return (s, o) => {
      const r = Je("router-link");
      return N(), P("div", PF, [
        l("div", VF, [
          l("div", MF, [
            o[1] || (o[1] = l("h1", { class: "display-4" }, "Something went wrong", -1)),
            te(n) ? (N(), P("p", LF, "Error: " + B(te(n)), 1)) : (N(), P("p", FF, "We're sorry for the inconvenience. Please try again later.")),
            le(r, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: be(() => o[0] || (o[0] = [
                J("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), jF = [
  {
    path: "/",
    component: GA,
    children: [
      { path: "", name: "home", component: P2 },
      { path: "setup", name: "setup", component: oI },
      { path: "monitor", name: "monitor", component: HM },
      { path: "tasks", name: "tasks", component: E4 },
      { path: "archives", name: "archives", component: NF },
      { path: "error", name: "error", component: BF },
      { path: "/:pathMatch(.*)*", component: IF }
    ]
  }
];
let gi;
const $p = () => gi || (gi = BA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: Xw(),
  routes: jF
}), gi), UF = {
  key: 0,
  class: "alert alert-danger"
}, HF = { style: { "word-break": "break-all" } }, $F = /* @__PURE__ */ Te({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = G(), n = Xr(), { errors: s } = wa(n), o = (r) => JSON.stringify(r);
    return pa(async () => {
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
          (N(!0), P(we, null, Ye(te(s), (c, f) => (N(), P(we, { key: f }, [
            c ? (N(), P("div", UF, [
              l("div", HF, B(o(c)), 1)
            ])) : Ee("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), WF = /* @__PURE__ */ Te({
  __name: "App",
  setup(e) {
    const t = qo();
    return Ht(() => {
      t.fetchProjectSettings();
    }), (n, s) => {
      const o = Je("router-view");
      return N(), P("div", null, [
        le(o),
        le($F)
      ]);
    };
  }
}), c3 = (e) => {
  const t = _a(WF);
  t.config.errorHandler = (o, r, i) => {
    console.error("💥 Vue Error:", o), console.error("📍 Component:", r), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      o instanceof Error ? $p().push({ name: "error", query: { message: o.message } }) : console.error("Unhandled non-Error exception:", o);
    });
  };
  const n = aw();
  t.use(pR), t.use(n);
  const s = $p();
  return t.use(s), t.mount(e), t;
};
export {
  c3 as default
};
