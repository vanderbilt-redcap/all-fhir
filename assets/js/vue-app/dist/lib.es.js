var Xp = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Xn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const $e = Xp.NODE_ENV !== "production" ? Object.freeze({}) : {}, wo = Xp.NODE_ENV !== "production" ? Object.freeze([]) : [], dt = () => {
}, O_ = () => !1, jr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ui = (e) => e.startsWith("onUpdate:"), st = Object.assign, wc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, T_ = Object.prototype.hasOwnProperty, Be = (e, t) => T_.call(e, t), ge = Array.isArray, Ls = (e) => Ur(e) === "[object Map]", $o = (e) => Ur(e) === "[object Set]", Tu = (e) => Ur(e) === "[object Date]", Se = (e) => typeof e == "function", Qe = (e) => typeof e == "string", cn = (e) => typeof e == "symbol", je = (e) => e !== null && typeof e == "object", Ac = (e) => (je(e) || Se(e)) && Se(e.then) && Se(e.catch), Gp = Object.prototype.toString, Ur = (e) => Gp.call(e), Sc = (e) => Ur(e).slice(8, -1), Qp = (e) => Ur(e) === "[object Object]", Cc = (e) => Qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dr = /* @__PURE__ */ Xn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), N_ = /* @__PURE__ */ Xn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ua = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, D_ = /-(\w)/g, yt = ua(
  (e) => e.replace(D_, (t, n) => n ? n.toUpperCase() : "")
), k_ = /\B([A-Z])/g, qn = ua(
  (e) => e.replace(k_, "-$1").toLowerCase()
), Ks = ua((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ns = ua(
  (e) => e ? `on${Ks(e)}` : ""
), xt = (e, t) => !Object.is(e, t), po = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ar = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Hi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, x_ = (e) => {
  const t = Qe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Nu;
const Hr = () => Nu || (Nu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (ge(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Qe(s) ? M_(s) : Vt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (Qe(e) || je(e))
    return e;
}
const R_ = /;(?![^(]*\))/g, I_ = /:([^]+)/, P_ = /\/\*[^]*?\*\//g;
function M_(e) {
  const t = {};
  return e.replace(P_, "").split(R_).forEach((n) => {
    if (n) {
      const s = n.split(I_);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function le(e) {
  let t = "";
  if (Qe(e))
    t = e;
  else if (ge(e))
    for (let n = 0; n < e.length; n++) {
      const s = le(e[n]);
      s && (t += s + " ");
    }
  else if (je(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function it(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Qe(t) && (e.class = le(t)), n && (e.style = Vt(n)), e;
}
const V_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", L_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", F_ = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", B_ = /* @__PURE__ */ Xn(V_), $_ = /* @__PURE__ */ Xn(L_), j_ = /* @__PURE__ */ Xn(F_), U_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", H_ = /* @__PURE__ */ Xn(U_);
function Jp(e) {
  return !!e || e === "";
}
function W_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = zs(e[s], t[s]);
  return n;
}
function zs(e, t) {
  if (e === t) return !0;
  let n = Tu(e), s = Tu(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = cn(e), s = cn(t), n || s)
    return e === t;
  if (n = ge(e), s = ge(t), n || s)
    return n && s ? W_(e, t) : !1;
  if (n = je(e), s = je(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !zs(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Oc(e, t) {
  return e.findIndex((n) => zs(n, t));
}
const Zp = (e) => !!(e && e.__v_isRef === !0), M = (e) => Qe(e) ? e : e == null ? "" : ge(e) || je(e) && (e.toString === Gp || !Se(e.toString)) ? Zp(e) ? M(e.value) : JSON.stringify(e, eh, 2) : String(e), eh = (e, t) => Zp(t) ? eh(e, t.value) : Ls(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[ja(s, r) + " =>"] = o, n),
    {}
  )
} : $o(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ja(n))
} : cn(t) ? ja(t) : je(t) && !ge(t) && !Qp(t) ? String(t) : t, ja = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    cn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var qe = {};
function Xt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let gt;
class th {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = gt, !t && gt && (this.index = (gt.scopes || (gt.scopes = [])).push(
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
      const n = gt;
      try {
        return gt = this, t();
      } finally {
        gt = n;
      }
    } else qe.NODE_ENV !== "production" && Xt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = gt, gt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (gt = this.prevScope, this.prevScope = void 0);
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
function nh(e) {
  return new th(e);
}
function sh() {
  return gt;
}
function K_(e, t = !1) {
  gt ? gt.cleanups.push(e) : qe.NODE_ENV !== "production" && !t && Xt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Ke;
const Ua = /* @__PURE__ */ new WeakSet();
class oh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, gt && gt.active && gt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ua.has(this) && (Ua.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ih(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Du(this), ah(this);
    const t = Ke, n = an;
    Ke = this, an = !0;
    try {
      return this.fn();
    } finally {
      qe.NODE_ENV !== "production" && Ke !== this && Xt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), lh(this), Ke = t, an = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Dc(t);
      this.deps = this.depsTail = void 0, Du(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ua.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let rh = 0, fr, pr;
function ih(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = pr, pr = e;
    return;
  }
  e.next = fr, fr = e;
}
function Tc() {
  rh++;
}
function Nc() {
  if (--rh > 0)
    return;
  if (pr) {
    let t = pr;
    for (pr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; fr; ) {
    let t = fr;
    for (fr = void 0; t; ) {
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
function ah(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function lh(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Dc(s), z_(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Tl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ch(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ch(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sr) || (e.globalVersion = Sr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Tl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ke, s = an;
  Ke = e, an = !0;
  try {
    ah(e);
    const o = e.fn(e._value);
    (t.version === 0 || xt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ke = n, an = s, lh(e), e.flags &= -3;
  }
}
function Dc(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), qe.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Dc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function z_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let an = !0;
const uh = [];
function un() {
  uh.push(an), an = !1;
}
function dn() {
  const e = uh.pop();
  an = e === void 0 ? !0 : e;
}
function Du(e) {
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
let Sr = 0;
class q_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class da {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, qe.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Ke || !an || Ke === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ke)
      n = this.activeLink = new q_(Ke, this), Ke.deps ? (n.prevDep = Ke.depsTail, Ke.depsTail.nextDep = n, Ke.depsTail = n) : Ke.deps = Ke.depsTail = n, dh(n);
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
    this.version++, Sr++, this.notify(t);
  }
  notify(t) {
    Tc();
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
      Nc();
    }
  }
}
function dh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        dh(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), qe.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Wi = /* @__PURE__ */ new WeakMap(), Fs = Symbol(
  qe.NODE_ENV !== "production" ? "Object iterate" : ""
), Nl = Symbol(
  qe.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Cr = Symbol(
  qe.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ut(e, t, n) {
  if (an && Ke) {
    let s = Wi.get(e);
    s || Wi.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new da()), o.map = s, o.key = n), qe.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Cn(e, t, n, s, o, r) {
  const i = Wi.get(e);
  if (!i) {
    Sr++;
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
  if (Tc(), t === "clear")
    i.forEach(a);
  else {
    const c = ge(e), f = c && Cc(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((d, p) => {
        (p === "length" || p === Cr || !cn(p) && p >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Cr)), t) {
        case "add":
          c ? f && a(i.get("length")) : (a(i.get(Fs)), Ls(e) && a(i.get(Nl)));
          break;
        case "delete":
          c || (a(i.get(Fs)), Ls(e) && a(i.get(Nl)));
          break;
        case "set":
          Ls(e) && a(i.get(Fs));
          break;
      }
  }
  Nc();
}
function Y_(e, t) {
  const n = Wi.get(e);
  return n && n.get(t);
}
function ro(e) {
  const t = Te(e);
  return t === e ? t : (ut(t, "iterate", Cr), Ct(e) ? t : t.map(ht));
}
function fa(e) {
  return ut(e = Te(e), "iterate", Cr), e;
}
const X_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ha(this, Symbol.iterator, ht);
  },
  concat(...e) {
    return ro(this).concat(
      ...e.map((t) => ge(t) ? ro(t) : t)
    );
  },
  entries() {
    return Ha(this, "entries", (e) => (e[1] = ht(e[1]), e));
  },
  every(e, t) {
    return Ln(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ln(this, "filter", e, t, (n) => n.map(ht), arguments);
  },
  find(e, t) {
    return Ln(this, "find", e, t, ht, arguments);
  },
  findIndex(e, t) {
    return Ln(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ln(this, "findLast", e, t, ht, arguments);
  },
  findLastIndex(e, t) {
    return Ln(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ln(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Wa(this, "includes", e);
  },
  indexOf(...e) {
    return Wa(this, "indexOf", e);
  },
  join(e) {
    return ro(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Wa(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ln(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Jo(this, "pop");
  },
  push(...e) {
    return Jo(this, "push", e);
  },
  reduce(e, ...t) {
    return ku(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ku(this, "reduceRight", e, t);
  },
  shift() {
    return Jo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ln(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Jo(this, "splice", e);
  },
  toReversed() {
    return ro(this).toReversed();
  },
  toSorted(e) {
    return ro(this).toSorted(e);
  },
  toSpliced(...e) {
    return ro(this).toSpliced(...e);
  },
  unshift(...e) {
    return Jo(this, "unshift", e);
  },
  values() {
    return Ha(this, "values", ht);
  }
};
function Ha(e, t, n) {
  const s = fa(e), o = s[t]();
  return s !== e && !Ct(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const G_ = Array.prototype;
function Ln(e, t, n, s, o, r) {
  const i = fa(e), a = i !== e && !Ct(e), c = i[t];
  if (c !== G_[t]) {
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
function ku(e, t, n, s) {
  const o = fa(e);
  let r = n;
  return o !== e && (Ct(e) ? n.length > 3 && (r = function(i, a, c) {
    return n.call(this, i, a, c, e);
  }) : r = function(i, a, c) {
    return n.call(this, i, ht(a), c, e);
  }), o[t](r, ...s);
}
function Wa(e, t, n) {
  const s = Te(e);
  ut(s, "iterate", Cr);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Or(n[0]) ? (n[0] = Te(n[0]), s[t](...n)) : o;
}
function Jo(e, t, n = []) {
  un(), Tc();
  const s = Te(e)[t].apply(e, n);
  return Nc(), dn(), s;
}
const Q_ = /* @__PURE__ */ Xn("__proto__,__v_isRef,__isVue"), fh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(cn)
);
function J_(e) {
  cn(e) || (e = String(e));
  const t = Te(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
class ph {
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
      return s === (o ? r ? yh : _h : r ? vh : gh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = ge(t);
    if (!o) {
      let c;
      if (i && (c = X_[n]))
        return c;
      if (n === "hasOwnProperty")
        return J_;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ye(t) ? t : s
    );
    return (cn(n) ? fh.has(n) : Q_(n)) || (o || ut(t, "get", n), r) ? a : Ye(a) ? i && Cc(n) ? a : a.value : je(a) ? o ? Eh(a) : fs(a) : a;
  }
}
class hh extends ph {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const c = Rn(r);
      if (!Ct(s) && !Rn(s) && (r = Te(r), s = Te(s)), !ge(t) && Ye(r) && !Ye(s))
        return c ? !1 : (r.value = s, !0);
    }
    const i = ge(t) && Cc(n) ? Number(n) < t.length : Be(t, n), a = Reflect.set(
      t,
      n,
      s,
      Ye(t) ? t : o
    );
    return t === Te(o) && (i ? xt(s, r) && Cn(t, "set", n, s, r) : Cn(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = Be(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && Cn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!cn(n) || !fh.has(n)) && ut(t, "has", n), s;
  }
  ownKeys(t) {
    return ut(
      t,
      "iterate",
      ge(t) ? "length" : Fs
    ), Reflect.ownKeys(t);
  }
}
class mh extends ph {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return qe.NODE_ENV !== "production" && Xt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return qe.NODE_ENV !== "production" && Xt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Z_ = /* @__PURE__ */ new hh(), ey = /* @__PURE__ */ new mh(), ty = /* @__PURE__ */ new hh(!0), ny = /* @__PURE__ */ new mh(!0), Dl = (e) => e, ri = (e) => Reflect.getPrototypeOf(e);
function sy(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = Te(o), i = Ls(r), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, f = o[e](...s), u = n ? Dl : t ? Ki : ht;
    return !t && ut(
      r,
      "iterate",
      c ? Nl : Fs
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
function ii(e) {
  return function(...t) {
    if (qe.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Xt(
        `${Ks(e)} operation ${n}failed: target is readonly.`,
        Te(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function oy(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = Te(r), a = Te(o);
      e || (xt(o, a) && ut(i, "get", o), ut(i, "get", a));
      const { has: c } = ri(i), f = t ? Dl : e ? Ki : ht;
      if (c.call(i, o))
        return f(r.get(o));
      if (c.call(i, a))
        return f(r.get(a));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ut(Te(o), "iterate", Fs), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = Te(r), a = Te(o);
      return e || (xt(o, a) && ut(i, "has", o), ut(i, "has", a)), o === a ? r.has(o) : r.has(o) || r.has(a);
    },
    forEach(o, r) {
      const i = this, a = i.__v_raw, c = Te(a), f = t ? Dl : e ? Ki : ht;
      return !e && ut(c, "iterate", Fs), a.forEach((u, d) => o.call(r, f(u), f(d), i));
    }
  };
  return st(
    n,
    e ? {
      add: ii("add"),
      set: ii("set"),
      delete: ii("delete"),
      clear: ii("clear")
    } : {
      add(o) {
        !t && !Ct(o) && !Rn(o) && (o = Te(o));
        const r = Te(this);
        return ri(r).has.call(r, o) || (r.add(o), Cn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !Ct(r) && !Rn(r) && (r = Te(r));
        const i = Te(this), { has: a, get: c } = ri(i);
        let f = a.call(i, o);
        f ? qe.NODE_ENV !== "production" && xu(i, a, o) : (o = Te(o), f = a.call(i, o));
        const u = c.call(i, o);
        return i.set(o, r), f ? xt(r, u) && Cn(i, "set", o, r, u) : Cn(i, "add", o, r), this;
      },
      delete(o) {
        const r = Te(this), { has: i, get: a } = ri(r);
        let c = i.call(r, o);
        c ? qe.NODE_ENV !== "production" && xu(r, i, o) : (o = Te(o), c = i.call(r, o));
        const f = a ? a.call(r, o) : void 0, u = r.delete(o);
        return c && Cn(r, "delete", o, void 0, f), u;
      },
      clear() {
        const o = Te(this), r = o.size !== 0, i = qe.NODE_ENV !== "production" ? Ls(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return r && Cn(
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
    n[o] = sy(o, e, t);
  }), n;
}
function pa(e, t) {
  const n = oy(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Be(n, o) && o in s ? n : s,
    o,
    r
  );
}
const ry = {
  get: /* @__PURE__ */ pa(!1, !1)
}, iy = {
  get: /* @__PURE__ */ pa(!1, !0)
}, ay = {
  get: /* @__PURE__ */ pa(!0, !1)
}, ly = {
  get: /* @__PURE__ */ pa(!0, !0)
};
function xu(e, t, n) {
  const s = Te(n);
  if (s !== n && t.call(e, s)) {
    const o = Sc(e);
    Xt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const gh = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ new WeakMap(), _h = /* @__PURE__ */ new WeakMap(), yh = /* @__PURE__ */ new WeakMap();
function cy(e) {
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
function uy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : cy(Sc(e));
}
function fs(e) {
  return Rn(e) ? e : ha(
    e,
    !1,
    Z_,
    ry,
    gh
  );
}
function bh(e) {
  return ha(
    e,
    !1,
    ty,
    iy,
    vh
  );
}
function Eh(e) {
  return ha(
    e,
    !0,
    ey,
    ay,
    _h
  );
}
function Tn(e) {
  return ha(
    e,
    !0,
    ny,
    ly,
    yh
  );
}
function ha(e, t, n, s, o) {
  if (!je(e))
    return qe.NODE_ENV !== "production" && Xt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = uy(e);
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
function ln(e) {
  return Rn(e) ? ln(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Rn(e) {
  return !!(e && e.__v_isReadonly);
}
function Ct(e) {
  return !!(e && e.__v_isShallow);
}
function Or(e) {
  return e ? !!e.__v_raw : !1;
}
function Te(e) {
  const t = e && e.__v_raw;
  return t ? Te(t) : e;
}
function ls(e) {
  return !Be(e, "__v_skip") && Object.isExtensible(e) && Ar(e, "__v_skip", !0), e;
}
const ht = (e) => je(e) ? fs(e) : e, Ki = (e) => je(e) ? Eh(e) : e;
function Ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function $(e) {
  return wh(e, !1);
}
function dy(e) {
  return wh(e, !0);
}
function wh(e, t) {
  return Ye(e) ? e : new fy(e, t);
}
class fy {
  constructor(t, n) {
    this.dep = new da(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Te(t), this._value = n ? t : ht(t), this.__v_isShallow = n;
  }
  get value() {
    return qe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Ct(t) || Rn(t);
    t = s ? t : Te(t), xt(t, n) && (this._rawValue = t, this._value = s ? t : ht(t), qe.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function U(e) {
  return Ye(e) ? e.value : e;
}
const py = {
  get: (e, t, n) => t === "__v_raw" ? e : U(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ye(o) && !Ye(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ah(e) {
  return ln(e) ? e : new Proxy(e, py);
}
class hy {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new da(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function my(e) {
  return new hy(e);
}
function fn(e) {
  qe.NODE_ENV !== "production" && !Or(e) && Xt("toRefs() expects a reactive object but received a plain one.");
  const t = ge(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Sh(e, n);
  return t;
}
class gy {
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
    return Y_(Te(this._object), this._key);
  }
}
class vy {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function wi(e, t, n) {
  return Ye(e) ? e : Se(e) ? new vy(e) : je(e) && arguments.length > 1 ? Sh(e, t, n) : $(e);
}
function Sh(e, t, n) {
  const s = e[t];
  return Ye(s) ? s : new gy(e, t, n);
}
class _y {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new da(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ke !== this)
      return ih(this, !0), !0;
  }
  get value() {
    const t = qe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ch(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : qe.NODE_ENV !== "production" && Xt("Write operation failed: computed value is readonly");
  }
}
function yy(e, t, n = !1) {
  let s, o;
  return Se(e) ? s = e : (s = e.get, o = e.set), new _y(s, o, n);
}
const ai = {}, zi = /* @__PURE__ */ new WeakMap();
let Ds;
function by(e, t = !1, n = Ds) {
  if (n) {
    let s = zi.get(n);
    s || zi.set(n, s = []), s.push(e);
  } else qe.NODE_ENV !== "production" && !t && Xt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ey(e, t, n = $e) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: a, call: c } = n, f = (T) => {
    (n.onWarn || Xt)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (T) => o ? T : Ct(T) || o === !1 || o === 0 ? Hn(T, 1) : Hn(T);
  let d, p, h, g, m = !1, v = !1;
  if (Ye(e) ? (p = () => e.value, m = Ct(e)) : ln(e) ? (p = () => u(e), m = !0) : ge(e) ? (v = !0, m = e.some((T) => ln(T) || Ct(T)), p = () => e.map((T) => {
    if (Ye(T))
      return T.value;
    if (ln(T))
      return u(T);
    if (Se(T))
      return c ? c(T, 2) : T();
    qe.NODE_ENV !== "production" && f(T);
  })) : Se(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (h) {
      un();
      try {
        h();
      } finally {
        dn();
      }
    }
    const T = Ds;
    Ds = d;
    try {
      return c ? c(e, 3, [g]) : e(g);
    } finally {
      Ds = T;
    }
  } : (p = dt, qe.NODE_ENV !== "production" && f(e)), t && o) {
    const T = p, N = o === !0 ? 1 / 0 : o;
    p = () => Hn(T(), N);
  }
  const y = sh(), b = () => {
    d.stop(), y && y.active && wc(y.effects, d);
  };
  if (r && t) {
    const T = t;
    t = (...N) => {
      T(...N), b();
    };
  }
  let _ = v ? new Array(e.length).fill(ai) : ai;
  const A = (T) => {
    if (!(!(d.flags & 1) || !d.dirty && !T))
      if (t) {
        const N = d.run();
        if (o || m || (v ? N.some((x, I) => xt(x, _[I])) : xt(N, _))) {
          h && h();
          const x = Ds;
          Ds = d;
          try {
            const I = [
              N,
              // pass undefined as the old value when it's changed for the first time
              _ === ai ? void 0 : v && _[0] === ai ? [] : _,
              g
            ];
            _ = N, c ? c(t, 3, I) : (
              // @ts-expect-error
              t(...I)
            );
          } finally {
            Ds = x;
          }
        }
      } else
        d.run();
  };
  return a && a(A), d = new oh(p), d.scheduler = i ? () => i(A, !1) : A, g = (T) => by(T, !1, d), h = d.onStop = () => {
    const T = zi.get(d);
    if (T) {
      if (c)
        c(T, 4);
      else
        for (const N of T) N();
      zi.delete(d);
    }
  }, qe.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? A(!0) : _ = d.run() : i ? i(A.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function Hn(e, t = 1 / 0, n) {
  if (t <= 0 || !je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ye(e))
    Hn(e.value, t, n);
  else if (ge(e))
    for (let s = 0; s < e.length; s++)
      Hn(e[s], t, n);
  else if ($o(e) || Ls(e))
    e.forEach((s) => {
      Hn(s, t, n);
    });
  else if (Qp(e)) {
    for (const s in e)
      Hn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Hn(e[s], t, n);
  }
  return e;
}
var P = {};
const Bs = [];
function Ai(e) {
  Bs.push(e);
}
function Si() {
  Bs.pop();
}
let Ka = !1;
function ee(e, ...t) {
  if (Ka) return;
  Ka = !0, un();
  const n = Bs.length ? Bs[Bs.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = wy();
  if (s)
    jo(
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
          ({ vnode: r }) => `at <${Ea(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Ay(o)), console.warn(...r);
  }
  dn(), Ka = !1;
}
function wy() {
  let e = Bs[Bs.length - 1];
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
function Ay(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Sy(n));
  }), t;
}
function Sy({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Ea(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Cy(e.props), r] : [o + r];
}
function Cy(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Ch(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ch(e, t, n) {
  return Qe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ye(t) ? (t = Ch(e, Te(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Se(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Te(t), n ? t : [`${e}=`, t]);
}
function Oy(e, t) {
  P.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? ee(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && ee(`${t} is NaN - the duration expression might be incorrect.`));
}
const kc = {
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
function jo(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Wr(o, t, n);
  }
}
function pn(e, t, n, s) {
  if (Se(e)) {
    const o = jo(e, t, n, s);
    return o && Ac(o) && o.catch((r) => {
      Wr(r, t, n);
    }), o;
  }
  if (ge(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(pn(e[r], t, n, s));
    return o;
  } else P.NODE_ENV !== "production" && ee(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Wr(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || $e;
  if (t) {
    let a = t.parent;
    const c = t.proxy, f = P.NODE_ENV !== "production" ? kc[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      un(), jo(r, null, 10, [
        e,
        c,
        f
      ]), dn();
      return;
    }
  }
  Ty(e, n, o, s, i);
}
function Ty(e, t, n, s = !0, o = !1) {
  if (P.NODE_ENV !== "production") {
    const r = kc[t];
    if (n && Ai(n), ee(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Si(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const At = [];
let Sn = -1;
const Ao = [];
let ss = null, ho = 0;
const Oh = /* @__PURE__ */ Promise.resolve();
let qi = null;
const Ny = 100;
function qs(e) {
  const t = qi || Oh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dy(e) {
  let t = Sn + 1, n = At.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = At[s], r = Tr(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ma(e) {
  if (!(e.flags & 1)) {
    const t = Tr(e), n = At[At.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Tr(n) ? At.push(e) : At.splice(Dy(t), 0, e), e.flags |= 1, Th();
  }
}
function Th() {
  qi || (qi = Oh.then(kh));
}
function Nh(e) {
  ge(e) ? Ao.push(...e) : ss && e.id === -1 ? ss.splice(ho + 1, 0, e) : e.flags & 1 || (Ao.push(e), e.flags |= 1), Th();
}
function Ru(e, t, n = Sn + 1) {
  for (P.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < At.length; n++) {
    const s = At[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || P.NODE_ENV !== "production" && xc(t, s))
        continue;
      At.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Dh(e) {
  if (Ao.length) {
    const t = [...new Set(Ao)].sort(
      (n, s) => Tr(n) - Tr(s)
    );
    if (Ao.length = 0, ss) {
      ss.push(...t);
      return;
    }
    for (ss = t, P.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ho = 0; ho < ss.length; ho++) {
      const n = ss[ho];
      P.NODE_ENV !== "production" && xc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ss = null, ho = 0;
  }
}
const Tr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kh(e) {
  P.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = P.NODE_ENV !== "production" ? (n) => xc(e, n) : dt;
  try {
    for (Sn = 0; Sn < At.length; Sn++) {
      const n = At[Sn];
      if (n && !(n.flags & 8)) {
        if (P.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), jo(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Sn < At.length; Sn++) {
      const n = At[Sn];
      n && (n.flags &= -2);
    }
    Sn = -1, At.length = 0, Dh(e), qi = null, (At.length || Ao.length) && kh(e);
  }
}
function xc(e, t) {
  const n = e.get(t) || 0;
  if (n > Ny) {
    const s = t.i, o = s && Fc(s.type);
    return Wr(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let on = !1;
const Ci = /* @__PURE__ */ new Map();
P.NODE_ENV !== "production" && (Hr().__VUE_HMR_RUNTIME__ = {
  createRecord: za(xh),
  rerender: za(Ry),
  reload: za(Iy)
});
const Ys = /* @__PURE__ */ new Map();
function ky(e) {
  const t = e.type.__hmrId;
  let n = Ys.get(t);
  n || (xh(t, e.type), n = Ys.get(t)), n.instances.add(e);
}
function xy(e) {
  Ys.get(e.type.__hmrId).instances.delete(e);
}
function xh(e, t) {
  return Ys.has(e) ? !1 : (Ys.set(e, {
    initialDef: Yi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Yi(e) {
  return Em(e) ? e.__vccOpts : e;
}
function Ry(e, t) {
  const n = Ys.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Yi(s.type).render = t), s.renderCache = [], on = !0, s.update(), on = !1;
  }));
}
function Iy(e, t) {
  const n = Ys.get(e);
  if (!n) return;
  t = Yi(t), Iu(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Yi(r.type);
    let a = Ci.get(i);
    a || (i !== n.initialDef && Iu(i, t), Ci.set(i, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? ma(() => {
      on = !0, r.parent.update(), on = !1, a.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Nh(() => {
    Ci.clear();
  });
}
function Iu(e, t) {
  st(e, t);
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
let On, ar = [], kl = !1;
function Kr(e, ...t) {
  On ? On.emit(e, ...t) : kl || ar.push({ event: e, args: t });
}
function Rh(e, t) {
  var n, s;
  On = e, On ? (On.enabled = !0, ar.forEach(({ event: o, args: r }) => On.emit(o, ...r)), ar = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Rh(r, t);
  }), setTimeout(() => {
    On || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, kl = !0, ar = []);
  }, 3e3)) : (kl = !0, ar = []);
}
function Py(e, t) {
  Kr("app:init", e, t, {
    Fragment: we,
    Text: Yr,
    Comment: at,
    Static: gr
  });
}
function My(e) {
  Kr("app:unmount", e);
}
const Vy = /* @__PURE__ */ Rc(
  "component:added"
  /* COMPONENT_ADDED */
), Ih = /* @__PURE__ */ Rc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ly = /* @__PURE__ */ Rc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Fy = (e) => {
  On && typeof On.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !On.cleanupBuffer(e) && Ly(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Rc(e) {
  return (t) => {
    Kr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const By = /* @__PURE__ */ Ph(
  "perf:start"
  /* PERFORMANCE_START */
), $y = /* @__PURE__ */ Ph(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ph(e) {
  return (t, n, s) => {
    Kr(e, t.appContext.app, t.uid, t, n, s);
  };
}
function jy(e, t, n) {
  Kr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let rt = null, Mh = null;
function Xi(e) {
  const t = rt;
  return rt = e, Mh = e && e.type.__scopeId || null, t;
}
function pe(e, t = rt, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Gu(-1);
    const r = Xi(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Xi(r), s._d && Gu(1);
    }
    return P.NODE_ENV !== "production" && Ih(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Vh(e) {
  N_(e) && ee("Do not use built-in directive ids as custom directive id: " + e);
}
function nt(e, t) {
  if (rt === null)
    return P.NODE_ENV !== "production" && ee("withDirectives can only be used inside render functions."), e;
  const n = ba(rt), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, a, c = $e] = t[o];
    r && (Se(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Hn(i), s.push({
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
function Ss(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    r && (a.oldValue = r[i].value);
    let c = a.dir[s];
    c && (un(), pn(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), dn());
  }
}
const Lh = Symbol("_vte"), Fh = (e) => e.__isTeleport, $s = (e) => e && (e.disabled || e.disabled === ""), Pu = (e) => e && (e.defer || e.defer === ""), Mu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Vu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xl = (e, t) => {
  const n = e && e.to;
  if (Qe(n))
    if (t) {
      const s = t(n);
      return P.NODE_ENV !== "production" && !s && !$s(e) && ee(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return P.NODE_ENV !== "production" && ee(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return P.NODE_ENV !== "production" && !n && !$s(e) && ee(`Invalid Teleport target: ${n}`), n;
}, Bh = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, a, c, f) {
    const {
      mc: u,
      pc: d,
      pbc: p,
      o: { insert: h, querySelector: g, createText: m, createComment: v }
    } = f, y = $s(t.props);
    let { shapeFlag: b, children: _, dynamicChildren: A } = t;
    if (P.NODE_ENV !== "production" && on && (c = !1, A = null), e == null) {
      const T = t.el = P.NODE_ENV !== "production" ? v("teleport start") : m(""), N = t.anchor = P.NODE_ENV !== "production" ? v("teleport end") : m("");
      h(T, n, s), h(N, n, s);
      const x = (k, w) => {
        b & 16 && (o && o.isCE && (o.ce._teleportTarget = k), u(
          _,
          k,
          w,
          o,
          r,
          i,
          a,
          c
        ));
      }, I = () => {
        const k = t.target = xl(t.props, g), w = $h(k, t, m, h);
        k ? (i !== "svg" && Mu(k) ? i = "svg" : i !== "mathml" && Vu(k) && (i = "mathml"), y || (x(k, w), Oi(t, !1))) : P.NODE_ENV !== "production" && !y && ee(
          "Invalid Teleport target on mount:",
          k,
          `(${typeof k})`
        );
      };
      y && (x(n, N), Oi(t, !0)), Pu(t.props) ? (t.el.__isMounted = !1, wt(() => {
        I(), delete t.el.__isMounted;
      }, r)) : I();
    } else {
      if (Pu(t.props) && e.el.__isMounted === !1) {
        wt(() => {
          Bh.process(
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
      const T = t.anchor = e.anchor, N = t.target = e.target, x = t.targetAnchor = e.targetAnchor, I = $s(e.props), k = I ? n : N, w = I ? T : x;
      if (i === "svg" || Mu(N) ? i = "svg" : (i === "mathml" || Vu(N)) && (i = "mathml"), A ? (p(
        e.dynamicChildren,
        A,
        k,
        o,
        r,
        i,
        a
      ), mr(e, t, P.NODE_ENV === "production")) : c || d(
        e,
        t,
        k,
        w,
        o,
        r,
        i,
        a,
        !1
      ), y)
        I ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : li(
          t,
          n,
          T,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = xl(
          t.props,
          g
        );
        R ? li(
          t,
          R,
          null,
          f,
          0
        ) : P.NODE_ENV !== "production" && ee(
          "Invalid Teleport target on update:",
          N,
          `(${typeof N})`
        );
      } else I && li(
        t,
        N,
        x,
        f,
        1
      );
      Oi(t, y);
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
      const h = r || !$s(p);
      for (let g = 0; g < a.length; g++) {
        const m = a[g];
        s(
          m,
          t,
          n,
          h,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: li,
  hydrate: Uy
};
function li(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: c, children: f, props: u } = e, d = r === 2;
  if (d && s(i, t, n), (!d || $s(u)) && c & 16)
    for (let p = 0; p < f.length; p++)
      o(
        f[p],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function Uy(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: a, querySelector: c, insert: f, createText: u }
}, d) {
  const p = t.target = xl(
    t.props,
    c
  );
  if (p) {
    const h = $s(t.props), g = p._lpa || p.firstChild;
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
        let m = g;
        for (; m; ) {
          if (m && m.nodeType === 8) {
            if (m.data === "teleport start anchor")
              t.targetStart = m;
            else if (m.data === "teleport anchor") {
              t.targetAnchor = m, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          m = i(m);
        }
        t.targetAnchor || $h(p, t, u, f), d(
          g && i(g),
          t,
          p,
          n,
          s,
          o,
          r
        );
      }
    Oi(t, h);
  }
  return t.anchor && i(t.anchor);
}
const zr = Bh;
function Oi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function $h(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[Lh] = r, e && (s(o, e), s(r, e)), r;
}
const os = Symbol("_leaveCb"), ci = Symbol("_enterCb");
function Hy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Nt(() => {
    e.isMounted = !0;
  }), Yh(() => {
    e.isUnmounting = !0;
  }), e;
}
const Wt = [Function, Array], jh = {
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
}, Uh = (e) => {
  const t = e.subTree;
  return t.component ? Uh(t.component) : t;
}, Wy = {
  name: "BaseTransition",
  props: jh,
  setup(e, { slots: t }) {
    const n = Qn(), s = Hy();
    return () => {
      const o = t.default && Kh(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Hh(o), i = Te(e), { mode: a } = i;
      if (P.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && ee(`invalid <transition> mode: ${a}`), s.isLeaving)
        return qa(r);
      const c = Lu(r);
      if (!c)
        return qa(r);
      let f = Rl(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => f = d
      );
      c.type !== at && Nr(c, f);
      let u = n.subTree && Lu(n.subTree);
      if (u && u.type !== at && !Rs(c, u) && Uh(n).type !== at) {
        let d = Rl(
          u,
          i,
          s,
          n
        );
        if (Nr(u, d), a === "out-in" && c.type !== at)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, qa(r);
        a === "in-out" && c.type !== at ? d.delayLeave = (p, h, g) => {
          const m = Wh(
            s,
            u
          );
          m[String(u.key)] = u, p[os] = () => {
            h(), p[os] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            g(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Hh(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== at) {
        if (P.NODE_ENV !== "production" && n) {
          ee(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, P.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Ky = Wy;
function Wh(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Rl(e, t, n, s, o) {
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
    onLeaveCancelled: m,
    onBeforeAppear: v,
    onAppear: y,
    onAfterAppear: b,
    onAppearCancelled: _
  } = t, A = String(e.key), T = Wh(n, e), N = (k, w) => {
    k && pn(
      k,
      s,
      9,
      w
    );
  }, x = (k, w) => {
    const R = w[1];
    N(k, w), ge(k) ? k.every((C) => C.length <= 1) && R() : k.length <= 1 && R();
  }, I = {
    mode: i,
    persisted: a,
    beforeEnter(k) {
      let w = c;
      if (!n.isMounted)
        if (r)
          w = v || c;
        else
          return;
      k[os] && k[os](
        !0
        /* cancelled */
      );
      const R = T[A];
      R && Rs(e, R) && R.el[os] && R.el[os](), N(w, [k]);
    },
    enter(k) {
      let w = f, R = u, C = d;
      if (!n.isMounted)
        if (r)
          w = y || f, R = b || u, C = _ || d;
        else
          return;
      let F = !1;
      const fe = k[ci] = (X) => {
        F || (F = !0, X ? N(C, [k]) : N(R, [k]), I.delayedLeave && I.delayedLeave(), k[ci] = void 0);
      };
      w ? x(w, [k, fe]) : fe();
    },
    leave(k, w) {
      const R = String(e.key);
      if (k[ci] && k[ci](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return w();
      N(p, [k]);
      let C = !1;
      const F = k[os] = (fe) => {
        C || (C = !0, w(), fe ? N(m, [k]) : N(g, [k]), k[os] = void 0, T[R] === e && delete T[R]);
      };
      T[R] = e, h ? x(h, [k, F]) : F();
    },
    clone(k) {
      const w = Rl(
        k,
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
function qa(e) {
  if (qr(e))
    return e = In(e), e.children = null, e;
}
function Lu(e) {
  if (!qr(e))
    return Fh(e.type) && e.children ? Hh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Se(n.default))
      return n.default();
  }
}
function Nr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Nr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Kh(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === we ? (i.patchFlag & 128 && o++, s = s.concat(
      Kh(i.children, t, a)
    )) : (t || i.type !== at) && s.push(a != null ? In(i, { key: a }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  return Se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    st({ name: e.name }, t, { setup: e })
  ) : e;
}
function zh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zy = /* @__PURE__ */ new WeakSet();
function hr(e, t, n, s, o = !1) {
  if (ge(e)) {
    e.forEach(
      (g, m) => hr(
        g,
        t && (ge(t) ? t[m] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (So(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && hr(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? ba(s.component) : s.el, i = o ? null : r, { i: a, r: c } = e;
  if (P.NODE_ENV !== "production" && !a) {
    ee(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === $e ? a.refs = {} : a.refs, d = a.setupState, p = Te(d), h = d === $e ? () => !1 : (g) => P.NODE_ENV !== "production" && (Be(p, g) && !Ye(p[g]) && ee(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), zy.has(p[g])) ? !1 : Be(p, g);
  if (f != null && f !== c && (Qe(f) ? (u[f] = null, h(f) && (d[f] = null)) : Ye(f) && (f.value = null)), Se(c))
    jo(c, a, 12, [i, u]);
  else {
    const g = Qe(c), m = Ye(c);
    if (g || m) {
      const v = () => {
        if (e.f) {
          const y = g ? h(c) ? d[c] : u[c] : c.value;
          o ? ge(y) && wc(y, r) : ge(y) ? y.includes(r) || y.push(r) : g ? (u[c] = [r], h(c) && (d[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else g ? (u[c] = i, h(c) && (d[c] = i)) : m ? (c.value = i, e.k && (u[e.k] = i)) : P.NODE_ENV !== "production" && ee("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (v.id = -1, wt(v, n)) : v();
    } else P.NODE_ENV !== "production" && ee("Invalid template ref type:", c, `(${typeof c})`);
  }
}
Hr().requestIdleCallback;
Hr().cancelIdleCallback;
const So = (e) => !!e.type.__asyncLoader, qr = (e) => e.type.__isKeepAlive;
function qy(e, t) {
  qh(e, "a", t);
}
function Yy(e, t) {
  qh(e, "da", t);
}
function qh(e, t, n = ct) {
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
      qr(o.parent.vnode) && Xy(s, t, n, o), o = o.parent;
  }
}
function Xy(e, t, n, s) {
  const o = ga(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Uo(() => {
    wc(s[t], o);
  }, n);
}
function ga(e, t, n = ct, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      un();
      const a = Xr(n), c = pn(t, n, e, i);
      return a(), dn(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (P.NODE_ENV !== "production") {
    const o = Ns(kc[e].replace(/ hook$/, ""));
    ee(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Gn = (e) => (t, n = ct) => {
  (!kr || e === "sp") && ga(e, (...s) => t(...s), n);
}, Gy = Gn("bm"), Nt = Gn("m"), Qy = Gn(
  "bu"
), Jy = Gn("u"), Yh = Gn(
  "bum"
), Uo = Gn("um"), Zy = Gn(
  "sp"
), eb = Gn("rtg"), tb = Gn("rtc");
function nb(e, t = ct) {
  ga("ec", e, t);
}
const Il = "components", sb = "directives";
function Je(e, t) {
  return Xh(Il, e, !0, t) || e;
}
const ob = Symbol.for("v-ndc");
function rb(e) {
  return Xh(sb, e);
}
function Xh(e, t, n = !0, s = !1) {
  const o = rt || ct;
  if (o) {
    const r = o.type;
    if (e === Il) {
      const a = Fc(
        r,
        !1
      );
      if (a && (a === t || a === yt(t) || a === Ks(yt(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Fu(o[e] || r[e], t) || // global registration
      Fu(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (P.NODE_ENV !== "production" && n && !i) {
      const a = e === Il ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      ee(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else P.NODE_ENV !== "production" && ee(
    `resolve${Ks(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Fu(e, t) {
  return e && (e[t] || e[yt(t)] || e[Ks(yt(t))]);
}
function Xe(e, t, n, s) {
  let o;
  const r = n, i = ge(e);
  if (i || Qe(e)) {
    const a = i && ln(e);
    let c = !1, f = !1;
    a && (c = !Ct(e), f = Rn(e), e = fa(e)), o = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      o[u] = t(
        c ? f ? Ki(ht(e[u])) : ht(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    P.NODE_ENV !== "production" && !Number.isInteger(e) && ee(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, r);
  } else if (je(e))
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
  if (rt.ce || rt.parent && So(rt.parent) && rt.parent.ce)
    return t !== "default" && (n.name = t), S(), Ze(
      we,
      null,
      [ce("slot", n, s && s())],
      64
    );
  let r = e[t];
  P.NODE_ENV !== "production" && r && r.length > 1 && (ee(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), S();
  const i = r && Gh(r(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = Ze(
    we,
    {
      key: (a && !cn(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), r && r._c && (r._d = !0), c;
}
function Gh(e) {
  return e.some((t) => Xs(t) ? !(t.type === at || t.type === we && !Gh(t.children)) : !0) ? e : null;
}
const Pl = (e) => e ? ym(e) ? ba(e) : Pl(e.parent) : null, js = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ st(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => P.NODE_ENV !== "production" ? Tn(e.props) : e.props,
    $attrs: (e) => P.NODE_ENV !== "production" ? Tn(e.attrs) : e.attrs,
    $slots: (e) => P.NODE_ENV !== "production" ? Tn(e.slots) : e.slots,
    $refs: (e) => P.NODE_ENV !== "production" ? Tn(e.refs) : e.refs,
    $parent: (e) => Pl(e.parent),
    $root: (e) => Pl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ma(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qs.bind(e.proxy)),
    $watch: (e) => Bb.bind(e)
  })
), Ic = (e) => e === "_" || e === "$", Ya = (e, t) => e !== $e && !e.__isScriptSetup && Be(e, t), Qh = {
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
        if (Ya(s, t))
          return i[t] = 1, s[t];
        if (o !== $e && Be(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Be(f, t)
        )
          return i[t] = 3, r[t];
        if (n !== $e && Be(n, t))
          return i[t] = 4, n[t];
        Ml && (i[t] = 0);
      }
    }
    const u = js[t];
    let d, p;
    if (u)
      return t === "$attrs" ? (ut(e.attrs, "get", ""), P.NODE_ENV !== "production" && Ji()) : P.NODE_ENV !== "production" && t === "$slots" && ut(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== $e && Be(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, Be(p, t)
    )
      return p[t];
    P.NODE_ENV !== "production" && rt && (!Qe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== $e && Ic(t[0]) && Be(o, t) ? ee(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === rt && ee(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Ya(o, t) ? (o[t] = n, !0) : P.NODE_ENV !== "production" && o.__isScriptSetup && Be(o, t) ? (ee(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== $e && Be(s, t) ? (s[t] = n, !0) : Be(e.props, t) ? (P.NODE_ENV !== "production" && ee(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (P.NODE_ENV !== "production" && ee(
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
    return !!n[i] || e !== $e && Be(e, i) || Ya(t, i) || (a = r[0]) && Be(a, i) || Be(s, i) || Be(js, i) || Be(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Be(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
P.NODE_ENV !== "production" && (Qh.ownKeys = (e) => (ee(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ib(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(js).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => js[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: dt
    });
  }), t;
}
function ab(e) {
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
function lb(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Te(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Ic(s[0])) {
        ee(
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
function Bu(e) {
  return ge(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function cb() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? ee(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ml = !0;
function ub(e) {
  const t = Zh(e), n = e.proxy, s = e.ctx;
  Ml = !1, t.beforeCreate && $u(t.beforeCreate, e, "bc");
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
    activated: m,
    deactivated: v,
    beforeDestroy: y,
    beforeUnmount: b,
    destroyed: _,
    unmounted: A,
    render: T,
    renderTracked: N,
    renderTriggered: x,
    errorCaptured: I,
    serverPrefetch: k,
    // public API
    expose: w,
    inheritAttrs: R,
    // assets
    components: C,
    directives: F,
    filters: fe
  } = t, X = P.NODE_ENV !== "production" ? cb() : null;
  if (P.NODE_ENV !== "production") {
    const [z] = e.propsOptions;
    if (z)
      for (const de in z)
        X("Props", de);
  }
  if (f && db(f, s, X), i)
    for (const z in i) {
      const de = i[z];
      Se(de) ? (P.NODE_ENV !== "production" ? Object.defineProperty(s, z, {
        value: de.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[z] = de.bind(n), P.NODE_ENV !== "production" && X("Methods", z)) : P.NODE_ENV !== "production" && ee(
        `Method "${z}" has type "${typeof de}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    P.NODE_ENV !== "production" && !Se(o) && ee(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = o.call(n, n);
    if (P.NODE_ENV !== "production" && Ac(z) && ee(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !je(z))
      P.NODE_ENV !== "production" && ee("data() should return an object.");
    else if (e.data = fs(z), P.NODE_ENV !== "production")
      for (const de in z)
        X("Data", de), Ic(de[0]) || Object.defineProperty(s, de, {
          configurable: !0,
          enumerable: !0,
          get: () => z[de],
          set: dt
        });
  }
  if (Ml = !0, r)
    for (const z in r) {
      const de = r[z], be = Se(de) ? de.bind(n, n) : Se(de.get) ? de.get.bind(n, n) : dt;
      P.NODE_ENV !== "production" && be === dt && ee(`Computed property "${z}" has no getter.`);
      const et = !Se(de) && Se(de.set) ? de.set.bind(n) : P.NODE_ENV !== "production" ? () => {
        ee(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : dt, K = j({
        get: be,
        set: et
      });
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => K.value,
        set: (oe) => K.value = oe
      }), P.NODE_ENV !== "production" && X("Computed", z);
    }
  if (a)
    for (const z in a)
      Jh(a[z], s, n, z);
  if (c) {
    const z = Se(c) ? c.call(n) : c;
    Reflect.ownKeys(z).forEach((de) => {
      Ti(de, z[de]);
    });
  }
  u && $u(u, e, "c");
  function re(z, de) {
    ge(de) ? de.forEach((be) => z(be.bind(n))) : de && z(de.bind(n));
  }
  if (re(Gy, d), re(Nt, p), re(Qy, h), re(Jy, g), re(qy, m), re(Yy, v), re(nb, I), re(tb, N), re(eb, x), re(Yh, b), re(Uo, A), re(Zy, k), ge(w))
    if (w.length) {
      const z = e.exposed || (e.exposed = {});
      w.forEach((de) => {
        Object.defineProperty(z, de, {
          get: () => n[de],
          set: (be) => n[de] = be
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === dt && (e.render = T), R != null && (e.inheritAttrs = R), C && (e.components = C), F && (e.directives = F), k && zh(e);
}
function db(e, t, n = dt) {
  ge(e) && (e = Vl(e));
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
    }) : t[s] = r, P.NODE_ENV !== "production" && n("Inject", s);
  }
}
function $u(e, t, n) {
  pn(
    ge(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Jh(e, t, n, s) {
  let o = s.includes(".") ? um(n, s) : () => n[s];
  if (Qe(e)) {
    const r = t[e];
    Se(r) ? mt(o, r) : P.NODE_ENV !== "production" && ee(`Invalid watch handler specified by key "${e}"`, r);
  } else if (Se(e))
    mt(o, e.bind(n));
  else if (je(e))
    if (ge(e))
      e.forEach((r) => Jh(r, t, n, s));
    else {
      const r = Se(e.handler) ? e.handler.bind(n) : t[e.handler];
      Se(r) ? mt(o, r, e) : P.NODE_ENV !== "production" && ee(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else P.NODE_ENV !== "production" && ee(`Invalid watch option: "${s}"`, e);
}
function Zh(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (f) => Gi(c, f, i, !0)
  ), Gi(c, t, i)), je(t) && r.set(t, c), c;
}
function Gi(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Gi(e, r, n, !0), o && o.forEach(
    (i) => Gi(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      P.NODE_ENV !== "production" && ee(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = fb[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const fb = {
  data: ju,
  props: Uu,
  emits: Uu,
  // objects
  methods: lr,
  computed: lr,
  // lifecycle
  beforeCreate: Et,
  created: Et,
  beforeMount: Et,
  mounted: Et,
  beforeUpdate: Et,
  updated: Et,
  beforeDestroy: Et,
  beforeUnmount: Et,
  destroyed: Et,
  unmounted: Et,
  activated: Et,
  deactivated: Et,
  errorCaptured: Et,
  serverPrefetch: Et,
  // assets
  components: lr,
  directives: lr,
  // watch
  watch: hb,
  // provide / inject
  provide: ju,
  inject: pb
};
function ju(e, t) {
  return t ? e ? function() {
    return st(
      Se(e) ? e.call(this, this) : e,
      Se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function pb(e, t) {
  return lr(Vl(e), Vl(t));
}
function Vl(e) {
  if (ge(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Et(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function lr(e, t) {
  return e ? st(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Uu(e, t) {
  return e ? ge(e) && ge(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : st(
    /* @__PURE__ */ Object.create(null),
    Bu(e),
    Bu(t ?? {})
  ) : t;
}
function hb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = st(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Et(e[s], t[s]);
  return n;
}
function em() {
  return {
    app: null,
    config: {
      isNativeTag: O_,
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
let mb = 0;
function gb(e, t) {
  return function(s, o = null) {
    Se(s) || (s = st({}, s)), o != null && !je(o) && (P.NODE_ENV !== "production" && ee("root props passed to app.mount() must be an object."), o = null);
    const r = em(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const f = r.app = {
      _uid: mb++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: ed,
      get config() {
        return r.config;
      },
      set config(u) {
        P.NODE_ENV !== "production" && ee(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return i.has(u) ? P.NODE_ENV !== "production" && ee("Plugin has already been applied to target app.") : u && Se(u.install) ? (i.add(u), u.install(f, ...d)) : Se(u) ? (i.add(u), u(f, ...d)) : P.NODE_ENV !== "production" && ee(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? P.NODE_ENV !== "production" && ee(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, d) {
        return P.NODE_ENV !== "production" && Ul(u, r.config), d ? (P.NODE_ENV !== "production" && r.components[u] && ee(`Component "${u}" has already been registered in target app.`), r.components[u] = d, f) : r.components[u];
      },
      directive(u, d) {
        return P.NODE_ENV !== "production" && Vh(u), d ? (P.NODE_ENV !== "production" && r.directives[u] && ee(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, f) : r.directives[u];
      },
      mount(u, d, p) {
        if (c)
          P.NODE_ENV !== "production" && ee(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          P.NODE_ENV !== "production" && u.__vue_app__ && ee(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = f._ceVNode || ce(s, o);
          return h.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), P.NODE_ENV !== "production" && (r.reload = () => {
            const g = In(h);
            g.el = null, e(g, u, p);
          }), e(h, u, p), c = !0, f._container = u, u.__vue_app__ = f, P.NODE_ENV !== "production" && (f._instance = h.component, Py(f, ed)), ba(h.component);
        }
      },
      onUnmount(u) {
        P.NODE_ENV !== "production" && typeof u != "function" && ee(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        c ? (pn(
          a,
          f._instance,
          16
        ), e(null, f._container), P.NODE_ENV !== "production" && (f._instance = null, My(f)), delete f._container.__vue_app__) : P.NODE_ENV !== "production" && ee("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return P.NODE_ENV !== "production" && u in r.provides && (Be(r.provides, u) ? ee(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : ee(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = d, f;
      },
      runWithContext(u) {
        const d = Us;
        Us = f;
        try {
          return u();
        } finally {
          Us = d;
        }
      }
    };
    return f;
  };
}
let Us = null;
function Ti(e, t) {
  if (!ct)
    P.NODE_ENV !== "production" && ee("provide() can only be used inside setup().");
  else {
    let n = ct.provides;
    const s = ct.parent && ct.parent.provides;
    s === n && (n = ct.provides = Object.create(s)), n[e] = t;
  }
}
function Bt(e, t, n = !1) {
  const s = ct || rt;
  if (s || Us) {
    let o = Us ? Us._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Se(t) ? t.call(s && s.proxy) : t;
    P.NODE_ENV !== "production" && ee(`injection "${String(e)}" not found.`);
  } else P.NODE_ENV !== "production" && ee("inject() can only be used inside setup() or functional components.");
}
function vb() {
  return !!(ct || rt || Us);
}
const tm = {}, nm = () => Object.create(tm), sm = (e) => Object.getPrototypeOf(e) === tm;
function _b(e, t, n, s = !1) {
  const o = {}, r = nm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), om(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  P.NODE_ENV !== "production" && im(t || {}, o, e), n ? e.props = s ? o : bh(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function yb(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function bb(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, a = Te(o), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(P.NODE_ENV !== "production" && yb(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (ya(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (c)
          if (Be(r, p))
            h !== r[p] && (r[p] = h, f = !0);
          else {
            const g = yt(p);
            o[g] = Ll(
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
    om(e, t, o, r) && (f = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !Be(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = qn(d)) === d || !Be(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[d] = Ll(
        c,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (r !== a)
      for (const d in r)
        (!t || !Be(t, d)) && (delete r[d], f = !0);
  }
  f && Cn(e.attrs, "set", ""), P.NODE_ENV !== "production" && im(t || {}, o, e);
}
function om(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (dr(c))
        continue;
      const f = t[c];
      let u;
      o && Be(o, u = yt(c)) ? !r || !r.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : ya(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, i = !0);
    }
  if (r) {
    const c = Te(n), f = a || $e;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Ll(
        o,
        c,
        d,
        f[d],
        e,
        !Be(f, d)
      );
    }
  }
  return i;
}
function Ll(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const a = Be(i, "default");
    if (a && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && Se(c)) {
        const { propsDefaults: f } = o;
        if (n in f)
          s = f[n];
        else {
          const u = Xr(o);
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
    ] && (s === "" || s === qn(n)) && (s = !0));
  }
  return s;
}
const Eb = /* @__PURE__ */ new WeakMap();
function rm(e, t, n = !1) {
  const s = n ? Eb : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let c = !1;
  if (!Se(e)) {
    const u = (d) => {
      c = !0;
      const [p, h] = rm(d, t, !0);
      st(i, p), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return je(e) && s.set(e, wo), wo;
  if (ge(r))
    for (let u = 0; u < r.length; u++) {
      P.NODE_ENV !== "production" && !Qe(r[u]) && ee("props must be strings when using array syntax.", r[u]);
      const d = yt(r[u]);
      Hu(d) && (i[d] = $e);
    }
  else if (r) {
    P.NODE_ENV !== "production" && !je(r) && ee("invalid props options", r);
    for (const u in r) {
      const d = yt(u);
      if (Hu(d)) {
        const p = r[u], h = i[d] = ge(p) || Se(p) ? { type: p } : st({}, p), g = h.type;
        let m = !1, v = !0;
        if (ge(g))
          for (let y = 0; y < g.length; ++y) {
            const b = g[y], _ = Se(b) && b.name;
            if (_ === "Boolean") {
              m = !0;
              break;
            } else _ === "String" && (v = !1);
          }
        else
          m = Se(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = v, (m || Be(h, "default")) && a.push(d);
      }
    }
  }
  const f = [i, a];
  return je(e) && s.set(e, f), f;
}
function Hu(e) {
  return e[0] !== "$" && !dr(e) ? !0 : (P.NODE_ENV !== "production" && ee(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function wb(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function im(e, t, n) {
  const s = Te(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => yt(i));
  for (const i in o) {
    let a = o[i];
    a != null && Ab(
      i,
      s[i],
      a,
      P.NODE_ENV !== "production" ? Tn(s) : s,
      !r.includes(i)
    );
  }
}
function Ab(e, t, n, s, o) {
  const { type: r, required: i, validator: a, skipCheck: c } = n;
  if (i && o) {
    ee('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let f = !1;
      const u = ge(r) ? r : [r], d = [];
      for (let p = 0; p < u.length && !f; p++) {
        const { valid: h, expectedType: g } = Cb(t, u[p]);
        d.push(g || ""), f = h;
      }
      if (!f) {
        ee(Ob(e, t, d));
        return;
      }
    }
    a && !a(t, s) && ee('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Sb = /* @__PURE__ */ Xn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Cb(e, t) {
  let n;
  const s = wb(t);
  if (s === "null")
    n = e === null;
  else if (Sb(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = je(e) : s === "Array" ? n = ge(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Ob(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ks).join(" | ")}`;
  const o = n[0], r = Sc(t), i = Wu(t, o), a = Wu(t, r);
  return n.length === 1 && Ku(o) && !Tb(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Ku(r) && (s += `with value ${a}.`), s;
}
function Wu(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ku(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Tb(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Pc = (e) => e[0] === "_" || e === "$stable", Mc = (e) => ge(e) ? e.map(sn) : [sn(e)], Nb = (e, t, n) => {
  if (t._n)
    return t;
  const s = pe((...o) => (P.NODE_ENV !== "production" && ct && !(n === null && rt) && !(n && n.root !== ct.root) && ee(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Mc(t(...o))), n);
  return s._c = !1, s;
}, am = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Pc(o)) continue;
    const r = e[o];
    if (Se(r))
      t[o] = Nb(o, r, s);
    else if (r != null) {
      P.NODE_ENV !== "production" && ee(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Mc(r);
      t[o] = () => i;
    }
  }
}, lm = (e, t) => {
  P.NODE_ENV !== "production" && !qr(e.vnode) && ee(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Mc(t);
  e.slots.default = () => n;
}, Fl = (e, t, n) => {
  for (const s in t)
    (n || !Pc(s)) && (e[s] = t[s]);
}, Db = (e, t, n) => {
  const s = e.slots = nm();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && Ar(s, "__", o, !0);
    const r = t._;
    r ? (Fl(s, t, n), n && Ar(s, "_", r, !0)) : am(t, s);
  } else t && lm(e, t);
}, kb = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = $e;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? P.NODE_ENV !== "production" && on ? (Fl(o, t, n), Cn(e, "set", "$slots")) : n && a === 1 ? r = !1 : Fl(o, t, n) : (r = !t.$stable, am(t, o)), i = t;
  } else t && (lm(e, t), i = { default: 1 });
  if (r)
    for (const a in o)
      !Pc(a) && i[a] == null && delete o[a];
};
let Zo, as;
function io(e, t) {
  e.appContext.config.performance && Qi() && as.mark(`vue-${t}-${e.uid}`), P.NODE_ENV !== "production" && By(e, t, Qi() ? as.now() : Date.now());
}
function ao(e, t) {
  if (e.appContext.config.performance && Qi()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    as.mark(s), as.measure(
      `<${Ea(e, e.type)}> ${t}`,
      n,
      s
    ), as.clearMarks(n), as.clearMarks(s);
  }
  P.NODE_ENV !== "production" && $y(e, t, Qi() ? as.now() : Date.now());
}
function Qi() {
  return Zo !== void 0 || (typeof window < "u" && window.performance ? (Zo = !0, as = window.performance) : Zo = !1), Zo;
}
function xb() {
  const e = [];
  if (P.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const wt = zb;
function Rb(e) {
  return Ib(e);
}
function Ib(e, t) {
  xb();
  const n = Hr();
  n.__VUE__ = !0, P.NODE_ENV !== "production" && Rh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
  } = e, m = (E, O, V, q = null, W = null, Y = null, ae = void 0, te = null, ne = P.NODE_ENV !== "production" && on ? !1 : !!O.dynamicChildren) => {
    if (E === O)
      return;
    E && !Rs(E, O) && (q = J(E), he(E, W, Y, !0), E = null), O.patchFlag === -2 && (ne = !1, O.dynamicChildren = null);
    const { type: Z, ref: ye, shapeFlag: ie } = O;
    switch (Z) {
      case Yr:
        v(E, O, V, q);
        break;
      case at:
        y(E, O, V, q);
        break;
      case gr:
        E == null ? b(O, V, q, ae) : P.NODE_ENV !== "production" && _(E, O, V, ae);
        break;
      case we:
        F(
          E,
          O,
          V,
          q,
          W,
          Y,
          ae,
          te,
          ne
        );
        break;
      default:
        ie & 1 ? N(
          E,
          O,
          V,
          q,
          W,
          Y,
          ae,
          te,
          ne
        ) : ie & 6 ? fe(
          E,
          O,
          V,
          q,
          W,
          Y,
          ae,
          te,
          ne
        ) : ie & 64 || ie & 128 ? Z.process(
          E,
          O,
          V,
          q,
          W,
          Y,
          ae,
          te,
          ne,
          Ie
        ) : P.NODE_ENV !== "production" && ee("Invalid VNode type:", Z, `(${typeof Z})`);
    }
    ye != null && W ? hr(ye, E && E.ref, Y, O || E, !O) : ye == null && E && E.ref != null && hr(E.ref, null, Y, E, !0);
  }, v = (E, O, V, q) => {
    if (E == null)
      s(
        O.el = a(O.children),
        V,
        q
      );
    else {
      const W = O.el = E.el;
      O.children !== E.children && f(W, O.children);
    }
  }, y = (E, O, V, q) => {
    E == null ? s(
      O.el = c(O.children || ""),
      V,
      q
    ) : O.el = E.el;
  }, b = (E, O, V, q) => {
    [E.el, E.anchor] = g(
      E.children,
      O,
      V,
      q,
      E.el,
      E.anchor
    );
  }, _ = (E, O, V, q) => {
    if (O.children !== E.children) {
      const W = p(E.anchor);
      T(E), [O.el, O.anchor] = g(
        O.children,
        V,
        W,
        q
      );
    } else
      O.el = E.el, O.anchor = E.anchor;
  }, A = ({ el: E, anchor: O }, V, q) => {
    let W;
    for (; E && E !== O; )
      W = p(E), s(E, V, q), E = W;
    s(O, V, q);
  }, T = ({ el: E, anchor: O }) => {
    let V;
    for (; E && E !== O; )
      V = p(E), o(E), E = V;
    o(O);
  }, N = (E, O, V, q, W, Y, ae, te, ne) => {
    O.type === "svg" ? ae = "svg" : O.type === "math" && (ae = "mathml"), E == null ? x(
      O,
      V,
      q,
      W,
      Y,
      ae,
      te,
      ne
    ) : w(
      E,
      O,
      W,
      Y,
      ae,
      te,
      ne
    );
  }, x = (E, O, V, q, W, Y, ae, te) => {
    let ne, Z;
    const { props: ye, shapeFlag: ie, transition: _e, dirs: Oe } = E;
    if (ne = E.el = i(
      E.type,
      Y,
      ye && ye.is,
      ye
    ), ie & 8 ? u(ne, E.children) : ie & 16 && k(
      E.children,
      ne,
      null,
      q,
      W,
      Xa(E, Y),
      ae,
      te
    ), Oe && Ss(E, null, q, "created"), I(ne, E, E.scopeId, ae, q), ye) {
      for (const We in ye)
        We !== "value" && !dr(We) && r(ne, We, null, ye[We], Y, q);
      "value" in ye && r(ne, "value", null, ye.value, Y), (Z = ye.onVnodeBeforeMount) && En(Z, q, E);
    }
    P.NODE_ENV !== "production" && (Ar(ne, "__vnode", E, !0), Ar(ne, "__vueParentComponent", q, !0)), Oe && Ss(E, null, q, "beforeMount");
    const Ve = Pb(W, _e);
    Ve && _e.beforeEnter(ne), s(ne, O, V), ((Z = ye && ye.onVnodeMounted) || Ve || Oe) && wt(() => {
      Z && En(Z, q, E), Ve && _e.enter(ne), Oe && Ss(E, null, q, "mounted");
    }, W);
  }, I = (E, O, V, q, W) => {
    if (V && h(E, V), q)
      for (let Y = 0; Y < q.length; Y++)
        h(E, q[Y]);
    if (W) {
      let Y = W.subTree;
      if (P.NODE_ENV !== "production" && Y.patchFlag > 0 && Y.patchFlag & 2048 && (Y = Vc(Y.children) || Y), O === Y || hm(Y.type) && (Y.ssContent === O || Y.ssFallback === O)) {
        const ae = W.vnode;
        I(
          E,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          W.parent
        );
      }
    }
  }, k = (E, O, V, q, W, Y, ae, te, ne = 0) => {
    for (let Z = ne; Z < E.length; Z++) {
      const ye = E[Z] = te ? rs(E[Z]) : sn(E[Z]);
      m(
        null,
        ye,
        O,
        V,
        q,
        W,
        Y,
        ae,
        te
      );
    }
  }, w = (E, O, V, q, W, Y, ae) => {
    const te = O.el = E.el;
    P.NODE_ENV !== "production" && (te.__vnode = O);
    let { patchFlag: ne, dynamicChildren: Z, dirs: ye } = O;
    ne |= E.patchFlag & 16;
    const ie = E.props || $e, _e = O.props || $e;
    let Oe;
    if (V && Cs(V, !1), (Oe = _e.onVnodeBeforeUpdate) && En(Oe, V, O, E), ye && Ss(O, E, V, "beforeUpdate"), V && Cs(V, !0), P.NODE_ENV !== "production" && on && (ne = 0, ae = !1, Z = null), (ie.innerHTML && _e.innerHTML == null || ie.textContent && _e.textContent == null) && u(te, ""), Z ? (R(
      E.dynamicChildren,
      Z,
      te,
      V,
      q,
      Xa(O, W),
      Y
    ), P.NODE_ENV !== "production" && mr(E, O)) : ae || be(
      E,
      O,
      te,
      null,
      V,
      q,
      Xa(O, W),
      Y,
      !1
    ), ne > 0) {
      if (ne & 16)
        C(te, ie, _e, V, W);
      else if (ne & 2 && ie.class !== _e.class && r(te, "class", null, _e.class, W), ne & 4 && r(te, "style", ie.style, _e.style, W), ne & 8) {
        const Ve = O.dynamicProps;
        for (let We = 0; We < Ve.length; We++) {
          const ze = Ve[We], Dt = ie[ze], kt = _e[ze];
          (kt !== Dt || ze === "value") && r(te, ze, Dt, kt, W, V);
        }
      }
      ne & 1 && E.children !== O.children && u(te, O.children);
    } else !ae && Z == null && C(te, ie, _e, V, W);
    ((Oe = _e.onVnodeUpdated) || ye) && wt(() => {
      Oe && En(Oe, V, O, E), ye && Ss(O, E, V, "updated");
    }, q);
  }, R = (E, O, V, q, W, Y, ae) => {
    for (let te = 0; te < O.length; te++) {
      const ne = E[te], Z = O[te], ye = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rs(ne, Z) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? d(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      m(
        ne,
        Z,
        ye,
        null,
        q,
        W,
        Y,
        ae,
        !0
      );
    }
  }, C = (E, O, V, q, W) => {
    if (O !== V) {
      if (O !== $e)
        for (const Y in O)
          !dr(Y) && !(Y in V) && r(
            E,
            Y,
            O[Y],
            null,
            W,
            q
          );
      for (const Y in V) {
        if (dr(Y)) continue;
        const ae = V[Y], te = O[Y];
        ae !== te && Y !== "value" && r(E, Y, te, ae, W, q);
      }
      "value" in V && r(E, "value", O.value, V.value, W);
    }
  }, F = (E, O, V, q, W, Y, ae, te, ne) => {
    const Z = O.el = E ? E.el : a(""), ye = O.anchor = E ? E.anchor : a("");
    let { patchFlag: ie, dynamicChildren: _e, slotScopeIds: Oe } = O;
    P.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (on || ie & 2048) && (ie = 0, ne = !1, _e = null), Oe && (te = te ? te.concat(Oe) : Oe), E == null ? (s(Z, V, q), s(ye, V, q), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      V,
      ye,
      W,
      Y,
      ae,
      te,
      ne
    )) : ie > 0 && ie & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (R(
      E.dynamicChildren,
      _e,
      V,
      W,
      Y,
      ae,
      te
    ), P.NODE_ENV !== "production" ? mr(E, O) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (O.key != null || W && O === W.subTree) && mr(
        E,
        O,
        !0
        /* shallow */
      )
    )) : be(
      E,
      O,
      V,
      ye,
      W,
      Y,
      ae,
      te,
      ne
    );
  }, fe = (E, O, V, q, W, Y, ae, te, ne) => {
    O.slotScopeIds = te, E == null ? O.shapeFlag & 512 ? W.ctx.activate(
      O,
      V,
      q,
      ae,
      ne
    ) : X(
      O,
      V,
      q,
      W,
      Y,
      ae,
      ne
    ) : re(E, O, ne);
  }, X = (E, O, V, q, W, Y, ae) => {
    const te = E.component = Qb(
      E,
      q,
      W
    );
    if (P.NODE_ENV !== "production" && te.type.__hmrId && ky(te), P.NODE_ENV !== "production" && (Ai(E), io(te, "mount")), qr(E) && (te.ctx.renderer = Ie), P.NODE_ENV !== "production" && io(te, "init"), Zb(te, !1, ae), P.NODE_ENV !== "production" && ao(te, "init"), P.NODE_ENV !== "production" && on && (E.el = null), te.asyncDep) {
      if (W && W.registerDep(te, z, ae), !E.el) {
        const ne = te.subTree = ce(at);
        y(null, ne, O, V);
      }
    } else
      z(
        te,
        E,
        O,
        V,
        W,
        Y,
        ae
      );
    P.NODE_ENV !== "production" && (Si(), ao(te, "mount"));
  }, re = (E, O, V) => {
    const q = O.component = E.component;
    if (Wb(E, O, V))
      if (q.asyncDep && !q.asyncResolved) {
        P.NODE_ENV !== "production" && Ai(O), de(q, O, V), P.NODE_ENV !== "production" && Si();
        return;
      } else
        q.next = O, q.update();
    else
      O.el = E.el, q.vnode = O;
  }, z = (E, O, V, q, W, Y, ae) => {
    const te = () => {
      if (E.isMounted) {
        let { next: ie, bu: _e, u: Oe, parent: Ve, vnode: We } = E;
        {
          const yn = cm(E);
          if (yn) {
            ie && (ie.el = We.el, de(E, ie, ae)), yn.asyncDep.then(() => {
              E.isUnmounted || te();
            });
            return;
          }
        }
        let ze = ie, Dt;
        P.NODE_ENV !== "production" && Ai(ie || E.vnode), Cs(E, !1), ie ? (ie.el = We.el, de(E, ie, ae)) : ie = We, _e && po(_e), (Dt = ie.props && ie.props.onVnodeBeforeUpdate) && En(Dt, Ve, ie, We), Cs(E, !0), P.NODE_ENV !== "production" && io(E, "render");
        const kt = qu(E);
        P.NODE_ENV !== "production" && ao(E, "render");
        const _n = E.subTree;
        E.subTree = kt, P.NODE_ENV !== "production" && io(E, "patch"), m(
          _n,
          kt,
          // parent may have changed if it's in a teleport
          d(_n.el),
          // anchor may have changed if it's in a fragment
          J(_n),
          E,
          W,
          Y
        ), P.NODE_ENV !== "production" && ao(E, "patch"), ie.el = kt.el, ze === null && Kb(E, kt.el), Oe && wt(Oe, W), (Dt = ie.props && ie.props.onVnodeUpdated) && wt(
          () => En(Dt, Ve, ie, We),
          W
        ), P.NODE_ENV !== "production" && Ih(E), P.NODE_ENV !== "production" && Si();
      } else {
        let ie;
        const { el: _e, props: Oe } = O, { bm: Ve, m: We, parent: ze, root: Dt, type: kt } = E, _n = So(O);
        Cs(E, !1), Ve && po(Ve), !_n && (ie = Oe && Oe.onVnodeBeforeMount) && En(ie, ze, O), Cs(E, !0);
        {
          Dt.ce && // @ts-expect-error _def is private
          Dt.ce._def.shadowRoot !== !1 && Dt.ce._injectChildStyle(kt), P.NODE_ENV !== "production" && io(E, "render");
          const yn = E.subTree = qu(E);
          P.NODE_ENV !== "production" && ao(E, "render"), P.NODE_ENV !== "production" && io(E, "patch"), m(
            null,
            yn,
            V,
            q,
            E,
            W,
            Y
          ), P.NODE_ENV !== "production" && ao(E, "patch"), O.el = yn.el;
        }
        if (We && wt(We, W), !_n && (ie = Oe && Oe.onVnodeMounted)) {
          const yn = O;
          wt(
            () => En(ie, ze, yn),
            W
          );
        }
        (O.shapeFlag & 256 || ze && So(ze.vnode) && ze.vnode.shapeFlag & 256) && E.a && wt(E.a, W), E.isMounted = !0, P.NODE_ENV !== "production" && Vy(E), O = V = q = null;
      }
    };
    E.scope.on();
    const ne = E.effect = new oh(te);
    E.scope.off();
    const Z = E.update = ne.run.bind(ne), ye = E.job = ne.runIfDirty.bind(ne);
    ye.i = E, ye.id = E.uid, ne.scheduler = () => ma(ye), Cs(E, !0), P.NODE_ENV !== "production" && (ne.onTrack = E.rtc ? (ie) => po(E.rtc, ie) : void 0, ne.onTrigger = E.rtg ? (ie) => po(E.rtg, ie) : void 0), Z();
  }, de = (E, O, V) => {
    O.component = E;
    const q = E.vnode.props;
    E.vnode = O, E.next = null, bb(E, O.props, q, V), kb(E, O.children, V), un(), Ru(E), dn();
  }, be = (E, O, V, q, W, Y, ae, te, ne = !1) => {
    const Z = E && E.children, ye = E ? E.shapeFlag : 0, ie = O.children, { patchFlag: _e, shapeFlag: Oe } = O;
    if (_e > 0) {
      if (_e & 128) {
        K(
          Z,
          ie,
          V,
          q,
          W,
          Y,
          ae,
          te,
          ne
        );
        return;
      } else if (_e & 256) {
        et(
          Z,
          ie,
          V,
          q,
          W,
          Y,
          ae,
          te,
          ne
        );
        return;
      }
    }
    Oe & 8 ? (ye & 16 && L(Z, W, Y), ie !== Z && u(V, ie)) : ye & 16 ? Oe & 16 ? K(
      Z,
      ie,
      V,
      q,
      W,
      Y,
      ae,
      te,
      ne
    ) : L(Z, W, Y, !0) : (ye & 8 && u(V, ""), Oe & 16 && k(
      ie,
      V,
      q,
      W,
      Y,
      ae,
      te,
      ne
    ));
  }, et = (E, O, V, q, W, Y, ae, te, ne) => {
    E = E || wo, O = O || wo;
    const Z = E.length, ye = O.length, ie = Math.min(Z, ye);
    let _e;
    for (_e = 0; _e < ie; _e++) {
      const Oe = O[_e] = ne ? rs(O[_e]) : sn(O[_e]);
      m(
        E[_e],
        Oe,
        V,
        null,
        W,
        Y,
        ae,
        te,
        ne
      );
    }
    Z > ye ? L(
      E,
      W,
      Y,
      !0,
      !1,
      ie
    ) : k(
      O,
      V,
      q,
      W,
      Y,
      ae,
      te,
      ne,
      ie
    );
  }, K = (E, O, V, q, W, Y, ae, te, ne) => {
    let Z = 0;
    const ye = O.length;
    let ie = E.length - 1, _e = ye - 1;
    for (; Z <= ie && Z <= _e; ) {
      const Oe = E[Z], Ve = O[Z] = ne ? rs(O[Z]) : sn(O[Z]);
      if (Rs(Oe, Ve))
        m(
          Oe,
          Ve,
          V,
          null,
          W,
          Y,
          ae,
          te,
          ne
        );
      else
        break;
      Z++;
    }
    for (; Z <= ie && Z <= _e; ) {
      const Oe = E[ie], Ve = O[_e] = ne ? rs(O[_e]) : sn(O[_e]);
      if (Rs(Oe, Ve))
        m(
          Oe,
          Ve,
          V,
          null,
          W,
          Y,
          ae,
          te,
          ne
        );
      else
        break;
      ie--, _e--;
    }
    if (Z > ie) {
      if (Z <= _e) {
        const Oe = _e + 1, Ve = Oe < ye ? O[Oe].el : q;
        for (; Z <= _e; )
          m(
            null,
            O[Z] = ne ? rs(O[Z]) : sn(O[Z]),
            V,
            Ve,
            W,
            Y,
            ae,
            te,
            ne
          ), Z++;
      }
    } else if (Z > _e)
      for (; Z <= ie; )
        he(E[Z], W, Y, !0), Z++;
    else {
      const Oe = Z, Ve = Z, We = /* @__PURE__ */ new Map();
      for (Z = Ve; Z <= _e; Z++) {
        const bt = O[Z] = ne ? rs(O[Z]) : sn(O[Z]);
        bt.key != null && (P.NODE_ENV !== "production" && We.has(bt.key) && ee(
          "Duplicate keys found during update:",
          JSON.stringify(bt.key),
          "Make sure keys are unique."
        ), We.set(bt.key, Z));
      }
      let ze, Dt = 0;
      const kt = _e - Ve + 1;
      let _n = !1, yn = 0;
      const Qo = new Array(kt);
      for (Z = 0; Z < kt; Z++) Qo[Z] = 0;
      for (Z = Oe; Z <= ie; Z++) {
        const bt = E[Z];
        if (Dt >= kt) {
          he(bt, W, Y, !0);
          continue;
        }
        let bn;
        if (bt.key != null)
          bn = We.get(bt.key);
        else
          for (ze = Ve; ze <= _e; ze++)
            if (Qo[ze - Ve] === 0 && Rs(bt, O[ze])) {
              bn = ze;
              break;
            }
        bn === void 0 ? he(bt, W, Y, !0) : (Qo[bn - Ve] = Z + 1, bn >= yn ? yn = bn : _n = !0, m(
          bt,
          O[bn],
          V,
          null,
          W,
          Y,
          ae,
          te,
          ne
        ), Dt++);
      }
      const Cu = _n ? Mb(Qo) : wo;
      for (ze = Cu.length - 1, Z = kt - 1; Z >= 0; Z--) {
        const bt = Ve + Z, bn = O[bt], Ou = bt + 1 < ye ? O[bt + 1].el : q;
        Qo[Z] === 0 ? m(
          null,
          bn,
          V,
          Ou,
          W,
          Y,
          ae,
          te,
          ne
        ) : _n && (ze < 0 || Z !== Cu[ze] ? oe(bn, V, Ou, 2) : ze--);
      }
    }
  }, oe = (E, O, V, q, W = null) => {
    const { el: Y, type: ae, transition: te, children: ne, shapeFlag: Z } = E;
    if (Z & 6) {
      oe(E.component.subTree, O, V, q);
      return;
    }
    if (Z & 128) {
      E.suspense.move(O, V, q);
      return;
    }
    if (Z & 64) {
      ae.move(E, O, V, Ie);
      return;
    }
    if (ae === we) {
      s(Y, O, V);
      for (let ie = 0; ie < ne.length; ie++)
        oe(ne[ie], O, V, q);
      s(E.anchor, O, V);
      return;
    }
    if (ae === gr) {
      A(E, O, V);
      return;
    }
    if (q !== 2 && Z & 1 && te)
      if (q === 0)
        te.beforeEnter(Y), s(Y, O, V), wt(() => te.enter(Y), W);
      else {
        const { leave: ie, delayLeave: _e, afterLeave: Oe } = te, Ve = () => {
          E.ctx.isUnmounted ? o(Y) : s(Y, O, V);
        }, We = () => {
          ie(Y, () => {
            Ve(), Oe && Oe();
          });
        };
        _e ? _e(Y, Ve, We) : We();
      }
    else
      s(Y, O, V);
  }, he = (E, O, V, q = !1, W = !1) => {
    const {
      type: Y,
      props: ae,
      ref: te,
      children: ne,
      dynamicChildren: Z,
      shapeFlag: ye,
      patchFlag: ie,
      dirs: _e,
      cacheIndex: Oe
    } = E;
    if (ie === -2 && (W = !1), te != null && (un(), hr(te, null, V, E, !0), dn()), Oe != null && (O.renderCache[Oe] = void 0), ye & 256) {
      O.ctx.deactivate(E);
      return;
    }
    const Ve = ye & 1 && _e, We = !So(E);
    let ze;
    if (We && (ze = ae && ae.onVnodeBeforeUnmount) && En(ze, O, E), ye & 6)
      He(E.component, V, q);
    else {
      if (ye & 128) {
        E.suspense.unmount(V, q);
        return;
      }
      Ve && Ss(E, null, O, "beforeUnmount"), ye & 64 ? E.type.remove(
        E,
        O,
        V,
        Ie,
        q
      ) : Z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Y !== we || ie > 0 && ie & 64) ? L(
        Z,
        O,
        V,
        !1,
        !0
      ) : (Y === we && ie & 384 || !W && ye & 16) && L(ne, O, V), q && Ae(E);
    }
    (We && (ze = ae && ae.onVnodeUnmounted) || Ve) && wt(() => {
      ze && En(ze, O, E), Ve && Ss(E, null, O, "unmounted");
    }, V);
  }, Ae = (E) => {
    const { type: O, el: V, anchor: q, transition: W } = E;
    if (O === we) {
      P.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && W && !W.persisted ? E.children.forEach((ae) => {
        ae.type === at ? o(ae.el) : Ae(ae);
      }) : xe(V, q);
      return;
    }
    if (O === gr) {
      T(E);
      return;
    }
    const Y = () => {
      o(V), W && !W.persisted && W.afterLeave && W.afterLeave();
    };
    if (E.shapeFlag & 1 && W && !W.persisted) {
      const { leave: ae, delayLeave: te } = W, ne = () => ae(V, Y);
      te ? te(E.el, Y, ne) : ne();
    } else
      Y();
  }, xe = (E, O) => {
    let V;
    for (; E !== O; )
      V = p(E), o(E), E = V;
    o(O);
  }, He = (E, O, V) => {
    P.NODE_ENV !== "production" && E.type.__hmrId && xy(E);
    const {
      bum: q,
      scope: W,
      job: Y,
      subTree: ae,
      um: te,
      m: ne,
      a: Z,
      parent: ye,
      slots: { __: ie }
    } = E;
    zu(ne), zu(Z), q && po(q), ye && ge(ie) && ie.forEach((_e) => {
      ye.renderCache[_e] = void 0;
    }), W.stop(), Y && (Y.flags |= 8, he(ae, E, O, V)), te && wt(te, O), wt(() => {
      E.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve()), P.NODE_ENV !== "production" && Fy(E);
  }, L = (E, O, V, q = !1, W = !1, Y = 0) => {
    for (let ae = Y; ae < E.length; ae++)
      he(E[ae], O, V, q, W);
  }, J = (E) => {
    if (E.shapeFlag & 6)
      return J(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const O = p(E.anchor || E.el), V = O && O[Lh];
    return V ? p(V) : O;
  };
  let se = !1;
  const ve = (E, O, V) => {
    E == null ? O._vnode && he(O._vnode, null, null, !0) : m(
      O._vnode || null,
      E,
      O,
      null,
      null,
      null,
      V
    ), O._vnode = E, se || (se = !0, Ru(), Dh(), se = !1);
  }, Ie = {
    p: m,
    um: he,
    m: oe,
    r: Ae,
    mt: X,
    mc: k,
    pc: be,
    pbc: R,
    n: J,
    o: e
  };
  return {
    render: ve,
    hydrate: void 0,
    createApp: gb(ve)
  };
}
function Xa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Cs({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Pb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (ge(s) && ge(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = rs(o[r]), a.el = i.el), !n && a.patchFlag !== -2 && mr(i, a)), a.type === Yr && (a.el = i.el), a.type === at && !a.el && (a.el = i.el), P.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function Mb(e) {
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
function cm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : cm(t);
}
function zu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Vb = Symbol.for("v-scx"), Lb = () => {
  {
    const e = Bt(Vb);
    return e || P.NODE_ENV !== "production" && ee(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function va(e, t) {
  return _a(e, null, t);
}
function Fb(e, t) {
  return _a(
    e,
    null,
    P.NODE_ENV !== "production" ? st({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function mt(e, t, n) {
  return P.NODE_ENV !== "production" && !Se(t) && ee(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), _a(e, t, n);
}
function _a(e, t, n = $e) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  P.NODE_ENV !== "production" && !t && (s !== void 0 && ee(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && ee(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && ee(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = st({}, n);
  P.NODE_ENV !== "production" && (a.onWarn = ee);
  const c = t && s || !t && r !== "post";
  let f;
  if (kr) {
    if (r === "sync") {
      const h = Lb();
      f = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = dt, h.resume = dt, h.pause = dt, h;
    }
  }
  const u = ct;
  a.call = (h, g, m) => pn(h, u, g, m);
  let d = !1;
  r === "post" ? a.scheduler = (h) => {
    wt(h, u && u.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (h, g) => {
    g ? h() : ma(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const p = Ey(e, t, a);
  return kr && (f ? f.push(p) : c && p()), p;
}
function Bb(e, t, n) {
  const s = this.proxy, o = Qe(e) ? e.includes(".") ? um(s, e) : () => s[e] : e.bind(s, s);
  let r;
  Se(t) ? r = t : (r = t.handler, n = t);
  const i = Xr(this), a = _a(o, r.bind(s), n);
  return i(), a;
}
function um(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function $b(e, t, n = $e) {
  const s = Qn();
  if (P.NODE_ENV !== "production" && !s)
    return ee("useModel() called without active instance."), $();
  const o = yt(t);
  if (P.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return ee(`useModel() called with prop "${t}" which is not declared.`), $();
  const r = qn(t), i = dm(e, o), a = my((c, f) => {
    let u, d = $e, p;
    return Fb(() => {
      const h = e[o];
      xt(u, h) && (u = h, f());
    }), {
      get() {
        return c(), n.get ? n.get(u) : u;
      },
      set(h) {
        const g = n.set ? n.set(h) : h;
        if (!xt(g, u) && !(d !== $e && xt(h, d)))
          return;
        const m = s.vnode.props;
        m && // check if parent has passed v-model
        (t in m || o in m || r in m) && (`onUpdate:${t}` in m || `onUpdate:${o}` in m || `onUpdate:${r}` in m) || (u = h, f()), s.emit(`update:${t}`, g), xt(h, g) && xt(h, d) && !xt(g, p) && f(), d = h, p = g;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? i || $e : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const dm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${yt(t)}Modifiers`] || e[`${qn(t)}Modifiers`];
function jb(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || $e;
  if (P.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(Ns(yt(t)) in d)) && ee(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ns(yt(t))}" prop.`
        );
      else {
        const p = u[t];
        Se(p) && (p(...n) || ee(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && dm(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => Qe(u) ? u.trim() : u)), i.number && (o = n.map(Hi))), P.NODE_ENV !== "production" && jy(e, t, o), P.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[Ns(u)] && ee(
      `Event "${u}" is emitted in component ${Ea(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${qn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = s[a = Ns(t)] || // also try camelCase event handler (#2249)
  s[a = Ns(yt(t))];
  !c && r && (c = s[a = Ns(qn(t))]), c && pn(
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
    e.emitted[a] = !0, pn(
      f,
      e,
      6,
      o
    );
  }
}
function fm(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, a = !1;
  if (!Se(e)) {
    const c = (f) => {
      const u = fm(f, t, !0);
      u && (a = !0, st(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !a ? (je(e) && s.set(e, null), null) : (ge(r) ? r.forEach((c) => i[c] = null) : st(i, r), je(e) && s.set(e, i), i);
}
function ya(e, t) {
  return !e || !jr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Be(e, t[0].toLowerCase() + t.slice(1)) || Be(e, qn(t)) || Be(e, t));
}
let Bl = !1;
function Ji() {
  Bl = !0;
}
function qu(e) {
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
    inheritAttrs: m
  } = e, v = Xi(e);
  let y, b;
  P.NODE_ENV !== "production" && (Bl = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = o || s, N = P.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(T, {
        get(x, I, k) {
          return ee(
            `Property '${String(
              I
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(x, I, k);
        }
      }) : T;
      y = sn(
        f.call(
          N,
          T,
          u,
          P.NODE_ENV !== "production" ? Tn(d) : d,
          h,
          p,
          g
        )
      ), b = a;
    } else {
      const T = t;
      P.NODE_ENV !== "production" && a === d && Ji(), y = sn(
        T.length > 1 ? T(
          P.NODE_ENV !== "production" ? Tn(d) : d,
          P.NODE_ENV !== "production" ? {
            get attrs() {
              return Ji(), Tn(a);
            },
            slots: i,
            emit: c
          } : { attrs: a, slots: i, emit: c }
        ) : T(
          P.NODE_ENV !== "production" ? Tn(d) : d,
          null
        )
      ), b = t.props ? a : Ub(a);
    }
  } catch (T) {
    vr.length = 0, Wr(T, e, 1), y = ce(at);
  }
  let _ = y, A;
  if (P.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([_, A] = pm(y)), b && m !== !1) {
    const T = Object.keys(b), { shapeFlag: N } = _;
    if (T.length) {
      if (N & 7)
        r && T.some(Ui) && (b = Hb(
          b,
          r
        )), _ = In(_, b, !1, !0);
      else if (P.NODE_ENV !== "production" && !Bl && _.type !== at) {
        const x = Object.keys(a), I = [], k = [];
        for (let w = 0, R = x.length; w < R; w++) {
          const C = x[w];
          jr(C) ? Ui(C) || I.push(C[2].toLowerCase() + C.slice(3)) : k.push(C);
        }
        k.length && ee(
          `Extraneous non-props attributes (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), I.length && ee(
          `Extraneous non-emits event listeners (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (P.NODE_ENV !== "production" && !Yu(_) && ee(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), _ = In(_, null, !1, !0), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && (P.NODE_ENV !== "production" && !Yu(_) && ee(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Nr(_, n.transition)), P.NODE_ENV !== "production" && A ? A(_) : y = _, Xi(v), y;
}
const pm = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Vc(t, !1);
  if (s) {
    if (P.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return pm(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (a) => {
    t[o] = a, n && (r > -1 ? n[r] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [sn(s), i];
};
function Vc(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Xs(o)) {
      if (o.type !== at || o.children === "v-if") {
        if (n)
          return;
        if (n = o, P.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Vc(n.children);
      }
    } else
      return;
  }
  return n;
}
const Ub = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Hb = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ui(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Yu = (e) => e.shapeFlag & 7 || e.type === at;
function Wb(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: a, patchFlag: c } = t, f = r.emitsOptions;
  if (P.NODE_ENV !== "production" && (o || a) && on || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Xu(s, i, f) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (i[p] !== s[p] && !ya(f, p))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? Xu(s, i, f) : !0 : !!i;
  return !1;
}
function Xu(e, t, n) {
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
function Kb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const hm = (e) => e.__isSuspense;
function zb(e, t) {
  t && t.pendingBranch ? ge(e) ? t.effects.push(...e) : t.effects.push(e) : Nh(e);
}
const we = Symbol.for("v-fgt"), Yr = Symbol.for("v-txt"), at = Symbol.for("v-cmt"), gr = Symbol.for("v-stc"), vr = [];
let Ft = null;
function S(e = !1) {
  vr.push(Ft = e ? null : []);
}
function qb() {
  vr.pop(), Ft = vr[vr.length - 1] || null;
}
let Dr = 1;
function Gu(e, t = !1) {
  Dr += e, e < 0 && Ft && t && (Ft.hasOnce = !0);
}
function mm(e) {
  return e.dynamicChildren = Dr > 0 ? Ft || wo : null, qb(), Dr > 0 && Ft && Ft.push(e), e;
}
function D(e, t, n, s, o, r) {
  return mm(
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
function Ze(e, t, n, s, o) {
  return mm(
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
function Xs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rs(e, t) {
  if (P.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Ci.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Yb = (...e) => vm(
  ...e
), gm = ({ key: e }) => e ?? null, Ni = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Qe(e) || Ye(e) || Se(e) ? { i: rt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, s = 0, o = null, r = e === we ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gm(t),
    ref: t && Ni(t),
    scopeId: Mh,
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
  return a ? (Lc(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= Qe(n) ? 8 : 16), P.NODE_ENV !== "production" && c.key !== c.key && ee("VNode created with invalid key (NaN). VNode type:", c.type), Dr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ft && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ft.push(c), c;
}
const ce = P.NODE_ENV !== "production" ? Yb : vm;
function vm(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === ob) && (P.NODE_ENV !== "production" && !e && ee(`Invalid vnode type when creating vnode: ${e}.`), e = at), Xs(e)) {
    const a = In(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Lc(a, n), Dr > 0 && !r && Ft && (a.shapeFlag & 6 ? Ft[Ft.indexOf(e)] = a : Ft.push(a)), a.patchFlag = -2, a;
  }
  if (Em(e) && (e = e.__vccOpts), t) {
    t = ot(t);
    let { class: a, style: c } = t;
    a && !Qe(a) && (t.class = le(a)), je(c) && (Or(c) && !ge(c) && (c = st({}, c)), t.style = Vt(c));
  }
  const i = Qe(e) ? 1 : hm(e) ? 128 : Fh(e) ? 64 : je(e) ? 4 : Se(e) ? 2 : 0;
  return P.NODE_ENV !== "production" && i & 4 && Or(e) && (e = Te(e), ee(
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
  return e ? Or(e) || sm(e) ? st({}, e) : e : null;
}
function In(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: a, transition: c } = e, f = t ? ys(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && gm(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? ge(r) ? r.concat(Ni(t)) : [r, Ni(t)] : Ni(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: P.NODE_ENV !== "production" && i === -1 && ge(a) ? a.map(_m) : a,
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
    ssContent: e.ssContent && In(e.ssContent),
    ssFallback: e.ssFallback && In(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Nr(
    u,
    c.clone(u)
  ), u;
}
function _m(e) {
  const t = In(e);
  return ge(e.children) && (t.children = e.children.map(_m)), t;
}
function H(e = " ", t = 0) {
  return ce(Yr, null, e, t);
}
function $l(e, t) {
  const n = ce(gr, null, e);
  return n.staticCount = t, n;
}
function ue(e = "", t = !1) {
  return t ? (S(), Ze(at, null, e)) : ce(at, null, e);
}
function sn(e) {
  return e == null || typeof e == "boolean" ? ce(at) : ge(e) ? ce(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xs(e) ? rs(e) : ce(Yr, null, String(e));
}
function rs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : In(e);
}
function Lc(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ge(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Lc(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !sm(t) ? t._ctx = rt : o === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Se(t) ? (t = { default: t, _ctx: rt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [H(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ys(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = le([t.class, s.class]));
      else if (o === "style")
        t.style = Vt([t.style, s.style]);
      else if (jr(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(ge(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function En(e, t, n, s = null) {
  pn(e, t, 7, [
    n,
    s
  ]);
}
const Xb = em();
let Gb = 0;
function Qb(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Xb, r = {
    uid: Gb++,
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
    scope: new th(
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
    propsOptions: rm(s, o),
    emitsOptions: fm(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: $e,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: $e,
    data: $e,
    props: $e,
    attrs: $e,
    slots: $e,
    refs: $e,
    setupState: $e,
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
  return P.NODE_ENV !== "production" ? r.ctx = ib(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = jb.bind(null, r), e.ce && e.ce(r), r;
}
let ct = null;
const Qn = () => ct || rt;
let Zi, jl;
{
  const e = Hr(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Zi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ct = n
  ), jl = t(
    "__VUE_SSR_SETTERS__",
    (n) => kr = n
  );
}
const Xr = (e) => {
  const t = ct;
  return Zi(e), e.scope.on(), () => {
    e.scope.off(), Zi(t);
  };
}, Qu = () => {
  ct && ct.scope.off(), Zi(null);
}, Jb = /* @__PURE__ */ Xn("slot,component");
function Ul(e, { isNativeTag: t }) {
  (Jb(e) || t(e)) && ee(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ym(e) {
  return e.vnode.shapeFlag & 4;
}
let kr = !1;
function Zb(e, t = !1, n = !1) {
  t && jl(t);
  const { props: s, children: o } = e.vnode, r = ym(e);
  _b(e, s, r, t), Db(e, o, n || t);
  const i = r ? eE(e, t) : void 0;
  return t && jl(!1), i;
}
function eE(e, t) {
  var n;
  const s = e.type;
  if (P.NODE_ENV !== "production") {
    if (s.name && Ul(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Ul(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        Vh(r[i]);
    }
    s.compilerOptions && tE() && ee(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qh), P.NODE_ENV !== "production" && ab(e);
  const { setup: o } = s;
  if (o) {
    un();
    const r = e.setupContext = o.length > 1 ? sE(e) : null, i = Xr(e), a = jo(
      o,
      e,
      0,
      [
        P.NODE_ENV !== "production" ? Tn(e.props) : e.props,
        r
      ]
    ), c = Ac(a);
    if (dn(), i(), (c || e.sp) && !So(e) && zh(e), c) {
      if (a.then(Qu, Qu), t)
        return a.then((f) => {
          Ju(e, f, t);
        }).catch((f) => {
          Wr(f, e, 0);
        });
      if (e.asyncDep = a, P.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        ee(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ju(e, a, t);
  } else
    bm(e, t);
}
function Ju(e, t, n) {
  Se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : je(t) ? (P.NODE_ENV !== "production" && Xs(t) && ee(
    "setup() should not return VNodes directly - return a render function instead."
  ), P.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ah(t), P.NODE_ENV !== "production" && lb(e)) : P.NODE_ENV !== "production" && t !== void 0 && ee(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), bm(e, n);
}
const tE = () => !0;
function bm(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || dt);
  {
    const o = Xr(e);
    un();
    try {
      ub(e);
    } finally {
      dn(), o();
    }
  }
  P.NODE_ENV !== "production" && !s.render && e.render === dt && !t && (s.template ? ee(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : ee("Component is missing template or render function: ", s));
}
const Zu = P.NODE_ENV !== "production" ? {
  get(e, t) {
    return Ji(), ut(e, "get", ""), e[t];
  },
  set() {
    return ee("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return ee("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ut(e, "get", ""), e[t];
  }
};
function nE(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ut(e, "get", "$slots"), t[n];
    }
  });
}
function sE(e) {
  const t = (n) => {
    if (P.NODE_ENV !== "production" && (e.exposed && ee("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (ge(n) ? s = "array" : Ye(n) && (s = "ref")), s !== "object" && ee(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (P.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Zu));
      },
      get slots() {
        return s || (s = nE(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Zu),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function ba(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ah(ls(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in js)
        return js[n](e);
    },
    has(t, n) {
      return n in t || n in js;
    }
  })) : e.proxy;
}
const oE = /(?:^|[-_])(\w)/g, rE = (e) => e.replace(oE, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Fc(e, t = !0) {
  return Se(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ea(e, t, n = !1) {
  let s = Fc(t);
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
  return s ? rE(s) : n ? "App" : "Anonymous";
}
function Em(e) {
  return Se(e) && "__vccOpts" in e;
}
const j = (e, t) => {
  const n = yy(e, t, kr);
  if (P.NODE_ENV !== "production") {
    const s = Qn();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Bc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? je(t) && !ge(t) ? Xs(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Xs(n) && (n = [n]), ce(e, t, n));
}
function iE() {
  if (P.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!je(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (Ye(d)) {
        un();
        const p = d.value;
        return dn(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          a(p),
          ">"
        ];
      } else {
        if (ln(d))
          return [
            "div",
            {},
            ["span", e, Ct(d) ? "ShallowReactive" : "Reactive"],
            "<",
            a(d),
            `>${Rn(d) ? " (readonly)" : ""}`
          ];
        if (Rn(d))
          return [
            "div",
            {},
            ["span", e, Ct(d) ? "ShallowReadonly" : "Readonly"],
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
    d.type.props && d.props && p.push(i("props", Te(d.props))), d.setupState !== $e && p.push(i("setup", d.setupState)), d.data !== $e && p.push(i("data", Te(d.data)));
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
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : je(d) ? ["object", { object: p ? Te(d) : d }] : ["span", n, String(d)];
  }
  function c(d, p) {
    const h = d.type;
    if (Se(h))
      return;
    const g = {};
    for (const m in d.ctx)
      f(h, m, p) && (g[m] = d.ctx[m]);
    return g;
  }
  function f(d, p, h) {
    const g = d[h];
    if (ge(g) && g.includes(p) || je(g) && p in g || d.extends && f(d.extends, p, h) || d.mixins && d.mixins.some((m) => f(m, p, h)))
      return !0;
  }
  function u(d) {
    return Ct(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const ed = "3.5.17", Nn = P.NODE_ENV !== "production" ? ee : dt;
var Gt = {};
let Hl;
const td = typeof window < "u" && window.trustedTypes;
if (td)
  try {
    Hl = /* @__PURE__ */ td.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Gt.NODE_ENV !== "production" && Nn(`Error creating trusted types policy: ${e}`);
  }
const wm = Hl ? (e) => Hl.createHTML(e) : (e) => e, aE = "http://www.w3.org/2000/svg", lE = "http://www.w3.org/1998/Math/MathML", jn = typeof document < "u" ? document : null, nd = jn && /* @__PURE__ */ jn.createElement("template"), cE = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? jn.createElementNS(aE, e) : t === "mathml" ? jn.createElementNS(lE, e) : n ? jn.createElement(e, { is: n }) : jn.createElement(e);
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
      nd.innerHTML = wm(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = nd.content;
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
}, es = "transition", er = "animation", xr = Symbol("_vtc"), Am = {
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
}, uE = /* @__PURE__ */ st(
  {},
  jh,
  Am
), dE = (e) => (e.displayName = "Transition", e.props = uE, e), fE = /* @__PURE__ */ dE(
  (e, { slots: t }) => Bc(Ky, pE(e), t)
), Os = (e, t = []) => {
  ge(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, sd = (e) => e ? ge(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function pE(e) {
  const t = {};
  for (const C in e)
    C in Am || (t[C] = e[C]);
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
  } = e, g = hE(o), m = g && g[0], v = g && g[1], {
    onBeforeEnter: y,
    onEnter: b,
    onEnterCancelled: _,
    onLeave: A,
    onLeaveCancelled: T,
    onBeforeAppear: N = y,
    onAppear: x = b,
    onAppearCancelled: I = _
  } = t, k = (C, F, fe, X) => {
    C._enterCancelled = X, Ts(C, F ? u : a), Ts(C, F ? f : i), fe && fe();
  }, w = (C, F) => {
    C._isLeaving = !1, Ts(C, d), Ts(C, h), Ts(C, p), F && F();
  }, R = (C) => (F, fe) => {
    const X = C ? x : b, re = () => k(F, C, fe);
    Os(X, [F, re]), od(() => {
      Ts(F, C ? c : r), Fn(F, C ? u : a), sd(X) || rd(F, s, m, re);
    });
  };
  return st(t, {
    onBeforeEnter(C) {
      Os(y, [C]), Fn(C, r), Fn(C, i);
    },
    onBeforeAppear(C) {
      Os(N, [C]), Fn(C, c), Fn(C, f);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(C, F) {
      C._isLeaving = !0;
      const fe = () => w(C, F);
      Fn(C, d), C._enterCancelled ? (Fn(C, p), ld()) : (ld(), Fn(C, p)), od(() => {
        C._isLeaving && (Ts(C, d), Fn(C, h), sd(A) || rd(C, s, v, fe));
      }), Os(A, [C, fe]);
    },
    onEnterCancelled(C) {
      k(C, !1, void 0, !0), Os(_, [C]);
    },
    onAppearCancelled(C) {
      k(C, !0, void 0, !0), Os(I, [C]);
    },
    onLeaveCancelled(C) {
      w(C), Os(T, [C]);
    }
  });
}
function hE(e) {
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
  const t = x_(e);
  return Gt.NODE_ENV !== "production" && Oy(t, "<transition> explicit duration"), t;
}
function Fn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[xr] || (e[xr] = /* @__PURE__ */ new Set())).add(t);
}
function Ts(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[xr];
  n && (n.delete(t), n.size || (e[xr] = void 0));
}
function od(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let mE = 0;
function rd(e, t, n, s) {
  const o = e._endId = ++mE, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: a, propCount: c } = gE(e, t);
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
function gE(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${es}Delay`), r = s(`${es}Duration`), i = id(o, r), a = s(`${er}Delay`), c = s(`${er}Duration`), f = id(a, c);
  let u = null, d = 0, p = 0;
  t === es ? i > 0 && (u = es, d = i, p = r.length) : t === er ? f > 0 && (u = er, d = f, p = c.length) : (d = Math.max(i, f), u = d > 0 ? i > f ? es : er : null, p = u ? u === es ? r.length : c.length : 0);
  const h = u === es && /\b(transform|all)(,|$)/.test(
    s(`${es}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: p,
    hasTransform: h
  };
}
function id(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ad(n) + ad(e[s])));
}
function ad(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ld() {
  return document.body.offsetHeight;
}
function vE(e, t, n) {
  const s = e[xr];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ea = Symbol("_vod"), Sm = Symbol("_vsh"), Cm = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[ea] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : tr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), tr(e, !0), s.enter(e)) : s.leave(e, () => {
      tr(e, !1);
    }) : tr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    tr(e, t);
  }
};
Gt.NODE_ENV !== "production" && (Cm.name = "show");
function tr(e, t) {
  e.style.display = t ? e[ea] : "none", e[Sm] = !t;
}
const _E = Symbol(Gt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), yE = /(^|;)\s*display\s*:/;
function bE(e, t, n) {
  const s = e.style, o = Qe(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (Qe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Di(s, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Di(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Di(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[_E];
      i && (n += ";" + i), s.cssText = n, r = yE.test(n);
    }
  } else t && e.removeAttribute("style");
  ea in e && (e[ea] = r ? s.display : "", e[Sm] && (s.display = "none"));
}
const EE = /[^\\];\s*$/, cd = /\s*!important$/;
function Di(e, t, n) {
  if (ge(n))
    n.forEach((s) => Di(e, t, s));
  else if (n == null && (n = ""), Gt.NODE_ENV !== "production" && EE.test(n) && Nn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = wE(e, t);
    cd.test(n) ? e.setProperty(
      qn(s),
      n.replace(cd, ""),
      "important"
    ) : e[s] = n;
  }
}
const ud = ["Webkit", "Moz", "ms"], Qa = {};
function wE(e, t) {
  const n = Qa[t];
  if (n)
    return n;
  let s = yt(t);
  if (s !== "filter" && s in e)
    return Qa[t] = s;
  s = Ks(s);
  for (let o = 0; o < ud.length; o++) {
    const r = ud[o] + s;
    if (r in e)
      return Qa[t] = r;
  }
  return t;
}
const dd = "http://www.w3.org/1999/xlink";
function fd(e, t, n, s, o, r = H_(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(dd, t.slice(6, t.length)) : e.setAttributeNS(dd, t, n) : n == null || r && !Jp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : cn(n) ? String(n) : n
  );
}
function pd(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? wm(n) : n);
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
    a === "boolean" ? n = Jp(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    Gt.NODE_ENV !== "production" && !i && Nn(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(o || t);
}
function Wn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function AE(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const hd = Symbol("_vei");
function SE(e, t, n, s, o = null) {
  const r = e[hd] || (e[hd] = {}), i = r[t];
  if (s && i)
    i.value = Gt.NODE_ENV !== "production" ? gd(s, t) : s;
  else {
    const [a, c] = CE(t);
    if (s) {
      const f = r[t] = NE(
        Gt.NODE_ENV !== "production" ? gd(s, t) : s,
        o
      );
      Wn(e, a, f, c);
    } else i && (AE(e, a, i, c), r[t] = void 0);
  }
}
const md = /(?:Once|Passive|Capture)$/;
function CE(e) {
  let t;
  if (md.test(e)) {
    t = {};
    let s;
    for (; s = e.match(md); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qn(e.slice(2)), t];
}
let Ja = 0;
const OE = /* @__PURE__ */ Promise.resolve(), TE = () => Ja || (OE.then(() => Ja = 0), Ja = Date.now());
function NE(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    pn(
      DE(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = TE(), n;
}
function gd(e, t) {
  return Se(e) || ge(e) ? e : (Nn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), dt);
}
function DE(e, t) {
  if (ge(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const vd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kE = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? vE(e, s, i) : t === "style" ? bE(e, n, s) : jr(t) ? Ui(t) || SE(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xE(e, t, s, i)) ? (pd(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fd(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Qe(s)) ? pd(e, yt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), fd(e, t, s, i));
};
function xE(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && vd(t) && Se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return vd(t) && Qe(n) ? !1 : t in e;
}
const ps = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ge(t) ? (n) => po(t, n) : t;
};
function RE(e) {
  e.target.composing = !0;
}
function _d(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const qt = Symbol("_assign"), Co = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[qt] = ps(o);
    const r = s || o.props && o.props.type === "number";
    Wn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), r && (a = Hi(a)), e[qt](a);
    }), n && Wn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Wn(e, "compositionstart", RE), Wn(e, "compositionend", _d), Wn(e, "change", _d));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[qt] = ps(i), e.composing) return;
    const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? Hi(e.value) : e.value, c = t ?? "";
    a !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, IE = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[qt] = ps(n), Wn(e, "change", () => {
      const s = e._modelValue, o = To(e), r = e.checked, i = e[qt];
      if (ge(s)) {
        const a = Oc(s, o), c = a !== -1;
        if (r && !c)
          i(s.concat(o));
        else if (!r && c) {
          const f = [...s];
          f.splice(a, 1), i(f);
        }
      } else if ($o(s)) {
        const a = new Set(s);
        r ? a.add(o) : a.delete(o), i(a);
      } else
        i(Om(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: yd,
  beforeUpdate(e, t, n) {
    e[qt] = ps(n), yd(e, t, n);
  }
};
function yd(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (ge(t))
    o = Oc(t, s.props.value) > -1;
  else if ($o(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = zs(t, Om(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Oo = {
  created(e, { value: t }, n) {
    e.checked = zs(t, n.props.value), e[qt] = ps(n), Wn(e, "change", () => {
      e[qt](To(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[qt] = ps(s), t !== n && (e.checked = zs(t, s.props.value));
  }
}, ds = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = $o(t);
    Wn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Hi(To(i)) : To(i)
      );
      e[qt](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, qs(() => {
        e._assigning = !1;
      });
    }), e[qt] = ps(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    bd(e, t);
  },
  beforeUpdate(e, t, n) {
    e[qt] = ps(n);
  },
  updated(e, { value: t }) {
    e._assigning || bd(e, t);
  }
};
function bd(e, t) {
  const n = e.multiple, s = ge(t);
  if (n && !s && !$o(t)) {
    Gt.NODE_ENV !== "production" && Nn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], a = To(i);
    if (n)
      if (s) {
        const c = typeof a;
        c === "string" || c === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = Oc(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (zs(To(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function To(e) {
  return "_value" in e ? e._value : e.value;
}
function Om(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const PE = ["ctrl", "shift", "alt", "meta"], ME = {
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
  exact: (e, t) => PE.some((n) => e[`${n}Key`] && !t.includes(n))
}, Tm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const a = ME[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...r);
  });
}, VE = /* @__PURE__ */ st({ patchProp: kE }, cE);
let Ed;
function LE() {
  return Ed || (Ed = Rb(VE));
}
const wa = (...e) => {
  const t = LE().createApp(...e);
  Gt.NODE_ENV !== "production" && (BE(t), $E(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = jE(s);
    if (!o) return;
    const r = t._component;
    !Se(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, FE(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function FE(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function BE(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => B_(t) || $_(t) || j_(t),
    writable: !1
  });
}
function $E(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Nn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Nn(s), n;
      },
      set() {
        Nn(s);
      }
    });
  }
}
function jE(e) {
  if (Qe(e)) {
    const t = document.querySelector(e);
    return Gt.NODE_ENV !== "production" && !t && Nn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Gt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Nn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var UE = {};
function HE() {
  iE();
}
UE.NODE_ENV !== "production" && HE();
var WE = Object.create, Nm = Object.defineProperty, KE = Object.getOwnPropertyDescriptor, $c = Object.getOwnPropertyNames, zE = Object.getPrototypeOf, qE = Object.prototype.hasOwnProperty, YE = (e, t) => function() {
  return e && (t = (0, e[$c(e)[0]])(e = 0)), t;
}, XE = (e, t) => function() {
  return t || (0, e[$c(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, GE = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of $c(t))
      !qE.call(e, o) && o !== n && Nm(e, o, { get: () => t[o], enumerable: !(s = KE(t, o)) || s.enumerable });
  return e;
}, QE = (e, t, n) => (n = e != null ? WE(zE(e)) : {}, GE(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Nm(n, "default", { value: e, enumerable: !0 }),
  e
)), Gr = YE({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), JE = XE({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    Gr(), t.exports = s;
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
        for (let m = 0; m < h.length; m++) {
          const v = h[m], y = d[v];
          typeof y != "object" || y === null ? g[v] = y : y.constructor !== Object && (a = i.get(y.constructor)) ? g[v] = a(y, p) : ArrayBuffer.isView(y) ? g[v] = n(y) : g[v] = p(y);
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
        const m = Object.keys(h), v = new Array(m.length);
        for (let y = 0; y < m.length; y++) {
          const b = m[y], _ = h[b];
          if (typeof _ != "object" || _ === null)
            v[b] = _;
          else if (_.constructor !== Object && (f = c.get(_.constructor)))
            v[b] = f(_, g);
          else if (ArrayBuffer.isView(_))
            v[b] = n(_);
          else {
            const A = i.indexOf(_);
            A !== -1 ? v[b] = a[A] : v[b] = g(_);
          }
        }
        return v;
      }
      function d(h) {
        if (typeof h != "object" || h === null) return h;
        if (Array.isArray(h)) return u(h, d);
        if (h.constructor !== Object && (f = c.get(h.constructor)))
          return f(h, d);
        const g = {};
        i.push(h), a.push(g);
        for (const m in h) {
          if (Object.hasOwnProperty.call(h, m) === !1) continue;
          const v = h[m];
          if (typeof v != "object" || v === null)
            g[m] = v;
          else if (v.constructor !== Object && (f = c.get(v.constructor)))
            g[m] = f(v, d);
          else if (ArrayBuffer.isView(v))
            g[m] = n(v);
          else {
            const y = i.indexOf(v);
            y !== -1 ? g[m] = a[y] : g[m] = d(v);
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
        for (const m in h) {
          const v = h[m];
          if (typeof v != "object" || v === null)
            g[m] = v;
          else if (v.constructor !== Object && (f = c.get(v.constructor)))
            g[m] = f(v, p);
          else if (ArrayBuffer.isView(v))
            g[m] = n(v);
          else {
            const y = i.indexOf(v);
            y !== -1 ? g[m] = a[y] : g[m] = p(v);
          }
        }
        return i.pop(), a.pop(), g;
      }
    }
  }
});
Gr();
Gr();
Gr();
var Dm = typeof navigator < "u", me = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof me.chrome < "u" && me.chrome.devtools;
Dm && (me.self, me.top);
var wd;
typeof navigator < "u" && ((wd = navigator.userAgent) == null || wd.toLowerCase().includes("electron"));
Gr();
var ZE = QE(JE()), e1 = /(?:^|[-_/])(\w)/g;
function t1(e, t) {
  return t ? t.toUpperCase() : "";
}
function n1(e) {
  return e && `${e}`.replace(e1, t1);
}
function s1(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const s = n.lastIndexOf("/"), o = n.substring(s + 1);
  {
    const r = o.lastIndexOf(t);
    return o.substring(0, r);
  }
}
var Ad = (0, ZE.default)({ circles: !0 });
const o1 = {
  trailing: !0
};
function No(e, t = 25, n = {}) {
  if (n = { ...o1, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let s, o, r = [], i, a;
  const c = (f, u) => (i = r1(e, f, u), i.finally(() => {
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
async function r1(e, t, n) {
  return await e.apply(t, n);
}
function Wl(e, t = {}, n) {
  for (const s in e) {
    const o = e[s], r = n ? `${n}:${s}` : s;
    typeof o == "object" && o !== null ? Wl(o, t, r) : typeof o == "function" && (t[r] = o);
  }
  return t;
}
const i1 = { run: (e) => e() }, a1 = () => i1, km = typeof console.createTask < "u" ? console.createTask : a1;
function l1(e, t) {
  const n = t.shift(), s = km(n);
  return e.reduce(
    (o, r) => o.then(() => s.run(() => r(...t))),
    Promise.resolve()
  );
}
function c1(e, t) {
  const n = t.shift(), s = km(n);
  return Promise.all(e.map((o) => s.run(() => o(...t))));
}
function Za(e, t) {
  for (const n of [...e])
    n(t);
}
class u1 {
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
    const n = Wl(t), s = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of s.splice(0, s.length))
        o();
    };
  }
  removeHooks(t) {
    const n = Wl(t);
    for (const s in n)
      this.removeHook(s, n[s]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(l1, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(c1, t, ...n);
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
function xm() {
  return new u1();
}
var d1 = Object.create, Rm = Object.defineProperty, f1 = Object.getOwnPropertyDescriptor, jc = Object.getOwnPropertyNames, p1 = Object.getPrototypeOf, h1 = Object.prototype.hasOwnProperty, m1 = (e, t) => function() {
  return e && (t = (0, e[jc(e)[0]])(e = 0)), t;
}, Im = (e, t) => function() {
  return t || (0, e[jc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, g1 = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of jc(t))
      !h1.call(e, o) && o !== n && Rm(e, o, { get: () => t[o], enumerable: !(s = f1(t, o)) || s.enumerable });
  return e;
}, v1 = (e, t, n) => (n = e != null ? d1(p1(e)) : {}, g1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Rm(n, "default", { value: e, enumerable: !0 }),
  e
)), G = m1({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), _1 = Im({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    G(), function(n) {
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
        var b = "-", _ = "", A = "", T = !0, N = {}, x, I, k, w, R, C, F, fe, X, re, z, de, be, et, K = "";
        if (typeof v != "string")
          return "";
        if (typeof y == "string" && (b = y), F = a.en, fe = i.en, typeof y == "object") {
          x = y.maintainCase || !1, N = y.custom && typeof y.custom == "object" ? y.custom : N, k = +y.truncate > 1 && y.truncate || !1, w = y.uric || !1, R = y.uricNoSlash || !1, C = y.mark || !1, T = !(y.symbols === !1 || y.lang === !1), b = y.separator || b, w && (K += c), R && (K += f), C && (K += u), F = y.lang && a[y.lang] && T ? a[y.lang] : T ? a.en : {}, fe = y.lang && i[y.lang] ? i[y.lang] : y.lang === !1 || y.lang === !0 ? {} : i.en, y.titleCase && typeof y.titleCase.length == "number" && Array.prototype.toString.call(y.titleCase) ? (y.titleCase.forEach(function(oe) {
            N[oe + ""] = oe + "";
          }), I = !0) : I = !!y.titleCase, y.custom && typeof y.custom.length == "number" && Array.prototype.toString.call(y.custom) && y.custom.forEach(function(oe) {
            N[oe + ""] = oe + "";
          }), Object.keys(N).forEach(function(oe) {
            var he;
            oe.length > 1 ? he = new RegExp("\\b" + h(oe) + "\\b", "gi") : he = new RegExp(h(oe), "gi"), v = v.replace(he, N[oe]);
          });
          for (z in N)
            K += z;
        }
        for (K += b, K = h(K), v = v.replace(/(^\s+|\s+$)/g, ""), be = !1, et = !1, re = 0, de = v.length; re < de; re++)
          z = v[re], g(z, N) ? be = !1 : fe[z] ? (z = be && fe[z].match(/[A-Za-z0-9]/) ? " " + fe[z] : fe[z], be = !1) : z in s ? (re + 1 < de && o.indexOf(v[re + 1]) >= 0 ? (A += z, z = "") : et === !0 ? (z = r[A] + s[z], A = "") : z = be && s[z].match(/[A-Za-z0-9]/) ? " " + s[z] : s[z], be = !1, et = !1) : z in r ? (A += z, z = "", re === de - 1 && (z = r[A]), et = !0) : /* process symbol chars */ F[z] && !(w && c.indexOf(z) !== -1) && !(R && f.indexOf(z) !== -1) ? (z = be || _.substr(-1).match(/[A-Za-z0-9]/) ? b + F[z] : F[z], z += v[re + 1] !== void 0 && v[re + 1].match(/[A-Za-z0-9]/) ? b : "", be = !0) : (et === !0 ? (z = r[A] + z, A = "", et = !1) : be && (/[A-Za-z0-9]/.test(z) || _.substr(-1).match(/A-Za-z0-9]/)) && (z = " " + z), be = !1), _ += z.replace(new RegExp("[^\\w\\s" + K + "_-]", "g"), b);
        return I && (_ = _.replace(/(\w)(\S*)/g, function(oe, he, Ae) {
          var xe = he.toUpperCase() + (Ae !== null ? Ae : "");
          return Object.keys(N).indexOf(xe.toLowerCase()) < 0 ? xe : xe.toLowerCase();
        })), _ = _.replace(/\s+/g, b).replace(new RegExp("\\" + b + "+", "g"), b).replace(new RegExp("(^\\" + b + "+|\\" + b + "+$)", "g"), ""), k && _.length > k && (X = _.charAt(k) === b, _ = _.slice(0, k), X || (_ = _.slice(0, _.lastIndexOf(b)))), !x && !I && (_ = _.toLowerCase()), _;
      }, p = function(v) {
        return function(b) {
          return d(b, v);
        };
      }, h = function(v) {
        return v.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, g = function(m, v) {
        for (var y in v)
          if (v[y] === m)
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
}), y1 = Im({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    G(), t.exports = _1();
  }
});
G();
G();
G();
G();
G();
G();
G();
G();
function b1(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function E1(e) {
  const t = e.__file;
  if (t)
    return n1(s1(t, ".vue"));
}
function Sd(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Uc(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Pm(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, o = Uc(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === s : !1;
}
function Aa(e) {
  var t, n, s;
  const o = b1(e?.type || {});
  if (o)
    return o;
  if (e?.root === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === e?.type)
      return Sd(e, i);
  for (const i in (s = e.appContext) == null ? void 0 : s.components)
    if (e.appContext.components[i] === e?.type)
      return Sd(e, i);
  const r = E1(e?.type || {});
  return r || "Anonymous Component";
}
function w1(e) {
  var t, n, s;
  const o = (s = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, r = e === e?.root ? "root" : e.uid;
  return `${o}:${r}`;
}
function Kl(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function A1() {
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
var ui;
function S1(e) {
  return ui || (ui = document.createRange()), ui.selectNode(e), ui.getBoundingClientRect();
}
function C1(e) {
  const t = A1();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const o = e.children[n];
    let r;
    if (o.component)
      r = Gs(o.component);
    else if (o.el) {
      const i = o.el;
      i.nodeType === 1 || i.getBoundingClientRect ? r = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (r = S1(i));
    }
    r && O1(t, r);
  }
  return t;
}
function O1(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Cd = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Gs(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Cd : Pm(e) ? C1(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Gs(e.subTree.component) : Cd;
}
G();
function Hc(e) {
  return Pm(e) ? T1(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function T1(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...Hc(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Mm = "__vue-devtools-component-inspector__", Vm = "__vue-devtools-component-inspector__card__", Lm = "__vue-devtools-component-inspector__name__", Fm = "__vue-devtools-component-inspector__indicator__", Bm = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, N1 = {
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
}, D1 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Ho() {
  return document.getElementById(Mm);
}
function k1() {
  return document.getElementById(Vm);
}
function x1() {
  return document.getElementById(Fm);
}
function R1() {
  return document.getElementById(Lm);
}
function Wc(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function Kc(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Mm, Object.assign(n.style, {
    ...Bm,
    ...Wc(e.bounds),
    ...e.style
  });
  const s = document.createElement("span");
  s.id = Vm, Object.assign(s.style, {
    ...N1,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const o = document.createElement("span");
  o.id = Lm, o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const r = document.createElement("i");
  return r.id = Fm, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(r.style, D1), s.appendChild(o), s.appendChild(r), n.appendChild(s), document.body.appendChild(n), n;
}
function zc(e) {
  const t = Ho(), n = k1(), s = R1(), o = x1();
  t && (Object.assign(t.style, {
    ...Bm,
    ...Wc(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function I1(e) {
  const t = Gs(e);
  if (!t.width && !t.height)
    return;
  const n = Aa(e);
  Ho() ? zc({ bounds: t, name: n }) : Kc({ bounds: t, name: n });
}
function $m() {
  const e = Ho();
  e && (e.style.display = "none");
}
var zl = null;
function ql(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (zl = n, n.vnode.el)) {
      const o = Gs(n), r = Aa(n);
      Ho() ? zc({ bounds: o, name: r }) : Kc({ bounds: o, name: r });
    }
  }
}
function P1(e, t) {
  if (e.preventDefault(), e.stopPropagation(), zl) {
    const n = w1(zl);
    t(n);
  }
}
var ta = null;
function M1() {
  $m(), window.removeEventListener("mouseover", ql), window.removeEventListener("click", ta, !0), ta = null;
}
function V1() {
  return window.addEventListener("mouseover", ql), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), P1(n, (s) => {
        window.removeEventListener("click", t, !0), ta = null, window.removeEventListener("mouseover", ql);
        const o = Ho();
        o && (o.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    ta = t, window.addEventListener("click", t, !0);
  });
}
function L1(e) {
  const t = Kl(St.value, e.id);
  if (t) {
    const [n] = Hc(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = Gs(t), o = document.createElement("div"), r = {
        ...Wc(s),
        position: "absolute"
      };
      Object.assign(o.style, r), document.body.appendChild(o), o.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      const s = Gs(t);
      if (s.width || s.height) {
        const o = Aa(t), r = Ho();
        r ? zc({ ...e, name: o, bounds: s }) : Kc({ ...e, name: o, bounds: s }), setTimeout(() => {
          r && (r.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
G();
var Od, Td;
(Td = (Od = me).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Od.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function F1(e) {
  let t = 0;
  const n = setInterval(() => {
    me.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function B1() {
  const e = me.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function $1() {
  return new Promise((e) => {
    function t() {
      B1(), e(me.__VUE_INSPECTOR__);
    }
    me.__VUE_INSPECTOR__ ? t() : F1(() => {
      t();
    });
  });
}
G();
G();
function j1(e) {
  return !!(e && e.__v_isReadonly);
}
function jm(e) {
  return j1(e) ? jm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function el(e) {
  return !!(e && e.__v_isRef === !0);
}
function cr(e) {
  const t = e && e.__v_raw;
  return t ? cr(t) : e;
}
var U1 = class {
  constructor() {
    this.refEditor = new H1();
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
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : cr(t) instanceof Map ? t.delete(n) : cr(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const o = t[e.newKey || n];
        this.refEditor.isRef(o) ? this.refEditor.set(o, s) : cr(t) instanceof Map ? t.set(e.newKey || n, s) : cr(t) instanceof Set ? t.add(s) : t[e.newKey || n] = s;
      }
    };
  }
}, H1 = class {
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
    return el(e) || jm(e);
  }
};
G();
G();
G();
var W1 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function K1() {
  if (!Dm || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(W1);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
G();
G();
G();
var Nd, Dd;
(Dd = (Nd = me).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Nd.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var z1 = new Proxy(me.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function q1(e, t) {
  ft.timelineLayersState[t.id] = !1, z1.push({
    ...e,
    descriptorId: t.id,
    appRecord: Uc(t.app)
  });
}
var kd, xd;
(xd = (kd = me).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (kd.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var qc = new Proxy(me.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), Um = No(() => {
  Wo.hooks.callHook("sendInspectorToClient", Hm());
});
function Y1(e, t) {
  var n, s;
  qc.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Uc(t.app)
  }), Um();
}
function Hm() {
  return qc.filter((e) => e.descriptor.app === St.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function ki(e, t) {
  return qc.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function X1() {
  const e = xm();
  e.hook("addInspector", ({ inspector: s, plugin: o }) => {
    Y1(s, o.descriptor);
  });
  const t = No(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ft.highPerfModeEnabled)
      return;
    const i = ki(s, o.descriptor.app), a = {
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
  const n = No(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ft.highPerfModeEnabled)
      return;
    const i = ki(s, o.descriptor.app), a = {
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
    const i = ki(s, r.descriptor.app);
    i && (i.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: o }) => {
    q1(s, o.descriptor);
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
  }), e.hook("getComponentBounds", async ({ instance: s }) => Gs(s)), e.hook("getComponentName", ({ instance: s }) => Aa(s)), e.hook("componentHighlight", ({ uid: s }) => {
    const o = St.value.instanceMap.get(s);
    o && I1(o);
  }), e.hook("componentUnhighlight", () => {
    $m();
  }), e;
}
var Rd, Id;
(Id = (Rd = me).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Rd.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Pd, Md;
(Md = (Pd = me).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Pd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Vd, Ld;
(Ld = (Vd = me).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Vd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Fd, Bd;
(Bd = (Fd = me).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Fd.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var $d, jd;
(jd = ($d = me).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || ($d.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Is = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function G1() {
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
    timelineLayersState: K1()
  };
}
var Ud, Hd;
(Hd = (Ud = me)[Is]) != null || (Ud[Is] = G1());
var Q1 = No((e) => {
  Wo.hooks.callHook("devtoolsStateUpdated", { state: e });
});
No((e, t) => {
  Wo.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var Sa = new Proxy(me.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? me.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : me.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), St = new Proxy(me.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? me.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? me.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : me.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Wm() {
  Q1({
    ...me[Is],
    appRecords: Sa.value,
    activeAppRecordId: St.id,
    tabs: me.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: me.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function J1(e) {
  me.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Wm();
}
function Z1(e) {
  me.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Wm();
}
var ft = new Proxy(me[Is], {
  get(e, t) {
    return t === "appRecords" ? Sa : t === "activeAppRecordId" ? St.id : t === "tabs" ? me.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? me.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : me[Is][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...me[Is] }, e[t] = n, me[Is][t] = n, !0;
  }
});
function e0(e = {}) {
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
      const f = (s = me.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? s : i;
      me.__VUE_INSPECTOR__.openInEditor(f, o, a, c);
    }
  }
}
G();
G();
G();
G();
G();
var Wd, Kd;
(Kd = (Wd = me).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Wd.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Yc = new Proxy(me.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Yl(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function Xc(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function t0(e) {
  var t, n, s;
  const o = (n = (t = Yc.find((r) => {
    var i;
    return r[0].id === e && !!((i = r[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = o?.settings) != null ? s : null;
}
function Km(e, t) {
  var n, s, o;
  const r = Xc(e);
  if (r) {
    const i = localStorage.getItem(r);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (s = (n = Yc.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? s : null;
    return Yl((o = i?.settings) != null ? o : {});
  }
  return Yl(t);
}
function n0(e, t) {
  const n = Xc(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Yl(t)));
}
function s0(e, t, n) {
  const s = Xc(e), o = localStorage.getItem(s), r = JSON.parse(o || "{}"), i = {
    ...r,
    [t]: n
  };
  localStorage.setItem(s, JSON.stringify(i)), Wo.hooks.callHookWith(
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
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
var zd, qd, Mt = (qd = (zd = me).__VUE_DEVTOOLS_HOOK) != null ? qd : zd.__VUE_DEVTOOLS_HOOK = xm(), o0 = {
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
}, zm = {
  on: o0,
  setupDevToolsPlugin(e, t) {
    return Mt.callHook("devtools-plugin:setup", e, t);
  }
}, r0 = class {
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
    const n = Hm().find((s) => s.packageName === this.plugin.descriptor.packageName);
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
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && n0(e.id, this.plugin.descriptor.settings);
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
    return Km(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, i0 = r0;
G();
G();
G();
G();
var a0 = "__vue_devtool_undefined__", l0 = "__vue_devtool_infinity__", c0 = "__vue_devtool_negative_infinity__", u0 = "__vue_devtool_nan__";
G();
G();
var d0 = {
  [a0]: "undefined",
  [u0]: "NaN",
  [l0]: "Infinity",
  [c0]: "-Infinity"
};
Object.entries(d0).reduce((e, [t, n]) => (e[n] = t, e), {});
G();
G();
G();
G();
G();
var Yd, Xd;
(Xd = (Yd = me).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Yd.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function qm(e, t) {
  return zm.setupDevToolsPlugin(e, t);
}
function f0(e, t) {
  const [n, s] = e;
  if (n.app !== t)
    return;
  const o = new i0({
    plugin: {
      setupFn: s,
      descriptor: n
    },
    ctx: Wo
  });
  n.packageName === "vuex" && o.on.editInspectorState((r) => {
    o.sendInspectorState(r.inspectorId);
  }), s(o);
}
function Ym(e, t) {
  me.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || ft.highPerfModeEnabled && !t?.inspectingComponent || (me.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Yc.forEach((n) => {
    f0(n, e);
  }));
}
G();
G();
var Rr = "__VUE_DEVTOOLS_ROUTER__", Do = "__VUE_DEVTOOLS_ROUTER_INFO__", Gd, Qd;
(Qd = (Gd = me)[Do]) != null || (Gd[Do] = {
  currentRoute: null,
  routes: []
});
var Jd, Zd;
(Zd = (Jd = me)[Rr]) != null || (Jd[Rr] = {});
new Proxy(me[Do], {
  get(e, t) {
    return me[Do][t];
  }
});
new Proxy(me[Rr], {
  get(e, t) {
    if (t === "value")
      return me[Rr];
  }
});
function p0(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Gc(e) {
  return e.map((t) => {
    let { path: n, name: s, children: o, meta: r } = t;
    return o?.length && (o = Gc(o)), {
      path: n,
      name: s,
      children: o,
      meta: r
    };
  });
}
function h0(e) {
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
      matched: Gc(i)
    };
  }
  return e;
}
function m0(e, t) {
  function n() {
    var s;
    const o = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, r = h0(o?.currentRoute.value), i = Gc(p0(o)), a = console.warn;
    console.warn = () => {
    }, me[Do] = {
      currentRoute: r ? Ad(r) : {},
      routes: Ad(i)
    }, me[Rr] = o, console.warn = a;
  }
  n(), zm.on.componentUpdated(No(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !ft.highPerfModeEnabled && Wo.hooks.callHook("routerInfoUpdated", { state: me[Do] }));
  }, 200));
}
function g0(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: St.value.app,
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
        app: St.value.app,
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
      const n = new U1(), s = {
        ...t,
        app: St.value.app,
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
      const n = ki(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return V1();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return M1();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Kl(St.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return L1({ id: t });
    },
    // open in editor
    openInEditor: e0,
    // get vue inspector
    getVueInspector: $1,
    // toggle app
    toggleApp(t, n) {
      const s = Sa.value.find((o) => o.id === t);
      s && (Z1(t), J1(s), m0(s, St), Um(), Ym(s.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Kl(St.value, t);
      if (n) {
        const [s] = Hc(n);
        s && (me.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = s);
      }
    },
    updatePluginSettings(t, n, s) {
      s0(t, n, s);
    },
    getPluginSettings(t) {
      return {
        options: t0(t),
        values: Km(t)
      };
    }
  };
}
G();
var ef, tf;
(tf = (ef = me).__VUE_DEVTOOLS_ENV__) != null || (ef.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var nf = X1(), sf, of;
(of = (sf = me).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (sf.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: nf,
  get state() {
    return {
      ...ft,
      activeAppRecordId: St.id,
      activeAppRecord: St.value,
      appRecords: Sa.value
    };
  },
  api: g0(nf)
});
var Wo = me.__VUE_DEVTOOLS_KIT_CONTEXT__;
G();
v1(y1());
var rf, af;
(af = (rf = me).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (rf.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
G();
G();
function v0(e) {
  ft.highPerfModeEnabled = e ?? !ft.highPerfModeEnabled, !e && St.value && Ym(St.value.app);
}
G();
G();
G();
function _0(e) {
  ft.devtoolsClientDetected = {
    ...ft.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(ft.devtoolsClientDetected).some(Boolean);
  v0(!t);
}
var lf, cf;
(cf = (lf = me).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (lf.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = _0);
G();
G();
G();
G();
G();
G();
G();
var y0 = class {
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
}, Xm = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new y0();
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
}, b0 = class extends Xm {
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
G();
G();
function E0(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function w0(e, t) {
  const n = E0(e);
  if ("find" in n)
    return n.find(t);
  const s = n;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t(r))
      return r;
  }
}
function ko(e, t) {
  Object.entries(e).forEach(([n, s]) => t(s, n));
}
function xi(e, t) {
  return e.indexOf(t) !== -1;
}
function uf(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var A0 = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return w0(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
G();
G();
var S0 = (e) => Object.prototype.toString.call(e).slice(8, -1), Gm = (e) => typeof e > "u", C0 = (e) => e === null, Ir = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Xl = (e) => Ir(e) && Object.keys(e).length === 0, hs = (e) => Array.isArray(e), O0 = (e) => typeof e == "string", T0 = (e) => typeof e == "number" && !isNaN(e), N0 = (e) => typeof e == "boolean", D0 = (e) => e instanceof RegExp, Pr = (e) => e instanceof Map, Mr = (e) => e instanceof Set, Qm = (e) => S0(e) === "Symbol", k0 = (e) => e instanceof Date && !isNaN(e.valueOf()), x0 = (e) => e instanceof Error, df = (e) => typeof e == "number" && isNaN(e), R0 = (e) => N0(e) || C0(e) || Gm(e) || T0(e) || O0(e) || Qm(e), I0 = (e) => typeof e == "bigint", P0 = (e) => e === 1 / 0 || e === -1 / 0, M0 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), V0 = (e) => e instanceof URL;
G();
var Jm = (e) => e.replace(/\./g, "\\."), tl = (e) => e.map(String).map(Jm).join("."), _r = (e) => {
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
G();
function wn(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Zm = [
  wn(Gm, "undefined", () => null, () => {
  }),
  wn(I0, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  wn(k0, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  wn(x0, "Error", (e, t) => {
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
  wn(D0, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  wn(
    Mr,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  wn(Pr, "map", (e) => [...e.entries()], (e) => new Map(e)),
  wn((e) => df(e) || P0(e), "number", (e) => df(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  wn((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  wn(V0, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Ca(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var eg = Ca((e, t) => Qm(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const s = n.symbolRegistry.getValue(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown symbol");
  return s;
}), L0 = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), tg = Ca(M0, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = L0[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function ng(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var sg = Ca(ng, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), og = Ca((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), F0 = [sg, eg, og, tg], ff = (e, t) => {
  const n = uf(F0, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = uf(Zm, (o) => o.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, rg = {};
Zm.forEach((e) => {
  rg[e.annotation] = e;
});
var B0 = (e, t, n) => {
  if (hs(t))
    switch (t[0]) {
      case "symbol":
        return eg.untransform(e, t, n);
      case "class":
        return sg.untransform(e, t, n);
      case "custom":
        return og.untransform(e, t, n);
      case "typed-array":
        return tg.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const s = rg[t];
    if (!s)
      throw new Error("Unknown transformation: " + t);
    return s.untransform(e, n);
  }
};
G();
var _o = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function ig(e) {
  if (xi(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (xi(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (xi(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var $0 = (e, t) => {
  ig(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Mr(e))
      e = _o(e, +s);
    else if (Pr(e)) {
      const o = +s, r = +t[++n] == 0 ? "key" : "value", i = _o(e, o);
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
}, Gl = (e, t, n) => {
  if (ig(t), t.length === 0)
    return n(e);
  let s = e;
  for (let r = 0; r < t.length - 1; r++) {
    const i = t[r];
    if (hs(s)) {
      const a = +i;
      s = s[a];
    } else if (Ir(s))
      s = s[i];
    else if (Mr(s)) {
      const a = +i;
      s = _o(s, a);
    } else if (Pr(s)) {
      if (r === t.length - 2)
        break;
      const c = +i, f = +t[++r] == 0 ? "key" : "value", u = _o(s, c);
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
  if (hs(s) ? s[+o] = n(s[+o]) : Ir(s) && (s[o] = n(s[o])), Mr(s)) {
    const r = _o(s, +o), i = n(r);
    r !== i && (s.delete(r), s.add(i));
  }
  if (Pr(s)) {
    const r = +t[t.length - 2], i = _o(s, r);
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
function Ql(e, t, n = []) {
  if (!e)
    return;
  if (!hs(e)) {
    ko(e, (r, i) => Ql(r, t, [...n, ..._r(i)]));
    return;
  }
  const [s, o] = e;
  o && ko(o, (r, i) => {
    Ql(r, t, [...n, ..._r(i)]);
  }), t(s, n);
}
function j0(e, t, n) {
  return Ql(t, (s, o) => {
    e = Gl(e, o, (r) => B0(r, s, n));
  }), e;
}
function U0(e, t) {
  function n(s, o) {
    const r = $0(e, _r(o));
    s.map(_r).forEach((i) => {
      e = Gl(e, i, () => r);
    });
  }
  if (hs(t)) {
    const [s, o] = t;
    s.forEach((r) => {
      e = Gl(e, _r(r), () => e);
    }), o && ko(o, n);
  } else
    ko(t, n);
  return e;
}
var H0 = (e, t) => Ir(e) || hs(e) || Pr(e) || Mr(e) || ng(e, t);
function W0(e, t, n) {
  const s = n.get(e);
  s ? s.push(t) : n.set(e, [t]);
}
function K0(e, t) {
  const n = {};
  let s;
  return e.forEach((o) => {
    if (o.length <= 1)
      return;
    t || (o = o.map((a) => a.map(String)).sort((a, c) => a.length - c.length));
    const [r, ...i] = o;
    r.length === 0 ? s = i.map(tl) : n[tl(r)] = i.map(tl);
  }), s ? Xl(n) ? [s] : [s, n] : Xl(n) ? void 0 : n;
}
var ag = (e, t, n, s, o = [], r = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const c = R0(e);
  if (!c) {
    W0(e, o, t);
    const g = i.get(e);
    if (g)
      return s ? {
        transformedValue: null
      } : g;
  }
  if (!H0(e, n)) {
    const g = ff(e, n), m = g ? {
      transformedValue: g.value,
      annotations: [g.type]
    } : {
      transformedValue: e
    };
    return c || i.set(e, m), m;
  }
  if (xi(r, e))
    return {
      transformedValue: null
    };
  const f = ff(e, n), u = (a = f?.value) != null ? a : e, d = hs(u) ? [] : {}, p = {};
  ko(u, (g, m) => {
    if (m === "__proto__" || m === "constructor" || m === "prototype")
      throw new Error(`Detected property ${m}. This is a prototype pollution risk, please remove it from your object.`);
    const v = ag(g, t, n, s, [...o, m], [...r, e], i);
    d[m] = v.transformedValue, hs(v.annotations) ? p[m] = v.annotations : Ir(v.annotations) && ko(v.annotations, (y, b) => {
      p[Jm(m) + "." + b] = y;
    });
  });
  const h = Xl(p) ? {
    transformedValue: d,
    annotations: f ? [f.type] : void 0
  } : {
    transformedValue: d,
    annotations: f ? [f.type, p] : p
  };
  return c || i.set(e, h), h;
};
G();
G();
function lg(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function pf(e) {
  return lg(e) === "Array";
}
function z0(e) {
  if (lg(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function q0(e, t, n, s, o) {
  const r = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  r === "enumerable" && (e[t] = n), o && r === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Jl(e, t = {}) {
  if (pf(e))
    return e.map((o) => Jl(o, t));
  if (!z0(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((o, r) => {
    if (pf(t.props) && !t.props.includes(r))
      return o;
    const i = e[r], a = Jl(i, t);
    return q0(o, r, a, e, t.nonenumerable), o;
  }, {});
}
var Ge = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new b0(), this.symbolRegistry = new Xm((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new A0(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = ag(e, t, this, this.dedupe), s = {
      json: n.transformedValue
    };
    n.annotations && (s.meta = {
      ...s.meta,
      values: n.annotations
    });
    const o = K0(t, this.dedupe);
    return o && (s.meta = {
      ...s.meta,
      referentialEqualities: o
    }), s;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let s = Jl(t);
    return n?.values && (s = j0(s, n.values, this)), n?.referentialEqualities && (s = U0(s, n.referentialEqualities)), s;
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
Ge.defaultInstance = new Ge();
Ge.serialize = Ge.defaultInstance.serialize.bind(Ge.defaultInstance);
Ge.deserialize = Ge.defaultInstance.deserialize.bind(Ge.defaultInstance);
Ge.stringify = Ge.defaultInstance.stringify.bind(Ge.defaultInstance);
Ge.parse = Ge.defaultInstance.parse.bind(Ge.defaultInstance);
Ge.registerClass = Ge.defaultInstance.registerClass.bind(Ge.defaultInstance);
Ge.registerSymbol = Ge.defaultInstance.registerSymbol.bind(Ge.defaultInstance);
Ge.registerCustom = Ge.defaultInstance.registerCustom.bind(Ge.defaultInstance);
Ge.allowErrorProps = Ge.defaultInstance.allowErrorProps.bind(Ge.defaultInstance);
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
G();
var hf, mf;
(mf = (hf = me).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (hf.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var gf, vf;
(vf = (gf = me).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (gf.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var _f, yf;
(yf = (_f = me).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (_f.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var bf, Ef;
(Ef = (bf = me).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (bf.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var wf, Af;
(Af = (wf = me).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (wf.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Sf, Cf;
(Cf = (Sf = me).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (Sf.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
G();
G();
G();
G();
G();
G();
G();
var Le = {};
let ur;
const Vr = (e) => ur = e, cg = Le.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Qs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Dn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Dn || (Dn = {}));
const cs = typeof window < "u", Of = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Y0(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Qc(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    fg(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function ug(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Ri(e) {
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
const Ii = typeof navigator == "object" ? navigator : { userAgent: "" }, dg = /Macintosh/.test(Ii.userAgent) && /AppleWebKit/.test(Ii.userAgent) && !/Safari/.test(Ii.userAgent), fg = cs ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !dg ? X0 : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Ii ? G0 : (
      // Fallback to using FileReader and a popup
      Q0
    )
  )
) : () => {
};
function X0(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? ug(s.href) ? Qc(e, t, n) : (s.target = "_blank", Ri(s)) : Ri(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    Ri(s);
  }, 0));
}
function G0(e, t = "download", n) {
  if (typeof e == "string")
    if (ug(e))
      Qc(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        Ri(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Y0(e, n), t);
}
function Q0(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return Qc(e, t, n);
  const o = e.type === "application/octet-stream", r = /constructor/i.test(String(Of.HTMLElement)) || "safari" in Of, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && r || dg) && typeof FileReader < "u") {
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
function Jc(e) {
  return "_a" in e && "install" in e;
}
function pg() {
  if (!("clipboard" in navigator))
    return pt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function hg(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (pt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function J0(e) {
  if (!pg())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), pt("Global state copied to clipboard.");
    } catch (t) {
      if (hg(t))
        return;
      pt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Z0(e) {
  if (!pg())
    try {
      mg(e, JSON.parse(await navigator.clipboard.readText())), pt("Global state pasted from clipboard.");
    } catch (t) {
      if (hg(t))
        return;
      pt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function ew(e) {
  try {
    fg(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    pt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Bn;
function tw() {
  Bn || (Bn = document.createElement("input"), Bn.type = "file", Bn.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Bn.onchange = async () => {
        const s = Bn.files;
        if (!s)
          return t(null);
        const o = s.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Bn.oncancel = () => t(null), Bn.onerror = n, Bn.click();
    });
  }
  return e;
}
async function nw(e) {
  try {
    const n = await tw()();
    if (!n)
      return;
    const { text: s, file: o } = n;
    mg(e, JSON.parse(s)), pt(`Global state imported from "${o.name}".`);
  } catch (t) {
    pt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function mg(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s ? Object.assign(s, t[n]) : e.state.value[n] = t[n];
  }
}
function nn(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const gg = "🍍 Pinia (root)", Pi = "_root";
function sw(e) {
  return Jc(e) ? {
    id: Pi,
    label: gg
  } : {
    id: e.$id,
    label: e.$id
  };
}
function ow(e) {
  if (Jc(e)) {
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
function rw(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: nn(e.type),
    key: nn(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function iw(e) {
  switch (e) {
    case Dn.direct:
      return "mutation";
    case Dn.patchFunction:
      return "$patch";
    case Dn.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let yo = !0;
const Mi = [], ks = "pinia:mutations", vt = "pinia", { assign: aw } = Object, na = (e) => "🍍 " + e;
function lw(e, t) {
  qm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Mi,
    app: e
  }, (n) => {
    typeof n.now != "function" && pt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: ks,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: vt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            J0(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Z0(t), n.sendInspectorTree(vt), n.sendInspectorState(vt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            ew(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await nw(t), n.sendInspectorTree(vt), n.sendInspectorState(vt);
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
            type: na(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: Te(i.$state),
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
            type: na(i.$id),
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
      if (s.app === e && s.inspectorId === vt) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(s.filter.toLowerCase()) : gg.toLowerCase().includes(s.filter.toLowerCase())) : o).map(sw);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === vt) {
        const o = s.nodeId === Pi ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.nodeId !== Pi && (globalThis.$store = Te(o)), s.state = ow(o));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === vt) {
        const o = s.nodeId === Pi ? t : t._s.get(s.nodeId);
        if (!o)
          return pt(`store "${s.nodeId}" not found`, "error");
        const { path: r } = s;
        Jc(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), yo = !1, s.set(o, r, s.state.value), yo = !0;
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
        i[0] = "$state", yo = !1, s.set(r, i, s.state.value), yo = !0;
      }
    });
  });
}
function cw(e, t) {
  Mi.includes(na(t.$id)) || Mi.push(na(t.$id)), qm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Mi,
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
      const u = vg++;
      n.addTimelineEvent({
        layerId: ks,
        event: {
          time: s(),
          title: "🛫 " + c,
          subtitle: "start",
          data: {
            store: nn(t.$id),
            action: nn(c),
            args: f
          },
          groupId: u
        }
      }), i((d) => {
        us = void 0, n.addTimelineEvent({
          layerId: ks,
          event: {
            time: s(),
            title: "🛬 " + c,
            subtitle: "end",
            data: {
              store: nn(t.$id),
              action: nn(c),
              args: f,
              result: d
            },
            groupId: u
          }
        });
      }), a((d) => {
        us = void 0, n.addTimelineEvent({
          layerId: ks,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + c,
            subtitle: "end",
            data: {
              store: nn(t.$id),
              action: nn(c),
              args: f,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      mt(() => U(t[i]), (a, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(vt), yo && n.addTimelineEvent({
          layerId: ks,
          event: {
            time: s(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: c
            },
            groupId: us
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, c) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(vt), !yo)
        return;
      const f = {
        time: s(),
        title: iw(a),
        data: aw({ store: nn(t.$id) }, rw(i)),
        groupId: us
      };
      a === Dn.patchFunction ? f.subtitle = "⤵️" : a === Dn.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: ks,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = ls((i) => {
      o(i), n.addTimelineEvent({
        layerId: ks,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: nn(t.$id),
            info: nn("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(vt), n.sendInspectorState(vt);
    });
    const { $dispose: r } = t;
    t.$dispose = () => {
      r(), n.notifyComponentUpdate(), n.sendInspectorTree(vt), n.sendInspectorState(vt), n.getSettings().logStoreChanges && pt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(vt), n.sendInspectorState(vt), n.getSettings().logStoreChanges && pt(`"${t.$id}" store installed 🆕`);
  });
}
let vg = 0, us;
function Tf(e, t, n) {
  const s = t.reduce((o, r) => (o[r] = Te(e)[r], o), {});
  for (const o in s)
    e[o] = function() {
      const r = vg, i = n ? new Proxy(e, {
        get(...c) {
          return us = r, Reflect.get(...c);
        },
        set(...c) {
          return us = r, Reflect.set(...c);
        }
      }) : e;
      us = r;
      const a = s[o].apply(i, arguments);
      return us = void 0, a;
    };
}
function uw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      Tf(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      Te(t)._hotUpdate = function(o) {
        s.apply(this, arguments), Tf(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    cw(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function dw() {
  const e = nh(!0), t = e.run(() => $({}));
  let n = [], s = [];
  const o = ls({
    install(r) {
      Vr(o), o._a = r, r.provide(cg, o), r.config.globalProperties.$pinia = o, Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && cs && lw(r, o), s.forEach((i) => n.push(i)), s = [];
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
  return Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && cs && typeof Proxy < "u" && o.use(uw), o;
}
function _g(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Qs(o) && Qs(s) && !Ye(s) && !ln(s) ? e[n] = _g(o, s) : e[n] = s;
  }
  return e;
}
const yg = () => {
};
function Nf(e, t, n, s = yg) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && sh() && K_(o), o;
}
function lo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const fw = (e) => e(), Df = Symbol(), nl = Symbol();
function Zl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Qs(o) && Qs(s) && e.hasOwnProperty(n) && !Ye(s) && !ln(s) ? e[n] = Zl(o, s) : e[n] = s;
  }
  return e;
}
const pw = Le.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function hw(e) {
  return !Qs(e) || !Object.prototype.hasOwnProperty.call(e, pw);
}
const { assign: zt } = Object;
function kf(e) {
  return !!(Ye(e) && e.effect);
}
function xf(e, t, n, s) {
  const { state: o, actions: r, getters: i } = t, a = n.state.value[e];
  let c;
  function f() {
    !a && (Le.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const u = Le.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      fn($(o ? o() : {}).value)
    ) : fn(n.state.value[e]);
    return zt(u, r, Object.keys(i || {}).reduce((d, p) => (Le.NODE_ENV !== "production" && p in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${e}".`), d[p] = ls(j(() => {
      Vr(n);
      const h = n._s.get(e);
      return i[p].call(h, h);
    })), d), {}));
  }
  return c = ec(e, f, t, n, s, !0), c;
}
function ec(e, t, n = {}, s, o, r) {
  let i;
  const a = zt({ actions: {} }, n);
  if (Le.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const c = { deep: !0 };
  Le.NODE_ENV !== "production" && (c.onTrigger = (w) => {
    f ? h = w : f == !1 && !x._hotUpdating && (Array.isArray(h) ? h.push(w) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, d = [], p = [], h;
  const g = s.state.value[e];
  !r && !g && (Le.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const m = $({});
  let v;
  function y(w) {
    let R;
    f = u = !1, Le.NODE_ENV !== "production" && (h = []), typeof w == "function" ? (w(s.state.value[e]), R = {
      type: Dn.patchFunction,
      storeId: e,
      events: h
    }) : (Zl(s.state.value[e], w), R = {
      type: Dn.patchObject,
      payload: w,
      storeId: e,
      events: h
    });
    const C = v = Symbol();
    qs().then(() => {
      v === C && (f = !0);
    }), u = !0, lo(d, R, s.state.value[e]);
  }
  const b = r ? function() {
    const { state: R } = n, C = R ? R() : {};
    this.$patch((F) => {
      zt(F, C);
    });
  } : (
    /* istanbul ignore next */
    Le.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : yg
  );
  function _() {
    i.stop(), d = [], p = [], s._s.delete(e);
  }
  const A = (w, R = "") => {
    if (Df in w)
      return w[nl] = R, w;
    const C = function() {
      Vr(s);
      const F = Array.from(arguments), fe = [], X = [];
      function re(be) {
        fe.push(be);
      }
      function z(be) {
        X.push(be);
      }
      lo(p, {
        args: F,
        name: C[nl],
        store: x,
        after: re,
        onError: z
      });
      let de;
      try {
        de = w.apply(this && this.$id === e ? this : x, F);
      } catch (be) {
        throw lo(X, be), be;
      }
      return de instanceof Promise ? de.then((be) => (lo(fe, be), be)).catch((be) => (lo(X, be), Promise.reject(be))) : (lo(fe, de), de);
    };
    return C[Df] = !0, C[nl] = R, C;
  }, T = /* @__PURE__ */ ls({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), N = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Nf.bind(null, p),
    $patch: y,
    $reset: b,
    $subscribe(w, R = {}) {
      const C = Nf(d, w, R.detached, () => F()), F = i.run(() => mt(() => s.state.value[e], (fe) => {
        (R.flush === "sync" ? u : f) && w({
          storeId: e,
          type: Dn.direct,
          events: h
        }, fe);
      }, zt({}, c, R)));
      return C;
    },
    $dispose: _
  }, x = fs(Le.NODE_ENV !== "production" || Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && cs ? zt(
    {
      _hmrPayload: T,
      _customProperties: ls(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    N
    // must be added later
    // setupStore
  ) : N);
  s._s.set(e, x);
  const k = (s._a && s._a.runWithContext || fw)(() => s._e.run(() => (i = nh()).run(() => t({ action: A }))));
  for (const w in k) {
    const R = k[w];
    if (Ye(R) && !kf(R) || ln(R))
      Le.NODE_ENV !== "production" && o ? m.value[w] = wi(k, w) : r || (g && hw(R) && (Ye(R) ? R.value = g[w] : Zl(R, g[w])), s.state.value[e][w] = R), Le.NODE_ENV !== "production" && T.state.push(w);
    else if (typeof R == "function") {
      const C = Le.NODE_ENV !== "production" && o ? R : A(R, w);
      k[w] = C, Le.NODE_ENV !== "production" && (T.actions[w] = R), a.actions[w] = R;
    } else Le.NODE_ENV !== "production" && kf(R) && (T.getters[w] = r ? (
      // @ts-expect-error
      n.getters[w]
    ) : R, cs && (k._getters || // @ts-expect-error: same
    (k._getters = ls([]))).push(w));
  }
  if (zt(x, k), zt(Te(x), k), Object.defineProperty(x, "$state", {
    get: () => Le.NODE_ENV !== "production" && o ? m.value : s.state.value[e],
    set: (w) => {
      if (Le.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      y((R) => {
        zt(R, w);
      });
    }
  }), Le.NODE_ENV !== "production" && (x._hotUpdate = ls((w) => {
    x._hotUpdating = !0, w._hmrPayload.state.forEach((R) => {
      if (R in x.$state) {
        const C = w.$state[R], F = x.$state[R];
        typeof C == "object" && Qs(C) && Qs(F) ? _g(C, F) : w.$state[R] = F;
      }
      x[R] = wi(w.$state, R);
    }), Object.keys(x.$state).forEach((R) => {
      R in w.$state || delete x[R];
    }), f = !1, u = !1, s.state.value[e] = wi(w._hmrPayload, "hotState"), u = !0, qs().then(() => {
      f = !0;
    });
    for (const R in w._hmrPayload.actions) {
      const C = w[R];
      x[R] = //
      A(C, R);
    }
    for (const R in w._hmrPayload.getters) {
      const C = w._hmrPayload.getters[R], F = r ? (
        // special handling of options api
        j(() => (Vr(s), C.call(x, x)))
      ) : C;
      x[R] = //
      F;
    }
    Object.keys(x._hmrPayload.getters).forEach((R) => {
      R in w._hmrPayload.getters || delete x[R];
    }), Object.keys(x._hmrPayload.actions).forEach((R) => {
      R in w._hmrPayload.actions || delete x[R];
    }), x._hmrPayload = w._hmrPayload, x._getters = w._getters, x._hotUpdating = !1;
  })), Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && cs) {
    const w = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(x, R, zt({ value: x[R] }, w));
    });
  }
  return s._p.forEach((w) => {
    if (Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && cs) {
      const R = i.run(() => w({
        store: x,
        app: s._a,
        pinia: s,
        options: a
      }));
      Object.keys(R || {}).forEach((C) => x._customProperties.add(C)), zt(x, R);
    } else
      zt(x, i.run(() => w({
        store: x,
        app: s._a,
        pinia: s,
        options: a
      })));
  }), Le.NODE_ENV !== "production" && x.$state && typeof x.$state == "object" && typeof x.$state.constructor == "function" && !x.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${x.$id}".`), g && r && n.hydrate && n.hydrate(x.$state, g), f = !0, u = !0, x;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hn(e, t, n) {
  let s;
  const o = typeof t == "function";
  s = o ? n : t;
  function r(i, a) {
    const c = vb();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (Le.NODE_ENV === "test" && ur && ur._testing ? null : i) || (c ? Bt(cg, null) : null), i && Vr(i), Le.NODE_ENV !== "production" && !ur)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = ur, i._s.has(e) || (o ? ec(e, t, s, i) : xf(e, s, i), Le.NODE_ENV !== "production" && (r._pinia = i));
    const f = i._s.get(e);
    if (Le.NODE_ENV !== "production" && a) {
      const u = "__hot:" + e, d = o ? ec(u, t, s, i, !0) : xf(u, zt({}, s), i, !0);
      a._hotUpdate(d), delete i.state.value[u], i._s.delete(u);
    }
    if (Le.NODE_ENV !== "production" && cs) {
      const u = Qn();
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
function mn(e) {
  const t = Te(e), n = {};
  for (const s in t) {
    const o = t[s];
    o.effect ? n[s] = // ...
    j({
      get: () => e[s],
      set(r) {
        e[s] = r;
      }
    }) : (Ye(o) || ln(o)) && (n[s] = // ---
    wi(e, s));
  }
  return n;
}
function mw() {
  return bg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function bg() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const gw = typeof Proxy == "function", vw = "devtools-plugin:setup", _w = "plugin:settings:set";
let co, tc;
function yw() {
  var e;
  return co !== void 0 || (typeof window < "u" && window.performance ? (co = !0, tc = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (co = !0, tc = globalThis.perf_hooks.performance) : co = !1), co;
}
function bw() {
  return yw() ? tc.now() : Date.now();
}
class Ew {
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
        return bw();
      }
    }, n && n.on(_w, (i, a) => {
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
function ww(e, t) {
  const n = e, s = bg(), o = mw(), r = gw && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    o.emit(vw, e, t);
  else {
    const i = r ? new Ew(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
var Ne = {};
const Un = typeof document < "u";
function Eg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Aw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && Eg(e.default);
}
const Ue = Object.assign;
function sl(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = $t(o) ? o.map(e) : e(o);
  }
  return n;
}
const yr = () => {
}, $t = Array.isArray;
function Me(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const wg = /#/g, Sw = /&/g, Cw = /\//g, Ow = /=/g, Tw = /\?/g, Ag = /\+/g, Nw = /%5B/g, Dw = /%5D/g, Sg = /%5E/g, kw = /%60/g, Cg = /%7B/g, xw = /%7C/g, Og = /%7D/g, Rw = /%20/g;
function Zc(e) {
  return encodeURI("" + e).replace(xw, "|").replace(Nw, "[").replace(Dw, "]");
}
function Iw(e) {
  return Zc(e).replace(Cg, "{").replace(Og, "}").replace(Sg, "^");
}
function nc(e) {
  return Zc(e).replace(Ag, "%2B").replace(Rw, "+").replace(wg, "%23").replace(Sw, "%26").replace(kw, "`").replace(Cg, "{").replace(Og, "}").replace(Sg, "^");
}
function Pw(e) {
  return nc(e).replace(Ow, "%3D");
}
function Mw(e) {
  return Zc(e).replace(wg, "%23").replace(Tw, "%3F");
}
function Vw(e) {
  return e == null ? "" : Mw(e).replace(Cw, "%2F");
}
function xo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    Ne.NODE_ENV !== "production" && Me(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Lw = /\/$/, Fw = (e) => e.replace(Lw, "");
function ol(e, t, n = "/") {
  let s, o = {}, r = "", i = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return a < c && a >= 0 && (c = -1), c > -1 && (s = t.slice(0, c), r = t.slice(c + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (s = s || t.slice(0, a), i = t.slice(a, t.length)), s = jw(s ?? t, n), {
    fullPath: s + (r && "?") + r + i,
    path: s,
    query: o,
    hash: xo(i)
  };
}
function Bw(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Rf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function If(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && ms(t.matched[s], n.matched[o]) && Tg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ms(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Tg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!$w(e[n], t[n]))
      return !1;
  return !0;
}
function $w(e, t) {
  return $t(e) ? Pf(e, t) : $t(t) ? Pf(t, e) : e === t;
}
function Pf(e, t) {
  return $t(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function jw(e, t) {
  if (e.startsWith("/"))
    return e;
  if (Ne.NODE_ENV !== "production" && !t.startsWith("/"))
    return Me(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
const ts = {
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
var Lr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Lr || (Lr = {}));
var br;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(br || (br = {}));
function Uw(e) {
  if (!e)
    if (Un) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Fw(e);
}
const Hw = /^[^#]+#/;
function Ww(e, t) {
  return e.replace(Hw, "#") + t;
}
function Kw(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const Oa = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function zw(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if (Ne.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const r = document.querySelector(e.el);
        if (s && r) {
          Me(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Me(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      Ne.NODE_ENV !== "production" && Me(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Kw(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Mf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const sc = /* @__PURE__ */ new Map();
function qw(e, t) {
  sc.set(e, t);
}
function Yw(e) {
  const t = sc.get(e);
  return sc.delete(e), t;
}
let Xw = () => location.protocol + "//" + location.host;
function Ng(e, t) {
  const { pathname: n, search: s, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, c = o.slice(a);
    return c[0] !== "/" && (c = "/" + c), Rf(c, "");
  }
  return Rf(n, e) + s + o;
}
function Gw(e, t, n, s) {
  let o = [], r = [], i = null;
  const a = ({ state: p }) => {
    const h = Ng(e, location), g = n.value, m = t.value;
    let v = 0;
    if (p) {
      if (n.value = h, t.value = p, i && i === g) {
        i = null;
        return;
      }
      v = m ? p.position - m.position : 0;
    } else
      s(h);
    o.forEach((y) => {
      y(n.value, g, {
        delta: v,
        type: Lr.pop,
        direction: v ? v > 0 ? br.forward : br.back : br.unknown
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
    p.state && p.replaceState(Ue({}, p.state, { scroll: Oa() }), "");
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
function Vf(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? Oa() : null
  };
}
function Qw(e) {
  const { history: t, location: n } = window, s = {
    value: Ng(e, n)
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
    const d = e.indexOf("#"), p = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : Xw() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](f, "", p), o.value = f;
    } catch (h) {
      Ne.NODE_ENV !== "production" ? Me("Error with push/replace State", h) : console.error(h), n[u ? "replace" : "assign"](p);
    }
  }
  function i(c, f) {
    const u = Ue({}, t.state, Vf(
      o.value.back,
      // keep back and forward entries but override current position
      c,
      o.value.forward,
      !0
    ), f, { position: o.value.position });
    r(c, u, !0), s.value = c;
  }
  function a(c, f) {
    const u = Ue(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: c,
        scroll: Oa()
      }
    );
    Ne.NODE_ENV !== "production" && !t.state && Me(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), r(u.current, u, !0);
    const d = Ue({}, Vf(s.value, c, null), { position: u.position + 1 }, f);
    r(c, d, !1), s.value = c;
  }
  return {
    location: s,
    state: o,
    push: a,
    replace: i
  };
}
function Jw(e) {
  e = Uw(e);
  const t = Qw(e), n = Gw(e, t.state, t.location, t.replace);
  function s(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const o = Ue({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: Ww.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function Zw(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Ne.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Me(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Jw(e);
}
function sa(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Dg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const oc = Symbol(Ne.NODE_ENV !== "production" ? "navigation failure" : "");
var Lf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Lf || (Lf = {}));
const eA = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${nA(t)}" via a navigation guard.`;
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
function Ro(e, t) {
  return Ne.NODE_ENV !== "production" ? Ue(new Error(eA[e](t)), {
    type: e,
    [oc]: !0
  }, t) : Ue(new Error(), {
    type: e,
    [oc]: !0
  }, t);
}
function $n(e, t) {
  return e instanceof Error && oc in e && (t == null || !!(e.type & t));
}
const tA = ["params", "query", "hash"];
function nA(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of tA)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Ff = "[^/]+?", sA = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, oA = /[.+*?^${}()[\]/\\]/g;
function rA(e, t) {
  const n = Ue({}, sA, t), s = [];
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
        d || (o += "/"), o += p.value.replace(oA, "\\$&"), h += 40;
      else if (p.type === 1) {
        const { value: g, repeatable: m, optional: v, regexp: y } = p;
        r.push({
          name: g,
          repeatable: m,
          optional: v
        });
        const b = y || Ff;
        if (b !== Ff) {
          h += 10;
          try {
            new RegExp(`(${b})`);
          } catch (A) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${b}): ` + A.message);
          }
        }
        let _ = m ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        d || (_ = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        v && f.length < 2 ? `(?:/${_})` : "/" + _), v && (_ += "?"), o += _, h += 20, v && (h += -8), m && (h += -20), b === ".*" && (h += -50);
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
          const { value: g, repeatable: m, optional: v } = h, y = g in f ? f[g] : "";
          if ($t(y) && !m)
            throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
          const b = $t(y) ? y.join("/") : y;
          if (!b)
            if (v)
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
function iA(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function kg(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const r = iA(s[n], o[n]);
    if (r)
      return r;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Bf(s))
      return 1;
    if (Bf(o))
      return -1;
  }
  return o.length - s.length;
}
function Bf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const aA = {
  type: 0,
  value: ""
}, lA = /[a-zA-Z0-9_]/;
function cA(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[aA]];
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
        c === "(" ? n = 2 : lA.test(c) ? p() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--);
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
function uA(e, t, n) {
  const s = rA(cA(e.path), n);
  if (Ne.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const i of s.keys)
      r.has(i.name) && Me(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(i.name);
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
function dA(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Hf({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(d) {
    return s.get(d);
  }
  function r(d, p, h) {
    const g = !h, m = jf(d);
    Ne.NODE_ENV !== "production" && mA(m, p), m.aliasOf = h && h.record;
    const v = Hf(t, d), y = [m];
    if ("alias" in d) {
      const A = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const T of A)
        y.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          jf(Ue({}, m, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: h ? h.record.components : m.components,
            path: T,
            // we might be the child of an alias
            aliasOf: h ? h.record : m
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let b, _;
    for (const A of y) {
      const { path: T } = A;
      if (p && T[0] !== "/") {
        const N = p.record.path, x = N[N.length - 1] === "/" ? "" : "/";
        A.path = p.record.path + (T && x + T);
      }
      if (Ne.NODE_ENV !== "production" && A.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (b = uA(A, p, v), Ne.NODE_ENV !== "production" && p && T[0] === "/" && vA(b, p), h ? (h.alias.push(b), Ne.NODE_ENV !== "production" && hA(h, b)) : (_ = _ || b, _ !== b && _.alias.push(b), g && d.name && !Uf(b) && (Ne.NODE_ENV !== "production" && gA(d, p), i(d.name))), xg(b) && c(b), m.children) {
        const N = m.children;
        for (let x = 0; x < N.length; x++)
          r(N[x], b, h && h.children[x]);
      }
      h = h || b;
    }
    return _ ? () => {
      i(_);
    } : yr;
  }
  function i(d) {
    if (Dg(d)) {
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
    const p = _A(d, n);
    n.splice(p, 0, d), d.record.name && !Uf(d) && s.set(d.record.name, d);
  }
  function f(d, p) {
    let h, g = {}, m, v;
    if ("name" in d && d.name) {
      if (h = s.get(d.name), !h)
        throw Ro(1, {
          location: d
        });
      if (Ne.NODE_ENV !== "production") {
        const _ = Object.keys(d.params || {}).filter((A) => !h.keys.find((T) => T.name === A));
        _.length && Me(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      v = h.record.name, g = Ue(
        // paramsFromLocation is a new object
        $f(
          p.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          h.keys.filter((_) => !_.optional).concat(h.parent ? h.parent.keys.filter((_) => _.optional) : []).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && $f(d.params, h.keys.map((_) => _.name))
      ), m = h.stringify(g);
    } else if (d.path != null)
      m = d.path, Ne.NODE_ENV !== "production" && !m.startsWith("/") && Me(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((_) => _.re.test(m)), h && (g = h.parse(m), v = h.record.name);
    else {
      if (h = p.name ? s.get(p.name) : n.find((_) => _.re.test(p.path)), !h)
        throw Ro(1, {
          location: d,
          currentLocation: p
        });
      v = h.record.name, g = Ue({}, p.params, d.params), m = h.stringify(g);
    }
    const y = [];
    let b = h;
    for (; b; )
      y.unshift(b.record), b = b.parent;
    return {
      name: v,
      path: m,
      params: g,
      matched: y,
      meta: pA(y)
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
function $f(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function jf(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: fA(e),
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
function fA(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const s in e.components)
      t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function Uf(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function pA(e) {
  return e.reduce((t, n) => Ue(t, n.meta), {});
}
function Hf(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function rc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function hA(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(rc.bind(null, n)))
      return Me(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(rc.bind(null, n)))
      return Me(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function mA(e, t) {
  t && t.record.name && !e.name && !e.path && Me(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function gA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function vA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(rc.bind(null, n)))
      return Me(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function _A(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const r = n + s >> 1;
    kg(e, t[r]) < 0 ? s = r : n = r + 1;
  }
  const o = yA(e);
  return o && (s = t.lastIndexOf(o, s - 1), Ne.NODE_ENV !== "production" && s < 0 && Me(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), s;
}
function yA(e) {
  let t = e;
  for (; t = t.parent; )
    if (xg(t) && kg(e, t) === 0)
      return t;
}
function xg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function bA(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(Ag, " "), i = r.indexOf("="), a = xo(i < 0 ? r : r.slice(0, i)), c = i < 0 ? null : xo(r.slice(i + 1));
    if (a in t) {
      let f = t[a];
      $t(f) || (f = t[a] = [f]), f.push(c);
    } else
      t[a] = c;
  }
  return t;
}
function Wf(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = Pw(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    ($t(s) ? s.map((r) => r && nc(r)) : [s && nc(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function EA(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = $t(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const wA = Symbol(Ne.NODE_ENV !== "production" ? "router view location matched" : ""), Kf = Symbol(Ne.NODE_ENV !== "production" ? "router view depth" : ""), eu = Symbol(Ne.NODE_ENV !== "production" ? "router" : ""), tu = Symbol(Ne.NODE_ENV !== "production" ? "route location" : ""), ic = Symbol(Ne.NODE_ENV !== "production" ? "router view location" : "");
function nr() {
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
function is(e, t, n, s, o, r = (i) => i()) {
  const i = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((a, c) => {
    const f = (p) => {
      p === !1 ? c(Ro(4, {
        from: n,
        to: t
      })) : p instanceof Error ? c(p) : sa(p) ? c(Ro(2, {
        from: t,
        to: p
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === i && typeof p == "function" && i.push(p), a());
    }, u = r(() => e.call(s && s.instances[o], t, n, Ne.NODE_ENV !== "production" ? AA(f, t, n) : f));
    let d = Promise.resolve(u);
    if (e.length < 3 && (d = d.then(f)), Ne.NODE_ENV !== "production" && e.length > 2) {
      const p = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        d = d.then((h) => f._called ? h : (Me(p), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        Me(p), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((p) => c(p));
  });
}
function AA(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && Me(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function rl(e, t, n, s, o = (r) => r()) {
  const r = [];
  for (const i of e) {
    Ne.NODE_ENV !== "production" && !i.components && !i.children.length && Me(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let c = i.components[a];
      if (Ne.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Me(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Me(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = c;
          c = () => f;
        } else c.__asyncLoader && // warn only once per component
        !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Me(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (Eg(c)) {
          const u = (c.__vccOpts || c)[t];
          u && r.push(is(u, n, s, i, a, o));
        } else {
          let f = c();
          Ne.NODE_ENV !== "production" && !("catch" in f) && (Me(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), r.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const d = Aw(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = d;
            const h = (d.__vccOpts || d)[t];
            return h && is(h, n, s, i, a, o)();
          }));
        }
    }
  }
  return r;
}
function zf(e) {
  const t = Bt(eu), n = Bt(tu);
  let s = !1, o = null;
  const r = j(() => {
    const u = U(e.to);
    return Ne.NODE_ENV !== "production" && (!s || u !== o) && (sa(u) || (s ? Me(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, o, `
- props:`, e) : Me(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), o = u, s = !0), t.resolve(u);
  }), i = j(() => {
    const { matched: u } = r.value, { length: d } = u, p = u[d - 1], h = n.matched;
    if (!p || !h.length)
      return -1;
    const g = h.findIndex(ms.bind(null, p));
    if (g > -1)
      return g;
    const m = qf(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      qf(p) === m && // avoid comparing the child with its parent
      h[h.length - 1].path !== m ? h.findIndex(ms.bind(null, u[d - 2])) : g
    );
  }), a = j(() => i.value > -1 && NA(n.params, r.value.params)), c = j(() => i.value > -1 && i.value === n.matched.length - 1 && Tg(n.params, r.value.params));
  function f(u = {}) {
    if (TA(u)) {
      const d = t[U(e.replace) ? "replace" : "push"](
        U(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(yr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (Ne.NODE_ENV !== "production" && Un) {
    const u = Qn();
    if (u) {
      const d = {
        route: r.value,
        isActive: a.value,
        isExactActive: c.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), va(() => {
        d.route = r.value, d.isActive = a.value, d.isExactActive = c.value, d.error = sa(U(e.to)) ? null : 'Invalid "to" value';
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
function SA(e) {
  return e.length === 1 ? e[0] : e;
}
const CA = /* @__PURE__ */ Ce({
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
  useLink: zf,
  setup(e, { slots: t }) {
    const n = fs(zf(e)), { options: s } = Bt(eu), o = j(() => ({
      [Yf(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Yf(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && SA(t.default(n));
      return e.custom ? r : Bc("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, r);
    };
  }
}), OA = CA;
function TA(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function NA(e, t) {
  for (const n in t) {
    const s = t[n], o = e[n];
    if (typeof s == "string") {
      if (s !== o)
        return !1;
    } else if (!$t(o) || o.length !== s.length || s.some((r, i) => r !== o[i]))
      return !1;
  }
  return !0;
}
function qf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Yf = (e, t, n) => e ?? t ?? n, DA = /* @__PURE__ */ Ce({
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
    Ne.NODE_ENV !== "production" && xA();
    const s = Bt(ic), o = j(() => e.route || s.value), r = Bt(Kf, 0), i = j(() => {
      let f = U(r);
      const { matched: u } = o.value;
      let d;
      for (; (d = u[f]) && !d.components; )
        f++;
      return f;
    }), a = j(() => o.value.matched[i.value]);
    Ti(Kf, j(() => i.value + 1)), Ti(wA, a), Ti(ic, o);
    const c = $();
    return mt(() => [c.value, a.value, e.name], ([f, u, d], [p, h, g]) => {
      u && (u.instances[d] = f, h && h !== u && f && f === p && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!h || !ms(u, h) || !p) && (u.enterCallbacks[d] || []).forEach((m) => m(f));
    }, { flush: "post" }), () => {
      const f = o.value, u = e.name, d = a.value, p = d && d.components[u];
      if (!p)
        return Xf(n.default, { Component: p, route: f });
      const h = d.props[u], g = h ? h === !0 ? f.params : typeof h == "function" ? h(f) : h : null, v = Bc(p, Ue({}, g, t, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (d.instances[u] = null);
        },
        ref: c
      }));
      if (Ne.NODE_ENV !== "production" && Un && v.ref) {
        const y = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        ($t(v.ref) ? v.ref.map((_) => _.i) : [v.ref.i]).forEach((_) => {
          _.__vrv_devtools = y;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Xf(n.default, { Component: v, route: f }) || v
      );
    };
  }
});
function Xf(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const kA = DA;
function xA() {
  const e = Qn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    Me(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function sr(e, t) {
  const n = Ue({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => UA(s, ["instances", "children", "aliasOf"]))
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
function di(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let RA = 0;
function IA(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = RA++;
  ww({
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
        value: sr(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const p = d.__vrv_devtools;
        u.tags.push({
          label: (p.name ? `${p.name.toString()}: ` : "") + p.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Rg
        });
      }
      $t(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((p) => {
        let h = p.route.path, g = Mg, m = "", v = 0;
        p.error ? (h = p.error, g = FA, v = BA) : p.isExactActive ? (g = Pg, m = "This is exactly active") : p.isActive && (g = Ig, m = "This link is active"), u.tags.push({
          label: h,
          textColor: v,
          tooltip: m,
          backgroundColor: g
        });
      }));
    }), mt(t.currentRoute, () => {
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
        guard: di("beforeEach"),
        from: sr(d, "Current Location during this navigation"),
        to: sr(u, "Target location")
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
        guard: di("afterEach")
      };
      p ? (h.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: p ? p.message : "",
          tooltip: "Navigation Failure",
          value: p
        }
      }, h.status = di("❌")) : h.status = di("✅"), h.from = sr(d, "Current Location during this navigation"), h.to = sr(u, "Target location"), o.addTimelineEvent({
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
      d.forEach(Fg), u.filter && (d = d.filter((p) => (
        // save matches state based on the payload
        ac(p, u.filter.toLowerCase())
      ))), d.forEach((p) => Lg(p, t.currentRoute.value)), u.rootNodes = d.map(Vg);
    }
    let f;
    o.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === a && c();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const p = n.getRoutes().find((h) => h.record.__vd_id === u.nodeId);
        p && (u.state = {
          options: MA(p)
        });
      }
    }), o.sendInspectorTree(a), o.sendInspectorState(a);
  });
}
function PA(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function MA(e) {
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
        display: e.keys.map((s) => `${s.name}${PA(s)}`).join(" "),
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
const Rg = 15485081, Ig = 2450411, Pg = 8702998, VA = 2282478, Mg = 16486972, LA = 6710886, FA = 16704226, BA = 12131356;
function Vg(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: VA
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Mg
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Rg
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Pg
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ig
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: LA
  });
  let s = n.__vd_id;
  return s == null && (s = String($A++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Vg)
  };
}
let $A = 0;
const jA = /^\/(.*)\/([a-z]*)$/;
function Lg(e, t) {
  const n = t.matched.length && ms(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => ms(s, e.record))), e.children.forEach((s) => Lg(s, t));
}
function Fg(e) {
  e.__vd_match = !1, e.children.forEach(Fg);
}
function ac(e, t) {
  const n = String(e.re).match(jA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => ac(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = xo(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => ac(i, t));
}
function UA(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function HA(e) {
  const t = dA(e.routes, e), n = e.parseQuery || bA, s = e.stringifyQuery || Wf, o = e.history;
  if (Ne.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const r = nr(), i = nr(), a = nr(), c = dy(ts);
  let f = ts;
  Un && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = sl.bind(null, (L) => "" + L), d = sl.bind(null, Vw), p = (
    // @ts-expect-error: intentionally avoid the type check
    sl.bind(null, xo)
  );
  function h(L, J) {
    let se, ve;
    return Dg(L) ? (se = t.getRecordMatcher(L), Ne.NODE_ENV !== "production" && !se && Me(`Parent route "${String(L)}" not found when adding child route`, J), ve = J) : ve = L, t.addRoute(ve, se);
  }
  function g(L) {
    const J = t.getRecordMatcher(L);
    J ? t.removeRoute(J) : Ne.NODE_ENV !== "production" && Me(`Cannot remove non-existent route "${String(L)}"`);
  }
  function m() {
    return t.getRoutes().map((L) => L.record);
  }
  function v(L) {
    return !!t.getRecordMatcher(L);
  }
  function y(L, J) {
    if (J = Ue({}, J || c.value), typeof L == "string") {
      const O = ol(n, L, J.path), V = t.resolve({ path: O.path }, J), q = o.createHref(O.fullPath);
      return Ne.NODE_ENV !== "production" && (q.startsWith("//") ? Me(`Location "${L}" resolved to "${q}". A resolved location cannot start with multiple slashes.`) : V.matched.length || Me(`No match found for location with path "${L}"`)), Ue(O, V, {
        params: p(V.params),
        hash: xo(O.hash),
        redirectedFrom: void 0,
        href: q
      });
    }
    if (Ne.NODE_ENV !== "production" && !sa(L))
      return Me(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, L), y({});
    let se;
    if (L.path != null)
      Ne.NODE_ENV !== "production" && "params" in L && !("name" in L) && // @ts-expect-error: the type is never
      Object.keys(L.params).length && Me(`Path "${L.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), se = Ue({}, L, {
        path: ol(n, L.path, J.path).path
      });
    else {
      const O = Ue({}, L.params);
      for (const V in O)
        O[V] == null && delete O[V];
      se = Ue({}, L, {
        params: d(O)
      }), J.params = d(J.params);
    }
    const ve = t.resolve(se, J), Ie = L.hash || "";
    Ne.NODE_ENV !== "production" && Ie && !Ie.startsWith("#") && Me(`A \`hash\` should always start with the character "#". Replace "${Ie}" with "#${Ie}".`), ve.params = u(p(ve.params));
    const tt = Bw(s, Ue({}, L, {
      hash: Iw(Ie),
      path: ve.path
    })), E = o.createHref(tt);
    return Ne.NODE_ENV !== "production" && (E.startsWith("//") ? Me(`Location "${L}" resolved to "${E}". A resolved location cannot start with multiple slashes.`) : ve.matched.length || Me(`No match found for location with path "${L.path != null ? L.path : L}"`)), Ue({
      fullPath: tt,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: Ie,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === Wf ? EA(L.query) : L.query || {}
      )
    }, ve, {
      redirectedFrom: void 0,
      href: E
    });
  }
  function b(L) {
    return typeof L == "string" ? ol(n, L, c.value.path) : Ue({}, L);
  }
  function _(L, J) {
    if (f !== L)
      return Ro(8, {
        from: J,
        to: L
      });
  }
  function A(L) {
    return x(L);
  }
  function T(L) {
    return A(Ue(b(L), { replace: !0 }));
  }
  function N(L) {
    const J = L.matched[L.matched.length - 1];
    if (J && J.redirect) {
      const { redirect: se } = J;
      let ve = typeof se == "function" ? se(L) : se;
      if (typeof ve == "string" && (ve = ve.includes("?") || ve.includes("#") ? ve = b(ve) : (
        // force empty params
        { path: ve }
      ), ve.params = {}), Ne.NODE_ENV !== "production" && ve.path == null && !("name" in ve))
        throw Me(`Invalid redirect found:
${JSON.stringify(ve, null, 2)}
 when navigating to "${L.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Ue({
        query: L.query,
        hash: L.hash,
        // avoid transferring params if the redirect has a path
        params: ve.path != null ? {} : L.params
      }, ve);
    }
  }
  function x(L, J) {
    const se = f = y(L), ve = c.value, Ie = L.state, tt = L.force, E = L.replace === !0, O = N(se);
    if (O)
      return x(
        Ue(b(O), {
          state: typeof O == "object" ? Ue({}, Ie, O.state) : Ie,
          force: tt,
          replace: E
        }),
        // keep original redirectedFrom if it exists
        J || se
      );
    const V = se;
    V.redirectedFrom = J;
    let q;
    return !tt && If(s, ve, se) && (q = Ro(16, { to: V, from: ve }), K(
      ve,
      ve,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (q ? Promise.resolve(q) : w(V, ve)).catch((W) => $n(W) ? (
      // navigation redirects still mark the router as ready
      $n(
        W,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? W : et(W)
    ) : (
      // reject any unknown error
      de(W, V, ve)
    )).then((W) => {
      if (W) {
        if ($n(
          W,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return Ne.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          If(s, y(W.to), V) && // and we have done it a couple of times
          J && // @ts-expect-error: added only in dev
          (J._count = J._count ? (
            // @ts-expect-error
            J._count + 1
          ) : 1) > 30 ? (Me(`Detected a possibly infinite redirection in a navigation guard when going from "${ve.fullPath}" to "${V.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : x(
            // keep options
            Ue({
              // preserve an existing replacement but allow the redirect to override it
              replace: E
            }, b(W.to), {
              state: typeof W.to == "object" ? Ue({}, Ie, W.to.state) : Ie,
              force: tt
            }),
            // preserve the original redirectedFrom if any
            J || V
          );
      } else
        W = C(V, ve, !0, E, Ie);
      return R(V, ve, W), W;
    });
  }
  function I(L, J) {
    const se = _(L, J);
    return se ? Promise.reject(se) : Promise.resolve();
  }
  function k(L) {
    const J = Ae.values().next().value;
    return J && typeof J.runWithContext == "function" ? J.runWithContext(L) : L();
  }
  function w(L, J) {
    let se;
    const [ve, Ie, tt] = WA(L, J);
    se = rl(ve.reverse(), "beforeRouteLeave", L, J);
    for (const O of ve)
      O.leaveGuards.forEach((V) => {
        se.push(is(V, L, J));
      });
    const E = I.bind(null, L, J);
    return se.push(E), He(se).then(() => {
      se = [];
      for (const O of r.list())
        se.push(is(O, L, J));
      return se.push(E), He(se);
    }).then(() => {
      se = rl(Ie, "beforeRouteUpdate", L, J);
      for (const O of Ie)
        O.updateGuards.forEach((V) => {
          se.push(is(V, L, J));
        });
      return se.push(E), He(se);
    }).then(() => {
      se = [];
      for (const O of tt)
        if (O.beforeEnter)
          if ($t(O.beforeEnter))
            for (const V of O.beforeEnter)
              se.push(is(V, L, J));
          else
            se.push(is(O.beforeEnter, L, J));
      return se.push(E), He(se);
    }).then(() => (L.matched.forEach((O) => O.enterCallbacks = {}), se = rl(tt, "beforeRouteEnter", L, J, k), se.push(E), He(se))).then(() => {
      se = [];
      for (const O of i.list())
        se.push(is(O, L, J));
      return se.push(E), He(se);
    }).catch((O) => $n(
      O,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? O : Promise.reject(O));
  }
  function R(L, J, se) {
    a.list().forEach((ve) => k(() => ve(L, J, se)));
  }
  function C(L, J, se, ve, Ie) {
    const tt = _(L, J);
    if (tt)
      return tt;
    const E = J === ts, O = Un ? history.state : {};
    se && (ve || E ? o.replace(L.fullPath, Ue({
      scroll: E && O && O.scroll
    }, Ie)) : o.push(L.fullPath, Ie)), c.value = L, K(L, J, se, E), et();
  }
  let F;
  function fe() {
    F || (F = o.listen((L, J, se) => {
      if (!xe.listening)
        return;
      const ve = y(L), Ie = N(ve);
      if (Ie) {
        x(Ue(Ie, { replace: !0, force: !0 }), ve).catch(yr);
        return;
      }
      f = ve;
      const tt = c.value;
      Un && qw(Mf(tt.fullPath, se.delta), Oa()), w(ve, tt).catch((E) => $n(
        E,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? E : $n(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (x(
        Ue(b(E.to), {
          force: !0
        }),
        ve
        // avoid an uncaught rejection, let push call triggerError
      ).then((O) => {
        $n(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !se.delta && se.type === Lr.pop && o.go(-1, !1);
      }).catch(yr), Promise.reject()) : (se.delta && o.go(-se.delta, !1), de(E, ve, tt))).then((E) => {
        E = E || C(
          // after navigation, all matched components are resolved
          ve,
          tt,
          !1
        ), E && (se.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !$n(
          E,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-se.delta, !1) : se.type === Lr.pop && $n(
          E,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), R(ve, tt, E);
      }).catch(yr);
    }));
  }
  let X = nr(), re = nr(), z;
  function de(L, J, se) {
    et(L);
    const ve = re.list();
    return ve.length ? ve.forEach((Ie) => Ie(L, J, se)) : (Ne.NODE_ENV !== "production" && Me("uncaught error during route navigation:"), console.error(L)), Promise.reject(L);
  }
  function be() {
    return z && c.value !== ts ? Promise.resolve() : new Promise((L, J) => {
      X.add([L, J]);
    });
  }
  function et(L) {
    return z || (z = !L, fe(), X.list().forEach(([J, se]) => L ? se(L) : J()), X.reset()), L;
  }
  function K(L, J, se, ve) {
    const { scrollBehavior: Ie } = e;
    if (!Un || !Ie)
      return Promise.resolve();
    const tt = !se && Yw(Mf(L.fullPath, 0)) || (ve || !se) && history.state && history.state.scroll || null;
    return qs().then(() => Ie(L, J, tt)).then((E) => E && zw(E)).catch((E) => de(E, L, J));
  }
  const oe = (L) => o.go(L);
  let he;
  const Ae = /* @__PURE__ */ new Set(), xe = {
    currentRoute: c,
    listening: !0,
    addRoute: h,
    removeRoute: g,
    clearRoutes: t.clearRoutes,
    hasRoute: v,
    getRoutes: m,
    resolve: y,
    options: e,
    push: A,
    replace: T,
    go: oe,
    back: () => oe(-1),
    forward: () => oe(1),
    beforeEach: r.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: re.add,
    isReady: be,
    install(L) {
      const J = this;
      L.component("RouterLink", OA), L.component("RouterView", kA), L.config.globalProperties.$router = J, Object.defineProperty(L.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => U(c)
      }), Un && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !he && c.value === ts && (he = !0, A(o.location).catch((Ie) => {
        Ne.NODE_ENV !== "production" && Me("Unexpected error when starting the router:", Ie);
      }));
      const se = {};
      for (const Ie in ts)
        Object.defineProperty(se, Ie, {
          get: () => c.value[Ie],
          enumerable: !0
        });
      L.provide(eu, J), L.provide(tu, bh(se)), L.provide(ic, c);
      const ve = L.unmount;
      Ae.add(L), L.unmount = function() {
        Ae.delete(L), Ae.size < 1 && (f = ts, F && F(), F = null, c.value = ts, he = !1, z = !1), ve();
      }, Ne.NODE_ENV !== "production" && Un && IA(L, J, t);
    }
  };
  function He(L) {
    return L.reduce((J, se) => J.then(() => k(se)), Promise.resolve());
  }
  return xe;
}
function WA(e, t) {
  const n = [], s = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => ms(f, a)) ? s.push(a) : n.push(a));
    const c = e.matched[i];
    c && (t.matched.find((f) => ms(f, c)) || o.push(c));
  }
  return [n, s, o];
}
function Bg(e) {
  return Bt(tu);
}
const KA = { class: "nav nav-tabs mb-4" }, zA = { class: "nav-item" }, qA = { class: "nav-item" }, YA = { class: "nav-item" }, XA = { class: "nav-item" }, GA = /* @__PURE__ */ Ce({
  __name: "NavigationMenu",
  setup(e) {
    const t = Bg();
    return (n, s) => {
      const o = Je("router-link");
      return S(), D("ul", KA, [
        l("li", zA, [
          ce(o, {
            to: "/",
            class: le(["nav-link", { active: U(t).name === "home" }]),
            "aria-current": U(t).name === "home" ? "page" : void 0
          }, {
            default: pe(() => s[0] || (s[0] = [
              l("i", { class: "fas fa-home me-2" }, null, -1),
              H(" Home ")
            ])),
            _: 1,
            __: [0]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", qA, [
          ce(o, {
            to: "/setup",
            class: le(["nav-link", { active: U(t).name === "setup" }]),
            "aria-current": U(t).name === "setup" ? "page" : void 0
          }, {
            default: pe(() => s[1] || (s[1] = [
              l("i", { class: "fas fa-cogs me-2" }, null, -1),
              H(" Setup ")
            ])),
            _: 1,
            __: [1]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", YA, [
          ce(o, {
            to: "/resources",
            class: le(["nav-link", { active: U(t).name === "resources" }]),
            "aria-current": U(t).name === "resources" ? "page" : void 0
          }, {
            default: pe(() => s[2] || (s[2] = [
              l("i", { class: "fas fa-database me-2" }, null, -1),
              H(" Resources ")
            ])),
            _: 1,
            __: [2]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", XA, [
          ce(o, {
            to: "/tasks",
            class: le(["nav-link", { active: U(t).name === "tasks" }]),
            "aria-current": U(t).name === "tasks" ? "page" : void 0
          }, {
            default: pe(() => s[3] || (s[3] = [
              l("i", { class: "fas fa-tasks me-2" }, null, -1),
              H(" Tasks ")
            ])),
            _: 1,
            __: [3]
          }, 8, ["class", "aria-current"])
        ])
      ]);
    };
  }
}), Zt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, QA = /* @__PURE__ */ Zt(GA, [["__scopeId", "data-v-131175f8"]]), JA = /* @__PURE__ */ Ce({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const s = Je("router-view");
      return S(), D("div", null, [
        l("main", null, [
          ce(QA),
          ce(s)
        ])
      ]);
    };
  }
}), ZA = /* @__PURE__ */ Zt(JA, [["__scopeId", "data-v-a42a7003"]]);
function $g(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: eS } = Object.prototype, { getPrototypeOf: nu } = Object, { iterator: Ta, toStringTag: jg } = Symbol, Na = /* @__PURE__ */ ((e) => (t) => {
  const n = eS.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), gn = (e) => (e = e.toLowerCase(), (t) => Na(t) === e), Da = (e) => (t) => typeof t === e, { isArray: Ko } = Array, Fr = Da("undefined");
function tS(e) {
  return e !== null && !Fr(e) && e.constructor !== null && !Fr(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ug = gn("ArrayBuffer");
function nS(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ug(e.buffer), t;
}
const sS = Da("string"), It = Da("function"), Hg = Da("number"), ka = (e) => e !== null && typeof e == "object", oS = (e) => e === !0 || e === !1, Vi = (e) => {
  if (Na(e) !== "object")
    return !1;
  const t = nu(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(jg in e) && !(Ta in e);
}, rS = gn("Date"), iS = gn("File"), aS = gn("Blob"), lS = gn("FileList"), cS = (e) => ka(e) && It(e.pipe), uS = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = Na(e)) === "formdata" || // detect form-data instance
  t === "object" && It(e.toString) && e.toString() === "[object FormData]"));
}, dS = gn("URLSearchParams"), [fS, pS, hS, mS] = ["ReadableStream", "Request", "Response", "Headers"].map(gn), gS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, o;
  if (typeof e != "object" && (e = [e]), Ko(e))
    for (s = 0, o = e.length; s < o; s++)
      t.call(null, e[s], s, e);
  else {
    const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = r.length;
    let a;
    for (s = 0; s < i; s++)
      a = r[s], t.call(null, e[a], a, e);
  }
}
function Wg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const Ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Kg = (e) => !Fr(e) && e !== Ps;
function lc() {
  const { caseless: e } = Kg(this) && this || {}, t = {}, n = (s, o) => {
    const r = e && Wg(t, o) || o;
    Vi(t[r]) && Vi(s) ? t[r] = lc(t[r], s) : Vi(s) ? t[r] = lc({}, s) : Ko(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Qr(arguments[s], n);
  return t;
}
const vS = (e, t, n, { allOwnKeys: s } = {}) => (Qr(t, (o, r) => {
  n && It(o) ? e[r] = $g(o, n) : e[r] = o;
}, { allOwnKeys: s }), e), _S = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yS = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, bS = (e, t, n, s) => {
  let o, r, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), r = o.length; r-- > 0; )
      i = o[r], (!s || s(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && nu(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ES = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, wS = (e) => {
  if (!e) return null;
  if (Ko(e)) return e;
  let t = e.length;
  if (!Hg(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, AS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && nu(Uint8Array)), SS = (e, t) => {
  const s = (e && e[Ta]).call(e);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const r = o.value;
    t.call(e, r[0], r[1]);
  }
}, CS = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, OS = gn("HTMLFormElement"), TS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), Gf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), NS = gn("RegExp"), zg = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Qr(n, (o, r) => {
    let i;
    (i = t(o, r, e)) !== !1 && (s[r] = i || o);
  }), Object.defineProperties(e, s);
}, DS = (e) => {
  zg(e, (t, n) => {
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
}, kS = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((r) => {
      n[r] = !0;
    });
  };
  return Ko(e) ? s(e) : s(String(e).split(t)), n;
}, xS = () => {
}, RS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function IS(e) {
  return !!(e && It(e.append) && e[jg] === "FormData" && e[Ta]);
}
const PS = (e) => {
  const t = new Array(10), n = (s, o) => {
    if (ka(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[o] = s;
        const r = Ko(s) ? [] : {};
        return Qr(s, (i, a) => {
          const c = n(i, o + 1);
          !Fr(c) && (r[a] = c);
        }), t[o] = void 0, r;
      }
    }
    return s;
  };
  return n(e, 0);
}, MS = gn("AsyncFunction"), VS = (e) => e && (ka(e) || It(e)) && It(e.then) && It(e.catch), qg = ((e, t) => e ? setImmediate : t ? ((n, s) => (Ps.addEventListener("message", ({ source: o, data: r }) => {
  o === Ps && r === n && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), Ps.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  It(Ps.postMessage)
), LS = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ps) : typeof process < "u" && process.nextTick || qg, FS = (e) => e != null && It(e[Ta]), B = {
  isArray: Ko,
  isArrayBuffer: Ug,
  isBuffer: tS,
  isFormData: uS,
  isArrayBufferView: nS,
  isString: sS,
  isNumber: Hg,
  isBoolean: oS,
  isObject: ka,
  isPlainObject: Vi,
  isReadableStream: fS,
  isRequest: pS,
  isResponse: hS,
  isHeaders: mS,
  isUndefined: Fr,
  isDate: rS,
  isFile: iS,
  isBlob: aS,
  isRegExp: NS,
  isFunction: It,
  isStream: cS,
  isURLSearchParams: dS,
  isTypedArray: AS,
  isFileList: lS,
  forEach: Qr,
  merge: lc,
  extend: vS,
  trim: gS,
  stripBOM: _S,
  inherits: yS,
  toFlatObject: bS,
  kindOf: Na,
  kindOfTest: gn,
  endsWith: ES,
  toArray: wS,
  forEachEntry: SS,
  matchAll: CS,
  isHTMLForm: OS,
  hasOwnProperty: Gf,
  hasOwnProp: Gf,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zg,
  freezeMethods: DS,
  toObjectSet: kS,
  toCamelCase: TS,
  noop: xS,
  toFiniteNumber: RS,
  findKey: Wg,
  global: Ps,
  isContextDefined: Kg,
  isSpecCompliantForm: IS,
  toJSONObject: PS,
  isAsyncFn: MS,
  isThenable: VS,
  setImmediate: qg,
  asap: LS,
  isIterable: FS
};
function Re(e, t, n, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
B.inherits(Re, Error, {
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
const Yg = Re.prototype, Xg = {};
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
  Xg[e] = { value: e };
});
Object.defineProperties(Re, Xg);
Object.defineProperty(Yg, "isAxiosError", { value: !0 });
Re.from = (e, t, n, s, o, r) => {
  const i = Object.create(Yg);
  return B.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Re.call(i, e.message, t, n, s, o), i.cause = e, i.name = e.name, r && Object.assign(i, r), i;
};
const BS = null;
function cc(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function Gg(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qf(e, t, n) {
  return e ? e.concat(t).map(function(o, r) {
    return o = Gg(o), !n && r ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function $S(e) {
  return B.isArray(e) && !e.some(cc);
}
const jS = B.toFlatObject(B, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function xa(e, t, n) {
  if (!B.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = B.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, v) {
    return !B.isUndefined(v[m]);
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
      throw new Re("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(g) || B.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, m, v) {
    let y = g;
    if (g && !v && typeof g == "object") {
      if (B.endsWith(m, "{}"))
        m = s ? m : m.slice(0, -2), g = JSON.stringify(g);
      else if (B.isArray(g) && $S(g) || (B.isFileList(g) || B.endsWith(m, "[]")) && (y = B.toArray(g)))
        return m = Gg(m), y.forEach(function(_, A) {
          !(B.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Qf([m], A, r) : i === null ? m : m + "[]",
            f(_)
          );
        }), !1;
    }
    return cc(g) ? !0 : (t.append(Qf(v, m, r), f(g)), !1);
  }
  const d = [], p = Object.assign(jS, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: cc
  });
  function h(g, m) {
    if (!B.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(g), B.forEach(g, function(y, b) {
        (!(B.isUndefined(y) || y === null) && o.call(
          t,
          y,
          B.isString(b) ? b.trim() : b,
          m,
          p
        )) === !0 && h(y, m ? m.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Jf(e) {
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
function su(e, t) {
  this._pairs = [], e && xa(e, this, t);
}
const Qg = su.prototype;
Qg.append = function(t, n) {
  this._pairs.push([t, n]);
};
Qg.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Jf);
  } : Jf;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function US(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Jg(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || US;
  B.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let r;
  if (o ? r = o(t, n) : r = B.isURLSearchParams(t) ? t.toString() : new su(t, n).toString(s), r) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class Zf {
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
const Zg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, HS = typeof URLSearchParams < "u" ? URLSearchParams : su, WS = typeof FormData < "u" ? FormData : null, KS = typeof Blob < "u" ? Blob : null, zS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: HS,
    FormData: WS,
    Blob: KS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ou = typeof window < "u" && typeof document < "u", uc = typeof navigator == "object" && navigator || void 0, qS = ou && (!uc || ["ReactNative", "NativeScript", "NS"].indexOf(uc.product) < 0), YS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", XS = ou && window.location.href || "http://localhost", GS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ou,
  hasStandardBrowserEnv: qS,
  hasStandardBrowserWebWorkerEnv: YS,
  navigator: uc,
  origin: XS
}, Symbol.toStringTag, { value: "Module" })), _t = {
  ...GS,
  ...zS
};
function QS(e, t) {
  return xa(e, new _t.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, r) {
      return _t.isNode && B.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function JS(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ZS(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const o = n.length;
  let r;
  for (s = 0; s < o; s++)
    r = n[s], t[r] = e[r];
  return t;
}
function ev(e) {
  function t(n, s, o, r) {
    let i = n[r++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = r >= n.length;
    return i = !i && B.isArray(o) ? o.length : i, c ? (B.hasOwnProp(o, i) ? o[i] = [o[i], s] : o[i] = s, !a) : ((!o[i] || !B.isObject(o[i])) && (o[i] = []), t(n, s, o[i], r) && B.isArray(o[i]) && (o[i] = ZS(o[i])), !a);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const n = {};
    return B.forEachEntry(e, (s, o) => {
      t(JS(s), o, n, 0);
    }), n;
  }
  return null;
}
function eC(e, t, n) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const Jr = {
  transitional: Zg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = B.isObject(t);
    if (r && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return o ? JSON.stringify(ev(t)) : t;
    if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t) || B.isReadableStream(t))
      return t;
    if (B.isArrayBufferView(t))
      return t.buffer;
    if (B.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return QS(t, this.formSerializer).toString();
      if ((a = B.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return xa(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return r || o ? (n.setContentType("application/json", !1), eC(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Jr.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (B.isResponse(t) || B.isReadableStream(t))
      return t;
    if (t && B.isString(t) && (s && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? Re.from(a, Re.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: _t.classes.FormData,
    Blob: _t.classes.Blob
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
  Jr.headers[e] = {};
});
const tC = B.toObjectSet([
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
]), nC = (e) => {
  const t = {};
  let n, s, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), s = i.substring(o + 1).trim(), !(!n || t[n] && tC[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, ep = Symbol("internals");
function or(e) {
  return e && String(e).trim().toLowerCase();
}
function Li(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Li) : String(e);
}
function sC(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const oC = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function il(e, t, n, s, o) {
  if (B.isFunction(s))
    return s.call(this, t, n);
  if (o && (t = n), !!B.isString(t)) {
    if (B.isString(s))
      return t.indexOf(s) !== -1;
    if (B.isRegExp(s))
      return s.test(t);
  }
}
function rC(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function iC(e, t) {
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
      const u = or(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = B.findKey(o, u);
      (!d || o[d] === void 0 || f === !0 || f === void 0 && o[d] !== !1) && (o[d || c] = Li(a));
    }
    const i = (a, c) => B.forEach(a, (f, u) => r(f, u, c));
    if (B.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (B.isString(t) && (t = t.trim()) && !oC(t))
      i(nC(t), n);
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
    if (t = or(t), t) {
      const s = B.findKey(this, t);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return sC(o);
        if (B.isFunction(n))
          return n.call(this, o, s);
        if (B.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = or(t), t) {
      const s = B.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || il(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let o = !1;
    function r(i) {
      if (i = or(i), i) {
        const a = B.findKey(s, i);
        a && (!n || il(s, s[a], a, n)) && (delete s[a], o = !0);
      }
    }
    return B.isArray(t) ? t.forEach(r) : r(t), o;
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
    return B.forEach(this, (o, r) => {
      const i = B.findKey(s, r);
      if (i) {
        n[i] = Li(o), delete n[r];
        return;
      }
      const a = t ? rC(r) : String(r).trim();
      a !== r && delete n[r], n[a] = Li(o), s[a] = !0;
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
    const s = (this[ep] = this[ep] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function r(i) {
      const a = or(i);
      s[a] || (iC(o, i), s[a] = !0);
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
function al(e, t) {
  const n = this || Jr, s = t || n, o = Pt.from(s.headers);
  let r = s.data;
  return B.forEach(e, function(a) {
    r = a.call(n, r, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), r;
}
function tv(e) {
  return !!(e && e.__CANCEL__);
}
function zo(e, t, n) {
  Re.call(this, e ?? "canceled", Re.ERR_CANCELED, t, n), this.name = "CanceledError";
}
B.inherits(zo, Re, {
  __CANCEL__: !0
});
function nv(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new Re(
    "Request failed with status code " + n.status,
    [Re.ERR_BAD_REQUEST, Re.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function aC(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function lC(e, t) {
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
function cC(e, t) {
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
const oa = (e, t, n = 3) => {
  let s = 0;
  const o = lC(50, 250);
  return cC((r) => {
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
}, tp = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, np = (e) => (...t) => B.asap(() => e(...t)), uC = _t.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, _t.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(_t.origin),
  _t.navigator && /(msie|trident)/i.test(_t.navigator.userAgent)
) : () => !0, dC = _t.hasStandardBrowserEnv ? (
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
function fC(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function pC(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function sv(e, t, n) {
  let s = !fC(t);
  return e && (s || n == !1) ? pC(e, t) : t;
}
const sp = (e) => e instanceof Pt ? { ...e } : e;
function Js(e, t) {
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
    headers: (f, u, d) => o(sp(f), sp(u), d, !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, p = d(e[u], t[u], u);
    B.isUndefined(p) && d !== a || (n[u] = p);
  }), n;
}
const ov = (e) => {
  const t = Js({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: r, headers: i, auth: a } = t;
  t.headers = i = Pt.from(i), t.url = Jg(sv(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (B.isFormData(n)) {
    if (_t.hasStandardBrowserEnv || _t.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [f, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (_t.hasStandardBrowserEnv && (s && B.isFunction(s) && (s = s(t)), s || s !== !1 && uC(t.url))) {
    const f = o && r && dC.read(r);
    f && i.set(o, f);
  }
  return t;
}, hC = typeof XMLHttpRequest < "u", mC = hC && function(e) {
  return new Promise(function(n, s) {
    const o = ov(e);
    let r = o.data;
    const i = Pt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: f } = o, u, d, p, h, g;
    function m() {
      h && h(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let v = new XMLHttpRequest();
    v.open(o.method.toUpperCase(), o.url, !0), v.timeout = o.timeout;
    function y() {
      if (!v)
        return;
      const _ = Pt.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), T = {
        data: !a || a === "text" || a === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: _,
        config: e,
        request: v
      };
      nv(function(x) {
        n(x), m();
      }, function(x) {
        s(x), m();
      }, T), v = null;
    }
    "onloadend" in v ? v.onloadend = y : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, v.onabort = function() {
      v && (s(new Re("Request aborted", Re.ECONNABORTED, e, v)), v = null);
    }, v.onerror = function() {
      s(new Re("Network Error", Re.ERR_NETWORK, e, v)), v = null;
    }, v.ontimeout = function() {
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const T = o.transitional || Zg;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), s(new Re(
        A,
        T.clarifyTimeoutError ? Re.ETIMEDOUT : Re.ECONNABORTED,
        e,
        v
      )), v = null;
    }, r === void 0 && i.setContentType(null), "setRequestHeader" in v && B.forEach(i.toJSON(), function(A, T) {
      v.setRequestHeader(T, A);
    }), B.isUndefined(o.withCredentials) || (v.withCredentials = !!o.withCredentials), a && a !== "json" && (v.responseType = o.responseType), f && ([p, g] = oa(f, !0), v.addEventListener("progress", p)), c && v.upload && ([d, h] = oa(c), v.upload.addEventListener("progress", d), v.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (_) => {
      v && (s(!_ || _.type ? new zo(null, e, v) : _), v.abort(), v = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = aC(o.url);
    if (b && _t.protocols.indexOf(b) === -1) {
      s(new Re("Unsupported protocol " + b + ":", Re.ERR_BAD_REQUEST, e));
      return;
    }
    v.send(r || null);
  });
}, gC = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), o;
    const r = function(f) {
      if (!o) {
        o = !0, a();
        const u = f instanceof Error ? f : this.reason;
        s.abort(u instanceof Re ? u : new zo(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, r(new Re(`timeout ${t} of ms exceeded`, Re.ETIMEDOUT));
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
}, vC = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, o;
  for (; s < n; )
    o = s + t, yield e.slice(s, o), s = o;
}, _C = async function* (e, t) {
  for await (const n of yC(e))
    yield* vC(n, t);
}, yC = async function* (e) {
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
}, op = (e, t, n, s) => {
  const o = _C(e, t);
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
}, Ra = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", rv = Ra && typeof ReadableStream == "function", bC = Ra && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), iv = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, EC = rv && iv(() => {
  let e = !1;
  const t = new Request(_t.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), rp = 64 * 1024, dc = rv && iv(() => B.isReadableStream(new Response("").body)), ra = {
  stream: dc && ((e) => e.body)
};
Ra && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ra[t] && (ra[t] = B.isFunction(e[t]) ? (n) => n[t]() : (n, s) => {
      throw new Re(`Response type '${t}' is not supported`, Re.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const wC = async (e) => {
  if (e == null)
    return 0;
  if (B.isBlob(e))
    return e.size;
  if (B.isSpecCompliantForm(e))
    return (await new Request(_t.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (B.isArrayBufferView(e) || B.isArrayBuffer(e))
    return e.byteLength;
  if (B.isURLSearchParams(e) && (e = e + ""), B.isString(e))
    return (await bC(e)).byteLength;
}, AC = async (e, t) => {
  const n = B.toFiniteNumber(e.getContentLength());
  return n ?? wC(t);
}, SC = Ra && (async (e) => {
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
  } = ov(e);
  f = f ? (f + "").toLowerCase() : "text";
  let h = gC([o, r && r.toAbortSignal()], i), g;
  const m = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let v;
  try {
    if (c && EC && n !== "get" && n !== "head" && (v = await AC(u, s)) !== 0) {
      let T = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), N;
      if (B.isFormData(s) && (N = T.headers.get("content-type")) && u.setContentType(N), T.body) {
        const [x, I] = tp(
          v,
          oa(np(c))
        );
        s = op(T.body, rp, x, I);
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
    const _ = dc && (f === "stream" || f === "response");
    if (dc && (a || _ && m)) {
      const T = {};
      ["status", "statusText", "headers"].forEach((k) => {
        T[k] = b[k];
      });
      const N = B.toFiniteNumber(b.headers.get("content-length")), [x, I] = a && tp(
        N,
        oa(np(a), !0)
      ) || [];
      b = new Response(
        op(b.body, rp, x, () => {
          I && I(), m && m();
        }),
        T
      );
    }
    f = f || "text";
    let A = await ra[B.findKey(ra, f) || "text"](b, e);
    return !_ && m && m(), await new Promise((T, N) => {
      nv(T, N, {
        data: A,
        headers: Pt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: g
      });
    });
  } catch (y) {
    throw m && m(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new Re("Network Error", Re.ERR_NETWORK, e, g),
      {
        cause: y.cause || y
      }
    ) : Re.from(y, y && y.code, e, g);
  }
}), fc = {
  http: BS,
  xhr: mC,
  fetch: SC
};
B.forEach(fc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ip = (e) => `- ${e}`, CC = (e) => B.isFunction(e) || e === null || e === !1, av = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const o = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let i;
      if (s = n, !CC(n) && (s = fc[(i = String(n)).toLowerCase()], s === void 0))
        throw new Re(`Unknown adapter '${i}'`);
      if (s)
        break;
      o[i || "#" + r] = s;
    }
    if (!s) {
      const r = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? r.length > 1 ? `since :
` + r.map(ip).join(`
`) : " " + ip(r[0]) : "as no adapter specified";
      throw new Re(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: fc
};
function ll(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new zo(null, e);
}
function ap(e) {
  return ll(e), e.headers = Pt.from(e.headers), e.data = al.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), av.getAdapter(e.adapter || Jr.adapter)(e).then(function(s) {
    return ll(e), s.data = al.call(
      e,
      e.transformResponse,
      s
    ), s.headers = Pt.from(s.headers), s;
  }, function(s) {
    return tv(s) || (ll(e), s && s.response && (s.response.data = al.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = Pt.from(s.response.headers))), Promise.reject(s);
  });
}
const lv = "1.10.0", Ia = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ia[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const lp = {};
Ia.transitional = function(t, n, s) {
  function o(r, i) {
    return "[Axios v" + lv + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "");
  }
  return (r, i, a) => {
    if (t === !1)
      throw new Re(
        o(i, " has been removed" + (n ? " in " + n : "")),
        Re.ERR_DEPRECATED
      );
    return n && !lp[i] && (lp[i] = !0, console.warn(
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
function OC(e, t, n) {
  if (typeof e != "object")
    throw new Re("options must be an object", Re.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let o = s.length;
  for (; o-- > 0; ) {
    const r = s[o], i = t[r];
    if (i) {
      const a = e[r], c = a === void 0 || i(a, r, e);
      if (c !== !0)
        throw new Re("option " + r + " must be " + c, Re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Re("Unknown option " + r, Re.ERR_BAD_OPTION);
  }
}
const Fi = {
  assertOptions: OC,
  validators: Ia
}, An = Fi.validators;
let Hs = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Zf(),
      response: new Zf()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Js(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: r } = n;
    s !== void 0 && Fi.assertOptions(s, {
      silentJSONParsing: An.transitional(An.boolean),
      forcedJSONParsing: An.transitional(An.boolean),
      clarifyTimeoutError: An.transitional(An.boolean)
    }, !1), o != null && (B.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Fi.assertOptions(o, {
      encode: An.function,
      serialize: An.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Fi.assertOptions(n, {
      baseUrl: An.spelling("baseURL"),
      withXsrfToken: An.spelling("withXSRFToken")
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
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (c = c && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(m) {
      f.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, p;
    if (!c) {
      const g = [ap.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, f), p = g.length, u = Promise.resolve(n); d < p; )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    p = a.length;
    let h = n;
    for (d = 0; d < p; ) {
      const g = a[d++], m = a[d++];
      try {
        h = g(h);
      } catch (v) {
        m.call(this, v);
        break;
      }
    }
    try {
      u = ap.call(this, h);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, p = f.length; d < p; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = Js(this.defaults, t);
    const n = sv(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Jg(n, t.params, t.paramsSerializer);
  }
};
B.forEach(["delete", "get", "head", "options"], function(t) {
  Hs.prototype[t] = function(n, s) {
    return this.request(Js(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(r, i, a) {
      return this.request(Js(a || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: i
      }));
    };
  }
  Hs.prototype[t] = n(), Hs.prototype[t + "Form"] = n(!0);
});
let TC = class cv {
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
      s.reason || (s.reason = new zo(r, i, a), n(s.reason));
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
      token: new cv(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function NC(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function DC(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const pc = {
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
Object.entries(pc).forEach(([e, t]) => {
  pc[t] = e;
});
function uv(e) {
  const t = new Hs(e), n = $g(Hs.prototype.request, t);
  return B.extend(n, Hs.prototype, t, { allOwnKeys: !0 }), B.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return uv(Js(e, o));
  }, n;
}
const lt = uv(Jr);
lt.Axios = Hs;
lt.CanceledError = zo;
lt.CancelToken = TC;
lt.isCancel = tv;
lt.VERSION = lv;
lt.toFormData = xa;
lt.AxiosError = Re;
lt.Cancel = lt.CanceledError;
lt.all = function(t) {
  return Promise.all(t);
};
lt.spread = NC;
lt.isAxiosError = DC;
lt.mergeConfig = Js;
lt.AxiosHeaders = Pt;
lt.formToJSON = (e) => ev(B.isHTMLForm(e) ? new FormData(e) : e);
lt.getAdapter = av.getAdapter;
lt.HttpStatusCode = pc;
lt.default = lt;
const {
  Axios: MB,
  AxiosError: kC,
  CanceledError: VB,
  isCancel: LB,
  CancelToken: FB,
  VERSION: BB,
  all: $B,
  Cancel: jB,
  isAxiosError: UB,
  spread: HB,
  toFormData: WB,
  AxiosHeaders: KB,
  HttpStatusCode: zB,
  formToJSON: qB,
  getAdapter: YB,
  mergeConfig: XB
} = lt, xC = "all_fhir", RC = "api", IC = () => {
  let n = {
    pid: new URLSearchParams(location.search).get("pid"),
    page: RC,
    // content: "externalModule",
    type: "module",
    prefix: xC
  };
  return window.redcap_csrf_token && (n.redcap_csrf_token = window.redcap_csrf_token), n;
}, PC = () => {
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
    const n = IC();
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
}, De = PC(), Fe = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return De.get("", { params: e });
  },
  updateFhirSystem(e) {
    const t = { route: "project-settings/fhir-system" };
    return De.put("", { fhir_system: e }, { params: t });
  },
  updateProjectSettings(e) {
    const t = { route: "project-settings" };
    return De.put("", e, { params: t });
  },
  listMrns(e, t) {
    const n = { route: "mrns" };
    return e && (n._page = e), t && (n._per_page = t), De.get("", { params: n });
  },
  addMrns(e) {
    const t = { route: "mrns" };
    return De.post("", { mrns: e }, { params: t });
  },
  addMrn(e) {
    const t = { route: "mrns" };
    return De.post("", { mrns: [e] }, { params: t });
  },
  removeMrn(e) {
    const t = { route: `mrns/${e}` };
    return De.delete("", { params: t, data: e });
  },
  triggerFetch(e, t) {
    const n = { route: "trigger-fetch" };
    return De.post("", { mrns: e, resources: t }, { params: n });
  },
  getFetchStatus() {
    const e = { route: "fetch-status" };
    return De.get("", { params: e });
  },
  createZipArchive(e) {
    const t = { route: "create-zip-archive" };
    return De.post("", { mrns: e }, { params: t });
  },
  downloadZip(e) {
    const t = { route: "download-zip", zip_id: e };
    return De.get("", { params: t, responseType: "blob" });
  },
  // Archive management API methods
  listArchives() {
    const e = { route: "archives" };
    return De.get("", { params: e });
  },
  createArchiveSelected(e, t) {
    const n = { route: "archives/selected" }, s = { mrns: e };
    return t && Object.assign(s, t), De.post("", s, { params: n });
  },
  createArchiveAll(e) {
    const t = { route: "archives/all" }, n = e || {};
    return De.post("", n, { params: t });
  },
  downloadArchive(e) {
    const t = { route: `archives/${e}/download` };
    return De.get("", { params: t, responseType: "blob" });
  },
  deleteArchive(e) {
    const t = { route: `archives/${e}` };
    return De.delete("", { params: t });
  },
  // Enhanced MRN and resource management
  getMrnResources(e) {
    const t = { route: `mrns/${e}/resources` };
    return De.get("", { params: t });
  },
  getProjectSummary() {
    const e = { route: "project-summary" };
    return De.get("", { params: e });
  },
  triggerFetchMrns(e, t) {
    const n = { route: "trigger-fetch" }, s = { mrns: e };
    return t && t.length > 0 && (s.resources = t), De.post("", s, { params: n });
  },
  performFullSync() {
    const e = { route: "perform-full-sync" };
    return De.post("", {}, { params: e });
  },
  retryFailedResource(e, t, n) {
    const s = { route: "retry-failed" };
    return De.post("", {
      mrn: e,
      resource_type: t,
      repeat_instance: n,
      bulk: !1
    }, { params: s });
  },
  bulkRetryFailed(e) {
    const t = { route: "retry-failed" }, n = { bulk: !0 };
    return e && (n.resource_type = e), De.post("", n, { params: t });
  },
  retryFailed(e) {
    const t = { route: "retry-failed" };
    return De.post("", e, { params: t });
  },
  // Task management API methods
  listTasks(e, t, n) {
    const s = { route: "tasks" };
    return e && (s.page = e), t && (s.limit = t), n && Object.assign(s, n), De.get("", { params: s });
  },
  getTaskDetails(e) {
    const t = { route: `tasks/${e}` };
    return De.get("", { params: t });
  },
  performTaskFullSync() {
    const e = { route: "tasks/full-sync" };
    return De.post("", {}, { params: e });
  },
  retryFailedResources(e) {
    const t = { route: "tasks/retry-failed" }, n = e ? { filters: e } : {};
    return De.post("", n, { params: t });
  },
  deleteTask(e) {
    const t = { route: `tasks/${e}` };
    return De.delete("", { params: t });
  },
  getQueueStatistics() {
    const e = { route: "tasks/stats" };
    return De.get("", { params: e });
  },
  cleanupCompletedTasks() {
    const e = { route: "tasks/cleanup" };
    return De.post("", {}, { params: e });
  },
  // Streaming archive API methods
  streamSelectedArchive(e, t) {
    const n = { route: "archives/stream/selected" }, s = { mrns: e, ...t };
    return De.post("", s, {
      params: n,
      responseType: "blob",
      timeout: 0
      // No timeout for streaming
    });
  },
  streamAllArchive(e) {
    const t = { route: "archives/stream/all" };
    return De.post("", e || {}, {
      params: t,
      responseType: "blob",
      timeout: 0
    });
  },
  // Resource content viewing API method
  getResourceContent(e, t, n, s) {
    const o = { route: `records/${e}/resources/${t}/content/${n}` };
    return s && (o.preview_limit = s), De.get("", { params: o });
  },
  // FHIR access status
  getFhirAccessStatus() {
    const e = { route: "fhir-access/status" };
    return De.get("", { params: e });
  },
  // Endpoint parameter schemas
  getEndpointParamsSchemas() {
    const e = { route: "endpoint-params" };
    return De.get("", { params: e });
  },
  getEndpointParamsFor(e) {
    const t = { route: `endpoint-params/${encodeURIComponent(e)}` };
    return De.get("", { params: t });
  },
  // Mapping resources (route-based management)
  listMappingResources() {
    const e = { route: "mapping-resources" };
    return De.get("", { params: e });
  },
  getMappingResource(e) {
    const t = { route: `mapping-resources/${e}` };
    return De.get("", { params: t });
  },
  createMappingResource(e) {
    const t = { route: "mapping-resources" };
    return De.post("", e, { params: t });
  },
  updateMappingResource(e, t) {
    const n = { route: `mapping-resources/${e}` };
    return De.put("", t, { params: n });
  },
  softDeleteMappingResource(e) {
    const t = { route: `mapping-resources/${e}/soft-delete` };
    return De.post("", {}, { params: t });
  },
  restoreMappingResource(e) {
    const t = { route: `mapping-resources/${e}/restore` };
    return De.post("", {}, { params: t });
  },
  purgeDeletedMappingResource(e) {
    const t = { route: `mapping-resources/${e}/purge-deleted` };
    return De.post("", {}, { params: t });
  },
  deleteMappingResource(e) {
    const t = { route: `mapping-resources/${e}` };
    return De.delete("", { params: t });
  },
  importMappingResources(e) {
    const t = { route: "mapping-resources/import" };
    return De.post("", e, { params: t });
  }
}, bs = /* @__PURE__ */ hn("errors", () => {
  const e = $([]);
  return {
    errors: e,
    addError: (s, o) => {
      const r = MC(s);
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
function MC(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
const Br = /* @__PURE__ */ hn("endpointParams", () => {
  const e = bs(), t = $({}), n = $(!1), s = $(null), o = $({}), r = async () => {
    try {
      const d = (await Fe.getEndpointParamsSchemas()).data?.schemas || {};
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
      const p = i(u), h = {};
      p.forEach((g) => {
        g.default !== void 0 && (h[g.key] = g.default);
      }), d && Object.assign(h, d), o.value = h;
    },
    updateDraftField: (u, d) => {
      o.value = { ...o.value, [u]: d };
    },
    resetDraft: () => {
      o.value = {}, s.value = null;
    }
  };
});
var Ot = "top", jt = "bottom", Ut = "right", Tt = "left", Pa = "auto", qo = [Ot, jt, Ut, Tt], Zs = "start", Io = "end", dv = "clippingParents", ru = "viewport", mo = "popper", fv = "reference", hc = /* @__PURE__ */ qo.reduce(function(e, t) {
  return e.concat([t + "-" + Zs, t + "-" + Io]);
}, []), iu = /* @__PURE__ */ [].concat(qo, [Pa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Zs, t + "-" + Io]);
}, []), pv = "beforeRead", hv = "read", mv = "afterRead", gv = "beforeMain", vv = "main", _v = "afterMain", yv = "beforeWrite", bv = "write", Ev = "afterWrite", wv = [pv, hv, mv, gv, vv, _v, yv, bv, Ev];
function Pn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ht(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function eo(e) {
  var t = Ht(e).Element;
  return e instanceof t || e instanceof Element;
}
function Yt(e) {
  var t = Ht(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function au(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ht(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function VC(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var s = t.styles[n] || {}, o = t.attributes[n] || {}, r = t.elements[n];
    !Yt(r) || !Pn(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(i) {
      var a = o[i];
      a === !1 ? r.removeAttribute(i) : r.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function LC(e) {
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
      !Yt(o) || !Pn(o) || (Object.assign(o.style, a), Object.keys(r).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const lu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: VC,
  effect: LC,
  requires: ["computeStyles"]
};
function kn(e) {
  return e.split("-")[0];
}
var Ws = Math.max, ia = Math.min, Po = Math.round;
function mc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Av() {
  return !/^((?!chrome|android).)*safari/i.test(mc());
}
function Mo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(), o = 1, r = 1;
  t && Yt(e) && (o = e.offsetWidth > 0 && Po(s.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Po(s.height) / e.offsetHeight || 1);
  var i = eo(e) ? Ht(e) : window, a = i.visualViewport, c = !Av() && n, f = (s.left + (c && a ? a.offsetLeft : 0)) / o, u = (s.top + (c && a ? a.offsetTop : 0)) / r, d = s.width / o, p = s.height / r;
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
function cu(e) {
  var t = Mo(e), n = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: s
  };
}
function Sv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && au(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Yn(e) {
  return Ht(e).getComputedStyle(e);
}
function FC(e) {
  return ["table", "td", "th"].indexOf(Pn(e)) >= 0;
}
function Es(e) {
  return ((eo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ma(e) {
  return Pn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (au(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Es(e)
  );
}
function cp(e) {
  return !Yt(e) || // https://github.com/popperjs/popper-core/issues/837
  Yn(e).position === "fixed" ? null : e.offsetParent;
}
function BC(e) {
  var t = /firefox/i.test(mc()), n = /Trident/i.test(mc());
  if (n && Yt(e)) {
    var s = Yn(e);
    if (s.position === "fixed")
      return null;
  }
  var o = Ma(e);
  for (au(o) && (o = o.host); Yt(o) && ["html", "body"].indexOf(Pn(o)) < 0; ) {
    var r = Yn(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Zr(e) {
  for (var t = Ht(e), n = cp(e); n && FC(n) && Yn(n).position === "static"; )
    n = cp(n);
  return n && (Pn(n) === "html" || Pn(n) === "body" && Yn(n).position === "static") ? t : n || BC(e) || t;
}
function uu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Er(e, t, n) {
  return Ws(e, ia(t, n));
}
function $C(e, t, n) {
  var s = Er(e, t, n);
  return s > n ? n : s;
}
function Cv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ov(e) {
  return Object.assign({}, Cv(), e);
}
function Tv(e, t) {
  return t.reduce(function(n, s) {
    return n[s] = e, n;
  }, {});
}
var jC = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ov(typeof t != "number" ? t : Tv(t, qo));
};
function UC(e) {
  var t, n = e.state, s = e.name, o = e.options, r = n.elements.arrow, i = n.modifiersData.popperOffsets, a = kn(n.placement), c = uu(a), f = [Tt, Ut].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!r || !i)) {
    var d = jC(o.padding, n), p = cu(r), h = c === "y" ? Ot : Tt, g = c === "y" ? jt : Ut, m = n.rects.reference[u] + n.rects.reference[c] - i[c] - n.rects.popper[u], v = i[c] - n.rects.reference[c], y = Zr(r), b = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, _ = m / 2 - v / 2, A = d[h], T = b - p[u] - d[g], N = b / 2 - p[u] / 2 + _, x = Er(A, N, T), I = c;
    n.modifiersData[s] = (t = {}, t[I] = x, t.centerOffset = x - N, t);
  }
}
function HC(e) {
  var t = e.state, n = e.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Sv(t.elements.popper, o) && (t.elements.arrow = o));
}
const Nv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: UC,
  effect: HC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Vo(e) {
  return e.split("-")[1];
}
var WC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function KC(e, t) {
  var n = e.x, s = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Po(n * o) / o || 0,
    y: Po(s * o) / o || 0
  };
}
function up(e) {
  var t, n = e.popper, s = e.popperRect, o = e.placement, r = e.variation, i = e.offsets, a = e.position, c = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, p = i.x, h = p === void 0 ? 0 : p, g = i.y, m = g === void 0 ? 0 : g, v = typeof u == "function" ? u({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = v.x, m = v.y;
  var y = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), _ = Tt, A = Ot, T = window;
  if (f) {
    var N = Zr(n), x = "clientHeight", I = "clientWidth";
    if (N === Ht(n) && (N = Es(n), Yn(N).position !== "static" && a === "absolute" && (x = "scrollHeight", I = "scrollWidth")), N = N, o === Ot || (o === Tt || o === Ut) && r === Io) {
      A = jt;
      var k = d && N === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[x]
      );
      m -= k - s.height, m *= c ? 1 : -1;
    }
    if (o === Tt || (o === Ot || o === jt) && r === Io) {
      _ = Ut;
      var w = d && N === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[I]
      );
      h -= w - s.width, h *= c ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: a
  }, f && WC), C = u === !0 ? KC({
    x: h,
    y: m
  }, Ht(n)) : {
    x: h,
    y: m
  };
  if (h = C.x, m = C.y, c) {
    var F;
    return Object.assign({}, R, (F = {}, F[A] = b ? "0" : "", F[_] = y ? "0" : "", F.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", F));
  }
  return Object.assign({}, R, (t = {}, t[A] = b ? m + "px" : "", t[_] = y ? h + "px" : "", t.transform = "", t));
}
function zC(e) {
  var t = e.state, n = e.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, r = n.adaptive, i = r === void 0 ? !0 : r, a = n.roundOffsets, c = a === void 0 ? !0 : a, f = {
    placement: kn(t.placement),
    variation: Vo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, up(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, up(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const du = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zC,
  data: {}
};
var fi = {
  passive: !0
};
function qC(e) {
  var t = e.state, n = e.instance, s = e.options, o = s.scroll, r = o === void 0 ? !0 : o, i = s.resize, a = i === void 0 ? !0 : i, c = Ht(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, fi);
  }), a && c.addEventListener("resize", n.update, fi), function() {
    r && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, fi);
    }), a && c.removeEventListener("resize", n.update, fi);
  };
}
const fu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: qC,
  data: {}
};
var YC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return YC[t];
  });
}
var XC = {
  start: "end",
  end: "start"
};
function dp(e) {
  return e.replace(/start|end/g, function(t) {
    return XC[t];
  });
}
function pu(e) {
  var t = Ht(e), n = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: s
  };
}
function hu(e) {
  return Mo(Es(e)).left + pu(e).scrollLeft;
}
function GC(e, t) {
  var n = Ht(e), s = Es(e), o = n.visualViewport, r = s.clientWidth, i = s.clientHeight, a = 0, c = 0;
  if (o) {
    r = o.width, i = o.height;
    var f = Av();
    (f || !f && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: a + hu(e),
    y: c
  };
}
function QC(e) {
  var t, n = Es(e), s = pu(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = Ws(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Ws(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -s.scrollLeft + hu(e), c = -s.scrollTop;
  return Yn(o || n).direction === "rtl" && (a += Ws(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: i,
    x: a,
    y: c
  };
}
function mu(e) {
  var t = Yn(e), n = t.overflow, s = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function Dv(e) {
  return ["html", "body", "#document"].indexOf(Pn(e)) >= 0 ? e.ownerDocument.body : Yt(e) && mu(e) ? e : Dv(Ma(e));
}
function wr(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = Dv(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ht(s), i = o ? [r].concat(r.visualViewport || [], mu(s) ? s : []) : s, a = t.concat(i);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(wr(Ma(i)))
  );
}
function gc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function JC(e, t) {
  var n = Mo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function fp(e, t, n) {
  return t === ru ? gc(GC(e, n)) : eo(t) ? JC(t, n) : gc(QC(Es(e)));
}
function ZC(e) {
  var t = wr(Ma(e)), n = ["absolute", "fixed"].indexOf(Yn(e).position) >= 0, s = n && Yt(e) ? Zr(e) : e;
  return eo(s) ? t.filter(function(o) {
    return eo(o) && Sv(o, s) && Pn(o) !== "body";
  }) : [];
}
function eO(e, t, n, s) {
  var o = t === "clippingParents" ? ZC(e) : [].concat(t), r = [].concat(o, [n]), i = r[0], a = r.reduce(function(c, f) {
    var u = fp(e, f, s);
    return c.top = Ws(u.top, c.top), c.right = ia(u.right, c.right), c.bottom = ia(u.bottom, c.bottom), c.left = Ws(u.left, c.left), c;
  }, fp(e, i, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function kv(e) {
  var t = e.reference, n = e.element, s = e.placement, o = s ? kn(s) : null, r = s ? Vo(s) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case Ot:
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
    case Ut:
      c = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Tt:
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
  var f = o ? uu(o) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (r) {
      case Zs:
        c[f] = c[f] - (t[u] / 2 - n[u] / 2);
        break;
      case Io:
        c[f] = c[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return c;
}
function Lo(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = s === void 0 ? e.placement : s, r = n.strategy, i = r === void 0 ? e.strategy : r, a = n.boundary, c = a === void 0 ? dv : a, f = n.rootBoundary, u = f === void 0 ? ru : f, d = n.elementContext, p = d === void 0 ? mo : d, h = n.altBoundary, g = h === void 0 ? !1 : h, m = n.padding, v = m === void 0 ? 0 : m, y = Ov(typeof v != "number" ? v : Tv(v, qo)), b = p === mo ? fv : mo, _ = e.rects.popper, A = e.elements[g ? b : p], T = eO(eo(A) ? A : A.contextElement || Es(e.elements.popper), c, u, i), N = Mo(e.elements.reference), x = kv({
    reference: N,
    element: _,
    placement: o
  }), I = gc(Object.assign({}, _, x)), k = p === mo ? I : N, w = {
    top: T.top - k.top + y.top,
    bottom: k.bottom - T.bottom + y.bottom,
    left: T.left - k.left + y.left,
    right: k.right - T.right + y.right
  }, R = e.modifiersData.offset;
  if (p === mo && R) {
    var C = R[o];
    Object.keys(w).forEach(function(F) {
      var fe = [Ut, jt].indexOf(F) >= 0 ? 1 : -1, X = [Ot, jt].indexOf(F) >= 0 ? "y" : "x";
      w[F] += C[X] * fe;
    });
  }
  return w;
}
function tO(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = n.boundary, r = n.rootBoundary, i = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? iu : c, u = Vo(s), d = u ? a ? hc : hc.filter(function(g) {
    return Vo(g) === u;
  }) : qo, p = d.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  p.length === 0 && (p = d);
  var h = p.reduce(function(g, m) {
    return g[m] = Lo(e, {
      placement: m,
      boundary: o,
      rootBoundary: r,
      padding: i
    })[kn(m)], g;
  }, {});
  return Object.keys(h).sort(function(g, m) {
    return h[g] - h[m];
  });
}
function nO(e) {
  if (kn(e) === Pa)
    return [];
  var t = Bi(e);
  return [dp(e), t, dp(t)];
}
function sO(e) {
  var t = e.state, n = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !0 : i, c = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, g = h === void 0 ? !0 : h, m = n.allowedAutoPlacements, v = t.options.placement, y = kn(v), b = y === v, _ = c || (b || !g ? [Bi(v)] : nO(v)), A = [v].concat(_).reduce(function(Ae, xe) {
      return Ae.concat(kn(xe) === Pa ? tO(t, {
        placement: xe,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : xe);
    }, []), T = t.rects.reference, N = t.rects.popper, x = /* @__PURE__ */ new Map(), I = !0, k = A[0], w = 0; w < A.length; w++) {
      var R = A[w], C = kn(R), F = Vo(R) === Zs, fe = [Ot, jt].indexOf(C) >= 0, X = fe ? "width" : "height", re = Lo(t, {
        placement: R,
        boundary: u,
        rootBoundary: d,
        altBoundary: p,
        padding: f
      }), z = fe ? F ? Ut : Tt : F ? jt : Ot;
      T[X] > N[X] && (z = Bi(z));
      var de = Bi(z), be = [];
      if (r && be.push(re[C] <= 0), a && be.push(re[z] <= 0, re[de] <= 0), be.every(function(Ae) {
        return Ae;
      })) {
        k = R, I = !1;
        break;
      }
      x.set(R, be);
    }
    if (I)
      for (var et = g ? 3 : 1, K = function(xe) {
        var He = A.find(function(L) {
          var J = x.get(L);
          if (J)
            return J.slice(0, xe).every(function(se) {
              return se;
            });
        });
        if (He)
          return k = He, "break";
      }, oe = et; oe > 0; oe--) {
        var he = K(oe);
        if (he === "break") break;
      }
    t.placement !== k && (t.modifiersData[s]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const xv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: sO,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function pp(e, t, n) {
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
function hp(e) {
  return [Ot, Ut, jt, Tt].some(function(t) {
    return e[t] >= 0;
  });
}
function oO(e) {
  var t = e.state, n = e.name, s = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = Lo(t, {
    elementContext: "reference"
  }), a = Lo(t, {
    altBoundary: !0
  }), c = pp(i, s), f = pp(a, o, r), u = hp(c), d = hp(f);
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
const Rv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: oO
};
function rO(e, t, n) {
  var s = kn(e), o = [Tt, Ot].indexOf(s) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = r[0], a = r[1];
  return i = i || 0, a = (a || 0) * o, [Tt, Ut].indexOf(s) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function iO(e) {
  var t = e.state, n = e.options, s = e.name, o = n.offset, r = o === void 0 ? [0, 0] : o, i = iu.reduce(function(u, d) {
    return u[d] = rO(d, t.rects, r), u;
  }, {}), a = i[t.placement], c = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[s] = i;
}
const Iv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: iO
};
function aO(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = kv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const gu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: aO,
  data: {}
};
function lO(e) {
  return e === "x" ? "y" : "x";
}
function cO(e) {
  var t = e.state, n = e.options, s = e.name, o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !1 : i, c = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, p = n.tether, h = p === void 0 ? !0 : p, g = n.tetherOffset, m = g === void 0 ? 0 : g, v = Lo(t, {
    boundary: c,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), y = kn(t.placement), b = Vo(t.placement), _ = !b, A = uu(y), T = lO(A), N = t.modifiersData.popperOffsets, x = t.rects.reference, I = t.rects.popper, k = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, w = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (N) {
    if (r) {
      var F, fe = A === "y" ? Ot : Tt, X = A === "y" ? jt : Ut, re = A === "y" ? "height" : "width", z = N[A], de = z + v[fe], be = z - v[X], et = h ? -I[re] / 2 : 0, K = b === Zs ? x[re] : I[re], oe = b === Zs ? -I[re] : -x[re], he = t.elements.arrow, Ae = h && he ? cu(he) : {
        width: 0,
        height: 0
      }, xe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cv(), He = xe[fe], L = xe[X], J = Er(0, x[re], Ae[re]), se = _ ? x[re] / 2 - et - J - He - w.mainAxis : K - J - He - w.mainAxis, ve = _ ? -x[re] / 2 + et + J + L + w.mainAxis : oe + J + L + w.mainAxis, Ie = t.elements.arrow && Zr(t.elements.arrow), tt = Ie ? A === "y" ? Ie.clientTop || 0 : Ie.clientLeft || 0 : 0, E = (F = R?.[A]) != null ? F : 0, O = z + se - E - tt, V = z + ve - E, q = Er(h ? ia(de, O) : de, z, h ? Ws(be, V) : be);
      N[A] = q, C[A] = q - z;
    }
    if (a) {
      var W, Y = A === "x" ? Ot : Tt, ae = A === "x" ? jt : Ut, te = N[T], ne = T === "y" ? "height" : "width", Z = te + v[Y], ye = te - v[ae], ie = [Ot, Tt].indexOf(y) !== -1, _e = (W = R?.[T]) != null ? W : 0, Oe = ie ? Z : te - x[ne] - I[ne] - _e + w.altAxis, Ve = ie ? te + x[ne] + I[ne] - _e - w.altAxis : ye, We = h && ie ? $C(Oe, te, Ve) : Er(h ? Oe : Z, te, h ? Ve : ye);
      N[T] = We, C[T] = We - te;
    }
    t.modifiersData[s] = C;
  }
}
const Pv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: cO,
  requiresIfExists: ["offset"]
};
function uO(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function dO(e) {
  return e === Ht(e) || !Yt(e) ? pu(e) : uO(e);
}
function fO(e) {
  var t = e.getBoundingClientRect(), n = Po(t.width) / e.offsetWidth || 1, s = Po(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function pO(e, t, n) {
  n === void 0 && (n = !1);
  var s = Yt(t), o = Yt(t) && fO(t), r = Es(t), i = Mo(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((Pn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  mu(r)) && (a = dO(t)), Yt(t) ? (c = Mo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = hu(r))), {
    x: i.left + a.scrollLeft - c.x,
    y: i.top + a.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function hO(e) {
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
function mO(e) {
  var t = hO(e);
  return wv.reduce(function(n, s) {
    return n.concat(t.filter(function(o) {
      return o.phase === s;
    }));
  }, []);
}
function gO(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function vO(e) {
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
var mp = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function gp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Va(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, s = n === void 0 ? [] : n, o = t.defaultOptions, r = o === void 0 ? mp : o;
  return function(a, c, f) {
    f === void 0 && (f = r);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, mp, r),
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
        m(), u.options = Object.assign({}, r, u.options, b), u.scrollParents = {
          reference: eo(a) ? wr(a) : a.contextElement ? wr(a.contextElement) : [],
          popper: wr(c)
        };
        var _ = mO(vO([].concat(s, u.options.modifiers)));
        return u.orderedModifiers = _.filter(function(A) {
          return A.enabled;
        }), g(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var y = u.elements, b = y.reference, _ = y.popper;
          if (gp(b, _)) {
            u.rects = {
              reference: pO(b, Zr(_), u.options.strategy === "fixed"),
              popper: cu(_)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(w) {
              return u.modifiersData[w.name] = Object.assign({}, w.data);
            });
            for (var A = 0; A < u.orderedModifiers.length; A++) {
              if (u.reset === !0) {
                u.reset = !1, A = -1;
                continue;
              }
              var T = u.orderedModifiers[A], N = T.fn, x = T.options, I = x === void 0 ? {} : x, k = T.name;
              typeof N == "function" && (u = N({
                state: u,
                options: I,
                name: k,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: gO(function() {
        return new Promise(function(v) {
          h.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        m(), p = !0;
      }
    };
    if (!gp(a, c))
      return h;
    h.setOptions(f).then(function(v) {
      !p && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function g() {
      u.orderedModifiers.forEach(function(v) {
        var y = v.name, b = v.options, _ = b === void 0 ? {} : b, A = v.effect;
        if (typeof A == "function") {
          var T = A({
            state: u,
            name: y,
            instance: h,
            options: _
          }), N = function() {
          };
          d.push(T || N);
        }
      });
    }
    function m() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return h;
  };
}
var _O = /* @__PURE__ */ Va(), yO = [fu, gu, du, lu], bO = /* @__PURE__ */ Va({
  defaultModifiers: yO
}), EO = [fu, gu, du, lu, Iv, xv, Pv, Nv, Rv], vu = /* @__PURE__ */ Va({
  defaultModifiers: EO
});
const Mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: _v,
  afterRead: mv,
  afterWrite: Ev,
  applyStyles: lu,
  arrow: Nv,
  auto: Pa,
  basePlacements: qo,
  beforeMain: gv,
  beforeRead: pv,
  beforeWrite: yv,
  bottom: jt,
  clippingParents: dv,
  computeStyles: du,
  createPopper: vu,
  createPopperBase: _O,
  createPopperLite: bO,
  detectOverflow: Lo,
  end: Io,
  eventListeners: fu,
  flip: xv,
  hide: Rv,
  left: Tt,
  main: vv,
  modifierPhases: wv,
  offset: Iv,
  placements: iu,
  popper: mo,
  popperGenerator: Va,
  popperOffsets: gu,
  preventOverflow: Pv,
  read: hv,
  reference: fv,
  right: Ut,
  start: Zs,
  top: Ot,
  variationPlacements: hc,
  viewport: ru,
  write: bv
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ns = /* @__PURE__ */ new Map(), cl = {
  set(e, t, n) {
    ns.has(e) || ns.set(e, /* @__PURE__ */ new Map());
    const s = ns.get(e);
    if (!s.has(t) && s.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
      return;
    }
    s.set(t, n);
  },
  get(e, t) {
    return ns.has(e) && ns.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!ns.has(e))
      return;
    const n = ns.get(e);
    n.delete(t), n.size === 0 && ns.delete(e);
  }
}, wO = 1e6, AO = 1e3, vc = "transitionend", Vv = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), SO = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), CO = (e) => {
  do
    e += Math.floor(Math.random() * wO);
  while (document.getElementById(e));
  return e;
}, OO = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), o = Number.parseFloat(n);
  return !s && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * AO);
}, Lv = (e) => {
  e.dispatchEvent(new Event(vc));
}, Kn = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), gs = (e) => Kn(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Vv(e)) : null, Yo = (e) => {
  if (!Kn(e) || e.getClientRects().length === 0)
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
}, vs = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Fv = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Fv(e.parentNode) : null;
}, aa = () => {
}, ei = (e) => {
  e.offsetHeight;
}, Bv = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, ul = [], TO = (e) => {
  document.readyState === "loading" ? (ul.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of ul)
      t();
  }), ul.push(e)) : e();
}, Qt = () => document.documentElement.dir === "rtl", en = (e) => {
  TO(() => {
    const t = Bv();
    if (t) {
      const n = e.NAME, s = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = s, e.jQueryInterface);
    }
  });
}, Rt = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, $v = (e, t, n = !0) => {
  if (!n) {
    Rt(e);
    return;
  }
  const o = OO(t) + 5;
  let r = !1;
  const i = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(vc, i), Rt(e));
  };
  t.addEventListener(vc, i), setTimeout(() => {
    r || Lv(t);
  }, o);
}, _u = (e, t, n, s) => {
  const o = e.length;
  let r = e.indexOf(t);
  return r === -1 ? !n && s ? e[o - 1] : e[0] : (r += n ? 1 : -1, s && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))]);
}, NO = /[^.]*(?=\..*)\.|.*/, DO = /\..*/, kO = /::\d+$/, dl = {};
let vp = 1;
const jv = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, xO = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Uv(e, t) {
  return t && `${t}::${vp++}` || e.uidEvent || vp++;
}
function Hv(e) {
  const t = Uv(e);
  return e.uidEvent = t, dl[t] = dl[t] || {}, dl[t];
}
function RO(e, t) {
  return function n(s) {
    return yu(s, {
      delegateTarget: e
    }), n.oneOff && Q.off(e, s.type, t), t.apply(e, [s]);
  };
}
function IO(e, t, n) {
  return function s(o) {
    const r = e.querySelectorAll(t);
    for (let {
      target: i
    } = o; i && i !== this; i = i.parentNode)
      for (const a of r)
        if (a === i)
          return yu(o, {
            delegateTarget: i
          }), s.oneOff && Q.off(e, o.type, t, n), n.apply(i, [o]);
  };
}
function Wv(e, t, n = null) {
  return Object.values(e).find((s) => s.callable === t && s.delegationSelector === n);
}
function Kv(e, t, n) {
  const s = typeof t == "string", o = s ? n : t || n;
  let r = zv(e);
  return xO.has(r) || (r = e), [s, o, r];
}
function _p(e, t, n, s, o) {
  if (typeof t != "string" || !e)
    return;
  let [r, i, a] = Kv(t, n, s);
  t in jv && (i = ((g) => function(m) {
    if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))
      return g.call(this, m);
  })(i));
  const c = Hv(e), f = c[a] || (c[a] = {}), u = Wv(f, i, r ? n : null);
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const d = Uv(i, t.replace(NO, "")), p = r ? IO(e, n, i) : RO(e, i);
  p.delegationSelector = r ? n : null, p.callable = i, p.oneOff = o, p.uidEvent = d, f[d] = p, e.addEventListener(a, p, r);
}
function _c(e, t, n, s, o) {
  const r = Wv(t[n], s, o);
  r && (e.removeEventListener(n, r, !!o), delete t[n][r.uidEvent]);
}
function PO(e, t, n, s) {
  const o = t[n] || {};
  for (const [r, i] of Object.entries(o))
    r.includes(s) && _c(e, t, n, i.callable, i.delegationSelector);
}
function zv(e) {
  return e = e.replace(DO, ""), jv[e] || e;
}
const Q = {
  on(e, t, n, s) {
    _p(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    _p(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e)
      return;
    const [o, r, i] = Kv(t, n, s), a = i !== t, c = Hv(e), f = c[i] || {}, u = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(f).length)
        return;
      _c(e, c, i, r, o ? n : null);
      return;
    }
    if (u)
      for (const d of Object.keys(c))
        PO(e, c, d, t.slice(1));
    for (const [d, p] of Object.entries(f)) {
      const h = d.replace(kO, "");
      (!a || t.includes(h)) && _c(e, c, i, p.callable, p.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const s = Bv(), o = zv(t), r = t !== o;
    let i = null, a = !0, c = !0, f = !1;
    r && s && (i = s.Event(t, n), s(e).trigger(i), a = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const u = yu(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && u.preventDefault(), c && e.dispatchEvent(u), u.defaultPrevented && i && i.preventDefault(), u;
  }
};
function yu(e, t = {}) {
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
function yp(e) {
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
const zn = {
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
      o = o.charAt(0).toLowerCase() + o.slice(1), t[o] = yp(e.dataset[s]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return yp(e.getAttribute(`data-bs-${fl(t)}`));
  }
};
class ti {
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
    const s = Kn(n) ? zn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof s == "object" ? s : {},
      ...Kn(n) ? zn.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, o] of Object.entries(n)) {
      const r = t[s], i = Kn(r) ? "element" : SO(r);
      if (!new RegExp(o).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${o}".`);
    }
  }
}
const MO = "5.3.7";
class vn extends ti {
  constructor(t, n) {
    super(), t = gs(t), t && (this._element = t, this._config = this._getConfig(n), cl.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    cl.remove(this._element, this.constructor.DATA_KEY), Q.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  // Private
  _queueCallback(t, n, s = !0) {
    $v(t, n, s);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return cl.get(gs(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return MO;
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
  return t ? t.split(",").map((n) => Vv(n)).join(",") : null;
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
    return this.find(t, e).filter((n) => !vs(n) && Yo(n));
  },
  getSelectorFromElement(e) {
    const t = pl(e);
    return t && Ee.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = pl(e);
    return t ? Ee.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = pl(e);
    return t ? Ee.find(t) : [];
  }
}, La = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, s = e.NAME;
  Q.on(document, n, `[data-bs-dismiss="${s}"]`, function(o) {
    if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), vs(this))
      return;
    const r = Ee.getElementFromSelector(this) || this.closest(`.${s}`);
    e.getOrCreateInstance(r)[t]();
  });
}, VO = "alert", LO = "bs.alert", qv = `.${LO}`, FO = `close${qv}`, BO = `closed${qv}`, $O = "fade", jO = "show";
class Fa extends vn {
  // Getters
  static get NAME() {
    return VO;
  }
  // Public
  close() {
    if (Q.trigger(this._element, FO).defaultPrevented)
      return;
    this._element.classList.remove(jO);
    const n = this._element.classList.contains($O);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), Q.trigger(this._element, BO), this.dispose();
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
en(Fa);
const UO = "button", HO = "bs.button", WO = `.${HO}`, KO = ".data-api", zO = "active", bp = '[data-bs-toggle="button"]', qO = `click${WO}${KO}`;
class Ba extends vn {
  // Getters
  static get NAME() {
    return UO;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(zO));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ba.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
Q.on(document, qO, bp, (e) => {
  e.preventDefault();
  const t = e.target.closest(bp);
  Ba.getOrCreateInstance(t).toggle();
});
en(Ba);
const YO = "swipe", Xo = ".bs.swipe", XO = `touchstart${Xo}`, GO = `touchmove${Xo}`, QO = `touchend${Xo}`, JO = `pointerdown${Xo}`, ZO = `pointerup${Xo}`, eT = "touch", tT = "pen", nT = "pointer-event", sT = 40, oT = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, rT = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class la extends ti {
  constructor(t, n) {
    super(), this._element = t, !(!t || !la.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return oT;
  }
  static get DefaultType() {
    return rT;
  }
  static get NAME() {
    return YO;
  }
  // Public
  dispose() {
    Q.off(this._element, Xo);
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
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), Rt(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= sT)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && Rt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (Q.on(this._element, JO, (t) => this._start(t)), Q.on(this._element, ZO, (t) => this._end(t)), this._element.classList.add(nT)) : (Q.on(this._element, XO, (t) => this._start(t)), Q.on(this._element, GO, (t) => this._move(t)), Q.on(this._element, QO, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === tT || t.pointerType === eT);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const iT = "carousel", aT = "bs.carousel", ws = `.${aT}`, Yv = ".data-api", lT = "ArrowLeft", cT = "ArrowRight", uT = 500, rr = "next", uo = "prev", go = "left", $i = "right", dT = `slide${ws}`, hl = `slid${ws}`, fT = `keydown${ws}`, pT = `mouseenter${ws}`, hT = `mouseleave${ws}`, mT = `dragstart${ws}`, gT = `load${ws}${Yv}`, vT = `click${ws}${Yv}`, Xv = "carousel", pi = "active", _T = "slide", yT = "carousel-item-end", bT = "carousel-item-start", ET = "carousel-item-next", wT = "carousel-item-prev", Gv = ".active", Qv = ".carousel-item", AT = Gv + Qv, ST = ".carousel-item img", CT = ".carousel-indicators", OT = "[data-bs-slide], [data-bs-slide-to]", TT = '[data-bs-ride="carousel"]', NT = {
  [lT]: $i,
  [cT]: go
}, DT = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, kT = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class ni extends vn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Ee.findOne(CT, this._element), this._addEventListeners(), this._config.ride === Xv && this.cycle();
  }
  // Getters
  static get Default() {
    return DT;
  }
  static get DefaultType() {
    return kT;
  }
  static get NAME() {
    return iT;
  }
  // Public
  next() {
    this._slide(rr);
  }
  nextWhenVisible() {
    !document.hidden && Yo(this._element) && this.next();
  }
  prev() {
    this._slide(uo);
  }
  pause() {
    this._isSliding && Lv(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        Q.one(this._element, hl, () => this.cycle());
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
      Q.one(this._element, hl, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t)
      return;
    const o = t > s ? rr : uo;
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
    this._config.keyboard && Q.on(this._element, fT, (t) => this._keydown(t)), this._config.pause === "hover" && (Q.on(this._element, pT, () => this.pause()), Q.on(this._element, hT, () => this._maybeEnableCycle())), this._config.touch && la.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of Ee.find(ST, this._element))
      Q.on(s, mT, (o) => o.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(go)),
      rightCallback: () => this._slide(this._directionToOrder($i)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), uT + this._config.interval));
      }
    };
    this._swipeHelper = new la(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = NT[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = Ee.findOne(Gv, this._indicatorsElement);
    n.classList.remove(pi), n.removeAttribute("aria-current");
    const s = Ee.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(pi), s.setAttribute("aria-current", "true"));
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
    const s = this._getActive(), o = t === rr, r = n || _u(this._getItems(), s, o, this._config.wrap);
    if (r === s)
      return;
    const i = this._getItemIndex(r), a = (h) => Q.trigger(this._element, h, {
      relatedTarget: r,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(s),
      to: i
    });
    if (a(dT).defaultPrevented || !s || !r)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = r;
    const u = o ? bT : yT, d = o ? ET : wT;
    r.classList.add(d), ei(r), s.classList.add(u), r.classList.add(u);
    const p = () => {
      r.classList.remove(u, d), r.classList.add(pi), s.classList.remove(pi, d, u), this._isSliding = !1, a(hl);
    };
    this._queueCallback(p, s, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(_T);
  }
  _getActive() {
    return Ee.findOne(AT, this._element);
  }
  _getItems() {
    return Ee.find(Qv, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Qt() ? t === go ? uo : rr : t === go ? rr : uo;
  }
  _orderToDirection(t) {
    return Qt() ? t === uo ? go : $i : t === uo ? $i : go;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ni.getOrCreateInstance(this, t);
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
Q.on(document, vT, OT, function(e) {
  const t = Ee.getElementFromSelector(this);
  if (!t || !t.classList.contains(Xv))
    return;
  e.preventDefault();
  const n = ni.getOrCreateInstance(t), s = this.getAttribute("data-bs-slide-to");
  if (s) {
    n.to(s), n._maybeEnableCycle();
    return;
  }
  if (zn.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
Q.on(window, gT, () => {
  const e = Ee.find(TT);
  for (const t of e)
    ni.getOrCreateInstance(t);
});
en(ni);
const xT = "collapse", RT = "bs.collapse", si = `.${RT}`, IT = ".data-api", PT = `show${si}`, MT = `shown${si}`, VT = `hide${si}`, LT = `hidden${si}`, FT = `click${si}${IT}`, ml = "show", bo = "collapse", hi = "collapsing", BT = "collapsed", $T = `:scope .${bo} .${bo}`, jT = "collapse-horizontal", UT = "width", HT = "height", WT = ".collapse.show, .collapse.collapsing", yc = '[data-bs-toggle="collapse"]', KT = {
  parent: null,
  toggle: !0
}, zT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class $r extends vn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const s = Ee.find(yc);
    for (const o of s) {
      const r = Ee.getSelectorFromElement(o), i = Ee.find(r).filter((a) => a === this._element);
      r !== null && i.length && this._triggerArray.push(o);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return KT;
  }
  static get DefaultType() {
    return zT;
  }
  static get NAME() {
    return xT;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(WT).filter((a) => a !== this._element).map((a) => $r.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || Q.trigger(this._element, PT).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(bo), this._element.classList.add(hi), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(hi), this._element.classList.add(bo, ml), this._element.style[s] = "", Q.trigger(this._element, MT);
    }, i = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[s] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || Q.trigger(this._element, VT).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, ei(this._element), this._element.classList.add(hi), this._element.classList.remove(bo, ml);
    for (const o of this._triggerArray) {
      const r = Ee.getElementFromSelector(o);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(hi), this._element.classList.add(bo), Q.trigger(this._element, LT);
    };
    this._element.style[n] = "", this._queueCallback(s, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(ml);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = gs(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(jT) ? UT : HT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(yc);
    for (const n of t) {
      const s = Ee.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = Ee.find($T, this._config.parent);
    return Ee.find(t, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(BT, !n), s.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const s = $r.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
}
Q.on(document, FT, yc, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of Ee.getMultipleElementsFromSelector(this))
    $r.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
en($r);
const Ep = "dropdown", qT = "bs.dropdown", no = `.${qT}`, bu = ".data-api", YT = "Escape", wp = "Tab", XT = "ArrowUp", Ap = "ArrowDown", GT = 2, QT = `hide${no}`, JT = `hidden${no}`, ZT = `show${no}`, eN = `shown${no}`, Jv = `click${no}${bu}`, Zv = `keydown${no}${bu}`, tN = `keyup${no}${bu}`, vo = "show", nN = "dropup", sN = "dropend", oN = "dropstart", rN = "dropup-center", iN = "dropdown-center", Ms = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', aN = `${Ms}.${vo}`, ji = ".dropdown-menu", lN = ".navbar", cN = ".navbar-nav", uN = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", dN = Qt() ? "top-end" : "top-start", fN = Qt() ? "top-start" : "top-end", pN = Qt() ? "bottom-end" : "bottom-start", hN = Qt() ? "bottom-start" : "bottom-end", mN = Qt() ? "left-start" : "right-start", gN = Qt() ? "right-start" : "left-start", vN = "top", _N = "bottom", yN = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, bN = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class xn extends vn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = Ee.next(this._element, ji)[0] || Ee.prev(this._element, ji)[0] || Ee.findOne(ji, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return yN;
  }
  static get DefaultType() {
    return bN;
  }
  static get NAME() {
    return Ep;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (vs(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!Q.trigger(this._element, ZT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(cN))
        for (const s of [].concat(...document.body.children))
          Q.on(s, "mouseover", aa);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(vo), this._element.classList.add(vo), Q.trigger(this._element, eN, t);
    }
  }
  hide() {
    if (vs(this._element) || !this._isShown())
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
    if (!Q.trigger(this._element, QT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          Q.off(s, "mouseover", aa);
      this._popper && this._popper.destroy(), this._menu.classList.remove(vo), this._element.classList.remove(vo), this._element.setAttribute("aria-expanded", "false"), zn.removeDataAttribute(this._menu, "popper"), Q.trigger(this._element, JT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !Kn(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${Ep.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Mv > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : Kn(this._config.reference) ? t = gs(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = vu(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(vo);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(sN))
      return mN;
    if (t.classList.contains(oN))
      return gN;
    if (t.classList.contains(rN))
      return vN;
    if (t.classList.contains(iN))
      return _N;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(nN) ? n ? fN : dN : n ? hN : pN;
  }
  _detectNavbar() {
    return this._element.closest(lN) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (zn.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...Rt(this._config.popperConfig, [void 0, t])
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const s = Ee.find(uN, this._menu).filter((o) => Yo(o));
    s.length && _u(s, n, t === Ap, !s.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = xn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === GT || t.type === "keyup" && t.key !== wp)
      return;
    const n = Ee.find(aN);
    for (const s of n) {
      const o = xn.getInstance(s);
      if (!o || o._config.autoClose === !1)
        continue;
      const r = t.composedPath(), i = r.includes(o._menu);
      if (r.includes(o._element) || o._config.autoClose === "inside" && !i || o._config.autoClose === "outside" && i || o._menu.contains(t.target) && (t.type === "keyup" && t.key === wp || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: o._element
      };
      t.type === "click" && (a.clickEvent = t), o._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), s = t.key === YT, o = [XT, Ap].includes(t.key);
    if (!o && !s || n && !s)
      return;
    t.preventDefault();
    const r = this.matches(Ms) ? this : Ee.prev(this, Ms)[0] || Ee.next(this, Ms)[0] || Ee.findOne(Ms, t.delegateTarget.parentNode), i = xn.getOrCreateInstance(r);
    if (o) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), r.focus());
  }
}
Q.on(document, Zv, Ms, xn.dataApiKeydownHandler);
Q.on(document, Zv, ji, xn.dataApiKeydownHandler);
Q.on(document, Jv, xn.clearMenus);
Q.on(document, tN, xn.clearMenus);
Q.on(document, Jv, Ms, function(e) {
  e.preventDefault(), xn.getOrCreateInstance(this).toggle();
});
en(xn);
const e_ = "backdrop", EN = "fade", Sp = "show", Cp = `mousedown.bs.${e_}`, wN = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, AN = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class t_ extends ti {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return wN;
  }
  static get DefaultType() {
    return AN;
  }
  static get NAME() {
    return e_;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      Rt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && ei(n), n.classList.add(Sp), this._emulateAnimation(() => {
      Rt(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      Rt(t);
      return;
    }
    this._getElement().classList.remove(Sp), this._emulateAnimation(() => {
      this.dispose(), Rt(t);
    });
  }
  dispose() {
    this._isAppended && (Q.off(this._element, Cp), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(EN), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = gs(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), Q.on(t, Cp, () => {
      Rt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    $v(t, this._getElement(), this._config.isAnimated);
  }
}
const SN = "focustrap", CN = "bs.focustrap", ca = `.${CN}`, ON = `focusin${ca}`, TN = `keydown.tab${ca}`, NN = "Tab", DN = "forward", Op = "backward", kN = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, xN = {
  autofocus: "boolean",
  trapElement: "element"
};
class n_ extends ti {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return kN;
  }
  static get DefaultType() {
    return xN;
  }
  static get NAME() {
    return SN;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), Q.off(document, ca), Q.on(document, ON, (t) => this._handleFocusin(t)), Q.on(document, TN, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, Q.off(document, ca));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const s = Ee.focusableChildren(n);
    s.length === 0 ? n.focus() : this._lastTabNavDirection === Op ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === NN && (this._lastTabNavDirection = t.shiftKey ? Op : DN);
  }
}
const Tp = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Np = ".sticky-top", mi = "padding-right", Dp = "margin-right";
class bc {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, mi, (n) => n + t), this._setElementAttributes(Tp, mi, (n) => n + t), this._setElementAttributes(Np, Dp, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, mi), this._resetElementAttributes(Tp, mi), this._resetElementAttributes(Np, Dp);
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
    s && zn.setDataAttribute(t, n, s);
  }
  _resetElementAttributes(t, n) {
    const s = (o) => {
      const r = zn.getDataAttribute(o, n);
      if (r === null) {
        o.style.removeProperty(n);
        return;
      }
      zn.removeDataAttribute(o, n), o.style.setProperty(n, r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, n) {
    if (Kn(t)) {
      n(t);
      return;
    }
    for (const s of Ee.find(t, this._element))
      n(s);
  }
}
const RN = "modal", IN = "bs.modal", Jt = `.${IN}`, PN = ".data-api", MN = "Escape", VN = `hide${Jt}`, LN = `hidePrevented${Jt}`, s_ = `hidden${Jt}`, o_ = `show${Jt}`, FN = `shown${Jt}`, BN = `resize${Jt}`, $N = `click.dismiss${Jt}`, jN = `mousedown.dismiss${Jt}`, UN = `keydown.dismiss${Jt}`, HN = `click${Jt}${PN}`, kp = "modal-open", WN = "fade", xp = "show", gl = "modal-static", KN = ".modal.show", zN = ".modal-dialog", qN = ".modal-body", YN = '[data-bs-toggle="modal"]', XN = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, GN = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class to extends vn {
  constructor(t, n) {
    super(t, n), this._dialog = Ee.findOne(zN, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new bc(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return XN;
  }
  static get DefaultType() {
    return GN;
  }
  static get NAME() {
    return RN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || Q.trigger(this._element, o_, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(kp), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || Q.trigger(this._element, VN).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(xp), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    Q.off(window, Jt), Q.off(this._dialog, Jt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new t_({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new n_({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = Ee.findOne(qN, this._dialog);
    n && (n.scrollTop = 0), ei(this._element), this._element.classList.add(xp);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, Q.trigger(this._element, FN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    Q.on(this._element, UN, (t) => {
      if (t.key === MN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), Q.on(window, BN, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), Q.on(this._element, jN, (t) => {
      Q.one(this._element, $N, (n) => {
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
      document.body.classList.remove(kp), this._resetAdjustments(), this._scrollBar.reset(), Q.trigger(this._element, s_);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(WN);
  }
  _triggerBackdropTransition() {
    if (Q.trigger(this._element, LN).defaultPrevented)
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
      const o = Qt() ? "paddingLeft" : "paddingRight";
      this._element.style[o] = `${n}px`;
    }
    if (!s && t) {
      const o = Qt() ? "paddingRight" : "paddingLeft";
      this._element.style[o] = `${n}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, n) {
    return this.each(function() {
      const s = to.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
Q.on(document, HN, YN, function(e) {
  const t = Ee.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), Q.one(t, o_, (o) => {
    o.defaultPrevented || Q.one(t, s_, () => {
      Yo(this) && this.focus();
    });
  });
  const n = Ee.findOne(KN);
  n && to.getInstance(n).hide(), to.getOrCreateInstance(t).toggle(this);
});
La(to);
en(to);
const QN = "offcanvas", JN = "bs.offcanvas", Jn = `.${JN}`, r_ = ".data-api", ZN = `load${Jn}${r_}`, eD = "Escape", Rp = "show", Ip = "showing", Pp = "hiding", tD = "offcanvas-backdrop", i_ = ".offcanvas.show", nD = `show${Jn}`, sD = `shown${Jn}`, oD = `hide${Jn}`, Mp = `hidePrevented${Jn}`, a_ = `hidden${Jn}`, rD = `resize${Jn}`, iD = `click${Jn}${r_}`, aD = `keydown.dismiss${Jn}`, lD = '[data-bs-toggle="offcanvas"]', cD = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, uD = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class _s extends vn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return cD;
  }
  static get DefaultType() {
    return uD;
  }
  static get NAME() {
    return QN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || Q.trigger(this._element, nD, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new bc().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ip);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Rp), this._element.classList.remove(Ip), Q.trigger(this._element, sD, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || Q.trigger(this._element, oD).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Pp), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Rp, Pp), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new bc().reset(), Q.trigger(this._element, a_);
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
        Q.trigger(this._element, Mp);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new t_({
      className: tD,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new n_({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    Q.on(this._element, aD, (t) => {
      if (t.key === eD) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        Q.trigger(this._element, Mp);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = _s.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Q.on(document, iD, lD, function(e) {
  const t = Ee.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), vs(this))
    return;
  Q.one(t, a_, () => {
    Yo(this) && this.focus();
  });
  const n = Ee.findOne(i_);
  n && n !== t && _s.getInstance(n).hide(), _s.getOrCreateInstance(t).toggle(this);
});
Q.on(window, ZN, () => {
  for (const e of Ee.find(i_))
    _s.getOrCreateInstance(e).show();
});
Q.on(window, rD, () => {
  for (const e of Ee.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && _s.getOrCreateInstance(e).hide();
});
La(_s);
en(_s);
const dD = /^aria-[\w-]*$/i, l_ = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", dD],
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
}, fD = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), pD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, hD = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? fD.has(n) ? !!pD.test(e.nodeValue) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
};
function mD(e, t, n) {
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
      hD(u, f) || i.removeAttribute(u.nodeName);
  }
  return o.body.innerHTML;
}
const gD = "TemplateFactory", vD = {
  allowList: l_,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, _D = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, yD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class bD extends ti {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return vD;
  }
  static get DefaultType() {
    return _D;
  }
  static get NAME() {
    return gD;
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
      }, yD);
  }
  _setContent(t, n, s) {
    const o = Ee.findOne(s, t);
    if (o) {
      if (n = this._resolvePossibleFunction(n), !n) {
        o.remove();
        return;
      }
      if (Kn(n)) {
        this._putElementInTemplate(gs(n), o);
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
    return this._config.sanitize ? mD(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return Rt(t, [void 0, this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      n.innerHTML = "", n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const ED = "tooltip", wD = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), vl = "fade", AD = "modal", gi = "show", SD = ".tooltip-inner", Vp = `.${AD}`, Lp = "hide.bs.modal", ir = "hover", _l = "focus", yl = "click", CD = "manual", OD = "hide", TD = "hidden", ND = "show", DD = "shown", kD = "inserted", xD = "click", RD = "focusin", ID = "focusout", PD = "mouseenter", MD = "mouseleave", VD = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Qt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Qt() ? "right" : "left"
}, LD = {
  allowList: l_,
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
}, FD = {
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
class so extends vn {
  constructor(t, n) {
    if (typeof Mv > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return LD;
  }
  static get DefaultType() {
    return FD;
  }
  static get NAME() {
    return ED;
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
    clearTimeout(this._timeout), Q.off(this._element.closest(Vp), Lp, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = Q.trigger(this._element, this.constructor.eventName(ND)), s = (Fv(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const o = this._getTipElement();
    this._element.setAttribute("aria-describedby", o.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(o), Q.trigger(this._element, this.constructor.eventName(kD))), this._popper = this._createPopper(o), o.classList.add(gi), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        Q.on(a, "mouseover", aa);
    const i = () => {
      Q.trigger(this._element, this.constructor.eventName(DD)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || Q.trigger(this._element, this.constructor.eventName(OD)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(gi), "ontouchstart" in document.documentElement)
      for (const o of [].concat(...document.body.children))
        Q.off(o, "mouseover", aa);
    this._activeTrigger[yl] = !1, this._activeTrigger[_l] = !1, this._activeTrigger[ir] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), Q.trigger(this._element, this.constructor.eventName(TD)));
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
    n.classList.remove(vl, gi), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = CO(this.constructor.NAME).toString();
    return n.setAttribute("id", s), this._isAnimated() && n.classList.add(vl), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new bD({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [SD]: this._getTitle()
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
    return this.tip && this.tip.classList.contains(gi);
  }
  _createPopper(t) {
    const n = Rt(this._config.placement, [this, t, this._element]), s = VD[n.toUpperCase()];
    return vu(this._element, t, this._getPopperConfig(s));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return Rt(t, [this._element, this._element]);
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
      ...Rt(this._config.popperConfig, [void 0, n])
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        Q.on(this._element, this.constructor.eventName(xD), this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          o._activeTrigger[yl] = !(o._isShown() && o._activeTrigger[yl]), o.toggle();
        });
      else if (n !== CD) {
        const s = n === ir ? this.constructor.eventName(PD) : this.constructor.eventName(RD), o = n === ir ? this.constructor.eventName(MD) : this.constructor.eventName(ID);
        Q.on(this._element, s, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusin" ? _l : ir] = !0, i._enter();
        }), Q.on(this._element, o, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusout" ? _l : ir] = i._element.contains(r.relatedTarget), i._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, Q.on(this._element.closest(Vp), Lp, this._hideModalHandler);
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
    const n = zn.getDataAttributes(this._element);
    for (const s of Object.keys(n))
      wD.has(s) && delete n[s];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : gs(t.container), typeof t.delay == "number" && (t.delay = {
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
      const n = so.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
en(so);
const BD = "popover", $D = ".popover-header", jD = ".popover-body", UD = {
  ...so.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, HD = {
  ...so.DefaultType,
  content: "(null|string|element|function)"
};
class Eu extends so {
  // Getters
  static get Default() {
    return UD;
  }
  static get DefaultType() {
    return HD;
  }
  static get NAME() {
    return BD;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [$D]: this._getTitle(),
      [jD]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Eu.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
en(Eu);
const WD = "scrollspy", KD = "bs.scrollspy", wu = `.${KD}`, zD = ".data-api", qD = `activate${wu}`, Fp = `click${wu}`, YD = `load${wu}${zD}`, XD = "dropdown-item", fo = "active", GD = '[data-bs-spy="scroll"]', bl = "[href]", QD = ".nav, .list-group", Bp = ".nav-link", JD = ".nav-item", ZD = ".list-group-item", ek = `${Bp}, ${JD} > ${Bp}, ${ZD}`, tk = ".dropdown", nk = ".dropdown-toggle", sk = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, ok = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class $a extends vn {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return sk;
  }
  static get DefaultType() {
    return ok;
  }
  static get NAME() {
    return WD;
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
    return t.target = gs(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (Q.off(this._config.target, Fp), Q.on(this._config.target, Fp, bl, (t) => {
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
    const t = Ee.find(bl, this._config.target);
    for (const n of t) {
      if (!n.hash || vs(n))
        continue;
      const s = Ee.findOne(decodeURI(n.hash), this._element);
      Yo(s) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(fo), this._activateParents(t), Q.trigger(this._element, qD, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(XD)) {
      Ee.findOne(nk, t.closest(tk)).classList.add(fo);
      return;
    }
    for (const n of Ee.parents(t, QD))
      for (const s of Ee.prev(n, ek))
        s.classList.add(fo);
  }
  _clearActiveClass(t) {
    t.classList.remove(fo);
    const n = Ee.find(`${bl}.${fo}`, t);
    for (const s of n)
      s.classList.remove(fo);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = $a.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Q.on(window, YD, () => {
  for (const e of Ee.find(GD))
    $a.getOrCreateInstance(e);
});
en($a);
const rk = "tab", ik = "bs.tab", oo = `.${ik}`, ak = `hide${oo}`, lk = `hidden${oo}`, ck = `show${oo}`, uk = `shown${oo}`, dk = `click${oo}`, fk = `keydown${oo}`, pk = `load${oo}`, hk = "ArrowLeft", $p = "ArrowRight", mk = "ArrowUp", jp = "ArrowDown", El = "Home", Up = "End", Vs = "active", Hp = "fade", wl = "show", gk = "dropdown", c_ = ".dropdown-toggle", vk = ".dropdown-menu", Al = `:not(${c_})`, _k = '.list-group, .nav, [role="tablist"]', yk = ".nav-item, .list-group-item", bk = `.nav-link${Al}, .list-group-item${Al}, [role="tab"]${Al}`, u_ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Sl = `${bk}, ${u_}`, Ek = `.${Vs}[data-bs-toggle="tab"], .${Vs}[data-bs-toggle="pill"], .${Vs}[data-bs-toggle="list"]`;
class Fo extends vn {
  constructor(t) {
    super(t), this._parent = this._element.closest(_k), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), Q.on(this._element, fk, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return rk;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), s = n ? Q.trigger(n, ak, {
      relatedTarget: t
    }) : null;
    Q.trigger(t, ck, {
      relatedTarget: n
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(Vs), this._activate(Ee.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(wl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), Q.trigger(t, uk, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Hp));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(Vs), t.blur(), this._deactivate(Ee.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(wl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), Q.trigger(t, lk, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Hp));
  }
  _keydown(t) {
    if (![hk, $p, mk, jp, El, Up].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((o) => !vs(o));
    let s;
    if ([El, Up].includes(t.key))
      s = n[t.key === El ? 0 : n.length - 1];
    else {
      const o = [$p, jp].includes(t.key);
      s = _u(n, t.target, o, !0);
    }
    s && (s.focus({
      preventScroll: !0
    }), Fo.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return Ee.find(Sl, this._parent);
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
    if (!s.classList.contains(gk))
      return;
    const o = (r, i) => {
      const a = Ee.findOne(r, s);
      a && a.classList.toggle(i, n);
    };
    o(c_, Vs), o(vk, wl), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(Vs);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(Sl) ? t : Ee.findOne(Sl, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(yk) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Fo.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Q.on(document, dk, u_, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !vs(this) && Fo.getOrCreateInstance(this).show();
});
Q.on(window, pk, () => {
  for (const e of Ee.find(Ek))
    Fo.getOrCreateInstance(e);
});
en(Fo);
const wk = "toast", Ak = "bs.toast", As = `.${Ak}`, Sk = `mouseover${As}`, Ck = `mouseout${As}`, Ok = `focusin${As}`, Tk = `focusout${As}`, Nk = `hide${As}`, Dk = `hidden${As}`, kk = `show${As}`, xk = `shown${As}`, Rk = "fade", Wp = "hide", vi = "show", _i = "showing", Ik = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Pk = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class oi extends vn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Pk;
  }
  static get DefaultType() {
    return Ik;
  }
  static get NAME() {
    return wk;
  }
  // Public
  show() {
    if (Q.trigger(this._element, kk).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Rk);
    const n = () => {
      this._element.classList.remove(_i), Q.trigger(this._element, xk), this._maybeScheduleHide();
    };
    this._element.classList.remove(Wp), ei(this._element), this._element.classList.add(vi, _i), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || Q.trigger(this._element, Nk).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Wp), this._element.classList.remove(_i, vi), Q.trigger(this._element, Dk);
    };
    this._element.classList.add(_i), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(vi), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(vi);
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
    Q.on(this._element, Sk, (t) => this._onInteraction(t, !0)), Q.on(this._element, Ck, (t) => this._onInteraction(t, !1)), Q.on(this._element, Ok, (t) => this._onInteraction(t, !0)), Q.on(this._element, Tk, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = oi.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
La(oi);
en(oi);
var Mk = Object.defineProperty, Vk = (e, t, n) => t in e ? Mk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rn = (e, t, n) => Vk(e, typeof t != "symbol" ? t + "" : t, n);
const Lk = { class: "toast-header" }, Fk = ["textContent"], Bk = ["textContent"], $k = { class: "toast-body" }, jk = ["textContent"], Uk = /* @__PURE__ */ Ce({
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
    const s = e, o = n, { visible: r, animation: i, autohide: a, delay: c } = fn(s), f = $(), u = $();
    mt(r, (x) => {
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
    function m() {
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
    function A() {
      o("show", f.value);
    }
    async function T() {
      o("shown", f.value);
    }
    const N = { show: d, hide: p, dispose: h, isShown: g, getOrCreateInstance: m, getInstance: v };
    return t({ ...N }), Nt(() => {
      u.value.addEventListener("hide.bs.toast", b), u.value.addEventListener("hidden.bs.toast", _), u.value.addEventListener("show.bs.toast", A), u.value.addEventListener("shown.bs.toast", T), f.value = new oi(u.value, {
        animation: i.value,
        autohide: a.value,
        delay: c.value
      }), y();
    }), (x, I) => (S(), D("div", {
      ref_key: "toastRef",
      ref: u,
      class: le(["toast", [x.variant ? `text-bg-${x.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      ke(x.$slots, "header", it(ot({ ...N })), () => [
        l("div", Lk, [
          ke(x.$slots, "title", it(ot({ ...N })), () => [
            l("strong", {
              class: "me-auto",
              textContent: M(x.title)
            }, null, 8, Fk)
          ], !0),
          ke(x.$slots, "subtitle", it(ot({ ...N })), () => [
            l("small", {
              textContent: M(x.subtitle)
            }, null, 8, Bk)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ], !0),
      ke(x.$slots, "body", it(ot({ ...N })), () => [
        l("div", $k, [
          ke(x.$slots, "default", it(ot({ ...N })), () => [
            l("span", {
              textContent: M(x.body)
            }, null, 8, jk)
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
}, d_ = /* @__PURE__ */ Vn(Uk, [["__scopeId", "data-v-c0cdbae8"]]);
function Hk() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Wk = { id: "toast-wrapper" };
let Kp;
const Kk = /* @__PURE__ */ Ce({
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
    Kp = (r, i = "top right") => {
      const a = Hk(), c = { ...n, ...r, id: a };
      let f = s.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), s.value.set(i, f);
    };
    function o(r, i) {
      const a = s.value.get(r);
      a?.delete(i);
    }
    return t({ toast: Kp }), (r, i) => (S(), Ze(zr, { to: "body" }, [
      l("div", Wk, [
        (S(!0), D(we, null, Xe(s.value, ([a, c]) => (S(), D("div", {
          key: a,
          class: le(["toast-group", `${a}`])
        }, [
          (S(!0), D(we, null, Xe(c, (f, u) => (S(), Ze(d_, ys({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (d) => o(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), zk = /* @__PURE__ */ Vn(Kk, [["__scopeId", "data-v-786d1c50"]]), f_ = () => {
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
var Mn = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(Mn || {});
const Bo = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(Mn).includes(n) || n == "" ? "" : `${t}${n}`;
}, qk = { class: "modal-content" }, Yk = { class: "modal-header" }, Xk = ["innerHTML"], Gk = { class: "modal-body" }, Qk = ["innerHTML"], Jk = { class: "modal-footer" }, Zk = ["innerHTML"], ex = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const tx = /* @__PURE__ */ Ce({
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
    size: { default: Mn.STANDARD },
    btnSize: { default: Mn.SMALL },
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
    } = fn(s), u = n, d = j(() => Bo(c.value, "modal-")), p = j(() => Bo(f.value, "btn-")), h = $();
    let g;
    const m = Qn(), v = () => document.querySelectorAll(".modal.show").length, y = () => typeof window < "u" && window._managedModals ? window._managedModals : [], b = 1055, _ = $(b), A = () => {
      const re = v();
      _.value = b + re;
    };
    let T;
    const N = f_();
    function x() {
      return new Promise((re, z) => {
        if (!h.value) return;
        N.removeStickyElements(), A(), h.value.classList.add("managed-modal");
        const de = y(), be = de.length + 1, et = {
          element: h.value,
          priority: be,
          instance: m
        };
        de.push(et), h.value.addEventListener("shown.bs.modal", () => {
          w();
        }, { once: !0 }), g?.show(), T = re, u("onShown", g);
      });
    }
    function I(re = !0) {
      if (!h.value) return;
      const z = y(), de = z.findIndex((be) => be.element === h.value);
      de > -1 && z.splice(de, 1), h.value.addEventListener("hidden.bs.modal", () => {
        h.value && (h.value.style.display = ""), w();
      }, { once: !0 }), g?.hide(), typeof T == "function" && T(re), u("onHidden", g), N.restoreStickyElements();
    }
    function k() {
      g?.toggle();
    }
    const w = () => {
      const re = y();
      if (re.length === 0) return;
      re.sort((de, be) => de.priority - be.priority);
      const z = re[re.length - 1];
      re.forEach((de) => {
        de.element !== z.element ? de.element.style.opacity = "0" : de.element.style.opacity = "1";
      });
    };
    Nt(() => {
      g = new to(h.value, {
        backdrop: o?.value,
        keyboard: r.value,
        focus: i.value
      }), h.value.classList.add("managed-modal"), va(() => {
        s?.visible === !0 ? g?.show() : g?.hide();
      });
    });
    function R(re) {
      o?.value !== "static" && I(!1);
    }
    function C() {
      I(!1);
    }
    function F() {
      I(!1);
    }
    function fe() {
      I(!0);
    }
    t({
      modal: g,
      show: x,
      hide: I,
      toggle: k,
      onHeaderCloseClicked: C,
      onCancelClicked: F,
      onOkCLicked: fe
    });
    const X = { show: x, hide: I, toggle: k, modal: g };
    return (re, z) => (S(), D("div", ys({
      ref_key: "modalElement",
      ref: h,
      class: "modal fade",
      tabindex: "-1"
    }, { ...re.$attrs }, {
      onClick: Tm(R, ["self"]),
      style: { zIndex: _.value }
    }), [
      l("div", {
        class: le(["modal-dialog", d.value])
      }, [
        l("div", qk, [
          ke(re.$slots, "header", it(ot({ ...X })), () => [
            l("div", Yk, [
              ke(re.$slots, "title", it(ot({ ...X })), () => [
                l("h5", {
                  class: "modal-title",
                  innerHTML: re.title
                }, null, 8, Xk)
              ], !0),
              ke(re.$slots, "header-close-button", it(ot({ ...X })), () => [
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: C
                })
              ], !0)
            ])
          ], !0),
          l("div", Gk, [
            ke(re.$slots, "default", it(ot({ ...X })), () => [
              l("span", { innerHTML: re.body }, null, 8, Qk)
            ], !0)
          ]),
          l("div", Jk, [
            ke(re.$slots, "footer", it(ot({ ...X })), () => [
              re.okOnly ? ue("", !0) : (S(), D("button", {
                key: 0,
                type: "button",
                class: le(["btn btn-secondary", p.value]),
                onClick: F
              }, [
                ke(re.$slots, "button-cancel", it(ot({ ...X })), () => [
                  l("span", { innerHTML: re.textCancel }, null, 8, Zk)
                ], !0)
              ], 2)),
              l("button", {
                type: "button",
                class: le(["btn btn-primary", p.value]),
                onClick: fe
              }, [
                ke(re.$slots, "button-ok", it(ot({ ...X })), () => [
                  l("span", { innerHTML: re.textOk }, null, 8, ex)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), p_ = /* @__PURE__ */ Vn(tx, [["__scopeId", "data-v-b8ba4eaa"]]), nx = /* @__PURE__ */ Ce({
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
    return t({ confirm: o, alert: r }), (i, a) => (S(), Ze(zr, { to: "body" }, [
      ce(p_, ys({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), sx = {
  "data-header": "",
  class: "border-bottom"
}, ox = { class: "d-flex gap-2 p-2" }, rx = { class: "p-2" }, ix = {
  "data-footer": "",
  class: "border-top p-2"
}, ax = { class: "buttons" }, lx = /* @__PURE__ */ Ce({
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
    size: { default: Mn.STANDARD },
    btnSize: { default: Mn.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, { backdrop: s, disableOutsideClick: o, modal: r, size: i, btnSize: a } = fn(n), c = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = $(f), d = $(!1), p = $(!1), h = $(!1), g = $(), m = $(!1), v = j(() => Bo(i.value, "modal-")), y = j(() => Bo(a.value, "btn-")), b = j(() => ({
      opening: d.value,
      closing: p.value,
      "no-backdrop": s.value === !1,
      static: m.value
    }));
    let _ = null;
    const A = () => {
      const C = c();
      u.value = f + C;
    }, T = f_(), N = async () => (A(), T.removeStickyElements(), d.value = !0, g.value.addEventListener(
      "animationend",
      () => {
        d.value = !1, h.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? g.value.showModal() : g.value.show(), new Promise((C, F) => {
      _ = C;
    })), x = async (C = !1) => {
      p.value = !0, g.value.addEventListener(
        "animationend",
        () => {
          g.value.close(), p.value = !1, h.value = !1, typeof _ == "function" && _(C), _ = null, T.restoreStickyElements();
        },
        { once: !0 }
      );
    }, I = async () => {
      h.value === !0 ? x() : N();
    }, k = () => {
      m.value = !0, setTimeout(() => {
        m.value = !1;
      }, 200);
    }, w = () => {
      if (s.value === "static" || o.value === !0) {
        k();
        return;
      }
      x(!1);
    };
    if (r.value === !0) {
      let C = function(fe) {
        if (s.value === "static" || o.value === !0) {
          k();
          return;
        }
        fe.target === g.value && x(!1);
      };
      const F = new AbortController();
      Nt(() => {
        document.addEventListener("click", (fe) => {
          C(fe);
        }, { signal: F.signal });
      }), Uo(() => {
        F.abort();
      });
    }
    const R = { show: N, hide: x, toggle: I, dialog: g };
    return t({
      show: N,
      hide: x,
      toggle: I
    }), (C, F) => (S(), D("div", {
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
        class: le(b.value)
      }, [
        l("div", {
          class: le(["content", v.value])
        }, [
          ke(C.$slots, "header", it(ot({ ...R })), () => [
            l("div", sx, [
              l("div", ox, [
                ke(C.$slots, "title", it(ot({ ...R })), () => [
                  H(M(C.title), 1)
                ], !0),
                ke(C.$slots, "header-close-button", {}, () => [
                  l("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: F[0] || (F[0] = (fe) => x(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          l("div", rx, [
            ke(C.$slots, "default", it(ot({ ...R })), () => [
              H(M(C.body), 1)
            ], !0)
          ]),
          ke(C.$slots, "footer", it(ot({ ...R })), () => [
            l("div", ix, [
              l("div", ax, [
                C.okOnly ? ue("", !0) : (S(), D("button", {
                  key: 0,
                  type: "button",
                  class: le(["btn btn-secondary", y.value]),
                  onClick: F[1] || (F[1] = (fe) => x(!1))
                }, [
                  ke(C.$slots, "textCancel", it(ot({ ...R })), () => [
                    H(M(C.textCancel), 1)
                  ], !0)
                ], 2)),
                l("button", {
                  type: "button",
                  class: le(["btn btn-primary", y.value]),
                  onClick: F[2] || (F[2] = (fe) => x(!0))
                }, [
                  ke(C.$slots, "textOk", it(ot({ ...R })), () => [
                    H(M(C.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), h_ = /* @__PURE__ */ Vn(lx, [["__scopeId", "data-v-0990c791"]]), cx = /* @__PURE__ */ Ce({
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
    return t({ confirm: o, alert: r }), (i, a) => (S(), Ze(zr, { to: "body" }, [
      ce(h_, ys({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), ux = { "data-first": "" }, dx = ["disabled", "innerHTML"], fx = { "data-prev": "" }, px = ["disabled", "innerHTML"], hx = { key: 0 }, mx = ["innerHTML"], gx = ["onClick"], vx = { "data-next": "" }, _x = ["disabled", "innerHTML"], yx = { "data-last": "" }, bx = ["disabled", "innerHTML"], Ex = /* @__PURE__ */ Ce({
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
    size: { default: Mn.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function n(_, A = 0) {
      return [...Array(_).keys()].map((T) => T + A);
    }
    const s = t, o = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: a } = fn(o), c = Math.floor(i.value / 2), f = j(() => {
      let _ = i.value, A = r.value <= c ? 1 : r.value - c;
      return r.value >= p.value - c && (A = p.value - _ + 1), A < 1 && (A = 1), p.value < _ && (_ = p.value), n(_, A);
    }), u = j(() => r.value <= 1), d = j(() => r.value >= p.value), p = j(() => {
      const { perPage: _, totalItems: A } = o;
      return Math.ceil(A / _);
    });
    va(() => {
      p.value > 0 && r.value > p.value && s("update:modelValue", p.value);
    });
    function h(_) {
      const A = i.value - 1;
      return !(a.value === !0 || _ === 0 && r.value - c - 1 <= 0 || _ === A && r.value + c >= p.value || _ > 0 && _ < A);
    }
    function g(_) {
      _ < 1 && (_ = 1), _ > p.value && (_ = p.value), s("update:modelValue", _);
    }
    function m() {
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
    return (_, A) => (S(), D("ul", {
      class: le(["pagination", _.size])
    }, [
      l("li", ux, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: _.firstText,
          onClick: m
        }, null, 8, dx)
      ]),
      l("li", fx, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: _.prevText,
          onClick: y
        }, null, 8, px)
      ]),
      (S(!0), D(we, null, Xe(f.value, (T, N) => (S(), D(we, null, [
        h(N) ? (S(), D("li", hx, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: _.ellipsisText
          }, null, 8, mx)
        ])) : (S(), D("li", {
          key: 1,
          "data-prev": "",
          class: le({ active: _.modelValue === T })
        }, [
          l("button", {
            class: "",
            onClick: (x) => g(T)
          }, M(T), 9, gx)
        ], 2))
      ], 64))), 256)),
      l("li", vx, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: _.nextText,
          onClick: b
        }, null, 8, _x)
      ]),
      l("li", yx, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: _.lastText,
          onClick: v
        }, null, 8, bx)
      ])
    ], 2));
  }
}), wx = /* @__PURE__ */ Vn(Ex, [["__scopeId", "data-v-2bfd7085"]]), Ax = { class: "d-inline" }, Sx = { class: "fw-bold" }, Cx = /* @__PURE__ */ Ce({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = fn(n), r = j({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => {
      const c = Je("b-dropdown-item"), f = Je("b-dropdown");
      return S(), Ze(f, ys({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: pe(() => [
          l("div", Ax, [
            ke(i.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = l("span", null, "Per page: ", -1)),
              l("span", Sx, M(r.value), 1)
            ])
          ])
        ]),
        default: pe(() => [
          (S(!0), D(we, null, Xe(U(o), (u, d) => (S(), Ze(c, {
            key: u,
            onClick: (p) => r.value = u,
            active: u === i.modelValue
          }, {
            default: pe(() => [
              H(M(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), Ox = ["value"], Tx = /* @__PURE__ */ Ce({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = fn(n), r = j({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => nt((S(), D("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (c) => r.value = c)
    }, [
      (S(!0), D(we, null, Xe(U(o), (c, f) => (S(), D("option", {
        key: c,
        value: c
      }, M(c), 9, Ox))), 128))
    ], 512)), [
      [ds, r.value]
    ]);
  }
});
var xs = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(xs || {});
class Nx {
  constructor(t, n = "ASC", s) {
    rn(this, "key"), rn(this, "direction"), rn(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = s;
  }
}
const zp = (e, t) => {
  const n = (a, c) => {
    let f = typeof a, u = typeof c;
    return f == "number" && f == u;
  }, s = (a, c) => a - c, o = (a, c) => (a = a ?? "", c = c ?? "", a.localeCompare(c)), r = (a, c) => n(a, c) ? s : o, i = [...t];
  return i.sort((a, c) => {
    let f = 0;
    for (let u of e) {
      let { key: d, direction: p, sortFn: h } = u, g = p === "ASC" ? 1 : -1, m = a[d], v = c[d];
      if (h = typeof h == "function" ? h : r(m, v), f = h(m, v, a, c, t, u, g) * g, f !== 0) return f;
    }
    return f;
  }), i;
}, Dx = ["onClick"], kx = { class: "th-wrapper" }, xx = {
  key: 0,
  "data-sort-indicator": ""
}, Rx = { class: "sort-index" }, Ix = { class: "sort-direction" }, Px = ["onMouseover"], Mx = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Vx = ["colspan"], Lx = ["innerHTML"];
class Cl {
  constructor(t = "", n = "", s = !1, o) {
    rn(this, "key"), rn(this, "label"), rn(this, "sortable"), rn(this, "sortFn"), this.key = t, this.label = n, this.sortable = s, this.sortFn = o;
  }
}
const Fx = /* @__PURE__ */ Ce({
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
      let v = [];
      for (const y of m)
        v = v.concat(Object.keys(y));
      return v = v.filter((y, b) => v.indexOf(y) == b), v;
    }, s = t, o = e, r = $([]), { fields: i, items: a } = fn(o), c = j(() => {
      if (o.externalSort || r.value.length == 0) return o.items;
      const m = [...o.items];
      return zp(r.value, m);
    }), f = j(() => {
      let m = i.value, v = [];
      return m.length === 0 && (m = n([...a.value])), m.reduce((y, b, _) => {
        if (typeof b == "string")
          y.push(new Cl(b, b));
        else if (b instanceof Cl)
          y.push(b);
        else if (typeof b == "object") {
          const { key: A, label: T, sortable: N, sortFn: x } = b;
          y.push(new Cl(A, T, N, x));
        }
        return y;
      }, v);
    });
    function u(m) {
      const v = r.value.findIndex((y) => y.key === m.key);
      return v < 0 ? "" : v + 1;
    }
    function d(m) {
      const v = r.value.findIndex((b) => b.key === m.key);
      if (v < 0) return "fas fa-sort";
      const y = r.value[v];
      return y.direction === xs.ASC ? "fas fa-sort-up" : y.direction === xs.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(m) {
      const { key: v } = m, y = r.value.findIndex((b) => b.key === v);
      if (y < 0) {
        const b = new Nx(v, xs.ASC, m.sortFn);
        r.value.push(b);
      } else {
        const b = r.value[y], _ = b.direction;
        _ === xs.ASC ? b.direction = xs.DESC : _ === xs.DESC && r.value.splice(y, 1);
      }
      s("sort", r.value, zp);
    }
    function h(m, v, y, b) {
      s("onMouseOverCell", m, v, y, b);
    }
    let g = $(null);
    return Nt(() => {
      g.value = Qn();
    }), (m, v) => (S(), D("table", ys({ ...m.$attrs }, {
      class: { striped: m.striped, hover: m.hover }
    }), [
      l("thead", null, [
        (S(!0), D(we, null, Xe(f.value, (y) => (S(), D("th", {
          key: `thead-${y.key}`,
          class: le({ sortable: y.sortable }),
          onClick: (b) => y.sortable && p(y)
        }, [
          l("span", kx, [
            ke(m.$slots, `head(${y.key})`, {
              field: y,
              data: U(g),
              value: y.label
            }, () => [
              H(M(y.label), 1)
            ], !0),
            y.sortable ? (S(), D("span", xx, [
              l("span", Rx, M(u(y)), 1),
              l("span", Ix, [
                l("i", {
                  class: le(d(y))
                }, null, 2)
              ])
            ])) : ue("", !0)
          ])
        ], 10, Dx))), 128))
      ]),
      l("tbody", null, [
        (S(!0), D(we, null, Xe(c.value, (y, b) => (S(), D(we, {
          key: `trow-${y?.id ?? b}`
        }, [
          ke(m.$slots, "row", {
            item: y,
            index: b,
            colspan: f.value.length
          }, void 0, !0),
          l("tr", null, [
            (S(!0), D(we, null, Xe(f.value, (_) => (S(), D("td", {
              key: `tcell-${_.key + (y?.id ?? b)}`,
              class: le({ [`tcell-${_?.key}`]: !0 }),
              onMouseover: (A) => h(A, y, b, _)
            }, [
              ke(m.$slots, `cell(${_?.key})`, {
                data: U(g),
                item: y,
                field: _,
                value: y[_?.key]
              }, () => [
                H(M(y[_?.key]), 1)
              ], !0)
            ], 42, Px))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        ke(m.$slots, "footer", { data: U(g) }, void 0, !0)
      ]),
      m.showEmpty && c.value.length === 0 ? (S(), D("tr", Mx, [
        l("td", {
          colspan: f.value.length
        }, [
          ke(m.$slots, "empty", {
            items: c.value,
            data: U(g),
            fields: f.value
          }, () => [
            l("span", { innerHTML: m.emptyText }, null, 8, Lx)
          ], !0)
        ], 8, Vx)
      ])) : ue("", !0)
    ], 16));
  }
}), Bx = /* @__PURE__ */ Vn(Fx, [["__scopeId", "data-v-b1e9b5de"]]);
var m_ = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(m_ || {});
const $x = { class: "d-inline-block position-relative" }, jx = ["disabled"], qp = "data-prevent-close", Ux = /* @__PURE__ */ Ce({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: m_.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: Mn.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const s = $(), o = e, r = $(), i = $(!1), a = $(o.variant), c = $(o.centered), f = $(o.dropup), u = $(o.dropend), d = $(o.dropstart), p = $(o.menuEnd), h = n, g = j(() => {
      const I = [];
      return a != null && a.value && I.push(`btn-${a.value}`), o.size && I.push(`btn-${o.size}`), I;
    }), m = j(() => {
      const I = [];
      return c != null && c.value && I.push("dropdown-center"), f != null && f.value && I.push("dropup"), d != null && d.value && I.push("dropstart"), !(d != null && d.value) && u != null && u.value && I.push("dropend"), I.length === 0 && I.push("dropdown"), I.unshift("btn-group"), I;
    }), v = j(() => {
      const I = [];
      return i.value && I.push("show"), p.value && I.push("dropdown-menu-end"), I;
    }), y = () => {
      if (!i.value) return;
      const I = r.value.getBoundingClientRect(), k = s.value.getBoundingClientRect(), w = window.innerHeight - I.bottom, R = I.top, C = window.innerWidth - I.right, F = I.left;
      f.value = w < k.height && R >= k.height, p.value = C < k.width && F >= k.width;
    };
    async function b() {
      i.value = !0, await qs(), y();
    }
    function _() {
      i.value = !1;
    }
    function A(I) {
      i.value ? _() : b();
    }
    function T(I) {
      const { target: k } = I;
      k?.closest(`[${qp}],[${qp}=true]`) || _();
    }
    function N() {
      i.value && _();
    }
    mt(i, (I, k) => {
      typeof k > "u" || I !== k && (h("toggle", { show: I }), I === !0 ? h("open", { show: I }) : h("close", { show: I }));
    }, { immediate: !0 });
    const x = {
      show: i,
      disabled: o.disabled,
      buttonClasses: g,
      onButtonClicked: A,
      onMenuClicked: T,
      onClickOutside: N,
      open: b,
      close: _
    };
    return t({
      ...x
    }), (I, k) => {
      const w = rb("click-outside");
      return S(), D("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: le([m.value, "dropdown-wrapper"])
      }, [
        nt((S(), D("div", $x, [
          ke(I.$slots, "header", it(ot({ ...x })), () => [
            l("button", {
              class: le(["btn dropdown-toggle", g.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: A,
              disabled: I.disabled
            }, [
              ke(I.$slots, "button", it(ot({ ...x })), () => [
                H(M(I.text), 1)
              ], !0)
            ], 10, jx)
          ], !0),
          l("ul", {
            ref_key: "dropDownMenuRef",
            ref: s,
            class: le(["dropdown-menu", v.value]),
            onClick: T
          }, [
            ke(I.$slots, "default", it(ot({ ...x })), void 0, !0)
          ], 2)
        ])), [
          [w, N]
        ])
      ], 2);
    };
  }
}), Hx = /* @__PURE__ */ Vn(Ux, [["__scopeId", "data-v-4910c394"]]), Wx = ["data-prevent-close"], Kx = /* @__PURE__ */ Ce({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = fn(t);
    return (s, o) => (S(), D("li", {
      "data-prevent-close": U(n) ? "" : null
    }, [
      l("span", {
        class: le(["dropdown-item", { active: s.active }]),
        role: "button",
        tabindex: "0"
      }, [
        ke(s.$slots, "default")
      ], 2)
    ], 8, Wx));
  }
}), zx = {}, qx = { "data-prevent-close": "" }, Yx = { class: "dropdown-header" };
function Xx(e, t) {
  return S(), D("li", qx, [
    l("h6", Yx, [
      ke(e.$slots, "default")
    ])
  ]);
}
const Gx = /* @__PURE__ */ Vn(zx, [["render", Xx]]), Qx = {};
function Jx(e, t) {
  return S(), D("li", null, t[0] || (t[0] = [
    l("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Zx = /* @__PURE__ */ Vn(Qx, [["render", Jx]]), eR = {
  mounted(e, t, n, s) {
    new so(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, tR = (e, t) => {
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
}, nR = {
  mounted(e, t, n, s) {
    const o = t.value;
    tR(e, o);
  }
};
class Ec {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
rn(Ec, "list", /* @__PURE__ */ new Set());
const sR = { class: "drawer-content" }, oR = { class: "drawer-header" }, rR = ["innerHTML"], iR = { class: "drawer-body" }, aR = ["innerHTML"], lR = { class: "drawer-footer" }, cR = ["innerHTML"], uR = ["innerHTML"], dR = /* @__PURE__ */ Ce({
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
    size: { default: Mn.STANDARD },
    btnSize: { default: Mn.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: s,
      keyboard: o,
      focus: r,
      size: i,
      btnSize: a
    } = fn(n), c = j(() => Bo(i.value, "drawer-")), f = j(() => Bo(a.value, "btn-")), u = $(), d = $(!1), p = Qn();
    let h;
    async function g() {
      return d.value === !0 ? void 0 : new Promise((N, x) => {
        d.value = !0, h = N;
      });
    }
    function m(N = !0) {
      d.value = !1, typeof h == "function" && h(N);
    }
    function v() {
      d.value === !0 ? g() : m(!1);
    }
    function y(N) {
      s?.value !== "static" && m(!1);
    }
    function b() {
      m(!1);
    }
    function _() {
      m(!1);
    }
    function A() {
      m(!0);
    }
    function T() {
      d.value === !0 ? Ec.add(p) : Ec.delete(p);
    }
    return t({
      show: g,
      hide: m,
      toggle: v
    }), (N, x) => (S(), Ze(fE, {
      onBeforeEnter: T,
      onAfterLeave: T
    }, {
      default: pe(() => [
        d.value ? (S(), D("div", ys({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...N.$attrs }, {
          onClick: Tm(y, ["self"])
        }), [
          l("div", {
            class: le(["drawer-dialog", c.value])
          }, [
            l("div", sR, [
              l("div", oR, [
                ke(N.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: N.title
                  }, null, 8, rR)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: b
                })
              ]),
              l("div", iR, [
                ke(N.$slots, "default", {}, () => [
                  l("span", { innerHTML: N.body }, null, 8, aR)
                ], !0)
              ]),
              l("div", lR, [
                ke(N.$slots, "footer", {}, () => [
                  N.okOnly ? ue("", !0) : (S(), D("button", {
                    key: 0,
                    type: "button",
                    class: le(["ms-auto btn btn-secondary", f.value]),
                    onClick: _
                  }, [
                    ke(N.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: N.textCancel }, null, 8, cR)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: le(["btn btn-primary", f.value]),
                    onClick: A
                  }, [
                    ke(N.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: N.textOk }, null, 8, uR)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : ue("", !0)
      ]),
      _: 3
    }));
  }
}), fR = /* @__PURE__ */ Vn(dR, [["__scopeId", "data-v-2e49e8cb"]]), Kt = "b", g_ = "$toaster", v_ = "$modalManager", pR = "$dialogManager";
class __ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = wa(nx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
rn(__, "component");
class y_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = wa(cx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
rn(y_, "component");
class b_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = wa(zk).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
rn(b_, "component");
function hR() {
  return Bt(g_);
}
function mR() {
  return Bt(v_);
}
function gR(e) {
  e.component(`${Kt}-drawer`, fR), e.component(`${Kt}-modal`, p_), e.component(`${Kt}-dialog`, h_), e.component(`${Kt}-pagination`, wx), e.component(`${Kt}-pagination-dropdown`, Cx), e.component(`${Kt}-pagination-select`, Tx), e.component(`${Kt}-dropdown`, Hx), e.component(`${Kt}-dropdown-item`, Kx), e.component(`${Kt}-dropdown-header`, Gx), e.component(`${Kt}-dropdown-divider`, Zx), e.component(`${Kt}-table`, Bx), e.component(`${Kt}-toast`, d_);
}
function vR(e) {
  e.directive("tooltip", eR), e.directive("click-outside", nR);
}
const _R = {
  install(e) {
    gR(e), vR(e);
    const t = b_.getComponent(), n = __.getComponent(), s = y_.getComponent();
    e.provide(g_, t), e.provide(v_, n), e.provide(pR, s);
  }
}, yi = {
  BOTTOM_RIGHT: "bottom right"
}, tn = /* @__PURE__ */ hn("notifications", () => {
  const e = mR(), t = hR();
  return {
    showSuccess: (f, u = "Success") => {
      t.toast({
        title: u,
        body: f,
        variant: "primary",
        delay: 4e3
      }, yi.BOTTOM_RIGHT);
    },
    showError: (f, u = "Error") => {
      t.toast({
        title: u,
        body: f,
        variant: "danger",
        delay: 6e3
      }, yi.BOTTOM_RIGHT);
    },
    showWarning: (f, u = "Warning") => {
      t.toast({
        title: u,
        body: f,
        variant: "warning",
        delay: 5e3
      }, yi.BOTTOM_RIGHT);
    },
    showInfo: (f, u = "Information") => {
      t.toast({
        title: u,
        body: f,
        variant: "info",
        delay: 4e3
      }, yi.BOTTOM_RIGHT);
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
}), Go = /* @__PURE__ */ hn("settings", () => {
  const e = bs(), t = tn(), n = "1", s = fs({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), o = $(null), r = $([]), i = $([]), a = fs({
    fetch: !1,
    save: !1,
    importing: !1
  }), c = async () => {
    try {
      a.fetch = !0;
      const b = Br(), [_] = await Promise.all([
        Fe.getProjectSettings(),
        b.fetchSchemas().catch(() => null)
      ]), T = _.data ?? {};
      Object.assign(s, T), o.value = s.fhir_system, r.value = [...s.selected_mapping_resources], i.value = [...s.selected_custom_mapping_resources];
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
    fetchProjectSettings: c,
    addPredefinedResource: async (b, _) => {
      try {
        const A = Br(), T = A.currentResourceSpec === _ ? A.draft || {} : {}, N = await Fe.createMappingResource({ name: b, resourceSpec: _, type: "predefined", params: T });
        return await c(), t.showSuccess(`${b} added`, "Resource added"), N;
      } catch (A) {
        let T = "Error adding the resource";
        A instanceof kC && (T = A.response?.data?.message ?? T), t.showError(`${b} not added: ${T}`, "Error");
      }
    },
    addCustomResource: async (b, _) => {
      const A = await Fe.createMappingResource({ name: b, resourceSpec: _, type: "custom" });
      return await c(), t.showSuccess(`${b} added`, "Resource added"), A;
    },
    softDeleteResource: async (b) => {
      if (!b.id) return;
      const _ = b.type === "predefined" ? r.value : i.value, A = _.findIndex((N) => N.id === b.id);
      if (A === -1) return;
      const T = { ..._[A] };
      _[A] = { ..._[A], deleted: !0, deletedAt: (/* @__PURE__ */ new Date()).toISOString() };
      try {
        await Fe.softDeleteMappingResource(b.id), t.showWarning(`${b.name} soft-deleted`, "Resource Deleted");
      } catch (N) {
        throw _[A] = T, e.addError(N, "settingsStore.softDeleteResource"), t.showError(`Failed to soft-delete ${b.name}`), N;
      }
    },
    restoreResource: async (b) => {
      if (!b.id) return;
      const _ = b.type === "predefined" ? r.value : i.value, A = _.findIndex((N) => N.id === b.id);
      if (A === -1) return;
      const T = { ..._[A] };
      _[A] = { ..._[A], deleted: !1, deletedAt: null };
      try {
        await Fe.restoreMappingResource(b.id), t.showSuccess(`${b.name} restored`, "Resource Restored");
      } catch (N) {
        throw _[A] = T, e.addError(N, "settingsStore.restoreResource"), t.showError(`Failed to restore ${b.name}`), N;
      }
    },
    deleteResource: async (b) => {
      if (!b.id) return !1;
      const _ = b.type === "predefined" ? r.value : i.value, A = _.findIndex((N) => N.id === b.id);
      if (A === -1) return !1;
      const T = { ..._[A] };
      _.splice(A, 1);
      try {
        return await Fe.deleteMappingResource(b.id), t.showSuccess(`${b.name} removed`, "Resource Deleted"), !0;
      } catch (N) {
        return _.splice(A, 0, T), e.addError(N, "settingsStore.deleteResource"), t.showError(`Failed to delete ${b.name}`), !1;
      }
    },
    updateResource: async (b, _) => {
      if (b)
        try {
          const A = await Fe.updateMappingResource(b, _);
          await c();
          const T = A.data?.resource?.name || "Resource", N = A.data?.sync_results?.instances_updated ?? 0;
          return t.showSuccess(`${T} updated`, `Instances marked pending: ${N}`), A;
        } catch (A) {
          throw e.addError(A, "settingsStore.updateResource"), A;
        }
    },
    updateSelectedFhirSystem: async (b) => {
      await Fe.updateFhirSystem(b), o.value = b, s.fhir_system = b, t.showSuccess(
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
    importResources: async (b, _ = {}) => {
      const A = _.mode ?? "merge";
      if (!b || typeof b != "object") throw new Error("Invalid JSON payload");
      const T = b;
      if (!T.version || T.version !== n) throw new Error("Unsupported or missing version");
      if (!Array.isArray(T.items)) throw new Error("Invalid payload: items must be an array");
      a.importing = !0;
      try {
        const x = (await Fe.importMappingResources({ version: n, mode: A, items: T.items })).data?.summary || { added: 0, updated: 0, skipped: 0, total: 0 };
        return await c(), x;
      } finally {
        a.importing = !1;
      }
    }
  };
}), Pe = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed",
  Outdated: "Outdated",
  Deleted: "Deleted"
}, Zn = /* @__PURE__ */ hn("monitor", () => {
  const e = bs(), t = $(!1), n = $([]), s = $([]), o = $(null), r = $(!1), i = 500, a = $({
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
      const K = await Fe.listMrns(a.value.page, a.value.limit);
      K.data.data && K.data.pagination ? (n.value = K.data.data, a.value.total = K.data.pagination.total, a.value.totalPages = K.data.pagination.total_pages, a.value.hasNext = K.data.pagination.has_next, a.value.hasPrevious = K.data.pagination.has_previous, K.data.project_summary && (o.value = K.data.project_summary)) : n.value = K.data, s.value = [];
    } catch (K) {
      e.addError(K, "monitorStore"), console.error("Failed to load MRNs:", K), n.value = [];
    } finally {
      t.value = !1;
    }
  }, f = (K) => Array.from(new Set(
    (K || "").split(/[\s,]+/).map((oe) => oe.trim()).filter(Boolean)
  )), u = (K) => {
    const oe = (K || "").length ? (K || "").split(/[\s,]+/) : [], he = oe.map((se) => se.trim()), Ae = he.filter((se) => !se).length, xe = f(K), He = xe.length, L = Math.max(0, he.filter(Boolean).length - He), J = xe.slice(0, 10);
    return {
      tokens: oe.length,
      unique: He,
      duplicates: L,
      empties: Ae,
      overLimit: He > i,
      limit: i,
      parsed: xe,
      sample: J
    };
  }, d = async (K) => {
    try {
      r.value = !0;
      const oe = await Fe.addMrns(K);
      return await c(), oe.data;
    } catch (oe) {
      throw e.addError(oe, "monitorStore"), console.error("Failed to add MRNs:", oe), oe;
    } finally {
      r.value = !1;
    }
  }, p = async (K) => {
    const oe = f(K);
    if (oe.length === 0)
      throw new Error("No MRNs provided");
    return await d(oe);
  }, h = async (K) => await d([K]), g = async (K) => {
  }, m = async () => {
    try {
      t.value = !0;
      for (const K of s.value)
        await g(K);
    } catch (K) {
      e.addError(K, "monitorStore"), console.error("Failed to fetch selected MRNs:", K);
    } finally {
      t.value = !1;
    }
  }, v = j(() => n.value.length > 0 && s.value.length === n.value.length), y = j(() => s.value.length > 0 && s.value.length < n.value.length), b = () => {
    v.value ? s.value = [] : s.value = n.value.map((K) => K.id);
  }, _ = (K) => {
    const oe = s.value.indexOf(K);
    oe === -1 ? s.value.push(K) : s.value.splice(oe, 1);
  }, A = (K) => {
    a.value.page = K, c();
  }, T = (K) => {
    a.value.limit = K, a.value.page = 1, c();
  }, N = async (K) => {
    try {
      return (await Fe.getMrnResources(K)).data;
    } catch (oe) {
      return e.addError(oe, "monitorStore"), console.error(`Failed to get resource status for MRN ${K}:`, oe), { mrn: K, resources: [], total_resources: 0 };
    }
  }, x = async () => {
    try {
      const K = await Fe.getProjectSummary();
      return o.value = K.data, K.data;
    } catch (K) {
      return e.addError(K, "monitorStore"), console.error("Failed to get project summary:", K), null;
    }
  }, I = async (K, oe) => {
    try {
      r.value = !0;
      const he = await Fe.triggerFetchMrns(K, oe);
      return await c(), he.data;
    } catch (he) {
      throw e.addError(he, "monitorStore"), console.error("Failed to trigger fetch:", he), he;
    } finally {
      r.value = !1;
    }
  }, k = async (K) => {
    const oe = n.value.filter((he) => s.value.includes(he.id)).map((he) => he.mrn);
    if (oe.length === 0)
      throw new Error("No MRNs selected");
    return await I(oe, K);
  }, w = async () => {
    try {
      r.value = !0;
      const K = await Fe.performFullSync();
      return await c(), await x(), K.data;
    } catch (K) {
      throw e.addError(K, "monitorStore"), console.error("Failed to perform full sync:", K), K;
    } finally {
      r.value = !1;
    }
  }, R = async (K, oe, he) => {
    try {
      const Ae = await Fe.retryFailedResource(K, oe, he);
      return await c(), Ae.data;
    } catch (Ae) {
      throw e.addError(Ae, "monitorStore"), console.error("Failed to retry resource:", Ae), Ae;
    }
  }, C = async (K) => {
    try {
      r.value = !0;
      const oe = await Fe.bulkRetryFailed(K);
      return await c(), oe.data;
    } catch (oe) {
      throw e.addError(oe, "monitorStore"), console.error("Failed to bulk retry failed resources:", oe), oe;
    } finally {
      r.value = !1;
    }
  }, F = (K) => {
    if (K.status_summary)
      return K.status_summary.smart_status_display;
    const oe = K.resources.filter((J) => J.status !== Pe.Deleted), he = oe.length, Ae = oe.filter((J) => J.status === Pe.Completed).length;
    if (he === 0) return "No Resources";
    if (Ae === he) return "Completed";
    const xe = Ae / he * 100;
    if (xe >= 75) return `Mostly Completed (${Math.round(xe)}%)`;
    if (xe >= 25) return `Mixed Progress (${Math.round(xe)}%)`;
    if (xe > 0) return `Starting (${Math.round(xe)}%)`;
    const He = {};
    return oe.forEach((J) => {
      He[J.status] = (He[J.status] || 0) + 1;
    }), Object.keys(He).reduce((J, se) => He[J] > He[se] ? J : se, Pe.Pending);
  }, fe = (K) => {
    if (K.status_summary)
      return K.status_summary.overall_status;
    const oe = K.resources.filter((Ae) => Ae.status !== Pe.Deleted);
    if (oe.length === 0) return Pe.Pending;
    const he = {};
    return oe.forEach((Ae) => {
      he[Ae.status] = (he[Ae.status] || 0) + 1;
    }), Object.keys(he).reduce((Ae, xe) => he[Ae] > he[xe] ? Ae : xe, Pe.Pending);
  }, X = (K) => {
    if (K.status_summary)
      return K.status_summary.archive_button_config;
    const oe = K.resources.filter((xe) => xe.status !== Pe.Deleted), he = oe.filter((xe) => xe.status === Pe.Completed).length, Ae = oe.length;
    return he === 0 ? {
      variant: "secondary",
      disabled: !0,
      tooltip: "No completed resources to archive",
      text: "Archive"
    } : he === Ae ? {
      variant: "success",
      disabled: !1,
      tooltip: `Archive all ${he} completed resources`,
      text: "Archive All"
    } : {
      variant: "outline-success",
      disabled: !1,
      tooltip: `Archive ${he} of ${Ae} completed resources`,
      text: "Archive Available"
    };
  }, re = (K) => K.status_summary ? K.status_summary.has_archivable_resources : K.resources.some((oe) => oe.status === Pe.Completed), z = (K) => {
    if (K.status_summary)
      return K.status_summary.progress_bar_config;
    const oe = K.resources.filter((L) => L.status !== Pe.Deleted), he = oe.length;
    if (he === 0)
      return { segments: [], completion_percentage: 0, total_resources: 0 };
    const Ae = {};
    oe.forEach((L) => {
      Ae[L.status] = (Ae[L.status] || 0) + 1;
    });
    const xe = Object.entries(Ae).map(([L, J]) => ({
      status: L,
      count: J,
      percentage: Math.round(J / he * 100 * 10) / 10,
      color: et(L)
    })), He = Ae[Pe.Completed] || 0;
    return {
      segments: xe,
      completion_percentage: Math.round(He / he * 100 * 10) / 10,
      total_resources: he
    };
  }, de = (K) => {
    if (K.status_summary)
      return K.status_summary.available_resource_types;
    const oe = /* @__PURE__ */ new Set();
    return K.resources.filter((he) => he.status === Pe.Completed).forEach((he) => oe.add(he.name)), Array.from(oe).sort();
  }, be = (K, oe) => {
    if (K.status_summary?.resource_type_statuses[oe])
      return K.status_summary.resource_type_statuses[oe];
    const he = K.resources.filter(
      (L) => L.name === oe && L.status !== Pe.Deleted
    );
    if (he.length === 0) return null;
    const Ae = he.reduce((L, J) => (L[J.status] = (L[J.status] || 0) + 1, L), {}), xe = Ae[Pe.Completed] || 0, He = he.length;
    return {
      total_count: He,
      completed_count: xe,
      failed_count: Ae[Pe.Failed] || 0,
      pending_count: Ae[Pe.Pending] || 0,
      fetching_count: Ae[Pe.Fetching] || 0,
      outdated_count: Ae[Pe.Outdated] || 0,
      has_completed: xe > 0,
      completion_percentage: He > 0 ? xe / He * 100 : 0,
      is_archivable: xe > 0
    };
  }, et = (K) => {
    switch (K) {
      case Pe.Completed:
        return "success";
      case Pe.Failed:
        return "danger";
      case Pe.Fetching:
        return "info";
      case Pe.Pending:
        return "warning";
      case Pe.Outdated:
        return "secondary";
      case Pe.Deleted:
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
    fetchMrn: g,
    fetchSelected: m,
    toggleSelectAll: b,
    toggleSelection: _,
    setPage: A,
    setLimit: T,
    // Enhanced resource management
    getResourceStatus: N,
    getProjectSummary: x,
    triggerFetchMrns: I,
    triggerFetchSelected: k,
    performFullSync: w,
    retryFailedResource: R,
    bulkRetryFailed: C,
    // Enhanced status methods
    getSmartStatusDisplay: F,
    getStatusForStyling: fe,
    getArchiveButtonConfig: X,
    hasArchivableResources: re,
    getProgressBarConfig: z,
    getAvailableResourceTypesForArchive: de,
    getResourceTypeStatus: be,
    getStatusColor: et
  };
}), yR = "data:image/png;base64,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", bR = { class: "d-flex gap-3 align-items-start" }, ER = { class: "feature-icon d-flex align-items-start justify-content-center" }, wR = { class: "d-flex flex-column gap-2 align-items-start" }, AR = { class: "d-flex gap-2" }, SR = { class: "fs-6 fw-bold mb-1" }, CR = { class: "text-muted mb-0" }, OR = /* @__PURE__ */ Ce({
  __name: "FeatureHighlight",
  setup(e) {
    return (t, n) => (S(), D("div", bR, [
      l("div", ER, [
        ke(t.$slots, "icon", {}, void 0, !0)
      ]),
      l("div", wR, [
        l("div", AR, [
          l("span", SR, [
            ke(t.$slots, "title", {}, void 0, !0)
          ])
        ]),
        l("p", CR, [
          ke(t.$slots, "default", {}, void 0, !0)
        ])
      ])
    ]));
  }
}), Ol = /* @__PURE__ */ Zt(OR, [["__scopeId", "data-v-ee9dd710"]]), TR = { class: "card h-100 border-0 shadow-sm bg-light rounded" }, NR = { class: "card-body d-flex align-items-center" }, DR = { class: "step-number me-4" }, kR = { class: "fw-bold" }, xR = { class: "step-content flex-grow-1" }, RR = { class: "mb-1" }, IR = { class: "text-muted mb-2" }, PR = /* @__PURE__ */ Ce({
  __name: "StepCard",
  props: {
    number: {},
    title: {},
    variant: { default: "primary" }
  },
  setup(e) {
    const t = e, n = j(() => `bg-${t.variant}`);
    return (s, o) => (S(), D("div", TR, [
      l("div", NR, [
        l("div", DR, [
          l("div", {
            class: le(["text-white rounded-circle d-flex align-items-center justify-content-center", n.value])
          }, [
            l("span", kR, M(s.number), 1)
          ], 2)
        ]),
        l("div", xR, [
          l("h5", RR, M(s.title), 1),
          l("p", IR, [
            ke(s.$slots, "default", {}, void 0, !0)
          ]),
          l("div", null, [
            ke(s.$slots, "actions", {}, void 0, !0)
          ])
        ])
      ])
    ]));
  }
}), bi = /* @__PURE__ */ Zt(PR, [["__scopeId", "data-v-00ad78d0"]]), MR = { class: "home-page" }, VR = { class: "hero-section text-center mb-5" }, LR = { class: "d-flex flex-column gap-2 align-items-center" }, FR = ["src"], BR = { class: "row g-4 mt-2 text-start" }, $R = { class: "col-md-4" }, jR = { class: "card h-100 border-0 shadow-sm" }, UR = { class: "card-body" }, HR = { class: "col-md-4" }, WR = { class: "card h-100 border-0 shadow-sm" }, KR = { class: "card-body" }, zR = { class: "col-md-4" }, qR = { class: "card h-100 border-0 shadow-sm" }, YR = { class: "card-body" }, XR = { class: "getting-started-section mb-5" }, GR = { class: "row g-4 workflow-steps" }, QR = { class: "col-12 col-lg-6" }, JR = { class: "col-12 col-lg-6" }, ZR = { class: "col-12 col-lg-6" }, e2 = { class: "col-12 col-lg-6" }, t2 = {
  key: 0,
  class: "status-section"
}, n2 = { class: "row g-4 mb-4" }, s2 = { class: "col-md-3 col-sm-6" }, o2 = { class: "stat-card card border-0 bg-primary text-white text-center h-100" }, r2 = { class: "card-body" }, i2 = { class: "mb-1" }, a2 = { class: "col-md-3 col-sm-6" }, l2 = { class: "stat-card card border-0 bg-secondary text-white text-center h-100" }, c2 = { class: "card-body" }, u2 = { class: "mb-1" }, d2 = { class: "col-md-3 col-sm-6" }, f2 = { class: "stat-card card border-0 bg-dark text-white text-center h-100" }, p2 = { class: "card-body" }, h2 = { class: "mb-1" }, m2 = { class: "col-md-3 col-sm-6" }, g2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, v2 = { class: "card-body" }, _2 = { class: "mb-1" }, y2 = { class: "row g-4" }, b2 = { class: "col-md-3 col-sm-6" }, E2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, w2 = { class: "card-body" }, A2 = { class: "mb-1" }, S2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, C2 = { class: "col-md-3 col-sm-6" }, O2 = { class: "stat-card card border-0 bg-danger text-white text-center h-100" }, T2 = { class: "card-body" }, N2 = { class: "mb-1" }, D2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, k2 = { class: "col-md-3 col-sm-6" }, x2 = { class: "stat-card card border-0 bg-info text-white text-center h-100" }, R2 = { class: "card-body" }, I2 = { class: "mb-1" }, P2 = { class: "col-md-3 col-sm-6" }, M2 = { class: "stat-card card border-0 bg-warning text-white text-center h-100" }, V2 = { class: "card-body" }, L2 = { class: "mb-1" }, F2 = {
  key: 0,
  class: "mt-4 text-center"
}, B2 = {
  class: "btn-group gap-2",
  role: "group"
}, $2 = {
  key: 1,
  class: "alert alert-info text-center"
}, j2 = /* @__PURE__ */ Ce({
  __name: "HomePage",
  setup(e) {
    const t = Go(), n = Zn(), {
      selectedFhirSystem: s,
      selectedMappingResources: o,
      selectedCustomMappingResources: r
    } = mn(t);
    Nt(async () => {
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
    }), u = j(() => n.projectSummary?.overall_status_counts?.completed || 0), d = j(() => n.projectSummary?.overall_status_counts?.pending || 0), p = j(() => n.projectSummary?.overall_status_counts?.fetching || 0), h = j(() => n.projectSummary?.overall_status_counts?.failed || 0), g = j(() => n.projectSummary ? Object.values(n.projectSummary.overall_status_counts).reduce((b, _) => b + _, 0) : 0), m = j(() => {
      if (!n.projectSummary) return 0;
      const b = n.projectSummary.overall_status_counts?.deleted || 0;
      return g.value - b;
    }), v = j(() => {
      if (!m.value) return 0;
      const b = h.value;
      return Math.round(b / m.value * 100);
    }), y = j(() => {
      if (!m.value) return 0;
      const b = u.value;
      return Math.round(b / m.value * 100);
    });
    return (b, _) => {
      const A = Je("router-link");
      return S(), D("div", MR, [
        l("div", VR, [
          l("div", LR, [
            l("img", {
              src: U(yR),
              title: "ALL FHIR",
              style: { height: "200px" }
            }, null, 8, FR),
            _[0] || (_[0] = l("p", { class: "text-muted mb-4" }, " With this module, FHIR resources for configured MRNs are retrieved in the background. It connects to your specified EHR systems, fetches the payload, and stores it in its original form. When data is ready, it assembles the requested mix of MRNs and resource types into a ZIP tailored to your needs. ", -1))
          ]),
          _[10] || (_[10] = l("div", { class: "text-center mb-2" }, [
            l("h2", null, "Key Features")
          ], -1)),
          l("div", BR, [
            l("div", $R, [
              l("div", jR, [
                l("div", UR, [
                  ce(Ol, null, {
                    icon: pe(() => _[1] || (_[1] = [
                      l("i", { class: "fas fa-database fa-4x text-success" }, null, -1)
                    ])),
                    title: pe(() => _[2] || (_[2] = [
                      H(" Resources Management ")
                    ])),
                    default: pe(() => [
                      _[3] || (_[3] = H(" Manage patient MRNs and monitor the status of each FHIR resource type as it progresses through pending, fetching, completed, or failed states — all from one place. "))
                    ]),
                    _: 1,
                    __: [3]
                  })
                ])
              ])
            ]),
            l("div", HR, [
              l("div", WR, [
                l("div", KR, [
                  ce(Ol, null, {
                    icon: pe(() => _[4] || (_[4] = [
                      l("i", { class: "fas fa-robot fa-4x text-primary" }, null, -1)
                    ])),
                    title: pe(() => _[5] || (_[5] = [
                      H(" Background Automation ")
                    ])),
                    default: pe(() => [
                      _[6] || (_[6] = H(" Resource collection runs automatically in the background. New and updated data are fetched on a schedule without manual steps, so downloads are ready on demand with minimal waiting. "))
                    ]),
                    _: 1,
                    __: [6]
                  })
                ])
              ])
            ]),
            l("div", zR, [
              l("div", qR, [
                l("div", YR, [
                  ce(Ol, null, {
                    icon: pe(() => _[7] || (_[7] = [
                      l("i", { class: "fas fa-file-archive fa-4x text-info" }, null, -1)
                    ])),
                    title: pe(() => _[8] || (_[8] = [
                      H(" Archive Creation ")
                    ])),
                    default: pe(() => [
                      _[9] || (_[9] = H(" Create archives by selecting any combination of MRNs and resource types. Build exactly the package you need as a ZIP file. "))
                    ]),
                    _: 1,
                    __: [9]
                  })
                ])
              ])
            ])
          ])
        ]),
        l("div", XR, [
          _[19] || (_[19] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Getting Started"),
            l("p", { class: "text-muted" }, "Follow these steps to fetch and package FHIR resources")
          ], -1)),
          l("div", GR, [
            l("div", QR, [
              ce(bi, {
                number: 1,
                title: "Configure Your Setup",
                variant: "primary"
              }, {
                actions: pe(() => [
                  ce(A, {
                    to: "/setup",
                    class: "btn btn-primary btn-sm"
                  }, {
                    default: pe(() => _[11] || (_[11] = [
                      l("i", { class: "fas fa-cogs me-1" }, null, -1),
                      H(" Go to Setup ")
                    ])),
                    _: 1,
                    __: [11]
                  })
                ]),
                default: pe(() => [
                  _[12] || (_[12] = H(" Select FHIR system and resource types to fetch "))
                ]),
                _: 1,
                __: [12]
              })
            ]),
            l("div", JR, [
              ce(bi, {
                number: 2,
                title: "Add Patient MRNs",
                variant: "success"
              }, {
                actions: pe(() => [
                  ce(A, {
                    to: "/resources",
                    class: "btn btn-success btn-sm"
                  }, {
                    default: pe(() => _[13] || (_[13] = [
                      l("i", { class: "fas fa-database me-1" }, null, -1),
                      H(" Manage MRNs ")
                    ])),
                    _: 1,
                    __: [13]
                  })
                ]),
                default: pe(() => [
                  _[14] || (_[14] = H(" Add patient identifiers to fetch FHIR resources "))
                ]),
                _: 1,
                __: [14]
              })
            ]),
            l("div", ZR, [
              ce(bi, {
                number: 3,
                title: "Background Fetching",
                variant: "info"
              }, {
                actions: pe(() => [
                  ce(A, {
                    to: "/tasks",
                    class: "btn btn-info btn-sm"
                  }, {
                    default: pe(() => _[15] || (_[15] = [
                      l("i", { class: "fas fa-tasks me-1" }, null, -1),
                      H(" View Progress ")
                    ])),
                    _: 1,
                    __: [15]
                  })
                ]),
                default: pe(() => [
                  _[16] || (_[16] = H(" Fetching runs automatically in the background. Monitor progress and, if needed, queue manual retries — no manual steps required for routine updates. "))
                ]),
                _: 1,
                __: [16]
              })
            ]),
            l("div", e2, [
              ce(bi, {
                number: 4,
                title: "Generate ZIP Archive",
                variant: "warning"
              }, {
                actions: pe(() => [
                  ce(A, {
                    to: "/resources",
                    class: "btn btn-warning btn-sm"
                  }, {
                    default: pe(() => _[17] || (_[17] = [
                      l("i", { class: "fas fa-download me-1" }, null, -1),
                      H(" Create ZIP ")
                    ])),
                    _: 1,
                    __: [17]
                  })
                ]),
                default: pe(() => [
                  _[18] || (_[18] = H(" Once resources are completed, generate a tailored ZIP file with exactly the MRNs and resource types you want. "))
                ]),
                _: 1,
                __: [18]
              })
            ])
          ])
        ]),
        a.value ? (S(), D("div", t2, [
          _[40] || (_[40] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Project Status"),
            l("p", { class: "text-muted" }, "Current overview of your project")
          ], -1)),
          l("div", n2, [
            l("div", s2, [
              l("div", o2, [
                l("div", r2, [
                  _[20] || (_[20] = l("i", { class: "fas fa-user-injured fa-2x mb-2" }, null, -1)),
                  l("h3", i2, M(c.value), 1),
                  _[21] || (_[21] = l("p", { class: "mb-0 small" }, "Total MRNs", -1))
                ])
              ])
            ]),
            l("div", a2, [
              l("div", l2, [
                l("div", c2, [
                  _[22] || (_[22] = l("i", { class: "fas fa-database fa-2x mb-2" }, null, -1)),
                  l("h3", u2, M(g.value), 1),
                  _[23] || (_[23] = l("p", { class: "mb-0 small" }, "Total Resources", -1)),
                  _[24] || (_[24] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "includes deleted", -1))
                ])
              ])
            ]),
            l("div", d2, [
              l("div", f2, [
                l("div", p2, [
                  _[25] || (_[25] = l("i", { class: "fas fa-play-circle fa-2x mb-2" }, null, -1)),
                  l("h3", h2, M(m.value), 1),
                  _[26] || (_[26] = l("p", { class: "mb-0 small" }, "Active Resources", -1)),
                  _[27] || (_[27] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "excludes deleted", -1))
                ])
              ])
            ]),
            l("div", m2, [
              l("div", g2, [
                l("div", v2, [
                  _[28] || (_[28] = l("i", { class: "fas fa-file-medical fa-2x mb-2" }, null, -1)),
                  l("h3", _2, M(f.value), 1),
                  _[29] || (_[29] = l("p", { class: "mb-0 small" }, "Resource Types", -1))
                ])
              ])
            ])
          ]),
          l("div", y2, [
            l("div", b2, [
              l("div", E2, [
                l("div", w2, [
                  _[30] || (_[30] = l("i", { class: "fas fa-check-circle fa-2x mb-2" }, null, -1)),
                  l("h3", A2, M(u.value), 1),
                  _[31] || (_[31] = l("p", { class: "mb-0 small" }, "Completed", -1)),
                  y.value > 0 ? (S(), D("p", S2, M(y.value) + "% complete", 1)) : ue("", !0)
                ])
              ])
            ]),
            l("div", C2, [
              l("div", O2, [
                l("div", T2, [
                  _[32] || (_[32] = l("i", { class: "fas fa-exclamation-circle fa-2x mb-2" }, null, -1)),
                  l("h3", N2, M(h.value), 1),
                  _[33] || (_[33] = l("p", { class: "mb-0 small" }, "Failed", -1)),
                  v.value > 0 ? (S(), D("p", D2, M(v.value) + "% error rate", 1)) : ue("", !0)
                ])
              ])
            ]),
            l("div", k2, [
              l("div", x2, [
                l("div", R2, [
                  _[34] || (_[34] = l("i", { class: "fas fa-sync fa-2x mb-2" }, null, -1)),
                  l("h3", I2, M(p.value), 1),
                  _[35] || (_[35] = l("p", { class: "mb-0 small" }, "Fetching", -1))
                ])
              ])
            ]),
            l("div", P2, [
              l("div", M2, [
                l("div", V2, [
                  _[36] || (_[36] = l("i", { class: "fas fa-clock fa-2x mb-2" }, null, -1)),
                  l("h3", L2, M(d.value), 1),
                  _[37] || (_[37] = l("p", { class: "mb-0 small" }, "Pending", -1))
                ])
              ])
            ])
          ]),
          i.value ? (S(), D("div", F2, [
            l("div", B2, [
              ce(A, {
                to: "/resources",
                class: "btn btn-primary"
              }, {
                default: pe(() => _[38] || (_[38] = [
                  l("i", { class: "fas fa-database me-1" }, null, -1),
                  H(" Manage Resources ")
                ])),
                _: 1,
                __: [38]
              }),
              ce(A, {
                to: "/tasks",
                class: "btn btn-outline-secondary"
              }, {
                default: pe(() => _[39] || (_[39] = [
                  l("i", { class: "fas fa-tasks me-1" }, null, -1),
                  H(" View Tasks ")
                ])),
                _: 1,
                __: [39]
              })
            ])
          ])) : ue("", !0)
        ])) : (S(), D("div", $2, [
          _[42] || (_[42] = l("i", { class: "fas fa-info-circle fa-2x mb-3" }, null, -1)),
          _[43] || (_[43] = l("h4", null, "Get Started", -1)),
          _[44] || (_[44] = l("p", { class: "mb-3" }, "Configure your FHIR system and resource types to begin fetching data.", -1)),
          ce(A, {
            to: "/setup",
            class: "btn btn-primary"
          }, {
            default: pe(() => _[41] || (_[41] = [
              l("i", { class: "fas fa-cogs me-1" }, null, -1),
              H(" Configure Now ")
            ])),
            _: 1,
            __: [41]
          })
        ]))
      ]);
    };
  }
}), U2 = /* @__PURE__ */ Zt(j2, [["__scopeId", "data-v-cfdeccfe"]]), H2 = ["value"], W2 = ["value"], K2 = /* @__PURE__ */ Ce({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = Go(), n = tn(), { settings: s, selectedFhirSystem: o } = mn(t), r = async (i) => {
      const a = i.target, c = a.value, f = c === "" || c === "__disabled__" ? null : parseInt(c), u = s.value.fhir_system;
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
    return (i, a) => (S(), D("div", null, [
      a[2] || (a[2] = l("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      l("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: U(o) === null ? "__disabled__" : String(U(o)),
        onChange: r
      }, [
        a[0] || (a[0] = l("option", {
          value: "",
          disabled: ""
        }, "Select a FHIR System", -1)),
        a[1] || (a[1] = l("option", { value: "__disabled__" }, "Disabled", -1)),
        (S(!0), D(we, null, Xe(U(s).fhir_systems, (c) => (S(), D("option", {
          key: c.ehr_id,
          value: c.ehr_id
        }, M(c.ehr_name), 9, W2))), 128))
      ], 40, H2)
    ]));
  }
}), z2 = { class: "mb-3" }, q2 = { class: "form-check" }, Y2 = { class: "form-check" }, X2 = { class: "d-flex gap-2 justify-content-end" }, G2 = ["onClick"], Q2 = ["onClick"], J2 = /* @__PURE__ */ Ce({
  __name: "ImportResourcesModal",
  setup(e, { expose: t }) {
    const n = $(null), s = $("merge"), o = async () => (s.value = "merge", await n.value?.show() ? s.value : null), r = (i) => {
      i(!0);
    };
    return t({ show: o }), (i, a) => {
      const c = Je("b-modal");
      return S(), Ze(c, {
        ref_key: "importModal",
        ref: n
      }, {
        title: pe(() => a[2] || (a[2] = [
          H("Import Resources")
        ])),
        footer: pe(({ hide: f }) => [
          l("div", X2, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (u) => f(!1)
            }, a[5] || (a[5] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, G2),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (u) => r(f)
            }, a[6] || (a[6] = [
              l("i", { class: "fas fa-file-import fa-fw me-1" }, null, -1),
              H("Continue ")
            ]), 8, Q2)
          ])
        ]),
        default: pe(() => [
          l("div", z2, [
            l("div", q2, [
              nt(l("input", {
                class: "form-check-input",
                type: "radio",
                name: "import-mode",
                id: "mode-merge",
                value: "merge",
                "onUpdate:modelValue": a[0] || (a[0] = (f) => s.value = f)
              }, null, 512), [
                [Oo, s.value]
              ]),
              a[3] || (a[3] = l("label", {
                class: "form-check-label",
                for: "mode-merge"
              }, [
                l("strong", null, "Merge"),
                l("div", { class: "small text-muted" }, "Adds new resources and updates names when resourceSpec matches. Keeps existing items.")
              ], -1))
            ]),
            l("div", Y2, [
              nt(l("input", {
                class: "form-check-input",
                type: "radio",
                name: "import-mode",
                id: "mode-replace",
                value: "replace",
                "onUpdate:modelValue": a[1] || (a[1] = (f) => s.value = f)
              }, null, 512), [
                [Oo, s.value]
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
}), Lt = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), Z2 = {
  key: 0,
  class: "mt-3 border-top pt-3"
}, eI = { class: "d-flex flex-column gap-2" }, tI = { class: "form-label mb-1" }, nI = {
  key: 0,
  class: "text-danger"
}, sI = ["placeholder", "value", "onInput"], oI = ["placeholder", "value", "onInput"], rI = ["value", "onChange"], iI = ["value", "onInput"], aI = ["value", "onChange"], lI = ["value"], cI = {
  key: 5,
  class: "form-text text-muted"
}, uI = {
  key: 6,
  class: "text-danger small"
}, dI = /* @__PURE__ */ Ce({
  __name: "EndpointParamsForm",
  props: {
    resourceSpec: {}
  },
  setup(e) {
    const t = Br(), { draft: n } = mn(t), s = e, o = j(() => t.getSchema(s.resourceSpec)), r = j(() => ({}));
    function i(a, c) {
      t.updateDraftField(a, c);
    }
    return (a, c) => o.value.length ? (S(), D("div", Z2, [
      c[2] || (c[2] = l("div", { class: "mb-2 text-muted small" }, "Endpoint Parameters", -1)),
      l("div", eI, [
        (S(!0), D(we, null, Xe(o.value, (f) => (S(), D("div", {
          key: f.key
        }, [
          l("label", tI, [
            H(M(f.label), 1),
            f.required ? (S(), D("span", nI, " *")) : ue("", !0)
          ]),
          f.type === "string" ? (S(), D("input", {
            key: 0,
            class: "form-control form-control-sm",
            type: "text",
            placeholder: f.description || "",
            value: U(n)[f.key] ?? "",
            onInput: (u) => i(f.key, u.target.value)
          }, null, 40, sI)) : f.type === "number" ? (S(), D("input", {
            key: 1,
            class: "form-control form-control-sm",
            type: "number",
            placeholder: f.description || "",
            value: U(n)[f.key] ?? "",
            onInput: (u) => i(f.key, u.target.valueAsNumber)
          }, null, 40, oI)) : f.type === "boolean" ? (S(), D("select", {
            key: 2,
            class: "form-select form-select-sm",
            value: String(U(n)[f.key] ?? ""),
            onChange: (u) => i(f.key, u.target.value === "true")
          }, c[0] || (c[0] = [
            l("option", { value: "" }, "--", -1),
            l("option", { value: "true" }, "True", -1),
            l("option", { value: "false" }, "False", -1)
          ]), 40, rI)) : f.type === "date" ? (S(), D("input", {
            key: 3,
            class: "form-control form-control-sm",
            type: "date",
            value: U(n)[f.key] ?? "",
            onInput: (u) => i(f.key, u.target.value)
          }, null, 40, iI)) : f.type === "enum" ? (S(), D("select", {
            key: 4,
            class: "form-select form-select-sm",
            value: U(n)[f.key] ?? "",
            onChange: (u) => i(f.key, u.target.value)
          }, [
            c[1] || (c[1] = l("option", { value: "" }, "-- Select --", -1)),
            (S(!0), D(we, null, Xe(f.enumOptions || [], (u) => (S(), D("option", {
              key: String(u.value),
              value: String(u.value)
            }, M(u.label), 9, lI))), 128))
          ], 40, aI)) : ue("", !0),
          f.server_resolved ? (S(), D("div", cI, "Resolved server-side (e.g., to FHIR ResearchStudy ID)")) : ue("", !0),
          r.value[f.key] ? (S(), D("div", uI, M(r.value[f.key]), 1)) : ue("", !0)
        ]))), 128))
      ])
    ])) : ue("", !0);
  }
}), fI = { class: "mb-3" }, pI = ["value"], hI = ["disabled"], mI = ["value"], gI = ["value"], vI = ["disabled"], _I = /* @__PURE__ */ Ce({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Go(), { settings: n } = mn(t), s = j(() => n.value.mapping_resources), o = $b(e, "modelValue"), r = Br();
    return mt(() => o.value.resourceType, (i) => {
      i === Lt.PREDEFINED && (r.loaded || r.fetchSchemas());
    }), mt(() => o.value.predefinedResource, (i) => {
      o.value.resourceType === Lt.PREDEFINED && i && r.prepareDraftFor(i, o.value.params || {});
    }), (i, a) => (S(), D("div", null, [
      l("form", null, [
        l("div", fI, [
          a[5] || (a[5] = l("label", {
            class: "form-label",
            for: "display-name"
          }, "Display Name", -1)),
          nt(l("input", {
            "onUpdate:modelValue": a[0] || (a[0] = (c) => o.value.displayName = c),
            class: "form-control form-control-sm",
            type: "text",
            id: "display-name",
            placeholder: "E.g., Vital Signs, Social History, etc.",
            required: ""
          }, null, 512), [
            [Co, o.value.displayName]
          ])
        ]),
        l("div", null, [
          nt(l("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: U(Lt).PREDEFINED,
            "onUpdate:modelValue": a[1] || (a[1] = (c) => o.value.resourceType = c)
          }, null, 8, pI), [
            [Oo, o.value.resourceType]
          ]),
          a[7] || (a[7] = l("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          nt(l("select", {
            "onUpdate:modelValue": a[2] || (a[2] = (c) => o.value.predefinedResource = c),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: o.value.resourceType !== U(Lt).PREDEFINED
          }, [
            a[6] || (a[6] = l("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (S(!0), D(we, null, Xe(s.value, (c) => (S(), D("option", {
              key: c.resourceSpec,
              value: c.resourceSpec
            }, M(c.name), 9, mI))), 128))
          ], 8, hI), [
            [ds, o.value.predefinedResource]
          ]),
          o.value.resourceType === U(Lt).PREDEFINED && o.value.predefinedResource ? (S(), Ze(dI, {
            key: 0,
            resourceSpec: o.value.predefinedResource
          }, null, 8, ["resourceSpec"])) : ue("", !0)
        ]),
        a[9] || (a[9] = l("div", { class: "d-flex justify-start-center my-2" }, [
          l("span", null, "—OR—")
        ], -1)),
        l("div", null, [
          nt(l("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-custom",
            value: U(Lt).CUSTOM,
            "onUpdate:modelValue": a[3] || (a[3] = (c) => o.value.resourceType = c)
          }, null, 8, gI), [
            [Oo, o.value.resourceType]
          ]),
          a[8] || (a[8] = l("label", {
            class: "form-label ms-2",
            for: "resource-type-custom"
          }, "Custom Resource", -1)),
          nt(l("input", {
            "onUpdate:modelValue": a[4] || (a[4] = (c) => o.value.customResourceSpec = c),
            class: "form-control form-control-sm",
            type: "text",
            id: "custom-resource",
            disabled: o.value.resourceType !== U(Lt).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, vI), [
            [Co, o.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
}), yI = { class: "d-flex gap-2 justify-content-end" }, bI = ["onClick"], EI = ["onClick", "disabled"], E_ = /* @__PURE__ */ Ce({
  __name: "ResourceFormModal",
  setup(e, { expose: t }) {
    const n = $(null), s = Br(), { draft: o } = mn(s), r = $("create"), i = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: Lt.PREDEFINED,
      params: {}
    }), a = $(i()), c = j(() => a.value.displayName.trim() ? a.value.resourceType === Lt.PREDEFINED ? !!a.value.predefinedResource : !!a.value.customResourceSpec.trim() : !1), f = async () => (r.value = "create", a.value = i(), await n.value?.show() ? a.value : null), u = async (p) => (r.value = "edit", a.value = i(), a.value.displayName = p.name, p.type === "predefined" ? (a.value.resourceType = Lt.PREDEFINED, a.value.predefinedResource = p.resourceSpec, a.value.params = p.params || {}, s.prepareDraftFor(p.resourceSpec, p.params || {})) : (a.value.resourceType = Lt.CUSTOM, a.value.customResourceSpec = p.resourceSpec), await n.value?.show() ? a.value : null), d = (p) => {
      c.value && (a.value.resourceType === Lt.PREDEFINED && (a.value.params = { ...o.value || {} }), p(!0));
    };
    return t({ show: f, showEdit: u }), (p, h) => {
      const g = Je("b-modal");
      return S(), Ze(g, {
        ref_key: "resourceFormModal",
        ref: n
      }, {
        title: pe(() => [
          H(M(r.value === "create" ? "Add Resource" : "Edit Resource"), 1)
        ]),
        footer: pe(({ hide: m }) => [
          l("div", yI, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (v) => m(!1)
            }, h[1] || (h[1] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, bI),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (v) => d(m),
              disabled: !c.value
            }, [
              l("i", {
                class: le(`fas fa-fw ${r.value === "create" ? "fa-plus" : "fa-save"} me-1`)
              }, null, 2),
              H(M(r.value === "create" ? "Add" : "Save"), 1)
            ], 8, EI)
          ])
        ]),
        default: pe(() => [
          ce(_I, {
            modelValue: a.value,
            "onUpdate:modelValue": h[0] || (h[0] = (m) => a.value = m)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 512);
    };
  }
}), wI = { class: "d-flex align-items-center w-100" }, AI = { class: "ms-auto d-flex align-items-center gap-2" }, SI = ["disabled"], CI = ["disabled"], OI = ["disabled"], TI = ["disabled"], NI = {
  key: 0,
  class: "d-flex align-items-center text-muted small ms-2"
}, DI = "Import resources from JSON. Choose Merge to add/update or Replace to overwrite your current list.", kI = "Export current resources to a JSON file.", xI = "Manage the list of mapping resources. Import/Export uses JSON; Import supports Merge or Replace.", RI = /* @__PURE__ */ Ce({
  __name: "ResourcesToolbar",
  setup(e) {
    const t = Go(), n = tn(), { loading: s } = mn(t), o = $(null), r = $(null), i = $(null), a = $("merge");
    async function c() {
      if (!o.value) return;
      const h = await o.value.show();
      h && (h.resourceType === Lt.PREDEFINED ? await t.addPredefinedResource(h.displayName, h.predefinedResource) : await t.addCustomResource(h.displayName, h.customResourceSpec));
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
        const g = h.target, m = g.files && g.files[0];
        if (!m) return;
        const v = await m.text(), y = JSON.parse(v), b = await t.importResources(y, { mode: a.value }), _ = "Resources Import Summary", A = `Imported ${b.added} new, updated ${b.updated}, skipped ${b.skipped} (total ${b.total}).`;
        await n.alertUser(_, A);
      } catch (g) {
        console.error("Import failed:", g), n.showError("Failed to import resources. Please check the JSON file.");
      } finally {
        i.value && (i.value.value = ""), a.value = "merge";
      }
    }
    function d() {
      try {
        const h = t.exportResources(), g = new Blob([JSON.stringify(h, null, 2)], { type: "application/json" }), m = window.URL.createObjectURL(g), v = document.createElement("a"), y = /* @__PURE__ */ new Date(), b = `${y.getFullYear()}${String(y.getMonth() + 1).padStart(2, "0")}${String(y.getDate()).padStart(2, "0")}-${String(y.getHours()).padStart(2, "0")}${String(y.getMinutes()).padStart(2, "0")}`;
        v.href = m, v.download = `resources-${b}.json`, document.body.appendChild(v), v.click(), v.remove(), window.URL.revokeObjectURL(m), n.showSuccess("Exported resources successfully");
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
    return (h, g) => (S(), D("div", wI, [
      l("div", { class: "d-flex align-items-center gap-2" }, [
        g[0] || (g[0] = l("span", null, "Resources", -1)),
        l("i", {
          class: "fas fa-info-circle text-muted",
          title: xI,
          "aria-label": "Resources help",
          role: "img"
        })
      ]),
      l("div", AI, [
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: f,
          title: DI,
          disabled: U(s).fetch || U(s).importing
        }, g[1] || (g[1] = [
          l("i", { class: "fas fa-upload fa-fw" }, null, -1),
          l("span", null, "Import", -1)
        ]), 8, SI),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: d,
          title: kI,
          disabled: U(s).fetch || U(s).importing
        }, g[2] || (g[2] = [
          l("i", { class: "fas fa-download fa-fw" }, null, -1),
          l("span", null, "Export", -1)
        ]), 8, CI),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: c,
          disabled: U(s).fetch || U(s).importing
        }, g[3] || (g[3] = [
          l("i", { class: "fas fa-plus fa-fw" }, null, -1),
          l("span", null, "Add", -1)
        ]), 8, OI),
        l("button", {
          class: "btn btn-outline-secondary btn-sm",
          onClick: p,
          disabled: U(s).fetch,
          title: "Refresh resources"
        }, [
          l("i", {
            class: le(["fas fa-rotate-right fa-fw", { "fa-spin": U(s).fetch }])
          }, null, 2)
        ], 8, TI),
        U(s).importing ? (S(), D("div", NI, g[4] || (g[4] = [
          l("i", { class: "fas fa-spinner fa-spin me-1" }, null, -1),
          H(" Importing... ")
        ]))) : ue("", !0)
      ]),
      l("input", {
        ref_key: "importInput",
        ref: i,
        type: "file",
        accept: "application/json",
        class: "d-none",
        onChange: u
      }, null, 544),
      ce(J2, {
        ref_key: "importModal",
        ref: r
      }, null, 512),
      ce(E_, {
        ref_key: "resourceFormModal",
        ref: o
      }, null, 512)
    ]));
  }
}), II = { class: "table table-striped table-hover table-sm border-top" }, PI = {
  key: 0,
  class: "badge bg-info-subtle text-info-emphasis",
  title: "Parameters configured"
}, MI = {
  key: 1,
  class: "text-muted"
}, VI = { class: "d-flex gap-2" }, LI = ["onClick", "disabled"], FI = ["onClick", "disabled"], BI = ["onClick", "disabled"], $I = ["onClick", "disabled"], jI = { key: 0 }, UI = /* @__PURE__ */ Ce({
  __name: "ResourcesTable",
  setup(e) {
    const t = Go(), n = tn(), { selectedMappingResources: s, selectedCustomMappingResources: o } = mn(t), r = j(() => [
      ...s.value,
      ...o.value
    ]), i = fs({}), a = (m) => m.id || `${m.type}::${m.name}::${m.resourceSpec}`, c = (m) => !!i[a(m)], f = (m) => !!(m.params && Object.keys(m.params).length), u = $(null);
    async function d(m) {
      if (!m.id || !u.value) return;
      const v = await u.value.showEdit(m);
      if (!v) return;
      const y = { name: v.displayName };
      v.resourceType === "PREDEFINED" ? (y.resourceSpec = v.predefinedResource, v.params !== void 0 && (y.params = v.params)) : y.resourceSpec = v.customResourceSpec, await t.updateResource(m.id, y);
    }
    async function p(m) {
      const v = a(m);
      i[v] = !0;
      try {
        await t.softDeleteResource(m);
      } finally {
        i[v] = !1;
      }
    }
    async function h(m) {
      const v = a(m);
      i[v] = !0;
      try {
        await t.restoreResource(m);
      } finally {
        i[v] = !1;
      }
    }
    async function g(m) {
      const v = a(m);
      i[v] = !0;
      try {
        if (!await n.confirmAction(
          "Delete Forever",
          "This will permanently delete all instances marked as Deleted for this resource. This action cannot be undone. Continue?"
        ) || !m.id) return;
        await t.deleteResource(m) && n.showSuccess("Resource removed and deleted items purged");
      } finally {
        i[v] = !1;
      }
    }
    return (m, v) => (S(), D(we, null, [
      l("table", II, [
        v[3] || (v[3] = l("thead", null, [
          l("tr", null, [
            l("th", null, "Name"),
            l("th", null, "Type"),
            l("th", null, "Resource Specification"),
            l("th", null, "Params"),
            l("th", null, "Actions")
          ])
        ], -1)),
        l("tbody", null, [
          (S(!0), D(we, null, Xe(r.value, (y) => (S(), D("tr", {
            key: y.id || `${y.type}-${y.name}-${y.resourceSpec}`,
            class: le({ "table-secondary": y.deleted })
          }, [
            l("td", null, [
              l("span", {
                class: le({ "text-decoration-line-through text-muted": y.deleted })
              }, M(y.name), 3)
            ]),
            l("td", null, M(y.type), 1),
            l("td", null, [
              l("span", {
                class: le({ "text-decoration-line-through text-muted": y.deleted })
              }, M(y.resourceSpec || "-"), 3)
            ]),
            l("td", null, [
              f(y) ? (S(), D("span", PI, v[0] || (v[0] = [
                l("i", { class: "fas fa-sliders-h me-1" }, null, -1),
                H("Yes ")
              ]))) : (S(), D("span", MI, "No"))
            ]),
            l("td", null, [
              l("div", VI, [
                y.deleted ? ue("", !0) : (S(), D("button", {
                  key: 0,
                  type: "button",
                  class: "btn btn-outline-primary btn-sm btn-icon",
                  onClick: (b) => d(y),
                  disabled: !y.id,
                  title: "Edit"
                }, v[1] || (v[1] = [
                  l("i", { class: "fas fa-pen fa-fw" }, null, -1)
                ]), 8, LI)),
                y.deleted ? (S(), D(we, { key: 2 }, [
                  l("button", {
                    type: "button",
                    class: "btn btn-outline-success btn-sm btn-icon",
                    onClick: (b) => h(y),
                    disabled: c(y),
                    title: "Restore"
                  }, [
                    l("i", {
                      class: le(`fas fa-fw ${c(y) ? "fa-spinner fa-spin" : "fa-rotate-left"}`)
                    }, null, 2)
                  ], 8, BI),
                  l("button", {
                    type: "button",
                    class: "btn btn-outline-danger btn-sm btn-icon",
                    onClick: (b) => g(y),
                    disabled: c(y),
                    title: "Delete forever"
                  }, [
                    l("i", {
                      class: le(`fas fa-fw ${c(y) ? "fa-spinner fa-spin" : "fa-trash-can"}`)
                    }, null, 2)
                  ], 8, $I)
                ], 64)) : (S(), D("button", {
                  key: 1,
                  type: "button",
                  class: "btn btn-outline-danger btn-sm btn-icon",
                  onClick: (b) => p(y),
                  disabled: c(y),
                  title: "Soft delete"
                }, [
                  l("i", {
                    class: le(`fas fa-fw ${c(y) ? "fa-spinner fa-spin" : "fa-trash-can"}`)
                  }, null, 2)
                ], 8, FI))
              ])
            ])
          ], 2))), 128)),
          r.value.length === 0 ? (S(), D("tr", jI, v[2] || (v[2] = [
            l("td", {
              colspan: "5",
              class: "text-muted text-center"
            }, "No resources configured", -1)
          ]))) : ue("", !0)
        ])
      ]),
      ce(E_, {
        ref_key: "resourceFormModal",
        ref: u
      }, null, 512)
    ], 64));
  }
}), HI = { class: "d-flex flex-column gap-4" }, WI = { class: "card" }, KI = { class: "card-body px-0 py-0" }, zI = { class: "p-2" }, qI = /* @__PURE__ */ Ce({
  __name: "SetupPage",
  setup(e) {
    return (t, n) => (S(), D("div", HI, [
      ce(K2),
      l("div", WI, [
        l("div", KI, [
          l("div", zI, [
            ce(RI)
          ]),
          ce(UI)
        ])
      ])
    ]));
  }
}), w_ = /* @__PURE__ */ hn("operations", () => {
  const e = $(!1), t = $(null), n = $(!0), s = $({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), o = $({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), r = (A) => {
    e.value = A;
  }, i = (A, T, N, x) => {
    t.value = {
      operation: A,
      success: T,
      message: N,
      data: x,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  }, a = () => {
    n.value = !n.value;
  }, c = (A) => {
    s.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: A
    };
  }, f = () => {
    s.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, u = () => {
    s.value.visible = !1;
  }, d = (A) => {
    o.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: A
    };
  }, p = () => {
    o.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, h = () => {
    o.value.visible = !1;
  }, g = j(() => s.value.visible), m = j(() => s.value.archiveType), v = j(() => s.value.selectedMrns), y = j(() => o.value.visible), b = j(() => o.value.archiveType), _ = j(() => o.value.selectedMrns);
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
    archiveModalType: m,
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
}), YI = { class: "mb-3" }, XI = { class: "d-flex flex-wrap gap-2 align-items-center" }, GI = { class: "d-flex gap-2" }, QI = ["disabled"], JI = { key: 0 }, ZI = { key: 1 }, eP = ["disabled"], tP = /* @__PURE__ */ Ce({
  __name: "MonitorToolbar",
  emits: ["addMrn"],
  setup(e) {
    const t = Zn(), n = w_(), s = tn(), o = j(() => t.selectedMrns.length === 0), r = j(() => t.operationLoading), i = j(() => t.loading), a = async () => {
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
      const h = Je("b-dropdown-item"), g = Je("b-dropdown");
      return S(), D("div", YI, [
        l("div", XI, [
          l("div", GI, [
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: p[0] || (p[0] = (m) => d.$emit("addMrn"))
            }, p[1] || (p[1] = [
              l("i", { class: "fas fa-plus-circle fa-fw" }, null, -1),
              H(" Add MRN ")
            ])),
            l("button", {
              class: "btn btn-outline-primary btn-sm",
              onClick: a,
              disabled: o.value || r.value,
              title: "Trigger fetch for selected MRNs"
            }, [
              r.value ? (S(), D("span", ZI, p[3] || (p[3] = [
                l("span", null, [
                  l("i", { class: "fas fa-spinner fa-spin fa-fw" }),
                  H(" Fetch Selected")
                ], -1)
              ]))) : (S(), D("span", JI, p[2] || (p[2] = [
                l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1),
                H(" Fetch Selected")
              ])))
            ], 8, QI)
          ]),
          ce(g, {
            variant: "success",
            title: "Stream download archives",
            size: "sm"
          }, {
            button: pe(() => p[4] || (p[4] = [
              l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
              H("Download ")
            ])),
            default: pe(() => [
              ce(h, {
                onClick: f,
                class: le({ disabled: o.value }),
                "prevent-close": !1
              }, {
                default: pe(() => p[5] || (p[5] = [
                  l("i", { class: "fas fa-download me-2" }, null, -1),
                  H("Download Selected Records ")
                ])),
                _: 1,
                __: [5]
              }, 8, ["class"]),
              ce(h, {
                onClick: u,
                "prevent-close": !1
              }, {
                default: pe(() => p[6] || (p[6] = [
                  l("i", { class: "fas fa-download me-2" }, null, -1),
                  H("Download All Records ")
                ])),
                _: 1,
                __: [6]
              })
            ]),
            _: 1
          }),
          l("button", {
            class: "btn btn-outline-secondary btn-sm",
            onClick: c,
            disabled: i.value,
            title: "Refresh data"
          }, [
            l("i", {
              class: le(["fas fa-rotate-right fa-fw", { "fa-spin": i.value }])
            }, null, 2)
          ], 8, eP)
        ])
      ]);
    };
  }
}), Au = /* @__PURE__ */ hn("streaming", () => {
  const e = $({
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
}), A_ = /* @__PURE__ */ hn("resourceContent", () => {
  const e = bs(), t = $(!1), n = $(null), s = $(null), o = async (g, m, v, y) => {
    try {
      t.value = !0;
      const b = await Fe.getResourceContent(g, m, v, y);
      if (b.data.success)
        return n.value = b.data, b.data;
      throw new Error(b.data.error || "Failed to fetch resource content");
    } catch (b) {
      throw e.addError(b, "resourceContentStore"), console.error("Failed to fetch resource content:", b), b;
    } finally {
      t.value = !1;
    }
  }, r = async (g, m, v, y) => await o(g, m, v, y);
  return {
    // State
    loading: t,
    currentContent: n,
    // Actions
    fetchResourceContent: o,
    loadResourceContent: r,
    showResourceContent: async (g, m, v, y) => (await r(g, m, v, y), s.value?.show()),
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
          const v = document.execCommand("copy");
          return document.body.removeChild(m), v;
        }
      } catch (m) {
        return console.error("Failed to copy to clipboard:", m), !1;
      }
    },
    // Getters
    getContentStats: () => {
      if (!n.value) return null;
      const { content: g, metadata: m } = n.value, v = g.split(`
`).length, y = g.length;
      return {
        lines: v,
        characters: y,
        size_human: m.preview_size_human,
        is_truncated: m.is_truncated,
        full_size_human: m.full_size_human
      };
    },
    isJsonContent: () => n.value?.metadata.is_valid_json || !1,
    getDisplayTitle: () => {
      if (!n.value) return "Resource Content";
      const { mrn: g, resource_name: m, repeat_instance: v } = n.value;
      return `${m} - ${g} (Instance ${v})`;
    }
  };
}), nP = { class: "align-middle" }, sP = { class: "d-flex flex-column" }, oP = { class: "text-muted" }, rP = {
  key: 0,
  class: "d-block text-muted"
}, iP = {
  key: 0,
  class: "text-success"
}, aP = {
  key: 1,
  class: "text-muted"
}, lP = {
  key: 0,
  class: "text-danger"
}, cP = ["title"], uP = ["title"], dP = {
  key: 1,
  class: "text-muted"
}, fP = { class: "d-flex gap-2" }, pP = ["disabled"], hP = ["disabled"], mP = ["disabled"], gP = {
  key: 0,
  class: "table-warning"
}, vP = { colspan: "5" }, _P = { class: "p-2" }, yP = { class: "mb-0 mt-1" }, bP = /* @__PURE__ */ Ce({
  __name: "MonitorResourceRow",
  props: {
    resource: {},
    mrn: {},
    recordId: {}
  },
  setup(e) {
    const t = e, n = Zn(), s = Au(), o = tn(), r = A_(), i = $(!1), a = $(!1), c = $(!1), f = (m) => {
      const v = "badge";
      switch (m) {
        case Pe.Pending:
          return `${v} bg-warning text-dark`;
        case Pe.Fetching:
          return `${v} bg-info text-dark`;
        case Pe.Completed:
          return `${v} bg-success`;
        case Pe.Failed:
          return `${v} bg-danger`;
        case Pe.Outdated:
          return `${v} bg-secondary`;
        case Pe.Deleted:
          return `${v} bg-dark`;
        default:
          return `${v} bg-secondary`;
      }
    }, u = (m) => {
      if (!m) return "-";
      try {
        const v = new Date(m);
        return v.toLocaleDateString() + " " + v.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch {
        return m;
      }
    }, d = (m) => m ? m.length > 50 ? m.substring(0, 50) + "..." : m : "-", p = async () => {
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
    }, h = async () => {
      try {
        c.value = !0, await r.showResourceContent(
          t.recordId,
          t.resource.name,
          t.resource.repeat_instance || 1
        );
      } catch (m) {
        console.error("Failed to load resource content:", m), o.showError("Failed to load resource content");
      } finally {
        c.value = !1;
      }
    }, g = async () => {
      try {
        a.value = !0;
        const m = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), v = `${t.mrn}_${t.resource.name}_${m}`;
        s.startStreaming(v), o.showInfo(`Started streaming download: ${v}`);
        const y = {
          mrns: [t.mrn],
          resource_types: [t.resource.name],
          archive_name: v
        }, b = await Fe.streamSelectedArchive([t.mrn], y), _ = new Blob([b.data]), A = window.URL.createObjectURL(_), T = document.createElement("a");
        T.href = A, T.download = `${v}.zip`, document.body.appendChild(T), T.click(), document.body.removeChild(T), window.URL.revokeObjectURL(A);
        const N = s.finishStreaming();
        o.showSuccess(`Download completed: ${v} (${N}s)`);
      } catch (m) {
        s.finishStreaming(), o.showError(`Streaming download failed: ${m.message}`), console.error("Failed to stream download resource:", m);
      } finally {
        a.value = !1;
      }
    };
    return (m, v) => (S(), D(we, null, [
      l("tr", nP, [
        l("td", null, [
          l("div", sP, [
            l("strong", null, M(m.resource.name), 1),
            l("small", oP, M(m.resource.mapping_type) + " | " + M(m.resource.resource_spec), 1)
          ])
        ]),
        l("td", null, [
          l("span", {
            class: le(f(m.resource.status))
          }, M(m.resource.status), 3),
          m.resource.repeat_instance ? (S(), D("small", rP, " Instance #" + M(m.resource.repeat_instance), 1)) : ue("", !0)
        ]),
        l("td", null, [
          m.resource.fetch_date ? (S(), D("div", iP, [
            v[1] || (v[1] = l("i", { class: "fas fa-check-circle fa-fw" }, null, -1)),
            H(" " + M(u(m.resource.fetch_date)), 1)
          ])) : (S(), D("div", aP, "-"))
        ]),
        l("td", null, [
          m.resource.error_message ? (S(), D("div", lP, [
            v[2] || (v[2] = l("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            l("span", {
              title: m.resource.error_message
            }, M(d(m.resource.error_message)), 9, cP),
            m.resource.error_message.length > 50 ? (S(), D("button", {
              key: 0,
              class: "btn btn-link btn-sm p-0 ms-1",
              onClick: v[0] || (v[0] = (y) => i.value = !i.value),
              title: i.value ? "Show less" : "Show more"
            }, [
              l("i", {
                class: le(`fas fa-chevron-${i.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, uP)) : ue("", !0)
          ])) : (S(), D("div", dP, "-"))
        ]),
        l("td", null, [
          l("div", fP, [
            m.resource.status === "Failed" ? (S(), D("button", {
              key: 0,
              class: "btn btn-sm btn-warning btn-icon",
              onClick: p,
              disabled: a.value,
              title: "Retry this resource"
            }, v[3] || (v[3] = [
              l("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)
            ]), 8, pP)) : ue("", !0),
            m.resource.status === "Completed" ? (S(), D("button", {
              key: 1,
              class: "btn btn-sm btn-outline-primary btn-icon",
              onClick: h,
              disabled: c.value,
              title: "View resource details"
            }, [
              l("i", {
                class: le(`fas fa-fw ${c.value ? "fa-spinner fa-spin" : "fa-eye"}`)
              }, null, 2)
            ], 8, hP)) : ue("", !0),
            m.resource.status === "Completed" ? (S(), D("button", {
              key: 2,
              class: "btn btn-sm btn-outline-success btn-icon",
              onClick: g,
              disabled: a.value || U(s).isStreamingActive,
              title: "Stream download this resource"
            }, v[4] || (v[4] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, mP)) : ue("", !0)
          ])
        ])
      ]),
      i.value && m.resource.error_message ? (S(), D("tr", gP, [
        l("td", vP, [
          l("div", _P, [
            v[5] || (v[5] = l("strong", null, "Error Details:", -1)),
            l("pre", yP, M(m.resource.error_message), 1)
          ])
        ])
      ])) : ue("", !0)
    ], 64));
  }
}), EP = { class: "align-middle" }, wP = ["checked"], AP = {
  key: 0,
  class: "status-display-smart"
}, SP = ["title"], CP = {
  key: 1,
  class: "status-display-progress"
}, OP = {
  class: "progress position-relative",
  style: { height: "6px" }
}, TP = ["title"], NP = { class: "text-muted" }, DP = {
  key: 2,
  class: "status-display-badges"
}, kP = ["title"], xP = {
  key: 3,
  class: "status-display-legacy"
}, RP = ["title"], IP = {
  key: 0,
  class: "position-absolute bg-dark text-white p-2 rounded shadow-lg",
  style: { "z-index": "1000", top: "100%", left: "0", width: "250px" }
}, PP = { class: "small" }, MP = { class: "d-flex justify-content-between" }, VP = { class: "d-flex justify-content-between" }, LP = { class: "d-flex align-items-center" }, FP = ["aria-expanded"], BP = { class: "d-flex gap-2" }, $P = ["disabled"], jP = {
  key: 0,
  class: "fas fa-cloud-arrow-down fa-fw"
}, UP = {
  key: 1,
  class: "fas fa-spinner fa-spin fa-fw"
}, HP = ["disabled", "title"], WP = {
  key: 0,
  class: "fas fa-redo fa-fw"
}, KP = {
  key: 1,
  class: "fas fa-spinner fa-spin fa-fw"
}, zP = ["disabled", "title"], qP = {
  colspan: "5",
  class: "p-0"
}, YP = { class: "ps-3" }, XP = { class: "table table-sm table-bordered mb-0" }, GP = /* @__PURE__ */ Ce({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  setup(e) {
    const t = Zn(), n = Au(), s = tn(), o = e, r = $(!1), i = $(!1), a = $(!1), c = $("progress"), f = () => {
      r.value = !r.value;
    }, u = j(() => {
      const I = o.item.resources.filter((X) => X.status !== Pe.Deleted), k = I.length, w = I.filter((X) => X.status === Pe.Completed).length, R = I.filter((X) => X.status === Pe.Failed).length, C = I.filter((X) => X.status === Pe.Pending).length, F = I.filter((X) => X.status === Pe.Fetching).length;
      let fe = `${w}/${k} completed`;
      return R > 0 && (fe += `, ${R} failed`), F > 0 && (fe += `, ${F} fetching`), C > 0 && (fe += `, ${C} pending`), fe;
    }), d = j(() => t.getProgressBarConfig(o.item)), p = j(() => o.item.resources.some((I) => I.status === Pe.Failed)), h = j(() => !p.value), g = j(() => {
      if (p.value) {
        const I = o.item.resources.filter((k) => k.status === Pe.Failed).length;
        return `Retry ${I} failed resource${I > 1 ? "s" : ""} for this record`;
      } else
        return "No failed resources to retry";
    }), m = j(() => o.item.resources.some((I) => I.status === Pe.Completed)), v = j(() => !m.value), y = j(() => {
      if (m.value) {
        const I = o.item.resources.filter((k) => k.status === Pe.Completed).length;
        return `Stream download ${I} completed resource${I > 1 ? "s" : ""} for MRN ${o.item.mrn}`;
      } else
        return "No completed resources to stream";
    }), b = () => {
      const I = d.value;
      return I.segments.length === 0 ? "No resources" : `${I.segments.map((w) => `${w.status}: ${w.count}`).join(", ")} | ${Math.round(I.completion_percentage)}% complete`;
    }, _ = () => b() + " (hover for details)", A = () => {
      const I = t.getStatusForStyling(o.item);
      return `badge bg-${t.getStatusColor(I)}`;
    }, T = async () => {
      try {
        i.value = !0, await t.triggerFetchMrns([o.item.mrn]);
      } catch (I) {
        console.error("Failed to trigger fetch for MRN:", I);
      } finally {
        i.value = !1;
      }
    }, N = async () => {
      if (p.value)
        try {
          i.value = !0, await Fe.retryFailed({ record_ids: [o.item.id] }), await t.getProjectSummary();
        } catch (I) {
          console.error("Failed to retry failed resources:", I);
        } finally {
          i.value = !1;
        }
    }, x = async () => {
      if (m.value)
        try {
          i.value = !0;
          const I = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), k = `${o.item.mrn}_all_resources_${I}`;
          n.startStreaming(k), s.showInfo(`Started streaming download: ${k}`);
          const w = o.item.resources.filter((z) => z.status === Pe.Completed).map((z) => z.name).filter((z, de, be) => be.indexOf(z) === de), R = {
            mrns: [o.item.mrn],
            resource_types: w,
            archive_name: k
          }, C = await Fe.streamSelectedArchive([o.item.mrn], R), F = new Blob([C.data]), fe = window.URL.createObjectURL(F), X = document.createElement("a");
          X.href = fe, X.download = `${k}.zip`, document.body.appendChild(X), X.click(), document.body.removeChild(X), window.URL.revokeObjectURL(fe);
          const re = n.finishStreaming();
          s.showSuccess(`Download completed: ${k} (${re}s)`);
        } catch (I) {
          n.finishStreaming(), s.showError(`Streaming download failed: ${I.message}`), console.error("Failed to stream download MRN:", I);
        } finally {
          i.value = !1;
        }
    };
    return (I, k) => (S(), D(we, null, [
      l("tr", EP, [
        l("td", null, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: I.selected,
            onChange: k[0] || (k[0] = (w) => U(t).toggleSelection(I.item.id))
          }, null, 40, wP)
        ]),
        l("td", null, M(I.item.mrn), 1),
        l("td", null, [
          c.value === "smart" ? (S(), D("div", AP, [
            l("span", {
              class: le(A()),
              title: b()
            }, M(U(t).getSmartStatusDisplay(I.item)), 11, SP)
          ])) : c.value === "progress" ? (S(), D("div", CP, [
            l("div", OP, [
              (S(!0), D(we, null, Xe(d.value.segments, (w) => (S(), D("div", {
                key: w.status,
                class: le(`progress-bar bg-${w.color}`),
                style: Vt({ width: w.percentage + "%" }),
                title: `${w.status}: ${w.count} (${w.percentage}%)`
              }, null, 14, TP))), 128))
            ]),
            l("small", NP, M(Math.round(d.value.completion_percentage)) + "% complete", 1)
          ])) : c.value === "badges" ? (S(), D("div", DP, [
            (S(!0), D(we, null, Xe(d.value.segments, (w) => (S(), D("span", {
              key: w.status,
              class: le(`badge bg-${w.color} me-1`),
              title: `${w.status}: ${w.count} resources`,
              style: { "font-size": "0.7em" }
            }, M(w.status.charAt(0).toUpperCase()) + ": " + M(w.count), 11, kP))), 128))
          ])) : (S(), D("div", xP, [
            l("span", {
              class: le(A()),
              title: _(),
              onMouseenter: k[1] || (k[1] = (w) => a.value = !0),
              onMouseleave: k[2] || (k[2] = (w) => a.value = !1)
            }, M(U(t).getSmartStatusDisplay(I.item)), 43, RP),
            a.value ? (S(), D("div", IP, [
              k[6] || (k[6] = l("div", { class: "fw-bold mb-1" }, "Status Breakdown", -1)),
              l("div", PP, [
                (S(!0), D(we, null, Xe(d.value.segments, (w) => (S(), D("div", {
                  key: w.status,
                  class: "d-flex justify-content-between"
                }, [
                  l("span", null, M(w.status) + ":", 1),
                  l("span", null, M(w.count) + " (" + M(w.percentage) + "%)", 1)
                ]))), 128)),
                k[5] || (k[5] = l("hr", { class: "my-1" }, null, -1)),
                l("div", MP, [
                  k[3] || (k[3] = l("span", null, "Total Resources:", -1)),
                  l("span", null, M(d.value.total_resources), 1)
                ]),
                l("div", VP, [
                  k[4] || (k[4] = l("span", null, "Completion:", -1)),
                  l("span", null, M(Math.round(d.value.completion_percentage)) + "%", 1)
                ])
              ])
            ])) : ue("", !0)
          ]))
        ]),
        l("td", null, [
          l("div", LP, [
            l("span", null, M(u.value), 1),
            l("button", {
              class: "btn btn-sm btn-light ms-2",
              onClick: f,
              "aria-expanded": r.value
            }, [
              l("i", {
                class: le(`fas fa-chevron-${r.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, FP)
          ])
        ]),
        l("td", null, [
          l("div", BP, [
            l("button", {
              class: "btn btn-sm btn-outline-primary btn-icon",
              onClick: T,
              disabled: i.value,
              title: "Trigger fetch for this MRN"
            }, [
              i.value ? (S(), D("i", UP)) : (S(), D("i", jP))
            ], 8, $P),
            l("button", {
              class: "btn btn-sm btn-outline-warning btn-icon",
              onClick: N,
              disabled: h.value || i.value,
              title: g.value
            }, [
              i.value ? (S(), D("i", KP)) : (S(), D("i", WP))
            ], 8, HP),
            l("button", {
              class: "btn btn-sm btn-outline-success btn-icon",
              disabled: v.value || i.value || U(n).isStreamingActive,
              onClick: x,
              title: y.value
            }, k[7] || (k[7] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, zP)
          ])
        ])
      ]),
      nt(l("tr", null, [
        l("td", qP, [
          l("div", YP, [
            l("table", XP, [
              k[8] || (k[8] = l("thead", { class: "table-light" }, [
                l("tr", null, [
                  l("th", { scope: "col" }, "Resource"),
                  l("th", { scope: "col" }, "Status"),
                  l("th", { scope: "col" }, "Fetch Date"),
                  l("th", { scope: "col" }, "Error"),
                  l("th", { scope: "col" }, "Actions")
                ])
              ], -1)),
              l("tbody", null, [
                (S(!0), D(we, null, Xe(I.item.resources, (w) => (S(), Ze(bP, {
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
        [Cm, r.value]
      ])
    ], 64));
  }
}), QP = /* @__PURE__ */ Zt(GP, [["__scopeId", "data-v-2a00b840"]]), JP = {
  key: 0,
  class: "d-flex justify-content-center"
}, ZP = {
  key: 1,
  class: "table table-bordered table-striped table-hover"
}, eM = { class: "table-light" }, tM = { scope: "col" }, nM = ["checked", "indeterminate"], sM = { key: 0 }, oM = /* @__PURE__ */ Ce({
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
    return mt(() => t.indeterminate, (s) => {
      n.value && (n.value.indeterminate = s);
    }, { immediate: !0 }), (s, o) => (S(), D("div", null, [
      s.loading ? (S(), D("div", JP, o[1] || (o[1] = [
        l("div", {
          class: "spinner-border",
          role: "status"
        }, [
          l("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (S(), D("table", ZP, [
        l("thead", eM, [
          l("tr", null, [
            l("th", tM, [
              l("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: s.allSelected,
                indeterminate: s.indeterminate,
                onChange: o[0] || (o[0] = (r) => s.$emit("toggle-select-all"))
              }, null, 40, nM)
            ]),
            o[2] || (o[2] = l("th", { scope: "col" }, "MRN", -1)),
            o[3] || (o[3] = l("th", { scope: "col" }, "Status", -1)),
            o[4] || (o[4] = l("th", { scope: "col" }, "Resources", -1)),
            o[5] || (o[5] = l("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        l("tbody", null, [
          s.items.length === 0 ? (S(), D("tr", sM, o[6] || (o[6] = [
            l("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (S(!0), D(we, { key: 1 }, Xe(s.items, (r) => (S(), Ze(QP, {
            key: r.id,
            item: r,
            selected: s.selectedMrns.includes(r.id)
          }, null, 8, ["item", "selected"]))), 128))
        ])
      ]))
    ]));
  }
}), rM = { class: "mb-3" }, iM = { class: "mt-2 small" }, aM = { key: 0 }, lM = { key: 1 }, cM = {
  key: 0,
  class: "text-danger"
}, uM = {
  key: 1,
  class: "text-muted"
}, dM = { class: "d-flex gap-2 justify-content-end" }, fM = ["onClick"], pM = ["onClick", "disabled"], hM = /* @__PURE__ */ Ce({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = $(null), s = $(""), o = Zn(), r = j(() => o.analyzeMrnInput(s.value)), i = j(() => r.value.unique === 0 || r.value.overLimit), a = j(() => r.value.unique > 0 ? `Add ${r.value.unique}` : "Add"), c = async () => (s.value = "", await n.value?.show() ? s.value : null), f = (u) => {
      i.value || u(!0);
    };
    return t({ show: c }), (u, d) => {
      const p = Je("b-modal");
      return S(), Ze(p, {
        ref_key: "addMrnModal",
        ref: n
      }, {
        title: pe(() => d[1] || (d[1] = [
          H("Add MRN")
        ])),
        footer: pe(({ hide: h }) => [
          l("div", dM, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (g) => h(!1)
            }, d[11] || (d[11] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, fM),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (g) => f(h),
              disabled: i.value
            }, [
              d[12] || (d[12] = l("i", { class: "fas fa-plus fa-fw me-1" }, null, -1)),
              H(M(a.value), 1)
            ], 8, pM)
          ])
        ]),
        default: pe(() => [
          l("div", rM, [
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
              [Co, s.value]
            ]),
            d[10] || (d[10] = l("small", { class: "text-muted d-block" }, "Examples: 12345, 67890 or one per line", -1)),
            l("div", iM, [
              l("div", null, [
                d[6] || (d[6] = H(" Parsed: ")),
                l("strong", null, M(r.value.unique), 1),
                d[7] || (d[7] = H(" unique ")),
                r.value.duplicates > 0 ? (S(), D("span", aM, [
                  d[2] || (d[2] = H("(")),
                  l("strong", null, M(r.value.duplicates), 1),
                  d[3] || (d[3] = H(" duplicates ignored)"))
                ])) : ue("", !0),
                r.value.empties > 0 ? (S(), D("span", lM, [
                  d[4] || (d[4] = H(", ")),
                  l("strong", null, M(r.value.empties), 1),
                  d[5] || (d[5] = H(" empty tokens"))
                ])) : ue("", !0)
              ]),
              r.value.overLimit ? (S(), D("div", cM, " Limit exceeded: " + M(r.value.unique) + " › " + M(r.value.limit) + ". Please reduce the list. ", 1)) : ue("", !0),
              r.value.sample.length ? (S(), D("div", uM, [
                d[8] || (d[8] = H(" Sample: ")),
                l("code", null, M(r.value.sample.join(", ")), 1)
              ])) : ue("", !0)
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), mM = { class: "p-0" }, gM = {
  key: 0,
  class: "d-flex justify-content-center align-items-center py-5"
}, vM = {
  key: 1,
  class: "h-100"
}, _M = { class: "bg-light border-bottom p-3" }, yM = { class: "row align-items-center" }, bM = { class: "col-md-8" }, EM = { class: "d-flex flex-wrap gap-3" }, wM = { class: "d-flex align-items-center" }, AM = { class: "text-muted" }, SM = { class: "d-flex align-items-center" }, CM = { class: "text-muted" }, OM = {
  key: 0,
  class: "text-warning"
}, TM = {
  key: 0,
  class: "d-flex align-items-center"
}, NM = { class: "col-md-4 text-end" }, DM = ["disabled"], kM = {
  key: 0,
  class: "alert alert-warning mt-2 mb-0 py-2"
}, xM = { class: "content-display" }, RM = {
  key: 2,
  class: "p-4 text-center"
}, IM = ["onClick"], PM = /* @__PURE__ */ Ce({
  __name: "ResourceContentModal",
  setup(e) {
    const t = A_(), n = tn(), s = $(null), o = $(!1), r = $(!1), i = j(() => t.getContentStats()), a = () => {
    };
    Nt(() => {
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
      const d = Je("b-modal");
      return S(), Ze(d, {
        ref_key: "resourceContentModal",
        ref: s,
        size: "xl",
        onHidden: a
      }, {
        title: pe(() => [
          u[0] || (u[0] = l("i", { class: "fas fa-file-alt fa-fw me-2" }, null, -1)),
          H(" " + M(U(t).getDisplayTitle()), 1)
        ]),
        footer: pe(({ hide: p }) => [
          l("button", {
            type: "button",
            class: "btn btn-secondary",
            onClick: (h) => p()
          }, " Close ", 8, IM)
        ]),
        default: pe(() => [
          l("div", mM, [
            U(t).loading ? (S(), D("div", gM, u[1] || (u[1] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading content...")
              ], -1),
              l("span", { class: "ms-3" }, "Loading resource content...", -1)
            ]))) : U(t).currentContent ? (S(), D("div", vM, [
              l("div", _M, [
                l("div", yM, [
                  l("div", bM, [
                    l("div", EM, [
                      l("div", wM, [
                        u[2] || (u[2] = l("i", { class: "fas fa-info-circle text-info me-1" }, null, -1)),
                        l("small", AM, M(i.value?.lines || 0) + " lines, " + M(i.value?.characters || 0) + " characters ", 1)
                      ]),
                      l("div", SM, [
                        u[3] || (u[3] = l("i", { class: "fas fa-hdd text-secondary me-1" }, null, -1)),
                        l("small", CM, [
                          H(M(i.value?.size_human) + " ", 1),
                          i.value?.is_truncated ? (S(), D("span", OM, " of " + M(i.value?.full_size_human) + " (truncated) ", 1)) : ue("", !0)
                        ])
                      ]),
                      U(t).isJsonContent() ? (S(), D("div", TM, u[4] || (u[4] = [
                        l("i", { class: "fas fa-check-circle text-success me-1" }, null, -1),
                        l("small", { class: "text-muted" }, "Valid JSON", -1)
                      ]))) : ue("", !0)
                    ])
                  ]),
                  l("div", NM, [
                    l("button", {
                      class: "btn btn-outline-secondary btn-sm",
                      onClick: c,
                      disabled: o.value,
                      title: "Copy content to clipboard"
                    }, [
                      l("i", {
                        class: le(`fas ${o.value ? "fa-spinner fa-spin" : r.value ? "fa-check" : "fa-copy"} fa-fw`)
                      }, null, 2),
                      H(" " + M(o.value ? "Copying..." : r.value ? "Copied!" : "Copy"), 1)
                    ], 8, DM)
                  ])
                ]),
                i.value?.is_truncated ? (S(), D("div", kM, [
                  u[5] || (u[5] = l("i", { class: "fas fa-exclamation-triangle me-2" }, null, -1)),
                  u[6] || (u[6] = l("strong", null, "Content Truncated:", -1)),
                  H(" This file is " + M(i.value.full_size_human) + " but only the first " + M(i.value.size_human) + " are shown for performance. The full content is preserved in the system. ", 1)
                ])) : ue("", !0)
              ]),
              l("div", xM, [
                l("pre", {
                  class: le(["content-pre", { "json-content": U(t).isJsonContent() }])
                }, [
                  l("code", null, M(U(t).currentContent.content), 1)
                ], 2)
              ])
            ])) : (S(), D("div", RM, u[7] || (u[7] = [
              l("div", { class: "alert alert-danger" }, [
                l("i", { class: "fas fa-exclamation-circle me-2" }),
                H(" No content available or failed to load. ")
              ], -1)
            ])))
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), MM = /* @__PURE__ */ Zt(PM, [["__scopeId", "data-v-8148176a"]]), VM = { class: "mb-3" }, LM = ["placeholder"], FM = { class: "mb-3" }, BM = {
  key: 0,
  class: "text-center text-muted py-3"
}, $M = {
  key: 1,
  class: "resource-type-list"
}, jM = ["value", "id", "disabled"], UM = ["for"], HM = { class: "mb-3" }, WM = { class: "form-check" }, KM = { class: "form-check" }, zM = { class: "d-flex align-items-center mb-2" }, qM = { key: 0 }, YM = { class: "mb-2" }, XM = { class: "small text-muted" }, GM = { key: 1 }, QM = { class: "small text-muted" }, JM = { key: 0 }, ZM = { key: 1 }, eV = { class: "d-flex gap-2 justify-content-end" }, tV = ["onClick"], nV = ["onClick", "disabled"], sV = /* @__PURE__ */ Ce({
  __name: "ArchiveOptionsModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {},
    estimatedResources: { default: 0 }
  },
  emits: ["create"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = Zn(), r = n, i = $(null), a = $({
      archive_name: "",
      resource_types: [],
      background_mode: !1
    }), c = j(() => {
      const m = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
      return (s.archiveType === "selected" ? o.mrns.filter((b) => s.selectedMrns.includes(b.mrn)) : o.mrns).forEach((b) => {
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([_, A]) => {
          m.add(_), A.is_archivable && v.add(_);
        }) : b.resources.forEach((_) => {
          _.status !== "Deleted" && (m.add(_.name), _.status === "Completed" && v.add(_.name));
        });
      }), Array.from(m).sort().map((b) => ({
        name: b,
        isAvailable: v.has(b)
      }));
    }), f = j(() => {
      const m = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `fhir_archive_${s.archiveType === "selected" ? "selected" : "all"}_${m}`;
    }), u = j(() => {
      const m = a.value.resource_types || [], v = s.archiveType === "selected" ? o.mrns.filter((b) => s.selectedMrns.includes(b.mrn)) : o.mrns;
      let y = 0;
      return v.forEach((b) => {
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([_, A]) => {
          m.length === 0 ? A.is_archivable && (y += A.completed_count) : m.includes(_) && A.is_archivable && (y += A.completed_count);
        }) : b.resources.forEach((_) => {
          _.status === "Completed" && (m.length === 0 || m.includes(_.name)) && (y += 1);
        });
      }), y;
    }), d = j(() => {
      const m = c.value.filter((y) => y.isAvailable), v = c.value.length;
      return {
        availableTypes: m.length,
        totalTypes: v
      };
    }), p = j(() => !(a.value.archive_name && !/^[a-zA-Z0-9_-]+$/.test(a.value.archive_name.trim()) || s.archiveType === "selected" && s.selectedMrns.length === 0)), h = async () => (a.value = {
      archive_name: "",
      resource_types: [],
      background_mode: !1
      // Will be calculated dynamically
    }, a.value.background_mode = u.value > 50, await i.value?.show() ?? !1), g = (m) => {
      if (!p.value) return;
      const v = { ...a.value };
      v.archive_name && (v.archive_name = v.archive_name.trim()), v.resource_types && v.resource_types.length === 0 && delete v.resource_types, r("create", v, s.archiveType, s.selectedMrns), m(!0);
    };
    return t({ show: h }), (m, v) => {
      const y = Je("b-modal");
      return S(), Ze(y, {
        ref_key: "archiveOptionsModal",
        ref: i
      }, {
        title: pe(() => v[4] || (v[4] = [
          H("Archive Options")
        ])),
        footer: pe(({ hide: b }) => [
          l("div", eV, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (_) => b(!1)
            }, v[16] || (v[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, tV),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (_) => g(b),
              disabled: !p.value
            }, v[17] || (v[17] = [
              l("i", { class: "fas fa-archive fa-fw me-1" }, null, -1),
              H("Create Archive ")
            ]), 8, nV)
          ])
        ]),
        default: pe(() => [
          l("div", null, [
            l("div", VM, [
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
              }, null, 8, LM), [
                [Co, a.value.archive_name]
              ]),
              v[6] || (v[6] = l("div", { class: "form-text" }, "Optional custom name for the archive file (without extension)", -1))
            ]),
            l("div", FM, [
              v[8] || (v[8] = l("label", { class: "form-label" }, "Resource Types", -1)),
              v[9] || (v[9] = l("div", { class: "form-text mb-2" }, "Select which resource types to include", -1)),
              c.value.length === 0 ? (S(), D("div", BM, v[7] || (v[7] = [
                l("i", { class: "fas fa-info-circle me-2" }, null, -1),
                H(" No resource types found ")
              ]))) : (S(), D("div", $M, [
                (S(!0), D(we, null, Xe(c.value, (b) => (S(), D("div", {
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
                  }, null, 8, jM), [
                    [IE, a.value.resource_types]
                  ]),
                  l("label", {
                    class: "form-check-label",
                    for: `resource-${b.name}`
                  }, M(b.name), 9, UM)
                ]))), 128))
              ]))
            ]),
            l("div", HM, [
              v[12] || (v[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
              l("div", WM, [
                nt(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "immediate-mode",
                  value: !1,
                  "onUpdate:modelValue": v[2] || (v[2] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [Oo, a.value.background_mode]
                ]),
                v[10] || (v[10] = l("label", {
                  class: "form-check-label",
                  for: "immediate-mode"
                }, [
                  l("strong", null, "Immediate Processing"),
                  l("div", { class: "small text-muted" }, "Process archive immediately (recommended for small selections)")
                ], -1))
              ]),
              l("div", KM, [
                nt(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "background-mode",
                  value: !0,
                  "onUpdate:modelValue": v[3] || (v[3] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [Oo, a.value.background_mode]
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
              class: le(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", zM, [
                l("i", {
                  class: le([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                v[13] || (v[13] = l("strong", null, "Archive Summary", -1))
              ]),
              u.value > 0 ? (S(), D("div", qM, [
                l("div", YM, [
                  l("strong", null, M(u.value), 1),
                  v[14] || (v[14] = H(" completed resources will be included "))
                ]),
                l("div", XM, M(d.value.availableTypes) + " of " + M(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (S(), D("div", GM, [
                v[15] || (v[15] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for archiving")
                ], -1)),
                l("div", QM, [
                  d.value.totalTypes === 0 ? (S(), D("span", JM, " No resource types found ")) : (S(), D("span", ZM, M(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), oV = { key: 0 }, rV = { key: 1 }, iV = { class: "row" }, aV = { class: "col-md-6" }, lV = { class: "card" }, cV = { class: "card-body" }, uV = { class: "list-unstyled mb-0" }, dV = { key: 0 }, fV = { class: "col-md-6" }, pV = { class: "card" }, hV = { class: "card-body" }, mV = { key: 0 }, gV = { key: 1 }, vV = { key: 2 }, _V = { class: "alert alert-danger" }, yV = { class: "d-flex gap-2 justify-content-end" }, bV = ["onClick"], EV = ["onClick"], wV = ["onClick"], AV = /* @__PURE__ */ Ce({
  __name: "ArchiveCreationModal",
  setup(e, { expose: t }) {
    const n = $(null), s = $(null), o = (a) => {
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
      return S(), Ze(f, {
        ref_key: "archiveCreationModal",
        ref: n,
        size: "lg",
        "hide-footer": ""
      }, {
        title: pe(() => c[0] || (c[0] = [
          H("Archive Creation")
        ])),
        footer: pe(({ hide: u }) => [
          l("div", yV, [
            s.value ? s.value.success ? (S(), D(we, { key: 1 }, [
              s.value.processing_mode === "immediate" && s.value.download_url ? (S(), D("button", {
                key: 0,
                type: "button",
                class: "btn btn-sm btn-primary",
                onClick: r
              }, c[14] || (c[14] = [
                l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
                H("Download Now ")
              ]))) : ue("", !0),
              l("button", {
                type: "button",
                class: "btn btn-sm btn-secondary",
                onClick: (d) => u(!0)
              }, c[15] || (c[15] = [
                l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
                H("Done ")
              ]), 8, EV)
            ], 64)) : (S(), D("button", {
              key: 2,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[16] || (c[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Close ")
            ]), 8, wV)) : (S(), D("button", {
              key: 0,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[13] || (c[13] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, bV))
          ])
        ]),
        default: pe(() => [
          s.value ? s.value.success ? (S(), D("div", rV, [
            c[10] || (c[10] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-check-circle text-success",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Created Successfully")
            ], -1)),
            l("div", iV, [
              l("div", aV, [
                l("div", lV, [
                  l("div", cV, [
                    c[6] || (c[6] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                    l("ul", uV, [
                      l("li", null, [
                        c[2] || (c[2] = l("strong", null, "Archive ID:", -1)),
                        H(" " + M(s.value.archive_id), 1)
                      ]),
                      l("li", null, [
                        c[3] || (c[3] = l("strong", null, "Resources:", -1)),
                        H(" " + M(s.value.total_resources), 1)
                      ]),
                      s.value.file_size ? (S(), D("li", dV, [
                        c[4] || (c[4] = l("strong", null, "Size:", -1)),
                        H(" " + M(i(s.value.file_size)), 1)
                      ])) : ue("", !0),
                      l("li", null, [
                        c[5] || (c[5] = l("strong", null, "Mode:", -1)),
                        H(" " + M(s.value.processing_mode), 1)
                      ])
                    ])
                  ])
                ])
              ]),
              l("div", fV, [
                l("div", pV, [
                  l("div", hV, [
                    c[9] || (c[9] = l("h6", { class: "card-title" }, "Status", -1)),
                    s.value.processing_mode === "immediate" ? (S(), D("div", mV, c[7] || (c[7] = [
                      l("span", { class: "badge bg-success" }, [
                        l("i", { class: "fas fa-check me-1" }),
                        H("Ready for Download ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is ready for immediate download.", -1)
                    ]))) : (S(), D("div", gV, c[8] || (c[8] = [
                      l("span", { class: "badge bg-info" }, [
                        l("i", { class: "fas fa-clock me-1" }),
                        H("Processing in Background ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is being processed. You'll be able to download it when complete.", -1)
                    ])))
                  ])
                ])
              ])
            ])
          ])) : (S(), D("div", vV, [
            c[12] || (c[12] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-exclamation-triangle text-danger",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Creation Failed")
            ], -1)),
            l("div", _V, [
              c[11] || (c[11] = l("strong", null, "Error:", -1)),
              H(" " + M(s.value.message), 1)
            ])
          ])) : (S(), D("div", oV, c[1] || (c[1] = [
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
}), SV = { class: "mb-3" }, CV = ["for"], OV = ["id", "value", "placeholder"], TV = {
  key: 0,
  class: "invalid-feedback"
}, NV = {
  key: 1,
  class: "form-text"
}, DV = /* @__PURE__ */ Ce({
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
    return (s, o) => (S(), D("div", SV, [
      l("label", {
        for: s.inputId,
        class: "form-label"
      }, "Archive Name", 8, CV),
      l("input", {
        type: "text",
        class: le(["form-control", { "is-invalid": n.value }]),
        id: s.inputId,
        value: s.modelValue,
        onInput: o[0] || (o[0] = (r) => s.$emit("update:modelValue", r.target.value)),
        placeholder: s.placeholder,
        maxlength: "100"
      }, null, 42, OV),
      n.value ? (S(), D("div", TV, M(s.errorMessage), 1)) : ue("", !0),
      s.showHelp ? (S(), D("div", NV, M(s.helpText), 1)) : ue("", !0)
    ]));
  }
}), kV = { class: "mb-3" }, xV = {
  key: 0,
  class: "text-center text-muted py-3"
}, RV = {
  key: 1,
  class: "resource-type-list"
}, IV = {
  key: 0,
  class: "form-check mb-2"
}, PV = ["checked", "indeterminate"], MV = ["value", "checked", "id", "disabled"], VV = ["for"], LV = /* @__PURE__ */ Ce({
  __name: "ResourceTypesSelector",
  props: {
    selectedTypes: {},
    availableTypes: {},
    showSelectAll: { type: Boolean, default: !0 }
  },
  emits: ["update:selectedTypes"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = $(null), r = j(() => {
      const c = n.availableTypes.filter((u) => u.isAvailable).map((u) => u.name);
      if (c.length === 0)
        return { checked: !1, indeterminate: !1 };
      const f = c.filter(
        (u) => n.selectedTypes.includes(u)
      );
      return f.length === 0 ? { checked: !1, indeterminate: !1 } : f.length === c.length ? { checked: !0, indeterminate: !1 } : { checked: !1, indeterminate: !0 };
    });
    mt(r, (c) => {
      qs(() => {
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
    return Nt(() => {
      if (n.selectedTypes.length === 0 && n.availableTypes.length > 0) {
        const c = n.availableTypes.filter((f) => f.isAvailable).map((f) => f.name);
        c.length > 0 && s("update:selectedTypes", c);
      }
    }), (c, f) => (S(), D("div", kV, [
      f[2] || (f[2] = l("label", { class: "form-label" }, "Resource Types", -1)),
      f[3] || (f[3] = l("div", { class: "form-text mb-2" }, [
        H(" Select which resource types to include "),
        l("br"),
        l("small", { class: "text-muted" }, "Note: No selection will download all available resources")
      ], -1)),
      c.availableTypes.length === 0 ? (S(), D("div", xV, f[0] || (f[0] = [
        l("i", { class: "fas fa-info-circle me-2" }, null, -1),
        H(" No resource types found ")
      ]))) : (S(), D("div", RV, [
        c.showSelectAll ? (S(), D("div", IV, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: r.value.checked,
            indeterminate: r.value.indeterminate,
            onChange: i,
            id: "select-all-types",
            ref_key: "selectAllCheckbox",
            ref: o
          }, null, 40, PV),
          f[1] || (f[1] = l("label", {
            class: "form-check-label fw-bold",
            for: "select-all-types"
          }, " Select All ", -1))
        ])) : ue("", !0),
        (S(!0), D(we, null, Xe(c.availableTypes, (u) => (S(), D("div", {
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
          }, null, 40, MV),
          l("label", {
            class: "form-check-label",
            for: `resource-${u.name}`
          }, M(u.name), 9, VV)
        ]))), 128))
      ]))
    ]));
  }
}), FV = { class: "mb-3" }, BV = { class: "bg-light p-3 rounded" }, $V = { key: 0 }, jV = { class: "small text-muted" }, UV = { key: 0 }, HV = { key: 1 }, WV = { class: "d-flex align-items-center mb-2" }, KV = { key: 0 }, zV = { class: "mb-2" }, qV = { class: "small text-muted" }, YV = { key: 1 }, XV = { class: "small text-muted" }, GV = { key: 0 }, QV = { key: 1 }, JV = { class: "d-flex align-items-center mb-2" }, ZV = { key: 0 }, eL = { class: "mb-2" }, tL = { key: 1 }, nL = { class: "mb-1" }, sL = { key: 0 }, oL = { key: 1 }, rL = { class: "small text-muted" }, iL = { key: 0 }, aL = { class: "d-flex gap-2 justify-content-end" }, lL = ["onClick"], cL = ["onClick", "disabled"], uL = /* @__PURE__ */ Ce({
  __name: "StreamingArchiveModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {}
  },
  setup(e, { expose: t }) {
    const n = e, s = Zn(), o = Au(), r = tn(), i = $(null), a = $({
      mrns: [],
      archive_name: "",
      resource_types: []
    }), c = j(() => !!s.projectSummary), f = j(() => s.projectSummary?.overall_status_counts?.completed ?? 0), u = j(() => {
      const A = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
      return (n.archiveType === "selected" ? s.mrns.filter((x) => n.selectedMrns.includes(x.mrn)) : s.mrns).forEach((x) => {
        x.status_summary ? Object.entries(x.status_summary.resource_type_statuses).forEach(([I, k]) => {
          A.add(I), k.is_archivable && T.add(I);
        }) : x.resources.forEach((I) => {
          I.status !== "Deleted" && (A.add(I.name), I.status === "Completed" && T.add(I.name));
        });
      }), Array.from(A).sort().map((x) => ({
        name: x,
        isAvailable: T.has(x)
      }));
    }), d = j(() => {
      const A = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `streaming_archive_${n.archiveType === "selected" ? "selected" : "all"}_${A}`;
    }), p = j(() => {
      if (n.archiveType === "all")
        return f.value;
      const A = a.value.resource_types || [], T = n.archiveType === "selected" ? s.mrns.filter((x) => n.selectedMrns.includes(x.mrn)) : s.mrns;
      let N = 0;
      return T.forEach((x) => {
        x.status_summary ? Object.entries(x.status_summary.resource_type_statuses).forEach(([I, k]) => {
          A.length === 0 ? k.is_archivable && (N += k.completed_count) : A.includes(I) && k.is_archivable && (N += k.completed_count);
        }) : x.resources.forEach((I) => {
          I.status === "Completed" && (A.length === 0 || A.includes(I.name)) && (N += 1);
        });
      }), N;
    }), h = j(() => {
      const A = u.value.filter((N) => N.isAvailable), T = u.value.length;
      return {
        availableTypes: A.length,
        totalTypes: T
      };
    }), g = j(() => {
      if (!a.value.archive_name)
        return "";
      const A = a.value.archive_name.trim();
      return A.length === 0 || /^[a-zA-Z0-9_-]+$/.test(A) ? "" : "Archive name contains invalid characters. Only letters, numbers, hyphens, and underscores are allowed.";
    }), m = j(() => !(g.value || n.archiveType === "selected" && n.selectedMrns.length === 0)), v = (A) => {
      a.value.resource_types = A;
    }, y = async () => (a.value = {
      mrns: n.archiveType === "selected" ? n.selectedMrns : [],
      archive_name: "",
      resource_types: []
    }, await i.value?.show() ?? !1), b = () => a.value.archive_name || d.value, _ = async (A) => {
      if (!m.value) return;
      const T = b();
      try {
        o.startStreaming(T), r.showInfo(`Started streaming download: ${T}`), A(!0);
        const N = {
          ...a.value,
          mrns: n.archiveType === "selected" ? n.selectedMrns : []
        };
        N.archive_name || delete N.archive_name, N.resource_types?.length || delete N.resource_types;
        let x;
        n.archiveType === "selected" ? x = await Fe.streamSelectedArchive(n.selectedMrns, N) : x = await Fe.streamAllArchive(N);
        const I = new Blob([x.data]), k = window.URL.createObjectURL(I), w = document.createElement("a");
        w.href = k, w.download = `${T}.zip`, document.body.appendChild(w), w.click(), document.body.removeChild(w), window.URL.revokeObjectURL(k);
        const R = o.finishStreaming();
        r.showSuccess(`Download completed: ${T} (${R}s)`);
      } catch (N) {
        o.finishStreaming(), r.showError(`Streaming download failed: ${N.message}`);
      }
    };
    return t({ show: y }), (A, T) => {
      const N = Je("b-modal");
      return S(), Ze(N, {
        ref_key: "streamingArchiveModal",
        ref: i,
        size: "lg"
      }, {
        title: pe(() => T[1] || (T[1] = [
          l("i", { class: "fas fa-download text-primary me-2" }, null, -1),
          H(" Archive Download ")
        ])),
        footer: pe(({ hide: x }) => [
          l("div", aL, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (I) => x(!1)
            }, T[12] || (T[12] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, lL),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (I) => _(x),
              disabled: !m.value || U(o).isStreamingActive
            }, [
              T[13] || (T[13] = l("i", { class: "fas fa-download fa-fw me-1" }, null, -1)),
              H(" " + M(U(o).isStreamingActive ? "Downloading..." : "Download"), 1)
            ], 8, cL)
          ])
        ]),
        default: pe(() => [
          l("div", null, [
            T[11] || (T[11] = l("div", { class: "alert alert-info mb-4" }, [
              l("i", { class: "fas fa-info-circle me-2" }),
              l("strong", null, "Download"),
              l("div", { class: "small" }, " Your archive will be generated and downloaded immediately without storing on the server. ")
            ], -1)),
            ce(DV, {
              modelValue: a.value.archive_name,
              "onUpdate:modelValue": T[0] || (T[0] = (x) => a.value.archive_name = x),
              placeholder: d.value,
              "show-help": !0,
              "help-text": "Archive will be downloaded immediately as [name].zip",
              "input-id": "streaming-archive-name",
              "error-message": g.value
            }, null, 8, ["modelValue", "placeholder", "error-message"]),
            ce(LV, {
              "selected-types": a.value.resource_types || [],
              "available-types": u.value,
              "onUpdate:selectedTypes": v,
              "show-select-all": !0
            }, null, 8, ["selected-types", "available-types"]),
            l("div", FV, [
              T[4] || (T[4] = l("label", { class: "form-label" }, "Selected Records", -1)),
              l("div", BV, [
                A.archiveType === "selected" ? (S(), D("div", $V, [
                  l("strong", null, M(A.selectedMrns.length), 1),
                  T[2] || (T[2] = H(" selected MRNs ")),
                  l("div", jV, [
                    H(M(A.selectedMrns.slice(0, 3).join(", ")) + " ", 1),
                    A.selectedMrns.length > 3 ? (S(), D("span", UV, " and " + M(A.selectedMrns.length - 3) + " more... ", 1)) : ue("", !0)
                  ])
                ])) : (S(), D("div", HV, T[3] || (T[3] = [
                  l("strong", null, "All project records", -1),
                  l("div", { class: "small text-muted" }, "Complete project dataset", -1)
                ])))
              ])
            ]),
            A.archiveType === "selected" ? (S(), D("div", {
              key: 0,
              class: le(["alert", p.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", WV, [
                l("i", {
                  class: le([p.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                T[5] || (T[5] = l("strong", null, "Streaming Summary", -1))
              ]),
              p.value > 0 ? (S(), D("div", KV, [
                l("div", zV, [
                  l("strong", null, M(p.value), 1),
                  T[6] || (T[6] = H(" completed resources will be streamed "))
                ]),
                l("div", qV, M(h.value.availableTypes) + " of " + M(h.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (S(), D("div", YV, [
                T[7] || (T[7] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for streaming")
                ], -1)),
                l("div", XV, [
                  h.value.totalTypes === 0 ? (S(), D("span", GV, " No resource types found ")) : (S(), D("span", QV, M(h.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)) : (S(), D("div", {
              key: 1,
              class: le(["alert", f.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", JV, [
                l("i", {
                  class: le([f.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                T[8] || (T[8] = l("strong", null, "Streaming Summary (All Records)", -1))
              ]),
              c.value && f.value > 0 ? (S(), D("div", ZV, [
                l("div", eL, [
                  l("strong", null, M(f.value), 1),
                  T[9] || (T[9] = H(" completed resources across the project will be streamed "))
                ]),
                T[10] || (T[10] = l("div", { class: "small text-muted" }, " Estimate derived from project summary. Resource-type filters are not reflected in this estimate. ", -1))
              ])) : (S(), D("div", tL, [
                l("div", nL, [
                  c.value ? (S(), D("strong", sL, "No completed resources available for streaming")) : (S(), D("strong", oL, "Project summary unavailable"))
                ]),
                l("div", rL, [
                  c.value ? ue("", !0) : (S(), D("span", iL, " Global counts could not be loaded. The download will still include all project data. "))
                ])
              ]))
            ], 2))
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), dL = {
  key: 0,
  class: "alert alert-warning"
}, fL = { class: "table-responsive" }, pL = { class: "table table-sm align-middle" }, hL = { class: "d-flex justify-content-end" }, mL = ["onClick"], gL = /* @__PURE__ */ Ce({
  __name: "BulkMrnErrorsModal",
  setup(e, { expose: t }) {
    const n = $(null), s = $([]), o = $(null);
    return t({ show: (i, a, c) => {
      s.value = i, o.value = {
        added: a ?? 0,
        failed: c ?? i.length
      }, n.value?.show();
    } }), (i, a) => {
      const c = Je("b-modal");
      return S(), Ze(c, {
        ref_key: "errorsModal",
        ref: n,
        size: "lg"
      }, {
        title: pe(() => a[0] || (a[0] = [
          H("Some MRNs Could Not Be Added")
        ])),
        footer: pe(({ hide: f }) => [
          l("div", hL, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (u) => f(!0)
            }, a[3] || (a[3] = [
              l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
              H("Close ")
            ]), 8, mL)
          ])
        ]),
        default: pe(() => [
          o.value ? (S(), D("div", dL, [
            a[1] || (a[1] = l("strong", null, "Summary:", -1)),
            H(" " + M(o.value.added) + " added, " + M(o.value.failed) + " failed ", 1)
          ])) : ue("", !0),
          l("div", fL, [
            l("table", pL, [
              a[2] || (a[2] = l("thead", null, [
                l("tr", null, [
                  l("th", { style: { width: "35%" } }, "MRN"),
                  l("th", null, "Error")
                ])
              ], -1)),
              l("tbody", null, [
                (S(!0), D(we, null, Xe(s.value, (f, u) => (S(), D("tr", { key: u }, [
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
}), vL = /* @__PURE__ */ Zt(gL, [["__scopeId", "data-v-40a75814"]]), _L = { class: "card" }, yL = { class: "card-header d-flex justify-content-between align-items-center" }, bL = ["disabled"], EL = { class: "card-body" }, wL = {
  key: 0,
  class: "text-center"
}, AL = {
  key: 1,
  class: "row g-3"
}, SL = { class: "col-md-6" }, CL = { class: "border rounded p-3 h-100" }, OL = { class: "row g-2" }, TL = { class: "col-6" }, NL = { class: "text-center" }, DL = { class: "h4 mb-1 text-primary" }, kL = { class: "col-6" }, xL = { class: "text-center" }, RL = { class: "h4 mb-1 text-info" }, IL = { class: "col-md-6" }, PL = { class: "border rounded p-3 h-100" }, ML = { class: "row g-2" }, VL = { class: "text-center" }, LL = { class: "text-muted" }, FL = { class: "col-12" }, BL = { class: "border rounded p-3" }, $L = { class: "mb-2" }, jL = { class: "d-flex justify-content-between align-items-center mb-1" }, UL = { class: "text-muted" }, HL = {
  class: "progress",
  style: { height: "8px" }
}, WL = ["aria-valuenow"], KL = {
  key: 0,
  class: "mb-2"
}, zL = { class: "d-flex justify-content-between align-items-center mb-1" }, qL = { class: "text-muted" }, YL = {
  class: "progress",
  style: { height: "6px" }
}, XL = ["aria-valuenow"], GL = { class: "mb-2" }, QL = { class: "d-flex justify-content-between align-items-center mb-1" }, JL = { class: "text-muted" }, ZL = {
  class: "progress",
  style: { height: "12px" }
}, eF = ["title"], tF = ["title"], nF = ["title"], sF = ["title"], oF = ["title"], rF = {
  class: "d-flex justify-content-start mt-1",
  style: { "font-size": "0.75rem" }
}, iF = {
  key: 0,
  class: "me-3"
}, aF = {
  key: 1,
  class: "me-3"
}, lF = {
  key: 2,
  class: "me-3"
}, cF = {
  key: 3,
  class: "me-3"
}, uF = {
  key: 4,
  class: "me-3"
}, dF = {
  key: 2,
  class: "text-center text-muted"
}, fF = /* @__PURE__ */ Ce({
  __name: "ProjectSummaryWidget",
  setup(e) {
    const t = Zn(), n = $(!1), s = j(() => t.projectSummary), o = j(() => s.value ? Object.values(s.value.overall_status_counts).reduce((p, h) => p + h, 0) : 0), r = j(() => {
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
    return Nt(() => {
      d();
    }), (p, h) => (S(), D("div", _L, [
      l("div", yL, [
        h[0] || (h[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-chart-bar fa-fw" }),
          H(" Project Summary ")
        ], -1)),
        l("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: d,
          disabled: n.value,
          title: "Refresh summary"
        }, [
          l("i", {
            class: le(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, bL)
      ]),
      l("div", EL, [
        n.value ? (S(), D("div", wL, h[1] || (h[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : s.value ? (S(), D("div", AL, [
          l("div", SL, [
            l("div", CL, [
              h[4] || (h[4] = l("h6", { class: "text-muted mb-3" }, "Overall Statistics", -1)),
              l("div", OL, [
                l("div", TL, [
                  l("div", NL, [
                    l("div", DL, M(s.value.total_mrns), 1),
                    h[2] || (h[2] = l("small", { class: "text-muted" }, "Total MRNs", -1))
                  ])
                ]),
                l("div", kL, [
                  l("div", xL, [
                    l("div", RL, M(o.value), 1),
                    h[3] || (h[3] = l("small", { class: "text-muted" }, "Total Resources", -1))
                  ])
                ])
              ])
            ])
          ]),
          l("div", IL, [
            l("div", PL, [
              h[5] || (h[5] = l("h6", { class: "text-muted mb-3" }, "Resource Status", -1)),
              l("div", ML, [
                (S(!0), D(we, null, Xe(s.value.overall_status_counts, (g, m) => (S(), D("div", {
                  key: m,
                  class: "col-6"
                }, [
                  l("div", VL, [
                    l("div", {
                      class: le(["h5 mb-1", f(m)])
                    }, M(g), 3),
                    l("small", LL, M(u(m)), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          l("div", FL, [
            l("div", BL, [
              h[14] || (h[14] = l("h6", { class: "text-muted mb-3" }, "Completion Progress", -1)),
              l("div", $L, [
                l("div", jL, [
                  h[6] || (h[6] = l("small", { class: "text-muted" }, "Overall Completion", -1)),
                  l("small", UL, M(i.value) + "%", 1)
                ]),
                l("div", HL, [
                  l("div", {
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: i.value + "%" }),
                    "aria-valuenow": i.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, WL)
                ])
              ]),
              a.value > 0 ? (S(), D("div", KL, [
                l("div", zL, [
                  h[7] || (h[7] = l("small", { class: "text-muted" }, "Error Rate", -1)),
                  l("small", qL, M(a.value) + "%", 1)
                ]),
                l("div", YL, [
                  l("div", {
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: a.value + "%" }),
                    "aria-valuenow": a.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, XL)
                ])
              ])) : ue("", !0),
              l("div", GL, [
                l("div", QL, [
                  h[8] || (h[8] = l("small", { class: "text-muted" }, "Resource States Breakdown", -1)),
                  l("small", JL, M(r.value) + " active resources", 1)
                ]),
                l("div", ZL, [
                  c.value.completed > 0 ? (S(), D("div", {
                    key: 0,
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: c.value.completed + "%" }),
                    title: `Completed: ${s.value?.overall_status_counts.completed || 0} (${c.value.completed}%)`
                  }, null, 12, eF)) : ue("", !0),
                  c.value.fetching > 0 ? (S(), D("div", {
                    key: 1,
                    class: "progress-bar bg-info",
                    role: "progressbar",
                    style: Vt({ width: c.value.fetching + "%" }),
                    title: `Fetching: ${s.value?.overall_status_counts.fetching || 0} (${c.value.fetching}%)`
                  }, null, 12, tF)) : ue("", !0),
                  c.value.pending > 0 ? (S(), D("div", {
                    key: 2,
                    class: "progress-bar bg-warning",
                    role: "progressbar",
                    style: Vt({ width: c.value.pending + "%" }),
                    title: `Pending: ${s.value?.overall_status_counts.pending || 0} (${c.value.pending}%)`
                  }, null, 12, nF)) : ue("", !0),
                  c.value.failed > 0 ? (S(), D("div", {
                    key: 3,
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: c.value.failed + "%" }),
                    title: `Failed: ${s.value?.overall_status_counts.failed || 0} (${c.value.failed}%)`
                  }, null, 12, sF)) : ue("", !0),
                  c.value.outdated > 0 ? (S(), D("div", {
                    key: 4,
                    class: "progress-bar bg-secondary",
                    role: "progressbar",
                    style: Vt({ width: c.value.outdated + "%" }),
                    title: `Outdated: ${s.value?.overall_status_counts.outdated || 0} (${c.value.outdated}%)`
                  }, null, 12, oF)) : ue("", !0)
                ]),
                l("div", rF, [
                  c.value.completed > 0 ? (S(), D("div", iF, h[9] || (h[9] = [
                    l("span", { class: "badge bg-success me-1" }, "●", -1),
                    H("Completed ")
                  ]))) : ue("", !0),
                  c.value.fetching > 0 ? (S(), D("div", aF, h[10] || (h[10] = [
                    l("span", { class: "badge bg-info me-1" }, "●", -1),
                    H("Fetching ")
                  ]))) : ue("", !0),
                  c.value.pending > 0 ? (S(), D("div", lF, h[11] || (h[11] = [
                    l("span", { class: "badge bg-warning me-1" }, "●", -1),
                    H("Pending ")
                  ]))) : ue("", !0),
                  c.value.failed > 0 ? (S(), D("div", cF, h[12] || (h[12] = [
                    l("span", { class: "badge bg-danger me-1" }, "●", -1),
                    H("Failed ")
                  ]))) : ue("", !0),
                  c.value.outdated > 0 ? (S(), D("div", uF, h[13] || (h[13] = [
                    l("span", { class: "badge bg-secondary me-1" }, "●", -1),
                    H("Outdated ")
                  ]))) : ue("", !0)
                ])
              ])
            ])
          ])
        ])) : (S(), D("div", dF, h[15] || (h[15] = [
          l("i", { class: "fas fa-info-circle fa-fw" }, null, -1),
          H(" No summary data available ")
        ])))
      ])
    ]));
  }
}), pF = /* @__PURE__ */ Zt(fF, [["__scopeId", "data-v-437ee7dd"]]), S_ = /* @__PURE__ */ hn("archive", () => {
  const e = bs(), t = $(!1), n = $([]), s = $(!1), o = $(/* @__PURE__ */ new Set()), r = $({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100]
  }), i = $({
    status: "",
    searchQuery: "",
    processingMode: ""
  }), a = j(() => {
    let N = n.value;
    if (i.value.status && (N = N.filter((x) => x.status === i.value.status)), i.value.processingMode && (N = N.filter((x) => x.processing_mode === i.value.processingMode)), i.value.searchQuery) {
      const x = i.value.searchQuery.toLowerCase();
      N = N.filter(
        (I) => I.file_name.toLowerCase().includes(x) || I.archive_id.toLowerCase().includes(x)
      );
    }
    return N;
  }), c = j(() => {
    const N = (r.value.page - 1) * r.value.limit, x = N + r.value.limit, I = a.value;
    return r.value.total = I.length, r.value.totalPages = Math.ceil(I.length / r.value.limit), r.value.hasNext = r.value.page < r.value.totalPages, r.value.hasPrevious = r.value.page > 1, I.slice(N, x);
  }), f = j(
    () => n.value.filter(
      (N) => N.status === "pending" || N.status === "processing"
    )
  ), u = j(
    () => n.value.filter((N) => N.status === "completed")
  ), d = async () => {
    try {
      t.value = !0;
      const N = await Fe.listArchives();
      N.data.success ? (n.value = N.data.archives || [], r.value.total = N.data.total_count || 0) : e.addError({
        message: N.data.message || "Failed to fetch archives",
        source: "ArchiveStore.fetchArchives",
        timestamp: /* @__PURE__ */ new Date()
      });
    } catch (N) {
      e.addError({
        message: `Failed to fetch archives: ${N}`,
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
    createArchiveSelected: async (N, x = {}) => {
      try {
        s.value = !0;
        const I = await Fe.createArchiveSelected(N, x);
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
    createArchiveAll: async (N = {}) => {
      try {
        s.value = !0;
        const x = await Fe.createArchiveAll(N);
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
    downloadArchive: async (N) => {
      try {
        const x = await Fe.downloadArchive(N), I = new Blob([x.data], { type: "application/zip" }), k = window.URL.createObjectURL(I), w = document.createElement("a"), C = n.value.find((F) => F.archive_id === N)?.file_name || `archive_${N}.zip`;
        w.href = k, w.download = C, document.body.appendChild(w), w.click(), document.body.removeChild(w), window.URL.revokeObjectURL(k);
      } catch (x) {
        e.addError({
          message: `Failed to download archive: ${x}`,
          source: "ArchiveStore.downloadArchive",
          timestamp: /* @__PURE__ */ new Date()
        });
      }
    },
    deleteArchive: async (N) => {
      const x = n.value.findIndex((k) => k.archive_id === N);
      if (x === -1)
        return e.addError({
          message: "Archive not found",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      const I = n.value[x];
      try {
        o.value.add(N), n.value.splice(x, 1);
        const k = await Fe.deleteArchive(N);
        return k.data.success || (n.value.splice(x, 0, I), e.addError({
          message: k.data.message || "Failed to delete archive",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        })), k.data;
      } catch (k) {
        return n.value.splice(x, 0, I), e.addError({
          message: `Failed to delete archive: ${k}`,
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        o.value.delete(N);
      }
    },
    refreshArchiveStatus: async (N) => {
      await d();
    },
    setPage: (N) => {
      N >= 1 && N <= r.value.totalPages && (r.value.page = N);
    },
    setLimit: async (N) => {
      r.value.limit = N, r.value.page = 1, await d();
    },
    setFilter: (N, x) => {
      i.value[N] = x, r.value.page = 1;
    },
    clearFilters: () => {
      i.value.status = "", i.value.searchQuery = "", i.value.processingMode = "", r.value.page = 1;
    },
    isArchiveDeleting: (N) => o.value.has(N)
  };
}), hF = { class: "p-0" }, mF = {
  key: 0,
  class: "mb-4"
}, gF = {
  key: 1,
  class: "d-flex justify-content-between align-items-center mt-3"
}, vF = { class: "text-muted" }, _F = { class: "d-flex gap-2" }, yF = /* @__PURE__ */ Ce({
  __name: "ResourcesPage",
  setup(e) {
    const t = Zn(), n = w_(), s = S_(), o = tn(), r = $(null), i = $(null), a = $(null), c = $(null), f = $(null);
    mt(() => n.archiveModalVisible, async (y) => {
      y && (await i.value?.show(), n.hideArchiveModal());
    }), mt(() => n.streamingModalVisible, async (y) => {
      y && (await c.value?.show(), n.hideStreamingModal());
    });
    const u = j({
      get: () => t.pagination.page,
      set: (y) => t.setPage(y)
    }), d = j({
      get: () => t.pagination.limit,
      set: (y) => t.setLimit(y)
    }), p = j(() => t.pagination.total), h = j(() => t.pagination.perPageOptions), g = j(() => {
      const y = t.pagination.total, b = t.pagination.page, _ = t.pagination.limit, A = y === 0 ? 0 : (b - 1) * _ + 1, T = Math.min(b * _, y);
      return { start: A, end: T, total: y };
    }), m = async () => {
      if (r.value) {
        const y = await r.value.show();
        if (y)
          try {
            const b = await t.addMrnsFromString(y), _ = b.added_count || 0, A = b.failed_count || 0;
            A === 0 ? o.showSuccess(`Added ${_} MRN(s).`) : f.value?.show(b.failures, _, A);
          } catch {
            o.showError("Failed to add MRNs");
          }
      }
    }, v = async (y, b, _) => {
      try {
        let A;
        b === "selected" && _ ? A = await s.createArchiveSelected(_, y) : A = await s.createArchiveAll(y), A && (a.value?.show(A), A.success ? o.showSuccess(A.message) : o.showError(A.message));
      } catch (A) {
        console.error("Failed to create archive:", A), o.showError("Failed to create archive");
      }
    };
    return Nt(async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]);
      } catch (y) {
        console.error("Failed to load initial data:", y), o.showError("Failed to load initial data");
      }
    }), (y, b) => {
      const _ = Je("b-pagination"), A = Je("b-pagination-dropdown");
      return S(), D("div", hF, [
        U(n).showSummary ? (S(), D("div", mF, [
          ce(pF)
        ])) : ue("", !0),
        ce(tP, { onAddMrn: m }),
        ce(oM, {
          items: U(t).mrns,
          loading: U(t).loading,
          "selected-mrns": U(t).selectedMrns,
          "all-selected": U(t).allSelected,
          indeterminate: U(t).indeterminate,
          onToggleSelectAll: U(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelectAll"]),
        U(t).pagination.total > 0 ? (S(), D("div", gF, [
          l("small", vF, " Showing " + M(g.value.start) + "-" + M(g.value.end) + " of " + M(g.value.total) + " MRNs ", 1),
          l("div", _F, [
            ce(_, {
              size: "sm",
              perPage: d.value,
              totalItems: p.value,
              modelValue: u.value,
              "onUpdate:modelValue": b[0] || (b[0] = (T) => u.value = T)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ce(A, {
              options: h.value,
              modelValue: d.value,
              "onUpdate:modelValue": b[1] || (b[1] = (T) => d.value = T)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : ue("", !0),
        ce(hM, {
          ref_key: "addMrnModal",
          ref: r
        }, null, 512),
        ce(MM),
        (S(), Ze(zr, { to: "body" }, [
          ce(sV, {
            ref_key: "archiveOptionsModal",
            ref: i,
            "selected-mrns": U(n).archiveModalSelectedMrns,
            "archive-type": U(n).archiveModalType,
            onCreate: v
          }, null, 8, ["selected-mrns", "archive-type"]),
          ce(AV, {
            ref_key: "archiveCreationModal",
            ref: a
          }, null, 512),
          ce(uL, {
            ref_key: "streamingArchiveModal",
            ref: c,
            "selected-mrns": U(n).streamingModalSelectedMrns,
            "archive-type": U(n).streamingModalType
          }, null, 8, ["selected-mrns", "archive-type"]),
          ce(vL, {
            ref_key: "bulkMrnErrorsModal",
            ref: f
          }, null, 512)
        ]))
      ]);
    };
  }
}), C_ = /* @__PURE__ */ hn("task", () => {
  const e = bs(), t = $(!1), n = $([]), s = $(!1), o = $(/* @__PURE__ */ new Set()), r = $({
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
  }), a = j(() => {
    let w = n.value;
    if (i.value.status && (w = w.filter((R) => R.status === i.value.status)), i.value.task_type && (w = w.filter((R) => R.key === i.value.task_type)), i.value.search_query) {
      const R = i.value.search_query.toLowerCase();
      w = w.filter(
        (C) => C.id.toLowerCase().includes(R) || C.key.toLowerCase().includes(R)
      );
    }
    return w;
  }), c = j(() => {
    const w = (r.value.page - 1) * r.value.limit, R = w + r.value.limit;
    return a.value.slice(w, R);
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
  })), g = async () => {
    try {
      t.value = !0;
      const R = (await Fe.listTasks(
        r.value.page,
        r.value.limit,
        i.value
      )).data;
      R.success ? (n.value = R.tasks || [], R.pagination && (r.value = { ...r.value, ...R.pagination }), _()) : e.addError({
        message: R.message || "Failed to fetch tasks",
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
  }, m = async () => {
    try {
      s.value = !0;
      const R = (await Fe.performTaskFullSync()).data;
      return R.success ? (await g(), R) : (e.addError({
        message: R.message || "Failed to perform full sync",
        source: "TaskStore.performFullSync",
        timestamp: /* @__PURE__ */ new Date()
      }), R);
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
      const R = (await Fe.retryFailedResources()).data;
      return R.success ? (await g(), R) : (e.addError({
        message: R.message || "Failed to retry failed resources",
        source: "TaskStore.retryFailed",
        timestamp: /* @__PURE__ */ new Date()
      }), R);
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
      const C = (await Fe.getTaskDetails(w)).data;
      return C.success || e.addError({
        message: C.message || "Failed to get task details",
        source: "TaskStore.getTaskDetails",
        timestamp: /* @__PURE__ */ new Date()
      }), C;
    } catch (R) {
      return e.addError({
        message: `Failed to get task details: ${R}`,
        source: "TaskStore.getTaskDetails",
        timestamp: /* @__PURE__ */ new Date()
      }), null;
    }
  }, b = async (w) => {
    const R = n.value.findIndex((F) => F.id === w);
    if (R === -1)
      return e.addError({
        message: "Task not found",
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1;
    const C = n.value[R];
    try {
      o.value.add(w), n.value.splice(R, 1);
      const F = await Fe.deleteTask(w);
      return F.data.success ? !0 : (n.value.splice(R, 0, C), e.addError({
        message: F.data.message || "Failed to delete task",
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1);
    } catch (F) {
      return n.value.splice(R, 0, C), e.addError({
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
    fetchTasks: g,
    performFullSync: m,
    retryFailed: v,
    getTaskDetails: y,
    deleteTask: b,
    refreshTaskStatus: async () => {
      await g();
    },
    updatePagination: _,
    setPage: (w) => {
      w >= 1 && w <= r.value.total_pages && (r.value.page = w);
    },
    setLimit: (w) => {
      r.value.limit = w, r.value.page = 1, _();
    },
    setFilter: (w, R) => {
      i.value[w] = R, r.value.page = 1, _();
    },
    clearFilters: () => {
      i.value.status = "", i.value.task_type = "", i.value.search_query = "", r.value.page = 1, _();
    },
    isTaskDeleting: (w) => o.value.has(w)
  };
}), bF = { class: "card" }, EF = { class: "card-header d-flex justify-content-between align-items-center" }, wF = ["disabled"], AF = { class: "card-body" }, SF = {
  key: 0,
  class: "text-center"
}, CF = {
  key: 1,
  class: "row g-3"
}, OF = { class: "col-md-4" }, TF = { class: "d-flex align-items-center" }, NF = { class: "fw-bold" }, DF = { class: "col-md-4" }, kF = { class: "d-flex align-items-center" }, xF = { class: "fw-bold" }, RF = { class: "col-md-4" }, IF = { class: "d-flex align-items-center" }, PF = { class: "fw-bold" }, MF = { class: "col-12 mt-3" }, VF = { class: "border-top pt-3" }, LF = { class: "row g-3" }, FF = { class: "col-md-3" }, BF = { class: "d-flex align-items-center" }, $F = { class: "fw-bold" }, jF = { class: "col-md-3" }, UF = { class: "d-flex align-items-center" }, HF = { class: "fw-bold" }, WF = { class: "col-md-3" }, KF = { class: "d-flex align-items-center" }, zF = { class: "fw-bold" }, qF = { class: "col-md-3" }, YF = { class: "d-flex align-items-center" }, XF = { class: "fw-bold" }, GF = /* @__PURE__ */ Ce({
  __name: "QueueStatusWidget",
  setup(e) {
    const t = C_(), n = $(!1), s = j(() => t.taskStatusCounts), o = j(() => {
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
    return Nt(async () => {
      await i();
    }), (a, c) => (S(), D("div", bF, [
      l("div", EF, [
        c[0] || (c[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-clock-rotate-left fa-fw" }),
          H(" Background Queue Status ")
        ], -1)),
        l("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: i,
          disabled: n.value,
          title: "Refresh queue status"
        }, [
          l("i", {
            class: le(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, wF)
      ]),
      l("div", AF, [
        n.value ? (S(), D("div", SF, c[1] || (c[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : (S(), D("div", CF, [
          l("div", OF, [
            l("div", TF, [
              c[3] || (c[3] = l("i", { class: "fas fa-check-circle fa-fw text-success me-2" }, null, -1)),
              l("div", null, [
                l("div", NF, M(o.value), 1),
                c[2] || (c[2] = l("small", { class: "text-muted" }, "Queue Health", -1))
              ])
            ])
          ]),
          l("div", DF, [
            l("div", kF, [
              c[5] || (c[5] = l("i", { class: "fas fa-hourglass-half fa-fw text-warning me-2" }, null, -1)),
              l("div", null, [
                l("div", xF, M(s.value.pending), 1),
                c[4] || (c[4] = l("small", { class: "text-muted" }, "Pending Tasks", -1))
              ])
            ])
          ]),
          l("div", RF, [
            l("div", IF, [
              c[7] || (c[7] = l("i", { class: "fas fa-exclamation-triangle fa-fw text-danger me-2" }, null, -1)),
              l("div", null, [
                l("div", PF, M(s.value.failed), 1),
                c[6] || (c[6] = l("small", { class: "text-muted" }, "Failed Tasks", -1))
              ])
            ])
          ]),
          l("div", MF, [
            l("div", VF, [
              l("div", LF, [
                l("div", FF, [
                  l("div", BF, [
                    c[9] || (c[9] = l("i", { class: "fas fa-list fa-fw text-primary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", $F, M(s.value.total), 1),
                      c[8] || (c[8] = l("small", { class: "text-muted" }, "Total Tasks", -1))
                    ])
                  ])
                ]),
                l("div", jF, [
                  l("div", UF, [
                    c[11] || (c[11] = l("i", { class: "fas fa-play fa-fw text-info me-2" }, null, -1)),
                    l("div", null, [
                      l("div", HF, M(s.value.processing), 1),
                      c[10] || (c[10] = l("small", { class: "text-muted" }, "Processing", -1))
                    ])
                  ])
                ]),
                l("div", WF, [
                  l("div", KF, [
                    c[13] || (c[13] = l("i", { class: "fas fa-check fa-fw text-success me-2" }, null, -1)),
                    l("div", null, [
                      l("div", zF, M(s.value.completed), 1),
                      c[12] || (c[12] = l("small", { class: "text-muted" }, "Completed", -1))
                    ])
                  ])
                ]),
                l("div", qF, [
                  l("div", YF, [
                    c[15] || (c[15] = l("i", { class: "fas fa-percentage fa-fw text-secondary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", XF, M(r.value) + "%", 1),
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
}), QF = /* @__PURE__ */ Zt(GF, [["__scopeId", "data-v-e7530d59"]]), JF = { class: "p-3" }, ZF = { class: "d-flex justify-content-between align-items-center mb-4" }, e4 = { class: "d-flex gap-2" }, t4 = ["disabled"], n4 = ["disabled"], s4 = ["disabled"], o4 = { class: "mb-4" }, r4 = { class: "card mb-4" }, i4 = { class: "card-body" }, a4 = { class: "row g-3" }, l4 = { class: "col-md-3" }, c4 = { class: "col-md-3" }, u4 = { class: "col-md-3" }, d4 = { class: "col-md-3" }, f4 = ["value"], p4 = {
  key: 0,
  class: "row mt-3"
}, h4 = { class: "card" }, m4 = { class: "card-body p-0" }, g4 = {
  key: 0,
  class: "text-center py-5"
}, v4 = {
  key: 1,
  class: "d-flex flex-column gap-2 py-5 align-items-center"
}, _4 = { class: "" }, y4 = { class: "text-muted mb-0" }, b4 = { key: 2 }, E4 = { class: "table-responsive" }, w4 = { class: "table table-hover mb-0" }, A4 = { class: "d-flex flex-column" }, S4 = { class: "fw-semibold" }, C4 = {
  key: 0,
  class: "text-muted"
}, O4 = { class: "badge bg-secondary" }, T4 = ["title"], N4 = ["title"], D4 = { class: "text-end" }, k4 = { class: "d-flex gap-2" }, x4 = ["onClick"], R4 = ["disabled", "onClick"], I4 = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, P4 = { class: "text-muted" }, M4 = { class: "d-flex gap-2" }, V4 = { class: "modal-dialog modal-lg" }, L4 = { class: "modal-content" }, F4 = {
  key: 0,
  class: "modal-body"
}, B4 = { class: "row" }, $4 = { class: "col-md-6" }, j4 = { class: "row" }, U4 = { class: "col-sm-8" }, H4 = { class: "col-sm-8" }, W4 = { class: "col-sm-8" }, K4 = { class: "col-sm-8" }, z4 = { class: "col-sm-8" }, q4 = { class: "col-md-6" }, Y4 = { class: "bg-light p-3 rounded small" }, X4 = {
  key: 0,
  class: "row mt-3"
}, G4 = { class: "col-12" }, Q4 = { class: "bg-light p-3 rounded small" }, J4 = /* @__PURE__ */ Ce({
  __name: "TasksPage",
  setup(e) {
    const t = C_(), n = tn(), s = $(""), o = $(""), r = $(""), i = $(null), a = $(null), c = [10, 25, 50, 100], f = j({
      get: () => t.pagination.page,
      set: (R) => t.setPage(R)
    }), u = j({
      get: () => t.pagination.limit,
      set: (R) => t.setLimit(R)
    }), d = j(() => s.value || o.value || r.value), p = j(() => {
      const R = t.filteredTasks.length, C = (t.pagination.page - 1) * t.pagination.limit + 1, F = Math.min(C + t.pagination.limit - 1, R);
      return { start: C, end: F, total: R };
    }), h = async () => {
      try {
        await t.fetchTasks();
      } catch (R) {
        console.error("Failed to refresh tasks:", R), n.showError("Failed to refresh tasks");
      }
    }, g = async () => {
      if (await n.confirmAction(
        "Full Synchronization",
        "Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances."
      )) {
        const C = await t.performFullSync();
        C?.success && n.showSuccess(`Full sync initiated successfully. Task ID: ${C.task_id}`);
      }
    }, m = async () => {
      if (await n.confirmAction(
        "Retry Failed Tasks",
        "Are you sure you want to retry all failed tasks? This will mark them as pending for re-processing."
      )) {
        const C = await t.retryFailed();
        C?.success && n.showSuccess(`Retry operation completed. ${C.statistics?.tasks_created || 0} tasks marked for retry.`);
      }
    }, v = () => {
      t.setFilter("search_query", s.value);
    }, y = () => {
      t.setFilter("status", o.value);
    }, b = () => {
      t.setFilter("task_type", r.value);
    }, _ = () => {
      s.value = "", o.value = "", r.value = "", t.clearFilters();
    }, A = async (R) => {
      i.value = R, new window.bootstrap.Modal(a.value).show();
    }, T = async (R) => {
      await n.confirmAction(
        "Delete Task",
        `Are you sure you want to delete task ${R.id}? This action cannot be undone.`
      ) && await t.deleteTask(R.id) && n.showSuccess("Task deleted successfully.");
    }, N = (R) => {
      if (!R) return "Unknown";
      try {
        const C = new Date(R), fe = (/* @__PURE__ */ new Date()).getTime() - C.getTime(), X = Math.floor(fe / 6e4), re = Math.floor(X / 60), z = Math.floor(re / 24);
        return X < 60 ? `${X}m ago` : re < 24 ? `${re}h ago` : z < 7 ? `${z}d ago` : C.toLocaleDateString();
      } catch {
        return R;
      }
    }, x = (R) => {
      if (!R) return "Unknown";
      try {
        return new Date(R).toLocaleString();
      } catch {
        return R;
      }
    }, I = (R) => ({
      fhir_fetch: "FHIR Fetch",
      full_sync: "Full Sync",
      retry_failed: "Retry Failed",
      archive: "Archive",
      cleanup: "Cleanup"
    })[R] || R, k = (R) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[R] || "badge bg-secondary", w = (R) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[R] || "fas fa-question-circle";
    return Nt(async () => {
      await h();
    }), Uo(() => {
    }), (R, C) => {
      const F = Je("b-pagination"), fe = Je("b-pagination-dropdown");
      return S(), D("div", JF, [
        l("div", ZF, [
          C[9] || (C[9] = l("div", null, [
            l("h4", { class: "mb-1" }, "Task Management"),
            l("p", { class: "text-muted mb-0" }, "Monitor and manage background processing tasks")
          ], -1)),
          l("div", e4, [
            l("button", {
              class: "btn btn-warning btn-sm",
              onClick: g,
              disabled: U(t).operationLoading
            }, [
              l("i", {
                class: le(["fas fa-arrows-rotate fa-fw me-1", { "fa-spin": U(t).operationLoading }])
              }, null, 2),
              C[6] || (C[6] = H(" Full Sync "))
            ], 8, t4),
            l("button", {
              class: "btn btn-outline-warning btn-sm",
              onClick: m,
              disabled: U(t).operationLoading
            }, C[7] || (C[7] = [
              l("i", { class: "fas fa-exclamation-triangle fa-fw me-1" }, null, -1),
              H(" Retry Failed ")
            ]), 8, n4),
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: h,
              disabled: U(t).loading
            }, [
              l("i", {
                class: le(["fas fa-sync-alt fa-fw me-1", { "fa-spin": U(t).loading }])
              }, null, 2),
              C[8] || (C[8] = H(" Refresh "))
            ], 8, s4)
          ])
        ]),
        l("div", o4, [
          ce(QF)
        ]),
        l("div", r4, [
          l("div", i4, [
            l("div", a4, [
              l("div", l4, [
                C[10] || (C[10] = l("label", { class: "form-label" }, "Search Tasks", -1)),
                nt(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by ID or type...",
                  "onUpdate:modelValue": C[0] || (C[0] = (X) => s.value = X),
                  onInput: v
                }, null, 544), [
                  [Co, s.value]
                ])
              ]),
              l("div", c4, [
                C[12] || (C[12] = l("label", { class: "form-label" }, "Status", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": C[1] || (C[1] = (X) => o.value = X),
                  onChange: y
                }, C[11] || (C[11] = [
                  $l('<option value="">All Statuses</option><option value="pending">Pending</option><option value="processing">Processing</option><option value="completed">Completed</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [ds, o.value]
                ])
              ]),
              l("div", u4, [
                C[14] || (C[14] = l("label", { class: "form-label" }, "Task Type", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": C[2] || (C[2] = (X) => r.value = X),
                  onChange: b
                }, C[13] || (C[13] = [
                  $l('<option value="">All Types</option><option value="fhir_fetch">FHIR Fetch</option><option value="full_sync">Full Sync</option><option value="retry_failed">Retry Failed</option><option value="archive">Archive</option><option value="cleanup">Cleanup</option>', 6)
                ]), 544), [
                  [ds, r.value]
                ])
              ]),
              l("div", d4, [
                C[15] || (C[15] = l("label", { class: "form-label" }, "Per Page", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": C[3] || (C[3] = (X) => u.value = X)
                }, [
                  (S(), D(we, null, Xe(c, (X) => l("option", {
                    key: X,
                    value: X
                  }, M(X), 9, f4)), 64))
                ], 512), [
                  [ds, u.value]
                ])
              ])
            ]),
            d.value ? (S(), D("div", p4, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: _
                }, C[16] || (C[16] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  H("Clear Filters ")
                ]))
              ])
            ])) : ue("", !0)
          ])
        ]),
        l("div", h4, [
          l("div", m4, [
            U(t).loading ? (S(), D("div", g4, C[17] || (C[17] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading tasks...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading tasks...", -1)
            ]))) : U(t).paginatedTasks.length === 0 ? (S(), D("div", v4, [
              C[18] || (C[18] = l("i", {
                class: "fas fa-tasks text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", _4, M(d.value ? "No tasks match your filters" : "No tasks found"), 1),
              l("span", y4, M(d.value ? "Try adjusting your search criteria." : "Tasks will appear here when created."), 1)
            ])) : (S(), D("div", b4, [
              l("div", E4, [
                l("table", w4, [
                  C[20] || (C[20] = l("thead", { class: "table-light" }, [
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
                    (S(!0), D(we, null, Xe(U(t).paginatedTasks, (X) => (S(), D("tr", {
                      key: X.id
                    }, [
                      l("td", null, [
                        l("div", A4, [
                          l("span", S4, M(X.id), 1),
                          X.params.mrn ? (S(), D("small", C4, "MRN: " + M(X.params.mrn), 1)) : ue("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: le(k(X.status))
                        }, [
                          l("i", {
                            class: le([w(X.status), "me-1"])
                          }, null, 2),
                          H(" " + M(X.status.charAt(0).toUpperCase() + X.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", O4, M(I(X.key)), 1)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: x(X.created_at)
                        }, M(N(X.created_at)), 9, T4)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: x(X.updated_at)
                        }, M(N(X.updated_at)), 9, N4)
                      ]),
                      l("td", D4, [
                        l("div", k4, [
                          l("button", {
                            class: "btn btn-outline-info btn-sm btn-icon",
                            onClick: (re) => A(X),
                            title: "View Details"
                          }, C[19] || (C[19] = [
                            l("i", { class: "fas fa-info-circle" }, null, -1)
                          ]), 8, x4),
                          l("button", {
                            class: "btn btn-outline-danger btn-sm btn-icon",
                            title: "Delete Task",
                            disabled: X.status === "processing" || U(t).isTaskDeleting(X.id),
                            onClick: (re) => T(X)
                          }, [
                            l("i", {
                              class: le(["fas", U(t).isTaskDeleting(X.id) ? "fa-spinner fa-spin" : "fa-trash-can"])
                            }, null, 2)
                          ], 8, R4)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        U(t).filteredTasks.length > 0 ? (S(), D("div", I4, [
          l("small", P4, " Showing " + M(p.value.start) + "-" + M(p.value.end) + " of " + M(p.value.total) + " tasks ", 1),
          l("div", M4, [
            ce(F, {
              size: "sm",
              perPage: u.value,
              totalItems: U(t).filteredTasks.length,
              modelValue: f.value,
              "onUpdate:modelValue": C[4] || (C[4] = (X) => f.value = X)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ce(fe, {
              options: c,
              modelValue: u.value,
              "onUpdate:modelValue": C[5] || (C[5] = (X) => u.value = X)
            }, null, 8, ["modelValue"])
          ])
        ])) : ue("", !0),
        l("div", {
          class: "modal fade",
          id: "taskDetailsModal",
          tabindex: "-1",
          ref_key: "taskDetailsModal",
          ref: a
        }, [
          l("div", V4, [
            l("div", L4, [
              C[29] || (C[29] = l("div", { class: "modal-header" }, [
                l("h5", { class: "modal-title" }, "Task Details"),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "data-bs-dismiss": "modal"
                })
              ], -1)),
              i.value ? (S(), D("div", F4, [
                l("div", B4, [
                  l("div", $4, [
                    C[26] || (C[26] = l("h6", null, "Basic Information", -1)),
                    l("dl", j4, [
                      C[21] || (C[21] = l("dt", { class: "col-sm-4" }, "ID:", -1)),
                      l("dd", U4, [
                        l("code", null, M(i.value.id), 1)
                      ]),
                      C[22] || (C[22] = l("dt", { class: "col-sm-4" }, "Type:", -1)),
                      l("dd", H4, M(I(i.value.key)), 1),
                      C[23] || (C[23] = l("dt", { class: "col-sm-4" }, "Status:", -1)),
                      l("dd", W4, [
                        l("span", {
                          class: le(k(i.value.status))
                        }, M(i.value.status.charAt(0).toUpperCase() + i.value.status.slice(1)), 3)
                      ]),
                      C[24] || (C[24] = l("dt", { class: "col-sm-4" }, "Created:", -1)),
                      l("dd", K4, M(x(i.value.created_at)), 1),
                      C[25] || (C[25] = l("dt", { class: "col-sm-4" }, "Updated:", -1)),
                      l("dd", z4, M(x(i.value.updated_at)), 1)
                    ])
                  ]),
                  l("div", q4, [
                    C[27] || (C[27] = l("h6", null, "Parameters", -1)),
                    l("pre", Y4, M(JSON.stringify(i.value.params, null, 2)), 1)
                  ])
                ]),
                Object.keys(i.value.metadata).length > 0 ? (S(), D("div", X4, [
                  l("div", G4, [
                    C[28] || (C[28] = l("h6", null, "Metadata", -1)),
                    l("pre", Q4, M(JSON.stringify(i.value.metadata, null, 2)), 1)
                  ])
                ])) : ue("", !0)
              ])) : ue("", !0),
              C[30] || (C[30] = l("div", { class: "modal-footer" }, [
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
}), Z4 = { key: 0 }, e3 = { class: "card" }, t3 = { class: "card-body" }, n3 = { class: "list-unstyled mb-0" }, s3 = {
  key: 1,
  class: "text-center mt-3"
}, o3 = { class: "d-flex gap-2 justify-content-end" }, r3 = ["onClick", "disabled"], i3 = ["onClick", "disabled"], a3 = /* @__PURE__ */ Ce({
  __name: "ArchiveDeleteModal",
  emits: ["deleted"],
  setup(e, { expose: t, emit: n }) {
    const s = n, o = $(null), r = $(null), i = $(!1), a = async (h) => (r.value = h, i.value = !1, await o.value?.show() ?? !1), c = async (h) => {
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
      const g = 1024, m = ["Bytes", "KB", "MB", "GB"], v = Math.floor(Math.log(h) / Math.log(g));
      return parseFloat((h / Math.pow(g, v)).toFixed(2)) + " " + m[v];
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
      const m = Je("b-modal");
      return S(), Ze(m, {
        ref_key: "deleteModal",
        ref: o
      }, {
        title: pe(() => g[0] || (g[0] = [
          H("Delete Archive")
        ])),
        footer: pe(({ hide: v }) => [
          l("div", o3, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (y) => v(!1),
              disabled: i.value
            }, g[12] || (g[12] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, r3),
            l("button", {
              class: "btn btn-sm btn-danger",
              type: "button",
              onClick: (y) => c(v),
              disabled: i.value
            }, [
              g[13] || (g[13] = l("i", { class: "fas fa-trash fa-fw me-1" }, null, -1)),
              H(" " + M(i.value ? "Deleting..." : "Delete Archive"), 1)
            ], 8, i3)
          ])
        ]),
        default: pe(() => [
          r.value ? (S(), D("div", Z4, [
            g[8] || (g[8] = l("div", { class: "alert alert-warning" }, [
              l("i", { class: "fas fa-exclamation-triangle me-2" }),
              l("strong", null, "Warning:"),
              H(" This action cannot be undone. ")
            ], -1)),
            g[9] || (g[9] = l("p", null, "Are you sure you want to delete this archive?", -1)),
            l("div", e3, [
              l("div", t3, [
                g[7] || (g[7] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                l("ul", n3, [
                  l("li", null, [
                    g[1] || (g[1] = l("strong", null, "Archive ID:", -1)),
                    H(" " + M(r.value.archive_id), 1)
                  ]),
                  l("li", null, [
                    g[2] || (g[2] = l("strong", null, "File Name:", -1)),
                    H(" " + M(r.value.file_name), 1)
                  ]),
                  l("li", null, [
                    g[3] || (g[3] = l("strong", null, "Created:", -1)),
                    H(" " + M(f(r.value.created_at)), 1)
                  ]),
                  l("li", null, [
                    g[4] || (g[4] = l("strong", null, "Size:", -1)),
                    H(" " + M(u(r.value.file_size)), 1)
                  ]),
                  l("li", null, [
                    g[5] || (g[5] = l("strong", null, "Resources:", -1)),
                    H(" " + M(r.value.total_resources), 1)
                  ]),
                  l("li", null, [
                    g[6] || (g[6] = l("strong", null, "Status:", -1)),
                    l("span", {
                      class: le(d(r.value.status))
                    }, [
                      l("i", {
                        class: le([p(r.value.status), "me-1"])
                      }, null, 2),
                      H(" " + M(r.value.status.charAt(0).toUpperCase() + r.value.status.slice(1)), 1)
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
          ])) : ue("", !0),
          i.value ? (S(), D("div", s3, g[11] || (g[11] = [
            l("div", {
              class: "spinner-border spinner-border-sm text-danger me-2",
              role: "status"
            }, [
              l("span", { class: "visually-hidden" }, "Deleting...")
            ], -1),
            l("span", null, "Deleting archive...", -1)
          ]))) : ue("", !0)
        ]),
        _: 1
      }, 512);
    };
  }
}), l3 = { class: "p-3" }, c3 = { class: "d-flex justify-content-between align-items-center mb-4" }, u3 = ["disabled"], d3 = { class: "card mb-4" }, f3 = { class: "card-body" }, p3 = { class: "row g-3" }, h3 = { class: "col-md-3" }, m3 = { class: "col-md-3" }, g3 = { class: "col-md-3" }, v3 = { class: "col-md-3" }, _3 = ["value"], y3 = {
  key: 0,
  class: "row mt-3"
}, b3 = { class: "row mb-4" }, E3 = { class: "col-md-3" }, w3 = { class: "card text-center" }, A3 = { class: "card-body py-3" }, S3 = { class: "card-title text-primary mb-1" }, C3 = { class: "col-md-3" }, O3 = { class: "card text-center" }, T3 = { class: "card-body py-3" }, N3 = { class: "card-title text-success mb-1" }, D3 = { class: "col-md-3" }, k3 = { class: "card text-center" }, x3 = { class: "card-body py-3" }, R3 = { class: "card-title text-warning mb-1" }, I3 = { class: "col-md-3" }, P3 = { class: "card text-center" }, M3 = { class: "card-body py-3" }, V3 = { class: "card-title text-info mb-1" }, L3 = { class: "card" }, F3 = { class: "card-body p-0" }, B3 = {
  key: 0,
  class: "text-center py-5"
}, $3 = {
  key: 1,
  class: "text-center py-5"
}, j3 = { class: "mt-3 mb-2" }, U3 = { class: "text-muted mb-0" }, H3 = { key: 2 }, W3 = { class: "table-responsive" }, K3 = { class: "table table-hover mb-0" }, z3 = { class: "d-flex flex-column" }, q3 = { class: "fw-semibold" }, Y3 = { class: "text-muted" }, X3 = ["title"], G3 = { class: "d-flex flex-column" }, Q3 = {
  key: 0,
  class: "text-danger"
}, J3 = { class: "text-end" }, Z3 = { class: "btn-group btn-group-sm" }, eB = ["onClick"], tB = ["onClick", "disabled"], nB = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, sB = { class: "text-muted" }, oB = { class: "d-flex gap-2" }, rB = /* @__PURE__ */ Ce({
  __name: "ArchivesPage",
  setup(e) {
    const t = S_(), n = tn(), s = $(null), o = $(""), r = $(""), i = $(""), a = j({
      get: () => t.pagination.page,
      set: (k) => t.setPage(k)
    }), c = j({
      get: () => t.pagination.limit,
      set: (k) => t.setLimit(k)
    });
    Nt(async () => {
      await p();
    });
    const f = j(() => o.value || r.value || i.value), u = j(() => {
      const k = t.completedArchives.reduce((w, R) => w + (R.file_size || 0), 0);
      return A(k);
    }), d = j(() => {
      const k = t.filteredArchives.length, w = (t.pagination.page - 1) * t.pagination.limit + 1, R = Math.min(w + t.pagination.limit - 1, k);
      return { start: w, end: R, total: k };
    }), p = async () => {
      try {
        await t.fetchArchives(), n.showSuccess("Archives refreshed successfully");
      } catch (k) {
        console.error("Failed to refresh archives:", k), n.showError("Failed to refresh archives");
      }
    }, h = () => {
      t.setFilter("searchQuery", o.value);
    }, g = () => {
      t.setFilter("status", r.value);
    }, m = () => {
      t.setFilter("processingMode", i.value);
    }, v = () => {
      o.value = "", r.value = "", i.value = "", t.clearFilters();
    }, y = async (k) => {
      try {
        await t.downloadArchive(k.archive_id), n.showSuccess(`Archive ${k.file_name} downloaded successfully`);
      } catch (w) {
        console.error("Failed to download archive:", w), n.showError(`Failed to download archive ${k.file_name}`);
      }
    }, b = async (k) => {
      await s.value?.show(k);
    }, _ = async (k) => {
      try {
        await t.deleteArchive(k), n.showSuccess("Archive deleted successfully");
      } catch (w) {
        console.error("Failed to delete archive:", w), n.showError("Failed to delete archive");
      }
    }, A = (k) => {
      if (k === 0) return "0 Bytes";
      const w = 1024, R = ["Bytes", "KB", "MB", "GB"], C = Math.floor(Math.log(k) / Math.log(w));
      return parseFloat((k / Math.pow(w, C)).toFixed(2)) + " " + R[C];
    }, T = (k) => {
      if (!k) return "Unknown";
      try {
        const w = new Date(k), C = (/* @__PURE__ */ new Date()).getTime() - w.getTime(), F = Math.floor(C / 6e4), fe = Math.floor(F / 60), X = Math.floor(fe / 24);
        return F < 60 ? `${F}m ago` : fe < 24 ? `${fe}h ago` : X < 7 ? `${X}d ago` : w.toLocaleDateString();
      } catch {
        return k;
      }
    }, N = (k) => {
      if (!k) return "Unknown";
      try {
        return new Date(k).toLocaleString();
      } catch {
        return k;
      }
    }, x = (k) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[k] || "badge bg-secondary", I = (k) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[k] || "fas fa-question-circle";
    return mt(() => t.filters, (k) => {
      o.value = k.searchQuery, r.value = k.status, i.value = k.processingMode;
    }, { deep: !0 }), Uo(() => {
    }), (k, w) => {
      const R = Je("b-pagination"), C = Je("b-pagination-dropdown");
      return S(), D("div", l3, [
        l("div", c3, [
          w[7] || (w[7] = l("div", null, [
            l("h4", { class: "mb-1" }, "Archive Management"),
            l("p", { class: "text-muted mb-0" }, "Manage and download your FHIR resource archives")
          ], -1)),
          l("div", null, [
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: p,
              disabled: U(t).loading
            }, [
              l("i", {
                class: le(["fas fa-sync-alt fa-fw me-1", { "fa-spin": U(t).loading }])
              }, null, 2),
              w[6] || (w[6] = H(" Refresh "))
            ], 8, u3)
          ])
        ]),
        l("div", d3, [
          l("div", f3, [
            l("div", p3, [
              l("div", h3, [
                w[8] || (w[8] = l("label", { class: "form-label" }, "Search Archives", -1)),
                nt(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by name or ID...",
                  "onUpdate:modelValue": w[0] || (w[0] = (F) => o.value = F),
                  onInput: h
                }, null, 544), [
                  [Co, o.value]
                ])
              ]),
              l("div", m3, [
                w[10] || (w[10] = l("label", { class: "form-label" }, "Status", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[1] || (w[1] = (F) => r.value = F),
                  onChange: g
                }, w[9] || (w[9] = [
                  $l('<option value="">All Statuses</option><option value="completed">Completed</option><option value="processing">Processing</option><option value="pending">Pending</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [ds, r.value]
                ])
              ]),
              l("div", g3, [
                w[12] || (w[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[2] || (w[2] = (F) => i.value = F),
                  onChange: m
                }, w[11] || (w[11] = [
                  l("option", { value: "" }, "All Modes", -1),
                  l("option", { value: "immediate" }, "Immediate", -1),
                  l("option", { value: "background" }, "Background", -1)
                ]), 544), [
                  [ds, i.value]
                ])
              ]),
              l("div", v3, [
                w[13] || (w[13] = l("label", { class: "form-label" }, "Per Page", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[3] || (w[3] = (F) => c.value = F)
                }, [
                  (S(!0), D(we, null, Xe(U(t).pagination.perPageOptions, (F) => (S(), D("option", {
                    key: F,
                    value: F
                  }, M(F), 9, _3))), 128))
                ], 512), [
                  [ds, c.value]
                ])
              ])
            ]),
            f.value ? (S(), D("div", y3, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: v
                }, w[14] || (w[14] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  H("Clear Filters ")
                ]))
              ])
            ])) : ue("", !0)
          ])
        ]),
        l("div", b3, [
          l("div", E3, [
            l("div", w3, [
              l("div", A3, [
                l("h5", S3, M(U(t).archives.length), 1),
                w[15] || (w[15] = l("p", { class: "card-text small text-muted mb-0" }, "Total Archives", -1))
              ])
            ])
          ]),
          l("div", C3, [
            l("div", O3, [
              l("div", T3, [
                l("h5", N3, M(U(t).completedArchives.length), 1),
                w[16] || (w[16] = l("p", { class: "card-text small text-muted mb-0" }, "Completed", -1))
              ])
            ])
          ]),
          l("div", D3, [
            l("div", k3, [
              l("div", x3, [
                l("h5", R3, M(U(t).pendingArchives.length), 1),
                w[17] || (w[17] = l("p", { class: "card-text small text-muted mb-0" }, "In Progress", -1))
              ])
            ])
          ]),
          l("div", I3, [
            l("div", P3, [
              l("div", M3, [
                l("h5", V3, M(u.value), 1),
                w[18] || (w[18] = l("p", { class: "card-text small text-muted mb-0" }, "Total Size", -1))
              ])
            ])
          ])
        ]),
        l("div", L3, [
          l("div", F3, [
            U(t).loading ? (S(), D("div", B3, w[19] || (w[19] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading archives...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading archives...", -1)
            ]))) : U(t).paginatedArchives.length === 0 ? (S(), D("div", $3, [
              w[20] || (w[20] = l("i", {
                class: "fas fa-archive text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", j3, M(f.value ? "No archives match your filters" : "No archives found"), 1),
              l("p", U3, M(f.value ? "Try adjusting your search criteria." : "Archives will appear here when created."), 1)
            ])) : (S(), D("div", H3, [
              l("div", W3, [
                l("table", K3, [
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
                    (S(!0), D(we, null, Xe(U(t).paginatedArchives, (F) => (S(), D("tr", {
                      key: F.archive_id
                    }, [
                      l("td", null, [
                        l("div", z3, [
                          l("span", q3, M(F.file_name), 1),
                          l("small", Y3, M(F.archive_id), 1)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: le(x(F.status))
                        }, [
                          l("i", {
                            class: le([I(F.status), "me-1"])
                          }, null, 2),
                          H(" " + M(F.status.charAt(0).toUpperCase() + F.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: N(F.created_at)
                        }, M(T(F.created_at)), 9, X3)
                      ]),
                      l("td", null, M(A(F.file_size)), 1),
                      l("td", null, [
                        l("div", G3, [
                          l("span", null, M(F.total_resources), 1),
                          F.failed_files > 0 ? (S(), D("small", Q3, M(F.failed_files) + " failed ", 1)) : ue("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: le(["badge", F.processing_mode === "immediate" ? "bg-info" : "bg-secondary"])
                        }, M(F.processing_mode), 3)
                      ]),
                      l("td", J3, [
                        l("div", Z3, [
                          F.status === "completed" && F.download_url ? (S(), D("button", {
                            key: 0,
                            class: "btn btn-outline-primary",
                            onClick: (fe) => y(F),
                            title: "Download Archive"
                          }, w[21] || (w[21] = [
                            l("i", { class: "fas fa-download" }, null, -1)
                          ]), 8, eB)) : ue("", !0),
                          l("button", {
                            class: "btn btn-outline-danger",
                            onClick: (fe) => b(F),
                            title: "Delete Archive",
                            disabled: U(t).isArchiveDeleting(F.archive_id)
                          }, [
                            l("i", {
                              class: le(["fas", U(t).isArchiveDeleting(F.archive_id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, tB)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        U(t).filteredArchives.length > 0 ? (S(), D("div", nB, [
          l("small", sB, " Showing " + M(d.value.start) + "-" + M(d.value.end) + " of " + M(d.value.total) + " archives ", 1),
          l("div", oB, [
            ce(R, {
              size: "sm",
              perPage: c.value,
              totalItems: U(t).filteredArchives.length,
              modelValue: a.value,
              "onUpdate:modelValue": w[4] || (w[4] = (F) => a.value = F)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ce(C, {
              options: U(t).pagination.perPageOptions,
              modelValue: c.value,
              "onUpdate:modelValue": w[5] || (w[5] = (F) => c.value = F)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : ue("", !0),
        (S(), Ze(zr, { to: "body" }, [
          ce(a3, {
            ref_key: "deleteModal",
            ref: s,
            onDeleted: _
          }, null, 512)
        ]))
      ]);
    };
  }
}), iB = {}, aB = { class: "error-wrapper" }, lB = { class: "mt-5" };
function cB(e, t) {
  const n = Je("router-link");
  return S(), D("div", aB, [
    ke(e.$slots, "title", {}, () => [
      t[0] || (t[0] = l("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    ke(e.$slots, "description", {}, () => [
      t[1] || (t[1] = l("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    ke(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = l("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    l("div", lB, [
      ce(n, {
        to: "/",
        class: "btn btn-sm btn-primary"
      }, {
        default: pe(() => t[3] || (t[3] = [
          l("i", { class: "fas fa-arrow-left fa-fw me-1" }, null, -1),
          l("span", null, "Back to Home", -1)
        ])),
        _: 1,
        __: [3]
      })
    ])
  ]);
}
const uB = /* @__PURE__ */ Zt(iB, [["render", cB], ["__scopeId", "data-v-d4f8fed2"]]), dB = { class: "card shadow-sm" }, fB = { class: "card-body" }, pB = { class: "text-center" }, hB = {
  key: 0,
  class: "lead text-danger"
}, mB = {
  key: 1,
  class: "text-muted"
}, gB = /* @__PURE__ */ Ce({
  __name: "ErrorPage",
  setup(e) {
    const n = Bg().query.message;
    return (s, o) => {
      const r = Je("router-link");
      return S(), D("div", dB, [
        l("div", fB, [
          l("div", pB, [
            o[1] || (o[1] = l("h1", { class: "display-4" }, "Something went wrong", -1)),
            U(n) ? (S(), D("p", hB, "Error: " + M(U(n)), 1)) : (S(), D("p", mB, "We're sorry for the inconvenience. Please try again later.")),
            ce(r, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: pe(() => o[0] || (o[0] = [
                H("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), vB = [
  {
    path: "/",
    component: ZA,
    children: [
      { path: "", name: "home", component: U2 },
      { path: "setup", name: "setup", component: qI },
      { path: "resources", name: "resources", component: yF },
      { path: "tasks", name: "tasks", component: J4 },
      { path: "archives", name: "archives", component: rB },
      { path: "error", name: "error", component: gB },
      { path: "/:pathMatch(.*)*", component: uB }
    ]
  }
];
let Ei;
const Yp = () => Ei || (Ei = HA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: Zw(),
  routes: vB
}), Ei), Eo = {
  HasValidToken: "has_valid_token",
  NoFhirSystem: "no_fhir_system",
  NoValidTokens: "no_valid_tokens"
}, Su = /* @__PURE__ */ hn("fhirAccess", () => {
  const e = bs(), t = $(null), n = $(null), s = $(null), o = $(!1), r = $(null), i = $(null), a = $(Eo.HasValidToken), c = $(null);
  let f = null;
  const u = j(() => !!t.value?.has_any_valid_token), d = j(() => a.value !== Eo.HasValidToken), p = j(() => s.value?.level ?? (u.value ? "info" : "warning")), h = j(() => s.value?.message ?? ""), g = j(() => a.value === Eo.NoFhirSystem), m = async () => {
    try {
      o.value = !0;
      const A = (await Fe.getFhirAccessStatus()).data;
      t.value = A.status, s.value = A.banner, a.value = A.state ?? Eo.HasValidToken, r.value = A.standalone_launch_url ?? null, c.value = A.setup_route ?? null, n.value = A.counts ?? null, i.value = /* @__PURE__ */ new Date();
    } catch (_) {
      e.addError(_, "fhirAccessStore.fetchStatus");
    } finally {
      o.value = !1;
    }
  }, v = async () => {
    await m();
  }, y = (_ = 6e4) => {
    b(), f = window.setInterval(() => {
      m();
    }, _);
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
    setupRoute: c,
    // computed
    hasValidToken: u,
    shouldWarn: d,
    level: p,
    message: h,
    isNoFhirSystem: g,
    // actions
    fetchStatus: m,
    refreshNow: v,
    startPolling: y,
    stopPolling: b
  };
}), _B = {
  key: 0,
  class: "alert alert-danger"
}, yB = { style: { "word-break": "break-all" } }, bB = /* @__PURE__ */ Ce({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = $(), n = bs(), { errors: s } = mn(n), o = (r) => JSON.stringify(r);
    return va(async () => {
      if (s.value?.length === 0) return;
      const r = t.value;
      r && (await r.show(), n.resetErrors());
    }), (r, i) => {
      const a = Je("b-modal");
      return S(), Ze(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: pe(() => i[0] || (i[0] = [
          l("span", null, "Error", -1)
        ])),
        default: pe(() => [
          (S(!0), D(we, null, Xe(U(s), (c, f) => (S(), D(we, { key: f }, [
            c ? (S(), D("div", _B, [
              l("div", yB, M(o(c)), 1)
            ])) : ue("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), EB = {
  key: 0,
  class: "text-muted",
  style: { "margin-left": "8px" }
}, wB = ["disabled"], AB = /* @__PURE__ */ Ce({
  __name: "TokenStatusBanner",
  setup(e) {
    const t = Su(), { banner: n, status: s, counts: o, shouldWarn: r, message: i, loading: a, lastChecked: c, state: f } = mn(t);
    return (u, d) => U(n) ? (S(), D("div", {
      key: 0,
      class: le(["alert", U(r) ? "alert-warning" : "alert-info"]),
      role: "alert",
      style: { "margin-bottom": "10px" }
    }, [
      l("i", {
        class: le(["fas", U(r) ? "fa-exclamation-triangle" : "fa-info-circle"]),
        style: { "margin-right": "8px" }
      }, null, 2),
      l("span", null, M(U(i)), 1),
      U(s) && U(f) !== U(Eo).NoFhirSystem ? (S(), D("span", EB, [
        H(" (Valid: " + M(U(s).valid_count) + " / " + M(U(o)?.project_total ?? U(s).total_project_users ?? U(s).total_users_with_token) + " ", 1),
        U(s).fhir_system_name ? (S(), D(we, { key: 0 }, [
          H(" • System: " + M(U(s).fhir_system_name), 1)
        ], 64)) : ue("", !0),
        U(c) ? (S(), D(we, { key: 1 }, [
          H(" • Updated: " + M(U(c).toLocaleTimeString()), 1)
        ], 64)) : ue("", !0),
        d[1] || (d[1] = H(") "))
      ])) : ue("", !0),
      l("button", {
        class: "btn btn-xs btn-default",
        style: { "margin-left": "10px" },
        disabled: U(a),
        onClick: d[0] || (d[0] = (p) => u.$emit("refresh")),
        title: "Refresh token status"
      }, [
        l("i", {
          class: le(U(a) ? "fas fa-spinner fa-spin" : "fas fa-rotate")
        }, null, 2)
      ], 8, wB)
    ], 2)) : ue("", !0);
  }
}), SB = /* @__PURE__ */ Zt(AB, [["__scopeId", "data-v-ab306f96"]]), CB = {
  key: 0,
  class: "alert alert-warning",
  role: "alert",
  style: { "margin-bottom": "12px" }
}, OB = { class: "d-flex align-items-end justify-content-start mt-2" }, TB = ["href"], NB = {
  key: 1,
  class: "alert alert-info",
  role: "alert",
  style: { "margin-bottom": "12px" }
}, DB = { class: "d-flex align-items-end justify-content-center mt-2" }, kB = ["href"], xB = /* @__PURE__ */ Ce({
  __name: "StandaloneLaunchHelp",
  setup(e) {
    const t = Su(), { shouldWarn: n, launchUrl: s, status: o, state: r, setupRoute: i } = mn(t);
    return (a, c) => U(r) === U(Eo).NoFhirSystem ? (S(), D("div", CB, [
      c[1] || (c[1] = l("i", {
        class: "fas fa-exclamation-triangle",
        style: { "margin-right": "8px" }
      }, null, -1)),
      c[2] || (c[2] = l("span", null, " A FHIR system must be configured before users can authorize access or data can be fetched. Open Setup to select a system. ", -1)),
      l("div", OB, [
        U(i) ? (S(), D("a", {
          key: 0,
          href: U(i),
          class: "btn btn-sm btn-primary",
          style: { "margin-left": "10px" }
        }, c[0] || (c[0] = [
          l("i", { class: "fas fa-gear fa-fw" }, null, -1),
          H(" Open Setup ")
        ]), 8, TB)) : ue("", !0)
      ])
    ])) : U(n) && U(s) ? (S(), D("div", NB, [
      c[5] || (c[5] = l("i", {
        class: "fas fa-info-circle",
        style: { "margin-right": "8px" }
      }, null, -1)),
      l("span", null, [
        c[3] || (c[3] = H(" To enable data fetching, sign in to the EHR and authorize access for this project using Standalone Launch. ")),
        U(o)?.fhir_system_name ? (S(), D(we, { key: 0 }, [
          H(" (System: " + M(U(o).fhir_system_name) + ")", 1)
        ], 64)) : ue("", !0)
      ]),
      l("div", DB, [
        l("a", {
          href: U(s),
          class: "btn btn-sm btn-primary text-light",
          style: { "margin-left": "10px" }
        }, c[4] || (c[4] = [
          l("i", { class: "fas fa-rocket fa-fw" }, null, -1),
          H(" Standalone Launch ")
        ]), 8, kB)
      ])
    ])) : ue("", !0);
  }
}), RB = /* @__PURE__ */ Ce({
  __name: "App",
  setup(e) {
    const t = Go(), n = Su(), { selectedFhirSystem: s } = mn(t);
    return Nt(async () => {
      await t.fetchProjectSettings(), await n.fetchStatus(), n.startPolling(6e4);
    }), Uo(() => {
      n.stopPolling();
    }), mt(s, async () => {
      await n.refreshNow();
    }), (o, r) => {
      const i = Je("router-view");
      return S(), D("div", null, [
        ce(SB, {
          onRefresh: r[0] || (r[0] = (a) => U(n).refreshNow())
        }),
        ce(xB),
        ce(i),
        ce(bB)
      ]);
    };
  }
}), GB = (e) => {
  const t = wa(RB);
  t.config.errorHandler = (o, r, i) => {
    console.error("💥 Vue Error:", o), console.error("📍 Component:", r), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      o instanceof Error ? Yp().push({ name: "error", query: { message: o.message } }) : console.error("Unhandled non-Error exception:", o);
    });
  };
  const n = dw();
  t.use(_R), t.use(n);
  const s = Yp();
  return t.use(s), t.mount(e), t;
};
export {
  GB as default
};
