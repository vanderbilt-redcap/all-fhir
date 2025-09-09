var Yp = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Be = Yp.NODE_ENV !== "production" ? Object.freeze({}) : {}, wo = Yp.NODE_ENV !== "production" ? Object.freeze([]) : [], dt = () => {
}, S_ = () => !1, $r = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ji = (e) => e.startsWith("onUpdate:"), st = Object.assign, Ec = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, C_ = Object.prototype.hasOwnProperty, Fe = (e, t) => C_.call(e, t), ge = Array.isArray, Vs = (e) => jr(e) === "[object Map]", $o = (e) => jr(e) === "[object Set]", Ou = (e) => jr(e) === "[object Date]", Ae = (e) => typeof e == "function", Ge = (e) => typeof e == "string", ln = (e) => typeof e == "symbol", je = (e) => e !== null && typeof e == "object", wc = (e) => (je(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), Xp = Object.prototype.toString, jr = (e) => Xp.call(e), Ac = (e) => jr(e).slice(8, -1), Gp = (e) => jr(e) === "[object Object]", Sc = (e) => Ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dr = /* @__PURE__ */ qn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), O_ = /* @__PURE__ */ qn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ca = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, T_ = /-(\w)/g, _t = ca(
  (e) => e.replace(T_, (t, n) => n ? n.toUpperCase() : "")
), N_ = /\B([A-Z])/g, Kn = ca(
  (e) => e.replace(N_, "-$1").toLowerCase()
), Ws = ca((e) => e.charAt(0).toUpperCase() + e.slice(1)), Os = ca(
  (e) => e ? `on${Ws(e)}` : ""
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
}, Ui = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, D_ = (e) => {
  const t = Ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Tu;
const Ur = () => Tu || (Tu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (ge(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Ge(s) ? I_(s) : Vt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (Ge(e) || je(e))
    return e;
}
const k_ = /;(?![^(]*\))/g, x_ = /:([^]+)/, R_ = /\/\*[^]*?\*\//g;
function I_(e) {
  const t = {};
  return e.replace(R_, "").split(k_).forEach((n) => {
    if (n) {
      const s = n.split(x_);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function le(e) {
  let t = "";
  if (Ge(e))
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
  return t && !Ge(t) && (e.class = le(t)), n && (e.style = Vt(n)), e;
}
const M_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", P_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", V_ = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", L_ = /* @__PURE__ */ qn(M_), F_ = /* @__PURE__ */ qn(P_), B_ = /* @__PURE__ */ qn(V_), $_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", j_ = /* @__PURE__ */ qn($_);
function Qp(e) {
  return !!e || e === "";
}
function U_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Ks(e[s], t[s]);
  return n;
}
function Ks(e, t) {
  if (e === t) return !0;
  let n = Ou(e), s = Ou(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ln(e), s = ln(t), n || s)
    return e === t;
  if (n = ge(e), s = ge(t), n || s)
    return n && s ? U_(e, t) : !1;
  if (n = je(e), s = je(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !Ks(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Cc(e, t) {
  return e.findIndex((n) => Ks(n, t));
}
const Jp = (e) => !!(e && e.__v_isRef === !0), P = (e) => Ge(e) ? e : e == null ? "" : ge(e) || je(e) && (e.toString === Xp || !Ae(e.toString)) ? Jp(e) ? P(e.value) : JSON.stringify(e, Zp, 2) : String(e), Zp = (e, t) => Jp(t) ? Zp(e, t.value) : Vs(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[$a(s, r) + " =>"] = o, n),
    {}
  )
} : $o(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => $a(n))
} : ln(t) ? $a(t) : je(t) && !ge(t) && !Gp(t) ? String(t) : t, $a = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ln(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var qe = {};
function Yt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let mt;
class eh {
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
function th(e) {
  return new eh(e);
}
function nh() {
  return mt;
}
function H_(e, t = !1) {
  mt ? mt.cleanups.push(e) : qe.NODE_ENV !== "production" && !t && Yt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Ke;
const ja = /* @__PURE__ */ new WeakSet();
class sh {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || rh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Nu(this), ih(this);
    const t = Ke, n = rn;
    Ke = this, rn = !0;
    try {
      return this.fn();
    } finally {
      qe.NODE_ENV !== "production" && Ke !== this && Yt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ah(this), Ke = t, rn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Nc(t);
      this.deps = this.depsTail = void 0, Nu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ja.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ol(this) && this.run();
  }
  get dirty() {
    return Ol(this);
  }
}
let oh = 0, fr, pr;
function rh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = pr, pr = e;
    return;
  }
  e.next = fr, fr = e;
}
function Oc() {
  oh++;
}
function Tc() {
  if (--oh > 0)
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
function ih(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ah(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Nc(s), W_(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Ol(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (lh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function lh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sr) || (e.globalVersion = Sr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ol(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ke, s = rn;
  Ke = e, rn = !0;
  try {
    ih(e);
    const o = e.fn(e._value);
    (t.version === 0 || xt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ke = n, rn = s, ah(e), e.flags &= -3;
  }
}
function Nc(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), qe.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Nc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function W_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let rn = !0;
const ch = [];
function cn() {
  ch.push(rn), rn = !1;
}
function un() {
  const e = ch.pop();
  rn = e === void 0 ? !0 : e;
}
function Nu(e) {
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
class K_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ua {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, qe.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Ke || !rn || Ke === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ke)
      n = this.activeLink = new K_(Ke, this), Ke.deps ? (n.prevDep = Ke.depsTail, Ke.depsTail.nextDep = n, Ke.depsTail = n) : Ke.deps = Ke.depsTail = n, uh(n);
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
    Oc();
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
      Tc();
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
const Hi = /* @__PURE__ */ new WeakMap(), Ls = Symbol(
  qe.NODE_ENV !== "production" ? "Object iterate" : ""
), Tl = Symbol(
  qe.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Cr = Symbol(
  qe.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ut(e, t, n) {
  if (rn && Ke) {
    let s = Hi.get(e);
    s || Hi.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new ua()), o.map = s, o.key = n), qe.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function wn(e, t, n, s, o, r) {
  const i = Hi.get(e);
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
  if (Oc(), t === "clear")
    i.forEach(a);
  else {
    const c = ge(e), f = c && Sc(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((d, p) => {
        (p === "length" || p === Cr || !ln(p) && p >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Cr)), t) {
        case "add":
          c ? f && a(i.get("length")) : (a(i.get(Ls)), Vs(e) && a(i.get(Tl)));
          break;
        case "delete":
          c || (a(i.get(Ls)), Vs(e) && a(i.get(Tl)));
          break;
        case "set":
          Vs(e) && a(i.get(Ls));
          break;
      }
  }
  Tc();
}
function z_(e, t) {
  const n = Hi.get(e);
  return n && n.get(t);
}
function ro(e) {
  const t = Te(e);
  return t === e ? t : (ut(t, "iterate", Cr), St(e) ? t : t.map(ht));
}
function da(e) {
  return ut(e = Te(e), "iterate", Cr), e;
}
const q_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ua(this, Symbol.iterator, ht);
  },
  concat(...e) {
    return ro(this).concat(
      ...e.map((t) => ge(t) ? ro(t) : t)
    );
  },
  entries() {
    return Ua(this, "entries", (e) => (e[1] = ht(e[1]), e));
  },
  every(e, t) {
    return Pn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pn(this, "filter", e, t, (n) => n.map(ht), arguments);
  },
  find(e, t) {
    return Pn(this, "find", e, t, ht, arguments);
  },
  findIndex(e, t) {
    return Pn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pn(this, "findLast", e, t, ht, arguments);
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
    return ro(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ha(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Jo(this, "pop");
  },
  push(...e) {
    return Jo(this, "push", e);
  },
  reduce(e, ...t) {
    return Du(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Du(this, "reduceRight", e, t);
  },
  shift() {
    return Jo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pn(this, "some", e, t, void 0, arguments);
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
    return Ua(this, "values", ht);
  }
};
function Ua(e, t, n) {
  const s = da(e), o = s[t]();
  return s !== e && !St(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const Y_ = Array.prototype;
function Pn(e, t, n, s, o, r) {
  const i = da(e), a = i !== e && !St(e), c = i[t];
  if (c !== Y_[t]) {
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
function Du(e, t, n, s) {
  const o = da(e);
  let r = n;
  return o !== e && (St(e) ? n.length > 3 && (r = function(i, a, c) {
    return n.call(this, i, a, c, e);
  }) : r = function(i, a, c) {
    return n.call(this, i, ht(a), c, e);
  }), o[t](r, ...s);
}
function Ha(e, t, n) {
  const s = Te(e);
  ut(s, "iterate", Cr);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Or(n[0]) ? (n[0] = Te(n[0]), s[t](...n)) : o;
}
function Jo(e, t, n = []) {
  cn(), Oc();
  const s = Te(e)[t].apply(e, n);
  return Tc(), un(), s;
}
const X_ = /* @__PURE__ */ qn("__proto__,__v_isRef,__isVue"), dh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ln)
);
function G_(e) {
  ln(e) || (e = String(e));
  const t = Te(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
class fh {
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
      return s === (o ? r ? _h : vh : r ? gh : mh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = ge(t);
    if (!o) {
      let c;
      if (i && (c = q_[n]))
        return c;
      if (n === "hasOwnProperty")
        return G_;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ye(t) ? t : s
    );
    return (ln(n) ? dh.has(n) : X_(n)) || (o || ut(t, "get", n), r) ? a : Ye(a) ? i && Sc(n) ? a : a.value : je(a) ? o ? bh(a) : ds(a) : a;
  }
}
class ph extends fh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const c = Dn(r);
      if (!St(s) && !Dn(s) && (r = Te(r), s = Te(s)), !ge(t) && Ye(r) && !Ye(s))
        return c ? !1 : (r.value = s, !0);
    }
    const i = ge(t) && Sc(n) ? Number(n) < t.length : Fe(t, n), a = Reflect.set(
      t,
      n,
      s,
      Ye(t) ? t : o
    );
    return t === Te(o) && (i ? xt(s, r) && wn(t, "set", n, s, r) : wn(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = Fe(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && wn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ln(n) || !dh.has(n)) && ut(t, "has", n), s;
  }
  ownKeys(t) {
    return ut(
      t,
      "iterate",
      ge(t) ? "length" : Ls
    ), Reflect.ownKeys(t);
  }
}
class hh extends fh {
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
const Q_ = /* @__PURE__ */ new ph(), J_ = /* @__PURE__ */ new hh(), Z_ = /* @__PURE__ */ new ph(!0), ey = /* @__PURE__ */ new hh(!0), Nl = (e) => e, oi = (e) => Reflect.getPrototypeOf(e);
function ty(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = Te(o), i = Vs(r), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, f = o[e](...s), u = n ? Nl : t ? Wi : ht;
    return !t && ut(
      r,
      "iterate",
      c ? Tl : Ls
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
function ri(e) {
  return function(...t) {
    if (qe.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Yt(
        `${Ws(e)} operation ${n}failed: target is readonly.`,
        Te(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ny(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = Te(r), a = Te(o);
      e || (xt(o, a) && ut(i, "get", o), ut(i, "get", a));
      const { has: c } = oi(i), f = t ? Nl : e ? Wi : ht;
      if (c.call(i, o))
        return f(r.get(o));
      if (c.call(i, a))
        return f(r.get(a));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ut(Te(o), "iterate", Ls), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = Te(r), a = Te(o);
      return e || (xt(o, a) && ut(i, "has", o), ut(i, "has", a)), o === a ? r.has(o) : r.has(o) || r.has(a);
    },
    forEach(o, r) {
      const i = this, a = i.__v_raw, c = Te(a), f = t ? Nl : e ? Wi : ht;
      return !e && ut(c, "iterate", Ls), a.forEach((u, d) => o.call(r, f(u), f(d), i));
    }
  };
  return st(
    n,
    e ? {
      add: ri("add"),
      set: ri("set"),
      delete: ri("delete"),
      clear: ri("clear")
    } : {
      add(o) {
        !t && !St(o) && !Dn(o) && (o = Te(o));
        const r = Te(this);
        return oi(r).has.call(r, o) || (r.add(o), wn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !St(r) && !Dn(r) && (r = Te(r));
        const i = Te(this), { has: a, get: c } = oi(i);
        let f = a.call(i, o);
        f ? qe.NODE_ENV !== "production" && ku(i, a, o) : (o = Te(o), f = a.call(i, o));
        const u = c.call(i, o);
        return i.set(o, r), f ? xt(r, u) && wn(i, "set", o, r, u) : wn(i, "add", o, r), this;
      },
      delete(o) {
        const r = Te(this), { has: i, get: a } = oi(r);
        let c = i.call(r, o);
        c ? qe.NODE_ENV !== "production" && ku(r, i, o) : (o = Te(o), c = i.call(r, o));
        const f = a ? a.call(r, o) : void 0, u = r.delete(o);
        return c && wn(r, "delete", o, void 0, f), u;
      },
      clear() {
        const o = Te(this), r = o.size !== 0, i = qe.NODE_ENV !== "production" ? Vs(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
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
    n[o] = ty(o, e, t);
  }), n;
}
function fa(e, t) {
  const n = ny(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Fe(n, o) && o in s ? n : s,
    o,
    r
  );
}
const sy = {
  get: /* @__PURE__ */ fa(!1, !1)
}, oy = {
  get: /* @__PURE__ */ fa(!1, !0)
}, ry = {
  get: /* @__PURE__ */ fa(!0, !1)
}, iy = {
  get: /* @__PURE__ */ fa(!0, !0)
};
function ku(e, t, n) {
  const s = Te(n);
  if (s !== n && t.call(e, s)) {
    const o = Ac(e);
    Yt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const mh = /* @__PURE__ */ new WeakMap(), gh = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ new WeakMap(), _h = /* @__PURE__ */ new WeakMap();
function ay(e) {
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
function ly(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ay(Ac(e));
}
function ds(e) {
  return Dn(e) ? e : pa(
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
    !1,
    Z_,
    oy,
    gh
  );
}
function bh(e) {
  return pa(
    e,
    !0,
    J_,
    ry,
    vh
  );
}
function Sn(e) {
  return pa(
    e,
    !0,
    ey,
    iy,
    _h
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
  const r = ly(e);
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
function an(e) {
  return Dn(e) ? an(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Dn(e) {
  return !!(e && e.__v_isReadonly);
}
function St(e) {
  return !!(e && e.__v_isShallow);
}
function Or(e) {
  return e ? !!e.__v_raw : !1;
}
function Te(e) {
  const t = e && e.__v_raw;
  return t ? Te(t) : e;
}
function as(e) {
  return !Fe(e, "__v_skip") && Object.isExtensible(e) && Ar(e, "__v_skip", !0), e;
}
const ht = (e) => je(e) ? ds(e) : e, Wi = (e) => je(e) ? bh(e) : e;
function Ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function j(e) {
  return Eh(e, !1);
}
function cy(e) {
  return Eh(e, !0);
}
function Eh(e, t) {
  return Ye(e) ? e : new uy(e, t);
}
class uy {
  constructor(t, n) {
    this.dep = new ua(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Te(t), this._value = n ? t : ht(t), this.__v_isShallow = n;
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
    t = s ? t : Te(t), xt(t, n) && (this._rawValue = t, this._value = s ? t : ht(t), qe.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function W(e) {
  return Ye(e) ? e.value : e;
}
const dy = {
  get: (e, t, n) => t === "__v_raw" ? e : W(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ye(o) && !Ye(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function wh(e) {
  return an(e) ? e : new Proxy(e, dy);
}
class fy {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new ua(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function py(e) {
  return new fy(e);
}
function dn(e) {
  qe.NODE_ENV !== "production" && !Or(e) && Yt("toRefs() expects a reactive object but received a plain one.");
  const t = ge(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ah(e, n);
  return t;
}
class hy {
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
    return z_(Te(this._object), this._key);
  }
}
class my {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Ei(e, t, n) {
  return Ye(e) ? e : Ae(e) ? new my(e) : je(e) && arguments.length > 1 ? Ah(e, t, n) : j(e);
}
function Ah(e, t, n) {
  const s = e[t];
  return Ye(s) ? s : new hy(e, t, n);
}
class gy {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ua(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ke !== this)
      return rh(this, !0), !0;
  }
  get value() {
    const t = qe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return lh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : qe.NODE_ENV !== "production" && Yt("Write operation failed: computed value is readonly");
  }
}
function vy(e, t, n = !1) {
  let s, o;
  return Ae(e) ? s = e : (s = e.get, o = e.set), new gy(s, o, n);
}
const ii = {}, Ki = /* @__PURE__ */ new WeakMap();
let Ts;
function _y(e, t = !1, n = Ts) {
  if (n) {
    let s = Ki.get(n);
    s || Ki.set(n, s = []), s.push(e);
  } else qe.NODE_ENV !== "production" && !t && Yt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function yy(e, t, n = Be) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: a, call: c } = n, f = (N) => {
    (n.onWarn || Yt)(
      "Invalid watch source: ",
      N,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (N) => o ? N : St(N) || o === !1 || o === 0 ? jn(N, 1) : jn(N);
  let d, p, h, m, v = !1, _ = !1;
  if (Ye(e) ? (p = () => e.value, v = St(e)) : an(e) ? (p = () => u(e), v = !0) : ge(e) ? (_ = !0, v = e.some((N) => an(N) || St(N)), p = () => e.map((N) => {
    if (Ye(N))
      return N.value;
    if (an(N))
      return u(N);
    if (Ae(N))
      return c ? c(N, 2) : N();
    qe.NODE_ENV !== "production" && f(N);
  })) : Ae(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (h) {
      cn();
      try {
        h();
      } finally {
        un();
      }
    }
    const N = Ts;
    Ts = d;
    try {
      return c ? c(e, 3, [m]) : e(m);
    } finally {
      Ts = N;
    }
  } : (p = dt, qe.NODE_ENV !== "production" && f(e)), t && o) {
    const N = p, T = o === !0 ? 1 / 0 : o;
    p = () => jn(N(), T);
  }
  const y = nh(), b = () => {
    d.stop(), y && y.active && Ec(y.effects, d);
  };
  if (r && t) {
    const N = t;
    t = (...T) => {
      N(...T), b();
    };
  }
  let g = _ ? new Array(e.length).fill(ii) : ii;
  const O = (N) => {
    if (!(!(d.flags & 1) || !d.dirty && !N))
      if (t) {
        const T = d.run();
        if (o || v || (_ ? T.some((R, I) => xt(R, g[I])) : xt(T, g))) {
          h && h();
          const R = Ts;
          Ts = d;
          try {
            const I = [
              T,
              // pass undefined as the old value when it's changed for the first time
              g === ii ? void 0 : _ && g[0] === ii ? [] : g,
              m
            ];
            g = T, c ? c(t, 3, I) : (
              // @ts-expect-error
              t(...I)
            );
          } finally {
            Ts = R;
          }
        }
      } else
        d.run();
  };
  return a && a(O), d = new sh(p), d.scheduler = i ? () => i(O, !1) : O, m = (N) => _y(N, !1, d), h = d.onStop = () => {
    const N = Ki.get(d);
    if (N) {
      if (c)
        c(N, 4);
      else
        for (const T of N) T();
      Ki.delete(d);
    }
  }, qe.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? O(!0) : g = d.run() : i ? i(O.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function jn(e, t = 1 / 0, n) {
  if (t <= 0 || !je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ye(e))
    jn(e.value, t, n);
  else if (ge(e))
    for (let s = 0; s < e.length; s++)
      jn(e[s], t, n);
  else if ($o(e) || Vs(e))
    e.forEach((s) => {
      jn(s, t, n);
    });
  else if (Gp(e)) {
    for (const s in e)
      jn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && jn(e[s], t, n);
  }
  return e;
}
var M = {};
const Fs = [];
function wi(e) {
  Fs.push(e);
}
function Ai() {
  Fs.pop();
}
let Wa = !1;
function ee(e, ...t) {
  if (Wa) return;
  Wa = !0, cn();
  const n = Fs.length ? Fs[Fs.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = by();
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
  un(), Wa = !1;
}
function by() {
  let e = Fs[Fs.length - 1];
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
`], ...wy(n));
  }), t;
}
function wy({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${ba(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Ay(e.props), r] : [o + r];
}
function Ay(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Sh(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Sh(e, t, n) {
  return Ge(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ye(t) ? (t = Sh(e, Te(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Ae(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Te(t), n ? t : [`${e}=`, t]);
}
function Sy(e, t) {
  M.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? ee(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && ee(`${t} is NaN - the duration expression might be incorrect.`));
}
const Dc = {
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
    Hr(o, t, n);
  }
}
function fn(e, t, n, s) {
  if (Ae(e)) {
    const o = jo(e, t, n, s);
    return o && wc(o) && o.catch((r) => {
      Hr(r, t, n);
    }), o;
  }
  if (ge(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(fn(e[r], t, n, s));
    return o;
  } else M.NODE_ENV !== "production" && ee(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Hr(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Be;
  if (t) {
    let a = t.parent;
    const c = t.proxy, f = M.NODE_ENV !== "production" ? Dc[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      cn(), jo(r, null, 10, [
        e,
        c,
        f
      ]), un();
      return;
    }
  }
  Cy(e, n, o, s, i);
}
function Cy(e, t, n, s = !0, o = !1) {
  if (M.NODE_ENV !== "production") {
    const r = Dc[t];
    if (n && wi(n), ee(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Ai(), s)
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
const Ao = [];
let ns = null, ho = 0;
const Ch = /* @__PURE__ */ Promise.resolve();
let zi = null;
const Oy = 100;
function zs(e) {
  const t = zi || Ch;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ty(e) {
  let t = En + 1, n = wt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = wt[s], r = Tr(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ha(e) {
  if (!(e.flags & 1)) {
    const t = Tr(e), n = wt[wt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Tr(n) ? wt.push(e) : wt.splice(Ty(t), 0, e), e.flags |= 1, Oh();
  }
}
function Oh() {
  zi || (zi = Ch.then(Dh));
}
function Th(e) {
  ge(e) ? Ao.push(...e) : ns && e.id === -1 ? ns.splice(ho + 1, 0, e) : e.flags & 1 || (Ao.push(e), e.flags |= 1), Oh();
}
function xu(e, t, n = En + 1) {
  for (M.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < wt.length; n++) {
    const s = wt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || M.NODE_ENV !== "production" && kc(t, s))
        continue;
      wt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Nh(e) {
  if (Ao.length) {
    const t = [...new Set(Ao)].sort(
      (n, s) => Tr(n) - Tr(s)
    );
    if (Ao.length = 0, ns) {
      ns.push(...t);
      return;
    }
    for (ns = t, M.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ho = 0; ho < ns.length; ho++) {
      const n = ns[ho];
      M.NODE_ENV !== "production" && kc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ns = null, ho = 0;
  }
}
const Tr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Dh(e) {
  M.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = M.NODE_ENV !== "production" ? (n) => kc(e, n) : dt;
  try {
    for (En = 0; En < wt.length; En++) {
      const n = wt[En];
      if (n && !(n.flags & 8)) {
        if (M.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), jo(
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
    En = -1, wt.length = 0, Nh(e), zi = null, (wt.length || Ao.length) && Dh(e);
  }
}
function kc(e, t) {
  const n = e.get(t) || 0;
  if (n > Oy) {
    const s = t.i, o = s && Lc(s.type);
    return Hr(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let sn = !1;
const Si = /* @__PURE__ */ new Map();
M.NODE_ENV !== "production" && (Ur().__VUE_HMR_RUNTIME__ = {
  createRecord: Ka(kh),
  rerender: Ka(ky),
  reload: Ka(xy)
});
const qs = /* @__PURE__ */ new Map();
function Ny(e) {
  const t = e.type.__hmrId;
  let n = qs.get(t);
  n || (kh(t, e.type), n = qs.get(t)), n.instances.add(e);
}
function Dy(e) {
  qs.get(e.type.__hmrId).instances.delete(e);
}
function kh(e, t) {
  return qs.has(e) ? !1 : (qs.set(e, {
    initialDef: qi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function qi(e) {
  return bm(e) ? e.__vccOpts : e;
}
function ky(e, t) {
  const n = qs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, qi(s.type).render = t), s.renderCache = [], sn = !0, s.update(), sn = !1;
  }));
}
function xy(e, t) {
  const n = qs.get(e);
  if (!n) return;
  t = qi(t), Ru(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = qi(r.type);
    let a = Si.get(i);
    a || (i !== n.initialDef && Ru(i, t), Si.set(i, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? ha(() => {
      sn = !0, r.parent.update(), sn = !1, a.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Th(() => {
    Si.clear();
  });
}
function Ru(e, t) {
  st(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ka(e) {
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
let An, ar = [], Dl = !1;
function Wr(e, ...t) {
  An ? An.emit(e, ...t) : Dl || ar.push({ event: e, args: t });
}
function xh(e, t) {
  var n, s;
  An = e, An ? (An.enabled = !0, ar.forEach(({ event: o, args: r }) => An.emit(o, ...r)), ar = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    xh(r, t);
  }), setTimeout(() => {
    An || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Dl = !0, ar = []);
  }, 3e3)) : (Dl = !0, ar = []);
}
function Ry(e, t) {
  Wr("app:init", e, t, {
    Fragment: Ce,
    Text: qr,
    Comment: at,
    Static: gr
  });
}
function Iy(e) {
  Wr("app:unmount", e);
}
const My = /* @__PURE__ */ xc(
  "component:added"
  /* COMPONENT_ADDED */
), Rh = /* @__PURE__ */ xc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Py = /* @__PURE__ */ xc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Vy = (e) => {
  An && typeof An.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !An.cleanupBuffer(e) && Py(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xc(e) {
  return (t) => {
    Wr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ly = /* @__PURE__ */ Ih(
  "perf:start"
  /* PERFORMANCE_START */
), Fy = /* @__PURE__ */ Ih(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ih(e) {
  return (t, n, s) => {
    Wr(e, t.appContext.app, t.uid, t, n, s);
  };
}
function By(e, t, n) {
  Wr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let rt = null, Mh = null;
function Yi(e) {
  const t = rt;
  return rt = e, Mh = e && e.type.__scopeId || null, t;
}
function fe(e, t = rt, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Xu(-1);
    const r = Yi(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Yi(r), s._d && Xu(1);
    }
    return M.NODE_ENV !== "production" && Rh(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ph(e) {
  O_(e) && ee("Do not use built-in directive ids as custom directive id: " + e);
}
function nt(e, t) {
  if (rt === null)
    return M.NODE_ENV !== "production" && ee("withDirectives can only be used inside render functions."), e;
  const n = ya(rt), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, a, c = Be] = t[o];
    r && (Ae(r) && (r = {
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
function ws(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    r && (a.oldValue = r[i].value);
    let c = a.dir[s];
    c && (cn(), fn(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), un());
  }
}
const Vh = Symbol("_vte"), Lh = (e) => e.__isTeleport, Bs = (e) => e && (e.disabled || e.disabled === ""), Iu = (e) => e && (e.defer || e.defer === ""), Mu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Pu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, kl = (e, t) => {
  const n = e && e.to;
  if (Ge(n))
    if (t) {
      const s = t(n);
      return M.NODE_ENV !== "production" && !s && !Bs(e) && ee(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return M.NODE_ENV !== "production" && ee(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return M.NODE_ENV !== "production" && !n && !Bs(e) && ee(`Invalid Teleport target: ${n}`), n;
}, Fh = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, a, c, f) {
    const {
      mc: u,
      pc: d,
      pbc: p,
      o: { insert: h, querySelector: m, createText: v, createComment: _ }
    } = f, y = Bs(t.props);
    let { shapeFlag: b, children: g, dynamicChildren: O } = t;
    if (M.NODE_ENV !== "production" && sn && (c = !1, O = null), e == null) {
      const N = t.el = M.NODE_ENV !== "production" ? _("teleport start") : v(""), T = t.anchor = M.NODE_ENV !== "production" ? _("teleport end") : v("");
      h(N, n, s), h(T, n, s);
      const R = (D, w) => {
        b & 16 && (o && o.isCE && (o.ce._teleportTarget = D), u(
          g,
          D,
          w,
          o,
          r,
          i,
          a,
          c
        ));
      }, I = () => {
        const D = t.target = kl(t.props, m), w = Bh(D, t, v, h);
        D ? (i !== "svg" && Mu(D) ? i = "svg" : i !== "mathml" && Pu(D) && (i = "mathml"), y || (R(D, w), Ci(t, !1))) : M.NODE_ENV !== "production" && !y && ee(
          "Invalid Teleport target on mount:",
          D,
          `(${typeof D})`
        );
      };
      y && (R(n, T), Ci(t, !0)), Iu(t.props) ? (t.el.__isMounted = !1, Et(() => {
        I(), delete t.el.__isMounted;
      }, r)) : I();
    } else {
      if (Iu(t.props) && e.el.__isMounted === !1) {
        Et(() => {
          Fh.process(
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
      const N = t.anchor = e.anchor, T = t.target = e.target, R = t.targetAnchor = e.targetAnchor, I = Bs(e.props), D = I ? n : T, w = I ? N : R;
      if (i === "svg" || Mu(T) ? i = "svg" : (i === "mathml" || Pu(T)) && (i = "mathml"), O ? (p(
        e.dynamicChildren,
        O,
        D,
        o,
        r,
        i,
        a
      ), mr(e, t, M.NODE_ENV === "production")) : c || d(
        e,
        t,
        D,
        w,
        o,
        r,
        i,
        a,
        !1
      ), y)
        I ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ai(
          t,
          n,
          N,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const k = t.target = kl(
          t.props,
          m
        );
        k ? ai(
          t,
          k,
          null,
          f,
          0
        ) : M.NODE_ENV !== "production" && ee(
          "Invalid Teleport target on update:",
          T,
          `(${typeof T})`
        );
      } else I && ai(
        t,
        T,
        R,
        f,
        1
      );
      Ci(t, y);
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
      const h = r || !Bs(p);
      for (let m = 0; m < a.length; m++) {
        const v = a[m];
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
  move: ai,
  hydrate: $y
};
function ai(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: c, children: f, props: u } = e, d = r === 2;
  if (d && s(i, t, n), (!d || Bs(u)) && c & 16)
    for (let p = 0; p < f.length; p++)
      o(
        f[p],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function $y(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: a, querySelector: c, insert: f, createText: u }
}, d) {
  const p = t.target = kl(
    t.props,
    c
  );
  if (p) {
    const h = Bs(t.props), m = p._lpa || p.firstChild;
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
        let v = m;
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
        t.targetAnchor || Bh(p, t, u, f), d(
          m && i(m),
          t,
          p,
          n,
          s,
          o,
          r
        );
      }
    Ci(t, h);
  }
  return t.anchor && i(t.anchor);
}
const Kr = Fh;
function Ci(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Bh(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[Vh] = r, e && (s(o, e), s(r, e)), r;
}
const ss = Symbol("_leaveCb"), li = Symbol("_enterCb");
function jy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Nt(() => {
    e.isMounted = !0;
  }), qh(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ht = [Function, Array], $h = {
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
}, jh = (e) => {
  const t = e.subTree;
  return t.component ? jh(t.component) : t;
}, Uy = {
  name: "BaseTransition",
  props: $h,
  setup(e, { slots: t }) {
    const n = Xn(), s = jy();
    return () => {
      const o = t.default && Wh(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Uh(o), i = Te(e), { mode: a } = i;
      if (M.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && ee(`invalid <transition> mode: ${a}`), s.isLeaving)
        return za(r);
      const c = Vu(r);
      if (!c)
        return za(r);
      let f = xl(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => f = d
      );
      c.type !== at && Nr(c, f);
      let u = n.subTree && Vu(n.subTree);
      if (u && u.type !== at && !ks(c, u) && jh(n).type !== at) {
        let d = xl(
          u,
          i,
          s,
          n
        );
        if (Nr(u, d), a === "out-in" && c.type !== at)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, za(r);
        a === "in-out" && c.type !== at ? d.delayLeave = (p, h, m) => {
          const v = Hh(
            s,
            u
          );
          v[String(u.key)] = u, p[ss] = () => {
            h(), p[ss] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            m(), delete f.delayedLeave, u = void 0;
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
      if (s.type !== at) {
        if (M.NODE_ENV !== "production" && n) {
          ee(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, M.NODE_ENV === "production") break;
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
function xl(e, t, n, s, o) {
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
    onLeaveCancelled: v,
    onBeforeAppear: _,
    onAppear: y,
    onAfterAppear: b,
    onAppearCancelled: g
  } = t, O = String(e.key), N = Hh(n, e), T = (D, w) => {
    D && fn(
      D,
      s,
      9,
      w
    );
  }, R = (D, w) => {
    const k = w[1];
    T(D, w), ge(D) ? D.every((A) => A.length <= 1) && k() : D.length <= 1 && k();
  }, I = {
    mode: i,
    persisted: a,
    beforeEnter(D) {
      let w = c;
      if (!n.isMounted)
        if (r)
          w = _ || c;
        else
          return;
      D[ss] && D[ss](
        !0
        /* cancelled */
      );
      const k = N[O];
      k && ks(e, k) && k.el[ss] && k.el[ss](), T(w, [D]);
    },
    enter(D) {
      let w = f, k = u, A = d;
      if (!n.isMounted)
        if (r)
          w = y || f, k = b || u, A = g || d;
        else
          return;
      let F = !1;
      const de = D[li] = (X) => {
        F || (F = !0, X ? T(A, [D]) : T(k, [D]), I.delayedLeave && I.delayedLeave(), D[li] = void 0);
      };
      w ? R(w, [D, de]) : de();
    },
    leave(D, w) {
      const k = String(e.key);
      if (D[li] && D[li](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return w();
      T(p, [D]);
      let A = !1;
      const F = D[ss] = (de) => {
        A || (A = !0, w(), de ? T(v, [D]) : T(m, [D]), D[ss] = void 0, N[k] === e && delete N[k]);
      };
      N[k] = e, h ? R(h, [D, F]) : F();
    },
    clone(D) {
      const w = xl(
        D,
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
function za(e) {
  if (zr(e))
    return e = kn(e), e.children = null, e;
}
function Vu(e) {
  if (!zr(e))
    return Lh(e.type) && e.children ? Uh(e.children) : e;
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
function Nr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Nr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Wh(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === Ce ? (i.patchFlag & 128 && o++, s = s.concat(
      Wh(i.children, t, a)
    )) : (t || i.type !== at) && s.push(a != null ? kn(i, { key: a }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  return Ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    st({ name: e.name }, t, { setup: e })
  ) : e;
}
function Kh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wy = /* @__PURE__ */ new WeakSet();
function hr(e, t, n, s, o = !1) {
  if (ge(e)) {
    e.forEach(
      (m, v) => hr(
        m,
        t && (ge(t) ? t[v] : t),
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
  const r = s.shapeFlag & 4 ? ya(s.component) : s.el, i = o ? null : r, { i: a, r: c } = e;
  if (M.NODE_ENV !== "production" && !a) {
    ee(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === Be ? a.refs = {} : a.refs, d = a.setupState, p = Te(d), h = d === Be ? () => !1 : (m) => M.NODE_ENV !== "production" && (Fe(p, m) && !Ye(p[m]) && ee(
    `Template ref "${m}" used on a non-ref value. It will not work in the production build.`
  ), Wy.has(p[m])) ? !1 : Fe(p, m);
  if (f != null && f !== c && (Ge(f) ? (u[f] = null, h(f) && (d[f] = null)) : Ye(f) && (f.value = null)), Ae(c))
    jo(c, a, 12, [i, u]);
  else {
    const m = Ge(c), v = Ye(c);
    if (m || v) {
      const _ = () => {
        if (e.f) {
          const y = m ? h(c) ? d[c] : u[c] : c.value;
          o ? ge(y) && Ec(y, r) : ge(y) ? y.includes(r) || y.push(r) : m ? (u[c] = [r], h(c) && (d[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else m ? (u[c] = i, h(c) && (d[c] = i)) : v ? (c.value = i, e.k && (u[e.k] = i)) : M.NODE_ENV !== "production" && ee("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (_.id = -1, Et(_, n)) : _();
    } else M.NODE_ENV !== "production" && ee("Invalid template ref type:", c, `(${typeof c})`);
  }
}
Ur().requestIdleCallback;
Ur().cancelIdleCallback;
const So = (e) => !!e.type.__asyncLoader, zr = (e) => e.type.__isKeepAlive;
function Ky(e, t) {
  zh(e, "a", t);
}
function zy(e, t) {
  zh(e, "da", t);
}
function zh(e, t, n = ct) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ma(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      zr(o.parent.vnode) && qy(s, t, n, o), o = o.parent;
  }
}
function qy(e, t, n, s) {
  const o = ma(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Uo(() => {
    Ec(s[t], o);
  }, n);
}
function ma(e, t, n = ct, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      cn();
      const a = Yr(n), c = fn(t, n, e, i);
      return a(), un(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (M.NODE_ENV !== "production") {
    const o = Os(Dc[e].replace(/ hook$/, ""));
    ee(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Yn = (e) => (t, n = ct) => {
  (!kr || e === "sp") && ma(e, (...s) => t(...s), n);
}, Yy = Yn("bm"), Nt = Yn("m"), Xy = Yn(
  "bu"
), Gy = Yn("u"), qh = Yn(
  "bum"
), Uo = Yn("um"), Qy = Yn(
  "sp"
), Jy = Yn("rtg"), Zy = Yn("rtc");
function eb(e, t = ct) {
  ma("ec", e, t);
}
const Rl = "components", tb = "directives";
function Qe(e, t) {
  return Yh(Rl, e, !0, t) || e;
}
const nb = Symbol.for("v-ndc");
function sb(e) {
  return Yh(tb, e);
}
function Yh(e, t, n = !0, s = !1) {
  const o = rt || ct;
  if (o) {
    const r = o.type;
    if (e === Rl) {
      const a = Lc(
        r,
        !1
      );
      if (a && (a === t || a === _t(t) || a === Ws(_t(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Lu(o[e] || r[e], t) || // global registration
      Lu(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (M.NODE_ENV !== "production" && n && !i) {
      const a = e === Rl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      ee(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else M.NODE_ENV !== "production" && ee(
    `resolve${Ws(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Lu(e, t) {
  return e && (e[t] || e[_t(t)] || e[Ws(_t(t))]);
}
function Je(e, t, n, s) {
  let o;
  const r = n, i = ge(e);
  if (i || Ge(e)) {
    const a = i && an(e);
    let c = !1, f = !1;
    a && (c = !St(e), f = Dn(e), e = da(e)), o = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      o[u] = t(
        c ? f ? Wi(ht(e[u])) : ht(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    M.NODE_ENV !== "production" && !Number.isInteger(e) && ee(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
function De(e, t, n = {}, s, o) {
  if (rt.ce || rt.parent && So(rt.parent) && rt.parent.ce)
    return t !== "default" && (n.name = t), C(), et(
      Ce,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let r = e[t];
  M.NODE_ENV !== "production" && r && r.length > 1 && (ee(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), C();
  const i = r && Xh(r(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = et(
    Ce,
    {
      key: (a && !ln(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), r && r._c && (r._d = !0), c;
}
function Xh(e) {
  return e.some((t) => Ys(t) ? !(t.type === at || t.type === Ce && !Xh(t.children)) : !0) ? e : null;
}
const Il = (e) => e ? _m(e) ? ya(e) : Il(e.parent) : null, $s = (
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
    $parent: (e) => Il(e.parent),
    $root: (e) => Il(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ha(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zs.bind(e.proxy)),
    $watch: (e) => Lb.bind(e)
  })
), Rc = (e) => e === "_" || e === "$", qa = (e, t) => e !== Be && !e.__isScriptSetup && Fe(e, t), Gh = {
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
        if (qa(s, t))
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
        Ml && (i[t] = 0);
      }
    }
    const u = $s[t];
    let d, p;
    if (u)
      return t === "$attrs" ? (ut(e.attrs, "get", ""), M.NODE_ENV !== "production" && Qi()) : M.NODE_ENV !== "production" && t === "$slots" && ut(e, "get", t), u(e);
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
    t.indexOf("__v") !== 0) && (o !== Be && Rc(t[0]) && Fe(o, t) ? ee(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === rt && ee(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return qa(o, t) ? (o[t] = n, !0) : M.NODE_ENV !== "production" && o.__isScriptSetup && Fe(o, t) ? (ee(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Be && Fe(s, t) ? (s[t] = n, !0) : Fe(e.props, t) ? (M.NODE_ENV !== "production" && ee(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (M.NODE_ENV !== "production" && ee(
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
    return !!n[i] || e !== Be && Fe(e, i) || qa(t, i) || (a = r[0]) && Fe(a, i) || Fe(s, i) || Fe($s, i) || Fe(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
M.NODE_ENV !== "production" && (Gh.ownKeys = (e) => (ee(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ob(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys($s).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => $s[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: dt
    });
  }), t;
}
function rb(e) {
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
function ib(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Te(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Rc(s[0])) {
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
function Fu(e) {
  return ge(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ab() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? ee(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ml = !0;
function lb(e) {
  const t = Jh(e), n = e.proxy, s = e.ctx;
  Ml = !1, t.beforeCreate && Bu(t.beforeCreate, e, "bc");
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
    activated: v,
    deactivated: _,
    beforeDestroy: y,
    beforeUnmount: b,
    destroyed: g,
    unmounted: O,
    render: N,
    renderTracked: T,
    renderTriggered: R,
    errorCaptured: I,
    serverPrefetch: D,
    // public API
    expose: w,
    inheritAttrs: k,
    // assets
    components: A,
    directives: F,
    filters: de
  } = t, X = M.NODE_ENV !== "production" ? ab() : null;
  if (M.NODE_ENV !== "production") {
    const [z] = e.propsOptions;
    if (z)
      for (const ce in z)
        X("Props", ce);
  }
  if (f && cb(f, s, X), i)
    for (const z in i) {
      const ce = i[z];
      Ae(ce) ? (M.NODE_ENV !== "production" ? Object.defineProperty(s, z, {
        value: ce.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[z] = ce.bind(n), M.NODE_ENV !== "production" && X("Methods", z)) : M.NODE_ENV !== "production" && ee(
        `Method "${z}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    M.NODE_ENV !== "production" && !Ae(o) && ee(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = o.call(n, n);
    if (M.NODE_ENV !== "production" && wc(z) && ee(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !je(z))
      M.NODE_ENV !== "production" && ee("data() should return an object.");
    else if (e.data = ds(z), M.NODE_ENV !== "production")
      for (const ce in z)
        X("Data", ce), Rc(ce[0]) || Object.defineProperty(s, ce, {
          configurable: !0,
          enumerable: !0,
          get: () => z[ce],
          set: dt
        });
  }
  if (Ml = !0, r)
    for (const z in r) {
      const ce = r[z], be = Ae(ce) ? ce.bind(n, n) : Ae(ce.get) ? ce.get.bind(n, n) : dt;
      M.NODE_ENV !== "production" && be === dt && ee(`Computed property "${z}" has no getter.`);
      const Ze = !Ae(ce) && Ae(ce.set) ? ce.set.bind(n) : M.NODE_ENV !== "production" ? () => {
        ee(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : dt, K = $({
        get: be,
        set: Ze
      });
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => K.value,
        set: (oe) => K.value = oe
      }), M.NODE_ENV !== "production" && X("Computed", z);
    }
  if (a)
    for (const z in a)
      Qh(a[z], s, n, z);
  if (c) {
    const z = Ae(c) ? c.call(n) : c;
    Reflect.ownKeys(z).forEach((ce) => {
      Oi(ce, z[ce]);
    });
  }
  u && Bu(u, e, "c");
  function re(z, ce) {
    ge(ce) ? ce.forEach((be) => z(be.bind(n))) : ce && z(ce.bind(n));
  }
  if (re(Yy, d), re(Nt, p), re(Xy, h), re(Gy, m), re(Ky, v), re(zy, _), re(eb, I), re(Zy, T), re(Jy, R), re(qh, b), re(Uo, O), re(Qy, D), ge(w))
    if (w.length) {
      const z = e.exposed || (e.exposed = {});
      w.forEach((ce) => {
        Object.defineProperty(z, ce, {
          get: () => n[ce],
          set: (be) => n[ce] = be
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === dt && (e.render = N), k != null && (e.inheritAttrs = k), A && (e.components = A), F && (e.directives = F), D && Kh(e);
}
function cb(e, t, n = dt) {
  ge(e) && (e = Pl(e));
  for (const s in e) {
    const o = e[s];
    let r;
    je(o) ? "default" in o ? r = Ft(
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
function Bu(e, t, n) {
  fn(
    ge(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Qh(e, t, n, s) {
  let o = s.includes(".") ? cm(n, s) : () => n[s];
  if (Ge(e)) {
    const r = t[e];
    Ae(r) ? Ct(o, r) : M.NODE_ENV !== "production" && ee(`Invalid watch handler specified by key "${e}"`, r);
  } else if (Ae(e))
    Ct(o, e.bind(n));
  else if (je(e))
    if (ge(e))
      e.forEach((r) => Qh(r, t, n, s));
    else {
      const r = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ae(r) ? Ct(o, r, e) : M.NODE_ENV !== "production" && ee(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else M.NODE_ENV !== "production" && ee(`Invalid watch option: "${s}"`, e);
}
function Jh(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (f) => Xi(c, f, i, !0)
  ), Xi(c, t, i)), je(t) && r.set(t, c), c;
}
function Xi(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Xi(e, r, n, !0), o && o.forEach(
    (i) => Xi(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      M.NODE_ENV !== "production" && ee(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = ub[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const ub = {
  data: $u,
  props: ju,
  emits: ju,
  // objects
  methods: lr,
  computed: lr,
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
  components: lr,
  directives: lr,
  // watch
  watch: fb,
  // provide / inject
  provide: $u,
  inject: db
};
function $u(e, t) {
  return t ? e ? function() {
    return st(
      Ae(e) ? e.call(this, this) : e,
      Ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function db(e, t) {
  return lr(Pl(e), Pl(t));
}
function Pl(e) {
  if (ge(e)) {
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
function lr(e, t) {
  return e ? st(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ju(e, t) {
  return e ? ge(e) && ge(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : st(
    /* @__PURE__ */ Object.create(null),
    Fu(e),
    Fu(t ?? {})
  ) : t;
}
function fb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = st(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = bt(e[s], t[s]);
  return n;
}
function Zh() {
  return {
    app: null,
    config: {
      isNativeTag: S_,
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
let pb = 0;
function hb(e, t) {
  return function(s, o = null) {
    Ae(s) || (s = st({}, s)), o != null && !je(o) && (M.NODE_ENV !== "production" && ee("root props passed to app.mount() must be an object."), o = null);
    const r = Zh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const f = r.app = {
      _uid: pb++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Zu,
      get config() {
        return r.config;
      },
      set config(u) {
        M.NODE_ENV !== "production" && ee(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return i.has(u) ? M.NODE_ENV !== "production" && ee("Plugin has already been applied to target app.") : u && Ae(u.install) ? (i.add(u), u.install(f, ...d)) : Ae(u) ? (i.add(u), u(f, ...d)) : M.NODE_ENV !== "production" && ee(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? M.NODE_ENV !== "production" && ee(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, d) {
        return M.NODE_ENV !== "production" && jl(u, r.config), d ? (M.NODE_ENV !== "production" && r.components[u] && ee(`Component "${u}" has already been registered in target app.`), r.components[u] = d, f) : r.components[u];
      },
      directive(u, d) {
        return M.NODE_ENV !== "production" && Ph(u), d ? (M.NODE_ENV !== "production" && r.directives[u] && ee(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, f) : r.directives[u];
      },
      mount(u, d, p) {
        if (c)
          M.NODE_ENV !== "production" && ee(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          M.NODE_ENV !== "production" && u.__vue_app__ && ee(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = f._ceVNode || ue(s, o);
          return h.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), M.NODE_ENV !== "production" && (r.reload = () => {
            const m = kn(h);
            m.el = null, e(m, u, p);
          }), e(h, u, p), c = !0, f._container = u, u.__vue_app__ = f, M.NODE_ENV !== "production" && (f._instance = h.component, Ry(f, Zu)), ya(h.component);
        }
      },
      onUnmount(u) {
        M.NODE_ENV !== "production" && typeof u != "function" && ee(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        c ? (fn(
          a,
          f._instance,
          16
        ), e(null, f._container), M.NODE_ENV !== "production" && (f._instance = null, Iy(f)), delete f._container.__vue_app__) : M.NODE_ENV !== "production" && ee("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return M.NODE_ENV !== "production" && u in r.provides && (Fe(r.provides, u) ? ee(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : ee(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = d, f;
      },
      runWithContext(u) {
        const d = js;
        js = f;
        try {
          return u();
        } finally {
          js = d;
        }
      }
    };
    return f;
  };
}
let js = null;
function Oi(e, t) {
  if (!ct)
    M.NODE_ENV !== "production" && ee("provide() can only be used inside setup().");
  else {
    let n = ct.provides;
    const s = ct.parent && ct.parent.provides;
    s === n && (n = ct.provides = Object.create(s)), n[e] = t;
  }
}
function Ft(e, t, n = !1) {
  const s = ct || rt;
  if (s || js) {
    let o = js ? js._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Ae(t) ? t.call(s && s.proxy) : t;
    M.NODE_ENV !== "production" && ee(`injection "${String(e)}" not found.`);
  } else M.NODE_ENV !== "production" && ee("inject() can only be used inside setup() or functional components.");
}
function mb() {
  return !!(ct || rt || js);
}
const em = {}, tm = () => Object.create(em), nm = (e) => Object.getPrototypeOf(e) === em;
function gb(e, t, n, s = !1) {
  const o = {}, r = tm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), sm(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  M.NODE_ENV !== "production" && rm(t || {}, o, e), n ? e.props = s ? o : yh(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function vb(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function _b(e, t, n, s) {
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
    !(M.NODE_ENV !== "production" && vb(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (_a(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (c)
          if (Fe(r, p))
            h !== r[p] && (r[p] = h, f = !0);
          else {
            const m = _t(p);
            o[m] = Vl(
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
    sm(e, t, o, r) && (f = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !Fe(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Kn(d)) === d || !Fe(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[d] = Vl(
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
  f && wn(e.attrs, "set", ""), M.NODE_ENV !== "production" && rm(t || {}, o, e);
}
function sm(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (dr(c))
        continue;
      const f = t[c];
      let u;
      o && Fe(o, u = _t(c)) ? !r || !r.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : _a(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, i = !0);
    }
  if (r) {
    const c = Te(n), f = a || Be;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Vl(
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
function Vl(e, t, n, s, o, r) {
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
          const u = Yr(o);
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
    ] && (s === "" || s === Kn(n)) && (s = !0));
  }
  return s;
}
const yb = /* @__PURE__ */ new WeakMap();
function om(e, t, n = !1) {
  const s = n ? yb : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let c = !1;
  if (!Ae(e)) {
    const u = (d) => {
      c = !0;
      const [p, h] = om(d, t, !0);
      st(i, p), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return je(e) && s.set(e, wo), wo;
  if (ge(r))
    for (let u = 0; u < r.length; u++) {
      M.NODE_ENV !== "production" && !Ge(r[u]) && ee("props must be strings when using array syntax.", r[u]);
      const d = _t(r[u]);
      Uu(d) && (i[d] = Be);
    }
  else if (r) {
    M.NODE_ENV !== "production" && !je(r) && ee("invalid props options", r);
    for (const u in r) {
      const d = _t(u);
      if (Uu(d)) {
        const p = r[u], h = i[d] = ge(p) || Ae(p) ? { type: p } : st({}, p), m = h.type;
        let v = !1, _ = !0;
        if (ge(m))
          for (let y = 0; y < m.length; ++y) {
            const b = m[y], g = Ae(b) && b.name;
            if (g === "Boolean") {
              v = !0;
              break;
            } else g === "String" && (_ = !1);
          }
        else
          v = Ae(m) && m.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = v, h[
          1
          /* shouldCastTrue */
        ] = _, (v || Fe(h, "default")) && a.push(d);
      }
    }
  }
  const f = [i, a];
  return je(e) && s.set(e, f), f;
}
function Uu(e) {
  return e[0] !== "$" && !dr(e) ? !0 : (M.NODE_ENV !== "production" && ee(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function bb(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function rm(e, t, n) {
  const s = Te(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => _t(i));
  for (const i in o) {
    let a = o[i];
    a != null && Eb(
      i,
      s[i],
      a,
      M.NODE_ENV !== "production" ? Sn(s) : s,
      !r.includes(i)
    );
  }
}
function Eb(e, t, n, s, o) {
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
        const { valid: h, expectedType: m } = Ab(t, u[p]);
        d.push(m || ""), f = h;
      }
      if (!f) {
        ee(Sb(e, t, d));
        return;
      }
    }
    a && !a(t, s) && ee('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const wb = /* @__PURE__ */ qn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ab(e, t) {
  let n;
  const s = bb(t);
  if (s === "null")
    n = e === null;
  else if (wb(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = je(e) : s === "Array" ? n = ge(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Sb(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ws).join(" | ")}`;
  const o = n[0], r = Ac(t), i = Hu(t, o), a = Hu(t, r);
  return n.length === 1 && Wu(o) && !Cb(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Wu(r) && (s += `with value ${a}.`), s;
}
function Hu(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Wu(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Cb(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ic = (e) => e[0] === "_" || e === "$stable", Mc = (e) => ge(e) ? e.map(nn) : [nn(e)], Ob = (e, t, n) => {
  if (t._n)
    return t;
  const s = fe((...o) => (M.NODE_ENV !== "production" && ct && !(n === null && rt) && !(n && n.root !== ct.root) && ee(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Mc(t(...o))), n);
  return s._c = !1, s;
}, im = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Ic(o)) continue;
    const r = e[o];
    if (Ae(r))
      t[o] = Ob(o, r, s);
    else if (r != null) {
      M.NODE_ENV !== "production" && ee(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Mc(r);
      t[o] = () => i;
    }
  }
}, am = (e, t) => {
  M.NODE_ENV !== "production" && !zr(e.vnode) && ee(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Mc(t);
  e.slots.default = () => n;
}, Ll = (e, t, n) => {
  for (const s in t)
    (n || !Ic(s)) && (e[s] = t[s]);
}, Tb = (e, t, n) => {
  const s = e.slots = tm();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && Ar(s, "__", o, !0);
    const r = t._;
    r ? (Ll(s, t, n), n && Ar(s, "_", r, !0)) : im(t, s);
  } else t && am(e, t);
}, Nb = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Be;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? M.NODE_ENV !== "production" && sn ? (Ll(o, t, n), wn(e, "set", "$slots")) : n && a === 1 ? r = !1 : Ll(o, t, n) : (r = !t.$stable, im(t, o)), i = t;
  } else t && (am(e, t), i = { default: 1 });
  if (r)
    for (const a in o)
      !Ic(a) && i[a] == null && delete o[a];
};
let Zo, is;
function io(e, t) {
  e.appContext.config.performance && Gi() && is.mark(`vue-${t}-${e.uid}`), M.NODE_ENV !== "production" && Ly(e, t, Gi() ? is.now() : Date.now());
}
function ao(e, t) {
  if (e.appContext.config.performance && Gi()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    is.mark(s), is.measure(
      `<${ba(e, e.type)}> ${t}`,
      n,
      s
    ), is.clearMarks(n), is.clearMarks(s);
  }
  M.NODE_ENV !== "production" && Fy(e, t, Gi() ? is.now() : Date.now());
}
function Gi() {
  return Zo !== void 0 || (typeof window < "u" && window.performance ? (Zo = !0, is = window.performance) : Zo = !1), Zo;
}
function Db() {
  const e = [];
  if (M.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Et = Wb;
function kb(e) {
  return xb(e);
}
function xb(e, t) {
  Db();
  const n = Ur();
  n.__VUE__ = !0, M.NODE_ENV !== "production" && xh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
  } = e, v = (E, S, V, q = null, U = null, Y = null, ae = void 0, te = null, ne = M.NODE_ENV !== "production" && sn ? !1 : !!S.dynamicChildren) => {
    if (E === S)
      return;
    E && !ks(E, S) && (q = J(E), pe(E, U, Y, !0), E = null), S.patchFlag === -2 && (ne = !1, S.dynamicChildren = null);
    const { type: Z, ref: ye, shapeFlag: ie } = S;
    switch (Z) {
      case qr:
        _(E, S, V, q);
        break;
      case at:
        y(E, S, V, q);
        break;
      case gr:
        E == null ? b(S, V, q, ae) : M.NODE_ENV !== "production" && g(E, S, V, ae);
        break;
      case Ce:
        F(
          E,
          S,
          V,
          q,
          U,
          Y,
          ae,
          te,
          ne
        );
        break;
      default:
        ie & 1 ? T(
          E,
          S,
          V,
          q,
          U,
          Y,
          ae,
          te,
          ne
        ) : ie & 6 ? de(
          E,
          S,
          V,
          q,
          U,
          Y,
          ae,
          te,
          ne
        ) : ie & 64 || ie & 128 ? Z.process(
          E,
          S,
          V,
          q,
          U,
          Y,
          ae,
          te,
          ne,
          Ie
        ) : M.NODE_ENV !== "production" && ee("Invalid VNode type:", Z, `(${typeof Z})`);
    }
    ye != null && U ? hr(ye, E && E.ref, Y, S || E, !S) : ye == null && E && E.ref != null && hr(E.ref, null, Y, E, !0);
  }, _ = (E, S, V, q) => {
    if (E == null)
      s(
        S.el = a(S.children),
        V,
        q
      );
    else {
      const U = S.el = E.el;
      S.children !== E.children && f(U, S.children);
    }
  }, y = (E, S, V, q) => {
    E == null ? s(
      S.el = c(S.children || ""),
      V,
      q
    ) : S.el = E.el;
  }, b = (E, S, V, q) => {
    [E.el, E.anchor] = m(
      E.children,
      S,
      V,
      q,
      E.el,
      E.anchor
    );
  }, g = (E, S, V, q) => {
    if (S.children !== E.children) {
      const U = p(E.anchor);
      N(E), [S.el, S.anchor] = m(
        S.children,
        V,
        U,
        q
      );
    } else
      S.el = E.el, S.anchor = E.anchor;
  }, O = ({ el: E, anchor: S }, V, q) => {
    let U;
    for (; E && E !== S; )
      U = p(E), s(E, V, q), E = U;
    s(S, V, q);
  }, N = ({ el: E, anchor: S }) => {
    let V;
    for (; E && E !== S; )
      V = p(E), o(E), E = V;
    o(S);
  }, T = (E, S, V, q, U, Y, ae, te, ne) => {
    S.type === "svg" ? ae = "svg" : S.type === "math" && (ae = "mathml"), E == null ? R(
      S,
      V,
      q,
      U,
      Y,
      ae,
      te,
      ne
    ) : w(
      E,
      S,
      U,
      Y,
      ae,
      te,
      ne
    );
  }, R = (E, S, V, q, U, Y, ae, te) => {
    let ne, Z;
    const { props: ye, shapeFlag: ie, transition: _e, dirs: Oe } = E;
    if (ne = E.el = i(
      E.type,
      Y,
      ye && ye.is,
      ye
    ), ie & 8 ? u(ne, E.children) : ie & 16 && D(
      E.children,
      ne,
      null,
      q,
      U,
      Ya(E, Y),
      ae,
      te
    ), Oe && ws(E, null, q, "created"), I(ne, E, E.scopeId, ae, q), ye) {
      for (const We in ye)
        We !== "value" && !dr(We) && r(ne, We, null, ye[We], Y, q);
      "value" in ye && r(ne, "value", null, ye.value, Y), (Z = ye.onVnodeBeforeMount) && _n(Z, q, E);
    }
    M.NODE_ENV !== "production" && (Ar(ne, "__vnode", E, !0), Ar(ne, "__vueParentComponent", q, !0)), Oe && ws(E, null, q, "beforeMount");
    const Ve = Rb(U, _e);
    Ve && _e.beforeEnter(ne), s(ne, S, V), ((Z = ye && ye.onVnodeMounted) || Ve || Oe) && Et(() => {
      Z && _n(Z, q, E), Ve && _e.enter(ne), Oe && ws(E, null, q, "mounted");
    }, U);
  }, I = (E, S, V, q, U) => {
    if (V && h(E, V), q)
      for (let Y = 0; Y < q.length; Y++)
        h(E, q[Y]);
    if (U) {
      let Y = U.subTree;
      if (M.NODE_ENV !== "production" && Y.patchFlag > 0 && Y.patchFlag & 2048 && (Y = Pc(Y.children) || Y), S === Y || pm(Y.type) && (Y.ssContent === S || Y.ssFallback === S)) {
        const ae = U.vnode;
        I(
          E,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          U.parent
        );
      }
    }
  }, D = (E, S, V, q, U, Y, ae, te, ne = 0) => {
    for (let Z = ne; Z < E.length; Z++) {
      const ye = E[Z] = te ? os(E[Z]) : nn(E[Z]);
      v(
        null,
        ye,
        S,
        V,
        q,
        U,
        Y,
        ae,
        te
      );
    }
  }, w = (E, S, V, q, U, Y, ae) => {
    const te = S.el = E.el;
    M.NODE_ENV !== "production" && (te.__vnode = S);
    let { patchFlag: ne, dynamicChildren: Z, dirs: ye } = S;
    ne |= E.patchFlag & 16;
    const ie = E.props || Be, _e = S.props || Be;
    let Oe;
    if (V && As(V, !1), (Oe = _e.onVnodeBeforeUpdate) && _n(Oe, V, S, E), ye && ws(S, E, V, "beforeUpdate"), V && As(V, !0), M.NODE_ENV !== "production" && sn && (ne = 0, ae = !1, Z = null), (ie.innerHTML && _e.innerHTML == null || ie.textContent && _e.textContent == null) && u(te, ""), Z ? (k(
      E.dynamicChildren,
      Z,
      te,
      V,
      q,
      Ya(S, U),
      Y
    ), M.NODE_ENV !== "production" && mr(E, S)) : ae || be(
      E,
      S,
      te,
      null,
      V,
      q,
      Ya(S, U),
      Y,
      !1
    ), ne > 0) {
      if (ne & 16)
        A(te, ie, _e, V, U);
      else if (ne & 2 && ie.class !== _e.class && r(te, "class", null, _e.class, U), ne & 4 && r(te, "style", ie.style, _e.style, U), ne & 8) {
        const Ve = S.dynamicProps;
        for (let We = 0; We < Ve.length; We++) {
          const ze = Ve[We], Dt = ie[ze], kt = _e[ze];
          (kt !== Dt || ze === "value") && r(te, ze, Dt, kt, U, V);
        }
      }
      ne & 1 && E.children !== S.children && u(te, S.children);
    } else !ae && Z == null && A(te, ie, _e, V, U);
    ((Oe = _e.onVnodeUpdated) || ye) && Et(() => {
      Oe && _n(Oe, V, S, E), ye && ws(S, E, V, "updated");
    }, q);
  }, k = (E, S, V, q, U, Y, ae) => {
    for (let te = 0; te < S.length; te++) {
      const ne = E[te], Z = S[te], ye = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ks(ne, Z) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? d(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      v(
        ne,
        Z,
        ye,
        null,
        q,
        U,
        Y,
        ae,
        !0
      );
    }
  }, A = (E, S, V, q, U) => {
    if (S !== V) {
      if (S !== Be)
        for (const Y in S)
          !dr(Y) && !(Y in V) && r(
            E,
            Y,
            S[Y],
            null,
            U,
            q
          );
      for (const Y in V) {
        if (dr(Y)) continue;
        const ae = V[Y], te = S[Y];
        ae !== te && Y !== "value" && r(E, Y, te, ae, U, q);
      }
      "value" in V && r(E, "value", S.value, V.value, U);
    }
  }, F = (E, S, V, q, U, Y, ae, te, ne) => {
    const Z = S.el = E ? E.el : a(""), ye = S.anchor = E ? E.anchor : a("");
    let { patchFlag: ie, dynamicChildren: _e, slotScopeIds: Oe } = S;
    M.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (sn || ie & 2048) && (ie = 0, ne = !1, _e = null), Oe && (te = te ? te.concat(Oe) : Oe), E == null ? (s(Z, V, q), s(ye, V, q), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      V,
      ye,
      U,
      Y,
      ae,
      te,
      ne
    )) : ie > 0 && ie & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (k(
      E.dynamicChildren,
      _e,
      V,
      U,
      Y,
      ae,
      te
    ), M.NODE_ENV !== "production" ? mr(E, S) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (S.key != null || U && S === U.subTree) && mr(
        E,
        S,
        !0
        /* shallow */
      )
    )) : be(
      E,
      S,
      V,
      ye,
      U,
      Y,
      ae,
      te,
      ne
    );
  }, de = (E, S, V, q, U, Y, ae, te, ne) => {
    S.slotScopeIds = te, E == null ? S.shapeFlag & 512 ? U.ctx.activate(
      S,
      V,
      q,
      ae,
      ne
    ) : X(
      S,
      V,
      q,
      U,
      Y,
      ae,
      ne
    ) : re(E, S, ne);
  }, X = (E, S, V, q, U, Y, ae) => {
    const te = E.component = Xb(
      E,
      q,
      U
    );
    if (M.NODE_ENV !== "production" && te.type.__hmrId && Ny(te), M.NODE_ENV !== "production" && (wi(E), io(te, "mount")), zr(E) && (te.ctx.renderer = Ie), M.NODE_ENV !== "production" && io(te, "init"), Qb(te, !1, ae), M.NODE_ENV !== "production" && ao(te, "init"), M.NODE_ENV !== "production" && sn && (E.el = null), te.asyncDep) {
      if (U && U.registerDep(te, z, ae), !E.el) {
        const ne = te.subTree = ue(at);
        y(null, ne, S, V);
      }
    } else
      z(
        te,
        E,
        S,
        V,
        U,
        Y,
        ae
      );
    M.NODE_ENV !== "production" && (Ai(), ao(te, "mount"));
  }, re = (E, S, V) => {
    const q = S.component = E.component;
    if (Ub(E, S, V))
      if (q.asyncDep && !q.asyncResolved) {
        M.NODE_ENV !== "production" && wi(S), ce(q, S, V), M.NODE_ENV !== "production" && Ai();
        return;
      } else
        q.next = S, q.update();
    else
      S.el = E.el, q.vnode = S;
  }, z = (E, S, V, q, U, Y, ae) => {
    const te = () => {
      if (E.isMounted) {
        let { next: ie, bu: _e, u: Oe, parent: Ve, vnode: We } = E;
        {
          const gn = lm(E);
          if (gn) {
            ie && (ie.el = We.el, ce(E, ie, ae)), gn.asyncDep.then(() => {
              E.isUnmounted || te();
            });
            return;
          }
        }
        let ze = ie, Dt;
        M.NODE_ENV !== "production" && wi(ie || E.vnode), As(E, !1), ie ? (ie.el = We.el, ce(E, ie, ae)) : ie = We, _e && po(_e), (Dt = ie.props && ie.props.onVnodeBeforeUpdate) && _n(Dt, Ve, ie, We), As(E, !0), M.NODE_ENV !== "production" && io(E, "render");
        const kt = zu(E);
        M.NODE_ENV !== "production" && ao(E, "render");
        const mn = E.subTree;
        E.subTree = kt, M.NODE_ENV !== "production" && io(E, "patch"), v(
          mn,
          kt,
          // parent may have changed if it's in a teleport
          d(mn.el),
          // anchor may have changed if it's in a fragment
          J(mn),
          E,
          U,
          Y
        ), M.NODE_ENV !== "production" && ao(E, "patch"), ie.el = kt.el, ze === null && Hb(E, kt.el), Oe && Et(Oe, U), (Dt = ie.props && ie.props.onVnodeUpdated) && Et(
          () => _n(Dt, Ve, ie, We),
          U
        ), M.NODE_ENV !== "production" && Rh(E), M.NODE_ENV !== "production" && Ai();
      } else {
        let ie;
        const { el: _e, props: Oe } = S, { bm: Ve, m: We, parent: ze, root: Dt, type: kt } = E, mn = So(S);
        As(E, !1), Ve && po(Ve), !mn && (ie = Oe && Oe.onVnodeBeforeMount) && _n(ie, ze, S), As(E, !0);
        {
          Dt.ce && // @ts-expect-error _def is private
          Dt.ce._def.shadowRoot !== !1 && Dt.ce._injectChildStyle(kt), M.NODE_ENV !== "production" && io(E, "render");
          const gn = E.subTree = zu(E);
          M.NODE_ENV !== "production" && ao(E, "render"), M.NODE_ENV !== "production" && io(E, "patch"), v(
            null,
            gn,
            V,
            q,
            E,
            U,
            Y
          ), M.NODE_ENV !== "production" && ao(E, "patch"), S.el = gn.el;
        }
        if (We && Et(We, U), !mn && (ie = Oe && Oe.onVnodeMounted)) {
          const gn = S;
          Et(
            () => _n(ie, ze, gn),
            U
          );
        }
        (S.shapeFlag & 256 || ze && So(ze.vnode) && ze.vnode.shapeFlag & 256) && E.a && Et(E.a, U), E.isMounted = !0, M.NODE_ENV !== "production" && My(E), S = V = q = null;
      }
    };
    E.scope.on();
    const ne = E.effect = new sh(te);
    E.scope.off();
    const Z = E.update = ne.run.bind(ne), ye = E.job = ne.runIfDirty.bind(ne);
    ye.i = E, ye.id = E.uid, ne.scheduler = () => ha(ye), As(E, !0), M.NODE_ENV !== "production" && (ne.onTrack = E.rtc ? (ie) => po(E.rtc, ie) : void 0, ne.onTrigger = E.rtg ? (ie) => po(E.rtg, ie) : void 0), Z();
  }, ce = (E, S, V) => {
    S.component = E;
    const q = E.vnode.props;
    E.vnode = S, E.next = null, _b(E, S.props, q, V), Nb(E, S.children, V), cn(), xu(E), un();
  }, be = (E, S, V, q, U, Y, ae, te, ne = !1) => {
    const Z = E && E.children, ye = E ? E.shapeFlag : 0, ie = S.children, { patchFlag: _e, shapeFlag: Oe } = S;
    if (_e > 0) {
      if (_e & 128) {
        K(
          Z,
          ie,
          V,
          q,
          U,
          Y,
          ae,
          te,
          ne
        );
        return;
      } else if (_e & 256) {
        Ze(
          Z,
          ie,
          V,
          q,
          U,
          Y,
          ae,
          te,
          ne
        );
        return;
      }
    }
    Oe & 8 ? (ye & 16 && L(Z, U, Y), ie !== Z && u(V, ie)) : ye & 16 ? Oe & 16 ? K(
      Z,
      ie,
      V,
      q,
      U,
      Y,
      ae,
      te,
      ne
    ) : L(Z, U, Y, !0) : (ye & 8 && u(V, ""), Oe & 16 && D(
      ie,
      V,
      q,
      U,
      Y,
      ae,
      te,
      ne
    ));
  }, Ze = (E, S, V, q, U, Y, ae, te, ne) => {
    E = E || wo, S = S || wo;
    const Z = E.length, ye = S.length, ie = Math.min(Z, ye);
    let _e;
    for (_e = 0; _e < ie; _e++) {
      const Oe = S[_e] = ne ? os(S[_e]) : nn(S[_e]);
      v(
        E[_e],
        Oe,
        V,
        null,
        U,
        Y,
        ae,
        te,
        ne
      );
    }
    Z > ye ? L(
      E,
      U,
      Y,
      !0,
      !1,
      ie
    ) : D(
      S,
      V,
      q,
      U,
      Y,
      ae,
      te,
      ne,
      ie
    );
  }, K = (E, S, V, q, U, Y, ae, te, ne) => {
    let Z = 0;
    const ye = S.length;
    let ie = E.length - 1, _e = ye - 1;
    for (; Z <= ie && Z <= _e; ) {
      const Oe = E[Z], Ve = S[Z] = ne ? os(S[Z]) : nn(S[Z]);
      if (ks(Oe, Ve))
        v(
          Oe,
          Ve,
          V,
          null,
          U,
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
      const Oe = E[ie], Ve = S[_e] = ne ? os(S[_e]) : nn(S[_e]);
      if (ks(Oe, Ve))
        v(
          Oe,
          Ve,
          V,
          null,
          U,
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
        const Oe = _e + 1, Ve = Oe < ye ? S[Oe].el : q;
        for (; Z <= _e; )
          v(
            null,
            S[Z] = ne ? os(S[Z]) : nn(S[Z]),
            V,
            Ve,
            U,
            Y,
            ae,
            te,
            ne
          ), Z++;
      }
    } else if (Z > _e)
      for (; Z <= ie; )
        pe(E[Z], U, Y, !0), Z++;
    else {
      const Oe = Z, Ve = Z, We = /* @__PURE__ */ new Map();
      for (Z = Ve; Z <= _e; Z++) {
        const yt = S[Z] = ne ? os(S[Z]) : nn(S[Z]);
        yt.key != null && (M.NODE_ENV !== "production" && We.has(yt.key) && ee(
          "Duplicate keys found during update:",
          JSON.stringify(yt.key),
          "Make sure keys are unique."
        ), We.set(yt.key, Z));
      }
      let ze, Dt = 0;
      const kt = _e - Ve + 1;
      let mn = !1, gn = 0;
      const Qo = new Array(kt);
      for (Z = 0; Z < kt; Z++) Qo[Z] = 0;
      for (Z = Oe; Z <= ie; Z++) {
        const yt = E[Z];
        if (Dt >= kt) {
          pe(yt, U, Y, !0);
          continue;
        }
        let vn;
        if (yt.key != null)
          vn = We.get(yt.key);
        else
          for (ze = Ve; ze <= _e; ze++)
            if (Qo[ze - Ve] === 0 && ks(yt, S[ze])) {
              vn = ze;
              break;
            }
        vn === void 0 ? pe(yt, U, Y, !0) : (Qo[vn - Ve] = Z + 1, vn >= gn ? gn = vn : mn = !0, v(
          yt,
          S[vn],
          V,
          null,
          U,
          Y,
          ae,
          te,
          ne
        ), Dt++);
      }
      const Su = mn ? Ib(Qo) : wo;
      for (ze = Su.length - 1, Z = kt - 1; Z >= 0; Z--) {
        const yt = Ve + Z, vn = S[yt], Cu = yt + 1 < ye ? S[yt + 1].el : q;
        Qo[Z] === 0 ? v(
          null,
          vn,
          V,
          Cu,
          U,
          Y,
          ae,
          te,
          ne
        ) : mn && (ze < 0 || Z !== Su[ze] ? oe(vn, V, Cu, 2) : ze--);
      }
    }
  }, oe = (E, S, V, q, U = null) => {
    const { el: Y, type: ae, transition: te, children: ne, shapeFlag: Z } = E;
    if (Z & 6) {
      oe(E.component.subTree, S, V, q);
      return;
    }
    if (Z & 128) {
      E.suspense.move(S, V, q);
      return;
    }
    if (Z & 64) {
      ae.move(E, S, V, Ie);
      return;
    }
    if (ae === Ce) {
      s(Y, S, V);
      for (let ie = 0; ie < ne.length; ie++)
        oe(ne[ie], S, V, q);
      s(E.anchor, S, V);
      return;
    }
    if (ae === gr) {
      O(E, S, V);
      return;
    }
    if (q !== 2 && Z & 1 && te)
      if (q === 0)
        te.beforeEnter(Y), s(Y, S, V), Et(() => te.enter(Y), U);
      else {
        const { leave: ie, delayLeave: _e, afterLeave: Oe } = te, Ve = () => {
          E.ctx.isUnmounted ? o(Y) : s(Y, S, V);
        }, We = () => {
          ie(Y, () => {
            Ve(), Oe && Oe();
          });
        };
        _e ? _e(Y, Ve, We) : We();
      }
    else
      s(Y, S, V);
  }, pe = (E, S, V, q = !1, U = !1) => {
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
    if (ie === -2 && (U = !1), te != null && (cn(), hr(te, null, V, E, !0), un()), Oe != null && (S.renderCache[Oe] = void 0), ye & 256) {
      S.ctx.deactivate(E);
      return;
    }
    const Ve = ye & 1 && _e, We = !So(E);
    let ze;
    if (We && (ze = ae && ae.onVnodeBeforeUnmount) && _n(ze, S, E), ye & 6)
      He(E.component, V, q);
    else {
      if (ye & 128) {
        E.suspense.unmount(V, q);
        return;
      }
      Ve && ws(E, null, S, "beforeUnmount"), ye & 64 ? E.type.remove(
        E,
        S,
        V,
        Ie,
        q
      ) : Z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Y !== Ce || ie > 0 && ie & 64) ? L(
        Z,
        S,
        V,
        !1,
        !0
      ) : (Y === Ce && ie & 384 || !U && ye & 16) && L(ne, S, V), q && we(E);
    }
    (We && (ze = ae && ae.onVnodeUnmounted) || Ve) && Et(() => {
      ze && _n(ze, S, E), Ve && ws(E, null, S, "unmounted");
    }, V);
  }, we = (E) => {
    const { type: S, el: V, anchor: q, transition: U } = E;
    if (S === Ce) {
      M.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && U && !U.persisted ? E.children.forEach((ae) => {
        ae.type === at ? o(ae.el) : we(ae);
      }) : ke(V, q);
      return;
    }
    if (S === gr) {
      N(E);
      return;
    }
    const Y = () => {
      o(V), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (E.shapeFlag & 1 && U && !U.persisted) {
      const { leave: ae, delayLeave: te } = U, ne = () => ae(V, Y);
      te ? te(E.el, Y, ne) : ne();
    } else
      Y();
  }, ke = (E, S) => {
    let V;
    for (; E !== S; )
      V = p(E), o(E), E = V;
    o(S);
  }, He = (E, S, V) => {
    M.NODE_ENV !== "production" && E.type.__hmrId && Dy(E);
    const {
      bum: q,
      scope: U,
      job: Y,
      subTree: ae,
      um: te,
      m: ne,
      a: Z,
      parent: ye,
      slots: { __: ie }
    } = E;
    Ku(ne), Ku(Z), q && po(q), ye && ge(ie) && ie.forEach((_e) => {
      ye.renderCache[_e] = void 0;
    }), U.stop(), Y && (Y.flags |= 8, pe(ae, E, S, V)), te && Et(te, S), Et(() => {
      E.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), M.NODE_ENV !== "production" && Vy(E);
  }, L = (E, S, V, q = !1, U = !1, Y = 0) => {
    for (let ae = Y; ae < E.length; ae++)
      pe(E[ae], S, V, q, U);
  }, J = (E) => {
    if (E.shapeFlag & 6)
      return J(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const S = p(E.anchor || E.el), V = S && S[Vh];
    return V ? p(V) : S;
  };
  let se = !1;
  const ve = (E, S, V) => {
    E == null ? S._vnode && pe(S._vnode, null, null, !0) : v(
      S._vnode || null,
      E,
      S,
      null,
      null,
      null,
      V
    ), S._vnode = E, se || (se = !0, xu(), Nh(), se = !1);
  }, Ie = {
    p: v,
    um: pe,
    m: oe,
    r: we,
    mt: X,
    mc: D,
    pc: be,
    pbc: k,
    n: J,
    o: e
  };
  return {
    render: ve,
    hydrate: void 0,
    createApp: hb(ve)
  };
}
function Ya({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function As({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (ge(s) && ge(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = os(o[r]), a.el = i.el), !n && a.patchFlag !== -2 && mr(i, a)), a.type === qr && (a.el = i.el), a.type === at && !a.el && (a.el = i.el), M.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function Ib(e) {
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
function lm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : lm(t);
}
function Ku(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Mb = Symbol.for("v-scx"), Pb = () => {
  {
    const e = Ft(Mb);
    return e || M.NODE_ENV !== "production" && ee(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ga(e, t) {
  return va(e, null, t);
}
function Vb(e, t) {
  return va(
    e,
    null,
    M.NODE_ENV !== "production" ? st({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Ct(e, t, n) {
  return M.NODE_ENV !== "production" && !Ae(t) && ee(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), va(e, t, n);
}
function va(e, t, n = Be) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  M.NODE_ENV !== "production" && !t && (s !== void 0 && ee(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && ee(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && ee(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = st({}, n);
  M.NODE_ENV !== "production" && (a.onWarn = ee);
  const c = t && s || !t && r !== "post";
  let f;
  if (kr) {
    if (r === "sync") {
      const h = Pb();
      f = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = dt, h.resume = dt, h.pause = dt, h;
    }
  }
  const u = ct;
  a.call = (h, m, v) => fn(h, u, m, v);
  let d = !1;
  r === "post" ? a.scheduler = (h) => {
    Et(h, u && u.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (h, m) => {
    m ? h() : ha(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const p = yy(e, t, a);
  return kr && (f ? f.push(p) : c && p()), p;
}
function Lb(e, t, n) {
  const s = this.proxy, o = Ge(e) ? e.includes(".") ? cm(s, e) : () => s[e] : e.bind(s, s);
  let r;
  Ae(t) ? r = t : (r = t.handler, n = t);
  const i = Yr(this), a = va(o, r.bind(s), n);
  return i(), a;
}
function cm(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Fb(e, t, n = Be) {
  const s = Xn();
  if (M.NODE_ENV !== "production" && !s)
    return ee("useModel() called without active instance."), j();
  const o = _t(t);
  if (M.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return ee(`useModel() called with prop "${t}" which is not declared.`), j();
  const r = Kn(t), i = um(e, o), a = py((c, f) => {
    let u, d = Be, p;
    return Vb(() => {
      const h = e[o];
      xt(u, h) && (u = h, f());
    }), {
      get() {
        return c(), n.get ? n.get(u) : u;
      },
      set(h) {
        const m = n.set ? n.set(h) : h;
        if (!xt(m, u) && !(d !== Be && xt(h, d)))
          return;
        const v = s.vnode.props;
        v && // check if parent has passed v-model
        (t in v || o in v || r in v) && (`onUpdate:${t}` in v || `onUpdate:${o}` in v || `onUpdate:${r}` in v) || (u = h, f()), s.emit(`update:${t}`, m), xt(h, m) && xt(h, d) && !xt(m, p) && f(), d = h, p = m;
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
const um = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${Kn(t)}Modifiers`];
function Bb(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Be;
  if (M.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(Os(_t(t)) in d)) && ee(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Os(_t(t))}" prop.`
        );
      else {
        const p = u[t];
        Ae(p) && (p(...n) || ee(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && um(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => Ge(u) ? u.trim() : u)), i.number && (o = n.map(Ui))), M.NODE_ENV !== "production" && By(e, t, o), M.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[Os(u)] && ee(
      `Event "${u}" is emitted in component ${ba(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Kn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = s[a = Os(t)] || // also try camelCase event handler (#2249)
  s[a = Os(_t(t))];
  !c && r && (c = s[a = Os(Kn(t))]), c && fn(
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
    e.emitted[a] = !0, fn(
      f,
      e,
      6,
      o
    );
  }
}
function dm(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, a = !1;
  if (!Ae(e)) {
    const c = (f) => {
      const u = dm(f, t, !0);
      u && (a = !0, st(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !a ? (je(e) && s.set(e, null), null) : (ge(r) ? r.forEach((c) => i[c] = null) : st(i, r), je(e) && s.set(e, i), i);
}
function _a(e, t) {
  return !e || !$r(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Fe(e, t[0].toLowerCase() + t.slice(1)) || Fe(e, Kn(t)) || Fe(e, t));
}
let Fl = !1;
function Qi() {
  Fl = !0;
}
function zu(e) {
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
    inheritAttrs: v
  } = e, _ = Yi(e);
  let y, b;
  M.NODE_ENV !== "production" && (Fl = !1);
  try {
    if (n.shapeFlag & 4) {
      const N = o || s, T = M.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(N, {
        get(R, I, D) {
          return ee(
            `Property '${String(
              I
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(R, I, D);
        }
      }) : N;
      y = nn(
        f.call(
          T,
          N,
          u,
          M.NODE_ENV !== "production" ? Sn(d) : d,
          h,
          p,
          m
        )
      ), b = a;
    } else {
      const N = t;
      M.NODE_ENV !== "production" && a === d && Qi(), y = nn(
        N.length > 1 ? N(
          M.NODE_ENV !== "production" ? Sn(d) : d,
          M.NODE_ENV !== "production" ? {
            get attrs() {
              return Qi(), Sn(a);
            },
            slots: i,
            emit: c
          } : { attrs: a, slots: i, emit: c }
        ) : N(
          M.NODE_ENV !== "production" ? Sn(d) : d,
          null
        )
      ), b = t.props ? a : $b(a);
    }
  } catch (N) {
    vr.length = 0, Hr(N, e, 1), y = ue(at);
  }
  let g = y, O;
  if (M.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([g, O] = fm(y)), b && v !== !1) {
    const N = Object.keys(b), { shapeFlag: T } = g;
    if (N.length) {
      if (T & 7)
        r && N.some(ji) && (b = jb(
          b,
          r
        )), g = kn(g, b, !1, !0);
      else if (M.NODE_ENV !== "production" && !Fl && g.type !== at) {
        const R = Object.keys(a), I = [], D = [];
        for (let w = 0, k = R.length; w < k; w++) {
          const A = R[w];
          $r(A) ? ji(A) || I.push(A[2].toLowerCase() + A.slice(3)) : D.push(A);
        }
        D.length && ee(
          `Extraneous non-props attributes (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), I.length && ee(
          `Extraneous non-emits event listeners (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (M.NODE_ENV !== "production" && !qu(g) && ee(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = kn(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (M.NODE_ENV !== "production" && !qu(g) && ee(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Nr(g, n.transition)), M.NODE_ENV !== "production" && O ? O(g) : y = g, Yi(_), y;
}
const fm = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Pc(t, !1);
  if (s) {
    if (M.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return fm(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (a) => {
    t[o] = a, n && (r > -1 ? n[r] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [nn(s), i];
};
function Pc(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Ys(o)) {
      if (o.type !== at || o.children === "v-if") {
        if (n)
          return;
        if (n = o, M.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Pc(n.children);
      }
    } else
      return;
  }
  return n;
}
const $b = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || $r(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, jb = (e, t) => {
  const n = {};
  for (const s in e)
    (!ji(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, qu = (e) => e.shapeFlag & 7 || e.type === at;
function Ub(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: a, patchFlag: c } = t, f = r.emitsOptions;
  if (M.NODE_ENV !== "production" && (o || a) && sn || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Yu(s, i, f) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (i[p] !== s[p] && !_a(f, p))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? Yu(s, i, f) : !0 : !!i;
  return !1;
}
function Yu(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !_a(n, r))
      return !0;
  }
  return !1;
}
function Hb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const pm = (e) => e.__isSuspense;
function Wb(e, t) {
  t && t.pendingBranch ? ge(e) ? t.effects.push(...e) : t.effects.push(e) : Th(e);
}
const Ce = Symbol.for("v-fgt"), qr = Symbol.for("v-txt"), at = Symbol.for("v-cmt"), gr = Symbol.for("v-stc"), vr = [];
let Lt = null;
function C(e = !1) {
  vr.push(Lt = e ? null : []);
}
function Kb() {
  vr.pop(), Lt = vr[vr.length - 1] || null;
}
let Dr = 1;
function Xu(e, t = !1) {
  Dr += e, e < 0 && Lt && t && (Lt.hasOnce = !0);
}
function hm(e) {
  return e.dynamicChildren = Dr > 0 ? Lt || wo : null, Kb(), Dr > 0 && Lt && Lt.push(e), e;
}
function x(e, t, n, s, o, r) {
  return hm(
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
  return hm(
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
function Ys(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ks(e, t) {
  if (M.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Si.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const zb = (...e) => gm(
  ...e
), mm = ({ key: e }) => e ?? null, Ti = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ge(e) || Ye(e) || Ae(e) ? { i: rt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, s = 0, o = null, r = e === Ce ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && mm(t),
    ref: t && Ti(t),
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
  return a ? (Vc(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ge(n) ? 8 : 16), M.NODE_ENV !== "production" && c.key !== c.key && ee("VNode created with invalid key (NaN). VNode type:", c.type), Dr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Lt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Lt.push(c), c;
}
const ue = M.NODE_ENV !== "production" ? zb : gm;
function gm(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === nb) && (M.NODE_ENV !== "production" && !e && ee(`Invalid vnode type when creating vnode: ${e}.`), e = at), Ys(e)) {
    const a = kn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vc(a, n), Dr > 0 && !r && Lt && (a.shapeFlag & 6 ? Lt[Lt.indexOf(e)] = a : Lt.push(a)), a.patchFlag = -2, a;
  }
  if (bm(e) && (e = e.__vccOpts), t) {
    t = ot(t);
    let { class: a, style: c } = t;
    a && !Ge(a) && (t.class = le(a)), je(c) && (Or(c) && !ge(c) && (c = st({}, c)), t.style = Vt(c));
  }
  const i = Ge(e) ? 1 : pm(e) ? 128 : Lh(e) ? 64 : je(e) ? 4 : Ae(e) ? 2 : 0;
  return M.NODE_ENV !== "production" && i & 4 && Or(e) && (e = Te(e), ee(
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
  return e ? Or(e) || nm(e) ? st({}, e) : e : null;
}
function kn(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: a, transition: c } = e, f = t ? _s(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && mm(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? ge(r) ? r.concat(Ti(t)) : [r, Ti(t)] : Ti(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: M.NODE_ENV !== "production" && i === -1 && ge(a) ? a.map(vm) : a,
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
  return c && s && Nr(
    u,
    c.clone(u)
  ), u;
}
function vm(e) {
  const t = kn(e);
  return ge(e.children) && (t.children = e.children.map(vm)), t;
}
function H(e = " ", t = 0) {
  return ue(qr, null, e, t);
}
function Bl(e, t) {
  const n = ue(gr, null, e);
  return n.staticCount = t, n;
}
function me(e = "", t = !1) {
  return t ? (C(), et(at, null, e)) : ue(at, null, e);
}
function nn(e) {
  return e == null || typeof e == "boolean" ? ue(at) : ge(e) ? ue(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ys(e) ? os(e) : ue(qr, null, String(e));
}
function os(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kn(e);
}
function Vc(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ge(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Vc(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !nm(t) ? t._ctx = rt : o === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ae(t) ? (t = { default: t, _ctx: rt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [H(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _s(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = le([t.class, s.class]));
      else if (o === "style")
        t.style = Vt([t.style, s.style]);
      else if ($r(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(ge(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function _n(e, t, n, s = null) {
  fn(e, t, 7, [
    n,
    s
  ]);
}
const qb = Zh();
let Yb = 0;
function Xb(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || qb, r = {
    uid: Yb++,
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
    scope: new eh(
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
    propsOptions: om(s, o),
    emitsOptions: dm(s, o),
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
  return M.NODE_ENV !== "production" ? r.ctx = ob(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Bb.bind(null, r), e.ce && e.ce(r), r;
}
let ct = null;
const Xn = () => ct || rt;
let Ji, $l;
{
  const e = Ur(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Ji = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ct = n
  ), $l = t(
    "__VUE_SSR_SETTERS__",
    (n) => kr = n
  );
}
const Yr = (e) => {
  const t = ct;
  return Ji(e), e.scope.on(), () => {
    e.scope.off(), Ji(t);
  };
}, Gu = () => {
  ct && ct.scope.off(), Ji(null);
}, Gb = /* @__PURE__ */ qn("slot,component");
function jl(e, { isNativeTag: t }) {
  (Gb(e) || t(e)) && ee(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function _m(e) {
  return e.vnode.shapeFlag & 4;
}
let kr = !1;
function Qb(e, t = !1, n = !1) {
  t && $l(t);
  const { props: s, children: o } = e.vnode, r = _m(e);
  gb(e, s, r, t), Tb(e, o, n || t);
  const i = r ? Jb(e, t) : void 0;
  return t && $l(!1), i;
}
function Jb(e, t) {
  var n;
  const s = e.type;
  if (M.NODE_ENV !== "production") {
    if (s.name && jl(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        jl(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        Ph(r[i]);
    }
    s.compilerOptions && Zb() && ee(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gh), M.NODE_ENV !== "production" && rb(e);
  const { setup: o } = s;
  if (o) {
    cn();
    const r = e.setupContext = o.length > 1 ? tE(e) : null, i = Yr(e), a = jo(
      o,
      e,
      0,
      [
        M.NODE_ENV !== "production" ? Sn(e.props) : e.props,
        r
      ]
    ), c = wc(a);
    if (un(), i(), (c || e.sp) && !So(e) && Kh(e), c) {
      if (a.then(Gu, Gu), t)
        return a.then((f) => {
          Qu(e, f, t);
        }).catch((f) => {
          Hr(f, e, 0);
        });
      if (e.asyncDep = a, M.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        ee(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Qu(e, a, t);
  } else
    ym(e, t);
}
function Qu(e, t, n) {
  Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : je(t) ? (M.NODE_ENV !== "production" && Ys(t) && ee(
    "setup() should not return VNodes directly - return a render function instead."
  ), M.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = wh(t), M.NODE_ENV !== "production" && ib(e)) : M.NODE_ENV !== "production" && t !== void 0 && ee(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), ym(e, n);
}
const Zb = () => !0;
function ym(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || dt);
  {
    const o = Yr(e);
    cn();
    try {
      lb(e);
    } finally {
      un(), o();
    }
  }
  M.NODE_ENV !== "production" && !s.render && e.render === dt && !t && (s.template ? ee(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : ee("Component is missing template or render function: ", s));
}
const Ju = M.NODE_ENV !== "production" ? {
  get(e, t) {
    return Qi(), ut(e, "get", ""), e[t];
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
function eE(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ut(e, "get", "$slots"), t[n];
    }
  });
}
function tE(e) {
  const t = (n) => {
    if (M.NODE_ENV !== "production" && (e.exposed && ee("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (ge(n) ? s = "array" : Ye(n) && (s = "ref")), s !== "object" && ee(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (M.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ju));
      },
      get slots() {
        return s || (s = eE(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ju),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function ya(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wh(as(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in $s)
        return $s[n](e);
    },
    has(t, n) {
      return n in t || n in $s;
    }
  })) : e.proxy;
}
const nE = /(?:^|[-_])(\w)/g, sE = (e) => e.replace(nE, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Lc(e, t = !0) {
  return Ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ba(e, t, n = !1) {
  let s = Lc(t);
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
  return s ? sE(s) : n ? "App" : "Anonymous";
}
function bm(e) {
  return Ae(e) && "__vccOpts" in e;
}
const $ = (e, t) => {
  const n = vy(e, t, kr);
  if (M.NODE_ENV !== "production") {
    const s = Xn();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Fc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? je(t) && !ge(t) ? Ys(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ys(n) && (n = [n]), ue(e, t, n));
}
function oE() {
  if (M.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!je(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (Ye(d)) {
        cn();
        const p = d.value;
        return un(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          a(p),
          ">"
        ];
      } else {
        if (an(d))
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
    d.type.props && d.props && p.push(i("props", Te(d.props))), d.setupState !== Be && p.push(i("setup", d.setupState)), d.data !== Be && p.push(i("data", Te(d.data)));
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
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : je(d) ? ["object", { object: p ? Te(d) : d }] : ["span", n, String(d)];
  }
  function c(d, p) {
    const h = d.type;
    if (Ae(h))
      return;
    const m = {};
    for (const v in d.ctx)
      f(h, v, p) && (m[v] = d.ctx[v]);
    return m;
  }
  function f(d, p, h) {
    const m = d[h];
    if (ge(m) && m.includes(p) || je(m) && p in m || d.extends && f(d.extends, p, h) || d.mixins && d.mixins.some((v) => f(v, p, h)))
      return !0;
  }
  function u(d) {
    return St(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Zu = "3.5.17", Cn = M.NODE_ENV !== "production" ? ee : dt;
var Xt = {};
let Ul;
const ed = typeof window < "u" && window.trustedTypes;
if (ed)
  try {
    Ul = /* @__PURE__ */ ed.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Xt.NODE_ENV !== "production" && Cn(`Error creating trusted types policy: ${e}`);
  }
const Em = Ul ? (e) => Ul.createHTML(e) : (e) => e, rE = "http://www.w3.org/2000/svg", iE = "http://www.w3.org/1998/Math/MathML", Bn = typeof document < "u" ? document : null, td = Bn && /* @__PURE__ */ Bn.createElement("template"), aE = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Bn.createElementNS(rE, e) : t === "mathml" ? Bn.createElementNS(iE, e) : n ? Bn.createElement(e, { is: n }) : Bn.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Bn.createTextNode(e),
  createComment: (e) => Bn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Bn.querySelector(e),
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
}, Zn = "transition", er = "animation", xr = Symbol("_vtc"), wm = {
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
}, lE = /* @__PURE__ */ st(
  {},
  $h,
  wm
), cE = (e) => (e.displayName = "Transition", e.props = lE, e), uE = /* @__PURE__ */ cE(
  (e, { slots: t }) => Fc(Hy, dE(e), t)
), Ss = (e, t = []) => {
  ge(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, nd = (e) => e ? ge(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function dE(e) {
  const t = {};
  for (const A in e)
    A in wm || (t[A] = e[A]);
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
  } = e, m = fE(o), v = m && m[0], _ = m && m[1], {
    onBeforeEnter: y,
    onEnter: b,
    onEnterCancelled: g,
    onLeave: O,
    onLeaveCancelled: N,
    onBeforeAppear: T = y,
    onAppear: R = b,
    onAppearCancelled: I = g
  } = t, D = (A, F, de, X) => {
    A._enterCancelled = X, Cs(A, F ? u : a), Cs(A, F ? f : i), de && de();
  }, w = (A, F) => {
    A._isLeaving = !1, Cs(A, d), Cs(A, h), Cs(A, p), F && F();
  }, k = (A) => (F, de) => {
    const X = A ? R : b, re = () => D(F, A, de);
    Ss(X, [F, re]), sd(() => {
      Cs(F, A ? c : r), Vn(F, A ? u : a), nd(X) || od(F, s, v, re);
    });
  };
  return st(t, {
    onBeforeEnter(A) {
      Ss(y, [A]), Vn(A, r), Vn(A, i);
    },
    onBeforeAppear(A) {
      Ss(T, [A]), Vn(A, c), Vn(A, f);
    },
    onEnter: k(!1),
    onAppear: k(!0),
    onLeave(A, F) {
      A._isLeaving = !0;
      const de = () => w(A, F);
      Vn(A, d), A._enterCancelled ? (Vn(A, p), ad()) : (ad(), Vn(A, p)), sd(() => {
        A._isLeaving && (Cs(A, d), Vn(A, h), nd(O) || od(A, s, _, de));
      }), Ss(O, [A, de]);
    },
    onEnterCancelled(A) {
      D(A, !1, void 0, !0), Ss(g, [A]);
    },
    onAppearCancelled(A) {
      D(A, !0, void 0, !0), Ss(I, [A]);
    },
    onLeaveCancelled(A) {
      w(A), Ss(N, [A]);
    }
  });
}
function fE(e) {
  if (e == null)
    return null;
  if (je(e))
    return [Xa(e.enter), Xa(e.leave)];
  {
    const t = Xa(e);
    return [t, t];
  }
}
function Xa(e) {
  const t = D_(e);
  return Xt.NODE_ENV !== "production" && Sy(t, "<transition> explicit duration"), t;
}
function Vn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[xr] || (e[xr] = /* @__PURE__ */ new Set())).add(t);
}
function Cs(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[xr];
  n && (n.delete(t), n.size || (e[xr] = void 0));
}
function sd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let pE = 0;
function od(e, t, n, s) {
  const o = e._endId = ++pE, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: a, propCount: c } = hE(e, t);
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
function hE(e, t) {
  const n = window.getComputedStyle(e), s = (m) => (n[m] || "").split(", "), o = s(`${Zn}Delay`), r = s(`${Zn}Duration`), i = rd(o, r), a = s(`${er}Delay`), c = s(`${er}Duration`), f = rd(a, c);
  let u = null, d = 0, p = 0;
  t === Zn ? i > 0 && (u = Zn, d = i, p = r.length) : t === er ? f > 0 && (u = er, d = f, p = c.length) : (d = Math.max(i, f), u = d > 0 ? i > f ? Zn : er : null, p = u ? u === Zn ? r.length : c.length : 0);
  const h = u === Zn && /\b(transform|all)(,|$)/.test(
    s(`${Zn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: p,
    hasTransform: h
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
function mE(e, t, n) {
  const s = e[xr];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zi = Symbol("_vod"), Am = Symbol("_vsh"), Sm = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Zi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : tr(e, t);
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
Xt.NODE_ENV !== "production" && (Sm.name = "show");
function tr(e, t) {
  e.style.display = t ? e[Zi] : "none", e[Am] = !t;
}
const gE = Symbol(Xt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), vE = /(^|;)\s*display\s*:/;
function _E(e, t, n) {
  const s = e.style, o = Ge(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (Ge(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Ni(s, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Ni(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Ni(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[gE];
      i && (n += ";" + i), s.cssText = n, r = vE.test(n);
    }
  } else t && e.removeAttribute("style");
  Zi in e && (e[Zi] = r ? s.display : "", e[Am] && (s.display = "none"));
}
const yE = /[^\\];\s*$/, ld = /\s*!important$/;
function Ni(e, t, n) {
  if (ge(n))
    n.forEach((s) => Ni(e, t, s));
  else if (n == null && (n = ""), Xt.NODE_ENV !== "production" && yE.test(n) && Cn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = bE(e, t);
    ld.test(n) ? e.setProperty(
      Kn(s),
      n.replace(ld, ""),
      "important"
    ) : e[s] = n;
  }
}
const cd = ["Webkit", "Moz", "ms"], Ga = {};
function bE(e, t) {
  const n = Ga[t];
  if (n)
    return n;
  let s = _t(t);
  if (s !== "filter" && s in e)
    return Ga[t] = s;
  s = Ws(s);
  for (let o = 0; o < cd.length; o++) {
    const r = cd[o] + s;
    if (r in e)
      return Ga[t] = r;
  }
  return t;
}
const ud = "http://www.w3.org/1999/xlink";
function dd(e, t, n, s, o, r = j_(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ud, t.slice(6, t.length)) : e.setAttributeNS(ud, t, n) : n == null || r && !Qp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ln(n) ? String(n) : n
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
    a === "boolean" ? n = Qp(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
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
function Un(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function EE(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const pd = Symbol("_vei");
function wE(e, t, n, s, o = null) {
  const r = e[pd] || (e[pd] = {}), i = r[t];
  if (s && i)
    i.value = Xt.NODE_ENV !== "production" ? md(s, t) : s;
  else {
    const [a, c] = AE(t);
    if (s) {
      const f = r[t] = OE(
        Xt.NODE_ENV !== "production" ? md(s, t) : s,
        o
      );
      Un(e, a, f, c);
    } else i && (EE(e, a, i, c), r[t] = void 0);
  }
}
const hd = /(?:Once|Passive|Capture)$/;
function AE(e) {
  let t;
  if (hd.test(e)) {
    t = {};
    let s;
    for (; s = e.match(hd); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Kn(e.slice(2)), t];
}
let Qa = 0;
const SE = /* @__PURE__ */ Promise.resolve(), CE = () => Qa || (SE.then(() => Qa = 0), Qa = Date.now());
function OE(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    fn(
      TE(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = CE(), n;
}
function md(e, t) {
  return Ae(e) || ge(e) ? e : (Cn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), dt);
}
function TE(e, t) {
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
const gd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, NE = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? mE(e, s, i) : t === "style" ? _E(e, n, s) : $r(t) ? ji(t) || wE(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : DE(e, t, s, i)) ? (fd(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && dd(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ge(s)) ? fd(e, _t(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), dd(e, t, s, i));
};
function DE(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gd(t) && Ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return gd(t) && Ge(n) ? !1 : t in e;
}
const fs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ge(t) ? (n) => po(t, n) : t;
};
function kE(e) {
  e.target.composing = !0;
}
function vd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const zt = Symbol("_assign"), Co = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[zt] = fs(o);
    const r = s || o.props && o.props.type === "number";
    Un(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), r && (a = Ui(a)), e[zt](a);
    }), n && Un(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Un(e, "compositionstart", kE), Un(e, "compositionend", vd), Un(e, "change", vd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[zt] = fs(i), e.composing) return;
    const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? Ui(e.value) : e.value, c = t ?? "";
    a !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, xE = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[zt] = fs(n), Un(e, "change", () => {
      const s = e._modelValue, o = To(e), r = e.checked, i = e[zt];
      if (ge(s)) {
        const a = Cc(s, o), c = a !== -1;
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
        i(Cm(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: _d,
  beforeUpdate(e, t, n) {
    e[zt] = fs(n), _d(e, t, n);
  }
};
function _d(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (ge(t))
    o = Cc(t, s.props.value) > -1;
  else if ($o(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Ks(t, Cm(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Oo = {
  created(e, { value: t }, n) {
    e.checked = Ks(t, n.props.value), e[zt] = fs(n), Un(e, "change", () => {
      e[zt](To(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[zt] = fs(s), t !== n && (e.checked = Ks(t, s.props.value));
  }
}, us = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = $o(t);
    Un(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Ui(To(i)) : To(i)
      );
      e[zt](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, zs(() => {
        e._assigning = !1;
      });
    }), e[zt] = fs(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    yd(e, t);
  },
  beforeUpdate(e, t, n) {
    e[zt] = fs(n);
  },
  updated(e, { value: t }) {
    e._assigning || yd(e, t);
  }
};
function yd(e, t) {
  const n = e.multiple, s = ge(t);
  if (n && !s && !$o(t)) {
    Xt.NODE_ENV !== "production" && Cn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], a = To(i);
    if (n)
      if (s) {
        const c = typeof a;
        c === "string" || c === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = Cc(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (Ks(To(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function To(e) {
  return "_value" in e ? e._value : e.value;
}
function Cm(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const RE = ["ctrl", "shift", "alt", "meta"], IE = {
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
  exact: (e, t) => RE.some((n) => e[`${n}Key`] && !t.includes(n))
}, Om = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const a = IE[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...r);
  });
}, ME = /* @__PURE__ */ st({ patchProp: NE }, aE);
let bd;
function PE() {
  return bd || (bd = kb(ME));
}
const Ea = (...e) => {
  const t = PE().createApp(...e);
  Xt.NODE_ENV !== "production" && (LE(t), FE(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = BE(s);
    if (!o) return;
    const r = t._component;
    !Ae(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
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
function LE(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => L_(t) || F_(t) || B_(t),
    writable: !1
  });
}
function FE(e) {
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
function BE(e) {
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
var $E = {};
function jE() {
  oE();
}
$E.NODE_ENV !== "production" && jE();
var UE = Object.create, Tm = Object.defineProperty, HE = Object.getOwnPropertyDescriptor, Bc = Object.getOwnPropertyNames, WE = Object.getPrototypeOf, KE = Object.prototype.hasOwnProperty, zE = (e, t) => function() {
  return e && (t = (0, e[Bc(e)[0]])(e = 0)), t;
}, qE = (e, t) => function() {
  return t || (0, e[Bc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, YE = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Bc(t))
      !KE.call(e, o) && o !== n && Tm(e, o, { get: () => t[o], enumerable: !(s = HE(t, o)) || s.enumerable });
  return e;
}, XE = (e, t, n) => (n = e != null ? UE(WE(e)) : {}, YE(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Tm(n, "default", { value: e, enumerable: !0 }),
  e
)), Xr = zE({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), GE = qE({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    Xr(), t.exports = s;
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
        for (let v = 0; v < h.length; v++) {
          const _ = h[v], y = d[_];
          typeof y != "object" || y === null ? m[_] = y : y.constructor !== Object && (a = i.get(y.constructor)) ? m[_] = a(y, p) : ArrayBuffer.isView(y) ? m[_] = n(y) : m[_] = p(y);
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
        const v = Object.keys(h), _ = new Array(v.length);
        for (let y = 0; y < v.length; y++) {
          const b = v[y], g = h[b];
          if (typeof g != "object" || g === null)
            _[b] = g;
          else if (g.constructor !== Object && (f = c.get(g.constructor)))
            _[b] = f(g, m);
          else if (ArrayBuffer.isView(g))
            _[b] = n(g);
          else {
            const O = i.indexOf(g);
            O !== -1 ? _[b] = a[O] : _[b] = m(g);
          }
        }
        return _;
      }
      function d(h) {
        if (typeof h != "object" || h === null) return h;
        if (Array.isArray(h)) return u(h, d);
        if (h.constructor !== Object && (f = c.get(h.constructor)))
          return f(h, d);
        const m = {};
        i.push(h), a.push(m);
        for (const v in h) {
          if (Object.hasOwnProperty.call(h, v) === !1) continue;
          const _ = h[v];
          if (typeof _ != "object" || _ === null)
            m[v] = _;
          else if (_.constructor !== Object && (f = c.get(_.constructor)))
            m[v] = f(_, d);
          else if (ArrayBuffer.isView(_))
            m[v] = n(_);
          else {
            const y = i.indexOf(_);
            y !== -1 ? m[v] = a[y] : m[v] = d(_);
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
        for (const v in h) {
          const _ = h[v];
          if (typeof _ != "object" || _ === null)
            m[v] = _;
          else if (_.constructor !== Object && (f = c.get(_.constructor)))
            m[v] = f(_, p);
          else if (ArrayBuffer.isView(_))
            m[v] = n(_);
          else {
            const y = i.indexOf(_);
            y !== -1 ? m[v] = a[y] : m[v] = p(_);
          }
        }
        return i.pop(), a.pop(), m;
      }
    }
  }
});
Xr();
Xr();
Xr();
var Nm = typeof navigator < "u", he = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof he.chrome < "u" && he.chrome.devtools;
Nm && (he.self, he.top);
var Ed;
typeof navigator < "u" && ((Ed = navigator.userAgent) == null || Ed.toLowerCase().includes("electron"));
Xr();
var QE = XE(GE()), JE = /(?:^|[-_/])(\w)/g;
function ZE(e, t) {
  return t ? t.toUpperCase() : "";
}
function e1(e) {
  return e && `${e}`.replace(JE, ZE);
}
function t1(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const s = n.lastIndexOf("/"), o = n.substring(s + 1);
  {
    const r = o.lastIndexOf(t);
    return o.substring(0, r);
  }
}
var wd = (0, QE.default)({ circles: !0 });
const n1 = {
  trailing: !0
};
function No(e, t = 25, n = {}) {
  if (n = { ...n1, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let s, o, r = [], i, a;
  const c = (f, u) => (i = s1(e, f, u), i.finally(() => {
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
async function s1(e, t, n) {
  return await e.apply(t, n);
}
function Hl(e, t = {}, n) {
  for (const s in e) {
    const o = e[s], r = n ? `${n}:${s}` : s;
    typeof o == "object" && o !== null ? Hl(o, t, r) : typeof o == "function" && (t[r] = o);
  }
  return t;
}
const o1 = { run: (e) => e() }, r1 = () => o1, Dm = typeof console.createTask < "u" ? console.createTask : r1;
function i1(e, t) {
  const n = t.shift(), s = Dm(n);
  return e.reduce(
    (o, r) => o.then(() => s.run(() => r(...t))),
    Promise.resolve()
  );
}
function a1(e, t) {
  const n = t.shift(), s = Dm(n);
  return Promise.all(e.map((o) => s.run(() => o(...t))));
}
function Ja(e, t) {
  for (const n of [...e])
    n(t);
}
class l1 {
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
    const n = Hl(t), s = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of s.splice(0, s.length))
        o();
    };
  }
  removeHooks(t) {
    const n = Hl(t);
    for (const s in n)
      this.removeHook(s, n[s]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(i1, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(a1, t, ...n);
  }
  callHookWith(t, n, ...s) {
    const o = this._before || this._after ? { name: n, args: s, context: {} } : void 0;
    this._before && Ja(this._before, o);
    const r = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      s
    );
    return r instanceof Promise ? r.finally(() => {
      this._after && o && Ja(this._after, o);
    }) : (this._after && o && Ja(this._after, o), r);
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
function km() {
  return new l1();
}
var c1 = Object.create, xm = Object.defineProperty, u1 = Object.getOwnPropertyDescriptor, $c = Object.getOwnPropertyNames, d1 = Object.getPrototypeOf, f1 = Object.prototype.hasOwnProperty, p1 = (e, t) => function() {
  return e && (t = (0, e[$c(e)[0]])(e = 0)), t;
}, Rm = (e, t) => function() {
  return t || (0, e[$c(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, h1 = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of $c(t))
      !f1.call(e, o) && o !== n && xm(e, o, { get: () => t[o], enumerable: !(s = u1(t, o)) || s.enumerable });
  return e;
}, m1 = (e, t, n) => (n = e != null ? c1(d1(e)) : {}, h1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  xm(n, "default", { value: e, enumerable: !0 }),
  e
)), G = p1({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), g1 = Rm({
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
      }, c = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), u = [".", "!", "~", "*", "'", "(", ")"].join(""), d = function(_, y) {
        var b = "-", g = "", O = "", N = !0, T = {}, R, I, D, w, k, A, F, de, X, re, z, ce, be, Ze, K = "";
        if (typeof _ != "string")
          return "";
        if (typeof y == "string" && (b = y), F = a.en, de = i.en, typeof y == "object") {
          R = y.maintainCase || !1, T = y.custom && typeof y.custom == "object" ? y.custom : T, D = +y.truncate > 1 && y.truncate || !1, w = y.uric || !1, k = y.uricNoSlash || !1, A = y.mark || !1, N = !(y.symbols === !1 || y.lang === !1), b = y.separator || b, w && (K += c), k && (K += f), A && (K += u), F = y.lang && a[y.lang] && N ? a[y.lang] : N ? a.en : {}, de = y.lang && i[y.lang] ? i[y.lang] : y.lang === !1 || y.lang === !0 ? {} : i.en, y.titleCase && typeof y.titleCase.length == "number" && Array.prototype.toString.call(y.titleCase) ? (y.titleCase.forEach(function(oe) {
            T[oe + ""] = oe + "";
          }), I = !0) : I = !!y.titleCase, y.custom && typeof y.custom.length == "number" && Array.prototype.toString.call(y.custom) && y.custom.forEach(function(oe) {
            T[oe + ""] = oe + "";
          }), Object.keys(T).forEach(function(oe) {
            var pe;
            oe.length > 1 ? pe = new RegExp("\\b" + h(oe) + "\\b", "gi") : pe = new RegExp(h(oe), "gi"), _ = _.replace(pe, T[oe]);
          });
          for (z in T)
            K += z;
        }
        for (K += b, K = h(K), _ = _.replace(/(^\s+|\s+$)/g, ""), be = !1, Ze = !1, re = 0, ce = _.length; re < ce; re++)
          z = _[re], m(z, T) ? be = !1 : de[z] ? (z = be && de[z].match(/[A-Za-z0-9]/) ? " " + de[z] : de[z], be = !1) : z in s ? (re + 1 < ce && o.indexOf(_[re + 1]) >= 0 ? (O += z, z = "") : Ze === !0 ? (z = r[O] + s[z], O = "") : z = be && s[z].match(/[A-Za-z0-9]/) ? " " + s[z] : s[z], be = !1, Ze = !1) : z in r ? (O += z, z = "", re === ce - 1 && (z = r[O]), Ze = !0) : /* process symbol chars */ F[z] && !(w && c.indexOf(z) !== -1) && !(k && f.indexOf(z) !== -1) ? (z = be || g.substr(-1).match(/[A-Za-z0-9]/) ? b + F[z] : F[z], z += _[re + 1] !== void 0 && _[re + 1].match(/[A-Za-z0-9]/) ? b : "", be = !0) : (Ze === !0 ? (z = r[O] + z, O = "", Ze = !1) : be && (/[A-Za-z0-9]/.test(z) || g.substr(-1).match(/A-Za-z0-9]/)) && (z = " " + z), be = !1), g += z.replace(new RegExp("[^\\w\\s" + K + "_-]", "g"), b);
        return I && (g = g.replace(/(\w)(\S*)/g, function(oe, pe, we) {
          var ke = pe.toUpperCase() + (we !== null ? we : "");
          return Object.keys(T).indexOf(ke.toLowerCase()) < 0 ? ke : ke.toLowerCase();
        })), g = g.replace(/\s+/g, b).replace(new RegExp("\\" + b + "+", "g"), b).replace(new RegExp("(^\\" + b + "+|\\" + b + "+$)", "g"), ""), D && g.length > D && (X = g.charAt(D) === b, g = g.slice(0, D), X || (g = g.slice(0, g.lastIndexOf(b)))), !R && !I && (g = g.toLowerCase()), g;
      }, p = function(_) {
        return function(b) {
          return d(b, _);
        };
      }, h = function(_) {
        return _.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, m = function(v, _) {
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
}), v1 = Rm({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    G(), t.exports = g1();
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
function _1(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function y1(e) {
  const t = e.__file;
  if (t)
    return e1(t1(t, ".vue"));
}
function Ad(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function jc(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Im(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, o = jc(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === s : !1;
}
function wa(e) {
  var t, n, s;
  const o = _1(e?.type || {});
  if (o)
    return o;
  if (e?.root === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === e?.type)
      return Ad(e, i);
  for (const i in (s = e.appContext) == null ? void 0 : s.components)
    if (e.appContext.components[i] === e?.type)
      return Ad(e, i);
  const r = y1(e?.type || {});
  return r || "Anonymous Component";
}
function b1(e) {
  var t, n, s;
  const o = (s = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, r = e === e?.root ? "root" : e.uid;
  return `${o}:${r}`;
}
function Wl(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function E1() {
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
var ci;
function w1(e) {
  return ci || (ci = document.createRange()), ci.selectNode(e), ci.getBoundingClientRect();
}
function A1(e) {
  const t = E1();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const o = e.children[n];
    let r;
    if (o.component)
      r = Xs(o.component);
    else if (o.el) {
      const i = o.el;
      i.nodeType === 1 || i.getBoundingClientRect ? r = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (r = w1(i));
    }
    r && S1(t, r);
  }
  return t;
}
function S1(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Sd = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Xs(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Sd : Im(e) ? A1(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Xs(e.subTree.component) : Sd;
}
G();
function Uc(e) {
  return Im(e) ? C1(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function C1(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...Uc(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Mm = "__vue-devtools-component-inspector__", Pm = "__vue-devtools-component-inspector__card__", Vm = "__vue-devtools-component-inspector__name__", Lm = "__vue-devtools-component-inspector__indicator__", Fm = {
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
}, T1 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Ho() {
  return document.getElementById(Mm);
}
function N1() {
  return document.getElementById(Pm);
}
function D1() {
  return document.getElementById(Lm);
}
function k1() {
  return document.getElementById(Vm);
}
function Hc(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function Wc(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Mm, Object.assign(n.style, {
    ...Fm,
    ...Hc(e.bounds),
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
  return r.id = Lm, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(r.style, T1), s.appendChild(o), s.appendChild(r), n.appendChild(s), document.body.appendChild(n), n;
}
function Kc(e) {
  const t = Ho(), n = N1(), s = k1(), o = D1();
  t && (Object.assign(t.style, {
    ...Fm,
    ...Hc(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function x1(e) {
  const t = Xs(e);
  if (!t.width && !t.height)
    return;
  const n = wa(e);
  Ho() ? Kc({ bounds: t, name: n }) : Wc({ bounds: t, name: n });
}
function Bm() {
  const e = Ho();
  e && (e.style.display = "none");
}
var Kl = null;
function zl(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Kl = n, n.vnode.el)) {
      const o = Xs(n), r = wa(n);
      Ho() ? Kc({ bounds: o, name: r }) : Wc({ bounds: o, name: r });
    }
  }
}
function R1(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Kl) {
    const n = b1(Kl);
    t(n);
  }
}
var ea = null;
function I1() {
  Bm(), window.removeEventListener("mouseover", zl), window.removeEventListener("click", ea, !0), ea = null;
}
function M1() {
  return window.addEventListener("mouseover", zl), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), R1(n, (s) => {
        window.removeEventListener("click", t, !0), ea = null, window.removeEventListener("mouseover", zl);
        const o = Ho();
        o && (o.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    ea = t, window.addEventListener("click", t, !0);
  });
}
function P1(e) {
  const t = Wl(At.value, e.id);
  if (t) {
    const [n] = Uc(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = Xs(t), o = document.createElement("div"), r = {
        ...Hc(s),
        position: "absolute"
      };
      Object.assign(o.style, r), document.body.appendChild(o), o.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      const s = Xs(t);
      if (s.width || s.height) {
        const o = wa(t), r = Ho();
        r ? Kc({ ...e, name: o, bounds: s }) : Wc({ ...e, name: o, bounds: s }), setTimeout(() => {
          r && (r.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
G();
var Cd, Od;
(Od = (Cd = he).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Cd.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function V1(e) {
  let t = 0;
  const n = setInterval(() => {
    he.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function L1() {
  const e = he.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function F1() {
  return new Promise((e) => {
    function t() {
      L1(), e(he.__VUE_INSPECTOR__);
    }
    he.__VUE_INSPECTOR__ ? t() : V1(() => {
      t();
    });
  });
}
G();
G();
function B1(e) {
  return !!(e && e.__v_isReadonly);
}
function $m(e) {
  return B1(e) ? $m(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Za(e) {
  return !!(e && e.__v_isRef === !0);
}
function cr(e) {
  const t = e && e.__v_raw;
  return t ? cr(t) : e;
}
var $1 = class {
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
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : cr(t) instanceof Map ? t.delete(n) : cr(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const o = t[e.newKey || n];
        this.refEditor.isRef(o) ? this.refEditor.set(o, s) : cr(t) instanceof Map ? t.set(e.newKey || n, s) : cr(t) instanceof Set ? t.add(s) : t[e.newKey || n] = s;
      }
    };
  }
}, j1 = class {
  set(e, t) {
    if (Za(e))
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
    return Za(e) ? e.value : e;
  }
  isRef(e) {
    return Za(e) || $m(e);
  }
};
G();
G();
G();
var U1 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function H1() {
  if (!Nm || typeof localStorage > "u" || localStorage === null)
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
G();
G();
G();
var Td, Nd;
(Nd = (Td = he).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Td.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var W1 = new Proxy(he.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function K1(e, t) {
  ft.timelineLayersState[t.id] = !1, W1.push({
    ...e,
    descriptorId: t.id,
    appRecord: jc(t.app)
  });
}
var Dd, kd;
(kd = (Dd = he).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Dd.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var zc = new Proxy(he.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), jm = No(() => {
  Wo.hooks.callHook("sendInspectorToClient", Um());
});
function z1(e, t) {
  var n, s;
  zc.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: jc(t.app)
  }), jm();
}
function Um() {
  return zc.filter((e) => e.descriptor.app === At.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function Di(e, t) {
  return zc.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function q1() {
  const e = km();
  e.hook("addInspector", ({ inspector: s, plugin: o }) => {
    z1(s, o.descriptor);
  });
  const t = No(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ft.highPerfModeEnabled)
      return;
    const i = Di(s, o.descriptor.app), a = {
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
    const i = Di(s, o.descriptor.app), a = {
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
    const i = Di(s, r.descriptor.app);
    i && (i.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: o }) => {
    K1(s, o.descriptor);
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
  }), e.hook("getComponentBounds", async ({ instance: s }) => Xs(s)), e.hook("getComponentName", ({ instance: s }) => wa(s)), e.hook("componentHighlight", ({ uid: s }) => {
    const o = At.value.instanceMap.get(s);
    o && x1(o);
  }), e.hook("componentUnhighlight", () => {
    Bm();
  }), e;
}
var xd, Rd;
(Rd = (xd = he).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (xd.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Id, Md;
(Md = (Id = he).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Id.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Pd, Vd;
(Vd = (Pd = he).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Pd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Ld, Fd;
(Fd = (Ld = he).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Ld.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Bd, $d;
($d = (Bd = he).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Bd.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var xs = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function Y1() {
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
var jd, Ud;
(Ud = (jd = he)[xs]) != null || (jd[xs] = Y1());
var X1 = No((e) => {
  Wo.hooks.callHook("devtoolsStateUpdated", { state: e });
});
No((e, t) => {
  Wo.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var Aa = new Proxy(he.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? he.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : he.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), At = new Proxy(he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Hm() {
  X1({
    ...he[xs],
    appRecords: Aa.value,
    activeAppRecordId: At.id,
    tabs: he.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: he.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function G1(e) {
  he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Hm();
}
function Q1(e) {
  he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Hm();
}
var ft = new Proxy(he[xs], {
  get(e, t) {
    return t === "appRecords" ? Aa : t === "activeAppRecordId" ? At.id : t === "tabs" ? he.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? he.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : he[xs][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...he[xs] }, e[t] = n, he[xs][t] = n, !0;
  }
});
function J1(e = {}) {
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
G();
G();
G();
G();
G();
var Hd, Wd;
(Wd = (Hd = he).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Hd.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var qc = new Proxy(he.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
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
function Yc(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Z1(e) {
  var t, n, s;
  const o = (n = (t = qc.find((r) => {
    var i;
    return r[0].id === e && !!((i = r[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = o?.settings) != null ? s : null;
}
function Wm(e, t) {
  var n, s, o;
  const r = Yc(e);
  if (r) {
    const i = localStorage.getItem(r);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (s = (n = qc.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? s : null;
    return ql((o = i?.settings) != null ? o : {});
  }
  return ql(t);
}
function e0(e, t) {
  const n = Yc(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(ql(t)));
}
function t0(e, t, n) {
  const s = Yc(e), o = localStorage.getItem(s), r = JSON.parse(o || "{}"), i = {
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
var Kd, zd, Pt = (zd = (Kd = he).__VUE_DEVTOOLS_HOOK) != null ? zd : Kd.__VUE_DEVTOOLS_HOOK = km(), n0 = {
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
}, Km = {
  on: n0,
  setupDevToolsPlugin(e, t) {
    return Pt.callHook("devtools-plugin:setup", e, t);
  }
}, s0 = class {
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
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && e0(e.id, this.plugin.descriptor.settings);
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
    return Wm(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, o0 = s0;
G();
G();
G();
G();
var r0 = "__vue_devtool_undefined__", i0 = "__vue_devtool_infinity__", a0 = "__vue_devtool_negative_infinity__", l0 = "__vue_devtool_nan__";
G();
G();
var c0 = {
  [r0]: "undefined",
  [l0]: "NaN",
  [i0]: "Infinity",
  [a0]: "-Infinity"
};
Object.entries(c0).reduce((e, [t, n]) => (e[n] = t, e), {});
G();
G();
G();
G();
G();
var qd, Yd;
(Yd = (qd = he).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (qd.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function zm(e, t) {
  return Km.setupDevToolsPlugin(e, t);
}
function u0(e, t) {
  const [n, s] = e;
  if (n.app !== t)
    return;
  const o = new o0({
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
function qm(e, t) {
  he.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || ft.highPerfModeEnabled && !t?.inspectingComponent || (he.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), qc.forEach((n) => {
    u0(n, e);
  }));
}
G();
G();
var Rr = "__VUE_DEVTOOLS_ROUTER__", Do = "__VUE_DEVTOOLS_ROUTER_INFO__", Xd, Gd;
(Gd = (Xd = he)[Do]) != null || (Xd[Do] = {
  currentRoute: null,
  routes: []
});
var Qd, Jd;
(Jd = (Qd = he)[Rr]) != null || (Qd[Rr] = {});
new Proxy(he[Do], {
  get(e, t) {
    return he[Do][t];
  }
});
new Proxy(he[Rr], {
  get(e, t) {
    if (t === "value")
      return he[Rr];
  }
});
function d0(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Xc(e) {
  return e.map((t) => {
    let { path: n, name: s, children: o, meta: r } = t;
    return o?.length && (o = Xc(o)), {
      path: n,
      name: s,
      children: o,
      meta: r
    };
  });
}
function f0(e) {
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
      matched: Xc(i)
    };
  }
  return e;
}
function p0(e, t) {
  function n() {
    var s;
    const o = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, r = f0(o?.currentRoute.value), i = Xc(d0(o)), a = console.warn;
    console.warn = () => {
    }, he[Do] = {
      currentRoute: r ? wd(r) : {},
      routes: wd(i)
    }, he[Rr] = o, console.warn = a;
  }
  n(), Km.on.componentUpdated(No(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !ft.highPerfModeEnabled && Wo.hooks.callHook("routerInfoUpdated", { state: he[Do] }));
  }, 200));
}
function h0(e) {
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
      const n = new $1(), s = {
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
      const n = Di(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return M1();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return I1();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Wl(At.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return P1({ id: t });
    },
    // open in editor
    openInEditor: J1,
    // get vue inspector
    getVueInspector: F1,
    // toggle app
    toggleApp(t, n) {
      const s = Aa.value.find((o) => o.id === t);
      s && (Q1(t), G1(s), p0(s, At), jm(), qm(s.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Wl(At.value, t);
      if (n) {
        const [s] = Uc(n);
        s && (he.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = s);
      }
    },
    updatePluginSettings(t, n, s) {
      t0(t, n, s);
    },
    getPluginSettings(t) {
      return {
        options: Z1(t),
        values: Wm(t)
      };
    }
  };
}
G();
var Zd, ef;
(ef = (Zd = he).__VUE_DEVTOOLS_ENV__) != null || (Zd.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var tf = q1(), nf, sf;
(sf = (nf = he).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (nf.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: tf,
  get state() {
    return {
      ...ft,
      activeAppRecordId: At.id,
      activeAppRecord: At.value,
      appRecords: Aa.value
    };
  },
  api: h0(tf)
});
var Wo = he.__VUE_DEVTOOLS_KIT_CONTEXT__;
G();
m1(v1());
var of, rf;
(rf = (of = he).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (of.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
G();
G();
function m0(e) {
  ft.highPerfModeEnabled = e ?? !ft.highPerfModeEnabled, !e && At.value && qm(At.value.app);
}
G();
G();
G();
function g0(e) {
  ft.devtoolsClientDetected = {
    ...ft.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(ft.devtoolsClientDetected).some(Boolean);
  m0(!t);
}
var af, lf;
(lf = (af = he).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (af.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = g0);
G();
G();
G();
G();
G();
G();
G();
var v0 = class {
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
}, Ym = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new v0();
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
}, _0 = class extends Ym {
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
function y0(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function b0(e, t) {
  const n = y0(e);
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
function ki(e, t) {
  return e.indexOf(t) !== -1;
}
function cf(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var E0 = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return b0(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
G();
G();
var w0 = (e) => Object.prototype.toString.call(e).slice(8, -1), Xm = (e) => typeof e > "u", A0 = (e) => e === null, Ir = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Yl = (e) => Ir(e) && Object.keys(e).length === 0, ps = (e) => Array.isArray(e), S0 = (e) => typeof e == "string", C0 = (e) => typeof e == "number" && !isNaN(e), O0 = (e) => typeof e == "boolean", T0 = (e) => e instanceof RegExp, Mr = (e) => e instanceof Map, Pr = (e) => e instanceof Set, Gm = (e) => w0(e) === "Symbol", N0 = (e) => e instanceof Date && !isNaN(e.valueOf()), D0 = (e) => e instanceof Error, uf = (e) => typeof e == "number" && isNaN(e), k0 = (e) => O0(e) || A0(e) || Xm(e) || C0(e) || S0(e) || Gm(e), x0 = (e) => typeof e == "bigint", R0 = (e) => e === 1 / 0 || e === -1 / 0, I0 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), M0 = (e) => e instanceof URL;
G();
var Qm = (e) => e.replace(/\./g, "\\."), el = (e) => e.map(String).map(Qm).join("."), _r = (e) => {
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
function yn(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Jm = [
  yn(Xm, "undefined", () => null, () => {
  }),
  yn(x0, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  yn(N0, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  yn(D0, "Error", (e, t) => {
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
  yn(T0, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  yn(
    Pr,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  yn(Mr, "map", (e) => [...e.entries()], (e) => new Map(e)),
  yn((e) => uf(e) || R0(e), "number", (e) => uf(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  yn((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  yn(M0, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Sa(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Zm = Sa((e, t) => Gm(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
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
].reduce((e, t) => (e[t.name] = t, e), {}), eg = Sa(I0, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = P0[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function tg(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var ng = Sa(tg, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), sg = Sa((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), V0 = [ng, Zm, sg, eg], df = (e, t) => {
  const n = cf(V0, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = cf(Jm, (o) => o.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, og = {};
Jm.forEach((e) => {
  og[e.annotation] = e;
});
var L0 = (e, t, n) => {
  if (ps(t))
    switch (t[0]) {
      case "symbol":
        return Zm.untransform(e, t, n);
      case "class":
        return ng.untransform(e, t, n);
      case "custom":
        return sg.untransform(e, t, n);
      case "typed-array":
        return eg.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const s = og[t];
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
function rg(e) {
  if (ki(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (ki(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (ki(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var F0 = (e, t) => {
  rg(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Pr(e))
      e = _o(e, +s);
    else if (Mr(e)) {
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
}, Xl = (e, t, n) => {
  if (rg(t), t.length === 0)
    return n(e);
  let s = e;
  for (let r = 0; r < t.length - 1; r++) {
    const i = t[r];
    if (ps(s)) {
      const a = +i;
      s = s[a];
    } else if (Ir(s))
      s = s[i];
    else if (Pr(s)) {
      const a = +i;
      s = _o(s, a);
    } else if (Mr(s)) {
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
  if (ps(s) ? s[+o] = n(s[+o]) : Ir(s) && (s[o] = n(s[o])), Pr(s)) {
    const r = _o(s, +o), i = n(r);
    r !== i && (s.delete(r), s.add(i));
  }
  if (Mr(s)) {
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
function Gl(e, t, n = []) {
  if (!e)
    return;
  if (!ps(e)) {
    ko(e, (r, i) => Gl(r, t, [...n, ..._r(i)]));
    return;
  }
  const [s, o] = e;
  o && ko(o, (r, i) => {
    Gl(r, t, [...n, ..._r(i)]);
  }), t(s, n);
}
function B0(e, t, n) {
  return Gl(t, (s, o) => {
    e = Xl(e, o, (r) => L0(r, s, n));
  }), e;
}
function $0(e, t) {
  function n(s, o) {
    const r = F0(e, _r(o));
    s.map(_r).forEach((i) => {
      e = Xl(e, i, () => r);
    });
  }
  if (ps(t)) {
    const [s, o] = t;
    s.forEach((r) => {
      e = Xl(e, _r(r), () => e);
    }), o && ko(o, n);
  } else
    ko(t, n);
  return e;
}
var j0 = (e, t) => Ir(e) || ps(e) || Mr(e) || Pr(e) || tg(e, t);
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
    r.length === 0 ? s = i.map(el) : n[el(r)] = i.map(el);
  }), s ? Yl(n) ? [s] : [s, n] : Yl(n) ? void 0 : n;
}
var ig = (e, t, n, s, o = [], r = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const c = k0(e);
  if (!c) {
    U0(e, o, t);
    const m = i.get(e);
    if (m)
      return s ? {
        transformedValue: null
      } : m;
  }
  if (!j0(e, n)) {
    const m = df(e, n), v = m ? {
      transformedValue: m.value,
      annotations: [m.type]
    } : {
      transformedValue: e
    };
    return c || i.set(e, v), v;
  }
  if (ki(r, e))
    return {
      transformedValue: null
    };
  const f = df(e, n), u = (a = f?.value) != null ? a : e, d = ps(u) ? [] : {}, p = {};
  ko(u, (m, v) => {
    if (v === "__proto__" || v === "constructor" || v === "prototype")
      throw new Error(`Detected property ${v}. This is a prototype pollution risk, please remove it from your object.`);
    const _ = ig(m, t, n, s, [...o, v], [...r, e], i);
    d[v] = _.transformedValue, ps(_.annotations) ? p[v] = _.annotations : Ir(_.annotations) && ko(_.annotations, (y, b) => {
      p[Qm(v) + "." + b] = y;
    });
  });
  const h = Yl(p) ? {
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
function ag(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function ff(e) {
  return ag(e) === "Array";
}
function W0(e) {
  if (ag(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function K0(e, t, n, s, o) {
  const r = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  r === "enumerable" && (e[t] = n), o && r === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Ql(e, t = {}) {
  if (ff(e))
    return e.map((o) => Ql(o, t));
  if (!W0(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((o, r) => {
    if (ff(t.props) && !t.props.includes(r))
      return o;
    const i = e[r], a = Ql(i, t);
    return K0(o, r, a, e, t.nonenumerable), o;
  }, {});
}
var Xe = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new _0(), this.symbolRegistry = new Ym((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new E0(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = ig(e, t, this, this.dedupe), s = {
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
    let s = Ql(t);
    return n?.values && (s = B0(s, n.values, this)), n?.referentialEqualities && (s = $0(s, n.referentialEqualities)), s;
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
var pf, hf;
(hf = (pf = he).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (pf.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var mf, gf;
(gf = (mf = he).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (mf.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var vf, _f;
(_f = (vf = he).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (vf.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var yf, bf;
(bf = (yf = he).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (yf.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var Ef, wf;
(wf = (Ef = he).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (Ef.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Af, Sf;
(Sf = (Af = he).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (Af.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
G();
G();
G();
G();
G();
G();
G();
var Le = {};
let ur;
const Vr = (e) => ur = e, lg = Le.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Gs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var On;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(On || (On = {}));
const ls = typeof window < "u", Cf = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function z0(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Gc(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    dg(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function cg(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function xi(e) {
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
const Ri = typeof navigator == "object" ? navigator : { userAgent: "" }, ug = /Macintosh/.test(Ri.userAgent) && /AppleWebKit/.test(Ri.userAgent) && !/Safari/.test(Ri.userAgent), dg = ls ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ug ? q0 : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Ri ? Y0 : (
      // Fallback to using FileReader and a popup
      X0
    )
  )
) : () => {
};
function q0(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? cg(s.href) ? Gc(e, t, n) : (s.target = "_blank", xi(s)) : xi(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    xi(s);
  }, 0));
}
function Y0(e, t = "download", n) {
  if (typeof e == "string")
    if (cg(e))
      Gc(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        xi(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(z0(e, n), t);
}
function X0(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return Gc(e, t, n);
  const o = e.type === "application/octet-stream", r = /constructor/i.test(String(Cf.HTMLElement)) || "safari" in Cf, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && r || ug) && typeof FileReader < "u") {
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
function Qc(e) {
  return "_a" in e && "install" in e;
}
function fg() {
  if (!("clipboard" in navigator))
    return pt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function pg(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (pt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function G0(e) {
  if (!fg())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), pt("Global state copied to clipboard.");
    } catch (t) {
      if (pg(t))
        return;
      pt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Q0(e) {
  if (!fg())
    try {
      hg(e, JSON.parse(await navigator.clipboard.readText())), pt("Global state pasted from clipboard.");
    } catch (t) {
      if (pg(t))
        return;
      pt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function J0(e) {
  try {
    dg(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    pt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Ln;
function Z0() {
  Ln || (Ln = document.createElement("input"), Ln.type = "file", Ln.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Ln.onchange = async () => {
        const s = Ln.files;
        if (!s)
          return t(null);
        const o = s.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Ln.oncancel = () => t(null), Ln.onerror = n, Ln.click();
    });
  }
  return e;
}
async function ew(e) {
  try {
    const n = await Z0()();
    if (!n)
      return;
    const { text: s, file: o } = n;
    hg(e, JSON.parse(s)), pt(`Global state imported from "${o.name}".`);
  } catch (t) {
    pt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function hg(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s ? Object.assign(s, t[n]) : e.state.value[n] = t[n];
  }
}
function tn(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const mg = "🍍 Pinia (root)", Ii = "_root";
function tw(e) {
  return Qc(e) ? {
    id: Ii,
    label: mg
  } : {
    id: e.$id,
    label: e.$id
  };
}
function nw(e) {
  if (Qc(e)) {
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
function sw(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: tn(e.type),
    key: tn(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function ow(e) {
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
let yo = !0;
const Mi = [], Ns = "pinia:mutations", gt = "pinia", { assign: rw } = Object, ta = (e) => "🍍 " + e;
function iw(e, t) {
  zm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Mi,
    app: e
  }, (n) => {
    typeof n.now != "function" && pt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Ns,
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
            G0(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Q0(t), n.sendInspectorTree(gt), n.sendInspectorState(gt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            J0(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await ew(t), n.sendInspectorTree(gt), n.sendInspectorState(gt);
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
            type: ta(i.$id),
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
            type: ta(i.$id),
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
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(s.filter.toLowerCase()) : mg.toLowerCase().includes(s.filter.toLowerCase())) : o).map(tw);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === gt) {
        const o = s.nodeId === Ii ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.nodeId !== Ii && (globalThis.$store = Te(o)), s.state = nw(o));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === gt) {
        const o = s.nodeId === Ii ? t : t._s.get(s.nodeId);
        if (!o)
          return pt(`store "${s.nodeId}" not found`, "error");
        const { path: r } = s;
        Qc(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), yo = !1, s.set(o, r, s.state.value), yo = !0;
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
function aw(e, t) {
  Mi.includes(ta(t.$id)) || Mi.push(ta(t.$id)), zm({
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
      const u = gg++;
      n.addTimelineEvent({
        layerId: Ns,
        event: {
          time: s(),
          title: "🛫 " + c,
          subtitle: "start",
          data: {
            store: tn(t.$id),
            action: tn(c),
            args: f
          },
          groupId: u
        }
      }), i((d) => {
        cs = void 0, n.addTimelineEvent({
          layerId: Ns,
          event: {
            time: s(),
            title: "🛬 " + c,
            subtitle: "end",
            data: {
              store: tn(t.$id),
              action: tn(c),
              args: f,
              result: d
            },
            groupId: u
          }
        });
      }), a((d) => {
        cs = void 0, n.addTimelineEvent({
          layerId: Ns,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + c,
            subtitle: "end",
            data: {
              store: tn(t.$id),
              action: tn(c),
              args: f,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      Ct(() => W(t[i]), (a, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(gt), yo && n.addTimelineEvent({
          layerId: Ns,
          event: {
            time: s(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: c
            },
            groupId: cs
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, c) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(gt), !yo)
        return;
      const f = {
        time: s(),
        title: ow(a),
        data: rw({ store: tn(t.$id) }, sw(i)),
        groupId: cs
      };
      a === On.patchFunction ? f.subtitle = "⤵️" : a === On.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: Ns,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = as((i) => {
      o(i), n.addTimelineEvent({
        layerId: Ns,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: tn(t.$id),
            info: tn("HMR update")
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
let gg = 0, cs;
function Of(e, t, n) {
  const s = t.reduce((o, r) => (o[r] = Te(e)[r], o), {});
  for (const o in s)
    e[o] = function() {
      const r = gg, i = n ? new Proxy(e, {
        get(...c) {
          return cs = r, Reflect.get(...c);
        },
        set(...c) {
          return cs = r, Reflect.set(...c);
        }
      }) : e;
      cs = r;
      const a = s[o].apply(i, arguments);
      return cs = void 0, a;
    };
}
function lw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      Of(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      Te(t)._hotUpdate = function(o) {
        s.apply(this, arguments), Of(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    aw(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function cw() {
  const e = th(!0), t = e.run(() => j({}));
  let n = [], s = [];
  const o = as({
    install(r) {
      Vr(o), o._a = r, r.provide(lg, o), r.config.globalProperties.$pinia = o, Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls && iw(r, o), s.forEach((i) => n.push(i)), s = [];
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
  return Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls && typeof Proxy < "u" && o.use(lw), o;
}
function vg(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Gs(o) && Gs(s) && !Ye(s) && !an(s) ? e[n] = vg(o, s) : e[n] = s;
  }
  return e;
}
const _g = () => {
};
function Tf(e, t, n, s = _g) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && nh() && H_(o), o;
}
function lo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const uw = (e) => e(), Nf = Symbol(), tl = Symbol();
function Jl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Gs(o) && Gs(s) && e.hasOwnProperty(n) && !Ye(s) && !an(s) ? e[n] = Jl(o, s) : e[n] = s;
  }
  return e;
}
const dw = Le.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function fw(e) {
  return !Gs(e) || !Object.prototype.hasOwnProperty.call(e, dw);
}
const { assign: Kt } = Object;
function Df(e) {
  return !!(Ye(e) && e.effect);
}
function kf(e, t, n, s) {
  const { state: o, actions: r, getters: i } = t, a = n.state.value[e];
  let c;
  function f() {
    !a && (Le.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const u = Le.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      dn(j(o ? o() : {}).value)
    ) : dn(n.state.value[e]);
    return Kt(u, r, Object.keys(i || {}).reduce((d, p) => (Le.NODE_ENV !== "production" && p in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${e}".`), d[p] = as($(() => {
      Vr(n);
      const h = n._s.get(e);
      return i[p].call(h, h);
    })), d), {}));
  }
  return c = Zl(e, f, t, n, s, !0), c;
}
function Zl(e, t, n = {}, s, o, r) {
  let i;
  const a = Kt({ actions: {} }, n);
  if (Le.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const c = { deep: !0 };
  Le.NODE_ENV !== "production" && (c.onTrigger = (w) => {
    f ? h = w : f == !1 && !R._hotUpdating && (Array.isArray(h) ? h.push(w) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, d = [], p = [], h;
  const m = s.state.value[e];
  !r && !m && (Le.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const v = j({});
  let _;
  function y(w) {
    let k;
    f = u = !1, Le.NODE_ENV !== "production" && (h = []), typeof w == "function" ? (w(s.state.value[e]), k = {
      type: On.patchFunction,
      storeId: e,
      events: h
    }) : (Jl(s.state.value[e], w), k = {
      type: On.patchObject,
      payload: w,
      storeId: e,
      events: h
    });
    const A = _ = Symbol();
    zs().then(() => {
      _ === A && (f = !0);
    }), u = !0, lo(d, k, s.state.value[e]);
  }
  const b = r ? function() {
    const { state: k } = n, A = k ? k() : {};
    this.$patch((F) => {
      Kt(F, A);
    });
  } : (
    /* istanbul ignore next */
    Le.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : _g
  );
  function g() {
    i.stop(), d = [], p = [], s._s.delete(e);
  }
  const O = (w, k = "") => {
    if (Nf in w)
      return w[tl] = k, w;
    const A = function() {
      Vr(s);
      const F = Array.from(arguments), de = [], X = [];
      function re(be) {
        de.push(be);
      }
      function z(be) {
        X.push(be);
      }
      lo(p, {
        args: F,
        name: A[tl],
        store: R,
        after: re,
        onError: z
      });
      let ce;
      try {
        ce = w.apply(this && this.$id === e ? this : R, F);
      } catch (be) {
        throw lo(X, be), be;
      }
      return ce instanceof Promise ? ce.then((be) => (lo(de, be), be)).catch((be) => (lo(X, be), Promise.reject(be))) : (lo(de, ce), ce);
    };
    return A[Nf] = !0, A[tl] = k, A;
  }, N = /* @__PURE__ */ as({
    actions: {},
    getters: {},
    state: [],
    hotState: v
  }), T = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Tf.bind(null, p),
    $patch: y,
    $reset: b,
    $subscribe(w, k = {}) {
      const A = Tf(d, w, k.detached, () => F()), F = i.run(() => Ct(() => s.state.value[e], (de) => {
        (k.flush === "sync" ? u : f) && w({
          storeId: e,
          type: On.direct,
          events: h
        }, de);
      }, Kt({}, c, k)));
      return A;
    },
    $dispose: g
  }, R = ds(Le.NODE_ENV !== "production" || Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls ? Kt(
    {
      _hmrPayload: N,
      _customProperties: as(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    T
    // must be added later
    // setupStore
  ) : T);
  s._s.set(e, R);
  const D = (s._a && s._a.runWithContext || uw)(() => s._e.run(() => (i = th()).run(() => t({ action: O }))));
  for (const w in D) {
    const k = D[w];
    if (Ye(k) && !Df(k) || an(k))
      Le.NODE_ENV !== "production" && o ? v.value[w] = Ei(D, w) : r || (m && fw(k) && (Ye(k) ? k.value = m[w] : Jl(k, m[w])), s.state.value[e][w] = k), Le.NODE_ENV !== "production" && N.state.push(w);
    else if (typeof k == "function") {
      const A = Le.NODE_ENV !== "production" && o ? k : O(k, w);
      D[w] = A, Le.NODE_ENV !== "production" && (N.actions[w] = k), a.actions[w] = k;
    } else Le.NODE_ENV !== "production" && Df(k) && (N.getters[w] = r ? (
      // @ts-expect-error
      n.getters[w]
    ) : k, ls && (D._getters || // @ts-expect-error: same
    (D._getters = as([]))).push(w));
  }
  if (Kt(R, D), Kt(Te(R), D), Object.defineProperty(R, "$state", {
    get: () => Le.NODE_ENV !== "production" && o ? v.value : s.state.value[e],
    set: (w) => {
      if (Le.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      y((k) => {
        Kt(k, w);
      });
    }
  }), Le.NODE_ENV !== "production" && (R._hotUpdate = as((w) => {
    R._hotUpdating = !0, w._hmrPayload.state.forEach((k) => {
      if (k in R.$state) {
        const A = w.$state[k], F = R.$state[k];
        typeof A == "object" && Gs(A) && Gs(F) ? vg(A, F) : w.$state[k] = F;
      }
      R[k] = Ei(w.$state, k);
    }), Object.keys(R.$state).forEach((k) => {
      k in w.$state || delete R[k];
    }), f = !1, u = !1, s.state.value[e] = Ei(w._hmrPayload, "hotState"), u = !0, zs().then(() => {
      f = !0;
    });
    for (const k in w._hmrPayload.actions) {
      const A = w[k];
      R[k] = //
      O(A, k);
    }
    for (const k in w._hmrPayload.getters) {
      const A = w._hmrPayload.getters[k], F = r ? (
        // special handling of options api
        $(() => (Vr(s), A.call(R, R)))
      ) : A;
      R[k] = //
      F;
    }
    Object.keys(R._hmrPayload.getters).forEach((k) => {
      k in w._hmrPayload.getters || delete R[k];
    }), Object.keys(R._hmrPayload.actions).forEach((k) => {
      k in w._hmrPayload.actions || delete R[k];
    }), R._hmrPayload = w._hmrPayload, R._getters = w._getters, R._hotUpdating = !1;
  })), Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls) {
    const w = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((k) => {
      Object.defineProperty(R, k, Kt({ value: R[k] }, w));
    });
  }
  return s._p.forEach((w) => {
    if (Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls) {
      const k = i.run(() => w({
        store: R,
        app: s._a,
        pinia: s,
        options: a
      }));
      Object.keys(k || {}).forEach((A) => R._customProperties.add(A)), Kt(R, k);
    } else
      Kt(R, i.run(() => w({
        store: R,
        app: s._a,
        pinia: s,
        options: a
      })));
  }), Le.NODE_ENV !== "production" && R.$state && typeof R.$state == "object" && typeof R.$state.constructor == "function" && !R.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${R.$id}".`), m && r && n.hydrate && n.hydrate(R.$state, m), f = !0, u = !0, R;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function In(e, t, n) {
  let s;
  const o = typeof t == "function";
  s = o ? n : t;
  function r(i, a) {
    const c = mb();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (Le.NODE_ENV === "test" && ur && ur._testing ? null : i) || (c ? Ft(lg, null) : null), i && Vr(i), Le.NODE_ENV !== "production" && !ur)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = ur, i._s.has(e) || (o ? Zl(e, t, s, i) : kf(e, s, i), Le.NODE_ENV !== "production" && (r._pinia = i));
    const f = i._s.get(e);
    if (Le.NODE_ENV !== "production" && a) {
      const u = "__hot:" + e, d = o ? Zl(u, t, s, i, !0) : kf(u, Kt({}, s), i, !0);
      a._hotUpdate(d), delete i.state.value[u], i._s.delete(u);
    }
    if (Le.NODE_ENV !== "production" && ls) {
      const u = Xn();
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
function Gn(e) {
  const t = Te(e), n = {};
  for (const s in t) {
    const o = t[s];
    o.effect ? n[s] = // ...
    $({
      get: () => e[s],
      set(r) {
        e[s] = r;
      }
    }) : (Ye(o) || an(o)) && (n[s] = // ---
    Ei(e, s));
  }
  return n;
}
function pw() {
  return yg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function yg() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const hw = typeof Proxy == "function", mw = "devtools-plugin:setup", gw = "plugin:settings:set";
let co, ec;
function vw() {
  var e;
  return co !== void 0 || (typeof window < "u" && window.performance ? (co = !0, ec = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (co = !0, ec = globalThis.perf_hooks.performance) : co = !1), co;
}
function _w() {
  return vw() ? ec.now() : Date.now();
}
class yw {
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
        return _w();
      }
    }, n && n.on(gw, (i, a) => {
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
function bw(e, t) {
  const n = e, s = yg(), o = pw(), r = hw && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    o.emit(mw, e, t);
  else {
    const i = r ? new yw(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
var Ne = {};
const $n = typeof document < "u";
function bg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ew(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && bg(e.default);
}
const Ue = Object.assign;
function nl(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = Bt(o) ? o.map(e) : e(o);
  }
  return n;
}
const yr = () => {
}, Bt = Array.isArray;
function Pe(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Eg = /#/g, ww = /&/g, Aw = /\//g, Sw = /=/g, Cw = /\?/g, wg = /\+/g, Ow = /%5B/g, Tw = /%5D/g, Ag = /%5E/g, Nw = /%60/g, Sg = /%7B/g, Dw = /%7C/g, Cg = /%7D/g, kw = /%20/g;
function Jc(e) {
  return encodeURI("" + e).replace(Dw, "|").replace(Ow, "[").replace(Tw, "]");
}
function xw(e) {
  return Jc(e).replace(Sg, "{").replace(Cg, "}").replace(Ag, "^");
}
function tc(e) {
  return Jc(e).replace(wg, "%2B").replace(kw, "+").replace(Eg, "%23").replace(ww, "%26").replace(Nw, "`").replace(Sg, "{").replace(Cg, "}").replace(Ag, "^");
}
function Rw(e) {
  return tc(e).replace(Sw, "%3D");
}
function Iw(e) {
  return Jc(e).replace(Eg, "%23").replace(Cw, "%3F");
}
function Mw(e) {
  return e == null ? "" : Iw(e).replace(Aw, "%2F");
}
function xo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    Ne.NODE_ENV !== "production" && Pe(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Pw = /\/$/, Vw = (e) => e.replace(Pw, "");
function sl(e, t, n = "/") {
  let s, o = {}, r = "", i = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return a < c && a >= 0 && (c = -1), c > -1 && (s = t.slice(0, c), r = t.slice(c + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (s = s || t.slice(0, a), i = t.slice(a, t.length)), s = Bw(s ?? t, n), {
    fullPath: s + (r && "?") + r + i,
    path: s,
    query: o,
    hash: xo(i)
  };
}
function Lw(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function xf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Rf(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && hs(t.matched[s], n.matched[o]) && Og(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function hs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Og(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Fw(e[n], t[n]))
      return !1;
  return !0;
}
function Fw(e, t) {
  return Bt(e) ? If(e, t) : Bt(t) ? If(t, e) : e === t;
}
function If(e, t) {
  return Bt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Bw(e, t) {
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
const es = {
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
function $w(e) {
  if (!e)
    if ($n) {
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
const Ca = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Ww(e) {
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
    t = Hw(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Mf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const nc = /* @__PURE__ */ new Map();
function Kw(e, t) {
  nc.set(e, t);
}
function zw(e) {
  const t = nc.get(e);
  return nc.delete(e), t;
}
let qw = () => location.protocol + "//" + location.host;
function Tg(e, t) {
  const { pathname: n, search: s, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, c = o.slice(a);
    return c[0] !== "/" && (c = "/" + c), xf(c, "");
  }
  return xf(n, e) + s + o;
}
function Yw(e, t, n, s) {
  let o = [], r = [], i = null;
  const a = ({ state: p }) => {
    const h = Tg(e, location), m = n.value, v = t.value;
    let _ = 0;
    if (p) {
      if (n.value = h, t.value = p, i && i === m) {
        i = null;
        return;
      }
      _ = v ? p.position - v.position : 0;
    } else
      s(h);
    o.forEach((y) => {
      y(n.value, m, {
        delta: _,
        type: Lr.pop,
        direction: _ ? _ > 0 ? br.forward : br.back : br.unknown
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
    p.state && p.replaceState(Ue({}, p.state, { scroll: Ca() }), "");
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
function Xw(e) {
  const { history: t, location: n } = window, s = {
    value: Tg(e, n)
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
    const d = e.indexOf("#"), p = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : qw() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](f, "", p), o.value = f;
    } catch (h) {
      Ne.NODE_ENV !== "production" ? Pe("Error with push/replace State", h) : console.error(h), n[u ? "replace" : "assign"](p);
    }
  }
  function i(c, f) {
    const u = Ue({}, t.state, Pf(
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
        scroll: Ca()
      }
    );
    Ne.NODE_ENV !== "production" && !t.state && Pe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), r(u.current, u, !0);
    const d = Ue({}, Pf(s.value, c, null), { position: u.position + 1 }, f);
    r(c, d, !1), s.value = c;
  }
  return {
    location: s,
    state: o,
    push: a,
    replace: i
  };
}
function Gw(e) {
  e = $w(e);
  const t = Xw(e), n = Yw(e, t.state, t.location, t.replace);
  function s(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const o = Ue({
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
function Qw(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Ne.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Pe(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Gw(e);
}
function na(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Ng(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const sc = Symbol(Ne.NODE_ENV !== "production" ? "navigation failure" : "");
var Vf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Vf || (Vf = {}));
const Jw = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${eA(t)}" via a navigation guard.`;
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
  return Ne.NODE_ENV !== "production" ? Ue(new Error(Jw[e](t)), {
    type: e,
    [sc]: !0
  }, t) : Ue(new Error(), {
    type: e,
    [sc]: !0
  }, t);
}
function Fn(e, t) {
  return e instanceof Error && sc in e && (t == null || !!(e.type & t));
}
const Zw = ["params", "query", "hash"];
function eA(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of Zw)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Lf = "[^/]+?", tA = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, nA = /[.+*?^${}()[\]/\\]/g;
function sA(e, t) {
  const n = Ue({}, tA, t), s = [];
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
        d || (o += "/"), o += p.value.replace(nA, "\\$&"), h += 40;
      else if (p.type === 1) {
        const { value: m, repeatable: v, optional: _, regexp: y } = p;
        r.push({
          name: m,
          repeatable: v,
          optional: _
        });
        const b = y || Lf;
        if (b !== Lf) {
          h += 10;
          try {
            new RegExp(`(${b})`);
          } catch (O) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${b}): ` + O.message);
          }
        }
        let g = v ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        d || (g = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        _ && f.length < 2 ? `(?:/${g})` : "/" + g), _ && (g += "?"), o += g, h += 20, _ && (h += -8), v && (h += -20), b === ".*" && (h += -50);
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
          const { value: m, repeatable: v, optional: _ } = h, y = m in f ? f[m] : "";
          if (Bt(y) && !v)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const b = Bt(y) ? y.join("/") : y;
          if (!b)
            if (_)
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
function oA(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Dg(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const r = oA(s[n], o[n]);
    if (r)
      return r;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Ff(s))
      return 1;
    if (Ff(o))
      return -1;
  }
  return o.length - s.length;
}
function Ff(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const rA = {
  type: 0,
  value: ""
}, iA = /[a-zA-Z0-9_]/;
function aA(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[rA]];
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
        c === "(" ? n = 2 : iA.test(c) ? p() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--);
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
function lA(e, t, n) {
  const s = sA(aA(e.path), n);
  if (Ne.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const i of s.keys)
      r.has(i.name) && Pe(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(i.name);
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
function cA(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Uf({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(d) {
    return s.get(d);
  }
  function r(d, p, h) {
    const m = !h, v = $f(d);
    Ne.NODE_ENV !== "production" && pA(v, p), v.aliasOf = h && h.record;
    const _ = Uf(t, d), y = [v];
    if ("alias" in d) {
      const O = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const N of O)
        y.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          $f(Ue({}, v, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: h ? h.record.components : v.components,
            path: N,
            // we might be the child of an alias
            aliasOf: h ? h.record : v
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let b, g;
    for (const O of y) {
      const { path: N } = O;
      if (p && N[0] !== "/") {
        const T = p.record.path, R = T[T.length - 1] === "/" ? "" : "/";
        O.path = p.record.path + (N && R + N);
      }
      if (Ne.NODE_ENV !== "production" && O.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (b = lA(O, p, _), Ne.NODE_ENV !== "production" && p && N[0] === "/" && mA(b, p), h ? (h.alias.push(b), Ne.NODE_ENV !== "production" && fA(h, b)) : (g = g || b, g !== b && g.alias.push(b), m && d.name && !jf(b) && (Ne.NODE_ENV !== "production" && hA(d, p), i(d.name))), kg(b) && c(b), v.children) {
        const T = v.children;
        for (let R = 0; R < T.length; R++)
          r(T[R], b, h && h.children[R]);
      }
      h = h || b;
    }
    return g ? () => {
      i(g);
    } : yr;
  }
  function i(d) {
    if (Ng(d)) {
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
    const p = gA(d, n);
    n.splice(p, 0, d), d.record.name && !jf(d) && s.set(d.record.name, d);
  }
  function f(d, p) {
    let h, m = {}, v, _;
    if ("name" in d && d.name) {
      if (h = s.get(d.name), !h)
        throw Ro(1, {
          location: d
        });
      if (Ne.NODE_ENV !== "production") {
        const g = Object.keys(d.params || {}).filter((O) => !h.keys.find((N) => N.name === O));
        g.length && Pe(`Discarded invalid param(s) "${g.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      _ = h.record.name, m = Ue(
        // paramsFromLocation is a new object
        Bf(
          p.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          h.keys.filter((g) => !g.optional).concat(h.parent ? h.parent.keys.filter((g) => g.optional) : []).map((g) => g.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && Bf(d.params, h.keys.map((g) => g.name))
      ), v = h.stringify(m);
    } else if (d.path != null)
      v = d.path, Ne.NODE_ENV !== "production" && !v.startsWith("/") && Pe(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((g) => g.re.test(v)), h && (m = h.parse(v), _ = h.record.name);
    else {
      if (h = p.name ? s.get(p.name) : n.find((g) => g.re.test(p.path)), !h)
        throw Ro(1, {
          location: d,
          currentLocation: p
        });
      _ = h.record.name, m = Ue({}, p.params, d.params), v = h.stringify(m);
    }
    const y = [];
    let b = h;
    for (; b; )
      y.unshift(b.record), b = b.parent;
    return {
      name: _,
      path: v,
      params: m,
      matched: y,
      meta: dA(y)
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
function Bf(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function $f(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: uA(e),
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
function uA(e) {
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
function dA(e) {
  return e.reduce((t, n) => Ue(t, n.meta), {});
}
function Uf(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function oc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function fA(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(oc.bind(null, n)))
      return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(oc.bind(null, n)))
      return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function pA(e, t) {
  t && t.record.name && !e.name && !e.path && Pe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function hA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function mA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(oc.bind(null, n)))
      return Pe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function gA(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const r = n + s >> 1;
    Dg(e, t[r]) < 0 ? s = r : n = r + 1;
  }
  const o = vA(e);
  return o && (s = t.lastIndexOf(o, s - 1), Ne.NODE_ENV !== "production" && s < 0 && Pe(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), s;
}
function vA(e) {
  let t = e;
  for (; t = t.parent; )
    if (kg(t) && Dg(e, t) === 0)
      return t;
}
function kg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function _A(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(wg, " "), i = r.indexOf("="), a = xo(i < 0 ? r : r.slice(0, i)), c = i < 0 ? null : xo(r.slice(i + 1));
    if (a in t) {
      let f = t[a];
      Bt(f) || (f = t[a] = [f]), f.push(c);
    } else
      t[a] = c;
  }
  return t;
}
function Hf(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = Rw(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Bt(s) ? s.map((r) => r && tc(r)) : [s && tc(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function yA(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = Bt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const bA = Symbol(Ne.NODE_ENV !== "production" ? "router view location matched" : ""), Wf = Symbol(Ne.NODE_ENV !== "production" ? "router view depth" : ""), Zc = Symbol(Ne.NODE_ENV !== "production" ? "router" : ""), eu = Symbol(Ne.NODE_ENV !== "production" ? "route location" : ""), rc = Symbol(Ne.NODE_ENV !== "production" ? "router view location" : "");
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
function rs(e, t, n, s, o, r = (i) => i()) {
  const i = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((a, c) => {
    const f = (p) => {
      p === !1 ? c(Ro(4, {
        from: n,
        to: t
      })) : p instanceof Error ? c(p) : na(p) ? c(Ro(2, {
        from: t,
        to: p
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === i && typeof p == "function" && i.push(p), a());
    }, u = r(() => e.call(s && s.instances[o], t, n, Ne.NODE_ENV !== "production" ? EA(f, t, n) : f));
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
function EA(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && Pe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function ol(e, t, n, s, o = (r) => r()) {
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
        if (bg(c)) {
          const u = (c.__vccOpts || c)[t];
          u && r.push(rs(u, n, s, i, a, o));
        } else {
          let f = c();
          Ne.NODE_ENV !== "production" && !("catch" in f) && (Pe(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), r.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const d = Ew(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = d;
            const h = (d.__vccOpts || d)[t];
            return h && rs(h, n, s, i, a, o)();
          }));
        }
    }
  }
  return r;
}
function Kf(e) {
  const t = Ft(Zc), n = Ft(eu);
  let s = !1, o = null;
  const r = $(() => {
    const u = W(e.to);
    return Ne.NODE_ENV !== "production" && (!s || u !== o) && (na(u) || (s ? Pe(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, o, `
- props:`, e) : Pe(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), o = u, s = !0), t.resolve(u);
  }), i = $(() => {
    const { matched: u } = r.value, { length: d } = u, p = u[d - 1], h = n.matched;
    if (!p || !h.length)
      return -1;
    const m = h.findIndex(hs.bind(null, p));
    if (m > -1)
      return m;
    const v = zf(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      zf(p) === v && // avoid comparing the child with its parent
      h[h.length - 1].path !== v ? h.findIndex(hs.bind(null, u[d - 2])) : m
    );
  }), a = $(() => i.value > -1 && OA(n.params, r.value.params)), c = $(() => i.value > -1 && i.value === n.matched.length - 1 && Og(n.params, r.value.params));
  function f(u = {}) {
    if (CA(u)) {
      const d = t[W(e.replace) ? "replace" : "push"](
        W(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(yr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (Ne.NODE_ENV !== "production" && $n) {
    const u = Xn();
    if (u) {
      const d = {
        route: r.value,
        isActive: a.value,
        isExactActive: c.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), ga(() => {
        d.route = r.value, d.isActive = a.value, d.isExactActive = c.value, d.error = na(W(e.to)) ? null : 'Invalid "to" value';
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
function wA(e) {
  return e.length === 1 ? e[0] : e;
}
const AA = /* @__PURE__ */ Se({
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
  useLink: Kf,
  setup(e, { slots: t }) {
    const n = ds(Kf(e)), { options: s } = Ft(Zc), o = $(() => ({
      [qf(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [qf(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && wA(t.default(n));
      return e.custom ? r : Fc("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, r);
    };
  }
}), SA = AA;
function CA(e) {
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
    } else if (!Bt(o) || o.length !== s.length || s.some((r, i) => r !== o[i]))
      return !1;
  }
  return !0;
}
function zf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const qf = (e, t, n) => e ?? t ?? n, TA = /* @__PURE__ */ Se({
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
    Ne.NODE_ENV !== "production" && DA();
    const s = Ft(rc), o = $(() => e.route || s.value), r = Ft(Wf, 0), i = $(() => {
      let f = W(r);
      const { matched: u } = o.value;
      let d;
      for (; (d = u[f]) && !d.components; )
        f++;
      return f;
    }), a = $(() => o.value.matched[i.value]);
    Oi(Wf, $(() => i.value + 1)), Oi(bA, a), Oi(rc, o);
    const c = j();
    return Ct(() => [c.value, a.value, e.name], ([f, u, d], [p, h, m]) => {
      u && (u.instances[d] = f, h && h !== u && f && f === p && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!h || !hs(u, h) || !p) && (u.enterCallbacks[d] || []).forEach((v) => v(f));
    }, { flush: "post" }), () => {
      const f = o.value, u = e.name, d = a.value, p = d && d.components[u];
      if (!p)
        return Yf(n.default, { Component: p, route: f });
      const h = d.props[u], m = h ? h === !0 ? f.params : typeof h == "function" ? h(f) : h : null, _ = Fc(p, Ue({}, m, t, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (d.instances[u] = null);
        },
        ref: c
      }));
      if (Ne.NODE_ENV !== "production" && $n && _.ref) {
        const y = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (Bt(_.ref) ? _.ref.map((g) => g.i) : [_.ref.i]).forEach((g) => {
          g.__vrv_devtools = y;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Yf(n.default, { Component: _, route: f }) || _
      );
    };
  }
});
function Yf(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const NA = TA;
function DA() {
  const e = Xn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function sr(e, t) {
  const n = Ue({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => $A(s, ["instances", "children", "aliasOf"]))
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
function ui(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let kA = 0;
function xA(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = kA++;
  bw({
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
          backgroundColor: xg
        });
      }
      Bt(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((p) => {
        let h = p.route.path, m = Mg, v = "", _ = 0;
        p.error ? (h = p.error, m = VA, _ = LA) : p.isExactActive ? (m = Ig, v = "This is exactly active") : p.isActive && (m = Rg, v = "This link is active"), u.tags.push({
          label: h,
          textColor: _,
          tooltip: v,
          backgroundColor: m
        });
      }));
    }), Ct(t.currentRoute, () => {
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
        guard: ui("beforeEach"),
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
        guard: ui("afterEach")
      };
      p ? (h.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: p ? p.message : "",
          tooltip: "Navigation Failure",
          value: p
        }
      }, h.status = ui("❌")) : h.status = ui("✅"), h.from = sr(d, "Current Location during this navigation"), h.to = sr(u, "Target location"), o.addTimelineEvent({
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
      d.forEach(Lg), u.filter && (d = d.filter((p) => (
        // save matches state based on the payload
        ic(p, u.filter.toLowerCase())
      ))), d.forEach((p) => Vg(p, t.currentRoute.value)), u.rootNodes = d.map(Pg);
    }
    let f;
    o.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === a && c();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const p = n.getRoutes().find((h) => h.record.__vd_id === u.nodeId);
        p && (u.state = {
          options: IA(p)
        });
      }
    }), o.sendInspectorTree(a), o.sendInspectorState(a);
  });
}
function RA(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function IA(e) {
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
        display: e.keys.map((s) => `${s.name}${RA(s)}`).join(" "),
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
const xg = 15485081, Rg = 2450411, Ig = 8702998, MA = 2282478, Mg = 16486972, PA = 6710886, VA = 16704226, LA = 12131356;
function Pg(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: MA
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Mg
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: xg
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Ig
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Rg
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: PA
  });
  let s = n.__vd_id;
  return s == null && (s = String(FA++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Pg)
  };
}
let FA = 0;
const BA = /^\/(.*)\/([a-z]*)$/;
function Vg(e, t) {
  const n = t.matched.length && hs(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => hs(s, e.record))), e.children.forEach((s) => Vg(s, t));
}
function Lg(e) {
  e.__vd_match = !1, e.children.forEach(Lg);
}
function ic(e, t) {
  const n = String(e.re).match(BA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => ic(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = xo(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => ic(i, t));
}
function $A(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function jA(e) {
  const t = cA(e.routes, e), n = e.parseQuery || _A, s = e.stringifyQuery || Hf, o = e.history;
  if (Ne.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const r = nr(), i = nr(), a = nr(), c = cy(es);
  let f = es;
  $n && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = nl.bind(null, (L) => "" + L), d = nl.bind(null, Mw), p = (
    // @ts-expect-error: intentionally avoid the type check
    nl.bind(null, xo)
  );
  function h(L, J) {
    let se, ve;
    return Ng(L) ? (se = t.getRecordMatcher(L), Ne.NODE_ENV !== "production" && !se && Pe(`Parent route "${String(L)}" not found when adding child route`, J), ve = J) : ve = L, t.addRoute(ve, se);
  }
  function m(L) {
    const J = t.getRecordMatcher(L);
    J ? t.removeRoute(J) : Ne.NODE_ENV !== "production" && Pe(`Cannot remove non-existent route "${String(L)}"`);
  }
  function v() {
    return t.getRoutes().map((L) => L.record);
  }
  function _(L) {
    return !!t.getRecordMatcher(L);
  }
  function y(L, J) {
    if (J = Ue({}, J || c.value), typeof L == "string") {
      const S = sl(n, L, J.path), V = t.resolve({ path: S.path }, J), q = o.createHref(S.fullPath);
      return Ne.NODE_ENV !== "production" && (q.startsWith("//") ? Pe(`Location "${L}" resolved to "${q}". A resolved location cannot start with multiple slashes.`) : V.matched.length || Pe(`No match found for location with path "${L}"`)), Ue(S, V, {
        params: p(V.params),
        hash: xo(S.hash),
        redirectedFrom: void 0,
        href: q
      });
    }
    if (Ne.NODE_ENV !== "production" && !na(L))
      return Pe(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, L), y({});
    let se;
    if (L.path != null)
      Ne.NODE_ENV !== "production" && "params" in L && !("name" in L) && // @ts-expect-error: the type is never
      Object.keys(L.params).length && Pe(`Path "${L.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), se = Ue({}, L, {
        path: sl(n, L.path, J.path).path
      });
    else {
      const S = Ue({}, L.params);
      for (const V in S)
        S[V] == null && delete S[V];
      se = Ue({}, L, {
        params: d(S)
      }), J.params = d(J.params);
    }
    const ve = t.resolve(se, J), Ie = L.hash || "";
    Ne.NODE_ENV !== "production" && Ie && !Ie.startsWith("#") && Pe(`A \`hash\` should always start with the character "#". Replace "${Ie}" with "#${Ie}".`), ve.params = u(p(ve.params));
    const tt = Lw(s, Ue({}, L, {
      hash: xw(Ie),
      path: ve.path
    })), E = o.createHref(tt);
    return Ne.NODE_ENV !== "production" && (E.startsWith("//") ? Pe(`Location "${L}" resolved to "${E}". A resolved location cannot start with multiple slashes.`) : ve.matched.length || Pe(`No match found for location with path "${L.path != null ? L.path : L}"`)), Ue({
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
        s === Hf ? yA(L.query) : L.query || {}
      )
    }, ve, {
      redirectedFrom: void 0,
      href: E
    });
  }
  function b(L) {
    return typeof L == "string" ? sl(n, L, c.value.path) : Ue({}, L);
  }
  function g(L, J) {
    if (f !== L)
      return Ro(8, {
        from: J,
        to: L
      });
  }
  function O(L) {
    return R(L);
  }
  function N(L) {
    return O(Ue(b(L), { replace: !0 }));
  }
  function T(L) {
    const J = L.matched[L.matched.length - 1];
    if (J && J.redirect) {
      const { redirect: se } = J;
      let ve = typeof se == "function" ? se(L) : se;
      if (typeof ve == "string" && (ve = ve.includes("?") || ve.includes("#") ? ve = b(ve) : (
        // force empty params
        { path: ve }
      ), ve.params = {}), Ne.NODE_ENV !== "production" && ve.path == null && !("name" in ve))
        throw Pe(`Invalid redirect found:
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
  function R(L, J) {
    const se = f = y(L), ve = c.value, Ie = L.state, tt = L.force, E = L.replace === !0, S = T(se);
    if (S)
      return R(
        Ue(b(S), {
          state: typeof S == "object" ? Ue({}, Ie, S.state) : Ie,
          force: tt,
          replace: E
        }),
        // keep original redirectedFrom if it exists
        J || se
      );
    const V = se;
    V.redirectedFrom = J;
    let q;
    return !tt && Rf(s, ve, se) && (q = Ro(16, { to: V, from: ve }), K(
      ve,
      ve,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (q ? Promise.resolve(q) : w(V, ve)).catch((U) => Fn(U) ? (
      // navigation redirects still mark the router as ready
      Fn(
        U,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? U : Ze(U)
    ) : (
      // reject any unknown error
      ce(U, V, ve)
    )).then((U) => {
      if (U) {
        if (Fn(
          U,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return Ne.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Rf(s, y(U.to), V) && // and we have done it a couple of times
          J && // @ts-expect-error: added only in dev
          (J._count = J._count ? (
            // @ts-expect-error
            J._count + 1
          ) : 1) > 30 ? (Pe(`Detected a possibly infinite redirection in a navigation guard when going from "${ve.fullPath}" to "${V.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : R(
            // keep options
            Ue({
              // preserve an existing replacement but allow the redirect to override it
              replace: E
            }, b(U.to), {
              state: typeof U.to == "object" ? Ue({}, Ie, U.to.state) : Ie,
              force: tt
            }),
            // preserve the original redirectedFrom if any
            J || V
          );
      } else
        U = A(V, ve, !0, E, Ie);
      return k(V, ve, U), U;
    });
  }
  function I(L, J) {
    const se = g(L, J);
    return se ? Promise.reject(se) : Promise.resolve();
  }
  function D(L) {
    const J = we.values().next().value;
    return J && typeof J.runWithContext == "function" ? J.runWithContext(L) : L();
  }
  function w(L, J) {
    let se;
    const [ve, Ie, tt] = UA(L, J);
    se = ol(ve.reverse(), "beforeRouteLeave", L, J);
    for (const S of ve)
      S.leaveGuards.forEach((V) => {
        se.push(rs(V, L, J));
      });
    const E = I.bind(null, L, J);
    return se.push(E), He(se).then(() => {
      se = [];
      for (const S of r.list())
        se.push(rs(S, L, J));
      return se.push(E), He(se);
    }).then(() => {
      se = ol(Ie, "beforeRouteUpdate", L, J);
      for (const S of Ie)
        S.updateGuards.forEach((V) => {
          se.push(rs(V, L, J));
        });
      return se.push(E), He(se);
    }).then(() => {
      se = [];
      for (const S of tt)
        if (S.beforeEnter)
          if (Bt(S.beforeEnter))
            for (const V of S.beforeEnter)
              se.push(rs(V, L, J));
          else
            se.push(rs(S.beforeEnter, L, J));
      return se.push(E), He(se);
    }).then(() => (L.matched.forEach((S) => S.enterCallbacks = {}), se = ol(tt, "beforeRouteEnter", L, J, D), se.push(E), He(se))).then(() => {
      se = [];
      for (const S of i.list())
        se.push(rs(S, L, J));
      return se.push(E), He(se);
    }).catch((S) => Fn(
      S,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? S : Promise.reject(S));
  }
  function k(L, J, se) {
    a.list().forEach((ve) => D(() => ve(L, J, se)));
  }
  function A(L, J, se, ve, Ie) {
    const tt = g(L, J);
    if (tt)
      return tt;
    const E = J === es, S = $n ? history.state : {};
    se && (ve || E ? o.replace(L.fullPath, Ue({
      scroll: E && S && S.scroll
    }, Ie)) : o.push(L.fullPath, Ie)), c.value = L, K(L, J, se, E), Ze();
  }
  let F;
  function de() {
    F || (F = o.listen((L, J, se) => {
      if (!ke.listening)
        return;
      const ve = y(L), Ie = T(ve);
      if (Ie) {
        R(Ue(Ie, { replace: !0, force: !0 }), ve).catch(yr);
        return;
      }
      f = ve;
      const tt = c.value;
      $n && Kw(Mf(tt.fullPath, se.delta), Ca()), w(ve, tt).catch((E) => Fn(
        E,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? E : Fn(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (R(
        Ue(b(E.to), {
          force: !0
        }),
        ve
        // avoid an uncaught rejection, let push call triggerError
      ).then((S) => {
        Fn(
          S,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !se.delta && se.type === Lr.pop && o.go(-1, !1);
      }).catch(yr), Promise.reject()) : (se.delta && o.go(-se.delta, !1), ce(E, ve, tt))).then((E) => {
        E = E || A(
          // after navigation, all matched components are resolved
          ve,
          tt,
          !1
        ), E && (se.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Fn(
          E,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-se.delta, !1) : se.type === Lr.pop && Fn(
          E,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), k(ve, tt, E);
      }).catch(yr);
    }));
  }
  let X = nr(), re = nr(), z;
  function ce(L, J, se) {
    Ze(L);
    const ve = re.list();
    return ve.length ? ve.forEach((Ie) => Ie(L, J, se)) : (Ne.NODE_ENV !== "production" && Pe("uncaught error during route navigation:"), console.error(L)), Promise.reject(L);
  }
  function be() {
    return z && c.value !== es ? Promise.resolve() : new Promise((L, J) => {
      X.add([L, J]);
    });
  }
  function Ze(L) {
    return z || (z = !L, de(), X.list().forEach(([J, se]) => L ? se(L) : J()), X.reset()), L;
  }
  function K(L, J, se, ve) {
    const { scrollBehavior: Ie } = e;
    if (!$n || !Ie)
      return Promise.resolve();
    const tt = !se && zw(Mf(L.fullPath, 0)) || (ve || !se) && history.state && history.state.scroll || null;
    return zs().then(() => Ie(L, J, tt)).then((E) => E && Ww(E)).catch((E) => ce(E, L, J));
  }
  const oe = (L) => o.go(L);
  let pe;
  const we = /* @__PURE__ */ new Set(), ke = {
    currentRoute: c,
    listening: !0,
    addRoute: h,
    removeRoute: m,
    clearRoutes: t.clearRoutes,
    hasRoute: _,
    getRoutes: v,
    resolve: y,
    options: e,
    push: O,
    replace: N,
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
      L.component("RouterLink", SA), L.component("RouterView", NA), L.config.globalProperties.$router = J, Object.defineProperty(L.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => W(c)
      }), $n && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !pe && c.value === es && (pe = !0, O(o.location).catch((Ie) => {
        Ne.NODE_ENV !== "production" && Pe("Unexpected error when starting the router:", Ie);
      }));
      const se = {};
      for (const Ie in es)
        Object.defineProperty(se, Ie, {
          get: () => c.value[Ie],
          enumerable: !0
        });
      L.provide(Zc, J), L.provide(eu, yh(se)), L.provide(rc, c);
      const ve = L.unmount;
      we.add(L), L.unmount = function() {
        we.delete(L), we.size < 1 && (f = es, F && F(), F = null, c.value = es, pe = !1, z = !1), ve();
      }, Ne.NODE_ENV !== "production" && $n && xA(L, J, t);
    }
  };
  function He(L) {
    return L.reduce((J, se) => J.then(() => D(se)), Promise.resolve());
  }
  return ke;
}
function UA(e, t) {
  const n = [], s = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => hs(f, a)) ? s.push(a) : n.push(a));
    const c = e.matched[i];
    c && (t.matched.find((f) => hs(f, c)) || o.push(c));
  }
  return [n, s, o];
}
function Fg(e) {
  return Ft(eu);
}
const HA = { class: "nav nav-tabs mb-4" }, WA = { class: "nav-item" }, KA = { class: "nav-item" }, zA = { class: "nav-item" }, qA = { class: "nav-item" }, YA = /* @__PURE__ */ Se({
  __name: "NavigationMenu",
  setup(e) {
    const t = Fg();
    return (n, s) => {
      const o = Qe("router-link");
      return C(), x("ul", HA, [
        l("li", WA, [
          ue(o, {
            to: "/",
            class: le(["nav-link", { active: W(t).name === "home" }]),
            "aria-current": W(t).name === "home" ? "page" : void 0
          }, {
            default: fe(() => s[0] || (s[0] = [
              l("i", { class: "fas fa-home me-2" }, null, -1),
              H(" Home ")
            ])),
            _: 1,
            __: [0]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", KA, [
          ue(o, {
            to: "/setup",
            class: le(["nav-link", { active: W(t).name === "setup" }]),
            "aria-current": W(t).name === "setup" ? "page" : void 0
          }, {
            default: fe(() => s[1] || (s[1] = [
              l("i", { class: "fas fa-cogs me-2" }, null, -1),
              H(" Setup ")
            ])),
            _: 1,
            __: [1]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", zA, [
          ue(o, {
            to: "/resources",
            class: le(["nav-link", { active: W(t).name === "resources" }]),
            "aria-current": W(t).name === "resources" ? "page" : void 0
          }, {
            default: fe(() => s[2] || (s[2] = [
              l("i", { class: "fas fa-database me-2" }, null, -1),
              H(" Resources ")
            ])),
            _: 1,
            __: [2]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", qA, [
          ue(o, {
            to: "/tasks",
            class: le(["nav-link", { active: W(t).name === "tasks" }]),
            "aria-current": W(t).name === "tasks" ? "page" : void 0
          }, {
            default: fe(() => s[3] || (s[3] = [
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
}), Jt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, XA = /* @__PURE__ */ Jt(YA, [["__scopeId", "data-v-131175f8"]]), GA = /* @__PURE__ */ Se({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const s = Qe("router-view");
      return C(), x("div", null, [
        l("main", null, [
          ue(XA),
          ue(s)
        ])
      ]);
    };
  }
}), QA = /* @__PURE__ */ Jt(GA, [["__scopeId", "data-v-a42a7003"]]);
function Bg(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: JA } = Object.prototype, { getPrototypeOf: tu } = Object, { iterator: Oa, toStringTag: $g } = Symbol, Ta = /* @__PURE__ */ ((e) => (t) => {
  const n = JA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pn = (e) => (e = e.toLowerCase(), (t) => Ta(t) === e), Na = (e) => (t) => typeof t === e, { isArray: Ko } = Array, Fr = Na("undefined");
function ZA(e) {
  return e !== null && !Fr(e) && e.constructor !== null && !Fr(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const jg = pn("ArrayBuffer");
function eS(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && jg(e.buffer), t;
}
const tS = Na("string"), It = Na("function"), Ug = Na("number"), Da = (e) => e !== null && typeof e == "object", nS = (e) => e === !0 || e === !1, Pi = (e) => {
  if (Ta(e) !== "object")
    return !1;
  const t = tu(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !($g in e) && !(Oa in e);
}, sS = pn("Date"), oS = pn("File"), rS = pn("Blob"), iS = pn("FileList"), aS = (e) => Da(e) && It(e.pipe), lS = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = Ta(e)) === "formdata" || // detect form-data instance
  t === "object" && It(e.toString) && e.toString() === "[object FormData]"));
}, cS = pn("URLSearchParams"), [uS, dS, fS, pS] = ["ReadableStream", "Request", "Response", "Headers"].map(pn), hS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Gr(e, t, { allOwnKeys: n = !1 } = {}) {
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
function Hg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const Rs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Wg = (e) => !Fr(e) && e !== Rs;
function ac() {
  const { caseless: e } = Wg(this) && this || {}, t = {}, n = (s, o) => {
    const r = e && Hg(t, o) || o;
    Pi(t[r]) && Pi(s) ? t[r] = ac(t[r], s) : Pi(s) ? t[r] = ac({}, s) : Ko(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Gr(arguments[s], n);
  return t;
}
const mS = (e, t, n, { allOwnKeys: s } = {}) => (Gr(t, (o, r) => {
  n && It(o) ? e[r] = Bg(o, n) : e[r] = o;
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
    e = n !== !1 && tu(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, yS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, bS = (e) => {
  if (!e) return null;
  if (Ko(e)) return e;
  let t = e.length;
  if (!Ug(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ES = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && tu(Uint8Array)), wS = (e, t) => {
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
}, SS = pn("HTMLFormElement"), CS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), Xf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), OS = pn("RegExp"), Kg = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Gr(n, (o, r) => {
    let i;
    (i = t(o, r, e)) !== !1 && (s[r] = i || o);
  }), Object.defineProperties(e, s);
}, TS = (e) => {
  Kg(e, (t, n) => {
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
}, NS = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((r) => {
      n[r] = !0;
    });
  };
  return Ko(e) ? s(e) : s(String(e).split(t)), n;
}, DS = () => {
}, kS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function xS(e) {
  return !!(e && It(e.append) && e[$g] === "FormData" && e[Oa]);
}
const RS = (e) => {
  const t = new Array(10), n = (s, o) => {
    if (Da(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[o] = s;
        const r = Ko(s) ? [] : {};
        return Gr(s, (i, a) => {
          const c = n(i, o + 1);
          !Fr(c) && (r[a] = c);
        }), t[o] = void 0, r;
      }
    }
    return s;
  };
  return n(e, 0);
}, IS = pn("AsyncFunction"), MS = (e) => e && (Da(e) || It(e)) && It(e.then) && It(e.catch), zg = ((e, t) => e ? setImmediate : t ? ((n, s) => (Rs.addEventListener("message", ({ source: o, data: r }) => {
  o === Rs && r === n && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), Rs.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  It(Rs.postMessage)
), PS = typeof queueMicrotask < "u" ? queueMicrotask.bind(Rs) : typeof process < "u" && process.nextTick || zg, VS = (e) => e != null && It(e[Oa]), B = {
  isArray: Ko,
  isArrayBuffer: jg,
  isBuffer: ZA,
  isFormData: lS,
  isArrayBufferView: eS,
  isString: tS,
  isNumber: Ug,
  isBoolean: nS,
  isObject: Da,
  isPlainObject: Pi,
  isReadableStream: uS,
  isRequest: dS,
  isResponse: fS,
  isHeaders: pS,
  isUndefined: Fr,
  isDate: sS,
  isFile: oS,
  isBlob: rS,
  isRegExp: OS,
  isFunction: It,
  isStream: aS,
  isURLSearchParams: cS,
  isTypedArray: ES,
  isFileList: iS,
  forEach: Gr,
  merge: ac,
  extend: mS,
  trim: hS,
  stripBOM: gS,
  inherits: vS,
  toFlatObject: _S,
  kindOf: Ta,
  kindOfTest: pn,
  endsWith: yS,
  toArray: bS,
  forEachEntry: wS,
  matchAll: AS,
  isHTMLForm: SS,
  hasOwnProperty: Xf,
  hasOwnProp: Xf,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Kg,
  freezeMethods: TS,
  toObjectSet: NS,
  toCamelCase: CS,
  noop: DS,
  toFiniteNumber: kS,
  findKey: Hg,
  global: Rs,
  isContextDefined: Wg,
  isSpecCompliantForm: xS,
  toJSONObject: RS,
  isAsyncFn: IS,
  isThenable: MS,
  setImmediate: zg,
  asap: PS,
  isIterable: VS
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
const qg = Re.prototype, Yg = {};
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
  Yg[e] = { value: e };
});
Object.defineProperties(Re, Yg);
Object.defineProperty(qg, "isAxiosError", { value: !0 });
Re.from = (e, t, n, s, o, r) => {
  const i = Object.create(qg);
  return B.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Re.call(i, e.message, t, n, s, o), i.cause = e, i.name = e.name, r && Object.assign(i, r), i;
};
const LS = null;
function lc(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function Xg(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gf(e, t, n) {
  return e ? e.concat(t).map(function(o, r) {
    return o = Xg(o), !n && r ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function FS(e) {
  return B.isArray(e) && !e.some(lc);
}
const BS = B.toFlatObject(B, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ka(e, t, n) {
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
  function f(m) {
    if (m === null) return "";
    if (B.isDate(m))
      return m.toISOString();
    if (B.isBoolean(m))
      return m.toString();
    if (!c && B.isBlob(m))
      throw new Re("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(m) || B.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, v, _) {
    let y = m;
    if (m && !_ && typeof m == "object") {
      if (B.endsWith(v, "{}"))
        v = s ? v : v.slice(0, -2), m = JSON.stringify(m);
      else if (B.isArray(m) && FS(m) || (B.isFileList(m) || B.endsWith(v, "[]")) && (y = B.toArray(m)))
        return v = Xg(v), y.forEach(function(g, O) {
          !(B.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Gf([v], O, r) : i === null ? v : v + "[]",
            f(g)
          );
        }), !1;
    }
    return lc(m) ? !0 : (t.append(Gf(_, v, r), f(m)), !1);
  }
  const d = [], p = Object.assign(BS, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: lc
  });
  function h(m, v) {
    if (!B.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(m), B.forEach(m, function(y, b) {
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
function Qf(e) {
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
function nu(e, t) {
  this._pairs = [], e && ka(e, this, t);
}
const Gg = nu.prototype;
Gg.append = function(t, n) {
  this._pairs.push([t, n]);
};
Gg.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Qf);
  } : Qf;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function $S(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Qg(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || $S;
  B.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let r;
  if (o ? r = o(t, n) : r = B.isURLSearchParams(t) ? t.toString() : new nu(t, n).toString(s), r) {
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
    B.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const Jg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jS = typeof URLSearchParams < "u" ? URLSearchParams : nu, US = typeof FormData < "u" ? FormData : null, HS = typeof Blob < "u" ? Blob : null, WS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: jS,
    FormData: US,
    Blob: HS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, su = typeof window < "u" && typeof document < "u", cc = typeof navigator == "object" && navigator || void 0, KS = su && (!cc || ["ReactNative", "NativeScript", "NS"].indexOf(cc.product) < 0), zS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", qS = su && window.location.href || "http://localhost", YS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: su,
  hasStandardBrowserEnv: KS,
  hasStandardBrowserWebWorkerEnv: zS,
  navigator: cc,
  origin: qS
}, Symbol.toStringTag, { value: "Module" })), vt = {
  ...YS,
  ...WS
};
function XS(e, t) {
  return ka(e, new vt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, r) {
      return vt.isNode && B.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
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
function Zg(e) {
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
const Qr = {
  transitional: Jg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = B.isObject(t);
    if (r && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return o ? JSON.stringify(Zg(t)) : t;
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
        return ka(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return r || o ? (n.setContentType("application/json", !1), JS(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Qr.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
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
  Qr.headers[e] = {};
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
]), eC = (e) => {
  const t = {};
  let n, s, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), s = i.substring(o + 1).trim(), !(!n || t[n] && ZS[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Zf = Symbol("internals");
function or(e) {
  return e && String(e).trim().toLowerCase();
}
function Vi(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Vi) : String(e);
}
function tC(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const nC = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function rl(e, t, n, s, o) {
  if (B.isFunction(s))
    return s.call(this, t, n);
  if (o && (t = n), !!B.isString(t)) {
    if (B.isString(s))
      return t.indexOf(s) !== -1;
    if (B.isRegExp(s))
      return s.test(t);
  }
}
function sC(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function oC(e, t) {
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
      const u = or(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = B.findKey(o, u);
      (!d || o[d] === void 0 || f === !0 || f === void 0 && o[d] !== !1) && (o[d || c] = Vi(a));
    }
    const i = (a, c) => B.forEach(a, (f, u) => r(f, u, c));
    if (B.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (B.isString(t) && (t = t.trim()) && !nC(t))
      i(eC(t), n);
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
          return tC(o);
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
      return !!(s && this[s] !== void 0 && (!n || rl(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let o = !1;
    function r(i) {
      if (i = or(i), i) {
        const a = B.findKey(s, i);
        a && (!n || rl(s, s[a], a, n)) && (delete s[a], o = !0);
      }
    }
    return B.isArray(t) ? t.forEach(r) : r(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, o = !1;
    for (; s--; ) {
      const r = n[s];
      (!t || rl(this, this[r], r, t, !0)) && (delete this[r], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, s = {};
    return B.forEach(this, (o, r) => {
      const i = B.findKey(s, r);
      if (i) {
        n[i] = Vi(o), delete n[r];
        return;
      }
      const a = t ? sC(r) : String(r).trim();
      a !== r && delete n[r], n[a] = Vi(o), s[a] = !0;
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
    const s = (this[Zf] = this[Zf] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function r(i) {
      const a = or(i);
      s[a] || (oC(o, i), s[a] = !0);
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
function il(e, t) {
  const n = this || Qr, s = t || n, o = Mt.from(s.headers);
  let r = s.data;
  return B.forEach(e, function(a) {
    r = a.call(n, r, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), r;
}
function ev(e) {
  return !!(e && e.__CANCEL__);
}
function zo(e, t, n) {
  Re.call(this, e ?? "canceled", Re.ERR_CANCELED, t, n), this.name = "CanceledError";
}
B.inherits(zo, Re, {
  __CANCEL__: !0
});
function tv(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new Re(
    "Request failed with status code " + n.status,
    [Re.ERR_BAD_REQUEST, Re.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function rC(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function iC(e, t) {
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
function aC(e, t) {
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
const sa = (e, t, n = 3) => {
  let s = 0;
  const o = iC(50, 250);
  return aC((r) => {
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
}, ep = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, tp = (e) => (...t) => B.asap(() => e(...t)), lC = vt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, vt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(vt.origin),
  vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent)
) : () => !0, cC = vt.hasStandardBrowserEnv ? (
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
function uC(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function dC(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function nv(e, t, n) {
  let s = !uC(t);
  return e && (s || n == !1) ? dC(e, t) : t;
}
const np = (e) => e instanceof Mt ? { ...e } : e;
function Qs(e, t) {
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
    headers: (f, u, d) => o(np(f), np(u), d, !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, p = d(e[u], t[u], u);
    B.isUndefined(p) && d !== a || (n[u] = p);
  }), n;
}
const sv = (e) => {
  const t = Qs({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: r, headers: i, auth: a } = t;
  t.headers = i = Mt.from(i), t.url = Qg(nv(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
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
  if (vt.hasStandardBrowserEnv && (s && B.isFunction(s) && (s = s(t)), s || s !== !1 && lC(t.url))) {
    const f = o && r && cC.read(r);
    f && i.set(o, f);
  }
  return t;
}, fC = typeof XMLHttpRequest < "u", pC = fC && function(e) {
  return new Promise(function(n, s) {
    const o = sv(e);
    let r = o.data;
    const i = Mt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: f } = o, u, d, p, h, m;
    function v() {
      h && h(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let _ = new XMLHttpRequest();
    _.open(o.method.toUpperCase(), o.url, !0), _.timeout = o.timeout;
    function y() {
      if (!_)
        return;
      const g = Mt.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), N = {
        data: !a || a === "text" || a === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: g,
        config: e,
        request: _
      };
      tv(function(R) {
        n(R), v();
      }, function(R) {
        s(R), v();
      }, N), _ = null;
    }
    "onloadend" in _ ? _.onloadend = y : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, _.onabort = function() {
      _ && (s(new Re("Request aborted", Re.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      s(new Re("Network Error", Re.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let O = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const N = o.transitional || Jg;
      o.timeoutErrorMessage && (O = o.timeoutErrorMessage), s(new Re(
        O,
        N.clarifyTimeoutError ? Re.ETIMEDOUT : Re.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, r === void 0 && i.setContentType(null), "setRequestHeader" in _ && B.forEach(i.toJSON(), function(O, N) {
      _.setRequestHeader(N, O);
    }), B.isUndefined(o.withCredentials) || (_.withCredentials = !!o.withCredentials), a && a !== "json" && (_.responseType = o.responseType), f && ([p, m] = sa(f, !0), _.addEventListener("progress", p)), c && _.upload && ([d, h] = sa(c), _.upload.addEventListener("progress", d), _.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (g) => {
      _ && (s(!g || g.type ? new zo(null, e, _) : g), _.abort(), _ = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = rC(o.url);
    if (b && vt.protocols.indexOf(b) === -1) {
      s(new Re("Unsupported protocol " + b + ":", Re.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(r || null);
  });
}, hC = (e, t) => {
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
}, mC = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, o;
  for (; s < n; )
    o = s + t, yield e.slice(s, o), s = o;
}, gC = async function* (e, t) {
  for await (const n of vC(e))
    yield* mC(n, t);
}, vC = async function* (e) {
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
}, sp = (e, t, n, s) => {
  const o = gC(e, t);
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
}, xa = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ov = xa && typeof ReadableStream == "function", _C = xa && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), rv = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, yC = ov && rv(() => {
  let e = !1;
  const t = new Request(vt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), op = 64 * 1024, uc = ov && rv(() => B.isReadableStream(new Response("").body)), oa = {
  stream: uc && ((e) => e.body)
};
xa && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !oa[t] && (oa[t] = B.isFunction(e[t]) ? (n) => n[t]() : (n, s) => {
      throw new Re(`Response type '${t}' is not supported`, Re.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const bC = async (e) => {
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
    return (await _C(e)).byteLength;
}, EC = async (e, t) => {
  const n = B.toFiniteNumber(e.getContentLength());
  return n ?? bC(t);
}, wC = xa && (async (e) => {
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
  } = sv(e);
  f = f ? (f + "").toLowerCase() : "text";
  let h = hC([o, r && r.toAbortSignal()], i), m;
  const v = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let _;
  try {
    if (c && yC && n !== "get" && n !== "head" && (_ = await EC(u, s)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), T;
      if (B.isFormData(s) && (T = N.headers.get("content-type")) && u.setContentType(T), N.body) {
        const [R, I] = ep(
          _,
          sa(tp(c))
        );
        s = sp(N.body, op, R, I);
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
    const g = uc && (f === "stream" || f === "response");
    if (uc && (a || g && v)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((D) => {
        N[D] = b[D];
      });
      const T = B.toFiniteNumber(b.headers.get("content-length")), [R, I] = a && ep(
        T,
        sa(tp(a), !0)
      ) || [];
      b = new Response(
        sp(b.body, op, R, () => {
          I && I(), v && v();
        }),
        N
      );
    }
    f = f || "text";
    let O = await oa[B.findKey(oa, f) || "text"](b, e);
    return !g && v && v(), await new Promise((N, T) => {
      tv(N, T, {
        data: O,
        headers: Mt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: m
      });
    });
  } catch (y) {
    throw v && v(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new Re("Network Error", Re.ERR_NETWORK, e, m),
      {
        cause: y.cause || y
      }
    ) : Re.from(y, y && y.code, e, m);
  }
}), dc = {
  http: LS,
  xhr: pC,
  fetch: wC
};
B.forEach(dc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const rp = (e) => `- ${e}`, AC = (e) => B.isFunction(e) || e === null || e === !1, iv = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const o = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let i;
      if (s = n, !AC(n) && (s = dc[(i = String(n)).toLowerCase()], s === void 0))
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
` + r.map(rp).join(`
`) : " " + rp(r[0]) : "as no adapter specified";
      throw new Re(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: dc
};
function al(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new zo(null, e);
}
function ip(e) {
  return al(e), e.headers = Mt.from(e.headers), e.data = il.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), iv.getAdapter(e.adapter || Qr.adapter)(e).then(function(s) {
    return al(e), s.data = il.call(
      e,
      e.transformResponse,
      s
    ), s.headers = Mt.from(s.headers), s;
  }, function(s) {
    return ev(s) || (al(e), s && s.response && (s.response.data = il.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = Mt.from(s.response.headers))), Promise.reject(s);
  });
}
const av = "1.10.0", Ra = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ra[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ap = {};
Ra.transitional = function(t, n, s) {
  function o(r, i) {
    return "[Axios v" + av + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "");
  }
  return (r, i, a) => {
    if (t === !1)
      throw new Re(
        o(i, " has been removed" + (n ? " in " + n : "")),
        Re.ERR_DEPRECATED
      );
    return n && !ap[i] && (ap[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(r, i, a) : !0;
  };
};
Ra.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function SC(e, t, n) {
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
const Li = {
  assertOptions: SC,
  validators: Ra
}, bn = Li.validators;
let Us = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Qs(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: r } = n;
    s !== void 0 && Li.assertOptions(s, {
      silentJSONParsing: bn.transitional(bn.boolean),
      forcedJSONParsing: bn.transitional(bn.boolean),
      clarifyTimeoutError: bn.transitional(bn.boolean)
    }, !1), o != null && (B.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Li.assertOptions(o, {
      encode: bn.function,
      serialize: bn.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Li.assertOptions(n, {
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
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (c = c && v.synchronous, a.unshift(v.fulfilled, v.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(v) {
      f.push(v.fulfilled, v.rejected);
    });
    let u, d = 0, p;
    if (!c) {
      const m = [ip.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, f), p = m.length, u = Promise.resolve(n); d < p; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    p = a.length;
    let h = n;
    for (d = 0; d < p; ) {
      const m = a[d++], v = a[d++];
      try {
        h = m(h);
      } catch (_) {
        v.call(this, _);
        break;
      }
    }
    try {
      u = ip.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = f.length; d < p; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = Qs(this.defaults, t);
    const n = nv(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Qg(n, t.params, t.paramsSerializer);
  }
};
B.forEach(["delete", "get", "head", "options"], function(t) {
  Us.prototype[t] = function(n, s) {
    return this.request(Qs(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(r, i, a) {
      return this.request(Qs(a || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: i
      }));
    };
  }
  Us.prototype[t] = n(), Us.prototype[t + "Form"] = n(!0);
});
let CC = class lv {
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
      token: new lv(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function OC(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function TC(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const fc = {
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
Object.entries(fc).forEach(([e, t]) => {
  fc[t] = e;
});
function cv(e) {
  const t = new Us(e), n = Bg(Us.prototype.request, t);
  return B.extend(n, Us.prototype, t, { allOwnKeys: !0 }), B.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return cv(Qs(e, o));
  }, n;
}
const lt = cv(Qr);
lt.Axios = Us;
lt.CanceledError = zo;
lt.CancelToken = CC;
lt.isCancel = ev;
lt.VERSION = av;
lt.toFormData = ka;
lt.AxiosError = Re;
lt.Cancel = lt.CanceledError;
lt.all = function(t) {
  return Promise.all(t);
};
lt.spread = OC;
lt.isAxiosError = TC;
lt.mergeConfig = Qs;
lt.AxiosHeaders = Mt;
lt.formToJSON = (e) => Zg(B.isHTMLForm(e) ? new FormData(e) : e);
lt.getAdapter = iv.getAdapter;
lt.HttpStatusCode = fc;
lt.default = lt;
const {
  Axios: cB,
  AxiosError: NC,
  CanceledError: uB,
  isCancel: dB,
  CancelToken: fB,
  VERSION: pB,
  all: hB,
  Cancel: mB,
  isAxiosError: gB,
  spread: vB,
  toFormData: _B,
  AxiosHeaders: yB,
  HttpStatusCode: bB,
  formToJSON: EB,
  getAdapter: wB,
  mergeConfig: AB
} = lt, DC = "all_fhir", kC = "api", xC = () => {
  let n = {
    pid: new URLSearchParams(location.search).get("pid"),
    page: kC,
    // content: "externalModule",
    type: "module",
    prefix: DC
  };
  return window.redcap_csrf_token && (n.redcap_csrf_token = window.redcap_csrf_token), n;
}, RC = () => {
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
    const n = xC();
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
}, xe = RC(), $e = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return xe.get("", { params: e });
  },
  updateFhirSystem(e) {
    const t = { route: "project-settings/fhir-system" };
    return xe.put("", { fhir_system: e }, { params: t });
  },
  updateProjectSettings(e) {
    const t = { route: "project-settings" };
    return xe.put("", e, { params: t });
  },
  listMrns(e, t) {
    const n = { route: "mrns" };
    return e && (n._page = e), t && (n._per_page = t), xe.get("", { params: n });
  },
  addMrns(e) {
    const t = { route: "mrns" };
    return xe.post("", { mrns: e }, { params: t });
  },
  addMrn(e) {
    const t = { route: "mrns" };
    return xe.post("", { mrns: [e] }, { params: t });
  },
  removeMrn(e) {
    const t = { route: `mrns/${e}` };
    return xe.delete("", { params: t, data: e });
  },
  triggerFetch(e, t) {
    const n = { route: "trigger-fetch" };
    return xe.post("", { mrns: e, resources: t }, { params: n });
  },
  getFetchStatus() {
    const e = { route: "fetch-status" };
    return xe.get("", { params: e });
  },
  createZipArchive(e) {
    const t = { route: "create-zip-archive" };
    return xe.post("", { mrns: e }, { params: t });
  },
  downloadZip(e) {
    const t = { route: "download-zip", zip_id: e };
    return xe.get("", { params: t, responseType: "blob" });
  },
  // Archive management API methods
  listArchives() {
    const e = { route: "archives" };
    return xe.get("", { params: e });
  },
  createArchiveSelected(e, t) {
    const n = { route: "archives/selected" }, s = { mrns: e };
    return t && Object.assign(s, t), xe.post("", s, { params: n });
  },
  createArchiveAll(e) {
    const t = { route: "archives/all" }, n = e || {};
    return xe.post("", n, { params: t });
  },
  downloadArchive(e) {
    const t = { route: `archives/${e}/download` };
    return xe.get("", { params: t, responseType: "blob" });
  },
  deleteArchive(e) {
    const t = { route: `archives/${e}` };
    return xe.delete("", { params: t });
  },
  // Enhanced MRN and resource management
  getMrnResources(e) {
    const t = { route: `mrns/${e}/resources` };
    return xe.get("", { params: t });
  },
  getProjectSummary() {
    const e = { route: "project-summary" };
    return xe.get("", { params: e });
  },
  triggerFetchMrns(e, t) {
    const n = { route: "trigger-fetch" }, s = { mrns: e };
    return t && t.length > 0 && (s.resources = t), xe.post("", s, { params: n });
  },
  performFullSync() {
    const e = { route: "perform-full-sync" };
    return xe.post("", {}, { params: e });
  },
  retryFailedResource(e, t, n) {
    const s = { route: "retry-failed" };
    return xe.post("", {
      mrn: e,
      resource_type: t,
      repeat_instance: n,
      bulk: !1
    }, { params: s });
  },
  bulkRetryFailed(e) {
    const t = { route: "retry-failed" }, n = { bulk: !0 };
    return e && (n.resource_type = e), xe.post("", n, { params: t });
  },
  retryFailed(e) {
    const t = { route: "retry-failed" };
    return xe.post("", e, { params: t });
  },
  // Task management API methods
  listTasks(e, t, n) {
    const s = { route: "tasks" };
    return e && (s.page = e), t && (s.limit = t), n && Object.assign(s, n), xe.get("", { params: s });
  },
  getTaskDetails(e) {
    const t = { route: `tasks/${e}` };
    return xe.get("", { params: t });
  },
  performTaskFullSync() {
    const e = { route: "tasks/full-sync" };
    return xe.post("", {}, { params: e });
  },
  retryFailedResources(e) {
    const t = { route: "tasks/retry-failed" }, n = e ? { filters: e } : {};
    return xe.post("", n, { params: t });
  },
  deleteTask(e) {
    const t = { route: `tasks/${e}` };
    return xe.delete("", { params: t });
  },
  getQueueStatistics() {
    const e = { route: "tasks/stats" };
    return xe.get("", { params: e });
  },
  cleanupCompletedTasks() {
    const e = { route: "tasks/cleanup" };
    return xe.post("", {}, { params: e });
  },
  // Streaming archive API methods
  streamSelectedArchive(e, t) {
    const n = { route: "archives/stream/selected" }, s = { mrns: e, ...t };
    return xe.post("", s, {
      params: n,
      responseType: "blob",
      timeout: 0
      // No timeout for streaming
    });
  },
  streamAllArchive(e) {
    const t = { route: "archives/stream/all" };
    return xe.post("", e || {}, {
      params: t,
      responseType: "blob",
      timeout: 0
    });
  },
  // Resource content viewing API method
  getResourceContent(e, t, n, s) {
    const o = { route: `records/${e}/resources/${t}/content/${n}` };
    return s && (o.preview_limit = s), xe.get("", { params: o });
  },
  // FHIR access status
  getFhirAccessStatus() {
    const e = { route: "fhir-access/status" };
    return xe.get("", { params: e });
  },
  // Mapping resources (route-based management)
  listMappingResources() {
    const e = { route: "mapping-resources" };
    return xe.get("", { params: e });
  },
  createMappingResource(e) {
    const t = { route: "mapping-resources" };
    return xe.post("", e, { params: t });
  },
  updateMappingResource(e, t) {
    const n = { route: `mapping-resources/${e}` };
    return xe.put("", t, { params: n });
  },
  softDeleteMappingResource(e) {
    const t = { route: `mapping-resources/${e}/soft-delete` };
    return xe.post("", {}, { params: t });
  },
  restoreMappingResource(e) {
    const t = { route: `mapping-resources/${e}/restore` };
    return xe.post("", {}, { params: t });
  },
  purgeDeletedMappingResource(e) {
    const t = { route: `mapping-resources/${e}/purge-deleted` };
    return xe.post("", {}, { params: t });
  },
  deleteMappingResource(e) {
    const t = { route: `mapping-resources/${e}` };
    return xe.delete("", { params: t });
  },
  importMappingResources(e) {
    const t = { route: "mapping-resources/import" };
    return xe.post("", e, { params: t });
  }
}, to = /* @__PURE__ */ In("errors", () => {
  const e = j([]);
  return {
    errors: e,
    addError: (s, o) => {
      const r = IC(s);
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
function IC(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
var Ot = "top", $t = "bottom", jt = "right", Tt = "left", Ia = "auto", qo = [Ot, $t, jt, Tt], Js = "start", Io = "end", uv = "clippingParents", ou = "viewport", mo = "popper", dv = "reference", pc = /* @__PURE__ */ qo.reduce(function(e, t) {
  return e.concat([t + "-" + Js, t + "-" + Io]);
}, []), ru = /* @__PURE__ */ [].concat(qo, [Ia]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Js, t + "-" + Io]);
}, []), fv = "beforeRead", pv = "read", hv = "afterRead", mv = "beforeMain", gv = "main", vv = "afterMain", _v = "beforeWrite", yv = "write", bv = "afterWrite", Ev = [fv, pv, hv, mv, gv, vv, _v, yv, bv];
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
function Zs(e) {
  var t = Ut(e).Element;
  return e instanceof t || e instanceof Element;
}
function qt(e) {
  var t = Ut(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function iu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ut(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function MC(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var s = t.styles[n] || {}, o = t.attributes[n] || {}, r = t.elements[n];
    !qt(r) || !xn(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(i) {
      var a = o[i];
      a === !1 ? r.removeAttribute(i) : r.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function PC(e) {
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
const au = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: MC,
  effect: PC,
  requires: ["computeStyles"]
};
function Tn(e) {
  return e.split("-")[0];
}
var Hs = Math.max, ra = Math.min, Mo = Math.round;
function hc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function wv() {
  return !/^((?!chrome|android).)*safari/i.test(hc());
}
function Po(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(), o = 1, r = 1;
  t && qt(e) && (o = e.offsetWidth > 0 && Mo(s.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && Mo(s.height) / e.offsetHeight || 1);
  var i = Zs(e) ? Ut(e) : window, a = i.visualViewport, c = !wv() && n, f = (s.left + (c && a ? a.offsetLeft : 0)) / o, u = (s.top + (c && a ? a.offsetTop : 0)) / r, d = s.width / o, p = s.height / r;
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
function lu(e) {
  var t = Po(e), n = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: s
  };
}
function Av(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && iu(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function zn(e) {
  return Ut(e).getComputedStyle(e);
}
function VC(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function ys(e) {
  return ((Zs(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ma(e) {
  return xn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (iu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ys(e)
  );
}
function lp(e) {
  return !qt(e) || // https://github.com/popperjs/popper-core/issues/837
  zn(e).position === "fixed" ? null : e.offsetParent;
}
function LC(e) {
  var t = /firefox/i.test(hc()), n = /Trident/i.test(hc());
  if (n && qt(e)) {
    var s = zn(e);
    if (s.position === "fixed")
      return null;
  }
  var o = Ma(e);
  for (iu(o) && (o = o.host); qt(o) && ["html", "body"].indexOf(xn(o)) < 0; ) {
    var r = zn(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Jr(e) {
  for (var t = Ut(e), n = lp(e); n && VC(n) && zn(n).position === "static"; )
    n = lp(n);
  return n && (xn(n) === "html" || xn(n) === "body" && zn(n).position === "static") ? t : n || LC(e) || t;
}
function cu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Er(e, t, n) {
  return Hs(e, ra(t, n));
}
function FC(e, t, n) {
  var s = Er(e, t, n);
  return s > n ? n : s;
}
function Sv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Cv(e) {
  return Object.assign({}, Sv(), e);
}
function Ov(e, t) {
  return t.reduce(function(n, s) {
    return n[s] = e, n;
  }, {});
}
var BC = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Cv(typeof t != "number" ? t : Ov(t, qo));
};
function $C(e) {
  var t, n = e.state, s = e.name, o = e.options, r = n.elements.arrow, i = n.modifiersData.popperOffsets, a = Tn(n.placement), c = cu(a), f = [Tt, jt].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!r || !i)) {
    var d = BC(o.padding, n), p = lu(r), h = c === "y" ? Ot : Tt, m = c === "y" ? $t : jt, v = n.rects.reference[u] + n.rects.reference[c] - i[c] - n.rects.popper[u], _ = i[c] - n.rects.reference[c], y = Jr(r), b = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, g = v / 2 - _ / 2, O = d[h], N = b - p[u] - d[m], T = b / 2 - p[u] / 2 + g, R = Er(O, T, N), I = c;
    n.modifiersData[s] = (t = {}, t[I] = R, t.centerOffset = R - T, t);
  }
}
function jC(e) {
  var t = e.state, n = e.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Av(t.elements.popper, o) && (t.elements.arrow = o));
}
const Tv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $C,
  effect: jC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Vo(e) {
  return e.split("-")[1];
}
var UC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function HC(e, t) {
  var n = e.x, s = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Mo(n * o) / o || 0,
    y: Mo(s * o) / o || 0
  };
}
function cp(e) {
  var t, n = e.popper, s = e.popperRect, o = e.placement, r = e.variation, i = e.offsets, a = e.position, c = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, p = i.x, h = p === void 0 ? 0 : p, m = i.y, v = m === void 0 ? 0 : m, _ = typeof u == "function" ? u({
    x: h,
    y: v
  }) : {
    x: h,
    y: v
  };
  h = _.x, v = _.y;
  var y = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), g = Tt, O = Ot, N = window;
  if (f) {
    var T = Jr(n), R = "clientHeight", I = "clientWidth";
    if (T === Ut(n) && (T = ys(n), zn(T).position !== "static" && a === "absolute" && (R = "scrollHeight", I = "scrollWidth")), T = T, o === Ot || (o === Tt || o === jt) && r === Io) {
      O = $t;
      var D = d && T === N && N.visualViewport ? N.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[R]
      );
      v -= D - s.height, v *= c ? 1 : -1;
    }
    if (o === Tt || (o === Ot || o === $t) && r === Io) {
      g = jt;
      var w = d && T === N && N.visualViewport ? N.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[I]
      );
      h -= w - s.width, h *= c ? 1 : -1;
    }
  }
  var k = Object.assign({
    position: a
  }, f && UC), A = u === !0 ? HC({
    x: h,
    y: v
  }, Ut(n)) : {
    x: h,
    y: v
  };
  if (h = A.x, v = A.y, c) {
    var F;
    return Object.assign({}, k, (F = {}, F[O] = b ? "0" : "", F[g] = y ? "0" : "", F.transform = (N.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", F));
  }
  return Object.assign({}, k, (t = {}, t[O] = b ? v + "px" : "", t[g] = y ? h + "px" : "", t.transform = "", t));
}
function WC(e) {
  var t = e.state, n = e.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, r = n.adaptive, i = r === void 0 ? !0 : r, a = n.roundOffsets, c = a === void 0 ? !0 : a, f = {
    placement: Tn(t.placement),
    variation: Vo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cp(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cp(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const uu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: WC,
  data: {}
};
var di = {
  passive: !0
};
function KC(e) {
  var t = e.state, n = e.instance, s = e.options, o = s.scroll, r = o === void 0 ? !0 : o, i = s.resize, a = i === void 0 ? !0 : i, c = Ut(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, di);
  }), a && c.addEventListener("resize", n.update, di), function() {
    r && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, di);
    }), a && c.removeEventListener("resize", n.update, di);
  };
}
const du = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: KC,
  data: {}
};
var zC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Fi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return zC[t];
  });
}
var qC = {
  start: "end",
  end: "start"
};
function up(e) {
  return e.replace(/start|end/g, function(t) {
    return qC[t];
  });
}
function fu(e) {
  var t = Ut(e), n = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: s
  };
}
function pu(e) {
  return Po(ys(e)).left + fu(e).scrollLeft;
}
function YC(e, t) {
  var n = Ut(e), s = ys(e), o = n.visualViewport, r = s.clientWidth, i = s.clientHeight, a = 0, c = 0;
  if (o) {
    r = o.width, i = o.height;
    var f = wv();
    (f || !f && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: a + pu(e),
    y: c
  };
}
function XC(e) {
  var t, n = ys(e), s = fu(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = Hs(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Hs(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -s.scrollLeft + pu(e), c = -s.scrollTop;
  return zn(o || n).direction === "rtl" && (a += Hs(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: i,
    x: a,
    y: c
  };
}
function hu(e) {
  var t = zn(e), n = t.overflow, s = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function Nv(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : qt(e) && hu(e) ? e : Nv(Ma(e));
}
function wr(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = Nv(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ut(s), i = o ? [r].concat(r.visualViewport || [], hu(s) ? s : []) : s, a = t.concat(i);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(wr(Ma(i)))
  );
}
function mc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function GC(e, t) {
  var n = Po(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function dp(e, t, n) {
  return t === ou ? mc(YC(e, n)) : Zs(t) ? GC(t, n) : mc(XC(ys(e)));
}
function QC(e) {
  var t = wr(Ma(e)), n = ["absolute", "fixed"].indexOf(zn(e).position) >= 0, s = n && qt(e) ? Jr(e) : e;
  return Zs(s) ? t.filter(function(o) {
    return Zs(o) && Av(o, s) && xn(o) !== "body";
  }) : [];
}
function JC(e, t, n, s) {
  var o = t === "clippingParents" ? QC(e) : [].concat(t), r = [].concat(o, [n]), i = r[0], a = r.reduce(function(c, f) {
    var u = dp(e, f, s);
    return c.top = Hs(u.top, c.top), c.right = ra(u.right, c.right), c.bottom = ra(u.bottom, c.bottom), c.left = Hs(u.left, c.left), c;
  }, dp(e, i, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Dv(e) {
  var t = e.reference, n = e.element, s = e.placement, o = s ? Tn(s) : null, r = s ? Vo(s) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case Ot:
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
  var f = o ? cu(o) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (r) {
      case Js:
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
  var n = t, s = n.placement, o = s === void 0 ? e.placement : s, r = n.strategy, i = r === void 0 ? e.strategy : r, a = n.boundary, c = a === void 0 ? uv : a, f = n.rootBoundary, u = f === void 0 ? ou : f, d = n.elementContext, p = d === void 0 ? mo : d, h = n.altBoundary, m = h === void 0 ? !1 : h, v = n.padding, _ = v === void 0 ? 0 : v, y = Cv(typeof _ != "number" ? _ : Ov(_, qo)), b = p === mo ? dv : mo, g = e.rects.popper, O = e.elements[m ? b : p], N = JC(Zs(O) ? O : O.contextElement || ys(e.elements.popper), c, u, i), T = Po(e.elements.reference), R = Dv({
    reference: T,
    element: g,
    placement: o
  }), I = mc(Object.assign({}, g, R)), D = p === mo ? I : T, w = {
    top: N.top - D.top + y.top,
    bottom: D.bottom - N.bottom + y.bottom,
    left: N.left - D.left + y.left,
    right: D.right - N.right + y.right
  }, k = e.modifiersData.offset;
  if (p === mo && k) {
    var A = k[o];
    Object.keys(w).forEach(function(F) {
      var de = [jt, $t].indexOf(F) >= 0 ? 1 : -1, X = [Ot, $t].indexOf(F) >= 0 ? "y" : "x";
      w[F] += A[X] * de;
    });
  }
  return w;
}
function ZC(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = n.boundary, r = n.rootBoundary, i = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? ru : c, u = Vo(s), d = u ? a ? pc : pc.filter(function(m) {
    return Vo(m) === u;
  }) : qo, p = d.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  p.length === 0 && (p = d);
  var h = p.reduce(function(m, v) {
    return m[v] = Lo(e, {
      placement: v,
      boundary: o,
      rootBoundary: r,
      padding: i
    })[Tn(v)], m;
  }, {});
  return Object.keys(h).sort(function(m, v) {
    return h[m] - h[v];
  });
}
function eO(e) {
  if (Tn(e) === Ia)
    return [];
  var t = Fi(e);
  return [up(e), t, up(t)];
}
function tO(e) {
  var t = e.state, n = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !0 : i, c = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, _ = t.options.placement, y = Tn(_), b = y === _, g = c || (b || !m ? [Fi(_)] : eO(_)), O = [_].concat(g).reduce(function(we, ke) {
      return we.concat(Tn(ke) === Ia ? ZC(t, {
        placement: ke,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: v
      }) : ke);
    }, []), N = t.rects.reference, T = t.rects.popper, R = /* @__PURE__ */ new Map(), I = !0, D = O[0], w = 0; w < O.length; w++) {
      var k = O[w], A = Tn(k), F = Vo(k) === Js, de = [Ot, $t].indexOf(A) >= 0, X = de ? "width" : "height", re = Lo(t, {
        placement: k,
        boundary: u,
        rootBoundary: d,
        altBoundary: p,
        padding: f
      }), z = de ? F ? jt : Tt : F ? $t : Ot;
      N[X] > T[X] && (z = Fi(z));
      var ce = Fi(z), be = [];
      if (r && be.push(re[A] <= 0), a && be.push(re[z] <= 0, re[ce] <= 0), be.every(function(we) {
        return we;
      })) {
        D = k, I = !1;
        break;
      }
      R.set(k, be);
    }
    if (I)
      for (var Ze = m ? 3 : 1, K = function(ke) {
        var He = O.find(function(L) {
          var J = R.get(L);
          if (J)
            return J.slice(0, ke).every(function(se) {
              return se;
            });
        });
        if (He)
          return D = He, "break";
      }, oe = Ze; oe > 0; oe--) {
        var pe = K(oe);
        if (pe === "break") break;
      }
    t.placement !== D && (t.modifiersData[s]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const kv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: tO,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function fp(e, t, n) {
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
function pp(e) {
  return [Ot, jt, $t, Tt].some(function(t) {
    return e[t] >= 0;
  });
}
function nO(e) {
  var t = e.state, n = e.name, s = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = Lo(t, {
    elementContext: "reference"
  }), a = Lo(t, {
    altBoundary: !0
  }), c = fp(i, s), f = fp(a, o, r), u = pp(c), d = pp(f);
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
  fn: nO
};
function sO(e, t, n) {
  var s = Tn(e), o = [Tt, Ot].indexOf(s) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = r[0], a = r[1];
  return i = i || 0, a = (a || 0) * o, [Tt, jt].indexOf(s) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function oO(e) {
  var t = e.state, n = e.options, s = e.name, o = n.offset, r = o === void 0 ? [0, 0] : o, i = ru.reduce(function(u, d) {
    return u[d] = sO(d, t.rects, r), u;
  }, {}), a = i[t.placement], c = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[s] = i;
}
const Rv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: oO
};
function rO(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Dv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const mu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: rO,
  data: {}
};
function iO(e) {
  return e === "x" ? "y" : "x";
}
function aO(e) {
  var t = e.state, n = e.options, s = e.name, o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !1 : i, c = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, p = n.tether, h = p === void 0 ? !0 : p, m = n.tetherOffset, v = m === void 0 ? 0 : m, _ = Lo(t, {
    boundary: c,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), y = Tn(t.placement), b = Vo(t.placement), g = !b, O = cu(y), N = iO(O), T = t.modifiersData.popperOffsets, R = t.rects.reference, I = t.rects.popper, D = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, w = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (T) {
    if (r) {
      var F, de = O === "y" ? Ot : Tt, X = O === "y" ? $t : jt, re = O === "y" ? "height" : "width", z = T[O], ce = z + _[de], be = z - _[X], Ze = h ? -I[re] / 2 : 0, K = b === Js ? R[re] : I[re], oe = b === Js ? -I[re] : -R[re], pe = t.elements.arrow, we = h && pe ? lu(pe) : {
        width: 0,
        height: 0
      }, ke = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Sv(), He = ke[de], L = ke[X], J = Er(0, R[re], we[re]), se = g ? R[re] / 2 - Ze - J - He - w.mainAxis : K - J - He - w.mainAxis, ve = g ? -R[re] / 2 + Ze + J + L + w.mainAxis : oe + J + L + w.mainAxis, Ie = t.elements.arrow && Jr(t.elements.arrow), tt = Ie ? O === "y" ? Ie.clientTop || 0 : Ie.clientLeft || 0 : 0, E = (F = k?.[O]) != null ? F : 0, S = z + se - E - tt, V = z + ve - E, q = Er(h ? ra(ce, S) : ce, z, h ? Hs(be, V) : be);
      T[O] = q, A[O] = q - z;
    }
    if (a) {
      var U, Y = O === "x" ? Ot : Tt, ae = O === "x" ? $t : jt, te = T[N], ne = N === "y" ? "height" : "width", Z = te + _[Y], ye = te - _[ae], ie = [Ot, Tt].indexOf(y) !== -1, _e = (U = k?.[N]) != null ? U : 0, Oe = ie ? Z : te - R[ne] - I[ne] - _e + w.altAxis, Ve = ie ? te + R[ne] + I[ne] - _e - w.altAxis : ye, We = h && ie ? FC(Oe, te, Ve) : Er(h ? Oe : Z, te, h ? Ve : ye);
      T[N] = We, A[N] = We - te;
    }
    t.modifiersData[s] = A;
  }
}
const Iv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: aO,
  requiresIfExists: ["offset"]
};
function lO(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function cO(e) {
  return e === Ut(e) || !qt(e) ? fu(e) : lO(e);
}
function uO(e) {
  var t = e.getBoundingClientRect(), n = Mo(t.width) / e.offsetWidth || 1, s = Mo(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function dO(e, t, n) {
  n === void 0 && (n = !1);
  var s = qt(t), o = qt(t) && uO(t), r = ys(t), i = Po(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((xn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  hu(r)) && (a = cO(t)), qt(t) ? (c = Po(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = pu(r))), {
    x: i.left + a.scrollLeft - c.x,
    y: i.top + a.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function fO(e) {
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
function pO(e) {
  var t = fO(e);
  return Ev.reduce(function(n, s) {
    return n.concat(t.filter(function(o) {
      return o.phase === s;
    }));
  }, []);
}
function hO(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function mO(e) {
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
var hp = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function mp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Pa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, s = n === void 0 ? [] : n, o = t.defaultOptions, r = o === void 0 ? hp : o;
  return function(a, c, f) {
    f === void 0 && (f = r);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hp, r),
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
          reference: Zs(a) ? wr(a) : a.contextElement ? wr(a.contextElement) : [],
          popper: wr(c)
        };
        var g = pO(mO([].concat(s, u.options.modifiers)));
        return u.orderedModifiers = g.filter(function(O) {
          return O.enabled;
        }), m(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var y = u.elements, b = y.reference, g = y.popper;
          if (mp(b, g)) {
            u.rects = {
              reference: dO(b, Jr(g), u.options.strategy === "fixed"),
              popper: lu(g)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(w) {
              return u.modifiersData[w.name] = Object.assign({}, w.data);
            });
            for (var O = 0; O < u.orderedModifiers.length; O++) {
              if (u.reset === !0) {
                u.reset = !1, O = -1;
                continue;
              }
              var N = u.orderedModifiers[O], T = N.fn, R = N.options, I = R === void 0 ? {} : R, D = N.name;
              typeof T == "function" && (u = T({
                state: u,
                options: I,
                name: D,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: hO(function() {
        return new Promise(function(_) {
          h.forceUpdate(), _(u);
        });
      }),
      destroy: function() {
        v(), p = !0;
      }
    };
    if (!mp(a, c))
      return h;
    h.setOptions(f).then(function(_) {
      !p && f.onFirstUpdate && f.onFirstUpdate(_);
    });
    function m() {
      u.orderedModifiers.forEach(function(_) {
        var y = _.name, b = _.options, g = b === void 0 ? {} : b, O = _.effect;
        if (typeof O == "function") {
          var N = O({
            state: u,
            name: y,
            instance: h,
            options: g
          }), T = function() {
          };
          d.push(N || T);
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
var gO = /* @__PURE__ */ Pa(), vO = [du, mu, uu, au], _O = /* @__PURE__ */ Pa({
  defaultModifiers: vO
}), yO = [du, mu, uu, au, Rv, kv, Iv, Tv, xv], gu = /* @__PURE__ */ Pa({
  defaultModifiers: yO
});
const Mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: vv,
  afterRead: hv,
  afterWrite: bv,
  applyStyles: au,
  arrow: Tv,
  auto: Ia,
  basePlacements: qo,
  beforeMain: mv,
  beforeRead: fv,
  beforeWrite: _v,
  bottom: $t,
  clippingParents: uv,
  computeStyles: uu,
  createPopper: gu,
  createPopperBase: gO,
  createPopperLite: _O,
  detectOverflow: Lo,
  end: Io,
  eventListeners: du,
  flip: kv,
  hide: xv,
  left: Tt,
  main: gv,
  modifierPhases: Ev,
  offset: Rv,
  placements: ru,
  popper: mo,
  popperGenerator: Pa,
  popperOffsets: mu,
  preventOverflow: Iv,
  read: pv,
  reference: dv,
  right: jt,
  start: Js,
  top: Ot,
  variationPlacements: pc,
  viewport: ou,
  write: yv
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ts = /* @__PURE__ */ new Map(), ll = {
  set(e, t, n) {
    ts.has(e) || ts.set(e, /* @__PURE__ */ new Map());
    const s = ts.get(e);
    if (!s.has(t) && s.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
      return;
    }
    s.set(t, n);
  },
  get(e, t) {
    return ts.has(e) && ts.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!ts.has(e))
      return;
    const n = ts.get(e);
    n.delete(t), n.size === 0 && ts.delete(e);
  }
}, bO = 1e6, EO = 1e3, gc = "transitionend", Pv = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), wO = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), AO = (e) => {
  do
    e += Math.floor(Math.random() * bO);
  while (document.getElementById(e));
  return e;
}, SO = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), o = Number.parseFloat(n);
  return !s && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * EO);
}, Vv = (e) => {
  e.dispatchEvent(new Event(gc));
}, Hn = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), ms = (e) => Hn(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Pv(e)) : null, Yo = (e) => {
  if (!Hn(e) || e.getClientRects().length === 0)
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
}, gs = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Lv = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Lv(e.parentNode) : null;
}, ia = () => {
}, Zr = (e) => {
  e.offsetHeight;
}, Fv = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, cl = [], CO = (e) => {
  document.readyState === "loading" ? (cl.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of cl)
      t();
  }), cl.push(e)) : e();
}, Gt = () => document.documentElement.dir === "rtl", Zt = (e) => {
  CO(() => {
    const t = Fv();
    if (t) {
      const n = e.NAME, s = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = s, e.jQueryInterface);
    }
  });
}, Rt = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, Bv = (e, t, n = !0) => {
  if (!n) {
    Rt(e);
    return;
  }
  const o = SO(t) + 5;
  let r = !1;
  const i = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(gc, i), Rt(e));
  };
  t.addEventListener(gc, i), setTimeout(() => {
    r || Vv(t);
  }, o);
}, vu = (e, t, n, s) => {
  const o = e.length;
  let r = e.indexOf(t);
  return r === -1 ? !n && s ? e[o - 1] : e[0] : (r += n ? 1 : -1, s && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))]);
}, OO = /[^.]*(?=\..*)\.|.*/, TO = /\..*/, NO = /::\d+$/, ul = {};
let gp = 1;
const $v = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, DO = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function jv(e, t) {
  return t && `${t}::${gp++}` || e.uidEvent || gp++;
}
function Uv(e) {
  const t = jv(e);
  return e.uidEvent = t, ul[t] = ul[t] || {}, ul[t];
}
function kO(e, t) {
  return function n(s) {
    return _u(s, {
      delegateTarget: e
    }), n.oneOff && Q.off(e, s.type, t), t.apply(e, [s]);
  };
}
function xO(e, t, n) {
  return function s(o) {
    const r = e.querySelectorAll(t);
    for (let {
      target: i
    } = o; i && i !== this; i = i.parentNode)
      for (const a of r)
        if (a === i)
          return _u(o, {
            delegateTarget: i
          }), s.oneOff && Q.off(e, o.type, t, n), n.apply(i, [o]);
  };
}
function Hv(e, t, n = null) {
  return Object.values(e).find((s) => s.callable === t && s.delegationSelector === n);
}
function Wv(e, t, n) {
  const s = typeof t == "string", o = s ? n : t || n;
  let r = Kv(e);
  return DO.has(r) || (r = e), [s, o, r];
}
function vp(e, t, n, s, o) {
  if (typeof t != "string" || !e)
    return;
  let [r, i, a] = Wv(t, n, s);
  t in $v && (i = ((m) => function(v) {
    if (!v.relatedTarget || v.relatedTarget !== v.delegateTarget && !v.delegateTarget.contains(v.relatedTarget))
      return m.call(this, v);
  })(i));
  const c = Uv(e), f = c[a] || (c[a] = {}), u = Hv(f, i, r ? n : null);
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const d = jv(i, t.replace(OO, "")), p = r ? xO(e, n, i) : kO(e, i);
  p.delegationSelector = r ? n : null, p.callable = i, p.oneOff = o, p.uidEvent = d, f[d] = p, e.addEventListener(a, p, r);
}
function vc(e, t, n, s, o) {
  const r = Hv(t[n], s, o);
  r && (e.removeEventListener(n, r, !!o), delete t[n][r.uidEvent]);
}
function RO(e, t, n, s) {
  const o = t[n] || {};
  for (const [r, i] of Object.entries(o))
    r.includes(s) && vc(e, t, n, i.callable, i.delegationSelector);
}
function Kv(e) {
  return e = e.replace(TO, ""), $v[e] || e;
}
const Q = {
  on(e, t, n, s) {
    vp(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    vp(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e)
      return;
    const [o, r, i] = Wv(t, n, s), a = i !== t, c = Uv(e), f = c[i] || {}, u = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(f).length)
        return;
      vc(e, c, i, r, o ? n : null);
      return;
    }
    if (u)
      for (const d of Object.keys(c))
        RO(e, c, d, t.slice(1));
    for (const [d, p] of Object.entries(f)) {
      const h = d.replace(NO, "");
      (!a || t.includes(h)) && vc(e, c, i, p.callable, p.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const s = Fv(), o = Kv(t), r = t !== o;
    let i = null, a = !0, c = !0, f = !1;
    r && s && (i = s.Event(t, n), s(e).trigger(i), a = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const u = _u(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && u.preventDefault(), c && e.dispatchEvent(u), u.defaultPrevented && i && i.preventDefault(), u;
  }
};
function _u(e, t = {}) {
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
function _p(e) {
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
function dl(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Wn = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${dl(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${dl(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {}, n = Object.keys(e.dataset).filter((s) => s.startsWith("bs") && !s.startsWith("bsConfig"));
    for (const s of n) {
      let o = s.replace(/^bs/, "");
      o = o.charAt(0).toLowerCase() + o.slice(1), t[o] = _p(e.dataset[s]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return _p(e.getAttribute(`data-bs-${dl(t)}`));
  }
};
class ei {
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
    const s = Hn(n) ? Wn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof s == "object" ? s : {},
      ...Hn(n) ? Wn.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, o] of Object.entries(n)) {
      const r = t[s], i = Hn(r) ? "element" : wO(r);
      if (!new RegExp(o).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${o}".`);
    }
  }
}
const IO = "5.3.7";
class hn extends ei {
  constructor(t, n) {
    super(), t = ms(t), t && (this._element = t, this._config = this._getConfig(n), ll.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    ll.remove(this._element, this.constructor.DATA_KEY), Q.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  // Private
  _queueCallback(t, n, s = !0) {
    Bv(t, n, s);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return ll.get(ms(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return IO;
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
const fl = (e) => {
  let t = e.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t ? t.split(",").map((n) => Pv(n)).join(",") : null;
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
    return this.find(t, e).filter((n) => !gs(n) && Yo(n));
  },
  getSelectorFromElement(e) {
    const t = fl(e);
    return t && Ee.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = fl(e);
    return t ? Ee.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = fl(e);
    return t ? Ee.find(t) : [];
  }
}, Va = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, s = e.NAME;
  Q.on(document, n, `[data-bs-dismiss="${s}"]`, function(o) {
    if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), gs(this))
      return;
    const r = Ee.getElementFromSelector(this) || this.closest(`.${s}`);
    e.getOrCreateInstance(r)[t]();
  });
}, MO = "alert", PO = "bs.alert", zv = `.${PO}`, VO = `close${zv}`, LO = `closed${zv}`, FO = "fade", BO = "show";
class La extends hn {
  // Getters
  static get NAME() {
    return MO;
  }
  // Public
  close() {
    if (Q.trigger(this._element, VO).defaultPrevented)
      return;
    this._element.classList.remove(BO);
    const n = this._element.classList.contains(FO);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), Q.trigger(this._element, LO), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = La.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Va(La, "close");
Zt(La);
const $O = "button", jO = "bs.button", UO = `.${jO}`, HO = ".data-api", WO = "active", yp = '[data-bs-toggle="button"]', KO = `click${UO}${HO}`;
class Fa extends hn {
  // Getters
  static get NAME() {
    return $O;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(WO));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Fa.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
Q.on(document, KO, yp, (e) => {
  e.preventDefault();
  const t = e.target.closest(yp);
  Fa.getOrCreateInstance(t).toggle();
});
Zt(Fa);
const zO = "swipe", Xo = ".bs.swipe", qO = `touchstart${Xo}`, YO = `touchmove${Xo}`, XO = `touchend${Xo}`, GO = `pointerdown${Xo}`, QO = `pointerup${Xo}`, JO = "touch", ZO = "pen", eT = "pointer-event", tT = 40, nT = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, sT = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class aa extends ei {
  constructor(t, n) {
    super(), this._element = t, !(!t || !aa.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return nT;
  }
  static get DefaultType() {
    return sT;
  }
  static get NAME() {
    return zO;
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
    if (t <= tT)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && Rt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (Q.on(this._element, GO, (t) => this._start(t)), Q.on(this._element, QO, (t) => this._end(t)), this._element.classList.add(eT)) : (Q.on(this._element, qO, (t) => this._start(t)), Q.on(this._element, YO, (t) => this._move(t)), Q.on(this._element, XO, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === ZO || t.pointerType === JO);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const oT = "carousel", rT = "bs.carousel", bs = `.${rT}`, qv = ".data-api", iT = "ArrowLeft", aT = "ArrowRight", lT = 500, rr = "next", uo = "prev", go = "left", Bi = "right", cT = `slide${bs}`, pl = `slid${bs}`, uT = `keydown${bs}`, dT = `mouseenter${bs}`, fT = `mouseleave${bs}`, pT = `dragstart${bs}`, hT = `load${bs}${qv}`, mT = `click${bs}${qv}`, Yv = "carousel", fi = "active", gT = "slide", vT = "carousel-item-end", _T = "carousel-item-start", yT = "carousel-item-next", bT = "carousel-item-prev", Xv = ".active", Gv = ".carousel-item", ET = Xv + Gv, wT = ".carousel-item img", AT = ".carousel-indicators", ST = "[data-bs-slide], [data-bs-slide-to]", CT = '[data-bs-ride="carousel"]', OT = {
  [iT]: Bi,
  [aT]: go
}, TT = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, NT = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class ti extends hn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Ee.findOne(AT, this._element), this._addEventListeners(), this._config.ride === Yv && this.cycle();
  }
  // Getters
  static get Default() {
    return TT;
  }
  static get DefaultType() {
    return NT;
  }
  static get NAME() {
    return oT;
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
    this._isSliding && Vv(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        Q.one(this._element, pl, () => this.cycle());
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
      Q.one(this._element, pl, () => this.to(t));
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
    this._config.keyboard && Q.on(this._element, uT, (t) => this._keydown(t)), this._config.pause === "hover" && (Q.on(this._element, dT, () => this.pause()), Q.on(this._element, fT, () => this._maybeEnableCycle())), this._config.touch && aa.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of Ee.find(wT, this._element))
      Q.on(s, pT, (o) => o.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(go)),
      rightCallback: () => this._slide(this._directionToOrder(Bi)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), lT + this._config.interval));
      }
    };
    this._swipeHelper = new aa(this._element, n);
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
    const n = Ee.findOne(Xv, this._indicatorsElement);
    n.classList.remove(fi), n.removeAttribute("aria-current");
    const s = Ee.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(fi), s.setAttribute("aria-current", "true"));
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
    const s = this._getActive(), o = t === rr, r = n || vu(this._getItems(), s, o, this._config.wrap);
    if (r === s)
      return;
    const i = this._getItemIndex(r), a = (h) => Q.trigger(this._element, h, {
      relatedTarget: r,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(s),
      to: i
    });
    if (a(cT).defaultPrevented || !s || !r)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = r;
    const u = o ? _T : vT, d = o ? yT : bT;
    r.classList.add(d), Zr(r), s.classList.add(u), r.classList.add(u);
    const p = () => {
      r.classList.remove(u, d), r.classList.add(fi), s.classList.remove(fi, d, u), this._isSliding = !1, a(pl);
    };
    this._queueCallback(p, s, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(gT);
  }
  _getActive() {
    return Ee.findOne(ET, this._element);
  }
  _getItems() {
    return Ee.find(Gv, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Gt() ? t === go ? uo : rr : t === go ? rr : uo;
  }
  _orderToDirection(t) {
    return Gt() ? t === uo ? go : Bi : t === uo ? Bi : go;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ti.getOrCreateInstance(this, t);
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
Q.on(document, mT, ST, function(e) {
  const t = Ee.getElementFromSelector(this);
  if (!t || !t.classList.contains(Yv))
    return;
  e.preventDefault();
  const n = ti.getOrCreateInstance(t), s = this.getAttribute("data-bs-slide-to");
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
Q.on(window, hT, () => {
  const e = Ee.find(CT);
  for (const t of e)
    ti.getOrCreateInstance(t);
});
Zt(ti);
const DT = "collapse", kT = "bs.collapse", ni = `.${kT}`, xT = ".data-api", RT = `show${ni}`, IT = `shown${ni}`, MT = `hide${ni}`, PT = `hidden${ni}`, VT = `click${ni}${xT}`, hl = "show", bo = "collapse", pi = "collapsing", LT = "collapsed", FT = `:scope .${bo} .${bo}`, BT = "collapse-horizontal", $T = "width", jT = "height", UT = ".collapse.show, .collapse.collapsing", _c = '[data-bs-toggle="collapse"]', HT = {
  parent: null,
  toggle: !0
}, WT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Br extends hn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const s = Ee.find(_c);
    for (const o of s) {
      const r = Ee.getSelectorFromElement(o), i = Ee.find(r).filter((a) => a === this._element);
      r !== null && i.length && this._triggerArray.push(o);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return HT;
  }
  static get DefaultType() {
    return WT;
  }
  static get NAME() {
    return DT;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(UT).filter((a) => a !== this._element).map((a) => Br.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || Q.trigger(this._element, RT).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(bo), this._element.classList.add(pi), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(pi), this._element.classList.add(bo, hl), this._element.style[s] = "", Q.trigger(this._element, IT);
    }, i = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[s] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || Q.trigger(this._element, MT).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Zr(this._element), this._element.classList.add(pi), this._element.classList.remove(bo, hl);
    for (const o of this._triggerArray) {
      const r = Ee.getElementFromSelector(o);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(pi), this._element.classList.add(bo), Q.trigger(this._element, PT);
    };
    this._element.style[n] = "", this._queueCallback(s, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(hl);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = ms(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(BT) ? $T : jT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(_c);
    for (const n of t) {
      const s = Ee.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = Ee.find(FT, this._config.parent);
    return Ee.find(t, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(LT, !n), s.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const s = Br.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
}
Q.on(document, VT, _c, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of Ee.getMultipleElementsFromSelector(this))
    Br.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Zt(Br);
const bp = "dropdown", KT = "bs.dropdown", no = `.${KT}`, yu = ".data-api", zT = "Escape", Ep = "Tab", qT = "ArrowUp", wp = "ArrowDown", YT = 2, XT = `hide${no}`, GT = `hidden${no}`, QT = `show${no}`, JT = `shown${no}`, Qv = `click${no}${yu}`, Jv = `keydown${no}${yu}`, ZT = `keyup${no}${yu}`, vo = "show", eN = "dropup", tN = "dropend", nN = "dropstart", sN = "dropup-center", oN = "dropdown-center", Is = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', rN = `${Is}.${vo}`, $i = ".dropdown-menu", iN = ".navbar", aN = ".navbar-nav", lN = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", cN = Gt() ? "top-end" : "top-start", uN = Gt() ? "top-start" : "top-end", dN = Gt() ? "bottom-end" : "bottom-start", fN = Gt() ? "bottom-start" : "bottom-end", pN = Gt() ? "left-start" : "right-start", hN = Gt() ? "right-start" : "left-start", mN = "top", gN = "bottom", vN = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, _N = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Nn extends hn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = Ee.next(this._element, $i)[0] || Ee.prev(this._element, $i)[0] || Ee.findOne($i, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return vN;
  }
  static get DefaultType() {
    return _N;
  }
  static get NAME() {
    return bp;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (gs(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!Q.trigger(this._element, QT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(aN))
        for (const s of [].concat(...document.body.children))
          Q.on(s, "mouseover", ia);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(vo), this._element.classList.add(vo), Q.trigger(this._element, JT, t);
    }
  }
  hide() {
    if (gs(this._element) || !this._isShown())
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
    if (!Q.trigger(this._element, XT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          Q.off(s, "mouseover", ia);
      this._popper && this._popper.destroy(), this._menu.classList.remove(vo), this._element.classList.remove(vo), this._element.setAttribute("aria-expanded", "false"), Wn.removeDataAttribute(this._menu, "popper"), Q.trigger(this._element, GT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !Hn(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${bp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Mv > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : Hn(this._config.reference) ? t = ms(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = gu(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(vo);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(tN))
      return pN;
    if (t.classList.contains(nN))
      return hN;
    if (t.classList.contains(sN))
      return mN;
    if (t.classList.contains(oN))
      return gN;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(eN) ? n ? uN : cN : n ? fN : dN;
  }
  _detectNavbar() {
    return this._element.closest(iN) !== null;
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
      ...Rt(this._config.popperConfig, [void 0, t])
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const s = Ee.find(lN, this._menu).filter((o) => Yo(o));
    s.length && vu(s, n, t === wp, !s.includes(n)).focus();
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
    if (t.button === YT || t.type === "keyup" && t.key !== Ep)
      return;
    const n = Ee.find(rN);
    for (const s of n) {
      const o = Nn.getInstance(s);
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
    const n = /input|textarea/i.test(t.target.tagName), s = t.key === zT, o = [qT, wp].includes(t.key);
    if (!o && !s || n && !s)
      return;
    t.preventDefault();
    const r = this.matches(Is) ? this : Ee.prev(this, Is)[0] || Ee.next(this, Is)[0] || Ee.findOne(Is, t.delegateTarget.parentNode), i = Nn.getOrCreateInstance(r);
    if (o) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), r.focus());
  }
}
Q.on(document, Jv, Is, Nn.dataApiKeydownHandler);
Q.on(document, Jv, $i, Nn.dataApiKeydownHandler);
Q.on(document, Qv, Nn.clearMenus);
Q.on(document, ZT, Nn.clearMenus);
Q.on(document, Qv, Is, function(e) {
  e.preventDefault(), Nn.getOrCreateInstance(this).toggle();
});
Zt(Nn);
const Zv = "backdrop", yN = "fade", Ap = "show", Sp = `mousedown.bs.${Zv}`, bN = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, EN = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class e_ extends ei {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return bN;
  }
  static get DefaultType() {
    return EN;
  }
  static get NAME() {
    return Zv;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      Rt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Zr(n), n.classList.add(Ap), this._emulateAnimation(() => {
      Rt(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      Rt(t);
      return;
    }
    this._getElement().classList.remove(Ap), this._emulateAnimation(() => {
      this.dispose(), Rt(t);
    });
  }
  dispose() {
    this._isAppended && (Q.off(this._element, Sp), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(yN), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = ms(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), Q.on(t, Sp, () => {
      Rt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Bv(t, this._getElement(), this._config.isAnimated);
  }
}
const wN = "focustrap", AN = "bs.focustrap", la = `.${AN}`, SN = `focusin${la}`, CN = `keydown.tab${la}`, ON = "Tab", TN = "forward", Cp = "backward", NN = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, DN = {
  autofocus: "boolean",
  trapElement: "element"
};
class t_ extends ei {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return NN;
  }
  static get DefaultType() {
    return DN;
  }
  static get NAME() {
    return wN;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), Q.off(document, la), Q.on(document, SN, (t) => this._handleFocusin(t)), Q.on(document, CN, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, Q.off(document, la));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const s = Ee.focusableChildren(n);
    s.length === 0 ? n.focus() : this._lastTabNavDirection === Cp ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === ON && (this._lastTabNavDirection = t.shiftKey ? Cp : TN);
  }
}
const Op = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Tp = ".sticky-top", hi = "padding-right", Np = "margin-right";
class yc {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, hi, (n) => n + t), this._setElementAttributes(Op, hi, (n) => n + t), this._setElementAttributes(Tp, Np, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hi), this._resetElementAttributes(Op, hi), this._resetElementAttributes(Tp, Np);
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
    if (Hn(t)) {
      n(t);
      return;
    }
    for (const s of Ee.find(t, this._element))
      n(s);
  }
}
const kN = "modal", xN = "bs.modal", Qt = `.${xN}`, RN = ".data-api", IN = "Escape", MN = `hide${Qt}`, PN = `hidePrevented${Qt}`, n_ = `hidden${Qt}`, s_ = `show${Qt}`, VN = `shown${Qt}`, LN = `resize${Qt}`, FN = `click.dismiss${Qt}`, BN = `mousedown.dismiss${Qt}`, $N = `keydown.dismiss${Qt}`, jN = `click${Qt}${RN}`, Dp = "modal-open", UN = "fade", kp = "show", ml = "modal-static", HN = ".modal.show", WN = ".modal-dialog", KN = ".modal-body", zN = '[data-bs-toggle="modal"]', qN = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, YN = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class eo extends hn {
  constructor(t, n) {
    super(t, n), this._dialog = Ee.findOne(WN, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new yc(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return qN;
  }
  static get DefaultType() {
    return YN;
  }
  static get NAME() {
    return kN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || Q.trigger(this._element, s_, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Dp), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || Q.trigger(this._element, MN).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(kp), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    Q.off(window, Qt), Q.off(this._dialog, Qt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new e_({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new t_({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = Ee.findOne(KN, this._dialog);
    n && (n.scrollTop = 0), Zr(this._element), this._element.classList.add(kp);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, Q.trigger(this._element, VN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    Q.on(this._element, $N, (t) => {
      if (t.key === IN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), Q.on(window, LN, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), Q.on(this._element, BN, (t) => {
      Q.one(this._element, FN, (n) => {
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
      document.body.classList.remove(Dp), this._resetAdjustments(), this._scrollBar.reset(), Q.trigger(this._element, n_);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(UN);
  }
  _triggerBackdropTransition() {
    if (Q.trigger(this._element, PN).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, s = this._element.style.overflowY;
    s === "hidden" || this._element.classList.contains(ml) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(ml), this._queueCallback(() => {
      this._element.classList.remove(ml), this._queueCallback(() => {
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
      const s = eo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
Q.on(document, jN, zN, function(e) {
  const t = Ee.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), Q.one(t, s_, (o) => {
    o.defaultPrevented || Q.one(t, n_, () => {
      Yo(this) && this.focus();
    });
  });
  const n = Ee.findOne(HN);
  n && eo.getInstance(n).hide(), eo.getOrCreateInstance(t).toggle(this);
});
Va(eo);
Zt(eo);
const XN = "offcanvas", GN = "bs.offcanvas", Qn = `.${GN}`, o_ = ".data-api", QN = `load${Qn}${o_}`, JN = "Escape", xp = "show", Rp = "showing", Ip = "hiding", ZN = "offcanvas-backdrop", r_ = ".offcanvas.show", eD = `show${Qn}`, tD = `shown${Qn}`, nD = `hide${Qn}`, Mp = `hidePrevented${Qn}`, i_ = `hidden${Qn}`, sD = `resize${Qn}`, oD = `click${Qn}${o_}`, rD = `keydown.dismiss${Qn}`, iD = '[data-bs-toggle="offcanvas"]', aD = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, lD = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class vs extends hn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return aD;
  }
  static get DefaultType() {
    return lD;
  }
  static get NAME() {
    return XN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || Q.trigger(this._element, eD, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new yc().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Rp);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(xp), this._element.classList.remove(Rp), Q.trigger(this._element, tD, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || Q.trigger(this._element, nD).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Ip), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(xp, Ip), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new yc().reset(), Q.trigger(this._element, i_);
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
    return new e_({
      className: ZN,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new t_({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    Q.on(this._element, rD, (t) => {
      if (t.key === JN) {
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
      const n = vs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Q.on(document, oD, iD, function(e) {
  const t = Ee.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), gs(this))
    return;
  Q.one(t, i_, () => {
    Yo(this) && this.focus();
  });
  const n = Ee.findOne(r_);
  n && n !== t && vs.getInstance(n).hide(), vs.getOrCreateInstance(t).toggle(this);
});
Q.on(window, QN, () => {
  for (const e of Ee.find(r_))
    vs.getOrCreateInstance(e).show();
});
Q.on(window, sD, () => {
  for (const e of Ee.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && vs.getOrCreateInstance(e).hide();
});
Va(vs);
Zt(vs);
const cD = /^aria-[\w-]*$/i, a_ = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", cD],
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
}, uD = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), dD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, fD = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? uD.has(n) ? !!dD.test(e.nodeValue) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
};
function pD(e, t, n) {
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
      fD(u, f) || i.removeAttribute(u.nodeName);
  }
  return o.body.innerHTML;
}
const hD = "TemplateFactory", mD = {
  allowList: a_,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, gD = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, vD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class _D extends ei {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return mD;
  }
  static get DefaultType() {
    return gD;
  }
  static get NAME() {
    return hD;
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
      }, vD);
  }
  _setContent(t, n, s) {
    const o = Ee.findOne(s, t);
    if (o) {
      if (n = this._resolvePossibleFunction(n), !n) {
        o.remove();
        return;
      }
      if (Hn(n)) {
        this._putElementInTemplate(ms(n), o);
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
    return this._config.sanitize ? pD(t, this._config.allowList, this._config.sanitizeFn) : t;
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
const yD = "tooltip", bD = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), gl = "fade", ED = "modal", mi = "show", wD = ".tooltip-inner", Pp = `.${ED}`, Vp = "hide.bs.modal", ir = "hover", vl = "focus", _l = "click", AD = "manual", SD = "hide", CD = "hidden", OD = "show", TD = "shown", ND = "inserted", DD = "click", kD = "focusin", xD = "focusout", RD = "mouseenter", ID = "mouseleave", MD = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Gt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Gt() ? "right" : "left"
}, PD = {
  allowList: a_,
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
class so extends hn {
  constructor(t, n) {
    if (typeof Mv > "u")
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
    return yD;
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
    clearTimeout(this._timeout), Q.off(this._element.closest(Pp), Vp, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = Q.trigger(this._element, this.constructor.eventName(OD)), s = (Lv(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const o = this._getTipElement();
    this._element.setAttribute("aria-describedby", o.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(o), Q.trigger(this._element, this.constructor.eventName(ND))), this._popper = this._createPopper(o), o.classList.add(mi), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        Q.on(a, "mouseover", ia);
    const i = () => {
      Q.trigger(this._element, this.constructor.eventName(TD)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || Q.trigger(this._element, this.constructor.eventName(SD)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(mi), "ontouchstart" in document.documentElement)
      for (const o of [].concat(...document.body.children))
        Q.off(o, "mouseover", ia);
    this._activeTrigger[_l] = !1, this._activeTrigger[vl] = !1, this._activeTrigger[ir] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), Q.trigger(this._element, this.constructor.eventName(CD)));
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
    n.classList.remove(gl, mi), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = AO(this.constructor.NAME).toString();
    return n.setAttribute("id", s), this._isAnimated() && n.classList.add(gl), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new _D({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [wD]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(gl);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(mi);
  }
  _createPopper(t) {
    const n = Rt(this._config.placement, [this, t, this._element]), s = MD[n.toUpperCase()];
    return gu(this._element, t, this._getPopperConfig(s));
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
        Q.on(this._element, this.constructor.eventName(DD), this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          o._activeTrigger[_l] = !(o._isShown() && o._activeTrigger[_l]), o.toggle();
        });
      else if (n !== AD) {
        const s = n === ir ? this.constructor.eventName(RD) : this.constructor.eventName(kD), o = n === ir ? this.constructor.eventName(ID) : this.constructor.eventName(xD);
        Q.on(this._element, s, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusin" ? vl : ir] = !0, i._enter();
        }), Q.on(this._element, o, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusout" ? vl : ir] = i._element.contains(r.relatedTarget), i._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, Q.on(this._element.closest(Pp), Vp, this._hideModalHandler);
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
      bD.has(s) && delete n[s];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : ms(t.container), typeof t.delay == "number" && (t.delay = {
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
Zt(so);
const LD = "popover", FD = ".popover-header", BD = ".popover-body", $D = {
  ...so.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, jD = {
  ...so.DefaultType,
  content: "(null|string|element|function)"
};
class bu extends so {
  // Getters
  static get Default() {
    return $D;
  }
  static get DefaultType() {
    return jD;
  }
  static get NAME() {
    return LD;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [FD]: this._getTitle(),
      [BD]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = bu.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Zt(bu);
const UD = "scrollspy", HD = "bs.scrollspy", Eu = `.${HD}`, WD = ".data-api", KD = `activate${Eu}`, Lp = `click${Eu}`, zD = `load${Eu}${WD}`, qD = "dropdown-item", fo = "active", YD = '[data-bs-spy="scroll"]', yl = "[href]", XD = ".nav, .list-group", Fp = ".nav-link", GD = ".nav-item", QD = ".list-group-item", JD = `${Fp}, ${GD} > ${Fp}, ${QD}`, ZD = ".dropdown", ek = ".dropdown-toggle", tk = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, nk = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Ba extends hn {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return tk;
  }
  static get DefaultType() {
    return nk;
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
    return t.target = ms(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (Q.off(this._config.target, Lp), Q.on(this._config.target, Lp, yl, (t) => {
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
    const t = Ee.find(yl, this._config.target);
    for (const n of t) {
      if (!n.hash || gs(n))
        continue;
      const s = Ee.findOne(decodeURI(n.hash), this._element);
      Yo(s) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(fo), this._activateParents(t), Q.trigger(this._element, KD, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(qD)) {
      Ee.findOne(ek, t.closest(ZD)).classList.add(fo);
      return;
    }
    for (const n of Ee.parents(t, XD))
      for (const s of Ee.prev(n, JD))
        s.classList.add(fo);
  }
  _clearActiveClass(t) {
    t.classList.remove(fo);
    const n = Ee.find(`${yl}.${fo}`, t);
    for (const s of n)
      s.classList.remove(fo);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ba.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Q.on(window, zD, () => {
  for (const e of Ee.find(YD))
    Ba.getOrCreateInstance(e);
});
Zt(Ba);
const sk = "tab", ok = "bs.tab", oo = `.${ok}`, rk = `hide${oo}`, ik = `hidden${oo}`, ak = `show${oo}`, lk = `shown${oo}`, ck = `click${oo}`, uk = `keydown${oo}`, dk = `load${oo}`, fk = "ArrowLeft", Bp = "ArrowRight", pk = "ArrowUp", $p = "ArrowDown", bl = "Home", jp = "End", Ms = "active", Up = "fade", El = "show", hk = "dropdown", l_ = ".dropdown-toggle", mk = ".dropdown-menu", wl = `:not(${l_})`, gk = '.list-group, .nav, [role="tablist"]', vk = ".nav-item, .list-group-item", _k = `.nav-link${wl}, .list-group-item${wl}, [role="tab"]${wl}`, c_ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Al = `${_k}, ${c_}`, yk = `.${Ms}[data-bs-toggle="tab"], .${Ms}[data-bs-toggle="pill"], .${Ms}[data-bs-toggle="list"]`;
class Fo extends hn {
  constructor(t) {
    super(t), this._parent = this._element.closest(gk), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), Q.on(this._element, uk, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return sk;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), s = n ? Q.trigger(n, rk, {
      relatedTarget: t
    }) : null;
    Q.trigger(t, ak, {
      relatedTarget: n
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(Ms), this._activate(Ee.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(El);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), Q.trigger(t, lk, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Up));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(Ms), t.blur(), this._deactivate(Ee.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(El);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), Q.trigger(t, ik, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Up));
  }
  _keydown(t) {
    if (![fk, Bp, pk, $p, bl, jp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((o) => !gs(o));
    let s;
    if ([bl, jp].includes(t.key))
      s = n[t.key === bl ? 0 : n.length - 1];
    else {
      const o = [Bp, $p].includes(t.key);
      s = vu(n, t.target, o, !0);
    }
    s && (s.focus({
      preventScroll: !0
    }), Fo.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return Ee.find(Al, this._parent);
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
    if (!s.classList.contains(hk))
      return;
    const o = (r, i) => {
      const a = Ee.findOne(r, s);
      a && a.classList.toggle(i, n);
    };
    o(l_, Ms), o(mk, El), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(Ms);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(Al) ? t : Ee.findOne(Al, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(vk) || t;
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
Q.on(document, ck, c_, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !gs(this) && Fo.getOrCreateInstance(this).show();
});
Q.on(window, dk, () => {
  for (const e of Ee.find(yk))
    Fo.getOrCreateInstance(e);
});
Zt(Fo);
const bk = "toast", Ek = "bs.toast", Es = `.${Ek}`, wk = `mouseover${Es}`, Ak = `mouseout${Es}`, Sk = `focusin${Es}`, Ck = `focusout${Es}`, Ok = `hide${Es}`, Tk = `hidden${Es}`, Nk = `show${Es}`, Dk = `shown${Es}`, kk = "fade", Hp = "hide", gi = "show", vi = "showing", xk = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Rk = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class si extends hn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Rk;
  }
  static get DefaultType() {
    return xk;
  }
  static get NAME() {
    return bk;
  }
  // Public
  show() {
    if (Q.trigger(this._element, Nk).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(kk);
    const n = () => {
      this._element.classList.remove(vi), Q.trigger(this._element, Dk), this._maybeScheduleHide();
    };
    this._element.classList.remove(Hp), Zr(this._element), this._element.classList.add(gi, vi), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || Q.trigger(this._element, Ok).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Hp), this._element.classList.remove(vi, gi), Q.trigger(this._element, Tk);
    };
    this._element.classList.add(vi), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(gi), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(gi);
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
    Q.on(this._element, wk, (t) => this._onInteraction(t, !0)), Q.on(this._element, Ak, (t) => this._onInteraction(t, !1)), Q.on(this._element, Sk, (t) => this._onInteraction(t, !0)), Q.on(this._element, Ck, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = si.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Va(si);
Zt(si);
var Ik = Object.defineProperty, Mk = (e, t, n) => t in e ? Ik(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, on = (e, t, n) => Mk(e, typeof t != "symbol" ? t + "" : t, n);
const Pk = { class: "toast-header" }, Vk = ["textContent"], Lk = ["textContent"], Fk = { class: "toast-body" }, Bk = ["textContent"], $k = /* @__PURE__ */ Se({
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
    const s = e, o = n, { visible: r, animation: i, autohide: a, delay: c } = dn(s), f = j(), u = j();
    Ct(r, (R) => {
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
    function g() {
      o("hidden", f.value);
    }
    function O() {
      o("show", f.value);
    }
    async function N() {
      o("shown", f.value);
    }
    const T = { show: d, hide: p, dispose: h, isShown: m, getOrCreateInstance: v, getInstance: _ };
    return t({ ...T }), Nt(() => {
      u.value.addEventListener("hide.bs.toast", b), u.value.addEventListener("hidden.bs.toast", g), u.value.addEventListener("show.bs.toast", O), u.value.addEventListener("shown.bs.toast", N), f.value = new si(u.value, {
        animation: i.value,
        autohide: a.value,
        delay: c.value
      }), y();
    }), (R, I) => (C(), x("div", {
      ref_key: "toastRef",
      ref: u,
      class: le(["toast", [R.variant ? `text-bg-${R.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      De(R.$slots, "header", it(ot({ ...T })), () => [
        l("div", Pk, [
          De(R.$slots, "title", it(ot({ ...T })), () => [
            l("strong", {
              class: "me-auto",
              textContent: P(R.title)
            }, null, 8, Vk)
          ], !0),
          De(R.$slots, "subtitle", it(ot({ ...T })), () => [
            l("small", {
              textContent: P(R.subtitle)
            }, null, 8, Lk)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ], !0),
      De(R.$slots, "body", it(ot({ ...T })), () => [
        l("div", Fk, [
          De(R.$slots, "default", it(ot({ ...T })), () => [
            l("span", {
              textContent: P(R.body)
            }, null, 8, Bk)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), Mn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, u_ = /* @__PURE__ */ Mn($k, [["__scopeId", "data-v-c0cdbae8"]]);
function jk() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Uk = { id: "toast-wrapper" };
let Wp;
const Hk = /* @__PURE__ */ Se({
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
    }, s = j(/* @__PURE__ */ new Map());
    Wp = (r, i = "top right") => {
      const a = jk(), c = { ...n, ...r, id: a };
      let f = s.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), s.value.set(i, f);
    };
    function o(r, i) {
      const a = s.value.get(r);
      a?.delete(i);
    }
    return t({ toast: Wp }), (r, i) => (C(), et(Kr, { to: "body" }, [
      l("div", Uk, [
        (C(!0), x(Ce, null, Je(s.value, ([a, c]) => (C(), x("div", {
          key: a,
          class: le(["toast-group", `${a}`])
        }, [
          (C(!0), x(Ce, null, Je(c, (f, u) => (C(), et(u_, _s({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (d) => o(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Wk = /* @__PURE__ */ Mn(Hk, [["__scopeId", "data-v-786d1c50"]]), d_ = () => {
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
const Bo = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(Rn).includes(n) || n == "" ? "" : `${t}${n}`;
}, Kk = { class: "modal-content" }, zk = { class: "modal-header" }, qk = ["innerHTML"], Yk = { class: "modal-body" }, Xk = ["innerHTML"], Gk = { class: "modal-footer" }, Qk = ["innerHTML"], Jk = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const Zk = /* @__PURE__ */ Se({
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
    } = dn(s), u = n, d = $(() => Bo(c.value, "modal-")), p = $(() => Bo(f.value, "btn-")), h = j();
    let m;
    const v = Xn(), _ = () => document.querySelectorAll(".modal.show").length, y = () => typeof window < "u" && window._managedModals ? window._managedModals : [], b = 1055, g = j(b), O = () => {
      const re = _();
      g.value = b + re;
    };
    let N;
    const T = d_();
    function R() {
      return new Promise((re, z) => {
        if (!h.value) return;
        T.removeStickyElements(), O(), h.value.classList.add("managed-modal");
        const ce = y(), be = ce.length + 1, Ze = {
          element: h.value,
          priority: be,
          instance: v
        };
        ce.push(Ze), h.value.addEventListener("shown.bs.modal", () => {
          w();
        }, { once: !0 }), m?.show(), N = re, u("onShown", m);
      });
    }
    function I(re = !0) {
      if (!h.value) return;
      const z = y(), ce = z.findIndex((be) => be.element === h.value);
      ce > -1 && z.splice(ce, 1), h.value.addEventListener("hidden.bs.modal", () => {
        h.value && (h.value.style.display = ""), w();
      }, { once: !0 }), m?.hide(), typeof N == "function" && N(re), u("onHidden", m), T.restoreStickyElements();
    }
    function D() {
      m?.toggle();
    }
    const w = () => {
      const re = y();
      if (re.length === 0) return;
      re.sort((ce, be) => ce.priority - be.priority);
      const z = re[re.length - 1];
      re.forEach((ce) => {
        ce.element !== z.element ? ce.element.style.opacity = "0" : ce.element.style.opacity = "1";
      });
    };
    Nt(() => {
      m = new eo(h.value, {
        backdrop: o?.value,
        keyboard: r.value,
        focus: i.value
      }), h.value.classList.add("managed-modal"), ga(() => {
        s?.visible === !0 ? m?.show() : m?.hide();
      });
    });
    function k(re) {
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
      show: R,
      hide: I,
      toggle: D,
      onHeaderCloseClicked: A,
      onCancelClicked: F,
      onOkCLicked: de
    });
    const X = { show: R, hide: I, toggle: D, modal: m };
    return (re, z) => (C(), x("div", _s({
      ref_key: "modalElement",
      ref: h,
      class: "modal fade",
      tabindex: "-1"
    }, { ...re.$attrs }, {
      onClick: Om(k, ["self"]),
      style: { zIndex: g.value }
    }), [
      l("div", {
        class: le(["modal-dialog", d.value])
      }, [
        l("div", Kk, [
          De(re.$slots, "header", it(ot({ ...X })), () => [
            l("div", zk, [
              De(re.$slots, "title", it(ot({ ...X })), () => [
                l("h5", {
                  class: "modal-title",
                  innerHTML: re.title
                }, null, 8, qk)
              ], !0),
              De(re.$slots, "header-close-button", it(ot({ ...X })), () => [
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: A
                })
              ], !0)
            ])
          ], !0),
          l("div", Yk, [
            De(re.$slots, "default", it(ot({ ...X })), () => [
              l("span", { innerHTML: re.body }, null, 8, Xk)
            ], !0)
          ]),
          l("div", Gk, [
            De(re.$slots, "footer", it(ot({ ...X })), () => [
              re.okOnly ? me("", !0) : (C(), x("button", {
                key: 0,
                type: "button",
                class: le(["btn btn-secondary", p.value]),
                onClick: F
              }, [
                De(re.$slots, "button-cancel", it(ot({ ...X })), () => [
                  l("span", { innerHTML: re.textCancel }, null, 8, Qk)
                ], !0)
              ], 2)),
              l("button", {
                type: "button",
                class: le(["btn btn-primary", p.value]),
                onClick: de
              }, [
                De(re.$slots, "button-ok", it(ot({ ...X })), () => [
                  l("span", { innerHTML: re.textOk }, null, 8, Jk)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), f_ = /* @__PURE__ */ Mn(Zk, [["__scopeId", "data-v-b8ba4eaa"]]), ex = /* @__PURE__ */ Se({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = j(void 0), s = j({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (C(), et(Kr, { to: "body" }, [
      ue(f_, _s({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), tx = {
  "data-header": "",
  class: "border-bottom"
}, nx = { class: "d-flex gap-2 p-2" }, sx = { class: "p-2" }, ox = {
  "data-footer": "",
  class: "border-top p-2"
}, rx = { class: "buttons" }, ix = /* @__PURE__ */ Se({
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
    const n = e, { backdrop: s, disableOutsideClick: o, modal: r, size: i, btnSize: a } = dn(n), c = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = j(f), d = j(!1), p = j(!1), h = j(!1), m = j(), v = j(!1), _ = $(() => Bo(i.value, "modal-")), y = $(() => Bo(a.value, "btn-")), b = $(() => ({
      opening: d.value,
      closing: p.value,
      "no-backdrop": s.value === !1,
      static: v.value
    }));
    let g = null;
    const O = () => {
      const A = c();
      u.value = f + A;
    }, N = d_(), T = async () => (O(), N.removeStickyElements(), d.value = !0, m.value.addEventListener(
      "animationend",
      () => {
        d.value = !1, h.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? m.value.showModal() : m.value.show(), new Promise((A, F) => {
      g = A;
    })), R = async (A = !1) => {
      p.value = !0, m.value.addEventListener(
        "animationend",
        () => {
          m.value.close(), p.value = !1, h.value = !1, typeof g == "function" && g(A), g = null, N.restoreStickyElements();
        },
        { once: !0 }
      );
    }, I = async () => {
      h.value === !0 ? R() : T();
    }, D = () => {
      v.value = !0, setTimeout(() => {
        v.value = !1;
      }, 200);
    }, w = () => {
      if (s.value === "static" || o.value === !0) {
        D();
        return;
      }
      R(!1);
    };
    if (r.value === !0) {
      let A = function(de) {
        if (s.value === "static" || o.value === !0) {
          D();
          return;
        }
        de.target === m.value && R(!1);
      };
      const F = new AbortController();
      Nt(() => {
        document.addEventListener("click", (de) => {
          A(de);
        }, { signal: F.signal });
      }), Uo(() => {
        F.abort();
      });
    }
    const k = { show: T, hide: R, toggle: I, dialog: m };
    return t({
      show: T,
      hide: R,
      toggle: I
    }), (A, F) => (C(), x("div", {
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
        class: le(b.value)
      }, [
        l("div", {
          class: le(["content", _.value])
        }, [
          De(A.$slots, "header", it(ot({ ...k })), () => [
            l("div", tx, [
              l("div", nx, [
                De(A.$slots, "title", it(ot({ ...k })), () => [
                  H(P(A.title), 1)
                ], !0),
                De(A.$slots, "header-close-button", {}, () => [
                  l("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: F[0] || (F[0] = (de) => R(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          l("div", sx, [
            De(A.$slots, "default", it(ot({ ...k })), () => [
              H(P(A.body), 1)
            ], !0)
          ]),
          De(A.$slots, "footer", it(ot({ ...k })), () => [
            l("div", ox, [
              l("div", rx, [
                A.okOnly ? me("", !0) : (C(), x("button", {
                  key: 0,
                  type: "button",
                  class: le(["btn btn-secondary", y.value]),
                  onClick: F[1] || (F[1] = (de) => R(!1))
                }, [
                  De(A.$slots, "textCancel", it(ot({ ...k })), () => [
                    H(P(A.textCancel), 1)
                  ], !0)
                ], 2)),
                l("button", {
                  type: "button",
                  class: le(["btn btn-primary", y.value]),
                  onClick: F[2] || (F[2] = (de) => R(!0))
                }, [
                  De(A.$slots, "textOk", it(ot({ ...k })), () => [
                    H(P(A.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), p_ = /* @__PURE__ */ Mn(ix, [["__scopeId", "data-v-0990c791"]]), ax = /* @__PURE__ */ Se({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = j(void 0), s = j({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (C(), et(Kr, { to: "body" }, [
      ue(p_, _s({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), lx = { "data-first": "" }, cx = ["disabled", "innerHTML"], ux = { "data-prev": "" }, dx = ["disabled", "innerHTML"], fx = { key: 0 }, px = ["innerHTML"], hx = ["onClick"], mx = { "data-next": "" }, gx = ["disabled", "innerHTML"], vx = { "data-last": "" }, _x = ["disabled", "innerHTML"], yx = /* @__PURE__ */ Se({
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
    function n(g, O = 0) {
      return [...Array(g).keys()].map((N) => N + O);
    }
    const s = t, o = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: a } = dn(o), c = Math.floor(i.value / 2), f = $(() => {
      let g = i.value, O = r.value <= c ? 1 : r.value - c;
      return r.value >= p.value - c && (O = p.value - g + 1), O < 1 && (O = 1), p.value < g && (g = p.value), n(g, O);
    }), u = $(() => r.value <= 1), d = $(() => r.value >= p.value), p = $(() => {
      const { perPage: g, totalItems: O } = o;
      return Math.ceil(O / g);
    });
    ga(() => {
      p.value > 0 && r.value > p.value && s("update:modelValue", p.value);
    });
    function h(g) {
      const O = i.value - 1;
      return !(a.value === !0 || g === 0 && r.value - c - 1 <= 0 || g === O && r.value + c >= p.value || g > 0 && g < O);
    }
    function m(g) {
      g < 1 && (g = 1), g > p.value && (g = p.value), s("update:modelValue", g);
    }
    function v() {
      s("update:modelValue", 1);
    }
    function _() {
      s("update:modelValue", p.value);
    }
    function y() {
      let g = r.value - 1;
      g < 1 && (g = 1), s("update:modelValue", g);
    }
    function b() {
      let g = r.value + 1;
      g > p.value && (g = p.value), s("update:modelValue", g);
    }
    return (g, O) => (C(), x("ul", {
      class: le(["pagination", g.size])
    }, [
      l("li", lx, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: g.firstText,
          onClick: v
        }, null, 8, cx)
      ]),
      l("li", ux, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: g.prevText,
          onClick: y
        }, null, 8, dx)
      ]),
      (C(!0), x(Ce, null, Je(f.value, (N, T) => (C(), x(Ce, null, [
        h(T) ? (C(), x("li", fx, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: g.ellipsisText
          }, null, 8, px)
        ])) : (C(), x("li", {
          key: 1,
          "data-prev": "",
          class: le({ active: g.modelValue === N })
        }, [
          l("button", {
            class: "",
            onClick: (R) => m(N)
          }, P(N), 9, hx)
        ], 2))
      ], 64))), 256)),
      l("li", mx, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: g.nextText,
          onClick: b
        }, null, 8, gx)
      ]),
      l("li", vx, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: g.lastText,
          onClick: _
        }, null, 8, _x)
      ])
    ], 2));
  }
}), bx = /* @__PURE__ */ Mn(yx, [["__scopeId", "data-v-2bfd7085"]]), Ex = { class: "d-inline" }, wx = { class: "fw-bold" }, Ax = /* @__PURE__ */ Se({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = dn(n), r = $({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => {
      const c = Qe("b-dropdown-item"), f = Qe("b-dropdown");
      return C(), et(f, _s({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: fe(() => [
          l("div", Ex, [
            De(i.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = l("span", null, "Per page: ", -1)),
              l("span", wx, P(r.value), 1)
            ])
          ])
        ]),
        default: fe(() => [
          (C(!0), x(Ce, null, Je(W(o), (u, d) => (C(), et(c, {
            key: u,
            onClick: (p) => r.value = u,
            active: u === i.modelValue
          }, {
            default: fe(() => [
              H(P(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), Sx = ["value"], Cx = /* @__PURE__ */ Se({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = dn(n), r = $({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => nt((C(), x("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (c) => r.value = c)
    }, [
      (C(!0), x(Ce, null, Je(W(o), (c, f) => (C(), x("option", {
        key: c,
        value: c
      }, P(c), 9, Sx))), 128))
    ], 512)), [
      [us, r.value]
    ]);
  }
});
var Ds = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Ds || {});
class Ox {
  constructor(t, n = "ASC", s) {
    on(this, "key"), on(this, "direction"), on(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = s;
  }
}
const Kp = (e, t) => {
  const n = (a, c) => {
    let f = typeof a, u = typeof c;
    return f == "number" && f == u;
  }, s = (a, c) => a - c, o = (a, c) => (a = a ?? "", c = c ?? "", a.localeCompare(c)), r = (a, c) => n(a, c) ? s : o, i = [...t];
  return i.sort((a, c) => {
    let f = 0;
    for (let u of e) {
      let { key: d, direction: p, sortFn: h } = u, m = p === "ASC" ? 1 : -1, v = a[d], _ = c[d];
      if (h = typeof h == "function" ? h : r(v, _), f = h(v, _, a, c, t, u, m) * m, f !== 0) return f;
    }
    return f;
  }), i;
}, Tx = ["onClick"], Nx = { class: "th-wrapper" }, Dx = {
  key: 0,
  "data-sort-indicator": ""
}, kx = { class: "sort-index" }, xx = { class: "sort-direction" }, Rx = ["onMouseover"], Ix = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Mx = ["colspan"], Px = ["innerHTML"];
class Sl {
  constructor(t = "", n = "", s = !1, o) {
    on(this, "key"), on(this, "label"), on(this, "sortable"), on(this, "sortFn"), this.key = t, this.label = n, this.sortable = s, this.sortFn = o;
  }
}
const Vx = /* @__PURE__ */ Se({
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
    }, s = t, o = e, r = j([]), { fields: i, items: a } = dn(o), c = $(() => {
      if (o.externalSort || r.value.length == 0) return o.items;
      const v = [...o.items];
      return Kp(r.value, v);
    }), f = $(() => {
      let v = i.value, _ = [];
      return v.length === 0 && (v = n([...a.value])), v.reduce((y, b, g) => {
        if (typeof b == "string")
          y.push(new Sl(b, b));
        else if (b instanceof Sl)
          y.push(b);
        else if (typeof b == "object") {
          const { key: O, label: N, sortable: T, sortFn: R } = b;
          y.push(new Sl(O, N, T, R));
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
      return y.direction === Ds.ASC ? "fas fa-sort-up" : y.direction === Ds.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(v) {
      const { key: _ } = v, y = r.value.findIndex((b) => b.key === _);
      if (y < 0) {
        const b = new Ox(_, Ds.ASC, v.sortFn);
        r.value.push(b);
      } else {
        const b = r.value[y], g = b.direction;
        g === Ds.ASC ? b.direction = Ds.DESC : g === Ds.DESC && r.value.splice(y, 1);
      }
      s("sort", r.value, Kp);
    }
    function h(v, _, y, b) {
      s("onMouseOverCell", v, _, y, b);
    }
    let m = j(null);
    return Nt(() => {
      m.value = Xn();
    }), (v, _) => (C(), x("table", _s({ ...v.$attrs }, {
      class: { striped: v.striped, hover: v.hover }
    }), [
      l("thead", null, [
        (C(!0), x(Ce, null, Je(f.value, (y) => (C(), x("th", {
          key: `thead-${y.key}`,
          class: le({ sortable: y.sortable }),
          onClick: (b) => y.sortable && p(y)
        }, [
          l("span", Nx, [
            De(v.$slots, `head(${y.key})`, {
              field: y,
              data: W(m),
              value: y.label
            }, () => [
              H(P(y.label), 1)
            ], !0),
            y.sortable ? (C(), x("span", Dx, [
              l("span", kx, P(u(y)), 1),
              l("span", xx, [
                l("i", {
                  class: le(d(y))
                }, null, 2)
              ])
            ])) : me("", !0)
          ])
        ], 10, Tx))), 128))
      ]),
      l("tbody", null, [
        (C(!0), x(Ce, null, Je(c.value, (y, b) => (C(), x(Ce, {
          key: `trow-${y?.id ?? b}`
        }, [
          De(v.$slots, "row", {
            item: y,
            index: b,
            colspan: f.value.length
          }, void 0, !0),
          l("tr", null, [
            (C(!0), x(Ce, null, Je(f.value, (g) => (C(), x("td", {
              key: `tcell-${g.key + (y?.id ?? b)}`,
              class: le({ [`tcell-${g?.key}`]: !0 }),
              onMouseover: (O) => h(O, y, b, g)
            }, [
              De(v.$slots, `cell(${g?.key})`, {
                data: W(m),
                item: y,
                field: g,
                value: y[g?.key]
              }, () => [
                H(P(y[g?.key]), 1)
              ], !0)
            ], 42, Rx))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        De(v.$slots, "footer", { data: W(m) }, void 0, !0)
      ]),
      v.showEmpty && c.value.length === 0 ? (C(), x("tr", Ix, [
        l("td", {
          colspan: f.value.length
        }, [
          De(v.$slots, "empty", {
            items: c.value,
            data: W(m),
            fields: f.value
          }, () => [
            l("span", { innerHTML: v.emptyText }, null, 8, Px)
          ], !0)
        ], 8, Mx)
      ])) : me("", !0)
    ], 16));
  }
}), Lx = /* @__PURE__ */ Mn(Vx, [["__scopeId", "data-v-b1e9b5de"]]);
var h_ = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(h_ || {});
const Fx = { class: "d-inline-block position-relative" }, Bx = ["disabled"], zp = "data-prevent-close", $x = /* @__PURE__ */ Se({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: h_.PRIMARY },
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
    const s = j(), o = e, r = j(), i = j(!1), a = j(o.variant), c = j(o.centered), f = j(o.dropup), u = j(o.dropend), d = j(o.dropstart), p = j(o.menuEnd), h = n, m = $(() => {
      const I = [];
      return a != null && a.value && I.push(`btn-${a.value}`), o.size && I.push(`btn-${o.size}`), I;
    }), v = $(() => {
      const I = [];
      return c != null && c.value && I.push("dropdown-center"), f != null && f.value && I.push("dropup"), d != null && d.value && I.push("dropstart"), !(d != null && d.value) && u != null && u.value && I.push("dropend"), I.length === 0 && I.push("dropdown"), I.unshift("btn-group"), I;
    }), _ = $(() => {
      const I = [];
      return i.value && I.push("show"), p.value && I.push("dropdown-menu-end"), I;
    }), y = () => {
      if (!i.value) return;
      const I = r.value.getBoundingClientRect(), D = s.value.getBoundingClientRect(), w = window.innerHeight - I.bottom, k = I.top, A = window.innerWidth - I.right, F = I.left;
      f.value = w < D.height && k >= D.height, p.value = A < D.width && F >= D.width;
    };
    async function b() {
      i.value = !0, await zs(), y();
    }
    function g() {
      i.value = !1;
    }
    function O(I) {
      i.value ? g() : b();
    }
    function N(I) {
      const { target: D } = I;
      D?.closest(`[${zp}],[${zp}=true]`) || g();
    }
    function T() {
      i.value && g();
    }
    Ct(i, (I, D) => {
      typeof D > "u" || I !== D && (h("toggle", { show: I }), I === !0 ? h("open", { show: I }) : h("close", { show: I }));
    }, { immediate: !0 });
    const R = {
      show: i,
      disabled: o.disabled,
      buttonClasses: m,
      onButtonClicked: O,
      onMenuClicked: N,
      onClickOutside: T,
      open: b,
      close: g
    };
    return t({
      ...R
    }), (I, D) => {
      const w = sb("click-outside");
      return C(), x("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: le([v.value, "dropdown-wrapper"])
      }, [
        nt((C(), x("div", Fx, [
          De(I.$slots, "header", it(ot({ ...R })), () => [
            l("button", {
              class: le(["btn dropdown-toggle", m.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: O,
              disabled: I.disabled
            }, [
              De(I.$slots, "button", it(ot({ ...R })), () => [
                H(P(I.text), 1)
              ], !0)
            ], 10, Bx)
          ], !0),
          l("ul", {
            ref_key: "dropDownMenuRef",
            ref: s,
            class: le(["dropdown-menu", _.value]),
            onClick: N
          }, [
            De(I.$slots, "default", it(ot({ ...R })), void 0, !0)
          ], 2)
        ])), [
          [w, T]
        ])
      ], 2);
    };
  }
}), jx = /* @__PURE__ */ Mn($x, [["__scopeId", "data-v-4910c394"]]), Ux = ["data-prevent-close"], Hx = /* @__PURE__ */ Se({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = dn(t);
    return (s, o) => (C(), x("li", {
      "data-prevent-close": W(n) ? "" : null
    }, [
      l("span", {
        class: le(["dropdown-item", { active: s.active }]),
        role: "button",
        tabindex: "0"
      }, [
        De(s.$slots, "default")
      ], 2)
    ], 8, Ux));
  }
}), Wx = {}, Kx = { "data-prevent-close": "" }, zx = { class: "dropdown-header" };
function qx(e, t) {
  return C(), x("li", Kx, [
    l("h6", zx, [
      De(e.$slots, "default")
    ])
  ]);
}
const Yx = /* @__PURE__ */ Mn(Wx, [["render", qx]]), Xx = {};
function Gx(e, t) {
  return C(), x("li", null, t[0] || (t[0] = [
    l("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Qx = /* @__PURE__ */ Mn(Xx, [["render", Gx]]), Jx = {
  mounted(e, t, n, s) {
    new so(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Zx = (e, t) => {
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
}, eR = {
  mounted(e, t, n, s) {
    const o = t.value;
    Zx(e, o);
  }
};
class bc {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
on(bc, "list", /* @__PURE__ */ new Set());
const tR = { class: "drawer-content" }, nR = { class: "drawer-header" }, sR = ["innerHTML"], oR = { class: "drawer-body" }, rR = ["innerHTML"], iR = { class: "drawer-footer" }, aR = ["innerHTML"], lR = ["innerHTML"], cR = /* @__PURE__ */ Se({
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
    } = dn(n), c = $(() => Bo(i.value, "drawer-")), f = $(() => Bo(a.value, "btn-")), u = j(), d = j(!1), p = Xn();
    let h;
    async function m() {
      return d.value === !0 ? void 0 : new Promise((T, R) => {
        d.value = !0, h = T;
      });
    }
    function v(T = !0) {
      d.value = !1, typeof h == "function" && h(T);
    }
    function _() {
      d.value === !0 ? m() : v(!1);
    }
    function y(T) {
      s?.value !== "static" && v(!1);
    }
    function b() {
      v(!1);
    }
    function g() {
      v(!1);
    }
    function O() {
      v(!0);
    }
    function N() {
      d.value === !0 ? bc.add(p) : bc.delete(p);
    }
    return t({
      show: m,
      hide: v,
      toggle: _
    }), (T, R) => (C(), et(uE, {
      onBeforeEnter: N,
      onAfterLeave: N
    }, {
      default: fe(() => [
        d.value ? (C(), x("div", _s({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...T.$attrs }, {
          onClick: Om(y, ["self"])
        }), [
          l("div", {
            class: le(["drawer-dialog", c.value])
          }, [
            l("div", tR, [
              l("div", nR, [
                De(T.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: T.title
                  }, null, 8, sR)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: b
                })
              ]),
              l("div", oR, [
                De(T.$slots, "default", {}, () => [
                  l("span", { innerHTML: T.body }, null, 8, rR)
                ], !0)
              ]),
              l("div", iR, [
                De(T.$slots, "footer", {}, () => [
                  T.okOnly ? me("", !0) : (C(), x("button", {
                    key: 0,
                    type: "button",
                    class: le(["ms-auto btn btn-secondary", f.value]),
                    onClick: g
                  }, [
                    De(T.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: T.textCancel }, null, 8, aR)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: le(["btn btn-primary", f.value]),
                    onClick: O
                  }, [
                    De(T.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: T.textOk }, null, 8, lR)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : me("", !0)
      ]),
      _: 3
    }));
  }
}), uR = /* @__PURE__ */ Mn(cR, [["__scopeId", "data-v-2e49e8cb"]]), Wt = "b", m_ = "$toaster", g_ = "$modalManager", dR = "$dialogManager";
class v_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = Ea(ex).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
on(v_, "component");
class __ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = Ea(ax).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
on(__, "component");
class y_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = Ea(Wk).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
on(y_, "component");
function fR() {
  return Ft(m_);
}
function pR() {
  return Ft(g_);
}
function hR(e) {
  e.component(`${Wt}-drawer`, uR), e.component(`${Wt}-modal`, f_), e.component(`${Wt}-dialog`, p_), e.component(`${Wt}-pagination`, bx), e.component(`${Wt}-pagination-dropdown`, Ax), e.component(`${Wt}-pagination-select`, Cx), e.component(`${Wt}-dropdown`, jx), e.component(`${Wt}-dropdown-item`, Hx), e.component(`${Wt}-dropdown-header`, Yx), e.component(`${Wt}-dropdown-divider`, Qx), e.component(`${Wt}-table`, Lx), e.component(`${Wt}-toast`, u_);
}
function mR(e) {
  e.directive("tooltip", Jx), e.directive("click-outside", eR);
}
const gR = {
  install(e) {
    hR(e), mR(e);
    const t = y_.getComponent(), n = v_.getComponent(), s = __.getComponent();
    e.provide(m_, t), e.provide(g_, n), e.provide(dR, s);
  }
}, _i = {
  BOTTOM_RIGHT: "bottom right"
}, en = /* @__PURE__ */ In("notifications", () => {
  const e = pR(), t = fR();
  return {
    showSuccess: (f, u = "Success") => {
      t.toast({
        title: u,
        body: f,
        variant: "primary",
        delay: 4e3
      }, _i.BOTTOM_RIGHT);
    },
    showError: (f, u = "Error") => {
      t.toast({
        title: u,
        body: f,
        variant: "danger",
        delay: 6e3
      }, _i.BOTTOM_RIGHT);
    },
    showWarning: (f, u = "Warning") => {
      t.toast({
        title: u,
        body: f,
        variant: "warning",
        delay: 5e3
      }, _i.BOTTOM_RIGHT);
    },
    showInfo: (f, u = "Information") => {
      t.toast({
        title: u,
        body: f,
        variant: "info",
        delay: 4e3
      }, _i.BOTTOM_RIGHT);
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
}), Go = /* @__PURE__ */ In("settings", () => {
  const e = to(), t = en(), n = "1", s = ds({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), o = j(null), r = j([]), i = j([]), a = ds({
    fetch: !1,
    save: !1,
    importing: !1
  }), c = async () => {
    try {
      a.fetch = !0;
      const b = (await $e.getProjectSettings()).data ?? {};
      Object.assign(s, b), o.value = s.fhir_system, r.value = [...s.selected_mapping_resources], i.value = [...s.selected_custom_mapping_resources];
    } catch (y) {
      e.addError(y, "settingsStore"), console.error("Failed to load project settings:", y);
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
    addPredefinedResource: async (y, b) => {
      try {
        const g = await $e.createMappingResource({ name: y, resourceSpec: b, type: "predefined" });
        return await c(), t.showSuccess(`${y} added`, "Resource added"), g;
      } catch (g) {
        let O = "Error adding the resource";
        g instanceof NC && (O = g.response?.data?.message ?? O), t.showError(`${y} not added: ${O}`, "Error");
      }
    },
    addCustomResource: async (y, b) => {
      const g = await $e.createMappingResource({ name: y, resourceSpec: b, type: "custom" });
      return await c(), t.showSuccess(`${y} added`, "Resource added"), g;
    },
    softDeleteResource: async (y) => {
      if (!y.id) return;
      const b = y.type === "predefined" ? r.value : i.value, g = b.findIndex((N) => N.id === y.id);
      if (g === -1) return;
      const O = { ...b[g] };
      b[g] = { ...b[g], deleted: !0, deletedAt: (/* @__PURE__ */ new Date()).toISOString() };
      try {
        await $e.softDeleteMappingResource(y.id), t.showWarning(`${y.name} soft-deleted`, "Resource Deleted");
      } catch (N) {
        throw b[g] = O, e.addError(N, "settingsStore.softDeleteResource"), t.showError(`Failed to soft-delete ${y.name}`), N;
      }
    },
    restoreResource: async (y) => {
      if (!y.id) return;
      const b = y.type === "predefined" ? r.value : i.value, g = b.findIndex((N) => N.id === y.id);
      if (g === -1) return;
      const O = { ...b[g] };
      b[g] = { ...b[g], deleted: !1, deletedAt: null };
      try {
        await $e.restoreMappingResource(y.id), t.showSuccess(`${y.name} restored`, "Resource Restored");
      } catch (N) {
        throw b[g] = O, e.addError(N, "settingsStore.restoreResource"), t.showError(`Failed to restore ${y.name}`), N;
      }
    },
    deleteResource: async (y) => {
      if (!y.id) return !1;
      const b = y.type === "predefined" ? r.value : i.value, g = b.findIndex((N) => N.id === y.id);
      if (g === -1) return !1;
      const O = { ...b[g] };
      b.splice(g, 1);
      try {
        return await $e.deleteMappingResource(y.id), t.showSuccess(`${y.name} removed`, "Resource Deleted"), !0;
      } catch (N) {
        return b.splice(g, 0, O), e.addError(N, "settingsStore.deleteResource"), t.showError(`Failed to delete ${y.name}`), !1;
      }
    },
    updateSelectedFhirSystem: async (y) => {
      await $e.updateFhirSystem(y), o.value = y, s.fhir_system = y, t.showSuccess(
        y === null ? "FHIR system disabled" : "FHIR system changed",
        "FHIR System Updated"
      );
    },
    exportResources: () => {
      const y = [
        ...r.value,
        ...i.value
      ];
      return {
        version: n,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        items: y
      };
    },
    importResources: async (y, b = {}) => {
      const g = b.mode ?? "merge";
      if (!y || typeof y != "object") throw new Error("Invalid JSON payload");
      const O = y;
      if (!O.version || O.version !== n) throw new Error("Unsupported or missing version");
      if (!Array.isArray(O.items)) throw new Error("Invalid payload: items must be an array");
      a.importing = !0;
      try {
        const T = (await $e.importMappingResources({ version: n, mode: g, items: O.items })).data?.summary || { added: 0, updated: 0, skipped: 0, total: 0 };
        return await c(), T;
      } finally {
        a.importing = !1;
      }
    }
  };
}), Me = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed",
  Outdated: "Outdated",
  Deleted: "Deleted"
}, Jn = /* @__PURE__ */ In("monitor", () => {
  const e = to(), t = j(!1), n = j([]), s = j([]), o = j(null), r = j(!1), i = 500, a = j({
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
      const K = await $e.listMrns(a.value.page, a.value.limit);
      K.data.data && K.data.pagination ? (n.value = K.data.data, a.value.total = K.data.pagination.total, a.value.totalPages = K.data.pagination.total_pages, a.value.hasNext = K.data.pagination.has_next, a.value.hasPrevious = K.data.pagination.has_previous, K.data.project_summary && (o.value = K.data.project_summary)) : n.value = K.data, s.value = [];
    } catch (K) {
      e.addError(K, "monitorStore"), console.error("Failed to load MRNs:", K), n.value = [];
    } finally {
      t.value = !1;
    }
  }, f = (K) => Array.from(new Set(
    (K || "").split(/[\s,]+/).map((oe) => oe.trim()).filter(Boolean)
  )), u = (K) => {
    const oe = (K || "").length ? (K || "").split(/[\s,]+/) : [], pe = oe.map((se) => se.trim()), we = pe.filter((se) => !se).length, ke = f(K), He = ke.length, L = Math.max(0, pe.filter(Boolean).length - He), J = ke.slice(0, 10);
    return {
      tokens: oe.length,
      unique: He,
      duplicates: L,
      empties: we,
      overLimit: He > i,
      limit: i,
      parsed: ke,
      sample: J
    };
  }, d = async (K) => {
    try {
      r.value = !0;
      const oe = await $e.addMrns(K);
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
  }, h = async (K) => await d([K]), m = async (K) => {
  }, v = async () => {
    try {
      t.value = !0;
      for (const K of s.value)
        await m(K);
    } catch (K) {
      e.addError(K, "monitorStore"), console.error("Failed to fetch selected MRNs:", K);
    } finally {
      t.value = !1;
    }
  }, _ = $(() => n.value.length > 0 && s.value.length === n.value.length), y = $(() => s.value.length > 0 && s.value.length < n.value.length), b = () => {
    _.value ? s.value = [] : s.value = n.value.map((K) => K.id);
  }, g = (K) => {
    const oe = s.value.indexOf(K);
    oe === -1 ? s.value.push(K) : s.value.splice(oe, 1);
  }, O = (K) => {
    a.value.page = K, c();
  }, N = (K) => {
    a.value.limit = K, a.value.page = 1, c();
  }, T = async (K) => {
    try {
      return (await $e.getMrnResources(K)).data;
    } catch (oe) {
      return e.addError(oe, "monitorStore"), console.error(`Failed to get resource status for MRN ${K}:`, oe), { mrn: K, resources: [], total_resources: 0 };
    }
  }, R = async () => {
    try {
      const K = await $e.getProjectSummary();
      return o.value = K.data, K.data;
    } catch (K) {
      return e.addError(K, "monitorStore"), console.error("Failed to get project summary:", K), null;
    }
  }, I = async (K, oe) => {
    try {
      r.value = !0;
      const pe = await $e.triggerFetchMrns(K, oe);
      return await c(), pe.data;
    } catch (pe) {
      throw e.addError(pe, "monitorStore"), console.error("Failed to trigger fetch:", pe), pe;
    } finally {
      r.value = !1;
    }
  }, D = async (K) => {
    const oe = n.value.filter((pe) => s.value.includes(pe.id)).map((pe) => pe.mrn);
    if (oe.length === 0)
      throw new Error("No MRNs selected");
    return await I(oe, K);
  }, w = async () => {
    try {
      r.value = !0;
      const K = await $e.performFullSync();
      return await c(), await R(), K.data;
    } catch (K) {
      throw e.addError(K, "monitorStore"), console.error("Failed to perform full sync:", K), K;
    } finally {
      r.value = !1;
    }
  }, k = async (K, oe, pe) => {
    try {
      const we = await $e.retryFailedResource(K, oe, pe);
      return await c(), we.data;
    } catch (we) {
      throw e.addError(we, "monitorStore"), console.error("Failed to retry resource:", we), we;
    }
  }, A = async (K) => {
    try {
      r.value = !0;
      const oe = await $e.bulkRetryFailed(K);
      return await c(), oe.data;
    } catch (oe) {
      throw e.addError(oe, "monitorStore"), console.error("Failed to bulk retry failed resources:", oe), oe;
    } finally {
      r.value = !1;
    }
  }, F = (K) => {
    if (K.status_summary)
      return K.status_summary.smart_status_display;
    const oe = K.resources.filter((J) => J.status !== Me.Deleted), pe = oe.length, we = oe.filter((J) => J.status === Me.Completed).length;
    if (pe === 0) return "No Resources";
    if (we === pe) return "Completed";
    const ke = we / pe * 100;
    if (ke >= 75) return `Mostly Completed (${Math.round(ke)}%)`;
    if (ke >= 25) return `Mixed Progress (${Math.round(ke)}%)`;
    if (ke > 0) return `Starting (${Math.round(ke)}%)`;
    const He = {};
    return oe.forEach((J) => {
      He[J.status] = (He[J.status] || 0) + 1;
    }), Object.keys(He).reduce((J, se) => He[J] > He[se] ? J : se, Me.Pending);
  }, de = (K) => {
    if (K.status_summary)
      return K.status_summary.overall_status;
    const oe = K.resources.filter((we) => we.status !== Me.Deleted);
    if (oe.length === 0) return Me.Pending;
    const pe = {};
    return oe.forEach((we) => {
      pe[we.status] = (pe[we.status] || 0) + 1;
    }), Object.keys(pe).reduce((we, ke) => pe[we] > pe[ke] ? we : ke, Me.Pending);
  }, X = (K) => {
    if (K.status_summary)
      return K.status_summary.archive_button_config;
    const oe = K.resources.filter((ke) => ke.status !== Me.Deleted), pe = oe.filter((ke) => ke.status === Me.Completed).length, we = oe.length;
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
  }, re = (K) => K.status_summary ? K.status_summary.has_archivable_resources : K.resources.some((oe) => oe.status === Me.Completed), z = (K) => {
    if (K.status_summary)
      return K.status_summary.progress_bar_config;
    const oe = K.resources.filter((L) => L.status !== Me.Deleted), pe = oe.length;
    if (pe === 0)
      return { segments: [], completion_percentage: 0, total_resources: 0 };
    const we = {};
    oe.forEach((L) => {
      we[L.status] = (we[L.status] || 0) + 1;
    });
    const ke = Object.entries(we).map(([L, J]) => ({
      status: L,
      count: J,
      percentage: Math.round(J / pe * 100 * 10) / 10,
      color: Ze(L)
    })), He = we[Me.Completed] || 0;
    return {
      segments: ke,
      completion_percentage: Math.round(He / pe * 100 * 10) / 10,
      total_resources: pe
    };
  }, ce = (K) => {
    if (K.status_summary)
      return K.status_summary.available_resource_types;
    const oe = /* @__PURE__ */ new Set();
    return K.resources.filter((pe) => pe.status === Me.Completed).forEach((pe) => oe.add(pe.name)), Array.from(oe).sort();
  }, be = (K, oe) => {
    if (K.status_summary?.resource_type_statuses[oe])
      return K.status_summary.resource_type_statuses[oe];
    const pe = K.resources.filter(
      (L) => L.name === oe && L.status !== Me.Deleted
    );
    if (pe.length === 0) return null;
    const we = pe.reduce((L, J) => (L[J.status] = (L[J.status] || 0) + 1, L), {}), ke = we[Me.Completed] || 0, He = pe.length;
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
  }, Ze = (K) => {
    switch (K) {
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
    allSelected: _,
    indeterminate: y,
    // Basic methods
    fetchMrns: c,
    addMrn: h,
    addMrns: d,
    addMrnsFromString: p,
    parseMrnsFromInput: f,
    analyzeMrnInput: u,
    fetchMrn: m,
    fetchSelected: v,
    toggleSelectAll: b,
    toggleSelection: g,
    setPage: O,
    setLimit: N,
    // Enhanced resource management
    getResourceStatus: T,
    getProjectSummary: R,
    triggerFetchMrns: I,
    triggerFetchSelected: D,
    performFullSync: w,
    retryFailedResource: k,
    bulkRetryFailed: A,
    // Enhanced status methods
    getSmartStatusDisplay: F,
    getStatusForStyling: de,
    getArchiveButtonConfig: X,
    hasArchivableResources: re,
    getProgressBarConfig: z,
    getAvailableResourceTypesForArchive: ce,
    getResourceTypeStatus: be,
    getStatusColor: Ze
  };
}), vR = "data:image/png;base64,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", _R = { class: "d-flex gap-3 align-items-start" }, yR = { class: "feature-icon d-flex align-items-start justify-content-center" }, bR = { class: "d-flex flex-column gap-2 align-items-start" }, ER = { class: "d-flex gap-2" }, wR = { class: "fs-6 fw-bold mb-1" }, AR = { class: "text-muted mb-0" }, SR = /* @__PURE__ */ Se({
  __name: "FeatureHighlight",
  setup(e) {
    return (t, n) => (C(), x("div", _R, [
      l("div", yR, [
        De(t.$slots, "icon", {}, void 0, !0)
      ]),
      l("div", bR, [
        l("div", ER, [
          l("span", wR, [
            De(t.$slots, "title", {}, void 0, !0)
          ])
        ]),
        l("p", AR, [
          De(t.$slots, "default", {}, void 0, !0)
        ])
      ])
    ]));
  }
}), Cl = /* @__PURE__ */ Jt(SR, [["__scopeId", "data-v-ee9dd710"]]), CR = { class: "card h-100 border-0 shadow-sm bg-light rounded" }, OR = { class: "card-body d-flex align-items-center" }, TR = { class: "step-number me-4" }, NR = { class: "fw-bold" }, DR = { class: "step-content flex-grow-1" }, kR = { class: "mb-1" }, xR = { class: "text-muted mb-2" }, RR = /* @__PURE__ */ Se({
  __name: "StepCard",
  props: {
    number: {},
    title: {},
    variant: { default: "primary" }
  },
  setup(e) {
    const t = e, n = $(() => `bg-${t.variant}`);
    return (s, o) => (C(), x("div", CR, [
      l("div", OR, [
        l("div", TR, [
          l("div", {
            class: le(["text-white rounded-circle d-flex align-items-center justify-content-center", n.value])
          }, [
            l("span", NR, P(s.number), 1)
          ], 2)
        ]),
        l("div", DR, [
          l("h5", kR, P(s.title), 1),
          l("p", xR, [
            De(s.$slots, "default", {}, void 0, !0)
          ]),
          l("div", null, [
            De(s.$slots, "actions", {}, void 0, !0)
          ])
        ])
      ])
    ]));
  }
}), yi = /* @__PURE__ */ Jt(RR, [["__scopeId", "data-v-00ad78d0"]]), IR = { class: "home-page" }, MR = { class: "hero-section text-center mb-5" }, PR = { class: "d-flex flex-column gap-2 align-items-center" }, VR = ["src"], LR = { class: "row g-4 mt-2 text-start" }, FR = { class: "col-md-4" }, BR = { class: "card h-100 border-0 shadow-sm" }, $R = { class: "card-body" }, jR = { class: "col-md-4" }, UR = { class: "card h-100 border-0 shadow-sm" }, HR = { class: "card-body" }, WR = { class: "col-md-4" }, KR = { class: "card h-100 border-0 shadow-sm" }, zR = { class: "card-body" }, qR = { class: "getting-started-section mb-5" }, YR = { class: "row g-4 workflow-steps" }, XR = { class: "col-12 col-lg-6" }, GR = { class: "col-12 col-lg-6" }, QR = { class: "col-12 col-lg-6" }, JR = { class: "col-12 col-lg-6" }, ZR = {
  key: 0,
  class: "status-section"
}, e2 = { class: "row g-4 mb-4" }, t2 = { class: "col-md-3 col-sm-6" }, n2 = { class: "stat-card card border-0 bg-primary text-white text-center h-100" }, s2 = { class: "card-body" }, o2 = { class: "mb-1" }, r2 = { class: "col-md-3 col-sm-6" }, i2 = { class: "stat-card card border-0 bg-secondary text-white text-center h-100" }, a2 = { class: "card-body" }, l2 = { class: "mb-1" }, c2 = { class: "col-md-3 col-sm-6" }, u2 = { class: "stat-card card border-0 bg-dark text-white text-center h-100" }, d2 = { class: "card-body" }, f2 = { class: "mb-1" }, p2 = { class: "col-md-3 col-sm-6" }, h2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, m2 = { class: "card-body" }, g2 = { class: "mb-1" }, v2 = { class: "row g-4" }, _2 = { class: "col-md-3 col-sm-6" }, y2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, b2 = { class: "card-body" }, E2 = { class: "mb-1" }, w2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, A2 = { class: "col-md-3 col-sm-6" }, S2 = { class: "stat-card card border-0 bg-danger text-white text-center h-100" }, C2 = { class: "card-body" }, O2 = { class: "mb-1" }, T2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, N2 = { class: "col-md-3 col-sm-6" }, D2 = { class: "stat-card card border-0 bg-info text-white text-center h-100" }, k2 = { class: "card-body" }, x2 = { class: "mb-1" }, R2 = { class: "col-md-3 col-sm-6" }, I2 = { class: "stat-card card border-0 bg-warning text-white text-center h-100" }, M2 = { class: "card-body" }, P2 = { class: "mb-1" }, V2 = {
  key: 0,
  class: "mt-4 text-center"
}, L2 = {
  class: "btn-group gap-2",
  role: "group"
}, F2 = {
  key: 1,
  class: "alert alert-info text-center"
}, B2 = /* @__PURE__ */ Se({
  __name: "HomePage",
  setup(e) {
    const t = Go(), n = Jn(), {
      selectedFhirSystem: s,
      selectedMappingResources: o,
      selectedCustomMappingResources: r
    } = Gn(t);
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
    const i = $(() => s.value && (o.value?.length > 0 || r.value?.length > 0)), a = $(() => i.value && n.projectSummary), c = $(() => n.projectSummary?.total_mrns || 0), f = $(() => {
      const b = o.value?.length || 0, g = r.value?.length || 0;
      return b + g;
    }), u = $(() => n.projectSummary?.overall_status_counts?.completed || 0), d = $(() => n.projectSummary?.overall_status_counts?.pending || 0), p = $(() => n.projectSummary?.overall_status_counts?.fetching || 0), h = $(() => n.projectSummary?.overall_status_counts?.failed || 0), m = $(() => n.projectSummary ? Object.values(n.projectSummary.overall_status_counts).reduce((b, g) => b + g, 0) : 0), v = $(() => {
      if (!n.projectSummary) return 0;
      const b = n.projectSummary.overall_status_counts?.deleted || 0;
      return m.value - b;
    }), _ = $(() => {
      if (!v.value) return 0;
      const b = h.value;
      return Math.round(b / v.value * 100);
    }), y = $(() => {
      if (!v.value) return 0;
      const b = u.value;
      return Math.round(b / v.value * 100);
    });
    return (b, g) => {
      const O = Qe("router-link");
      return C(), x("div", IR, [
        l("div", MR, [
          l("div", PR, [
            l("img", {
              src: W(vR),
              title: "ALL FHIR",
              style: { height: "200px" }
            }, null, 8, VR),
            g[0] || (g[0] = l("p", { class: "text-muted mb-4" }, " With this module, FHIR resources for configured MRNs are retrieved in the background. It connects to your specified EHR systems, fetches the payload, and stores it in its original form. When data is ready, it assembles the requested mix of MRNs and resource types into a ZIP tailored to your needs. ", -1))
          ]),
          g[10] || (g[10] = l("div", { class: "text-center mb-2" }, [
            l("h2", null, "Key Features")
          ], -1)),
          l("div", LR, [
            l("div", FR, [
              l("div", BR, [
                l("div", $R, [
                  ue(Cl, null, {
                    icon: fe(() => g[1] || (g[1] = [
                      l("i", { class: "fas fa-database fa-4x text-success" }, null, -1)
                    ])),
                    title: fe(() => g[2] || (g[2] = [
                      H(" Resources Management ")
                    ])),
                    default: fe(() => [
                      g[3] || (g[3] = H(" Manage patient MRNs and monitor the status of each FHIR resource type as it progresses through pending, fetching, completed, or failed states — all from one place. "))
                    ]),
                    _: 1,
                    __: [3]
                  })
                ])
              ])
            ]),
            l("div", jR, [
              l("div", UR, [
                l("div", HR, [
                  ue(Cl, null, {
                    icon: fe(() => g[4] || (g[4] = [
                      l("i", { class: "fas fa-robot fa-4x text-primary" }, null, -1)
                    ])),
                    title: fe(() => g[5] || (g[5] = [
                      H(" Background Automation ")
                    ])),
                    default: fe(() => [
                      g[6] || (g[6] = H(" Resource collection runs automatically in the background. New and updated data are fetched on a schedule without manual steps, so downloads are ready on demand with minimal waiting. "))
                    ]),
                    _: 1,
                    __: [6]
                  })
                ])
              ])
            ]),
            l("div", WR, [
              l("div", KR, [
                l("div", zR, [
                  ue(Cl, null, {
                    icon: fe(() => g[7] || (g[7] = [
                      l("i", { class: "fas fa-file-archive fa-4x text-info" }, null, -1)
                    ])),
                    title: fe(() => g[8] || (g[8] = [
                      H(" Archive Creation ")
                    ])),
                    default: fe(() => [
                      g[9] || (g[9] = H(" Create archives by selecting any combination of MRNs and resource types. Build exactly the package you need as a ZIP file. "))
                    ]),
                    _: 1,
                    __: [9]
                  })
                ])
              ])
            ])
          ])
        ]),
        l("div", qR, [
          g[19] || (g[19] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Getting Started"),
            l("p", { class: "text-muted" }, "Follow these steps to fetch and package FHIR resources")
          ], -1)),
          l("div", YR, [
            l("div", XR, [
              ue(yi, {
                number: 1,
                title: "Configure Your Setup",
                variant: "primary"
              }, {
                actions: fe(() => [
                  ue(O, {
                    to: "/setup",
                    class: "btn btn-primary btn-sm"
                  }, {
                    default: fe(() => g[11] || (g[11] = [
                      l("i", { class: "fas fa-cogs me-1" }, null, -1),
                      H(" Go to Setup ")
                    ])),
                    _: 1,
                    __: [11]
                  })
                ]),
                default: fe(() => [
                  g[12] || (g[12] = H(" Select FHIR system and resource types to fetch "))
                ]),
                _: 1,
                __: [12]
              })
            ]),
            l("div", GR, [
              ue(yi, {
                number: 2,
                title: "Add Patient MRNs",
                variant: "success"
              }, {
                actions: fe(() => [
                  ue(O, {
                    to: "/resources",
                    class: "btn btn-success btn-sm"
                  }, {
                    default: fe(() => g[13] || (g[13] = [
                      l("i", { class: "fas fa-database me-1" }, null, -1),
                      H(" Manage MRNs ")
                    ])),
                    _: 1,
                    __: [13]
                  })
                ]),
                default: fe(() => [
                  g[14] || (g[14] = H(" Add patient identifiers to fetch FHIR resources "))
                ]),
                _: 1,
                __: [14]
              })
            ]),
            l("div", QR, [
              ue(yi, {
                number: 3,
                title: "Background Fetching",
                variant: "info"
              }, {
                actions: fe(() => [
                  ue(O, {
                    to: "/tasks",
                    class: "btn btn-info btn-sm"
                  }, {
                    default: fe(() => g[15] || (g[15] = [
                      l("i", { class: "fas fa-tasks me-1" }, null, -1),
                      H(" View Progress ")
                    ])),
                    _: 1,
                    __: [15]
                  })
                ]),
                default: fe(() => [
                  g[16] || (g[16] = H(" Fetching runs automatically in the background. Monitor progress and, if needed, queue manual retries — no manual steps required for routine updates. "))
                ]),
                _: 1,
                __: [16]
              })
            ]),
            l("div", JR, [
              ue(yi, {
                number: 4,
                title: "Generate ZIP Archive",
                variant: "warning"
              }, {
                actions: fe(() => [
                  ue(O, {
                    to: "/resources",
                    class: "btn btn-warning btn-sm"
                  }, {
                    default: fe(() => g[17] || (g[17] = [
                      l("i", { class: "fas fa-download me-1" }, null, -1),
                      H(" Create ZIP ")
                    ])),
                    _: 1,
                    __: [17]
                  })
                ]),
                default: fe(() => [
                  g[18] || (g[18] = H(" Once resources are completed, generate a tailored ZIP file with exactly the MRNs and resource types you want. "))
                ]),
                _: 1,
                __: [18]
              })
            ])
          ])
        ]),
        a.value ? (C(), x("div", ZR, [
          g[40] || (g[40] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Project Status"),
            l("p", { class: "text-muted" }, "Current overview of your project")
          ], -1)),
          l("div", e2, [
            l("div", t2, [
              l("div", n2, [
                l("div", s2, [
                  g[20] || (g[20] = l("i", { class: "fas fa-user-injured fa-2x mb-2" }, null, -1)),
                  l("h3", o2, P(c.value), 1),
                  g[21] || (g[21] = l("p", { class: "mb-0 small" }, "Total MRNs", -1))
                ])
              ])
            ]),
            l("div", r2, [
              l("div", i2, [
                l("div", a2, [
                  g[22] || (g[22] = l("i", { class: "fas fa-database fa-2x mb-2" }, null, -1)),
                  l("h3", l2, P(m.value), 1),
                  g[23] || (g[23] = l("p", { class: "mb-0 small" }, "Total Resources", -1)),
                  g[24] || (g[24] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "includes deleted", -1))
                ])
              ])
            ]),
            l("div", c2, [
              l("div", u2, [
                l("div", d2, [
                  g[25] || (g[25] = l("i", { class: "fas fa-play-circle fa-2x mb-2" }, null, -1)),
                  l("h3", f2, P(v.value), 1),
                  g[26] || (g[26] = l("p", { class: "mb-0 small" }, "Active Resources", -1)),
                  g[27] || (g[27] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "excludes deleted", -1))
                ])
              ])
            ]),
            l("div", p2, [
              l("div", h2, [
                l("div", m2, [
                  g[28] || (g[28] = l("i", { class: "fas fa-file-medical fa-2x mb-2" }, null, -1)),
                  l("h3", g2, P(f.value), 1),
                  g[29] || (g[29] = l("p", { class: "mb-0 small" }, "Resource Types", -1))
                ])
              ])
            ])
          ]),
          l("div", v2, [
            l("div", _2, [
              l("div", y2, [
                l("div", b2, [
                  g[30] || (g[30] = l("i", { class: "fas fa-check-circle fa-2x mb-2" }, null, -1)),
                  l("h3", E2, P(u.value), 1),
                  g[31] || (g[31] = l("p", { class: "mb-0 small" }, "Completed", -1)),
                  y.value > 0 ? (C(), x("p", w2, P(y.value) + "% complete", 1)) : me("", !0)
                ])
              ])
            ]),
            l("div", A2, [
              l("div", S2, [
                l("div", C2, [
                  g[32] || (g[32] = l("i", { class: "fas fa-exclamation-circle fa-2x mb-2" }, null, -1)),
                  l("h3", O2, P(h.value), 1),
                  g[33] || (g[33] = l("p", { class: "mb-0 small" }, "Failed", -1)),
                  _.value > 0 ? (C(), x("p", T2, P(_.value) + "% error rate", 1)) : me("", !0)
                ])
              ])
            ]),
            l("div", N2, [
              l("div", D2, [
                l("div", k2, [
                  g[34] || (g[34] = l("i", { class: "fas fa-sync fa-2x mb-2" }, null, -1)),
                  l("h3", x2, P(p.value), 1),
                  g[35] || (g[35] = l("p", { class: "mb-0 small" }, "Fetching", -1))
                ])
              ])
            ]),
            l("div", R2, [
              l("div", I2, [
                l("div", M2, [
                  g[36] || (g[36] = l("i", { class: "fas fa-clock fa-2x mb-2" }, null, -1)),
                  l("h3", P2, P(d.value), 1),
                  g[37] || (g[37] = l("p", { class: "mb-0 small" }, "Pending", -1))
                ])
              ])
            ])
          ]),
          i.value ? (C(), x("div", V2, [
            l("div", L2, [
              ue(O, {
                to: "/resources",
                class: "btn btn-primary"
              }, {
                default: fe(() => g[38] || (g[38] = [
                  l("i", { class: "fas fa-database me-1" }, null, -1),
                  H(" Manage Resources ")
                ])),
                _: 1,
                __: [38]
              }),
              ue(O, {
                to: "/tasks",
                class: "btn btn-outline-secondary"
              }, {
                default: fe(() => g[39] || (g[39] = [
                  l("i", { class: "fas fa-tasks me-1" }, null, -1),
                  H(" View Tasks ")
                ])),
                _: 1,
                __: [39]
              })
            ])
          ])) : me("", !0)
        ])) : (C(), x("div", F2, [
          g[42] || (g[42] = l("i", { class: "fas fa-info-circle fa-2x mb-3" }, null, -1)),
          g[43] || (g[43] = l("h4", null, "Get Started", -1)),
          g[44] || (g[44] = l("p", { class: "mb-3" }, "Configure your FHIR system and resource types to begin fetching data.", -1)),
          ue(O, {
            to: "/setup",
            class: "btn btn-primary"
          }, {
            default: fe(() => g[41] || (g[41] = [
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
}), $2 = /* @__PURE__ */ Jt(B2, [["__scopeId", "data-v-cfdeccfe"]]), j2 = ["value"], U2 = ["value"], H2 = /* @__PURE__ */ Se({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = Go(), n = en(), { settings: s, selectedFhirSystem: o } = Gn(t), r = async (i) => {
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
    return (i, a) => (C(), x("div", null, [
      a[2] || (a[2] = l("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      l("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: W(o) === null ? "__disabled__" : String(W(o)),
        onChange: r
      }, [
        a[0] || (a[0] = l("option", {
          value: "",
          disabled: ""
        }, "Select a FHIR System", -1)),
        a[1] || (a[1] = l("option", { value: "__disabled__" }, "Disabled", -1)),
        (C(!0), x(Ce, null, Je(W(s).fhir_systems, (c) => (C(), x("option", {
          key: c.ehr_id,
          value: c.ehr_id
        }, P(c.ehr_name), 9, U2))), 128))
      ], 40, j2)
    ]));
  }
}), W2 = { class: "mb-3" }, K2 = { class: "form-check" }, z2 = { class: "form-check" }, q2 = { class: "d-flex gap-2 justify-content-end" }, Y2 = ["onClick"], X2 = ["onClick"], G2 = /* @__PURE__ */ Se({
  __name: "ImportResourcesModal",
  setup(e, { expose: t }) {
    const n = j(null), s = j("merge"), o = async () => (s.value = "merge", await n.value?.show() ? s.value : null), r = (i) => {
      i(!0);
    };
    return t({ show: o }), (i, a) => {
      const c = Qe("b-modal");
      return C(), et(c, {
        ref_key: "importModal",
        ref: n
      }, {
        title: fe(() => a[2] || (a[2] = [
          H("Import Resources")
        ])),
        footer: fe(({ hide: f }) => [
          l("div", q2, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (u) => f(!1)
            }, a[5] || (a[5] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, Y2),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (u) => r(f)
            }, a[6] || (a[6] = [
              l("i", { class: "fas fa-file-import fa-fw me-1" }, null, -1),
              H("Continue ")
            ]), 8, X2)
          ])
        ]),
        default: fe(() => [
          l("div", W2, [
            l("div", K2, [
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
            l("div", z2, [
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
}), Ps = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), Q2 = { class: "mb-3" }, J2 = ["value"], Z2 = ["disabled"], eI = ["value"], tI = ["value"], nI = ["disabled"], sI = /* @__PURE__ */ Se({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Go(), { settings: n } = Gn(t), s = $(() => n.value.mapping_resources), o = Fb(e, "modelValue");
    return (r, i) => (C(), x("div", null, [
      l("form", null, [
        l("div", Q2, [
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
            [Co, o.value.displayName]
          ])
        ]),
        l("div", null, [
          nt(l("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: W(Ps).PREDEFINED,
            "onUpdate:modelValue": i[1] || (i[1] = (a) => o.value.resourceType = a)
          }, null, 8, J2), [
            [Oo, o.value.resourceType]
          ]),
          i[7] || (i[7] = l("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          nt(l("select", {
            "onUpdate:modelValue": i[2] || (i[2] = (a) => o.value.predefinedResource = a),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: o.value.resourceType !== W(Ps).PREDEFINED
          }, [
            i[6] || (i[6] = l("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (C(!0), x(Ce, null, Je(s.value, (a) => (C(), x("option", {
              key: a.resourceSpec,
              value: a.resourceSpec
            }, P(a.name), 9, eI))), 128))
          ], 8, Z2), [
            [us, o.value.predefinedResource]
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
            value: W(Ps).CUSTOM,
            "onUpdate:modelValue": i[3] || (i[3] = (a) => o.value.resourceType = a)
          }, null, 8, tI), [
            [Oo, o.value.resourceType]
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
            disabled: o.value.resourceType !== W(Ps).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, nI), [
            [Co, o.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
}), oI = { class: "d-flex gap-2 justify-content-end" }, rI = ["onClick"], iI = ["onClick", "disabled"], aI = /* @__PURE__ */ Se({
  __name: "ResourceFormModal",
  setup(e, { expose: t }) {
    const n = j(null), s = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: Ps.PREDEFINED
    }), o = j(s()), r = $(() => o.value.displayName.trim() ? o.value.resourceType === Ps.PREDEFINED ? !!o.value.predefinedResource : !!o.value.customResourceSpec.trim() : !1), i = async () => (o.value = s(), await n.value?.show() ? o.value : null), a = (c) => {
      r.value && c(!0);
    };
    return t({ show: i }), (c, f) => {
      const u = Qe("b-modal");
      return C(), et(u, {
        ref_key: "resourceFormModal",
        ref: n
      }, {
        title: fe(() => f[1] || (f[1] = [
          H("Resource")
        ])),
        footer: fe(({ hide: d }) => [
          l("div", oI, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (p) => d(!1)
            }, f[2] || (f[2] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, rI),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (p) => a(d),
              disabled: !r.value
            }, f[3] || (f[3] = [
              l("i", { class: "fas fa-plus fa-fw me-1" }, null, -1),
              H("Add ")
            ]), 8, iI)
          ])
        ]),
        default: fe(() => [
          ue(sI, {
            modelValue: o.value,
            "onUpdate:modelValue": f[0] || (f[0] = (d) => o.value = d)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 512);
    };
  }
}), lI = { class: "d-flex align-items-center w-100" }, cI = { class: "ms-auto d-flex align-items-center gap-2" }, uI = ["disabled"], dI = ["disabled"], fI = ["disabled"], pI = ["disabled"], hI = {
  key: 0,
  class: "d-flex align-items-center text-muted small ms-2"
}, mI = "Import resources from JSON. Choose Merge to add/update or Replace to overwrite your current list.", gI = "Export current resources to a JSON file.", vI = "Manage the list of mapping resources. Import/Export uses JSON; Import supports Merge or Replace.", _I = /* @__PURE__ */ Se({
  __name: "ResourcesToolbar",
  setup(e) {
    const t = Go(), n = en(), { loading: s } = Gn(t), o = j(null), r = j(null), i = j(null), a = j("merge");
    async function c() {
      if (!o.value) return;
      const h = await o.value.show();
      h && (h.resourceType === Ps.PREDEFINED ? await t.addPredefinedResource(h.displayName, h.predefinedResource) : await t.addCustomResource(h.displayName, h.customResourceSpec));
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
        const m = h.target, v = m.files && m.files[0];
        if (!v) return;
        const _ = await v.text(), y = JSON.parse(_), b = await t.importResources(y, { mode: a.value }), g = "Resources Import Summary", O = `Imported ${b.added} new, updated ${b.updated}, skipped ${b.skipped} (total ${b.total}).`;
        await n.alertUser(g, O);
      } catch (m) {
        console.error("Import failed:", m), n.showError("Failed to import resources. Please check the JSON file.");
      } finally {
        i.value && (i.value.value = ""), a.value = "merge";
      }
    }
    function d() {
      try {
        const h = t.exportResources(), m = new Blob([JSON.stringify(h, null, 2)], { type: "application/json" }), v = window.URL.createObjectURL(m), _ = document.createElement("a"), y = /* @__PURE__ */ new Date(), b = `${y.getFullYear()}${String(y.getMonth() + 1).padStart(2, "0")}${String(y.getDate()).padStart(2, "0")}-${String(y.getHours()).padStart(2, "0")}${String(y.getMinutes()).padStart(2, "0")}`;
        _.href = v, _.download = `resources-${b}.json`, document.body.appendChild(_), _.click(), _.remove(), window.URL.revokeObjectURL(v), n.showSuccess("Exported resources successfully");
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
    return (h, m) => (C(), x("div", lI, [
      l("div", { class: "d-flex align-items-center gap-2" }, [
        m[0] || (m[0] = l("span", null, "Resources", -1)),
        l("i", {
          class: "fas fa-info-circle text-muted",
          title: vI,
          "aria-label": "Resources help",
          role: "img"
        })
      ]),
      l("div", cI, [
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: f,
          title: mI,
          disabled: W(s).fetch || W(s).importing
        }, m[1] || (m[1] = [
          l("i", { class: "fas fa-upload fa-fw" }, null, -1),
          l("span", null, "Import", -1)
        ]), 8, uI),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: d,
          title: gI,
          disabled: W(s).fetch || W(s).importing
        }, m[2] || (m[2] = [
          l("i", { class: "fas fa-download fa-fw" }, null, -1),
          l("span", null, "Export", -1)
        ]), 8, dI),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: c,
          disabled: W(s).fetch || W(s).importing
        }, m[3] || (m[3] = [
          l("i", { class: "fas fa-plus fa-fw" }, null, -1),
          l("span", null, "Add", -1)
        ]), 8, fI),
        l("button", {
          class: "btn btn-outline-secondary btn-sm",
          onClick: p,
          disabled: W(s).fetch,
          title: "Refresh resources"
        }, [
          l("i", {
            class: le(["fas fa-rotate-right fa-fw", { "fa-spin": W(s).fetch }])
          }, null, 2)
        ], 8, pI),
        W(s).importing ? (C(), x("div", hI, m[4] || (m[4] = [
          l("i", { class: "fas fa-spinner fa-spin me-1" }, null, -1),
          H(" Importing... ")
        ]))) : me("", !0)
      ]),
      l("input", {
        ref_key: "importInput",
        ref: i,
        type: "file",
        accept: "application/json",
        class: "d-none",
        onChange: u
      }, null, 544),
      ue(G2, {
        ref_key: "importModal",
        ref: r
      }, null, 512),
      ue(aI, {
        ref_key: "resourceFormModal",
        ref: o
      }, null, 512)
    ]));
  }
}), yI = { class: "table table-striped table-hover table-sm border-top" }, bI = { class: "d-flex gap-2" }, EI = ["onClick", "disabled"], wI = ["onClick", "disabled"], AI = ["onClick", "disabled"], SI = { key: 0 }, CI = /* @__PURE__ */ Se({
  __name: "ResourcesTable",
  setup(e) {
    const t = Go(), n = en(), { selectedMappingResources: s, selectedCustomMappingResources: o } = Gn(t), r = $(() => [
      ...s.value,
      ...o.value
    ]), i = ds({}), a = (p) => p.id || `${p.type}::${p.name}::${p.resourceSpec}`, c = (p) => !!i[a(p)];
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
        await t.deleteResource(p) && n.showSuccess("Resource removed and deleted items purged");
      } finally {
        i[h] = !1;
      }
    }
    return (p, h) => (C(), x("table", yI, [
      h[1] || (h[1] = l("thead", null, [
        l("tr", null, [
          l("th", null, "Name"),
          l("th", null, "Type"),
          l("th", null, "Resource Specification"),
          l("th", null, "Actions")
        ])
      ], -1)),
      l("tbody", null, [
        (C(!0), x(Ce, null, Je(r.value, (m) => (C(), x("tr", {
          key: m.id || `${m.type}-${m.name}-${m.resourceSpec}`,
          class: le({ "table-secondary": m.deleted })
        }, [
          l("td", null, [
            l("span", {
              class: le({ "text-decoration-line-through text-muted": m.deleted })
            }, P(m.name), 3)
          ]),
          l("td", null, P(m.type), 1),
          l("td", null, [
            l("span", {
              class: le({ "text-decoration-line-through text-muted": m.deleted })
            }, P(m.resourceSpec || "-"), 3)
          ]),
          l("td", null, [
            l("div", bI, [
              m.deleted ? (C(), x(Ce, { key: 1 }, [
                l("button", {
                  type: "button",
                  class: "btn btn-outline-success btn-sm btn-icon",
                  onClick: (v) => u(m),
                  disabled: c(m),
                  title: "Restore"
                }, [
                  l("i", {
                    class: le(`fas fa-fw ${c(m) ? "fa-spinner fa-spin" : "fa-rotate-left"}`)
                  }, null, 2)
                ], 8, wI),
                l("button", {
                  type: "button",
                  class: "btn btn-outline-danger btn-sm btn-icon",
                  onClick: (v) => d(m),
                  disabled: c(m),
                  title: "Delete forever"
                }, [
                  l("i", {
                    class: le(`fas fa-fw ${c(m) ? "fa-spinner fa-spin" : "fa-trash-can"}`)
                  }, null, 2)
                ], 8, AI)
              ], 64)) : (C(), x("button", {
                key: 0,
                type: "button",
                class: "btn btn-outline-danger btn-sm btn-icon",
                onClick: (v) => f(m),
                disabled: c(m),
                title: "Soft delete"
              }, [
                l("i", {
                  class: le(`fas fa-fw ${c(m) ? "fa-spinner fa-spin" : "fa-trash-can"}`)
                }, null, 2)
              ], 8, EI))
            ])
          ])
        ], 2))), 128)),
        r.value.length === 0 ? (C(), x("tr", SI, h[0] || (h[0] = [
          l("td", {
            colspan: "4",
            class: "text-muted text-center"
          }, "No resources configured", -1)
        ]))) : me("", !0)
      ])
    ]));
  }
}), OI = { class: "d-flex flex-column gap-4" }, TI = { class: "card" }, NI = { class: "card-body px-0 py-0" }, DI = { class: "p-2" }, kI = /* @__PURE__ */ Se({
  __name: "SetupPage",
  setup(e) {
    return (t, n) => (C(), x("div", OI, [
      ue(H2),
      l("div", TI, [
        l("div", NI, [
          l("div", DI, [
            ue(_I)
          ]),
          ue(CI)
        ])
      ])
    ]));
  }
}), b_ = /* @__PURE__ */ In("operations", () => {
  const e = j(!1), t = j(null), n = j(!0), s = j({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), o = j({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), r = (O) => {
    e.value = O;
  }, i = (O, N, T, R) => {
    t.value = {
      operation: O,
      success: N,
      message: T,
      data: R,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  }, a = () => {
    n.value = !n.value;
  }, c = (O) => {
    s.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: O
    };
  }, f = () => {
    s.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, u = () => {
    s.value.visible = !1;
  }, d = (O) => {
    o.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: O
    };
  }, p = () => {
    o.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, h = () => {
    o.value.visible = !1;
  }, m = $(() => s.value.visible), v = $(() => s.value.archiveType), _ = $(() => s.value.selectedMrns), y = $(() => o.value.visible), b = $(() => o.value.archiveType), g = $(() => o.value.selectedMrns);
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
    archiveModalType: v,
    archiveModalSelectedMrns: _,
    showArchiveModalSelected: c,
    showArchiveModalAll: f,
    hideArchiveModal: u,
    // Streaming Modal
    streamingModalVisible: y,
    streamingModalType: b,
    streamingModalSelectedMrns: g,
    showStreamingModalSelected: d,
    showStreamingModalAll: p,
    hideStreamingModal: h
  };
}), xI = { class: "mb-3" }, RI = { class: "d-flex flex-wrap gap-2 align-items-center" }, II = { class: "d-flex gap-2" }, MI = ["disabled"], PI = { key: 0 }, VI = { key: 1 }, LI = ["disabled"], FI = /* @__PURE__ */ Se({
  __name: "MonitorToolbar",
  emits: ["addMrn"],
  setup(e) {
    const t = Jn(), n = b_(), s = en(), o = $(() => t.selectedMrns.length === 0), r = $(() => t.operationLoading), i = $(() => t.loading), a = async () => {
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
      return C(), x("div", xI, [
        l("div", RI, [
          l("div", II, [
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: p[0] || (p[0] = (v) => d.$emit("addMrn"))
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
              r.value ? (C(), x("span", VI, p[3] || (p[3] = [
                l("span", null, [
                  l("i", { class: "fas fa-spinner fa-spin fa-fw" }),
                  H(" Fetch Selected")
                ], -1)
              ]))) : (C(), x("span", PI, p[2] || (p[2] = [
                l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1),
                H(" Fetch Selected")
              ])))
            ], 8, MI)
          ]),
          ue(m, {
            variant: "success",
            title: "Stream download archives",
            size: "sm"
          }, {
            button: fe(() => p[4] || (p[4] = [
              l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
              H("Download ")
            ])),
            default: fe(() => [
              ue(h, {
                onClick: f,
                class: le({ disabled: o.value }),
                "prevent-close": !1
              }, {
                default: fe(() => p[5] || (p[5] = [
                  l("i", { class: "fas fa-download me-2" }, null, -1),
                  H("Download Selected Records ")
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
          ], 8, LI)
        ])
      ]);
    };
  }
}), wu = /* @__PURE__ */ In("streaming", () => {
  const e = j({
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
}), E_ = /* @__PURE__ */ In("resourceContent", () => {
  const e = to(), t = j(!1), n = j(null), s = j(null), o = async (m, v, _, y) => {
    try {
      t.value = !0;
      const b = await $e.getResourceContent(m, v, _, y);
      if (b.data.success)
        return n.value = b.data, b.data;
      throw new Error(b.data.error || "Failed to fetch resource content");
    } catch (b) {
      throw e.addError(b, "resourceContentStore"), console.error("Failed to fetch resource content:", b), b;
    } finally {
      t.value = !1;
    }
  }, r = async (m, v, _, y) => await o(m, v, _, y);
  return {
    // State
    loading: t,
    currentContent: n,
    // Actions
    fetchResourceContent: o,
    loadResourceContent: r,
    showResourceContent: async (m, v, _, y) => (await r(m, v, _, y), s.value?.show()),
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
          const v = document.createElement("textarea");
          v.value = m, v.style.position = "fixed", v.style.left = "-999999px", v.style.top = "-999999px", document.body.appendChild(v), v.focus(), v.select();
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
      const { content: m, metadata: v } = n.value, _ = m.split(`
`).length, y = m.length;
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
      const { mrn: m, resource_name: v, repeat_instance: _ } = n.value;
      return `${v} - ${m} (Instance ${_})`;
    }
  };
}), BI = { class: "align-middle" }, $I = { class: "d-flex flex-column" }, jI = { class: "text-muted" }, UI = {
  key: 0,
  class: "d-block text-muted"
}, HI = {
  key: 0,
  class: "text-success"
}, WI = {
  key: 1,
  class: "text-muted"
}, KI = {
  key: 0,
  class: "text-danger"
}, zI = ["title"], qI = ["title"], YI = {
  key: 1,
  class: "text-muted"
}, XI = { class: "d-flex gap-2" }, GI = ["disabled"], QI = ["disabled"], JI = ["disabled"], ZI = {
  key: 0,
  class: "table-warning"
}, eM = { colspan: "5" }, tM = { class: "p-2" }, nM = { class: "mb-0 mt-1" }, sM = /* @__PURE__ */ Se({
  __name: "MonitorResourceRow",
  props: {
    resource: {},
    mrn: {},
    recordId: {}
  },
  setup(e) {
    const t = e, n = Jn(), s = wu(), o = en(), r = E_(), i = j(!1), a = j(!1), c = j(!1), f = (v) => {
      const _ = "badge";
      switch (v) {
        case Me.Pending:
          return `${_} bg-warning text-dark`;
        case Me.Fetching:
          return `${_} bg-info text-dark`;
        case Me.Completed:
          return `${_} bg-success`;
        case Me.Failed:
          return `${_} bg-danger`;
        case Me.Outdated:
          return `${_} bg-secondary`;
        case Me.Deleted:
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
    }, m = async () => {
      try {
        a.value = !0;
        const v = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), _ = `${t.mrn}_${t.resource.name}_${v}`;
        s.startStreaming(_), o.showInfo(`Started streaming download: ${_}`);
        const y = {
          mrns: [t.mrn],
          resource_types: [t.resource.name],
          archive_name: _
        }, b = await $e.streamSelectedArchive([t.mrn], y), g = new Blob([b.data]), O = window.URL.createObjectURL(g), N = document.createElement("a");
        N.href = O, N.download = `${_}.zip`, document.body.appendChild(N), N.click(), document.body.removeChild(N), window.URL.revokeObjectURL(O);
        const T = s.finishStreaming();
        o.showSuccess(`Download completed: ${_} (${T}s)`);
      } catch (v) {
        s.finishStreaming(), o.showError(`Streaming download failed: ${v.message}`), console.error("Failed to stream download resource:", v);
      } finally {
        a.value = !1;
      }
    };
    return (v, _) => (C(), x(Ce, null, [
      l("tr", BI, [
        l("td", null, [
          l("div", $I, [
            l("strong", null, P(v.resource.name), 1),
            l("small", jI, P(v.resource.mapping_type) + " | " + P(v.resource.resource_spec), 1)
          ])
        ]),
        l("td", null, [
          l("span", {
            class: le(f(v.resource.status))
          }, P(v.resource.status), 3),
          v.resource.repeat_instance ? (C(), x("small", UI, " Instance #" + P(v.resource.repeat_instance), 1)) : me("", !0)
        ]),
        l("td", null, [
          v.resource.fetch_date ? (C(), x("div", HI, [
            _[1] || (_[1] = l("i", { class: "fas fa-check-circle fa-fw" }, null, -1)),
            H(" " + P(u(v.resource.fetch_date)), 1)
          ])) : (C(), x("div", WI, "-"))
        ]),
        l("td", null, [
          v.resource.error_message ? (C(), x("div", KI, [
            _[2] || (_[2] = l("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            l("span", {
              title: v.resource.error_message
            }, P(d(v.resource.error_message)), 9, zI),
            v.resource.error_message.length > 50 ? (C(), x("button", {
              key: 0,
              class: "btn btn-link btn-sm p-0 ms-1",
              onClick: _[0] || (_[0] = (y) => i.value = !i.value),
              title: i.value ? "Show less" : "Show more"
            }, [
              l("i", {
                class: le(`fas fa-chevron-${i.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, qI)) : me("", !0)
          ])) : (C(), x("div", YI, "-"))
        ]),
        l("td", null, [
          l("div", XI, [
            v.resource.status === "Failed" ? (C(), x("button", {
              key: 0,
              class: "btn btn-sm btn-warning btn-icon",
              onClick: p,
              disabled: a.value,
              title: "Retry this resource"
            }, _[3] || (_[3] = [
              l("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)
            ]), 8, GI)) : me("", !0),
            v.resource.status === "Completed" ? (C(), x("button", {
              key: 1,
              class: "btn btn-sm btn-outline-primary btn-icon",
              onClick: h,
              disabled: c.value,
              title: "View resource details"
            }, [
              l("i", {
                class: le(`fas fa-fw ${c.value ? "fa-spinner fa-spin" : "fa-eye"}`)
              }, null, 2)
            ], 8, QI)) : me("", !0),
            v.resource.status === "Completed" ? (C(), x("button", {
              key: 2,
              class: "btn btn-sm btn-outline-success btn-icon",
              onClick: m,
              disabled: a.value || W(s).isStreamingActive,
              title: "Stream download this resource"
            }, _[4] || (_[4] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, JI)) : me("", !0)
          ])
        ])
      ]),
      i.value && v.resource.error_message ? (C(), x("tr", ZI, [
        l("td", eM, [
          l("div", tM, [
            _[5] || (_[5] = l("strong", null, "Error Details:", -1)),
            l("pre", nM, P(v.resource.error_message), 1)
          ])
        ])
      ])) : me("", !0)
    ], 64));
  }
}), oM = { class: "align-middle" }, rM = ["checked"], iM = {
  key: 0,
  class: "status-display-smart"
}, aM = ["title"], lM = {
  key: 1,
  class: "status-display-progress"
}, cM = {
  class: "progress position-relative",
  style: { height: "6px" }
}, uM = ["title"], dM = { class: "text-muted" }, fM = {
  key: 2,
  class: "status-display-badges"
}, pM = ["title"], hM = {
  key: 3,
  class: "status-display-legacy"
}, mM = ["title"], gM = {
  key: 0,
  class: "position-absolute bg-dark text-white p-2 rounded shadow-lg",
  style: { "z-index": "1000", top: "100%", left: "0", width: "250px" }
}, vM = { class: "small" }, _M = { class: "d-flex justify-content-between" }, yM = { class: "d-flex justify-content-between" }, bM = { class: "d-flex align-items-center" }, EM = ["aria-expanded"], wM = { class: "d-flex gap-2" }, AM = ["disabled"], SM = {
  key: 0,
  class: "fas fa-cloud-arrow-down fa-fw"
}, CM = {
  key: 1,
  class: "fas fa-spinner fa-spin fa-fw"
}, OM = ["disabled", "title"], TM = {
  key: 0,
  class: "fas fa-redo fa-fw"
}, NM = {
  key: 1,
  class: "fas fa-spinner fa-spin fa-fw"
}, DM = ["disabled", "title"], kM = {
  colspan: "5",
  class: "p-0"
}, xM = { class: "ps-3" }, RM = { class: "table table-sm table-bordered mb-0" }, IM = /* @__PURE__ */ Se({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  setup(e) {
    const t = Jn(), n = wu(), s = en(), o = e, r = j(!1), i = j(!1), a = j(!1), c = j("progress"), f = () => {
      r.value = !r.value;
    }, u = $(() => {
      const I = o.item.resources.filter((X) => X.status !== Me.Deleted), D = I.length, w = I.filter((X) => X.status === Me.Completed).length, k = I.filter((X) => X.status === Me.Failed).length, A = I.filter((X) => X.status === Me.Pending).length, F = I.filter((X) => X.status === Me.Fetching).length;
      let de = `${w}/${D} completed`;
      return k > 0 && (de += `, ${k} failed`), F > 0 && (de += `, ${F} fetching`), A > 0 && (de += `, ${A} pending`), de;
    }), d = $(() => t.getProgressBarConfig(o.item)), p = $(() => o.item.resources.some((I) => I.status === Me.Failed)), h = $(() => !p.value), m = $(() => {
      if (p.value) {
        const I = o.item.resources.filter((D) => D.status === Me.Failed).length;
        return `Retry ${I} failed resource${I > 1 ? "s" : ""} for this record`;
      } else
        return "No failed resources to retry";
    }), v = $(() => o.item.resources.some((I) => I.status === Me.Completed)), _ = $(() => !v.value), y = $(() => {
      if (v.value) {
        const I = o.item.resources.filter((D) => D.status === Me.Completed).length;
        return `Stream download ${I} completed resource${I > 1 ? "s" : ""} for MRN ${o.item.mrn}`;
      } else
        return "No completed resources to stream";
    }), b = () => {
      const I = d.value;
      return I.segments.length === 0 ? "No resources" : `${I.segments.map((w) => `${w.status}: ${w.count}`).join(", ")} | ${Math.round(I.completion_percentage)}% complete`;
    }, g = () => b() + " (hover for details)", O = () => {
      const I = t.getStatusForStyling(o.item);
      return `badge bg-${t.getStatusColor(I)}`;
    }, N = async () => {
      try {
        i.value = !0, await t.triggerFetchMrns([o.item.mrn]);
      } catch (I) {
        console.error("Failed to trigger fetch for MRN:", I);
      } finally {
        i.value = !1;
      }
    }, T = async () => {
      if (p.value)
        try {
          i.value = !0, await $e.retryFailed({ record_ids: [o.item.id] }), await t.getProjectSummary();
        } catch (I) {
          console.error("Failed to retry failed resources:", I);
        } finally {
          i.value = !1;
        }
    }, R = async () => {
      if (v.value)
        try {
          i.value = !0;
          const I = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), D = `${o.item.mrn}_all_resources_${I}`;
          n.startStreaming(D), s.showInfo(`Started streaming download: ${D}`);
          const w = o.item.resources.filter((z) => z.status === Me.Completed).map((z) => z.name).filter((z, ce, be) => be.indexOf(z) === ce), k = {
            mrns: [o.item.mrn],
            resource_types: w,
            archive_name: D
          }, A = await $e.streamSelectedArchive([o.item.mrn], k), F = new Blob([A.data]), de = window.URL.createObjectURL(F), X = document.createElement("a");
          X.href = de, X.download = `${D}.zip`, document.body.appendChild(X), X.click(), document.body.removeChild(X), window.URL.revokeObjectURL(de);
          const re = n.finishStreaming();
          s.showSuccess(`Download completed: ${D} (${re}s)`);
        } catch (I) {
          n.finishStreaming(), s.showError(`Streaming download failed: ${I.message}`), console.error("Failed to stream download MRN:", I);
        } finally {
          i.value = !1;
        }
    };
    return (I, D) => (C(), x(Ce, null, [
      l("tr", oM, [
        l("td", null, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: I.selected,
            onChange: D[0] || (D[0] = (w) => W(t).toggleSelection(I.item.id))
          }, null, 40, rM)
        ]),
        l("td", null, P(I.item.mrn), 1),
        l("td", null, [
          c.value === "smart" ? (C(), x("div", iM, [
            l("span", {
              class: le(O()),
              title: b()
            }, P(W(t).getSmartStatusDisplay(I.item)), 11, aM)
          ])) : c.value === "progress" ? (C(), x("div", lM, [
            l("div", cM, [
              (C(!0), x(Ce, null, Je(d.value.segments, (w) => (C(), x("div", {
                key: w.status,
                class: le(`progress-bar bg-${w.color}`),
                style: Vt({ width: w.percentage + "%" }),
                title: `${w.status}: ${w.count} (${w.percentage}%)`
              }, null, 14, uM))), 128))
            ]),
            l("small", dM, P(Math.round(d.value.completion_percentage)) + "% complete", 1)
          ])) : c.value === "badges" ? (C(), x("div", fM, [
            (C(!0), x(Ce, null, Je(d.value.segments, (w) => (C(), x("span", {
              key: w.status,
              class: le(`badge bg-${w.color} me-1`),
              title: `${w.status}: ${w.count} resources`,
              style: { "font-size": "0.7em" }
            }, P(w.status.charAt(0).toUpperCase()) + ": " + P(w.count), 11, pM))), 128))
          ])) : (C(), x("div", hM, [
            l("span", {
              class: le(O()),
              title: g(),
              onMouseenter: D[1] || (D[1] = (w) => a.value = !0),
              onMouseleave: D[2] || (D[2] = (w) => a.value = !1)
            }, P(W(t).getSmartStatusDisplay(I.item)), 43, mM),
            a.value ? (C(), x("div", gM, [
              D[6] || (D[6] = l("div", { class: "fw-bold mb-1" }, "Status Breakdown", -1)),
              l("div", vM, [
                (C(!0), x(Ce, null, Je(d.value.segments, (w) => (C(), x("div", {
                  key: w.status,
                  class: "d-flex justify-content-between"
                }, [
                  l("span", null, P(w.status) + ":", 1),
                  l("span", null, P(w.count) + " (" + P(w.percentage) + "%)", 1)
                ]))), 128)),
                D[5] || (D[5] = l("hr", { class: "my-1" }, null, -1)),
                l("div", _M, [
                  D[3] || (D[3] = l("span", null, "Total Resources:", -1)),
                  l("span", null, P(d.value.total_resources), 1)
                ]),
                l("div", yM, [
                  D[4] || (D[4] = l("span", null, "Completion:", -1)),
                  l("span", null, P(Math.round(d.value.completion_percentage)) + "%", 1)
                ])
              ])
            ])) : me("", !0)
          ]))
        ]),
        l("td", null, [
          l("div", bM, [
            l("span", null, P(u.value), 1),
            l("button", {
              class: "btn btn-sm btn-light ms-2",
              onClick: f,
              "aria-expanded": r.value
            }, [
              l("i", {
                class: le(`fas fa-chevron-${r.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, EM)
          ])
        ]),
        l("td", null, [
          l("div", wM, [
            l("button", {
              class: "btn btn-sm btn-outline-primary btn-icon",
              onClick: N,
              disabled: i.value,
              title: "Trigger fetch for this MRN"
            }, [
              i.value ? (C(), x("i", CM)) : (C(), x("i", SM))
            ], 8, AM),
            l("button", {
              class: "btn btn-sm btn-outline-warning btn-icon",
              onClick: T,
              disabled: h.value || i.value,
              title: m.value
            }, [
              i.value ? (C(), x("i", NM)) : (C(), x("i", TM))
            ], 8, OM),
            l("button", {
              class: "btn btn-sm btn-outline-success btn-icon",
              disabled: _.value || i.value || W(n).isStreamingActive,
              onClick: R,
              title: y.value
            }, D[7] || (D[7] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, DM)
          ])
        ])
      ]),
      nt(l("tr", null, [
        l("td", kM, [
          l("div", xM, [
            l("table", RM, [
              D[8] || (D[8] = l("thead", { class: "table-light" }, [
                l("tr", null, [
                  l("th", { scope: "col" }, "Resource"),
                  l("th", { scope: "col" }, "Status"),
                  l("th", { scope: "col" }, "Fetch Date"),
                  l("th", { scope: "col" }, "Error"),
                  l("th", { scope: "col" }, "Actions")
                ])
              ], -1)),
              l("tbody", null, [
                (C(!0), x(Ce, null, Je(I.item.resources, (w) => (C(), et(sM, {
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
        [Sm, r.value]
      ])
    ], 64));
  }
}), MM = /* @__PURE__ */ Jt(IM, [["__scopeId", "data-v-2a00b840"]]), PM = {
  key: 0,
  class: "d-flex justify-content-center"
}, VM = {
  key: 1,
  class: "table table-bordered table-striped table-hover"
}, LM = { class: "table-light" }, FM = { scope: "col" }, BM = ["checked", "indeterminate"], $M = { key: 0 }, jM = /* @__PURE__ */ Se({
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
    const t = e, n = j(null);
    return Ct(() => t.indeterminate, (s) => {
      n.value && (n.value.indeterminate = s);
    }, { immediate: !0 }), (s, o) => (C(), x("div", null, [
      s.loading ? (C(), x("div", PM, o[1] || (o[1] = [
        l("div", {
          class: "spinner-border",
          role: "status"
        }, [
          l("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (C(), x("table", VM, [
        l("thead", LM, [
          l("tr", null, [
            l("th", FM, [
              l("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: s.allSelected,
                indeterminate: s.indeterminate,
                onChange: o[0] || (o[0] = (r) => s.$emit("toggle-select-all"))
              }, null, 40, BM)
            ]),
            o[2] || (o[2] = l("th", { scope: "col" }, "MRN", -1)),
            o[3] || (o[3] = l("th", { scope: "col" }, "Status", -1)),
            o[4] || (o[4] = l("th", { scope: "col" }, "Resources", -1)),
            o[5] || (o[5] = l("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        l("tbody", null, [
          s.items.length === 0 ? (C(), x("tr", $M, o[6] || (o[6] = [
            l("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (C(!0), x(Ce, { key: 1 }, Je(s.items, (r) => (C(), et(MM, {
            key: r.id,
            item: r,
            selected: s.selectedMrns.includes(r.id)
          }, null, 8, ["item", "selected"]))), 128))
        ])
      ]))
    ]));
  }
}), UM = { class: "mb-3" }, HM = { class: "mt-2 small" }, WM = { key: 0 }, KM = { key: 1 }, zM = {
  key: 0,
  class: "text-danger"
}, qM = {
  key: 1,
  class: "text-muted"
}, YM = { class: "d-flex gap-2 justify-content-end" }, XM = ["onClick"], GM = ["onClick", "disabled"], QM = /* @__PURE__ */ Se({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = j(null), s = j(""), o = Jn(), r = $(() => o.analyzeMrnInput(s.value)), i = $(() => r.value.unique === 0 || r.value.overLimit), a = $(() => r.value.unique > 0 ? `Add ${r.value.unique}` : "Add"), c = async () => (s.value = "", await n.value?.show() ? s.value : null), f = (u) => {
      i.value || u(!0);
    };
    return t({ show: c }), (u, d) => {
      const p = Qe("b-modal");
      return C(), et(p, {
        ref_key: "addMrnModal",
        ref: n
      }, {
        title: fe(() => d[1] || (d[1] = [
          H("Add MRN")
        ])),
        footer: fe(({ hide: h }) => [
          l("div", YM, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (m) => h(!1)
            }, d[11] || (d[11] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, XM),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (m) => f(h),
              disabled: i.value
            }, [
              d[12] || (d[12] = l("i", { class: "fas fa-plus fa-fw me-1" }, null, -1)),
              H(P(a.value), 1)
            ], 8, GM)
          ])
        ]),
        default: fe(() => [
          l("div", UM, [
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
            l("div", HM, [
              l("div", null, [
                d[6] || (d[6] = H(" Parsed: ")),
                l("strong", null, P(r.value.unique), 1),
                d[7] || (d[7] = H(" unique ")),
                r.value.duplicates > 0 ? (C(), x("span", WM, [
                  d[2] || (d[2] = H("(")),
                  l("strong", null, P(r.value.duplicates), 1),
                  d[3] || (d[3] = H(" duplicates ignored)"))
                ])) : me("", !0),
                r.value.empties > 0 ? (C(), x("span", KM, [
                  d[4] || (d[4] = H(", ")),
                  l("strong", null, P(r.value.empties), 1),
                  d[5] || (d[5] = H(" empty tokens"))
                ])) : me("", !0)
              ]),
              r.value.overLimit ? (C(), x("div", zM, " Limit exceeded: " + P(r.value.unique) + " › " + P(r.value.limit) + ". Please reduce the list. ", 1)) : me("", !0),
              r.value.sample.length ? (C(), x("div", qM, [
                d[8] || (d[8] = H(" Sample: ")),
                l("code", null, P(r.value.sample.join(", ")), 1)
              ])) : me("", !0)
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), JM = { class: "p-0" }, ZM = {
  key: 0,
  class: "d-flex justify-content-center align-items-center py-5"
}, eP = {
  key: 1,
  class: "h-100"
}, tP = { class: "bg-light border-bottom p-3" }, nP = { class: "row align-items-center" }, sP = { class: "col-md-8" }, oP = { class: "d-flex flex-wrap gap-3" }, rP = { class: "d-flex align-items-center" }, iP = { class: "text-muted" }, aP = { class: "d-flex align-items-center" }, lP = { class: "text-muted" }, cP = {
  key: 0,
  class: "text-warning"
}, uP = {
  key: 0,
  class: "d-flex align-items-center"
}, dP = { class: "col-md-4 text-end" }, fP = ["disabled"], pP = {
  key: 0,
  class: "alert alert-warning mt-2 mb-0 py-2"
}, hP = { class: "content-display" }, mP = {
  key: 2,
  class: "p-4 text-center"
}, gP = ["onClick"], vP = /* @__PURE__ */ Se({
  __name: "ResourceContentModal",
  setup(e) {
    const t = E_(), n = en(), s = j(null), o = j(!1), r = j(!1), i = $(() => t.getContentStats()), a = () => {
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
      const d = Qe("b-modal");
      return C(), et(d, {
        ref_key: "resourceContentModal",
        ref: s,
        size: "xl",
        onHidden: a
      }, {
        title: fe(() => [
          u[0] || (u[0] = l("i", { class: "fas fa-file-alt fa-fw me-2" }, null, -1)),
          H(" " + P(W(t).getDisplayTitle()), 1)
        ]),
        footer: fe(({ hide: p }) => [
          l("button", {
            type: "button",
            class: "btn btn-secondary",
            onClick: (h) => p()
          }, " Close ", 8, gP)
        ]),
        default: fe(() => [
          l("div", JM, [
            W(t).loading ? (C(), x("div", ZM, u[1] || (u[1] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading content...")
              ], -1),
              l("span", { class: "ms-3" }, "Loading resource content...", -1)
            ]))) : W(t).currentContent ? (C(), x("div", eP, [
              l("div", tP, [
                l("div", nP, [
                  l("div", sP, [
                    l("div", oP, [
                      l("div", rP, [
                        u[2] || (u[2] = l("i", { class: "fas fa-info-circle text-info me-1" }, null, -1)),
                        l("small", iP, P(i.value?.lines || 0) + " lines, " + P(i.value?.characters || 0) + " characters ", 1)
                      ]),
                      l("div", aP, [
                        u[3] || (u[3] = l("i", { class: "fas fa-hdd text-secondary me-1" }, null, -1)),
                        l("small", lP, [
                          H(P(i.value?.size_human) + " ", 1),
                          i.value?.is_truncated ? (C(), x("span", cP, " of " + P(i.value?.full_size_human) + " (truncated) ", 1)) : me("", !0)
                        ])
                      ]),
                      W(t).isJsonContent() ? (C(), x("div", uP, u[4] || (u[4] = [
                        l("i", { class: "fas fa-check-circle text-success me-1" }, null, -1),
                        l("small", { class: "text-muted" }, "Valid JSON", -1)
                      ]))) : me("", !0)
                    ])
                  ]),
                  l("div", dP, [
                    l("button", {
                      class: "btn btn-outline-secondary btn-sm",
                      onClick: c,
                      disabled: o.value,
                      title: "Copy content to clipboard"
                    }, [
                      l("i", {
                        class: le(`fas ${o.value ? "fa-spinner fa-spin" : r.value ? "fa-check" : "fa-copy"} fa-fw`)
                      }, null, 2),
                      H(" " + P(o.value ? "Copying..." : r.value ? "Copied!" : "Copy"), 1)
                    ], 8, fP)
                  ])
                ]),
                i.value?.is_truncated ? (C(), x("div", pP, [
                  u[5] || (u[5] = l("i", { class: "fas fa-exclamation-triangle me-2" }, null, -1)),
                  u[6] || (u[6] = l("strong", null, "Content Truncated:", -1)),
                  H(" This file is " + P(i.value.full_size_human) + " but only the first " + P(i.value.size_human) + " are shown for performance. The full content is preserved in the system. ", 1)
                ])) : me("", !0)
              ]),
              l("div", hP, [
                l("pre", {
                  class: le(["content-pre", { "json-content": W(t).isJsonContent() }])
                }, [
                  l("code", null, P(W(t).currentContent.content), 1)
                ], 2)
              ])
            ])) : (C(), x("div", mP, u[7] || (u[7] = [
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
}), _P = /* @__PURE__ */ Jt(vP, [["__scopeId", "data-v-8148176a"]]), yP = { class: "mb-3" }, bP = ["placeholder"], EP = { class: "mb-3" }, wP = {
  key: 0,
  class: "text-center text-muted py-3"
}, AP = {
  key: 1,
  class: "resource-type-list"
}, SP = ["value", "id", "disabled"], CP = ["for"], OP = { class: "mb-3" }, TP = { class: "form-check" }, NP = { class: "form-check" }, DP = { class: "d-flex align-items-center mb-2" }, kP = { key: 0 }, xP = { class: "mb-2" }, RP = { class: "small text-muted" }, IP = { key: 1 }, MP = { class: "small text-muted" }, PP = { key: 0 }, VP = { key: 1 }, LP = { class: "d-flex gap-2 justify-content-end" }, FP = ["onClick"], BP = ["onClick", "disabled"], $P = /* @__PURE__ */ Se({
  __name: "ArchiveOptionsModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {},
    estimatedResources: { default: 0 }
  },
  emits: ["create"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = Jn(), r = n, i = j(null), a = j({
      archive_name: "",
      resource_types: [],
      background_mode: !1
    }), c = $(() => {
      const v = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
      return (s.archiveType === "selected" ? o.mrns.filter((b) => s.selectedMrns.includes(b.mrn)) : o.mrns).forEach((b) => {
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([g, O]) => {
          v.add(g), O.is_archivable && _.add(g);
        }) : b.resources.forEach((g) => {
          g.status !== "Deleted" && (v.add(g.name), g.status === "Completed" && _.add(g.name));
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
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([g, O]) => {
          v.length === 0 ? O.is_archivable && (y += O.completed_count) : v.includes(g) && O.is_archivable && (y += O.completed_count);
        }) : b.resources.forEach((g) => {
          g.status === "Completed" && (v.length === 0 || v.includes(g.name)) && (y += 1);
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
    }, a.value.background_mode = u.value > 50, await i.value?.show() ?? !1), m = (v) => {
      if (!p.value) return;
      const _ = { ...a.value };
      _.archive_name && (_.archive_name = _.archive_name.trim()), _.resource_types && _.resource_types.length === 0 && delete _.resource_types, r("create", _, s.archiveType, s.selectedMrns), v(!0);
    };
    return t({ show: h }), (v, _) => {
      const y = Qe("b-modal");
      return C(), et(y, {
        ref_key: "archiveOptionsModal",
        ref: i
      }, {
        title: fe(() => _[4] || (_[4] = [
          H("Archive Options")
        ])),
        footer: fe(({ hide: b }) => [
          l("div", LP, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (g) => b(!1)
            }, _[16] || (_[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, FP),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (g) => m(b),
              disabled: !p.value
            }, _[17] || (_[17] = [
              l("i", { class: "fas fa-archive fa-fw me-1" }, null, -1),
              H("Create Archive ")
            ]), 8, BP)
          ])
        ]),
        default: fe(() => [
          l("div", null, [
            l("div", yP, [
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
              }, null, 8, bP), [
                [Co, a.value.archive_name]
              ]),
              _[6] || (_[6] = l("div", { class: "form-text" }, "Optional custom name for the archive file (without extension)", -1))
            ]),
            l("div", EP, [
              _[8] || (_[8] = l("label", { class: "form-label" }, "Resource Types", -1)),
              _[9] || (_[9] = l("div", { class: "form-text mb-2" }, "Select which resource types to include", -1)),
              c.value.length === 0 ? (C(), x("div", wP, _[7] || (_[7] = [
                l("i", { class: "fas fa-info-circle me-2" }, null, -1),
                H(" No resource types found ")
              ]))) : (C(), x("div", AP, [
                (C(!0), x(Ce, null, Je(c.value, (b) => (C(), x("div", {
                  class: "form-check",
                  key: b.name
                }, [
                  nt(l("input", {
                    class: "form-check-input",
                    type: "checkbox",
                    value: b.name,
                    "onUpdate:modelValue": _[1] || (_[1] = (g) => a.value.resource_types = g),
                    id: `resource-${b.name}`,
                    disabled: !b.isAvailable
                  }, null, 8, SP), [
                    [xE, a.value.resource_types]
                  ]),
                  l("label", {
                    class: "form-check-label",
                    for: `resource-${b.name}`
                  }, P(b.name), 9, CP)
                ]))), 128))
              ]))
            ]),
            l("div", OP, [
              _[12] || (_[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
              l("div", TP, [
                nt(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "immediate-mode",
                  value: !1,
                  "onUpdate:modelValue": _[2] || (_[2] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [Oo, a.value.background_mode]
                ]),
                _[10] || (_[10] = l("label", {
                  class: "form-check-label",
                  for: "immediate-mode"
                }, [
                  l("strong", null, "Immediate Processing"),
                  l("div", { class: "small text-muted" }, "Process archive immediately (recommended for small selections)")
                ], -1))
              ]),
              l("div", NP, [
                nt(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "background-mode",
                  value: !0,
                  "onUpdate:modelValue": _[3] || (_[3] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [Oo, a.value.background_mode]
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
              class: le(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", DP, [
                l("i", {
                  class: le([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                _[13] || (_[13] = l("strong", null, "Archive Summary", -1))
              ]),
              u.value > 0 ? (C(), x("div", kP, [
                l("div", xP, [
                  l("strong", null, P(u.value), 1),
                  _[14] || (_[14] = H(" completed resources will be included "))
                ]),
                l("div", RP, P(d.value.availableTypes) + " of " + P(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (C(), x("div", IP, [
                _[15] || (_[15] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for archiving")
                ], -1)),
                l("div", MP, [
                  d.value.totalTypes === 0 ? (C(), x("span", PP, " No resource types found ")) : (C(), x("span", VP, P(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), jP = { key: 0 }, UP = { key: 1 }, HP = { class: "row" }, WP = { class: "col-md-6" }, KP = { class: "card" }, zP = { class: "card-body" }, qP = { class: "list-unstyled mb-0" }, YP = { key: 0 }, XP = { class: "col-md-6" }, GP = { class: "card" }, QP = { class: "card-body" }, JP = { key: 0 }, ZP = { key: 1 }, eV = { key: 2 }, tV = { class: "alert alert-danger" }, nV = { class: "d-flex gap-2 justify-content-end" }, sV = ["onClick"], oV = ["onClick"], rV = ["onClick"], iV = /* @__PURE__ */ Se({
  __name: "ArchiveCreationModal",
  setup(e, { expose: t }) {
    const n = j(null), s = j(null), o = (a) => {
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
      return C(), et(f, {
        ref_key: "archiveCreationModal",
        ref: n,
        size: "lg",
        "hide-footer": ""
      }, {
        title: fe(() => c[0] || (c[0] = [
          H("Archive Creation")
        ])),
        footer: fe(({ hide: u }) => [
          l("div", nV, [
            s.value ? s.value.success ? (C(), x(Ce, { key: 1 }, [
              s.value.processing_mode === "immediate" && s.value.download_url ? (C(), x("button", {
                key: 0,
                type: "button",
                class: "btn btn-sm btn-primary",
                onClick: r
              }, c[14] || (c[14] = [
                l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
                H("Download Now ")
              ]))) : me("", !0),
              l("button", {
                type: "button",
                class: "btn btn-sm btn-secondary",
                onClick: (d) => u(!0)
              }, c[15] || (c[15] = [
                l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
                H("Done ")
              ]), 8, oV)
            ], 64)) : (C(), x("button", {
              key: 2,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[16] || (c[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Close ")
            ]), 8, rV)) : (C(), x("button", {
              key: 0,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[13] || (c[13] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, sV))
          ])
        ]),
        default: fe(() => [
          s.value ? s.value.success ? (C(), x("div", UP, [
            c[10] || (c[10] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-check-circle text-success",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Created Successfully")
            ], -1)),
            l("div", HP, [
              l("div", WP, [
                l("div", KP, [
                  l("div", zP, [
                    c[6] || (c[6] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                    l("ul", qP, [
                      l("li", null, [
                        c[2] || (c[2] = l("strong", null, "Archive ID:", -1)),
                        H(" " + P(s.value.archive_id), 1)
                      ]),
                      l("li", null, [
                        c[3] || (c[3] = l("strong", null, "Resources:", -1)),
                        H(" " + P(s.value.total_resources), 1)
                      ]),
                      s.value.file_size ? (C(), x("li", YP, [
                        c[4] || (c[4] = l("strong", null, "Size:", -1)),
                        H(" " + P(i(s.value.file_size)), 1)
                      ])) : me("", !0),
                      l("li", null, [
                        c[5] || (c[5] = l("strong", null, "Mode:", -1)),
                        H(" " + P(s.value.processing_mode), 1)
                      ])
                    ])
                  ])
                ])
              ]),
              l("div", XP, [
                l("div", GP, [
                  l("div", QP, [
                    c[9] || (c[9] = l("h6", { class: "card-title" }, "Status", -1)),
                    s.value.processing_mode === "immediate" ? (C(), x("div", JP, c[7] || (c[7] = [
                      l("span", { class: "badge bg-success" }, [
                        l("i", { class: "fas fa-check me-1" }),
                        H("Ready for Download ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is ready for immediate download.", -1)
                    ]))) : (C(), x("div", ZP, c[8] || (c[8] = [
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
          ])) : (C(), x("div", eV, [
            c[12] || (c[12] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-exclamation-triangle text-danger",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Creation Failed")
            ], -1)),
            l("div", tV, [
              c[11] || (c[11] = l("strong", null, "Error:", -1)),
              H(" " + P(s.value.message), 1)
            ])
          ])) : (C(), x("div", jP, c[1] || (c[1] = [
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
}), aV = { class: "mb-3" }, lV = ["for"], cV = ["id", "value", "placeholder"], uV = {
  key: 0,
  class: "invalid-feedback"
}, dV = {
  key: 1,
  class: "form-text"
}, fV = /* @__PURE__ */ Se({
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
    return (s, o) => (C(), x("div", aV, [
      l("label", {
        for: s.inputId,
        class: "form-label"
      }, "Archive Name", 8, lV),
      l("input", {
        type: "text",
        class: le(["form-control", { "is-invalid": n.value }]),
        id: s.inputId,
        value: s.modelValue,
        onInput: o[0] || (o[0] = (r) => s.$emit("update:modelValue", r.target.value)),
        placeholder: s.placeholder,
        maxlength: "100"
      }, null, 42, cV),
      n.value ? (C(), x("div", uV, P(s.errorMessage), 1)) : me("", !0),
      s.showHelp ? (C(), x("div", dV, P(s.helpText), 1)) : me("", !0)
    ]));
  }
}), pV = { class: "mb-3" }, hV = {
  key: 0,
  class: "text-center text-muted py-3"
}, mV = {
  key: 1,
  class: "resource-type-list"
}, gV = {
  key: 0,
  class: "form-check mb-2"
}, vV = ["checked", "indeterminate"], _V = ["value", "checked", "id", "disabled"], yV = ["for"], bV = /* @__PURE__ */ Se({
  __name: "ResourceTypesSelector",
  props: {
    selectedTypes: {},
    availableTypes: {},
    showSelectAll: { type: Boolean, default: !0 }
  },
  emits: ["update:selectedTypes"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = j(null), r = $(() => {
      const c = n.availableTypes.filter((u) => u.isAvailable).map((u) => u.name);
      if (c.length === 0)
        return { checked: !1, indeterminate: !1 };
      const f = c.filter(
        (u) => n.selectedTypes.includes(u)
      );
      return f.length === 0 ? { checked: !1, indeterminate: !1 } : f.length === c.length ? { checked: !0, indeterminate: !1 } : { checked: !1, indeterminate: !0 };
    });
    Ct(r, (c) => {
      zs(() => {
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
    }), (c, f) => (C(), x("div", pV, [
      f[2] || (f[2] = l("label", { class: "form-label" }, "Resource Types", -1)),
      f[3] || (f[3] = l("div", { class: "form-text mb-2" }, [
        H(" Select which resource types to include "),
        l("br"),
        l("small", { class: "text-muted" }, "Note: No selection will download all available resources")
      ], -1)),
      c.availableTypes.length === 0 ? (C(), x("div", hV, f[0] || (f[0] = [
        l("i", { class: "fas fa-info-circle me-2" }, null, -1),
        H(" No resource types found ")
      ]))) : (C(), x("div", mV, [
        c.showSelectAll ? (C(), x("div", gV, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: r.value.checked,
            indeterminate: r.value.indeterminate,
            onChange: i,
            id: "select-all-types",
            ref_key: "selectAllCheckbox",
            ref: o
          }, null, 40, vV),
          f[1] || (f[1] = l("label", {
            class: "form-check-label fw-bold",
            for: "select-all-types"
          }, " Select All ", -1))
        ])) : me("", !0),
        (C(!0), x(Ce, null, Je(c.availableTypes, (u) => (C(), x("div", {
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
          }, null, 40, _V),
          l("label", {
            class: "form-check-label",
            for: `resource-${u.name}`
          }, P(u.name), 9, yV)
        ]))), 128))
      ]))
    ]));
  }
}), EV = { class: "mb-3" }, wV = { class: "bg-light p-3 rounded" }, AV = { key: 0 }, SV = { class: "small text-muted" }, CV = { key: 0 }, OV = { key: 1 }, TV = { class: "d-flex align-items-center mb-2" }, NV = { key: 0 }, DV = { class: "mb-2" }, kV = { class: "small text-muted" }, xV = { key: 1 }, RV = { class: "small text-muted" }, IV = { key: 0 }, MV = { key: 1 }, PV = { class: "d-flex gap-2 justify-content-end" }, VV = ["onClick"], LV = ["onClick", "disabled"], FV = /* @__PURE__ */ Se({
  __name: "StreamingArchiveModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {}
  },
  setup(e, { expose: t }) {
    const n = e, s = Jn(), o = wu(), r = en(), i = j(null), a = j({
      mrns: [],
      archive_name: "",
      resource_types: []
    }), c = $(() => {
      const b = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
      return (n.archiveType === "selected" ? s.mrns.filter((N) => n.selectedMrns.includes(N.mrn)) : s.mrns).forEach((N) => {
        N.status_summary ? Object.entries(N.status_summary.resource_type_statuses).forEach(([T, R]) => {
          b.add(T), R.is_archivable && g.add(T);
        }) : N.resources.forEach((T) => {
          T.status !== "Deleted" && (b.add(T.name), T.status === "Completed" && g.add(T.name));
        });
      }), Array.from(b).sort().map((N) => ({
        name: N,
        isAvailable: g.has(N)
      }));
    }), f = $(() => {
      const b = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `streaming_archive_${n.archiveType === "selected" ? "selected" : "all"}_${b}`;
    }), u = $(() => {
      const b = a.value.resource_types || [], g = n.archiveType === "selected" ? s.mrns.filter((N) => n.selectedMrns.includes(N.mrn)) : s.mrns;
      let O = 0;
      return g.forEach((N) => {
        N.status_summary ? Object.entries(N.status_summary.resource_type_statuses).forEach(([T, R]) => {
          b.length === 0 ? R.is_archivable && (O += R.completed_count) : b.includes(T) && R.is_archivable && (O += R.completed_count);
        }) : N.resources.forEach((T) => {
          T.status === "Completed" && (b.length === 0 || b.includes(T.name)) && (O += 1);
        });
      }), O;
    }), d = $(() => {
      const b = c.value.filter((O) => O.isAvailable), g = c.value.length;
      return {
        availableTypes: b.length,
        totalTypes: g
      };
    }), p = $(() => {
      if (!a.value.archive_name)
        return "";
      const b = a.value.archive_name.trim();
      return b.length === 0 || /^[a-zA-Z0-9_-]+$/.test(b) ? "" : "Archive name contains invalid characters. Only letters, numbers, hyphens, and underscores are allowed.";
    }), h = $(() => !(p.value || n.archiveType === "selected" && n.selectedMrns.length === 0)), m = (b) => {
      a.value.resource_types = b;
    }, v = async () => (a.value = {
      mrns: n.archiveType === "selected" ? n.selectedMrns : [],
      archive_name: "",
      resource_types: []
    }, await i.value?.show() ?? !1), _ = () => a.value.archive_name || f.value, y = async (b) => {
      if (!h.value) return;
      const g = _();
      try {
        o.startStreaming(g), r.showInfo(`Started streaming download: ${g}`), b(!0);
        const O = {
          ...a.value,
          mrns: n.archiveType === "selected" ? n.selectedMrns : []
        };
        O.archive_name || delete O.archive_name, O.resource_types?.length || delete O.resource_types;
        let N;
        n.archiveType === "selected" ? N = await $e.streamSelectedArchive(n.selectedMrns, O) : N = await $e.streamAllArchive(O);
        const T = new Blob([N.data]), R = window.URL.createObjectURL(T), I = document.createElement("a");
        I.href = R, I.download = `${g}.zip`, document.body.appendChild(I), I.click(), document.body.removeChild(I), window.URL.revokeObjectURL(R);
        const D = o.finishStreaming();
        r.showSuccess(`Download completed: ${g} (${D}s)`);
      } catch (O) {
        o.finishStreaming(), r.showError(`Streaming download failed: ${O.message}`);
      }
    };
    return t({ show: v }), (b, g) => {
      const O = Qe("b-modal");
      return C(), et(O, {
        ref_key: "streamingArchiveModal",
        ref: i,
        size: "lg"
      }, {
        title: fe(() => g[1] || (g[1] = [
          l("i", { class: "fas fa-download text-primary me-2" }, null, -1),
          H(" Archive Download ")
        ])),
        footer: fe(({ hide: N }) => [
          l("div", PV, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (T) => N(!1)
            }, g[9] || (g[9] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, VV),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (T) => y(N),
              disabled: !h.value || W(o).isStreamingActive
            }, [
              g[10] || (g[10] = l("i", { class: "fas fa-download fa-fw me-1" }, null, -1)),
              H(" " + P(W(o).isStreamingActive ? "Downloading..." : "Download"), 1)
            ], 8, LV)
          ])
        ]),
        default: fe(() => [
          l("div", null, [
            g[8] || (g[8] = l("div", { class: "alert alert-info mb-4" }, [
              l("i", { class: "fas fa-info-circle me-2" }),
              l("strong", null, "Download"),
              l("div", { class: "small" }, " Your archive will be generated and downloaded immediately without storing on the server. ")
            ], -1)),
            ue(fV, {
              modelValue: a.value.archive_name,
              "onUpdate:modelValue": g[0] || (g[0] = (N) => a.value.archive_name = N),
              placeholder: f.value,
              "show-help": !0,
              "help-text": "Archive will be downloaded immediately as [name].zip",
              "input-id": "streaming-archive-name",
              "error-message": p.value
            }, null, 8, ["modelValue", "placeholder", "error-message"]),
            ue(bV, {
              "selected-types": a.value.resource_types || [],
              "available-types": c.value,
              "onUpdate:selectedTypes": m,
              "show-select-all": !0
            }, null, 8, ["selected-types", "available-types"]),
            l("div", EV, [
              g[4] || (g[4] = l("label", { class: "form-label" }, "Selected Records", -1)),
              l("div", wV, [
                b.archiveType === "selected" ? (C(), x("div", AV, [
                  l("strong", null, P(b.selectedMrns.length), 1),
                  g[2] || (g[2] = H(" selected MRNs ")),
                  l("div", SV, [
                    H(P(b.selectedMrns.slice(0, 3).join(", ")) + " ", 1),
                    b.selectedMrns.length > 3 ? (C(), x("span", CV, " and " + P(b.selectedMrns.length - 3) + " more... ", 1)) : me("", !0)
                  ])
                ])) : (C(), x("div", OV, g[3] || (g[3] = [
                  l("strong", null, "All project records", -1),
                  l("div", { class: "small text-muted" }, "Complete project dataset", -1)
                ])))
              ])
            ]),
            l("div", {
              class: le(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", TV, [
                l("i", {
                  class: le([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                g[5] || (g[5] = l("strong", null, "Streaming Summary", -1))
              ]),
              u.value > 0 ? (C(), x("div", NV, [
                l("div", DV, [
                  l("strong", null, P(u.value), 1),
                  g[6] || (g[6] = H(" completed resources will be streamed "))
                ]),
                l("div", kV, P(d.value.availableTypes) + " of " + P(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (C(), x("div", xV, [
                g[7] || (g[7] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for streaming")
                ], -1)),
                l("div", RV, [
                  d.value.totalTypes === 0 ? (C(), x("span", IV, " No resource types found ")) : (C(), x("span", MV, P(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), BV = {
  key: 0,
  class: "alert alert-warning"
}, $V = { class: "table-responsive" }, jV = { class: "table table-sm align-middle" }, UV = { class: "d-flex justify-content-end" }, HV = ["onClick"], WV = /* @__PURE__ */ Se({
  __name: "BulkMrnErrorsModal",
  setup(e, { expose: t }) {
    const n = j(null), s = j([]), o = j(null);
    return t({ show: (i, a, c) => {
      s.value = i, o.value = {
        added: a ?? 0,
        failed: c ?? i.length
      }, n.value?.show();
    } }), (i, a) => {
      const c = Qe("b-modal");
      return C(), et(c, {
        ref_key: "errorsModal",
        ref: n,
        size: "lg"
      }, {
        title: fe(() => a[0] || (a[0] = [
          H("Some MRNs Could Not Be Added")
        ])),
        footer: fe(({ hide: f }) => [
          l("div", UV, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (u) => f(!0)
            }, a[3] || (a[3] = [
              l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
              H("Close ")
            ]), 8, HV)
          ])
        ]),
        default: fe(() => [
          o.value ? (C(), x("div", BV, [
            a[1] || (a[1] = l("strong", null, "Summary:", -1)),
            H(" " + P(o.value.added) + " added, " + P(o.value.failed) + " failed ", 1)
          ])) : me("", !0),
          l("div", $V, [
            l("table", jV, [
              a[2] || (a[2] = l("thead", null, [
                l("tr", null, [
                  l("th", { style: { width: "35%" } }, "MRN"),
                  l("th", null, "Error")
                ])
              ], -1)),
              l("tbody", null, [
                (C(!0), x(Ce, null, Je(s.value, (f, u) => (C(), x("tr", { key: u }, [
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
}), KV = /* @__PURE__ */ Jt(WV, [["__scopeId", "data-v-40a75814"]]), zV = { class: "card" }, qV = { class: "card-header d-flex justify-content-between align-items-center" }, YV = ["disabled"], XV = { class: "card-body" }, GV = {
  key: 0,
  class: "text-center"
}, QV = {
  key: 1,
  class: "row g-3"
}, JV = { class: "col-md-6" }, ZV = { class: "border rounded p-3 h-100" }, eL = { class: "row g-2" }, tL = { class: "col-6" }, nL = { class: "text-center" }, sL = { class: "h4 mb-1 text-primary" }, oL = { class: "col-6" }, rL = { class: "text-center" }, iL = { class: "h4 mb-1 text-info" }, aL = { class: "col-md-6" }, lL = { class: "border rounded p-3 h-100" }, cL = { class: "row g-2" }, uL = { class: "text-center" }, dL = { class: "text-muted" }, fL = { class: "col-12" }, pL = { class: "border rounded p-3" }, hL = { class: "mb-2" }, mL = { class: "d-flex justify-content-between align-items-center mb-1" }, gL = { class: "text-muted" }, vL = {
  class: "progress",
  style: { height: "8px" }
}, _L = ["aria-valuenow"], yL = {
  key: 0,
  class: "mb-2"
}, bL = { class: "d-flex justify-content-between align-items-center mb-1" }, EL = { class: "text-muted" }, wL = {
  class: "progress",
  style: { height: "6px" }
}, AL = ["aria-valuenow"], SL = { class: "mb-2" }, CL = { class: "d-flex justify-content-between align-items-center mb-1" }, OL = { class: "text-muted" }, TL = {
  class: "progress",
  style: { height: "12px" }
}, NL = ["title"], DL = ["title"], kL = ["title"], xL = ["title"], RL = ["title"], IL = {
  class: "d-flex justify-content-start mt-1",
  style: { "font-size": "0.75rem" }
}, ML = {
  key: 0,
  class: "me-3"
}, PL = {
  key: 1,
  class: "me-3"
}, VL = {
  key: 2,
  class: "me-3"
}, LL = {
  key: 3,
  class: "me-3"
}, FL = {
  key: 4,
  class: "me-3"
}, BL = {
  key: 2,
  class: "text-center text-muted"
}, $L = /* @__PURE__ */ Se({
  __name: "ProjectSummaryWidget",
  setup(e) {
    const t = Jn(), n = j(!1), s = $(() => t.projectSummary), o = $(() => s.value ? Object.values(s.value.overall_status_counts).reduce((p, h) => p + h, 0) : 0), r = $(() => {
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
    return Nt(() => {
      d();
    }), (p, h) => (C(), x("div", zV, [
      l("div", qV, [
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
        ], 8, YV)
      ]),
      l("div", XV, [
        n.value ? (C(), x("div", GV, h[1] || (h[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : s.value ? (C(), x("div", QV, [
          l("div", JV, [
            l("div", ZV, [
              h[4] || (h[4] = l("h6", { class: "text-muted mb-3" }, "Overall Statistics", -1)),
              l("div", eL, [
                l("div", tL, [
                  l("div", nL, [
                    l("div", sL, P(s.value.total_mrns), 1),
                    h[2] || (h[2] = l("small", { class: "text-muted" }, "Total MRNs", -1))
                  ])
                ]),
                l("div", oL, [
                  l("div", rL, [
                    l("div", iL, P(o.value), 1),
                    h[3] || (h[3] = l("small", { class: "text-muted" }, "Total Resources", -1))
                  ])
                ])
              ])
            ])
          ]),
          l("div", aL, [
            l("div", lL, [
              h[5] || (h[5] = l("h6", { class: "text-muted mb-3" }, "Resource Status", -1)),
              l("div", cL, [
                (C(!0), x(Ce, null, Je(s.value.overall_status_counts, (m, v) => (C(), x("div", {
                  key: v,
                  class: "col-6"
                }, [
                  l("div", uL, [
                    l("div", {
                      class: le(["h5 mb-1", f(v)])
                    }, P(m), 3),
                    l("small", dL, P(u(v)), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          l("div", fL, [
            l("div", pL, [
              h[14] || (h[14] = l("h6", { class: "text-muted mb-3" }, "Completion Progress", -1)),
              l("div", hL, [
                l("div", mL, [
                  h[6] || (h[6] = l("small", { class: "text-muted" }, "Overall Completion", -1)),
                  l("small", gL, P(i.value) + "%", 1)
                ]),
                l("div", vL, [
                  l("div", {
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: i.value + "%" }),
                    "aria-valuenow": i.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, _L)
                ])
              ]),
              a.value > 0 ? (C(), x("div", yL, [
                l("div", bL, [
                  h[7] || (h[7] = l("small", { class: "text-muted" }, "Error Rate", -1)),
                  l("small", EL, P(a.value) + "%", 1)
                ]),
                l("div", wL, [
                  l("div", {
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: a.value + "%" }),
                    "aria-valuenow": a.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, AL)
                ])
              ])) : me("", !0),
              l("div", SL, [
                l("div", CL, [
                  h[8] || (h[8] = l("small", { class: "text-muted" }, "Resource States Breakdown", -1)),
                  l("small", OL, P(r.value) + " active resources", 1)
                ]),
                l("div", TL, [
                  c.value.completed > 0 ? (C(), x("div", {
                    key: 0,
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: c.value.completed + "%" }),
                    title: `Completed: ${s.value?.overall_status_counts.completed || 0} (${c.value.completed}%)`
                  }, null, 12, NL)) : me("", !0),
                  c.value.fetching > 0 ? (C(), x("div", {
                    key: 1,
                    class: "progress-bar bg-info",
                    role: "progressbar",
                    style: Vt({ width: c.value.fetching + "%" }),
                    title: `Fetching: ${s.value?.overall_status_counts.fetching || 0} (${c.value.fetching}%)`
                  }, null, 12, DL)) : me("", !0),
                  c.value.pending > 0 ? (C(), x("div", {
                    key: 2,
                    class: "progress-bar bg-warning",
                    role: "progressbar",
                    style: Vt({ width: c.value.pending + "%" }),
                    title: `Pending: ${s.value?.overall_status_counts.pending || 0} (${c.value.pending}%)`
                  }, null, 12, kL)) : me("", !0),
                  c.value.failed > 0 ? (C(), x("div", {
                    key: 3,
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: c.value.failed + "%" }),
                    title: `Failed: ${s.value?.overall_status_counts.failed || 0} (${c.value.failed}%)`
                  }, null, 12, xL)) : me("", !0),
                  c.value.outdated > 0 ? (C(), x("div", {
                    key: 4,
                    class: "progress-bar bg-secondary",
                    role: "progressbar",
                    style: Vt({ width: c.value.outdated + "%" }),
                    title: `Outdated: ${s.value?.overall_status_counts.outdated || 0} (${c.value.outdated}%)`
                  }, null, 12, RL)) : me("", !0)
                ]),
                l("div", IL, [
                  c.value.completed > 0 ? (C(), x("div", ML, h[9] || (h[9] = [
                    l("span", { class: "badge bg-success me-1" }, "●", -1),
                    H("Completed ")
                  ]))) : me("", !0),
                  c.value.fetching > 0 ? (C(), x("div", PL, h[10] || (h[10] = [
                    l("span", { class: "badge bg-info me-1" }, "●", -1),
                    H("Fetching ")
                  ]))) : me("", !0),
                  c.value.pending > 0 ? (C(), x("div", VL, h[11] || (h[11] = [
                    l("span", { class: "badge bg-warning me-1" }, "●", -1),
                    H("Pending ")
                  ]))) : me("", !0),
                  c.value.failed > 0 ? (C(), x("div", LL, h[12] || (h[12] = [
                    l("span", { class: "badge bg-danger me-1" }, "●", -1),
                    H("Failed ")
                  ]))) : me("", !0),
                  c.value.outdated > 0 ? (C(), x("div", FL, h[13] || (h[13] = [
                    l("span", { class: "badge bg-secondary me-1" }, "●", -1),
                    H("Outdated ")
                  ]))) : me("", !0)
                ])
              ])
            ])
          ])
        ])) : (C(), x("div", BL, h[15] || (h[15] = [
          l("i", { class: "fas fa-info-circle fa-fw" }, null, -1),
          H(" No summary data available ")
        ])))
      ])
    ]));
  }
}), jL = /* @__PURE__ */ Jt($L, [["__scopeId", "data-v-437ee7dd"]]), w_ = /* @__PURE__ */ In("archive", () => {
  const e = to(), t = j(!1), n = j([]), s = j(!1), o = j(/* @__PURE__ */ new Set()), r = j({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100]
  }), i = j({
    status: "",
    searchQuery: "",
    processingMode: ""
  }), a = $(() => {
    let T = n.value;
    if (i.value.status && (T = T.filter((R) => R.status === i.value.status)), i.value.processingMode && (T = T.filter((R) => R.processing_mode === i.value.processingMode)), i.value.searchQuery) {
      const R = i.value.searchQuery.toLowerCase();
      T = T.filter(
        (I) => I.file_name.toLowerCase().includes(R) || I.archive_id.toLowerCase().includes(R)
      );
    }
    return T;
  }), c = $(() => {
    const T = (r.value.page - 1) * r.value.limit, R = T + r.value.limit, I = a.value;
    return r.value.total = I.length, r.value.totalPages = Math.ceil(I.length / r.value.limit), r.value.hasNext = r.value.page < r.value.totalPages, r.value.hasPrevious = r.value.page > 1, I.slice(T, R);
  }), f = $(
    () => n.value.filter(
      (T) => T.status === "pending" || T.status === "processing"
    )
  ), u = $(
    () => n.value.filter((T) => T.status === "completed")
  ), d = async () => {
    try {
      t.value = !0;
      const T = await $e.listArchives();
      T.data.success ? (n.value = T.data.archives || [], r.value.total = T.data.total_count || 0) : e.addError({
        message: T.data.message || "Failed to fetch archives",
        source: "ArchiveStore.fetchArchives",
        timestamp: /* @__PURE__ */ new Date()
      });
    } catch (T) {
      e.addError({
        message: `Failed to fetch archives: ${T}`,
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
    createArchiveSelected: async (T, R = {}) => {
      try {
        s.value = !0;
        const I = await $e.createArchiveSelected(T, R);
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
    createArchiveAll: async (T = {}) => {
      try {
        s.value = !0;
        const R = await $e.createArchiveAll(T);
        return R.data.success ? (await d(), R.data) : (e.addError({
          message: R.data.message || "Failed to create archive for all resources",
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), R.data);
      } catch (R) {
        return e.addError({
          message: `Failed to create archive for all resources: ${R}`,
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    downloadArchive: async (T) => {
      try {
        const R = await $e.downloadArchive(T), I = new Blob([R.data], { type: "application/zip" }), D = window.URL.createObjectURL(I), w = document.createElement("a"), A = n.value.find((F) => F.archive_id === T)?.file_name || `archive_${T}.zip`;
        w.href = D, w.download = A, document.body.appendChild(w), w.click(), document.body.removeChild(w), window.URL.revokeObjectURL(D);
      } catch (R) {
        e.addError({
          message: `Failed to download archive: ${R}`,
          source: "ArchiveStore.downloadArchive",
          timestamp: /* @__PURE__ */ new Date()
        });
      }
    },
    deleteArchive: async (T) => {
      const R = n.value.findIndex((D) => D.archive_id === T);
      if (R === -1)
        return e.addError({
          message: "Archive not found",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      const I = n.value[R];
      try {
        o.value.add(T), n.value.splice(R, 1);
        const D = await $e.deleteArchive(T);
        return D.data.success || (n.value.splice(R, 0, I), e.addError({
          message: D.data.message || "Failed to delete archive",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        })), D.data;
      } catch (D) {
        return n.value.splice(R, 0, I), e.addError({
          message: `Failed to delete archive: ${D}`,
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        o.value.delete(T);
      }
    },
    refreshArchiveStatus: async (T) => {
      await d();
    },
    setPage: (T) => {
      T >= 1 && T <= r.value.totalPages && (r.value.page = T);
    },
    setLimit: async (T) => {
      r.value.limit = T, r.value.page = 1, await d();
    },
    setFilter: (T, R) => {
      i.value[T] = R, r.value.page = 1;
    },
    clearFilters: () => {
      i.value.status = "", i.value.searchQuery = "", i.value.processingMode = "", r.value.page = 1;
    },
    isArchiveDeleting: (T) => o.value.has(T)
  };
}), UL = { class: "p-0" }, HL = {
  key: 0,
  class: "mb-4"
}, WL = {
  key: 1,
  class: "d-flex justify-content-between align-items-center mt-3"
}, KL = { class: "text-muted" }, zL = { class: "d-flex gap-2" }, qL = /* @__PURE__ */ Se({
  __name: "ResourcesPage",
  setup(e) {
    const t = Jn(), n = b_(), s = w_(), o = en(), r = j(null), i = j(null), a = j(null), c = j(null), f = j(null);
    Ct(() => n.archiveModalVisible, async (y) => {
      y && (await i.value?.show(), n.hideArchiveModal());
    }), Ct(() => n.streamingModalVisible, async (y) => {
      y && (await c.value?.show(), n.hideStreamingModal());
    });
    const u = $({
      get: () => t.pagination.page,
      set: (y) => t.setPage(y)
    }), d = $({
      get: () => t.pagination.limit,
      set: (y) => t.setLimit(y)
    }), p = $(() => t.pagination.total), h = $(() => t.pagination.perPageOptions), m = $(() => {
      const y = t.pagination.total, b = t.pagination.page, g = t.pagination.limit, O = y === 0 ? 0 : (b - 1) * g + 1, N = Math.min(b * g, y);
      return { start: O, end: N, total: y };
    }), v = async () => {
      if (r.value) {
        const y = await r.value.show();
        if (y)
          try {
            const b = await t.addMrnsFromString(y), g = b.added_count || 0, O = b.failed_count || 0;
            O === 0 ? o.showSuccess(`Added ${g} MRN(s).`) : f.value?.show(b.failures, g, O);
          } catch {
            o.showError("Failed to add MRNs");
          }
      }
    }, _ = async (y, b, g) => {
      try {
        let O;
        b === "selected" && g ? O = await s.createArchiveSelected(g, y) : O = await s.createArchiveAll(y), O && (a.value?.show(O), O.success ? o.showSuccess(O.message) : o.showError(O.message));
      } catch (O) {
        console.error("Failed to create archive:", O), o.showError("Failed to create archive");
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
      const g = Qe("b-pagination"), O = Qe("b-pagination-dropdown");
      return C(), x("div", UL, [
        W(n).showSummary ? (C(), x("div", HL, [
          ue(jL)
        ])) : me("", !0),
        ue(FI, { onAddMrn: v }),
        ue(jM, {
          items: W(t).mrns,
          loading: W(t).loading,
          "selected-mrns": W(t).selectedMrns,
          "all-selected": W(t).allSelected,
          indeterminate: W(t).indeterminate,
          onToggleSelectAll: W(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelectAll"]),
        W(t).pagination.total > 0 ? (C(), x("div", WL, [
          l("small", KL, " Showing " + P(m.value.start) + "-" + P(m.value.end) + " of " + P(m.value.total) + " MRNs ", 1),
          l("div", zL, [
            ue(g, {
              size: "sm",
              perPage: d.value,
              totalItems: p.value,
              modelValue: u.value,
              "onUpdate:modelValue": b[0] || (b[0] = (N) => u.value = N)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ue(O, {
              options: h.value,
              modelValue: d.value,
              "onUpdate:modelValue": b[1] || (b[1] = (N) => d.value = N)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : me("", !0),
        ue(QM, {
          ref_key: "addMrnModal",
          ref: r
        }, null, 512),
        ue(_P),
        (C(), et(Kr, { to: "body" }, [
          ue($P, {
            ref_key: "archiveOptionsModal",
            ref: i,
            "selected-mrns": W(n).archiveModalSelectedMrns,
            "archive-type": W(n).archiveModalType,
            onCreate: _
          }, null, 8, ["selected-mrns", "archive-type"]),
          ue(iV, {
            ref_key: "archiveCreationModal",
            ref: a
          }, null, 512),
          ue(FV, {
            ref_key: "streamingArchiveModal",
            ref: c,
            "selected-mrns": W(n).streamingModalSelectedMrns,
            "archive-type": W(n).streamingModalType
          }, null, 8, ["selected-mrns", "archive-type"]),
          ue(KV, {
            ref_key: "bulkMrnErrorsModal",
            ref: f
          }, null, 512)
        ]))
      ]);
    };
  }
}), A_ = /* @__PURE__ */ In("task", () => {
  const e = to(), t = j(!1), n = j([]), s = j(!1), o = j(/* @__PURE__ */ new Set()), r = j({
    page: 1,
    limit: 25,
    total: 0,
    total_pages: 0,
    has_next: !1,
    has_previous: !1
  }), i = j({
    status: "",
    task_type: "",
    search_query: ""
  }), a = $(() => {
    let w = n.value;
    if (i.value.status && (w = w.filter((k) => k.status === i.value.status)), i.value.task_type && (w = w.filter((k) => k.key === i.value.task_type)), i.value.search_query) {
      const k = i.value.search_query.toLowerCase();
      w = w.filter(
        (A) => A.id.toLowerCase().includes(k) || A.key.toLowerCase().includes(k)
      );
    }
    return w;
  }), c = $(() => {
    const w = (r.value.page - 1) * r.value.limit, k = w + r.value.limit;
    return a.value.slice(w, k);
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
  })), m = async () => {
    try {
      t.value = !0;
      const k = (await $e.listTasks(
        r.value.page,
        r.value.limit,
        i.value
      )).data;
      k.success ? (n.value = k.tasks || [], k.pagination && (r.value = { ...r.value, ...k.pagination }), g()) : e.addError({
        message: k.message || "Failed to fetch tasks",
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
      const k = (await $e.performTaskFullSync()).data;
      return k.success ? (await m(), k) : (e.addError({
        message: k.message || "Failed to perform full sync",
        source: "TaskStore.performFullSync",
        timestamp: /* @__PURE__ */ new Date()
      }), k);
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
      const k = (await $e.retryFailedResources()).data;
      return k.success ? (await m(), k) : (e.addError({
        message: k.message || "Failed to retry failed resources",
        source: "TaskStore.retryFailed",
        timestamp: /* @__PURE__ */ new Date()
      }), k);
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
      const A = (await $e.getTaskDetails(w)).data;
      return A.success || e.addError({
        message: A.message || "Failed to get task details",
        source: "TaskStore.getTaskDetails",
        timestamp: /* @__PURE__ */ new Date()
      }), A;
    } catch (k) {
      return e.addError({
        message: `Failed to get task details: ${k}`,
        source: "TaskStore.getTaskDetails",
        timestamp: /* @__PURE__ */ new Date()
      }), null;
    }
  }, b = async (w) => {
    const k = n.value.findIndex((F) => F.id === w);
    if (k === -1)
      return e.addError({
        message: "Task not found",
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1;
    const A = n.value[k];
    try {
      o.value.add(w), n.value.splice(k, 1);
      const F = await $e.deleteTask(w);
      return F.data.success ? !0 : (n.value.splice(k, 0, A), e.addError({
        message: F.data.message || "Failed to delete task",
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1);
    } catch (F) {
      return n.value.splice(k, 0, A), e.addError({
        message: `Failed to delete task: ${F}`,
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1;
    } finally {
      o.value.delete(w);
    }
  }, g = () => {
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
    performFullSync: v,
    retryFailed: _,
    getTaskDetails: y,
    deleteTask: b,
    refreshTaskStatus: async () => {
      await m();
    },
    updatePagination: g,
    setPage: (w) => {
      w >= 1 && w <= r.value.total_pages && (r.value.page = w);
    },
    setLimit: (w) => {
      r.value.limit = w, r.value.page = 1, g();
    },
    setFilter: (w, k) => {
      i.value[w] = k, r.value.page = 1, g();
    },
    clearFilters: () => {
      i.value.status = "", i.value.task_type = "", i.value.search_query = "", r.value.page = 1, g();
    },
    isTaskDeleting: (w) => o.value.has(w)
  };
}), YL = { class: "card" }, XL = { class: "card-header d-flex justify-content-between align-items-center" }, GL = ["disabled"], QL = { class: "card-body" }, JL = {
  key: 0,
  class: "text-center"
}, ZL = {
  key: 1,
  class: "row g-3"
}, eF = { class: "col-md-4" }, tF = { class: "d-flex align-items-center" }, nF = { class: "fw-bold" }, sF = { class: "col-md-4" }, oF = { class: "d-flex align-items-center" }, rF = { class: "fw-bold" }, iF = { class: "col-md-4" }, aF = { class: "d-flex align-items-center" }, lF = { class: "fw-bold" }, cF = { class: "col-12 mt-3" }, uF = { class: "border-top pt-3" }, dF = { class: "row g-3" }, fF = { class: "col-md-3" }, pF = { class: "d-flex align-items-center" }, hF = { class: "fw-bold" }, mF = { class: "col-md-3" }, gF = { class: "d-flex align-items-center" }, vF = { class: "fw-bold" }, _F = { class: "col-md-3" }, yF = { class: "d-flex align-items-center" }, bF = { class: "fw-bold" }, EF = { class: "col-md-3" }, wF = { class: "d-flex align-items-center" }, AF = { class: "fw-bold" }, SF = /* @__PURE__ */ Se({
  __name: "QueueStatusWidget",
  setup(e) {
    const t = A_(), n = j(!1), s = $(() => t.taskStatusCounts), o = $(() => {
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
    return Nt(async () => {
      await i();
    }), (a, c) => (C(), x("div", YL, [
      l("div", XL, [
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
        ], 8, GL)
      ]),
      l("div", QL, [
        n.value ? (C(), x("div", JL, c[1] || (c[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : (C(), x("div", ZL, [
          l("div", eF, [
            l("div", tF, [
              c[3] || (c[3] = l("i", { class: "fas fa-check-circle fa-fw text-success me-2" }, null, -1)),
              l("div", null, [
                l("div", nF, P(o.value), 1),
                c[2] || (c[2] = l("small", { class: "text-muted" }, "Queue Health", -1))
              ])
            ])
          ]),
          l("div", sF, [
            l("div", oF, [
              c[5] || (c[5] = l("i", { class: "fas fa-hourglass-half fa-fw text-warning me-2" }, null, -1)),
              l("div", null, [
                l("div", rF, P(s.value.pending), 1),
                c[4] || (c[4] = l("small", { class: "text-muted" }, "Pending Tasks", -1))
              ])
            ])
          ]),
          l("div", iF, [
            l("div", aF, [
              c[7] || (c[7] = l("i", { class: "fas fa-exclamation-triangle fa-fw text-danger me-2" }, null, -1)),
              l("div", null, [
                l("div", lF, P(s.value.failed), 1),
                c[6] || (c[6] = l("small", { class: "text-muted" }, "Failed Tasks", -1))
              ])
            ])
          ]),
          l("div", cF, [
            l("div", uF, [
              l("div", dF, [
                l("div", fF, [
                  l("div", pF, [
                    c[9] || (c[9] = l("i", { class: "fas fa-list fa-fw text-primary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", hF, P(s.value.total), 1),
                      c[8] || (c[8] = l("small", { class: "text-muted" }, "Total Tasks", -1))
                    ])
                  ])
                ]),
                l("div", mF, [
                  l("div", gF, [
                    c[11] || (c[11] = l("i", { class: "fas fa-play fa-fw text-info me-2" }, null, -1)),
                    l("div", null, [
                      l("div", vF, P(s.value.processing), 1),
                      c[10] || (c[10] = l("small", { class: "text-muted" }, "Processing", -1))
                    ])
                  ])
                ]),
                l("div", _F, [
                  l("div", yF, [
                    c[13] || (c[13] = l("i", { class: "fas fa-check fa-fw text-success me-2" }, null, -1)),
                    l("div", null, [
                      l("div", bF, P(s.value.completed), 1),
                      c[12] || (c[12] = l("small", { class: "text-muted" }, "Completed", -1))
                    ])
                  ])
                ]),
                l("div", EF, [
                  l("div", wF, [
                    c[15] || (c[15] = l("i", { class: "fas fa-percentage fa-fw text-secondary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", AF, P(r.value) + "%", 1),
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
}), CF = /* @__PURE__ */ Jt(SF, [["__scopeId", "data-v-e7530d59"]]), OF = { class: "p-3" }, TF = { class: "d-flex justify-content-between align-items-center mb-4" }, NF = { class: "d-flex gap-2" }, DF = ["disabled"], kF = ["disabled"], xF = ["disabled"], RF = { class: "mb-4" }, IF = { class: "card mb-4" }, MF = { class: "card-body" }, PF = { class: "row g-3" }, VF = { class: "col-md-3" }, LF = { class: "col-md-3" }, FF = { class: "col-md-3" }, BF = { class: "col-md-3" }, $F = ["value"], jF = {
  key: 0,
  class: "row mt-3"
}, UF = { class: "card" }, HF = { class: "card-body p-0" }, WF = {
  key: 0,
  class: "text-center py-5"
}, KF = {
  key: 1,
  class: "d-flex flex-column gap-2 py-5 align-items-center"
}, zF = { class: "" }, qF = { class: "text-muted mb-0" }, YF = { key: 2 }, XF = { class: "table-responsive" }, GF = { class: "table table-hover mb-0" }, QF = { class: "d-flex flex-column" }, JF = { class: "fw-semibold" }, ZF = {
  key: 0,
  class: "text-muted"
}, e4 = { class: "badge bg-secondary" }, t4 = ["title"], n4 = ["title"], s4 = { class: "text-end" }, o4 = { class: "d-flex gap-2" }, r4 = ["onClick"], i4 = ["disabled", "onClick"], a4 = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, l4 = { class: "text-muted" }, c4 = { class: "d-flex gap-2" }, u4 = { class: "modal-dialog modal-lg" }, d4 = { class: "modal-content" }, f4 = {
  key: 0,
  class: "modal-body"
}, p4 = { class: "row" }, h4 = { class: "col-md-6" }, m4 = { class: "row" }, g4 = { class: "col-sm-8" }, v4 = { class: "col-sm-8" }, _4 = { class: "col-sm-8" }, y4 = { class: "col-sm-8" }, b4 = { class: "col-sm-8" }, E4 = { class: "col-md-6" }, w4 = { class: "bg-light p-3 rounded small" }, A4 = {
  key: 0,
  class: "row mt-3"
}, S4 = { class: "col-12" }, C4 = { class: "bg-light p-3 rounded small" }, O4 = /* @__PURE__ */ Se({
  __name: "TasksPage",
  setup(e) {
    const t = A_(), n = en(), s = j(""), o = j(""), r = j(""), i = j(null), a = j(null), c = [10, 25, 50, 100], f = $({
      get: () => t.pagination.page,
      set: (k) => t.setPage(k)
    }), u = $({
      get: () => t.pagination.limit,
      set: (k) => t.setLimit(k)
    }), d = $(() => s.value || o.value || r.value), p = $(() => {
      const k = t.filteredTasks.length, A = (t.pagination.page - 1) * t.pagination.limit + 1, F = Math.min(A + t.pagination.limit - 1, k);
      return { start: A, end: F, total: k };
    }), h = async () => {
      try {
        await t.fetchTasks();
      } catch (k) {
        console.error("Failed to refresh tasks:", k), n.showError("Failed to refresh tasks");
      }
    }, m = async () => {
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
    }, g = () => {
      s.value = "", o.value = "", r.value = "", t.clearFilters();
    }, O = async (k) => {
      i.value = k, new window.bootstrap.Modal(a.value).show();
    }, N = async (k) => {
      await n.confirmAction(
        "Delete Task",
        `Are you sure you want to delete task ${k.id}? This action cannot be undone.`
      ) && await t.deleteTask(k.id) && n.showSuccess("Task deleted successfully.");
    }, T = (k) => {
      if (!k) return "Unknown";
      try {
        const A = new Date(k), de = (/* @__PURE__ */ new Date()).getTime() - A.getTime(), X = Math.floor(de / 6e4), re = Math.floor(X / 60), z = Math.floor(re / 24);
        return X < 60 ? `${X}m ago` : re < 24 ? `${re}h ago` : z < 7 ? `${z}d ago` : A.toLocaleDateString();
      } catch {
        return k;
      }
    }, R = (k) => {
      if (!k) return "Unknown";
      try {
        return new Date(k).toLocaleString();
      } catch {
        return k;
      }
    }, I = (k) => ({
      fhir_fetch: "FHIR Fetch",
      full_sync: "Full Sync",
      retry_failed: "Retry Failed",
      archive: "Archive",
      cleanup: "Cleanup"
    })[k] || k, D = (k) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[k] || "badge bg-secondary", w = (k) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[k] || "fas fa-question-circle";
    return Nt(async () => {
      await h();
    }), Uo(() => {
    }), (k, A) => {
      const F = Qe("b-pagination"), de = Qe("b-pagination-dropdown");
      return C(), x("div", OF, [
        l("div", TF, [
          A[9] || (A[9] = l("div", null, [
            l("h4", { class: "mb-1" }, "Task Management"),
            l("p", { class: "text-muted mb-0" }, "Monitor and manage background processing tasks")
          ], -1)),
          l("div", NF, [
            l("button", {
              class: "btn btn-warning btn-sm",
              onClick: m,
              disabled: W(t).operationLoading
            }, [
              l("i", {
                class: le(["fas fa-arrows-rotate fa-fw me-1", { "fa-spin": W(t).operationLoading }])
              }, null, 2),
              A[6] || (A[6] = H(" Full Sync "))
            ], 8, DF),
            l("button", {
              class: "btn btn-outline-warning btn-sm",
              onClick: v,
              disabled: W(t).operationLoading
            }, A[7] || (A[7] = [
              l("i", { class: "fas fa-exclamation-triangle fa-fw me-1" }, null, -1),
              H(" Retry Failed ")
            ]), 8, kF),
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: h,
              disabled: W(t).loading
            }, [
              l("i", {
                class: le(["fas fa-sync-alt fa-fw me-1", { "fa-spin": W(t).loading }])
              }, null, 2),
              A[8] || (A[8] = H(" Refresh "))
            ], 8, xF)
          ])
        ]),
        l("div", RF, [
          ue(CF)
        ]),
        l("div", IF, [
          l("div", MF, [
            l("div", PF, [
              l("div", VF, [
                A[10] || (A[10] = l("label", { class: "form-label" }, "Search Tasks", -1)),
                nt(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by ID or type...",
                  "onUpdate:modelValue": A[0] || (A[0] = (X) => s.value = X),
                  onInput: _
                }, null, 544), [
                  [Co, s.value]
                ])
              ]),
              l("div", LF, [
                A[12] || (A[12] = l("label", { class: "form-label" }, "Status", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[1] || (A[1] = (X) => o.value = X),
                  onChange: y
                }, A[11] || (A[11] = [
                  Bl('<option value="">All Statuses</option><option value="pending">Pending</option><option value="processing">Processing</option><option value="completed">Completed</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [us, o.value]
                ])
              ]),
              l("div", FF, [
                A[14] || (A[14] = l("label", { class: "form-label" }, "Task Type", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[2] || (A[2] = (X) => r.value = X),
                  onChange: b
                }, A[13] || (A[13] = [
                  Bl('<option value="">All Types</option><option value="fhir_fetch">FHIR Fetch</option><option value="full_sync">Full Sync</option><option value="retry_failed">Retry Failed</option><option value="archive">Archive</option><option value="cleanup">Cleanup</option>', 6)
                ]), 544), [
                  [us, r.value]
                ])
              ]),
              l("div", BF, [
                A[15] || (A[15] = l("label", { class: "form-label" }, "Per Page", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[3] || (A[3] = (X) => u.value = X)
                }, [
                  (C(), x(Ce, null, Je(c, (X) => l("option", {
                    key: X,
                    value: X
                  }, P(X), 9, $F)), 64))
                ], 512), [
                  [us, u.value]
                ])
              ])
            ]),
            d.value ? (C(), x("div", jF, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: g
                }, A[16] || (A[16] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  H("Clear Filters ")
                ]))
              ])
            ])) : me("", !0)
          ])
        ]),
        l("div", UF, [
          l("div", HF, [
            W(t).loading ? (C(), x("div", WF, A[17] || (A[17] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading tasks...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading tasks...", -1)
            ]))) : W(t).paginatedTasks.length === 0 ? (C(), x("div", KF, [
              A[18] || (A[18] = l("i", {
                class: "fas fa-tasks text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", zF, P(d.value ? "No tasks match your filters" : "No tasks found"), 1),
              l("span", qF, P(d.value ? "Try adjusting your search criteria." : "Tasks will appear here when created."), 1)
            ])) : (C(), x("div", YF, [
              l("div", XF, [
                l("table", GF, [
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
                    (C(!0), x(Ce, null, Je(W(t).paginatedTasks, (X) => (C(), x("tr", {
                      key: X.id
                    }, [
                      l("td", null, [
                        l("div", QF, [
                          l("span", JF, P(X.id), 1),
                          X.params.mrn ? (C(), x("small", ZF, "MRN: " + P(X.params.mrn), 1)) : me("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: le(D(X.status))
                        }, [
                          l("i", {
                            class: le([w(X.status), "me-1"])
                          }, null, 2),
                          H(" " + P(X.status.charAt(0).toUpperCase() + X.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", e4, P(I(X.key)), 1)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: R(X.created_at)
                        }, P(T(X.created_at)), 9, t4)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: R(X.updated_at)
                        }, P(T(X.updated_at)), 9, n4)
                      ]),
                      l("td", s4, [
                        l("div", o4, [
                          l("button", {
                            class: "btn btn-outline-info btn-sm btn-icon",
                            onClick: (re) => O(X),
                            title: "View Details"
                          }, A[19] || (A[19] = [
                            l("i", { class: "fas fa-info-circle" }, null, -1)
                          ]), 8, r4),
                          l("button", {
                            class: "btn btn-outline-danger btn-sm btn-icon",
                            title: "Delete Task",
                            disabled: X.status === "processing" || W(t).isTaskDeleting(X.id),
                            onClick: (re) => N(X)
                          }, [
                            l("i", {
                              class: le(["fas", W(t).isTaskDeleting(X.id) ? "fa-spinner fa-spin" : "fa-trash-can"])
                            }, null, 2)
                          ], 8, i4)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        W(t).filteredTasks.length > 0 ? (C(), x("div", a4, [
          l("small", l4, " Showing " + P(p.value.start) + "-" + P(p.value.end) + " of " + P(p.value.total) + " tasks ", 1),
          l("div", c4, [
            ue(F, {
              size: "sm",
              perPage: u.value,
              totalItems: W(t).filteredTasks.length,
              modelValue: f.value,
              "onUpdate:modelValue": A[4] || (A[4] = (X) => f.value = X)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ue(de, {
              options: c,
              modelValue: u.value,
              "onUpdate:modelValue": A[5] || (A[5] = (X) => u.value = X)
            }, null, 8, ["modelValue"])
          ])
        ])) : me("", !0),
        l("div", {
          class: "modal fade",
          id: "taskDetailsModal",
          tabindex: "-1",
          ref_key: "taskDetailsModal",
          ref: a
        }, [
          l("div", u4, [
            l("div", d4, [
              A[29] || (A[29] = l("div", { class: "modal-header" }, [
                l("h5", { class: "modal-title" }, "Task Details"),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "data-bs-dismiss": "modal"
                })
              ], -1)),
              i.value ? (C(), x("div", f4, [
                l("div", p4, [
                  l("div", h4, [
                    A[26] || (A[26] = l("h6", null, "Basic Information", -1)),
                    l("dl", m4, [
                      A[21] || (A[21] = l("dt", { class: "col-sm-4" }, "ID:", -1)),
                      l("dd", g4, [
                        l("code", null, P(i.value.id), 1)
                      ]),
                      A[22] || (A[22] = l("dt", { class: "col-sm-4" }, "Type:", -1)),
                      l("dd", v4, P(I(i.value.key)), 1),
                      A[23] || (A[23] = l("dt", { class: "col-sm-4" }, "Status:", -1)),
                      l("dd", _4, [
                        l("span", {
                          class: le(D(i.value.status))
                        }, P(i.value.status.charAt(0).toUpperCase() + i.value.status.slice(1)), 3)
                      ]),
                      A[24] || (A[24] = l("dt", { class: "col-sm-4" }, "Created:", -1)),
                      l("dd", y4, P(R(i.value.created_at)), 1),
                      A[25] || (A[25] = l("dt", { class: "col-sm-4" }, "Updated:", -1)),
                      l("dd", b4, P(R(i.value.updated_at)), 1)
                    ])
                  ]),
                  l("div", E4, [
                    A[27] || (A[27] = l("h6", null, "Parameters", -1)),
                    l("pre", w4, P(JSON.stringify(i.value.params, null, 2)), 1)
                  ])
                ]),
                Object.keys(i.value.metadata).length > 0 ? (C(), x("div", A4, [
                  l("div", S4, [
                    A[28] || (A[28] = l("h6", null, "Metadata", -1)),
                    l("pre", C4, P(JSON.stringify(i.value.metadata, null, 2)), 1)
                  ])
                ])) : me("", !0)
              ])) : me("", !0),
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
}), T4 = { key: 0 }, N4 = { class: "card" }, D4 = { class: "card-body" }, k4 = { class: "list-unstyled mb-0" }, x4 = {
  key: 1,
  class: "text-center mt-3"
}, R4 = { class: "d-flex gap-2 justify-content-end" }, I4 = ["onClick", "disabled"], M4 = ["onClick", "disabled"], P4 = /* @__PURE__ */ Se({
  __name: "ArchiveDeleteModal",
  emits: ["deleted"],
  setup(e, { expose: t, emit: n }) {
    const s = n, o = j(null), r = j(null), i = j(!1), a = async (h) => (r.value = h, i.value = !1, await o.value?.show() ?? !1), c = async (h) => {
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
      const m = 1024, v = ["Bytes", "KB", "MB", "GB"], _ = Math.floor(Math.log(h) / Math.log(m));
      return parseFloat((h / Math.pow(m, _)).toFixed(2)) + " " + v[_];
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
      const v = Qe("b-modal");
      return C(), et(v, {
        ref_key: "deleteModal",
        ref: o
      }, {
        title: fe(() => m[0] || (m[0] = [
          H("Delete Archive")
        ])),
        footer: fe(({ hide: _ }) => [
          l("div", R4, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (y) => _(!1),
              disabled: i.value
            }, m[12] || (m[12] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              H("Cancel ")
            ]), 8, I4),
            l("button", {
              class: "btn btn-sm btn-danger",
              type: "button",
              onClick: (y) => c(_),
              disabled: i.value
            }, [
              m[13] || (m[13] = l("i", { class: "fas fa-trash fa-fw me-1" }, null, -1)),
              H(" " + P(i.value ? "Deleting..." : "Delete Archive"), 1)
            ], 8, M4)
          ])
        ]),
        default: fe(() => [
          r.value ? (C(), x("div", T4, [
            m[8] || (m[8] = l("div", { class: "alert alert-warning" }, [
              l("i", { class: "fas fa-exclamation-triangle me-2" }),
              l("strong", null, "Warning:"),
              H(" This action cannot be undone. ")
            ], -1)),
            m[9] || (m[9] = l("p", null, "Are you sure you want to delete this archive?", -1)),
            l("div", N4, [
              l("div", D4, [
                m[7] || (m[7] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                l("ul", k4, [
                  l("li", null, [
                    m[1] || (m[1] = l("strong", null, "Archive ID:", -1)),
                    H(" " + P(r.value.archive_id), 1)
                  ]),
                  l("li", null, [
                    m[2] || (m[2] = l("strong", null, "File Name:", -1)),
                    H(" " + P(r.value.file_name), 1)
                  ]),
                  l("li", null, [
                    m[3] || (m[3] = l("strong", null, "Created:", -1)),
                    H(" " + P(f(r.value.created_at)), 1)
                  ]),
                  l("li", null, [
                    m[4] || (m[4] = l("strong", null, "Size:", -1)),
                    H(" " + P(u(r.value.file_size)), 1)
                  ]),
                  l("li", null, [
                    m[5] || (m[5] = l("strong", null, "Resources:", -1)),
                    H(" " + P(r.value.total_resources), 1)
                  ]),
                  l("li", null, [
                    m[6] || (m[6] = l("strong", null, "Status:", -1)),
                    l("span", {
                      class: le(d(r.value.status))
                    }, [
                      l("i", {
                        class: le([p(r.value.status), "me-1"])
                      }, null, 2),
                      H(" " + P(r.value.status.charAt(0).toUpperCase() + r.value.status.slice(1)), 1)
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
          ])) : me("", !0),
          i.value ? (C(), x("div", x4, m[11] || (m[11] = [
            l("div", {
              class: "spinner-border spinner-border-sm text-danger me-2",
              role: "status"
            }, [
              l("span", { class: "visually-hidden" }, "Deleting...")
            ], -1),
            l("span", null, "Deleting archive...", -1)
          ]))) : me("", !0)
        ]),
        _: 1
      }, 512);
    };
  }
}), V4 = { class: "p-3" }, L4 = { class: "d-flex justify-content-between align-items-center mb-4" }, F4 = ["disabled"], B4 = { class: "card mb-4" }, $4 = { class: "card-body" }, j4 = { class: "row g-3" }, U4 = { class: "col-md-3" }, H4 = { class: "col-md-3" }, W4 = { class: "col-md-3" }, K4 = { class: "col-md-3" }, z4 = ["value"], q4 = {
  key: 0,
  class: "row mt-3"
}, Y4 = { class: "row mb-4" }, X4 = { class: "col-md-3" }, G4 = { class: "card text-center" }, Q4 = { class: "card-body py-3" }, J4 = { class: "card-title text-primary mb-1" }, Z4 = { class: "col-md-3" }, e3 = { class: "card text-center" }, t3 = { class: "card-body py-3" }, n3 = { class: "card-title text-success mb-1" }, s3 = { class: "col-md-3" }, o3 = { class: "card text-center" }, r3 = { class: "card-body py-3" }, i3 = { class: "card-title text-warning mb-1" }, a3 = { class: "col-md-3" }, l3 = { class: "card text-center" }, c3 = { class: "card-body py-3" }, u3 = { class: "card-title text-info mb-1" }, d3 = { class: "card" }, f3 = { class: "card-body p-0" }, p3 = {
  key: 0,
  class: "text-center py-5"
}, h3 = {
  key: 1,
  class: "text-center py-5"
}, m3 = { class: "mt-3 mb-2" }, g3 = { class: "text-muted mb-0" }, v3 = { key: 2 }, _3 = { class: "table-responsive" }, y3 = { class: "table table-hover mb-0" }, b3 = { class: "d-flex flex-column" }, E3 = { class: "fw-semibold" }, w3 = { class: "text-muted" }, A3 = ["title"], S3 = { class: "d-flex flex-column" }, C3 = {
  key: 0,
  class: "text-danger"
}, O3 = { class: "text-end" }, T3 = { class: "btn-group btn-group-sm" }, N3 = ["onClick"], D3 = ["onClick", "disabled"], k3 = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, x3 = { class: "text-muted" }, R3 = { class: "d-flex gap-2" }, I3 = /* @__PURE__ */ Se({
  __name: "ArchivesPage",
  setup(e) {
    const t = w_(), n = en(), s = j(null), o = j(""), r = j(""), i = j(""), a = $({
      get: () => t.pagination.page,
      set: (D) => t.setPage(D)
    }), c = $({
      get: () => t.pagination.limit,
      set: (D) => t.setLimit(D)
    });
    Nt(async () => {
      await p();
    });
    const f = $(() => o.value || r.value || i.value), u = $(() => {
      const D = t.completedArchives.reduce((w, k) => w + (k.file_size || 0), 0);
      return O(D);
    }), d = $(() => {
      const D = t.filteredArchives.length, w = (t.pagination.page - 1) * t.pagination.limit + 1, k = Math.min(w + t.pagination.limit - 1, D);
      return { start: w, end: k, total: D };
    }), p = async () => {
      try {
        await t.fetchArchives(), n.showSuccess("Archives refreshed successfully");
      } catch (D) {
        console.error("Failed to refresh archives:", D), n.showError("Failed to refresh archives");
      }
    }, h = () => {
      t.setFilter("searchQuery", o.value);
    }, m = () => {
      t.setFilter("status", r.value);
    }, v = () => {
      t.setFilter("processingMode", i.value);
    }, _ = () => {
      o.value = "", r.value = "", i.value = "", t.clearFilters();
    }, y = async (D) => {
      try {
        await t.downloadArchive(D.archive_id), n.showSuccess(`Archive ${D.file_name} downloaded successfully`);
      } catch (w) {
        console.error("Failed to download archive:", w), n.showError(`Failed to download archive ${D.file_name}`);
      }
    }, b = async (D) => {
      await s.value?.show(D);
    }, g = async (D) => {
      try {
        await t.deleteArchive(D), n.showSuccess("Archive deleted successfully");
      } catch (w) {
        console.error("Failed to delete archive:", w), n.showError("Failed to delete archive");
      }
    }, O = (D) => {
      if (D === 0) return "0 Bytes";
      const w = 1024, k = ["Bytes", "KB", "MB", "GB"], A = Math.floor(Math.log(D) / Math.log(w));
      return parseFloat((D / Math.pow(w, A)).toFixed(2)) + " " + k[A];
    }, N = (D) => {
      if (!D) return "Unknown";
      try {
        const w = new Date(D), A = (/* @__PURE__ */ new Date()).getTime() - w.getTime(), F = Math.floor(A / 6e4), de = Math.floor(F / 60), X = Math.floor(de / 24);
        return F < 60 ? `${F}m ago` : de < 24 ? `${de}h ago` : X < 7 ? `${X}d ago` : w.toLocaleDateString();
      } catch {
        return D;
      }
    }, T = (D) => {
      if (!D) return "Unknown";
      try {
        return new Date(D).toLocaleString();
      } catch {
        return D;
      }
    }, R = (D) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[D] || "badge bg-secondary", I = (D) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[D] || "fas fa-question-circle";
    return Ct(() => t.filters, (D) => {
      o.value = D.searchQuery, r.value = D.status, i.value = D.processingMode;
    }, { deep: !0 }), Uo(() => {
    }), (D, w) => {
      const k = Qe("b-pagination"), A = Qe("b-pagination-dropdown");
      return C(), x("div", V4, [
        l("div", L4, [
          w[7] || (w[7] = l("div", null, [
            l("h4", { class: "mb-1" }, "Archive Management"),
            l("p", { class: "text-muted mb-0" }, "Manage and download your FHIR resource archives")
          ], -1)),
          l("div", null, [
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: p,
              disabled: W(t).loading
            }, [
              l("i", {
                class: le(["fas fa-sync-alt fa-fw me-1", { "fa-spin": W(t).loading }])
              }, null, 2),
              w[6] || (w[6] = H(" Refresh "))
            ], 8, F4)
          ])
        ]),
        l("div", B4, [
          l("div", $4, [
            l("div", j4, [
              l("div", U4, [
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
              l("div", H4, [
                w[10] || (w[10] = l("label", { class: "form-label" }, "Status", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[1] || (w[1] = (F) => r.value = F),
                  onChange: m
                }, w[9] || (w[9] = [
                  Bl('<option value="">All Statuses</option><option value="completed">Completed</option><option value="processing">Processing</option><option value="pending">Pending</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [us, r.value]
                ])
              ]),
              l("div", W4, [
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
                  [us, i.value]
                ])
              ]),
              l("div", K4, [
                w[13] || (w[13] = l("label", { class: "form-label" }, "Per Page", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[3] || (w[3] = (F) => c.value = F)
                }, [
                  (C(!0), x(Ce, null, Je(W(t).pagination.perPageOptions, (F) => (C(), x("option", {
                    key: F,
                    value: F
                  }, P(F), 9, z4))), 128))
                ], 512), [
                  [us, c.value]
                ])
              ])
            ]),
            f.value ? (C(), x("div", q4, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: _
                }, w[14] || (w[14] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  H("Clear Filters ")
                ]))
              ])
            ])) : me("", !0)
          ])
        ]),
        l("div", Y4, [
          l("div", X4, [
            l("div", G4, [
              l("div", Q4, [
                l("h5", J4, P(W(t).archives.length), 1),
                w[15] || (w[15] = l("p", { class: "card-text small text-muted mb-0" }, "Total Archives", -1))
              ])
            ])
          ]),
          l("div", Z4, [
            l("div", e3, [
              l("div", t3, [
                l("h5", n3, P(W(t).completedArchives.length), 1),
                w[16] || (w[16] = l("p", { class: "card-text small text-muted mb-0" }, "Completed", -1))
              ])
            ])
          ]),
          l("div", s3, [
            l("div", o3, [
              l("div", r3, [
                l("h5", i3, P(W(t).pendingArchives.length), 1),
                w[17] || (w[17] = l("p", { class: "card-text small text-muted mb-0" }, "In Progress", -1))
              ])
            ])
          ]),
          l("div", a3, [
            l("div", l3, [
              l("div", c3, [
                l("h5", u3, P(u.value), 1),
                w[18] || (w[18] = l("p", { class: "card-text small text-muted mb-0" }, "Total Size", -1))
              ])
            ])
          ])
        ]),
        l("div", d3, [
          l("div", f3, [
            W(t).loading ? (C(), x("div", p3, w[19] || (w[19] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading archives...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading archives...", -1)
            ]))) : W(t).paginatedArchives.length === 0 ? (C(), x("div", h3, [
              w[20] || (w[20] = l("i", {
                class: "fas fa-archive text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", m3, P(f.value ? "No archives match your filters" : "No archives found"), 1),
              l("p", g3, P(f.value ? "Try adjusting your search criteria." : "Archives will appear here when created."), 1)
            ])) : (C(), x("div", v3, [
              l("div", _3, [
                l("table", y3, [
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
                    (C(!0), x(Ce, null, Je(W(t).paginatedArchives, (F) => (C(), x("tr", {
                      key: F.archive_id
                    }, [
                      l("td", null, [
                        l("div", b3, [
                          l("span", E3, P(F.file_name), 1),
                          l("small", w3, P(F.archive_id), 1)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: le(R(F.status))
                        }, [
                          l("i", {
                            class: le([I(F.status), "me-1"])
                          }, null, 2),
                          H(" " + P(F.status.charAt(0).toUpperCase() + F.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: T(F.created_at)
                        }, P(N(F.created_at)), 9, A3)
                      ]),
                      l("td", null, P(O(F.file_size)), 1),
                      l("td", null, [
                        l("div", S3, [
                          l("span", null, P(F.total_resources), 1),
                          F.failed_files > 0 ? (C(), x("small", C3, P(F.failed_files) + " failed ", 1)) : me("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: le(["badge", F.processing_mode === "immediate" ? "bg-info" : "bg-secondary"])
                        }, P(F.processing_mode), 3)
                      ]),
                      l("td", O3, [
                        l("div", T3, [
                          F.status === "completed" && F.download_url ? (C(), x("button", {
                            key: 0,
                            class: "btn btn-outline-primary",
                            onClick: (de) => y(F),
                            title: "Download Archive"
                          }, w[21] || (w[21] = [
                            l("i", { class: "fas fa-download" }, null, -1)
                          ]), 8, N3)) : me("", !0),
                          l("button", {
                            class: "btn btn-outline-danger",
                            onClick: (de) => b(F),
                            title: "Delete Archive",
                            disabled: W(t).isArchiveDeleting(F.archive_id)
                          }, [
                            l("i", {
                              class: le(["fas", W(t).isArchiveDeleting(F.archive_id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, D3)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        W(t).filteredArchives.length > 0 ? (C(), x("div", k3, [
          l("small", x3, " Showing " + P(d.value.start) + "-" + P(d.value.end) + " of " + P(d.value.total) + " archives ", 1),
          l("div", R3, [
            ue(k, {
              size: "sm",
              perPage: c.value,
              totalItems: W(t).filteredArchives.length,
              modelValue: a.value,
              "onUpdate:modelValue": w[4] || (w[4] = (F) => a.value = F)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ue(A, {
              options: W(t).pagination.perPageOptions,
              modelValue: c.value,
              "onUpdate:modelValue": w[5] || (w[5] = (F) => c.value = F)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : me("", !0),
        (C(), et(Kr, { to: "body" }, [
          ue(P4, {
            ref_key: "deleteModal",
            ref: s,
            onDeleted: g
          }, null, 512)
        ]))
      ]);
    };
  }
}), M3 = {}, P3 = { class: "error-wrapper" }, V3 = { class: "mt-5" };
function L3(e, t) {
  const n = Qe("router-link");
  return C(), x("div", P3, [
    De(e.$slots, "title", {}, () => [
      t[0] || (t[0] = l("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    De(e.$slots, "description", {}, () => [
      t[1] || (t[1] = l("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    De(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = l("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    l("div", V3, [
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
const F3 = /* @__PURE__ */ Jt(M3, [["render", L3], ["__scopeId", "data-v-d4f8fed2"]]), B3 = { class: "card shadow-sm" }, $3 = { class: "card-body" }, j3 = { class: "text-center" }, U3 = {
  key: 0,
  class: "lead text-danger"
}, H3 = {
  key: 1,
  class: "text-muted"
}, W3 = /* @__PURE__ */ Se({
  __name: "ErrorPage",
  setup(e) {
    const n = Fg().query.message;
    return (s, o) => {
      const r = Qe("router-link");
      return C(), x("div", B3, [
        l("div", $3, [
          l("div", j3, [
            o[1] || (o[1] = l("h1", { class: "display-4" }, "Something went wrong", -1)),
            W(n) ? (C(), x("p", U3, "Error: " + P(W(n)), 1)) : (C(), x("p", H3, "We're sorry for the inconvenience. Please try again later.")),
            ue(r, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: fe(() => o[0] || (o[0] = [
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
}), K3 = [
  {
    path: "/",
    component: QA,
    children: [
      { path: "", name: "home", component: $2 },
      { path: "setup", name: "setup", component: kI },
      { path: "resources", name: "resources", component: qL },
      { path: "tasks", name: "tasks", component: O4 },
      { path: "archives", name: "archives", component: I3 },
      { path: "error", name: "error", component: W3 },
      { path: "/:pathMatch(.*)*", component: F3 }
    ]
  }
];
let bi;
const qp = () => bi || (bi = jA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: Qw(),
  routes: K3
}), bi), Eo = {
  HasValidToken: "has_valid_token",
  NoFhirSystem: "no_fhir_system",
  NoValidTokens: "no_valid_tokens"
}, Au = /* @__PURE__ */ In("fhirAccess", () => {
  const e = to(), t = j(null), n = j(null), s = j(!1), o = j(null), r = j(null), i = j(Eo.HasValidToken), a = j(null);
  let c = null;
  const f = $(() => !!t.value?.has_any_valid_token), u = $(() => i.value !== Eo.HasValidToken), d = $(() => n.value?.level ?? (f.value ? "info" : "warning")), p = $(() => n.value?.message ?? ""), h = $(() => i.value === Eo.NoFhirSystem), m = async () => {
    try {
      s.value = !0;
      const g = (await $e.getFhirAccessStatus()).data;
      t.value = g.status, n.value = g.banner, i.value = g.state ?? Eo.HasValidToken, o.value = g.standalone_launch_url ?? null, a.value = g.setup_route ?? null, r.value = /* @__PURE__ */ new Date();
    } catch (b) {
      e.addError(b, "fhirAccessStore.fetchStatus");
    } finally {
      s.value = !1;
    }
  }, v = async () => {
    await m();
  }, _ = (b = 6e4) => {
    y(), c = window.setInterval(() => {
      m();
    }, b);
  }, y = () => {
    c !== null && (clearInterval(c), c = null);
  };
  return {
    // state
    status: t,
    banner: n,
    loading: s,
    lastChecked: r,
    launchUrl: o,
    state: i,
    setupRoute: a,
    // computed
    hasValidToken: f,
    shouldWarn: u,
    level: d,
    message: p,
    isNoFhirSystem: h,
    // actions
    fetchStatus: m,
    refreshNow: v,
    startPolling: _,
    stopPolling: y
  };
}), z3 = {
  key: 0,
  class: "alert alert-danger"
}, q3 = { style: { "word-break": "break-all" } }, Y3 = /* @__PURE__ */ Se({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = j(), n = to(), { errors: s } = Gn(n), o = (r) => JSON.stringify(r);
    return ga(async () => {
      if (s.value?.length === 0) return;
      const r = t.value;
      r && (await r.show(), n.resetErrors());
    }), (r, i) => {
      const a = Qe("b-modal");
      return C(), et(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: fe(() => i[0] || (i[0] = [
          l("span", null, "Error", -1)
        ])),
        default: fe(() => [
          (C(!0), x(Ce, null, Je(W(s), (c, f) => (C(), x(Ce, { key: f }, [
            c ? (C(), x("div", z3, [
              l("div", q3, P(o(c)), 1)
            ])) : me("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), X3 = {
  key: 0,
  class: "text-muted",
  style: { "margin-left": "8px" }
}, G3 = ["disabled"], Q3 = /* @__PURE__ */ Se({
  __name: "TokenStatusBanner",
  setup(e) {
    const t = Au(), { banner: n, status: s, shouldWarn: o, message: r, loading: i, lastChecked: a, state: c } = Gn(t);
    return (f, u) => W(n) ? (C(), x("div", {
      key: 0,
      class: le(["alert", W(o) ? "alert-warning" : "alert-info"]),
      role: "alert",
      style: { "margin-bottom": "10px" }
    }, [
      l("i", {
        class: le(["fas", W(o) ? "fa-exclamation-triangle" : "fa-info-circle"]),
        style: { "margin-right": "8px" }
      }, null, 2),
      l("span", null, P(W(r)), 1),
      W(s) && W(c) !== W(Eo).NoFhirSystem ? (C(), x("span", X3, [
        H(" (Valid: " + P(W(s).valid_count) + " / " + P(W(s).total_users_with_token) + " ", 1),
        W(s).fhir_system_name ? (C(), x(Ce, { key: 0 }, [
          H(" • System: " + P(W(s).fhir_system_name), 1)
        ], 64)) : me("", !0),
        W(a) ? (C(), x(Ce, { key: 1 }, [
          H(" • Updated: " + P(W(a).toLocaleTimeString()), 1)
        ], 64)) : me("", !0),
        u[1] || (u[1] = H(") "))
      ])) : me("", !0),
      l("button", {
        class: "btn btn-xs btn-default",
        style: { "margin-left": "10px" },
        disabled: W(i),
        onClick: u[0] || (u[0] = (d) => f.$emit("refresh")),
        title: "Refresh token status"
      }, [
        l("i", {
          class: le(W(i) ? "fas fa-spinner fa-spin" : "fas fa-rotate")
        }, null, 2)
      ], 8, G3)
    ], 2)) : me("", !0);
  }
}), J3 = /* @__PURE__ */ Jt(Q3, [["__scopeId", "data-v-bcc17720"]]), Z3 = {
  key: 0,
  class: "alert alert-warning",
  role: "alert",
  style: { "margin-bottom": "12px" }
}, eB = { class: "d-flex align-items-end justify-content-start mt-2" }, tB = ["href"], nB = {
  key: 1,
  class: "alert alert-info",
  role: "alert",
  style: { "margin-bottom": "12px" }
}, sB = { class: "d-flex align-items-end justify-content-center mt-2" }, oB = ["href"], rB = /* @__PURE__ */ Se({
  __name: "StandaloneLaunchHelp",
  setup(e) {
    const t = Au(), { shouldWarn: n, launchUrl: s, status: o, state: r, setupRoute: i } = Gn(t);
    return (a, c) => W(r) === W(Eo).NoFhirSystem ? (C(), x("div", Z3, [
      c[1] || (c[1] = l("i", {
        class: "fas fa-exclamation-triangle",
        style: { "margin-right": "8px" }
      }, null, -1)),
      c[2] || (c[2] = l("span", null, " A FHIR system must be configured before users can authorize access or data can be fetched. Open Setup to select a system. ", -1)),
      l("div", eB, [
        W(i) ? (C(), x("a", {
          key: 0,
          href: W(i),
          class: "btn btn-sm btn-primary",
          style: { "margin-left": "10px" }
        }, c[0] || (c[0] = [
          l("i", { class: "fas fa-gear fa-fw" }, null, -1),
          H(" Open Setup ")
        ]), 8, tB)) : me("", !0)
      ])
    ])) : W(n) && W(s) ? (C(), x("div", nB, [
      c[5] || (c[5] = l("i", {
        class: "fas fa-info-circle",
        style: { "margin-right": "8px" }
      }, null, -1)),
      l("span", null, [
        c[3] || (c[3] = H(" To enable data fetching, sign in to the EHR and authorize access for this project using Standalone Launch. ")),
        W(o)?.fhir_system_name ? (C(), x(Ce, { key: 0 }, [
          H(" (System: " + P(W(o).fhir_system_name) + ")", 1)
        ], 64)) : me("", !0)
      ]),
      l("div", sB, [
        l("a", {
          href: W(s),
          class: "btn btn-sm btn-primary text-light",
          style: { "margin-left": "10px" }
        }, c[4] || (c[4] = [
          l("i", { class: "fas fa-rocket fa-fw" }, null, -1),
          H(" Standalone Launch ")
        ]), 8, oB)
      ])
    ])) : me("", !0);
  }
}), iB = /* @__PURE__ */ Se({
  __name: "App",
  setup(e) {
    const t = Go(), n = Au(), { selectedFhirSystem: s } = Gn(t);
    return Nt(async () => {
      await t.fetchProjectSettings(), await n.fetchStatus(), n.startPolling(6e4);
    }), Uo(() => {
      n.stopPolling();
    }), Ct(s, async () => {
      await n.refreshNow();
    }), (o, r) => {
      const i = Qe("router-view");
      return C(), x("div", null, [
        ue(J3, {
          onRefresh: r[0] || (r[0] = (a) => W(n).refreshNow())
        }),
        ue(rB),
        ue(i),
        ue(Y3)
      ]);
    };
  }
}), SB = (e) => {
  const t = Ea(iB);
  t.config.errorHandler = (o, r, i) => {
    console.error("💥 Vue Error:", o), console.error("📍 Component:", r), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      o instanceof Error ? qp().push({ name: "error", query: { message: o.message } }) : console.error("Unhandled non-Error exception:", o);
    });
  };
  const n = cw();
  t.use(gR), t.use(n);
  const s = qp();
  return t.use(s), t.mount(e), t;
};
export {
  SB as default
};
