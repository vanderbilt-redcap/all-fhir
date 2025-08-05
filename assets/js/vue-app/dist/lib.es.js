var Lp = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const we = Lp.NODE_ENV !== "production" ? Object.freeze({}) : {}, lr = Lp.NODE_ENV !== "production" ? Object.freeze([]) : [], Ze = () => {
}, uE = () => !1, Ts = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Si = (e) => e.startsWith("onUpdate:"), He = Object.assign, au = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, cE = Object.prototype.hasOwnProperty, Ae = (e, t) => cE.call(e, t), oe = Array.isArray, So = (e) => Cs(e) === "[object Map]", Gi = (e) => Cs(e) === "[object Set]", hc = (e) => Cs(e) === "[object Date]", ae = (e) => typeof e == "function", Fe = (e) => typeof e == "string", Xt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", lu = (e) => (Se(e) || ae(e)) && ae(e.then) && ae(e.catch), Mp = Object.prototype.toString, Cs = (e) => Mp.call(e), uu = (e) => Cs(e).slice(8, -1), Fp = (e) => Cs(e) === "[object Object]", cu = (e) => Fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xr = /* @__PURE__ */ Fn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fE = /* @__PURE__ */ Fn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Yi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, dE = /-(\w)/g, ut = Yi(
  (e) => e.replace(dE, (t, n) => n ? n.toUpperCase() : "")
), pE = /\B([A-Z])/g, En = Yi(
  (e) => e.replace(pE, "-$1").toLowerCase()
), ko = Yi((e) => e.charAt(0).toUpperCase() + e.slice(1)), go = Yi(
  (e) => e ? `on${ko(e)}` : ""
), bt = (e, t) => !Object.is(e, t), Zo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, us = (e, t, n, o = !1) => {
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
let mc;
const Ds = () => mc || (mc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xs(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Fe(o) ? EE(o) : xs(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Fe(e) || Se(e))
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
  else if (Se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ge(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Fe(t) && (e.class = Ve(t)), n && (e.style = xs(n)), e;
}
const vE = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", yE = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", bE = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", wE = /* @__PURE__ */ Fn(vE), OE = /* @__PURE__ */ Fn(yE), AE = /* @__PURE__ */ Fn(bE), NE = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", SE = /* @__PURE__ */ Fn(NE);
function Bp(e) {
  return !!e || e === "";
}
function TE(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = fr(e[o], t[o]);
  return n;
}
function fr(e, t) {
  if (e === t) return !0;
  let n = hc(e), o = hc(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Xt(e), o = Xt(t), n || o)
    return e === t;
  if (n = oe(e), o = oe(t), n || o)
    return n && o ? TE(e, t) : !1;
  if (n = Se(e), o = Se(t), n || o) {
    if (!n || !o)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (a && !l || !a && l || !fr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function CE(e, t) {
  return e.findIndex((n) => fr(n, t));
}
const Up = (e) => !!(e && e.__v_isRef === !0), Be = (e) => Fe(e) ? e : e == null ? "" : oe(e) || Se(e) && (e.toString === Mp || !ae(e.toString)) ? Up(e) ? Be(e.value) : JSON.stringify(e, jp, 2) : String(e), jp = (e, t) => Up(t) ? jp(e, t.value) : So(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[Ca(o, s) + " =>"] = r, n),
    {}
  )
} : Gi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ca(n))
} : Xt(t) ? Ca(t) : Se(t) && !oe(t) && !Fp(t) ? String(t) : t, Ca = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var $e = {};
function Ft(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let it;
class Hp {
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
    } else $e.NODE_ENV !== "production" && Ft("cannot run an inactive effect scope.");
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
function Kp(e) {
  return new Hp(e);
}
function Wp() {
  return it;
}
function DE(e, t = !1) {
  it ? it.cleanups.push(e) : $e.NODE_ENV !== "production" && !t && Ft(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Re;
const Da = /* @__PURE__ */ new WeakSet();
class zp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, it && it.active && it.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Da.has(this) && (Da.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _c(this), Yp(this);
    const t = Re, n = Gt;
    Re = this, Gt = !0;
    try {
      return this.fn();
    } finally {
      $e.NODE_ENV !== "production" && Re !== this && Ft(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Xp(this), Re = t, Gt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        pu(t);
      this.deps = this.depsTail = void 0, _c(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Da.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    pl(this) && this.run();
  }
  get dirty() {
    return pl(this);
  }
}
let qp = 0, Jr, Qr;
function Gp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Qr, Qr = e;
    return;
  }
  e.next = Jr, Jr = e;
}
function fu() {
  qp++;
}
function du() {
  if (--qp > 0)
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
function Yp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xp(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), pu(o), xE(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function pl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Jp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Jp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cs) || (e.globalVersion = cs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !pl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Re, o = Gt;
  Re = e, Gt = !0;
  try {
    Yp(e);
    const r = e.fn(e._value);
    (t.version === 0 || bt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Re = n, Gt = o, Xp(e), e.flags &= -3;
  }
}
function pu(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), $e.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      pu(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function xE(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Gt = !0;
const Qp = [];
function Jt() {
  Qp.push(Gt), Gt = !1;
}
function Qt() {
  const e = Qp.pop();
  Gt = e === void 0 ? !0 : e;
}
function _c(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Re;
    Re = void 0;
    try {
      t();
    } finally {
      Re = n;
    }
  }
}
let cs = 0;
class RE {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, $e.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Re || !Gt || Re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Re)
      n = this.activeLink = new RE(Re, this), Re.deps ? (n.prevDep = Re.depsTail, Re.depsTail.nextDep = n, Re.depsTail = n) : Re.deps = Re.depsTail = n, Zp(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Re.depsTail, n.nextDep = void 0, Re.depsTail.nextDep = n, Re.depsTail = n, Re.deps === n && (Re.deps = o);
    }
    return $e.NODE_ENV !== "production" && Re.onTrack && Re.onTrack(
      He(
        {
          effect: Re
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, cs++, this.notify(t);
  }
  notify(t) {
    fu();
    try {
      if ($e.NODE_ENV !== "production")
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
      du();
    }
  }
}
function Zp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Zp(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), $e.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Ci = /* @__PURE__ */ new WeakMap(), To = Symbol(
  $e.NODE_ENV !== "production" ? "Object iterate" : ""
), hl = Symbol(
  $e.NODE_ENV !== "production" ? "Map keys iterate" : ""
), fs = Symbol(
  $e.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Qe(e, t, n) {
  if (Gt && Re) {
    let o = Ci.get(e);
    o || Ci.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new Xi()), r.map = o, r.key = n), $e.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function fn(e, t, n, o, r, s) {
  const i = Ci.get(e);
  if (!i) {
    cs++;
    return;
  }
  const a = (l) => {
    l && ($e.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: s
    }) : l.trigger());
  };
  if (fu(), t === "clear")
    i.forEach(a);
  else {
    const l = oe(e), f = l && cu(n);
    if (l && n === "length") {
      const u = Number(o);
      i.forEach((c, d) => {
        (d === "length" || d === fs || !Xt(d) && d >= u) && a(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(fs)), t) {
        case "add":
          l ? f && a(i.get("length")) : (a(i.get(To)), So(e) && a(i.get(hl)));
          break;
        case "delete":
          l || (a(i.get(To)), So(e) && a(i.get(hl)));
          break;
        case "set":
          So(e) && a(i.get(To));
          break;
      }
  }
  du();
}
function IE(e, t) {
  const n = Ci.get(e);
  return n && n.get(t);
}
function zo(e) {
  const t = fe(e);
  return t === e ? t : (Qe(t, "iterate", fs), mt(e) ? t : t.map(st));
}
function Ji(e) {
  return Qe(e = fe(e), "iterate", fs), e;
}
const $E = {
  __proto__: null,
  [Symbol.iterator]() {
    return xa(this, Symbol.iterator, st);
  },
  concat(...e) {
    return zo(this).concat(
      ...e.map((t) => oe(t) ? zo(t) : t)
    );
  },
  entries() {
    return xa(this, "entries", (e) => (e[1] = st(e[1]), e));
  },
  every(e, t) {
    return Nn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Nn(this, "filter", e, t, (n) => n.map(st), arguments);
  },
  find(e, t) {
    return Nn(this, "find", e, t, st, arguments);
  },
  findIndex(e, t) {
    return Nn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Nn(this, "findLast", e, t, st, arguments);
  },
  findLastIndex(e, t) {
    return Nn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Nn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ra(this, "includes", e);
  },
  indexOf(...e) {
    return Ra(this, "indexOf", e);
  },
  join(e) {
    return zo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ra(this, "lastIndexOf", e);
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
    return gc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return gc(this, "reduceRight", e, t);
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
    return zo(this).toReversed();
  },
  toSorted(e) {
    return zo(this).toSorted(e);
  },
  toSpliced(...e) {
    return zo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Lr(this, "unshift", e);
  },
  values() {
    return xa(this, "values", st);
  }
};
function xa(e, t, n) {
  const o = Ji(e), r = o[t]();
  return o !== e && !mt(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.value && (s.value = n(s.value)), s;
  }), r;
}
const kE = Array.prototype;
function Nn(e, t, n, o, r, s) {
  const i = Ji(e), a = i !== e && !mt(e), l = i[t];
  if (l !== kE[t]) {
    const c = l.apply(e, s);
    return a ? st(c) : c;
  }
  let f = n;
  i !== e && (a ? f = function(c, d) {
    return n.call(this, st(c), d, e);
  } : n.length > 2 && (f = function(c, d) {
    return n.call(this, c, d, e);
  }));
  const u = l.call(i, f, o);
  return a && r ? r(u) : u;
}
function gc(e, t, n, o) {
  const r = Ji(e);
  let s = n;
  return r !== e && (mt(e) ? n.length > 3 && (s = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : s = function(i, a, l) {
    return n.call(this, i, st(a), l, e);
  }), r[t](s, ...o);
}
function Ra(e, t, n) {
  const o = fe(e);
  Qe(o, "iterate", fs);
  const r = o[t](...n);
  return (r === -1 || r === !1) && ds(n[0]) ? (n[0] = fe(n[0]), o[t](...n)) : r;
}
function Lr(e, t, n = []) {
  Jt(), fu();
  const o = fe(e)[t].apply(e, n);
  return du(), Qt(), o;
}
const PE = /* @__PURE__ */ Fn("__proto__,__v_isRef,__isVue"), eh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xt)
);
function VE(e) {
  Xt(e) || (e = String(e));
  const t = fe(this);
  return Qe(t, "has", e), t.hasOwnProperty(e);
}
class th {
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
      return o === (r ? s ? ah : ih : s ? sh : rh).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
    return (Xt(n) ? eh.has(n) : PE(n)) || (r || Qe(t, "get", n), s) ? a : Le(a) ? i && cu(n) ? a : a.value : Se(a) ? r ? hu(a) : Sr(a) : a;
  }
}
class nh extends th {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const l = vn(s);
      if (!mt(o) && !vn(o) && (s = fe(s), o = fe(o)), !oe(t) && Le(s) && !Le(o))
        return l ? !1 : (s.value = o, !0);
    }
    const i = oe(t) && cu(n) ? Number(n) < t.length : Ae(t, n), a = Reflect.set(
      t,
      n,
      o,
      Le(t) ? t : r
    );
    return t === fe(r) && (i ? bt(o, s) && fn(t, "set", n, o, s) : fn(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = Ae(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && fn(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Xt(n) || !eh.has(n)) && Qe(t, "has", n), o;
  }
  ownKeys(t) {
    return Qe(
      t,
      "iterate",
      oe(t) ? "length" : To
    ), Reflect.ownKeys(t);
  }
}
class oh extends th {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return $e.NODE_ENV !== "production" && Ft(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return $e.NODE_ENV !== "production" && Ft(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const LE = /* @__PURE__ */ new nh(), ME = /* @__PURE__ */ new oh(), FE = /* @__PURE__ */ new nh(!0), BE = /* @__PURE__ */ new oh(!0), ml = (e) => e, Ws = (e) => Reflect.getPrototypeOf(e);
function UE(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = fe(r), i = So(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = r[e](...o), u = n ? ml : t ? Di : st;
    return !t && Qe(
      s,
      "iterate",
      l ? hl : To
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
    if ($e.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ft(
        `${ko(e)} operation ${n}failed: target is readonly.`,
        fe(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jE(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, i = fe(s), a = fe(r);
      e || (bt(r, a) && Qe(i, "get", r), Qe(i, "get", a));
      const { has: l } = Ws(i), f = t ? ml : e ? Di : st;
      if (l.call(i, r))
        return f(s.get(r));
      if (l.call(i, a))
        return f(s.get(a));
      s !== i && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Qe(fe(r), "iterate", To), Reflect.get(r, "size", r);
    },
    has(r) {
      const s = this.__v_raw, i = fe(s), a = fe(r);
      return e || (bt(r, a) && Qe(i, "has", r), Qe(i, "has", a)), r === a ? s.has(r) : s.has(r) || s.has(a);
    },
    forEach(r, s) {
      const i = this, a = i.__v_raw, l = fe(a), f = t ? ml : e ? Di : st;
      return !e && Qe(l, "iterate", To), a.forEach((u, c) => r.call(s, f(u), f(c), i));
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
        !t && !mt(r) && !vn(r) && (r = fe(r));
        const s = fe(this);
        return Ws(s).has.call(s, r) || (s.add(r), fn(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !mt(s) && !vn(s) && (s = fe(s));
        const i = fe(this), { has: a, get: l } = Ws(i);
        let f = a.call(i, r);
        f ? $e.NODE_ENV !== "production" && Ec(i, a, r) : (r = fe(r), f = a.call(i, r));
        const u = l.call(i, r);
        return i.set(r, s), f ? bt(s, u) && fn(i, "set", r, s, u) : fn(i, "add", r, s), this;
      },
      delete(r) {
        const s = fe(this), { has: i, get: a } = Ws(s);
        let l = i.call(s, r);
        l ? $e.NODE_ENV !== "production" && Ec(s, i, r) : (r = fe(r), l = i.call(s, r));
        const f = a ? a.call(s, r) : void 0, u = s.delete(r);
        return l && fn(s, "delete", r, void 0, f), u;
      },
      clear() {
        const r = fe(this), s = r.size !== 0, i = $e.NODE_ENV !== "production" ? So(r) ? new Map(r) : new Set(r) : void 0, a = r.clear();
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
function Qi(e, t) {
  const n = jE(e, t);
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    Ae(n, r) && r in o ? n : o,
    r,
    s
  );
}
const HE = {
  get: /* @__PURE__ */ Qi(!1, !1)
}, KE = {
  get: /* @__PURE__ */ Qi(!1, !0)
}, WE = {
  get: /* @__PURE__ */ Qi(!0, !1)
}, zE = {
  get: /* @__PURE__ */ Qi(!0, !0)
};
function Ec(e, t, n) {
  const o = fe(n);
  if (o !== n && t.call(e, o)) {
    const r = uu(e);
    Ft(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const rh = /* @__PURE__ */ new WeakMap(), sh = /* @__PURE__ */ new WeakMap(), ih = /* @__PURE__ */ new WeakMap(), ah = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qE(uu(e));
}
function Sr(e) {
  return vn(e) ? e : Zi(
    e,
    !1,
    LE,
    HE,
    rh
  );
}
function lh(e) {
  return Zi(
    e,
    !1,
    FE,
    KE,
    sh
  );
}
function hu(e) {
  return Zi(
    e,
    !0,
    ME,
    WE,
    ih
  );
}
function pn(e) {
  return Zi(
    e,
    !0,
    BE,
    zE,
    ah
  );
}
function Zi(e, t, n, o, r) {
  if (!Se(e))
    return $e.NODE_ENV !== "production" && Ft(
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
function Yt(e) {
  return vn(e) ? Yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function vn(e) {
  return !!(e && e.__v_isReadonly);
}
function mt(e) {
  return !!(e && e.__v_isShallow);
}
function ds(e) {
  return e ? !!e.__v_raw : !1;
}
function fe(e) {
  const t = e && e.__v_raw;
  return t ? fe(t) : e;
}
function Qn(e) {
  return !Ae(e, "__v_skip") && Object.isExtensible(e) && us(e, "__v_skip", !0), e;
}
const st = (e) => Se(e) ? Sr(e) : e, Di = (e) => Se(e) ? hu(e) : e;
function Le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function de(e) {
  return ch(e, !1);
}
function uh(e) {
  return ch(e, !0);
}
function ch(e, t) {
  return Le(e) ? e : new YE(e, t);
}
class YE {
  constructor(t, n) {
    this.dep = new Xi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : fe(t), this._value = n ? t : st(t), this.__v_isShallow = n;
  }
  get value() {
    return $e.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || mt(t) || vn(t);
    t = o ? t : fe(t), bt(t, n) && (this._rawValue = t, this._value = o ? t : st(t), $e.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ye(e) {
  return Le(e) ? e.value : e;
}
const XE = {
  get: (e, t, n) => t === "__v_raw" ? e : ye(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Le(r) && !Le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function fh(e) {
  return Yt(e) ? e : new Proxy(e, XE);
}
class JE {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Xi(), { get: o, set: r } = t(n.track.bind(n), n.trigger.bind(n));
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
function Zt(e) {
  $e.NODE_ENV !== "production" && !ds(e) && Ft("toRefs() expects a reactive object but received a plain one.");
  const t = oe(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = dh(e, n);
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
    return IE(fe(this._object), this._key);
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
  return Le(e) ? e : ae(e) ? new ev(e) : Se(e) && arguments.length > 1 ? dh(e, t, n) : de(e);
}
function dh(e, t, n) {
  const o = e[t];
  return Le(o) ? o : new ZE(e, t, n);
}
class tv {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Xi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Re !== this)
      return Gp(this, !0), !0;
  }
  get value() {
    const t = $e.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Jp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : $e.NODE_ENV !== "production" && Ft("Write operation failed: computed value is readonly");
  }
}
function nv(e, t, n = !1) {
  let o, r;
  return ae(e) ? o = e : (o = e.get, r = e.set), new tv(o, r, n);
}
const qs = {}, xi = /* @__PURE__ */ new WeakMap();
let Eo;
function ov(e, t = !1, n = Eo) {
  if (n) {
    let o = xi.get(n);
    o || xi.set(n, o = []), o.push(e);
  } else $e.NODE_ENV !== "production" && !t && Ft(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function rv(e, t, n = we) {
  const { immediate: o, deep: r, once: s, scheduler: i, augmentJob: a, call: l } = n, f = (N) => {
    (n.onWarn || Ft)(
      "Invalid watch source: ",
      N,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (N) => r ? N : mt(N) || r === !1 || r === 0 ? In(N, 1) : In(N);
  let c, d, p, h, m = !1, g = !1;
  if (Le(e) ? (d = () => e.value, m = mt(e)) : Yt(e) ? (d = () => u(e), m = !0) : oe(e) ? (g = !0, m = e.some((N) => Yt(N) || mt(N)), d = () => e.map((N) => {
    if (Le(N))
      return N.value;
    if (Yt(N))
      return u(N);
    if (ae(N))
      return l ? l(N, 2) : N();
    $e.NODE_ENV !== "production" && f(N);
  })) : ae(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (p) {
      Jt();
      try {
        p();
      } finally {
        Qt();
      }
    }
    const N = Eo;
    Eo = c;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      Eo = N;
    }
  } : (d = Ze, $e.NODE_ENV !== "production" && f(e)), t && r) {
    const N = d, C = r === !0 ? 1 / 0 : r;
    d = () => In(N(), C);
  }
  const v = Wp(), O = () => {
    c.stop(), v && v.active && au(v.effects, c);
  };
  if (s && t) {
    const N = t;
    t = (...C) => {
      N(...C), O();
    };
  }
  let y = g ? new Array(e.length).fill(qs) : qs;
  const R = (N) => {
    if (!(!(c.flags & 1) || !c.dirty && !N))
      if (t) {
        const C = c.run();
        if (r || m || (g ? C.some((S, V) => bt(S, y[V])) : bt(C, y))) {
          p && p();
          const S = Eo;
          Eo = c;
          try {
            const V = [
              C,
              // pass undefined as the old value when it's changed for the first time
              y === qs ? void 0 : g && y[0] === qs ? [] : y,
              h
            ];
            y = C, l ? l(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            Eo = S;
          }
        }
      } else
        c.run();
  };
  return a && a(R), c = new zp(d), c.scheduler = i ? () => i(R, !1) : R, h = (N) => ov(N, !1, c), p = c.onStop = () => {
    const N = xi.get(c);
    if (N) {
      if (l)
        l(N, 4);
      else
        for (const C of N) C();
      xi.delete(c);
    }
  }, $e.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? o ? R(!0) : y = c.run() : i ? i(R.bind(null, !0), !0) : c.run(), O.pause = c.pause.bind(c), O.resume = c.resume.bind(c), O.stop = O, O;
}
function In(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Le(e))
    In(e.value, t, n);
  else if (oe(e))
    for (let o = 0; o < e.length; o++)
      In(e[o], t, n);
  else if (Gi(e) || So(e))
    e.forEach((o) => {
      In(o, t, n);
    });
  else if (Fp(e)) {
    for (const o in e)
      In(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && In(e[o], t, n);
  }
  return e;
}
var w = {};
const Co = [];
function ai(e) {
  Co.push(e);
}
function li() {
  Co.pop();
}
let Ia = !1;
function B(e, ...t) {
  if (Ia) return;
  Ia = !0, Jt();
  const n = Co.length ? Co[Co.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = sv();
  if (o)
    Tr(
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
          ({ vnode: s }) => `at <${la(n, s.type)}>`
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
  Qt(), Ia = !1;
}
function sv() {
  let e = Co[Co.length - 1];
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${la(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...lv(e.props), s] : [r + s];
}
function lv(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ph(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ph(e, t, n) {
  return Fe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Le(t) ? (t = ph(e, fe(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ae(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = fe(t), n ? t : [`${e}=`, t]);
}
function uv(e, t) {
  w.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? B(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && B(`${t} is NaN - the duration expression might be incorrect.`));
}
const mu = {
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
function Tr(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Rs(r, t, n);
  }
}
function en(e, t, n, o) {
  if (ae(e)) {
    const r = Tr(e, t, n, o);
    return r && lu(r) && r.catch((s) => {
      Rs(s, t, n);
    }), r;
  }
  if (oe(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(en(e[s], t, n, o));
    return r;
  } else w.NODE_ENV !== "production" && B(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Rs(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || we;
  if (t) {
    let a = t.parent;
    const l = t.proxy, f = w.NODE_ENV !== "production" ? mu[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Jt(), Tr(s, null, 10, [
        e,
        l,
        f
      ]), Qt();
      return;
    }
  }
  cv(e, n, r, o, i);
}
function cv(e, t, n, o = !0, r = !1) {
  if (w.NODE_ENV !== "production") {
    const s = mu[t];
    if (n && ai(n), B(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && li(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const pt = [];
let cn = -1;
const ur = [];
let zn = null, er = 0;
const hh = /* @__PURE__ */ Promise.resolve();
let Ri = null;
const fv = 100;
function dr(e) {
  const t = Ri || hh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dv(e) {
  let t = cn + 1, n = pt.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = pt[o], s = ps(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function ea(e) {
  if (!(e.flags & 1)) {
    const t = ps(e), n = pt[pt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ps(n) ? pt.push(e) : pt.splice(dv(t), 0, e), e.flags |= 1, mh();
  }
}
function mh() {
  Ri || (Ri = hh.then(Eh));
}
function _h(e) {
  oe(e) ? ur.push(...e) : zn && e.id === -1 ? zn.splice(er + 1, 0, e) : e.flags & 1 || (ur.push(e), e.flags |= 1), mh();
}
function vc(e, t, n = cn + 1) {
  for (w.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < pt.length; n++) {
    const o = pt[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || w.NODE_ENV !== "production" && _u(t, o))
        continue;
      pt.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function gh(e) {
  if (ur.length) {
    const t = [...new Set(ur)].sort(
      (n, o) => ps(n) - ps(o)
    );
    if (ur.length = 0, zn) {
      zn.push(...t);
      return;
    }
    for (zn = t, w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), er = 0; er < zn.length; er++) {
      const n = zn[er];
      w.NODE_ENV !== "production" && _u(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    zn = null, er = 0;
  }
}
const ps = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Eh(e) {
  w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = w.NODE_ENV !== "production" ? (n) => _u(e, n) : Ze;
  try {
    for (cn = 0; cn < pt.length; cn++) {
      const n = pt[cn];
      if (n && !(n.flags & 8)) {
        if (w.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Tr(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; cn < pt.length; cn++) {
      const n = pt[cn];
      n && (n.flags &= -2);
    }
    cn = -1, pt.length = 0, gh(e), Ri = null, (pt.length || ur.length) && Eh(e);
  }
}
function _u(e, t) {
  const n = e.get(t) || 0;
  if (n > fv) {
    const o = t.i, r = o && Ou(o.type);
    return Rs(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let zt = !1;
const ui = /* @__PURE__ */ new Map();
w.NODE_ENV !== "production" && (Ds().__VUE_HMR_RUNTIME__ = {
  createRecord: $a(vh),
  rerender: $a(mv),
  reload: $a(_v)
});
const Po = /* @__PURE__ */ new Map();
function pv(e) {
  const t = e.type.__hmrId;
  let n = Po.get(t);
  n || (vh(t, e.type), n = Po.get(t)), n.instances.add(e);
}
function hv(e) {
  Po.get(e.type.__hmrId).instances.delete(e);
}
function vh(e, t) {
  return Po.has(e) ? !1 : (Po.set(e, {
    initialDef: Ii(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ii(e) {
  return cm(e) ? e.__vccOpts : e;
}
function mv(e, t) {
  const n = Po.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ii(o.type).render = t), o.renderCache = [], zt = !0, o.update(), zt = !1;
  }));
}
function _v(e, t) {
  const n = Po.get(e);
  if (!n) return;
  t = Ii(t), yc(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const s = o[r], i = Ii(s.type);
    let a = ui.get(i);
    a || (i !== n.initialDef && yc(i, t), ui.set(i, a = /* @__PURE__ */ new Set())), a.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (a.add(s), s.ceReload(t.styles), a.delete(s)) : s.parent ? ea(() => {
      zt = !0, s.parent.update(), zt = !1, a.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  _h(() => {
    ui.clear();
  });
}
function yc(e, t) {
  He(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function $a(e) {
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
let dn, zr = [], _l = !1;
function Is(e, ...t) {
  dn ? dn.emit(e, ...t) : _l || zr.push({ event: e, args: t });
}
function yh(e, t) {
  var n, o;
  dn = e, dn ? (dn.enabled = !0, zr.forEach(({ event: r, args: s }) => dn.emit(r, ...s)), zr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    yh(s, t);
  }), setTimeout(() => {
    dn || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, _l = !0, zr = []);
  }, 3e3)) : (_l = !0, zr = []);
}
function gv(e, t) {
  Is("app:init", e, t, {
    Fragment: De,
    Text: ks,
    Comment: Ye,
    Static: fi
  });
}
function Ev(e) {
  Is("app:unmount", e);
}
const vv = /* @__PURE__ */ gu(
  "component:added"
  /* COMPONENT_ADDED */
), bh = /* @__PURE__ */ gu(
  "component:updated"
  /* COMPONENT_UPDATED */
), yv = /* @__PURE__ */ gu(
  "component:removed"
  /* COMPONENT_REMOVED */
), bv = (e) => {
  dn && typeof dn.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !dn.cleanupBuffer(e) && yv(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gu(e) {
  return (t) => {
    Is(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const wv = /* @__PURE__ */ wh(
  "perf:start"
  /* PERFORMANCE_START */
), Ov = /* @__PURE__ */ wh(
  "perf:end"
  /* PERFORMANCE_END */
);
function wh(e) {
  return (t, n, o) => {
    Is(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Av(e, t, n) {
  Is(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let We = null, Oh = null;
function $i(e) {
  const t = We;
  return We = e, Oh = e && e.type.__scopeId || null, t;
}
function Ot(e, t = We, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Lc(-1);
    const s = $i(t);
    let i;
    try {
      i = e(...r);
    } finally {
      $i(s), o._d && Lc(1);
    }
    return w.NODE_ENV !== "production" && bh(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Ah(e) {
  fE(e) && B("Do not use built-in directive ids as custom directive id: " + e);
}
function Zn(e, t) {
  if (We === null)
    return w.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), e;
  const n = aa(We), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, i, a, l = we] = t[r];
    s && (ae(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && In(i), o.push({
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
function po(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[o];
    l && (Jt(), en(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Qt());
  }
}
const Nh = Symbol("_vte"), Sh = (e) => e.__isTeleport, Do = (e) => e && (e.disabled || e.disabled === ""), bc = (e) => e && (e.defer || e.defer === ""), wc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Oc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, gl = (e, t) => {
  const n = e && e.to;
  if (Fe(n))
    if (t) {
      const o = t(n);
      return w.NODE_ENV !== "production" && !o && !Do(e) && B(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), o;
    } else
      return w.NODE_ENV !== "production" && B(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return w.NODE_ENV !== "production" && !n && !Do(e) && B(`Invalid Teleport target: ${n}`), n;
}, Th = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, o, r, s, i, a, l, f) {
    const {
      mc: u,
      pc: c,
      pbc: d,
      o: { insert: p, querySelector: h, createText: m, createComment: g }
    } = f, v = Do(t.props);
    let { shapeFlag: O, children: y, dynamicChildren: R } = t;
    if (w.NODE_ENV !== "production" && zt && (l = !1, R = null), e == null) {
      const N = t.el = w.NODE_ENV !== "production" ? g("teleport start") : m(""), C = t.anchor = w.NODE_ENV !== "production" ? g("teleport end") : m("");
      p(N, n, o), p(C, n, o);
      const S = (P, I) => {
        O & 16 && (r && r.isCE && (r.ce._teleportTarget = P), u(
          y,
          P,
          I,
          r,
          s,
          i,
          a,
          l
        ));
      }, V = () => {
        const P = t.target = gl(t.props, h), I = Ch(P, t, m, p);
        P ? (i !== "svg" && wc(P) ? i = "svg" : i !== "mathml" && Oc(P) && (i = "mathml"), v || (S(P, I), ci(t, !1))) : w.NODE_ENV !== "production" && !v && B(
          "Invalid Teleport target on mount:",
          P,
          `(${typeof P})`
        );
      };
      v && (S(n, C), ci(t, !0)), bc(t.props) ? (t.el.__isMounted = !1, dt(() => {
        V(), delete t.el.__isMounted;
      }, s)) : V();
    } else {
      if (bc(t.props) && e.el.__isMounted === !1) {
        dt(() => {
          Th.process(
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
      const N = t.anchor = e.anchor, C = t.target = e.target, S = t.targetAnchor = e.targetAnchor, V = Do(e.props), P = V ? n : C, I = V ? N : S;
      if (i === "svg" || wc(C) ? i = "svg" : (i === "mathml" || Oc(C)) && (i = "mathml"), R ? (d(
        e.dynamicChildren,
        R,
        P,
        r,
        s,
        i,
        a
      ), ts(e, t, w.NODE_ENV === "production")) : l || c(
        e,
        t,
        P,
        I,
        r,
        s,
        i,
        a,
        !1
      ), v)
        V ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Gs(
          t,
          n,
          N,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = t.target = gl(
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
          C,
          `(${typeof C})`
        );
      } else V && Gs(
        t,
        C,
        S,
        f,
        1
      );
      ci(t, v);
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
      const p = s || !Do(d);
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
  hydrate: Nv
};
function Gs(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: f, props: u } = e, c = s === 2;
  if (c && o(i, t, n), (!c || Do(u)) && l & 16)
    for (let d = 0; d < f.length; d++)
      r(
        f[d],
        t,
        n,
        2
      );
  c && o(a, t, n);
}
function Nv(e, t, n, o, r, s, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: f, createText: u }
}, c) {
  const d = t.target = gl(
    t.props,
    l
  );
  if (d) {
    const p = Do(t.props), h = d._lpa || d.firstChild;
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
        t.targetAnchor || Ch(d, t, u, f), c(
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
const ta = Th;
function ci(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let o, r;
    for (t ? (o = e.el, r = e.anchor) : (o = e.targetStart, r = e.targetAnchor); o && o !== r; )
      o.nodeType === 1 && o.setAttribute("data-v-owner", n.uid), o = o.nextSibling;
    n.ut();
  }
}
function Ch(e, t, n, o) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Nh] = s, e && (o(r, e), o(s, e)), s;
}
const qn = Symbol("_leaveCb"), Ys = Symbol("_enterCb");
function Sv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Un(() => {
    e.isMounted = !0;
  }), Lh(() => {
    e.isUnmounting = !0;
  }), e;
}
const $t = [Function, Array], Dh = {
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
}, xh = (e) => {
  const t = e.subTree;
  return t.component ? xh(t.component) : t;
}, Tv = {
  name: "BaseTransition",
  props: Dh,
  setup(e, { slots: t }) {
    const n = On(), o = Sv();
    return () => {
      const r = t.default && $h(t.default(), !0);
      if (!r || !r.length)
        return;
      const s = Rh(r), i = fe(e), { mode: a } = i;
      if (w.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && B(`invalid <transition> mode: ${a}`), o.isLeaving)
        return ka(s);
      const l = Ac(s);
      if (!l)
        return ka(s);
      let f = El(
        l,
        i,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => f = c
      );
      l.type !== Ye && hs(l, f);
      let u = n.subTree && Ac(n.subTree);
      if (u && u.type !== Ye && !bo(l, u) && xh(n).type !== Ye) {
        let c = El(
          u,
          i,
          o,
          n
        );
        if (hs(u, c), a === "out-in" && l.type !== Ye)
          return o.isLeaving = !0, c.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, u = void 0;
          }, ka(s);
        a === "in-out" && l.type !== Ye ? c.delayLeave = (d, p, h) => {
          const m = Ih(
            o,
            u
          );
          m[String(u.key)] = u, d[qn] = () => {
            p(), d[qn] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            h(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return s;
    };
  }
};
function Rh(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const o of e)
      if (o.type !== Ye) {
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
function Ih(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function El(e, t, n, o, r) {
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
    onAppear: v,
    onAfterAppear: O,
    onAppearCancelled: y
  } = t, R = String(e.key), N = Ih(n, e), C = (P, I) => {
    P && en(
      P,
      o,
      9,
      I
    );
  }, S = (P, I) => {
    const $ = I[1];
    C(P, I), oe(P) ? P.every((D) => D.length <= 1) && $() : P.length <= 1 && $();
  }, V = {
    mode: i,
    persisted: a,
    beforeEnter(P) {
      let I = l;
      if (!n.isMounted)
        if (s)
          I = g || l;
        else
          return;
      P[qn] && P[qn](
        !0
        /* cancelled */
      );
      const $ = N[R];
      $ && bo(e, $) && $.el[qn] && $.el[qn](), C(I, [P]);
    },
    enter(P) {
      let I = f, $ = u, D = c;
      if (!n.isMounted)
        if (s)
          I = v || f, $ = O || u, D = y || c;
        else
          return;
      let q = !1;
      const ue = P[Ys] = (he) => {
        q || (q = !0, he ? C(D, [P]) : C($, [P]), V.delayedLeave && V.delayedLeave(), P[Ys] = void 0);
      };
      I ? S(I, [P, ue]) : ue();
    },
    leave(P, I) {
      const $ = String(e.key);
      if (P[Ys] && P[Ys](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return I();
      C(d, [P]);
      let D = !1;
      const q = P[qn] = (ue) => {
        D || (D = !0, I(), ue ? C(m, [P]) : C(h, [P]), P[qn] = void 0, N[$] === e && delete N[$]);
      };
      N[$] = e, p ? S(p, [P, q]) : q();
    },
    clone(P) {
      const I = El(
        P,
        t,
        n,
        o,
        r
      );
      return r && r(I), I;
    }
  };
  return V;
}
function ka(e) {
  if ($s(e))
    return e = yn(e), e.children = null, e;
}
function Ac(e) {
  if (!$s(e))
    return Sh(e.type) && e.children ? Rh(e.children) : e;
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
function hs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, hs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $h(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === De ? (i.patchFlag & 128 && r++, o = o.concat(
      $h(i.children, t, a)
    )) : (t || i.type !== Ye) && o.push(a != null ? yn(i, { key: a }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  return ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    He({ name: e.name }, t, { setup: e })
  ) : e;
}
function kh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Ph = /* @__PURE__ */ new WeakSet();
function Dv(e) {
  const t = On(), n = uh(null);
  if (t) {
    const r = t.refs === we ? t.refs = {} : t.refs;
    let s;
    w.NODE_ENV !== "production" && (s = Object.getOwnPropertyDescriptor(r, e)) && !s.configurable ? B(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else w.NODE_ENV !== "production" && B(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const o = w.NODE_ENV !== "production" ? hu(n) : n;
  return w.NODE_ENV !== "production" && Ph.add(o), o;
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
  if (cr(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Zr(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? aa(o.component) : o.el, i = r ? null : s, { i: a, r: l } = e;
  if (w.NODE_ENV !== "production" && !a) {
    B(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === we ? a.refs = {} : a.refs, c = a.setupState, d = fe(c), p = c === we ? () => !1 : (h) => w.NODE_ENV !== "production" && (Ae(d, h) && !Le(d[h]) && B(
    `Template ref "${h}" used on a non-ref value. It will not work in the production build.`
  ), Ph.has(d[h])) ? !1 : Ae(d, h);
  if (f != null && f !== l && (Fe(f) ? (u[f] = null, p(f) && (c[f] = null)) : Le(f) && (f.value = null)), ae(l))
    Tr(l, a, 12, [i, u]);
  else {
    const h = Fe(l), m = Le(l);
    if (h || m) {
      const g = () => {
        if (e.f) {
          const v = h ? p(l) ? c[l] : u[l] : l.value;
          r ? oe(v) && au(v, s) : oe(v) ? v.includes(s) || v.push(s) : h ? (u[l] = [s], p(l) && (c[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value));
        } else h ? (u[l] = i, p(l) && (c[l] = i)) : m ? (l.value = i, e.k && (u[e.k] = i)) : w.NODE_ENV !== "production" && B("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (g.id = -1, dt(g, n)) : g();
    } else w.NODE_ENV !== "production" && B("Invalid template ref type:", l, `(${typeof l})`);
  }
}
Ds().requestIdleCallback;
Ds().cancelIdleCallback;
const cr = (e) => !!e.type.__asyncLoader, $s = (e) => e.type.__isKeepAlive;
function xv(e, t) {
  Vh(e, "a", t);
}
function Rv(e, t) {
  Vh(e, "da", t);
}
function Vh(e, t, n = Je) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (na(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      $s(r.parent.vnode) && Iv(o, t, n, r), r = r.parent;
  }
}
function Iv(e, t, n, o) {
  const r = na(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  oa(() => {
    au(o[t], r);
  }, n);
}
function na(e, t, n = Je, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Jt();
      const a = Ps(n), l = en(t, n, e, i);
      return a(), Qt(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (w.NODE_ENV !== "production") {
    const r = go(mu[e].replace(/ hook$/, ""));
    B(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Bn = (e) => (t, n = Je) => {
  (!_s || e === "sp") && na(e, (...o) => t(...o), n);
}, $v = Bn("bm"), Un = Bn("m"), kv = Bn(
  "bu"
), Pv = Bn("u"), Lh = Bn(
  "bum"
), oa = Bn("um"), Vv = Bn(
  "sp"
), Lv = Bn("rtg"), Mv = Bn("rtc");
function Fv(e, t = Je) {
  na("ec", e, t);
}
const vl = "components", Bv = "directives";
function Ln(e, t) {
  return Mh(vl, e, !0, t) || e;
}
const Uv = Symbol.for("v-ndc");
function jv(e) {
  return Mh(Bv, e);
}
function Mh(e, t, n = !0, o = !1) {
  const r = We || Je;
  if (r) {
    const s = r.type;
    if (e === vl) {
      const a = Ou(
        s,
        !1
      );
      if (a && (a === t || a === ut(t) || a === ko(ut(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Nc(r[e] || s[e], t) || // global registration
      Nc(r.appContext[e], t)
    );
    if (!i && o)
      return s;
    if (w.NODE_ENV !== "production" && n && !i) {
      const a = e === vl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      B(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else w.NODE_ENV !== "production" && B(
    `resolve${ko(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Nc(e, t) {
  return e && (e[t] || e[ut(t)] || e[ko(ut(t))]);
}
function Vt(e, t, n, o) {
  let r;
  const s = n, i = oe(e);
  if (i || Fe(e)) {
    const a = i && Yt(e);
    let l = !1, f = !1;
    a && (l = !mt(e), f = vn(e), e = Ji(e)), r = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(
        l ? f ? Di(st(e[u])) : st(e[u]) : e[u],
        u,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    w.NODE_ENV !== "production" && !Number.isInteger(e) && B(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let a = 0; a < e; a++)
      r[a] = t(a + 1, a, void 0, s);
  } else if (Se(e))
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
function Ee(e, t, n = {}, o, r) {
  if (We.ce || We.parent && cr(We.parent) && We.parent.ce)
    return t !== "default" && (n.name = t), J(), St(
      De,
      null,
      [Ne("slot", n, o && o())],
      64
    );
  let s = e[t];
  w.NODE_ENV !== "production" && s && s.length > 1 && (B(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), J();
  const i = s && Fh(s(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = St(
    De,
    {
      key: (a && !Xt(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && o ? "_fb" : "")
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Fh(e) {
  return e.some((t) => Vo(t) ? !(t.type === Ye || t.type === De && !Fh(t.children)) : !0) ? e : null;
}
const yl = (e) => e ? lm(e) ? aa(e) : yl(e.parent) : null, xo = (
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
    $parent: (e) => yl(e.parent),
    $root: (e) => yl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => jh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ea(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = dr.bind(e.proxy)),
    $watch: (e) => wy.bind(e)
  })
), Eu = (e) => e === "_" || e === "$", Pa = (e, t) => e !== we && !e.__isScriptSetup && Ae(e, t), Bh = {
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
        if (Pa(o, t))
          return i[t] = 1, o[t];
        if (r !== we && Ae(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Ae(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== we && Ae(n, t))
          return i[t] = 4, n[t];
        bl && (i[t] = 0);
      }
    }
    const u = xo[t];
    let c, d;
    if (u)
      return t === "$attrs" ? (Qe(e.attrs, "get", ""), w.NODE_ENV !== "production" && Vi()) : w.NODE_ENV !== "production" && t === "$slots" && Qe(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== we && Ae(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, Ae(d, t)
    )
      return d[t];
    w.NODE_ENV !== "production" && We && (!Fe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== we && Eu(t[0]) && Ae(r, t) ? B(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === We && B(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Pa(r, t) ? (r[t] = n, !0) : w.NODE_ENV !== "production" && r.__isScriptSetup && Ae(r, t) ? (B(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== we && Ae(o, t) ? (o[t] = n, !0) : Ae(e.props, t) ? (w.NODE_ENV !== "production" && B(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (w.NODE_ENV !== "production" && B(
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
    return !!n[i] || e !== we && Ae(e, i) || Pa(t, i) || (a = s[0]) && Ae(a, i) || Ae(o, i) || Ae(xo, i) || Ae(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
w.NODE_ENV !== "production" && (Bh.ownKeys = (e) => (B(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Hv(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(xo).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => xo[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ze
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
      set: Ze
    });
  });
}
function Wv(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(fe(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Eu(o[0])) {
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
        set: Ze
      });
    }
  });
}
function Sc(e) {
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
let bl = !0;
function qv(e) {
  const t = jh(e), n = e.proxy, o = e.ctx;
  bl = !1, t.beforeCreate && Tc(t.beforeCreate, e, "bc");
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
    beforeDestroy: v,
    beforeUnmount: O,
    destroyed: y,
    unmounted: R,
    render: N,
    renderTracked: C,
    renderTriggered: S,
    errorCaptured: V,
    serverPrefetch: P,
    // public API
    expose: I,
    inheritAttrs: $,
    // assets
    components: D,
    directives: q,
    filters: ue
  } = t, he = w.NODE_ENV !== "production" ? zv() : null;
  if (w.NODE_ENV !== "production") {
    const [H] = e.propsOptions;
    if (H)
      for (const Z in H)
        he("Props", Z);
  }
  if (f && Gv(f, o, he), i)
    for (const H in i) {
      const Z = i[H];
      ae(Z) ? (w.NODE_ENV !== "production" ? Object.defineProperty(o, H, {
        value: Z.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[H] = Z.bind(n), w.NODE_ENV !== "production" && he("Methods", H)) : w.NODE_ENV !== "production" && B(
        `Method "${H}" has type "${typeof Z}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    w.NODE_ENV !== "production" && !ae(r) && B(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const H = r.call(n, n);
    if (w.NODE_ENV !== "production" && lu(H) && B(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Se(H))
      w.NODE_ENV !== "production" && B("data() should return an object.");
    else if (e.data = Sr(H), w.NODE_ENV !== "production")
      for (const Z in H)
        he("Data", Z), Eu(Z[0]) || Object.defineProperty(o, Z, {
          configurable: !0,
          enumerable: !0,
          get: () => H[Z],
          set: Ze
        });
  }
  if (bl = !0, s)
    for (const H in s) {
      const Z = s[H], le = ae(Z) ? Z.bind(n, n) : ae(Z.get) ? Z.get.bind(n, n) : Ze;
      w.NODE_ENV !== "production" && le === Ze && B(`Computed property "${H}" has no getter.`);
      const ze = !ae(Z) && ae(Z.set) ? Z.set.bind(n) : w.NODE_ENV !== "production" ? () => {
        B(
          `Write operation failed: computed property "${H}" is readonly.`
        );
      } : Ze, qe = Oe({
        get: le,
        set: ze
      });
      Object.defineProperty(o, H, {
        enumerable: !0,
        configurable: !0,
        get: () => qe.value,
        set: (Pe) => qe.value = Pe
      }), w.NODE_ENV !== "production" && he("Computed", H);
    }
  if (a)
    for (const H in a)
      Uh(a[H], o, n, H);
  if (l) {
    const H = ae(l) ? l.call(n) : l;
    Reflect.ownKeys(H).forEach((Z) => {
      es(Z, H[Z]);
    });
  }
  u && Tc(u, e, "c");
  function Q(H, Z) {
    oe(Z) ? Z.forEach((le) => H(le.bind(n))) : Z && H(Z.bind(n));
  }
  if (Q($v, c), Q(Un, d), Q(kv, p), Q(Pv, h), Q(xv, m), Q(Rv, g), Q(Fv, V), Q(Mv, C), Q(Lv, S), Q(Lh, O), Q(oa, R), Q(Vv, P), oe(I))
    if (I.length) {
      const H = e.exposed || (e.exposed = {});
      I.forEach((Z) => {
        Object.defineProperty(H, Z, {
          get: () => n[Z],
          set: (le) => n[Z] = le
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === Ze && (e.render = N), $ != null && (e.inheritAttrs = $), D && (e.components = D), q && (e.directives = q), P && kh(e);
}
function Gv(e, t, n = Ze) {
  oe(e) && (e = wl(e));
  for (const o in e) {
    const r = e[o];
    let s;
    Se(r) ? "default" in r ? s = Lt(
      r.from || o,
      r.default,
      !0
    ) : s = Lt(r.from || o) : s = Lt(r), Le(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, w.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Tc(e, t, n) {
  en(
    oe(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Uh(e, t, n, o) {
  let r = o.includes(".") ? Zh(n, o) : () => n[o];
  if (Fe(e)) {
    const s = t[e];
    ae(s) ? $n(r, s) : w.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e}"`, s);
  } else if (ae(e))
    $n(r, e.bind(n));
  else if (Se(e))
    if (oe(e))
      e.forEach((s) => Uh(s, t, n, o));
    else {
      const s = ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      ae(s) ? $n(r, s, e) : w.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e.handler}"`, s);
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
    (f) => ki(l, f, i, !0)
  ), ki(l, t, i)), Se(t) && s.set(t, l), l;
}
function ki(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && ki(e, s, n, !0), r && r.forEach(
    (i) => ki(e, i, n, !0)
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
  data: Cc,
  props: Dc,
  emits: Dc,
  // objects
  methods: qr,
  computed: qr,
  // lifecycle
  beforeCreate: ft,
  created: ft,
  beforeMount: ft,
  mounted: ft,
  beforeUpdate: ft,
  updated: ft,
  beforeDestroy: ft,
  beforeUnmount: ft,
  destroyed: ft,
  unmounted: ft,
  activated: ft,
  deactivated: ft,
  errorCaptured: ft,
  serverPrefetch: ft,
  // assets
  components: qr,
  directives: qr,
  // watch
  watch: Jv,
  // provide / inject
  provide: Cc,
  inject: Xv
};
function Cc(e, t) {
  return t ? e ? function() {
    return He(
      ae(e) ? e.call(this, this) : e,
      ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Xv(e, t) {
  return qr(wl(e), wl(t));
}
function wl(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ft(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function qr(e, t) {
  return e ? He(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Dc(e, t) {
  return e ? oe(e) && oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : He(
    /* @__PURE__ */ Object.create(null),
    Sc(e),
    Sc(t ?? {})
  ) : t;
}
function Jv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = He(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ft(e[o], t[o]);
  return n;
}
function Hh() {
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
    ae(o) || (o = He({}, o)), r != null && !Se(r) && (w.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), r = null);
    const s = Hh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const f = s.app = {
      _uid: Qv++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Uc,
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
        return w.NODE_ENV !== "production" && Tl(u, s.config), c ? (w.NODE_ENV !== "production" && s.components[u] && B(`Component "${u}" has already been registered in target app.`), s.components[u] = c, f) : s.components[u];
      },
      directive(u, c) {
        return w.NODE_ENV !== "production" && Ah(u), c ? (w.NODE_ENV !== "production" && s.directives[u] && B(`Directive "${u}" has already been registered in target app.`), s.directives[u] = c, f) : s.directives[u];
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
          const p = f._ceVNode || Ne(o, r);
          return p.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), w.NODE_ENV !== "production" && (s.reload = () => {
            const h = yn(p);
            h.el = null, e(h, u, d);
          }), e(p, u, d), l = !0, f._container = u, u.__vue_app__ = f, w.NODE_ENV !== "production" && (f._instance = p.component, gv(f, Uc)), aa(p.component);
        }
      },
      onUnmount(u) {
        w.NODE_ENV !== "production" && typeof u != "function" && B(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        l ? (en(
          a,
          f._instance,
          16
        ), e(null, f._container), w.NODE_ENV !== "production" && (f._instance = null, Ev(f)), delete f._container.__vue_app__) : w.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
      },
      provide(u, c) {
        return w.NODE_ENV !== "production" && u in s.provides && (Ae(s.provides, u) ? B(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : B(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[u] = c, f;
      },
      runWithContext(u) {
        const c = Ro;
        Ro = f;
        try {
          return u();
        } finally {
          Ro = c;
        }
      }
    };
    return f;
  };
}
let Ro = null;
function es(e, t) {
  if (!Je)
    w.NODE_ENV !== "production" && B("provide() can only be used inside setup().");
  else {
    let n = Je.provides;
    const o = Je.parent && Je.parent.provides;
    o === n && (n = Je.provides = Object.create(o)), n[e] = t;
  }
}
function Lt(e, t, n = !1) {
  const o = Je || We;
  if (o || Ro) {
    let r = Ro ? Ro._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ae(t) ? t.call(o && o.proxy) : t;
    w.NODE_ENV !== "production" && B(`injection "${String(e)}" not found.`);
  } else w.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
function ey() {
  return !!(Je || We || Ro);
}
const Kh = {}, Wh = () => Object.create(Kh), zh = (e) => Object.getPrototypeOf(e) === Kh;
function ty(e, t, n, o = !1) {
  const r = {}, s = Wh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qh(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  w.NODE_ENV !== "production" && Yh(t || {}, r, e), n ? e.props = o ? r : lh(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
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
  } = e, a = fe(r), [l] = e.propsOptions;
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
        if (ia(e.emitsOptions, d))
          continue;
        const p = t[d];
        if (l)
          if (Ae(s, d))
            p !== s[d] && (s[d] = p, f = !0);
          else {
            const h = ut(d);
            r[h] = Ol(
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
    qh(e, t, r, s) && (f = !0);
    let u;
    for (const c in a)
      (!t || // for camelCase
      !Ae(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = En(c)) === c || !Ae(t, u))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[c] = Ol(
        l,
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
  f && fn(e.attrs, "set", ""), w.NODE_ENV !== "production" && Yh(t || {}, r, e);
}
function qh(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (Xr(l))
        continue;
      const f = t[l];
      let u;
      r && Ae(r, u = ut(l)) ? !s || !s.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : ia(e.emitsOptions, l) || (!(l in o) || f !== o[l]) && (o[l] = f, i = !0);
    }
  if (s) {
    const l = fe(n), f = a || we;
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      n[c] = Ol(
        r,
        l,
        c,
        f[c],
        e,
        !Ae(f, c)
      );
    }
  }
  return i;
}
function Ol(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const a = Ae(i, "default");
    if (a && o === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ae(l)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const u = Ps(r);
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
    ] && (o === "" || o === En(n)) && (o = !0));
  }
  return o;
}
const ry = /* @__PURE__ */ new WeakMap();
function Gh(e, t, n = !1) {
  const o = n ? ry : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, a = [];
  let l = !1;
  if (!ae(e)) {
    const u = (c) => {
      l = !0;
      const [d, p] = Gh(c, t, !0);
      He(i, d), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return Se(e) && o.set(e, lr), lr;
  if (oe(s))
    for (let u = 0; u < s.length; u++) {
      w.NODE_ENV !== "production" && !Fe(s[u]) && B("props must be strings when using array syntax.", s[u]);
      const c = ut(s[u]);
      xc(c) && (i[c] = we);
    }
  else if (s) {
    w.NODE_ENV !== "production" && !Se(s) && B("invalid props options", s);
    for (const u in s) {
      const c = ut(u);
      if (xc(c)) {
        const d = s[u], p = i[c] = oe(d) || ae(d) ? { type: d } : He({}, d), h = p.type;
        let m = !1, g = !0;
        if (oe(h))
          for (let v = 0; v < h.length; ++v) {
            const O = h[v], y = ae(O) && O.name;
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
        ] = g, (m || Ae(p, "default")) && a.push(c);
      }
    }
  }
  const f = [i, a];
  return Se(e) && o.set(e, f), f;
}
function xc(e) {
  return e[0] !== "$" && !Xr(e) ? !0 : (w.NODE_ENV !== "production" && B(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function sy(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Yh(e, t, n) {
  const o = fe(t), r = n.propsOptions[0], s = Object.keys(e).map((i) => ut(i));
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
const ay = /* @__PURE__ */ Fn(
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
  } else o === "Object" ? n = Se(e) : o === "Array" ? n = oe(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function uy(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ko).join(" | ")}`;
  const r = n[0], s = uu(t), i = Rc(t, r), a = Rc(t, s);
  return n.length === 1 && Ic(r) && !cy(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Ic(s) && (o += `with value ${a}.`), o;
}
function Rc(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ic(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function cy(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const vu = (e) => e[0] === "_" || e === "$stable", yu = (e) => oe(e) ? e.map(Wt) : [Wt(e)], fy = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ot((...r) => (w.NODE_ENV !== "production" && Je && !(n === null && We) && !(n && n.root !== Je.root) && B(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), yu(t(...r))), n);
  return o._c = !1, o;
}, Xh = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (vu(r)) continue;
    const s = e[r];
    if (ae(s))
      t[r] = fy(r, s, o);
    else if (s != null) {
      w.NODE_ENV !== "production" && B(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = yu(s);
      t[r] = () => i;
    }
  }
}, Jh = (e, t) => {
  w.NODE_ENV !== "production" && !$s(e.vnode) && B(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = yu(t);
  e.slots.default = () => n;
}, Al = (e, t, n) => {
  for (const o in t)
    (n || !vu(o)) && (e[o] = t[o]);
}, dy = (e, t, n) => {
  const o = e.slots = Wh();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && us(o, "__", r, !0);
    const s = t._;
    s ? (Al(o, t, n), n && us(o, "_", s, !0)) : Xh(t, o);
  } else t && Jh(e, t);
}, py = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = we;
  if (o.shapeFlag & 32) {
    const a = t._;
    a ? w.NODE_ENV !== "production" && zt ? (Al(r, t, n), fn(e, "set", "$slots")) : n && a === 1 ? s = !1 : Al(r, t, n) : (s = !t.$stable, Xh(t, r)), i = t;
  } else t && (Jh(e, t), i = { default: 1 });
  if (s)
    for (const a in r)
      !vu(a) && i[a] == null && delete r[a];
};
let Mr, Xn;
function qo(e, t) {
  e.appContext.config.performance && Pi() && Xn.mark(`vue-${t}-${e.uid}`), w.NODE_ENV !== "production" && wv(e, t, Pi() ? Xn.now() : Date.now());
}
function Go(e, t) {
  if (e.appContext.config.performance && Pi()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Xn.mark(o), Xn.measure(
      `<${la(e, e.type)}> ${t}`,
      n,
      o
    ), Xn.clearMarks(n), Xn.clearMarks(o);
  }
  w.NODE_ENV !== "production" && Ov(e, t, Pi() ? Xn.now() : Date.now());
}
function Pi() {
  return Mr !== void 0 || (typeof window < "u" && window.performance ? (Mr = !0, Xn = window.performance) : Mr = !1), Mr;
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
const dt = Dy;
function my(e) {
  return _y(e);
}
function _y(e, t) {
  hy();
  const n = Ds();
  n.__VUE__ = !0, w.NODE_ENV !== "production" && yh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: p = Ze,
    insertStaticContent: h
  } = e, m = (_, E, A, L = null, k = null, M = null, Y = void 0, K = null, W = w.NODE_ENV !== "production" && zt ? !1 : !!E.dynamicChildren) => {
    if (_ === E)
      return;
    _ && !bo(_, E) && (L = G(_), Ue(_, k, M, !0), _ = null), E.patchFlag === -2 && (W = !1, E.dynamicChildren = null);
    const { type: j, ref: se, shapeFlag: z } = E;
    switch (j) {
      case ks:
        g(_, E, A, L);
        break;
      case Ye:
        v(_, E, A, L);
        break;
      case fi:
        _ == null ? O(E, A, L, Y) : w.NODE_ENV !== "production" && y(_, E, A, Y);
        break;
      case De:
        q(
          _,
          E,
          A,
          L,
          k,
          M,
          Y,
          K,
          W
        );
        break;
      default:
        z & 1 ? C(
          _,
          E,
          A,
          L,
          k,
          M,
          Y,
          K,
          W
        ) : z & 6 ? ue(
          _,
          E,
          A,
          L,
          k,
          M,
          Y,
          K,
          W
        ) : z & 64 || z & 128 ? j.process(
          _,
          E,
          A,
          L,
          k,
          M,
          Y,
          K,
          W,
          _e
        ) : w.NODE_ENV !== "production" && B("Invalid VNode type:", j, `(${typeof j})`);
    }
    se != null && k ? Zr(se, _ && _.ref, M, E || _, !E) : se == null && _ && _.ref != null && Zr(_.ref, null, M, _, !0);
  }, g = (_, E, A, L) => {
    if (_ == null)
      o(
        E.el = a(E.children),
        A,
        L
      );
    else {
      const k = E.el = _.el;
      E.children !== _.children && f(k, E.children);
    }
  }, v = (_, E, A, L) => {
    _ == null ? o(
      E.el = l(E.children || ""),
      A,
      L
    ) : E.el = _.el;
  }, O = (_, E, A, L) => {
    [_.el, _.anchor] = h(
      _.children,
      E,
      A,
      L,
      _.el,
      _.anchor
    );
  }, y = (_, E, A, L) => {
    if (E.children !== _.children) {
      const k = d(_.anchor);
      N(_), [E.el, E.anchor] = h(
        E.children,
        A,
        k,
        L
      );
    } else
      E.el = _.el, E.anchor = _.anchor;
  }, R = ({ el: _, anchor: E }, A, L) => {
    let k;
    for (; _ && _ !== E; )
      k = d(_), o(_, A, L), _ = k;
    o(E, A, L);
  }, N = ({ el: _, anchor: E }) => {
    let A;
    for (; _ && _ !== E; )
      A = d(_), r(_), _ = A;
    r(E);
  }, C = (_, E, A, L, k, M, Y, K, W) => {
    E.type === "svg" ? Y = "svg" : E.type === "math" && (Y = "mathml"), _ == null ? S(
      E,
      A,
      L,
      k,
      M,
      Y,
      K,
      W
    ) : I(
      _,
      E,
      k,
      M,
      Y,
      K,
      W
    );
  }, S = (_, E, A, L, k, M, Y, K) => {
    let W, j;
    const { props: se, shapeFlag: z, transition: re, dirs: ce } = _;
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
      k,
      Va(_, M),
      Y,
      K
    ), ce && po(_, null, L, "created"), V(W, _, _.scopeId, Y, L), se) {
      for (const xe in se)
        xe !== "value" && !Xr(xe) && s(W, xe, null, se[xe], M, L);
      "value" in se && s(W, "value", null, se.value, M), (j = se.onVnodeBeforeMount) && an(j, L, _);
    }
    w.NODE_ENV !== "production" && (us(W, "__vnode", _, !0), us(W, "__vueParentComponent", L, !0)), ce && po(_, null, L, "beforeMount");
    const ve = gy(k, re);
    ve && re.beforeEnter(W), o(W, E, A), ((j = se && se.onVnodeMounted) || ve || ce) && dt(() => {
      j && an(j, L, _), ve && re.enter(W), ce && po(_, null, L, "mounted");
    }, k);
  }, V = (_, E, A, L, k) => {
    if (A && p(_, A), L)
      for (let M = 0; M < L.length; M++)
        p(_, L[M]);
    if (k) {
      let M = k.subTree;
      if (w.NODE_ENV !== "production" && M.patchFlag > 0 && M.patchFlag & 2048 && (M = bu(M.children) || M), E === M || om(M.type) && (M.ssContent === E || M.ssFallback === E)) {
        const Y = k.vnode;
        V(
          _,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          k.parent
        );
      }
    }
  }, P = (_, E, A, L, k, M, Y, K, W = 0) => {
    for (let j = W; j < _.length; j++) {
      const se = _[j] = K ? Gn(_[j]) : Wt(_[j]);
      m(
        null,
        se,
        E,
        A,
        L,
        k,
        M,
        Y,
        K
      );
    }
  }, I = (_, E, A, L, k, M, Y) => {
    const K = E.el = _.el;
    w.NODE_ENV !== "production" && (K.__vnode = E);
    let { patchFlag: W, dynamicChildren: j, dirs: se } = E;
    W |= _.patchFlag & 16;
    const z = _.props || we, re = E.props || we;
    let ce;
    if (A && ho(A, !1), (ce = re.onVnodeBeforeUpdate) && an(ce, A, E, _), se && po(E, _, A, "beforeUpdate"), A && ho(A, !0), w.NODE_ENV !== "production" && zt && (W = 0, Y = !1, j = null), (z.innerHTML && re.innerHTML == null || z.textContent && re.textContent == null) && u(K, ""), j ? ($(
      _.dynamicChildren,
      j,
      K,
      A,
      L,
      Va(E, k),
      M
    ), w.NODE_ENV !== "production" && ts(_, E)) : Y || le(
      _,
      E,
      K,
      null,
      A,
      L,
      Va(E, k),
      M,
      !1
    ), W > 0) {
      if (W & 16)
        D(K, z, re, A, k);
      else if (W & 2 && z.class !== re.class && s(K, "class", null, re.class, k), W & 4 && s(K, "style", z.style, re.style, k), W & 8) {
        const ve = E.dynamicProps;
        for (let xe = 0; xe < ve.length; xe++) {
          const Ie = ve[xe], vt = z[Ie], yt = re[Ie];
          (yt !== vt || Ie === "value") && s(K, Ie, vt, yt, k, A);
        }
      }
      W & 1 && _.children !== E.children && u(K, E.children);
    } else !Y && j == null && D(K, z, re, A, k);
    ((ce = re.onVnodeUpdated) || se) && dt(() => {
      ce && an(ce, A, E, _), se && po(E, _, A, "updated");
    }, L);
  }, $ = (_, E, A, L, k, M, Y) => {
    for (let K = 0; K < E.length; K++) {
      const W = _[K], j = E[K], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === De || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !bo(W, j) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? c(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      m(
        W,
        j,
        se,
        null,
        L,
        k,
        M,
        Y,
        !0
      );
    }
  }, D = (_, E, A, L, k) => {
    if (E !== A) {
      if (E !== we)
        for (const M in E)
          !Xr(M) && !(M in A) && s(
            _,
            M,
            E[M],
            null,
            k,
            L
          );
      for (const M in A) {
        if (Xr(M)) continue;
        const Y = A[M], K = E[M];
        Y !== K && M !== "value" && s(_, M, K, Y, k, L);
      }
      "value" in A && s(_, "value", E.value, A.value, k);
    }
  }, q = (_, E, A, L, k, M, Y, K, W) => {
    const j = E.el = _ ? _.el : a(""), se = E.anchor = _ ? _.anchor : a("");
    let { patchFlag: z, dynamicChildren: re, slotScopeIds: ce } = E;
    w.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (zt || z & 2048) && (z = 0, W = !1, re = null), ce && (K = K ? K.concat(ce) : ce), _ == null ? (o(j, A, L), o(se, A, L), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      A,
      se,
      k,
      M,
      Y,
      K,
      W
    )) : z > 0 && z & 64 && re && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? ($(
      _.dynamicChildren,
      re,
      A,
      k,
      M,
      Y,
      K
    ), w.NODE_ENV !== "production" ? ts(_, E) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (E.key != null || k && E === k.subTree) && ts(
        _,
        E,
        !0
        /* shallow */
      )
    )) : le(
      _,
      E,
      A,
      se,
      k,
      M,
      Y,
      K,
      W
    );
  }, ue = (_, E, A, L, k, M, Y, K, W) => {
    E.slotScopeIds = K, _ == null ? E.shapeFlag & 512 ? k.ctx.activate(
      E,
      A,
      L,
      Y,
      W
    ) : he(
      E,
      A,
      L,
      k,
      M,
      Y,
      W
    ) : Q(_, E, W);
  }, he = (_, E, A, L, k, M, Y) => {
    const K = _.component = ky(
      _,
      L,
      k
    );
    if (w.NODE_ENV !== "production" && K.type.__hmrId && pv(K), w.NODE_ENV !== "production" && (ai(_), qo(K, "mount")), $s(_) && (K.ctx.renderer = _e), w.NODE_ENV !== "production" && qo(K, "init"), Vy(K, !1, Y), w.NODE_ENV !== "production" && Go(K, "init"), w.NODE_ENV !== "production" && zt && (_.el = null), K.asyncDep) {
      if (k && k.registerDep(K, H, Y), !_.el) {
        const W = K.subTree = Ne(Ye);
        v(null, W, E, A);
      }
    } else
      H(
        K,
        _,
        E,
        A,
        k,
        M,
        Y
      );
    w.NODE_ENV !== "production" && (li(), Go(K, "mount"));
  }, Q = (_, E, A) => {
    const L = E.component = _.component;
    if (Ty(_, E, A))
      if (L.asyncDep && !L.asyncResolved) {
        w.NODE_ENV !== "production" && ai(E), Z(L, E, A), w.NODE_ENV !== "production" && li();
        return;
      } else
        L.next = E, L.update();
    else
      E.el = _.el, L.vnode = E;
  }, H = (_, E, A, L, k, M, Y) => {
    const K = () => {
      if (_.isMounted) {
        let { next: z, bu: re, u: ce, parent: ve, vnode: xe } = _;
        {
          const rn = Qh(_);
          if (rn) {
            z && (z.el = xe.el, Z(_, z, Y)), rn.asyncDep.then(() => {
              _.isUnmounted || K();
            });
            return;
          }
        }
        let Ie = z, vt;
        w.NODE_ENV !== "production" && ai(z || _.vnode), ho(_, !1), z ? (z.el = xe.el, Z(_, z, Y)) : z = xe, re && Zo(re), (vt = z.props && z.props.onVnodeBeforeUpdate) && an(vt, ve, z, xe), ho(_, !0), w.NODE_ENV !== "production" && qo(_, "render");
        const yt = kc(_);
        w.NODE_ENV !== "production" && Go(_, "render");
        const on = _.subTree;
        _.subTree = yt, w.NODE_ENV !== "production" && qo(_, "patch"), m(
          on,
          yt,
          // parent may have changed if it's in a teleport
          c(on.el),
          // anchor may have changed if it's in a fragment
          G(on),
          _,
          k,
          M
        ), w.NODE_ENV !== "production" && Go(_, "patch"), z.el = yt.el, Ie === null && Cy(_, yt.el), ce && dt(ce, k), (vt = z.props && z.props.onVnodeUpdated) && dt(
          () => an(vt, ve, z, xe),
          k
        ), w.NODE_ENV !== "production" && bh(_), w.NODE_ENV !== "production" && li();
      } else {
        let z;
        const { el: re, props: ce } = E, { bm: ve, m: xe, parent: Ie, root: vt, type: yt } = _, on = cr(E);
        ho(_, !1), ve && Zo(ve), !on && (z = ce && ce.onVnodeBeforeMount) && an(z, Ie, E), ho(_, !0);
        {
          vt.ce && // @ts-expect-error _def is private
          vt.ce._def.shadowRoot !== !1 && vt.ce._injectChildStyle(yt), w.NODE_ENV !== "production" && qo(_, "render");
          const rn = _.subTree = kc(_);
          w.NODE_ENV !== "production" && Go(_, "render"), w.NODE_ENV !== "production" && qo(_, "patch"), m(
            null,
            rn,
            A,
            L,
            _,
            k,
            M
          ), w.NODE_ENV !== "production" && Go(_, "patch"), E.el = rn.el;
        }
        if (xe && dt(xe, k), !on && (z = ce && ce.onVnodeMounted)) {
          const rn = E;
          dt(
            () => an(z, Ie, rn),
            k
          );
        }
        (E.shapeFlag & 256 || Ie && cr(Ie.vnode) && Ie.vnode.shapeFlag & 256) && _.a && dt(_.a, k), _.isMounted = !0, w.NODE_ENV !== "production" && vv(_), E = A = L = null;
      }
    };
    _.scope.on();
    const W = _.effect = new zp(K);
    _.scope.off();
    const j = _.update = W.run.bind(W), se = _.job = W.runIfDirty.bind(W);
    se.i = _, se.id = _.uid, W.scheduler = () => ea(se), ho(_, !0), w.NODE_ENV !== "production" && (W.onTrack = _.rtc ? (z) => Zo(_.rtc, z) : void 0, W.onTrigger = _.rtg ? (z) => Zo(_.rtg, z) : void 0), j();
  }, Z = (_, E, A) => {
    E.component = _;
    const L = _.vnode.props;
    _.vnode = E, _.next = null, oy(_, E.props, L, A), py(_, E.children, A), Jt(), vc(_), Qt();
  }, le = (_, E, A, L, k, M, Y, K, W = !1) => {
    const j = _ && _.children, se = _ ? _.shapeFlag : 0, z = E.children, { patchFlag: re, shapeFlag: ce } = E;
    if (re > 0) {
      if (re & 128) {
        qe(
          j,
          z,
          A,
          L,
          k,
          M,
          Y,
          K,
          W
        );
        return;
      } else if (re & 256) {
        ze(
          j,
          z,
          A,
          L,
          k,
          M,
          Y,
          K,
          W
        );
        return;
      }
    }
    ce & 8 ? (se & 16 && x(j, k, M), z !== j && u(A, z)) : se & 16 ? ce & 16 ? qe(
      j,
      z,
      A,
      L,
      k,
      M,
      Y,
      K,
      W
    ) : x(j, k, M, !0) : (se & 8 && u(A, ""), ce & 16 && P(
      z,
      A,
      L,
      k,
      M,
      Y,
      K,
      W
    ));
  }, ze = (_, E, A, L, k, M, Y, K, W) => {
    _ = _ || lr, E = E || lr;
    const j = _.length, se = E.length, z = Math.min(j, se);
    let re;
    for (re = 0; re < z; re++) {
      const ce = E[re] = W ? Gn(E[re]) : Wt(E[re]);
      m(
        _[re],
        ce,
        A,
        null,
        k,
        M,
        Y,
        K,
        W
      );
    }
    j > se ? x(
      _,
      k,
      M,
      !0,
      !1,
      z
    ) : P(
      E,
      A,
      L,
      k,
      M,
      Y,
      K,
      W,
      z
    );
  }, qe = (_, E, A, L, k, M, Y, K, W) => {
    let j = 0;
    const se = E.length;
    let z = _.length - 1, re = se - 1;
    for (; j <= z && j <= re; ) {
      const ce = _[j], ve = E[j] = W ? Gn(E[j]) : Wt(E[j]);
      if (bo(ce, ve))
        m(
          ce,
          ve,
          A,
          null,
          k,
          M,
          Y,
          K,
          W
        );
      else
        break;
      j++;
    }
    for (; j <= z && j <= re; ) {
      const ce = _[z], ve = E[re] = W ? Gn(E[re]) : Wt(E[re]);
      if (bo(ce, ve))
        m(
          ce,
          ve,
          A,
          null,
          k,
          M,
          Y,
          K,
          W
        );
      else
        break;
      z--, re--;
    }
    if (j > z) {
      if (j <= re) {
        const ce = re + 1, ve = ce < se ? E[ce].el : L;
        for (; j <= re; )
          m(
            null,
            E[j] = W ? Gn(E[j]) : Wt(E[j]),
            A,
            ve,
            k,
            M,
            Y,
            K,
            W
          ), j++;
      }
    } else if (j > re)
      for (; j <= z; )
        Ue(_[j], k, M, !0), j++;
    else {
      const ce = j, ve = j, xe = /* @__PURE__ */ new Map();
      for (j = ve; j <= re; j++) {
        const ct = E[j] = W ? Gn(E[j]) : Wt(E[j]);
        ct.key != null && (w.NODE_ENV !== "production" && xe.has(ct.key) && B(
          "Duplicate keys found during update:",
          JSON.stringify(ct.key),
          "Make sure keys are unique."
        ), xe.set(ct.key, j));
      }
      let Ie, vt = 0;
      const yt = re - ve + 1;
      let on = !1, rn = 0;
      const Vr = new Array(yt);
      for (j = 0; j < yt; j++) Vr[j] = 0;
      for (j = ce; j <= z; j++) {
        const ct = _[j];
        if (vt >= yt) {
          Ue(ct, k, M, !0);
          continue;
        }
        let sn;
        if (ct.key != null)
          sn = xe.get(ct.key);
        else
          for (Ie = ve; Ie <= re; Ie++)
            if (Vr[Ie - ve] === 0 && bo(ct, E[Ie])) {
              sn = Ie;
              break;
            }
        sn === void 0 ? Ue(ct, k, M, !0) : (Vr[sn - ve] = j + 1, sn >= rn ? rn = sn : on = !0, m(
          ct,
          E[sn],
          A,
          null,
          k,
          M,
          Y,
          K,
          W
        ), vt++);
      }
      const dc = on ? Ey(Vr) : lr;
      for (Ie = dc.length - 1, j = yt - 1; j >= 0; j--) {
        const ct = ve + j, sn = E[ct], pc = ct + 1 < se ? E[ct + 1].el : L;
        Vr[j] === 0 ? m(
          null,
          sn,
          A,
          pc,
          k,
          M,
          Y,
          K,
          W
        ) : on && (Ie < 0 || j !== dc[Ie] ? Pe(sn, A, pc, 2) : Ie--);
      }
    }
  }, Pe = (_, E, A, L, k = null) => {
    const { el: M, type: Y, transition: K, children: W, shapeFlag: j } = _;
    if (j & 6) {
      Pe(_.component.subTree, E, A, L);
      return;
    }
    if (j & 128) {
      _.suspense.move(E, A, L);
      return;
    }
    if (j & 64) {
      Y.move(_, E, A, _e);
      return;
    }
    if (Y === De) {
      o(M, E, A);
      for (let z = 0; z < W.length; z++)
        Pe(W[z], E, A, L);
      o(_.anchor, E, A);
      return;
    }
    if (Y === fi) {
      R(_, E, A);
      return;
    }
    if (L !== 2 && j & 1 && K)
      if (L === 0)
        K.beforeEnter(M), o(M, E, A), dt(() => K.enter(M), k);
      else {
        const { leave: z, delayLeave: re, afterLeave: ce } = K, ve = () => {
          _.ctx.isUnmounted ? r(M) : o(M, E, A);
        }, xe = () => {
          z(M, () => {
            ve(), ce && ce();
          });
        };
        re ? re(M, ve, xe) : xe();
      }
    else
      o(M, E, A);
  }, Ue = (_, E, A, L = !1, k = !1) => {
    const {
      type: M,
      props: Y,
      ref: K,
      children: W,
      dynamicChildren: j,
      shapeFlag: se,
      patchFlag: z,
      dirs: re,
      cacheIndex: ce
    } = _;
    if (z === -2 && (k = !1), K != null && (Jt(), Zr(K, null, A, _, !0), Qt()), ce != null && (E.renderCache[ce] = void 0), se & 256) {
      E.ctx.deactivate(_);
      return;
    }
    const ve = se & 1 && re, xe = !cr(_);
    let Ie;
    if (xe && (Ie = Y && Y.onVnodeBeforeUnmount) && an(Ie, E, _), se & 6)
      Et(_.component, A, L);
    else {
      if (se & 128) {
        _.suspense.unmount(A, L);
        return;
      }
      ve && po(_, null, E, "beforeUnmount"), se & 64 ? _.type.remove(
        _,
        E,
        A,
        _e,
        L
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== De || z > 0 && z & 64) ? x(
        j,
        E,
        A,
        !1,
        !0
      ) : (M === De && z & 384 || !k && se & 16) && x(W, E, A), L && nt(_);
    }
    (xe && (Ie = Y && Y.onVnodeUnmounted) || ve) && dt(() => {
      Ie && an(Ie, E, _), ve && po(_, null, E, "unmounted");
    }, A);
  }, nt = (_) => {
    const { type: E, el: A, anchor: L, transition: k } = _;
    if (E === De) {
      w.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && k && !k.persisted ? _.children.forEach((Y) => {
        Y.type === Ye ? r(Y.el) : nt(Y);
      }) : rt(A, L);
      return;
    }
    if (E === fi) {
      N(_);
      return;
    }
    const M = () => {
      r(A), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (_.shapeFlag & 1 && k && !k.persisted) {
      const { leave: Y, delayLeave: K } = k, W = () => Y(A, M);
      K ? K(_.el, M, W) : W();
    } else
      M();
  }, rt = (_, E) => {
    let A;
    for (; _ !== E; )
      A = d(_), r(_), _ = A;
    r(E);
  }, Et = (_, E, A) => {
    w.NODE_ENV !== "production" && _.type.__hmrId && hv(_);
    const {
      bum: L,
      scope: k,
      job: M,
      subTree: Y,
      um: K,
      m: W,
      a: j,
      parent: se,
      slots: { __: z }
    } = _;
    $c(W), $c(j), L && Zo(L), se && oe(z) && z.forEach((re) => {
      se.renderCache[re] = void 0;
    }), k.stop(), M && (M.flags |= 8, Ue(Y, _, E, A)), K && dt(K, E), dt(() => {
      _.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), w.NODE_ENV !== "production" && bv(_);
  }, x = (_, E, A, L = !1, k = !1, M = 0) => {
    for (let Y = M; Y < _.length; Y++)
      Ue(_[Y], E, A, L, k);
  }, G = (_) => {
    if (_.shapeFlag & 6)
      return G(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const E = d(_.anchor || _.el), A = E && E[Nh];
    return A ? d(A) : E;
  };
  let X = !1;
  const ne = (_, E, A) => {
    _ == null ? E._vnode && Ue(E._vnode, null, null, !0) : m(
      E._vnode || null,
      _,
      E,
      null,
      null,
      null,
      A
    ), E._vnode = _, X || (X = !0, vc(), gh(), X = !1);
  }, _e = {
    p: m,
    um: Ue,
    m: Pe,
    r: nt,
    mt: he,
    mc: P,
    pc: le,
    pbc: $,
    n: G,
    o: e
  };
  return {
    render: ne,
    hydrate: void 0,
    createApp: Zv(ne)
  };
}
function Va({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ho({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ts(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (oe(o) && oe(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let a = r[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = Gn(r[s]), a.el = i.el), !n && a.patchFlag !== -2 && ts(i, a)), a.type === ks && (a.el = i.el), a.type === Ye && !a.el && (a.el = i.el), w.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
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
function Qh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Qh(t);
}
function $c(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const vy = Symbol.for("v-scx"), yy = () => {
  {
    const e = Lt(vy);
    return e || w.NODE_ENV !== "production" && B(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ra(e, t) {
  return sa(e, null, t);
}
function by(e, t) {
  return sa(
    e,
    null,
    w.NODE_ENV !== "production" ? He({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function $n(e, t, n) {
  return w.NODE_ENV !== "production" && !ae(t) && B(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), sa(e, t, n);
}
function sa(e, t, n = we) {
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
  if (_s) {
    if (s === "sync") {
      const p = yy();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = Ze, p.resume = Ze, p.pause = Ze, p;
    }
  }
  const u = Je;
  a.call = (p, h, m) => en(p, u, h, m);
  let c = !1;
  s === "post" ? a.scheduler = (p) => {
    dt(p, u && u.suspense);
  } : s !== "sync" && (c = !0, a.scheduler = (p, h) => {
    h ? p() : ea(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), c && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const d = rv(e, t, a);
  return _s && (f ? f.push(d) : l && d()), d;
}
function wy(e, t, n) {
  const o = this.proxy, r = Fe(e) ? e.includes(".") ? Zh(o, e) : () => o[e] : e.bind(o, o);
  let s;
  ae(t) ? s = t : (s = t.handler, n = t);
  const i = Ps(this), a = sa(r, s.bind(o), n);
  return i(), a;
}
function Zh(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Oy(e, t, n = we) {
  const o = On();
  if (w.NODE_ENV !== "production" && !o)
    return B("useModel() called without active instance."), de();
  const r = ut(t);
  if (w.NODE_ENV !== "production" && !o.propsOptions[0][r])
    return B(`useModel() called with prop "${t}" which is not declared.`), de();
  const s = En(t), i = em(e, r), a = QE((l, f) => {
    let u, c = we, d;
    return by(() => {
      const p = e[r];
      bt(u, p) && (u = p, f());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(p) {
        const h = n.set ? n.set(p) : p;
        if (!bt(h, u) && !(c !== we && bt(p, c)))
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
        return l < 2 ? { value: l++ ? i || we : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const em = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ut(t)}Modifiers`] || e[`${En(t)}Modifiers`];
function Ay(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || we;
  if (w.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [c]
    } = e;
    if (u)
      if (!(t in u))
        (!c || !(go(ut(t)) in c)) && B(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${go(ut(t))}" prop.`
        );
      else {
        const d = u[t];
        ae(d) && (d(...n) || B(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && em(o, t.slice(7));
  if (i && (i.trim && (r = n.map((u) => Fe(u) ? u.trim() : u)), i.number && (r = n.map(Ti))), w.NODE_ENV !== "production" && Av(e, t, r), w.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[go(u)] && B(
      `Event "${u}" is emitted in component ${la(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${En(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = o[a = go(t)] || // also try camelCase event handler (#2249)
  o[a = go(ut(t))];
  !l && s && (l = o[a = go(En(t))]), l && en(
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
    e.emitted[a] = !0, en(
      f,
      e,
      6,
      r
    );
  }
}
function tm(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, a = !1;
  if (!ae(e)) {
    const l = (f) => {
      const u = tm(f, t, !0);
      u && (a = !0, He(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (Se(e) && o.set(e, null), null) : (oe(s) ? s.forEach((l) => i[l] = null) : He(i, s), Se(e) && o.set(e, i), i);
}
function ia(e, t) {
  return !e || !Ts(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, En(t)) || Ae(e, t));
}
let Nl = !1;
function Vi() {
  Nl = !0;
}
function kc(e) {
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
  let v, O;
  w.NODE_ENV !== "production" && (Nl = !1);
  try {
    if (n.shapeFlag & 4) {
      const N = r || o, C = w.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(N, {
        get(S, V, P) {
          return B(
            `Property '${String(
              V
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(S, V, P);
        }
      }) : N;
      v = Wt(
        f.call(
          C,
          N,
          u,
          w.NODE_ENV !== "production" ? pn(c) : c,
          p,
          d,
          h
        )
      ), O = a;
    } else {
      const N = t;
      w.NODE_ENV !== "production" && a === c && Vi(), v = Wt(
        N.length > 1 ? N(
          w.NODE_ENV !== "production" ? pn(c) : c,
          w.NODE_ENV !== "production" ? {
            get attrs() {
              return Vi(), pn(a);
            },
            slots: i,
            emit: l
          } : { attrs: a, slots: i, emit: l }
        ) : N(
          w.NODE_ENV !== "production" ? pn(c) : c,
          null
        )
      ), O = t.props ? a : Ny(a);
    }
  } catch (N) {
    ns.length = 0, Rs(N, e, 1), v = Ne(Ye);
  }
  let y = v, R;
  if (w.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && ([y, R] = nm(v)), O && m !== !1) {
    const N = Object.keys(O), { shapeFlag: C } = y;
    if (N.length) {
      if (C & 7)
        s && N.some(Si) && (O = Sy(
          O,
          s
        )), y = yn(y, O, !1, !0);
      else if (w.NODE_ENV !== "production" && !Nl && y.type !== Ye) {
        const S = Object.keys(a), V = [], P = [];
        for (let I = 0, $ = S.length; I < $; I++) {
          const D = S[I];
          Ts(D) ? Si(D) || V.push(D[2].toLowerCase() + D.slice(3)) : P.push(D);
        }
        P.length && B(
          `Extraneous non-props attributes (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), V.length && B(
          `Extraneous non-emits event listeners (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (w.NODE_ENV !== "production" && !Pc(y) && B(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), y = yn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (w.NODE_ENV !== "production" && !Pc(y) && B(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), hs(y, n.transition)), w.NODE_ENV !== "production" && R ? R(y) : v = y, $i(g), v;
}
const nm = (e) => {
  const t = e.children, n = e.dynamicChildren, o = bu(t, !1);
  if (o) {
    if (w.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return nm(o);
  } else return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (a) => {
    t[r] = a, n && (s > -1 ? n[s] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [Wt(o), i];
};
function bu(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (Vo(r)) {
      if (r.type !== Ye || r.children === "v-if") {
        if (n)
          return;
        if (n = r, w.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return bu(n.children);
      }
    } else
      return;
  }
  return n;
}
const Ny = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ts(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sy = (e, t) => {
  const n = {};
  for (const o in e)
    (!Si(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Pc = (e) => e.shapeFlag & 7 || e.type === Ye;
function Ty(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: a, patchFlag: l } = t, f = s.emitsOptions;
  if (w.NODE_ENV !== "production" && (r || a) && zt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? Vc(o, i, f) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const d = u[c];
        if (i[d] !== o[d] && !ia(f, d))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : o === i ? !1 : o ? i ? Vc(o, i, f) : !0 : !!i;
  return !1;
}
function Vc(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !ia(n, s))
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
const om = (e) => e.__isSuspense;
function Dy(e, t) {
  t && t.pendingBranch ? oe(e) ? t.effects.push(...e) : t.effects.push(e) : _h(e);
}
const De = Symbol.for("v-fgt"), ks = Symbol.for("v-txt"), Ye = Symbol.for("v-cmt"), fi = Symbol.for("v-stc"), ns = [];
let Ct = null;
function J(e = !1) {
  ns.push(Ct = e ? null : []);
}
function xy() {
  ns.pop(), Ct = ns[ns.length - 1] || null;
}
let ms = 1;
function Lc(e, t = !1) {
  ms += e, e < 0 && Ct && t && (Ct.hasOnce = !0);
}
function rm(e) {
  return e.dynamicChildren = ms > 0 ? Ct || lr : null, xy(), ms > 0 && Ct && Ct.push(e), e;
}
function te(e, t, n, o, r, s) {
  return rm(
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
function St(e, t, n, o, r) {
  return rm(
    Ne(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function Vo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bo(e, t) {
  if (w.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = ui.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Ry = (...e) => im(
  ...e
), sm = ({ key: e }) => e ?? null, di = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Fe(e) || Le(e) || ae(e) ? { i: We, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, o = 0, r = null, s = e === De ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && sm(t),
    ref: t && di(t),
    scopeId: Oh,
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
  return a ? (wu(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Fe(n) ? 8 : 16), w.NODE_ENV !== "production" && l.key !== l.key && B("VNode created with invalid key (NaN). VNode type:", l.type), ms > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ct && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ct.push(l), l;
}
const Ne = w.NODE_ENV !== "production" ? Ry : im;
function im(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Uv) && (w.NODE_ENV !== "production" && !e && B(`Invalid vnode type when creating vnode: ${e}.`), e = Ye), Vo(e)) {
    const a = yn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && wu(a, n), ms > 0 && !s && Ct && (a.shapeFlag & 6 ? Ct[Ct.indexOf(e)] = a : Ct.push(a)), a.patchFlag = -2, a;
  }
  if (cm(e) && (e = e.__vccOpts), t) {
    t = Ke(t);
    let { class: a, style: l } = t;
    a && !Fe(a) && (t.class = Ve(a)), Se(l) && (ds(l) && !oe(l) && (l = He({}, l)), t.style = xs(l));
  }
  const i = Fe(e) ? 1 : om(e) ? 128 : Sh(e) ? 64 : Se(e) ? 4 : ae(e) ? 2 : 0;
  return w.NODE_ENV !== "production" && i & 4 && ds(e) && (e = fe(e), B(
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
function Ke(e) {
  return e ? ds(e) || zh(e) ? He({}, e) : e : null;
}
function yn(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: i, children: a, transition: l } = e, f = t ? lo(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && sm(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? oe(s) ? s.concat(di(t)) : [s, di(t)] : di(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: w.NODE_ENV !== "production" && i === -1 && oe(a) ? a.map(am) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== De ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && yn(e.ssContent),
    ssFallback: e.ssFallback && yn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && o && hs(
    u,
    l.clone(u)
  ), u;
}
function am(e) {
  const t = yn(e);
  return oe(e.children) && (t.children = e.children.map(am)), t;
}
function tt(e = " ", t = 0) {
  return Ne(ks, null, e, t);
}
function Lo(e = "", t = !1) {
  return t ? (J(), St(Ye, null, e)) : Ne(Ye, null, e);
}
function Wt(e) {
  return e == null || typeof e == "boolean" ? Ne(Ye) : oe(e) ? Ne(
    De,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vo(e) ? Gn(e) : Ne(ks, null, String(e));
}
function Gn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yn(e);
}
function wu(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (oe(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), wu(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !zh(t) ? t._ctx = We : r === 3 && We && (We.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ae(t) ? (t = { default: t, _ctx: We }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [tt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function lo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Ve([t.class, o.class]));
      else if (r === "style")
        t.style = xs([t.style, o.style]);
      else if (Ts(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(oe(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function an(e, t, n, o = null) {
  en(e, t, 7, [
    n,
    o
  ]);
}
const Iy = Hh();
let $y = 0;
function ky(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Iy, s = {
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
    scope: new Hp(
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
    propsOptions: Gh(o, r),
    emitsOptions: tm(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: we,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: we,
    data: we,
    props: we,
    attrs: we,
    slots: we,
    refs: we,
    setupState: we,
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
  return w.NODE_ENV !== "production" ? s.ctx = Hv(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ay.bind(null, s), e.ce && e.ce(s), s;
}
let Je = null;
const On = () => Je || We;
let Li, Sl;
{
  const e = Ds(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  Li = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Je = n
  ), Sl = t(
    "__VUE_SSR_SETTERS__",
    (n) => _s = n
  );
}
const Ps = (e) => {
  const t = Je;
  return Li(e), e.scope.on(), () => {
    e.scope.off(), Li(t);
  };
}, Mc = () => {
  Je && Je.scope.off(), Li(null);
}, Py = /* @__PURE__ */ Fn("slot,component");
function Tl(e, { isNativeTag: t }) {
  (Py(e) || t(e)) && B(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function lm(e) {
  return e.vnode.shapeFlag & 4;
}
let _s = !1;
function Vy(e, t = !1, n = !1) {
  t && Sl(t);
  const { props: o, children: r } = e.vnode, s = lm(e);
  ty(e, o, s, t), dy(e, r, n || t);
  const i = s ? Ly(e, t) : void 0;
  return t && Sl(!1), i;
}
function Ly(e, t) {
  var n;
  const o = e.type;
  if (w.NODE_ENV !== "production") {
    if (o.name && Tl(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        Tl(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        Ah(s[i]);
    }
    o.compilerOptions && My() && B(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Bh), w.NODE_ENV !== "production" && Kv(e);
  const { setup: r } = o;
  if (r) {
    Jt();
    const s = e.setupContext = r.length > 1 ? By(e) : null, i = Ps(e), a = Tr(
      r,
      e,
      0,
      [
        w.NODE_ENV !== "production" ? pn(e.props) : e.props,
        s
      ]
    ), l = lu(a);
    if (Qt(), i(), (l || e.sp) && !cr(e) && kh(e), l) {
      if (a.then(Mc, Mc), t)
        return a.then((f) => {
          Fc(e, f, t);
        }).catch((f) => {
          Rs(f, e, 0);
        });
      if (e.asyncDep = a, w.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        B(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Fc(e, a, t);
  } else
    um(e, t);
}
function Fc(e, t, n) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) ? (w.NODE_ENV !== "production" && Vo(t) && B(
    "setup() should not return VNodes directly - return a render function instead."
  ), w.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = fh(t), w.NODE_ENV !== "production" && Wv(e)) : w.NODE_ENV !== "production" && t !== void 0 && B(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), um(e, n);
}
const My = () => !0;
function um(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Ze);
  {
    const r = Ps(e);
    Jt();
    try {
      qv(e);
    } finally {
      Qt(), r();
    }
  }
  w.NODE_ENV !== "production" && !o.render && e.render === Ze && !t && (o.template ? B(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : B("Component is missing template or render function: ", o));
}
const Bc = w.NODE_ENV !== "production" ? {
  get(e, t) {
    return Vi(), Qe(e, "get", ""), e[t];
  },
  set() {
    return B("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return B("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Qe(e, "get", ""), e[t];
  }
};
function Fy(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Qe(e, "get", "$slots"), t[n];
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
        return n || (n = new Proxy(e.attrs, Bc));
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
      attrs: new Proxy(e.attrs, Bc),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function aa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fh(Qn(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in xo)
        return xo[n](e);
    },
    has(t, n) {
      return n in t || n in xo;
    }
  })) : e.proxy;
}
const Uy = /(?:^|[-_])(\w)/g, jy = (e) => e.replace(Uy, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ou(e, t = !0) {
  return ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function la(e, t, n = !1) {
  let o = Ou(t);
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
  return o ? jy(o) : n ? "App" : "Anonymous";
}
function cm(e) {
  return ae(e) && "__vccOpts" in e;
}
const Oe = (e, t) => {
  const n = nv(e, t, _s);
  if (w.NODE_ENV !== "production") {
    const o = On();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Au(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Se(t) && !oe(t) ? Vo(t) ? Ne(e, null, [t]) : Ne(e, t) : Ne(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Vo(n) && (n = [n]), Ne(e, t, n));
}
function Hy() {
  if (w.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!Se(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (Le(c)) {
        Jt();
        const d = c.value;
        return Qt(), [
          "div",
          {},
          ["span", e, u(c)],
          "<",
          a(d),
          ">"
        ];
      } else {
        if (Yt(c))
          return [
            "div",
            {},
            ["span", e, mt(c) ? "ShallowReactive" : "Reactive"],
            "<",
            a(c),
            `>${vn(c) ? " (readonly)" : ""}`
          ];
        if (vn(c))
          return [
            "div",
            {},
            ["span", e, mt(c) ? "ShallowReadonly" : "Readonly"],
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
    c.type.props && c.props && d.push(i("props", fe(c.props))), c.setupState !== we && d.push(i("setup", c.setupState)), c.data !== we && d.push(i("data", fe(c.data)));
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
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", o, c] : Se(c) ? ["object", { object: d ? fe(c) : c }] : ["span", n, String(c)];
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
    if (oe(h) && h.includes(d) || Se(h) && d in h || c.extends && f(c.extends, d, p) || c.mixins && c.mixins.some((m) => f(m, d, p)))
      return !0;
  }
  function u(c) {
    return mt(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Uc = "3.5.17", hn = w.NODE_ENV !== "production" ? B : Ze;
var Bt = {};
let Cl;
const jc = typeof window < "u" && window.trustedTypes;
if (jc)
  try {
    Cl = /* @__PURE__ */ jc.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Bt.NODE_ENV !== "production" && hn(`Error creating trusted types policy: ${e}`);
  }
const fm = Cl ? (e) => Cl.createHTML(e) : (e) => e, Ky = "http://www.w3.org/2000/svg", Wy = "http://www.w3.org/1998/Math/MathML", xn = typeof document < "u" ? document : null, Hc = xn && /* @__PURE__ */ xn.createElement("template"), zy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? xn.createElementNS(Ky, e) : t === "mathml" ? xn.createElementNS(Wy, e) : n ? xn.createElement(e, { is: n }) : xn.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => xn.createTextNode(e),
  createComment: (e) => xn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => xn.querySelector(e),
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
      Hc.innerHTML = fm(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Hc.content;
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
}, Hn = "transition", Fr = "animation", gs = Symbol("_vtc"), dm = {
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
  Dh,
  dm
), Gy = (e) => (e.displayName = "Transition", e.props = qy, e), Yy = /* @__PURE__ */ Gy(
  (e, { slots: t }) => Au(Cv, Xy(e), t)
), mo = (e, t = []) => {
  oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Kc = (e) => e ? oe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Xy(e) {
  const t = {};
  for (const D in e)
    D in dm || (t[D] = e[D]);
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
    onBeforeEnter: v,
    onEnter: O,
    onEnterCancelled: y,
    onLeave: R,
    onLeaveCancelled: N,
    onBeforeAppear: C = v,
    onAppear: S = O,
    onAppearCancelled: V = y
  } = t, P = (D, q, ue, he) => {
    D._enterCancelled = he, _o(D, q ? u : a), _o(D, q ? f : i), ue && ue();
  }, I = (D, q) => {
    D._isLeaving = !1, _o(D, c), _o(D, p), _o(D, d), q && q();
  }, $ = (D) => (q, ue) => {
    const he = D ? S : O, Q = () => P(q, D, ue);
    mo(he, [q, Q]), Wc(() => {
      _o(q, D ? l : s), Sn(q, D ? u : a), Kc(he) || zc(q, o, m, Q);
    });
  };
  return He(t, {
    onBeforeEnter(D) {
      mo(v, [D]), Sn(D, s), Sn(D, i);
    },
    onBeforeAppear(D) {
      mo(C, [D]), Sn(D, l), Sn(D, f);
    },
    onEnter: $(!1),
    onAppear: $(!0),
    onLeave(D, q) {
      D._isLeaving = !0;
      const ue = () => I(D, q);
      Sn(D, c), D._enterCancelled ? (Sn(D, d), Yc()) : (Yc(), Sn(D, d)), Wc(() => {
        D._isLeaving && (_o(D, c), Sn(D, p), Kc(R) || zc(D, o, g, ue));
      }), mo(R, [D, ue]);
    },
    onEnterCancelled(D) {
      P(D, !1, void 0, !0), mo(y, [D]);
    },
    onAppearCancelled(D) {
      P(D, !0, void 0, !0), mo(V, [D]);
    },
    onLeaveCancelled(D) {
      I(D), mo(N, [D]);
    }
  });
}
function Jy(e) {
  if (e == null)
    return null;
  if (Se(e))
    return [La(e.enter), La(e.leave)];
  {
    const t = La(e);
    return [t, t];
  }
}
function La(e) {
  const t = hE(e);
  return Bt.NODE_ENV !== "production" && uv(t, "<transition> explicit duration"), t;
}
function Sn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[gs] || (e[gs] = /* @__PURE__ */ new Set())).add(t);
}
function _o(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[gs];
  n && (n.delete(t), n.size || (e[gs] = void 0));
}
function Wc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Qy = 0;
function zc(e, t, n, o) {
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
  const n = window.getComputedStyle(e), o = (h) => (n[h] || "").split(", "), r = o(`${Hn}Delay`), s = o(`${Hn}Duration`), i = qc(r, s), a = o(`${Fr}Delay`), l = o(`${Fr}Duration`), f = qc(a, l);
  let u = null, c = 0, d = 0;
  t === Hn ? i > 0 && (u = Hn, c = i, d = s.length) : t === Fr ? f > 0 && (u = Fr, c = f, d = l.length) : (c = Math.max(i, f), u = c > 0 ? i > f ? Hn : Fr : null, d = u ? u === Hn ? s.length : l.length : 0);
  const p = u === Hn && /\b(transform|all)(,|$)/.test(
    o(`${Hn}Property`).toString()
  );
  return {
    type: u,
    timeout: c,
    propCount: d,
    hasTransform: p
  };
}
function qc(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Gc(n) + Gc(e[o])));
}
function Gc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Yc() {
  return document.body.offsetHeight;
}
function eb(e, t, n) {
  const o = e[gs];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Mi = Symbol("_vod"), pm = Symbol("_vsh"), hm = {
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
Bt.NODE_ENV !== "production" && (hm.name = "show");
function Br(e, t) {
  e.style.display = t ? e[Mi] : "none", e[pm] = !t;
}
const tb = Symbol(Bt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), nb = /(^|;)\s*display\s*:/;
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
  Mi in e && (e[Mi] = s ? o.display : "", e[pm] && (o.display = "none"));
}
const rb = /[^\\];\s*$/, Xc = /\s*!important$/;
function pi(e, t, n) {
  if (oe(n))
    n.forEach((o) => pi(e, t, o));
  else if (n == null && (n = ""), Bt.NODE_ENV !== "production" && rb.test(n) && hn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = sb(e, t);
    Xc.test(n) ? e.setProperty(
      En(o),
      n.replace(Xc, ""),
      "important"
    ) : e[o] = n;
  }
}
const Jc = ["Webkit", "Moz", "ms"], Ma = {};
function sb(e, t) {
  const n = Ma[t];
  if (n)
    return n;
  let o = ut(t);
  if (o !== "filter" && o in e)
    return Ma[t] = o;
  o = ko(o);
  for (let r = 0; r < Jc.length; r++) {
    const s = Jc[r] + o;
    if (s in e)
      return Ma[t] = s;
  }
  return t;
}
const Qc = "http://www.w3.org/1999/xlink";
function Zc(e, t, n, o, r, s = SE(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qc, t.slice(6, t.length)) : e.setAttributeNS(Qc, t, n) : n == null || s && !Bp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Xt(n) ? String(n) : n
  );
}
function ef(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? fm(n) : n);
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
    a === "boolean" ? n = Bp(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    Bt.NODE_ENV !== "production" && !i && hn(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(r || t);
}
function Jn(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ib(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const tf = Symbol("_vei");
function ab(e, t, n, o, r = null) {
  const s = e[tf] || (e[tf] = {}), i = s[t];
  if (o && i)
    i.value = Bt.NODE_ENV !== "production" ? of(o, t) : o;
  else {
    const [a, l] = lb(t);
    if (o) {
      const f = s[t] = fb(
        Bt.NODE_ENV !== "production" ? of(o, t) : o,
        r
      );
      Jn(e, a, f, l);
    } else i && (ib(e, a, i, l), s[t] = void 0);
  }
}
const nf = /(?:Once|Passive|Capture)$/;
function lb(e) {
  let t;
  if (nf.test(e)) {
    t = {};
    let o;
    for (; o = e.match(nf); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : En(e.slice(2)), t];
}
let Fa = 0;
const ub = /* @__PURE__ */ Promise.resolve(), cb = () => Fa || (ub.then(() => Fa = 0), Fa = Date.now());
function fb(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    en(
      db(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = cb(), n;
}
function of(e, t) {
  return ae(e) || oe(e) ? e : (hn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Ze);
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
const rf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pb = (e, t, n, o, r, s) => {
  const i = r === "svg";
  t === "class" ? eb(e, o, i) : t === "style" ? ob(e, n, o) : Ts(t) ? Si(t) || ab(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hb(e, t, o, i)) ? (ef(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zc(e, t, o, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Fe(o)) ? ef(e, ut(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Zc(e, t, o, i));
};
function hb(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && rf(t) && ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return rf(t) && Fe(n) ? !1 : t in e;
}
const pr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return oe(t) ? (n) => Zo(t, n) : t;
};
function mb(e) {
  e.target.composing = !0;
}
function sf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const kn = Symbol("_assign"), mm = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[kn] = pr(r);
    const s = o || r.props && r.props.type === "number";
    Jn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), s && (a = Ti(a)), e[kn](a);
    }), n && Jn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Jn(e, "compositionstart", mb), Jn(e, "compositionend", sf), Jn(e, "change", sf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: s } }, i) {
    if (e[kn] = pr(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Ti(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === l) || (e.value = l));
  }
}, af = {
  created(e, { value: t }, n) {
    e.checked = fr(t, n.props.value), e[kn] = pr(n), Jn(e, "change", () => {
      e[kn](Es(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e[kn] = pr(o), t !== n && (e.checked = fr(t, o.props.value));
  }
}, _m = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = Gi(t);
    Jn(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Ti(Es(i)) : Es(i)
      );
      e[kn](
        e.multiple ? r ? new Set(s) : s : s[0]
      ), e._assigning = !0, dr(() => {
        e._assigning = !1;
      });
    }), e[kn] = pr(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    lf(e, t);
  },
  beforeUpdate(e, t, n) {
    e[kn] = pr(n);
  },
  updated(e, { value: t }) {
    e._assigning || lf(e, t);
  }
};
function lf(e, t) {
  const n = e.multiple, o = oe(t);
  if (n && !o && !Gi(t)) {
    Bt.NODE_ENV !== "production" && hn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, s = e.options.length; r < s; r++) {
    const i = e.options[r], a = Es(i);
    if (n)
      if (o) {
        const l = typeof a;
        l === "string" || l === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = CE(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (fr(Es(i), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Es(e) {
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
    const s = En(r.key);
    if (t.some(
      (i) => i === s || Eb[i] === s
    ))
      return e(r);
  });
}, yb = /* @__PURE__ */ He({ patchProp: pb }, zy);
let uf;
function bb() {
  return uf || (uf = my(yb));
}
const ua = (...e) => {
  const t = bb().createApp(...e);
  Bt.NODE_ENV !== "production" && (Ob(t), Ab(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Nb(o);
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
        hn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return hn(o), n;
      },
      set() {
        hn(o);
      }
    });
  }
}
function Nb(e) {
  if (Fe(e)) {
    const t = document.querySelector(e);
    return Bt.NODE_ENV !== "production" && !t && hn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Bt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && hn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Sb = {};
function Tb() {
  Hy();
}
Sb.NODE_ENV !== "production" && Tb();
var Cb = Object.create, Em = Object.defineProperty, Db = Object.getOwnPropertyDescriptor, Nu = Object.getOwnPropertyNames, xb = Object.getPrototypeOf, Rb = Object.prototype.hasOwnProperty, Ib = (e, t) => function() {
  return e && (t = (0, e[Nu(e)[0]])(e = 0)), t;
}, $b = (e, t) => function() {
  return t || (0, e[Nu(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, kb = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Nu(t))
      !Rb.call(e, r) && r !== n && Em(e, r, { get: () => t[r], enumerable: !(o = Db(t, r)) || o.enumerable });
  return e;
}, Pb = (e, t, n) => (n = e != null ? Cb(xb(e)) : {}, kb(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Em(n, "default", { value: e, enumerable: !0 }),
  e
)), Vs = Ib({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Vb = $b({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    Vs(), t.exports = o;
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
          const g = p[m], v = c[g];
          typeof v != "object" || v === null ? h[g] = v : v.constructor !== Object && (a = i.get(v.constructor)) ? h[g] = a(v, d) : ArrayBuffer.isView(v) ? h[g] = n(v) : h[g] = d(v);
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
        for (let v = 0; v < m.length; v++) {
          const O = m[v], y = p[O];
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
            const v = i.indexOf(g);
            v !== -1 ? h[m] = a[v] : h[m] = c(g);
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
            const v = i.indexOf(g);
            v !== -1 ? h[m] = a[v] : h[m] = d(g);
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
var vm = typeof navigator < "u", ee = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof ee.chrome < "u" && ee.chrome.devtools;
vm && (ee.self, ee.top);
var cf;
typeof navigator < "u" && ((cf = navigator.userAgent) == null || cf.toLowerCase().includes("electron"));
Vs();
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
var ff = (0, Lb.default)({ circles: !0 });
const jb = {
  trailing: !0
};
function hr(e, t = 25, n = {}) {
  if (n = { ...jb, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let o, r, s = [], i, a;
  const l = (f, u) => (i = Hb(e, f, u), i.finally(() => {
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
async function Hb(e, t, n) {
  return await e.apply(t, n);
}
function Dl(e, t = {}, n) {
  for (const o in e) {
    const r = e[o], s = n ? `${n}:${o}` : o;
    typeof r == "object" && r !== null ? Dl(r, t, s) : typeof r == "function" && (t[s] = r);
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
function Ba(e, t) {
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
    const n = Dl(t), o = Object.keys(n).map(
      (r) => this.hook(r, n[r])
    );
    return () => {
      for (const r of o.splice(0, o.length))
        r();
    };
  }
  removeHooks(t) {
    const n = Dl(t);
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
    this._before && Ba(this._before, r);
    const s = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      o
    );
    return s instanceof Promise ? s.finally(() => {
      this._after && r && Ba(this._after, r);
    }) : (this._after && r && Ba(this._after, r), s);
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
var Yb = Object.create, wm = Object.defineProperty, Xb = Object.getOwnPropertyDescriptor, Su = Object.getOwnPropertyNames, Jb = Object.getPrototypeOf, Qb = Object.prototype.hasOwnProperty, Zb = (e, t) => function() {
  return e && (t = (0, e[Su(e)[0]])(e = 0)), t;
}, Om = (e, t) => function() {
  return t || (0, e[Su(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, e0 = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Su(t))
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
      }, l = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), u = [".", "!", "~", "*", "'", "(", ")"].join(""), c = function(g, v) {
        var O = "-", y = "", R = "", N = !0, C = {}, S, V, P, I, $, D, q, ue, he, Q, H, Z, le, ze, qe = "";
        if (typeof g != "string")
          return "";
        if (typeof v == "string" && (O = v), q = a.en, ue = i.en, typeof v == "object") {
          S = v.maintainCase || !1, C = v.custom && typeof v.custom == "object" ? v.custom : C, P = +v.truncate > 1 && v.truncate || !1, I = v.uric || !1, $ = v.uricNoSlash || !1, D = v.mark || !1, N = !(v.symbols === !1 || v.lang === !1), O = v.separator || O, I && (qe += l), $ && (qe += f), D && (qe += u), q = v.lang && a[v.lang] && N ? a[v.lang] : N ? a.en : {}, ue = v.lang && i[v.lang] ? i[v.lang] : v.lang === !1 || v.lang === !0 ? {} : i.en, v.titleCase && typeof v.titleCase.length == "number" && Array.prototype.toString.call(v.titleCase) ? (v.titleCase.forEach(function(Pe) {
            C[Pe + ""] = Pe + "";
          }), V = !0) : V = !!v.titleCase, v.custom && typeof v.custom.length == "number" && Array.prototype.toString.call(v.custom) && v.custom.forEach(function(Pe) {
            C[Pe + ""] = Pe + "";
          }), Object.keys(C).forEach(function(Pe) {
            var Ue;
            Pe.length > 1 ? Ue = new RegExp("\\b" + p(Pe) + "\\b", "gi") : Ue = new RegExp(p(Pe), "gi"), g = g.replace(Ue, C[Pe]);
          });
          for (H in C)
            qe += H;
        }
        for (qe += O, qe = p(qe), g = g.replace(/(^\s+|\s+$)/g, ""), le = !1, ze = !1, Q = 0, Z = g.length; Q < Z; Q++)
          H = g[Q], h(H, C) ? le = !1 : ue[H] ? (H = le && ue[H].match(/[A-Za-z0-9]/) ? " " + ue[H] : ue[H], le = !1) : H in o ? (Q + 1 < Z && r.indexOf(g[Q + 1]) >= 0 ? (R += H, H = "") : ze === !0 ? (H = s[R] + o[H], R = "") : H = le && o[H].match(/[A-Za-z0-9]/) ? " " + o[H] : o[H], le = !1, ze = !1) : H in s ? (R += H, H = "", Q === Z - 1 && (H = s[R]), ze = !0) : /* process symbol chars */ q[H] && !(I && l.indexOf(H) !== -1) && !($ && f.indexOf(H) !== -1) ? (H = le || y.substr(-1).match(/[A-Za-z0-9]/) ? O + q[H] : q[H], H += g[Q + 1] !== void 0 && g[Q + 1].match(/[A-Za-z0-9]/) ? O : "", le = !0) : (ze === !0 ? (H = s[R] + H, R = "", ze = !1) : le && (/[A-Za-z0-9]/.test(H) || y.substr(-1).match(/A-Za-z0-9]/)) && (H = " " + H), le = !1), y += H.replace(new RegExp("[^\\w\\s" + qe + "_-]", "g"), O);
        return V && (y = y.replace(/(\w)(\S*)/g, function(Pe, Ue, nt) {
          var rt = Ue.toUpperCase() + (nt !== null ? nt : "");
          return Object.keys(C).indexOf(rt.toLowerCase()) < 0 ? rt : rt.toLowerCase();
        })), y = y.replace(/\s+/g, O).replace(new RegExp("\\" + O + "+", "g"), O).replace(new RegExp("(^\\" + O + "+|\\" + O + "+$)", "g"), ""), P && y.length > P && (he = y.charAt(P) === O, y = y.slice(0, P), he || (y = y.slice(0, y.lastIndexOf(O)))), !S && !V && (y = y.toLowerCase()), y;
      }, d = function(g) {
        return function(O) {
          return c(O, g);
        };
      }, p = function(g) {
        return g.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, h = function(m, g) {
        for (var v in g)
          if (g[v] === m)
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
function df(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Tu(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Am(e) {
  var t, n;
  const o = (t = e.subTree) == null ? void 0 : t.type, r = Tu(e);
  return r ? ((n = r?.types) == null ? void 0 : n.Fragment) === o : !1;
}
function ca(e) {
  var t, n, o;
  const r = r0(e?.type || {});
  if (r)
    return r;
  if (e?.root === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === e?.type)
      return df(e, i);
  for (const i in (o = e.appContext) == null ? void 0 : o.components)
    if (e.appContext.components[i] === e?.type)
      return df(e, i);
  const s = s0(e?.type || {});
  return s || "Anonymous Component";
}
function i0(e) {
  var t, n, o;
  const r = (o = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? o : 0, s = e === e?.root ? "root" : e.uid;
  return `${r}:${s}`;
}
function xl(e, t) {
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
      s = Mo(r.component);
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
var pf = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Mo(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? pf : Am(e) ? u0(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Mo(e.subTree.component) : pf;
}
F();
function Cu(e) {
  return Am(e) ? f0(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function f0(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...Cu(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Nm = "__vue-devtools-component-inspector__", Sm = "__vue-devtools-component-inspector__card__", Tm = "__vue-devtools-component-inspector__name__", Cm = "__vue-devtools-component-inspector__indicator__", Dm = {
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
function Cr() {
  return document.getElementById(Nm);
}
function h0() {
  return document.getElementById(Sm);
}
function m0() {
  return document.getElementById(Cm);
}
function _0() {
  return document.getElementById(Tm);
}
function Du(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function xu(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Nm, Object.assign(n.style, {
    ...Dm,
    ...Du(e.bounds),
    ...e.style
  });
  const o = document.createElement("span");
  o.id = Sm, Object.assign(o.style, {
    ...d0,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = Tm, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const s = document.createElement("i");
  return s.id = Cm, s.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(s.style, p0), o.appendChild(r), o.appendChild(s), n.appendChild(o), document.body.appendChild(n), n;
}
function Ru(e) {
  const t = Cr(), n = h0(), o = _0(), r = m0();
  t && (Object.assign(t.style, {
    ...Dm,
    ...Du(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function g0(e) {
  const t = Mo(e);
  if (!t.width && !t.height)
    return;
  const n = ca(e);
  Cr() ? Ru({ bounds: t, name: n }) : xu({ bounds: t, name: n });
}
function xm() {
  const e = Cr();
  e && (e.style.display = "none");
}
var Rl = null;
function Il(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Rl = n, n.vnode.el)) {
      const r = Mo(n), s = ca(n);
      Cr() ? Ru({ bounds: r, name: s }) : xu({ bounds: r, name: s });
    }
  }
}
function E0(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Rl) {
    const n = i0(Rl);
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
        const r = Cr();
        r && (r.style.display = "none"), e(JSON.stringify({ id: o }));
      });
    }
    Fi = t, window.addEventListener("click", t, !0);
  });
}
function b0(e) {
  const t = xl(ht.value, e.id);
  if (t) {
    const [n] = Cu(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const o = Mo(t), r = document.createElement("div"), s = {
        ...Du(o),
        position: "absolute"
      };
      Object.assign(r.style, s), document.body.appendChild(r), r.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(r);
      }, 2e3);
    }
    setTimeout(() => {
      const o = Mo(t);
      if (o.width || o.height) {
        const r = ca(t), s = Cr();
        s ? Ru({ ...e, name: r, bounds: o }) : xu({ ...e, name: r, bounds: o }), setTimeout(() => {
          s && (s.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
F();
var hf, mf;
(mf = (hf = ee).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (hf.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function w0(e) {
  let t = 0;
  const n = setInterval(() => {
    ee.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function O0() {
  const e = ee.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function A0() {
  return new Promise((e) => {
    function t() {
      O0(), e(ee.__VUE_INSPECTOR__);
    }
    ee.__VUE_INSPECTOR__ ? t() : w0(() => {
      t();
    });
  });
}
F();
F();
function N0(e) {
  return !!(e && e.__v_isReadonly);
}
function Rm(e) {
  return N0(e) ? Rm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ua(e) {
  return !!(e && e.__v_isRef === !0);
}
function Gr(e) {
  const t = e && e.__v_raw;
  return t ? Gr(t) : e;
}
var S0 = class {
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
    if (Ua(e))
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
    return Ua(e) ? e.value : e;
  }
  isRef(e) {
    return Ua(e) || Rm(e);
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
var _f, gf;
(gf = (_f = ee).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (_f.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var x0 = new Proxy(ee.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function R0(e, t) {
  et.timelineLayersState[t.id] = !1, x0.push({
    ...e,
    descriptorId: t.id,
    appRecord: Tu(t.app)
  });
}
var Ef, vf;
(vf = (Ef = ee).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Ef.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Iu = new Proxy(ee.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), Im = hr(() => {
  Dr.hooks.callHook("sendInspectorToClient", $m());
});
function I0(e, t) {
  var n, o;
  Iu.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (o = e.stateFilterPlaceholder) != null ? o : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Tu(t.app)
  }), Im();
}
function $m() {
  return Iu.filter((e) => e.descriptor.app === ht.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
    I0(o, r.descriptor);
  });
  const t = hr(async ({ inspectorId: o, plugin: r }) => {
    var s;
    if (!o || !((s = r?.descriptor) != null && s.app) || et.highPerfModeEnabled)
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
  const n = hr(async ({ inspectorId: o, plugin: r }) => {
    var s;
    if (!o || !((s = r?.descriptor) != null && s.app) || et.highPerfModeEnabled)
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
    et.highPerfModeEnabled || !((s = et.timelineLayersState) != null && s[r.descriptor.id]) && !i.includes(o.layerId) || e.callHookWith(
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
  }), e.hook("getComponentBounds", async ({ instance: o }) => Mo(o)), e.hook("getComponentName", ({ instance: o }) => ca(o)), e.hook("componentHighlight", ({ uid: o }) => {
    const r = ht.value.instanceMap.get(o);
    r && g0(r);
  }), e.hook("componentUnhighlight", () => {
    xm();
  }), e;
}
var yf, bf;
(bf = (yf = ee).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (yf.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var wf, Of;
(Of = (wf = ee).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (wf.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Af, Nf;
(Nf = (Af = ee).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Af.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Sf, Tf;
(Tf = (Sf = ee).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Sf.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Cf, Df;
(Df = (Cf = ee).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Cf.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var wo = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function k0() {
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
var xf, Rf;
(Rf = (xf = ee)[wo]) != null || (xf[wo] = k0());
var P0 = hr((e) => {
  Dr.hooks.callHook("devtoolsStateUpdated", { state: e });
});
hr((e, t) => {
  Dr.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var fa = new Proxy(ee.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? ee.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : ee.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), ht = new Proxy(ee.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? ee.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? ee.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : ee.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function km() {
  P0({
    ...ee[wo],
    appRecords: fa.value,
    activeAppRecordId: ht.id,
    tabs: ee.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: ee.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function V0(e) {
  ee.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, km();
}
function L0(e) {
  ee.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, km();
}
var et = new Proxy(ee[wo], {
  get(e, t) {
    return t === "appRecords" ? fa : t === "activeAppRecordId" ? ht.id : t === "tabs" ? ee.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? ee.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : ee[wo][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...ee[wo] }, e[t] = n, ee[wo][t] = n, !0;
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
    } else if (et.vitePluginDetected) {
      const f = (o = ee.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? o : i;
      ee.__VUE_INSPECTOR__.openInEditor(f, r, a, l);
    }
  }
}
F();
F();
F();
F();
F();
var If, $f;
($f = (If = ee).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (If.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var $u = new Proxy(ee.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function $l(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function ku(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function F0(e) {
  var t, n, o;
  const r = (n = (t = $u.find((s) => {
    var i;
    return s[0].id === e && !!((i = s[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (o = r?.settings) != null ? o : null;
}
function Pm(e, t) {
  var n, o, r;
  const s = ku(e);
  if (s) {
    const i = localStorage.getItem(s);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (o = (n = $u.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? o : null;
    return $l((r = i?.settings) != null ? r : {});
  }
  return $l(t);
}
function B0(e, t) {
  const n = ku(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify($l(t)));
}
function U0(e, t, n) {
  const o = ku(e), r = localStorage.getItem(o), s = JSON.parse(r || "{}"), i = {
    ...s,
    [t]: n
  };
  localStorage.setItem(o, JSON.stringify(i)), Dr.hooks.callHookWith(
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
var kf, Pf, Tt = (Pf = (kf = ee).__VUE_DEVTOOLS_HOOK) != null ? Pf : kf.__VUE_DEVTOOLS_HOOK = bm(), j0 = {
  vueAppInit(e) {
    Tt.hook("app:init", e);
  },
  vueAppUnmount(e) {
    Tt.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    Tt.hook("app:connected", e);
  },
  componentAdded(e) {
    return Tt.hook("component:added", e);
  },
  componentEmit(e) {
    return Tt.hook("component:emit", e);
  },
  componentUpdated(e) {
    return Tt.hook("component:updated", e);
  },
  componentRemoved(e) {
    return Tt.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    Tt.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return Tt.hook("perf:start", e);
  },
  perfEnd(e) {
    return Tt.hook("perf:end", e);
  }
}, Vm = {
  on: j0,
  setupDevToolsPlugin(e, t) {
    return Tt.callHook("devtools-plugin:setup", e, t);
  }
}, H0 = class {
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
    if (et.highPerfModeEnabled)
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
        Tt.callHook("component:updated", ...o);
      } else
        Tt.callHook(
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
    et.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    et.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return et.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    et.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
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
}, K0 = H0;
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
var Vf, Lf;
(Lf = (Vf = ee).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Vf.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
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
    ctx: Dr
  });
  n.packageName === "vuex" && r.on.editInspectorState((s) => {
    r.sendInspectorState(s.inspectorId);
  }), o(r);
}
function Mm(e, t) {
  ee.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || et.highPerfModeEnabled && !t?.inspectingComponent || (ee.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), $u.forEach((n) => {
    X0(n, e);
  }));
}
F();
F();
var vs = "__VUE_DEVTOOLS_ROUTER__", mr = "__VUE_DEVTOOLS_ROUTER_INFO__", Mf, Ff;
(Ff = (Mf = ee)[mr]) != null || (Mf[mr] = {
  currentRoute: null,
  routes: []
});
var Bf, Uf;
(Uf = (Bf = ee)[vs]) != null || (Bf[vs] = {});
new Proxy(ee[mr], {
  get(e, t) {
    return ee[mr][t];
  }
});
new Proxy(ee[vs], {
  get(e, t) {
    if (t === "value")
      return ee[vs];
  }
});
function J0(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Pu(e) {
  return e.map((t) => {
    let { path: n, name: o, children: r, meta: s } = t;
    return r?.length && (r = Pu(r)), {
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
      matched: Pu(i)
    };
  }
  return e;
}
function Z0(e, t) {
  function n() {
    var o;
    const r = (o = e.app) == null ? void 0 : o.config.globalProperties.$router, s = Q0(r?.currentRoute.value), i = Pu(J0(r)), a = console.warn;
    console.warn = () => {
    }, ee[mr] = {
      currentRoute: s ? ff(s) : {},
      routes: ff(i)
    }, ee[vs] = r, console.warn = a;
  }
  n(), Vm.on.componentUpdated(hr(() => {
    var o;
    ((o = t.value) == null ? void 0 : o.app) === e.app && (n(), !et.highPerfModeEnabled && Dr.hooks.callHook("routerInfoUpdated", { state: ee[mr] }));
  }, 200));
}
function ew(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: ht.value.app,
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
        app: ht.value.app,
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
      const n = new S0(), o = {
        ...t,
        app: ht.value.app,
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
      const n = xl(ht.value, t);
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
      const o = fa.value.find((r) => r.id === t);
      o && (L0(t), V0(o), Z0(o, ht), Im(), Mm(o.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = xl(ht.value, t);
      if (n) {
        const [o] = Cu(n);
        o && (ee.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = o);
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
var jf, Hf;
(Hf = (jf = ee).__VUE_DEVTOOLS_ENV__) != null || (jf.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var Kf = $0(), Wf, zf;
(zf = (Wf = ee).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (Wf.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Kf,
  get state() {
    return {
      ...et,
      activeAppRecordId: ht.id,
      activeAppRecord: ht.value,
      appRecords: fa.value
    };
  },
  api: ew(Kf)
});
var Dr = ee.__VUE_DEVTOOLS_KIT_CONTEXT__;
F();
t0(o0());
var qf, Gf;
(Gf = (qf = ee).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (qf.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
F();
F();
function tw(e) {
  et.highPerfModeEnabled = e ?? !et.highPerfModeEnabled, !e && ht.value && Mm(ht.value.app);
}
F();
F();
F();
function nw(e) {
  et.devtoolsClientDetected = {
    ...et.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(et.devtoolsClientDetected).some(Boolean);
  tw(!t);
}
var Yf, Xf;
(Xf = (Yf = ee).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (Yf.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = nw);
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
function _r(e, t) {
  Object.entries(e).forEach(([n, o]) => t(o, n));
}
function mi(e, t) {
  return e.indexOf(t) !== -1;
}
function Jf(e, t) {
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
var lw = (e) => Object.prototype.toString.call(e).slice(8, -1), Bm = (e) => typeof e > "u", uw = (e) => e === null, ys = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, kl = (e) => ys(e) && Object.keys(e).length === 0, no = (e) => Array.isArray(e), cw = (e) => typeof e == "string", fw = (e) => typeof e == "number" && !isNaN(e), dw = (e) => typeof e == "boolean", pw = (e) => e instanceof RegExp, bs = (e) => e instanceof Map, ws = (e) => e instanceof Set, Um = (e) => lw(e) === "Symbol", hw = (e) => e instanceof Date && !isNaN(e.valueOf()), mw = (e) => e instanceof Error, Qf = (e) => typeof e == "number" && isNaN(e), _w = (e) => dw(e) || uw(e) || Bm(e) || fw(e) || cw(e) || Um(e), gw = (e) => typeof e == "bigint", Ew = (e) => e === 1 / 0 || e === -1 / 0, vw = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), yw = (e) => e instanceof URL;
F();
var jm = (e) => e.replace(/\./g, "\\."), ja = (e) => e.map(String).map(jm).join("."), os = (e) => {
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
var Hm = [
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
    ws,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  ln(bs, "map", (e) => [...e.entries()], (e) => new Map(e)),
  ln((e) => Qf(e) || Ew(e), "number", (e) => Qf(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  ln((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  ln(yw, "URL", (e) => e.toString(), (e) => new URL(e))
];
function da(e, t, n, o) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: o
  };
}
var Km = da((e, t) => Um(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
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
].reduce((e, t) => (e[t.name] = t, e), {}), Wm = da(vw, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = bw[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function zm(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var qm = da(zm, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), Gm = da((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const o = n.customTransformerRegistry.findByName(t[1]);
  if (!o)
    throw new Error("Trying to deserialize unknown custom value");
  return o.deserialize(e);
}), ww = [qm, Km, Gm, Wm], Zf = (e, t) => {
  const n = Jf(ww, (r) => r.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const o = Jf(Hm, (r) => r.isApplicable(e, t));
  if (o)
    return {
      value: o.transform(e, t),
      type: o.annotation
    };
}, Ym = {};
Hm.forEach((e) => {
  Ym[e.annotation] = e;
});
var Ow = (e, t, n) => {
  if (no(t))
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
var rr = (e, t) => {
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
    if (ws(e))
      e = rr(e, +o);
    else if (bs(e)) {
      const r = +o, s = +t[++n] == 0 ? "key" : "value", i = rr(e, r);
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
}, Pl = (e, t, n) => {
  if (Xm(t), t.length === 0)
    return n(e);
  let o = e;
  for (let s = 0; s < t.length - 1; s++) {
    const i = t[s];
    if (no(o)) {
      const a = +i;
      o = o[a];
    } else if (ys(o))
      o = o[i];
    else if (ws(o)) {
      const a = +i;
      o = rr(o, a);
    } else if (bs(o)) {
      if (s === t.length - 2)
        break;
      const l = +i, f = +t[++s] == 0 ? "key" : "value", u = rr(o, l);
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
  if (no(o) ? o[+r] = n(o[+r]) : ys(o) && (o[r] = n(o[r])), ws(o)) {
    const s = rr(o, +r), i = n(s);
    s !== i && (o.delete(s), o.add(i));
  }
  if (bs(o)) {
    const s = +t[t.length - 2], i = rr(o, s);
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
function Vl(e, t, n = []) {
  if (!e)
    return;
  if (!no(e)) {
    _r(e, (s, i) => Vl(s, t, [...n, ...os(i)]));
    return;
  }
  const [o, r] = e;
  r && _r(r, (s, i) => {
    Vl(s, t, [...n, ...os(i)]);
  }), t(o, n);
}
function Nw(e, t, n) {
  return Vl(t, (o, r) => {
    e = Pl(e, r, (s) => Ow(s, o, n));
  }), e;
}
function Sw(e, t) {
  function n(o, r) {
    const s = Aw(e, os(r));
    o.map(os).forEach((i) => {
      e = Pl(e, i, () => s);
    });
  }
  if (no(t)) {
    const [o, r] = t;
    o.forEach((s) => {
      e = Pl(e, os(s), () => e);
    }), r && _r(r, n);
  } else
    _r(t, n);
  return e;
}
var Tw = (e, t) => ys(e) || no(e) || bs(e) || ws(e) || zm(e, t);
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
  }), o ? kl(n) ? [o] : [o, n] : kl(n) ? void 0 : n;
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
    const h = Zf(e, n), m = h ? {
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
  const f = Zf(e, n), u = (a = f?.value) != null ? a : e, c = no(u) ? [] : {}, d = {};
  _r(u, (h, m) => {
    if (m === "__proto__" || m === "constructor" || m === "prototype")
      throw new Error(`Detected property ${m}. This is a prototype pollution risk, please remove it from your object.`);
    const g = Jm(h, t, n, o, [...r, m], [...s, e], i);
    c[m] = g.transformedValue, no(g.annotations) ? d[m] = g.annotations : ys(g.annotations) && _r(g.annotations, (v, O) => {
      d[jm(m) + "." + O] = v;
    });
  });
  const p = kl(d) ? {
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
function ed(e) {
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
function Ll(e, t = {}) {
  if (ed(e))
    return e.map((r) => Ll(r, t));
  if (!xw(e))
    return e;
  const n = Object.getOwnPropertyNames(e), o = Object.getOwnPropertySymbols(e);
  return [...n, ...o].reduce((r, s) => {
    if (ed(t.props) && !t.props.includes(s))
      return r;
    const i = e[s], a = Ll(i, t);
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
    let o = Ll(t);
    return n?.values && (o = Nw(o, n.values, this)), n?.referentialEqualities && (o = Sw(o, n.referentialEqualities)), o;
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
var td, nd;
(nd = (td = ee).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (td.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var od, rd;
(rd = (od = ee).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (od.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var sd, id;
(id = (sd = ee).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (sd.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var ad, ld;
(ld = (ad = ee).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (ad.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var ud, cd;
(cd = (ud = ee).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (ud.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var fd, dd;
(dd = (fd = ee).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (fd.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
F();
F();
F();
F();
F();
F();
F();
var be = {};
let Yr;
const Os = (e) => Yr = e, Zm = be.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Fo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var mn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(mn || (mn = {}));
const eo = typeof window < "u", pd = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Iw(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Vu(e, t, n) {
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
const gi = typeof navigator == "object" ? navigator : { userAgent: "" }, t_ = /Macintosh/.test(gi.userAgent) && /AppleWebKit/.test(gi.userAgent) && !/Safari/.test(gi.userAgent), n_ = eo ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !t_ ? $w : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in gi ? kw : (
      // Fallback to using FileReader and a popup
      Pw
    )
  )
) : () => {
};
function $w(e, t = "download", n) {
  const o = document.createElement("a");
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? e_(o.href) ? Vu(e, t, n) : (o.target = "_blank", _i(o)) : _i(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    _i(o);
  }, 0));
}
function kw(e, t = "download", n) {
  if (typeof e == "string")
    if (e_(e))
      Vu(e, t, n);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        _i(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Iw(e, n), t);
}
function Pw(e, t, n, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return Vu(e, t, n);
  const r = e.type === "application/octet-stream", s = /constructor/i.test(String(pd.HTMLElement)) || "safari" in pd, i = /CriOS\/[\d]+/.test(navigator.userAgent);
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
function ot(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Lu(e) {
  return "_a" in e && "install" in e;
}
function o_() {
  if (!("clipboard" in navigator))
    return ot("Your browser doesn't support the Clipboard API", "error"), !0;
}
function r_(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (ot('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Vw(e) {
  if (!o_())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), ot("Global state copied to clipboard.");
    } catch (t) {
      if (r_(t))
        return;
      ot("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Lw(e) {
  if (!o_())
    try {
      s_(e, JSON.parse(await navigator.clipboard.readText())), ot("Global state pasted from clipboard.");
    } catch (t) {
      if (r_(t))
        return;
      ot("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Mw(e) {
  try {
    n_(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    ot("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Tn;
function Fw() {
  Tn || (Tn = document.createElement("input"), Tn.type = "file", Tn.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Tn.onchange = async () => {
        const o = Tn.files;
        if (!o)
          return t(null);
        const r = o.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, Tn.oncancel = () => t(null), Tn.onerror = n, Tn.click();
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
function Kt(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const i_ = "🍍 Pinia (root)", Ei = "_root";
function Uw(e) {
  return Lu(e) ? {
    id: Ei,
    label: i_
  } : {
    id: e.$id,
    label: e.$id
  };
}
function jw(e) {
  if (Lu(e)) {
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
function Hw(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Kt(e.type),
    key: Kt(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Kw(e) {
  switch (e) {
    case mn.direct:
      return "mutation";
    case mn.patchFunction:
      return "$patch";
    case mn.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let sr = !0;
const vi = [], vo = "pinia:mutations", at = "pinia", { assign: Ww } = Object, Bi = (e) => "🍍 " + e;
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
    typeof n.now != "function" && ot("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: vo,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: at,
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
            await Lw(t), n.sendInspectorTree(at), n.sendInspectorState(at);
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
            await Bw(t), n.sendInspectorTree(at), n.sendInspectorState(at);
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
            type: Bi(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: fe(i.$state),
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
      if (o.app === e && o.inspectorId === at) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? r.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(o.filter.toLowerCase()) : i_.toLowerCase().includes(o.filter.toLowerCase())) : r).map(Uw);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === at) {
        const r = o.nodeId === Ei ? t : t._s.get(o.nodeId);
        if (!r)
          return;
        r && (o.nodeId !== Ei && (globalThis.$store = fe(r)), o.state = jw(r));
      }
    }), n.on.editInspectorState((o) => {
      if (o.app === e && o.inspectorId === at) {
        const r = o.nodeId === Ei ? t : t._s.get(o.nodeId);
        if (!r)
          return ot(`store "${o.nodeId}" not found`, "error");
        const { path: s } = o;
        Lu(r) ? s.unshift("state") : (s.length !== 1 || !r._customProperties.has(s[0]) || s[0] in r.$state) && s.unshift("$state"), sr = !1, o.set(r, s, o.state.value), sr = !0;
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
        i[0] = "$state", sr = !1, o.set(s, i, o.state.value), sr = !0;
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
        layerId: vo,
        event: {
          time: o(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: Kt(t.$id),
            action: Kt(l),
            args: f
          },
          groupId: u
        }
      }), i((c) => {
        to = void 0, n.addTimelineEvent({
          layerId: vo,
          event: {
            time: o(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: Kt(t.$id),
              action: Kt(l),
              args: f,
              result: c
            },
            groupId: u
          }
        });
      }), a((c) => {
        to = void 0, n.addTimelineEvent({
          layerId: vo,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: Kt(t.$id),
              action: Kt(l),
              args: f,
              error: c
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      $n(() => ye(t[i]), (a, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(at), sr && n.addTimelineEvent({
          layerId: vo,
          event: {
            time: o(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: l
            },
            groupId: to
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(at), !sr)
        return;
      const f = {
        time: o(),
        title: Kw(a),
        data: Ww({ store: Kt(t.$id) }, Hw(i)),
        groupId: to
      };
      a === mn.patchFunction ? f.subtitle = "⤵️" : a === mn.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: vo,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Qn((i) => {
      r(i), n.addTimelineEvent({
        layerId: vo,
        event: {
          time: o(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Kt(t.$id),
            info: Kt("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(at), n.sendInspectorState(at);
    });
    const { $dispose: s } = t;
    t.$dispose = () => {
      s(), n.notifyComponentUpdate(), n.sendInspectorTree(at), n.sendInspectorState(at), n.getSettings().logStoreChanges && ot(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(at), n.sendInspectorState(at), n.getSettings().logStoreChanges && ot(`"${t.$id}" store installed 🆕`);
  });
}
let a_ = 0, to;
function hd(e, t, n) {
  const o = t.reduce((r, s) => (r[s] = fe(e)[s], r), {});
  for (const r in o)
    e[r] = function() {
      const s = a_, i = n ? new Proxy(e, {
        get(...l) {
          return to = s, Reflect.get(...l);
        },
        set(...l) {
          return to = s, Reflect.set(...l);
        }
      }) : e;
      to = s;
      const a = o[r].apply(i, arguments);
      return to = void 0, a;
    };
}
function Gw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      hd(t, Object.keys(n.actions), t._isOptionsAPI);
      const o = t._hotUpdate;
      fe(t)._hotUpdate = function(r) {
        o.apply(this, arguments), hd(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
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
  const e = Kp(!0), t = e.run(() => de({}));
  let n = [], o = [];
  const r = Qn({
    install(s) {
      Os(r), r._a = s, s.provide(Zm, r), s.config.globalProperties.$pinia = r, be.NODE_ENV !== "production" && be.NODE_ENV !== "test" && eo && zw(s, r), o.forEach((i) => n.push(i)), o = [];
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
  return be.NODE_ENV !== "production" && be.NODE_ENV !== "test" && eo && typeof Proxy < "u" && r.use(Gw), r;
}
function l_(e, t) {
  for (const n in t) {
    const o = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Fo(r) && Fo(o) && !Le(o) && !Yt(o) ? e[n] = l_(r, o) : e[n] = o;
  }
  return e;
}
const u_ = () => {
};
function md(e, t, n, o = u_) {
  e.push(t);
  const r = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), o());
  };
  return !n && Wp() && DE(r), r;
}
function Yo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Xw = (e) => e(), _d = Symbol(), Ha = Symbol();
function Ml(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, o) => e.set(o, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const o = t[n], r = e[n];
    Fo(r) && Fo(o) && e.hasOwnProperty(n) && !Le(o) && !Yt(o) ? e[n] = Ml(r, o) : e[n] = o;
  }
  return e;
}
const Jw = be.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Qw(e) {
  return !Fo(e) || !Object.prototype.hasOwnProperty.call(e, Jw);
}
const { assign: Pt } = Object;
function gd(e) {
  return !!(Le(e) && e.effect);
}
function Ed(e, t, n, o) {
  const { state: r, actions: s, getters: i } = t, a = n.state.value[e];
  let l;
  function f() {
    !a && (be.NODE_ENV === "production" || !o) && (n.state.value[e] = r ? r() : {});
    const u = be.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Zt(de(r ? r() : {}).value)
    ) : Zt(n.state.value[e]);
    return Pt(u, s, Object.keys(i || {}).reduce((c, d) => (be.NODE_ENV !== "production" && d in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`), c[d] = Qn(Oe(() => {
      Os(n);
      const p = n._s.get(e);
      return i[d].call(p, p);
    })), c), {}));
  }
  return l = Fl(e, f, t, n, o, !0), l;
}
function Fl(e, t, n = {}, o, r, s) {
  let i;
  const a = Pt({ actions: {} }, n);
  if (be.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  be.NODE_ENV !== "production" && (l.onTrigger = (I) => {
    f ? p = I : f == !1 && !S._hotUpdating && (Array.isArray(p) ? p.push(I) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, c = [], d = [], p;
  const h = o.state.value[e];
  !s && !h && (be.NODE_ENV === "production" || !r) && (o.state.value[e] = {});
  const m = de({});
  let g;
  function v(I) {
    let $;
    f = u = !1, be.NODE_ENV !== "production" && (p = []), typeof I == "function" ? (I(o.state.value[e]), $ = {
      type: mn.patchFunction,
      storeId: e,
      events: p
    }) : (Ml(o.state.value[e], I), $ = {
      type: mn.patchObject,
      payload: I,
      storeId: e,
      events: p
    });
    const D = g = Symbol();
    dr().then(() => {
      g === D && (f = !0);
    }), u = !0, Yo(c, $, o.state.value[e]);
  }
  const O = s ? function() {
    const { state: $ } = n, D = $ ? $() : {};
    this.$patch((q) => {
      Pt(q, D);
    });
  } : (
    /* istanbul ignore next */
    be.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : u_
  );
  function y() {
    i.stop(), c = [], d = [], o._s.delete(e);
  }
  const R = (I, $ = "") => {
    if (_d in I)
      return I[Ha] = $, I;
    const D = function() {
      Os(o);
      const q = Array.from(arguments), ue = [], he = [];
      function Q(le) {
        ue.push(le);
      }
      function H(le) {
        he.push(le);
      }
      Yo(d, {
        args: q,
        name: D[Ha],
        store: S,
        after: Q,
        onError: H
      });
      let Z;
      try {
        Z = I.apply(this && this.$id === e ? this : S, q);
      } catch (le) {
        throw Yo(he, le), le;
      }
      return Z instanceof Promise ? Z.then((le) => (Yo(ue, le), le)).catch((le) => (Yo(he, le), Promise.reject(le))) : (Yo(ue, Z), Z);
    };
    return D[_d] = !0, D[Ha] = $, D;
  }, N = /* @__PURE__ */ Qn({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), C = {
    _p: o,
    // _s: scope,
    $id: e,
    $onAction: md.bind(null, d),
    $patch: v,
    $reset: O,
    $subscribe(I, $ = {}) {
      const D = md(c, I, $.detached, () => q()), q = i.run(() => $n(() => o.state.value[e], (ue) => {
        ($.flush === "sync" ? u : f) && I({
          storeId: e,
          type: mn.direct,
          events: p
        }, ue);
      }, Pt({}, l, $)));
      return D;
    },
    $dispose: y
  }, S = Sr(be.NODE_ENV !== "production" || be.NODE_ENV !== "production" && be.NODE_ENV !== "test" && eo ? Pt(
    {
      _hmrPayload: N,
      _customProperties: Qn(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    C
    // must be added later
    // setupStore
  ) : C);
  o._s.set(e, S);
  const P = (o._a && o._a.runWithContext || Xw)(() => o._e.run(() => (i = Kp()).run(() => t({ action: R }))));
  for (const I in P) {
    const $ = P[I];
    if (Le($) && !gd($) || Yt($))
      be.NODE_ENV !== "production" && r ? m.value[I] = ii(P, I) : s || (h && Qw($) && (Le($) ? $.value = h[I] : Ml($, h[I])), o.state.value[e][I] = $), be.NODE_ENV !== "production" && N.state.push(I);
    else if (typeof $ == "function") {
      const D = be.NODE_ENV !== "production" && r ? $ : R($, I);
      P[I] = D, be.NODE_ENV !== "production" && (N.actions[I] = $), a.actions[I] = $;
    } else be.NODE_ENV !== "production" && gd($) && (N.getters[I] = s ? (
      // @ts-expect-error
      n.getters[I]
    ) : $, eo && (P._getters || // @ts-expect-error: same
    (P._getters = Qn([]))).push(I));
  }
  if (Pt(S, P), Pt(fe(S), P), Object.defineProperty(S, "$state", {
    get: () => be.NODE_ENV !== "production" && r ? m.value : o.state.value[e],
    set: (I) => {
      if (be.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      v(($) => {
        Pt($, I);
      });
    }
  }), be.NODE_ENV !== "production" && (S._hotUpdate = Qn((I) => {
    S._hotUpdating = !0, I._hmrPayload.state.forEach(($) => {
      if ($ in S.$state) {
        const D = I.$state[$], q = S.$state[$];
        typeof D == "object" && Fo(D) && Fo(q) ? l_(D, q) : I.$state[$] = q;
      }
      S[$] = ii(I.$state, $);
    }), Object.keys(S.$state).forEach(($) => {
      $ in I.$state || delete S[$];
    }), f = !1, u = !1, o.state.value[e] = ii(I._hmrPayload, "hotState"), u = !0, dr().then(() => {
      f = !0;
    });
    for (const $ in I._hmrPayload.actions) {
      const D = I[$];
      S[$] = //
      R(D, $);
    }
    for (const $ in I._hmrPayload.getters) {
      const D = I._hmrPayload.getters[$], q = s ? (
        // special handling of options api
        Oe(() => (Os(o), D.call(S, S)))
      ) : D;
      S[$] = //
      q;
    }
    Object.keys(S._hmrPayload.getters).forEach(($) => {
      $ in I._hmrPayload.getters || delete S[$];
    }), Object.keys(S._hmrPayload.actions).forEach(($) => {
      $ in I._hmrPayload.actions || delete S[$];
    }), S._hmrPayload = I._hmrPayload, S._getters = I._getters, S._hotUpdating = !1;
  })), be.NODE_ENV !== "production" && be.NODE_ENV !== "test" && eo) {
    const I = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach(($) => {
      Object.defineProperty(S, $, Pt({ value: S[$] }, I));
    });
  }
  return o._p.forEach((I) => {
    if (be.NODE_ENV !== "production" && be.NODE_ENV !== "test" && eo) {
      const $ = i.run(() => I({
        store: S,
        app: o._a,
        pinia: o,
        options: a
      }));
      Object.keys($ || {}).forEach((D) => S._customProperties.add(D)), Pt(S, $);
    } else
      Pt(S, i.run(() => I({
        store: S,
        app: o._a,
        pinia: o,
        options: a
      })));
  }), be.NODE_ENV !== "production" && S.$state && typeof S.$state == "object" && typeof S.$state.constructor == "function" && !S.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${S.$id}".`), h && s && n.hydrate && n.hydrate(S.$state, h), f = !0, u = !0, S;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mu(e, t, n) {
  let o;
  const r = typeof t == "function";
  o = r ? n : t;
  function s(i, a) {
    const l = ey();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (be.NODE_ENV === "test" && Yr && Yr._testing ? null : i) || (l ? Lt(Zm, null) : null), i && Os(i), be.NODE_ENV !== "production" && !Yr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = Yr, i._s.has(e) || (r ? Fl(e, t, o, i) : Ed(e, o, i), be.NODE_ENV !== "production" && (s._pinia = i));
    const f = i._s.get(e);
    if (be.NODE_ENV !== "production" && a) {
      const u = "__hot:" + e, c = r ? Fl(u, t, o, i, !0) : Ed(u, Pt({}, o), i, !0);
      a._hotUpdate(c), delete i.state.value[u], i._s.delete(u);
    }
    if (be.NODE_ENV !== "production" && eo) {
      const u = On();
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
function c_(e) {
  const t = fe(e), n = {};
  for (const o in t) {
    const r = t[o];
    r.effect ? n[o] = // ...
    Oe({
      get: () => e[o],
      set(s) {
        e[o] = s;
      }
    }) : (Le(r) || Yt(r)) && (n[o] = // ---
    ii(e, o));
  }
  return n;
}
function Zw() {
  return f_().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function f_() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const eO = typeof Proxy == "function", tO = "devtools-plugin:setup", nO = "plugin:settings:set";
let Xo, Bl;
function oO() {
  var e;
  return Xo !== void 0 || (typeof window < "u" && window.performance ? (Xo = !0, Bl = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Xo = !0, Bl = globalThis.perf_hooks.performance) : Xo = !1), Xo;
}
function rO() {
  return oO() ? Bl.now() : Date.now();
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
  const n = e, o = f_(), r = Zw(), s = eO && n.enableEarlyProxy;
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
const Rn = typeof document < "u";
function d_(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function aO(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && d_(e.default);
}
const Te = Object.assign;
function Ka(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Dt(r) ? r.map(e) : e(r);
  }
  return n;
}
const rs = () => {
}, Dt = Array.isArray;
function ge(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const p_ = /#/g, lO = /&/g, uO = /\//g, cO = /=/g, fO = /\?/g, h_ = /\+/g, dO = /%5B/g, pO = /%5D/g, m_ = /%5E/g, hO = /%60/g, __ = /%7B/g, mO = /%7C/g, g_ = /%7D/g, _O = /%20/g;
function Fu(e) {
  return encodeURI("" + e).replace(mO, "|").replace(dO, "[").replace(pO, "]");
}
function gO(e) {
  return Fu(e).replace(__, "{").replace(g_, "}").replace(m_, "^");
}
function Ul(e) {
  return Fu(e).replace(h_, "%2B").replace(_O, "+").replace(p_, "%23").replace(lO, "%26").replace(hO, "`").replace(__, "{").replace(g_, "}").replace(m_, "^");
}
function EO(e) {
  return Ul(e).replace(cO, "%3D");
}
function vO(e) {
  return Fu(e).replace(p_, "%23").replace(fO, "%3F");
}
function yO(e) {
  return e == null ? "" : vO(e).replace(uO, "%2F");
}
function gr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    pe.NODE_ENV !== "production" && ge(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const bO = /\/$/, wO = (e) => e.replace(bO, "");
function Wa(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), r = e(s)), a > -1 && (o = o || t.slice(0, a), i = t.slice(a, t.length)), o = NO(o ?? t, n), {
    fullPath: o + (s && "?") + s + i,
    path: o,
    query: r,
    hash: gr(i)
  };
}
function OO(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function vd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function yd(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && oo(t.matched[o], n.matched[r]) && E_(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function oo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function E_(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!AO(e[n], t[n]))
      return !1;
  return !0;
}
function AO(e, t) {
  return Dt(e) ? bd(e, t) : Dt(t) ? bd(t, e) : e === t;
}
function bd(e, t) {
  return Dt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function NO(e, t) {
  if (e.startsWith("/"))
    return e;
  if (pe.NODE_ENV !== "production" && !t.startsWith("/"))
    return ge(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
const Kn = {
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
var As;
(function(e) {
  e.pop = "pop", e.push = "push";
})(As || (As = {}));
var ss;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ss || (ss = {}));
function SO(e) {
  if (!e)
    if (Rn) {
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
const pa = () => ({
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
          ge(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        ge(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      pe.NODE_ENV !== "production" && ge(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = DO(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function wd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const jl = /* @__PURE__ */ new Map();
function RO(e, t) {
  jl.set(e, t);
}
function IO(e) {
  const t = jl.get(e);
  return jl.delete(e), t;
}
let $O = () => location.protocol + "//" + location.host;
function v_(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let a = r.includes(e.slice(s)) ? e.slice(s).length : 1, l = r.slice(a);
    return l[0] !== "/" && (l = "/" + l), vd(l, "");
  }
  return vd(n, e) + o + r;
}
function kO(e, t, n, o) {
  let r = [], s = [], i = null;
  const a = ({ state: d }) => {
    const p = v_(e, location), h = n.value, m = t.value;
    let g = 0;
    if (d) {
      if (n.value = p, t.value = d, i && i === h) {
        i = null;
        return;
      }
      g = m ? d.position - m.position : 0;
    } else
      o(p);
    r.forEach((v) => {
      v(n.value, h, {
        delta: g,
        type: As.pop,
        direction: g ? g > 0 ? ss.forward : ss.back : ss.unknown
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
    d.state && d.replaceState(Te({}, d.state, { scroll: pa() }), "");
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
function Od(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? pa() : null
  };
}
function PO(e) {
  const { history: t, location: n } = window, o = {
    value: v_(e, n)
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
      pe.NODE_ENV !== "production" ? ge("Error with push/replace State", p) : console.error(p), n[u ? "replace" : "assign"](d);
    }
  }
  function i(l, f) {
    const u = Te({}, t.state, Od(
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
        scroll: pa()
      }
    );
    pe.NODE_ENV !== "production" && !t.state && ge(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), s(u.current, u, !0);
    const c = Te({}, Od(o.value, l, null), { position: u.position + 1 }, f);
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
  e = SO(e);
  const t = PO(e), n = kO(e, t.state, t.location, t.replace);
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
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), pe.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && ge(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), VO(e);
}
function Ui(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function y_(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Hl = Symbol(pe.NODE_ENV !== "production" ? "navigation failure" : "");
var Ad;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ad || (Ad = {}));
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
function Er(e, t) {
  return pe.NODE_ENV !== "production" ? Te(new Error(MO[e](t)), {
    type: e,
    [Hl]: !0
  }, t) : Te(new Error(), {
    type: e,
    [Hl]: !0
  }, t);
}
function Cn(e, t) {
  return e instanceof Error && Hl in e && (t == null || !!(e.type & t));
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
const Nd = "[^/]+?", UO = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, jO = /[.+*?^${}()[\]/\\]/g;
function HO(e, t) {
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
        c || (r += "/"), r += d.value.replace(jO, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: h, repeatable: m, optional: g, regexp: v } = d;
        s.push({
          name: h,
          repeatable: m,
          optional: g
        });
        const O = v || Nd;
        if (O !== Nd) {
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
          const { value: h, repeatable: m, optional: g } = p, v = h in f ? f[h] : "";
          if (Dt(v) && !m)
            throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const O = Dt(v) ? v.join("/") : v;
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
function b_(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = KO(o[n], r[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (Sd(o))
      return 1;
    if (Sd(r))
      return -1;
  }
  return r.length - o.length;
}
function Sd(e) {
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
  const o = HO(qO(e.path), n);
  if (pe.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      s.has(i.name) && ge(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
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
  t = xd({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(c) {
    return o.get(c);
  }
  function s(c, d, p) {
    const h = !p, m = Cd(c);
    pe.NODE_ENV !== "production" && ZO(m, d), m.aliasOf = p && p.record;
    const g = xd(t, c), v = [m];
    if ("alias" in c) {
      const R = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const N of R)
        v.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Cd(Te({}, m, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: p ? p.record.components : m.components,
            path: N,
            // we might be the child of an alias
            aliasOf: p ? p.record : m
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let O, y;
    for (const R of v) {
      const { path: N } = R;
      if (d && N[0] !== "/") {
        const C = d.record.path, S = C[C.length - 1] === "/" ? "" : "/";
        R.path = d.record.path + (N && S + N);
      }
      if (pe.NODE_ENV !== "production" && R.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (O = GO(R, d, g), pe.NODE_ENV !== "production" && d && N[0] === "/" && tA(O, d), p ? (p.alias.push(O), pe.NODE_ENV !== "production" && QO(p, O)) : (y = y || O, y !== O && y.alias.push(O), h && c.name && !Dd(O) && (pe.NODE_ENV !== "production" && eA(c, d), i(c.name))), w_(O) && l(O), m.children) {
        const C = m.children;
        for (let S = 0; S < C.length; S++)
          s(C[S], O, p && p.children[S]);
      }
      p = p || O;
    }
    return y ? () => {
      i(y);
    } : rs;
  }
  function i(c) {
    if (y_(c)) {
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
    n.splice(d, 0, c), c.record.name && !Dd(c) && o.set(c.record.name, c);
  }
  function f(c, d) {
    let p, h = {}, m, g;
    if ("name" in c && c.name) {
      if (p = o.get(c.name), !p)
        throw Er(1, {
          location: c
        });
      if (pe.NODE_ENV !== "production") {
        const y = Object.keys(c.params || {}).filter((R) => !p.keys.find((N) => N.name === R));
        y.length && ge(`Discarded invalid param(s) "${y.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      g = p.record.name, h = Te(
        // paramsFromLocation is a new object
        Td(
          d.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          p.keys.filter((y) => !y.optional).concat(p.parent ? p.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && Td(c.params, p.keys.map((y) => y.name))
      ), m = p.stringify(h);
    } else if (c.path != null)
      m = c.path, pe.NODE_ENV !== "production" && !m.startsWith("/") && ge(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), p = n.find((y) => y.re.test(m)), p && (h = p.parse(m), g = p.record.name);
    else {
      if (p = d.name ? o.get(d.name) : n.find((y) => y.re.test(d.path)), !p)
        throw Er(1, {
          location: c,
          currentLocation: d
        });
      g = p.record.name, h = Te({}, d.params, c.params), m = p.stringify(h);
    }
    const v = [];
    let O = p;
    for (; O; )
      v.unshift(O.record), O = O.parent;
    return {
      name: g,
      path: m,
      params: h,
      matched: v,
      meta: JO(v)
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
function Td(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Cd(e) {
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
function Dd(e) {
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
function xd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Kl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function QO(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Kl.bind(null, n)))
      return ge(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Kl.bind(null, n)))
      return ge(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function ZO(e, t) {
  t && t.record.name && !e.name && !e.path && ge(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function eA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function tA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Kl.bind(null, n)))
      return ge(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function nA(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const s = n + o >> 1;
    b_(e, t[s]) < 0 ? o = s : n = s + 1;
  }
  const r = oA(e);
  return r && (o = t.lastIndexOf(r, o - 1), pe.NODE_ENV !== "production" && o < 0 && ge(`Finding ancestor route "${r.record.path}" failed for "${e.record.path}"`)), o;
}
function oA(e) {
  let t = e;
  for (; t = t.parent; )
    if (w_(t) && b_(e, t) === 0)
      return t;
}
function w_({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function rA(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(h_, " "), i = s.indexOf("="), a = gr(i < 0 ? s : s.slice(0, i)), l = i < 0 ? null : gr(s.slice(i + 1));
    if (a in t) {
      let f = t[a];
      Dt(f) || (f = t[a] = [f]), f.push(l);
    } else
      t[a] = l;
  }
  return t;
}
function Rd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = EO(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Dt(o) ? o.map((s) => s && Ul(s)) : [o && Ul(o)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function sA(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Dt(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const iA = Symbol(pe.NODE_ENV !== "production" ? "router view location matched" : ""), Id = Symbol(pe.NODE_ENV !== "production" ? "router view depth" : ""), Bu = Symbol(pe.NODE_ENV !== "production" ? "router" : ""), Uu = Symbol(pe.NODE_ENV !== "production" ? "route location" : ""), Wl = Symbol(pe.NODE_ENV !== "production" ? "router view location" : "");
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
function Yn(e, t, n, o, r, s = (i) => i()) {
  const i = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((a, l) => {
    const f = (d) => {
      d === !1 ? l(Er(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : Ui(d) ? l(Er(2, {
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
        c = c.then((p) => f._called ? p : (ge(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        ge(d), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((d) => l(d));
  });
}
function aA(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && ge(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function za(e, t, n, o, r = (s) => s()) {
  const s = [];
  for (const i of e) {
    pe.NODE_ENV !== "production" && !i.components && !i.children.length && ge(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let l = i.components[a];
      if (pe.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw ge(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          ge(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = l;
          l = () => f;
        } else l.__asyncLoader && // warn only once per component
        !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, ge(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (d_(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(Yn(u, n, o, i, a, r));
        } else {
          let f = l();
          pe.NODE_ENV !== "production" && !("catch" in f) && (ge(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), s.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const c = aO(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = c;
            const p = (c.__vccOpts || c)[t];
            return p && Yn(p, n, o, i, a, r)();
          }));
        }
    }
  }
  return s;
}
function $d(e) {
  const t = Lt(Bu), n = Lt(Uu);
  let o = !1, r = null;
  const s = Oe(() => {
    const u = ye(e.to);
    return pe.NODE_ENV !== "production" && (!o || u !== r) && (Ui(u) || (o ? ge(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, r, `
- props:`, e) : ge(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), r = u, o = !0), t.resolve(u);
  }), i = Oe(() => {
    const { matched: u } = s.value, { length: c } = u, d = u[c - 1], p = n.matched;
    if (!d || !p.length)
      return -1;
    const h = p.findIndex(oo.bind(null, d));
    if (h > -1)
      return h;
    const m = kd(u[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      kd(d) === m && // avoid comparing the child with its parent
      p[p.length - 1].path !== m ? p.findIndex(oo.bind(null, u[c - 2])) : h
    );
  }), a = Oe(() => i.value > -1 && dA(n.params, s.value.params)), l = Oe(() => i.value > -1 && i.value === n.matched.length - 1 && E_(n.params, s.value.params));
  function f(u = {}) {
    if (fA(u)) {
      const c = t[ye(e.replace) ? "replace" : "push"](
        ye(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(rs);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  if (pe.NODE_ENV !== "production" && Rn) {
    const u = On();
    if (u) {
      const c = {
        route: s.value,
        isActive: a.value,
        isExactActive: l.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(c), ra(() => {
        c.route = s.value, c.isActive = a.value, c.isExactActive = l.value, c.error = Ui(ye(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: Oe(() => s.value.href),
    isActive: a,
    isExactActive: l,
    navigate: f
  };
}
function lA(e) {
  return e.length === 1 ? e[0] : e;
}
const uA = /* @__PURE__ */ ke({
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
  useLink: $d,
  setup(e, { slots: t }) {
    const n = Sr($d(e)), { options: o } = Lt(Bu), r = Oe(() => ({
      [Pd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Pd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && lA(t.default(n));
      return e.custom ? s : Au("a", {
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
    } else if (!Dt(r) || r.length !== o.length || o.some((s, i) => s !== r[i]))
      return !1;
  }
  return !0;
}
function kd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Pd = (e, t, n) => e ?? t ?? n, pA = /* @__PURE__ */ ke({
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
    const o = Lt(Wl), r = Oe(() => e.route || o.value), s = Lt(Id, 0), i = Oe(() => {
      let f = ye(s);
      const { matched: u } = r.value;
      let c;
      for (; (c = u[f]) && !c.components; )
        f++;
      return f;
    }), a = Oe(() => r.value.matched[i.value]);
    es(Id, Oe(() => i.value + 1)), es(iA, a), es(Wl, r);
    const l = de();
    return $n(() => [l.value, a.value, e.name], ([f, u, c], [d, p, h]) => {
      u && (u.instances[c] = f, p && p !== u && f && f === d && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !oo(u, p) || !d) && (u.enterCallbacks[c] || []).forEach((m) => m(f));
    }, { flush: "post" }), () => {
      const f = r.value, u = e.name, c = a.value, d = c && c.components[u];
      if (!d)
        return Vd(n.default, { Component: d, route: f });
      const p = c.props[u], h = p ? p === !0 ? f.params : typeof p == "function" ? p(f) : p : null, g = Au(d, Te({}, h, t, {
        onVnodeUnmounted: (v) => {
          v.component.isUnmounted && (c.instances[u] = null);
        },
        ref: l
      }));
      if (pe.NODE_ENV !== "production" && Rn && g.ref) {
        const v = {
          depth: i.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Dt(g.ref) ? g.ref.map((y) => y.i) : [g.ref.i]).forEach((y) => {
          y.__vrv_devtools = v;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Vd(n.default, { Component: g, route: f }) || g
      );
    };
  }
});
function Vd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const hA = pA;
function mA() {
  const e = On(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    ge(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function jr(e, t) {
  const n = Te({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => SA(o, ["instances", "children", "aliasOf"]))
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
        value: jr(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: u, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const d = c.__vrv_devtools;
        u.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: O_
        });
      }
      Dt(c.__vrl_devtools) && (c.__devtoolsApi = r, c.__vrl_devtools.forEach((d) => {
        let p = d.route.path, h = S_, m = "", g = 0;
        d.error ? (p = d.error, h = wA, g = OA) : d.isExactActive ? (h = N_, m = "This is exactly active") : d.isActive && (h = A_, m = "This link is active"), u.tags.push({
          label: p,
          textColor: g,
          tooltip: m,
          backgroundColor: h
        });
      }));
    }), $n(t.currentRoute, () => {
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
        from: jr(c, "Current Location during this navigation"),
        to: jr(u, "Target location")
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
      }, p.status = Js("❌")) : p.status = Js("✅"), p.from = jr(c, "Current Location during this navigation"), p.to = jr(u, "Target location"), r.addTimelineEvent({
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
      c.forEach(D_), u.filter && (c = c.filter((d) => (
        // save matches state based on the payload
        zl(d, u.filter.toLowerCase())
      ))), c.forEach((d) => C_(d, t.currentRoute.value)), u.rootNodes = c.map(T_);
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
const O_ = 15485081, A_ = 2450411, N_ = 8702998, yA = 2282478, S_ = 16486972, bA = 6710886, wA = 16704226, OA = 12131356;
function T_(e) {
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
    backgroundColor: O_
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: N_
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: A_
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
    children: e.children.map(T_)
  };
}
let AA = 0;
const NA = /^\/(.*)\/([a-z]*)$/;
function C_(e, t) {
  const n = t.matched.length && oo(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => oo(o, e.record))), e.children.forEach((o) => C_(o, t));
}
function D_(e) {
  e.__vd_match = !1, e.children.forEach(D_);
}
function zl(e, t) {
  const n = String(e.re).match(NA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => zl(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), s = gr(r);
  return !t.startsWith("/") && (s.includes(t) || r.includes(t)) || s.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => zl(i, t));
}
function SA(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function TA(e) {
  const t = YO(e.routes, e), n = e.parseQuery || rA, o = e.stringifyQuery || Rd, r = e.history;
  if (pe.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const s = Ur(), i = Ur(), a = Ur(), l = uh(Kn);
  let f = Kn;
  Rn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Ka.bind(null, (x) => "" + x), c = Ka.bind(null, yO), d = (
    // @ts-expect-error: intentionally avoid the type check
    Ka.bind(null, gr)
  );
  function p(x, G) {
    let X, ne;
    return y_(x) ? (X = t.getRecordMatcher(x), pe.NODE_ENV !== "production" && !X && ge(`Parent route "${String(x)}" not found when adding child route`, G), ne = G) : ne = x, t.addRoute(ne, X);
  }
  function h(x) {
    const G = t.getRecordMatcher(x);
    G ? t.removeRoute(G) : pe.NODE_ENV !== "production" && ge(`Cannot remove non-existent route "${String(x)}"`);
  }
  function m() {
    return t.getRoutes().map((x) => x.record);
  }
  function g(x) {
    return !!t.getRecordMatcher(x);
  }
  function v(x, G) {
    if (G = Te({}, G || l.value), typeof x == "string") {
      const E = Wa(n, x, G.path), A = t.resolve({ path: E.path }, G), L = r.createHref(E.fullPath);
      return pe.NODE_ENV !== "production" && (L.startsWith("//") ? ge(`Location "${x}" resolved to "${L}". A resolved location cannot start with multiple slashes.`) : A.matched.length || ge(`No match found for location with path "${x}"`)), Te(E, A, {
        params: d(A.params),
        hash: gr(E.hash),
        redirectedFrom: void 0,
        href: L
      });
    }
    if (pe.NODE_ENV !== "production" && !Ui(x))
      return ge(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, x), v({});
    let X;
    if (x.path != null)
      pe.NODE_ENV !== "production" && "params" in x && !("name" in x) && // @ts-expect-error: the type is never
      Object.keys(x.params).length && ge(`Path "${x.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), X = Te({}, x, {
        path: Wa(n, x.path, G.path).path
      });
    else {
      const E = Te({}, x.params);
      for (const A in E)
        E[A] == null && delete E[A];
      X = Te({}, x, {
        params: c(E)
      }), G.params = c(G.params);
    }
    const ne = t.resolve(X, G), _e = x.hash || "";
    pe.NODE_ENV !== "production" && _e && !_e.startsWith("#") && ge(`A \`hash\` should always start with the character "#". Replace "${_e}" with "#${_e}".`), ne.params = u(d(ne.params));
    const je = OO(o, Te({}, x, {
      hash: gO(_e),
      path: ne.path
    })), _ = r.createHref(je);
    return pe.NODE_ENV !== "production" && (_.startsWith("//") ? ge(`Location "${x}" resolved to "${_}". A resolved location cannot start with multiple slashes.`) : ne.matched.length || ge(`No match found for location with path "${x.path != null ? x.path : x}"`)), Te({
      fullPath: je,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: _e,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Rd ? sA(x.query) : x.query || {}
      )
    }, ne, {
      redirectedFrom: void 0,
      href: _
    });
  }
  function O(x) {
    return typeof x == "string" ? Wa(n, x, l.value.path) : Te({}, x);
  }
  function y(x, G) {
    if (f !== x)
      return Er(8, {
        from: G,
        to: x
      });
  }
  function R(x) {
    return S(x);
  }
  function N(x) {
    return R(Te(O(x), { replace: !0 }));
  }
  function C(x) {
    const G = x.matched[x.matched.length - 1];
    if (G && G.redirect) {
      const { redirect: X } = G;
      let ne = typeof X == "function" ? X(x) : X;
      if (typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = O(ne) : (
        // force empty params
        { path: ne }
      ), ne.params = {}), pe.NODE_ENV !== "production" && ne.path == null && !("name" in ne))
        throw ge(`Invalid redirect found:
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
  function S(x, G) {
    const X = f = v(x), ne = l.value, _e = x.state, je = x.force, _ = x.replace === !0, E = C(X);
    if (E)
      return S(
        Te(O(E), {
          state: typeof E == "object" ? Te({}, _e, E.state) : _e,
          force: je,
          replace: _
        }),
        // keep original redirectedFrom if it exists
        G || X
      );
    const A = X;
    A.redirectedFrom = G;
    let L;
    return !je && yd(o, ne, X) && (L = Er(16, { to: A, from: ne }), qe(
      ne,
      ne,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (L ? Promise.resolve(L) : I(A, ne)).catch((k) => Cn(k) ? (
      // navigation redirects still mark the router as ready
      Cn(
        k,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? k : ze(k)
    ) : (
      // reject any unknown error
      Z(k, A, ne)
    )).then((k) => {
      if (k) {
        if (Cn(
          k,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return pe.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          yd(o, v(k.to), A) && // and we have done it a couple of times
          G && // @ts-expect-error: added only in dev
          (G._count = G._count ? (
            // @ts-expect-error
            G._count + 1
          ) : 1) > 30 ? (ge(`Detected a possibly infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${A.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : S(
            // keep options
            Te({
              // preserve an existing replacement but allow the redirect to override it
              replace: _
            }, O(k.to), {
              state: typeof k.to == "object" ? Te({}, _e, k.to.state) : _e,
              force: je
            }),
            // preserve the original redirectedFrom if any
            G || A
          );
      } else
        k = D(A, ne, !0, _, _e);
      return $(A, ne, k), k;
    });
  }
  function V(x, G) {
    const X = y(x, G);
    return X ? Promise.reject(X) : Promise.resolve();
  }
  function P(x) {
    const G = nt.values().next().value;
    return G && typeof G.runWithContext == "function" ? G.runWithContext(x) : x();
  }
  function I(x, G) {
    let X;
    const [ne, _e, je] = CA(x, G);
    X = za(ne.reverse(), "beforeRouteLeave", x, G);
    for (const E of ne)
      E.leaveGuards.forEach((A) => {
        X.push(Yn(A, x, G));
      });
    const _ = V.bind(null, x, G);
    return X.push(_), Et(X).then(() => {
      X = [];
      for (const E of s.list())
        X.push(Yn(E, x, G));
      return X.push(_), Et(X);
    }).then(() => {
      X = za(_e, "beforeRouteUpdate", x, G);
      for (const E of _e)
        E.updateGuards.forEach((A) => {
          X.push(Yn(A, x, G));
        });
      return X.push(_), Et(X);
    }).then(() => {
      X = [];
      for (const E of je)
        if (E.beforeEnter)
          if (Dt(E.beforeEnter))
            for (const A of E.beforeEnter)
              X.push(Yn(A, x, G));
          else
            X.push(Yn(E.beforeEnter, x, G));
      return X.push(_), Et(X);
    }).then(() => (x.matched.forEach((E) => E.enterCallbacks = {}), X = za(je, "beforeRouteEnter", x, G, P), X.push(_), Et(X))).then(() => {
      X = [];
      for (const E of i.list())
        X.push(Yn(E, x, G));
      return X.push(_), Et(X);
    }).catch((E) => Cn(
      E,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? E : Promise.reject(E));
  }
  function $(x, G, X) {
    a.list().forEach((ne) => P(() => ne(x, G, X)));
  }
  function D(x, G, X, ne, _e) {
    const je = y(x, G);
    if (je)
      return je;
    const _ = G === Kn, E = Rn ? history.state : {};
    X && (ne || _ ? r.replace(x.fullPath, Te({
      scroll: _ && E && E.scroll
    }, _e)) : r.push(x.fullPath, _e)), l.value = x, qe(x, G, X, _), ze();
  }
  let q;
  function ue() {
    q || (q = r.listen((x, G, X) => {
      if (!rt.listening)
        return;
      const ne = v(x), _e = C(ne);
      if (_e) {
        S(Te(_e, { replace: !0, force: !0 }), ne).catch(rs);
        return;
      }
      f = ne;
      const je = l.value;
      Rn && RO(wd(je.fullPath, X.delta), pa()), I(ne, je).catch((_) => Cn(
        _,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? _ : Cn(
        _,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (S(
        Te(O(_.to), {
          force: !0
        }),
        ne
        // avoid an uncaught rejection, let push call triggerError
      ).then((E) => {
        Cn(
          E,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !X.delta && X.type === As.pop && r.go(-1, !1);
      }).catch(rs), Promise.reject()) : (X.delta && r.go(-X.delta, !1), Z(_, ne, je))).then((_) => {
        _ = _ || D(
          // after navigation, all matched components are resolved
          ne,
          je,
          !1
        ), _ && (X.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Cn(
          _,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-X.delta, !1) : X.type === As.pop && Cn(
          _,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), $(ne, je, _);
      }).catch(rs);
    }));
  }
  let he = Ur(), Q = Ur(), H;
  function Z(x, G, X) {
    ze(x);
    const ne = Q.list();
    return ne.length ? ne.forEach((_e) => _e(x, G, X)) : (pe.NODE_ENV !== "production" && ge("uncaught error during route navigation:"), console.error(x)), Promise.reject(x);
  }
  function le() {
    return H && l.value !== Kn ? Promise.resolve() : new Promise((x, G) => {
      he.add([x, G]);
    });
  }
  function ze(x) {
    return H || (H = !x, ue(), he.list().forEach(([G, X]) => x ? X(x) : G()), he.reset()), x;
  }
  function qe(x, G, X, ne) {
    const { scrollBehavior: _e } = e;
    if (!Rn || !_e)
      return Promise.resolve();
    const je = !X && IO(wd(x.fullPath, 0)) || (ne || !X) && history.state && history.state.scroll || null;
    return dr().then(() => _e(x, G, je)).then((_) => _ && xO(_)).catch((_) => Z(_, x, G));
  }
  const Pe = (x) => r.go(x);
  let Ue;
  const nt = /* @__PURE__ */ new Set(), rt = {
    currentRoute: l,
    listening: !0,
    addRoute: p,
    removeRoute: h,
    clearRoutes: t.clearRoutes,
    hasRoute: g,
    getRoutes: m,
    resolve: v,
    options: e,
    push: R,
    replace: N,
    go: Pe,
    back: () => Pe(-1),
    forward: () => Pe(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: Q.add,
    isReady: le,
    install(x) {
      const G = this;
      x.component("RouterLink", cA), x.component("RouterView", hA), x.config.globalProperties.$router = G, Object.defineProperty(x.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ye(l)
      }), Rn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ue && l.value === Kn && (Ue = !0, R(r.location).catch((_e) => {
        pe.NODE_ENV !== "production" && ge("Unexpected error when starting the router:", _e);
      }));
      const X = {};
      for (const _e in Kn)
        Object.defineProperty(X, _e, {
          get: () => l.value[_e],
          enumerable: !0
        });
      x.provide(Bu, G), x.provide(Uu, lh(X)), x.provide(Wl, l);
      const ne = x.unmount;
      nt.add(x), x.unmount = function() {
        nt.delete(x), nt.size < 1 && (f = Kn, q && q(), q = null, l.value = Kn, Ue = !1, H = !1), ne();
      }, pe.NODE_ENV !== "production" && Rn && gA(x, G, t);
    }
  };
  function Et(x) {
    return x.reduce((G, X) => G.then(() => P(X)), Promise.resolve());
  }
  return rt;
}
function CA(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => oo(f, a)) ? o.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((f) => oo(f, l)) || r.push(l));
  }
  return [n, o, r];
}
function DA(e) {
  return Lt(Uu);
}
const xr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, xA = {}, RA = { class: "d-flex gap-2" };
function IA(e, t) {
  const n = Ln("router-link");
  return J(), te("div", RA, [
    Ne(n, { to: "/" }, {
      default: Ot(() => t[0] || (t[0] = [
        tt("Home")
      ])),
      _: 1,
      __: [0]
    }),
    Ne(n, { to: "/setup" }, {
      default: Ot(() => t[1] || (t[1] = [
        tt("Setup")
      ])),
      _: 1,
      __: [1]
    }),
    Ne(n, { to: "/monitor" }, {
      default: Ot(() => t[2] || (t[2] = [
        tt("Monitor")
      ])),
      _: 1,
      __: [2]
    })
  ]);
}
const $A = /* @__PURE__ */ xr(xA, [["render", IA]]), kA = /* @__PURE__ */ ke({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const o = Ln("router-view");
      return J(), te("div", null, [
        b("main", null, [
          Ne($A),
          Ne(o)
        ])
      ]);
    };
  }
}), PA = /* @__PURE__ */ xr(kA, [["__scopeId", "data-v-a42a7003"]]), VA = {};
function LA(e, t) {
  return J(), te("div", null, " home ");
}
const MA = /* @__PURE__ */ xr(VA, [["render", LA]]);
function x_(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: FA } = Object.prototype, { getPrototypeOf: ju } = Object, { iterator: ha, toStringTag: R_ } = Symbol, ma = /* @__PURE__ */ ((e) => (t) => {
  const n = FA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tn = (e) => (e = e.toLowerCase(), (t) => ma(t) === e), _a = (e) => (t) => typeof t === e, { isArray: Rr } = Array, Ns = _a("undefined");
function BA(e) {
  return e !== null && !Ns(e) && e.constructor !== null && !Ns(e.constructor) && At(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const I_ = tn("ArrayBuffer");
function UA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && I_(e.buffer), t;
}
const jA = _a("string"), At = _a("function"), $_ = _a("number"), ga = (e) => e !== null && typeof e == "object", HA = (e) => e === !0 || e === !1, yi = (e) => {
  if (ma(e) !== "object")
    return !1;
  const t = ju(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(R_ in e) && !(ha in e);
}, KA = tn("Date"), WA = tn("File"), zA = tn("Blob"), qA = tn("FileList"), GA = (e) => ga(e) && At(e.pipe), YA = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || At(e.append) && ((t = ma(e)) === "formdata" || // detect form-data instance
  t === "object" && At(e.toString) && e.toString() === "[object FormData]"));
}, XA = tn("URLSearchParams"), [JA, QA, ZA, eN] = ["ReadableStream", "Request", "Response", "Headers"].map(tn), tN = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ls(e, t, { allOwnKeys: n = !1 } = {}) {
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
function k_(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let o = n.length, r;
  for (; o-- > 0; )
    if (r = n[o], t === r.toLowerCase())
      return r;
  return null;
}
const Oo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, P_ = (e) => !Ns(e) && e !== Oo;
function ql() {
  const { caseless: e } = P_(this) && this || {}, t = {}, n = (o, r) => {
    const s = e && k_(t, r) || r;
    yi(t[s]) && yi(o) ? t[s] = ql(t[s], o) : yi(o) ? t[s] = ql({}, o) : Rr(o) ? t[s] = o.slice() : t[s] = o;
  };
  for (let o = 0, r = arguments.length; o < r; o++)
    arguments[o] && Ls(arguments[o], n);
  return t;
}
const nN = (e, t, n, { allOwnKeys: o } = {}) => (Ls(t, (r, s) => {
  n && At(r) ? e[s] = x_(r, n) : e[s] = r;
}, { allOwnKeys: o }), e), oN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), rN = (e, t, n, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, sN = (e, t, n, o) => {
  let r, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
      i = r[s], (!o || o(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && ju(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, iN = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const o = e.indexOf(t, n);
  return o !== -1 && o === n;
}, aN = (e) => {
  if (!e) return null;
  if (Rr(e)) return e;
  let t = e.length;
  if (!$_(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, lN = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ju(Uint8Array)), uN = (e, t) => {
  const o = (e && e[ha]).call(e);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const s = r.value;
    t.call(e, s[0], s[1]);
  }
}, cN = (e, t) => {
  let n;
  const o = [];
  for (; (n = e.exec(t)) !== null; )
    o.push(n);
  return o;
}, fN = tn("HTMLFormElement"), dN = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, r) {
    return o.toUpperCase() + r;
  }
), Ld = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), pN = tn("RegExp"), V_ = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), o = {};
  Ls(n, (r, s) => {
    let i;
    (i = t(r, s, e)) !== !1 && (o[s] = i || r);
  }), Object.defineProperties(e, o);
}, hN = (e) => {
  V_(e, (t, n) => {
    if (At(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const o = e[n];
    if (At(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, mN = (e, t) => {
  const n = {}, o = (r) => {
    r.forEach((s) => {
      n[s] = !0;
    });
  };
  return Rr(e) ? o(e) : o(String(e).split(t)), n;
}, _N = () => {
}, gN = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function EN(e) {
  return !!(e && At(e.append) && e[R_] === "FormData" && e[ha]);
}
const vN = (e) => {
  const t = new Array(10), n = (o, r) => {
    if (ga(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[r] = o;
        const s = Rr(o) ? [] : {};
        return Ls(o, (i, a) => {
          const l = n(i, r + 1);
          !Ns(l) && (s[a] = l);
        }), t[r] = void 0, s;
      }
    }
    return o;
  };
  return n(e, 0);
}, yN = tn("AsyncFunction"), bN = (e) => e && (ga(e) || At(e)) && At(e.then) && At(e.catch), L_ = ((e, t) => e ? setImmediate : t ? ((n, o) => (Oo.addEventListener("message", ({ source: r, data: s }) => {
  r === Oo && s === n && o.length && o.shift()();
}, !1), (r) => {
  o.push(r), Oo.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  At(Oo.postMessage)
), wN = typeof queueMicrotask < "u" ? queueMicrotask.bind(Oo) : typeof process < "u" && process.nextTick || L_, ON = (e) => e != null && At(e[ha]), T = {
  isArray: Rr,
  isArrayBuffer: I_,
  isBuffer: BA,
  isFormData: YA,
  isArrayBufferView: UA,
  isString: jA,
  isNumber: $_,
  isBoolean: HA,
  isObject: ga,
  isPlainObject: yi,
  isReadableStream: JA,
  isRequest: QA,
  isResponse: ZA,
  isHeaders: eN,
  isUndefined: Ns,
  isDate: KA,
  isFile: WA,
  isBlob: zA,
  isRegExp: pN,
  isFunction: At,
  isStream: GA,
  isURLSearchParams: XA,
  isTypedArray: lN,
  isFileList: qA,
  forEach: Ls,
  merge: ql,
  extend: nN,
  trim: tN,
  stripBOM: oN,
  inherits: rN,
  toFlatObject: sN,
  kindOf: ma,
  kindOfTest: tn,
  endsWith: iN,
  toArray: aN,
  forEachEntry: uN,
  matchAll: cN,
  isHTMLForm: fN,
  hasOwnProperty: Ld,
  hasOwnProp: Ld,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: V_,
  freezeMethods: hN,
  toObjectSet: mN,
  toCamelCase: dN,
  noop: _N,
  toFiniteNumber: gN,
  findKey: k_,
  global: Oo,
  isContextDefined: P_,
  isSpecCompliantForm: EN,
  toJSONObject: vN,
  isAsyncFn: yN,
  isThenable: bN,
  setImmediate: L_,
  asap: wN,
  isIterable: ON
};
function me(e, t, n, o, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), r && (this.response = r, this.status = r.status ? r.status : null);
}
T.inherits(me, Error, {
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
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const M_ = me.prototype, F_ = {};
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
  F_[e] = { value: e };
});
Object.defineProperties(me, F_);
Object.defineProperty(M_, "isAxiosError", { value: !0 });
me.from = (e, t, n, o, r, s) => {
  const i = Object.create(M_);
  return T.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), me.call(i, e.message, t, n, o, r), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const AN = null;
function Gl(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function B_(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Md(e, t, n) {
  return e ? e.concat(t).map(function(r, s) {
    return r = B_(r), !n && s ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function NN(e) {
  return T.isArray(e) && !e.some(Gl);
}
const SN = T.toFlatObject(T, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ea(e, t, n) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = T.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !T.isUndefined(g[m]);
  });
  const o = n.metaTokens, r = n.visitor || u, s = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
  if (!T.isFunction(r))
    throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (T.isDate(h))
      return h.toISOString();
    if (T.isBoolean(h))
      return h.toString();
    if (!l && T.isBlob(h))
      throw new me("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(h) || T.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, m, g) {
    let v = h;
    if (h && !g && typeof h == "object") {
      if (T.endsWith(m, "{}"))
        m = o ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (T.isArray(h) && NN(h) || (T.isFileList(h) || T.endsWith(m, "[]")) && (v = T.toArray(h)))
        return m = B_(m), v.forEach(function(y, R) {
          !(T.isUndefined(y) || y === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Md([m], R, s) : i === null ? m : m + "[]",
            f(y)
          );
        }), !1;
    }
    return Gl(h) ? !0 : (t.append(Md(g, m, s), f(h)), !1);
  }
  const c = [], d = Object.assign(SN, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: Gl
  });
  function p(h, m) {
    if (!T.isUndefined(h)) {
      if (c.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      c.push(h), T.forEach(h, function(v, O) {
        (!(T.isUndefined(v) || v === null) && r.call(
          t,
          v,
          T.isString(O) ? O.trim() : O,
          m,
          d
        )) === !0 && p(v, m ? m.concat(O) : [O]);
      }), c.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Fd(e) {
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
function Hu(e, t) {
  this._pairs = [], e && Ea(e, this, t);
}
const U_ = Hu.prototype;
U_.append = function(t, n) {
  this._pairs.push([t, n]);
};
U_.toString = function(t) {
  const n = t ? function(o) {
    return t.call(this, o, Fd);
  } : Fd;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function TN(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function j_(e, t, n) {
  if (!t)
    return e;
  const o = n && n.encode || TN;
  T.isFunction(n) && (n = {
    serialize: n
  });
  const r = n && n.serialize;
  let s;
  if (r ? s = r(t, n) : s = T.isURLSearchParams(t) ? t.toString() : new Hu(t, n).toString(o), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Bd {
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
    T.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const H_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, CN = typeof URLSearchParams < "u" ? URLSearchParams : Hu, DN = typeof FormData < "u" ? FormData : null, xN = typeof Blob < "u" ? Blob : null, RN = {
  isBrowser: !0,
  classes: {
    URLSearchParams: CN,
    FormData: DN,
    Blob: xN
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ku = typeof window < "u" && typeof document < "u", Yl = typeof navigator == "object" && navigator || void 0, IN = Ku && (!Yl || ["ReactNative", "NativeScript", "NS"].indexOf(Yl.product) < 0), $N = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", kN = Ku && window.location.href || "http://localhost", PN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ku,
  hasStandardBrowserEnv: IN,
  hasStandardBrowserWebWorkerEnv: $N,
  navigator: Yl,
  origin: kN
}, Symbol.toStringTag, { value: "Module" })), lt = {
  ...PN,
  ...RN
};
function VN(e, t) {
  return Ea(e, new lt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, r, s) {
      return lt.isNode && T.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function LN(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function MN(e) {
  const t = {}, n = Object.keys(e);
  let o;
  const r = n.length;
  let s;
  for (o = 0; o < r; o++)
    s = n[o], t[s] = e[s];
  return t;
}
function K_(e) {
  function t(n, o, r, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && T.isArray(r) ? r.length : i, l ? (T.hasOwnProp(r, i) ? r[i] = [r[i], o] : r[i] = o, !a) : ((!r[i] || !T.isObject(r[i])) && (r[i] = []), t(n, o, r[i], s) && T.isArray(r[i]) && (r[i] = MN(r[i])), !a);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const n = {};
    return T.forEachEntry(e, (o, r) => {
      t(LN(o), r, n, 0);
    }), n;
  }
  return null;
}
function FN(e, t, n) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (n || JSON.stringify)(e);
}
const Ms = {
  transitional: H_,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const o = n.getContentType() || "", r = o.indexOf("application/json") > -1, s = T.isObject(t);
    if (s && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
      return r ? JSON.stringify(K_(t)) : t;
    if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t) || T.isReadableStream(t))
      return t;
    if (T.isArrayBufferView(t))
      return t.buffer;
    if (T.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return VN(t, this.formSerializer).toString();
      if ((a = T.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ea(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || r ? (n.setContentType("application/json", !1), FN(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ms.transitional, o = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (T.isResponse(t) || T.isReadableStream(t))
      return t;
    if (t && T.isString(t) && (o && !this.responseType || r)) {
      const i = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? me.from(a, me.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: lt.classes.FormData,
    Blob: lt.classes.Blob
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
T.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ms.headers[e] = {};
});
const BN = T.toObjectSet([
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
]), UN = (e) => {
  const t = {};
  let n, o, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), o = i.substring(r + 1).trim(), !(!n || t[n] && BN[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o);
  }), t;
}, Ud = Symbol("internals");
function Hr(e) {
  return e && String(e).trim().toLowerCase();
}
function bi(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(bi) : String(e);
}
function jN(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const HN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function qa(e, t, n, o, r) {
  if (T.isFunction(o))
    return o.call(this, t, n);
  if (r && (t = n), !!T.isString(t)) {
    if (T.isString(o))
      return t.indexOf(o) !== -1;
    if (T.isRegExp(o))
      return o.test(t);
  }
}
function KN(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o);
}
function WN(e, t) {
  const n = T.toCamelCase(" " + t);
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
      const u = Hr(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const c = T.findKey(r, u);
      (!c || r[c] === void 0 || f === !0 || f === void 0 && r[c] !== !1) && (r[c || l] = bi(a));
    }
    const i = (a, l) => T.forEach(a, (f, u) => s(f, u, l));
    if (T.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (T.isString(t) && (t = t.trim()) && !HN(t))
      i(UN(t), n);
    else if (T.isObject(t) && T.isIterable(t)) {
      let a = {}, l, f;
      for (const u of t) {
        if (!T.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = u[0]] = (l = a[f]) ? T.isArray(l) ? [...l, u[1]] : [l, u[1]] : u[1];
      }
      i(a, n);
    } else
      t != null && s(n, t, o);
    return this;
  }
  get(t, n) {
    if (t = Hr(t), t) {
      const o = T.findKey(this, t);
      if (o) {
        const r = this[o];
        if (!n)
          return r;
        if (n === !0)
          return jN(r);
        if (T.isFunction(n))
          return n.call(this, r, o);
        if (T.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Hr(t), t) {
      const o = T.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!n || qa(this, this[o], o, n)));
    }
    return !1;
  }
  delete(t, n) {
    const o = this;
    let r = !1;
    function s(i) {
      if (i = Hr(i), i) {
        const a = T.findKey(o, i);
        a && (!n || qa(o, o[a], a, n)) && (delete o[a], r = !0);
      }
    }
    return T.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let o = n.length, r = !1;
    for (; o--; ) {
      const s = n[o];
      (!t || qa(this, this[s], s, t, !0)) && (delete this[s], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, o = {};
    return T.forEach(this, (r, s) => {
      const i = T.findKey(o, s);
      if (i) {
        n[i] = bi(r), delete n[s];
        return;
      }
      const a = t ? KN(s) : String(s).trim();
      a !== s && delete n[s], n[a] = bi(r), o[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (o, r) => {
      o != null && o !== !1 && (n[r] = t && T.isArray(o) ? o.join(", ") : o);
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
    const o = (this[Ud] = this[Ud] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(i) {
      const a = Hr(i);
      o[a] || (WN(r, i), o[a] = !0);
    }
    return T.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
Nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(Nt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[n] = o;
    }
  };
});
T.freezeMethods(Nt);
function Ga(e, t) {
  const n = this || Ms, o = t || n, r = Nt.from(o.headers);
  let s = o.data;
  return T.forEach(e, function(a) {
    s = a.call(n, s, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), s;
}
function W_(e) {
  return !!(e && e.__CANCEL__);
}
function Ir(e, t, n) {
  me.call(this, e ?? "canceled", me.ERR_CANCELED, t, n), this.name = "CanceledError";
}
T.inherits(Ir, me, {
  __CANCEL__: !0
});
function z_(e, t, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? e(n) : t(new me(
    "Request failed with status code " + n.status,
    [me.ERR_BAD_REQUEST, me.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function zN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qN(e, t) {
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
function GN(e, t) {
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
const ji = (e, t, n = 3) => {
  let o = 0;
  const r = qN(50, 250);
  return GN((s) => {
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
}, jd = (e, t) => {
  const n = e != null;
  return [(o) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: o
  }), t[1]];
}, Hd = (e) => (...t) => T.asap(() => e(...t)), YN = lt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, lt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(lt.origin),
  lt.navigator && /(msie|trident)/i.test(lt.navigator.userAgent)
) : () => !0, XN = lt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, o, r, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      T.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), T.isString(o) && i.push("path=" + o), T.isString(r) && i.push("domain=" + r), s === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function JN(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function QN(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function q_(e, t, n) {
  let o = !JN(t);
  return e && (o || n == !1) ? QN(e, t) : t;
}
const Kd = (e) => e instanceof Nt ? { ...e } : e;
function Bo(e, t) {
  t = t || {};
  const n = {};
  function o(f, u, c, d) {
    return T.isPlainObject(f) && T.isPlainObject(u) ? T.merge.call({ caseless: d }, f, u) : T.isPlainObject(u) ? T.merge({}, u) : T.isArray(u) ? u.slice() : u;
  }
  function r(f, u, c, d) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(f))
        return o(void 0, f, c, d);
    } else return o(f, u, c, d);
  }
  function s(f, u) {
    if (!T.isUndefined(u))
      return o(void 0, u);
  }
  function i(f, u) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(f))
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
    headers: (f, u, c) => r(Kd(f), Kd(u), c, !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const c = l[u] || r, d = c(e[u], t[u], u);
    T.isUndefined(d) && c !== a || (n[u] = d);
  }), n;
}
const G_ = (e) => {
  const t = Bo({}, e);
  let { data: n, withXSRFToken: o, xsrfHeaderName: r, xsrfCookieName: s, headers: i, auth: a } = t;
  t.headers = i = Nt.from(i), t.url = j_(q_(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (T.isFormData(n)) {
    if (lt.hasStandardBrowserEnv || lt.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [f, ...u] = l ? l.split(";").map((c) => c.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (lt.hasStandardBrowserEnv && (o && T.isFunction(o) && (o = o(t)), o || o !== !1 && YN(t.url))) {
    const f = r && s && XN.read(s);
    f && i.set(r, f);
  }
  return t;
}, ZN = typeof XMLHttpRequest < "u", eS = ZN && function(e) {
  return new Promise(function(n, o) {
    const r = G_(e);
    let s = r.data;
    const i = Nt.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: f } = r, u, c, d, p, h;
    function m() {
      p && p(), h && h(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function v() {
      if (!g)
        return;
      const y = Nt.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), N = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: y,
        config: e,
        request: g
      };
      z_(function(S) {
        n(S), m();
      }, function(S) {
        o(S), m();
      }, N), g = null;
    }
    "onloadend" in g ? g.onloadend = v : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, g.onabort = function() {
      g && (o(new me("Request aborted", me.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      o(new me("Network Error", me.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let R = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const N = r.transitional || H_;
      r.timeoutErrorMessage && (R = r.timeoutErrorMessage), o(new me(
        R,
        N.clarifyTimeoutError ? me.ETIMEDOUT : me.ECONNABORTED,
        e,
        g
      )), g = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in g && T.forEach(i.toJSON(), function(R, N) {
      g.setRequestHeader(N, R);
    }), T.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), a && a !== "json" && (g.responseType = r.responseType), f && ([d, h] = ji(f, !0), g.addEventListener("progress", d)), l && g.upload && ([c, p] = ji(l), g.upload.addEventListener("progress", c), g.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (u = (y) => {
      g && (o(!y || y.type ? new Ir(null, e, g) : y), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const O = zN(r.url);
    if (O && lt.protocols.indexOf(O) === -1) {
      o(new me("Unsupported protocol " + O + ":", me.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(s || null);
  });
}, tS = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let o = new AbortController(), r;
    const s = function(f) {
      if (!r) {
        r = !0, a();
        const u = f instanceof Error ? f : this.reason;
        o.abort(u instanceof me ? u : new Ir(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new me(`timeout ${t} of ms exceeded`, me.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", s));
    const { signal: l } = o;
    return l.unsubscribe = () => T.asap(a), l;
  }
}, nS = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let o = 0, r;
  for (; o < n; )
    r = o + t, yield e.slice(o, r), o = r;
}, oS = async function* (e, t) {
  for await (const n of rS(e))
    yield* nS(n, t);
}, rS = async function* (e) {
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
}, Wd = (e, t, n, o) => {
  const r = oS(e, t);
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
}, va = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Y_ = va && typeof ReadableStream == "function", sS = va && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), X_ = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, iS = Y_ && X_(() => {
  let e = !1;
  const t = new Request(lt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), zd = 64 * 1024, Xl = Y_ && X_(() => T.isReadableStream(new Response("").body)), Hi = {
  stream: Xl && ((e) => e.body)
};
va && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Hi[t] && (Hi[t] = T.isFunction(e[t]) ? (n) => n[t]() : (n, o) => {
      throw new me(`Response type '${t}' is not supported`, me.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const aS = async (e) => {
  if (e == null)
    return 0;
  if (T.isBlob(e))
    return e.size;
  if (T.isSpecCompliantForm(e))
    return (await new Request(lt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (T.isArrayBufferView(e) || T.isArrayBuffer(e))
    return e.byteLength;
  if (T.isURLSearchParams(e) && (e = e + ""), T.isString(e))
    return (await sS(e)).byteLength;
}, lS = async (e, t) => {
  const n = T.toFiniteNumber(e.getContentLength());
  return n ?? aS(t);
}, uS = va && (async (e) => {
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
  } = G_(e);
  f = f ? (f + "").toLowerCase() : "text";
  let p = tS([r, s && s.toAbortSignal()], i), h;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let g;
  try {
    if (l && iS && n !== "get" && n !== "head" && (g = await lS(u, o)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: o,
        duplex: "half"
      }), C;
      if (T.isFormData(o) && (C = N.headers.get("content-type")) && u.setContentType(C), N.body) {
        const [S, V] = jd(
          g,
          ji(Hd(l))
        );
        o = Wd(N.body, zd, S, V);
      }
    }
    T.isString(c) || (c = c ? "include" : "omit");
    const v = "credentials" in Request.prototype;
    h = new Request(t, {
      ...d,
      signal: p,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: v ? c : void 0
    });
    let O = await fetch(h, d);
    const y = Xl && (f === "stream" || f === "response");
    if (Xl && (a || y && m)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((P) => {
        N[P] = O[P];
      });
      const C = T.toFiniteNumber(O.headers.get("content-length")), [S, V] = a && jd(
        C,
        ji(Hd(a), !0)
      ) || [];
      O = new Response(
        Wd(O.body, zd, S, () => {
          V && V(), m && m();
        }),
        N
      );
    }
    f = f || "text";
    let R = await Hi[T.findKey(Hi, f) || "text"](O, e);
    return !y && m && m(), await new Promise((N, C) => {
      z_(N, C, {
        data: R,
        headers: Nt.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: h
      });
    });
  } catch (v) {
    throw m && m(), v && v.name === "TypeError" && /Load failed|fetch/i.test(v.message) ? Object.assign(
      new me("Network Error", me.ERR_NETWORK, e, h),
      {
        cause: v.cause || v
      }
    ) : me.from(v, v && v.code, e, h);
  }
}), Jl = {
  http: AN,
  xhr: eS,
  fetch: uS
};
T.forEach(Jl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const qd = (e) => `- ${e}`, cS = (e) => T.isFunction(e) || e === null || e === !1, J_ = {
  getAdapter: (e) => {
    e = T.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, o;
    const r = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (o = n, !cS(n) && (o = Jl[(i = String(n)).toLowerCase()], o === void 0))
        throw new me(`Unknown adapter '${i}'`);
      if (o)
        break;
      r[i || "#" + s] = o;
    }
    if (!o) {
      const s = Object.entries(r).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(qd).join(`
`) : " " + qd(s[0]) : "as no adapter specified";
      throw new me(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: Jl
};
function Ya(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ir(null, e);
}
function Gd(e) {
  return Ya(e), e.headers = Nt.from(e.headers), e.data = Ga.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), J_.getAdapter(e.adapter || Ms.adapter)(e).then(function(o) {
    return Ya(e), o.data = Ga.call(
      e,
      e.transformResponse,
      o
    ), o.headers = Nt.from(o.headers), o;
  }, function(o) {
    return W_(o) || (Ya(e), o && o.response && (o.response.data = Ga.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = Nt.from(o.response.headers))), Promise.reject(o);
  });
}
const Q_ = "1.10.0", ya = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ya[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Yd = {};
ya.transitional = function(t, n, o) {
  function r(s, i) {
    return "[Axios v" + Q_ + "] Transitional option '" + s + "'" + i + (o ? ". " + o : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new me(
        r(i, " has been removed" + (n ? " in " + n : "")),
        me.ERR_DEPRECATED
      );
    return n && !Yd[i] && (Yd[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
ya.spelling = function(t) {
  return (n, o) => (console.warn(`${o} is likely a misspelling of ${t}`), !0);
};
function fS(e, t, n) {
  if (typeof e != "object")
    throw new me("options must be an object", me.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let r = o.length;
  for (; r-- > 0; ) {
    const s = o[r], i = t[s];
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new me("option " + s + " must be " + l, me.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new me("Unknown option " + s, me.ERR_BAD_OPTION);
  }
}
const wi = {
  assertOptions: fS,
  validators: ya
}, un = wi.validators;
let Io = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Bd(),
      response: new Bd()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Bo(this.defaults, n);
    const { transitional: o, paramsSerializer: r, headers: s } = n;
    o !== void 0 && wi.assertOptions(o, {
      silentJSONParsing: un.transitional(un.boolean),
      forcedJSONParsing: un.transitional(un.boolean),
      clarifyTimeoutError: un.transitional(un.boolean)
    }, !1), r != null && (T.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : wi.assertOptions(r, {
      encode: un.function,
      serialize: un.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), wi.assertOptions(n, {
      baseUrl: un.spelling("baseURL"),
      withXsrfToken: un.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && T.merge(
      s.common,
      s[n.method]
    );
    s && T.forEach(
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
      const h = [Gd.bind(this), void 0];
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
      u = Gd.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, d = f.length; c < d; )
      u = u.then(f[c++], f[c++]);
    return u;
  }
  getUri(t) {
    t = Bo(this.defaults, t);
    const n = q_(t.baseURL, t.url, t.allowAbsoluteUrls);
    return j_(n, t.params, t.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function(t) {
  Io.prototype[t] = function(n, o) {
    return this.request(Bo(o || {}, {
      method: t,
      url: n,
      data: (o || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(t) {
  function n(o) {
    return function(s, i, a) {
      return this.request(Bo(a || {}, {
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
let dS = class Z_ {
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
      o.reason || (o.reason = new Ir(s, i, a), n(o.reason));
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
      token: new Z_(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function pS(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function hS(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const Ql = {
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
Object.entries(Ql).forEach(([e, t]) => {
  Ql[t] = e;
});
function eg(e) {
  const t = new Io(e), n = x_(Io.prototype.request, t);
  return T.extend(n, Io.prototype, t, { allOwnKeys: !0 }), T.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return eg(Bo(e, r));
  }, n;
}
const Xe = eg(Ms);
Xe.Axios = Io;
Xe.CanceledError = Ir;
Xe.CancelToken = dS;
Xe.isCancel = W_;
Xe.VERSION = Q_;
Xe.toFormData = Ea;
Xe.AxiosError = me;
Xe.Cancel = Xe.CanceledError;
Xe.all = function(t) {
  return Promise.all(t);
};
Xe.spread = pS;
Xe.isAxiosError = hS;
Xe.mergeConfig = Bo;
Xe.AxiosHeaders = Nt;
Xe.formToJSON = (e) => K_(T.isHTMLForm(e) ? new FormData(e) : e);
Xe.getAdapter = J_.getAdapter;
Xe.HttpStatusCode = Ql;
Xe.default = Xe;
const {
  Axios: b$,
  AxiosError: w$,
  CanceledError: O$,
  isCancel: A$,
  CancelToken: N$,
  VERSION: S$,
  all: T$,
  Cancel: C$,
  isAxiosError: D$,
  spread: x$,
  toFormData: R$,
  AxiosHeaders: I$,
  HttpStatusCode: $$,
  formToJSON: k$,
  getAdapter: P$,
  mergeConfig: V$
} = Xe, mS = "fhir_snapshot", _S = "api", gS = () => {
  let t = new URLSearchParams(location.search).get("pid");
  return console.log("pid", t), {
    pid: t,
    page: _S,
    // content: "externalModule",
    type: "module",
    prefix: mS
  };
}, ES = () => {
  const e = Xe.create({
    baseURL: "/api",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
      // set header for REDCap ajax
      // Authorization: `Bearer ${yourToken}`, // optional
    }
  });
  return e.interceptors.request.use((t) => {
    const n = gS();
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
}, Dn = ES(), Xd = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return Dn.get("", { params: e });
  },
  updateProjectSettings(e, t) {
    const n = { route: "project-settings" }, o = { fhirSystem: e, selectedMappingResources: t };
    return Dn.put("", o, { params: n });
  },
  listMrns() {
    const e = { route: "mrns" };
    return Dn.get("", { params: e });
  },
  addMrn(e) {
    const t = { route: "mrns" };
    return Dn.post("", { mrn: e }, { params: t });
  },
  removeMrn(e) {
    const t = { route: `mrns/${e}` };
    return Dn.delete("", { params: t, data: e });
  },
  triggerFetch(e, t) {
    const n = { route: "trigger-fetch" };
    return Dn.post("", { mrns: e, resources: t }, { params: n });
  },
  getFetchStatus() {
    const e = { route: "fetch-status" };
    return Dn.get("", { params: e });
  },
  createZipArchive(e) {
    const t = { route: "create-zip-archive" };
    return Dn.post("", { mrns: e }, { params: t });
  },
  downloadZip(e) {
    const t = { route: "download-zip", zip_id: e };
    return Dn.get("", { params: t, responseType: "blob" });
  }
}, Wu = /* @__PURE__ */ Mu("errors", () => {
  const e = de([]);
  return {
    errors: e,
    addError: (o, r) => {
      const s = vS(o);
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
function vS(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
const zu = /* @__PURE__ */ Mu("settings", () => {
  const e = Wu(), t = () => ({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), n = de(!1), o = Sr(t()), r = de([]), s = de([]);
  return {
    loading: n,
    predefinedTypes: s,
    selectedResources: r,
    settings: o,
    fetchProjectSettings: async () => {
      try {
        n.value = !0;
        const m = await Xd.getProjectSettings();
        Object.assign(o, m.data ?? {});
      } catch (m) {
        e.addError(m, "settingsStore"), console.log("Failed to load project settings:", m), Object.assign(o, t());
      } finally {
        n.value = !1;
      }
    },
    addPredefinedResource: (m) => {
      r.value.push({
        name: m,
        type: "predefined"
      });
    },
    addCustomResource: (m) => {
      const [g, v] = m.split("?");
      r.value.push({
        name: g,
        type: "custom",
        parameters: v ? `?${v}` : ""
      });
    },
    updateResource: (m, g) => {
      m >= 0 && m < r.value.length && (r.value[m] = { ...g });
    },
    removeResource: (m) => {
      r.value.splice(m, 1);
    },
    importResources: (m) => {
      r.value = [...m];
    },
    exportResources: () => r.value,
    updateSelectedFhirSystem: (m) => {
      o.fhir_system = m || null;
    },
    saveProjectSettings: async () => {
      try {
        n.value = !0;
        const m = o.fhir_systems.find((g) => g.ehr_id === o.fhir_system) || null;
        if (!m) return;
        await Xd.updateProjectSettings(m, r.value);
      } catch (m) {
        throw e.addError(m, "settingsStore"), console.log("Failed to save project settings:", m), m;
      } finally {
        n.value = !1;
      }
    }
  };
}), yS = ["value"], bS = ["value"], wS = /* @__PURE__ */ ke({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = Lt("settings"), n = zu(), o = (r) => {
      const s = r.target, i = parseInt(s.value);
      n.updateSelectedFhirSystem(i);
    };
    return (r, s) => (J(), te("div", null, [
      s[1] || (s[1] = b("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      b("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: ye(t).fhir_system,
        onChange: o
      }, [
        s[0] || (s[0] = b("option", { value: "" }, "Select a FHIR System", -1)),
        (J(!0), te(De, null, Vt(ye(t).fhir_systems, (i) => (J(), te("option", {
          key: i.ehr_id,
          value: i.ehr_id
        }, Be(i.ehr_name), 9, bS))), 128))
      ], 40, yS)
    ]));
  }
}), OS = { class: "d-flex" }, AS = { class: "d-flex gap-2" }, NS = /* @__PURE__ */ ke({
  __name: "ResourcesToolbar",
  emits: ["import", "export", "add"],
  setup(e, { emit: t }) {
    const n = t;
    return (o, r) => (J(), te("div", OS, [
      r[6] || (r[6] = b("div", { class: "me-auto" }, [
        b("span", null, "Resources")
      ], -1)),
      b("div", AS, [
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
}), SS = {}, TS = { class: "table table-striped table-hover table-sm border-top" };
function CS(e, t) {
  return J(), te("table", TS, t[0] || (t[0] = [
    b("thead", null, [
      b("tr", null, [
        b("th", null, "Name"),
        b("th", null, "Type"),
        b("th", null, "Parameters")
      ])
    ], -1),
    b("tbody", null, [
      b("tr", null, [
        b("td", { colspan: "3" }, "nothing to see here")
      ])
    ], -1)
  ]));
}
const DS = /* @__PURE__ */ xr(SS, [["render", CS]]), xS = ["value"], RS = ["disabled"], IS = ["value"], $S = ["disabled"], ir = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), kS = /* @__PURE__ */ ke({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Oy(e, "modelValue");
    return (n, o) => (J(), te("div", null, [
      b("form", null, [
        b("div", null, [
          Zn(b("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: ye(ir).PREDEFINED,
            "onUpdate:modelValue": o[0] || (o[0] = (r) => t.value.resourceType = r)
          }, null, 8, xS), [
            [af, t.value.resourceType]
          ]),
          o[5] || (o[5] = b("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          Zn(b("select", {
            "onUpdate:modelValue": o[1] || (o[1] = (r) => t.value.predefinedResource = r),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: t.value.resourceType !== ye(ir).PREDEFINED
          }, o[4] || (o[4] = [
            b("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1),
            b("option", { value: "Demographics" }, "Demographics", -1)
          ]), 8, RS), [
            [_m, t.value.predefinedResource]
          ])
        ]),
        o[7] || (o[7] = b("div", { class: "d-flex justify-start-center my-2" }, [
          b("span", null, "—OR—")
        ], -1)),
        b("div", null, [
          Zn(b("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-custom",
            value: ye(ir).CUSTOM,
            "onUpdate:modelValue": o[2] || (o[2] = (r) => t.value.resourceType = r)
          }, null, 8, IS), [
            [af, t.value.resourceType]
          ]),
          o[6] || (o[6] = b("label", {
            class: "form-label ms-2",
            for: "resource-type-custom"
          }, "Custom Resource", -1)),
          Zn(b("input", {
            "onUpdate:modelValue": o[3] || (o[3] = (r) => t.value.customResource = r),
            class: "form-control form-control-sm",
            type: "text",
            id: "custom-resource",
            disabled: t.value.resourceType !== ye(ir).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, $S), [
            [mm, t.value.customResource]
          ])
        ])
      ])
    ]));
  }
}), PS = { class: "d-flex flex-column gap-4" }, VS = { class: "card" }, LS = { class: "card-body px-0 py-2" }, MS = { class: "p-2" }, FS = { class: "d-flex gap-2 justify-content-end" }, BS = ["disabled"], US = /* @__PURE__ */ ke({
  __name: "SetupPage",
  setup(e) {
    const t = zu(), { settings: n } = c_(t);
    es("settings", n);
    const o = Dv("resourceModal"), r = () => ({
      customResource: "",
      predefinedResource: "",
      resourceType: ir.PREDEFINED
    }), s = de(r());
    async function i() {
      if (!o.value) return;
      s.value = r(), await o.value.show() && (s.value.resourceType === ir.PREDEFINED ? t.addPredefinedResource(s.value.predefinedResource) : t.addCustomResource(s.value.customResource));
    }
    async function a() {
      try {
        await t.saveProjectSettings();
      } catch (l) {
        console.error("Failed to save settings:", l);
      }
    }
    return (l, f) => {
      const u = Ln("b-modal");
      return J(), te("div", PS, [
        Ne(wS),
        b("div", VS, [
          b("div", LS, [
            b("div", MS, [
              Ne(NS, { onAdd: i })
            ]),
            Ne(DS),
            (J(), St(ta, { to: "body" }, [
              Ne(u, {
                ref_key: "resourceModal",
                ref: o
              }, {
                title: Ot(() => f[1] || (f[1] = [
                  tt("Resource")
                ])),
                default: Ot(() => [
                  Ne(kS, {
                    modelValue: s.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (c) => s.value = c)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 512)
            ]))
          ])
        ]),
        b("div", FS, [
          f[3] || (f[3] = b("button", {
            type: "button",
            class: "btn btn-secondary btn-sm"
          }, [
            b("i", { class: "fas fa-xmark fa-fw" }),
            b("span", null, "Cancel")
          ], -1)),
          b("button", {
            type: "button",
            class: "btn btn-primary btn-sm",
            onClick: a,
            disabled: ye(t).loading
          }, f[2] || (f[2] = [
            b("i", { class: "fas fa-save fa-fw" }, null, -1),
            b("span", null, "Save", -1)
          ]), 8, BS)
        ])
      ]);
    };
  }
}), Ce = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed"
}, is = [
  {
    id: 1,
    mrn: "123456",
    status: Ce.Completed,
    resources: [
      { name: "Patient", status: Ce.Completed },
      { name: "Observation", status: Ce.Completed },
      { name: "MedicationRequest", status: Ce.Completed }
    ]
  },
  {
    id: 2,
    mrn: "789012",
    status: Ce.Fetching,
    resources: [
      { name: "Patient", status: Ce.Completed },
      { name: "Observation", status: Ce.Fetching },
      { name: "MedicationRequest", status: Ce.Pending }
    ]
  },
  {
    id: 3,
    mrn: "345678",
    status: Ce.Failed,
    resources: [
      { name: "Patient", status: Ce.Completed },
      { name: "Observation", status: Ce.Failed, error: "OperationOutcome: patient not found" },
      { name: "MedicationRequest", status: Ce.Pending }
    ]
  },
  {
    id: 4,
    mrn: "901234",
    status: Ce.Pending,
    resources: [
      { name: "Patient", status: Ce.Pending },
      { name: "Observation", status: Ce.Pending },
      { name: "MedicationRequest", status: Ce.Pending }
    ]
  }
], jS = async () => new Promise((e) => {
  setTimeout(() => {
    e(is);
  }, 500);
}), HS = async (e) => new Promise((t) => {
  setTimeout(() => {
    const n = {
      id: is.length > 0 ? Math.max(...is.map((o) => o.id)) + 1 : 1,
      mrn: e,
      status: Ce.Pending,
      resources: [
        { name: "Patient", status: Ce.Pending },
        { name: "Observation", status: Ce.Pending },
        { name: "MedicationRequest", status: Ce.Pending }
      ]
    };
    is.push(n), t(n);
  }, 500);
}), KS = async (e) => new Promise((t, n) => {
  setTimeout(() => {
    const o = is.find((r) => r.id === e);
    o ? (o.status = Ce.Fetching, setTimeout(() => {
      o.status = Ce.Completed, o.resources.forEach((r) => r.status = Ce.Completed), t(o);
    }, 1e3)) : n(new Error(`MRN with id ${e} not found.`));
  }, 500);
}), qu = /* @__PURE__ */ Mu("monitor", () => {
  const e = Wu(), t = de(!1), n = de([]), o = de([]), r = async () => {
    try {
      t.value = !0, n.value = await jS(), o.value = [];
    } catch (d) {
      e.addError(d, "monitorStore"), console.error("Failed to load MRNs:", d), n.value = [];
    } finally {
      t.value = !1;
    }
  }, s = async (d) => {
    try {
      const p = await HS(d);
      n.value.push(p);
    } catch (p) {
      e.addError(p, "monitorStore"), console.error("Failed to add MRN:", p);
    }
  }, i = async (d) => {
    try {
      const p = await KS(d), h = n.value.findIndex((m) => m.id === d);
      h !== -1 && (n.value[h] = p);
    } catch (p) {
      e.addError(p, "monitorStore"), console.error(`Failed to fetch MRN ${d}:`, p);
    }
  }, a = async () => {
    try {
      t.value = !0;
      for (const d of o.value)
        await i(d);
    } catch (d) {
      e.addError(d, "monitorStore"), console.error("Failed to fetch selected MRNs:", d);
    } finally {
      t.value = !1;
    }
  }, l = async () => {
    console.log("Downloading selected MRNs:", o.value);
  }, f = Oe(() => n.value.length > 0 && o.value.length === n.value.length);
  return {
    loading: t,
    mrns: n,
    selectedMrns: o,
    allSelected: f,
    fetchMrns: r,
    addMrn: s,
    fetchMrn: i,
    fetchSelected: a,
    downloadSelected: l,
    toggleSelectAll: () => {
      f.value ? o.value = [] : o.value = n.value.map((d) => d.id);
    },
    toggleSelection: (d) => {
      const p = o.value.indexOf(d);
      p === -1 ? o.value.push(d) : o.value.splice(p, 1);
    }
  };
}), WS = { class: "mb-3" }, zS = ["disabled"], qS = ["disabled"], GS = /* @__PURE__ */ ke({
  __name: "MonitorToolbar",
  emits: ["add-mrn"],
  setup(e) {
    const t = qu(), n = Oe(() => t.selectedMrns.length === 0);
    return (o, r) => (J(), te("div", WS, [
      b("button", {
        class: "btn btn-sm btn-primary me-2",
        onClick: r[0] || (r[0] = (s) => o.$emit("add-mrn"))
      }, r[3] || (r[3] = [
        b("i", { class: "fas fa-plus fa-fw" }, null, -1),
        tt(" Add MRN ")
      ])),
      b("button", {
        class: "btn btn-sm btn-secondary me-2",
        onClick: r[1] || (r[1] = //@ts-ignore
        (...s) => ye(t).fetchSelected && ye(t).fetchSelected(...s)),
        disabled: n.value
      }, r[4] || (r[4] = [
        b("i", { class: "fas fa-sync fa-fw" }, null, -1),
        tt(" Fetch Selected ")
      ]), 8, zS),
      b("button", {
        class: "btn btn-sm btn-success",
        onClick: r[2] || (r[2] = //@ts-ignore
        (...s) => ye(t).downloadSelected && ye(t).downloadSelected(...s)),
        disabled: n.value
      }, r[5] || (r[5] = [
        b("i", { class: "fas fa-download fa-fw" }, null, -1),
        tt(" Download Selected ")
      ]), 8, qS)
    ]));
  }
}), YS = { class: "align-middle" }, XS = /* @__PURE__ */ ke({
  __name: "MonitorResourceRow",
  props: {
    resource: {}
  },
  setup(e) {
    const t = (n) => {
      const o = "badge";
      switch (n) {
        case Ce.Pending:
          return `${o} bg-warning text-dark`;
        case Ce.Fetching:
          return `${o} bg-info text-dark`;
        case Ce.Completed:
          return `${o} bg-success`;
        case Ce.Failed:
          return `${o} bg-danger`;
        default:
          return `${o} bg-secondary`;
      }
    };
    return (n, o) => (J(), te("tr", YS, [
      b("td", null, Be(n.resource.name), 1),
      b("td", null, [
        b("span", {
          class: Ve(t(n.resource.status))
        }, Be(n.resource.status), 3)
      ]),
      b("td", null, Be(n.resource.error), 1)
    ]));
  }
}), JS = { class: "align-middle" }, QS = ["checked"], ZS = ["aria-expanded"], e1 = ["disabled"], t1 = {
  colspan: "5",
  class: "p-0"
}, n1 = { class: "ps-3" }, o1 = { class: "table table-sm table-bordered mb-0" }, r1 = /* @__PURE__ */ ke({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  emits: ["toggle-selection"],
  setup(e) {
    const t = qu(), n = e, o = de(!1), r = () => {
      o.value = !o.value;
    }, s = Oe(() => {
      const a = n.item.resources.length;
      return `${n.item.resources.filter((f) => f.status === Ce.Completed).length} / ${a} resources completed`;
    }), i = (a) => {
      const l = "badge";
      switch (a) {
        case Ce.Pending:
          return `${l} bg-warning text-dark`;
        case Ce.Fetching:
          return `${l} bg-info text-dark`;
        case Ce.Completed:
          return `${l} bg-success`;
        case Ce.Failed:
          return `${l} bg-danger`;
        default:
          return `${l} bg-secondary`;
      }
    };
    return (a, l) => (J(), te(De, null, [
      b("tr", JS, [
        b("td", null, [
          b("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: a.selected,
            onChange: l[0] || (l[0] = (f) => a.$emit("toggle-selection", a.item.id))
          }, null, 40, QS)
        ]),
        b("td", null, Be(a.item.mrn), 1),
        b("td", null, [
          b("span", {
            class: Ve(i(a.item.status))
          }, Be(a.item.status), 3)
        ]),
        b("td", null, [
          b("span", null, Be(s.value), 1),
          b("button", {
            class: "btn btn-sm btn-light ms-2",
            onClick: r,
            "aria-expanded": o.value
          }, [
            b("i", {
              class: Ve(`bi bi-chevron-${o.value ? "up" : "down"}`)
            }, null, 2)
          ], 8, ZS)
        ]),
        b("td", null, [
          b("button", {
            class: "btn btn-sm btn-primary me-2",
            onClick: l[1] || (l[1] = (f) => ye(t).fetchMrn(a.item.id))
          }, l[2] || (l[2] = [
            b("i", { class: "fas fa-sync fa-fw" }, null, -1),
            tt(" Fetch ")
          ])),
          b("button", {
            class: "btn btn-sm btn-success",
            disabled: a.item.status !== "Completed"
          }, l[3] || (l[3] = [
            b("i", { class: "fas fa-download fa-fw" }, null, -1),
            tt(" Download ")
          ]), 8, e1)
        ])
      ]),
      Zn(b("tr", null, [
        b("td", t1, [
          b("div", n1, [
            b("table", o1, [
              l[4] || (l[4] = b("thead", { class: "table-light" }, [
                b("tr", null, [
                  b("th", { scope: "col" }, "Resource"),
                  b("th", { scope: "col" }, "Status"),
                  b("th", { scope: "col" }, "Error")
                ])
              ], -1)),
              b("tbody", null, [
                (J(!0), te(De, null, Vt(a.item.resources, (f) => (J(), St(XS, {
                  key: f.name,
                  resource: f
                }, null, 8, ["resource"]))), 128))
              ])
            ])
          ])
        ])
      ], 512), [
        [hm, o.value]
      ])
    ], 64));
  }
}), s1 = /* @__PURE__ */ xr(r1, [["__scopeId", "data-v-05279239"]]), i1 = {
  key: 0,
  class: "d-flex justify-content-center"
}, a1 = {
  key: 1,
  class: "table table-striped table-hover"
}, l1 = { class: "table-light" }, u1 = { scope: "col" }, c1 = ["checked"], f1 = { key: 0 }, d1 = /* @__PURE__ */ ke({
  __name: "MonitorTable",
  props: {
    items: {},
    loading: { type: Boolean },
    selectedMrns: {},
    allSelected: { type: Boolean }
  },
  emits: ["toggle-selection", "toggle-select-all"],
  setup(e) {
    return (t, n) => (J(), te("div", null, [
      t.loading ? (J(), te("div", i1, n[1] || (n[1] = [
        b("div", {
          class: "spinner-border",
          role: "status"
        }, [
          b("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (J(), te("table", a1, [
        b("thead", l1, [
          b("tr", null, [
            b("th", u1, [
              b("input", {
                class: "form-check-input",
                type: "checkbox",
                checked: t.allSelected,
                onChange: n[0] || (n[0] = (o) => t.$emit("toggle-select-all"))
              }, null, 40, c1)
            ]),
            n[2] || (n[2] = b("th", { scope: "col" }, "MRN", -1)),
            n[3] || (n[3] = b("th", { scope: "col" }, "Status", -1)),
            n[4] || (n[4] = b("th", { scope: "col" }, "Resources", -1)),
            n[5] || (n[5] = b("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        b("tbody", null, [
          t.items.length === 0 ? (J(), te("tr", f1, n[6] || (n[6] = [
            b("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (J(!0), te(De, { key: 1 }, Vt(t.items, (o) => (J(), St(s1, {
            key: o.id,
            item: o,
            selected: t.selectedMrns.includes(o.id),
            onToggleSelection: (r) => t.$emit("toggle-selection", o.id)
          }, null, 8, ["item", "selected", "onToggleSelection"]))), 128))
        ])
      ]))
    ]));
  }
});
var _t = "top", xt = "bottom", Rt = "right", gt = "left", ba = "auto", $r = [_t, xt, Rt, gt], Uo = "start", vr = "end", tg = "clippingParents", Gu = "viewport", tr = "popper", ng = "reference", Zl = /* @__PURE__ */ $r.reduce(function(e, t) {
  return e.concat([t + "-" + Uo, t + "-" + vr]);
}, []), Yu = /* @__PURE__ */ [].concat($r, [ba]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Uo, t + "-" + vr]);
}, []), og = "beforeRead", rg = "read", sg = "afterRead", ig = "beforeMain", ag = "main", lg = "afterMain", ug = "beforeWrite", cg = "write", fg = "afterWrite", dg = [og, rg, sg, ig, ag, lg, ug, cg, fg];
function bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function It(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function jo(e) {
  var t = It(e).Element;
  return e instanceof t || e instanceof Element;
}
function Mt(e) {
  var t = It(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Xu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = It(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function p1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !Mt(s) || !bn(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(i) {
      var a = r[i];
      a === !1 ? s.removeAttribute(i) : s.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function h1(e) {
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
      !Mt(r) || !bn(r) || (Object.assign(r.style, a), Object.keys(s).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const Ju = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: p1,
  effect: h1,
  requires: ["computeStyles"]
};
function _n(e) {
  return e.split("-")[0];
}
var $o = Math.max, Ki = Math.min, yr = Math.round;
function eu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pg() {
  return !/^((?!chrome|android).)*safari/i.test(eu());
}
function br(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && Mt(e) && (r = e.offsetWidth > 0 && yr(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && yr(o.height) / e.offsetHeight || 1);
  var i = jo(e) ? It(e) : window, a = i.visualViewport, l = !pg() && n, f = (o.left + (l && a ? a.offsetLeft : 0)) / r, u = (o.top + (l && a ? a.offsetTop : 0)) / s, c = o.width / r, d = o.height / s;
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
function Qu(e) {
  var t = br(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function hg(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Xu(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Mn(e) {
  return It(e).getComputedStyle(e);
}
function m1(e) {
  return ["table", "td", "th"].indexOf(bn(e)) >= 0;
}
function uo(e) {
  return ((jo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function wa(e) {
  return bn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Xu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    uo(e)
  );
}
function Jd(e) {
  return !Mt(e) || // https://github.com/popperjs/popper-core/issues/837
  Mn(e).position === "fixed" ? null : e.offsetParent;
}
function _1(e) {
  var t = /firefox/i.test(eu()), n = /Trident/i.test(eu());
  if (n && Mt(e)) {
    var o = Mn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = wa(e);
  for (Xu(r) && (r = r.host); Mt(r) && ["html", "body"].indexOf(bn(r)) < 0; ) {
    var s = Mn(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Fs(e) {
  for (var t = It(e), n = Jd(e); n && m1(n) && Mn(n).position === "static"; )
    n = Jd(n);
  return n && (bn(n) === "html" || bn(n) === "body" && Mn(n).position === "static") ? t : n || _1(e) || t;
}
function Zu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function as(e, t, n) {
  return $o(e, Ki(t, n));
}
function g1(e, t, n) {
  var o = as(e, t, n);
  return o > n ? n : o;
}
function mg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _g(e) {
  return Object.assign({}, mg(), e);
}
function gg(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var E1 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, _g(typeof t != "number" ? t : gg(t, $r));
};
function v1(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, a = _n(n.placement), l = Zu(a), f = [gt, Rt].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!s || !i)) {
    var c = E1(r.padding, n), d = Qu(s), p = l === "y" ? _t : gt, h = l === "y" ? xt : Rt, m = n.rects.reference[u] + n.rects.reference[l] - i[l] - n.rects.popper[u], g = i[l] - n.rects.reference[l], v = Fs(s), O = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, y = m / 2 - g / 2, R = c[p], N = O - d[u] - c[h], C = O / 2 - d[u] / 2 + y, S = as(R, C, N), V = l;
    n.modifiersData[o] = (t = {}, t[V] = S, t.centerOffset = S - C, t);
  }
}
function y1(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || hg(t.elements.popper, r) && (t.elements.arrow = r));
}
const Eg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: v1,
  effect: y1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function wr(e) {
  return e.split("-")[1];
}
var b1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function w1(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return {
    x: yr(n * r) / r || 0,
    y: yr(o * r) / r || 0
  };
}
function Qd(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, c = e.isFixed, d = i.x, p = d === void 0 ? 0 : d, h = i.y, m = h === void 0 ? 0 : h, g = typeof u == "function" ? u({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = g.x, m = g.y;
  var v = i.hasOwnProperty("x"), O = i.hasOwnProperty("y"), y = gt, R = _t, N = window;
  if (f) {
    var C = Fs(n), S = "clientHeight", V = "clientWidth";
    if (C === It(n) && (C = uo(n), Mn(C).position !== "static" && a === "absolute" && (S = "scrollHeight", V = "scrollWidth")), C = C, r === _t || (r === gt || r === Rt) && s === vr) {
      R = xt;
      var P = c && C === N && N.visualViewport ? N.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[S]
      );
      m -= P - o.height, m *= l ? 1 : -1;
    }
    if (r === gt || (r === _t || r === xt) && s === vr) {
      y = Rt;
      var I = c && C === N && N.visualViewport ? N.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[V]
      );
      p -= I - o.width, p *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: a
  }, f && b1), D = u === !0 ? w1({
    x: p,
    y: m
  }, It(n)) : {
    x: p,
    y: m
  };
  if (p = D.x, m = D.y, l) {
    var q;
    return Object.assign({}, $, (q = {}, q[R] = O ? "0" : "", q[y] = v ? "0" : "", q.transform = (N.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", q));
  }
  return Object.assign({}, $, (t = {}, t[R] = O ? m + "px" : "", t[y] = v ? p + "px" : "", t.transform = "", t));
}
function O1(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, i = s === void 0 ? !0 : s, a = n.roundOffsets, l = a === void 0 ? !0 : a, f = {
    placement: _n(t.placement),
    variation: wr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qd(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qd(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ec = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: O1,
  data: {}
};
var Qs = {
  passive: !0
};
function A1(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, i = o.resize, a = i === void 0 ? !0 : i, l = It(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, Qs);
  }), a && l.addEventListener("resize", n.update, Qs), function() {
    s && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, Qs);
    }), a && l.removeEventListener("resize", n.update, Qs);
  };
}
const tc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: A1,
  data: {}
};
var N1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Oi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return N1[t];
  });
}
var S1 = {
  start: "end",
  end: "start"
};
function Zd(e) {
  return e.replace(/start|end/g, function(t) {
    return S1[t];
  });
}
function nc(e) {
  var t = It(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function oc(e) {
  return br(uo(e)).left + nc(e).scrollLeft;
}
function T1(e, t) {
  var n = It(e), o = uo(e), r = n.visualViewport, s = o.clientWidth, i = o.clientHeight, a = 0, l = 0;
  if (r) {
    s = r.width, i = r.height;
    var f = pg();
    (f || !f && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a + oc(e),
    y: l
  };
}
function C1(e) {
  var t, n = uo(e), o = nc(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = $o(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = $o(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + oc(e), l = -o.scrollTop;
  return Mn(r || n).direction === "rtl" && (a += $o(n.clientWidth, r ? r.clientWidth : 0) - s), {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function rc(e) {
  var t = Mn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function vg(e) {
  return ["html", "body", "#document"].indexOf(bn(e)) >= 0 ? e.ownerDocument.body : Mt(e) && rc(e) ? e : vg(wa(e));
}
function ls(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = vg(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = It(o), i = r ? [s].concat(s.visualViewport || [], rc(o) ? o : []) : o, a = t.concat(i);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(ls(wa(i)))
  );
}
function tu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function D1(e, t) {
  var n = br(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ep(e, t, n) {
  return t === Gu ? tu(T1(e, n)) : jo(t) ? D1(t, n) : tu(C1(uo(e)));
}
function x1(e) {
  var t = ls(wa(e)), n = ["absolute", "fixed"].indexOf(Mn(e).position) >= 0, o = n && Mt(e) ? Fs(e) : e;
  return jo(o) ? t.filter(function(r) {
    return jo(r) && hg(r, o) && bn(r) !== "body";
  }) : [];
}
function R1(e, t, n, o) {
  var r = t === "clippingParents" ? x1(e) : [].concat(t), s = [].concat(r, [n]), i = s[0], a = s.reduce(function(l, f) {
    var u = ep(e, f, o);
    return l.top = $o(u.top, l.top), l.right = Ki(u.right, l.right), l.bottom = Ki(u.bottom, l.bottom), l.left = $o(u.left, l.left), l;
  }, ep(e, i, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function yg(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? _n(o) : null, s = o ? wr(o) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case _t:
      l = {
        x: i,
        y: t.y - n.height
      };
      break;
    case xt:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case Rt:
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
  var f = r ? Zu(r) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (s) {
      case Uo:
        l[f] = l[f] - (t[u] / 2 - n[u] / 2);
        break;
      case vr:
        l[f] = l[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Or(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, i = s === void 0 ? e.strategy : s, a = n.boundary, l = a === void 0 ? tg : a, f = n.rootBoundary, u = f === void 0 ? Gu : f, c = n.elementContext, d = c === void 0 ? tr : c, p = n.altBoundary, h = p === void 0 ? !1 : p, m = n.padding, g = m === void 0 ? 0 : m, v = _g(typeof g != "number" ? g : gg(g, $r)), O = d === tr ? ng : tr, y = e.rects.popper, R = e.elements[h ? O : d], N = R1(jo(R) ? R : R.contextElement || uo(e.elements.popper), l, u, i), C = br(e.elements.reference), S = yg({
    reference: C,
    element: y,
    placement: r
  }), V = tu(Object.assign({}, y, S)), P = d === tr ? V : C, I = {
    top: N.top - P.top + v.top,
    bottom: P.bottom - N.bottom + v.bottom,
    left: N.left - P.left + v.left,
    right: P.right - N.right + v.right
  }, $ = e.modifiersData.offset;
  if (d === tr && $) {
    var D = $[r];
    Object.keys(I).forEach(function(q) {
      var ue = [Rt, xt].indexOf(q) >= 0 ? 1 : -1, he = [_t, xt].indexOf(q) >= 0 ? "y" : "x";
      I[q] += D[he] * ue;
    });
  }
  return I;
}
function I1(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, f = l === void 0 ? Yu : l, u = wr(o), c = u ? a ? Zl : Zl.filter(function(h) {
    return wr(h) === u;
  }) : $r, d = c.filter(function(h) {
    return f.indexOf(h) >= 0;
  });
  d.length === 0 && (d = c);
  var p = d.reduce(function(h, m) {
    return h[m] = Or(e, {
      placement: m,
      boundary: r,
      rootBoundary: s,
      padding: i
    })[_n(m)], h;
  }, {});
  return Object.keys(p).sort(function(h, m) {
    return p[h] - p[m];
  });
}
function $1(e) {
  if (_n(e) === ba)
    return [];
  var t = Oi(e);
  return [Zd(e), t, Zd(t)];
}
function k1(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, f = n.padding, u = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, g = t.options.placement, v = _n(g), O = v === g, y = l || (O || !h ? [Oi(g)] : $1(g)), R = [g].concat(y).reduce(function(nt, rt) {
      return nt.concat(_n(rt) === ba ? I1(t, {
        placement: rt,
        boundary: u,
        rootBoundary: c,
        padding: f,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : rt);
    }, []), N = t.rects.reference, C = t.rects.popper, S = /* @__PURE__ */ new Map(), V = !0, P = R[0], I = 0; I < R.length; I++) {
      var $ = R[I], D = _n($), q = wr($) === Uo, ue = [_t, xt].indexOf(D) >= 0, he = ue ? "width" : "height", Q = Or(t, {
        placement: $,
        boundary: u,
        rootBoundary: c,
        altBoundary: d,
        padding: f
      }), H = ue ? q ? Rt : gt : q ? xt : _t;
      N[he] > C[he] && (H = Oi(H));
      var Z = Oi(H), le = [];
      if (s && le.push(Q[D] <= 0), a && le.push(Q[H] <= 0, Q[Z] <= 0), le.every(function(nt) {
        return nt;
      })) {
        P = $, V = !1;
        break;
      }
      S.set($, le);
    }
    if (V)
      for (var ze = h ? 3 : 1, qe = function(rt) {
        var Et = R.find(function(x) {
          var G = S.get(x);
          if (G)
            return G.slice(0, rt).every(function(X) {
              return X;
            });
        });
        if (Et)
          return P = Et, "break";
      }, Pe = ze; Pe > 0; Pe--) {
        var Ue = qe(Pe);
        if (Ue === "break") break;
      }
    t.placement !== P && (t.modifiersData[o]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const bg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: k1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function tp(e, t, n) {
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
function np(e) {
  return [_t, Rt, xt, gt].some(function(t) {
    return e[t] >= 0;
  });
}
function P1(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, i = Or(t, {
    elementContext: "reference"
  }), a = Or(t, {
    altBoundary: !0
  }), l = tp(i, o), f = tp(a, r, s), u = np(l), c = np(f);
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
const wg = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: P1
};
function V1(e, t, n) {
  var o = _n(e), r = [gt, _t].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = s[0], a = s[1];
  return i = i || 0, a = (a || 0) * r, [gt, Rt].indexOf(o) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function L1(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, i = Yu.reduce(function(u, c) {
    return u[c] = V1(c, t.rects, s), u;
  }, {}), a = i[t.placement], l = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = i;
}
const Og = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: L1
};
function M1(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = yg({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const sc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: M1,
  data: {}
};
function F1(e) {
  return e === "x" ? "y" : "x";
}
function B1(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, f = n.rootBoundary, u = n.altBoundary, c = n.padding, d = n.tether, p = d === void 0 ? !0 : d, h = n.tetherOffset, m = h === void 0 ? 0 : h, g = Or(t, {
    boundary: l,
    rootBoundary: f,
    padding: c,
    altBoundary: u
  }), v = _n(t.placement), O = wr(t.placement), y = !O, R = Zu(v), N = F1(R), C = t.modifiersData.popperOffsets, S = t.rects.reference, V = t.rects.popper, P = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, I = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (C) {
    if (s) {
      var q, ue = R === "y" ? _t : gt, he = R === "y" ? xt : Rt, Q = R === "y" ? "height" : "width", H = C[R], Z = H + g[ue], le = H - g[he], ze = p ? -V[Q] / 2 : 0, qe = O === Uo ? S[Q] : V[Q], Pe = O === Uo ? -V[Q] : -S[Q], Ue = t.elements.arrow, nt = p && Ue ? Qu(Ue) : {
        width: 0,
        height: 0
      }, rt = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : mg(), Et = rt[ue], x = rt[he], G = as(0, S[Q], nt[Q]), X = y ? S[Q] / 2 - ze - G - Et - I.mainAxis : qe - G - Et - I.mainAxis, ne = y ? -S[Q] / 2 + ze + G + x + I.mainAxis : Pe + G + x + I.mainAxis, _e = t.elements.arrow && Fs(t.elements.arrow), je = _e ? R === "y" ? _e.clientTop || 0 : _e.clientLeft || 0 : 0, _ = (q = $?.[R]) != null ? q : 0, E = H + X - _ - je, A = H + ne - _, L = as(p ? Ki(Z, E) : Z, H, p ? $o(le, A) : le);
      C[R] = L, D[R] = L - H;
    }
    if (a) {
      var k, M = R === "x" ? _t : gt, Y = R === "x" ? xt : Rt, K = C[N], W = N === "y" ? "height" : "width", j = K + g[M], se = K - g[Y], z = [_t, gt].indexOf(v) !== -1, re = (k = $?.[N]) != null ? k : 0, ce = z ? j : K - S[W] - V[W] - re + I.altAxis, ve = z ? K + S[W] + V[W] - re - I.altAxis : se, xe = p && z ? g1(ce, K, ve) : as(p ? ce : j, K, p ? ve : se);
      C[N] = xe, D[N] = xe - K;
    }
    t.modifiersData[o] = D;
  }
}
const Ag = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: B1,
  requiresIfExists: ["offset"]
};
function U1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function j1(e) {
  return e === It(e) || !Mt(e) ? nc(e) : U1(e);
}
function H1(e) {
  var t = e.getBoundingClientRect(), n = yr(t.width) / e.offsetWidth || 1, o = yr(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function K1(e, t, n) {
  n === void 0 && (n = !1);
  var o = Mt(t), r = Mt(t) && H1(t), s = uo(t), i = br(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((bn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  rc(s)) && (a = j1(t)), Mt(t) ? (l = br(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = oc(s))), {
    x: i.left + a.scrollLeft - l.x,
    y: i.top + a.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function W1(e) {
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
function z1(e) {
  var t = W1(e);
  return dg.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function q1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function G1(e) {
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
var op = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function rp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Oa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? op : r;
  return function(a, l, f) {
    f === void 0 && (f = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, op, s),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, c = [], d = !1, p = {
      state: u,
      setOptions: function(v) {
        var O = typeof v == "function" ? v(u.options) : v;
        m(), u.options = Object.assign({}, s, u.options, O), u.scrollParents = {
          reference: jo(a) ? ls(a) : a.contextElement ? ls(a.contextElement) : [],
          popper: ls(l)
        };
        var y = z1(G1([].concat(o, u.options.modifiers)));
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
          var v = u.elements, O = v.reference, y = v.popper;
          if (rp(O, y)) {
            u.rects = {
              reference: K1(O, Fs(y), u.options.strategy === "fixed"),
              popper: Qu(y)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(I) {
              return u.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var R = 0; R < u.orderedModifiers.length; R++) {
              if (u.reset === !0) {
                u.reset = !1, R = -1;
                continue;
              }
              var N = u.orderedModifiers[R], C = N.fn, S = N.options, V = S === void 0 ? {} : S, P = N.name;
              typeof C == "function" && (u = C({
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
      update: q1(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        m(), d = !0;
      }
    };
    if (!rp(a, l))
      return p;
    p.setOptions(f).then(function(g) {
      !d && f.onFirstUpdate && f.onFirstUpdate(g);
    });
    function h() {
      u.orderedModifiers.forEach(function(g) {
        var v = g.name, O = g.options, y = O === void 0 ? {} : O, R = g.effect;
        if (typeof R == "function") {
          var N = R({
            state: u,
            name: v,
            instance: p,
            options: y
          }), C = function() {
          };
          c.push(N || C);
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
var Y1 = /* @__PURE__ */ Oa(), X1 = [tc, sc, ec, Ju], J1 = /* @__PURE__ */ Oa({
  defaultModifiers: X1
}), Q1 = [tc, sc, ec, Ju, Og, bg, Ag, Eg, wg], ic = /* @__PURE__ */ Oa({
  defaultModifiers: Q1
});
const Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: lg,
  afterRead: sg,
  afterWrite: fg,
  applyStyles: Ju,
  arrow: Eg,
  auto: ba,
  basePlacements: $r,
  beforeMain: ig,
  beforeRead: og,
  beforeWrite: ug,
  bottom: xt,
  clippingParents: tg,
  computeStyles: ec,
  createPopper: ic,
  createPopperBase: Y1,
  createPopperLite: J1,
  detectOverflow: Or,
  end: vr,
  eventListeners: tc,
  flip: bg,
  hide: wg,
  left: gt,
  main: ag,
  modifierPhases: dg,
  offset: Og,
  placements: Yu,
  popper: tr,
  popperGenerator: Oa,
  popperOffsets: sc,
  preventOverflow: Ag,
  read: rg,
  reference: ng,
  right: Rt,
  start: Uo,
  top: _t,
  variationPlacements: Zl,
  viewport: Gu,
  write: cg
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Wn = /* @__PURE__ */ new Map(), Xa = {
  set(e, t, n) {
    Wn.has(e) || Wn.set(e, /* @__PURE__ */ new Map());
    const o = Wn.get(e);
    if (!o.has(t) && o.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);
      return;
    }
    o.set(t, n);
  },
  get(e, t) {
    return Wn.has(e) && Wn.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!Wn.has(e))
      return;
    const n = Wn.get(e);
    n.delete(t), n.size === 0 && Wn.delete(e);
  }
}, Z1 = 1e6, eT = 1e3, nu = "transitionend", Sg = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), tT = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), nT = (e) => {
  do
    e += Math.floor(Math.random() * Z1);
  while (document.getElementById(e));
  return e;
}, oT = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const o = Number.parseFloat(t), r = Number.parseFloat(n);
  return !o && !r ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * eT);
}, Tg = (e) => {
  e.dispatchEvent(new Event(nu));
}, Pn = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), ro = (e) => Pn(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Sg(e)) : null, kr = (e) => {
  if (!Pn(e) || e.getClientRects().length === 0)
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
}, so = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Cg = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Cg(e.parentNode) : null;
}, Wi = () => {
}, Bs = (e) => {
  e.offsetHeight;
}, Dg = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Ja = [], rT = (e) => {
  document.readyState === "loading" ? (Ja.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of Ja)
      t();
  }), Ja.push(e)) : e();
}, Ut = () => document.documentElement.dir === "rtl", Ht = (e) => {
  rT(() => {
    const t = Dg();
    if (t) {
      const n = e.NAME, o = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = o, e.jQueryInterface);
    }
  });
}, wt = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, xg = (e, t, n = !0) => {
  if (!n) {
    wt(e);
    return;
  }
  const r = oT(t) + 5;
  let s = !1;
  const i = ({
    target: a
  }) => {
    a === t && (s = !0, t.removeEventListener(nu, i), wt(e));
  };
  t.addEventListener(nu, i), setTimeout(() => {
    s || Tg(t);
  }, r);
}, ac = (e, t, n, o) => {
  const r = e.length;
  let s = e.indexOf(t);
  return s === -1 ? !n && o ? e[r - 1] : e[0] : (s += n ? 1 : -1, o && (s = (s + r) % r), e[Math.max(0, Math.min(s, r - 1))]);
}, sT = /[^.]*(?=\..*)\.|.*/, iT = /\..*/, aT = /::\d+$/, Qa = {};
let sp = 1;
const Rg = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, lT = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Ig(e, t) {
  return t && `${t}::${sp++}` || e.uidEvent || sp++;
}
function $g(e) {
  const t = Ig(e);
  return e.uidEvent = t, Qa[t] = Qa[t] || {}, Qa[t];
}
function uT(e, t) {
  return function n(o) {
    return lc(o, {
      delegateTarget: e
    }), n.oneOff && U.off(e, o.type, t), t.apply(e, [o]);
  };
}
function cT(e, t, n) {
  return function o(r) {
    const s = e.querySelectorAll(t);
    for (let {
      target: i
    } = r; i && i !== this; i = i.parentNode)
      for (const a of s)
        if (a === i)
          return lc(r, {
            delegateTarget: i
          }), o.oneOff && U.off(e, r.type, t, n), n.apply(i, [r]);
  };
}
function kg(e, t, n = null) {
  return Object.values(e).find((o) => o.callable === t && o.delegationSelector === n);
}
function Pg(e, t, n) {
  const o = typeof t == "string", r = o ? n : t || n;
  let s = Vg(e);
  return lT.has(s) || (s = e), [o, r, s];
}
function ip(e, t, n, o, r) {
  if (typeof t != "string" || !e)
    return;
  let [s, i, a] = Pg(t, n, o);
  t in Rg && (i = ((h) => function(m) {
    if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))
      return h.call(this, m);
  })(i));
  const l = $g(e), f = l[a] || (l[a] = {}), u = kg(f, i, s ? n : null);
  if (u) {
    u.oneOff = u.oneOff && r;
    return;
  }
  const c = Ig(i, t.replace(sT, "")), d = s ? cT(e, n, i) : uT(e, i);
  d.delegationSelector = s ? n : null, d.callable = i, d.oneOff = r, d.uidEvent = c, f[c] = d, e.addEventListener(a, d, s);
}
function ou(e, t, n, o, r) {
  const s = kg(t[n], o, r);
  s && (e.removeEventListener(n, s, !!r), delete t[n][s.uidEvent]);
}
function fT(e, t, n, o) {
  const r = t[n] || {};
  for (const [s, i] of Object.entries(r))
    s.includes(o) && ou(e, t, n, i.callable, i.delegationSelector);
}
function Vg(e) {
  return e = e.replace(iT, ""), Rg[e] || e;
}
const U = {
  on(e, t, n, o) {
    ip(e, t, n, o, !1);
  },
  one(e, t, n, o) {
    ip(e, t, n, o, !0);
  },
  off(e, t, n, o) {
    if (typeof t != "string" || !e)
      return;
    const [r, s, i] = Pg(t, n, o), a = i !== t, l = $g(e), f = l[i] || {}, u = t.startsWith(".");
    if (typeof s < "u") {
      if (!Object.keys(f).length)
        return;
      ou(e, l, i, s, r ? n : null);
      return;
    }
    if (u)
      for (const c of Object.keys(l))
        fT(e, l, c, t.slice(1));
    for (const [c, d] of Object.entries(f)) {
      const p = c.replace(aT, "");
      (!a || t.includes(p)) && ou(e, l, i, d.callable, d.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const o = Dg(), r = Vg(t), s = t !== r;
    let i = null, a = !0, l = !0, f = !1;
    s && o && (i = o.Event(t, n), o(e).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const u = lc(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && u.preventDefault(), l && e.dispatchEvent(u), u.defaultPrevented && i && i.preventDefault(), u;
  }
};
function lc(e, t = {}) {
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
function ap(e) {
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
function Za(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Vn = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${Za(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${Za(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {}, n = Object.keys(e.dataset).filter((o) => o.startsWith("bs") && !o.startsWith("bsConfig"));
    for (const o of n) {
      let r = o.replace(/^bs/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1), t[r] = ap(e.dataset[o]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return ap(e.getAttribute(`data-bs-${Za(t)}`));
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
    const o = Pn(n) ? Vn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof o == "object" ? o : {},
      ...Pn(n) ? Vn.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [o, r] of Object.entries(n)) {
      const s = t[o], i = Pn(s) ? "element" : tT(s);
      if (!new RegExp(r).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${i}" but expected type "${r}".`);
    }
  }
}
const dT = "5.3.7";
class nn extends Us {
  constructor(t, n) {
    super(), t = ro(t), t && (this._element = t, this._config = this._getConfig(n), Xa.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    Xa.remove(this._element, this.constructor.DATA_KEY), U.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  // Private
  _queueCallback(t, n, o = !0) {
    xg(t, n, o);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return Xa.get(ro(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return dT;
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
const el = (e) => {
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
    return this.find(t, e).filter((n) => !so(n) && kr(n));
  },
  getSelectorFromElement(e) {
    const t = el(e);
    return t && ie.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = el(e);
    return t ? ie.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = el(e);
    return t ? ie.find(t) : [];
  }
}, Aa = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, o = e.NAME;
  U.on(document, n, `[data-bs-dismiss="${o}"]`, function(r) {
    if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), so(this))
      return;
    const s = ie.getElementFromSelector(this) || this.closest(`.${o}`);
    e.getOrCreateInstance(s)[t]();
  });
}, pT = "alert", hT = "bs.alert", Lg = `.${hT}`, mT = `close${Lg}`, _T = `closed${Lg}`, gT = "fade", ET = "show";
class Na extends nn {
  // Getters
  static get NAME() {
    return pT;
  }
  // Public
  close() {
    if (U.trigger(this._element, mT).defaultPrevented)
      return;
    this._element.classList.remove(ET);
    const n = this._element.classList.contains(gT);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), U.trigger(this._element, _T), this.dispose();
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
Aa(Na, "close");
Ht(Na);
const vT = "button", yT = "bs.button", bT = `.${yT}`, wT = ".data-api", OT = "active", lp = '[data-bs-toggle="button"]', AT = `click${bT}${wT}`;
class Sa extends nn {
  // Getters
  static get NAME() {
    return vT;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(OT));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Sa.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
U.on(document, AT, lp, (e) => {
  e.preventDefault();
  const t = e.target.closest(lp);
  Sa.getOrCreateInstance(t).toggle();
});
Ht(Sa);
const NT = "swipe", Pr = ".bs.swipe", ST = `touchstart${Pr}`, TT = `touchmove${Pr}`, CT = `touchend${Pr}`, DT = `pointerdown${Pr}`, xT = `pointerup${Pr}`, RT = "touch", IT = "pen", $T = "pointer-event", kT = 40, PT = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, VT = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class zi extends Us {
  constructor(t, n) {
    super(), this._element = t, !(!t || !zi.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return PT;
  }
  static get DefaultType() {
    return VT;
  }
  static get NAME() {
    return NT;
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
    if (t <= kT)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && wt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (U.on(this._element, DT, (t) => this._start(t)), U.on(this._element, xT, (t) => this._end(t)), this._element.classList.add($T)) : (U.on(this._element, ST, (t) => this._start(t)), U.on(this._element, TT, (t) => this._move(t)), U.on(this._element, CT, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === IT || t.pointerType === RT);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const LT = "carousel", MT = "bs.carousel", co = `.${MT}`, Mg = ".data-api", FT = "ArrowLeft", BT = "ArrowRight", UT = 500, Kr = "next", Jo = "prev", nr = "left", Ai = "right", jT = `slide${co}`, tl = `slid${co}`, HT = `keydown${co}`, KT = `mouseenter${co}`, WT = `mouseleave${co}`, zT = `dragstart${co}`, qT = `load${co}${Mg}`, GT = `click${co}${Mg}`, Fg = "carousel", Zs = "active", YT = "slide", XT = "carousel-item-end", JT = "carousel-item-start", QT = "carousel-item-next", ZT = "carousel-item-prev", Bg = ".active", Ug = ".carousel-item", eC = Bg + Ug, tC = ".carousel-item img", nC = ".carousel-indicators", oC = "[data-bs-slide], [data-bs-slide-to]", rC = '[data-bs-ride="carousel"]', sC = {
  [FT]: Ai,
  [BT]: nr
}, iC = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, aC = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class js extends nn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ie.findOne(nC, this._element), this._addEventListeners(), this._config.ride === Fg && this.cycle();
  }
  // Getters
  static get Default() {
    return iC;
  }
  static get DefaultType() {
    return aC;
  }
  static get NAME() {
    return LT;
  }
  // Public
  next() {
    this._slide(Kr);
  }
  nextWhenVisible() {
    !document.hidden && kr(this._element) && this.next();
  }
  prev() {
    this._slide(Jo);
  }
  pause() {
    this._isSliding && Tg(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        U.one(this._element, tl, () => this.cycle());
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
      U.one(this._element, tl, () => this.to(t));
      return;
    }
    const o = this._getItemIndex(this._getActive());
    if (o === t)
      return;
    const r = t > o ? Kr : Jo;
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
    this._config.keyboard && U.on(this._element, HT, (t) => this._keydown(t)), this._config.pause === "hover" && (U.on(this._element, KT, () => this.pause()), U.on(this._element, WT, () => this._maybeEnableCycle())), this._config.touch && zi.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const o of ie.find(tC, this._element))
      U.on(o, zT, (r) => r.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(nr)),
      rightCallback: () => this._slide(this._directionToOrder(Ai)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), UT + this._config.interval));
      }
    };
    this._swipeHelper = new zi(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = sC[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = ie.findOne(Bg, this._indicatorsElement);
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
    const o = this._getActive(), r = t === Kr, s = n || ac(this._getItems(), o, r, this._config.wrap);
    if (s === o)
      return;
    const i = this._getItemIndex(s), a = (p) => U.trigger(this._element, p, {
      relatedTarget: s,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(o),
      to: i
    });
    if (a(jT).defaultPrevented || !o || !s)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = s;
    const u = r ? JT : XT, c = r ? QT : ZT;
    s.classList.add(c), Bs(s), o.classList.add(u), s.classList.add(u);
    const d = () => {
      s.classList.remove(u, c), s.classList.add(Zs), o.classList.remove(Zs, c, u), this._isSliding = !1, a(tl);
    };
    this._queueCallback(d, o, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(YT);
  }
  _getActive() {
    return ie.findOne(eC, this._element);
  }
  _getItems() {
    return ie.find(Ug, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Ut() ? t === nr ? Jo : Kr : t === nr ? Kr : Jo;
  }
  _orderToDirection(t) {
    return Ut() ? t === Jo ? nr : Ai : t === Jo ? Ai : nr;
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
U.on(document, GT, oC, function(e) {
  const t = ie.getElementFromSelector(this);
  if (!t || !t.classList.contains(Fg))
    return;
  e.preventDefault();
  const n = js.getOrCreateInstance(t), o = this.getAttribute("data-bs-slide-to");
  if (o) {
    n.to(o), n._maybeEnableCycle();
    return;
  }
  if (Vn.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
U.on(window, qT, () => {
  const e = ie.find(rC);
  for (const t of e)
    js.getOrCreateInstance(t);
});
Ht(js);
const lC = "collapse", uC = "bs.collapse", Hs = `.${uC}`, cC = ".data-api", fC = `show${Hs}`, dC = `shown${Hs}`, pC = `hide${Hs}`, hC = `hidden${Hs}`, mC = `click${Hs}${cC}`, nl = "show", ar = "collapse", ei = "collapsing", _C = "collapsed", gC = `:scope .${ar} .${ar}`, EC = "collapse-horizontal", vC = "width", yC = "height", bC = ".collapse.show, .collapse.collapsing", ru = '[data-bs-toggle="collapse"]', wC = {
  parent: null,
  toggle: !0
}, OC = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Ss extends nn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const o = ie.find(ru);
    for (const r of o) {
      const s = ie.getSelectorFromElement(r), i = ie.find(s).filter((a) => a === this._element);
      s !== null && i.length && this._triggerArray.push(r);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return wC;
  }
  static get DefaultType() {
    return OC;
  }
  static get NAME() {
    return lC;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(bC).filter((a) => a !== this._element).map((a) => Ss.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || U.trigger(this._element, fC).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const o = this._getDimension();
    this._element.classList.remove(ar), this._element.classList.add(ei), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const r = () => {
      this._isTransitioning = !1, this._element.classList.remove(ei), this._element.classList.add(ar, nl), this._element.style[o] = "", U.trigger(this._element, dC);
    }, i = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(r, this._element, !0), this._element.style[o] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || U.trigger(this._element, pC).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Bs(this._element), this._element.classList.add(ei), this._element.classList.remove(ar, nl);
    for (const r of this._triggerArray) {
      const s = ie.getElementFromSelector(r);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([r], !1);
    }
    this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(ei), this._element.classList.add(ar), U.trigger(this._element, hC);
    };
    this._element.style[n] = "", this._queueCallback(o, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(nl);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = ro(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(EC) ? vC : yC;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(ru);
    for (const n of t) {
      const o = ie.getElementFromSelector(n);
      o && this._addAriaAndCollapsedClass([n], this._isShown(o));
    }
  }
  _getFirstLevelChildren(t) {
    const n = ie.find(gC, this._config.parent);
    return ie.find(t, this._config.parent).filter((o) => !n.includes(o));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const o of t)
        o.classList.toggle(_C, !n), o.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const o = Ss.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof o[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        o[t]();
      }
    });
  }
}
U.on(document, mC, ru, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of ie.getMultipleElementsFromSelector(this))
    Ss.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Ht(Ss);
const up = "dropdown", AC = "bs.dropdown", Ho = `.${AC}`, uc = ".data-api", NC = "Escape", cp = "Tab", SC = "ArrowUp", fp = "ArrowDown", TC = 2, CC = `hide${Ho}`, DC = `hidden${Ho}`, xC = `show${Ho}`, RC = `shown${Ho}`, jg = `click${Ho}${uc}`, Hg = `keydown${Ho}${uc}`, IC = `keyup${Ho}${uc}`, or = "show", $C = "dropup", kC = "dropend", PC = "dropstart", VC = "dropup-center", LC = "dropdown-center", Ao = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', MC = `${Ao}.${or}`, Ni = ".dropdown-menu", FC = ".navbar", BC = ".navbar-nav", UC = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", jC = Ut() ? "top-end" : "top-start", HC = Ut() ? "top-start" : "top-end", KC = Ut() ? "bottom-end" : "bottom-start", WC = Ut() ? "bottom-start" : "bottom-end", zC = Ut() ? "left-start" : "right-start", qC = Ut() ? "right-start" : "left-start", GC = "top", YC = "bottom", XC = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, JC = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class gn extends nn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = ie.next(this._element, Ni)[0] || ie.prev(this._element, Ni)[0] || ie.findOne(Ni, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return XC;
  }
  static get DefaultType() {
    return JC;
  }
  static get NAME() {
    return up;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (so(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!U.trigger(this._element, xC, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(BC))
        for (const o of [].concat(...document.body.children))
          U.on(o, "mouseover", Wi);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(or), this._element.classList.add(or), U.trigger(this._element, RC, t);
    }
  }
  hide() {
    if (so(this._element) || !this._isShown())
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
    if (!U.trigger(this._element, CC, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const o of [].concat(...document.body.children))
          U.off(o, "mouseover", Wi);
      this._popper && this._popper.destroy(), this._menu.classList.remove(or), this._element.classList.remove(or), this._element.setAttribute("aria-expanded", "false"), Vn.removeDataAttribute(this._menu, "popper"), U.trigger(this._element, DC, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !Pn(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${up.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Ng > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : Pn(this._config.reference) ? t = ro(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = ic(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(or);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(kC))
      return zC;
    if (t.classList.contains(PC))
      return qC;
    if (t.classList.contains(VC))
      return GC;
    if (t.classList.contains(LC))
      return YC;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains($C) ? n ? HC : jC : n ? WC : KC;
  }
  _detectNavbar() {
    return this._element.closest(FC) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (Vn.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
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
    const o = ie.find(UC, this._menu).filter((r) => kr(r));
    o.length && ac(o, n, t === fp, !o.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = gn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === TC || t.type === "keyup" && t.key !== cp)
      return;
    const n = ie.find(MC);
    for (const o of n) {
      const r = gn.getInstance(o);
      if (!r || r._config.autoClose === !1)
        continue;
      const s = t.composedPath(), i = s.includes(r._menu);
      if (s.includes(r._element) || r._config.autoClose === "inside" && !i || r._config.autoClose === "outside" && i || r._menu.contains(t.target) && (t.type === "keyup" && t.key === cp || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: r._element
      };
      t.type === "click" && (a.clickEvent = t), r._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), o = t.key === NC, r = [SC, fp].includes(t.key);
    if (!r && !o || n && !o)
      return;
    t.preventDefault();
    const s = this.matches(Ao) ? this : ie.prev(this, Ao)[0] || ie.next(this, Ao)[0] || ie.findOne(Ao, t.delegateTarget.parentNode), i = gn.getOrCreateInstance(s);
    if (r) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), s.focus());
  }
}
U.on(document, Hg, Ao, gn.dataApiKeydownHandler);
U.on(document, Hg, Ni, gn.dataApiKeydownHandler);
U.on(document, jg, gn.clearMenus);
U.on(document, IC, gn.clearMenus);
U.on(document, jg, Ao, function(e) {
  e.preventDefault(), gn.getOrCreateInstance(this).toggle();
});
Ht(gn);
const Kg = "backdrop", QC = "fade", dp = "show", pp = `mousedown.bs.${Kg}`, ZC = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, eD = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Wg extends Us {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return ZC;
  }
  static get DefaultType() {
    return eD;
  }
  static get NAME() {
    return Kg;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      wt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Bs(n), n.classList.add(dp), this._emulateAnimation(() => {
      wt(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      wt(t);
      return;
    }
    this._getElement().classList.remove(dp), this._emulateAnimation(() => {
      this.dispose(), wt(t);
    });
  }
  dispose() {
    this._isAppended && (U.off(this._element, pp), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(QC), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = ro(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), U.on(t, pp, () => {
      wt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    xg(t, this._getElement(), this._config.isAnimated);
  }
}
const tD = "focustrap", nD = "bs.focustrap", qi = `.${nD}`, oD = `focusin${qi}`, rD = `keydown.tab${qi}`, sD = "Tab", iD = "forward", hp = "backward", aD = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, lD = {
  autofocus: "boolean",
  trapElement: "element"
};
class zg extends Us {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return aD;
  }
  static get DefaultType() {
    return lD;
  }
  static get NAME() {
    return tD;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), U.off(document, qi), U.on(document, oD, (t) => this._handleFocusin(t)), U.on(document, rD, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, U.off(document, qi));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const o = ie.focusableChildren(n);
    o.length === 0 ? n.focus() : this._lastTabNavDirection === hp ? o[o.length - 1].focus() : o[0].focus();
  }
  _handleKeydown(t) {
    t.key === sD && (this._lastTabNavDirection = t.shiftKey ? hp : iD);
  }
}
const mp = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _p = ".sticky-top", ti = "padding-right", gp = "margin-right";
class su {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, ti, (n) => n + t), this._setElementAttributes(mp, ti, (n) => n + t), this._setElementAttributes(_p, gp, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ti), this._resetElementAttributes(mp, ti), this._resetElementAttributes(_p, gp);
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
    o && Vn.setDataAttribute(t, n, o);
  }
  _resetElementAttributes(t, n) {
    const o = (r) => {
      const s = Vn.getDataAttribute(r, n);
      if (s === null) {
        r.style.removeProperty(n);
        return;
      }
      Vn.removeDataAttribute(r, n), r.style.setProperty(n, s);
    };
    this._applyManipulationCallback(t, o);
  }
  _applyManipulationCallback(t, n) {
    if (Pn(t)) {
      n(t);
      return;
    }
    for (const o of ie.find(t, this._element))
      n(o);
  }
}
const uD = "modal", cD = "bs.modal", jt = `.${cD}`, fD = ".data-api", dD = "Escape", pD = `hide${jt}`, hD = `hidePrevented${jt}`, qg = `hidden${jt}`, Gg = `show${jt}`, mD = `shown${jt}`, _D = `resize${jt}`, gD = `click.dismiss${jt}`, ED = `mousedown.dismiss${jt}`, vD = `keydown.dismiss${jt}`, yD = `click${jt}${fD}`, Ep = "modal-open", bD = "fade", vp = "show", ol = "modal-static", wD = ".modal.show", OD = ".modal-dialog", AD = ".modal-body", ND = '[data-bs-toggle="modal"]', SD = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, TD = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class io extends nn {
  constructor(t, n) {
    super(t, n), this._dialog = ie.findOne(OD, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new su(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return SD;
  }
  static get DefaultType() {
    return TD;
  }
  static get NAME() {
    return uD;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || U.trigger(this._element, Gg, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ep), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || U.trigger(this._element, pD).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(vp), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    U.off(window, jt), U.off(this._dialog, jt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Wg({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new zg({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = ie.findOne(AD, this._dialog);
    n && (n.scrollTop = 0), Bs(this._element), this._element.classList.add(vp);
    const o = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, U.trigger(this._element, mD, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    U.on(this._element, vD, (t) => {
      if (t.key === dD) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), U.on(window, _D, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), U.on(this._element, ED, (t) => {
      U.one(this._element, gD, (n) => {
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
      document.body.classList.remove(Ep), this._resetAdjustments(), this._scrollBar.reset(), U.trigger(this._element, qg);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(bD);
  }
  _triggerBackdropTransition() {
    if (U.trigger(this._element, hD).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, o = this._element.style.overflowY;
    o === "hidden" || this._element.classList.contains(ol) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(ol), this._queueCallback(() => {
      this._element.classList.remove(ol), this._queueCallback(() => {
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
      const r = Ut() ? "paddingLeft" : "paddingRight";
      this._element.style[r] = `${n}px`;
    }
    if (!o && t) {
      const r = Ut() ? "paddingRight" : "paddingLeft";
      this._element.style[r] = `${n}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, n) {
    return this.each(function() {
      const o = io.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof o[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        o[t](n);
      }
    });
  }
}
U.on(document, yD, ND, function(e) {
  const t = ie.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), U.one(t, Gg, (r) => {
    r.defaultPrevented || U.one(t, qg, () => {
      kr(this) && this.focus();
    });
  });
  const n = ie.findOne(wD);
  n && io.getInstance(n).hide(), io.getOrCreateInstance(t).toggle(this);
});
Aa(io);
Ht(io);
const CD = "offcanvas", DD = "bs.offcanvas", jn = `.${DD}`, Yg = ".data-api", xD = `load${jn}${Yg}`, RD = "Escape", yp = "show", bp = "showing", wp = "hiding", ID = "offcanvas-backdrop", Xg = ".offcanvas.show", $D = `show${jn}`, kD = `shown${jn}`, PD = `hide${jn}`, Op = `hidePrevented${jn}`, Jg = `hidden${jn}`, VD = `resize${jn}`, LD = `click${jn}${Yg}`, MD = `keydown.dismiss${jn}`, FD = '[data-bs-toggle="offcanvas"]', BD = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, UD = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class ao extends nn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return BD;
  }
  static get DefaultType() {
    return UD;
  }
  static get NAME() {
    return CD;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || U.trigger(this._element, $D, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new su().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(bp);
    const o = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(yp), this._element.classList.remove(bp), U.trigger(this._element, kD, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._element, !0);
  }
  hide() {
    if (!this._isShown || U.trigger(this._element, PD).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(wp), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(yp, wp), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new su().reset(), U.trigger(this._element, Jg);
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
        U.trigger(this._element, Op);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Wg({
      className: ID,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new zg({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    U.on(this._element, MD, (t) => {
      if (t.key === RD) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        U.trigger(this._element, Op);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ao.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
U.on(document, LD, FD, function(e) {
  const t = ie.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), so(this))
    return;
  U.one(t, Jg, () => {
    kr(this) && this.focus();
  });
  const n = ie.findOne(Xg);
  n && n !== t && ao.getInstance(n).hide(), ao.getOrCreateInstance(t).toggle(this);
});
U.on(window, xD, () => {
  for (const e of ie.find(Xg))
    ao.getOrCreateInstance(e).show();
});
U.on(window, VD, () => {
  for (const e of ie.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && ao.getOrCreateInstance(e).hide();
});
Aa(ao);
Ht(ao);
const jD = /^aria-[\w-]*$/i, Qg = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", jD],
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
}, HD = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), KD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, WD = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? HD.has(n) ? !!KD.test(e.nodeValue) : !0 : t.filter((o) => o instanceof RegExp).some((o) => o.test(n));
};
function zD(e, t, n) {
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
      WD(u, f) || i.removeAttribute(u.nodeName);
  }
  return r.body.innerHTML;
}
const qD = "TemplateFactory", GD = {
  allowList: Qg,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, YD = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, XD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class JD extends Us {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return GD;
  }
  static get DefaultType() {
    return YD;
  }
  static get NAME() {
    return qD;
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
      }, XD);
  }
  _setContent(t, n, o) {
    const r = ie.findOne(o, t);
    if (r) {
      if (n = this._resolvePossibleFunction(n), !n) {
        r.remove();
        return;
      }
      if (Pn(n)) {
        this._putElementInTemplate(ro(n), r);
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
    return this._config.sanitize ? zD(t, this._config.allowList, this._config.sanitizeFn) : t;
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
const QD = "tooltip", ZD = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), rl = "fade", ex = "modal", ni = "show", tx = ".tooltip-inner", Ap = `.${ex}`, Np = "hide.bs.modal", Wr = "hover", sl = "focus", il = "click", nx = "manual", ox = "hide", rx = "hidden", sx = "show", ix = "shown", ax = "inserted", lx = "click", ux = "focusin", cx = "focusout", fx = "mouseenter", dx = "mouseleave", px = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Ut() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Ut() ? "right" : "left"
}, hx = {
  allowList: Qg,
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
}, mx = {
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
class Ko extends nn {
  constructor(t, n) {
    if (typeof Ng > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return hx;
  }
  static get DefaultType() {
    return mx;
  }
  static get NAME() {
    return QD;
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
    clearTimeout(this._timeout), U.off(this._element.closest(Ap), Np, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = U.trigger(this._element, this.constructor.eventName(sx)), o = (Cg(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !o)
      return;
    this._disposePopper();
    const r = this._getTipElement();
    this._element.setAttribute("aria-describedby", r.getAttribute("id"));
    const {
      container: s
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(r), U.trigger(this._element, this.constructor.eventName(ax))), this._popper = this._createPopper(r), r.classList.add(ni), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        U.on(a, "mouseover", Wi);
    const i = () => {
      U.trigger(this._element, this.constructor.eventName(ix)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || U.trigger(this._element, this.constructor.eventName(ox)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(ni), "ontouchstart" in document.documentElement)
      for (const r of [].concat(...document.body.children))
        U.off(r, "mouseover", Wi);
    this._activeTrigger[il] = !1, this._activeTrigger[sl] = !1, this._activeTrigger[Wr] = !1, this._isHovered = null;
    const o = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), U.trigger(this._element, this.constructor.eventName(rx)));
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
    n.classList.remove(rl, ni), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const o = nT(this.constructor.NAME).toString();
    return n.setAttribute("id", o), this._isAnimated() && n.classList.add(rl), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new JD({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [tx]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(rl);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(ni);
  }
  _createPopper(t) {
    const n = wt(this._config.placement, [this, t, this._element]), o = px[n.toUpperCase()];
    return ic(this._element, t, this._getPopperConfig(o));
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
        U.on(this._element, this.constructor.eventName(lx), this._config.selector, (o) => {
          const r = this._initializeOnDelegatedTarget(o);
          r._activeTrigger[il] = !(r._isShown() && r._activeTrigger[il]), r.toggle();
        });
      else if (n !== nx) {
        const o = n === Wr ? this.constructor.eventName(fx) : this.constructor.eventName(ux), r = n === Wr ? this.constructor.eventName(dx) : this.constructor.eventName(cx);
        U.on(this._element, o, this._config.selector, (s) => {
          const i = this._initializeOnDelegatedTarget(s);
          i._activeTrigger[s.type === "focusin" ? sl : Wr] = !0, i._enter();
        }), U.on(this._element, r, this._config.selector, (s) => {
          const i = this._initializeOnDelegatedTarget(s);
          i._activeTrigger[s.type === "focusout" ? sl : Wr] = i._element.contains(s.relatedTarget), i._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, U.on(this._element.closest(Ap), Np, this._hideModalHandler);
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
    const n = Vn.getDataAttributes(this._element);
    for (const o of Object.keys(n))
      ZD.has(o) && delete n[o];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : ro(t.container), typeof t.delay == "number" && (t.delay = {
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
      const n = Ko.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ht(Ko);
const _x = "popover", gx = ".popover-header", Ex = ".popover-body", vx = {
  ...Ko.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, yx = {
  ...Ko.DefaultType,
  content: "(null|string|element|function)"
};
class cc extends Ko {
  // Getters
  static get Default() {
    return vx;
  }
  static get DefaultType() {
    return yx;
  }
  static get NAME() {
    return _x;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [gx]: this._getTitle(),
      [Ex]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = cc.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ht(cc);
const bx = "scrollspy", wx = "bs.scrollspy", fc = `.${wx}`, Ox = ".data-api", Ax = `activate${fc}`, Sp = `click${fc}`, Nx = `load${fc}${Ox}`, Sx = "dropdown-item", Qo = "active", Tx = '[data-bs-spy="scroll"]', al = "[href]", Cx = ".nav, .list-group", Tp = ".nav-link", Dx = ".nav-item", xx = ".list-group-item", Rx = `${Tp}, ${Dx} > ${Tp}, ${xx}`, Ix = ".dropdown", $x = ".dropdown-toggle", kx = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, Px = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Ta extends nn {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return kx;
  }
  static get DefaultType() {
    return Px;
  }
  static get NAME() {
    return bx;
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
    return t.target = ro(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (U.off(this._config.target, Sp), U.on(this._config.target, Sp, al, (t) => {
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
    const t = ie.find(al, this._config.target);
    for (const n of t) {
      if (!n.hash || so(n))
        continue;
      const o = ie.findOne(decodeURI(n.hash), this._element);
      kr(o) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, o));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Qo), this._activateParents(t), U.trigger(this._element, Ax, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(Sx)) {
      ie.findOne($x, t.closest(Ix)).classList.add(Qo);
      return;
    }
    for (const n of ie.parents(t, Cx))
      for (const o of ie.prev(n, Rx))
        o.classList.add(Qo);
  }
  _clearActiveClass(t) {
    t.classList.remove(Qo);
    const n = ie.find(`${al}.${Qo}`, t);
    for (const o of n)
      o.classList.remove(Qo);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ta.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
U.on(window, Nx, () => {
  for (const e of ie.find(Tx))
    Ta.getOrCreateInstance(e);
});
Ht(Ta);
const Vx = "tab", Lx = "bs.tab", Wo = `.${Lx}`, Mx = `hide${Wo}`, Fx = `hidden${Wo}`, Bx = `show${Wo}`, Ux = `shown${Wo}`, jx = `click${Wo}`, Hx = `keydown${Wo}`, Kx = `load${Wo}`, Wx = "ArrowLeft", Cp = "ArrowRight", zx = "ArrowUp", Dp = "ArrowDown", ll = "Home", xp = "End", No = "active", Rp = "fade", ul = "show", qx = "dropdown", Zg = ".dropdown-toggle", Gx = ".dropdown-menu", cl = `:not(${Zg})`, Yx = '.list-group, .nav, [role="tablist"]', Xx = ".nav-item, .list-group-item", Jx = `.nav-link${cl}, .list-group-item${cl}, [role="tab"]${cl}`, eE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', fl = `${Jx}, ${eE}`, Qx = `.${No}[data-bs-toggle="tab"], .${No}[data-bs-toggle="pill"], .${No}[data-bs-toggle="list"]`;
class Ar extends nn {
  constructor(t) {
    super(t), this._parent = this._element.closest(Yx), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), U.on(this._element, Hx, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return Vx;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), o = n ? U.trigger(n, Mx, {
      relatedTarget: t
    }) : null;
    U.trigger(t, Bx, {
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
        t.classList.add(ul);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), U.trigger(t, Ux, {
        relatedTarget: n
      });
    };
    this._queueCallback(o, t, t.classList.contains(Rp));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(No), t.blur(), this._deactivate(ie.getElementFromSelector(t));
    const o = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(ul);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), U.trigger(t, Fx, {
        relatedTarget: n
      });
    };
    this._queueCallback(o, t, t.classList.contains(Rp));
  }
  _keydown(t) {
    if (![Wx, Cp, zx, Dp, ll, xp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((r) => !so(r));
    let o;
    if ([ll, xp].includes(t.key))
      o = n[t.key === ll ? 0 : n.length - 1];
    else {
      const r = [Cp, Dp].includes(t.key);
      o = ac(n, t.target, r, !0);
    }
    o && (o.focus({
      preventScroll: !0
    }), Ar.getOrCreateInstance(o).show());
  }
  _getChildren() {
    return ie.find(fl, this._parent);
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
    if (!o.classList.contains(qx))
      return;
    const r = (s, i) => {
      const a = ie.findOne(s, o);
      a && a.classList.toggle(i, n);
    };
    r(Zg, No), r(Gx, ul), o.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, o) {
    t.hasAttribute(n) || t.setAttribute(n, o);
  }
  _elemIsActive(t) {
    return t.classList.contains(No);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(fl) ? t : ie.findOne(fl, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(Xx) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ar.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
U.on(document, jx, eE, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !so(this) && Ar.getOrCreateInstance(this).show();
});
U.on(window, Kx, () => {
  for (const e of ie.find(Qx))
    Ar.getOrCreateInstance(e);
});
Ht(Ar);
const Zx = "toast", eR = "bs.toast", fo = `.${eR}`, tR = `mouseover${fo}`, nR = `mouseout${fo}`, oR = `focusin${fo}`, rR = `focusout${fo}`, sR = `hide${fo}`, iR = `hidden${fo}`, aR = `show${fo}`, lR = `shown${fo}`, uR = "fade", Ip = "hide", oi = "show", ri = "showing", cR = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, fR = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class Ks extends nn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return fR;
  }
  static get DefaultType() {
    return cR;
  }
  static get NAME() {
    return Zx;
  }
  // Public
  show() {
    if (U.trigger(this._element, aR).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(uR);
    const n = () => {
      this._element.classList.remove(ri), U.trigger(this._element, lR), this._maybeScheduleHide();
    };
    this._element.classList.remove(Ip), Bs(this._element), this._element.classList.add(oi, ri), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || U.trigger(this._element, sR).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Ip), this._element.classList.remove(ri, oi), U.trigger(this._element, iR);
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
    U.on(this._element, tR, (t) => this._onInteraction(t, !0)), U.on(this._element, nR, (t) => this._onInteraction(t, !1)), U.on(this._element, oR, (t) => this._onInteraction(t, !0)), U.on(this._element, rR, (t) => this._onInteraction(t, !1));
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
Aa(Ks);
Ht(Ks);
const dR = { class: "modal-dialog" }, pR = { class: "modal-content" }, hR = { class: "modal-body" }, mR = { class: "mb-3" }, _R = /* @__PURE__ */ ke({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = de(""), o = de(null);
    let r = null, s = null;
    Un(() => {
      o.value && (r = new io(o.value), o.value.addEventListener("hidden.bs.modal", () => {
        s && s(null);
      }));
    }), oa(() => {
      r && r.dispose();
    });
    const i = () => new Promise((f) => {
      s = f, r ? r.show() : f(null);
    }), a = () => {
      s && s(n.value), r && r.hide(), n.value = "";
    }, l = () => {
      r && r.hide();
    };
    return t({ show: i }), (f, u) => (J(), te("div", {
      class: "modal fade",
      ref_key: "modal",
      ref: o,
      tabindex: "-1",
      "aria-labelledby": "addMrnModalLabel",
      "aria-hidden": "true"
    }, [
      b("div", dR, [
        b("div", pR, [
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
          b("div", hR, [
            b("div", mR, [
              u[1] || (u[1] = b("label", {
                for: "mrn-input",
                class: "form-label"
              }, "MRN", -1)),
              Zn(b("input", {
                type: "text",
                class: "form-control",
                id: "mrn-input",
                "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c),
                onKeyup: vb(a, ["enter"])
              }, null, 544), [
                [mm, n.value]
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
}), gR = { class: "p-3" }, ER = /* @__PURE__ */ ke({
  __name: "MonitorPage",
  setup(e) {
    const t = qu(), n = de(null);
    Un(() => {
      t.fetchMrns();
    });
    const o = async () => {
      if (n.value) {
        const r = await n.value.show();
        r && t.addMrn(r);
      }
    };
    return (r, s) => (J(), te("div", gR, [
      Ne(GS, { onAddMrn: o }),
      Ne(d1, {
        items: ye(t).mrns,
        loading: ye(t).loading,
        "selected-mrns": ye(t).selectedMrns,
        "all-selected": ye(t).allSelected,
        onToggleSelection: ye(t).toggleSelection,
        onToggleSelectAll: ye(t).toggleSelectAll
      }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "onToggleSelection", "onToggleSelectAll"]),
      Ne(_R, {
        ref_key: "addMrnModal",
        ref: n
      }, null, 512)
    ]));
  }
}), vR = {}, yR = { class: "error-wrapper" }, bR = { class: "mt-5" };
function wR(e, t) {
  const n = Ln("router-link");
  return J(), te("div", yR, [
    Ee(e.$slots, "title", {}, () => [
      t[0] || (t[0] = b("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    Ee(e.$slots, "description", {}, () => [
      t[1] || (t[1] = b("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    Ee(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = b("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    b("div", bR, [
      Ne(n, {
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
const OR = /* @__PURE__ */ xr(vR, [["render", wR], ["__scopeId", "data-v-d4f8fed2"]]), AR = { class: "card shadow-sm" }, NR = { class: "card-body" }, SR = { class: "text-center" }, TR = {
  key: 0,
  class: "lead text-danger"
}, CR = {
  key: 1,
  class: "text-muted"
}, DR = /* @__PURE__ */ ke({
  __name: "ErrorPage",
  setup(e) {
    const n = DA().query.message;
    return (o, r) => {
      const s = Ln("router-link");
      return J(), te("div", AR, [
        b("div", NR, [
          b("div", SR, [
            r[1] || (r[1] = b("h1", { class: "display-4" }, "Something went wrong", -1)),
            ye(n) ? (J(), te("p", TR, "Error: " + Be(ye(n)), 1)) : (J(), te("p", CR, "We're sorry for the inconvenience. Please try again later.")),
            Ne(s, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: Ot(() => r[0] || (r[0] = [
                tt("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), xR = [
  {
    path: "/",
    component: PA,
    children: [
      { path: "", name: "home", component: MA },
      { path: "setup", name: "setup", component: US },
      { path: "monitor", name: "monitor", component: ER },
      { path: "error", name: "error", component: DR },
      { path: "/:pathMatch(.*)*", component: OR }
    ]
  }
];
let si;
const $p = () => si || (si = TA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: LO(),
  routes: xR
}), si), RR = {
  key: 0,
  class: "alert alert-danger"
}, IR = { style: { "word-break": "break-all" } }, $R = /* @__PURE__ */ ke({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = de(), n = Wu(), { errors: o } = c_(n), r = (s) => JSON.stringify(s);
    return ra(async () => {
      if (o.value?.length === 0) return;
      const s = t.value;
      s && (await s.show(), n.resetErrors());
    }), (s, i) => {
      const a = Ln("b-modal");
      return J(), St(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: Ot(() => i[0] || (i[0] = [
          b("span", null, "Error", -1)
        ])),
        default: Ot(() => [
          (J(!0), te(De, null, Vt(ye(o), (l, f) => (J(), te(De, { key: f }, [
            l ? (J(), te("div", RR, [
              b("div", IR, Be(r(l)), 1)
            ])) : Lo("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), kR = /* @__PURE__ */ ke({
  __name: "App",
  setup(e) {
    const t = zu();
    return Un(() => {
      t.fetchProjectSettings();
    }), (n, o) => {
      const r = Ln("router-view");
      return J(), te(De, null, [
        o[0] || (o[0] = b("div", { class: "card" }, [
          b("div", { class: "card-body" }, [
            b("p", null, "FHIR Snapshot")
          ])
        ], -1)),
        Ne(r),
        Ne($R)
      ], 64);
    };
  }
});
var PR = Object.defineProperty, VR = (e, t, n) => t in e ? PR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qt = (e, t, n) => VR(e, typeof t != "symbol" ? t + "" : t, n);
const LR = { class: "toast-header" }, MR = ["textContent"], FR = ["textContent"], BR = { class: "toast-body" }, UR = ["textContent"], jR = /* @__PURE__ */ ke({
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
    const o = e, r = n, { visible: s, animation: i, autohide: a, delay: l } = Zt(o), f = de(), u = de();
    $n(s, (S) => {
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
    function g() {
      f.value.getInstance();
    }
    function v() {
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
    async function N() {
      r("shown", f.value);
    }
    const C = { show: c, hide: d, dispose: p, isShown: h, getOrCreateInstance: m, getInstance: g };
    return t({ ...C }), Un(() => {
      u.value.addEventListener("hide.bs.toast", O), u.value.addEventListener("hidden.bs.toast", y), u.value.addEventListener("show.bs.toast", R), u.value.addEventListener("shown.bs.toast", N), f.value = new Ks(u.value, {
        animation: i.value,
        autohide: a.value,
        delay: l.value
      }), v();
    }), (S, V) => (J(), te("div", {
      ref_key: "toastRef",
      ref: u,
      class: Ve(["toast", [S.variant ? `text-bg-${S.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      Ee(S.$slots, "header", Ge(Ke({ ...C })), () => [
        b("div", LR, [
          Ee(S.$slots, "title", Ge(Ke({ ...C })), () => [
            b("strong", {
              class: "me-auto",
              textContent: Be(S.title)
            }, null, 8, MR)
          ], !0),
          Ee(S.$slots, "subtitle", Ge(Ke({ ...C })), () => [
            b("small", {
              textContent: Be(S.subtitle)
            }, null, 8, FR)
          ], !0),
          b("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: d
          })
        ])
      ], !0),
      Ee(S.$slots, "body", Ge(Ke({ ...C })), () => [
        b("div", BR, [
          Ee(S.$slots, "default", Ge(Ke({ ...C })), () => [
            b("span", {
              textContent: Be(S.body)
            }, null, 8, UR)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), An = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, tE = /* @__PURE__ */ An(jR, [["__scopeId", "data-v-c0cdbae8"]]);
function HR() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const KR = { id: "toast-wrapper" };
let kp;
const WR = /* @__PURE__ */ ke({
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
    }, o = de(/* @__PURE__ */ new Map());
    kp = (s, i = "top right") => {
      const a = HR(), l = { ...n, ...s, id: a };
      let f = o.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(l), o.value.set(i, f);
    };
    function r(s, i) {
      const a = o.value.get(s);
      a?.delete(i);
    }
    return t({ toast: kp }), (s, i) => (J(), St(ta, { to: "body" }, [
      b("div", KR, [
        (J(!0), te(De, null, Vt(o.value, ([a, l]) => (J(), te("div", {
          key: a,
          class: Ve(["toast-group", `${a}`])
        }, [
          (J(!0), te(De, null, Vt(l, (f, u) => (J(), St(tE, lo({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (c) => r(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), zR = /* @__PURE__ */ An(WR, [["__scopeId", "data-v-786d1c50"]]), nE = () => {
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
var wn = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(wn || {});
const Nr = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(wn).includes(n) || n == "" ? "" : `${t}${n}`;
}, qR = { class: "modal-content" }, GR = { class: "modal-header" }, YR = ["innerHTML"], XR = { class: "modal-body" }, JR = ["innerHTML"], QR = { class: "modal-footer" }, ZR = ["innerHTML"], eI = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const tI = /* @__PURE__ */ ke({
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
    size: { default: wn.STANDARD },
    btnSize: { default: wn.SMALL },
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
    } = Zt(o), u = n, c = Oe(() => Nr(l.value, "modal-")), d = Oe(() => Nr(f.value, "btn-")), p = de();
    let h;
    const m = On(), g = () => document.querySelectorAll(".modal.show").length, v = () => typeof window < "u" && window._managedModals ? window._managedModals : [], O = 1055, y = de(O), R = () => {
      const Q = g();
      y.value = O + Q;
    };
    let N;
    const C = nE();
    function S() {
      return new Promise((Q, H) => {
        if (!p.value) return;
        C.removeStickyElements(), R(), p.value.classList.add("managed-modal");
        const Z = v(), le = Z.length + 1, ze = {
          element: p.value,
          priority: le,
          instance: m
        };
        Z.push(ze), p.value.addEventListener("shown.bs.modal", () => {
          I();
        }, { once: !0 }), h?.show(), N = Q, u("onShown", h);
      });
    }
    function V(Q = !0) {
      if (!p.value) return;
      const H = v(), Z = H.findIndex((le) => le.element === p.value);
      Z > -1 && H.splice(Z, 1), p.value.addEventListener("hidden.bs.modal", () => {
        p.value && (p.value.style.display = ""), I();
      }, { once: !0 }), h?.hide(), typeof N == "function" && N(Q), u("onHidden", h), C.restoreStickyElements();
    }
    function P() {
      h?.toggle();
    }
    const I = () => {
      const Q = v();
      if (Q.length === 0) return;
      Q.sort((Z, le) => Z.priority - le.priority);
      const H = Q[Q.length - 1];
      Q.forEach((Z) => {
        Z.element !== H.element ? Z.element.style.opacity = "0" : Z.element.style.opacity = "1";
      });
    };
    Un(() => {
      h = new io(p.value, {
        backdrop: r?.value,
        keyboard: s.value,
        focus: i.value
      }), p.value.classList.add("managed-modal"), ra(() => {
        o?.visible === !0 ? h?.show() : h?.hide();
      });
    });
    function $(Q) {
      r?.value !== "static" && V(!1);
    }
    function D() {
      V(!1);
    }
    function q() {
      V(!1);
    }
    function ue() {
      V(!0);
    }
    t({
      modal: h,
      show: S,
      hide: V,
      toggle: P,
      onHeaderCloseClicked: D,
      onCancelClicked: q,
      onOkCLicked: ue
    });
    const he = { show: S, hide: V, toggle: P, modal: h };
    return (Q, H) => (J(), te("div", lo({
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
        b("div", qR, [
          Ee(Q.$slots, "header", Ge(Ke({ ...he })), () => [
            b("div", GR, [
              Ee(Q.$slots, "title", Ge(Ke({ ...he })), () => [
                b("h5", {
                  class: "modal-title",
                  innerHTML: Q.title
                }, null, 8, YR)
              ], !0),
              Ee(Q.$slots, "header-close-button", Ge(Ke({ ...he })), () => [
                b("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: D
                })
              ], !0)
            ])
          ], !0),
          b("div", XR, [
            Ee(Q.$slots, "default", Ge(Ke({ ...he })), () => [
              b("span", { innerHTML: Q.body }, null, 8, JR)
            ], !0)
          ]),
          b("div", QR, [
            Ee(Q.$slots, "footer", Ge(Ke({ ...he })), () => [
              Q.okOnly ? Lo("", !0) : (J(), te("button", {
                key: 0,
                type: "button",
                class: Ve(["btn btn-secondary", d.value]),
                onClick: q
              }, [
                Ee(Q.$slots, "button-cancel", Ge(Ke({ ...he })), () => [
                  b("span", { innerHTML: Q.textCancel }, null, 8, ZR)
                ], !0)
              ], 2)),
              b("button", {
                type: "button",
                class: Ve(["btn btn-primary", d.value]),
                onClick: ue
              }, [
                Ee(Q.$slots, "button-ok", Ge(Ke({ ...he })), () => [
                  b("span", { innerHTML: Q.textOk }, null, 8, eI)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), oE = /* @__PURE__ */ An(tI, [["__scopeId", "data-v-b8ba4eaa"]]), nI = /* @__PURE__ */ ke({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = de(void 0), o = de({});
    function r(i = {}) {
      var a;
      return i.okOnly = !1, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function s(i = {}) {
      var a;
      return i.okOnly = !0, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: r, alert: s }), (i, a) => (J(), St(ta, { to: "body" }, [
      Ne(oE, lo({
        ref_key: "modalRef",
        ref: n
      }, { ...o.value }), null, 16)
    ]));
  }
}), oI = {
  "data-header": "",
  class: "border-bottom"
}, rI = { class: "d-flex gap-2 p-2" }, sI = { class: "p-2" }, iI = {
  "data-footer": "",
  class: "border-top p-2"
}, aI = { class: "buttons" }, lI = /* @__PURE__ */ ke({
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
    size: { default: wn.STANDARD },
    btnSize: { default: wn.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, { backdrop: o, disableOutsideClick: r, modal: s, size: i, btnSize: a } = Zt(n), l = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = de(f), c = de(!1), d = de(!1), p = de(!1), h = de(), m = de(!1), g = Oe(() => Nr(i.value, "modal-")), v = Oe(() => Nr(a.value, "btn-")), O = Oe(() => ({
      opening: c.value,
      closing: d.value,
      "no-backdrop": o.value === !1,
      static: m.value
    }));
    let y = null;
    const R = () => {
      const D = l();
      u.value = f + D;
    }, N = nE(), C = async () => (R(), N.removeStickyElements(), c.value = !0, h.value.addEventListener(
      "animationend",
      () => {
        c.value = !1, p.value = !0;
      },
      { once: !0 }
    ), s.value === !0 ? h.value.showModal() : h.value.show(), new Promise((D, q) => {
      y = D;
    })), S = async (D = !1) => {
      d.value = !0, h.value.addEventListener(
        "animationend",
        () => {
          h.value.close(), d.value = !1, p.value = !1, typeof y == "function" && y(D), y = null, N.restoreStickyElements();
        },
        { once: !0 }
      );
    }, V = async () => {
      p.value === !0 ? S() : C();
    }, P = () => {
      m.value = !0, setTimeout(() => {
        m.value = !1;
      }, 200);
    }, I = () => {
      if (o.value === "static" || r.value === !0) {
        P();
        return;
      }
      S(!1);
    };
    if (s.value === !0) {
      let D = function(ue) {
        if (o.value === "static" || r.value === !0) {
          P();
          return;
        }
        ue.target === h.value && S(!1);
      };
      const q = new AbortController();
      Un(() => {
        document.addEventListener("click", (ue) => {
          D(ue);
        }, { signal: q.signal });
      }), oa(() => {
        q.abort();
      });
    }
    const $ = { show: C, hide: S, toggle: V, dialog: h };
    return t({
      show: C,
      hide: S,
      toggle: V
    }), (D, q) => (J(), te("div", {
      class: "dialog-wrapper",
      style: xs({ zIndex: u.value })
    }, [
      b("div", {
        class: "backdrop",
        onClick: I
      }),
      b("dialog", {
        ref_key: "dialog",
        ref: h,
        class: Ve(O.value)
      }, [
        b("div", {
          class: Ve(["content", g.value])
        }, [
          Ee(D.$slots, "header", Ge(Ke({ ...$ })), () => [
            b("div", oI, [
              b("div", rI, [
                Ee(D.$slots, "title", Ge(Ke({ ...$ })), () => [
                  tt(Be(D.title), 1)
                ], !0),
                Ee(D.$slots, "header-close-button", {}, () => [
                  b("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: q[0] || (q[0] = (ue) => S(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          b("div", sI, [
            Ee(D.$slots, "default", Ge(Ke({ ...$ })), () => [
              tt(Be(D.body), 1)
            ], !0)
          ]),
          Ee(D.$slots, "footer", Ge(Ke({ ...$ })), () => [
            b("div", iI, [
              b("div", aI, [
                D.okOnly ? Lo("", !0) : (J(), te("button", {
                  key: 0,
                  type: "button",
                  class: Ve(["btn btn-secondary", v.value]),
                  onClick: q[1] || (q[1] = (ue) => S(!1))
                }, [
                  Ee(D.$slots, "textCancel", Ge(Ke({ ...$ })), () => [
                    tt(Be(D.textCancel), 1)
                  ], !0)
                ], 2)),
                b("button", {
                  type: "button",
                  class: Ve(["btn btn-primary", v.value]),
                  onClick: q[2] || (q[2] = (ue) => S(!0))
                }, [
                  Ee(D.$slots, "textOk", Ge(Ke({ ...$ })), () => [
                    tt(Be(D.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), rE = /* @__PURE__ */ An(lI, [["__scopeId", "data-v-0990c791"]]), uI = /* @__PURE__ */ ke({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = de(void 0), o = de({});
    function r(i = {}) {
      var a;
      return i.okOnly = !1, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function s(i = {}) {
      var a;
      return i.okOnly = !0, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: r, alert: s }), (i, a) => (J(), St(ta, { to: "body" }, [
      Ne(rE, lo({
        ref_key: "modalRef",
        ref: n
      }, { ...o.value }), null, 16)
    ]));
  }
}), cI = { "data-first": "" }, fI = ["disabled", "innerHTML"], dI = { "data-prev": "" }, pI = ["disabled", "innerHTML"], hI = { key: 0 }, mI = ["innerHTML"], _I = ["onClick"], gI = { "data-next": "" }, EI = ["disabled", "innerHTML"], vI = { "data-last": "" }, yI = ["disabled", "innerHTML"], bI = /* @__PURE__ */ ke({
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
    size: { default: wn.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function n(y, R = 0) {
      return [...Array(y).keys()].map((N) => N + R);
    }
    const o = t, r = e, { modelValue: s, maxVisibleButtons: i, hideEllipsis: a } = Zt(r), l = Math.floor(i.value / 2), f = Oe(() => {
      let y = i.value, R = s.value <= l ? 1 : s.value - l;
      return s.value >= d.value - l && (R = d.value - y + 1), R < 1 && (R = 1), d.value < y && (y = d.value), n(y, R);
    }), u = Oe(() => s.value <= 1), c = Oe(() => s.value >= d.value), d = Oe(() => {
      const { perPage: y, totalItems: R } = r;
      return Math.ceil(R / y);
    });
    ra(() => {
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
    function v() {
      let y = s.value - 1;
      y < 1 && (y = 1), o("update:modelValue", y);
    }
    function O() {
      let y = s.value + 1;
      y > d.value && (y = d.value), o("update:modelValue", y);
    }
    return (y, R) => (J(), te("ul", {
      class: Ve(["pagination", y.size])
    }, [
      b("li", cI, [
        b("button", {
          class: "",
          disabled: u.value,
          innerHTML: y.firstText,
          onClick: m
        }, null, 8, fI)
      ]),
      b("li", dI, [
        b("button", {
          class: "",
          disabled: u.value,
          innerHTML: y.prevText,
          onClick: v
        }, null, 8, pI)
      ]),
      (J(!0), te(De, null, Vt(f.value, (N, C) => (J(), te(De, null, [
        p(C) ? (J(), te("li", hI, [
          b("button", {
            disabled: "",
            class: "",
            innerHTML: y.ellipsisText
          }, null, 8, mI)
        ])) : (J(), te("li", {
          key: 1,
          "data-prev": "",
          class: Ve({ active: y.modelValue === N })
        }, [
          b("button", {
            class: "",
            onClick: (S) => h(N)
          }, Be(N), 9, _I)
        ], 2))
      ], 64))), 256)),
      b("li", gI, [
        b("button", {
          class: "",
          disabled: c.value,
          innerHTML: y.nextText,
          onClick: O
        }, null, 8, EI)
      ]),
      b("li", vI, [
        b("button", {
          class: "",
          disabled: c.value,
          innerHTML: y.lastText,
          onClick: g
        }, null, 8, yI)
      ])
    ], 2));
  }
}), wI = /* @__PURE__ */ An(bI, [["__scopeId", "data-v-2bfd7085"]]), OI = { class: "d-inline" }, AI = { class: "fw-bold" }, NI = /* @__PURE__ */ ke({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { options: r } = Zt(n), s = Oe({
      get: () => n.modelValue,
      set: (i) => o("update:modelValue", i)
    });
    return (i, a) => {
      const l = Ln("b-dropdown-item"), f = Ln("b-dropdown");
      return J(), St(f, lo({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: Ot(() => [
          b("div", OI, [
            Ee(i.$slots, "default", { selected: s.value }, () => [
              a[0] || (a[0] = b("span", null, "Per page: ", -1)),
              b("span", AI, Be(s.value), 1)
            ])
          ])
        ]),
        default: Ot(() => [
          (J(!0), te(De, null, Vt(ye(r), (u, c) => (J(), St(l, {
            key: u,
            onClick: (d) => s.value = u,
            active: u === i.modelValue
          }, {
            default: Ot(() => [
              tt(Be(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), SI = ["value"], TI = /* @__PURE__ */ ke({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { options: r } = Zt(n), s = Oe({
      get: () => n.modelValue,
      set: (i) => o("update:modelValue", i)
    });
    return (i, a) => Zn((J(), te("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (l) => s.value = l)
    }, [
      (J(!0), te(De, null, Vt(ye(r), (l, f) => (J(), te("option", {
        key: l,
        value: l
      }, Be(l), 9, SI))), 128))
    ], 512)), [
      [_m, s.value]
    ]);
  }
});
var yo = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(yo || {});
class CI {
  constructor(t, n = "ASC", o) {
    qt(this, "key"), qt(this, "direction"), qt(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = o;
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
}, DI = ["onClick"], xI = { class: "th-wrapper" }, RI = {
  key: 0,
  "data-sort-indicator": ""
}, II = { class: "sort-index" }, $I = { class: "sort-direction" }, kI = ["onMouseover"], PI = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, VI = ["colspan"], LI = ["innerHTML"];
class dl {
  constructor(t = "", n = "", o = !1, r) {
    qt(this, "key"), qt(this, "label"), qt(this, "sortable"), qt(this, "sortFn"), this.key = t, this.label = n, this.sortable = o, this.sortFn = r;
  }
}
const MI = /* @__PURE__ */ ke({
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
      for (const v of m)
        g = g.concat(Object.keys(v));
      return g = g.filter((v, O) => g.indexOf(v) == O), g;
    }, o = t, r = e, s = de([]), { fields: i, items: a } = Zt(r), l = Oe(() => {
      if (r.externalSort || s.value.length == 0) return r.items;
      const m = [...r.items];
      return Pp(s.value, m);
    }), f = Oe(() => {
      let m = i.value, g = [];
      return m.length === 0 && (m = n([...a.value])), m.reduce((v, O, y) => {
        if (typeof O == "string")
          v.push(new dl(O, O));
        else if (O instanceof dl)
          v.push(O);
        else if (typeof O == "object") {
          const { key: R, label: N, sortable: C, sortFn: S } = O;
          v.push(new dl(R, N, C, S));
        }
        return v;
      }, g);
    });
    function u(m) {
      const g = s.value.findIndex((v) => v.key === m.key);
      return g < 0 ? "" : g + 1;
    }
    function c(m) {
      const g = s.value.findIndex((O) => O.key === m.key);
      if (g < 0) return "fas fa-sort";
      const v = s.value[g];
      return v.direction === yo.ASC ? "fas fa-sort-up" : v.direction === yo.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function d(m) {
      const { key: g } = m, v = s.value.findIndex((O) => O.key === g);
      if (v < 0) {
        const O = new CI(g, yo.ASC, m.sortFn);
        s.value.push(O);
      } else {
        const O = s.value[v], y = O.direction;
        y === yo.ASC ? O.direction = yo.DESC : y === yo.DESC && s.value.splice(v, 1);
      }
      o("sort", s.value, Pp);
    }
    function p(m, g, v, O) {
      o("onMouseOverCell", m, g, v, O);
    }
    let h = de(null);
    return Un(() => {
      h.value = On();
    }), (m, g) => (J(), te("table", lo({ ...m.$attrs }, {
      class: { striped: m.striped, hover: m.hover }
    }), [
      b("thead", null, [
        (J(!0), te(De, null, Vt(f.value, (v) => (J(), te("th", {
          key: `thead-${v.key}`,
          class: Ve({ sortable: v.sortable }),
          onClick: (O) => v.sortable && d(v)
        }, [
          b("span", xI, [
            Ee(m.$slots, `head(${v.key})`, {
              field: v,
              data: ye(h),
              value: v.label
            }, () => [
              tt(Be(v.label), 1)
            ], !0),
            v.sortable ? (J(), te("span", RI, [
              b("span", II, Be(u(v)), 1),
              b("span", $I, [
                b("i", {
                  class: Ve(c(v))
                }, null, 2)
              ])
            ])) : Lo("", !0)
          ])
        ], 10, DI))), 128))
      ]),
      b("tbody", null, [
        (J(!0), te(De, null, Vt(l.value, (v, O) => (J(), te(De, {
          key: `trow-${v?.id ?? O}`
        }, [
          Ee(m.$slots, "row", {
            item: v,
            index: O,
            colspan: f.value.length
          }, void 0, !0),
          b("tr", null, [
            (J(!0), te(De, null, Vt(f.value, (y) => (J(), te("td", {
              key: `tcell-${y.key + (v?.id ?? O)}`,
              class: Ve({ [`tcell-${y?.key}`]: !0 }),
              onMouseover: (R) => p(R, v, O, y)
            }, [
              Ee(m.$slots, `cell(${y?.key})`, {
                data: ye(h),
                item: v,
                field: y,
                value: v[y?.key]
              }, () => [
                tt(Be(v[y?.key]), 1)
              ], !0)
            ], 42, kI))), 128))
          ])
        ], 64))), 128))
      ]),
      b("tfoot", null, [
        Ee(m.$slots, "footer", { data: ye(h) }, void 0, !0)
      ]),
      m.showEmpty && l.value.length === 0 ? (J(), te("tr", PI, [
        b("td", {
          colspan: f.value.length
        }, [
          Ee(m.$slots, "empty", {
            items: l.value,
            data: ye(h),
            fields: f.value
          }, () => [
            b("span", { innerHTML: m.emptyText }, null, 8, LI)
          ], !0)
        ], 8, VI)
      ])) : Lo("", !0)
    ], 16));
  }
}), FI = /* @__PURE__ */ An(MI, [["__scopeId", "data-v-b1e9b5de"]]);
var sE = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(sE || {});
const BI = { class: "d-inline-block position-relative" }, UI = ["disabled"], Vp = "data-prevent-close", jI = /* @__PURE__ */ ke({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: sE.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: wn.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const o = de(), r = e, s = de(), i = de(!1), a = de(r.variant), l = de(r.centered), f = de(r.dropup), u = de(r.dropend), c = de(r.dropstart), d = de(r.menuEnd), p = n, h = Oe(() => {
      const V = [];
      return a != null && a.value && V.push(`btn-${a.value}`), r.size && V.push(`btn-${r.size}`), V;
    }), m = Oe(() => {
      const V = [];
      return l != null && l.value && V.push("dropdown-center"), f != null && f.value && V.push("dropup"), c != null && c.value && V.push("dropstart"), !(c != null && c.value) && u != null && u.value && V.push("dropend"), V.length === 0 && V.push("dropdown"), V.unshift("btn-group"), V;
    }), g = Oe(() => {
      const V = [];
      return i.value && V.push("show"), d.value && V.push("dropdown-menu-end"), V;
    }), v = () => {
      if (!i.value) return;
      const V = s.value.getBoundingClientRect(), P = o.value.getBoundingClientRect(), I = window.innerHeight - V.bottom, $ = V.top, D = window.innerWidth - V.right, q = V.left;
      f.value = I < P.height && $ >= P.height, d.value = D < P.width && q >= P.width;
    };
    async function O() {
      i.value = !0, await dr(), v();
    }
    function y() {
      i.value = !1;
    }
    function R(V) {
      i.value ? y() : O();
    }
    function N(V) {
      const { target: P } = V;
      P?.closest(`[${Vp}],[${Vp}=true]`) || y();
    }
    function C() {
      i.value && y();
    }
    $n(i, (V, P) => {
      typeof P > "u" || V !== P && (p("toggle", { show: V }), V === !0 ? p("open", { show: V }) : p("close", { show: V }));
    }, { immediate: !0 });
    const S = {
      show: i,
      disabled: r.disabled,
      buttonClasses: h,
      onButtonClicked: R,
      onMenuClicked: N,
      onClickOutside: C,
      open: O,
      close: y
    };
    return t({
      ...S
    }), (V, P) => {
      const I = jv("click-outside");
      return J(), te("div", {
        ref_key: "dropDownRef",
        ref: s,
        class: Ve([m.value, "dropdown-wrapper"])
      }, [
        Zn((J(), te("div", BI, [
          Ee(V.$slots, "header", Ge(Ke({ ...S })), () => [
            b("button", {
              class: Ve(["btn dropdown-toggle", h.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: R,
              disabled: V.disabled
            }, [
              Ee(V.$slots, "button", Ge(Ke({ ...S })), () => [
                tt(Be(V.text), 1)
              ], !0)
            ], 10, UI)
          ], !0),
          b("ul", {
            ref_key: "dropDownMenuRef",
            ref: o,
            class: Ve(["dropdown-menu", g.value]),
            onClick: N
          }, [
            Ee(V.$slots, "default", Ge(Ke({ ...S })), void 0, !0)
          ], 2)
        ])), [
          [I, C]
        ])
      ], 2);
    };
  }
}), HI = /* @__PURE__ */ An(jI, [["__scopeId", "data-v-4910c394"]]), KI = ["data-prevent-close"], WI = /* @__PURE__ */ ke({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = Zt(t);
    return (o, r) => (J(), te("li", {
      "data-prevent-close": ye(n) ? "" : null
    }, [
      b("span", {
        class: Ve(["dropdown-item", { active: o.active }]),
        role: "button",
        tabindex: "0"
      }, [
        Ee(o.$slots, "default")
      ], 2)
    ], 8, KI));
  }
}), zI = {}, qI = { "data-prevent-close": "" }, GI = { class: "dropdown-header" };
function YI(e, t) {
  return J(), te("li", qI, [
    b("h6", GI, [
      Ee(e.$slots, "default")
    ])
  ]);
}
const XI = /* @__PURE__ */ An(zI, [["render", YI]]), JI = {};
function QI(e, t) {
  return J(), te("li", null, t[0] || (t[0] = [
    b("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const ZI = /* @__PURE__ */ An(JI, [["render", QI]]), e$ = {
  mounted(e, t, n, o) {
    new Ko(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, t$ = (e, t) => {
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
}, n$ = {
  mounted(e, t, n, o) {
    const r = t.value;
    t$(e, r);
  }
};
class iu {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
qt(iu, "list", /* @__PURE__ */ new Set());
const o$ = { class: "drawer-content" }, r$ = { class: "drawer-header" }, s$ = ["innerHTML"], i$ = { class: "drawer-body" }, a$ = ["innerHTML"], l$ = { class: "drawer-footer" }, u$ = ["innerHTML"], c$ = ["innerHTML"], f$ = /* @__PURE__ */ ke({
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
    size: { default: wn.STANDARD },
    btnSize: { default: wn.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: o,
      keyboard: r,
      focus: s,
      size: i,
      btnSize: a
    } = Zt(n), l = Oe(() => Nr(i.value, "drawer-")), f = Oe(() => Nr(a.value, "btn-")), u = de(), c = de(!1), d = On();
    let p;
    async function h() {
      return c.value === !0 ? void 0 : new Promise((C, S) => {
        c.value = !0, p = C;
      });
    }
    function m(C = !0) {
      c.value = !1, typeof p == "function" && p(C);
    }
    function g() {
      c.value === !0 ? h() : m(!1);
    }
    function v(C) {
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
    function N() {
      c.value === !0 ? iu.add(d) : iu.delete(d);
    }
    return t({
      show: h,
      hide: m,
      toggle: g
    }), (C, S) => (J(), St(Yy, {
      onBeforeEnter: N,
      onAfterLeave: N
    }, {
      default: Ot(() => [
        c.value ? (J(), te("div", lo({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...C.$attrs }, {
          onClick: gm(v, ["self"])
        }), [
          b("div", {
            class: Ve(["drawer-dialog", l.value])
          }, [
            b("div", o$, [
              b("div", r$, [
                Ee(C.$slots, "header", {}, () => [
                  b("h5", {
                    class: "drawer-title",
                    innerHTML: C.title
                  }, null, 8, s$)
                ], !0),
                b("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: O
                })
              ]),
              b("div", i$, [
                Ee(C.$slots, "default", {}, () => [
                  b("span", { innerHTML: C.body }, null, 8, a$)
                ], !0)
              ]),
              b("div", l$, [
                Ee(C.$slots, "footer", {}, () => [
                  C.okOnly ? Lo("", !0) : (J(), te("button", {
                    key: 0,
                    type: "button",
                    class: Ve(["ms-auto btn btn-secondary", f.value]),
                    onClick: y
                  }, [
                    Ee(C.$slots, "button-cancel", {}, () => [
                      b("span", { innerHTML: C.textCancel }, null, 8, u$)
                    ], !0)
                  ], 2)),
                  b("button", {
                    type: "button",
                    class: Ve(["btn btn-primary", f.value]),
                    onClick: R
                  }, [
                    Ee(C.$slots, "button-ok", {}, () => [
                      b("span", { innerHTML: C.textOk }, null, 8, c$)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : Lo("", !0)
      ]),
      _: 3
    }));
  }
}), d$ = /* @__PURE__ */ An(f$, [["__scopeId", "data-v-2e49e8cb"]]), kt = "b", p$ = "$toaster", h$ = "$modalManager", m$ = "$dialogManager";
class iE {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ua(nI).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
qt(iE, "component");
class aE {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ua(uI).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
qt(aE, "component");
class lE {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ua(zR).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
qt(lE, "component");
function _$(e) {
  e.component(`${kt}-drawer`, d$), e.component(`${kt}-modal`, oE), e.component(`${kt}-dialog`, rE), e.component(`${kt}-pagination`, wI), e.component(`${kt}-pagination-dropdown`, NI), e.component(`${kt}-pagination-select`, TI), e.component(`${kt}-dropdown`, HI), e.component(`${kt}-dropdown-item`, WI), e.component(`${kt}-dropdown-header`, XI), e.component(`${kt}-dropdown-divider`, ZI), e.component(`${kt}-table`, FI), e.component(`${kt}-toast`, tE);
}
function g$(e) {
  e.directive("tooltip", e$), e.directive("click-outside", n$);
}
const E$ = {
  install(e) {
    _$(e), g$(e);
    const t = lE.getComponent(), n = iE.getComponent(), o = aE.getComponent();
    e.provide(p$, t), e.provide(h$, n), e.provide(m$, o);
  }
}, L$ = (e) => {
  const t = ua(kR);
  t.config.errorHandler = (r, s, i) => {
    console.error("💥 Vue Error:", r), console.error("📍 Component:", s), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      r instanceof Error ? $p().push({ name: "error", query: { message: r.message } }) : console.error("Unhandled non-Error exception:", r);
    });
  };
  const n = Yw();
  t.use(E$), t.use(n);
  const o = $p();
  return t.use(o), t.mount(e), t;
};
export {
  L$ as default
};
