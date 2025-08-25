var Mp = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ne = Mp.NODE_ENV !== "production" ? Object.freeze({}) : {}, fr = Mp.NODE_ENV !== "production" ? Object.freeze([]) : [], et = () => {
}, cE = () => !1, Cs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ci = (e) => e.startsWith("onUpdate:"), He = Object.assign, fu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, fE = Object.prototype.hasOwnProperty, Ae = (e, t) => fE.call(e, t), re = Array.isArray, Co = (e) => Ds(e) === "[object Map]", Xi = (e) => Ds(e) === "[object Set]", _c = (e) => Ds(e) === "[object Date]", ce = (e) => typeof e == "function", Fe = (e) => typeof e == "string", Qt = (e) => typeof e == "symbol", De = (e) => e !== null && typeof e == "object", du = (e) => (De(e) || ce(e)) && ce(e.then) && ce(e.catch), Fp = Object.prototype.toString, Ds = (e) => Fp.call(e), pu = (e) => Ds(e).slice(8, -1), Bp = (e) => Ds(e) === "[object Object]", hu = (e) => Fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zr = /* @__PURE__ */ Hn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), dE = /* @__PURE__ */ Hn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ji = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pE = /-(\w)/g, ct = Ji(
  (e) => e.replace(pE, (t, n) => n ? n.toUpperCase() : "")
), hE = /\B([A-Z])/g, On = Ji(
  (e) => e.replace(hE, "-$1").toLowerCase()
), Vo = Ji((e) => e.charAt(0).toUpperCase() + e.slice(1)), vo = Ji(
  (e) => e ? `on${Vo(e)}` : ""
), Nt = (e, t) => !Object.is(e, t), nr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cs = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Di = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, mE = (e) => {
  const t = Fe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let gc;
const xs = () => gc || (gc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lo(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Fe(o) ? vE(o) : Lo(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Fe(e) || De(e))
    return e;
}
const _E = /;(?![^(]*\))/g, gE = /:([^]+)/, EE = /\/\*[^]*?\*\//g;
function vE(e) {
  const t = {};
  return e.replace(EE, "").split(_E).forEach((n) => {
    if (n) {
      const o = n.split(gE);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Ce(e) {
  let t = "";
  if (Fe(e))
    t = e;
  else if (re(e))
    for (let n = 0; n < e.length; n++) {
      const o = Ce(e[n]);
      o && (t += o + " ");
    }
  else if (De(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ge(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Fe(t) && (e.class = Ce(t)), n && (e.style = Lo(n)), e;
}
const yE = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", bE = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", wE = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", OE = /* @__PURE__ */ Hn(yE), SE = /* @__PURE__ */ Hn(bE), NE = /* @__PURE__ */ Hn(wE), AE = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", TE = /* @__PURE__ */ Hn(AE);
function Up(e) {
  return !!e || e === "";
}
function CE(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = mr(e[o], t[o]);
  return n;
}
function mr(e, t) {
  if (e === t) return !0;
  let n = _c(e), o = _c(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Qt(e), o = Qt(t), n || o)
    return e === t;
  if (n = re(e), o = re(t), n || o)
    return n && o ? CE(e, t) : !1;
  if (n = De(e), o = De(t), n || o) {
    if (!n || !o)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), u = t.hasOwnProperty(i);
      if (a && !u || !a && u || !mr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function DE(e, t) {
  return e.findIndex((n) => mr(n, t));
}
const jp = (e) => !!(e && e.__v_isRef === !0), ue = (e) => Fe(e) ? e : e == null ? "" : re(e) || De(e) && (e.toString === Fp || !ce(e.toString)) ? jp(e) ? ue(e.value) : JSON.stringify(e, Hp, 2) : String(e), Hp = (e, t) => jp(t) ? Hp(e, t.value) : Co(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[Ra(o, s) + " =>"] = r, n),
    {}
  )
} : Xi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ra(n))
} : Qt(t) ? Ra(t) : De(t) && !re(t) && !Bp(t) ? String(t) : t, Ra = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Pe = {};
function Ut(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let it;
class Kp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = it, !t && it && (this.index = (it.scopes || (it.scopes = [])).push(
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
      const n = it;
      try {
        return it = this, t();
      } finally {
        it = n;
      }
    } else Pe.NODE_ENV !== "production" && Ut("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = it, it = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (it = this.prevScope, this.prevScope = void 0);
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
  return it;
}
function xE(e, t = !1) {
  it ? it.cleanups.push(e) : Pe.NODE_ENV !== "production" && !t && Ut(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let $e;
const ka = /* @__PURE__ */ new WeakSet();
class qp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, it && it.active && it.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ka.has(this) && (ka.delete(this), this.trigger()));
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
    const t = $e, n = Xt;
    $e = this, Xt = !0;
    try {
      return this.fn();
    } finally {
      Pe.NODE_ENV !== "production" && $e !== this && Ut(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Jp(this), $e = t, Xt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        gu(t);
      this.deps = this.depsTail = void 0, Ec(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ka.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _l(this) && this.run();
  }
  get dirty() {
    return _l(this);
  }
}
let Gp = 0, es, ts;
function Yp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ts, ts = e;
    return;
  }
  e.next = es, es = e;
}
function mu() {
  Gp++;
}
function _u() {
  if (--Gp > 0)
    return;
  if (ts) {
    let t = ts;
    for (ts = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; es; ) {
    let t = es;
    for (es = void 0; t; ) {
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
    o.version === -1 ? (o === n && (n = r), gu(o), RE(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function _l(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Qp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Qp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fs) || (e.globalVersion = fs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_l(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = $e, o = Xt;
  $e = e, Xt = !0;
  try {
    Xp(e);
    const r = e.fn(e._value);
    (t.version === 0 || Nt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    $e = n, Xt = o, Jp(e), e.flags &= -3;
  }
}
function gu(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), Pe.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      gu(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function RE(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Xt = !0;
const Zp = [];
function Zt() {
  Zp.push(Xt), Xt = !1;
}
function en() {
  const e = Zp.pop();
  Xt = e === void 0 ? !0 : e;
}
function Ec(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = $e;
    $e = void 0;
    try {
      t();
    } finally {
      $e = n;
    }
  }
}
let fs = 0;
class kE {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Qi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, Pe.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!$e || !Xt || $e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== $e)
      n = this.activeLink = new kE($e, this), $e.deps ? (n.prevDep = $e.depsTail, $e.depsTail.nextDep = n, $e.depsTail = n) : $e.deps = $e.depsTail = n, eh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = $e.depsTail, n.nextDep = void 0, $e.depsTail.nextDep = n, $e.depsTail = n, $e.deps === n && ($e.deps = o);
    }
    return Pe.NODE_ENV !== "production" && $e.onTrack && $e.onTrack(
      He(
        {
          effect: $e
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, fs++, this.notify(t);
  }
  notify(t) {
    mu();
    try {
      if (Pe.NODE_ENV !== "production")
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
      _u();
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
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), Pe.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const xi = /* @__PURE__ */ new WeakMap(), Do = Symbol(
  Pe.NODE_ENV !== "production" ? "Object iterate" : ""
), gl = Symbol(
  Pe.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ds = Symbol(
  Pe.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Ze(e, t, n) {
  if (Xt && $e) {
    let o = xi.get(e);
    o || xi.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new Qi()), r.map = o, r.key = n), Pe.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function mn(e, t, n, o, r, s) {
  const i = xi.get(e);
  if (!i) {
    fs++;
    return;
  }
  const a = (u) => {
    u && (Pe.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: s
    }) : u.trigger());
  };
  if (mu(), t === "clear")
    i.forEach(a);
  else {
    const u = re(e), f = u && hu(n);
    if (u && n === "length") {
      const l = Number(o);
      i.forEach((c, d) => {
        (d === "length" || d === ds || !Qt(d) && d >= l) && a(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(ds)), t) {
        case "add":
          u ? f && a(i.get("length")) : (a(i.get(Do)), Co(e) && a(i.get(gl)));
          break;
        case "delete":
          u || (a(i.get(Do)), Co(e) && a(i.get(gl)));
          break;
        case "set":
          Co(e) && a(i.get(Do));
          break;
      }
  }
  _u();
}
function $E(e, t) {
  const n = xi.get(e);
  return n && n.get(t);
}
function Yo(e) {
  const t = he(e);
  return t === e ? t : (Ze(t, "iterate", ds), gt(e) ? t : t.map(st));
}
function Zi(e) {
  return Ze(e = he(e), "iterate", ds), e;
}
const IE = {
  __proto__: null,
  [Symbol.iterator]() {
    return $a(this, Symbol.iterator, st);
  },
  concat(...e) {
    return Yo(this).concat(
      ...e.map((t) => re(t) ? Yo(t) : t)
    );
  },
  entries() {
    return $a(this, "entries", (e) => (e[1] = st(e[1]), e));
  },
  every(e, t) {
    return Rn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Rn(this, "filter", e, t, (n) => n.map(st), arguments);
  },
  find(e, t) {
    return Rn(this, "find", e, t, st, arguments);
  },
  findIndex(e, t) {
    return Rn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Rn(this, "findLast", e, t, st, arguments);
  },
  findLastIndex(e, t) {
    return Rn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Rn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ia(this, "includes", e);
  },
  indexOf(...e) {
    return Ia(this, "indexOf", e);
  },
  join(e) {
    return Yo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ia(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Rn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Br(this, "pop");
  },
  push(...e) {
    return Br(this, "push", e);
  },
  reduce(e, ...t) {
    return vc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vc(this, "reduceRight", e, t);
  },
  shift() {
    return Br(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Rn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Br(this, "splice", e);
  },
  toReversed() {
    return Yo(this).toReversed();
  },
  toSorted(e) {
    return Yo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Yo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Br(this, "unshift", e);
  },
  values() {
    return $a(this, "values", st);
  }
};
function $a(e, t, n) {
  const o = Zi(e), r = o[t]();
  return o !== e && !gt(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.value && (s.value = n(s.value)), s;
  }), r;
}
const PE = Array.prototype;
function Rn(e, t, n, o, r, s) {
  const i = Zi(e), a = i !== e && !gt(e), u = i[t];
  if (u !== PE[t]) {
    const c = u.apply(e, s);
    return a ? st(c) : c;
  }
  let f = n;
  i !== e && (a ? f = function(c, d) {
    return n.call(this, st(c), d, e);
  } : n.length > 2 && (f = function(c, d) {
    return n.call(this, c, d, e);
  }));
  const l = u.call(i, f, o);
  return a && r ? r(l) : l;
}
function vc(e, t, n, o) {
  const r = Zi(e);
  let s = n;
  return r !== e && (gt(e) ? n.length > 3 && (s = function(i, a, u) {
    return n.call(this, i, a, u, e);
  }) : s = function(i, a, u) {
    return n.call(this, i, st(a), u, e);
  }), r[t](s, ...o);
}
function Ia(e, t, n) {
  const o = he(e);
  Ze(o, "iterate", ds);
  const r = o[t](...n);
  return (r === -1 || r === !1) && ps(n[0]) ? (n[0] = he(n[0]), o[t](...n)) : r;
}
function Br(e, t, n = []) {
  Zt(), mu();
  const o = he(e)[t].apply(e, n);
  return _u(), en(), o;
}
const VE = /* @__PURE__ */ Hn("__proto__,__v_isRef,__isVue"), th = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qt)
);
function LE(e) {
  Qt(e) || (e = String(e));
  const t = he(this);
  return Ze(t, "has", e), t.hasOwnProperty(e);
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
    const i = re(t);
    if (!r) {
      let u;
      if (i && (u = IE[n]))
        return u;
      if (n === "hasOwnProperty")
        return LE;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Le(t) ? t : o
    );
    return (Qt(n) ? th.has(n) : VE(n)) || (r || Ze(t, "get", n), s) ? a : Le(a) ? i && hu(n) ? a : a.value : De(a) ? r ? Eu(a) : Mo(a) : a;
  }
}
class oh extends nh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const u = Sn(s);
      if (!gt(o) && !Sn(o) && (s = he(s), o = he(o)), !re(t) && Le(s) && !Le(o))
        return u ? !1 : (s.value = o, !0);
    }
    const i = re(t) && hu(n) ? Number(n) < t.length : Ae(t, n), a = Reflect.set(
      t,
      n,
      o,
      Le(t) ? t : r
    );
    return t === he(r) && (i ? Nt(o, s) && mn(t, "set", n, o, s) : mn(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = Ae(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && mn(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Qt(n) || !th.has(n)) && Ze(t, "has", n), o;
  }
  ownKeys(t) {
    return Ze(
      t,
      "iterate",
      re(t) ? "length" : Do
    ), Reflect.ownKeys(t);
  }
}
class rh extends nh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Pe.NODE_ENV !== "production" && Ut(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Pe.NODE_ENV !== "production" && Ut(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ME = /* @__PURE__ */ new oh(), FE = /* @__PURE__ */ new rh(), BE = /* @__PURE__ */ new oh(!0), UE = /* @__PURE__ */ new rh(!0), El = (e) => e, qs = (e) => Reflect.getPrototypeOf(e);
function jE(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = he(r), i = Co(s), a = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, f = r[e](...o), l = n ? El : t ? Ri : st;
    return !t && Ze(
      s,
      "iterate",
      u ? gl : Do
    ), {
      // iterator protocol
      next() {
        const { value: c, done: d } = f.next();
        return d ? { value: c, done: d } : {
          value: a ? [l(c[0]), l(c[1])] : l(c),
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
function Gs(e) {
  return function(...t) {
    if (Pe.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ut(
        `${Vo(e)} operation ${n}failed: target is readonly.`,
        he(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function HE(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, i = he(s), a = he(r);
      e || (Nt(r, a) && Ze(i, "get", r), Ze(i, "get", a));
      const { has: u } = qs(i), f = t ? El : e ? Ri : st;
      if (u.call(i, r))
        return f(s.get(r));
      if (u.call(i, a))
        return f(s.get(a));
      s !== i && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ze(he(r), "iterate", Do), Reflect.get(r, "size", r);
    },
    has(r) {
      const s = this.__v_raw, i = he(s), a = he(r);
      return e || (Nt(r, a) && Ze(i, "has", r), Ze(i, "has", a)), r === a ? s.has(r) : s.has(r) || s.has(a);
    },
    forEach(r, s) {
      const i = this, a = i.__v_raw, u = he(a), f = t ? El : e ? Ri : st;
      return !e && Ze(u, "iterate", Do), a.forEach((l, c) => r.call(s, f(l), f(c), i));
    }
  };
  return He(
    n,
    e ? {
      add: Gs("add"),
      set: Gs("set"),
      delete: Gs("delete"),
      clear: Gs("clear")
    } : {
      add(r) {
        !t && !gt(r) && !Sn(r) && (r = he(r));
        const s = he(this);
        return qs(s).has.call(s, r) || (s.add(r), mn(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !gt(s) && !Sn(s) && (s = he(s));
        const i = he(this), { has: a, get: u } = qs(i);
        let f = a.call(i, r);
        f ? Pe.NODE_ENV !== "production" && yc(i, a, r) : (r = he(r), f = a.call(i, r));
        const l = u.call(i, r);
        return i.set(r, s), f ? Nt(s, l) && mn(i, "set", r, s, l) : mn(i, "add", r, s), this;
      },
      delete(r) {
        const s = he(this), { has: i, get: a } = qs(s);
        let u = i.call(s, r);
        u ? Pe.NODE_ENV !== "production" && yc(s, i, r) : (r = he(r), u = i.call(s, r));
        const f = a ? a.call(s, r) : void 0, l = s.delete(r);
        return u && mn(s, "delete", r, void 0, f), l;
      },
      clear() {
        const r = he(this), s = r.size !== 0, i = Pe.NODE_ENV !== "production" ? Co(r) ? new Map(r) : new Set(r) : void 0, a = r.clear();
        return s && mn(
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
    n[r] = jE(r, e, t);
  }), n;
}
function ea(e, t) {
  const n = HE(e, t);
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    Ae(n, r) && r in o ? n : o,
    r,
    s
  );
}
const KE = {
  get: /* @__PURE__ */ ea(!1, !1)
}, WE = {
  get: /* @__PURE__ */ ea(!1, !0)
}, zE = {
  get: /* @__PURE__ */ ea(!0, !1)
}, qE = {
  get: /* @__PURE__ */ ea(!0, !0)
};
function yc(e, t, n) {
  const o = he(n);
  if (o !== n && t.call(e, o)) {
    const r = pu(e);
    Ut(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const sh = /* @__PURE__ */ new WeakMap(), ih = /* @__PURE__ */ new WeakMap(), ah = /* @__PURE__ */ new WeakMap(), lh = /* @__PURE__ */ new WeakMap();
function GE(e) {
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
function YE(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : GE(pu(e));
}
function Mo(e) {
  return Sn(e) ? e : ta(
    e,
    !1,
    ME,
    KE,
    sh
  );
}
function uh(e) {
  return ta(
    e,
    !1,
    BE,
    WE,
    ih
  );
}
function Eu(e) {
  return ta(
    e,
    !0,
    FE,
    zE,
    ah
  );
}
function gn(e) {
  return ta(
    e,
    !0,
    UE,
    qE,
    lh
  );
}
function ta(e, t, n, o, r) {
  if (!De(e))
    return Pe.NODE_ENV !== "production" && Ut(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = YE(e);
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
function Jt(e) {
  return Sn(e) ? Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Sn(e) {
  return !!(e && e.__v_isReadonly);
}
function gt(e) {
  return !!(e && e.__v_isShallow);
}
function ps(e) {
  return e ? !!e.__v_raw : !1;
}
function he(e) {
  const t = e && e.__v_raw;
  return t ? he(t) : e;
}
function to(e) {
  return !Ae(e, "__v_skip") && Object.isExtensible(e) && cs(e, "__v_skip", !0), e;
}
const st = (e) => De(e) ? Mo(e) : e, Ri = (e) => De(e) ? Eu(e) : e;
function Le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function oe(e) {
  return fh(e, !1);
}
function ch(e) {
  return fh(e, !0);
}
function fh(e, t) {
  return Le(e) ? e : new XE(e, t);
}
class XE {
  constructor(t, n) {
    this.dep = new Qi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : he(t), this._value = n ? t : st(t), this.__v_isShallow = n;
  }
  get value() {
    return Pe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || gt(t) || Sn(t);
    t = o ? t : he(t), Nt(t, n) && (this._rawValue = t, this._value = o ? t : st(t), Pe.NODE_ENV !== "production" ? this.dep.trigger({
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
const JE = {
  get: (e, t, n) => t === "__v_raw" ? e : ve(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Le(r) && !Le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function dh(e) {
  return Jt(e) ? e : new Proxy(e, JE);
}
class QE {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Qi(), { get: o, set: r } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = o, this._set = r;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ZE(e) {
  return new QE(e);
}
function tn(e) {
  Pe.NODE_ENV !== "production" && !ps(e) && Ut("toRefs() expects a reactive object but received a plain one.");
  const t = re(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ph(e, n);
  return t;
}
class ev {
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
    return $E(he(this._object), this._key);
  }
}
class tv {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function li(e, t, n) {
  return Le(e) ? e : ce(e) ? new tv(e) : De(e) && arguments.length > 1 ? ph(e, t, n) : oe(e);
}
function ph(e, t, n) {
  const o = e[t];
  return Le(o) ? o : new ev(e, t, n);
}
class nv {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Qi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    $e !== this)
      return Yp(this, !0), !0;
  }
  get value() {
    const t = Pe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Qp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Pe.NODE_ENV !== "production" && Ut("Write operation failed: computed value is readonly");
  }
}
function ov(e, t, n = !1) {
  let o, r;
  return ce(e) ? o = e : (o = e.get, r = e.set), new nv(o, r, n);
}
const Ys = {}, ki = /* @__PURE__ */ new WeakMap();
let yo;
function rv(e, t = !1, n = yo) {
  if (n) {
    let o = ki.get(n);
    o || ki.set(n, o = []), o.push(e);
  } else Pe.NODE_ENV !== "production" && !t && Ut(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function sv(e, t, n = Ne) {
  const { immediate: o, deep: r, once: s, scheduler: i, augmentJob: a, call: u } = n, f = (A) => {
    (n.onWarn || Ut)(
      "Invalid watch source: ",
      A,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, l = (A) => r ? A : gt(A) || r === !1 || r === 0 ? Ln(A, 1) : Ln(A);
  let c, d, p, h, m = !1, E = !1;
  if (Le(e) ? (d = () => e.value, m = gt(e)) : Jt(e) ? (d = () => l(e), m = !0) : re(e) ? (E = !0, m = e.some((A) => Jt(A) || gt(A)), d = () => e.map((A) => {
    if (Le(A))
      return A.value;
    if (Jt(A))
      return l(A);
    if (ce(A))
      return u ? u(A, 2) : A();
    Pe.NODE_ENV !== "production" && f(A);
  })) : ce(e) ? t ? d = u ? () => u(e, 2) : e : d = () => {
    if (p) {
      Zt();
      try {
        p();
      } finally {
        en();
      }
    }
    const A = yo;
    yo = c;
    try {
      return u ? u(e, 3, [h]) : e(h);
    } finally {
      yo = A;
    }
  } : (d = et, Pe.NODE_ENV !== "production" && f(e)), t && r) {
    const A = d, D = r === !0 ? 1 / 0 : r;
    d = () => Ln(A(), D);
  }
  const v = zp(), O = () => {
    c.stop(), v && v.active && fu(v.effects, c);
  };
  if (s && t) {
    const A = t;
    t = (...D) => {
      A(...D), O();
    };
  }
  let b = E ? new Array(e.length).fill(Ys) : Ys;
  const $ = (A) => {
    if (!(!(c.flags & 1) || !c.dirty && !A))
      if (t) {
        const D = c.run();
        if (r || m || (E ? D.some((C, V) => Nt(C, b[V])) : Nt(D, b))) {
          p && p();
          const C = yo;
          yo = c;
          try {
            const V = [
              D,
              // pass undefined as the old value when it's changed for the first time
              b === Ys ? void 0 : E && b[0] === Ys ? [] : b,
              h
            ];
            b = D, u ? u(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            yo = C;
          }
        }
      } else
        c.run();
  };
  return a && a($), c = new qp(d), c.scheduler = i ? () => i($, !1) : $, h = (A) => rv(A, !1, c), p = c.onStop = () => {
    const A = ki.get(c);
    if (A) {
      if (u)
        u(A, 4);
      else
        for (const D of A) D();
      ki.delete(c);
    }
  }, Pe.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? o ? $(!0) : b = c.run() : i ? i($.bind(null, !0), !0) : c.run(), O.pause = c.pause.bind(c), O.resume = c.resume.bind(c), O.stop = O, O;
}
function Ln(e, t = 1 / 0, n) {
  if (t <= 0 || !De(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Le(e))
    Ln(e.value, t, n);
  else if (re(e))
    for (let o = 0; o < e.length; o++)
      Ln(e[o], t, n);
  else if (Xi(e) || Co(e))
    e.forEach((o) => {
      Ln(o, t, n);
    });
  else if (Bp(e)) {
    for (const o in e)
      Ln(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Ln(e[o], t, n);
  }
  return e;
}
var w = {};
const xo = [];
function ui(e) {
  xo.push(e);
}
function ci() {
  xo.pop();
}
let Pa = !1;
function U(e, ...t) {
  if (Pa) return;
  Pa = !0, Zt();
  const n = xo.length ? xo[xo.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = iv();
  if (o)
    xr(
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
          ({ vnode: s }) => `at <${ca(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...av(r)), console.warn(...s);
  }
  en(), Pa = !1;
}
function iv() {
  let e = xo[xo.length - 1];
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
function av(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...lv(n));
  }), t;
}
function lv({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${ca(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...uv(e.props), s] : [r + s];
}
function uv(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...hh(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function hh(e, t, n) {
  return Fe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Le(t) ? (t = hh(e, he(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ce(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = he(t), n ? t : [`${e}=`, t]);
}
function cv(e, t) {
  w.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? U(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && U(`${t} is NaN - the duration expression might be incorrect.`));
}
const vu = {
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
function xr(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Rs(r, t, n);
  }
}
function nn(e, t, n, o) {
  if (ce(e)) {
    const r = xr(e, t, n, o);
    return r && du(r) && r.catch((s) => {
      Rs(s, t, n);
    }), r;
  }
  if (re(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(nn(e[s], t, n, o));
    return r;
  } else w.NODE_ENV !== "production" && U(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Rs(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Ne;
  if (t) {
    let a = t.parent;
    const u = t.proxy, f = w.NODE_ENV !== "production" ? vu[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const l = a.ec;
      if (l) {
        for (let c = 0; c < l.length; c++)
          if (l[c](e, u, f) === !1)
            return;
      }
      a = a.parent;
    }
    if (s) {
      Zt(), xr(s, null, 10, [
        e,
        u,
        f
      ]), en();
      return;
    }
  }
  fv(e, n, r, o, i);
}
function fv(e, t, n, o = !0, r = !1) {
  if (w.NODE_ENV !== "production") {
    const s = vu[t];
    if (n && ui(n), U(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && ci(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const mt = [];
let pn = -1;
const dr = [];
let Yn = null, or = 0;
const mh = /* @__PURE__ */ Promise.resolve();
let $i = null;
const dv = 100;
function _r(e) {
  const t = $i || mh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pv(e) {
  let t = pn + 1, n = mt.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = mt[o], s = hs(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function na(e) {
  if (!(e.flags & 1)) {
    const t = hs(e), n = mt[mt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hs(n) ? mt.push(e) : mt.splice(pv(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  $i || ($i = mh.then(vh));
}
function gh(e) {
  re(e) ? dr.push(...e) : Yn && e.id === -1 ? Yn.splice(or + 1, 0, e) : e.flags & 1 || (dr.push(e), e.flags |= 1), _h();
}
function bc(e, t, n = pn + 1) {
  for (w.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < mt.length; n++) {
    const o = mt[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || w.NODE_ENV !== "production" && yu(t, o))
        continue;
      mt.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Eh(e) {
  if (dr.length) {
    const t = [...new Set(dr)].sort(
      (n, o) => hs(n) - hs(o)
    );
    if (dr.length = 0, Yn) {
      Yn.push(...t);
      return;
    }
    for (Yn = t, w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), or = 0; or < Yn.length; or++) {
      const n = Yn[or];
      w.NODE_ENV !== "production" && yu(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Yn = null, or = 0;
  }
}
const hs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function vh(e) {
  w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = w.NODE_ENV !== "production" ? (n) => yu(e, n) : et;
  try {
    for (pn = 0; pn < mt.length; pn++) {
      const n = mt[pn];
      if (n && !(n.flags & 8)) {
        if (w.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), xr(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; pn < mt.length; pn++) {
      const n = mt[pn];
      n && (n.flags &= -2);
    }
    pn = -1, mt.length = 0, Eh(e), $i = null, (mt.length || dr.length) && vh(e);
  }
}
function yu(e, t) {
  const n = e.get(t) || 0;
  if (n > dv) {
    const o = t.i, r = o && Tu(o.type);
    return Rs(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Gt = !1;
const fi = /* @__PURE__ */ new Map();
w.NODE_ENV !== "production" && (xs().__VUE_HMR_RUNTIME__ = {
  createRecord: Va(yh),
  rerender: Va(_v),
  reload: Va(gv)
});
const Fo = /* @__PURE__ */ new Map();
function hv(e) {
  const t = e.type.__hmrId;
  let n = Fo.get(t);
  n || (yh(t, e.type), n = Fo.get(t)), n.instances.add(e);
}
function mv(e) {
  Fo.get(e.type.__hmrId).instances.delete(e);
}
function yh(e, t) {
  return Fo.has(e) ? !1 : (Fo.set(e, {
    initialDef: Ii(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ii(e) {
  return fm(e) ? e.__vccOpts : e;
}
function _v(e, t) {
  const n = Fo.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ii(o.type).render = t), o.renderCache = [], Gt = !0, o.update(), Gt = !1;
  }));
}
function gv(e, t) {
  const n = Fo.get(e);
  if (!n) return;
  t = Ii(t), wc(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const s = o[r], i = Ii(s.type);
    let a = fi.get(i);
    a || (i !== n.initialDef && wc(i, t), fi.set(i, a = /* @__PURE__ */ new Set())), a.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (a.add(s), s.ceReload(t.styles), a.delete(s)) : s.parent ? na(() => {
      Gt = !0, s.parent.update(), Gt = !1, a.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  gh(() => {
    fi.clear();
  });
}
function wc(e, t) {
  He(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Va(e) {
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
let _n, Yr = [], vl = !1;
function ks(e, ...t) {
  _n ? _n.emit(e, ...t) : vl || Yr.push({ event: e, args: t });
}
function bh(e, t) {
  var n, o;
  _n = e, _n ? (_n.enabled = !0, Yr.forEach(({ event: r, args: s }) => _n.emit(r, ...s)), Yr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    bh(s, t);
  }), setTimeout(() => {
    _n || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, vl = !0, Yr = []);
  }, 3e3)) : (vl = !0, Yr = []);
}
function Ev(e, t) {
  ks("app:init", e, t, {
    Fragment: Te,
    Text: Is,
    Comment: Ye,
    Static: pi
  });
}
function vv(e) {
  ks("app:unmount", e);
}
const yv = /* @__PURE__ */ bu(
  "component:added"
  /* COMPONENT_ADDED */
), wh = /* @__PURE__ */ bu(
  "component:updated"
  /* COMPONENT_UPDATED */
), bv = /* @__PURE__ */ bu(
  "component:removed"
  /* COMPONENT_REMOVED */
), wv = (e) => {
  _n && typeof _n.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !_n.cleanupBuffer(e) && bv(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function bu(e) {
  return (t) => {
    ks(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ov = /* @__PURE__ */ Oh(
  "perf:start"
  /* PERFORMANCE_START */
), Sv = /* @__PURE__ */ Oh(
  "perf:end"
  /* PERFORMANCE_END */
);
function Oh(e) {
  return (t, n, o) => {
    ks(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Nv(e, t, n) {
  ks(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let We = null, Sh = null;
function Pi(e) {
  const t = We;
  return We = e, Sh = e && e.type.__scopeId || null, t;
}
function Tt(e, t = We, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Fc(-1);
    const s = Pi(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Pi(s), o._d && Fc(1);
    }
    return w.NODE_ENV !== "production" && wh(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Nh(e) {
  dE(e) && U("Do not use built-in directive ids as custom directive id: " + e);
}
function Mn(e, t) {
  if (We === null)
    return w.NODE_ENV !== "production" && U("withDirectives can only be used inside render functions."), e;
  const n = ua(We), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, i, a, u = Ne] = t[r];
    s && (ce(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Ln(i), o.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: u
    }));
  }
  return e;
}
function mo(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    s && (a.oldValue = s[i].value);
    let u = a.dir[o];
    u && (Zt(), nn(u, n, 8, [
      e.el,
      a,
      e,
      t
    ]), en());
  }
}
const Ah = Symbol("_vte"), Th = (e) => e.__isTeleport, Ro = (e) => e && (e.disabled || e.disabled === ""), Oc = (e) => e && (e.defer || e.defer === ""), Sc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Nc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, yl = (e, t) => {
  const n = e && e.to;
  if (Fe(n))
    if (t) {
      const o = t(n);
      return w.NODE_ENV !== "production" && !o && !Ro(e) && U(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), o;
    } else
      return w.NODE_ENV !== "production" && U(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return w.NODE_ENV !== "production" && !n && !Ro(e) && U(`Invalid Teleport target: ${n}`), n;
}, Ch = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, o, r, s, i, a, u, f) {
    const {
      mc: l,
      pc: c,
      pbc: d,
      o: { insert: p, querySelector: h, createText: m, createComment: E }
    } = f, v = Ro(t.props);
    let { shapeFlag: O, children: b, dynamicChildren: $ } = t;
    if (w.NODE_ENV !== "production" && Gt && (u = !1, $ = null), e == null) {
      const A = t.el = w.NODE_ENV !== "production" ? E("teleport start") : m(""), D = t.anchor = w.NODE_ENV !== "production" ? E("teleport end") : m("");
      p(A, n, o), p(D, n, o);
      const C = (S, T) => {
        O & 16 && (r && r.isCE && (r.ce._teleportTarget = S), l(
          b,
          S,
          T,
          r,
          s,
          i,
          a,
          u
        ));
      }, V = () => {
        const S = t.target = yl(t.props, h), T = Dh(S, t, m, p);
        S ? (i !== "svg" && Sc(S) ? i = "svg" : i !== "mathml" && Nc(S) && (i = "mathml"), v || (C(S, T), di(t, !1))) : w.NODE_ENV !== "production" && !v && U(
          "Invalid Teleport target on mount:",
          S,
          `(${typeof S})`
        );
      };
      v && (C(n, D), di(t, !0)), Oc(t.props) ? (t.el.__isMounted = !1, ht(() => {
        V(), delete t.el.__isMounted;
      }, s)) : V();
    } else {
      if (Oc(t.props) && e.el.__isMounted === !1) {
        ht(() => {
          Ch.process(
            e,
            t,
            n,
            o,
            r,
            s,
            i,
            a,
            u,
            f
          );
        }, s);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const A = t.anchor = e.anchor, D = t.target = e.target, C = t.targetAnchor = e.targetAnchor, V = Ro(e.props), S = V ? n : D, T = V ? A : C;
      if (i === "svg" || Sc(D) ? i = "svg" : (i === "mathml" || Nc(D)) && (i = "mathml"), $ ? (d(
        e.dynamicChildren,
        $,
        S,
        r,
        s,
        i,
        a
      ), os(e, t, w.NODE_ENV === "production")) : u || c(
        e,
        t,
        S,
        T,
        r,
        s,
        i,
        a,
        !1
      ), v)
        V ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Xs(
          t,
          n,
          A,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = yl(
          t.props,
          h
        );
        R ? Xs(
          t,
          R,
          null,
          f,
          0
        ) : w.NODE_ENV !== "production" && U(
          "Invalid Teleport target on update:",
          D,
          `(${typeof D})`
        );
      } else V && Xs(
        t,
        D,
        C,
        f,
        1
      );
      di(t, v);
    }
  },
  remove(e, t, n, { um: o, o: { remove: r } }, s) {
    const {
      shapeFlag: i,
      children: a,
      anchor: u,
      targetStart: f,
      targetAnchor: l,
      target: c,
      props: d
    } = e;
    if (c && (r(f), r(l)), s && r(u), i & 16) {
      const p = s || !Ro(d);
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
  move: Xs,
  hydrate: Av
};
function Xs(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: u, children: f, props: l } = e, c = s === 2;
  if (c && o(i, t, n), (!c || Ro(l)) && u & 16)
    for (let d = 0; d < f.length; d++)
      r(
        f[d],
        t,
        n,
        2
      );
  c && o(a, t, n);
}
function Av(e, t, n, o, r, s, {
  o: { nextSibling: i, parentNode: a, querySelector: u, insert: f, createText: l }
}, c) {
  const d = t.target = yl(
    t.props,
    u
  );
  if (d) {
    const p = Ro(t.props), h = d._lpa || d.firstChild;
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
        t.targetAnchor || Dh(d, t, l, f), c(
          h && i(h),
          t,
          d,
          n,
          o,
          r,
          s
        );
      }
    di(t, p);
  }
  return t.anchor && i(t.anchor);
}
const oa = Ch;
function di(e, t) {
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
  return r[Ah] = s, e && (o(r, e), o(s, e)), s;
}
const Xn = Symbol("_leaveCb"), Js = Symbol("_enterCb");
function Tv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Cn(() => {
    e.isMounted = !0;
  }), Mh(() => {
    e.isUnmounting = !0;
  }), e;
}
const Lt = [Function, Array], xh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Lt,
  onEnter: Lt,
  onAfterEnter: Lt,
  onEnterCancelled: Lt,
  // leave
  onBeforeLeave: Lt,
  onLeave: Lt,
  onAfterLeave: Lt,
  onLeaveCancelled: Lt,
  // appear
  onBeforeAppear: Lt,
  onAppear: Lt,
  onAfterAppear: Lt,
  onAppearCancelled: Lt
}, Rh = (e) => {
  const t = e.subTree;
  return t.component ? Rh(t.component) : t;
}, Cv = {
  name: "BaseTransition",
  props: xh,
  setup(e, { slots: t }) {
    const n = Dn(), o = Tv();
    return () => {
      const r = t.default && Ih(t.default(), !0);
      if (!r || !r.length)
        return;
      const s = kh(r), i = he(e), { mode: a } = i;
      if (w.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && U(`invalid <transition> mode: ${a}`), o.isLeaving)
        return La(s);
      const u = Ac(s);
      if (!u)
        return La(s);
      let f = bl(
        u,
        i,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => f = c
      );
      u.type !== Ye && ms(u, f);
      let l = n.subTree && Ac(n.subTree);
      if (l && l.type !== Ye && !Oo(u, l) && Rh(n).type !== Ye) {
        let c = bl(
          l,
          i,
          o,
          n
        );
        if (ms(l, c), a === "out-in" && u.type !== Ye)
          return o.isLeaving = !0, c.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, l = void 0;
          }, La(s);
        a === "in-out" && u.type !== Ye ? c.delayLeave = (d, p, h) => {
          const m = $h(
            o,
            l
          );
          m[String(l.key)] = l, d[Xn] = () => {
            p(), d[Xn] = void 0, delete f.delayedLeave, l = void 0;
          }, f.delayedLeave = () => {
            h(), delete f.delayedLeave, l = void 0;
          };
        } : l = void 0;
      } else l && (l = void 0);
      return s;
    };
  }
};
function kh(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const o of e)
      if (o.type !== Ye) {
        if (w.NODE_ENV !== "production" && n) {
          U(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = o, n = !0, w.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Dv = Cv;
function $h(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function bl(e, t, n, o, r) {
  const {
    appear: s,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: u,
    onEnter: f,
    onAfterEnter: l,
    onEnterCancelled: c,
    onBeforeLeave: d,
    onLeave: p,
    onAfterLeave: h,
    onLeaveCancelled: m,
    onBeforeAppear: E,
    onAppear: v,
    onAfterAppear: O,
    onAppearCancelled: b
  } = t, $ = String(e.key), A = $h(n, e), D = (S, T) => {
    S && nn(
      S,
      o,
      9,
      T
    );
  }, C = (S, T) => {
    const R = T[1];
    D(S, T), re(S) ? S.every((x) => x.length <= 1) && R() : S.length <= 1 && R();
  }, V = {
    mode: i,
    persisted: a,
    beforeEnter(S) {
      let T = u;
      if (!n.isMounted)
        if (s)
          T = E || u;
        else
          return;
      S[Xn] && S[Xn](
        !0
        /* cancelled */
      );
      const R = A[$];
      R && Oo(e, R) && R.el[Xn] && R.el[Xn](), D(T, [S]);
    },
    enter(S) {
      let T = f, R = l, x = c;
      if (!n.isMounted)
        if (s)
          T = v || f, R = O || l, x = b || c;
        else
          return;
      let Y = !1;
      const de = S[Js] = (_e) => {
        Y || (Y = !0, _e ? D(x, [S]) : D(R, [S]), V.delayedLeave && V.delayedLeave(), S[Js] = void 0);
      };
      T ? C(T, [S, de]) : de();
    },
    leave(S, T) {
      const R = String(e.key);
      if (S[Js] && S[Js](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      D(d, [S]);
      let x = !1;
      const Y = S[Xn] = (de) => {
        x || (x = !0, T(), de ? D(m, [S]) : D(h, [S]), S[Xn] = void 0, A[R] === e && delete A[R]);
      };
      A[R] = e, p ? C(p, [S, Y]) : Y();
    },
    clone(S) {
      const T = bl(
        S,
        t,
        n,
        o,
        r
      );
      return r && r(T), T;
    }
  };
  return V;
}
function La(e) {
  if ($s(e))
    return e = Nn(e), e.children = null, e;
}
function Ac(e) {
  if (!$s(e))
    return Th(e.type) && e.children ? kh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ce(n.default))
      return n.default();
  }
}
function ms(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ms(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ih(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Te ? (i.patchFlag & 128 && r++, o = o.concat(
      Ih(i.children, t, a)
    )) : (t || i.type !== Ye) && o.push(a != null ? Nn(i, { key: a }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  return ce(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    He({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ph(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vh = /* @__PURE__ */ new WeakSet();
function xv(e) {
  const t = Dn(), n = ch(null);
  if (t) {
    const r = t.refs === Ne ? t.refs = {} : t.refs;
    let s;
    w.NODE_ENV !== "production" && (s = Object.getOwnPropertyDescriptor(r, e)) && !s.configurable ? U(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else w.NODE_ENV !== "production" && U(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const o = w.NODE_ENV !== "production" ? Eu(n) : n;
  return w.NODE_ENV !== "production" && Vh.add(o), o;
}
function ns(e, t, n, o, r = !1) {
  if (re(e)) {
    e.forEach(
      (h, m) => ns(
        h,
        t && (re(t) ? t[m] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (pr(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && ns(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? ua(o.component) : o.el, i = r ? null : s, { i: a, r: u } = e;
  if (w.NODE_ENV !== "production" && !a) {
    U(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, l = a.refs === Ne ? a.refs = {} : a.refs, c = a.setupState, d = he(c), p = c === Ne ? () => !1 : (h) => w.NODE_ENV !== "production" && (Ae(d, h) && !Le(d[h]) && U(
    `Template ref "${h}" used on a non-ref value. It will not work in the production build.`
  ), Vh.has(d[h])) ? !1 : Ae(d, h);
  if (f != null && f !== u && (Fe(f) ? (l[f] = null, p(f) && (c[f] = null)) : Le(f) && (f.value = null)), ce(u))
    xr(u, a, 12, [i, l]);
  else {
    const h = Fe(u), m = Le(u);
    if (h || m) {
      const E = () => {
        if (e.f) {
          const v = h ? p(u) ? c[u] : l[u] : u.value;
          r ? re(v) && fu(v, s) : re(v) ? v.includes(s) || v.push(s) : h ? (l[u] = [s], p(u) && (c[u] = l[u])) : (u.value = [s], e.k && (l[e.k] = u.value));
        } else h ? (l[u] = i, p(u) && (c[u] = i)) : m ? (u.value = i, e.k && (l[e.k] = i)) : w.NODE_ENV !== "production" && U("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (E.id = -1, ht(E, n)) : E();
    } else w.NODE_ENV !== "production" && U("Invalid template ref type:", u, `(${typeof u})`);
  }
}
xs().requestIdleCallback;
xs().cancelIdleCallback;
const pr = (e) => !!e.type.__asyncLoader, $s = (e) => e.type.__isKeepAlive;
function Rv(e, t) {
  Lh(e, "a", t);
}
function kv(e, t) {
  Lh(e, "da", t);
}
function Lh(e, t, n = Qe) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ra(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      $s(r.parent.vnode) && $v(o, t, n, r), r = r.parent;
  }
}
function $v(e, t, n, o) {
  const r = ra(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  sa(() => {
    fu(o[t], r);
  }, n);
}
function ra(e, t, n = Qe, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Zt();
      const a = Ps(n), u = nn(t, n, e, i);
      return a(), en(), u;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (w.NODE_ENV !== "production") {
    const r = vo(vu[e].replace(/ hook$/, ""));
    U(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Kn = (e) => (t, n = Qe) => {
  (!gs || e === "sp") && ra(e, (...o) => t(...o), n);
}, Iv = Kn("bm"), Cn = Kn("m"), Pv = Kn(
  "bu"
), Vv = Kn("u"), Mh = Kn(
  "bum"
), sa = Kn("um"), Lv = Kn(
  "sp"
), Mv = Kn("rtg"), Fv = Kn("rtc");
function Bv(e, t = Qe) {
  ra("ec", e, t);
}
const wl = "components", Uv = "directives";
function on(e, t) {
  return Fh(wl, e, !0, t) || e;
}
const jv = Symbol.for("v-ndc");
function Hv(e) {
  return Fh(Uv, e);
}
function Fh(e, t, n = !0, o = !1) {
  const r = We || Qe;
  if (r) {
    const s = r.type;
    if (e === wl) {
      const a = Tu(
        s,
        !1
      );
      if (a && (a === t || a === ct(t) || a === Vo(ct(t))))
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
      const a = e === wl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      U(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else w.NODE_ENV !== "production" && U(
    `resolve${Vo(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Tc(e, t) {
  return e && (e[t] || e[ct(t)] || e[Vo(ct(t))]);
}
function Et(e, t, n, o) {
  let r;
  const s = n, i = re(e);
  if (i || Fe(e)) {
    const a = i && Jt(e);
    let u = !1, f = !1;
    a && (u = !gt(e), f = Sn(e), e = Zi(e)), r = new Array(e.length);
    for (let l = 0, c = e.length; l < c; l++)
      r[l] = t(
        u ? f ? Ri(st(e[l])) : st(e[l]) : e[l],
        l,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    w.NODE_ENV !== "production" && !Number.isInteger(e) && U(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let a = 0; a < e; a++)
      r[a] = t(a + 1, a, void 0, s);
  } else if (De(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (a, u) => t(a, u, void 0, s)
      );
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let u = 0, f = a.length; u < f; u++) {
        const l = a[u];
        r[u] = t(e[l], l, u, s);
      }
    }
  else
    r = [];
  return r;
}
function be(e, t, n = {}, o, r) {
  if (We.ce || We.parent && pr(We.parent) && We.parent.ce)
    return t !== "default" && (n.name = t), L(), xt(
      Te,
      null,
      [Oe("slot", n, o && o())],
      64
    );
  let s = e[t];
  w.NODE_ENV !== "production" && s && s.length > 1 && (U(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), L();
  const i = s && Bh(s(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, u = xt(
    Te,
    {
      key: (a && !Qt(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && o ? "_fb" : "")
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), s && s._c && (s._d = !0), u;
}
function Bh(e) {
  return e.some((t) => Bo(t) ? !(t.type === Ye || t.type === Te && !Bh(t.children)) : !0) ? e : null;
}
const Ol = (e) => e ? um(e) ? ua(e) : Ol(e.parent) : null, ko = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ He(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => w.NODE_ENV !== "production" ? gn(e.props) : e.props,
    $attrs: (e) => w.NODE_ENV !== "production" ? gn(e.attrs) : e.attrs,
    $slots: (e) => w.NODE_ENV !== "production" ? gn(e.slots) : e.slots,
    $refs: (e) => w.NODE_ENV !== "production" ? gn(e.refs) : e.refs,
    $parent: (e) => Ol(e.parent),
    $root: (e) => Ol(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      na(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _r.bind(e.proxy)),
    $watch: (e) => Oy.bind(e)
  })
), wu = (e) => e === "_" || e === "$", Ma = (e, t) => e !== Ne && !e.__isScriptSetup && Ae(e, t), Uh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: a, appContext: u } = e;
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
        if (Ma(o, t))
          return i[t] = 1, o[t];
        if (r !== Ne && Ae(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Ae(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== Ne && Ae(n, t))
          return i[t] = 4, n[t];
        Sl && (i[t] = 0);
      }
    }
    const l = ko[t];
    let c, d;
    if (l)
      return t === "$attrs" ? (Ze(e.attrs, "get", ""), w.NODE_ENV !== "production" && Mi()) : w.NODE_ENV !== "production" && t === "$slots" && Ze(e, "get", t), l(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Ne && Ae(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = u.config.globalProperties, Ae(d, t)
    )
      return d[t];
    w.NODE_ENV !== "production" && We && (!Fe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== Ne && wu(t[0]) && Ae(r, t) ? U(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === We && U(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Ma(r, t) ? (r[t] = n, !0) : w.NODE_ENV !== "production" && r.__isScriptSetup && Ae(r, t) ? (U(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Ne && Ae(o, t) ? (o[t] = n, !0) : Ae(e.props, t) ? (w.NODE_ENV !== "production" && U(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (w.NODE_ENV !== "production" && U(
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
    return !!n[i] || e !== Ne && Ae(e, i) || Ma(t, i) || (a = s[0]) && Ae(a, i) || Ae(o, i) || Ae(ko, i) || Ae(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
w.NODE_ENV !== "production" && (Uh.ownKeys = (e) => (U(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Kv(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ko).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ko[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: et
    });
  }), t;
}
function Wv(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: et
    });
  });
}
function zv(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(he(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (wu(o[0])) {
        U(
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
        set: et
      });
    }
  });
}
function Cc(e) {
  return re(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function qv() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? U(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Sl = !0;
function Gv(e) {
  const t = Hh(e), n = e.proxy, o = e.ctx;
  Sl = !1, t.beforeCreate && Dc(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: a,
    provide: u,
    inject: f,
    // lifecycle
    created: l,
    beforeMount: c,
    mounted: d,
    beforeUpdate: p,
    updated: h,
    activated: m,
    deactivated: E,
    beforeDestroy: v,
    beforeUnmount: O,
    destroyed: b,
    unmounted: $,
    render: A,
    renderTracked: D,
    renderTriggered: C,
    errorCaptured: V,
    serverPrefetch: S,
    // public API
    expose: T,
    inheritAttrs: R,
    // assets
    components: x,
    directives: Y,
    filters: de
  } = t, _e = w.NODE_ENV !== "production" ? qv() : null;
  if (w.NODE_ENV !== "production") {
    const [W] = e.propsOptions;
    if (W)
      for (const ee in W)
        _e("Props", ee);
  }
  if (f && Yv(f, o, _e), i)
    for (const W in i) {
      const ee = i[W];
      ce(ee) ? (w.NODE_ENV !== "production" ? Object.defineProperty(o, W, {
        value: ee.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[W] = ee.bind(n), w.NODE_ENV !== "production" && _e("Methods", W)) : w.NODE_ENV !== "production" && U(
        `Method "${W}" has type "${typeof ee}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    w.NODE_ENV !== "production" && !ce(r) && U(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const W = r.call(n, n);
    if (w.NODE_ENV !== "production" && du(W) && U(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !De(W))
      w.NODE_ENV !== "production" && U("data() should return an object.");
    else if (e.data = Mo(W), w.NODE_ENV !== "production")
      for (const ee in W)
        _e("Data", ee), wu(ee[0]) || Object.defineProperty(o, ee, {
          configurable: !0,
          enumerable: !0,
          get: () => W[ee],
          set: et
        });
  }
  if (Sl = !0, s)
    for (const W in s) {
      const ee = s[W], fe = ce(ee) ? ee.bind(n, n) : ce(ee.get) ? ee.get.bind(n, n) : et;
      w.NODE_ENV !== "production" && fe === et && U(`Computed property "${W}" has no getter.`);
      const ze = !ce(ee) && ce(ee.set) ? ee.set.bind(n) : w.NODE_ENV !== "production" ? () => {
        U(
          `Write operation failed: computed property "${W}" is readonly.`
        );
      } : et, qe = le({
        get: fe,
        set: ze
      });
      Object.defineProperty(o, W, {
        enumerable: !0,
        configurable: !0,
        get: () => qe.value,
        set: (Ve) => qe.value = Ve
      }), w.NODE_ENV !== "production" && _e("Computed", W);
    }
  if (a)
    for (const W in a)
      jh(a[W], o, n, W);
  if (u) {
    const W = ce(u) ? u.call(n) : u;
    Reflect.ownKeys(W).forEach((ee) => {
      hr(ee, W[ee]);
    });
  }
  l && Dc(l, e, "c");
  function Z(W, ee) {
    re(ee) ? ee.forEach((fe) => W(fe.bind(n))) : ee && W(ee.bind(n));
  }
  if (Z(Iv, c), Z(Cn, d), Z(Pv, p), Z(Vv, h), Z(Rv, m), Z(kv, E), Z(Bv, V), Z(Fv, D), Z(Mv, C), Z(Mh, O), Z(sa, $), Z(Lv, S), re(T))
    if (T.length) {
      const W = e.exposed || (e.exposed = {});
      T.forEach((ee) => {
        Object.defineProperty(W, ee, {
          get: () => n[ee],
          set: (fe) => n[ee] = fe
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === et && (e.render = A), R != null && (e.inheritAttrs = R), x && (e.components = x), Y && (e.directives = Y), S && Ph(e);
}
function Yv(e, t, n = et) {
  re(e) && (e = Nl(e));
  for (const o in e) {
    const r = e[o];
    let s;
    De(r) ? "default" in r ? s = vt(
      r.from || o,
      r.default,
      !0
    ) : s = vt(r.from || o) : s = vt(r), Le(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, w.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Dc(e, t, n) {
  nn(
    re(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function jh(e, t, n, o) {
  let r = o.includes(".") ? em(n, o) : () => n[o];
  if (Fe(e)) {
    const s = t[e];
    ce(s) ? En(r, s) : w.NODE_ENV !== "production" && U(`Invalid watch handler specified by key "${e}"`, s);
  } else if (ce(e))
    En(r, e.bind(n));
  else if (De(e))
    if (re(e))
      e.forEach((s) => jh(s, t, n, o));
    else {
      const s = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(s) ? En(r, s, e) : w.NODE_ENV !== "production" && U(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else w.NODE_ENV !== "production" && U(`Invalid watch option: "${o}"`, e);
}
function Hh(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let u;
  return a ? u = a : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(
    (f) => Vi(u, f, i, !0)
  ), Vi(u, t, i)), De(t) && s.set(t, u), u;
}
function Vi(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Vi(e, s, n, !0), r && r.forEach(
    (i) => Vi(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      w.NODE_ENV !== "production" && U(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Xv[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Xv = {
  data: xc,
  props: Rc,
  emits: Rc,
  // objects
  methods: Xr,
  computed: Xr,
  // lifecycle
  beforeCreate: pt,
  created: pt,
  beforeMount: pt,
  mounted: pt,
  beforeUpdate: pt,
  updated: pt,
  beforeDestroy: pt,
  beforeUnmount: pt,
  destroyed: pt,
  unmounted: pt,
  activated: pt,
  deactivated: pt,
  errorCaptured: pt,
  serverPrefetch: pt,
  // assets
  components: Xr,
  directives: Xr,
  // watch
  watch: Qv,
  // provide / inject
  provide: xc,
  inject: Jv
};
function xc(e, t) {
  return t ? e ? function() {
    return He(
      ce(e) ? e.call(this, this) : e,
      ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Jv(e, t) {
  return Xr(Nl(e), Nl(t));
}
function Nl(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function pt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xr(e, t) {
  return e ? He(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rc(e, t) {
  return e ? re(e) && re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : He(
    /* @__PURE__ */ Object.create(null),
    Cc(e),
    Cc(t ?? {})
  ) : t;
}
function Qv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = He(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = pt(e[o], t[o]);
  return n;
}
function Kh() {
  return {
    app: null,
    config: {
      isNativeTag: cE,
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
let Zv = 0;
function ey(e, t) {
  return function(o, r = null) {
    ce(o) || (o = He({}, o)), r != null && !De(r) && (w.NODE_ENV !== "production" && U("root props passed to app.mount() must be an object."), r = null);
    const s = Kh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let u = !1;
    const f = s.app = {
      _uid: Zv++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Hc,
      get config() {
        return s.config;
      },
      set config(l) {
        w.NODE_ENV !== "production" && U(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(l, ...c) {
        return i.has(l) ? w.NODE_ENV !== "production" && U("Plugin has already been applied to target app.") : l && ce(l.install) ? (i.add(l), l.install(f, ...c)) : ce(l) ? (i.add(l), l(f, ...c)) : w.NODE_ENV !== "production" && U(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(l) {
        return s.mixins.includes(l) ? w.NODE_ENV !== "production" && U(
          "Mixin has already been applied to target app" + (l.name ? `: ${l.name}` : "")
        ) : s.mixins.push(l), f;
      },
      component(l, c) {
        return w.NODE_ENV !== "production" && xl(l, s.config), c ? (w.NODE_ENV !== "production" && s.components[l] && U(`Component "${l}" has already been registered in target app.`), s.components[l] = c, f) : s.components[l];
      },
      directive(l, c) {
        return w.NODE_ENV !== "production" && Nh(l), c ? (w.NODE_ENV !== "production" && s.directives[l] && U(`Directive "${l}" has already been registered in target app.`), s.directives[l] = c, f) : s.directives[l];
      },
      mount(l, c, d) {
        if (u)
          w.NODE_ENV !== "production" && U(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          w.NODE_ENV !== "production" && l.__vue_app__ && U(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = f._ceVNode || Oe(o, r);
          return p.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), w.NODE_ENV !== "production" && (s.reload = () => {
            const h = Nn(p);
            h.el = null, e(h, l, d);
          }), e(p, l, d), u = !0, f._container = l, l.__vue_app__ = f, w.NODE_ENV !== "production" && (f._instance = p.component, Ev(f, Hc)), ua(p.component);
        }
      },
      onUnmount(l) {
        w.NODE_ENV !== "production" && typeof l != "function" && U(
          `Expected function as first argument to app.onUnmount(), but got ${typeof l}`
        ), a.push(l);
      },
      unmount() {
        u ? (nn(
          a,
          f._instance,
          16
        ), e(null, f._container), w.NODE_ENV !== "production" && (f._instance = null, vv(f)), delete f._container.__vue_app__) : w.NODE_ENV !== "production" && U("Cannot unmount an app that is not mounted.");
      },
      provide(l, c) {
        return w.NODE_ENV !== "production" && l in s.provides && (Ae(s.provides, l) ? U(
          `App already provides property with key "${String(l)}". It will be overwritten with the new value.`
        ) : U(
          `App already provides property with key "${String(l)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[l] = c, f;
      },
      runWithContext(l) {
        const c = $o;
        $o = f;
        try {
          return l();
        } finally {
          $o = c;
        }
      }
    };
    return f;
  };
}
let $o = null;
function hr(e, t) {
  if (!Qe)
    w.NODE_ENV !== "production" && U("provide() can only be used inside setup().");
  else {
    let n = Qe.provides;
    const o = Qe.parent && Qe.parent.provides;
    o === n && (n = Qe.provides = Object.create(o)), n[e] = t;
  }
}
function vt(e, t, n = !1) {
  const o = Qe || We;
  if (o || $o) {
    let r = $o ? $o._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(o && o.proxy) : t;
    w.NODE_ENV !== "production" && U(`injection "${String(e)}" not found.`);
  } else w.NODE_ENV !== "production" && U("inject() can only be used inside setup() or functional components.");
}
function ty() {
  return !!(Qe || We || $o);
}
const Wh = {}, zh = () => Object.create(Wh), qh = (e) => Object.getPrototypeOf(e) === Wh;
function ny(e, t, n, o = !1) {
  const r = {}, s = zh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Gh(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  w.NODE_ENV !== "production" && Xh(t || {}, r, e), n ? e.props = o ? r : uh(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function oy(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function ry(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, a = he(r), [u] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(w.NODE_ENV !== "production" && oy(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const l = e.vnode.dynamicProps;
      for (let c = 0; c < l.length; c++) {
        let d = l[c];
        if (la(e.emitsOptions, d))
          continue;
        const p = t[d];
        if (u)
          if (Ae(s, d))
            p !== s[d] && (s[d] = p, f = !0);
          else {
            const h = ct(d);
            r[h] = Al(
              u,
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
    let l;
    for (const c in a)
      (!t || // for camelCase
      !Ae(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = On(c)) === c || !Ae(t, l))) && (u ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[l] !== void 0) && (r[c] = Al(
        u,
        a,
        c,
        void 0,
        e,
        !0
      )) : delete r[c]);
    if (s !== a)
      for (const c in s)
        (!t || !Ae(t, c)) && (delete s[c], f = !0);
  }
  f && mn(e.attrs, "set", ""), w.NODE_ENV !== "production" && Xh(t || {}, r, e);
}
function Gh(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let u in t) {
      if (Zr(u))
        continue;
      const f = t[u];
      let l;
      r && Ae(r, l = ct(u)) ? !s || !s.includes(l) ? n[l] = f : (a || (a = {}))[l] = f : la(e.emitsOptions, u) || (!(u in o) || f !== o[u]) && (o[u] = f, i = !0);
    }
  if (s) {
    const u = he(n), f = a || Ne;
    for (let l = 0; l < s.length; l++) {
      const c = s[l];
      n[c] = Al(
        r,
        u,
        c,
        f[c],
        e,
        !Ae(f, c)
      );
    }
  }
  return i;
}
function Al(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const a = Ae(i, "default");
    if (a && o === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && ce(u)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const l = Ps(r);
          o = f[n] = u.call(
            null,
            t
          ), l();
        }
      } else
        o = u;
      r.ce && r.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !a ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === On(n)) && (o = !0));
  }
  return o;
}
const sy = /* @__PURE__ */ new WeakMap();
function Yh(e, t, n = !1) {
  const o = n ? sy : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, a = [];
  let u = !1;
  if (!ce(e)) {
    const l = (c) => {
      u = !0;
      const [d, p] = Yh(c, t, !0);
      He(i, d), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  if (!s && !u)
    return De(e) && o.set(e, fr), fr;
  if (re(s))
    for (let l = 0; l < s.length; l++) {
      w.NODE_ENV !== "production" && !Fe(s[l]) && U("props must be strings when using array syntax.", s[l]);
      const c = ct(s[l]);
      kc(c) && (i[c] = Ne);
    }
  else if (s) {
    w.NODE_ENV !== "production" && !De(s) && U("invalid props options", s);
    for (const l in s) {
      const c = ct(l);
      if (kc(c)) {
        const d = s[l], p = i[c] = re(d) || ce(d) ? { type: d } : He({}, d), h = p.type;
        let m = !1, E = !0;
        if (re(h))
          for (let v = 0; v < h.length; ++v) {
            const O = h[v], b = ce(O) && O.name;
            if (b === "Boolean") {
              m = !0;
              break;
            } else b === "String" && (E = !1);
          }
        else
          m = ce(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = m, p[
          1
          /* shouldCastTrue */
        ] = E, (m || Ae(p, "default")) && a.push(c);
      }
    }
  }
  const f = [i, a];
  return De(e) && o.set(e, f), f;
}
function kc(e) {
  return e[0] !== "$" && !Zr(e) ? !0 : (w.NODE_ENV !== "production" && U(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function iy(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Xh(e, t, n) {
  const o = he(t), r = n.propsOptions[0], s = Object.keys(e).map((i) => ct(i));
  for (const i in r) {
    let a = r[i];
    a != null && ay(
      i,
      o[i],
      a,
      w.NODE_ENV !== "production" ? gn(o) : o,
      !s.includes(i)
    );
  }
}
function ay(e, t, n, o, r) {
  const { type: s, required: i, validator: a, skipCheck: u } = n;
  if (i && r) {
    U('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !u) {
      let f = !1;
      const l = re(s) ? s : [s], c = [];
      for (let d = 0; d < l.length && !f; d++) {
        const { valid: p, expectedType: h } = uy(t, l[d]);
        c.push(h || ""), f = p;
      }
      if (!f) {
        U(cy(e, t, c));
        return;
      }
    }
    a && !a(t, o) && U('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ly = /* @__PURE__ */ Hn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function uy(e, t) {
  let n;
  const o = iy(t);
  if (o === "null")
    n = e === null;
  else if (ly(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = De(e) : o === "Array" ? n = re(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function cy(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Vo).join(" | ")}`;
  const r = n[0], s = pu(t), i = $c(t, r), a = $c(t, s);
  return n.length === 1 && Ic(r) && !fy(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Ic(s) && (o += `with value ${a}.`), o;
}
function $c(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ic(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function fy(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ou = (e) => e[0] === "_" || e === "$stable", Su = (e) => re(e) ? e.map(qt) : [qt(e)], dy = (e, t, n) => {
  if (t._n)
    return t;
  const o = Tt((...r) => (w.NODE_ENV !== "production" && Qe && !(n === null && We) && !(n && n.root !== Qe.root) && U(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Su(t(...r))), n);
  return o._c = !1, o;
}, Jh = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Ou(r)) continue;
    const s = e[r];
    if (ce(s))
      t[r] = dy(r, s, o);
    else if (s != null) {
      w.NODE_ENV !== "production" && U(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = Su(s);
      t[r] = () => i;
    }
  }
}, Qh = (e, t) => {
  w.NODE_ENV !== "production" && !$s(e.vnode) && U(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Su(t);
  e.slots.default = () => n;
}, Tl = (e, t, n) => {
  for (const o in t)
    (n || !Ou(o)) && (e[o] = t[o]);
}, py = (e, t, n) => {
  const o = e.slots = zh();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && cs(o, "__", r, !0);
    const s = t._;
    s ? (Tl(o, t, n), n && cs(o, "_", s, !0)) : Jh(t, o);
  } else t && Qh(e, t);
}, hy = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = Ne;
  if (o.shapeFlag & 32) {
    const a = t._;
    a ? w.NODE_ENV !== "production" && Gt ? (Tl(r, t, n), mn(e, "set", "$slots")) : n && a === 1 ? s = !1 : Tl(r, t, n) : (s = !t.$stable, Jh(t, r)), i = t;
  } else t && (Qh(e, t), i = { default: 1 });
  if (s)
    for (const a in r)
      !Ou(a) && i[a] == null && delete r[a];
};
let Ur, Zn;
function Xo(e, t) {
  e.appContext.config.performance && Li() && Zn.mark(`vue-${t}-${e.uid}`), w.NODE_ENV !== "production" && Ov(e, t, Li() ? Zn.now() : Date.now());
}
function Jo(e, t) {
  if (e.appContext.config.performance && Li()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Zn.mark(o), Zn.measure(
      `<${ca(e, e.type)}> ${t}`,
      n,
      o
    ), Zn.clearMarks(n), Zn.clearMarks(o);
  }
  w.NODE_ENV !== "production" && Sv(e, t, Li() ? Zn.now() : Date.now());
}
function Li() {
  return Ur !== void 0 || (typeof window < "u" && window.performance ? (Ur = !0, Zn = window.performance) : Ur = !1), Ur;
}
function my() {
  const e = [];
  if (w.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ht = xy;
function _y(e) {
  return gy(e);
}
function gy(e, t) {
  my();
  const n = xs();
  n.__VUE__ = !0, w.NODE_ENV !== "production" && bh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: i,
    createText: a,
    createComment: u,
    setText: f,
    setElementText: l,
    parentNode: c,
    nextSibling: d,
    setScopeId: p = et,
    insertStaticContent: h
  } = e, m = (g, y, N, M = null, P = null, F = null, J = void 0, z = null, q = w.NODE_ENV !== "production" && Gt ? !1 : !!y.dynamicChildren) => {
    if (g === y)
      return;
    g && !Oo(g, y) && (M = X(g), Be(g, P, F, !0), g = null), y.patchFlag === -2 && (q = !1, y.dynamicChildren = null);
    const { type: H, ref: ie, shapeFlag: G } = y;
    switch (H) {
      case Is:
        E(g, y, N, M);
        break;
      case Ye:
        v(g, y, N, M);
        break;
      case pi:
        g == null ? O(y, N, M, J) : w.NODE_ENV !== "production" && b(g, y, N, J);
        break;
      case Te:
        Y(
          g,
          y,
          N,
          M,
          P,
          F,
          J,
          z,
          q
        );
        break;
      default:
        G & 1 ? D(
          g,
          y,
          N,
          M,
          P,
          F,
          J,
          z,
          q
        ) : G & 6 ? de(
          g,
          y,
          N,
          M,
          P,
          F,
          J,
          z,
          q
        ) : G & 64 || G & 128 ? H.process(
          g,
          y,
          N,
          M,
          P,
          F,
          J,
          z,
          q,
          Ee
        ) : w.NODE_ENV !== "production" && U("Invalid VNode type:", H, `(${typeof H})`);
    }
    ie != null && P ? ns(ie, g && g.ref, F, y || g, !y) : ie == null && g && g.ref != null && ns(g.ref, null, F, g, !0);
  }, E = (g, y, N, M) => {
    if (g == null)
      o(
        y.el = a(y.children),
        N,
        M
      );
    else {
      const P = y.el = g.el;
      y.children !== g.children && f(P, y.children);
    }
  }, v = (g, y, N, M) => {
    g == null ? o(
      y.el = u(y.children || ""),
      N,
      M
    ) : y.el = g.el;
  }, O = (g, y, N, M) => {
    [g.el, g.anchor] = h(
      g.children,
      y,
      N,
      M,
      g.el,
      g.anchor
    );
  }, b = (g, y, N, M) => {
    if (y.children !== g.children) {
      const P = d(g.anchor);
      A(g), [y.el, y.anchor] = h(
        y.children,
        N,
        P,
        M
      );
    } else
      y.el = g.el, y.anchor = g.anchor;
  }, $ = ({ el: g, anchor: y }, N, M) => {
    let P;
    for (; g && g !== y; )
      P = d(g), o(g, N, M), g = P;
    o(y, N, M);
  }, A = ({ el: g, anchor: y }) => {
    let N;
    for (; g && g !== y; )
      N = d(g), r(g), g = N;
    r(y);
  }, D = (g, y, N, M, P, F, J, z, q) => {
    y.type === "svg" ? J = "svg" : y.type === "math" && (J = "mathml"), g == null ? C(
      y,
      N,
      M,
      P,
      F,
      J,
      z,
      q
    ) : T(
      g,
      y,
      P,
      F,
      J,
      z,
      q
    );
  }, C = (g, y, N, M, P, F, J, z) => {
    let q, H;
    const { props: ie, shapeFlag: G, transition: se, dirs: pe } = g;
    if (q = g.el = i(
      g.type,
      F,
      ie && ie.is,
      ie
    ), G & 8 ? l(q, g.children) : G & 16 && S(
      g.children,
      q,
      null,
      M,
      P,
      Fa(g, F),
      J,
      z
    ), pe && mo(g, null, M, "created"), V(q, g, g.scopeId, J, M), ie) {
      for (const ke in ie)
        ke !== "value" && !Zr(ke) && s(q, ke, null, ie[ke], F, M);
      "value" in ie && s(q, "value", null, ie.value, F), (H = ie.onVnodeBeforeMount) && cn(H, M, g);
    }
    w.NODE_ENV !== "production" && (cs(q, "__vnode", g, !0), cs(q, "__vueParentComponent", M, !0)), pe && mo(g, null, M, "beforeMount");
    const we = Ey(P, se);
    we && se.beforeEnter(q), o(q, y, N), ((H = ie && ie.onVnodeMounted) || we || pe) && ht(() => {
      H && cn(H, M, g), we && se.enter(q), pe && mo(g, null, M, "mounted");
    }, P);
  }, V = (g, y, N, M, P) => {
    if (N && p(g, N), M)
      for (let F = 0; F < M.length; F++)
        p(g, M[F]);
    if (P) {
      let F = P.subTree;
      if (w.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && (F = Nu(F.children) || F), y === F || rm(F.type) && (F.ssContent === y || F.ssFallback === y)) {
        const J = P.vnode;
        V(
          g,
          J,
          J.scopeId,
          J.slotScopeIds,
          P.parent
        );
      }
    }
  }, S = (g, y, N, M, P, F, J, z, q = 0) => {
    for (let H = q; H < g.length; H++) {
      const ie = g[H] = z ? Jn(g[H]) : qt(g[H]);
      m(
        null,
        ie,
        y,
        N,
        M,
        P,
        F,
        J,
        z
      );
    }
  }, T = (g, y, N, M, P, F, J) => {
    const z = y.el = g.el;
    w.NODE_ENV !== "production" && (z.__vnode = y);
    let { patchFlag: q, dynamicChildren: H, dirs: ie } = y;
    q |= g.patchFlag & 16;
    const G = g.props || Ne, se = y.props || Ne;
    let pe;
    if (N && _o(N, !1), (pe = se.onVnodeBeforeUpdate) && cn(pe, N, y, g), ie && mo(y, g, N, "beforeUpdate"), N && _o(N, !0), w.NODE_ENV !== "production" && Gt && (q = 0, J = !1, H = null), (G.innerHTML && se.innerHTML == null || G.textContent && se.textContent == null) && l(z, ""), H ? (R(
      g.dynamicChildren,
      H,
      z,
      N,
      M,
      Fa(y, P),
      F
    ), w.NODE_ENV !== "production" && os(g, y)) : J || fe(
      g,
      y,
      z,
      null,
      N,
      M,
      Fa(y, P),
      F,
      !1
    ), q > 0) {
      if (q & 16)
        x(z, G, se, N, P);
      else if (q & 2 && G.class !== se.class && s(z, "class", null, se.class, P), q & 4 && s(z, "style", G.style, se.style, P), q & 8) {
        const we = y.dynamicProps;
        for (let ke = 0; ke < we.length; ke++) {
          const Ie = we[ke], Ot = G[Ie], St = se[Ie];
          (St !== Ot || Ie === "value") && s(z, Ie, Ot, St, P, N);
        }
      }
      q & 1 && g.children !== y.children && l(z, y.children);
    } else !J && H == null && x(z, G, se, N, P);
    ((pe = se.onVnodeUpdated) || ie) && ht(() => {
      pe && cn(pe, N, y, g), ie && mo(y, g, N, "updated");
    }, M);
  }, R = (g, y, N, M, P, F, J) => {
    for (let z = 0; z < y.length; z++) {
      const q = g[z], H = y[z], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (q.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Oo(q, H) || // - In the case of a component, it could contain anything.
        q.shapeFlag & 198) ? c(q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          N
        )
      );
      m(
        q,
        H,
        ie,
        null,
        M,
        P,
        F,
        J,
        !0
      );
    }
  }, x = (g, y, N, M, P) => {
    if (y !== N) {
      if (y !== Ne)
        for (const F in y)
          !Zr(F) && !(F in N) && s(
            g,
            F,
            y[F],
            null,
            P,
            M
          );
      for (const F in N) {
        if (Zr(F)) continue;
        const J = N[F], z = y[F];
        J !== z && F !== "value" && s(g, F, z, J, P, M);
      }
      "value" in N && s(g, "value", y.value, N.value, P);
    }
  }, Y = (g, y, N, M, P, F, J, z, q) => {
    const H = y.el = g ? g.el : a(""), ie = y.anchor = g ? g.anchor : a("");
    let { patchFlag: G, dynamicChildren: se, slotScopeIds: pe } = y;
    w.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Gt || G & 2048) && (G = 0, q = !1, se = null), pe && (z = z ? z.concat(pe) : pe), g == null ? (o(H, N, M), o(ie, N, M), S(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      N,
      ie,
      P,
      F,
      J,
      z,
      q
    )) : G > 0 && G & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (R(
      g.dynamicChildren,
      se,
      N,
      P,
      F,
      J,
      z
    ), w.NODE_ENV !== "production" ? os(g, y) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (y.key != null || P && y === P.subTree) && os(
        g,
        y,
        !0
        /* shallow */
      )
    )) : fe(
      g,
      y,
      N,
      ie,
      P,
      F,
      J,
      z,
      q
    );
  }, de = (g, y, N, M, P, F, J, z, q) => {
    y.slotScopeIds = z, g == null ? y.shapeFlag & 512 ? P.ctx.activate(
      y,
      N,
      M,
      J,
      q
    ) : _e(
      y,
      N,
      M,
      P,
      F,
      J,
      q
    ) : Z(g, y, q);
  }, _e = (g, y, N, M, P, F, J) => {
    const z = g.component = Py(
      g,
      M,
      P
    );
    if (w.NODE_ENV !== "production" && z.type.__hmrId && hv(z), w.NODE_ENV !== "production" && (ui(g), Xo(z, "mount")), $s(g) && (z.ctx.renderer = Ee), w.NODE_ENV !== "production" && Xo(z, "init"), Ly(z, !1, J), w.NODE_ENV !== "production" && Jo(z, "init"), w.NODE_ENV !== "production" && Gt && (g.el = null), z.asyncDep) {
      if (P && P.registerDep(z, W, J), !g.el) {
        const q = z.subTree = Oe(Ye);
        v(null, q, y, N);
      }
    } else
      W(
        z,
        g,
        y,
        N,
        P,
        F,
        J
      );
    w.NODE_ENV !== "production" && (ci(), Jo(z, "mount"));
  }, Z = (g, y, N) => {
    const M = y.component = g.component;
    if (Cy(g, y, N))
      if (M.asyncDep && !M.asyncResolved) {
        w.NODE_ENV !== "production" && ui(y), ee(M, y, N), w.NODE_ENV !== "production" && ci();
        return;
      } else
        M.next = y, M.update();
    else
      y.el = g.el, M.vnode = y;
  }, W = (g, y, N, M, P, F, J) => {
    const z = () => {
      if (g.isMounted) {
        let { next: G, bu: se, u: pe, parent: we, vnode: ke } = g;
        {
          const ln = Zh(g);
          if (ln) {
            G && (G.el = ke.el, ee(g, G, J)), ln.asyncDep.then(() => {
              g.isUnmounted || z();
            });
            return;
          }
        }
        let Ie = G, Ot;
        w.NODE_ENV !== "production" && ui(G || g.vnode), _o(g, !1), G ? (G.el = ke.el, ee(g, G, J)) : G = ke, se && nr(se), (Ot = G.props && G.props.onVnodeBeforeUpdate) && cn(Ot, we, G, ke), _o(g, !0), w.NODE_ENV !== "production" && Xo(g, "render");
        const St = Vc(g);
        w.NODE_ENV !== "production" && Jo(g, "render");
        const an = g.subTree;
        g.subTree = St, w.NODE_ENV !== "production" && Xo(g, "patch"), m(
          an,
          St,
          // parent may have changed if it's in a teleport
          c(an.el),
          // anchor may have changed if it's in a fragment
          X(an),
          g,
          P,
          F
        ), w.NODE_ENV !== "production" && Jo(g, "patch"), G.el = St.el, Ie === null && Dy(g, St.el), pe && ht(pe, P), (Ot = G.props && G.props.onVnodeUpdated) && ht(
          () => cn(Ot, we, G, ke),
          P
        ), w.NODE_ENV !== "production" && wh(g), w.NODE_ENV !== "production" && ci();
      } else {
        let G;
        const { el: se, props: pe } = y, { bm: we, m: ke, parent: Ie, root: Ot, type: St } = g, an = pr(y);
        _o(g, !1), we && nr(we), !an && (G = pe && pe.onVnodeBeforeMount) && cn(G, Ie, y), _o(g, !0);
        {
          Ot.ce && // @ts-expect-error _def is private
          Ot.ce._def.shadowRoot !== !1 && Ot.ce._injectChildStyle(St), w.NODE_ENV !== "production" && Xo(g, "render");
          const ln = g.subTree = Vc(g);
          w.NODE_ENV !== "production" && Jo(g, "render"), w.NODE_ENV !== "production" && Xo(g, "patch"), m(
            null,
            ln,
            N,
            M,
            g,
            P,
            F
          ), w.NODE_ENV !== "production" && Jo(g, "patch"), y.el = ln.el;
        }
        if (ke && ht(ke, P), !an && (G = pe && pe.onVnodeMounted)) {
          const ln = y;
          ht(
            () => cn(G, Ie, ln),
            P
          );
        }
        (y.shapeFlag & 256 || Ie && pr(Ie.vnode) && Ie.vnode.shapeFlag & 256) && g.a && ht(g.a, P), g.isMounted = !0, w.NODE_ENV !== "production" && yv(g), y = N = M = null;
      }
    };
    g.scope.on();
    const q = g.effect = new qp(z);
    g.scope.off();
    const H = g.update = q.run.bind(q), ie = g.job = q.runIfDirty.bind(q);
    ie.i = g, ie.id = g.uid, q.scheduler = () => na(ie), _o(g, !0), w.NODE_ENV !== "production" && (q.onTrack = g.rtc ? (G) => nr(g.rtc, G) : void 0, q.onTrigger = g.rtg ? (G) => nr(g.rtg, G) : void 0), H();
  }, ee = (g, y, N) => {
    y.component = g;
    const M = g.vnode.props;
    g.vnode = y, g.next = null, ry(g, y.props, M, N), hy(g, y.children, N), Zt(), bc(g), en();
  }, fe = (g, y, N, M, P, F, J, z, q = !1) => {
    const H = g && g.children, ie = g ? g.shapeFlag : 0, G = y.children, { patchFlag: se, shapeFlag: pe } = y;
    if (se > 0) {
      if (se & 128) {
        qe(
          H,
          G,
          N,
          M,
          P,
          F,
          J,
          z,
          q
        );
        return;
      } else if (se & 256) {
        ze(
          H,
          G,
          N,
          M,
          P,
          F,
          J,
          z,
          q
        );
        return;
      }
    }
    pe & 8 ? (ie & 16 && I(H, P, F), G !== H && l(N, G)) : ie & 16 ? pe & 16 ? qe(
      H,
      G,
      N,
      M,
      P,
      F,
      J,
      z,
      q
    ) : I(H, P, F, !0) : (ie & 8 && l(N, ""), pe & 16 && S(
      G,
      N,
      M,
      P,
      F,
      J,
      z,
      q
    ));
  }, ze = (g, y, N, M, P, F, J, z, q) => {
    g = g || fr, y = y || fr;
    const H = g.length, ie = y.length, G = Math.min(H, ie);
    let se;
    for (se = 0; se < G; se++) {
      const pe = y[se] = q ? Jn(y[se]) : qt(y[se]);
      m(
        g[se],
        pe,
        N,
        null,
        P,
        F,
        J,
        z,
        q
      );
    }
    H > ie ? I(
      g,
      P,
      F,
      !0,
      !1,
      G
    ) : S(
      y,
      N,
      M,
      P,
      F,
      J,
      z,
      q,
      G
    );
  }, qe = (g, y, N, M, P, F, J, z, q) => {
    let H = 0;
    const ie = y.length;
    let G = g.length - 1, se = ie - 1;
    for (; H <= G && H <= se; ) {
      const pe = g[H], we = y[H] = q ? Jn(y[H]) : qt(y[H]);
      if (Oo(pe, we))
        m(
          pe,
          we,
          N,
          null,
          P,
          F,
          J,
          z,
          q
        );
      else
        break;
      H++;
    }
    for (; H <= G && H <= se; ) {
      const pe = g[G], we = y[se] = q ? Jn(y[se]) : qt(y[se]);
      if (Oo(pe, we))
        m(
          pe,
          we,
          N,
          null,
          P,
          F,
          J,
          z,
          q
        );
      else
        break;
      G--, se--;
    }
    if (H > G) {
      if (H <= se) {
        const pe = se + 1, we = pe < ie ? y[pe].el : M;
        for (; H <= se; )
          m(
            null,
            y[H] = q ? Jn(y[H]) : qt(y[H]),
            N,
            we,
            P,
            F,
            J,
            z,
            q
          ), H++;
      }
    } else if (H > se)
      for (; H <= G; )
        Be(g[H], P, F, !0), H++;
    else {
      const pe = H, we = H, ke = /* @__PURE__ */ new Map();
      for (H = we; H <= se; H++) {
        const ft = y[H] = q ? Jn(y[H]) : qt(y[H]);
        ft.key != null && (w.NODE_ENV !== "production" && ke.has(ft.key) && U(
          "Duplicate keys found during update:",
          JSON.stringify(ft.key),
          "Make sure keys are unique."
        ), ke.set(ft.key, H));
      }
      let Ie, Ot = 0;
      const St = se - we + 1;
      let an = !1, ln = 0;
      const Fr = new Array(St);
      for (H = 0; H < St; H++) Fr[H] = 0;
      for (H = pe; H <= G; H++) {
        const ft = g[H];
        if (Ot >= St) {
          Be(ft, P, F, !0);
          continue;
        }
        let un;
        if (ft.key != null)
          un = ke.get(ft.key);
        else
          for (Ie = we; Ie <= se; Ie++)
            if (Fr[Ie - we] === 0 && Oo(ft, y[Ie])) {
              un = Ie;
              break;
            }
        un === void 0 ? Be(ft, P, F, !0) : (Fr[un - we] = H + 1, un >= ln ? ln = un : an = !0, m(
          ft,
          y[un],
          N,
          null,
          P,
          F,
          J,
          z,
          q
        ), Ot++);
      }
      const hc = an ? vy(Fr) : fr;
      for (Ie = hc.length - 1, H = St - 1; H >= 0; H--) {
        const ft = we + H, un = y[ft], mc = ft + 1 < ie ? y[ft + 1].el : M;
        Fr[H] === 0 ? m(
          null,
          un,
          N,
          mc,
          P,
          F,
          J,
          z,
          q
        ) : an && (Ie < 0 || H !== hc[Ie] ? Ve(un, N, mc, 2) : Ie--);
      }
    }
  }, Ve = (g, y, N, M, P = null) => {
    const { el: F, type: J, transition: z, children: q, shapeFlag: H } = g;
    if (H & 6) {
      Ve(g.component.subTree, y, N, M);
      return;
    }
    if (H & 128) {
      g.suspense.move(y, N, M);
      return;
    }
    if (H & 64) {
      J.move(g, y, N, Ee);
      return;
    }
    if (J === Te) {
      o(F, y, N);
      for (let G = 0; G < q.length; G++)
        Ve(q[G], y, N, M);
      o(g.anchor, y, N);
      return;
    }
    if (J === pi) {
      $(g, y, N);
      return;
    }
    if (M !== 2 && H & 1 && z)
      if (M === 0)
        z.beforeEnter(F), o(F, y, N), ht(() => z.enter(F), P);
      else {
        const { leave: G, delayLeave: se, afterLeave: pe } = z, we = () => {
          g.ctx.isUnmounted ? r(F) : o(F, y, N);
        }, ke = () => {
          G(F, () => {
            we(), pe && pe();
          });
        };
        se ? se(F, we, ke) : ke();
      }
    else
      o(F, y, N);
  }, Be = (g, y, N, M = !1, P = !1) => {
    const {
      type: F,
      props: J,
      ref: z,
      children: q,
      dynamicChildren: H,
      shapeFlag: ie,
      patchFlag: G,
      dirs: se,
      cacheIndex: pe
    } = g;
    if (G === -2 && (P = !1), z != null && (Zt(), ns(z, null, N, g, !0), en()), pe != null && (y.renderCache[pe] = void 0), ie & 256) {
      y.ctx.deactivate(g);
      return;
    }
    const we = ie & 1 && se, ke = !pr(g);
    let Ie;
    if (ke && (Ie = J && J.onVnodeBeforeUnmount) && cn(Ie, y, g), ie & 6)
      wt(g.component, N, M);
    else {
      if (ie & 128) {
        g.suspense.unmount(N, M);
        return;
      }
      we && mo(g, null, y, "beforeUnmount"), ie & 64 ? g.type.remove(
        g,
        y,
        N,
        Ee,
        M
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== Te || G > 0 && G & 64) ? I(
        H,
        y,
        N,
        !1,
        !0
      ) : (F === Te && G & 384 || !P && ie & 16) && I(q, y, N), M && nt(g);
    }
    (ke && (Ie = J && J.onVnodeUnmounted) || we) && ht(() => {
      Ie && cn(Ie, y, g), we && mo(g, null, y, "unmounted");
    }, N);
  }, nt = (g) => {
    const { type: y, el: N, anchor: M, transition: P } = g;
    if (y === Te) {
      w.NODE_ENV !== "production" && g.patchFlag > 0 && g.patchFlag & 2048 && P && !P.persisted ? g.children.forEach((J) => {
        J.type === Ye ? r(J.el) : nt(J);
      }) : rt(N, M);
      return;
    }
    if (y === pi) {
      A(g);
      return;
    }
    const F = () => {
      r(N), P && !P.persisted && P.afterLeave && P.afterLeave();
    };
    if (g.shapeFlag & 1 && P && !P.persisted) {
      const { leave: J, delayLeave: z } = P, q = () => J(N, F);
      z ? z(g.el, F, q) : q();
    } else
      F();
  }, rt = (g, y) => {
    let N;
    for (; g !== y; )
      N = d(g), r(g), g = N;
    r(y);
  }, wt = (g, y, N) => {
    w.NODE_ENV !== "production" && g.type.__hmrId && mv(g);
    const {
      bum: M,
      scope: P,
      job: F,
      subTree: J,
      um: z,
      m: q,
      a: H,
      parent: ie,
      slots: { __: G }
    } = g;
    Pc(q), Pc(H), M && nr(M), ie && re(G) && G.forEach((se) => {
      ie.renderCache[se] = void 0;
    }), P.stop(), F && (F.flags |= 8, Be(J, g, y, N)), z && ht(z, y), ht(() => {
      g.isUnmounted = !0;
    }, y), y && y.pendingBranch && !y.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve()), w.NODE_ENV !== "production" && wv(g);
  }, I = (g, y, N, M = !1, P = !1, F = 0) => {
    for (let J = F; J < g.length; J++)
      Be(g[J], y, N, M, P);
  }, X = (g) => {
    if (g.shapeFlag & 6)
      return X(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const y = d(g.anchor || g.el), N = y && y[Ah];
    return N ? d(N) : y;
  };
  let Q = !1;
  const ne = (g, y, N) => {
    g == null ? y._vnode && Be(y._vnode, null, null, !0) : m(
      y._vnode || null,
      g,
      y,
      null,
      null,
      null,
      N
    ), y._vnode = g, Q || (Q = !0, bc(), Eh(), Q = !1);
  }, Ee = {
    p: m,
    um: Be,
    m: Ve,
    r: nt,
    mt: _e,
    mc: S,
    pc: fe,
    pbc: R,
    n: X,
    o: e
  };
  return {
    render: ne,
    hydrate: void 0,
    createApp: ey(ne)
  };
}
function Fa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function _o({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ey(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function os(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (re(o) && re(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let a = r[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = Jn(r[s]), a.el = i.el), !n && a.patchFlag !== -2 && os(i, a)), a.type === Is && (a.el = i.el), a.type === Ye && !a.el && (a.el = i.el), w.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function vy(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, a;
  const u = e.length;
  for (o = 0; o < u; o++) {
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
const yy = Symbol.for("v-scx"), by = () => {
  {
    const e = vt(yy);
    return e || w.NODE_ENV !== "production" && U(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ia(e, t) {
  return aa(e, null, t);
}
function wy(e, t) {
  return aa(
    e,
    null,
    w.NODE_ENV !== "production" ? He({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function En(e, t, n) {
  return w.NODE_ENV !== "production" && !ce(t) && U(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), aa(e, t, n);
}
function aa(e, t, n = Ne) {
  const { immediate: o, deep: r, flush: s, once: i } = n;
  w.NODE_ENV !== "production" && !t && (o !== void 0 && U(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && U(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && U(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = He({}, n);
  w.NODE_ENV !== "production" && (a.onWarn = U);
  const u = t && o || !t && s !== "post";
  let f;
  if (gs) {
    if (s === "sync") {
      const p = by();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!u) {
      const p = () => {
      };
      return p.stop = et, p.resume = et, p.pause = et, p;
    }
  }
  const l = Qe;
  a.call = (p, h, m) => nn(p, l, h, m);
  let c = !1;
  s === "post" ? a.scheduler = (p) => {
    ht(p, l && l.suspense);
  } : s !== "sync" && (c = !0, a.scheduler = (p, h) => {
    h ? p() : na(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), c && (p.flags |= 2, l && (p.id = l.uid, p.i = l));
  };
  const d = sv(e, t, a);
  return gs && (f ? f.push(d) : u && d()), d;
}
function Oy(e, t, n) {
  const o = this.proxy, r = Fe(e) ? e.includes(".") ? em(o, e) : () => o[e] : e.bind(o, o);
  let s;
  ce(t) ? s = t : (s = t.handler, n = t);
  const i = Ps(this), a = aa(r, s.bind(o), n);
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
function Sy(e, t, n = Ne) {
  const o = Dn();
  if (w.NODE_ENV !== "production" && !o)
    return U("useModel() called without active instance."), oe();
  const r = ct(t);
  if (w.NODE_ENV !== "production" && !o.propsOptions[0][r])
    return U(`useModel() called with prop "${t}" which is not declared.`), oe();
  const s = On(t), i = tm(e, r), a = ZE((u, f) => {
    let l, c = Ne, d;
    return wy(() => {
      const p = e[r];
      Nt(l, p) && (l = p, f());
    }), {
      get() {
        return u(), n.get ? n.get(l) : l;
      },
      set(p) {
        const h = n.set ? n.set(p) : p;
        if (!Nt(h, l) && !(c !== Ne && Nt(p, c)))
          return;
        const m = o.vnode.props;
        m && // check if parent has passed v-model
        (t in m || r in m || s in m) && (`onUpdate:${t}` in m || `onUpdate:${r}` in m || `onUpdate:${s}` in m) || (l = p, f()), o.emit(`update:${t}`, h), Nt(p, h) && Nt(p, c) && !Nt(h, d) && f(), c = p, d = h;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? i || Ne : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const tm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ct(t)}Modifiers`] || e[`${On(t)}Modifiers`];
function Ny(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Ne;
  if (w.NODE_ENV !== "production") {
    const {
      emitsOptions: l,
      propsOptions: [c]
    } = e;
    if (l)
      if (!(t in l))
        (!c || !(vo(ct(t)) in c)) && U(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${vo(ct(t))}" prop.`
        );
      else {
        const d = l[t];
        ce(d) && (d(...n) || U(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && tm(o, t.slice(7));
  if (i && (i.trim && (r = n.map((l) => Fe(l) ? l.trim() : l)), i.number && (r = n.map(Di))), w.NODE_ENV !== "production" && Nv(e, t, r), w.NODE_ENV !== "production") {
    const l = t.toLowerCase();
    l !== t && o[vo(l)] && U(
      `Event "${l}" is emitted in component ${ca(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${On(
        t
      )}" instead of "${t}".`
    );
  }
  let a, u = o[a = vo(t)] || // also try camelCase event handler (#2249)
  o[a = vo(ct(t))];
  !u && s && (u = o[a = vo(On(t))]), u && nn(
    u,
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
    e.emitted[a] = !0, nn(
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
  if (!ce(e)) {
    const u = (f) => {
      const l = nm(f, t, !0);
      l && (a = !0, He(i, l));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !a ? (De(e) && o.set(e, null), null) : (re(s) ? s.forEach((u) => i[u] = null) : He(i, s), De(e) && o.set(e, i), i);
}
function la(e, t) {
  return !e || !Cs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, On(t)) || Ae(e, t));
}
let Cl = !1;
function Mi() {
  Cl = !0;
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
    emit: u,
    render: f,
    renderCache: l,
    props: c,
    data: d,
    setupState: p,
    ctx: h,
    inheritAttrs: m
  } = e, E = Pi(e);
  let v, O;
  w.NODE_ENV !== "production" && (Cl = !1);
  try {
    if (n.shapeFlag & 4) {
      const A = r || o, D = w.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(A, {
        get(C, V, S) {
          return U(
            `Property '${String(
              V
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(C, V, S);
        }
      }) : A;
      v = qt(
        f.call(
          D,
          A,
          l,
          w.NODE_ENV !== "production" ? gn(c) : c,
          p,
          d,
          h
        )
      ), O = a;
    } else {
      const A = t;
      w.NODE_ENV !== "production" && a === c && Mi(), v = qt(
        A.length > 1 ? A(
          w.NODE_ENV !== "production" ? gn(c) : c,
          w.NODE_ENV !== "production" ? {
            get attrs() {
              return Mi(), gn(a);
            },
            slots: i,
            emit: u
          } : { attrs: a, slots: i, emit: u }
        ) : A(
          w.NODE_ENV !== "production" ? gn(c) : c,
          null
        )
      ), O = t.props ? a : Ay(a);
    }
  } catch (A) {
    rs.length = 0, Rs(A, e, 1), v = Oe(Ye);
  }
  let b = v, $;
  if (w.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && ([b, $] = om(v)), O && m !== !1) {
    const A = Object.keys(O), { shapeFlag: D } = b;
    if (A.length) {
      if (D & 7)
        s && A.some(Ci) && (O = Ty(
          O,
          s
        )), b = Nn(b, O, !1, !0);
      else if (w.NODE_ENV !== "production" && !Cl && b.type !== Ye) {
        const C = Object.keys(a), V = [], S = [];
        for (let T = 0, R = C.length; T < R; T++) {
          const x = C[T];
          Cs(x) ? Ci(x) || V.push(x[2].toLowerCase() + x.slice(3)) : S.push(x);
        }
        S.length && U(
          `Extraneous non-props attributes (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), V.length && U(
          `Extraneous non-emits event listeners (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (w.NODE_ENV !== "production" && !Lc(b) && U(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), b = Nn(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (w.NODE_ENV !== "production" && !Lc(b) && U(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ms(b, n.transition)), w.NODE_ENV !== "production" && $ ? $(b) : v = b, Pi(E), v;
}
const om = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Nu(t, !1);
  if (o) {
    if (w.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return om(o);
  } else return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (a) => {
    t[r] = a, n && (s > -1 ? n[s] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [qt(o), i];
};
function Nu(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (Bo(r)) {
      if (r.type !== Ye || r.children === "v-if") {
        if (n)
          return;
        if (n = r, w.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Nu(n.children);
      }
    } else
      return;
  }
  return n;
}
const Ay = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Cs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ty = (e, t) => {
  const n = {};
  for (const o in e)
    (!Ci(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Lc = (e) => e.shapeFlag & 7 || e.type === Ye;
function Cy(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: a, patchFlag: u } = t, f = s.emitsOptions;
  if (w.NODE_ENV !== "production" && (r || a) && Gt || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Mc(o, i, f) : !!i;
    if (u & 8) {
      const l = t.dynamicProps;
      for (let c = 0; c < l.length; c++) {
        const d = l[c];
        if (i[d] !== o[d] && !la(f, d))
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
    if (t[s] !== e[s] && !la(n, s))
      return !0;
  }
  return !1;
}
function Dy({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const rm = (e) => e.__isSuspense;
function xy(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : gh(e);
}
const Te = Symbol.for("v-fgt"), Is = Symbol.for("v-txt"), Ye = Symbol.for("v-cmt"), pi = Symbol.for("v-stc"), rs = [];
let kt = null;
function L(e = !1) {
  rs.push(kt = e ? null : []);
}
function Ry() {
  rs.pop(), kt = rs[rs.length - 1] || null;
}
let _s = 1;
function Fc(e, t = !1) {
  _s += e, e < 0 && kt && t && (kt.hasOnce = !0);
}
function sm(e) {
  return e.dynamicChildren = _s > 0 ? kt || fr : null, Ry(), _s > 0 && kt && kt.push(e), e;
}
function K(e, t, n, o, r, s) {
  return sm(
    _(
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
function xt(e, t, n, o, r) {
  return sm(
    Oe(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function Bo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Oo(e, t) {
  if (w.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = fi.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const ky = (...e) => am(
  ...e
), im = ({ key: e }) => e ?? null, hi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Fe(e) || Le(e) || ce(e) ? { i: We, r: e, k: t, f: !!n } : e : null);
function _(e, t = null, n = null, o = 0, r = null, s = e === Te ? 0 : 1, i = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && im(t),
    ref: t && hi(t),
    scopeId: Sh,
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
    ctx: We
  };
  return a ? (Au(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= Fe(n) ? 8 : 16), w.NODE_ENV !== "production" && u.key !== u.key && U("VNode created with invalid key (NaN). VNode type:", u.type), _s > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  kt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && kt.push(u), u;
}
const Oe = w.NODE_ENV !== "production" ? ky : am;
function am(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === jv) && (w.NODE_ENV !== "production" && !e && U(`Invalid vnode type when creating vnode: ${e}.`), e = Ye), Bo(e)) {
    const a = Nn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Au(a, n), _s > 0 && !s && kt && (a.shapeFlag & 6 ? kt[kt.indexOf(e)] = a : kt.push(a)), a.patchFlag = -2, a;
  }
  if (fm(e) && (e = e.__vccOpts), t) {
    t = Ke(t);
    let { class: a, style: u } = t;
    a && !Fe(a) && (t.class = Ce(a)), De(u) && (ps(u) && !re(u) && (u = He({}, u)), t.style = Lo(u));
  }
  const i = Fe(e) ? 1 : rm(e) ? 128 : Th(e) ? 64 : De(e) ? 4 : ce(e) ? 2 : 0;
  return w.NODE_ENV !== "production" && i & 4 && ps(e) && (e = he(e), U(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), _(
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
function Ke(e) {
  return e ? ps(e) || qh(e) ? He({}, e) : e : null;
}
function Nn(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: i, children: a, transition: u } = e, f = t ? co(r || {}, t) : r, l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && im(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? re(s) ? s.concat(hi(t)) : [s, hi(t)] : hi(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: w.NODE_ENV !== "production" && i === -1 && re(a) ? a.map(lm) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Te ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
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
  return u && o && ms(
    l,
    u.clone(l)
  ), l;
}
function lm(e) {
  const t = Nn(e);
  return re(e.children) && (t.children = e.children.map(lm)), t;
}
function je(e = " ", t = 0) {
  return Oe(Is, null, e, t);
}
function Je(e = "", t = !1) {
  return t ? (L(), xt(Ye, null, e)) : Oe(Ye, null, e);
}
function qt(e) {
  return e == null || typeof e == "boolean" ? Oe(Ye) : re(e) ? Oe(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Bo(e) ? Jn(e) : Oe(Is, null, String(e));
}
function Jn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nn(e);
}
function Au(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (re(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Au(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !qh(t) ? t._ctx = We : r === 3 && We && (We.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ce(t) ? (t = { default: t, _ctx: We }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [je(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function co(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Ce([t.class, o.class]));
      else if (r === "style")
        t.style = Lo([t.style, o.style]);
      else if (Cs(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(re(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function cn(e, t, n, o = null) {
  nn(e, t, 7, [
    n,
    o
  ]);
}
const $y = Kh();
let Iy = 0;
function Py(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || $y, s = {
    uid: Iy++,
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
    propsDefaults: Ne,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Ne,
    data: Ne,
    props: Ne,
    attrs: Ne,
    slots: Ne,
    refs: Ne,
    setupState: Ne,
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
  return w.NODE_ENV !== "production" ? s.ctx = Kv(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ny.bind(null, s), e.ce && e.ce(s), s;
}
let Qe = null;
const Dn = () => Qe || We;
let Fi, Dl;
{
  const e = xs(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  Fi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Qe = n
  ), Dl = t(
    "__VUE_SSR_SETTERS__",
    (n) => gs = n
  );
}
const Ps = (e) => {
  const t = Qe;
  return Fi(e), e.scope.on(), () => {
    e.scope.off(), Fi(t);
  };
}, Bc = () => {
  Qe && Qe.scope.off(), Fi(null);
}, Vy = /* @__PURE__ */ Hn("slot,component");
function xl(e, { isNativeTag: t }) {
  (Vy(e) || t(e)) && U(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function um(e) {
  return e.vnode.shapeFlag & 4;
}
let gs = !1;
function Ly(e, t = !1, n = !1) {
  t && Dl(t);
  const { props: o, children: r } = e.vnode, s = um(e);
  ny(e, o, s, t), py(e, r, n || t);
  const i = s ? My(e, t) : void 0;
  return t && Dl(!1), i;
}
function My(e, t) {
  var n;
  const o = e.type;
  if (w.NODE_ENV !== "production") {
    if (o.name && xl(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        xl(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        Nh(s[i]);
    }
    o.compilerOptions && Fy() && U(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Uh), w.NODE_ENV !== "production" && Wv(e);
  const { setup: r } = o;
  if (r) {
    Zt();
    const s = e.setupContext = r.length > 1 ? Uy(e) : null, i = Ps(e), a = xr(
      r,
      e,
      0,
      [
        w.NODE_ENV !== "production" ? gn(e.props) : e.props,
        s
      ]
    ), u = du(a);
    if (en(), i(), (u || e.sp) && !pr(e) && Ph(e), u) {
      if (a.then(Bc, Bc), t)
        return a.then((f) => {
          Uc(e, f, t);
        }).catch((f) => {
          Rs(f, e, 0);
        });
      if (e.asyncDep = a, w.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        U(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Uc(e, a, t);
  } else
    cm(e, t);
}
function Uc(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : De(t) ? (w.NODE_ENV !== "production" && Bo(t) && U(
    "setup() should not return VNodes directly - return a render function instead."
  ), w.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = dh(t), w.NODE_ENV !== "production" && zv(e)) : w.NODE_ENV !== "production" && t !== void 0 && U(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), cm(e, n);
}
const Fy = () => !0;
function cm(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || et);
  {
    const r = Ps(e);
    Zt();
    try {
      Gv(e);
    } finally {
      en(), r();
    }
  }
  w.NODE_ENV !== "production" && !o.render && e.render === et && !t && (o.template ? U(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : U("Component is missing template or render function: ", o));
}
const jc = w.NODE_ENV !== "production" ? {
  get(e, t) {
    return Mi(), Ze(e, "get", ""), e[t];
  },
  set() {
    return U("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return U("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Ze(e, "get", ""), e[t];
  }
};
function By(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Ze(e, "get", "$slots"), t[n];
    }
  });
}
function Uy(e) {
  const t = (n) => {
    if (w.NODE_ENV !== "production" && (e.exposed && U("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (re(n) ? o = "array" : Le(n) && (o = "ref")), o !== "object" && U(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (w.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, jc));
      },
      get slots() {
        return o || (o = By(e));
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, jc),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function ua(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dh(to(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ko)
        return ko[n](e);
    },
    has(t, n) {
      return n in t || n in ko;
    }
  })) : e.proxy;
}
const jy = /(?:^|[-_])(\w)/g, Hy = (e) => e.replace(jy, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Tu(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ca(e, t, n = !1) {
  let o = Tu(t);
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
  return ce(e) && "__vccOpts" in e;
}
const le = (e, t) => {
  const n = ov(e, t, gs);
  if (w.NODE_ENV !== "production") {
    const o = Dn();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Cu(e, t, n) {
  const o = arguments.length;
  return o === 2 ? De(t) && !re(t) ? Bo(t) ? Oe(e, null, [t]) : Oe(e, t) : Oe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Bo(n) && (n = [n]), Oe(e, t, n));
}
function Ky() {
  if (w.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!De(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (Le(c)) {
        Zt();
        const d = c.value;
        return en(), [
          "div",
          {},
          ["span", e, l(c)],
          "<",
          a(d),
          ">"
        ];
      } else {
        if (Jt(c))
          return [
            "div",
            {},
            ["span", e, gt(c) ? "ShallowReactive" : "Reactive"],
            "<",
            a(c),
            `>${Sn(c) ? " (readonly)" : ""}`
          ];
        if (Sn(c))
          return [
            "div",
            {},
            ["span", e, gt(c) ? "ShallowReadonly" : "Readonly"],
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
    c.type.props && c.props && d.push(i("props", he(c.props))), c.setupState !== Ne && d.push(i("setup", c.setupState)), c.data !== Ne && d.push(i("data", he(c.data)));
    const p = u(c, "computed");
    p && d.push(i("computed", p));
    const h = u(c, "inject");
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
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", o, c] : De(c) ? ["object", { object: d ? he(c) : c }] : ["span", n, String(c)];
  }
  function u(c, d) {
    const p = c.type;
    if (ce(p))
      return;
    const h = {};
    for (const m in c.ctx)
      f(p, m, d) && (h[m] = c.ctx[m]);
    return h;
  }
  function f(c, d, p) {
    const h = c[p];
    if (re(h) && h.includes(d) || De(h) && d in h || c.extends && f(c.extends, d, p) || c.mixins && c.mixins.some((m) => f(m, d, p)))
      return !0;
  }
  function l(c) {
    return gt(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Hc = "3.5.17", vn = w.NODE_ENV !== "production" ? U : et;
var jt = {};
let Rl;
const Kc = typeof window < "u" && window.trustedTypes;
if (Kc)
  try {
    Rl = /* @__PURE__ */ Kc.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    jt.NODE_ENV !== "production" && vn(`Error creating trusted types policy: ${e}`);
  }
const dm = Rl ? (e) => Rl.createHTML(e) : (e) => e, Wy = "http://www.w3.org/2000/svg", zy = "http://www.w3.org/1998/Math/MathML", Pn = typeof document < "u" ? document : null, Wc = Pn && /* @__PURE__ */ Pn.createElement("template"), qy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Pn.createElementNS(Wy, e) : t === "mathml" ? Pn.createElementNS(zy, e) : n ? Pn.createElement(e, { is: n }) : Pn.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Pn.createTextNode(e),
  createComment: (e) => Pn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pn.querySelector(e),
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
        const u = a.firstChild;
        for (; u.firstChild; )
          a.appendChild(u.firstChild);
        a.removeChild(u);
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
}, zn = "transition", jr = "animation", Es = Symbol("_vtc"), pm = {
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
}, Gy = /* @__PURE__ */ He(
  {},
  xh,
  pm
), Yy = (e) => (e.displayName = "Transition", e.props = Gy, e), Xy = /* @__PURE__ */ Yy(
  (e, { slots: t }) => Cu(Dv, Jy(e), t)
), go = (e, t = []) => {
  re(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, zc = (e) => e ? re(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Jy(e) {
  const t = {};
  for (const x in e)
    x in pm || (t[x] = e[x]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: u = s,
    appearActiveClass: f = i,
    appearToClass: l = a,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, h = Qy(r), m = h && h[0], E = h && h[1], {
    onBeforeEnter: v,
    onEnter: O,
    onEnterCancelled: b,
    onLeave: $,
    onLeaveCancelled: A,
    onBeforeAppear: D = v,
    onAppear: C = O,
    onAppearCancelled: V = b
  } = t, S = (x, Y, de, _e) => {
    x._enterCancelled = _e, Eo(x, Y ? l : a), Eo(x, Y ? f : i), de && de();
  }, T = (x, Y) => {
    x._isLeaving = !1, Eo(x, c), Eo(x, p), Eo(x, d), Y && Y();
  }, R = (x) => (Y, de) => {
    const _e = x ? C : O, Z = () => S(Y, x, de);
    go(_e, [Y, Z]), qc(() => {
      Eo(Y, x ? u : s), kn(Y, x ? l : a), zc(_e) || Gc(Y, o, m, Z);
    });
  };
  return He(t, {
    onBeforeEnter(x) {
      go(v, [x]), kn(x, s), kn(x, i);
    },
    onBeforeAppear(x) {
      go(D, [x]), kn(x, u), kn(x, f);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(x, Y) {
      x._isLeaving = !0;
      const de = () => T(x, Y);
      kn(x, c), x._enterCancelled ? (kn(x, d), Jc()) : (Jc(), kn(x, d)), qc(() => {
        x._isLeaving && (Eo(x, c), kn(x, p), zc($) || Gc(x, o, E, de));
      }), go($, [x, de]);
    },
    onEnterCancelled(x) {
      S(x, !1, void 0, !0), go(b, [x]);
    },
    onAppearCancelled(x) {
      S(x, !0, void 0, !0), go(V, [x]);
    },
    onLeaveCancelled(x) {
      T(x), go(A, [x]);
    }
  });
}
function Qy(e) {
  if (e == null)
    return null;
  if (De(e))
    return [Ba(e.enter), Ba(e.leave)];
  {
    const t = Ba(e);
    return [t, t];
  }
}
function Ba(e) {
  const t = mE(e);
  return jt.NODE_ENV !== "production" && cv(t, "<transition> explicit duration"), t;
}
function kn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Es] || (e[Es] = /* @__PURE__ */ new Set())).add(t);
}
function Eo(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Es];
  n && (n.delete(t), n.size || (e[Es] = void 0));
}
function qc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Zy = 0;
function Gc(e, t, n, o) {
  const r = e._endId = ++Zy, s = () => {
    r === e._endId && o();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: i, timeout: a, propCount: u } = eb(e, t);
  if (!i)
    return o();
  const f = i + "end";
  let l = 0;
  const c = () => {
    e.removeEventListener(f, d), s();
  }, d = (p) => {
    p.target === e && ++l >= u && c();
  };
  setTimeout(() => {
    l < u && c();
  }, a + 1), e.addEventListener(f, d);
}
function eb(e, t) {
  const n = window.getComputedStyle(e), o = (h) => (n[h] || "").split(", "), r = o(`${zn}Delay`), s = o(`${zn}Duration`), i = Yc(r, s), a = o(`${jr}Delay`), u = o(`${jr}Duration`), f = Yc(a, u);
  let l = null, c = 0, d = 0;
  t === zn ? i > 0 && (l = zn, c = i, d = s.length) : t === jr ? f > 0 && (l = jr, c = f, d = u.length) : (c = Math.max(i, f), l = c > 0 ? i > f ? zn : jr : null, d = l ? l === zn ? s.length : u.length : 0);
  const p = l === zn && /\b(transform|all)(,|$)/.test(
    o(`${zn}Property`).toString()
  );
  return {
    type: l,
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
function tb(e, t, n) {
  const o = e[Es];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Bi = Symbol("_vod"), hm = Symbol("_vsh"), mm = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Bi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Hr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Hr(e, !0), o.enter(e)) : o.leave(e, () => {
      Hr(e, !1);
    }) : Hr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Hr(e, t);
  }
};
jt.NODE_ENV !== "production" && (mm.name = "show");
function Hr(e, t) {
  e.style.display = t ? e[Bi] : "none", e[hm] = !t;
}
const nb = Symbol(jt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), ob = /(^|;)\s*display\s*:/;
function rb(e, t, n) {
  const o = e.style, r = Fe(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Fe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && mi(o, a, "");
        }
      else
        for (const i in t)
          n[i] == null && mi(o, i, "");
    for (const i in n)
      i === "display" && (s = !0), mi(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[nb];
      i && (n += ";" + i), o.cssText = n, s = ob.test(n);
    }
  } else t && e.removeAttribute("style");
  Bi in e && (e[Bi] = s ? o.display : "", e[hm] && (o.display = "none"));
}
const sb = /[^\\];\s*$/, Qc = /\s*!important$/;
function mi(e, t, n) {
  if (re(n))
    n.forEach((o) => mi(e, t, o));
  else if (n == null && (n = ""), jt.NODE_ENV !== "production" && sb.test(n) && vn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = ib(e, t);
    Qc.test(n) ? e.setProperty(
      On(o),
      n.replace(Qc, ""),
      "important"
    ) : e[o] = n;
  }
}
const Zc = ["Webkit", "Moz", "ms"], Ua = {};
function ib(e, t) {
  const n = Ua[t];
  if (n)
    return n;
  let o = ct(t);
  if (o !== "filter" && o in e)
    return Ua[t] = o;
  o = Vo(o);
  for (let r = 0; r < Zc.length; r++) {
    const s = Zc[r] + o;
    if (s in e)
      return Ua[t] = s;
  }
  return t;
}
const ef = "http://www.w3.org/1999/xlink";
function tf(e, t, n, o, r, s = TE(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ef, t.slice(6, t.length)) : e.setAttributeNS(ef, t, n) : n == null || s && !Up(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Qt(n) ? String(n) : n
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
    const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
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
    jt.NODE_ENV !== "production" && !i && vn(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(r || t);
}
function eo(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ab(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const of = Symbol("_vei");
function lb(e, t, n, o, r = null) {
  const s = e[of] || (e[of] = {}), i = s[t];
  if (o && i)
    i.value = jt.NODE_ENV !== "production" ? sf(o, t) : o;
  else {
    const [a, u] = ub(t);
    if (o) {
      const f = s[t] = db(
        jt.NODE_ENV !== "production" ? sf(o, t) : o,
        r
      );
      eo(e, a, f, u);
    } else i && (ab(e, a, i, u), s[t] = void 0);
  }
}
const rf = /(?:Once|Passive|Capture)$/;
function ub(e) {
  let t;
  if (rf.test(e)) {
    t = {};
    let o;
    for (; o = e.match(rf); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : On(e.slice(2)), t];
}
let ja = 0;
const cb = /* @__PURE__ */ Promise.resolve(), fb = () => ja || (cb.then(() => ja = 0), ja = Date.now());
function db(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    nn(
      pb(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = fb(), n;
}
function sf(e, t) {
  return ce(e) || re(e) ? e : (vn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), et);
}
function pb(e, t) {
  if (re(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hb = (e, t, n, o, r, s) => {
  const i = r === "svg";
  t === "class" ? tb(e, o, i) : t === "style" ? rb(e, n, o) : Cs(t) ? Ci(t) || lb(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mb(e, t, o, i)) ? (nf(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && tf(e, t, o, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Fe(o)) ? nf(e, ct(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), tf(e, t, o, i));
};
function mb(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && af(t) && ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return af(t) && Fe(n) ? !1 : t in e;
}
const gr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return re(t) ? (n) => nr(t, n) : t;
};
function _b(e) {
  e.target.composing = !0;
}
function lf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Fn = Symbol("_assign"), kl = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[Fn] = gr(r);
    const s = o || r.props && r.props.type === "number";
    eo(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), s && (a = Di(a)), e[Fn](a);
    }), n && eo(e, "change", () => {
      e.value = e.value.trim();
    }), t || (eo(e, "compositionstart", _b), eo(e, "compositionend", lf), eo(e, "change", lf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: s } }, i) {
    if (e[Fn] = gr(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Di(e.value) : e.value, u = t ?? "";
    a !== u && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === u) || (e.value = u));
  }
}, uf = {
  created(e, { value: t }, n) {
    e.checked = mr(t, n.props.value), e[Fn] = gr(n), eo(e, "change", () => {
      e[Fn](vs(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e[Fn] = gr(o), t !== n && (e.checked = mr(t, o.props.value));
  }
}, _m = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = Xi(t);
    eo(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Di(vs(i)) : vs(i)
      );
      e[Fn](
        e.multiple ? r ? new Set(s) : s : s[0]
      ), e._assigning = !0, _r(() => {
        e._assigning = !1;
      });
    }), e[Fn] = gr(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    cf(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Fn] = gr(n);
  },
  updated(e, { value: t }) {
    e._assigning || cf(e, t);
  }
};
function cf(e, t) {
  const n = e.multiple, o = re(t);
  if (n && !o && !Xi(t)) {
    jt.NODE_ENV !== "production" && vn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, s = e.options.length; r < s; r++) {
    const i = e.options[r], a = vs(i);
    if (n)
      if (o) {
        const u = typeof a;
        u === "string" || u === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = DE(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (mr(vs(i), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function vs(e) {
  return "_value" in e ? e._value : e.value;
}
const gb = ["ctrl", "shift", "alt", "meta"], Eb = {
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
  exact: (e, t) => gb.some((n) => e[`${n}Key`] && !t.includes(n))
}, gm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = Eb[t[i]];
      if (a && a(r, t)) return;
    }
    return e(r, ...s);
  });
}, vb = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, yb = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = On(r.key);
    if (t.some(
      (i) => i === s || vb[i] === s
    ))
      return e(r);
  });
}, bb = /* @__PURE__ */ He({ patchProp: hb }, qy);
let ff;
function wb() {
  return ff || (ff = _y(bb));
}
const fa = (...e) => {
  const t = wb().createApp(...e);
  jt.NODE_ENV !== "production" && (Sb(t), Nb(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Ab(o);
    if (!r) return;
    const s = t._component;
    !ce(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Ob(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Ob(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sb(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => OE(t) || SE(t) || NE(t),
    writable: !1
  });
}
function Nb(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        vn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return vn(o), n;
      },
      set() {
        vn(o);
      }
    });
  }
}
function Ab(e) {
  if (Fe(e)) {
    const t = document.querySelector(e);
    return jt.NODE_ENV !== "production" && !t && vn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return jt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && vn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Tb = {};
function Cb() {
  Ky();
}
Tb.NODE_ENV !== "production" && Cb();
var Db = Object.create, Em = Object.defineProperty, xb = Object.getOwnPropertyDescriptor, Du = Object.getOwnPropertyNames, Rb = Object.getPrototypeOf, kb = Object.prototype.hasOwnProperty, $b = (e, t) => function() {
  return e && (t = (0, e[Du(e)[0]])(e = 0)), t;
}, Ib = (e, t) => function() {
  return t || (0, e[Du(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Pb = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Du(t))
      !kb.call(e, r) && r !== n && Em(e, r, { get: () => t[r], enumerable: !(o = xb(t, r)) || o.enumerable });
  return e;
}, Vb = (e, t, n) => (n = e != null ? Db(Rb(e)) : {}, Pb(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Em(n, "default", { value: e, enumerable: !0 }),
  e
)), Vs = $b({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Lb = Ib({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    Vs(), t.exports = o;
    function n(s) {
      return s instanceof Buffer ? Buffer.from(s) : new s.constructor(s.buffer.slice(), s.byteOffset, s.length);
    }
    function o(s) {
      if (s = s || {}, s.circles) return r(s);
      const i = /* @__PURE__ */ new Map();
      if (i.set(Date, (c) => new Date(c)), i.set(Map, (c, d) => new Map(u(Array.from(c), d))), i.set(Set, (c, d) => new Set(u(Array.from(c), d))), s.constructorHandlers)
        for (const c of s.constructorHandlers)
          i.set(c[0], c[1]);
      let a = null;
      return s.proto ? l : f;
      function u(c, d) {
        const p = Object.keys(c), h = new Array(p.length);
        for (let m = 0; m < p.length; m++) {
          const E = p[m], v = c[E];
          typeof v != "object" || v === null ? h[E] = v : v.constructor !== Object && (a = i.get(v.constructor)) ? h[E] = a(v, d) : ArrayBuffer.isView(v) ? h[E] = n(v) : h[E] = d(v);
        }
        return h;
      }
      function f(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return u(c, f);
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
      function l(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return u(c, l);
        if (c.constructor !== Object && (a = i.get(c.constructor)))
          return a(c, l);
        const d = {};
        for (const p in c) {
          const h = c[p];
          typeof h != "object" || h === null ? d[p] = h : h.constructor !== Object && (a = i.get(h.constructor)) ? d[p] = a(h, l) : ArrayBuffer.isView(h) ? d[p] = n(h) : d[p] = l(h);
        }
        return d;
      }
    }
    function r(s) {
      const i = [], a = [], u = /* @__PURE__ */ new Map();
      if (u.set(Date, (p) => new Date(p)), u.set(Map, (p, h) => new Map(l(Array.from(p), h))), u.set(Set, (p, h) => new Set(l(Array.from(p), h))), s.constructorHandlers)
        for (const p of s.constructorHandlers)
          u.set(p[0], p[1]);
      let f = null;
      return s.proto ? d : c;
      function l(p, h) {
        const m = Object.keys(p), E = new Array(m.length);
        for (let v = 0; v < m.length; v++) {
          const O = m[v], b = p[O];
          if (typeof b != "object" || b === null)
            E[O] = b;
          else if (b.constructor !== Object && (f = u.get(b.constructor)))
            E[O] = f(b, h);
          else if (ArrayBuffer.isView(b))
            E[O] = n(b);
          else {
            const $ = i.indexOf(b);
            $ !== -1 ? E[O] = a[$] : E[O] = h(b);
          }
        }
        return E;
      }
      function c(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return l(p, c);
        if (p.constructor !== Object && (f = u.get(p.constructor)))
          return f(p, c);
        const h = {};
        i.push(p), a.push(h);
        for (const m in p) {
          if (Object.hasOwnProperty.call(p, m) === !1) continue;
          const E = p[m];
          if (typeof E != "object" || E === null)
            h[m] = E;
          else if (E.constructor !== Object && (f = u.get(E.constructor)))
            h[m] = f(E, c);
          else if (ArrayBuffer.isView(E))
            h[m] = n(E);
          else {
            const v = i.indexOf(E);
            v !== -1 ? h[m] = a[v] : h[m] = c(E);
          }
        }
        return i.pop(), a.pop(), h;
      }
      function d(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return l(p, d);
        if (p.constructor !== Object && (f = u.get(p.constructor)))
          return f(p, d);
        const h = {};
        i.push(p), a.push(h);
        for (const m in p) {
          const E = p[m];
          if (typeof E != "object" || E === null)
            h[m] = E;
          else if (E.constructor !== Object && (f = u.get(E.constructor)))
            h[m] = f(E, d);
          else if (ArrayBuffer.isView(E))
            h[m] = n(E);
          else {
            const v = i.indexOf(E);
            v !== -1 ? h[m] = a[v] : h[m] = d(E);
          }
        }
        return i.pop(), a.pop(), h;
      }
    }
  }
});
Vs();
Vs();
Vs();
var vm = typeof navigator < "u", te = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof te.chrome < "u" && te.chrome.devtools;
vm && (te.self, te.top);
var df;
typeof navigator < "u" && ((df = navigator.userAgent) == null || df.toLowerCase().includes("electron"));
Vs();
var Mb = Vb(Lb()), Fb = /(?:^|[-_/])(\w)/g;
function Bb(e, t) {
  return t ? t.toUpperCase() : "";
}
function Ub(e) {
  return e && `${e}`.replace(Fb, Bb);
}
function jb(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const o = n.lastIndexOf("/"), r = n.substring(o + 1);
  {
    const s = r.lastIndexOf(t);
    return r.substring(0, s);
  }
}
var pf = (0, Mb.default)({ circles: !0 });
const Hb = {
  trailing: !0
};
function Er(e, t = 25, n = {}) {
  if (n = { ...Hb, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let o, r, s = [], i, a;
  const u = (f, l) => (i = Kb(e, f, l), i.finally(() => {
    if (i = null, n.trailing && a && !r) {
      const c = u(f, a);
      return a = null, c;
    }
  }), i);
  return function(...f) {
    return i ? (n.trailing && (a = f), i) : new Promise((l) => {
      const c = !r && n.leading;
      clearTimeout(r), r = setTimeout(() => {
        r = null;
        const d = n.leading ? o : u(this, f);
        for (const p of s)
          p(d);
        s = [];
      }, t), c ? (o = u(this, f), l(o)) : s.push(l);
    });
  };
}
async function Kb(e, t, n) {
  return await e.apply(t, n);
}
function $l(e, t = {}, n) {
  for (const o in e) {
    const r = e[o], s = n ? `${n}:${o}` : o;
    typeof r == "object" && r !== null ? $l(r, t, s) : typeof r == "function" && (t[s] = r);
  }
  return t;
}
const Wb = { run: (e) => e() }, zb = () => Wb, ym = typeof console.createTask < "u" ? console.createTask : zb;
function qb(e, t) {
  const n = t.shift(), o = ym(n);
  return e.reduce(
    (r, s) => r.then(() => o.run(() => s(...t))),
    Promise.resolve()
  );
}
function Gb(e, t) {
  const n = t.shift(), o = ym(n);
  return Promise.all(e.map((r) => o.run(() => r(...t))));
}
function Ha(e, t) {
  for (const n of [...e])
    n(t);
}
class Yb {
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
    const n = $l(t), o = Object.keys(n).map(
      (r) => this.hook(r, n[r])
    );
    return () => {
      for (const r of o.splice(0, o.length))
        r();
    };
  }
  removeHooks(t) {
    const n = $l(t);
    for (const o in n)
      this.removeHook(o, n[o]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(qb, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Gb, t, ...n);
  }
  callHookWith(t, n, ...o) {
    const r = this._before || this._after ? { name: n, args: o, context: {} } : void 0;
    this._before && Ha(this._before, r);
    const s = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      o
    );
    return s instanceof Promise ? s.finally(() => {
      this._after && r && Ha(this._after, r);
    }) : (this._after && r && Ha(this._after, r), s);
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
  return new Yb();
}
var Xb = Object.create, wm = Object.defineProperty, Jb = Object.getOwnPropertyDescriptor, xu = Object.getOwnPropertyNames, Qb = Object.getPrototypeOf, Zb = Object.prototype.hasOwnProperty, e0 = (e, t) => function() {
  return e && (t = (0, e[xu(e)[0]])(e = 0)), t;
}, Om = (e, t) => function() {
  return t || (0, e[xu(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, t0 = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of xu(t))
      !Zb.call(e, r) && r !== n && wm(e, r, { get: () => t[r], enumerable: !(o = Jb(t, r)) || o.enumerable });
  return e;
}, n0 = (e, t, n) => (n = e != null ? Xb(Qb(e)) : {}, t0(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  wm(n, "default", { value: e, enumerable: !0 }),
  e
)), B = e0({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), o0 = Om({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    B(), function(n) {
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
      }, u = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), l = [".", "!", "~", "*", "'", "(", ")"].join(""), c = function(E, v) {
        var O = "-", b = "", $ = "", A = !0, D = {}, C, V, S, T, R, x, Y, de, _e, Z, W, ee, fe, ze, qe = "";
        if (typeof E != "string")
          return "";
        if (typeof v == "string" && (O = v), Y = a.en, de = i.en, typeof v == "object") {
          C = v.maintainCase || !1, D = v.custom && typeof v.custom == "object" ? v.custom : D, S = +v.truncate > 1 && v.truncate || !1, T = v.uric || !1, R = v.uricNoSlash || !1, x = v.mark || !1, A = !(v.symbols === !1 || v.lang === !1), O = v.separator || O, T && (qe += u), R && (qe += f), x && (qe += l), Y = v.lang && a[v.lang] && A ? a[v.lang] : A ? a.en : {}, de = v.lang && i[v.lang] ? i[v.lang] : v.lang === !1 || v.lang === !0 ? {} : i.en, v.titleCase && typeof v.titleCase.length == "number" && Array.prototype.toString.call(v.titleCase) ? (v.titleCase.forEach(function(Ve) {
            D[Ve + ""] = Ve + "";
          }), V = !0) : V = !!v.titleCase, v.custom && typeof v.custom.length == "number" && Array.prototype.toString.call(v.custom) && v.custom.forEach(function(Ve) {
            D[Ve + ""] = Ve + "";
          }), Object.keys(D).forEach(function(Ve) {
            var Be;
            Ve.length > 1 ? Be = new RegExp("\\b" + p(Ve) + "\\b", "gi") : Be = new RegExp(p(Ve), "gi"), E = E.replace(Be, D[Ve]);
          });
          for (W in D)
            qe += W;
        }
        for (qe += O, qe = p(qe), E = E.replace(/(^\s+|\s+$)/g, ""), fe = !1, ze = !1, Z = 0, ee = E.length; Z < ee; Z++)
          W = E[Z], h(W, D) ? fe = !1 : de[W] ? (W = fe && de[W].match(/[A-Za-z0-9]/) ? " " + de[W] : de[W], fe = !1) : W in o ? (Z + 1 < ee && r.indexOf(E[Z + 1]) >= 0 ? ($ += W, W = "") : ze === !0 ? (W = s[$] + o[W], $ = "") : W = fe && o[W].match(/[A-Za-z0-9]/) ? " " + o[W] : o[W], fe = !1, ze = !1) : W in s ? ($ += W, W = "", Z === ee - 1 && (W = s[$]), ze = !0) : /* process symbol chars */ Y[W] && !(T && u.indexOf(W) !== -1) && !(R && f.indexOf(W) !== -1) ? (W = fe || b.substr(-1).match(/[A-Za-z0-9]/) ? O + Y[W] : Y[W], W += E[Z + 1] !== void 0 && E[Z + 1].match(/[A-Za-z0-9]/) ? O : "", fe = !0) : (ze === !0 ? (W = s[$] + W, $ = "", ze = !1) : fe && (/[A-Za-z0-9]/.test(W) || b.substr(-1).match(/A-Za-z0-9]/)) && (W = " " + W), fe = !1), b += W.replace(new RegExp("[^\\w\\s" + qe + "_-]", "g"), O);
        return V && (b = b.replace(/(\w)(\S*)/g, function(Ve, Be, nt) {
          var rt = Be.toUpperCase() + (nt !== null ? nt : "");
          return Object.keys(D).indexOf(rt.toLowerCase()) < 0 ? rt : rt.toLowerCase();
        })), b = b.replace(/\s+/g, O).replace(new RegExp("\\" + O + "+", "g"), O).replace(new RegExp("(^\\" + O + "+|\\" + O + "+$)", "g"), ""), S && b.length > S && (_e = b.charAt(S) === O, b = b.slice(0, S), _e || (b = b.slice(0, b.lastIndexOf(O)))), !C && !V && (b = b.toLowerCase()), b;
      }, d = function(E) {
        return function(O) {
          return c(O, E);
        };
      }, p = function(E) {
        return E.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, h = function(m, E) {
        for (var v in E)
          if (E[v] === m)
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
}), r0 = Om({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    B(), t.exports = o0();
  }
});
B();
B();
B();
B();
B();
B();
B();
B();
function s0(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function i0(e) {
  const t = e.__file;
  if (t)
    return Ub(jb(t, ".vue"));
}
function hf(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Ru(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Sm(e) {
  var t, n;
  const o = (t = e.subTree) == null ? void 0 : t.type, r = Ru(e);
  return r ? ((n = r?.types) == null ? void 0 : n.Fragment) === o : !1;
}
function da(e) {
  var t, n, o;
  const r = s0(e?.type || {});
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
  const s = i0(e?.type || {});
  return s || "Anonymous Component";
}
function a0(e) {
  var t, n, o;
  const r = (o = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? o : 0, s = e === e?.root ? "root" : e.uid;
  return `${r}:${s}`;
}
function Il(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function l0() {
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
var Qs;
function u0(e) {
  return Qs || (Qs = document.createRange()), Qs.selectNode(e), Qs.getBoundingClientRect();
}
function c0(e) {
  const t = l0();
  if (!e.children)
    return t;
  for (let n = 0, o = e.children.length; n < o; n++) {
    const r = e.children[n];
    let s;
    if (r.component)
      s = Uo(r.component);
    else if (r.el) {
      const i = r.el;
      i.nodeType === 1 || i.getBoundingClientRect ? s = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (s = u0(i));
    }
    s && f0(t, s);
  }
  return t;
}
function f0(e, t) {
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
function Uo(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? mf : Sm(e) ? c0(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Uo(e.subTree.component) : mf;
}
B();
function ku(e) {
  return Sm(e) ? d0(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function d0(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...ku(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Nm = "__vue-devtools-component-inspector__", Am = "__vue-devtools-component-inspector__card__", Tm = "__vue-devtools-component-inspector__name__", Cm = "__vue-devtools-component-inspector__indicator__", Dm = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, p0 = {
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
}, h0 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Rr() {
  return document.getElementById(Nm);
}
function m0() {
  return document.getElementById(Am);
}
function _0() {
  return document.getElementById(Cm);
}
function g0() {
  return document.getElementById(Tm);
}
function $u(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function Iu(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Nm, Object.assign(n.style, {
    ...Dm,
    ...$u(e.bounds),
    ...e.style
  });
  const o = document.createElement("span");
  o.id = Am, Object.assign(o.style, {
    ...p0,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = Tm, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const s = document.createElement("i");
  return s.id = Cm, s.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(s.style, h0), o.appendChild(r), o.appendChild(s), n.appendChild(o), document.body.appendChild(n), n;
}
function Pu(e) {
  const t = Rr(), n = m0(), o = g0(), r = _0();
  t && (Object.assign(t.style, {
    ...Dm,
    ...$u(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function E0(e) {
  const t = Uo(e);
  if (!t.width && !t.height)
    return;
  const n = da(e);
  Rr() ? Pu({ bounds: t, name: n }) : Iu({ bounds: t, name: n });
}
function xm() {
  const e = Rr();
  e && (e.style.display = "none");
}
var Pl = null;
function Vl(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Pl = n, n.vnode.el)) {
      const r = Uo(n), s = da(n);
      Rr() ? Pu({ bounds: r, name: s }) : Iu({ bounds: r, name: s });
    }
  }
}
function v0(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Pl) {
    const n = a0(Pl);
    t(n);
  }
}
var Ui = null;
function y0() {
  xm(), window.removeEventListener("mouseover", Vl), window.removeEventListener("click", Ui, !0), Ui = null;
}
function b0() {
  return window.addEventListener("mouseover", Vl), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), v0(n, (o) => {
        window.removeEventListener("click", t, !0), Ui = null, window.removeEventListener("mouseover", Vl);
        const r = Rr();
        r && (r.style.display = "none"), e(JSON.stringify({ id: o }));
      });
    }
    Ui = t, window.addEventListener("click", t, !0);
  });
}
function w0(e) {
  const t = Il(_t.value, e.id);
  if (t) {
    const [n] = ku(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const o = Uo(t), r = document.createElement("div"), s = {
        ...$u(o),
        position: "absolute"
      };
      Object.assign(r.style, s), document.body.appendChild(r), r.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(r);
      }, 2e3);
    }
    setTimeout(() => {
      const o = Uo(t);
      if (o.width || o.height) {
        const r = da(t), s = Rr();
        s ? Pu({ ...e, name: r, bounds: o }) : Iu({ ...e, name: r, bounds: o }), setTimeout(() => {
          s && (s.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
B();
var _f, gf;
(gf = (_f = te).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (_f.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function O0(e) {
  let t = 0;
  const n = setInterval(() => {
    te.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function S0() {
  const e = te.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function N0() {
  return new Promise((e) => {
    function t() {
      S0(), e(te.__VUE_INSPECTOR__);
    }
    te.__VUE_INSPECTOR__ ? t() : O0(() => {
      t();
    });
  });
}
B();
B();
function A0(e) {
  return !!(e && e.__v_isReadonly);
}
function Rm(e) {
  return A0(e) ? Rm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ka(e) {
  return !!(e && e.__v_isRef === !0);
}
function Jr(e) {
  const t = e && e.__v_raw;
  return t ? Jr(t) : e;
}
var T0 = class {
  constructor() {
    this.refEditor = new C0();
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
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : Jr(t) instanceof Map ? t.delete(n) : Jr(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const r = t[e.newKey || n];
        this.refEditor.isRef(r) ? this.refEditor.set(r, o) : Jr(t) instanceof Map ? t.set(e.newKey || n, o) : Jr(t) instanceof Set ? t.add(o) : t[e.newKey || n] = o;
      }
    };
  }
}, C0 = class {
  set(e, t) {
    if (Ka(e))
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
    return Ka(e) ? e.value : e;
  }
  isRef(e) {
    return Ka(e) || Rm(e);
  }
};
B();
B();
B();
var D0 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function x0() {
  if (!vm || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(D0);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
B();
B();
B();
var Ef, vf;
(vf = (Ef = te).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Ef.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var R0 = new Proxy(te.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function k0(e, t) {
  tt.timelineLayersState[t.id] = !1, R0.push({
    ...e,
    descriptorId: t.id,
    appRecord: Ru(t.app)
  });
}
var yf, bf;
(bf = (yf = te).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (yf.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Vu = new Proxy(te.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), km = Er(() => {
  kr.hooks.callHook("sendInspectorToClient", $m());
});
function $0(e, t) {
  var n, o;
  Vu.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (o = e.stateFilterPlaceholder) != null ? o : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Ru(t.app)
  }), km();
}
function $m() {
  return Vu.filter((e) => e.descriptor.app === _t.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function _i(e, t) {
  return Vu.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function I0() {
  const e = bm();
  e.hook("addInspector", ({ inspector: o, plugin: r }) => {
    $0(o, r.descriptor);
  });
  const t = Er(async ({ inspectorId: o, plugin: r }) => {
    var s;
    if (!o || !((s = r?.descriptor) != null && s.app) || tt.highPerfModeEnabled)
      return;
    const i = _i(o, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: o,
      filter: i?.treeFilter || "",
      rootNodes: []
    };
    await new Promise((u) => {
      e.callHookWith(
        async (f) => {
          await Promise.all(f.map((l) => l(a))), u();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (u) => {
        await Promise.all(u.map((f) => f({
          inspectorId: o,
          rootNodes: a.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = Er(async ({ inspectorId: o, plugin: r }) => {
    var s;
    if (!o || !((s = r?.descriptor) != null && s.app) || tt.highPerfModeEnabled)
      return;
    const i = _i(o, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: o,
      nodeId: i?.selectedNodeId || "",
      state: null
    }, u = {
      currentTab: `custom-inspector:${o}`
    };
    a.nodeId && await new Promise((f) => {
      e.callHookWith(
        async (l) => {
          await Promise.all(l.map((c) => c(a, u))), f();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (f) => {
        await Promise.all(f.map((l) => l({
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
    const i = _i(o, s.descriptor.app);
    i && (i.selectedNodeId = r);
  }), e.hook("timelineLayerAdded", ({ options: o, plugin: r }) => {
    k0(o, r.descriptor);
  }), e.hook("timelineEventAdded", ({ options: o, plugin: r }) => {
    var s;
    const i = ["performance", "component-event", "keyboard", "mouse"];
    tt.highPerfModeEnabled || !((s = tt.timelineLayersState) != null && s[r.descriptor.id]) && !i.includes(o.layerId) || e.callHookWith(
      async (a) => {
        await Promise.all(a.map((u) => u(o)));
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
  }), e.hook("getComponentBounds", async ({ instance: o }) => Uo(o)), e.hook("getComponentName", ({ instance: o }) => da(o)), e.hook("componentHighlight", ({ uid: o }) => {
    const r = _t.value.instanceMap.get(o);
    r && E0(r);
  }), e.hook("componentUnhighlight", () => {
    xm();
  }), e;
}
var wf, Of;
(Of = (wf = te).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (wf.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Sf, Nf;
(Nf = (Sf = te).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Sf.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Af, Tf;
(Tf = (Af = te).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Af.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Cf, Df;
(Df = (Cf = te).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Cf.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var xf, Rf;
(Rf = (xf = te).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (xf.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var So = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function P0() {
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
    timelineLayersState: x0()
  };
}
var kf, $f;
($f = (kf = te)[So]) != null || (kf[So] = P0());
var V0 = Er((e) => {
  kr.hooks.callHook("devtoolsStateUpdated", { state: e });
});
Er((e, t) => {
  kr.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var pa = new Proxy(te.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? te.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : te.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), _t = new Proxy(te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Im() {
  V0({
    ...te[So],
    appRecords: pa.value,
    activeAppRecordId: _t.id,
    tabs: te.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: te.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function L0(e) {
  te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Im();
}
function M0(e) {
  te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Im();
}
var tt = new Proxy(te[So], {
  get(e, t) {
    return t === "appRecords" ? pa : t === "activeAppRecordId" ? _t.id : t === "tabs" ? te.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? te.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : te[So][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...te[So] }, e[t] = n, te[So][t] = n, !0;
  }
});
function F0(e = {}) {
  var t, n, o;
  const { file: r, host: s, baseUrl: i = window.location.origin, line: a = 0, column: u = 0 } = e;
  if (r) {
    if (s === "chrome-extension") {
      const f = r.replace(/\\/g, "\\\\"), l = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${l}__open-in-editor?file=${encodeURI(r)}`).then((c) => {
        if (!c.ok) {
          const d = `Opening component ${f} failed`;
          console.log(`%c${d}`, "color:red");
        }
      });
    } else if (tt.vitePluginDetected) {
      const f = (o = te.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? o : i;
      te.__VUE_INSPECTOR__.openInEditor(f, r, a, u);
    }
  }
}
B();
B();
B();
B();
B();
var If, Pf;
(Pf = (If = te).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (If.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Lu = new Proxy(te.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Ll(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function Mu(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function B0(e) {
  var t, n, o;
  const r = (n = (t = Lu.find((s) => {
    var i;
    return s[0].id === e && !!((i = s[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (o = r?.settings) != null ? o : null;
}
function Pm(e, t) {
  var n, o, r;
  const s = Mu(e);
  if (s) {
    const i = localStorage.getItem(s);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (o = (n = Lu.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? o : null;
    return Ll((r = i?.settings) != null ? r : {});
  }
  return Ll(t);
}
function U0(e, t) {
  const n = Mu(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Ll(t)));
}
function j0(e, t, n) {
  const o = Mu(e), r = localStorage.getItem(o), s = JSON.parse(r || "{}"), i = {
    ...s,
    [t]: n
  };
  localStorage.setItem(o, JSON.stringify(i)), kr.hooks.callHookWith(
    (a) => {
      a.forEach((u) => u({
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
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
var Vf, Lf, Rt = (Lf = (Vf = te).__VUE_DEVTOOLS_HOOK) != null ? Lf : Vf.__VUE_DEVTOOLS_HOOK = bm(), H0 = {
  vueAppInit(e) {
    Rt.hook("app:init", e);
  },
  vueAppUnmount(e) {
    Rt.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    Rt.hook("app:connected", e);
  },
  componentAdded(e) {
    return Rt.hook("component:added", e);
  },
  componentEmit(e) {
    return Rt.hook("component:emit", e);
  },
  componentUpdated(e) {
    return Rt.hook("component:updated", e);
  },
  componentRemoved(e) {
    return Rt.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    Rt.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return Rt.hook("perf:start", e);
  },
  perfEnd(e) {
    return Rt.hook("perf:end", e);
  }
}, Vm = {
  on: H0,
  setupDevToolsPlugin(e, t) {
    return Rt.callHook("devtools-plugin:setup", e, t);
  }
}, K0 = class {
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
    if (tt.highPerfModeEnabled)
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
        Rt.callHook("component:updated", ...o);
      } else
        Rt.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && U0(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    tt.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    tt.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return tt.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    tt.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
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
}, W0 = K0;
B();
B();
B();
B();
var z0 = "__vue_devtool_undefined__", q0 = "__vue_devtool_infinity__", G0 = "__vue_devtool_negative_infinity__", Y0 = "__vue_devtool_nan__";
B();
B();
var X0 = {
  [z0]: "undefined",
  [Y0]: "NaN",
  [q0]: "Infinity",
  [G0]: "-Infinity"
};
Object.entries(X0).reduce((e, [t, n]) => (e[n] = t, e), {});
B();
B();
B();
B();
B();
var Mf, Ff;
(Ff = (Mf = te).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Mf.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Lm(e, t) {
  return Vm.setupDevToolsPlugin(e, t);
}
function J0(e, t) {
  const [n, o] = e;
  if (n.app !== t)
    return;
  const r = new W0({
    plugin: {
      setupFn: o,
      descriptor: n
    },
    ctx: kr
  });
  n.packageName === "vuex" && r.on.editInspectorState((s) => {
    r.sendInspectorState(s.inspectorId);
  }), o(r);
}
function Mm(e, t) {
  te.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || tt.highPerfModeEnabled && !t?.inspectingComponent || (te.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Lu.forEach((n) => {
    J0(n, e);
  }));
}
B();
B();
var ys = "__VUE_DEVTOOLS_ROUTER__", vr = "__VUE_DEVTOOLS_ROUTER_INFO__", Bf, Uf;
(Uf = (Bf = te)[vr]) != null || (Bf[vr] = {
  currentRoute: null,
  routes: []
});
var jf, Hf;
(Hf = (jf = te)[ys]) != null || (jf[ys] = {});
new Proxy(te[vr], {
  get(e, t) {
    return te[vr][t];
  }
});
new Proxy(te[ys], {
  get(e, t) {
    if (t === "value")
      return te[ys];
  }
});
function Q0(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Fu(e) {
  return e.map((t) => {
    let { path: n, name: o, children: r, meta: s } = t;
    return r?.length && (r = Fu(r)), {
      path: n,
      name: o,
      children: r,
      meta: s
    };
  });
}
function Z0(e) {
  if (e) {
    const { fullPath: t, hash: n, href: o, path: r, name: s, matched: i, params: a, query: u } = e;
    return {
      fullPath: t,
      hash: n,
      href: o,
      path: r,
      name: s,
      params: a,
      query: u,
      matched: Fu(i)
    };
  }
  return e;
}
function ew(e, t) {
  function n() {
    var o;
    const r = (o = e.app) == null ? void 0 : o.config.globalProperties.$router, s = Z0(r?.currentRoute.value), i = Fu(Q0(r)), a = console.warn;
    console.warn = () => {
    }, te[vr] = {
      currentRoute: s ? pf(s) : {},
      routes: pf(i)
    }, te[ys] = r, console.warn = a;
  }
  n(), Vm.on.componentUpdated(Er(() => {
    var o;
    ((o = t.value) == null ? void 0 : o.app) === e.app && (n(), !tt.highPerfModeEnabled && kr.hooks.callHook("routerInfoUpdated", { state: te[vr] }));
  }, 200));
}
function tw(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: _t.value.app,
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
        app: _t.value.app,
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
      const n = new T0(), o = {
        ...t,
        app: _t.value.app,
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
      const n = _i(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return b0();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return y0();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Il(_t.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return w0({ id: t });
    },
    // open in editor
    openInEditor: F0,
    // get vue inspector
    getVueInspector: N0,
    // toggle app
    toggleApp(t, n) {
      const o = pa.value.find((r) => r.id === t);
      o && (M0(t), L0(o), ew(o, _t), km(), Mm(o.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Il(_t.value, t);
      if (n) {
        const [o] = ku(n);
        o && (te.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = o);
      }
    },
    updatePluginSettings(t, n, o) {
      j0(t, n, o);
    },
    getPluginSettings(t) {
      return {
        options: B0(t),
        values: Pm(t)
      };
    }
  };
}
B();
var Kf, Wf;
(Wf = (Kf = te).__VUE_DEVTOOLS_ENV__) != null || (Kf.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var zf = I0(), qf, Gf;
(Gf = (qf = te).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (qf.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: zf,
  get state() {
    return {
      ...tt,
      activeAppRecordId: _t.id,
      activeAppRecord: _t.value,
      appRecords: pa.value
    };
  },
  api: tw(zf)
});
var kr = te.__VUE_DEVTOOLS_KIT_CONTEXT__;
B();
n0(r0());
var Yf, Xf;
(Xf = (Yf = te).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (Yf.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
B();
B();
function nw(e) {
  tt.highPerfModeEnabled = e ?? !tt.highPerfModeEnabled, !e && _t.value && Mm(_t.value.app);
}
B();
B();
B();
function ow(e) {
  tt.devtoolsClientDetected = {
    ...tt.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(tt.devtoolsClientDetected).some(Boolean);
  nw(!t);
}
var Jf, Qf;
(Qf = (Jf = te).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (Jf.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = ow);
B();
B();
B();
B();
B();
B();
B();
var rw = class {
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
    this.generateIdentifier = e, this.kv = new rw();
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
}, sw = class extends Fm {
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
B();
B();
function iw(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function aw(e, t) {
  const n = iw(e);
  if ("find" in n)
    return n.find(t);
  const o = n;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t(s))
      return s;
  }
}
function yr(e, t) {
  Object.entries(e).forEach(([n, o]) => t(o, n));
}
function gi(e, t) {
  return e.indexOf(t) !== -1;
}
function Zf(e, t) {
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (t(o))
      return o;
  }
}
var lw = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return aw(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
B();
B();
var uw = (e) => Object.prototype.toString.call(e).slice(8, -1), Bm = (e) => typeof e > "u", cw = (e) => e === null, bs = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Ml = (e) => bs(e) && Object.keys(e).length === 0, ro = (e) => Array.isArray(e), fw = (e) => typeof e == "string", dw = (e) => typeof e == "number" && !isNaN(e), pw = (e) => typeof e == "boolean", hw = (e) => e instanceof RegExp, ws = (e) => e instanceof Map, Os = (e) => e instanceof Set, Um = (e) => uw(e) === "Symbol", mw = (e) => e instanceof Date && !isNaN(e.valueOf()), _w = (e) => e instanceof Error, ed = (e) => typeof e == "number" && isNaN(e), gw = (e) => pw(e) || cw(e) || Bm(e) || dw(e) || fw(e) || Um(e), Ew = (e) => typeof e == "bigint", vw = (e) => e === 1 / 0 || e === -1 / 0, yw = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), bw = (e) => e instanceof URL;
B();
var jm = (e) => e.replace(/\./g, "\\."), Wa = (e) => e.map(String).map(jm).join("."), ss = (e) => {
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
B();
function fn(e, t, n, o) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: o
  };
}
var Hm = [
  fn(Bm, "undefined", () => null, () => {
  }),
  fn(Ew, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  fn(mw, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  fn(_w, "Error", (e, t) => {
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
  fn(hw, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  fn(
    Os,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  fn(ws, "map", (e) => [...e.entries()], (e) => new Map(e)),
  fn((e) => ed(e) || vw(e), "number", (e) => ed(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  fn((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  fn(bw, "URL", (e) => e.toString(), (e) => new URL(e))
];
function ha(e, t, n, o) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: o
  };
}
var Km = ha((e, t) => Um(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const o = n.symbolRegistry.getValue(t[1]);
  if (!o)
    throw new Error("Trying to deserialize unknown symbol");
  return o;
}), ww = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Wm = ha(yw, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = ww[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function zm(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var qm = ha(zm, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), Gm = ha((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const o = n.customTransformerRegistry.findByName(t[1]);
  if (!o)
    throw new Error("Trying to deserialize unknown custom value");
  return o.deserialize(e);
}), Ow = [qm, Km, Gm, Wm], td = (e, t) => {
  const n = Zf(Ow, (r) => r.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const o = Zf(Hm, (r) => r.isApplicable(e, t));
  if (o)
    return {
      value: o.transform(e, t),
      type: o.annotation
    };
}, Ym = {};
Hm.forEach((e) => {
  Ym[e.annotation] = e;
});
var Sw = (e, t, n) => {
  if (ro(t))
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
B();
var ar = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function Xm(e) {
  if (gi(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (gi(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (gi(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var Nw = (e, t) => {
  Xm(t);
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (Os(e))
      e = ar(e, +o);
    else if (ws(e)) {
      const r = +o, s = +t[++n] == 0 ? "key" : "value", i = ar(e, r);
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
}, Fl = (e, t, n) => {
  if (Xm(t), t.length === 0)
    return n(e);
  let o = e;
  for (let s = 0; s < t.length - 1; s++) {
    const i = t[s];
    if (ro(o)) {
      const a = +i;
      o = o[a];
    } else if (bs(o))
      o = o[i];
    else if (Os(o)) {
      const a = +i;
      o = ar(o, a);
    } else if (ws(o)) {
      if (s === t.length - 2)
        break;
      const u = +i, f = +t[++s] == 0 ? "key" : "value", l = ar(o, u);
      switch (f) {
        case "key":
          o = l;
          break;
        case "value":
          o = o.get(l);
          break;
      }
    }
  }
  const r = t[t.length - 1];
  if (ro(o) ? o[+r] = n(o[+r]) : bs(o) && (o[r] = n(o[r])), Os(o)) {
    const s = ar(o, +r), i = n(s);
    s !== i && (o.delete(s), o.add(i));
  }
  if (ws(o)) {
    const s = +t[t.length - 2], i = ar(o, s);
    switch (+r == 0 ? "key" : "value") {
      case "key": {
        const u = n(i);
        o.set(u, o.get(i)), u !== i && o.delete(i);
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
function Bl(e, t, n = []) {
  if (!e)
    return;
  if (!ro(e)) {
    yr(e, (s, i) => Bl(s, t, [...n, ...ss(i)]));
    return;
  }
  const [o, r] = e;
  r && yr(r, (s, i) => {
    Bl(s, t, [...n, ...ss(i)]);
  }), t(o, n);
}
function Aw(e, t, n) {
  return Bl(t, (o, r) => {
    e = Fl(e, r, (s) => Sw(s, o, n));
  }), e;
}
function Tw(e, t) {
  function n(o, r) {
    const s = Nw(e, ss(r));
    o.map(ss).forEach((i) => {
      e = Fl(e, i, () => s);
    });
  }
  if (ro(t)) {
    const [o, r] = t;
    o.forEach((s) => {
      e = Fl(e, ss(s), () => e);
    }), r && yr(r, n);
  } else
    yr(t, n);
  return e;
}
var Cw = (e, t) => bs(e) || ro(e) || ws(e) || Os(e) || zm(e, t);
function Dw(e, t, n) {
  const o = n.get(e);
  o ? o.push(t) : n.set(e, [t]);
}
function xw(e, t) {
  const n = {};
  let o;
  return e.forEach((r) => {
    if (r.length <= 1)
      return;
    t || (r = r.map((a) => a.map(String)).sort((a, u) => a.length - u.length));
    const [s, ...i] = r;
    s.length === 0 ? o = i.map(Wa) : n[Wa(s)] = i.map(Wa);
  }), o ? Ml(n) ? [o] : [o, n] : Ml(n) ? void 0 : n;
}
var Jm = (e, t, n, o, r = [], s = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const u = gw(e);
  if (!u) {
    Dw(e, r, t);
    const h = i.get(e);
    if (h)
      return o ? {
        transformedValue: null
      } : h;
  }
  if (!Cw(e, n)) {
    const h = td(e, n), m = h ? {
      transformedValue: h.value,
      annotations: [h.type]
    } : {
      transformedValue: e
    };
    return u || i.set(e, m), m;
  }
  if (gi(s, e))
    return {
      transformedValue: null
    };
  const f = td(e, n), l = (a = f?.value) != null ? a : e, c = ro(l) ? [] : {}, d = {};
  yr(l, (h, m) => {
    if (m === "__proto__" || m === "constructor" || m === "prototype")
      throw new Error(`Detected property ${m}. This is a prototype pollution risk, please remove it from your object.`);
    const E = Jm(h, t, n, o, [...r, m], [...s, e], i);
    c[m] = E.transformedValue, ro(E.annotations) ? d[m] = E.annotations : bs(E.annotations) && yr(E.annotations, (v, O) => {
      d[jm(m) + "." + O] = v;
    });
  });
  const p = Ml(d) ? {
    transformedValue: c,
    annotations: f ? [f.type] : void 0
  } : {
    transformedValue: c,
    annotations: f ? [f.type, d] : d
  };
  return u || i.set(e, p), p;
};
B();
B();
function Qm(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function nd(e) {
  return Qm(e) === "Array";
}
function Rw(e) {
  if (Qm(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function kw(e, t, n, o, r) {
  const s = {}.propertyIsEnumerable.call(o, t) ? "enumerable" : "nonenumerable";
  s === "enumerable" && (e[t] = n), r && s === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Ul(e, t = {}) {
  if (nd(e))
    return e.map((r) => Ul(r, t));
  if (!Rw(e))
    return e;
  const n = Object.getOwnPropertyNames(e), o = Object.getOwnPropertySymbols(e);
  return [...n, ...o].reduce((r, s) => {
    if (nd(t.props) && !t.props.includes(s))
      return r;
    const i = e[s], a = Ul(i, t);
    return kw(r, s, a, e, t.nonenumerable), r;
  }, {});
}
var Me = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new sw(), this.symbolRegistry = new Fm((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new lw(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = Jm(e, t, this, this.dedupe), o = {
      json: n.transformedValue
    };
    n.annotations && (o.meta = {
      ...o.meta,
      values: n.annotations
    });
    const r = xw(t, this.dedupe);
    return r && (o.meta = {
      ...o.meta,
      referentialEqualities: r
    }), o;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let o = Ul(t);
    return n?.values && (o = Aw(o, n.values, this)), n?.referentialEqualities && (o = Tw(o, n.referentialEqualities)), o;
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
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
B();
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
B();
B();
B();
B();
B();
B();
B();
var Se = {};
let Qr;
const Ss = (e) => Qr = e, Zm = Se.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function jo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var yn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(yn || (yn = {}));
const no = typeof window < "u", md = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function $w(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Bu(e, t, n) {
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
function Ei(e) {
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
const vi = typeof navigator == "object" ? navigator : { userAgent: "" }, t_ = /Macintosh/.test(vi.userAgent) && /AppleWebKit/.test(vi.userAgent) && !/Safari/.test(vi.userAgent), n_ = no ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !t_ ? Iw : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in vi ? Pw : (
      // Fallback to using FileReader and a popup
      Vw
    )
  )
) : () => {
};
function Iw(e, t = "download", n) {
  const o = document.createElement("a");
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? e_(o.href) ? Bu(e, t, n) : (o.target = "_blank", Ei(o)) : Ei(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    Ei(o);
  }, 0));
}
function Pw(e, t = "download", n) {
  if (typeof e == "string")
    if (e_(e))
      Bu(e, t, n);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        Ei(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob($w(e, n), t);
}
function Vw(e, t, n, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return Bu(e, t, n);
  const r = e.type === "application/octet-stream", s = /constructor/i.test(String(md.HTMLElement)) || "safari" in md, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || r && s || t_) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let u = a.result;
      if (typeof u != "string")
        throw o = null, new Error("Wrong reader.result type");
      u = i ? u : u.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = u : location.assign(u), o = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    o ? o.location.assign(a) : location.href = a, o = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function ot(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Uu(e) {
  return "_a" in e && "install" in e;
}
function o_() {
  if (!("clipboard" in navigator))
    return ot("Your browser doesn't support the Clipboard API", "error"), !0;
}
function r_(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (ot('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Lw(e) {
  if (!o_())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), ot("Global state copied to clipboard.");
    } catch (t) {
      if (r_(t))
        return;
      ot("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Mw(e) {
  if (!o_())
    try {
      s_(e, JSON.parse(await navigator.clipboard.readText())), ot("Global state pasted from clipboard.");
    } catch (t) {
      if (r_(t))
        return;
      ot("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Fw(e) {
  try {
    n_(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    ot("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let $n;
function Bw() {
  $n || ($n = document.createElement("input"), $n.type = "file", $n.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      $n.onchange = async () => {
        const o = $n.files;
        if (!o)
          return t(null);
        const r = o.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, $n.oncancel = () => t(null), $n.onerror = n, $n.click();
    });
  }
  return e;
}
async function Uw(e) {
  try {
    const n = await Bw()();
    if (!n)
      return;
    const { text: o, file: r } = n;
    s_(e, JSON.parse(o)), ot(`Global state imported from "${r.name}".`);
  } catch (t) {
    ot("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function s_(e, t) {
  for (const n in t) {
    const o = e.state.value[n];
    o ? Object.assign(o, t[n]) : e.state.value[n] = t[n];
  }
}
function zt(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const i_ = "🍍 Pinia (root)", yi = "_root";
function jw(e) {
  return Uu(e) ? {
    id: yi,
    label: i_
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Hw(e) {
  if (Uu(e)) {
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
          value: i._getters.reduce((a, u) => (a[u] = i[u], a), {})
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
function Kw(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: zt(e.type),
    key: zt(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Ww(e) {
  switch (e) {
    case yn.direct:
      return "mutation";
    case yn.patchFunction:
      return "$patch";
    case yn.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let lr = !0;
const bi = [], bo = "pinia:mutations", lt = "pinia", { assign: zw } = Object, ji = (e) => "🍍 " + e;
function qw(e, t) {
  Lm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: bi,
    app: e
  }, (n) => {
    typeof n.now != "function" && ot("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: bo,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: lt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Lw(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Mw(t), n.sendInspectorTree(lt), n.sendInspectorState(lt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Fw(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Uw(t), n.sendInspectorTree(lt), n.sendInspectorState(lt);
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
            r ? typeof r.$reset != "function" ? ot(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), ot(`Store "${o}" reset.`)) : ot(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((o) => {
      const r = o.componentInstance && o.componentInstance.proxy;
      if (r && r._pStores) {
        const s = o.componentInstance.proxy._pStores;
        Object.values(s).forEach((i) => {
          o.instanceData.state.push({
            type: ji(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: he(i.$state),
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
              Object.keys(i.$state).reduce((a, u) => (a[u] = i.$state[u], a), {})
            )
          }), i._getters && i._getters.length && o.instanceData.state.push({
            type: ji(i.$id),
            key: "getters",
            editable: !1,
            value: i._getters.reduce((a, u) => {
              try {
                a[u] = i[u];
              } catch (f) {
                a[u] = f;
              }
              return a;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((o) => {
      if (o.app === e && o.inspectorId === lt) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? r.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(o.filter.toLowerCase()) : i_.toLowerCase().includes(o.filter.toLowerCase())) : r).map(jw);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === lt) {
        const r = o.nodeId === yi ? t : t._s.get(o.nodeId);
        if (!r)
          return;
        r && (o.nodeId !== yi && (globalThis.$store = he(r)), o.state = Hw(r));
      }
    }), n.on.editInspectorState((o) => {
      if (o.app === e && o.inspectorId === lt) {
        const r = o.nodeId === yi ? t : t._s.get(o.nodeId);
        if (!r)
          return ot(`store "${o.nodeId}" not found`, "error");
        const { path: s } = o;
        Uu(r) ? s.unshift("state") : (s.length !== 1 || !r._customProperties.has(s[0]) || s[0] in r.$state) && s.unshift("$state"), lr = !1, o.set(r, s, o.state.value), lr = !0;
      }
    }), n.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const r = o.type.replace(/^🍍\s*/, ""), s = t._s.get(r);
        if (!s)
          return ot(`store "${r}" not found`, "error");
        const { path: i } = o;
        if (i[0] !== "state")
          return ot(`Invalid path for store "${r}":
${i}
Only state can be modified.`);
        i[0] = "$state", lr = !1, o.set(s, i, o.state.value), lr = !0;
      }
    });
  });
}
function Gw(e, t) {
  bi.includes(ji(t.$id)) || bi.push(ji(t.$id)), Lm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: bi,
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
    t.$onAction(({ after: i, onError: a, name: u, args: f }) => {
      const l = a_++;
      n.addTimelineEvent({
        layerId: bo,
        event: {
          time: o(),
          title: "🛫 " + u,
          subtitle: "start",
          data: {
            store: zt(t.$id),
            action: zt(u),
            args: f
          },
          groupId: l
        }
      }), i((c) => {
        oo = void 0, n.addTimelineEvent({
          layerId: bo,
          event: {
            time: o(),
            title: "🛬 " + u,
            subtitle: "end",
            data: {
              store: zt(t.$id),
              action: zt(u),
              args: f,
              result: c
            },
            groupId: l
          }
        });
      }), a((c) => {
        oo = void 0, n.addTimelineEvent({
          layerId: bo,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + u,
            subtitle: "end",
            data: {
              store: zt(t.$id),
              action: zt(u),
              args: f,
              error: c
            },
            groupId: l
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      En(() => ve(t[i]), (a, u) => {
        n.notifyComponentUpdate(), n.sendInspectorState(lt), lr && n.addTimelineEvent({
          layerId: bo,
          event: {
            time: o(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: u
            },
            groupId: oo
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, u) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(lt), !lr)
        return;
      const f = {
        time: o(),
        title: Ww(a),
        data: zw({ store: zt(t.$id) }, Kw(i)),
        groupId: oo
      };
      a === yn.patchFunction ? f.subtitle = "⤵️" : a === yn.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: bo,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = to((i) => {
      r(i), n.addTimelineEvent({
        layerId: bo,
        event: {
          time: o(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: zt(t.$id),
            info: zt("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(lt), n.sendInspectorState(lt);
    });
    const { $dispose: s } = t;
    t.$dispose = () => {
      s(), n.notifyComponentUpdate(), n.sendInspectorTree(lt), n.sendInspectorState(lt), n.getSettings().logStoreChanges && ot(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(lt), n.sendInspectorState(lt), n.getSettings().logStoreChanges && ot(`"${t.$id}" store installed 🆕`);
  });
}
let a_ = 0, oo;
function _d(e, t, n) {
  const o = t.reduce((r, s) => (r[s] = he(e)[s], r), {});
  for (const r in o)
    e[r] = function() {
      const s = a_, i = n ? new Proxy(e, {
        get(...u) {
          return oo = s, Reflect.get(...u);
        },
        set(...u) {
          return oo = s, Reflect.set(...u);
        }
      }) : e;
      oo = s;
      const a = o[r].apply(i, arguments);
      return oo = void 0, a;
    };
}
function Yw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      _d(t, Object.keys(n.actions), t._isOptionsAPI);
      const o = t._hotUpdate;
      he(t)._hotUpdate = function(r) {
        o.apply(this, arguments), _d(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    Gw(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function Xw() {
  const e = Wp(!0), t = e.run(() => oe({}));
  let n = [], o = [];
  const r = to({
    install(s) {
      Ss(r), r._a = s, s.provide(Zm, r), s.config.globalProperties.$pinia = r, Se.NODE_ENV !== "production" && Se.NODE_ENV !== "test" && no && qw(s, r), o.forEach((i) => n.push(i)), o = [];
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
  return Se.NODE_ENV !== "production" && Se.NODE_ENV !== "test" && no && typeof Proxy < "u" && r.use(Yw), r;
}
function l_(e, t) {
  for (const n in t) {
    const o = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    jo(r) && jo(o) && !Le(o) && !Jt(o) ? e[n] = l_(r, o) : e[n] = o;
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
  return !n && zp() && xE(r), r;
}
function Qo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Jw = (e) => e(), Ed = Symbol(), za = Symbol();
function jl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, o) => e.set(o, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const o = t[n], r = e[n];
    jo(r) && jo(o) && e.hasOwnProperty(n) && !Le(o) && !Jt(o) ? e[n] = jl(r, o) : e[n] = o;
  }
  return e;
}
const Qw = Se.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Zw(e) {
  return !jo(e) || !Object.prototype.hasOwnProperty.call(e, Qw);
}
const { assign: Ft } = Object;
function vd(e) {
  return !!(Le(e) && e.effect);
}
function yd(e, t, n, o) {
  const { state: r, actions: s, getters: i } = t, a = n.state.value[e];
  let u;
  function f() {
    !a && (Se.NODE_ENV === "production" || !o) && (n.state.value[e] = r ? r() : {});
    const l = Se.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      tn(oe(r ? r() : {}).value)
    ) : tn(n.state.value[e]);
    return Ft(l, s, Object.keys(i || {}).reduce((c, d) => (Se.NODE_ENV !== "production" && d in l && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`), c[d] = to(le(() => {
      Ss(n);
      const p = n._s.get(e);
      return i[d].call(p, p);
    })), c), {}));
  }
  return u = Hl(e, f, t, n, o, !0), u;
}
function Hl(e, t, n = {}, o, r, s) {
  let i;
  const a = Ft({ actions: {} }, n);
  if (Se.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const u = { deep: !0 };
  Se.NODE_ENV !== "production" && (u.onTrigger = (T) => {
    f ? p = T : f == !1 && !C._hotUpdating && (Array.isArray(p) ? p.push(T) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, l, c = [], d = [], p;
  const h = o.state.value[e];
  !s && !h && (Se.NODE_ENV === "production" || !r) && (o.state.value[e] = {});
  const m = oe({});
  let E;
  function v(T) {
    let R;
    f = l = !1, Se.NODE_ENV !== "production" && (p = []), typeof T == "function" ? (T(o.state.value[e]), R = {
      type: yn.patchFunction,
      storeId: e,
      events: p
    }) : (jl(o.state.value[e], T), R = {
      type: yn.patchObject,
      payload: T,
      storeId: e,
      events: p
    });
    const x = E = Symbol();
    _r().then(() => {
      E === x && (f = !0);
    }), l = !0, Qo(c, R, o.state.value[e]);
  }
  const O = s ? function() {
    const { state: R } = n, x = R ? R() : {};
    this.$patch((Y) => {
      Ft(Y, x);
    });
  } : (
    /* istanbul ignore next */
    Se.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : u_
  );
  function b() {
    i.stop(), c = [], d = [], o._s.delete(e);
  }
  const $ = (T, R = "") => {
    if (Ed in T)
      return T[za] = R, T;
    const x = function() {
      Ss(o);
      const Y = Array.from(arguments), de = [], _e = [];
      function Z(fe) {
        de.push(fe);
      }
      function W(fe) {
        _e.push(fe);
      }
      Qo(d, {
        args: Y,
        name: x[za],
        store: C,
        after: Z,
        onError: W
      });
      let ee;
      try {
        ee = T.apply(this && this.$id === e ? this : C, Y);
      } catch (fe) {
        throw Qo(_e, fe), fe;
      }
      return ee instanceof Promise ? ee.then((fe) => (Qo(de, fe), fe)).catch((fe) => (Qo(_e, fe), Promise.reject(fe))) : (Qo(de, ee), ee);
    };
    return x[Ed] = !0, x[za] = R, x;
  }, A = /* @__PURE__ */ to({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), D = {
    _p: o,
    // _s: scope,
    $id: e,
    $onAction: gd.bind(null, d),
    $patch: v,
    $reset: O,
    $subscribe(T, R = {}) {
      const x = gd(c, T, R.detached, () => Y()), Y = i.run(() => En(() => o.state.value[e], (de) => {
        (R.flush === "sync" ? l : f) && T({
          storeId: e,
          type: yn.direct,
          events: p
        }, de);
      }, Ft({}, u, R)));
      return x;
    },
    $dispose: b
  }, C = Mo(Se.NODE_ENV !== "production" || Se.NODE_ENV !== "production" && Se.NODE_ENV !== "test" && no ? Ft(
    {
      _hmrPayload: A,
      _customProperties: to(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    D
    // must be added later
    // setupStore
  ) : D);
  o._s.set(e, C);
  const S = (o._a && o._a.runWithContext || Jw)(() => o._e.run(() => (i = Wp()).run(() => t({ action: $ }))));
  for (const T in S) {
    const R = S[T];
    if (Le(R) && !vd(R) || Jt(R))
      Se.NODE_ENV !== "production" && r ? m.value[T] = li(S, T) : s || (h && Zw(R) && (Le(R) ? R.value = h[T] : jl(R, h[T])), o.state.value[e][T] = R), Se.NODE_ENV !== "production" && A.state.push(T);
    else if (typeof R == "function") {
      const x = Se.NODE_ENV !== "production" && r ? R : $(R, T);
      S[T] = x, Se.NODE_ENV !== "production" && (A.actions[T] = R), a.actions[T] = R;
    } else Se.NODE_ENV !== "production" && vd(R) && (A.getters[T] = s ? (
      // @ts-expect-error
      n.getters[T]
    ) : R, no && (S._getters || // @ts-expect-error: same
    (S._getters = to([]))).push(T));
  }
  if (Ft(C, S), Ft(he(C), S), Object.defineProperty(C, "$state", {
    get: () => Se.NODE_ENV !== "production" && r ? m.value : o.state.value[e],
    set: (T) => {
      if (Se.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      v((R) => {
        Ft(R, T);
      });
    }
  }), Se.NODE_ENV !== "production" && (C._hotUpdate = to((T) => {
    C._hotUpdating = !0, T._hmrPayload.state.forEach((R) => {
      if (R in C.$state) {
        const x = T.$state[R], Y = C.$state[R];
        typeof x == "object" && jo(x) && jo(Y) ? l_(x, Y) : T.$state[R] = Y;
      }
      C[R] = li(T.$state, R);
    }), Object.keys(C.$state).forEach((R) => {
      R in T.$state || delete C[R];
    }), f = !1, l = !1, o.state.value[e] = li(T._hmrPayload, "hotState"), l = !0, _r().then(() => {
      f = !0;
    });
    for (const R in T._hmrPayload.actions) {
      const x = T[R];
      C[R] = //
      $(x, R);
    }
    for (const R in T._hmrPayload.getters) {
      const x = T._hmrPayload.getters[R], Y = s ? (
        // special handling of options api
        le(() => (Ss(o), x.call(C, C)))
      ) : x;
      C[R] = //
      Y;
    }
    Object.keys(C._hmrPayload.getters).forEach((R) => {
      R in T._hmrPayload.getters || delete C[R];
    }), Object.keys(C._hmrPayload.actions).forEach((R) => {
      R in T._hmrPayload.actions || delete C[R];
    }), C._hmrPayload = T._hmrPayload, C._getters = T._getters, C._hotUpdating = !1;
  })), Se.NODE_ENV !== "production" && Se.NODE_ENV !== "test" && no) {
    const T = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(C, R, Ft({ value: C[R] }, T));
    });
  }
  return o._p.forEach((T) => {
    if (Se.NODE_ENV !== "production" && Se.NODE_ENV !== "test" && no) {
      const R = i.run(() => T({
        store: C,
        app: o._a,
        pinia: o,
        options: a
      }));
      Object.keys(R || {}).forEach((x) => C._customProperties.add(x)), Ft(C, R);
    } else
      Ft(C, i.run(() => T({
        store: C,
        app: o._a,
        pinia: o,
        options: a
      })));
  }), Se.NODE_ENV !== "production" && C.$state && typeof C.$state == "object" && typeof C.$state.constructor == "function" && !C.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${C.$id}".`), h && s && n.hydrate && n.hydrate(C.$state, h), f = !0, l = !0, C;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ma(e, t, n) {
  let o;
  const r = typeof t == "function";
  o = r ? n : t;
  function s(i, a) {
    const u = ty();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (Se.NODE_ENV === "test" && Qr && Qr._testing ? null : i) || (u ? vt(Zm, null) : null), i && Ss(i), Se.NODE_ENV !== "production" && !Qr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = Qr, i._s.has(e) || (r ? Hl(e, t, o, i) : yd(e, o, i), Se.NODE_ENV !== "production" && (s._pinia = i));
    const f = i._s.get(e);
    if (Se.NODE_ENV !== "production" && a) {
      const l = "__hot:" + e, c = r ? Hl(l, t, o, i, !0) : yd(l, Ft({}, o), i, !0);
      a._hotUpdate(c), delete i.state.value[l], i._s.delete(l);
    }
    if (Se.NODE_ENV !== "production" && no) {
      const l = Dn();
      if (l && l.proxy && // avoid adding stores that are just built for hot module replacement
      !a) {
        const c = l.proxy, d = "_pStores" in c ? c._pStores : c._pStores = {};
        d[e] = f;
      }
    }
    return f;
  }
  return s.$id = e, s;
}
function ju(e) {
  const t = he(e), n = {};
  for (const o in t) {
    const r = t[o];
    r.effect ? n[o] = // ...
    le({
      get: () => e[o],
      set(s) {
        e[o] = s;
      }
    }) : (Le(r) || Jt(r)) && (n[o] = // ---
    li(e, o));
  }
  return n;
}
function eO() {
  return c_().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function c_() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const tO = typeof Proxy == "function", nO = "devtools-plugin:setup", oO = "plugin:settings:set";
let Zo, Kl;
function rO() {
  var e;
  return Zo !== void 0 || (typeof window < "u" && window.performance ? (Zo = !0, Kl = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Zo = !0, Kl = globalThis.perf_hooks.performance) : Zo = !1), Zo;
}
function sO() {
  return rO() ? Kl.now() : Date.now();
}
class iO {
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
        return sO();
      }
    }, n && n.on(oO, (i, a) => {
      i === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, a) => this.target ? this.target.on[a] : (...u) => {
        this.onQueue.push({
          method: a,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...u) => (this.targetQueue.push({
        method: a,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[a](...u)) : (...u) => new Promise((f) => {
        this.targetQueue.push({
          method: a,
          args: u,
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
function aO(e, t) {
  const n = e, o = c_(), r = eO(), s = tO && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(nO, e, t);
  else {
    const i = s ? new iO(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
var me = {};
const Vn = typeof document < "u";
function f_(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function lO(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && f_(e.default);
}
const xe = Object.assign;
function qa(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = $t(r) ? r.map(e) : e(r);
  }
  return n;
}
const is = () => {
}, $t = Array.isArray;
function ye(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const d_ = /#/g, uO = /&/g, cO = /\//g, fO = /=/g, dO = /\?/g, p_ = /\+/g, pO = /%5B/g, hO = /%5D/g, h_ = /%5E/g, mO = /%60/g, m_ = /%7B/g, _O = /%7C/g, __ = /%7D/g, gO = /%20/g;
function Hu(e) {
  return encodeURI("" + e).replace(_O, "|").replace(pO, "[").replace(hO, "]");
}
function EO(e) {
  return Hu(e).replace(m_, "{").replace(__, "}").replace(h_, "^");
}
function Wl(e) {
  return Hu(e).replace(p_, "%2B").replace(gO, "+").replace(d_, "%23").replace(uO, "%26").replace(mO, "`").replace(m_, "{").replace(__, "}").replace(h_, "^");
}
function vO(e) {
  return Wl(e).replace(fO, "%3D");
}
function yO(e) {
  return Hu(e).replace(d_, "%23").replace(dO, "%3F");
}
function bO(e) {
  return e == null ? "" : yO(e).replace(cO, "%2F");
}
function br(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    me.NODE_ENV !== "production" && ye(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const wO = /\/$/, OO = (e) => e.replace(wO, "");
function Ga(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const a = t.indexOf("#");
  let u = t.indexOf("?");
  return a < u && a >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), s = t.slice(u + 1, a > -1 ? a : t.length), r = e(s)), a > -1 && (o = o || t.slice(0, a), i = t.slice(a, t.length)), o = AO(o ?? t, n), {
    fullPath: o + (s && "?") + s + i,
    path: o,
    query: r,
    hash: br(i)
  };
}
function SO(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function bd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function wd(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && so(t.matched[o], n.matched[r]) && g_(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function so(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function g_(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!NO(e[n], t[n]))
      return !1;
  return !0;
}
function NO(e, t) {
  return $t(e) ? Od(e, t) : $t(t) ? Od(t, e) : e === t;
}
function Od(e, t) {
  return $t(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function AO(e, t) {
  if (e.startsWith("/"))
    return e;
  if (me.NODE_ENV !== "production" && !t.startsWith("/"))
    return ye(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
const qn = {
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
var Ns;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ns || (Ns = {}));
var as;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(as || (as = {}));
function TO(e) {
  if (!e)
    if (Vn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), OO(e);
}
const CO = /^[^#]+#/;
function DO(e, t) {
  return e.replace(CO, "#") + t;
}
function xO(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const _a = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function RO(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (me.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (o && s) {
          ye(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        ye(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      me.NODE_ENV !== "production" && ye(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = xO(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Sd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const zl = /* @__PURE__ */ new Map();
function kO(e, t) {
  zl.set(e, t);
}
function $O(e) {
  const t = zl.get(e);
  return zl.delete(e), t;
}
let IO = () => location.protocol + "//" + location.host;
function E_(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let a = r.includes(e.slice(s)) ? e.slice(s).length : 1, u = r.slice(a);
    return u[0] !== "/" && (u = "/" + u), bd(u, "");
  }
  return bd(n, e) + o + r;
}
function PO(e, t, n, o) {
  let r = [], s = [], i = null;
  const a = ({ state: d }) => {
    const p = E_(e, location), h = n.value, m = t.value;
    let E = 0;
    if (d) {
      if (n.value = p, t.value = d, i && i === h) {
        i = null;
        return;
      }
      E = m ? d.position - m.position : 0;
    } else
      o(p);
    r.forEach((v) => {
      v(n.value, h, {
        delta: E,
        type: Ns.pop,
        direction: E ? E > 0 ? as.forward : as.back : as.unknown
      });
    });
  };
  function u() {
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
  function l() {
    const { history: d } = window;
    d.state && d.replaceState(xe({}, d.state, { scroll: _a() }), "");
  }
  function c() {
    for (const d of s)
      d();
    s = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", l);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", l, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: f,
    destroy: c
  };
}
function Nd(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? _a() : null
  };
}
function VO(e) {
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
  function s(u, f, l) {
    const c = e.indexOf("#"), d = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : IO() + e + u;
    try {
      t[l ? "replaceState" : "pushState"](f, "", d), r.value = f;
    } catch (p) {
      me.NODE_ENV !== "production" ? ye("Error with push/replace State", p) : console.error(p), n[l ? "replace" : "assign"](d);
    }
  }
  function i(u, f) {
    const l = xe({}, t.state, Nd(
      r.value.back,
      // keep back and forward entries but override current position
      u,
      r.value.forward,
      !0
    ), f, { position: r.value.position });
    s(u, l, !0), o.value = u;
  }
  function a(u, f) {
    const l = xe(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: u,
        scroll: _a()
      }
    );
    me.NODE_ENV !== "production" && !t.state && ye(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), s(l.current, l, !0);
    const c = xe({}, Nd(o.value, u, null), { position: l.position + 1 }, f);
    s(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: r,
    push: a,
    replace: i
  };
}
function LO(e) {
  e = TO(e);
  const t = VO(e), n = PO(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = xe({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: DO.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function MO(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), me.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && ye(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), LO(e);
}
function Hi(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function v_(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ql = Symbol(me.NODE_ENV !== "production" ? "navigation failure" : "");
var Ad;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ad || (Ad = {}));
const FO = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${UO(t)}" via a navigation guard.`;
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
function wr(e, t) {
  return me.NODE_ENV !== "production" ? xe(new Error(FO[e](t)), {
    type: e,
    [ql]: !0
  }, t) : xe(new Error(), {
    type: e,
    [ql]: !0
  }, t);
}
function In(e, t) {
  return e instanceof Error && ql in e && (t == null || !!(e.type & t));
}
const BO = ["params", "query", "hash"];
function UO(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of BO)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Td = "[^/]+?", jO = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, HO = /[.+*?^${}()[\]/\\]/g;
function KO(e, t) {
  const n = xe({}, jO, t), o = [];
  let r = n.start ? "^" : "";
  const s = [];
  for (const f of e) {
    const l = f.length ? [] : [
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
        const { value: h, repeatable: m, optional: E, regexp: v } = d;
        s.push({
          name: h,
          repeatable: m,
          optional: E
        });
        const O = v || Td;
        if (O !== Td) {
          p += 10;
          try {
            new RegExp(`(${O})`);
          } catch ($) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${O}): ` + $.message);
          }
        }
        let b = m ? `((?:${O})(?:/(?:${O}))*)` : `(${O})`;
        c || (b = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        E && f.length < 2 ? `(?:/${b})` : "/" + b), E && (b += "?"), r += b, p += 20, E && (p += -8), m && (p += -20), O === ".*" && (p += -50);
      }
      l.push(p);
    }
    o.push(l);
  }
  if (n.strict && n.end) {
    const f = o.length - 1;
    o[f][o[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function a(f) {
    const l = f.match(i), c = {};
    if (!l)
      return null;
    for (let d = 1; d < l.length; d++) {
      const p = l[d] || "", h = s[d - 1];
      c[h.name] = p && h.repeatable ? p.split("/") : p;
    }
    return c;
  }
  function u(f) {
    let l = "", c = !1;
    for (const d of e) {
      (!c || !l.endsWith("/")) && (l += "/"), c = !1;
      for (const p of d)
        if (p.type === 0)
          l += p.value;
        else if (p.type === 1) {
          const { value: h, repeatable: m, optional: E } = p, v = h in f ? f[h] : "";
          if ($t(v) && !m)
            throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const O = $t(v) ? v.join("/") : v;
          if (!O)
            if (E)
              d.length < 2 && (l.endsWith("/") ? l = l.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${h}"`);
          l += O;
        }
    }
    return l || "/";
  }
  return {
    re: i,
    score: o,
    keys: s,
    parse: a,
    stringify: u
  };
}
function WO(e, t) {
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
    const s = WO(o[n], r[n]);
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
const zO = {
  type: 0,
  value: ""
}, qO = /[a-zA-Z0-9_]/;
function GO(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[zO]];
  if (!e.startsWith("/"))
    throw new Error(me.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${f}": ${p}`);
  }
  let n = 0, o = n;
  const r = [];
  let s;
  function i() {
    s && r.push(s), s = [];
  }
  let a = 0, u, f = "", l = "";
  function c() {
    f && (n === 0 ? s.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: f,
      regexp: l,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function d() {
    f += u;
  }
  for (; a < e.length; ) {
    if (u = e[a++], u === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (f && c(), i()) : u === ":" ? (c(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : qO.test(u) ? d() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && a--);
        break;
      case 2:
        u === ")" ? l[l.length - 1] == "\\" ? l = l.slice(0, -1) + u : n = 3 : l += u;
        break;
      case 3:
        c(), n = 0, u !== "*" && u !== "?" && u !== "+" && a--, l = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), c(), i(), r;
}
function YO(e, t, n) {
  const o = KO(GO(e.path), n);
  if (me.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      s.has(i.name) && ye(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const r = xe(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function XO(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = kd({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(c) {
    return o.get(c);
  }
  function s(c, d, p) {
    const h = !p, m = xd(c);
    me.NODE_ENV !== "production" && e1(m, d), m.aliasOf = p && p.record;
    const E = kd(t, c), v = [m];
    if ("alias" in c) {
      const $ = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const A of $)
        v.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          xd(xe({}, m, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: p ? p.record.components : m.components,
            path: A,
            // we might be the child of an alias
            aliasOf: p ? p.record : m
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let O, b;
    for (const $ of v) {
      const { path: A } = $;
      if (d && A[0] !== "/") {
        const D = d.record.path, C = D[D.length - 1] === "/" ? "" : "/";
        $.path = d.record.path + (A && C + A);
      }
      if (me.NODE_ENV !== "production" && $.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (O = YO($, d, E), me.NODE_ENV !== "production" && d && A[0] === "/" && n1(O, d), p ? (p.alias.push(O), me.NODE_ENV !== "production" && ZO(p, O)) : (b = b || O, b !== O && b.alias.push(O), h && c.name && !Rd(O) && (me.NODE_ENV !== "production" && t1(c, d), i(c.name))), b_(O) && u(O), m.children) {
        const D = m.children;
        for (let C = 0; C < D.length; C++)
          s(D[C], O, p && p.children[C]);
      }
      p = p || O;
    }
    return b ? () => {
      i(b);
    } : is;
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
  function u(c) {
    const d = o1(c, n);
    n.splice(d, 0, c), c.record.name && !Rd(c) && o.set(c.record.name, c);
  }
  function f(c, d) {
    let p, h = {}, m, E;
    if ("name" in c && c.name) {
      if (p = o.get(c.name), !p)
        throw wr(1, {
          location: c
        });
      if (me.NODE_ENV !== "production") {
        const b = Object.keys(c.params || {}).filter(($) => !p.keys.find((A) => A.name === $));
        b.length && ye(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      E = p.record.name, h = xe(
        // paramsFromLocation is a new object
        Dd(
          d.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          p.keys.filter((b) => !b.optional).concat(p.parent ? p.parent.keys.filter((b) => b.optional) : []).map((b) => b.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && Dd(c.params, p.keys.map((b) => b.name))
      ), m = p.stringify(h);
    } else if (c.path != null)
      m = c.path, me.NODE_ENV !== "production" && !m.startsWith("/") && ye(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), p = n.find((b) => b.re.test(m)), p && (h = p.parse(m), E = p.record.name);
    else {
      if (p = d.name ? o.get(d.name) : n.find((b) => b.re.test(d.path)), !p)
        throw wr(1, {
          location: c,
          currentLocation: d
        });
      E = p.record.name, h = xe({}, d.params, c.params), m = p.stringify(h);
    }
    const v = [];
    let O = p;
    for (; O; )
      v.unshift(O.record), O = O.parent;
    return {
      name: E,
      path: m,
      params: h,
      matched: v,
      meta: QO(v)
    };
  }
  e.forEach((c) => s(c));
  function l() {
    n.length = 0, o.clear();
  }
  return {
    addRoute: s,
    resolve: f,
    removeRoute: i,
    clearRoutes: l,
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
    props: JO(e),
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
function JO(e) {
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
function QO(e) {
  return e.reduce((t, n) => xe(t, n.meta), {});
}
function kd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Gl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function ZO(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Gl.bind(null, n)))
      return ye(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Gl.bind(null, n)))
      return ye(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function e1(e, t) {
  t && t.record.name && !e.name && !e.path && ye(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function t1(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function n1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Gl.bind(null, n)))
      return ye(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function o1(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const s = n + o >> 1;
    y_(e, t[s]) < 0 ? o = s : n = s + 1;
  }
  const r = r1(e);
  return r && (o = t.lastIndexOf(r, o - 1), me.NODE_ENV !== "production" && o < 0 && ye(`Finding ancestor route "${r.record.path}" failed for "${e.record.path}"`)), o;
}
function r1(e) {
  let t = e;
  for (; t = t.parent; )
    if (b_(t) && y_(e, t) === 0)
      return t;
}
function b_({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function s1(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(p_, " "), i = s.indexOf("="), a = br(i < 0 ? s : s.slice(0, i)), u = i < 0 ? null : br(s.slice(i + 1));
    if (a in t) {
      let f = t[a];
      $t(f) || (f = t[a] = [f]), f.push(u);
    } else
      t[a] = u;
  }
  return t;
}
function $d(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = vO(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    ($t(o) ? o.map((s) => s && Wl(s)) : [o && Wl(o)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function i1(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = $t(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const a1 = Symbol(me.NODE_ENV !== "production" ? "router view location matched" : ""), Id = Symbol(me.NODE_ENV !== "production" ? "router view depth" : ""), Ku = Symbol(me.NODE_ENV !== "production" ? "router" : ""), Wu = Symbol(me.NODE_ENV !== "production" ? "route location" : ""), Yl = Symbol(me.NODE_ENV !== "production" ? "router view location" : "");
function Kr() {
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
function Qn(e, t, n, o, r, s = (i) => i()) {
  const i = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((a, u) => {
    const f = (d) => {
      d === !1 ? u(wr(4, {
        from: n,
        to: t
      })) : d instanceof Error ? u(d) : Hi(d) ? u(wr(2, {
        from: t,
        to: d
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === i && typeof d == "function" && i.push(d), a());
    }, l = s(() => e.call(o && o.instances[r], t, n, me.NODE_ENV !== "production" ? l1(f, t, n) : f));
    let c = Promise.resolve(l);
    if (e.length < 3 && (c = c.then(f)), me.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof l == "object" && "then" in l)
        c = c.then((p) => f._called ? p : (ye(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (l !== void 0 && !f._called) {
        ye(d), u(new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((d) => u(d));
  });
}
function l1(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && ye(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ya(e, t, n, o, r = (s) => s()) {
  const s = [];
  for (const i of e) {
    me.NODE_ENV !== "production" && !i.components && !i.children.length && ye(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let u = i.components[a];
      if (me.NODE_ENV !== "production") {
        if (!u || typeof u != "object" && typeof u != "function")
          throw ye(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(u)}".`), new Error("Invalid route component");
        if ("then" in u) {
          ye(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = u;
          u = () => f;
        } else u.__asyncLoader && // warn only once per component
        !u.__warnedDefineAsync && (u.__warnedDefineAsync = !0, ye(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (f_(u)) {
          const l = (u.__vccOpts || u)[t];
          l && s.push(Qn(l, n, o, i, a, r));
        } else {
          let f = u();
          me.NODE_ENV !== "production" && !("catch" in f) && (ye(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), s.push(() => f.then((l) => {
            if (!l)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const c = lO(l) ? l.default : l;
            i.mods[a] = l, i.components[a] = c;
            const p = (c.__vccOpts || c)[t];
            return p && Qn(p, n, o, i, a, r)();
          }));
        }
    }
  }
  return s;
}
function Pd(e) {
  const t = vt(Ku), n = vt(Wu);
  let o = !1, r = null;
  const s = le(() => {
    const l = ve(e.to);
    return me.NODE_ENV !== "production" && (!o || l !== r) && (Hi(l) || (o ? ye(`Invalid value for prop "to" in useLink()
- to:`, l, `
- previous to:`, r, `
- props:`, e) : ye(`Invalid value for prop "to" in useLink()
- to:`, l, `
- props:`, e)), r = l, o = !0), t.resolve(l);
  }), i = le(() => {
    const { matched: l } = s.value, { length: c } = l, d = l[c - 1], p = n.matched;
    if (!d || !p.length)
      return -1;
    const h = p.findIndex(so.bind(null, d));
    if (h > -1)
      return h;
    const m = Vd(l[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Vd(d) === m && // avoid comparing the child with its parent
      p[p.length - 1].path !== m ? p.findIndex(so.bind(null, l[c - 2])) : h
    );
  }), a = le(() => i.value > -1 && p1(n.params, s.value.params)), u = le(() => i.value > -1 && i.value === n.matched.length - 1 && g_(n.params, s.value.params));
  function f(l = {}) {
    if (d1(l)) {
      const c = t[ve(e.replace) ? "replace" : "push"](
        ve(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(is);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  if (me.NODE_ENV !== "production" && Vn) {
    const l = Dn();
    if (l) {
      const c = {
        route: s.value,
        isActive: a.value,
        isExactActive: u.value,
        error: null
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(c), ia(() => {
        c.route = s.value, c.isActive = a.value, c.isExactActive = u.value, c.error = Hi(ve(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: le(() => s.value.href),
    isActive: a,
    isExactActive: u,
    navigate: f
  };
}
function u1(e) {
  return e.length === 1 ? e[0] : e;
}
const c1 = /* @__PURE__ */ Re({
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
    const n = Mo(Pd(e)), { options: o } = vt(Ku), r = le(() => ({
      [Ld(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Ld(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && u1(t.default(n));
      return e.custom ? s : Cu("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), f1 = c1;
function d1(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function p1(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!$t(r) || r.length !== o.length || o.some((s, i) => s !== r[i]))
      return !1;
  }
  return !0;
}
function Vd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ld = (e, t, n) => e ?? t ?? n, h1 = /* @__PURE__ */ Re({
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
    me.NODE_ENV !== "production" && _1();
    const o = vt(Yl), r = le(() => e.route || o.value), s = vt(Id, 0), i = le(() => {
      let f = ve(s);
      const { matched: l } = r.value;
      let c;
      for (; (c = l[f]) && !c.components; )
        f++;
      return f;
    }), a = le(() => r.value.matched[i.value]);
    hr(Id, le(() => i.value + 1)), hr(a1, a), hr(Yl, r);
    const u = oe();
    return En(() => [u.value, a.value, e.name], ([f, l, c], [d, p, h]) => {
      l && (l.instances[c] = f, p && p !== l && f && f === d && (l.leaveGuards.size || (l.leaveGuards = p.leaveGuards), l.updateGuards.size || (l.updateGuards = p.updateGuards))), f && l && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !so(l, p) || !d) && (l.enterCallbacks[c] || []).forEach((m) => m(f));
    }, { flush: "post" }), () => {
      const f = r.value, l = e.name, c = a.value, d = c && c.components[l];
      if (!d)
        return Md(n.default, { Component: d, route: f });
      const p = c.props[l], h = p ? p === !0 ? f.params : typeof p == "function" ? p(f) : p : null, E = Cu(d, xe({}, h, t, {
        onVnodeUnmounted: (v) => {
          v.component.isUnmounted && (c.instances[l] = null);
        },
        ref: u
      }));
      if (me.NODE_ENV !== "production" && Vn && E.ref) {
        const v = {
          depth: i.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        ($t(E.ref) ? E.ref.map((b) => b.i) : [E.ref.i]).forEach((b) => {
          b.__vrv_devtools = v;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Md(n.default, { Component: E, route: f }) || E
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
const m1 = h1;
function _1() {
  const e = Dn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    ye(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Wr(e, t) {
  const n = xe({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => T1(o, ["instances", "children", "aliasOf"]))
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
function Zs(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let g1 = 0;
function E1(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = g1++;
  aO({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((l, c) => {
      l.instanceData && l.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Wr(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: l, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const d = c.__vrv_devtools;
        l.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: w_
        });
      }
      $t(c.__vrl_devtools) && (c.__devtoolsApi = r, c.__vrl_devtools.forEach((d) => {
        let p = d.route.path, h = N_, m = "", E = 0;
        d.error ? (p = d.error, h = O1, E = S1) : d.isExactActive ? (h = S_, m = "This is exactly active") : d.isActive && (h = O_, m = "This link is active"), l.tags.push({
          label: p,
          textColor: E,
          tooltip: m,
          backgroundColor: h
        });
      }));
    }), En(t.currentRoute, () => {
      u(), r.notifyComponentUpdate(), r.sendInspectorTree(a), r.sendInspectorState(a);
    });
    const s = "router:navigations:" + o;
    r.addTimelineLayer({
      id: s,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((l, c) => {
      r.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: c.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: l },
          groupId: c.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((l, c) => {
      const d = {
        guard: Zs("beforeEach"),
        from: Wr(c, "Current Location during this navigation"),
        to: Wr(l, "Target location")
      };
      Object.defineProperty(l.meta, "__navigationId", {
        value: i++
      }), r.addTimelineEvent({
        layerId: s,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: l.fullPath,
          data: d,
          groupId: l.meta.__navigationId
        }
      });
    }), t.afterEach((l, c, d) => {
      const p = {
        guard: Zs("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = Zs("❌")) : p.status = Zs("✅"), p.from = Wr(c, "Current Location during this navigation"), p.to = Wr(l, "Target location"), r.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: l.fullPath,
          time: r.now(),
          data: p,
          logType: d ? "warning" : "default",
          groupId: l.meta.__navigationId
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
    function u() {
      if (!f)
        return;
      const l = f;
      let c = n.getRoutes().filter((d) => !d.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !d.parent.record.components);
      c.forEach(C_), l.filter && (c = c.filter((d) => (
        // save matches state based on the payload
        Xl(d, l.filter.toLowerCase())
      ))), c.forEach((d) => T_(d, t.currentRoute.value)), l.rootNodes = c.map(A_);
    }
    let f;
    r.on.getInspectorTree((l) => {
      f = l, l.app === e && l.inspectorId === a && u();
    }), r.on.getInspectorState((l) => {
      if (l.app === e && l.inspectorId === a) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === l.nodeId);
        d && (l.state = {
          options: y1(d)
        });
      }
    }), r.sendInspectorTree(a), r.sendInspectorState(a);
  });
}
function v1(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function y1(e) {
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
        display: e.keys.map((o) => `${o.name}${v1(o)}`).join(" "),
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
const w_ = 15485081, O_ = 2450411, S_ = 8702998, b1 = 2282478, N_ = 16486972, w1 = 6710886, O1 = 16704226, S1 = 12131356;
function A_(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: b1
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: N_
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: w_
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: S_
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: O_
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: w1
  });
  let o = n.__vd_id;
  return o == null && (o = String(N1++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(A_)
  };
}
let N1 = 0;
const A1 = /^\/(.*)\/([a-z]*)$/;
function T_(e, t) {
  const n = t.matched.length && so(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => so(o, e.record))), e.children.forEach((o) => T_(o, t));
}
function C_(e) {
  e.__vd_match = !1, e.children.forEach(C_);
}
function Xl(e, t) {
  const n = String(e.re).match(A1);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => Xl(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), s = br(r);
  return !t.startsWith("/") && (s.includes(t) || r.includes(t)) || s.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => Xl(i, t));
}
function T1(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function C1(e) {
  const t = XO(e.routes, e), n = e.parseQuery || s1, o = e.stringifyQuery || $d, r = e.history;
  if (me.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const s = Kr(), i = Kr(), a = Kr(), u = ch(qn);
  let f = qn;
  Vn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const l = qa.bind(null, (I) => "" + I), c = qa.bind(null, bO), d = (
    // @ts-expect-error: intentionally avoid the type check
    qa.bind(null, br)
  );
  function p(I, X) {
    let Q, ne;
    return v_(I) ? (Q = t.getRecordMatcher(I), me.NODE_ENV !== "production" && !Q && ye(`Parent route "${String(I)}" not found when adding child route`, X), ne = X) : ne = I, t.addRoute(ne, Q);
  }
  function h(I) {
    const X = t.getRecordMatcher(I);
    X ? t.removeRoute(X) : me.NODE_ENV !== "production" && ye(`Cannot remove non-existent route "${String(I)}"`);
  }
  function m() {
    return t.getRoutes().map((I) => I.record);
  }
  function E(I) {
    return !!t.getRecordMatcher(I);
  }
  function v(I, X) {
    if (X = xe({}, X || u.value), typeof I == "string") {
      const y = Ga(n, I, X.path), N = t.resolve({ path: y.path }, X), M = r.createHref(y.fullPath);
      return me.NODE_ENV !== "production" && (M.startsWith("//") ? ye(`Location "${I}" resolved to "${M}". A resolved location cannot start with multiple slashes.`) : N.matched.length || ye(`No match found for location with path "${I}"`)), xe(y, N, {
        params: d(N.params),
        hash: br(y.hash),
        redirectedFrom: void 0,
        href: M
      });
    }
    if (me.NODE_ENV !== "production" && !Hi(I))
      return ye(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, I), v({});
    let Q;
    if (I.path != null)
      me.NODE_ENV !== "production" && "params" in I && !("name" in I) && // @ts-expect-error: the type is never
      Object.keys(I.params).length && ye(`Path "${I.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), Q = xe({}, I, {
        path: Ga(n, I.path, X.path).path
      });
    else {
      const y = xe({}, I.params);
      for (const N in y)
        y[N] == null && delete y[N];
      Q = xe({}, I, {
        params: c(y)
      }), X.params = c(X.params);
    }
    const ne = t.resolve(Q, X), Ee = I.hash || "";
    me.NODE_ENV !== "production" && Ee && !Ee.startsWith("#") && ye(`A \`hash\` should always start with the character "#". Replace "${Ee}" with "#${Ee}".`), ne.params = l(d(ne.params));
    const Ue = SO(o, xe({}, I, {
      hash: EO(Ee),
      path: ne.path
    })), g = r.createHref(Ue);
    return me.NODE_ENV !== "production" && (g.startsWith("//") ? ye(`Location "${I}" resolved to "${g}". A resolved location cannot start with multiple slashes.`) : ne.matched.length || ye(`No match found for location with path "${I.path != null ? I.path : I}"`)), xe({
      fullPath: Ue,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: Ee,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === $d ? i1(I.query) : I.query || {}
      )
    }, ne, {
      redirectedFrom: void 0,
      href: g
    });
  }
  function O(I) {
    return typeof I == "string" ? Ga(n, I, u.value.path) : xe({}, I);
  }
  function b(I, X) {
    if (f !== I)
      return wr(8, {
        from: X,
        to: I
      });
  }
  function $(I) {
    return C(I);
  }
  function A(I) {
    return $(xe(O(I), { replace: !0 }));
  }
  function D(I) {
    const X = I.matched[I.matched.length - 1];
    if (X && X.redirect) {
      const { redirect: Q } = X;
      let ne = typeof Q == "function" ? Q(I) : Q;
      if (typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = O(ne) : (
        // force empty params
        { path: ne }
      ), ne.params = {}), me.NODE_ENV !== "production" && ne.path == null && !("name" in ne))
        throw ye(`Invalid redirect found:
${JSON.stringify(ne, null, 2)}
 when navigating to "${I.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return xe({
        query: I.query,
        hash: I.hash,
        // avoid transferring params if the redirect has a path
        params: ne.path != null ? {} : I.params
      }, ne);
    }
  }
  function C(I, X) {
    const Q = f = v(I), ne = u.value, Ee = I.state, Ue = I.force, g = I.replace === !0, y = D(Q);
    if (y)
      return C(
        xe(O(y), {
          state: typeof y == "object" ? xe({}, Ee, y.state) : Ee,
          force: Ue,
          replace: g
        }),
        // keep original redirectedFrom if it exists
        X || Q
      );
    const N = Q;
    N.redirectedFrom = X;
    let M;
    return !Ue && wd(o, ne, Q) && (M = wr(16, { to: N, from: ne }), qe(
      ne,
      ne,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (M ? Promise.resolve(M) : T(N, ne)).catch((P) => In(P) ? (
      // navigation redirects still mark the router as ready
      In(
        P,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? P : ze(P)
    ) : (
      // reject any unknown error
      ee(P, N, ne)
    )).then((P) => {
      if (P) {
        if (In(
          P,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return me.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          wd(o, v(P.to), N) && // and we have done it a couple of times
          X && // @ts-expect-error: added only in dev
          (X._count = X._count ? (
            // @ts-expect-error
            X._count + 1
          ) : 1) > 30 ? (ye(`Detected a possibly infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${N.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : C(
            // keep options
            xe({
              // preserve an existing replacement but allow the redirect to override it
              replace: g
            }, O(P.to), {
              state: typeof P.to == "object" ? xe({}, Ee, P.to.state) : Ee,
              force: Ue
            }),
            // preserve the original redirectedFrom if any
            X || N
          );
      } else
        P = x(N, ne, !0, g, Ee);
      return R(N, ne, P), P;
    });
  }
  function V(I, X) {
    const Q = b(I, X);
    return Q ? Promise.reject(Q) : Promise.resolve();
  }
  function S(I) {
    const X = nt.values().next().value;
    return X && typeof X.runWithContext == "function" ? X.runWithContext(I) : I();
  }
  function T(I, X) {
    let Q;
    const [ne, Ee, Ue] = D1(I, X);
    Q = Ya(ne.reverse(), "beforeRouteLeave", I, X);
    for (const y of ne)
      y.leaveGuards.forEach((N) => {
        Q.push(Qn(N, I, X));
      });
    const g = V.bind(null, I, X);
    return Q.push(g), wt(Q).then(() => {
      Q = [];
      for (const y of s.list())
        Q.push(Qn(y, I, X));
      return Q.push(g), wt(Q);
    }).then(() => {
      Q = Ya(Ee, "beforeRouteUpdate", I, X);
      for (const y of Ee)
        y.updateGuards.forEach((N) => {
          Q.push(Qn(N, I, X));
        });
      return Q.push(g), wt(Q);
    }).then(() => {
      Q = [];
      for (const y of Ue)
        if (y.beforeEnter)
          if ($t(y.beforeEnter))
            for (const N of y.beforeEnter)
              Q.push(Qn(N, I, X));
          else
            Q.push(Qn(y.beforeEnter, I, X));
      return Q.push(g), wt(Q);
    }).then(() => (I.matched.forEach((y) => y.enterCallbacks = {}), Q = Ya(Ue, "beforeRouteEnter", I, X, S), Q.push(g), wt(Q))).then(() => {
      Q = [];
      for (const y of i.list())
        Q.push(Qn(y, I, X));
      return Q.push(g), wt(Q);
    }).catch((y) => In(
      y,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? y : Promise.reject(y));
  }
  function R(I, X, Q) {
    a.list().forEach((ne) => S(() => ne(I, X, Q)));
  }
  function x(I, X, Q, ne, Ee) {
    const Ue = b(I, X);
    if (Ue)
      return Ue;
    const g = X === qn, y = Vn ? history.state : {};
    Q && (ne || g ? r.replace(I.fullPath, xe({
      scroll: g && y && y.scroll
    }, Ee)) : r.push(I.fullPath, Ee)), u.value = I, qe(I, X, Q, g), ze();
  }
  let Y;
  function de() {
    Y || (Y = r.listen((I, X, Q) => {
      if (!rt.listening)
        return;
      const ne = v(I), Ee = D(ne);
      if (Ee) {
        C(xe(Ee, { replace: !0, force: !0 }), ne).catch(is);
        return;
      }
      f = ne;
      const Ue = u.value;
      Vn && kO(Sd(Ue.fullPath, Q.delta), _a()), T(ne, Ue).catch((g) => In(
        g,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? g : In(
        g,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (C(
        xe(O(g.to), {
          force: !0
        }),
        ne
        // avoid an uncaught rejection, let push call triggerError
      ).then((y) => {
        In(
          y,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !Q.delta && Q.type === Ns.pop && r.go(-1, !1);
      }).catch(is), Promise.reject()) : (Q.delta && r.go(-Q.delta, !1), ee(g, ne, Ue))).then((g) => {
        g = g || x(
          // after navigation, all matched components are resolved
          ne,
          Ue,
          !1
        ), g && (Q.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !In(
          g,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-Q.delta, !1) : Q.type === Ns.pop && In(
          g,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), R(ne, Ue, g);
      }).catch(is);
    }));
  }
  let _e = Kr(), Z = Kr(), W;
  function ee(I, X, Q) {
    ze(I);
    const ne = Z.list();
    return ne.length ? ne.forEach((Ee) => Ee(I, X, Q)) : (me.NODE_ENV !== "production" && ye("uncaught error during route navigation:"), console.error(I)), Promise.reject(I);
  }
  function fe() {
    return W && u.value !== qn ? Promise.resolve() : new Promise((I, X) => {
      _e.add([I, X]);
    });
  }
  function ze(I) {
    return W || (W = !I, de(), _e.list().forEach(([X, Q]) => I ? Q(I) : X()), _e.reset()), I;
  }
  function qe(I, X, Q, ne) {
    const { scrollBehavior: Ee } = e;
    if (!Vn || !Ee)
      return Promise.resolve();
    const Ue = !Q && $O(Sd(I.fullPath, 0)) || (ne || !Q) && history.state && history.state.scroll || null;
    return _r().then(() => Ee(I, X, Ue)).then((g) => g && RO(g)).catch((g) => ee(g, I, X));
  }
  const Ve = (I) => r.go(I);
  let Be;
  const nt = /* @__PURE__ */ new Set(), rt = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: h,
    clearRoutes: t.clearRoutes,
    hasRoute: E,
    getRoutes: m,
    resolve: v,
    options: e,
    push: $,
    replace: A,
    go: Ve,
    back: () => Ve(-1),
    forward: () => Ve(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: Z.add,
    isReady: fe,
    install(I) {
      const X = this;
      I.component("RouterLink", f1), I.component("RouterView", m1), I.config.globalProperties.$router = X, Object.defineProperty(I.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ve(u)
      }), Vn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Be && u.value === qn && (Be = !0, $(r.location).catch((Ee) => {
        me.NODE_ENV !== "production" && ye("Unexpected error when starting the router:", Ee);
      }));
      const Q = {};
      for (const Ee in qn)
        Object.defineProperty(Q, Ee, {
          get: () => u.value[Ee],
          enumerable: !0
        });
      I.provide(Ku, X), I.provide(Wu, uh(Q)), I.provide(Yl, u);
      const ne = I.unmount;
      nt.add(I), I.unmount = function() {
        nt.delete(I), nt.size < 1 && (f = qn, Y && Y(), Y = null, u.value = qn, Be = !1, W = !1), ne();
      }, me.NODE_ENV !== "production" && Vn && E1(I, X, t);
    }
  };
  function wt(I) {
    return I.reduce((X, Q) => X.then(() => S(Q)), Promise.resolve());
  }
  return rt;
}
function D1(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => so(f, a)) ? o.push(a) : n.push(a));
    const u = e.matched[i];
    u && (t.matched.find((f) => so(f, u)) || r.push(u));
  }
  return [n, o, r];
}
function x1(e) {
  return vt(Wu);
}
const $r = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, R1 = {}, k1 = { class: "d-flex gap-2" };
function $1(e, t) {
  const n = on("router-link");
  return L(), K("div", k1, [
    Oe(n, { to: "/" }, {
      default: Tt(() => t[0] || (t[0] = [
        je("Home")
      ])),
      _: 1,
      __: [0]
    }),
    Oe(n, { to: "/setup" }, {
      default: Tt(() => t[1] || (t[1] = [
        je("Setup")
      ])),
      _: 1,
      __: [1]
    }),
    Oe(n, { to: "/monitor" }, {
      default: Tt(() => t[2] || (t[2] = [
        je("Monitor")
      ])),
      _: 1,
      __: [2]
    })
  ]);
}
const I1 = /* @__PURE__ */ $r(R1, [["render", $1]]), P1 = /* @__PURE__ */ Re({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const o = on("router-view");
      return L(), K("div", null, [
        _("main", null, [
          Oe(I1),
          Oe(o)
        ])
      ]);
    };
  }
}), V1 = /* @__PURE__ */ $r(P1, [["__scopeId", "data-v-a42a7003"]]), L1 = {};
function M1(e, t) {
  return L(), K("div", null, " home ");
}
const F1 = /* @__PURE__ */ $r(L1, [["render", M1]]);
function D_(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: B1 } = Object.prototype, { getPrototypeOf: zu } = Object, { iterator: ga, toStringTag: x_ } = Symbol, Ea = /* @__PURE__ */ ((e) => (t) => {
  const n = B1.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), rn = (e) => (e = e.toLowerCase(), (t) => Ea(t) === e), va = (e) => (t) => typeof t === e, { isArray: Ir } = Array, As = va("undefined");
function U1(e) {
  return e !== null && !As(e) && e.constructor !== null && !As(e.constructor) && Ct(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const R_ = rn("ArrayBuffer");
function j1(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && R_(e.buffer), t;
}
const H1 = va("string"), Ct = va("function"), k_ = va("number"), ya = (e) => e !== null && typeof e == "object", K1 = (e) => e === !0 || e === !1, wi = (e) => {
  if (Ea(e) !== "object")
    return !1;
  const t = zu(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(x_ in e) && !(ga in e);
}, W1 = rn("Date"), z1 = rn("File"), q1 = rn("Blob"), G1 = rn("FileList"), Y1 = (e) => ya(e) && Ct(e.pipe), X1 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ct(e.append) && ((t = Ea(e)) === "formdata" || // detect form-data instance
  t === "object" && Ct(e.toString) && e.toString() === "[object FormData]"));
}, J1 = rn("URLSearchParams"), [Q1, Z1, eS, tS] = ["ReadableStream", "Request", "Response", "Headers"].map(rn), nS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ls(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, r;
  if (typeof e != "object" && (e = [e]), Ir(e))
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
const No = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, I_ = (e) => !As(e) && e !== No;
function Jl() {
  const { caseless: e } = I_(this) && this || {}, t = {}, n = (o, r) => {
    const s = e && $_(t, r) || r;
    wi(t[s]) && wi(o) ? t[s] = Jl(t[s], o) : wi(o) ? t[s] = Jl({}, o) : Ir(o) ? t[s] = o.slice() : t[s] = o;
  };
  for (let o = 0, r = arguments.length; o < r; o++)
    arguments[o] && Ls(arguments[o], n);
  return t;
}
const oS = (e, t, n, { allOwnKeys: o } = {}) => (Ls(t, (r, s) => {
  n && Ct(r) ? e[s] = D_(r, n) : e[s] = r;
}, { allOwnKeys: o }), e), rS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), sS = (e, t, n, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, iS = (e, t, n, o) => {
  let r, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
      i = r[s], (!o || o(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && zu(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, aS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const o = e.indexOf(t, n);
  return o !== -1 && o === n;
}, lS = (e) => {
  if (!e) return null;
  if (Ir(e)) return e;
  let t = e.length;
  if (!k_(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, uS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && zu(Uint8Array)), cS = (e, t) => {
  const o = (e && e[ga]).call(e);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const s = r.value;
    t.call(e, s[0], s[1]);
  }
}, fS = (e, t) => {
  let n;
  const o = [];
  for (; (n = e.exec(t)) !== null; )
    o.push(n);
  return o;
}, dS = rn("HTMLFormElement"), pS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, r) {
    return o.toUpperCase() + r;
  }
), Fd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), hS = rn("RegExp"), P_ = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), o = {};
  Ls(n, (r, s) => {
    let i;
    (i = t(r, s, e)) !== !1 && (o[s] = i || r);
  }), Object.defineProperties(e, o);
}, mS = (e) => {
  P_(e, (t, n) => {
    if (Ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const o = e[n];
    if (Ct(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, _S = (e, t) => {
  const n = {}, o = (r) => {
    r.forEach((s) => {
      n[s] = !0;
    });
  };
  return Ir(e) ? o(e) : o(String(e).split(t)), n;
}, gS = () => {
}, ES = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function vS(e) {
  return !!(e && Ct(e.append) && e[x_] === "FormData" && e[ga]);
}
const yS = (e) => {
  const t = new Array(10), n = (o, r) => {
    if (ya(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[r] = o;
        const s = Ir(o) ? [] : {};
        return Ls(o, (i, a) => {
          const u = n(i, r + 1);
          !As(u) && (s[a] = u);
        }), t[r] = void 0, s;
      }
    }
    return o;
  };
  return n(e, 0);
}, bS = rn("AsyncFunction"), wS = (e) => e && (ya(e) || Ct(e)) && Ct(e.then) && Ct(e.catch), V_ = ((e, t) => e ? setImmediate : t ? ((n, o) => (No.addEventListener("message", ({ source: r, data: s }) => {
  r === No && s === n && o.length && o.shift()();
}, !1), (r) => {
  o.push(r), No.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ct(No.postMessage)
), OS = typeof queueMicrotask < "u" ? queueMicrotask.bind(No) : typeof process < "u" && process.nextTick || V_, SS = (e) => e != null && Ct(e[ga]), k = {
  isArray: Ir,
  isArrayBuffer: R_,
  isBuffer: U1,
  isFormData: X1,
  isArrayBufferView: j1,
  isString: H1,
  isNumber: k_,
  isBoolean: K1,
  isObject: ya,
  isPlainObject: wi,
  isReadableStream: Q1,
  isRequest: Z1,
  isResponse: eS,
  isHeaders: tS,
  isUndefined: As,
  isDate: W1,
  isFile: z1,
  isBlob: q1,
  isRegExp: hS,
  isFunction: Ct,
  isStream: Y1,
  isURLSearchParams: J1,
  isTypedArray: uS,
  isFileList: G1,
  forEach: Ls,
  merge: Jl,
  extend: oS,
  trim: nS,
  stripBOM: rS,
  inherits: sS,
  toFlatObject: iS,
  kindOf: Ea,
  kindOfTest: rn,
  endsWith: aS,
  toArray: lS,
  forEachEntry: cS,
  matchAll: fS,
  isHTMLForm: dS,
  hasOwnProperty: Fd,
  hasOwnProp: Fd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: P_,
  freezeMethods: mS,
  toObjectSet: _S,
  toCamelCase: pS,
  noop: gS,
  toFiniteNumber: ES,
  findKey: $_,
  global: No,
  isContextDefined: I_,
  isSpecCompliantForm: vS,
  toJSONObject: yS,
  isAsyncFn: bS,
  isThenable: wS,
  setImmediate: V_,
  asap: OS,
  isIterable: SS
};
function ge(e, t, n, o, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), r && (this.response = r, this.status = r.status ? r.status : null);
}
k.inherits(ge, Error, {
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
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const L_ = ge.prototype, M_ = {};
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
Object.defineProperties(ge, M_);
Object.defineProperty(L_, "isAxiosError", { value: !0 });
ge.from = (e, t, n, o, r, s) => {
  const i = Object.create(L_);
  return k.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ge.call(i, e.message, t, n, o, r), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const NS = null;
function Ql(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function F_(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Bd(e, t, n) {
  return e ? e.concat(t).map(function(r, s) {
    return r = F_(r), !n && s ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function AS(e) {
  return k.isArray(e) && !e.some(Ql);
}
const TS = k.toFlatObject(k, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ba(e, t, n) {
  if (!k.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = k.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, E) {
    return !k.isUndefined(E[m]);
  });
  const o = n.metaTokens, r = n.visitor || l, s = n.dots, i = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
  if (!k.isFunction(r))
    throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (k.isDate(h))
      return h.toISOString();
    if (k.isBoolean(h))
      return h.toString();
    if (!u && k.isBlob(h))
      throw new ge("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(h) || k.isTypedArray(h) ? u && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function l(h, m, E) {
    let v = h;
    if (h && !E && typeof h == "object") {
      if (k.endsWith(m, "{}"))
        m = o ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (k.isArray(h) && AS(h) || (k.isFileList(h) || k.endsWith(m, "[]")) && (v = k.toArray(h)))
        return m = F_(m), v.forEach(function(b, $) {
          !(k.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Bd([m], $, s) : i === null ? m : m + "[]",
            f(b)
          );
        }), !1;
    }
    return Ql(h) ? !0 : (t.append(Bd(E, m, s), f(h)), !1);
  }
  const c = [], d = Object.assign(TS, {
    defaultVisitor: l,
    convertValue: f,
    isVisitable: Ql
  });
  function p(h, m) {
    if (!k.isUndefined(h)) {
      if (c.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      c.push(h), k.forEach(h, function(v, O) {
        (!(k.isUndefined(v) || v === null) && r.call(
          t,
          v,
          k.isString(O) ? O.trim() : O,
          m,
          d
        )) === !0 && p(v, m ? m.concat(O) : [O]);
      }), c.pop();
    }
  }
  if (!k.isObject(e))
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
function qu(e, t) {
  this._pairs = [], e && ba(e, this, t);
}
const B_ = qu.prototype;
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
function CS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function U_(e, t, n) {
  if (!t)
    return e;
  const o = n && n.encode || CS;
  k.isFunction(n) && (n = {
    serialize: n
  });
  const r = n && n.serialize;
  let s;
  if (r ? s = r(t, n) : s = k.isURLSearchParams(t) ? t.toString() : new qu(t, n).toString(o), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class jd {
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
    k.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const j_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, DS = typeof URLSearchParams < "u" ? URLSearchParams : qu, xS = typeof FormData < "u" ? FormData : null, RS = typeof Blob < "u" ? Blob : null, kS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: DS,
    FormData: xS,
    Blob: RS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Gu = typeof window < "u" && typeof document < "u", Zl = typeof navigator == "object" && navigator || void 0, $S = Gu && (!Zl || ["ReactNative", "NativeScript", "NS"].indexOf(Zl.product) < 0), IS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", PS = Gu && window.location.href || "http://localhost", VS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Gu,
  hasStandardBrowserEnv: $S,
  hasStandardBrowserWebWorkerEnv: IS,
  navigator: Zl,
  origin: PS
}, Symbol.toStringTag, { value: "Module" })), ut = {
  ...VS,
  ...kS
};
function LS(e, t) {
  return ba(e, new ut.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, r, s) {
      return ut.isNode && k.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function MS(e) {
  return k.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function FS(e) {
  const t = {}, n = Object.keys(e);
  let o;
  const r = n.length;
  let s;
  for (o = 0; o < r; o++)
    s = n[o], t[s] = e[s];
  return t;
}
function H_(e) {
  function t(n, o, r, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), u = s >= n.length;
    return i = !i && k.isArray(r) ? r.length : i, u ? (k.hasOwnProp(r, i) ? r[i] = [r[i], o] : r[i] = o, !a) : ((!r[i] || !k.isObject(r[i])) && (r[i] = []), t(n, o, r[i], s) && k.isArray(r[i]) && (r[i] = FS(r[i])), !a);
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return k.forEachEntry(e, (o, r) => {
      t(MS(o), r, n, 0);
    }), n;
  }
  return null;
}
function BS(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (n || JSON.stringify)(e);
}
const Ms = {
  transitional: j_,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const o = n.getContentType() || "", r = o.indexOf("application/json") > -1, s = k.isObject(t);
    if (s && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))
      return r ? JSON.stringify(H_(t)) : t;
    if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t) || k.isReadableStream(t))
      return t;
    if (k.isArrayBufferView(t))
      return t.buffer;
    if (k.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return LS(t, this.formSerializer).toString();
      if ((a = k.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ba(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || r ? (n.setContentType("application/json", !1), BS(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ms.transitional, o = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (k.isResponse(t) || k.isReadableStream(t))
      return t;
    if (t && k.isString(t) && (o && !this.responseType || r)) {
      const i = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? ge.from(a, ge.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ut.classes.FormData,
    Blob: ut.classes.Blob
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
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ms.headers[e] = {};
});
const US = k.toObjectSet([
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
]), jS = (e) => {
  const t = {};
  let n, o, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), o = i.substring(r + 1).trim(), !(!n || t[n] && US[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o);
  }), t;
}, Hd = Symbol("internals");
function zr(e) {
  return e && String(e).trim().toLowerCase();
}
function Oi(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(Oi) : String(e);
}
function HS(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const KS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xa(e, t, n, o, r) {
  if (k.isFunction(o))
    return o.call(this, t, n);
  if (r && (t = n), !!k.isString(t)) {
    if (k.isString(o))
      return t.indexOf(o) !== -1;
    if (k.isRegExp(o))
      return o.test(t);
  }
}
function WS(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o);
}
function zS(e, t) {
  const n = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + n, {
      value: function(r, s, i) {
        return this[o].call(this, t, r, s, i);
      },
      configurable: !0
    });
  });
}
let Dt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, o) {
    const r = this;
    function s(a, u, f) {
      const l = zr(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = k.findKey(r, l);
      (!c || r[c] === void 0 || f === !0 || f === void 0 && r[c] !== !1) && (r[c || u] = Oi(a));
    }
    const i = (a, u) => k.forEach(a, (f, l) => s(f, l, u));
    if (k.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (k.isString(t) && (t = t.trim()) && !KS(t))
      i(jS(t), n);
    else if (k.isObject(t) && k.isIterable(t)) {
      let a = {}, u, f;
      for (const l of t) {
        if (!k.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = l[0]] = (u = a[f]) ? k.isArray(u) ? [...u, l[1]] : [u, l[1]] : l[1];
      }
      i(a, n);
    } else
      t != null && s(n, t, o);
    return this;
  }
  get(t, n) {
    if (t = zr(t), t) {
      const o = k.findKey(this, t);
      if (o) {
        const r = this[o];
        if (!n)
          return r;
        if (n === !0)
          return HS(r);
        if (k.isFunction(n))
          return n.call(this, r, o);
        if (k.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = zr(t), t) {
      const o = k.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!n || Xa(this, this[o], o, n)));
    }
    return !1;
  }
  delete(t, n) {
    const o = this;
    let r = !1;
    function s(i) {
      if (i = zr(i), i) {
        const a = k.findKey(o, i);
        a && (!n || Xa(o, o[a], a, n)) && (delete o[a], r = !0);
      }
    }
    return k.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let o = n.length, r = !1;
    for (; o--; ) {
      const s = n[o];
      (!t || Xa(this, this[s], s, t, !0)) && (delete this[s], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, o = {};
    return k.forEach(this, (r, s) => {
      const i = k.findKey(o, s);
      if (i) {
        n[i] = Oi(r), delete n[s];
        return;
      }
      const a = t ? WS(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Oi(r), o[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return k.forEach(this, (o, r) => {
      o != null && o !== !1 && (n[r] = t && k.isArray(o) ? o.join(", ") : o);
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
    const o = (this[Hd] = this[Hd] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(i) {
      const a = zr(i);
      o[a] || (zS(r, i), o[a] = !0);
    }
    return k.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
Dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(Dt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[n] = o;
    }
  };
});
k.freezeMethods(Dt);
function Ja(e, t) {
  const n = this || Ms, o = t || n, r = Dt.from(o.headers);
  let s = o.data;
  return k.forEach(e, function(a) {
    s = a.call(n, s, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), s;
}
function K_(e) {
  return !!(e && e.__CANCEL__);
}
function Pr(e, t, n) {
  ge.call(this, e ?? "canceled", ge.ERR_CANCELED, t, n), this.name = "CanceledError";
}
k.inherits(Pr, ge, {
  __CANCEL__: !0
});
function W_(e, t, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? e(n) : t(new ge(
    "Request failed with status code " + n.status,
    [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function qS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function GS(e, t) {
  e = e || 10;
  const n = new Array(e), o = new Array(e);
  let r = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const f = Date.now(), l = o[s];
    i || (i = f), n[r] = u, o[r] = f;
    let c = s, d = 0;
    for (; c !== r; )
      d += n[c++], c = c % e;
    if (r = (r + 1) % e, r === s && (s = (s + 1) % e), f - i < t)
      return;
    const p = l && f - l;
    return p ? Math.round(d * 1e3 / p) : void 0;
  };
}
function YS(e, t) {
  let n = 0, o = 1e3 / t, r, s;
  const i = (f, l = Date.now()) => {
    n = l, r = null, s && (clearTimeout(s), s = null), e.apply(null, f);
  };
  return [(...f) => {
    const l = Date.now(), c = l - n;
    c >= o ? i(f, l) : (r = f, s || (s = setTimeout(() => {
      s = null, i(r);
    }, o - c)));
  }, () => r && i(r)];
}
const Ki = (e, t, n = 3) => {
  let o = 0;
  const r = GS(50, 250);
  return YS((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, u = i - o, f = r(u), l = i <= a;
    o = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: u,
      rate: f || void 0,
      estimated: f && a && l ? (a - i) / f : void 0,
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
}, Wd = (e) => (...t) => k.asap(() => e(...t)), XS = ut.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ut.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ut.origin),
  ut.navigator && /(msie|trident)/i.test(ut.navigator.userAgent)
) : () => !0, JS = ut.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, o, r, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      k.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), k.isString(o) && i.push("path=" + o), k.isString(r) && i.push("domain=" + r), s === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function QS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ZS(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function z_(e, t, n) {
  let o = !QS(t);
  return e && (o || n == !1) ? ZS(e, t) : t;
}
const zd = (e) => e instanceof Dt ? { ...e } : e;
function Ho(e, t) {
  t = t || {};
  const n = {};
  function o(f, l, c, d) {
    return k.isPlainObject(f) && k.isPlainObject(l) ? k.merge.call({ caseless: d }, f, l) : k.isPlainObject(l) ? k.merge({}, l) : k.isArray(l) ? l.slice() : l;
  }
  function r(f, l, c, d) {
    if (k.isUndefined(l)) {
      if (!k.isUndefined(f))
        return o(void 0, f, c, d);
    } else return o(f, l, c, d);
  }
  function s(f, l) {
    if (!k.isUndefined(l))
      return o(void 0, l);
  }
  function i(f, l) {
    if (k.isUndefined(l)) {
      if (!k.isUndefined(f))
        return o(void 0, f);
    } else return o(void 0, l);
  }
  function a(f, l, c) {
    if (c in t)
      return o(f, l);
    if (c in e)
      return o(void 0, f);
  }
  const u = {
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
    headers: (f, l, c) => r(zd(f), zd(l), c, !0)
  };
  return k.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const c = u[l] || r, d = c(e[l], t[l], l);
    k.isUndefined(d) && c !== a || (n[l] = d);
  }), n;
}
const q_ = (e) => {
  const t = Ho({}, e);
  let { data: n, withXSRFToken: o, xsrfHeaderName: r, xsrfCookieName: s, headers: i, auth: a } = t;
  t.headers = i = Dt.from(i), t.url = U_(z_(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let u;
  if (k.isFormData(n)) {
    if (ut.hasStandardBrowserEnv || ut.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((u = i.getContentType()) !== !1) {
      const [f, ...l] = u ? u.split(";").map((c) => c.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...l].join("; "));
    }
  }
  if (ut.hasStandardBrowserEnv && (o && k.isFunction(o) && (o = o(t)), o || o !== !1 && XS(t.url))) {
    const f = r && s && JS.read(s);
    f && i.set(r, f);
  }
  return t;
}, eN = typeof XMLHttpRequest < "u", tN = eN && function(e) {
  return new Promise(function(n, o) {
    const r = q_(e);
    let s = r.data;
    const i = Dt.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: u, onDownloadProgress: f } = r, l, c, d, p, h;
    function m() {
      p && p(), h && h(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let E = new XMLHttpRequest();
    E.open(r.method.toUpperCase(), r.url, !0), E.timeout = r.timeout;
    function v() {
      if (!E)
        return;
      const b = Dt.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), A = {
        data: !a || a === "text" || a === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: b,
        config: e,
        request: E
      };
      W_(function(C) {
        n(C), m();
      }, function(C) {
        o(C), m();
      }, A), E = null;
    }
    "onloadend" in E ? E.onloadend = v : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, E.onabort = function() {
      E && (o(new ge("Request aborted", ge.ECONNABORTED, e, E)), E = null);
    }, E.onerror = function() {
      o(new ge("Network Error", ge.ERR_NETWORK, e, E)), E = null;
    }, E.ontimeout = function() {
      let $ = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const A = r.transitional || j_;
      r.timeoutErrorMessage && ($ = r.timeoutErrorMessage), o(new ge(
        $,
        A.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
        e,
        E
      )), E = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in E && k.forEach(i.toJSON(), function($, A) {
      E.setRequestHeader(A, $);
    }), k.isUndefined(r.withCredentials) || (E.withCredentials = !!r.withCredentials), a && a !== "json" && (E.responseType = r.responseType), f && ([d, h] = Ki(f, !0), E.addEventListener("progress", d)), u && E.upload && ([c, p] = Ki(u), E.upload.addEventListener("progress", c), E.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (l = (b) => {
      E && (o(!b || b.type ? new Pr(null, e, E) : b), E.abort(), E = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const O = qS(r.url);
    if (O && ut.protocols.indexOf(O) === -1) {
      o(new ge("Unsupported protocol " + O + ":", ge.ERR_BAD_REQUEST, e));
      return;
    }
    E.send(s || null);
  });
}, nN = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let o = new AbortController(), r;
    const s = function(f) {
      if (!r) {
        r = !0, a();
        const l = f instanceof Error ? f : this.reason;
        o.abort(l instanceof ge ? l : new Pr(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new ge(`timeout ${t} of ms exceeded`, ge.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", s));
    const { signal: u } = o;
    return u.unsubscribe = () => k.asap(a), u;
  }
}, oN = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let o = 0, r;
  for (; o < n; )
    r = o + t, yield e.slice(o, r), o = r;
}, rN = async function* (e, t) {
  for await (const n of sN(e))
    yield* oN(n, t);
}, sN = async function* (e) {
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
  const r = rN(e, t);
  let s = 0, i, a = (u) => {
    i || (i = !0, o && o(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: f, value: l } = await r.next();
        if (f) {
          a(), u.close();
          return;
        }
        let c = l.byteLength;
        if (n) {
          let d = s += c;
          n(d);
        }
        u.enqueue(new Uint8Array(l));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(u) {
      return a(u), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, wa = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", G_ = wa && typeof ReadableStream == "function", iN = wa && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Y_ = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, aN = G_ && Y_(() => {
  let e = !1;
  const t = new Request(ut.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Gd = 64 * 1024, eu = G_ && Y_(() => k.isReadableStream(new Response("").body)), Wi = {
  stream: eu && ((e) => e.body)
};
wa && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Wi[t] && (Wi[t] = k.isFunction(e[t]) ? (n) => n[t]() : (n, o) => {
      throw new ge(`Response type '${t}' is not supported`, ge.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const lN = async (e) => {
  if (e == null)
    return 0;
  if (k.isBlob(e))
    return e.size;
  if (k.isSpecCompliantForm(e))
    return (await new Request(ut.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (k.isArrayBufferView(e) || k.isArrayBuffer(e))
    return e.byteLength;
  if (k.isURLSearchParams(e) && (e = e + ""), k.isString(e))
    return (await iN(e)).byteLength;
}, uN = async (e, t) => {
  const n = k.toFiniteNumber(e.getContentLength());
  return n ?? lN(t);
}, cN = wa && (async (e) => {
  let {
    url: t,
    method: n,
    data: o,
    signal: r,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: u,
    responseType: f,
    headers: l,
    withCredentials: c = "same-origin",
    fetchOptions: d
  } = q_(e);
  f = f ? (f + "").toLowerCase() : "text";
  let p = nN([r, s && s.toAbortSignal()], i), h;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let E;
  try {
    if (u && aN && n !== "get" && n !== "head" && (E = await uN(l, o)) !== 0) {
      let A = new Request(t, {
        method: "POST",
        body: o,
        duplex: "half"
      }), D;
      if (k.isFormData(o) && (D = A.headers.get("content-type")) && l.setContentType(D), A.body) {
        const [C, V] = Kd(
          E,
          Ki(Wd(u))
        );
        o = qd(A.body, Gd, C, V);
      }
    }
    k.isString(c) || (c = c ? "include" : "omit");
    const v = "credentials" in Request.prototype;
    h = new Request(t, {
      ...d,
      signal: p,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: v ? c : void 0
    });
    let O = await fetch(h, d);
    const b = eu && (f === "stream" || f === "response");
    if (eu && (a || b && m)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((S) => {
        A[S] = O[S];
      });
      const D = k.toFiniteNumber(O.headers.get("content-length")), [C, V] = a && Kd(
        D,
        Ki(Wd(a), !0)
      ) || [];
      O = new Response(
        qd(O.body, Gd, C, () => {
          V && V(), m && m();
        }),
        A
      );
    }
    f = f || "text";
    let $ = await Wi[k.findKey(Wi, f) || "text"](O, e);
    return !b && m && m(), await new Promise((A, D) => {
      W_(A, D, {
        data: $,
        headers: Dt.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: h
      });
    });
  } catch (v) {
    throw m && m(), v && v.name === "TypeError" && /Load failed|fetch/i.test(v.message) ? Object.assign(
      new ge("Network Error", ge.ERR_NETWORK, e, h),
      {
        cause: v.cause || v
      }
    ) : ge.from(v, v && v.code, e, h);
  }
}), tu = {
  http: NS,
  xhr: tN,
  fetch: cN
};
k.forEach(tu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Yd = (e) => `- ${e}`, fN = (e) => k.isFunction(e) || e === null || e === !1, X_ = {
  getAdapter: (e) => {
    e = k.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, o;
    const r = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (o = n, !fN(n) && (o = tu[(i = String(n)).toLowerCase()], o === void 0))
        throw new ge(`Unknown adapter '${i}'`);
      if (o)
        break;
      r[i || "#" + s] = o;
    }
    if (!o) {
      const s = Object.entries(r).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(Yd).join(`
`) : " " + Yd(s[0]) : "as no adapter specified";
      throw new ge(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: tu
};
function Qa(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Pr(null, e);
}
function Xd(e) {
  return Qa(e), e.headers = Dt.from(e.headers), e.data = Ja.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), X_.getAdapter(e.adapter || Ms.adapter)(e).then(function(o) {
    return Qa(e), o.data = Ja.call(
      e,
      e.transformResponse,
      o
    ), o.headers = Dt.from(o.headers), o;
  }, function(o) {
    return K_(o) || (Qa(e), o && o.response && (o.response.data = Ja.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = Dt.from(o.response.headers))), Promise.reject(o);
  });
}
const J_ = "1.10.0", Oa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Oa[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jd = {};
Oa.transitional = function(t, n, o) {
  function r(s, i) {
    return "[Axios v" + J_ + "] Transitional option '" + s + "'" + i + (o ? ". " + o : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new ge(
        r(i, " has been removed" + (n ? " in " + n : "")),
        ge.ERR_DEPRECATED
      );
    return n && !Jd[i] && (Jd[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
Oa.spelling = function(t) {
  return (n, o) => (console.warn(`${o} is likely a misspelling of ${t}`), !0);
};
function dN(e, t, n) {
  if (typeof e != "object")
    throw new ge("options must be an object", ge.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let r = o.length;
  for (; r-- > 0; ) {
    const s = o[r], i = t[s];
    if (i) {
      const a = e[s], u = a === void 0 || i(a, s, e);
      if (u !== !0)
        throw new ge("option " + s + " must be " + u, ge.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ge("Unknown option " + s, ge.ERR_BAD_OPTION);
  }
}
const Si = {
  assertOptions: dN,
  validators: Oa
}, dn = Si.validators;
let Io = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new jd(),
      response: new jd()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ho(this.defaults, n);
    const { transitional: o, paramsSerializer: r, headers: s } = n;
    o !== void 0 && Si.assertOptions(o, {
      silentJSONParsing: dn.transitional(dn.boolean),
      forcedJSONParsing: dn.transitional(dn.boolean),
      clarifyTimeoutError: dn.transitional(dn.boolean)
    }, !1), r != null && (k.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : Si.assertOptions(r, {
      encode: dn.function,
      serialize: dn.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Si.assertOptions(n, {
      baseUrl: dn.spelling("baseURL"),
      withXsrfToken: dn.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && k.merge(
      s.common,
      s[n.method]
    );
    s && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), n.headers = Dt.concat(i, s);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (u = u && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(m) {
      f.push(m.fulfilled, m.rejected);
    });
    let l, c = 0, d;
    if (!u) {
      const h = [Xd.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, f), d = h.length, l = Promise.resolve(n); c < d; )
        l = l.then(h[c++], h[c++]);
      return l;
    }
    d = a.length;
    let p = n;
    for (c = 0; c < d; ) {
      const h = a[c++], m = a[c++];
      try {
        p = h(p);
      } catch (E) {
        m.call(this, E);
        break;
      }
    }
    try {
      l = Xd.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, d = f.length; c < d; )
      l = l.then(f[c++], f[c++]);
    return l;
  }
  getUri(t) {
    t = Ho(this.defaults, t);
    const n = z_(t.baseURL, t.url, t.allowAbsoluteUrls);
    return U_(n, t.params, t.paramsSerializer);
  }
};
k.forEach(["delete", "get", "head", "options"], function(t) {
  Io.prototype[t] = function(n, o) {
    return this.request(Ho(o || {}, {
      method: t,
      url: n,
      data: (o || {}).data
    }));
  };
});
k.forEach(["post", "put", "patch"], function(t) {
  function n(o) {
    return function(s, i, a) {
      return this.request(Ho(a || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Io.prototype[t] = n(), Io.prototype[t + "Form"] = n(!0);
});
let pN = class Q_ {
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
      o.reason || (o.reason = new Pr(s, i, a), n(o.reason));
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
function hN(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function mN(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const nu = {
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
Object.entries(nu).forEach(([e, t]) => {
  nu[t] = e;
});
function Z_(e) {
  const t = new Io(e), n = D_(Io.prototype.request, t);
  return k.extend(n, Io.prototype, t, { allOwnKeys: !0 }), k.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return Z_(Ho(e, r));
  }, n;
}
const Xe = Z_(Ms);
Xe.Axios = Io;
Xe.CanceledError = Pr;
Xe.CancelToken = pN;
Xe.isCancel = K_;
Xe.VERSION = J_;
Xe.toFormData = ba;
Xe.AxiosError = ge;
Xe.Cancel = Xe.CanceledError;
Xe.all = function(t) {
  return Promise.all(t);
};
Xe.spread = hN;
Xe.isAxiosError = mN;
Xe.mergeConfig = Ho;
Xe.AxiosHeaders = Dt;
Xe.formToJSON = (e) => H_(k.isHTMLForm(e) ? new FormData(e) : e);
Xe.getAdapter = X_.getAdapter;
Xe.HttpStatusCode = nu;
Xe.default = Xe;
const {
  Axios: nP,
  AxiosError: oP,
  CanceledError: rP,
  isCancel: sP,
  CancelToken: iP,
  VERSION: aP,
  all: lP,
  Cancel: uP,
  isAxiosError: cP,
  spread: fP,
  toFormData: dP,
  AxiosHeaders: pP,
  HttpStatusCode: hP,
  formToJSON: mP,
  getAdapter: _P,
  mergeConfig: gP
} = Xe, _N = "fhir_snapshot", gN = "api", EN = () => {
  let n = {
    pid: new URLSearchParams(location.search).get("pid"),
    page: gN,
    // content: "externalModule",
    type: "module",
    prefix: _N
  };
  return window.redcap_csrf_token && (n.redcap_csrf_token = window.redcap_csrf_token), n;
}, vN = () => {
  const e = Xe.create({
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
    const n = EN();
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
}, dt = vN(), hn = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return dt.get("", { params: e });
  },
  updateProjectSettings(e) {
    const t = { route: "project-settings" };
    return dt.put("", e, { params: t });
  },
  listMrns(e, t) {
    const n = { route: "mrns" };
    return e && (n._page = e), t && (n._per_page = t), dt.get("", { params: n });
  },
  addMrn(e) {
    const t = { route: "mrns" };
    return dt.post("", { mrn: e }, { params: t });
  },
  removeMrn(e) {
    const t = { route: `mrns/${e}` };
    return dt.delete("", { params: t, data: e });
  },
  triggerFetch(e, t) {
    const n = { route: "trigger-fetch" };
    return dt.post("", { mrns: e, resources: t }, { params: n });
  },
  getFetchStatus() {
    const e = { route: "fetch-status" };
    return dt.get("", { params: e });
  },
  createZipArchive(e) {
    const t = { route: "create-zip-archive" };
    return dt.post("", { mrns: e }, { params: t });
  },
  downloadZip(e) {
    const t = { route: "download-zip", zip_id: e };
    return dt.get("", { params: t, responseType: "blob" });
  },
  // Enhanced MRN and resource management
  getMrnResources(e) {
    const t = { route: `mrns/${e}/resources` };
    return dt.get("", { params: t });
  },
  getProjectSummary() {
    const e = { route: "project-summary" };
    return dt.get("", { params: e });
  },
  triggerFetchMrns(e, t) {
    const n = { route: "trigger-fetch" }, o = { mrns: e };
    return t && t.length > 0 && (o.resources = t), dt.post("", o, { params: n });
  },
  performFullSync() {
    const e = { route: "perform-full-sync" };
    return dt.post("", {}, { params: e });
  },
  retryFailedResource(e, t, n) {
    const o = { route: "retry-failed" };
    return dt.post("", {
      mrn: e,
      resource_type: t,
      repeat_instance: n,
      bulk: !1
    }, { params: o });
  },
  bulkRetryFailed(e) {
    const t = { route: "retry-failed" }, n = { bulk: !0 };
    return e && (n.resource_type = e), dt.post("", n, { params: t });
  }
}, Yu = /* @__PURE__ */ ma("errors", () => {
  const e = oe([]);
  return {
    errors: e,
    addError: (o, r) => {
      const s = yN(o);
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
function yN(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
var yt = "top", It = "bottom", Pt = "right", bt = "left", Sa = "auto", Vr = [yt, It, Pt, bt], Ko = "start", Or = "end", eg = "clippingParents", Xu = "viewport", rr = "popper", tg = "reference", ou = /* @__PURE__ */ Vr.reduce(function(e, t) {
  return e.concat([t + "-" + Ko, t + "-" + Or]);
}, []), Ju = /* @__PURE__ */ [].concat(Vr, [Sa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ko, t + "-" + Or]);
}, []), ng = "beforeRead", og = "read", rg = "afterRead", sg = "beforeMain", ig = "main", ag = "afterMain", lg = "beforeWrite", ug = "write", cg = "afterWrite", fg = [ng, og, rg, sg, ig, ag, lg, ug, cg];
function An(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Vt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Wo(e) {
  var t = Vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Bt(e) {
  var t = Vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Qu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function bN(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !Bt(s) || !An(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(i) {
      var a = r[i];
      a === !1 ? s.removeAttribute(i) : s.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function wN(e) {
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
      var r = t.elements[o], s = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = i.reduce(function(u, f) {
        return u[f] = "", u;
      }, {});
      !Bt(r) || !An(r) || (Object.assign(r.style, a), Object.keys(s).forEach(function(u) {
        r.removeAttribute(u);
      }));
    });
  };
}
const Zu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bN,
  effect: wN,
  requires: ["computeStyles"]
};
function bn(e) {
  return e.split("-")[0];
}
var Po = Math.max, zi = Math.min, Sr = Math.round;
function ru() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function dg() {
  return !/^((?!chrome|android).)*safari/i.test(ru());
}
function Nr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && Bt(e) && (r = e.offsetWidth > 0 && Sr(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Sr(o.height) / e.offsetHeight || 1);
  var i = Wo(e) ? Vt(e) : window, a = i.visualViewport, u = !dg() && n, f = (o.left + (u && a ? a.offsetLeft : 0)) / r, l = (o.top + (u && a ? a.offsetTop : 0)) / s, c = o.width / r, d = o.height / s;
  return {
    width: c,
    height: d,
    top: l,
    right: f + c,
    bottom: l + d,
    left: f,
    x: f,
    y: l
  };
}
function ec(e) {
  var t = Nr(e), n = e.offsetWidth, o = e.offsetHeight;
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
  if (n && Qu(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function jn(e) {
  return Vt(e).getComputedStyle(e);
}
function ON(e) {
  return ["table", "td", "th"].indexOf(An(e)) >= 0;
}
function fo(e) {
  return ((Wo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Na(e) {
  return An(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Qu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    fo(e)
  );
}
function Qd(e) {
  return !Bt(e) || // https://github.com/popperjs/popper-core/issues/837
  jn(e).position === "fixed" ? null : e.offsetParent;
}
function SN(e) {
  var t = /firefox/i.test(ru()), n = /Trident/i.test(ru());
  if (n && Bt(e)) {
    var o = jn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Na(e);
  for (Qu(r) && (r = r.host); Bt(r) && ["html", "body"].indexOf(An(r)) < 0; ) {
    var s = jn(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Fs(e) {
  for (var t = Vt(e), n = Qd(e); n && ON(n) && jn(n).position === "static"; )
    n = Qd(n);
  return n && (An(n) === "html" || An(n) === "body" && jn(n).position === "static") ? t : n || SN(e) || t;
}
function tc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ls(e, t, n) {
  return Po(e, zi(t, n));
}
function NN(e, t, n) {
  var o = ls(e, t, n);
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
var AN = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, mg(typeof t != "number" ? t : _g(t, Vr));
};
function TN(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, a = bn(n.placement), u = tc(a), f = [bt, Pt].indexOf(a) >= 0, l = f ? "height" : "width";
  if (!(!s || !i)) {
    var c = AN(r.padding, n), d = ec(s), p = u === "y" ? yt : bt, h = u === "y" ? It : Pt, m = n.rects.reference[l] + n.rects.reference[u] - i[u] - n.rects.popper[l], E = i[u] - n.rects.reference[u], v = Fs(s), O = v ? u === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, b = m / 2 - E / 2, $ = c[p], A = O - d[l] - c[h], D = O / 2 - d[l] / 2 + b, C = ls($, D, A), V = u;
    n.modifiersData[o] = (t = {}, t[V] = C, t.centerOffset = C - D, t);
  }
}
function CN(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || pg(t.elements.popper, r) && (t.elements.arrow = r));
}
const gg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: TN,
  effect: CN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ar(e) {
  return e.split("-")[1];
}
var DN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function xN(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return {
    x: Sr(n * r) / r || 0,
    y: Sr(o * r) / r || 0
  };
}
function Zd(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, i = e.offsets, a = e.position, u = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, c = e.isFixed, d = i.x, p = d === void 0 ? 0 : d, h = i.y, m = h === void 0 ? 0 : h, E = typeof l == "function" ? l({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = E.x, m = E.y;
  var v = i.hasOwnProperty("x"), O = i.hasOwnProperty("y"), b = bt, $ = yt, A = window;
  if (f) {
    var D = Fs(n), C = "clientHeight", V = "clientWidth";
    if (D === Vt(n) && (D = fo(n), jn(D).position !== "static" && a === "absolute" && (C = "scrollHeight", V = "scrollWidth")), D = D, r === yt || (r === bt || r === Pt) && s === Or) {
      $ = It;
      var S = c && D === A && A.visualViewport ? A.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        D[C]
      );
      m -= S - o.height, m *= u ? 1 : -1;
    }
    if (r === bt || (r === yt || r === It) && s === Or) {
      b = Pt;
      var T = c && D === A && A.visualViewport ? A.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        D[V]
      );
      p -= T - o.width, p *= u ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: a
  }, f && DN), x = l === !0 ? xN({
    x: p,
    y: m
  }, Vt(n)) : {
    x: p,
    y: m
  };
  if (p = x.x, m = x.y, u) {
    var Y;
    return Object.assign({}, R, (Y = {}, Y[$] = O ? "0" : "", Y[b] = v ? "0" : "", Y.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", Y));
  }
  return Object.assign({}, R, (t = {}, t[$] = O ? m + "px" : "", t[b] = v ? p + "px" : "", t.transform = "", t));
}
function RN(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, i = s === void 0 ? !0 : s, a = n.roundOffsets, u = a === void 0 ? !0 : a, f = {
    placement: bn(t.placement),
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
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Zd(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const nc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: RN,
  data: {}
};
var ei = {
  passive: !0
};
function kN(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, i = o.resize, a = i === void 0 ? !0 : i, u = Vt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, ei);
  }), a && u.addEventListener("resize", n.update, ei), function() {
    s && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, ei);
    }), a && u.removeEventListener("resize", n.update, ei);
  };
}
const oc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: kN,
  data: {}
};
var $N = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return $N[t];
  });
}
var IN = {
  start: "end",
  end: "start"
};
function ep(e) {
  return e.replace(/start|end/g, function(t) {
    return IN[t];
  });
}
function rc(e) {
  var t = Vt(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function sc(e) {
  return Nr(fo(e)).left + rc(e).scrollLeft;
}
function PN(e, t) {
  var n = Vt(e), o = fo(e), r = n.visualViewport, s = o.clientWidth, i = o.clientHeight, a = 0, u = 0;
  if (r) {
    s = r.width, i = r.height;
    var f = dg();
    (f || !f && t === "fixed") && (a = r.offsetLeft, u = r.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a + sc(e),
    y: u
  };
}
function VN(e) {
  var t, n = fo(e), o = rc(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = Po(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Po(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + sc(e), u = -o.scrollTop;
  return jn(r || n).direction === "rtl" && (a += Po(n.clientWidth, r ? r.clientWidth : 0) - s), {
    width: s,
    height: i,
    x: a,
    y: u
  };
}
function ic(e) {
  var t = jn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Eg(e) {
  return ["html", "body", "#document"].indexOf(An(e)) >= 0 ? e.ownerDocument.body : Bt(e) && ic(e) ? e : Eg(Na(e));
}
function us(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Eg(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Vt(o), i = r ? [s].concat(s.visualViewport || [], ic(o) ? o : []) : o, a = t.concat(i);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(us(Na(i)))
  );
}
function su(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function LN(e, t) {
  var n = Nr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function tp(e, t, n) {
  return t === Xu ? su(PN(e, n)) : Wo(t) ? LN(t, n) : su(VN(fo(e)));
}
function MN(e) {
  var t = us(Na(e)), n = ["absolute", "fixed"].indexOf(jn(e).position) >= 0, o = n && Bt(e) ? Fs(e) : e;
  return Wo(o) ? t.filter(function(r) {
    return Wo(r) && pg(r, o) && An(r) !== "body";
  }) : [];
}
function FN(e, t, n, o) {
  var r = t === "clippingParents" ? MN(e) : [].concat(t), s = [].concat(r, [n]), i = s[0], a = s.reduce(function(u, f) {
    var l = tp(e, f, o);
    return u.top = Po(l.top, u.top), u.right = zi(l.right, u.right), u.bottom = zi(l.bottom, u.bottom), u.left = Po(l.left, u.left), u;
  }, tp(e, i, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function vg(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? bn(o) : null, s = o ? Ar(o) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, u;
  switch (r) {
    case yt:
      u = {
        x: i,
        y: t.y - n.height
      };
      break;
    case It:
      u = {
        x: i,
        y: t.y + t.height
      };
      break;
    case Pt:
      u = {
        x: t.x + t.width,
        y: a
      };
      break;
    case bt:
      u = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var f = r ? tc(r) : null;
  if (f != null) {
    var l = f === "y" ? "height" : "width";
    switch (s) {
      case Ko:
        u[f] = u[f] - (t[l] / 2 - n[l] / 2);
        break;
      case Or:
        u[f] = u[f] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return u;
}
function Tr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, i = s === void 0 ? e.strategy : s, a = n.boundary, u = a === void 0 ? eg : a, f = n.rootBoundary, l = f === void 0 ? Xu : f, c = n.elementContext, d = c === void 0 ? rr : c, p = n.altBoundary, h = p === void 0 ? !1 : p, m = n.padding, E = m === void 0 ? 0 : m, v = mg(typeof E != "number" ? E : _g(E, Vr)), O = d === rr ? tg : rr, b = e.rects.popper, $ = e.elements[h ? O : d], A = FN(Wo($) ? $ : $.contextElement || fo(e.elements.popper), u, l, i), D = Nr(e.elements.reference), C = vg({
    reference: D,
    element: b,
    placement: r
  }), V = su(Object.assign({}, b, C)), S = d === rr ? V : D, T = {
    top: A.top - S.top + v.top,
    bottom: S.bottom - A.bottom + v.bottom,
    left: A.left - S.left + v.left,
    right: S.right - A.right + v.right
  }, R = e.modifiersData.offset;
  if (d === rr && R) {
    var x = R[r];
    Object.keys(T).forEach(function(Y) {
      var de = [Pt, It].indexOf(Y) >= 0 ? 1 : -1, _e = [yt, It].indexOf(Y) >= 0 ? "y" : "x";
      T[Y] += x[_e] * de;
    });
  }
  return T;
}
function BN(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, i = n.padding, a = n.flipVariations, u = n.allowedAutoPlacements, f = u === void 0 ? Ju : u, l = Ar(o), c = l ? a ? ou : ou.filter(function(h) {
    return Ar(h) === l;
  }) : Vr, d = c.filter(function(h) {
    return f.indexOf(h) >= 0;
  });
  d.length === 0 && (d = c);
  var p = d.reduce(function(h, m) {
    return h[m] = Tr(e, {
      placement: m,
      boundary: r,
      rootBoundary: s,
      padding: i
    })[bn(m)], h;
  }, {});
  return Object.keys(p).sort(function(h, m) {
    return p[h] - p[m];
  });
}
function UN(e) {
  if (bn(e) === Sa)
    return [];
  var t = Ni(e);
  return [ep(e), t, ep(t)];
}
function jN(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !0 : i, u = n.fallbackPlacements, f = n.padding, l = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, E = t.options.placement, v = bn(E), O = v === E, b = u || (O || !h ? [Ni(E)] : UN(E)), $ = [E].concat(b).reduce(function(nt, rt) {
      return nt.concat(bn(rt) === Sa ? BN(t, {
        placement: rt,
        boundary: l,
        rootBoundary: c,
        padding: f,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : rt);
    }, []), A = t.rects.reference, D = t.rects.popper, C = /* @__PURE__ */ new Map(), V = !0, S = $[0], T = 0; T < $.length; T++) {
      var R = $[T], x = bn(R), Y = Ar(R) === Ko, de = [yt, It].indexOf(x) >= 0, _e = de ? "width" : "height", Z = Tr(t, {
        placement: R,
        boundary: l,
        rootBoundary: c,
        altBoundary: d,
        padding: f
      }), W = de ? Y ? Pt : bt : Y ? It : yt;
      A[_e] > D[_e] && (W = Ni(W));
      var ee = Ni(W), fe = [];
      if (s && fe.push(Z[x] <= 0), a && fe.push(Z[W] <= 0, Z[ee] <= 0), fe.every(function(nt) {
        return nt;
      })) {
        S = R, V = !1;
        break;
      }
      C.set(R, fe);
    }
    if (V)
      for (var ze = h ? 3 : 1, qe = function(rt) {
        var wt = $.find(function(I) {
          var X = C.get(I);
          if (X)
            return X.slice(0, rt).every(function(Q) {
              return Q;
            });
        });
        if (wt)
          return S = wt, "break";
      }, Ve = ze; Ve > 0; Ve--) {
        var Be = qe(Ve);
        if (Be === "break") break;
      }
    t.placement !== S && (t.modifiersData[o]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const yg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: jN,
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
  return [yt, Pt, It, bt].some(function(t) {
    return e[t] >= 0;
  });
}
function HN(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, i = Tr(t, {
    elementContext: "reference"
  }), a = Tr(t, {
    altBoundary: !0
  }), u = np(i, o), f = np(a, r, s), l = op(u), c = op(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: f,
    isReferenceHidden: l,
    hasPopperEscaped: c
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": l,
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
function KN(e, t, n) {
  var o = bn(e), r = [bt, yt].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = s[0], a = s[1];
  return i = i || 0, a = (a || 0) * r, [bt, Pt].indexOf(o) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function WN(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, i = Ju.reduce(function(l, c) {
    return l[c] = KN(c, t.rects, s), l;
  }, {}), a = i[t.placement], u = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = i;
}
const wg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: WN
};
function zN(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = vg({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const ac = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: zN,
  data: {}
};
function qN(e) {
  return e === "x" ? "y" : "x";
}
function GN(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !1 : i, u = n.boundary, f = n.rootBoundary, l = n.altBoundary, c = n.padding, d = n.tether, p = d === void 0 ? !0 : d, h = n.tetherOffset, m = h === void 0 ? 0 : h, E = Tr(t, {
    boundary: u,
    rootBoundary: f,
    padding: c,
    altBoundary: l
  }), v = bn(t.placement), O = Ar(t.placement), b = !O, $ = tc(v), A = qN($), D = t.modifiersData.popperOffsets, C = t.rects.reference, V = t.rects.popper, S = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, T = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, x = {
    x: 0,
    y: 0
  };
  if (D) {
    if (s) {
      var Y, de = $ === "y" ? yt : bt, _e = $ === "y" ? It : Pt, Z = $ === "y" ? "height" : "width", W = D[$], ee = W + E[de], fe = W - E[_e], ze = p ? -V[Z] / 2 : 0, qe = O === Ko ? C[Z] : V[Z], Ve = O === Ko ? -V[Z] : -C[Z], Be = t.elements.arrow, nt = p && Be ? ec(Be) : {
        width: 0,
        height: 0
      }, rt = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hg(), wt = rt[de], I = rt[_e], X = ls(0, C[Z], nt[Z]), Q = b ? C[Z] / 2 - ze - X - wt - T.mainAxis : qe - X - wt - T.mainAxis, ne = b ? -C[Z] / 2 + ze + X + I + T.mainAxis : Ve + X + I + T.mainAxis, Ee = t.elements.arrow && Fs(t.elements.arrow), Ue = Ee ? $ === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, g = (Y = R?.[$]) != null ? Y : 0, y = W + Q - g - Ue, N = W + ne - g, M = ls(p ? zi(ee, y) : ee, W, p ? Po(fe, N) : fe);
      D[$] = M, x[$] = M - W;
    }
    if (a) {
      var P, F = $ === "x" ? yt : bt, J = $ === "x" ? It : Pt, z = D[A], q = A === "y" ? "height" : "width", H = z + E[F], ie = z - E[J], G = [yt, bt].indexOf(v) !== -1, se = (P = R?.[A]) != null ? P : 0, pe = G ? H : z - C[q] - V[q] - se + T.altAxis, we = G ? z + C[q] + V[q] - se - T.altAxis : ie, ke = p && G ? NN(pe, z, we) : ls(p ? pe : H, z, p ? we : ie);
      D[A] = ke, x[A] = ke - z;
    }
    t.modifiersData[o] = x;
  }
}
const Og = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: GN,
  requiresIfExists: ["offset"]
};
function YN(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function XN(e) {
  return e === Vt(e) || !Bt(e) ? rc(e) : YN(e);
}
function JN(e) {
  var t = e.getBoundingClientRect(), n = Sr(t.width) / e.offsetWidth || 1, o = Sr(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function QN(e, t, n) {
  n === void 0 && (n = !1);
  var o = Bt(t), r = Bt(t) && JN(t), s = fo(t), i = Nr(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((An(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ic(s)) && (a = XN(t)), Bt(t) ? (u = Nr(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = sc(s))), {
    x: i.left + a.scrollLeft - u.x,
    y: i.top + a.scrollTop - u.y,
    width: i.width,
    height: i.height
  };
}
function ZN(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var u = t.get(a);
        u && r(u);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function eA(e) {
  var t = ZN(e);
  return fg.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function tA(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function nA(e) {
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
  return function(a, u, f) {
    f === void 0 && (f = s);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, rp, s),
      modifiersData: {},
      elements: {
        reference: a,
        popper: u
      },
      attributes: {},
      styles: {}
    }, c = [], d = !1, p = {
      state: l,
      setOptions: function(v) {
        var O = typeof v == "function" ? v(l.options) : v;
        m(), l.options = Object.assign({}, s, l.options, O), l.scrollParents = {
          reference: Wo(a) ? us(a) : a.contextElement ? us(a.contextElement) : [],
          popper: us(u)
        };
        var b = eA(nA([].concat(o, l.options.modifiers)));
        return l.orderedModifiers = b.filter(function($) {
          return $.enabled;
        }), h(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var v = l.elements, O = v.reference, b = v.popper;
          if (sp(O, b)) {
            l.rects = {
              reference: QN(O, Fs(b), l.options.strategy === "fixed"),
              popper: ec(b)
            }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(T) {
              return l.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var $ = 0; $ < l.orderedModifiers.length; $++) {
              if (l.reset === !0) {
                l.reset = !1, $ = -1;
                continue;
              }
              var A = l.orderedModifiers[$], D = A.fn, C = A.options, V = C === void 0 ? {} : C, S = A.name;
              typeof D == "function" && (l = D({
                state: l,
                options: V,
                name: S,
                instance: p
              }) || l);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: tA(function() {
        return new Promise(function(E) {
          p.forceUpdate(), E(l);
        });
      }),
      destroy: function() {
        m(), d = !0;
      }
    };
    if (!sp(a, u))
      return p;
    p.setOptions(f).then(function(E) {
      !d && f.onFirstUpdate && f.onFirstUpdate(E);
    });
    function h() {
      l.orderedModifiers.forEach(function(E) {
        var v = E.name, O = E.options, b = O === void 0 ? {} : O, $ = E.effect;
        if (typeof $ == "function") {
          var A = $({
            state: l,
            name: v,
            instance: p,
            options: b
          }), D = function() {
          };
          c.push(A || D);
        }
      });
    }
    function m() {
      c.forEach(function(E) {
        return E();
      }), c = [];
    }
    return p;
  };
}
var oA = /* @__PURE__ */ Aa(), rA = [oc, ac, nc, Zu], sA = /* @__PURE__ */ Aa({
  defaultModifiers: rA
}), iA = [oc, ac, nc, Zu, wg, yg, Og, gg, bg], lc = /* @__PURE__ */ Aa({
  defaultModifiers: iA
});
const Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: ag,
  afterRead: rg,
  afterWrite: cg,
  applyStyles: Zu,
  arrow: gg,
  auto: Sa,
  basePlacements: Vr,
  beforeMain: sg,
  beforeRead: ng,
  beforeWrite: lg,
  bottom: It,
  clippingParents: eg,
  computeStyles: nc,
  createPopper: lc,
  createPopperBase: oA,
  createPopperLite: sA,
  detectOverflow: Tr,
  end: Or,
  eventListeners: oc,
  flip: yg,
  hide: bg,
  left: bt,
  main: ig,
  modifierPhases: fg,
  offset: wg,
  placements: Ju,
  popper: rr,
  popperGenerator: Aa,
  popperOffsets: ac,
  preventOverflow: Og,
  read: og,
  reference: tg,
  right: Pt,
  start: Ko,
  top: yt,
  variationPlacements: ou,
  viewport: Xu,
  write: ug
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Gn = /* @__PURE__ */ new Map(), Za = {
  set(e, t, n) {
    Gn.has(e) || Gn.set(e, /* @__PURE__ */ new Map());
    const o = Gn.get(e);
    if (!o.has(t) && o.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);
      return;
    }
    o.set(t, n);
  },
  get(e, t) {
    return Gn.has(e) && Gn.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!Gn.has(e))
      return;
    const n = Gn.get(e);
    n.delete(t), n.size === 0 && Gn.delete(e);
  }
}, aA = 1e6, lA = 1e3, iu = "transitionend", Ng = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), uA = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), cA = (e) => {
  do
    e += Math.floor(Math.random() * aA);
  while (document.getElementById(e));
  return e;
}, fA = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const o = Number.parseFloat(t), r = Number.parseFloat(n);
  return !o && !r ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * lA);
}, Ag = (e) => {
  e.dispatchEvent(new Event(iu));
}, Bn = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), io = (e) => Bn(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Ng(e)) : null, Lr = (e) => {
  if (!Bn(e) || e.getClientRects().length === 0)
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
}, ao = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Tg = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Tg(e.parentNode) : null;
}, qi = () => {
}, Bs = (e) => {
  e.offsetHeight;
}, Cg = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, el = [], dA = (e) => {
  document.readyState === "loading" ? (el.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of el)
      t();
  }), el.push(e)) : e();
}, Ht = () => document.documentElement.dir === "rtl", Wt = (e) => {
  dA(() => {
    const t = Cg();
    if (t) {
      const n = e.NAME, o = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = o, e.jQueryInterface);
    }
  });
}, At = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, Dg = (e, t, n = !0) => {
  if (!n) {
    At(e);
    return;
  }
  const r = fA(t) + 5;
  let s = !1;
  const i = ({
    target: a
  }) => {
    a === t && (s = !0, t.removeEventListener(iu, i), At(e));
  };
  t.addEventListener(iu, i), setTimeout(() => {
    s || Ag(t);
  }, r);
}, uc = (e, t, n, o) => {
  const r = e.length;
  let s = e.indexOf(t);
  return s === -1 ? !n && o ? e[r - 1] : e[0] : (s += n ? 1 : -1, o && (s = (s + r) % r), e[Math.max(0, Math.min(s, r - 1))]);
}, pA = /[^.]*(?=\..*)\.|.*/, hA = /\..*/, mA = /::\d+$/, tl = {};
let ip = 1;
const xg = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, _A = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Rg(e, t) {
  return t && `${t}::${ip++}` || e.uidEvent || ip++;
}
function kg(e) {
  const t = Rg(e);
  return e.uidEvent = t, tl[t] = tl[t] || {}, tl[t];
}
function gA(e, t) {
  return function n(o) {
    return cc(o, {
      delegateTarget: e
    }), n.oneOff && j.off(e, o.type, t), t.apply(e, [o]);
  };
}
function EA(e, t, n) {
  return function o(r) {
    const s = e.querySelectorAll(t);
    for (let {
      target: i
    } = r; i && i !== this; i = i.parentNode)
      for (const a of s)
        if (a === i)
          return cc(r, {
            delegateTarget: i
          }), o.oneOff && j.off(e, r.type, t, n), n.apply(i, [r]);
  };
}
function $g(e, t, n = null) {
  return Object.values(e).find((o) => o.callable === t && o.delegationSelector === n);
}
function Ig(e, t, n) {
  const o = typeof t == "string", r = o ? n : t || n;
  let s = Pg(e);
  return _A.has(s) || (s = e), [o, r, s];
}
function ap(e, t, n, o, r) {
  if (typeof t != "string" || !e)
    return;
  let [s, i, a] = Ig(t, n, o);
  t in xg && (i = ((h) => function(m) {
    if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))
      return h.call(this, m);
  })(i));
  const u = kg(e), f = u[a] || (u[a] = {}), l = $g(f, i, s ? n : null);
  if (l) {
    l.oneOff = l.oneOff && r;
    return;
  }
  const c = Rg(i, t.replace(pA, "")), d = s ? EA(e, n, i) : gA(e, i);
  d.delegationSelector = s ? n : null, d.callable = i, d.oneOff = r, d.uidEvent = c, f[c] = d, e.addEventListener(a, d, s);
}
function au(e, t, n, o, r) {
  const s = $g(t[n], o, r);
  s && (e.removeEventListener(n, s, !!r), delete t[n][s.uidEvent]);
}
function vA(e, t, n, o) {
  const r = t[n] || {};
  for (const [s, i] of Object.entries(r))
    s.includes(o) && au(e, t, n, i.callable, i.delegationSelector);
}
function Pg(e) {
  return e = e.replace(hA, ""), xg[e] || e;
}
const j = {
  on(e, t, n, o) {
    ap(e, t, n, o, !1);
  },
  one(e, t, n, o) {
    ap(e, t, n, o, !0);
  },
  off(e, t, n, o) {
    if (typeof t != "string" || !e)
      return;
    const [r, s, i] = Ig(t, n, o), a = i !== t, u = kg(e), f = u[i] || {}, l = t.startsWith(".");
    if (typeof s < "u") {
      if (!Object.keys(f).length)
        return;
      au(e, u, i, s, r ? n : null);
      return;
    }
    if (l)
      for (const c of Object.keys(u))
        vA(e, u, c, t.slice(1));
    for (const [c, d] of Object.entries(f)) {
      const p = c.replace(mA, "");
      (!a || t.includes(p)) && au(e, u, i, d.callable, d.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const o = Cg(), r = Pg(t), s = t !== r;
    let i = null, a = !0, u = !0, f = !1;
    s && o && (i = o.Event(t, n), o(e).trigger(i), a = !i.isPropagationStopped(), u = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const l = cc(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && l.preventDefault(), u && e.dispatchEvent(l), l.defaultPrevented && i && i.preventDefault(), l;
  }
};
function cc(e, t = {}) {
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
function nl(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Un = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${nl(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${nl(t)}`);
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
    return lp(e.getAttribute(`data-bs-${nl(t)}`));
  }
};
class Us {
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
    const o = Bn(n) ? Un.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof o == "object" ? o : {},
      ...Bn(n) ? Un.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [o, r] of Object.entries(n)) {
      const s = t[o], i = Bn(s) ? "element" : uA(s);
      if (!new RegExp(r).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${i}" but expected type "${r}".`);
    }
  }
}
const yA = "5.3.7";
class sn extends Us {
  constructor(t, n) {
    super(), t = io(t), t && (this._element = t, this._config = this._getConfig(n), Za.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    Za.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY);
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
    return Za.get(io(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return yA;
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
const ol = (e) => {
  let t = e.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t ? t.split(",").map((n) => Ng(n)).join(",") : null;
}, ae = {
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
    return this.find(t, e).filter((n) => !ao(n) && Lr(n));
  },
  getSelectorFromElement(e) {
    const t = ol(e);
    return t && ae.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = ol(e);
    return t ? ae.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = ol(e);
    return t ? ae.find(t) : [];
  }
}, Ta = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, o = e.NAME;
  j.on(document, n, `[data-bs-dismiss="${o}"]`, function(r) {
    if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), ao(this))
      return;
    const s = ae.getElementFromSelector(this) || this.closest(`.${o}`);
    e.getOrCreateInstance(s)[t]();
  });
}, bA = "alert", wA = "bs.alert", Vg = `.${wA}`, OA = `close${Vg}`, SA = `closed${Vg}`, NA = "fade", AA = "show";
class Ca extends sn {
  // Getters
  static get NAME() {
    return bA;
  }
  // Public
  close() {
    if (j.trigger(this._element, OA).defaultPrevented)
      return;
    this._element.classList.remove(AA);
    const n = this._element.classList.contains(NA);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), j.trigger(this._element, SA), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ca.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ta(Ca, "close");
Wt(Ca);
const TA = "button", CA = "bs.button", DA = `.${CA}`, xA = ".data-api", RA = "active", up = '[data-bs-toggle="button"]', kA = `click${DA}${xA}`;
class Da extends sn {
  // Getters
  static get NAME() {
    return TA;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(RA));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Da.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
j.on(document, kA, up, (e) => {
  e.preventDefault();
  const t = e.target.closest(up);
  Da.getOrCreateInstance(t).toggle();
});
Wt(Da);
const $A = "swipe", Mr = ".bs.swipe", IA = `touchstart${Mr}`, PA = `touchmove${Mr}`, VA = `touchend${Mr}`, LA = `pointerdown${Mr}`, MA = `pointerup${Mr}`, FA = "touch", BA = "pen", UA = "pointer-event", jA = 40, HA = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, KA = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class Gi extends Us {
  constructor(t, n) {
    super(), this._element = t, !(!t || !Gi.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return HA;
  }
  static get DefaultType() {
    return KA;
  }
  static get NAME() {
    return $A;
  }
  // Public
  dispose() {
    j.off(this._element, Mr);
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
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), At(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= jA)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && At(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (j.on(this._element, LA, (t) => this._start(t)), j.on(this._element, MA, (t) => this._end(t)), this._element.classList.add(UA)) : (j.on(this._element, IA, (t) => this._start(t)), j.on(this._element, PA, (t) => this._move(t)), j.on(this._element, VA, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === BA || t.pointerType === FA);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const WA = "carousel", zA = "bs.carousel", po = `.${zA}`, Lg = ".data-api", qA = "ArrowLeft", GA = "ArrowRight", YA = 500, qr = "next", er = "prev", sr = "left", Ai = "right", XA = `slide${po}`, rl = `slid${po}`, JA = `keydown${po}`, QA = `mouseenter${po}`, ZA = `mouseleave${po}`, eT = `dragstart${po}`, tT = `load${po}${Lg}`, nT = `click${po}${Lg}`, Mg = "carousel", ti = "active", oT = "slide", rT = "carousel-item-end", sT = "carousel-item-start", iT = "carousel-item-next", aT = "carousel-item-prev", Fg = ".active", Bg = ".carousel-item", lT = Fg + Bg, uT = ".carousel-item img", cT = ".carousel-indicators", fT = "[data-bs-slide], [data-bs-slide-to]", dT = '[data-bs-ride="carousel"]', pT = {
  [qA]: Ai,
  [GA]: sr
}, hT = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, mT = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class js extends sn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ae.findOne(cT, this._element), this._addEventListeners(), this._config.ride === Mg && this.cycle();
  }
  // Getters
  static get Default() {
    return hT;
  }
  static get DefaultType() {
    return mT;
  }
  static get NAME() {
    return WA;
  }
  // Public
  next() {
    this._slide(qr);
  }
  nextWhenVisible() {
    !document.hidden && Lr(this._element) && this.next();
  }
  prev() {
    this._slide(er);
  }
  pause() {
    this._isSliding && Ag(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        j.one(this._element, rl, () => this.cycle());
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
      j.one(this._element, rl, () => this.to(t));
      return;
    }
    const o = this._getItemIndex(this._getActive());
    if (o === t)
      return;
    const r = t > o ? qr : er;
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
    this._config.keyboard && j.on(this._element, JA, (t) => this._keydown(t)), this._config.pause === "hover" && (j.on(this._element, QA, () => this.pause()), j.on(this._element, ZA, () => this._maybeEnableCycle())), this._config.touch && Gi.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const o of ae.find(uT, this._element))
      j.on(o, eT, (r) => r.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(sr)),
      rightCallback: () => this._slide(this._directionToOrder(Ai)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), YA + this._config.interval));
      }
    };
    this._swipeHelper = new Gi(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = pT[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = ae.findOne(Fg, this._indicatorsElement);
    n.classList.remove(ti), n.removeAttribute("aria-current");
    const o = ae.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    o && (o.classList.add(ti), o.setAttribute("aria-current", "true"));
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
    const o = this._getActive(), r = t === qr, s = n || uc(this._getItems(), o, r, this._config.wrap);
    if (s === o)
      return;
    const i = this._getItemIndex(s), a = (p) => j.trigger(this._element, p, {
      relatedTarget: s,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(o),
      to: i
    });
    if (a(XA).defaultPrevented || !o || !s)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = s;
    const l = r ? sT : rT, c = r ? iT : aT;
    s.classList.add(c), Bs(s), o.classList.add(l), s.classList.add(l);
    const d = () => {
      s.classList.remove(l, c), s.classList.add(ti), o.classList.remove(ti, c, l), this._isSliding = !1, a(rl);
    };
    this._queueCallback(d, o, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(oT);
  }
  _getActive() {
    return ae.findOne(lT, this._element);
  }
  _getItems() {
    return ae.find(Bg, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Ht() ? t === sr ? er : qr : t === sr ? qr : er;
  }
  _orderToDirection(t) {
    return Ht() ? t === er ? sr : Ai : t === er ? Ai : sr;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = js.getOrCreateInstance(this, t);
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
j.on(document, nT, fT, function(e) {
  const t = ae.getElementFromSelector(this);
  if (!t || !t.classList.contains(Mg))
    return;
  e.preventDefault();
  const n = js.getOrCreateInstance(t), o = this.getAttribute("data-bs-slide-to");
  if (o) {
    n.to(o), n._maybeEnableCycle();
    return;
  }
  if (Un.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
j.on(window, tT, () => {
  const e = ae.find(dT);
  for (const t of e)
    js.getOrCreateInstance(t);
});
Wt(js);
const _T = "collapse", gT = "bs.collapse", Hs = `.${gT}`, ET = ".data-api", vT = `show${Hs}`, yT = `shown${Hs}`, bT = `hide${Hs}`, wT = `hidden${Hs}`, OT = `click${Hs}${ET}`, sl = "show", ur = "collapse", ni = "collapsing", ST = "collapsed", NT = `:scope .${ur} .${ur}`, AT = "collapse-horizontal", TT = "width", CT = "height", DT = ".collapse.show, .collapse.collapsing", lu = '[data-bs-toggle="collapse"]', xT = {
  parent: null,
  toggle: !0
}, RT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Ts extends sn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const o = ae.find(lu);
    for (const r of o) {
      const s = ae.getSelectorFromElement(r), i = ae.find(s).filter((a) => a === this._element);
      s !== null && i.length && this._triggerArray.push(r);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return xT;
  }
  static get DefaultType() {
    return RT;
  }
  static get NAME() {
    return _T;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(DT).filter((a) => a !== this._element).map((a) => Ts.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || j.trigger(this._element, vT).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const o = this._getDimension();
    this._element.classList.remove(ur), this._element.classList.add(ni), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const r = () => {
      this._isTransitioning = !1, this._element.classList.remove(ni), this._element.classList.add(ur, sl), this._element.style[o] = "", j.trigger(this._element, yT);
    }, i = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(r, this._element, !0), this._element.style[o] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || j.trigger(this._element, bT).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Bs(this._element), this._element.classList.add(ni), this._element.classList.remove(ur, sl);
    for (const r of this._triggerArray) {
      const s = ae.getElementFromSelector(r);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([r], !1);
    }
    this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(ni), this._element.classList.add(ur), j.trigger(this._element, wT);
    };
    this._element.style[n] = "", this._queueCallback(o, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(sl);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = io(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(AT) ? TT : CT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(lu);
    for (const n of t) {
      const o = ae.getElementFromSelector(n);
      o && this._addAriaAndCollapsedClass([n], this._isShown(o));
    }
  }
  _getFirstLevelChildren(t) {
    const n = ae.find(NT, this._config.parent);
    return ae.find(t, this._config.parent).filter((o) => !n.includes(o));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const o of t)
        o.classList.toggle(ST, !n), o.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const o = Ts.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof o[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        o[t]();
      }
    });
  }
}
j.on(document, OT, lu, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of ae.getMultipleElementsFromSelector(this))
    Ts.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Wt(Ts);
const cp = "dropdown", kT = "bs.dropdown", zo = `.${kT}`, fc = ".data-api", $T = "Escape", fp = "Tab", IT = "ArrowUp", dp = "ArrowDown", PT = 2, VT = `hide${zo}`, LT = `hidden${zo}`, MT = `show${zo}`, FT = `shown${zo}`, Ug = `click${zo}${fc}`, jg = `keydown${zo}${fc}`, BT = `keyup${zo}${fc}`, ir = "show", UT = "dropup", jT = "dropend", HT = "dropstart", KT = "dropup-center", WT = "dropdown-center", Ao = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', zT = `${Ao}.${ir}`, Ti = ".dropdown-menu", qT = ".navbar", GT = ".navbar-nav", YT = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", XT = Ht() ? "top-end" : "top-start", JT = Ht() ? "top-start" : "top-end", QT = Ht() ? "bottom-end" : "bottom-start", ZT = Ht() ? "bottom-start" : "bottom-end", eC = Ht() ? "left-start" : "right-start", tC = Ht() ? "right-start" : "left-start", nC = "top", oC = "bottom", rC = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, sC = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class wn extends sn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = ae.next(this._element, Ti)[0] || ae.prev(this._element, Ti)[0] || ae.findOne(Ti, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return rC;
  }
  static get DefaultType() {
    return sC;
  }
  static get NAME() {
    return cp;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (ao(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!j.trigger(this._element, MT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(GT))
        for (const o of [].concat(...document.body.children))
          j.on(o, "mouseover", qi);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ir), this._element.classList.add(ir), j.trigger(this._element, FT, t);
    }
  }
  hide() {
    if (ao(this._element) || !this._isShown())
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
    if (!j.trigger(this._element, VT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const o of [].concat(...document.body.children))
          j.off(o, "mouseover", qi);
      this._popper && this._popper.destroy(), this._menu.classList.remove(ir), this._element.classList.remove(ir), this._element.setAttribute("aria-expanded", "false"), Un.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, LT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !Bn(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${cp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Sg > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : Bn(this._config.reference) ? t = io(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = lc(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(ir);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(jT))
      return eC;
    if (t.classList.contains(HT))
      return tC;
    if (t.classList.contains(KT))
      return nC;
    if (t.classList.contains(WT))
      return oC;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(UT) ? n ? JT : XT : n ? ZT : QT;
  }
  _detectNavbar() {
    return this._element.closest(qT) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (Un.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...At(this._config.popperConfig, [void 0, t])
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const o = ae.find(YT, this._menu).filter((r) => Lr(r));
    o.length && uc(o, n, t === dp, !o.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = wn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === PT || t.type === "keyup" && t.key !== fp)
      return;
    const n = ae.find(zT);
    for (const o of n) {
      const r = wn.getInstance(o);
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
    const n = /input|textarea/i.test(t.target.tagName), o = t.key === $T, r = [IT, dp].includes(t.key);
    if (!r && !o || n && !o)
      return;
    t.preventDefault();
    const s = this.matches(Ao) ? this : ae.prev(this, Ao)[0] || ae.next(this, Ao)[0] || ae.findOne(Ao, t.delegateTarget.parentNode), i = wn.getOrCreateInstance(s);
    if (r) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), s.focus());
  }
}
j.on(document, jg, Ao, wn.dataApiKeydownHandler);
j.on(document, jg, Ti, wn.dataApiKeydownHandler);
j.on(document, Ug, wn.clearMenus);
j.on(document, BT, wn.clearMenus);
j.on(document, Ug, Ao, function(e) {
  e.preventDefault(), wn.getOrCreateInstance(this).toggle();
});
Wt(wn);
const Hg = "backdrop", iC = "fade", pp = "show", hp = `mousedown.bs.${Hg}`, aC = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, lC = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Kg extends Us {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return aC;
  }
  static get DefaultType() {
    return lC;
  }
  static get NAME() {
    return Hg;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      At(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Bs(n), n.classList.add(pp), this._emulateAnimation(() => {
      At(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      At(t);
      return;
    }
    this._getElement().classList.remove(pp), this._emulateAnimation(() => {
      this.dispose(), At(t);
    });
  }
  dispose() {
    this._isAppended && (j.off(this._element, hp), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(iC), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = io(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), j.on(t, hp, () => {
      At(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Dg(t, this._getElement(), this._config.isAnimated);
  }
}
const uC = "focustrap", cC = "bs.focustrap", Yi = `.${cC}`, fC = `focusin${Yi}`, dC = `keydown.tab${Yi}`, pC = "Tab", hC = "forward", mp = "backward", mC = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, _C = {
  autofocus: "boolean",
  trapElement: "element"
};
class Wg extends Us {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return mC;
  }
  static get DefaultType() {
    return _C;
  }
  static get NAME() {
    return uC;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), j.off(document, Yi), j.on(document, fC, (t) => this._handleFocusin(t)), j.on(document, dC, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, j.off(document, Yi));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const o = ae.focusableChildren(n);
    o.length === 0 ? n.focus() : this._lastTabNavDirection === mp ? o[o.length - 1].focus() : o[0].focus();
  }
  _handleKeydown(t) {
    t.key === pC && (this._lastTabNavDirection = t.shiftKey ? mp : hC);
  }
}
const _p = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", gp = ".sticky-top", oi = "padding-right", Ep = "margin-right";
class uu {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, oi, (n) => n + t), this._setElementAttributes(_p, oi, (n) => n + t), this._setElementAttributes(gp, Ep, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, oi), this._resetElementAttributes(_p, oi), this._resetElementAttributes(gp, Ep);
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
    o && Un.setDataAttribute(t, n, o);
  }
  _resetElementAttributes(t, n) {
    const o = (r) => {
      const s = Un.getDataAttribute(r, n);
      if (s === null) {
        r.style.removeProperty(n);
        return;
      }
      Un.removeDataAttribute(r, n), r.style.setProperty(n, s);
    };
    this._applyManipulationCallback(t, o);
  }
  _applyManipulationCallback(t, n) {
    if (Bn(t)) {
      n(t);
      return;
    }
    for (const o of ae.find(t, this._element))
      n(o);
  }
}
const gC = "modal", EC = "bs.modal", Kt = `.${EC}`, vC = ".data-api", yC = "Escape", bC = `hide${Kt}`, wC = `hidePrevented${Kt}`, zg = `hidden${Kt}`, qg = `show${Kt}`, OC = `shown${Kt}`, SC = `resize${Kt}`, NC = `click.dismiss${Kt}`, AC = `mousedown.dismiss${Kt}`, TC = `keydown.dismiss${Kt}`, CC = `click${Kt}${vC}`, vp = "modal-open", DC = "fade", yp = "show", il = "modal-static", xC = ".modal.show", RC = ".modal-dialog", kC = ".modal-body", $C = '[data-bs-toggle="modal"]', IC = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, PC = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class lo extends sn {
  constructor(t, n) {
    super(t, n), this._dialog = ae.findOne(RC, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new uu(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return IC;
  }
  static get DefaultType() {
    return PC;
  }
  static get NAME() {
    return gC;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || j.trigger(this._element, qg, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(vp), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || j.trigger(this._element, bC).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(yp), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    j.off(window, Kt), j.off(this._dialog, Kt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
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
    const n = ae.findOne(kC, this._dialog);
    n && (n.scrollTop = 0), Bs(this._element), this._element.classList.add(yp);
    const o = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, j.trigger(this._element, OC, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    j.on(this._element, TC, (t) => {
      if (t.key === yC) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), j.on(window, SC, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), j.on(this._element, AC, (t) => {
      j.one(this._element, NC, (n) => {
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
      document.body.classList.remove(vp), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, zg);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(DC);
  }
  _triggerBackdropTransition() {
    if (j.trigger(this._element, wC).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, o = this._element.style.overflowY;
    o === "hidden" || this._element.classList.contains(il) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(il), this._queueCallback(() => {
      this._element.classList.remove(il), this._queueCallback(() => {
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
      const r = Ht() ? "paddingLeft" : "paddingRight";
      this._element.style[r] = `${n}px`;
    }
    if (!o && t) {
      const r = Ht() ? "paddingRight" : "paddingLeft";
      this._element.style[r] = `${n}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, n) {
    return this.each(function() {
      const o = lo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof o[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        o[t](n);
      }
    });
  }
}
j.on(document, CC, $C, function(e) {
  const t = ae.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), j.one(t, qg, (r) => {
    r.defaultPrevented || j.one(t, zg, () => {
      Lr(this) && this.focus();
    });
  });
  const n = ae.findOne(xC);
  n && lo.getInstance(n).hide(), lo.getOrCreateInstance(t).toggle(this);
});
Ta(lo);
Wt(lo);
const VC = "offcanvas", LC = "bs.offcanvas", Wn = `.${LC}`, Gg = ".data-api", MC = `load${Wn}${Gg}`, FC = "Escape", bp = "show", wp = "showing", Op = "hiding", BC = "offcanvas-backdrop", Yg = ".offcanvas.show", UC = `show${Wn}`, jC = `shown${Wn}`, HC = `hide${Wn}`, Sp = `hidePrevented${Wn}`, Xg = `hidden${Wn}`, KC = `resize${Wn}`, WC = `click${Wn}${Gg}`, zC = `keydown.dismiss${Wn}`, qC = '[data-bs-toggle="offcanvas"]', GC = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, YC = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class uo extends sn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return GC;
  }
  static get DefaultType() {
    return YC;
  }
  static get NAME() {
    return VC;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || j.trigger(this._element, UC, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new uu().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(wp);
    const o = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(bp), this._element.classList.remove(wp), j.trigger(this._element, jC, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._element, !0);
  }
  hide() {
    if (!this._isShown || j.trigger(this._element, HC).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Op), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(bp, Op), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new uu().reset(), j.trigger(this._element, Xg);
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
        j.trigger(this._element, Sp);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Kg({
      className: BC,
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
    j.on(this._element, zC, (t) => {
      if (t.key === FC) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        j.trigger(this._element, Sp);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = uo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
j.on(document, WC, qC, function(e) {
  const t = ae.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), ao(this))
    return;
  j.one(t, Xg, () => {
    Lr(this) && this.focus();
  });
  const n = ae.findOne(Yg);
  n && n !== t && uo.getInstance(n).hide(), uo.getOrCreateInstance(t).toggle(this);
});
j.on(window, MC, () => {
  for (const e of ae.find(Yg))
    uo.getOrCreateInstance(e).show();
});
j.on(window, KC, () => {
  for (const e of ae.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && uo.getOrCreateInstance(e).hide();
});
Ta(uo);
Wt(uo);
const XC = /^aria-[\w-]*$/i, Jg = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", XC],
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
}, JC = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), QC = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, ZC = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? JC.has(n) ? !!QC.test(e.nodeValue) : !0 : t.filter((o) => o instanceof RegExp).some((o) => o.test(n));
};
function eD(e, t, n) {
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
    const u = [].concat(...i.attributes), f = [].concat(t["*"] || [], t[a] || []);
    for (const l of u)
      ZC(l, f) || i.removeAttribute(l.nodeName);
  }
  return r.body.innerHTML;
}
const tD = "TemplateFactory", nD = {
  allowList: Jg,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, oD = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, rD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class sD extends Us {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return nD;
  }
  static get DefaultType() {
    return oD;
  }
  static get NAME() {
    return tD;
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
      }, rD);
  }
  _setContent(t, n, o) {
    const r = ae.findOne(o, t);
    if (r) {
      if (n = this._resolvePossibleFunction(n), !n) {
        r.remove();
        return;
      }
      if (Bn(n)) {
        this._putElementInTemplate(io(n), r);
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
    return this._config.sanitize ? eD(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return At(t, [void 0, this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      n.innerHTML = "", n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const iD = "tooltip", aD = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), al = "fade", lD = "modal", ri = "show", uD = ".tooltip-inner", Np = `.${lD}`, Ap = "hide.bs.modal", Gr = "hover", ll = "focus", ul = "click", cD = "manual", fD = "hide", dD = "hidden", pD = "show", hD = "shown", mD = "inserted", _D = "click", gD = "focusin", ED = "focusout", vD = "mouseenter", yD = "mouseleave", bD = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Ht() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Ht() ? "right" : "left"
}, wD = {
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
}, OD = {
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
class qo extends sn {
  constructor(t, n) {
    if (typeof Sg > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return wD;
  }
  static get DefaultType() {
    return OD;
  }
  static get NAME() {
    return iD;
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
    clearTimeout(this._timeout), j.off(this._element.closest(Np), Ap, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = j.trigger(this._element, this.constructor.eventName(pD)), o = (Tg(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !o)
      return;
    this._disposePopper();
    const r = this._getTipElement();
    this._element.setAttribute("aria-describedby", r.getAttribute("id"));
    const {
      container: s
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(r), j.trigger(this._element, this.constructor.eventName(mD))), this._popper = this._createPopper(r), r.classList.add(ri), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        j.on(a, "mouseover", qi);
    const i = () => {
      j.trigger(this._element, this.constructor.eventName(hD)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || j.trigger(this._element, this.constructor.eventName(fD)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(ri), "ontouchstart" in document.documentElement)
      for (const r of [].concat(...document.body.children))
        j.off(r, "mouseover", qi);
    this._activeTrigger[ul] = !1, this._activeTrigger[ll] = !1, this._activeTrigger[Gr] = !1, this._isHovered = null;
    const o = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.eventName(dD)));
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
    n.classList.remove(al, ri), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const o = cA(this.constructor.NAME).toString();
    return n.setAttribute("id", o), this._isAnimated() && n.classList.add(al), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new sD({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [uD]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(al);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(ri);
  }
  _createPopper(t) {
    const n = At(this._config.placement, [this, t, this._element]), o = bD[n.toUpperCase()];
    return lc(this._element, t, this._getPopperConfig(o));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return At(t, [this._element, this._element]);
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
      ...At(this._config.popperConfig, [void 0, n])
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        j.on(this._element, this.constructor.eventName(_D), this._config.selector, (o) => {
          const r = this._initializeOnDelegatedTarget(o);
          r._activeTrigger[ul] = !(r._isShown() && r._activeTrigger[ul]), r.toggle();
        });
      else if (n !== cD) {
        const o = n === Gr ? this.constructor.eventName(vD) : this.constructor.eventName(gD), r = n === Gr ? this.constructor.eventName(yD) : this.constructor.eventName(ED);
        j.on(this._element, o, this._config.selector, (s) => {
          const i = this._initializeOnDelegatedTarget(s);
          i._activeTrigger[s.type === "focusin" ? ll : Gr] = !0, i._enter();
        }), j.on(this._element, r, this._config.selector, (s) => {
          const i = this._initializeOnDelegatedTarget(s);
          i._activeTrigger[s.type === "focusout" ? ll : Gr] = i._element.contains(s.relatedTarget), i._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, j.on(this._element.closest(Np), Ap, this._hideModalHandler);
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
    const n = Un.getDataAttributes(this._element);
    for (const o of Object.keys(n))
      aD.has(o) && delete n[o];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : io(t.container), typeof t.delay == "number" && (t.delay = {
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
      const n = qo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Wt(qo);
const SD = "popover", ND = ".popover-header", AD = ".popover-body", TD = {
  ...qo.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, CD = {
  ...qo.DefaultType,
  content: "(null|string|element|function)"
};
class dc extends qo {
  // Getters
  static get Default() {
    return TD;
  }
  static get DefaultType() {
    return CD;
  }
  static get NAME() {
    return SD;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [ND]: this._getTitle(),
      [AD]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = dc.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Wt(dc);
const DD = "scrollspy", xD = "bs.scrollspy", pc = `.${xD}`, RD = ".data-api", kD = `activate${pc}`, Tp = `click${pc}`, $D = `load${pc}${RD}`, ID = "dropdown-item", tr = "active", PD = '[data-bs-spy="scroll"]', cl = "[href]", VD = ".nav, .list-group", Cp = ".nav-link", LD = ".nav-item", MD = ".list-group-item", FD = `${Cp}, ${LD} > ${Cp}, ${MD}`, BD = ".dropdown", UD = ".dropdown-toggle", jD = {
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
class xa extends sn {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return jD;
  }
  static get DefaultType() {
    return HD;
  }
  static get NAME() {
    return DD;
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
    return t.target = io(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (j.off(this._config.target, Tp), j.on(this._config.target, Tp, cl, (t) => {
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
    const t = ae.find(cl, this._config.target);
    for (const n of t) {
      if (!n.hash || ao(n))
        continue;
      const o = ae.findOne(decodeURI(n.hash), this._element);
      Lr(o) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, o));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(tr), this._activateParents(t), j.trigger(this._element, kD, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(ID)) {
      ae.findOne(UD, t.closest(BD)).classList.add(tr);
      return;
    }
    for (const n of ae.parents(t, VD))
      for (const o of ae.prev(n, FD))
        o.classList.add(tr);
  }
  _clearActiveClass(t) {
    t.classList.remove(tr);
    const n = ae.find(`${cl}.${tr}`, t);
    for (const o of n)
      o.classList.remove(tr);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = xa.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
j.on(window, $D, () => {
  for (const e of ae.find(PD))
    xa.getOrCreateInstance(e);
});
Wt(xa);
const KD = "tab", WD = "bs.tab", Go = `.${WD}`, zD = `hide${Go}`, qD = `hidden${Go}`, GD = `show${Go}`, YD = `shown${Go}`, XD = `click${Go}`, JD = `keydown${Go}`, QD = `load${Go}`, ZD = "ArrowLeft", Dp = "ArrowRight", ex = "ArrowUp", xp = "ArrowDown", fl = "Home", Rp = "End", To = "active", kp = "fade", dl = "show", tx = "dropdown", Qg = ".dropdown-toggle", nx = ".dropdown-menu", pl = `:not(${Qg})`, ox = '.list-group, .nav, [role="tablist"]', rx = ".nav-item, .list-group-item", sx = `.nav-link${pl}, .list-group-item${pl}, [role="tab"]${pl}`, Zg = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', hl = `${sx}, ${Zg}`, ix = `.${To}[data-bs-toggle="tab"], .${To}[data-bs-toggle="pill"], .${To}[data-bs-toggle="list"]`;
class Cr extends sn {
  constructor(t) {
    super(t), this._parent = this._element.closest(ox), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), j.on(this._element, JD, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return KD;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), o = n ? j.trigger(n, zD, {
      relatedTarget: t
    }) : null;
    j.trigger(t, GD, {
      relatedTarget: n
    }).defaultPrevented || o && o.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(To), this._activate(ae.getElementFromSelector(t));
    const o = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(dl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), j.trigger(t, YD, {
        relatedTarget: n
      });
    };
    this._queueCallback(o, t, t.classList.contains(kp));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(To), t.blur(), this._deactivate(ae.getElementFromSelector(t));
    const o = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(dl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), j.trigger(t, qD, {
        relatedTarget: n
      });
    };
    this._queueCallback(o, t, t.classList.contains(kp));
  }
  _keydown(t) {
    if (![ZD, Dp, ex, xp, fl, Rp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((r) => !ao(r));
    let o;
    if ([fl, Rp].includes(t.key))
      o = n[t.key === fl ? 0 : n.length - 1];
    else {
      const r = [Dp, xp].includes(t.key);
      o = uc(n, t.target, r, !0);
    }
    o && (o.focus({
      preventScroll: !0
    }), Cr.getOrCreateInstance(o).show());
  }
  _getChildren() {
    return ae.find(hl, this._parent);
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
    const n = ae.getElementFromSelector(t);
    n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const o = this._getOuterElement(t);
    if (!o.classList.contains(tx))
      return;
    const r = (s, i) => {
      const a = ae.findOne(s, o);
      a && a.classList.toggle(i, n);
    };
    r(Qg, To), r(nx, dl), o.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, o) {
    t.hasAttribute(n) || t.setAttribute(n, o);
  }
  _elemIsActive(t) {
    return t.classList.contains(To);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(hl) ? t : ae.findOne(hl, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(rx) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Cr.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
j.on(document, XD, Zg, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !ao(this) && Cr.getOrCreateInstance(this).show();
});
j.on(window, QD, () => {
  for (const e of ae.find(ix))
    Cr.getOrCreateInstance(e);
});
Wt(Cr);
const ax = "toast", lx = "bs.toast", ho = `.${lx}`, ux = `mouseover${ho}`, cx = `mouseout${ho}`, fx = `focusin${ho}`, dx = `focusout${ho}`, px = `hide${ho}`, hx = `hidden${ho}`, mx = `show${ho}`, _x = `shown${ho}`, gx = "fade", $p = "hide", si = "show", ii = "showing", Ex = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, vx = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class Ks extends sn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return vx;
  }
  static get DefaultType() {
    return Ex;
  }
  static get NAME() {
    return ax;
  }
  // Public
  show() {
    if (j.trigger(this._element, mx).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(gx);
    const n = () => {
      this._element.classList.remove(ii), j.trigger(this._element, _x), this._maybeScheduleHide();
    };
    this._element.classList.remove($p), Bs(this._element), this._element.classList.add(si, ii), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || j.trigger(this._element, px).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add($p), this._element.classList.remove(ii, si), j.trigger(this._element, hx);
    };
    this._element.classList.add(ii), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(si), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(si);
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
    j.on(this._element, ux, (t) => this._onInteraction(t, !0)), j.on(this._element, cx, (t) => this._onInteraction(t, !1)), j.on(this._element, fx, (t) => this._onInteraction(t, !0)), j.on(this._element, dx, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ks.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ta(Ks);
Wt(Ks);
var yx = Object.defineProperty, bx = (e, t, n) => t in e ? yx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Yt = (e, t, n) => bx(e, typeof t != "symbol" ? t + "" : t, n);
const wx = { class: "toast-header" }, Ox = ["textContent"], Sx = ["textContent"], Nx = { class: "toast-body" }, Ax = ["textContent"], Tx = /* @__PURE__ */ Re({
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
    const o = e, r = n, { visible: s, animation: i, autohide: a, delay: u } = tn(o), f = oe(), l = oe();
    En(s, (C) => {
      v();
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
    function E() {
      f.value.getInstance();
    }
    function v() {
      f.value && (s.value === !0 ? c() : d());
    }
    function O() {
      r("hide", f.value);
    }
    function b() {
      r("hidden", f.value);
    }
    function $() {
      r("show", f.value);
    }
    async function A() {
      r("shown", f.value);
    }
    const D = { show: c, hide: d, dispose: p, isShown: h, getOrCreateInstance: m, getInstance: E };
    return t({ ...D }), Cn(() => {
      l.value.addEventListener("hide.bs.toast", O), l.value.addEventListener("hidden.bs.toast", b), l.value.addEventListener("show.bs.toast", $), l.value.addEventListener("shown.bs.toast", A), f.value = new Ks(l.value, {
        animation: i.value,
        autohide: a.value,
        delay: u.value
      }), v();
    }), (C, V) => (L(), K("div", {
      ref_key: "toastRef",
      ref: l,
      class: Ce(["toast", [C.variant ? `text-bg-${C.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      be(C.$slots, "header", Ge(Ke({ ...D })), () => [
        _("div", wx, [
          be(C.$slots, "title", Ge(Ke({ ...D })), () => [
            _("strong", {
              class: "me-auto",
              textContent: ue(C.title)
            }, null, 8, Ox)
          ], !0),
          be(C.$slots, "subtitle", Ge(Ke({ ...D })), () => [
            _("small", {
              textContent: ue(C.subtitle)
            }, null, 8, Sx)
          ], !0),
          _("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: d
          })
        ])
      ], !0),
      be(C.$slots, "body", Ge(Ke({ ...D })), () => [
        _("div", Nx, [
          be(C.$slots, "default", Ge(Ke({ ...D })), () => [
            _("span", {
              textContent: ue(C.body)
            }, null, 8, Ax)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), xn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, eE = /* @__PURE__ */ xn(Tx, [["__scopeId", "data-v-c0cdbae8"]]);
function Cx() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Dx = { id: "toast-wrapper" };
let Ip;
const xx = /* @__PURE__ */ Re({
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
    }, o = oe(/* @__PURE__ */ new Map());
    Ip = (s, i = "top right") => {
      const a = Cx(), u = { ...n, ...s, id: a };
      let f = o.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(u), o.value.set(i, f);
    };
    function r(s, i) {
      const a = o.value.get(s);
      a?.delete(i);
    }
    return t({ toast: Ip }), (s, i) => (L(), xt(oa, { to: "body" }, [
      _("div", Dx, [
        (L(!0), K(Te, null, Et(o.value, ([a, u]) => (L(), K("div", {
          key: a,
          class: Ce(["toast-group", `${a}`])
        }, [
          (L(!0), K(Te, null, Et(u, (f, l) => (L(), xt(eE, co({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (c) => r(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Rx = /* @__PURE__ */ xn(xx, [["__scopeId", "data-v-786d1c50"]]), tE = () => {
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
var Tn = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(Tn || {});
const Dr = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(Tn).includes(n) || n == "" ? "" : `${t}${n}`;
}, kx = { class: "modal-content" }, $x = { class: "modal-header" }, Ix = ["innerHTML"], Px = { class: "modal-body" }, Vx = ["innerHTML"], Lx = { class: "modal-footer" }, Mx = ["innerHTML"], Fx = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const Bx = /* @__PURE__ */ Re({
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
    size: { default: Tn.STANDARD },
    btnSize: { default: Tn.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      backdrop: r,
      keyboard: s,
      focus: i,
      disableOutsideClick: a,
      size: u,
      btnSize: f
    } = tn(o), l = n, c = le(() => Dr(u.value, "modal-")), d = le(() => Dr(f.value, "btn-")), p = oe();
    let h;
    const m = Dn(), E = () => document.querySelectorAll(".modal.show").length, v = () => typeof window < "u" && window._managedModals ? window._managedModals : [], O = 1055, b = oe(O), $ = () => {
      const Z = E();
      b.value = O + Z;
    };
    let A;
    const D = tE();
    function C() {
      return new Promise((Z, W) => {
        if (!p.value) return;
        D.removeStickyElements(), $(), p.value.classList.add("managed-modal");
        const ee = v(), fe = ee.length + 1, ze = {
          element: p.value,
          priority: fe,
          instance: m
        };
        ee.push(ze), p.value.addEventListener("shown.bs.modal", () => {
          T();
        }, { once: !0 }), h?.show(), A = Z, l("onShown", h);
      });
    }
    function V(Z = !0) {
      if (!p.value) return;
      const W = v(), ee = W.findIndex((fe) => fe.element === p.value);
      ee > -1 && W.splice(ee, 1), p.value.addEventListener("hidden.bs.modal", () => {
        p.value && (p.value.style.display = ""), T();
      }, { once: !0 }), h?.hide(), typeof A == "function" && A(Z), l("onHidden", h), D.restoreStickyElements();
    }
    function S() {
      h?.toggle();
    }
    const T = () => {
      const Z = v();
      if (Z.length === 0) return;
      Z.sort((ee, fe) => ee.priority - fe.priority);
      const W = Z[Z.length - 1];
      Z.forEach((ee) => {
        ee.element !== W.element ? ee.element.style.opacity = "0" : ee.element.style.opacity = "1";
      });
    };
    Cn(() => {
      h = new lo(p.value, {
        backdrop: r?.value,
        keyboard: s.value,
        focus: i.value
      }), p.value.classList.add("managed-modal"), ia(() => {
        o?.visible === !0 ? h?.show() : h?.hide();
      });
    });
    function R(Z) {
      r?.value !== "static" && V(!1);
    }
    function x() {
      V(!1);
    }
    function Y() {
      V(!1);
    }
    function de() {
      V(!0);
    }
    t({
      modal: h,
      show: C,
      hide: V,
      toggle: S,
      onHeaderCloseClicked: x,
      onCancelClicked: Y,
      onOkCLicked: de
    });
    const _e = { show: C, hide: V, toggle: S, modal: h };
    return (Z, W) => (L(), K("div", co({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...Z.$attrs }, {
      onClick: gm(R, ["self"]),
      style: { zIndex: b.value }
    }), [
      _("div", {
        class: Ce(["modal-dialog", c.value])
      }, [
        _("div", kx, [
          be(Z.$slots, "header", Ge(Ke({ ..._e })), () => [
            _("div", $x, [
              be(Z.$slots, "title", Ge(Ke({ ..._e })), () => [
                _("h5", {
                  class: "modal-title",
                  innerHTML: Z.title
                }, null, 8, Ix)
              ], !0),
              be(Z.$slots, "header-close-button", Ge(Ke({ ..._e })), () => [
                _("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: x
                })
              ], !0)
            ])
          ], !0),
          _("div", Px, [
            be(Z.$slots, "default", Ge(Ke({ ..._e })), () => [
              _("span", { innerHTML: Z.body }, null, 8, Vx)
            ], !0)
          ]),
          _("div", Lx, [
            be(Z.$slots, "footer", Ge(Ke({ ..._e })), () => [
              Z.okOnly ? Je("", !0) : (L(), K("button", {
                key: 0,
                type: "button",
                class: Ce(["btn btn-secondary", d.value]),
                onClick: Y
              }, [
                be(Z.$slots, "button-cancel", Ge(Ke({ ..._e })), () => [
                  _("span", { innerHTML: Z.textCancel }, null, 8, Mx)
                ], !0)
              ], 2)),
              _("button", {
                type: "button",
                class: Ce(["btn btn-primary", d.value]),
                onClick: de
              }, [
                be(Z.$slots, "button-ok", Ge(Ke({ ..._e })), () => [
                  _("span", { innerHTML: Z.textOk }, null, 8, Fx)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), nE = /* @__PURE__ */ xn(Bx, [["__scopeId", "data-v-b8ba4eaa"]]), Ux = /* @__PURE__ */ Re({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = oe(void 0), o = oe({});
    function r(i = {}) {
      var a;
      return i.okOnly = !1, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function s(i = {}) {
      var a;
      return i.okOnly = !0, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: r, alert: s }), (i, a) => (L(), xt(oa, { to: "body" }, [
      Oe(nE, co({
        ref_key: "modalRef",
        ref: n
      }, { ...o.value }), null, 16)
    ]));
  }
}), jx = {
  "data-header": "",
  class: "border-bottom"
}, Hx = { class: "d-flex gap-2 p-2" }, Kx = { class: "p-2" }, Wx = {
  "data-footer": "",
  class: "border-top p-2"
}, zx = { class: "buttons" }, qx = /* @__PURE__ */ Re({
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
    size: { default: Tn.STANDARD },
    btnSize: { default: Tn.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, { backdrop: o, disableOutsideClick: r, modal: s, size: i, btnSize: a } = tn(n), u = () => document.querySelectorAll("dialog[open]").length, f = 1056, l = oe(f), c = oe(!1), d = oe(!1), p = oe(!1), h = oe(), m = oe(!1), E = le(() => Dr(i.value, "modal-")), v = le(() => Dr(a.value, "btn-")), O = le(() => ({
      opening: c.value,
      closing: d.value,
      "no-backdrop": o.value === !1,
      static: m.value
    }));
    let b = null;
    const $ = () => {
      const x = u();
      l.value = f + x;
    }, A = tE(), D = async () => ($(), A.removeStickyElements(), c.value = !0, h.value.addEventListener(
      "animationend",
      () => {
        c.value = !1, p.value = !0;
      },
      { once: !0 }
    ), s.value === !0 ? h.value.showModal() : h.value.show(), new Promise((x, Y) => {
      b = x;
    })), C = async (x = !1) => {
      d.value = !0, h.value.addEventListener(
        "animationend",
        () => {
          h.value.close(), d.value = !1, p.value = !1, typeof b == "function" && b(x), b = null, A.restoreStickyElements();
        },
        { once: !0 }
      );
    }, V = async () => {
      p.value === !0 ? C() : D();
    }, S = () => {
      m.value = !0, setTimeout(() => {
        m.value = !1;
      }, 200);
    }, T = () => {
      if (o.value === "static" || r.value === !0) {
        S();
        return;
      }
      C(!1);
    };
    if (s.value === !0) {
      let x = function(de) {
        if (o.value === "static" || r.value === !0) {
          S();
          return;
        }
        de.target === h.value && C(!1);
      };
      const Y = new AbortController();
      Cn(() => {
        document.addEventListener("click", (de) => {
          x(de);
        }, { signal: Y.signal });
      }), sa(() => {
        Y.abort();
      });
    }
    const R = { show: D, hide: C, toggle: V, dialog: h };
    return t({
      show: D,
      hide: C,
      toggle: V
    }), (x, Y) => (L(), K("div", {
      class: "dialog-wrapper",
      style: Lo({ zIndex: l.value })
    }, [
      _("div", {
        class: "backdrop",
        onClick: T
      }),
      _("dialog", {
        ref_key: "dialog",
        ref: h,
        class: Ce(O.value)
      }, [
        _("div", {
          class: Ce(["content", E.value])
        }, [
          be(x.$slots, "header", Ge(Ke({ ...R })), () => [
            _("div", jx, [
              _("div", Hx, [
                be(x.$slots, "title", Ge(Ke({ ...R })), () => [
                  je(ue(x.title), 1)
                ], !0),
                be(x.$slots, "header-close-button", {}, () => [
                  _("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: Y[0] || (Y[0] = (de) => C(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          _("div", Kx, [
            be(x.$slots, "default", Ge(Ke({ ...R })), () => [
              je(ue(x.body), 1)
            ], !0)
          ]),
          be(x.$slots, "footer", Ge(Ke({ ...R })), () => [
            _("div", Wx, [
              _("div", zx, [
                x.okOnly ? Je("", !0) : (L(), K("button", {
                  key: 0,
                  type: "button",
                  class: Ce(["btn btn-secondary", v.value]),
                  onClick: Y[1] || (Y[1] = (de) => C(!1))
                }, [
                  be(x.$slots, "textCancel", Ge(Ke({ ...R })), () => [
                    je(ue(x.textCancel), 1)
                  ], !0)
                ], 2)),
                _("button", {
                  type: "button",
                  class: Ce(["btn btn-primary", v.value]),
                  onClick: Y[2] || (Y[2] = (de) => C(!0))
                }, [
                  be(x.$slots, "textOk", Ge(Ke({ ...R })), () => [
                    je(ue(x.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), oE = /* @__PURE__ */ xn(qx, [["__scopeId", "data-v-0990c791"]]), Gx = /* @__PURE__ */ Re({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = oe(void 0), o = oe({});
    function r(i = {}) {
      var a;
      return i.okOnly = !1, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function s(i = {}) {
      var a;
      return i.okOnly = !0, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: r, alert: s }), (i, a) => (L(), xt(oa, { to: "body" }, [
      Oe(oE, co({
        ref_key: "modalRef",
        ref: n
      }, { ...o.value }), null, 16)
    ]));
  }
}), Yx = { "data-first": "" }, Xx = ["disabled", "innerHTML"], Jx = { "data-prev": "" }, Qx = ["disabled", "innerHTML"], Zx = { key: 0 }, eR = ["innerHTML"], tR = ["onClick"], nR = { "data-next": "" }, oR = ["disabled", "innerHTML"], rR = { "data-last": "" }, sR = ["disabled", "innerHTML"], iR = /* @__PURE__ */ Re({
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
    size: { default: Tn.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function n(b, $ = 0) {
      return [...Array(b).keys()].map((A) => A + $);
    }
    const o = t, r = e, { modelValue: s, maxVisibleButtons: i, hideEllipsis: a } = tn(r), u = Math.floor(i.value / 2), f = le(() => {
      let b = i.value, $ = s.value <= u ? 1 : s.value - u;
      return s.value >= d.value - u && ($ = d.value - b + 1), $ < 1 && ($ = 1), d.value < b && (b = d.value), n(b, $);
    }), l = le(() => s.value <= 1), c = le(() => s.value >= d.value), d = le(() => {
      const { perPage: b, totalItems: $ } = r;
      return Math.ceil($ / b);
    });
    ia(() => {
      d.value > 0 && s.value > d.value && o("update:modelValue", d.value);
    });
    function p(b) {
      const $ = i.value - 1;
      return !(a.value === !0 || b === 0 && s.value - u - 1 <= 0 || b === $ && s.value + u >= d.value || b > 0 && b < $);
    }
    function h(b) {
      b < 1 && (b = 1), b > d.value && (b = d.value), o("update:modelValue", b);
    }
    function m() {
      o("update:modelValue", 1);
    }
    function E() {
      o("update:modelValue", d.value);
    }
    function v() {
      let b = s.value - 1;
      b < 1 && (b = 1), o("update:modelValue", b);
    }
    function O() {
      let b = s.value + 1;
      b > d.value && (b = d.value), o("update:modelValue", b);
    }
    return (b, $) => (L(), K("ul", {
      class: Ce(["pagination", b.size])
    }, [
      _("li", Yx, [
        _("button", {
          class: "",
          disabled: l.value,
          innerHTML: b.firstText,
          onClick: m
        }, null, 8, Xx)
      ]),
      _("li", Jx, [
        _("button", {
          class: "",
          disabled: l.value,
          innerHTML: b.prevText,
          onClick: v
        }, null, 8, Qx)
      ]),
      (L(!0), K(Te, null, Et(f.value, (A, D) => (L(), K(Te, null, [
        p(D) ? (L(), K("li", Zx, [
          _("button", {
            disabled: "",
            class: "",
            innerHTML: b.ellipsisText
          }, null, 8, eR)
        ])) : (L(), K("li", {
          key: 1,
          "data-prev": "",
          class: Ce({ active: b.modelValue === A })
        }, [
          _("button", {
            class: "",
            onClick: (C) => h(A)
          }, ue(A), 9, tR)
        ], 2))
      ], 64))), 256)),
      _("li", nR, [
        _("button", {
          class: "",
          disabled: c.value,
          innerHTML: b.nextText,
          onClick: O
        }, null, 8, oR)
      ]),
      _("li", rR, [
        _("button", {
          class: "",
          disabled: c.value,
          innerHTML: b.lastText,
          onClick: E
        }, null, 8, sR)
      ])
    ], 2));
  }
}), aR = /* @__PURE__ */ xn(iR, [["__scopeId", "data-v-2bfd7085"]]), lR = { class: "d-inline" }, uR = { class: "fw-bold" }, cR = /* @__PURE__ */ Re({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { options: r } = tn(n), s = le({
      get: () => n.modelValue,
      set: (i) => o("update:modelValue", i)
    });
    return (i, a) => {
      const u = on("b-dropdown-item"), f = on("b-dropdown");
      return L(), xt(f, co({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: Tt(() => [
          _("div", lR, [
            be(i.$slots, "default", { selected: s.value }, () => [
              a[0] || (a[0] = _("span", null, "Per page: ", -1)),
              _("span", uR, ue(s.value), 1)
            ])
          ])
        ]),
        default: Tt(() => [
          (L(!0), K(Te, null, Et(ve(r), (l, c) => (L(), xt(u, {
            key: l,
            onClick: (d) => s.value = l,
            active: l === i.modelValue
          }, {
            default: Tt(() => [
              je(ue(l), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), fR = ["value"], dR = /* @__PURE__ */ Re({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { options: r } = tn(n), s = le({
      get: () => n.modelValue,
      set: (i) => o("update:modelValue", i)
    });
    return (i, a) => Mn((L(), K("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (u) => s.value = u)
    }, [
      (L(!0), K(Te, null, Et(ve(r), (u, f) => (L(), K("option", {
        key: u,
        value: u
      }, ue(u), 9, fR))), 128))
    ], 512)), [
      [_m, s.value]
    ]);
  }
});
var wo = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(wo || {});
class pR {
  constructor(t, n = "ASC", o) {
    Yt(this, "key"), Yt(this, "direction"), Yt(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = o;
  }
}
const Pp = (e, t) => {
  const n = (a, u) => {
    let f = typeof a, l = typeof u;
    return f == "number" && f == l;
  }, o = (a, u) => a - u, r = (a, u) => (a = a ?? "", u = u ?? "", a.localeCompare(u)), s = (a, u) => n(a, u) ? o : r, i = [...t];
  return i.sort((a, u) => {
    let f = 0;
    for (let l of e) {
      let { key: c, direction: d, sortFn: p } = l, h = d === "ASC" ? 1 : -1, m = a[c], E = u[c];
      if (p = typeof p == "function" ? p : s(m, E), f = p(m, E, a, u, t, l, h) * h, f !== 0) return f;
    }
    return f;
  }), i;
}, hR = ["onClick"], mR = { class: "th-wrapper" }, _R = {
  key: 0,
  "data-sort-indicator": ""
}, gR = { class: "sort-index" }, ER = { class: "sort-direction" }, vR = ["onMouseover"], yR = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, bR = ["colspan"], wR = ["innerHTML"];
class ml {
  constructor(t = "", n = "", o = !1, r) {
    Yt(this, "key"), Yt(this, "label"), Yt(this, "sortable"), Yt(this, "sortFn"), this.key = t, this.label = n, this.sortable = o, this.sortFn = r;
  }
}
const OR = /* @__PURE__ */ Re({
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
      let E = [];
      for (const v of m)
        E = E.concat(Object.keys(v));
      return E = E.filter((v, O) => E.indexOf(v) == O), E;
    }, o = t, r = e, s = oe([]), { fields: i, items: a } = tn(r), u = le(() => {
      if (r.externalSort || s.value.length == 0) return r.items;
      const m = [...r.items];
      return Pp(s.value, m);
    }), f = le(() => {
      let m = i.value, E = [];
      return m.length === 0 && (m = n([...a.value])), m.reduce((v, O, b) => {
        if (typeof O == "string")
          v.push(new ml(O, O));
        else if (O instanceof ml)
          v.push(O);
        else if (typeof O == "object") {
          const { key: $, label: A, sortable: D, sortFn: C } = O;
          v.push(new ml($, A, D, C));
        }
        return v;
      }, E);
    });
    function l(m) {
      const E = s.value.findIndex((v) => v.key === m.key);
      return E < 0 ? "" : E + 1;
    }
    function c(m) {
      const E = s.value.findIndex((O) => O.key === m.key);
      if (E < 0) return "fas fa-sort";
      const v = s.value[E];
      return v.direction === wo.ASC ? "fas fa-sort-up" : v.direction === wo.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function d(m) {
      const { key: E } = m, v = s.value.findIndex((O) => O.key === E);
      if (v < 0) {
        const O = new pR(E, wo.ASC, m.sortFn);
        s.value.push(O);
      } else {
        const O = s.value[v], b = O.direction;
        b === wo.ASC ? O.direction = wo.DESC : b === wo.DESC && s.value.splice(v, 1);
      }
      o("sort", s.value, Pp);
    }
    function p(m, E, v, O) {
      o("onMouseOverCell", m, E, v, O);
    }
    let h = oe(null);
    return Cn(() => {
      h.value = Dn();
    }), (m, E) => (L(), K("table", co({ ...m.$attrs }, {
      class: { striped: m.striped, hover: m.hover }
    }), [
      _("thead", null, [
        (L(!0), K(Te, null, Et(f.value, (v) => (L(), K("th", {
          key: `thead-${v.key}`,
          class: Ce({ sortable: v.sortable }),
          onClick: (O) => v.sortable && d(v)
        }, [
          _("span", mR, [
            be(m.$slots, `head(${v.key})`, {
              field: v,
              data: ve(h),
              value: v.label
            }, () => [
              je(ue(v.label), 1)
            ], !0),
            v.sortable ? (L(), K("span", _R, [
              _("span", gR, ue(l(v)), 1),
              _("span", ER, [
                _("i", {
                  class: Ce(c(v))
                }, null, 2)
              ])
            ])) : Je("", !0)
          ])
        ], 10, hR))), 128))
      ]),
      _("tbody", null, [
        (L(!0), K(Te, null, Et(u.value, (v, O) => (L(), K(Te, {
          key: `trow-${v?.id ?? O}`
        }, [
          be(m.$slots, "row", {
            item: v,
            index: O,
            colspan: f.value.length
          }, void 0, !0),
          _("tr", null, [
            (L(!0), K(Te, null, Et(f.value, (b) => (L(), K("td", {
              key: `tcell-${b.key + (v?.id ?? O)}`,
              class: Ce({ [`tcell-${b?.key}`]: !0 }),
              onMouseover: ($) => p($, v, O, b)
            }, [
              be(m.$slots, `cell(${b?.key})`, {
                data: ve(h),
                item: v,
                field: b,
                value: v[b?.key]
              }, () => [
                je(ue(v[b?.key]), 1)
              ], !0)
            ], 42, vR))), 128))
          ])
        ], 64))), 128))
      ]),
      _("tfoot", null, [
        be(m.$slots, "footer", { data: ve(h) }, void 0, !0)
      ]),
      m.showEmpty && u.value.length === 0 ? (L(), K("tr", yR, [
        _("td", {
          colspan: f.value.length
        }, [
          be(m.$slots, "empty", {
            items: u.value,
            data: ve(h),
            fields: f.value
          }, () => [
            _("span", { innerHTML: m.emptyText }, null, 8, wR)
          ], !0)
        ], 8, bR)
      ])) : Je("", !0)
    ], 16));
  }
}), SR = /* @__PURE__ */ xn(OR, [["__scopeId", "data-v-b1e9b5de"]]);
var rE = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(rE || {});
const NR = { class: "d-inline-block position-relative" }, AR = ["disabled"], Vp = "data-prevent-close", TR = /* @__PURE__ */ Re({
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
    size: { default: Tn.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const o = oe(), r = e, s = oe(), i = oe(!1), a = oe(r.variant), u = oe(r.centered), f = oe(r.dropup), l = oe(r.dropend), c = oe(r.dropstart), d = oe(r.menuEnd), p = n, h = le(() => {
      const V = [];
      return a != null && a.value && V.push(`btn-${a.value}`), r.size && V.push(`btn-${r.size}`), V;
    }), m = le(() => {
      const V = [];
      return u != null && u.value && V.push("dropdown-center"), f != null && f.value && V.push("dropup"), c != null && c.value && V.push("dropstart"), !(c != null && c.value) && l != null && l.value && V.push("dropend"), V.length === 0 && V.push("dropdown"), V.unshift("btn-group"), V;
    }), E = le(() => {
      const V = [];
      return i.value && V.push("show"), d.value && V.push("dropdown-menu-end"), V;
    }), v = () => {
      if (!i.value) return;
      const V = s.value.getBoundingClientRect(), S = o.value.getBoundingClientRect(), T = window.innerHeight - V.bottom, R = V.top, x = window.innerWidth - V.right, Y = V.left;
      f.value = T < S.height && R >= S.height, d.value = x < S.width && Y >= S.width;
    };
    async function O() {
      i.value = !0, await _r(), v();
    }
    function b() {
      i.value = !1;
    }
    function $(V) {
      i.value ? b() : O();
    }
    function A(V) {
      const { target: S } = V;
      S?.closest(`[${Vp}],[${Vp}=true]`) || b();
    }
    function D() {
      i.value && b();
    }
    En(i, (V, S) => {
      typeof S > "u" || V !== S && (p("toggle", { show: V }), V === !0 ? p("open", { show: V }) : p("close", { show: V }));
    }, { immediate: !0 });
    const C = {
      show: i,
      disabled: r.disabled,
      buttonClasses: h,
      onButtonClicked: $,
      onMenuClicked: A,
      onClickOutside: D,
      open: O,
      close: b
    };
    return t({
      ...C
    }), (V, S) => {
      const T = Hv("click-outside");
      return L(), K("div", {
        ref_key: "dropDownRef",
        ref: s,
        class: Ce([m.value, "dropdown-wrapper"])
      }, [
        Mn((L(), K("div", NR, [
          be(V.$slots, "header", Ge(Ke({ ...C })), () => [
            _("button", {
              class: Ce(["btn dropdown-toggle", h.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: $,
              disabled: V.disabled
            }, [
              be(V.$slots, "button", Ge(Ke({ ...C })), () => [
                je(ue(V.text), 1)
              ], !0)
            ], 10, AR)
          ], !0),
          _("ul", {
            ref_key: "dropDownMenuRef",
            ref: o,
            class: Ce(["dropdown-menu", E.value]),
            onClick: A
          }, [
            be(V.$slots, "default", Ge(Ke({ ...C })), void 0, !0)
          ], 2)
        ])), [
          [T, D]
        ])
      ], 2);
    };
  }
}), CR = /* @__PURE__ */ xn(TR, [["__scopeId", "data-v-4910c394"]]), DR = ["data-prevent-close"], xR = /* @__PURE__ */ Re({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = tn(t);
    return (o, r) => (L(), K("li", {
      "data-prevent-close": ve(n) ? "" : null
    }, [
      _("span", {
        class: Ce(["dropdown-item", { active: o.active }]),
        role: "button",
        tabindex: "0"
      }, [
        be(o.$slots, "default")
      ], 2)
    ], 8, DR));
  }
}), RR = {}, kR = { "data-prevent-close": "" }, $R = { class: "dropdown-header" };
function IR(e, t) {
  return L(), K("li", kR, [
    _("h6", $R, [
      be(e.$slots, "default")
    ])
  ]);
}
const PR = /* @__PURE__ */ xn(RR, [["render", IR]]), VR = {};
function LR(e, t) {
  return L(), K("li", null, t[0] || (t[0] = [
    _("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const MR = /* @__PURE__ */ xn(VR, [["render", LR]]), FR = {
  mounted(e, t, n, o) {
    new qo(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, BR = (e, t) => {
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
      const u = a.target;
      s && (n(u, s) || i());
    }, { signal: o.signal });
  }
  return r(e, t), o;
}, UR = {
  mounted(e, t, n, o) {
    const r = t.value;
    BR(e, r);
  }
};
class cu {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
Yt(cu, "list", /* @__PURE__ */ new Set());
const jR = { class: "drawer-content" }, HR = { class: "drawer-header" }, KR = ["innerHTML"], WR = { class: "drawer-body" }, zR = ["innerHTML"], qR = { class: "drawer-footer" }, GR = ["innerHTML"], YR = ["innerHTML"], XR = /* @__PURE__ */ Re({
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
    size: { default: Tn.STANDARD },
    btnSize: { default: Tn.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: o,
      keyboard: r,
      focus: s,
      size: i,
      btnSize: a
    } = tn(n), u = le(() => Dr(i.value, "drawer-")), f = le(() => Dr(a.value, "btn-")), l = oe(), c = oe(!1), d = Dn();
    let p;
    async function h() {
      return c.value === !0 ? void 0 : new Promise((D, C) => {
        c.value = !0, p = D;
      });
    }
    function m(D = !0) {
      c.value = !1, typeof p == "function" && p(D);
    }
    function E() {
      c.value === !0 ? h() : m(!1);
    }
    function v(D) {
      o?.value !== "static" && m(!1);
    }
    function O() {
      m(!1);
    }
    function b() {
      m(!1);
    }
    function $() {
      m(!0);
    }
    function A() {
      c.value === !0 ? cu.add(d) : cu.delete(d);
    }
    return t({
      show: h,
      hide: m,
      toggle: E
    }), (D, C) => (L(), xt(Xy, {
      onBeforeEnter: A,
      onAfterLeave: A
    }, {
      default: Tt(() => [
        c.value ? (L(), K("div", co({
          key: 0,
          ref_key: "drawerElement",
          ref: l,
          class: "drawer",
          tabindex: "-1"
        }, { ...D.$attrs }, {
          onClick: gm(v, ["self"])
        }), [
          _("div", {
            class: Ce(["drawer-dialog", u.value])
          }, [
            _("div", jR, [
              _("div", HR, [
                be(D.$slots, "header", {}, () => [
                  _("h5", {
                    class: "drawer-title",
                    innerHTML: D.title
                  }, null, 8, KR)
                ], !0),
                _("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: O
                })
              ]),
              _("div", WR, [
                be(D.$slots, "default", {}, () => [
                  _("span", { innerHTML: D.body }, null, 8, zR)
                ], !0)
              ]),
              _("div", qR, [
                be(D.$slots, "footer", {}, () => [
                  D.okOnly ? Je("", !0) : (L(), K("button", {
                    key: 0,
                    type: "button",
                    class: Ce(["ms-auto btn btn-secondary", f.value]),
                    onClick: b
                  }, [
                    be(D.$slots, "button-cancel", {}, () => [
                      _("span", { innerHTML: D.textCancel }, null, 8, GR)
                    ], !0)
                  ], 2)),
                  _("button", {
                    type: "button",
                    class: Ce(["btn btn-primary", f.value]),
                    onClick: $
                  }, [
                    be(D.$slots, "button-ok", {}, () => [
                      _("span", { innerHTML: D.textOk }, null, 8, YR)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : Je("", !0)
      ]),
      _: 3
    }));
  }
}), JR = /* @__PURE__ */ xn(XR, [["__scopeId", "data-v-2e49e8cb"]]), Mt = "b", sE = "$toaster", QR = "$modalManager", ZR = "$dialogManager";
class iE {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = fa(Ux).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
Yt(iE, "component");
class aE {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = fa(Gx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
Yt(aE, "component");
class lE {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = fa(Rx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
Yt(lE, "component");
function ek() {
  return vt(sE);
}
function tk(e) {
  e.component(`${Mt}-drawer`, JR), e.component(`${Mt}-modal`, nE), e.component(`${Mt}-dialog`, oE), e.component(`${Mt}-pagination`, aR), e.component(`${Mt}-pagination-dropdown`, cR), e.component(`${Mt}-pagination-select`, dR), e.component(`${Mt}-dropdown`, CR), e.component(`${Mt}-dropdown-item`, xR), e.component(`${Mt}-dropdown-header`, PR), e.component(`${Mt}-dropdown-divider`, MR), e.component(`${Mt}-table`, SR), e.component(`${Mt}-toast`, eE);
}
function nk(e) {
  e.directive("tooltip", FR), e.directive("click-outside", UR);
}
const ok = {
  install(e) {
    tk(e), nk(e);
    const t = lE.getComponent(), n = iE.getComponent(), o = aE.getComponent();
    e.provide(sE, t), e.provide(QR, n), e.provide(ZR, o);
  }
}, Ws = /* @__PURE__ */ ma("settings", () => {
  const e = Yu(), t = ek(), n = Mo({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), o = oe(null), r = oe([]), s = oe([]), i = Mo({
    fetch: !1,
    save: !1
  }), a = async () => {
    try {
      i.fetch = !0;
      const m = (await hn.getProjectSettings()).data ?? {};
      Object.assign(n, m), o.value = n.fhir_system, r.value = [...n.selected_mapping_resources], s.value = [...n.selected_custom_mapping_resources];
    } catch (h) {
      e.addError(h, "settingsStore"), console.error("Failed to load project settings:", h);
    } finally {
      i.fetch = !1;
    }
  }, u = (h, m) => {
    const E = { name: h, resourceSpec: m, type: "predefined" };
    r.value.push(E);
  }, f = (h, m) => {
    const E = {
      name: h,
      resourceSpec: m,
      type: "custom"
    };
    s.value.push(E);
  }, l = (h, m) => {
    if (m === "predefined") {
      const E = r.value.findIndex((v) => v.name === h.name && v.resourceSpec === h.resourceSpec);
      E > -1 && r.value.splice(E, 1);
    } else {
      const E = s.value.findIndex((v) => v.name === h.name && v.resourceSpec === h.resourceSpec);
      E > -1 && s.value.splice(E, 1);
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
      }, m = await hn.updateProjectSettings(h);
      m.data.sync_results && p(m.data.sync_results), await a();
    } catch (h) {
      throw e.addError(h, "settingsStore"), console.error("Failed to save project settings:", h), h;
    } finally {
      i.save = !1;
    }
  }, p = (h) => {
    const {
      resources_added: m,
      resources_modified: E,
      resources_removed: v,
      tasks_created: O,
      total_mrns: b,
      error: $
    } = h;
    if ($) {
      t.toast({
        title: "Sync Warning",
        body: `Settings saved but sync failed: ${$}`,
        variant: "warning",
        delay: 8e3
      });
      return;
    }
    if (m + E + v === 0)
      return;
    const D = [];
    m > 0 && D.push(`${m} added`), E > 0 && D.push(`${E} modified`), v > 0 && D.push(`${v} removed`);
    const C = "Resources Synchronized", V = `${D.join(", ")}. Created ${O} tasks for ${b} patients.`;
    t.toast({
      title: C,
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
    addPredefinedResource: u,
    addCustomResource: f,
    removeResource: l,
    updateSelectedFhirSystem: c,
    saveProjectSettings: d
  };
}), rk = ["value"], sk = ["value"], ik = /* @__PURE__ */ Re({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = vt("settings"), n = vt("draftResources"), o = Ws(), r = (s) => {
      const i = s.target, a = parseInt(i.value);
      o.updateSelectedFhirSystem(a);
    };
    return (s, i) => (L(), K("div", null, [
      i[1] || (i[1] = _("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      _("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: ve(n)?.selectedFhirSystem.value || "",
        onChange: r
      }, [
        i[0] || (i[0] = _("option", { value: "" }, "Select a FHIR System", -1)),
        (L(!0), K(Te, null, Et(ve(t).fhir_systems, (a) => (L(), K("option", {
          key: a.ehr_id,
          value: a.ehr_id
        }, ue(a.ehr_name), 9, sk))), 128))
      ], 40, rk)
    ]));
  }
}), ak = { class: "d-flex" }, lk = { class: "d-flex gap-2" }, uk = /* @__PURE__ */ Re({
  __name: "ResourcesToolbar",
  emits: ["import", "export", "add"],
  setup(e, { emit: t }) {
    const n = t;
    return (o, r) => (L(), K("div", ak, [
      r[6] || (r[6] = _("div", { class: "me-auto" }, [
        _("span", null, "Resources")
      ], -1)),
      _("div", lk, [
        _("button", {
          class: "btn btn-sm btn-primary",
          onClick: r[0] || (r[0] = (s) => n("import"))
        }, r[3] || (r[3] = [
          _("i", { class: "fas fa-upload fa-fw" }, null, -1),
          _("span", null, "Import", -1)
        ])),
        _("button", {
          class: "btn btn-sm btn-primary",
          onClick: r[1] || (r[1] = (s) => n("export"))
        }, r[4] || (r[4] = [
          _("i", { class: "fas fa-download fa-fw" }, null, -1),
          _("span", null, "Export", -1)
        ])),
        _("button", {
          class: "btn btn-sm btn-primary",
          onClick: r[2] || (r[2] = (s) => n("add"))
        }, r[5] || (r[5] = [
          _("i", { class: "fas fa-plus fa-fw" }, null, -1),
          _("span", null, "Add", -1)
        ]))
      ])
    ]));
  }
}), ck = { class: "table table-striped table-hover table-sm border-top" }, fk = ["onClick"], dk = { key: 0 }, pk = /* @__PURE__ */ Re({
  __name: "ResourcesTable",
  setup(e) {
    const t = Ws(), n = vt("draftResources"), o = le(() => n ? [
      ...n.selectedMappingResources.value,
      ...n.selectedCustomMappingResources.value
    ] : []);
    function r(s) {
      t.removeResource(s, s.type);
    }
    return (s, i) => (L(), K("table", ck, [
      i[2] || (i[2] = _("thead", null, [
        _("tr", null, [
          _("th", null, "Name"),
          _("th", null, "Type"),
          _("th", null, "Resource Specification"),
          _("th", null, "Actions")
        ])
      ], -1)),
      _("tbody", null, [
        (L(!0), K(Te, null, Et(o.value, (a) => (L(), K("tr", {
          key: `${a.type}-${a.name}`
        }, [
          _("td", null, ue(a.name), 1),
          _("td", null, ue(a.type), 1),
          _("td", null, ue(a.resourceSpec || "-"), 1),
          _("td", null, [
            _("button", {
              type: "button",
              class: "btn btn-outline-danger btn-sm",
              onClick: (u) => r(a)
            }, i[0] || (i[0] = [
              _("i", { class: "fas fa-trash fa-fw" }, null, -1)
            ]), 8, fk)
          ])
        ]))), 128)),
        o.value.length === 0 ? (L(), K("tr", dk, i[1] || (i[1] = [
          _("td", {
            colspan: "4",
            class: "text-muted text-center"
          }, "No resources configured", -1)
        ]))) : Je("", !0)
      ])
    ]));
  }
}), hk = { class: "mb-3" }, mk = ["value"], _k = ["disabled"], gk = ["value"], Ek = ["value"], vk = ["disabled"], cr = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), yk = /* @__PURE__ */ Re({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Ws(), { settings: n } = ju(t), o = le(() => n.value.mapping_resources), r = Sy(e, "modelValue");
    return (s, i) => (L(), K("div", null, [
      _("form", null, [
        _("div", hk, [
          i[5] || (i[5] = _("label", {
            class: "form-label",
            for: "display-name"
          }, "Display Name", -1)),
          Mn(_("input", {
            "onUpdate:modelValue": i[0] || (i[0] = (a) => r.value.displayName = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "display-name",
            placeholder: "E.g., Vital Signs, Social History, etc.",
            required: ""
          }, null, 512), [
            [kl, r.value.displayName]
          ])
        ]),
        _("div", null, [
          Mn(_("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: ve(cr).PREDEFINED,
            "onUpdate:modelValue": i[1] || (i[1] = (a) => r.value.resourceType = a)
          }, null, 8, mk), [
            [uf, r.value.resourceType]
          ]),
          i[7] || (i[7] = _("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          Mn(_("select", {
            "onUpdate:modelValue": i[2] || (i[2] = (a) => r.value.predefinedResource = a),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: r.value.resourceType !== ve(cr).PREDEFINED
          }, [
            i[6] || (i[6] = _("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (L(!0), K(Te, null, Et(o.value, (a) => (L(), K("option", {
              key: a.resourceSpec,
              value: a.resourceSpec
            }, ue(a.name), 9, gk))), 128))
          ], 8, _k), [
            [_m, r.value.predefinedResource]
          ])
        ]),
        i[9] || (i[9] = _("div", { class: "d-flex justify-start-center my-2" }, [
          _("span", null, "—OR—")
        ], -1)),
        _("div", null, [
          Mn(_("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-custom",
            value: ve(cr).CUSTOM,
            "onUpdate:modelValue": i[3] || (i[3] = (a) => r.value.resourceType = a)
          }, null, 8, Ek), [
            [uf, r.value.resourceType]
          ]),
          i[8] || (i[8] = _("label", {
            class: "form-label ms-2",
            for: "resource-type-custom"
          }, "Custom Resource", -1)),
          Mn(_("input", {
            "onUpdate:modelValue": i[4] || (i[4] = (a) => r.value.customResourceSpec = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "custom-resource",
            disabled: r.value.resourceType !== ve(cr).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, vk), [
            [kl, r.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
}), bk = { class: "d-flex flex-column gap-4" }, wk = { class: "card" }, Ok = { class: "card-body px-0 py-2" }, Sk = { class: "p-2" }, Nk = { class: "d-flex gap-2 justify-content-end" }, Ak = ["disabled"], Tk = /* @__PURE__ */ Re({
  __name: "SetupPage",
  setup(e) {
    const t = Ws(), { settings: n, loading: o, selectedMappingResources: r, selectedCustomMappingResources: s, selectedFhirSystem: i } = ju(t);
    hr("settings", n), hr("draftResources", { selectedMappingResources: r, selectedCustomMappingResources: s, selectedFhirSystem: i });
    const a = le(() => o.value.fetch || o.value.save), u = xv("resourceModal"), f = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: cr.PREDEFINED
    }), l = oe(f());
    async function c() {
      if (!u.value) return;
      if (l.value = f(), await u.value.show()) {
        if (!l.value.displayName.trim()) {
          alert("Display Name is required");
          return;
        }
        if (l.value.resourceType === cr.PREDEFINED) {
          if (!l.value.predefinedResource) {
            alert("Please select a predefined resource");
            return;
          }
          t.addPredefinedResource(l.value.displayName, l.value.predefinedResource);
        } else {
          if (!l.value.customResourceSpec.trim()) {
            alert("Resource Specification is required for custom resources");
            return;
          }
          t.addCustomResource(l.value.displayName, l.value.customResourceSpec);
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
      const m = on("b-modal");
      return L(), K("div", bk, [
        Oe(ik),
        _("div", wk, [
          _("div", Ok, [
            _("div", Sk, [
              Oe(uk, { onAdd: c })
            ]),
            Oe(pk),
            (L(), xt(oa, { to: "body" }, [
              Oe(m, {
                ref_key: "resourceModal",
                ref: u
              }, {
                title: Tt(() => h[1] || (h[1] = [
                  je("Resource")
                ])),
                default: Tt(() => [
                  Oe(yk, {
                    modelValue: l.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (E) => l.value = E)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 512)
            ]))
          ])
        ]),
        _("div", Nk, [
          h[3] || (h[3] = _("button", {
            type: "button",
            class: "btn btn-secondary btn-sm"
          }, [
            _("i", { class: "fas fa-xmark fa-fw" }),
            _("span", null, "Cancel")
          ], -1)),
          _("button", {
            type: "button",
            class: "btn btn-primary btn-sm",
            onClick: d,
            disabled: a.value
          }, h[2] || (h[2] = [
            _("i", { class: "fas fa-save fa-fw" }, null, -1),
            _("span", null, "Save", -1)
          ]), 8, Ak)
        ])
      ]);
    };
  }
}), zs = /* @__PURE__ */ ma("monitor", () => {
  const e = Yu(), t = oe(!1), n = oe([]), o = oe([]), r = oe(null), s = oe(!1), i = oe({
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
      const S = await hn.listMrns(i.value.page, i.value.limit);
      S.data.data && S.data.pagination ? (n.value = S.data.data, i.value.total = S.data.pagination.total, i.value.totalPages = S.data.pagination.total_pages, i.value.hasNext = S.data.pagination.has_next, i.value.hasPrevious = S.data.pagination.has_previous, S.data.project_summary && (r.value = S.data.project_summary)) : n.value = S.data, o.value = [];
    } catch (S) {
      e.addError(S, "monitorStore"), console.error("Failed to load MRNs:", S), n.value = [];
    } finally {
      t.value = !1;
    }
  }, u = async (S) => {
    try {
      await hn.addMrn(S), await a();
    } catch (T) {
      e.addError(T, "monitorStore"), console.error("Failed to add MRN:", T);
    }
  }, f = async (S) => {
  }, l = async () => {
    try {
      t.value = !0;
      for (const S of o.value)
        await f(S);
    } catch (S) {
      e.addError(S, "monitorStore"), console.error("Failed to fetch selected MRNs:", S);
    } finally {
      t.value = !1;
    }
  }, c = async () => {
    console.log("Downloading selected MRNs:", o.value);
  }, d = le(() => n.value.length > 0 && o.value.length === n.value.length), p = le(() => o.value.length > 0 && o.value.length < n.value.length), h = () => {
    d.value ? o.value = [] : o.value = n.value.map((S) => S.id);
  }, m = (S) => {
    const T = o.value.indexOf(S);
    T === -1 ? o.value.push(S) : o.value.splice(T, 1);
  }, E = (S) => {
    i.value.page = S, a();
  }, v = (S) => {
    i.value.limit = S, i.value.page = 1, a();
  }, O = async (S) => {
    try {
      return (await hn.getMrnResources(S)).data;
    } catch (T) {
      return e.addError(T, "monitorStore"), console.error(`Failed to get resource status for MRN ${S}:`, T), { mrn: S, resources: [], total_resources: 0 };
    }
  }, b = async () => {
    try {
      const S = await hn.getProjectSummary();
      return r.value = S.data, S.data;
    } catch (S) {
      return e.addError(S, "monitorStore"), console.error("Failed to get project summary:", S), null;
    }
  }, $ = async (S, T) => {
    try {
      s.value = !0;
      const R = await hn.triggerFetchMrns(S, T);
      return await a(), R.data;
    } catch (R) {
      throw e.addError(R, "monitorStore"), console.error("Failed to trigger fetch:", R), R;
    } finally {
      s.value = !1;
    }
  };
  return {
    // State
    loading: t,
    mrns: n,
    selectedMrns: o,
    projectSummary: r,
    operationLoading: s,
    pagination: i,
    // Computed
    allSelected: d,
    indeterminate: p,
    // Basic methods
    fetchMrns: a,
    addMrn: u,
    fetchMrn: f,
    fetchSelected: l,
    downloadSelected: c,
    toggleSelectAll: h,
    toggleSelection: m,
    setPage: E,
    setLimit: v,
    // Enhanced resource management
    getResourceStatus: O,
    getProjectSummary: b,
    triggerFetchMrns: $,
    triggerFetchSelected: async (S) => {
      const T = n.value.filter((R) => o.value.includes(R.id)).map((R) => R.mrn);
      if (T.length === 0)
        throw new Error("No MRNs selected");
      return await $(T, S);
    },
    performFullSync: async () => {
      try {
        s.value = !0;
        const S = await hn.performFullSync();
        return await a(), await b(), S.data;
      } catch (S) {
        throw e.addError(S, "monitorStore"), console.error("Failed to perform full sync:", S), S;
      } finally {
        s.value = !1;
      }
    },
    retryFailedResource: async (S, T, R) => {
      try {
        const x = await hn.retryFailedResource(S, T, R);
        return await a(), x.data;
      } catch (x) {
        throw e.addError(x, "monitorStore"), console.error("Failed to retry resource:", x), x;
      }
    },
    bulkRetryFailed: async (S) => {
      try {
        s.value = !0;
        const T = await hn.bulkRetryFailed(S);
        return await a(), T.data;
      } catch (T) {
        throw e.addError(T, "monitorStore"), console.error("Failed to bulk retry failed resources:", T), T;
      } finally {
        s.value = !1;
      }
    }
  };
}), uE = /* @__PURE__ */ ma("operations", () => {
  const e = oe(!1), t = oe(null), n = oe(!1), o = oe(!1);
  return {
    // State
    loading: e,
    lastOperation: t,
    showSummary: n,
    showToast: o,
    // Actions
    setLoading: (u) => {
      e.value = u;
    },
    recordOperation: (u, f, l, c) => {
      t.value = {
        operation: u,
        success: f,
        message: l,
        data: c,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }, o.value = !0, setTimeout(() => {
        o.value = !1;
      }, 5e3);
    },
    clearToast: () => {
      o.value = !1;
    },
    toggleSummary: () => {
      n.value = !n.value;
    }
  };
}), Ck = { class: "mb-3" }, Dk = { class: "d-flex flex-wrap gap-2 align-items-center" }, xk = {
  class: "btn-group",
  role: "group"
}, Rk = ["disabled"], kk = { key: 0 }, $k = { key: 1 }, Ik = {
  class: "btn-group",
  role: "group"
}, Pk = ["disabled"], Vk = { key: 0 }, Lk = { key: 1 }, Mk = ["disabled"], Fk = { key: 0 }, Bk = { key: 1 }, Uk = {
  class: "btn-group",
  role: "group"
}, jk = ["disabled"], Hk = ["disabled"], Kk = {
  key: 0,
  class: "mt-2"
}, Wk = { class: "text-muted" }, zk = { key: 0 }, qk = /* @__PURE__ */ Re({
  __name: "MonitorToolbar",
  emits: ["addMrn"],
  setup(e) {
    const t = zs(), n = uE(), o = le(() => t.selectedMrns.length === 0), r = le(() => t.selectedMrns.length), s = le(() => t.operationLoading), i = le(() => t.loading), a = le(() => t.projectSummary), u = async () => {
      try {
        const p = await t.triggerFetchSelected();
        n.recordOperation(
          "fetch-selected",
          !0,
          `Fetch triggered for ${p.mrns?.length || 0} MRN(s). ${p.tasks_created || 0} tasks created.`,
          p
        );
      } catch (p) {
        console.error("Failed to trigger fetch for selected MRNs:", p), n.recordOperation("fetch-selected", !1, "Failed to trigger fetch for selected MRNs");
      }
    }, f = async () => {
      try {
        if (confirm("Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances.")) {
          const p = await t.performFullSync();
          n.recordOperation(
            "full-sync",
            !0,
            `Full sync completed. ${p.statistics?.missing_instances_created || 0} instances created, ${p.statistics?.orphaned_instances_cleaned || 0} cleaned.`,
            p
          );
        }
      } catch (p) {
        console.error("Failed to perform full sync:", p), n.recordOperation("full-sync", !1, "Failed to perform full synchronization");
      }
    }, l = async () => {
      try {
        if (confirm("Are you sure you want to retry all failed resources? This will mark them as pending for re-processing.")) {
          const p = await t.bulkRetryFailed();
          n.recordOperation(
            "bulk-retry",
            !0,
            `Bulk retry completed. ${p.retried_count || 0} failed resources marked for retry.`,
            p
          );
        }
      } catch (p) {
        console.error("Failed to bulk retry failed resources:", p), n.recordOperation("bulk-retry", !1, "Failed to bulk retry failed resources");
      }
    }, c = async () => {
      try {
        await t.downloadSelected(), n.recordOperation(
          "download-selected",
          !0,
          `Download initiated for ${r.value} selected MRN(s).`
        );
      } catch (p) {
        console.error("Failed to download selected MRNs:", p), n.recordOperation("download-selected", !1, "Failed to download selected MRNs");
      }
    }, d = async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]), n.recordOperation("refresh", !0, "Data refreshed successfully.");
      } catch (p) {
        console.error("Failed to refresh data:", p), n.recordOperation("refresh", !1, "Failed to refresh data");
      }
    };
    return (p, h) => (L(), K("div", Ck, [
      _("div", Dk, [
        _("div", xk, [
          _("button", {
            class: "btn btn-primary",
            onClick: h[0] || (h[0] = (m) => p.$emit("addMrn"))
          }, h[2] || (h[2] = [
            _("i", { class: "fas fa-plus-circle fa-fw" }, null, -1),
            je(" Add MRN ")
          ])),
          _("button", {
            class: "btn btn-outline-primary",
            onClick: u,
            disabled: o.value || s.value,
            title: "Trigger fetch for selected MRNs"
          }, [
            h[4] || (h[4] = _("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)),
            s.value ? (L(), K("span", $k, h[3] || (h[3] = [
              _("div", {
                class: "spinner-border spinner-border-sm",
                role: "status"
              }, [
                _("span", { class: "visually-hidden" }, "Loading...")
              ], -1)
            ]))) : (L(), K("span", kk, "Fetch Selected"))
          ], 8, Rk)
        ]),
        _("div", Ik, [
          _("button", {
            class: "btn btn-warning",
            onClick: f,
            disabled: s.value,
            title: "Synchronize all configured resources with existing MRNs"
          }, [
            h[5] || (h[5] = _("i", { class: "fas fa-arrows-rotate fa-fw" }, null, -1)),
            s.value ? (L(), K("span", Lk, "Syncing...")) : (L(), K("span", Vk, "Full Sync"))
          ], 8, Pk),
          _("button", {
            class: "btn btn-outline-warning",
            onClick: l,
            disabled: s.value,
            title: "Retry all failed resources"
          }, [
            h[6] || (h[6] = _("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            s.value ? (L(), K("span", Bk, "Retrying...")) : (L(), K("span", Fk, "Retry Failed"))
          ], 8, Mk)
        ]),
        _("div", Uk, [
          _("button", {
            class: "btn btn-success",
            onClick: c,
            disabled: o.value,
            title: "Download ZIP archive of selected completed MRNs"
          }, h[7] || (h[7] = [
            _("i", { class: "fas fa-download fa-fw" }, null, -1),
            je(" Download Selected ")
          ]), 8, jk)
        ]),
        _("button", {
          class: "btn btn-outline-secondary",
          onClick: d,
          disabled: i.value,
          title: "Refresh data"
        }, [
          _("i", {
            class: Ce(["fas fa-rotate-right fa-fw", { "fa-spin": i.value }])
          }, null, 2)
        ], 8, Hk),
        _("button", {
          class: "btn btn-outline-info",
          onClick: h[1] || (h[1] = (m) => ve(n).toggleSummary()),
          title: "Toggle project summary"
        }, h[8] || (h[8] = [
          _("i", { class: "fas fa-chart-bar fa-fw" }, null, -1),
          je(" Summary ")
        ]))
      ]),
      a.value ? (L(), K("div", Kk, [
        _("small", Wk, [
          je(" Total MRNs: " + ue(a.value.total_mrns) + " | Queue: " + ue(a.value.sync_status.pending_tasks) + " pending, " + ue(a.value.sync_status.failed_tasks) + " failed tasks ", 1),
          r.value > 0 ? (L(), K("span", zk, " | Selected: " + ue(r.value), 1)) : Je("", !0)
        ])
      ])) : Je("", !0)
    ]));
  }
}), at = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed",
  Outdated: "Outdated",
  Deleted: "Deleted"
}, Gk = { class: "align-middle" }, Yk = { class: "d-flex flex-column" }, Xk = { class: "text-muted" }, Jk = {
  key: 0,
  class: "d-block text-muted"
}, Qk = {
  key: 0,
  class: "text-success"
}, Zk = {
  key: 1,
  class: "text-muted"
}, e$ = {
  key: 0,
  class: "text-danger"
}, t$ = ["title"], n$ = ["title"], o$ = {
  key: 1,
  class: "text-muted"
}, r$ = {
  class: "btn-group",
  role: "group"
}, s$ = ["disabled"], i$ = {
  key: 0,
  class: "table-warning"
}, a$ = { colspan: "5" }, l$ = { class: "p-2" }, u$ = { class: "mb-0 mt-1" }, c$ = /* @__PURE__ */ Re({
  __name: "MonitorResourceRow",
  props: {
    resource: {},
    mrn: {}
  },
  setup(e) {
    const t = e, n = zs(), o = oe(!1), r = oe(!1), s = (l) => {
      const c = "badge";
      switch (l) {
        case at.Pending:
          return `${c} bg-warning text-dark`;
        case at.Fetching:
          return `${c} bg-info text-dark`;
        case at.Completed:
          return `${c} bg-success`;
        case at.Failed:
          return `${c} bg-danger`;
        case at.Outdated:
          return `${c} bg-secondary`;
        case at.Deleted:
          return `${c} bg-dark`;
        default:
          return `${c} bg-secondary`;
      }
    }, i = (l) => {
      if (!l) return "-";
      try {
        const c = new Date(l);
        return c.toLocaleDateString() + " " + c.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch {
        return l;
      }
    }, a = (l) => l ? l.length > 50 ? l.substring(0, 50) + "..." : l : "-", u = async () => {
      try {
        r.value = !0, await n.retryFailedResource(
          t.mrn,
          t.resource.name,
          t.resource.repeat_instance
        );
      } catch (l) {
        console.error("Failed to retry resource:", l);
      } finally {
        r.value = !1;
      }
    }, f = () => {
      console.log("View details for resource:", t.resource);
    };
    return (l, c) => (L(), K(Te, null, [
      _("tr", Gk, [
        _("td", null, [
          _("div", Yk, [
            _("strong", null, ue(l.resource.name), 1),
            _("small", Xk, ue(l.resource.mapping_type) + " | " + ue(l.resource.resource_spec), 1)
          ])
        ]),
        _("td", null, [
          _("span", {
            class: Ce(s(l.resource.status))
          }, ue(l.resource.status), 3),
          l.resource.repeat_instance ? (L(), K("small", Jk, " Instance #" + ue(l.resource.repeat_instance), 1)) : Je("", !0)
        ]),
        _("td", null, [
          l.resource.fetch_date ? (L(), K("div", Qk, [
            c[1] || (c[1] = _("i", { class: "fas fa-check-circle fa-fw" }, null, -1)),
            je(" " + ue(i(l.resource.fetch_date)), 1)
          ])) : (L(), K("div", Zk, "-"))
        ]),
        _("td", null, [
          l.resource.error_message ? (L(), K("div", e$, [
            c[2] || (c[2] = _("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            _("span", {
              title: l.resource.error_message
            }, ue(a(l.resource.error_message)), 9, t$),
            l.resource.error_message.length > 50 ? (L(), K("button", {
              key: 0,
              class: "btn btn-link btn-sm p-0 ms-1",
              onClick: c[0] || (c[0] = (d) => o.value = !o.value),
              title: o.value ? "Show less" : "Show more"
            }, [
              _("i", {
                class: Ce(`fas fa-chevron-${o.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, n$)) : Je("", !0)
          ])) : (L(), K("div", o$, "-"))
        ]),
        _("td", null, [
          _("div", r$, [
            l.resource.status === "Failed" ? (L(), K("button", {
              key: 0,
              class: "btn btn-sm btn-warning",
              onClick: u,
              disabled: r.value,
              title: "Retry this resource"
            }, c[3] || (c[3] = [
              _("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)
            ]), 8, s$)) : Je("", !0),
            l.resource.status === "Completed" ? (L(), K("button", {
              key: 1,
              class: "btn btn-sm btn-outline-primary",
              onClick: f,
              title: "View resource details"
            }, c[4] || (c[4] = [
              _("i", { class: "fas fa-eye fa-fw" }, null, -1)
            ]))) : Je("", !0)
          ])
        ])
      ]),
      o.value && l.resource.error_message ? (L(), K("tr", i$, [
        _("td", a$, [
          _("div", l$, [
            c[5] || (c[5] = _("strong", null, "Error Details:", -1)),
            _("pre", u$, ue(l.resource.error_message), 1)
          ])
        ])
      ])) : Je("", !0)
    ], 64));
  }
}), f$ = { class: "align-middle" }, d$ = ["checked"], p$ = ["aria-expanded"], h$ = {
  class: "btn-group",
  role: "group"
}, m$ = ["disabled"], _$ = { key: 0 }, g$ = { key: 1 }, E$ = ["disabled"], v$ = {
  colspan: "5",
  class: "p-0"
}, y$ = { class: "ps-3" }, b$ = { class: "table table-sm table-bordered mb-0" }, w$ = /* @__PURE__ */ Re({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  setup(e) {
    const t = zs(), n = e, o = oe(!1), r = oe(!1), s = () => {
      o.value = !o.value;
    }, i = le(() => {
      const l = n.item.resources.length, c = n.item.resources.filter((E) => E.status === at.Completed).length, d = n.item.resources.filter((E) => E.status === at.Failed).length, p = n.item.resources.filter((E) => E.status === at.Pending).length, h = n.item.resources.filter((E) => E.status === at.Fetching).length;
      let m = `${c}/${l} completed`;
      return d > 0 && (m += `, ${d} failed`), h > 0 && (m += `, ${h} fetching`), p > 0 && (m += `, ${p} pending`), m;
    }), a = (l) => {
      const c = "badge";
      switch (l) {
        case at.Pending:
          return `${c} bg-warning text-dark`;
        case at.Fetching:
          return `${c} bg-info text-dark`;
        case at.Completed:
          return `${c} bg-success`;
        case at.Failed:
          return `${c} bg-danger`;
        case at.Outdated:
          return `${c} bg-secondary`;
        case at.Deleted:
          return `${c} bg-dark`;
        default:
          return `${c} bg-secondary`;
      }
    }, u = async () => {
      try {
        r.value = !0, await t.triggerFetchMrns([n.item.mrn]);
      } catch (l) {
        console.error("Failed to trigger fetch for MRN:", l);
      } finally {
        r.value = !1;
      }
    }, f = async () => {
      try {
        await t.downloadSelected();
      } catch (l) {
        console.error("Failed to download MRN data:", l);
      }
    };
    return (l, c) => (L(), K(Te, null, [
      _("tr", f$, [
        _("td", null, [
          _("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: l.selected,
            onChange: c[0] || (c[0] = (d) => ve(t).toggleSelection(l.item.id))
          }, null, 40, d$)
        ]),
        _("td", null, ue(l.item.mrn), 1),
        _("td", null, [
          _("span", {
            class: Ce(a(l.item.status))
          }, ue(l.item.status), 3)
        ]),
        _("td", null, [
          _("span", null, ue(i.value), 1),
          _("button", {
            class: "btn btn-sm btn-light ms-2",
            onClick: s,
            "aria-expanded": o.value
          }, [
            _("i", {
              class: Ce(`fas fa-chevron-${o.value ? "up" : "down"} fa-fw`)
            }, null, 2)
          ], 8, p$)
        ]),
        _("td", null, [
          _("div", h$, [
            _("button", {
              class: "btn btn-sm btn-primary",
              onClick: u,
              disabled: r.value,
              title: "Trigger fetch for this MRN"
            }, [
              c[2] || (c[2] = _("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)),
              r.value ? (L(), K("span", g$, c[1] || (c[1] = [
                _("div", {
                  class: "spinner-border spinner-border-sm",
                  role: "status"
                }, [
                  _("span", { class: "visually-hidden" }, "Loading...")
                ], -1)
              ]))) : (L(), K("span", _$, "Fetch"))
            ], 8, m$),
            _("button", {
              class: "btn btn-sm btn-success",
              disabled: l.item.status !== "Completed",
              onClick: f,
              title: "Download all completed resources for this MRN"
            }, c[3] || (c[3] = [
              _("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, E$)
          ])
        ])
      ]),
      Mn(_("tr", null, [
        _("td", v$, [
          _("div", y$, [
            _("table", b$, [
              c[4] || (c[4] = _("thead", { class: "table-light" }, [
                _("tr", null, [
                  _("th", { scope: "col" }, "Resource"),
                  _("th", { scope: "col" }, "Status"),
                  _("th", { scope: "col" }, "Fetch Date"),
                  _("th", { scope: "col" }, "Error"),
                  _("th", { scope: "col" }, "Actions")
                ])
              ], -1)),
              _("tbody", null, [
                (L(!0), K(Te, null, Et(l.item.resources, (d) => (L(), xt(c$, {
                  key: `${d.name}-${d.repeat_instance}`,
                  resource: d,
                  mrn: l.item.mrn
                }, null, 8, ["resource", "mrn"]))), 128))
              ])
            ])
          ])
        ])
      ], 512), [
        [mm, o.value]
      ])
    ], 64));
  }
}), O$ = /* @__PURE__ */ $r(w$, [["__scopeId", "data-v-bb84324f"]]), S$ = {
  key: 0,
  class: "d-flex justify-content-center"
}, N$ = {
  key: 1,
  class: "table table-striped table-hover"
}, A$ = { class: "table-light" }, T$ = { scope: "col" }, C$ = ["checked", "indeterminate"], D$ = { key: 0 }, x$ = /* @__PURE__ */ Re({
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
    const t = e, n = oe(null);
    return En(() => t.indeterminate, (o) => {
      n.value && (n.value.indeterminate = o);
    }, { immediate: !0 }), (o, r) => (L(), K("div", null, [
      o.loading ? (L(), K("div", S$, r[1] || (r[1] = [
        _("div", {
          class: "spinner-border",
          role: "status"
        }, [
          _("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (L(), K("table", N$, [
        _("thead", A$, [
          _("tr", null, [
            _("th", T$, [
              _("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: o.allSelected,
                indeterminate: o.indeterminate,
                onChange: r[0] || (r[0] = (s) => o.$emit("toggle-select-all"))
              }, null, 40, C$)
            ]),
            r[2] || (r[2] = _("th", { scope: "col" }, "MRN", -1)),
            r[3] || (r[3] = _("th", { scope: "col" }, "Status", -1)),
            r[4] || (r[4] = _("th", { scope: "col" }, "Resources", -1)),
            r[5] || (r[5] = _("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        _("tbody", null, [
          o.items.length === 0 ? (L(), K("tr", D$, r[6] || (r[6] = [
            _("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (L(!0), K(Te, { key: 1 }, Et(o.items, (s) => (L(), xt(O$, {
            key: s.id,
            item: s,
            selected: o.selectedMrns.includes(s.id)
          }, null, 8, ["item", "selected"]))), 128))
        ])
      ]))
    ]));
  }
}), R$ = { class: "modal-dialog" }, k$ = { class: "modal-content" }, $$ = { class: "modal-body" }, I$ = { class: "mb-3" }, P$ = /* @__PURE__ */ Re({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = oe(""), o = oe(null);
    let r = null, s = null;
    Cn(() => {
      o.value && (r = new lo(o.value), o.value.addEventListener("hidden.bs.modal", () => {
        s && s(null);
      }));
    }), sa(() => {
      r && r.dispose();
    });
    const i = () => new Promise((f) => {
      s = f, r ? r.show() : f(null);
    }), a = () => {
      s && s(n.value), r && r.hide(), n.value = "";
    }, u = () => {
      r && r.hide();
    };
    return t({ show: i }), (f, l) => (L(), K("div", {
      class: "modal fade",
      ref_key: "modal",
      ref: o,
      tabindex: "-1",
      "aria-labelledby": "addMrnModalLabel",
      "aria-hidden": "true"
    }, [
      _("div", R$, [
        _("div", k$, [
          l[2] || (l[2] = _("div", { class: "modal-header" }, [
            _("h5", {
              class: "modal-title",
              id: "addMrnModalLabel"
            }, "Add MRN"),
            _("button", {
              type: "button",
              class: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })
          ], -1)),
          _("div", $$, [
            _("div", I$, [
              l[1] || (l[1] = _("label", {
                for: "mrn-input",
                class: "form-label"
              }, "MRN", -1)),
              Mn(_("input", {
                type: "text",
                class: "form-control",
                id: "mrn-input",
                "onUpdate:modelValue": l[0] || (l[0] = (c) => n.value = c),
                onKeyup: yb(a, ["enter"])
              }, null, 544), [
                [kl, n.value]
              ])
            ])
          ]),
          _("div", { class: "modal-footer" }, [
            _("button", {
              type: "button",
              class: "btn btn-secondary",
              onClick: u
            }, "Cancel"),
            _("button", {
              type: "button",
              class: "btn btn-primary",
              onClick: a
            }, "Add")
          ])
        ])
      ])
    ], 512));
  }
}), V$ = { class: "card" }, L$ = { class: "card-header d-flex justify-content-between align-items-center" }, M$ = ["disabled"], F$ = { class: "card-body" }, B$ = {
  key: 0,
  class: "text-center"
}, U$ = {
  key: 1,
  class: "row g-3"
}, j$ = { class: "col-md-6" }, H$ = { class: "border rounded p-3 h-100" }, K$ = { class: "row g-2" }, W$ = { class: "col-6" }, z$ = { class: "text-center" }, q$ = { class: "h4 mb-1 text-primary" }, G$ = { class: "col-6" }, Y$ = { class: "text-center" }, X$ = { class: "h4 mb-1 text-info" }, J$ = { class: "col-md-6" }, Q$ = { class: "border rounded p-3 h-100" }, Z$ = { class: "row g-2" }, eI = {
  key: 0,
  class: "text-center"
}, tI = { class: "text-muted" }, nI = { class: "col-12" }, oI = { class: "border rounded p-3" }, rI = { class: "row g-3" }, sI = { class: "col-md-4" }, iI = { class: "d-flex align-items-center" }, aI = { class: "fw-bold" }, lI = { class: "col-md-4" }, uI = { class: "d-flex align-items-center" }, cI = { class: "fw-bold" }, fI = { class: "col-md-4" }, dI = { class: "d-flex align-items-center" }, pI = { class: "fw-bold" }, hI = { class: "col-12" }, mI = { class: "border rounded p-3" }, _I = { class: "mb-2" }, gI = { class: "d-flex justify-content-between align-items-center mb-1" }, EI = { class: "text-muted" }, vI = {
  class: "progress",
  style: { height: "8px" }
}, yI = ["aria-valuenow"], bI = {
  key: 0,
  class: "mb-2"
}, wI = { class: "d-flex justify-content-between align-items-center mb-1" }, OI = { class: "text-muted" }, SI = {
  class: "progress",
  style: { height: "6px" }
}, NI = ["aria-valuenow"], AI = {
  key: 2,
  class: "text-center text-muted"
}, TI = /* @__PURE__ */ Re({
  __name: "ProjectSummaryWidget",
  setup(e) {
    const t = zs(), n = oe(!1), o = le(() => t.projectSummary), r = le(() => o.value ? Object.values(o.value.overall_status_counts).reduce((c, d) => c + d, 0) : 0), s = le(() => {
      if (!o.value || r.value === 0) return 0;
      const c = o.value.overall_status_counts.completed || 0;
      return Math.round(c / r.value * 100);
    }), i = le(() => {
      if (!o.value || r.value === 0) return 0;
      const c = o.value.overall_status_counts.failed || 0;
      return Math.round(c / r.value * 100);
    }), a = le(() => {
      if (!o.value) return "Unknown";
      const c = o.value.sync_status.pending_tasks, d = o.value.sync_status.failed_tasks;
      return d > 5 ? "Poor" : c > 10 ? "Busy" : d > 0 || c > 0 ? "Active" : "Healthy";
    }), u = (c) => {
      switch (c.toLowerCase()) {
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
    }, f = (c) => c.charAt(0).toUpperCase() + c.slice(1), l = async () => {
      try {
        n.value = !0, await t.getProjectSummary();
      } catch (c) {
        console.error("Failed to refresh project summary:", c);
      } finally {
        n.value = !1;
      }
    };
    return Cn(() => {
      l();
    }), (c, d) => (L(), K("div", V$, [
      _("div", L$, [
        d[0] || (d[0] = _("h6", { class: "mb-0" }, [
          _("i", { class: "fas fa-chart-bar fa-fw" }),
          je(" Project Summary ")
        ], -1)),
        _("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: l,
          disabled: n.value,
          title: "Refresh summary"
        }, [
          _("i", {
            class: Ce(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, M$)
      ]),
      _("div", F$, [
        n.value ? (L(), K("div", B$, d[1] || (d[1] = [
          _("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            _("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : o.value ? (L(), K("div", U$, [
          _("div", j$, [
            _("div", H$, [
              d[4] || (d[4] = _("h6", { class: "text-muted mb-3" }, "Overall Statistics", -1)),
              _("div", K$, [
                _("div", W$, [
                  _("div", z$, [
                    _("div", q$, ue(o.value.total_mrns), 1),
                    d[2] || (d[2] = _("small", { class: "text-muted" }, "Total MRNs", -1))
                  ])
                ]),
                _("div", G$, [
                  _("div", Y$, [
                    _("div", X$, ue(r.value), 1),
                    d[3] || (d[3] = _("small", { class: "text-muted" }, "Total Resources", -1))
                  ])
                ])
              ])
            ])
          ]),
          _("div", J$, [
            _("div", Q$, [
              d[5] || (d[5] = _("h6", { class: "text-muted mb-3" }, "Resource Status", -1)),
              _("div", Z$, [
                (L(!0), K(Te, null, Et(o.value.overall_status_counts, (p, h) => (L(), K("div", {
                  key: h,
                  class: "col-6"
                }, [
                  p > 0 ? (L(), K("div", eI, [
                    _("div", {
                      class: Ce(["h5 mb-1", u(h)])
                    }, ue(p), 3),
                    _("small", tI, ue(f(h)), 1)
                  ])) : Je("", !0)
                ]))), 128))
              ])
            ])
          ]),
          _("div", nI, [
            _("div", oI, [
              d[12] || (d[12] = _("h6", { class: "text-muted mb-3" }, [
                _("i", { class: "fas fa-clock-rotate-left fa-fw" }),
                je(" Background Queue Status ")
              ], -1)),
              _("div", rI, [
                _("div", sI, [
                  _("div", iI, [
                    d[7] || (d[7] = _("i", { class: "fas fa-hourglass-half fa-fw text-warning me-2" }, null, -1)),
                    _("div", null, [
                      _("div", aI, ue(o.value.sync_status.pending_tasks), 1),
                      d[6] || (d[6] = _("small", { class: "text-muted" }, "Pending Tasks", -1))
                    ])
                  ])
                ]),
                _("div", lI, [
                  _("div", uI, [
                    d[9] || (d[9] = _("i", { class: "fas fa-exclamation-triangle fa-fw text-danger me-2" }, null, -1)),
                    _("div", null, [
                      _("div", cI, ue(o.value.sync_status.failed_tasks), 1),
                      d[8] || (d[8] = _("small", { class: "text-muted" }, "Failed Tasks", -1))
                    ])
                  ])
                ]),
                _("div", fI, [
                  _("div", dI, [
                    d[11] || (d[11] = _("i", { class: "fas fa-check-circle fa-fw text-success me-2" }, null, -1)),
                    _("div", null, [
                      _("div", pI, ue(a.value), 1),
                      d[10] || (d[10] = _("small", { class: "text-muted" }, "Queue Health", -1))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _("div", hI, [
            _("div", mI, [
              d[15] || (d[15] = _("h6", { class: "text-muted mb-3" }, "Completion Progress", -1)),
              _("div", _I, [
                _("div", gI, [
                  d[13] || (d[13] = _("small", { class: "text-muted" }, "Overall Completion", -1)),
                  _("small", EI, ue(s.value) + "%", 1)
                ]),
                _("div", vI, [
                  _("div", {
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Lo({ width: s.value + "%" }),
                    "aria-valuenow": s.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, yI)
                ])
              ]),
              i.value > 0 ? (L(), K("div", bI, [
                _("div", wI, [
                  d[14] || (d[14] = _("small", { class: "text-muted" }, "Error Rate", -1)),
                  _("small", OI, ue(i.value) + "%", 1)
                ]),
                _("div", SI, [
                  _("div", {
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Lo({ width: i.value + "%" }),
                    "aria-valuenow": i.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, NI)
                ])
              ])) : Je("", !0)
            ])
          ])
        ])) : (L(), K("div", AI, d[16] || (d[16] = [
          _("i", { class: "fas fa-info-circle fa-fw" }, null, -1),
          je(" No summary data available ")
        ])))
      ])
    ]));
  }
}), CI = /* @__PURE__ */ $r(TI, [["__scopeId", "data-v-b2ae2968"]]), DI = { class: "p-3" }, xI = {
  key: 0,
  class: "mb-4"
}, RI = {
  key: 1,
  class: "d-flex justify-content-between align-items-center mt-3"
}, kI = { class: "text-muted" }, $I = { class: "d-flex gap-2" }, II = {
  key: 2,
  class: "toast-container position-fixed bottom-0 end-0 p-3"
}, PI = { class: "d-flex" }, VI = { class: "toast-body text-white" }, LI = /* @__PURE__ */ Re({
  __name: "MonitorPage",
  setup(e) {
    const t = zs(), n = uE(), o = oe(null), r = le({
      get: () => t.pagination.page,
      set: (l) => t.setPage(l)
    }), s = le({
      get: () => t.pagination.limit,
      set: (l) => t.setLimit(l)
    }), i = le(() => t.pagination.total), a = le(() => t.pagination.perPageOptions), u = le(() => {
      const l = t.pagination.total, c = t.pagination.page, d = t.pagination.limit, p = l === 0 ? 0 : (c - 1) * d + 1, h = Math.min(c * d, l);
      return { start: p, end: h, total: l };
    }), f = async () => {
      if (o.value) {
        const l = await o.value.show();
        if (l)
          try {
            await t.addMrn(l), n.recordOperation("add-mrn", !0, "MRN added successfully");
          } catch {
            n.recordOperation("add-mrn", !1, "Failed to add MRN");
          }
      }
    };
    return Cn(async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]);
      } catch (l) {
        console.error("Failed to load initial data:", l), n.recordOperation("initial-load", !1, "Failed to load initial data");
      }
    }), (l, c) => {
      const d = on("b-pagination"), p = on("b-pagination-dropdown");
      return L(), K("div", DI, [
        Oe(qk, { onAddMrn: f }),
        ve(n).showSummary ? (L(), K("div", xI, [
          Oe(CI)
        ])) : Je("", !0),
        Oe(x$, {
          items: ve(t).mrns,
          loading: ve(t).loading,
          "selected-mrns": ve(t).selectedMrns,
          "all-selected": ve(t).allSelected,
          indeterminate: ve(t).indeterminate,
          onToggleSelectAll: ve(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelectAll"]),
        ve(t).pagination.total > 0 ? (L(), K("div", RI, [
          _("small", kI, " Showing " + ue(u.value.start) + "-" + ue(u.value.end) + " of " + ue(u.value.total) + " MRNs ", 1),
          _("div", $I, [
            Oe(d, {
              size: "sm",
              perPage: s.value,
              totalItems: i.value,
              modelValue: r.value,
              "onUpdate:modelValue": c[0] || (c[0] = (h) => r.value = h)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            Oe(p, {
              options: a.value,
              modelValue: s.value,
              "onUpdate:modelValue": c[1] || (c[1] = (h) => s.value = h)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : Je("", !0),
        Oe(P$, {
          ref_key: "addMrnModal",
          ref: o
        }, null, 512),
        ve(n).showToast && ve(n).lastOperation ? (L(), K("div", II, [
          _("div", {
            class: Ce(["toast show", ve(n).lastOperation.success ? "bg-success" : "bg-danger"]),
            role: "alert"
          }, [
            _("div", PI, [
              _("div", VI, [
                _("i", {
                  class: Ce(ve(n).lastOperation.success ? "fas fa-check-circle fa-fw" : "fas fa-exclamation-triangle fa-fw")
                }, null, 2),
                je(" " + ue(ve(n).lastOperation.message), 1)
              ]),
              _("button", {
                type: "button",
                class: "btn-close btn-close-white me-2 m-auto",
                onClick: c[2] || (c[2] = (h) => ve(n).clearToast())
              })
            ])
          ], 2)
        ])) : Je("", !0)
      ]);
    };
  }
}), MI = {}, FI = { class: "error-wrapper" }, BI = { class: "mt-5" };
function UI(e, t) {
  const n = on("router-link");
  return L(), K("div", FI, [
    be(e.$slots, "title", {}, () => [
      t[0] || (t[0] = _("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    be(e.$slots, "description", {}, () => [
      t[1] || (t[1] = _("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    be(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = _("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    _("div", BI, [
      Oe(n, {
        to: "/",
        class: "btn btn-sm btn-primary"
      }, {
        default: Tt(() => t[3] || (t[3] = [
          _("i", { class: "fas fa-arrow-left fa-fw me-1" }, null, -1),
          _("span", null, "Back to Home", -1)
        ])),
        _: 1,
        __: [3]
      })
    ])
  ]);
}
const jI = /* @__PURE__ */ $r(MI, [["render", UI], ["__scopeId", "data-v-d4f8fed2"]]), HI = { class: "card shadow-sm" }, KI = { class: "card-body" }, WI = { class: "text-center" }, zI = {
  key: 0,
  class: "lead text-danger"
}, qI = {
  key: 1,
  class: "text-muted"
}, GI = /* @__PURE__ */ Re({
  __name: "ErrorPage",
  setup(e) {
    const n = x1().query.message;
    return (o, r) => {
      const s = on("router-link");
      return L(), K("div", HI, [
        _("div", KI, [
          _("div", WI, [
            r[1] || (r[1] = _("h1", { class: "display-4" }, "Something went wrong", -1)),
            ve(n) ? (L(), K("p", zI, "Error: " + ue(ve(n)), 1)) : (L(), K("p", qI, "We're sorry for the inconvenience. Please try again later.")),
            Oe(s, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: Tt(() => r[0] || (r[0] = [
                je("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), YI = [
  {
    path: "/",
    component: V1,
    children: [
      { path: "", name: "home", component: F1 },
      { path: "setup", name: "setup", component: Tk },
      { path: "monitor", name: "monitor", component: LI },
      { path: "error", name: "error", component: GI },
      { path: "/:pathMatch(.*)*", component: jI }
    ]
  }
];
let ai;
const Lp = () => ai || (ai = C1({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: MO(),
  routes: YI
}), ai), XI = {
  key: 0,
  class: "alert alert-danger"
}, JI = { style: { "word-break": "break-all" } }, QI = /* @__PURE__ */ Re({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = oe(), n = Yu(), { errors: o } = ju(n), r = (s) => JSON.stringify(s);
    return ia(async () => {
      if (o.value?.length === 0) return;
      const s = t.value;
      s && (await s.show(), n.resetErrors());
    }), (s, i) => {
      const a = on("b-modal");
      return L(), xt(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: Tt(() => i[0] || (i[0] = [
          _("span", null, "Error", -1)
        ])),
        default: Tt(() => [
          (L(!0), K(Te, null, Et(ve(o), (u, f) => (L(), K(Te, { key: f }, [
            u ? (L(), K("div", XI, [
              _("div", JI, ue(r(u)), 1)
            ])) : Je("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), ZI = /* @__PURE__ */ Re({
  __name: "App",
  setup(e) {
    const t = Ws();
    return Cn(() => {
      t.fetchProjectSettings();
    }), (n, o) => {
      const r = on("router-view");
      return L(), K("div", null, [
        Oe(r),
        Oe(QI)
      ]);
    };
  }
}), EP = (e) => {
  const t = fa(ZI);
  t.config.errorHandler = (r, s, i) => {
    console.error("💥 Vue Error:", r), console.error("📍 Component:", s), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      r instanceof Error ? Lp().push({ name: "error", query: { message: r.message } }) : console.error("Unhandled non-Error exception:", r);
    });
  };
  const n = Xw();
  t.use(ok), t.use(n);
  const o = Lp();
  return t.use(o), t.mount(e), t;
};
export {
  EP as default
};
