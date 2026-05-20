/* AIHLPR Home v2 — hero animation (spec v1.0)
   Exact replication of aihlpr-hero-spec.json:
     - Track A: 0–4970ms auto-intro (entry → hold → tracers → dim → migrate → bounce)
     - Track B: scroll-driven dock (15%–55% scroll range)
   At dockE=1 the entire foreground cluster (#heroLogo) is reparented into the
   nav's #logoSlot so it sticks as the header logo regardless of further scroll.
   Scrolling back up un-docks AND replays the entry animation.
*/
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";

  // ===== Spec data (verbatim from aihlpr-hero-spec.json) =====
  const PALETTE = {
    edgeStroke: "#D8D6CE",
  };

  const HUBS = [
    {id:"ai",  x:340, y:280, r:10, color:"#3478E5", label:"AI layer",          lx:358, ly:286, anchor:"start",  rings:2},
    {id:"ppl", x:144, y:360, r:6,  color:"#CC418C", label:"People",            lx:132, ly:380, anchor:"end",    rings:1},
    {id:"wf",  x:260, y:178, r:7,  color:"#9B59B6", label:"Workflow",          lx:248, ly:162, anchor:"end",    rings:1},
    {id:"erp", x:472, y:162, r:6,  color:"#3478E5", label:"Resource planning", lx:472, ly:142, anchor:"middle", rings:1},
    {id:"dam", x:188, y:248, r:6,  color:"#1D9E75", label:"Data layer",        lx:176, ly:268, anchor:"end",    rings:1},
    {id:"aud", x:470, y:360, r:7,  color:"#E91E63", label:"AI audit",          lx:486, ly:376, anchor:"start",  rings:1},
    {id:"crm", x:380, y:122, r:5,  color:"#3478E5", label:"Customer",          lx:380, ly:104, anchor:"middle", rings:1},
  ];

  const EDGES = [
    [140,80,220,62],[220,62,300,92],[300,92,380,72],[380,72,460,100],[460,100,520,72],
    [320,60,380,72],[380,72,380,122],[460,100,472,162],[520,72,580,80],
    [140,80,170,200],[220,62,260,178],[300,92,260,178],[460,100,472,162],[520,72,472,162],
    [580,80,600,220],[170,200,260,178],[260,178,300,220],[260,178,380,122],[260,178,472,162],
    [300,220,380,122],[380,122,472,162],[472,162,520,200],[520,200,560,180],[560,180,600,220],
    [80,160,170,200],[80,160,100,200],
    [260,178,340,280],[300,220,340,280],[380,122,340,280],[472,162,340,280],
    [520,200,340,280],[420,200,340,280],[188,248,340,280],[188,248,260,178],
    [340,280,275,270],[340,280,380,268],[340,280,410,300],[340,280,305,340],
    [340,280,380,320],[340,280,470,360],[340,280,144,360],
    [188,248,170,200],[188,248,110,320],[188,248,220,300],[188,248,290,318],
    [60,250,110,320],[110,320,220,300],[220,300,290,318],[290,318,380,268],
    [380,268,430,240],[430,240,540,270],[540,270,600,310],
    [110,320,160,380],[220,300,220,420],[290,318,300,410],
    [380,268,400,410],[430,240,468,420],[540,270,556,400],
    [144,360,160,380],[144,360,220,420],[144,360,110,320],[144,360,80,408],
    [470,360,468,420],[470,360,556,400],[470,360,400,410],[470,360,510,320],[470,360,340,280],
    [80,408,160,380],[160,380,220,420],[220,420,300,410],[300,410,400,410],
    [400,410,468,420],[468,420,556,400],
    [120,470,200,488],[200,488,280,470],[280,470,360,500],[360,500,430,482],
    [430,482,510,510],[510,510,570,478],
    [120,470,160,380],[200,488,220,420],[280,470,300,410],[360,500,400,410],
    [430,482,468,420],[510,510,556,400],[570,478,556,400],
    [220,62,170,200],[460,100,540,270],[600,220,556,400],[600,310,510,320],
    [80,160,144,360],[100,200,188,248],[60,250,40,360],[40,360,80,408],
    [600,380,556,400],[80,460,120,470],[170,200,188,248],
    [255,380,300,410],[420,380,468,420],[310,440,360,500],
    [260,178,144,360],[472,162,470,360]
  ];

  const BG_DOTS = [
    [140,80,3,"#7E6CE0"],[220,62,4,"#1D9E75"],[300,92,2.5,"#D0D0D0"],[380,72,3,"#2D2D2D"],
    [460,100,3,"#4DD0E1"],[520,72,2.5,"#7E6CE0"],[80,160,3,"#E8A04B"],[170,200,2.5,"#4DD0E1"],
    [300,220,3,"#6A9DF0"],[420,200,2.5,"#7E6CE0"],[520,200,2,"#D0D0D0"],[560,180,3,"#CC418C"],
    [60,250,3,"#7E6CE0"],[110,320,2.5,"#2D2D2D"],[220,300,3,"#E8A04B"],[290,318,2.5,"#E8A04B"],
    [380,268,3,"#4DD0E1"],[430,240,2.5,"#7E6CE0"],[540,270,3,"#7E6CE0"],[600,310,2,"#CC418C"],
    [380,320,2.5,"#E8A04B"],[305,340,2.5,"#7E6CE0"],[410,300,2,"#4DD0E1"],[275,270,2.5,"#2D2D2D"],
    [80,408,3,"#6A9DF0"],[160,380,2.5,"#E8A04B"],[220,420,2,"#7E6CE0"],[300,410,3,"#2D2D2D"],
    [400,410,2.5,"#4DD0E1"],[468,420,2,"#E91E63"],[556,400,3,"#7E6CE0"],[120,470,3,"#CC418C"],
    [200,488,2.5,"#D0D0D0"],[280,470,3,"#7E6CE0"],[360,500,3,"#E8A04B"],[430,482,2.5,"#2D2D2D"],
    [510,510,3,"#4DD0E1"],[570,478,2.5,"#7E6CE0"],[40,360,2.5,"#7E6CE0"],[600,220,2.5,"#E8A04B"],
    [320,60,3,"#7E6CE0"],[100,200,2,"#E91E63"],[600,380,2,"#2D2D2D"],[80,460,2,"#4DD0E1"],
    [580,80,2.5,"#6A9DF0"],[560,530,2,"#E8A04B"],[200,160,2,"#4DD0E1"],[340,200,2,"#7E6CE0"],
    [430,130,2,"#E8A04B"],[170,300,2,"#7E6CE0"],[240,240,2,"#2D2D2D"],[420,380,2,"#7E6CE0"],
    [510,320,2,"#7E6CE0"],[310,440,2,"#4DD0E1"],[255,380,2,"#E8A04B"]
  ];

  const LOOSE_STUBS = [
    [320, 60, 310,-22,"#4DD0E1"],
    [140, 80, 108,-12,"#2D2D2D"],
    [360,500, 372,588,"#4DD0E1"],
    [ 40,360,  -8,348,"#7E6CE0"],
    [600,220, 655,205,"#E8A04B"],
    [600,380, 670,408,"#4DD0E1"],
  ];

  const LOGO_DOTS = [
    {idx:0, x:161.5, y:287.1, r:9, color:"rgb(227,78,169)", fromHub:"dam"},
    {idx:1, x:120.7, y:350.5, r:9, color:"rgb(242,71,164)", fromHub:"ppl"},
    {idx:2, x:313.0, y:287.1, r:9, color:"rgb(176,103,188)", fromHub:"wf" },
    {idx:3, x:399.8, y:349.3, r:9, color:"rgb(113,124,197)", fromHub:"crm"},
    {idx:4, x:467.4, y:326.9, r:9, color:"rgb(71,135,223)",  fromHub:"erp"},
    {idx:5, x:583.5, y:352.1, r:9, color:"rgb(28,150,245)",  fromHub:"aud", bounce:true},
  ];

  const HUB_LOGO_MAP = { ppl:1, wf:2, erp:4, dam:0, aud:5, crm:3 };
  const TRACER_ORDER = ["ppl","wf","erp","dam","crm","aud"];

  // Timeline constants from the spec
  const A = {
    tracerStart   : 2200,
    tracerStagger : 80,
    tracerDur     : 800,
    dimStart      : 2900,
    dimEnd        : 3300,
    migrateHold   : 120,
    migrateDur    : 700,
    bounceStart   : 4220,
    bounceEnd     : 4720,
    total         : 4970,
  };
  const NET_DIM = 0.22;
  const AI_POS  = [340, 280];
  const CENTER  = [320, 320];
  const MAX_R   = 320;
  const TRACER_START_R = 4.6;

  // ===== Helpers =====
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const lerp  = (a, b, t) => a + (b - a) * t;
  const easeOut    = t => 1 - Math.pow(1 - t, 2);
  const easeInOut  = t => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
  const distToCenter = (x, y) => Math.hypot(x - CENTER[0], y - CENTER[1]);

  function tierFor(x, y, i) {
    const h = (Math.round(x) * 7 + Math.round(y) * 13 + i * 31) % 100;
    if (h < 38) return 0;
    if (h < 78) return 1;
    return 2;
  }
  const TIERS = [
    {op: 0.38, scale: 0.65},
    {op: 0.78, scale: 1.00},
    {op: 1.00, scale: 1.15},
  ];
  function edgeBaseOp(x1, y1, x2, y2, i) {
    const h = (Math.round(x1+x2) * 7 + Math.round(y1+y2) * 13 + i * 31) % 100;
    if (h < 30) return 0.45;
    if (h < 70) return 0.70;
    return 0.95;
  }

  function parseRGB(c) {
    if (c[0] === "#") {
      const hex = c.slice(1);
      if (hex.length === 3) return hex.split("").map(s => parseInt(s+s, 16));
      return [parseInt(hex.slice(0,2),16), parseInt(hex.slice(2,4),16), parseInt(hex.slice(4,6),16)];
    }
    const m = c.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    return m ? [+m[1], +m[2], +m[3]] : [0,0,0];
  }
  function lerpColor(c1, c2, t) {
    const a = parseRGB(c1), b = parseRGB(c2);
    return `rgb(${Math.round(lerp(a[0],b[0],t))},${Math.round(lerp(a[1],b[1],t))},${Math.round(lerp(a[2],b[2],t))})`;
  }

  function svg(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) {
      if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    if (parent) parent.appendChild(n);
    return n;
  }

  // ===== Graph + BFS (≥3 nodes) =====
  function buildGraph() {
    const adj = new Map();
    const key = (x, y) => `${Math.round(x)},${Math.round(y)}`;
    for (const [x1,y1,x2,y2] of EDGES) {
      const k1 = key(x1,y1), k2 = key(x2,y2);
      if (!adj.has(k1)) adj.set(k1, []);
      if (!adj.has(k2)) adj.set(k2, []);
      adj.get(k1).push({x:x2, y:y2, k:k2});
      adj.get(k2).push({x:x1, y:y1, k:k1});
    }
    return adj;
  }
  function findPath(from, to, adj) {
    const key = (x, y) => `${Math.round(x)},${Math.round(y)}`;
    const fromK = key(from[0], from[1]);
    const toK   = key(to[0],   to[1]);
    const queue = [{ k: fromK, path: [[from[0], from[1]]] }];
    const seen  = new Set([fromK]);
    while (queue.length) {
      const { k, path } = queue.shift();
      if (k === toK && path.length >= 3) return path;
      for (const n of (adj.get(k) || [])) {
        if (seen.has(n.k)) continue;
        if (path.length === 1 && n.k === toK) continue;
        seen.add(n.k);
        queue.push({ k: n.k, path: [...path, [n.x, n.y]] });
      }
    }
    return [from, to];
  }
  function pathLen(path) {
    let s = 0;
    for (let i = 0; i < path.length-1; i++)
      s += Math.hypot(path[i+1][0]-path[i][0], path[i+1][1]-path[i][1]);
    return s;
  }
  function pointOnPath(path, t) {
    if (path.length < 2) return path[0] || [0,0];
    if (t <= 0) return path[0];
    if (t >= 1) return path[path.length-1];
    const total = pathLen(path);
    const target = t * total;
    let acc = 0;
    for (let i = 0; i < path.length-1; i++) {
      const seg = Math.hypot(path[i+1][0]-path[i][0], path[i+1][1]-path[i][1]);
      if (acc + seg >= target) {
        const u = (target - acc) / seg;
        return [lerp(path[i][0], path[i+1][0], u), lerp(path[i][1], path[i+1][1], u)];
      }
      acc += seg;
    }
    return path[path.length-1];
  }

  // ===== DOM refs (Home-v2 element IDs) =====
  const svgNet     = document.getElementById("heroNet");
  const svgTracers = document.getElementById("heroDotsSvg");
  const heroLogo   = document.getElementById("heroLogo");      // foreground cluster
  const heroLetters= document.getElementById("heroLetters");   // wordmark image
  const heroSection= document.querySelector(".hero-section");
  const logoSlot   = document.getElementById("logoSlot");
  const siteNav    = document.getElementById("siteNav");
  const replayBtn  = document.getElementById("heroReplay");
  if (!svgNet || !svgTracers || !heroLogo || !heroLetters) return;

  const diagramHome = heroLogo.parentElement; // remember original parent for un-docking

  const refs = {
    edges: [], bgDots: [], loose: [],
    hubs: {}, tracers: [],
  };

  function build() {
    svgNet.innerHTML = "";
    svgTracers.innerHTML = "";

    // Edges (drawn via strokeDashoffset)
    const gEdges = svg("g", { stroke: PALETTE.edgeStroke, "stroke-width": "0.6", fill: "none" }, svgNet);
    EDGES.forEach(([x1,y1,x2,y2], i) => {
      const len = Math.hypot(x2-x1, y2-y1);
      const ln = svg("line", {
        x1, y1, x2, y2,
        "stroke-dasharray": len,
        "stroke-dashoffset": len,
        opacity: 0,
      }, gEdges);
      refs.edges.push({ el: ln, baseOp: edgeBaseOp(x1,y1,x2,y2,i), len });
    });

    // Loose stubs + end caps
    const gLoose = svg("g", { stroke: PALETTE.edgeStroke, "stroke-width": "0.6", fill: "none" }, svgNet);
    const looseOpCycle = [0.32, 0.55, 0.78];
    LOOSE_STUBS.forEach(([x1,y1,x2,y2,col], i) => {
      const len = Math.hypot(x2-x1, y2-y1);
      const ln = svg("line", {
        x1, y1, x2, y2,
        "stroke-dasharray": len,
        "stroke-dashoffset": len,
        opacity: 0,
      }, gLoose);
      const endDot = svg("circle", {
        cx: x2, cy: y2, r: 2.5, fill: col, opacity: 0, stroke: "none",
      }, gLoose);
      refs.loose.push({ el: ln, baseOp: looseOpCycle[i % looseOpCycle.length], len, endDot });
    });

    // Background dots (3-tier)
    const gDots = svg("g", null, svgNet);
    BG_DOTS.forEach(([x,y,r,color], i) => {
      const t = TIERS[tierFor(x,y,i)];
      const c = svg("circle", {
        cx: x, cy: y, r: (r * t.scale).toFixed(3),
        fill: color, opacity: 0,
      }, gDots);
      refs.bgDots.push({ el: c, baseOp: t.op });
    });

    // Hubs (ring1 + optional ring2 + core + label, core grouped for entry scale)
    const gHubs = svg("g", null, svgNet);
    HUBS.forEach(h => {
      const g = svg("g", { opacity: 1 }, gHubs);
      const coreG = svg("g", {
        transform: `translate(${h.x} ${h.y}) scale(0.85) translate(${-h.x} ${-h.y})`,
      }, g);
      const ring1 = svg("circle", {
        cx: h.x, cy: h.y, r: h.r + 6, fill: "none",
        stroke: h.color, "stroke-width": 0.8, opacity: 0,
      }, coreG);
      let ring2 = null;
      if (h.rings === 2) {
        ring2 = svg("circle", {
          cx: h.x, cy: h.y, r: h.r + 14, fill: "none",
          stroke: h.color, "stroke-width": 0.7, opacity: 0,
        }, coreG);
      }
      const core = svg("circle", { cx: h.x, cy: h.y, r: h.r, fill: h.color, opacity: 0 }, coreG);
      const label = svg("text", {
        x: h.lx, y: h.ly, "text-anchor": h.anchor, class: "hub-label",
        opacity: 0, text: h.label,
      }, g);
      refs.hubs[h.id] = { group: g, coreG, core, ring1, ring2, label, hub: h };
    });

    // Tracers
    const adj = buildGraph();
    TRACER_ORDER.forEach((id, i) => {
      const h = HUBS.find(x => x.id === id);
      const path = findPath([h.x, h.y], AI_POS, adj);
      const logo = LOGO_DOTS[HUB_LOGO_MAP[id]];
      const c = svg("circle", {
        cx: h.x, cy: h.y, r: TRACER_START_R, fill: h.color, opacity: 0,
      }, svgTracers);
      refs.tracers.push({ id, idx: i, hub: h, path, logo, el: c, bounce: !!logo.bounce });
    });
  }

  // ===== Track B (scroll-dock state, declared before applyIntro uses scrollNetVis) =====
  let dockMetrics = null;
  let scrollT      = 0;
  let dockP        = 0;
  let dockE        = 0;
  let scrollNetVis = NET_DIM;  // post-intro baseline (brightens to 1.0 as the cluster docks out)
  let dockedFired  = false;

  // ===== Track A — auto-intro =====
  let mountTime = 0;
  let introDone = false;
  let forcedIntroMs = null;

  function applyIntro(now) {
    const ms = forcedIntroMs != null ? forcedIntroMs : (now - mountTime);
    const elapsed = clamp(ms, 0, A.total);
    const entryP = clamp(elapsed / 1500, 0, 1);

    // Edges
    refs.edges.forEach((r, i) => {
      const [x1,y1,x2,y2] = EDGES[i];
      const d = distToCenter((x1+x2)/2, (y1+y2)/2);
      const delay = Math.min(0.95, 0.08 + (d / MAX_R) * 0.55);
      const local = clamp((entryP - delay) / 0.35, 0, 1);
      const ap = easeOut(local);
      r.el.setAttribute("opacity", (ap * r.baseOp).toFixed(3));
      r.el.setAttribute("stroke-dashoffset", (r.len * (1 - ap)).toFixed(2));
    });

    // Background dots
    refs.bgDots.forEach((r, i) => {
      const [x,y] = BG_DOTS[i];
      const d = distToCenter(x, y);
      const delay = Math.min(0.95, 0.12 + (d / MAX_R) * 0.55) * 1.05;
      const local = clamp((entryP - delay) / 0.30, 0, 1);
      const ap = easeOut(local);
      r.el.setAttribute("opacity", (ap * r.baseOp).toFixed(3));
    });

    // Loose stubs + end caps
    refs.loose.forEach((r, i) => {
      const delay = 0.55 + i * 0.025;
      const local = clamp((entryP - delay) / 0.35, 0, 1);
      const ap = easeOut(local);
      r.el.setAttribute("opacity", (ap * r.baseOp).toFixed(3));
      r.el.setAttribute("stroke-dashoffset", (r.len * (1 - ap)).toFixed(2));
      const dDelay = 0.62 + i * 0.025;
      const dLocal = clamp((entryP - dDelay) / 0.30, 0, 1);
      r.endDot.setAttribute("opacity", easeOut(dLocal).toFixed(3));
    });

    // Hubs (entry scale 0.85→1, rings, label)
    HUBS.forEach(h => {
      const ref = refs.hubs[h.id];
      const d = distToCenter(h.x, h.y);
      const delay = 0.55 + (d / MAX_R) * 0.20;
      const local = clamp((entryP - delay) / 0.30, 0, 1);
      const ap = easeOut(local);
      const s = lerp(0.85, 1.0, ap);
      ref.coreG.setAttribute("transform",
        `translate(${h.x} ${h.y}) scale(${s.toFixed(4)}) translate(${-h.x} ${-h.y})`);
      ref.core.setAttribute("opacity", ap.toFixed(3));
      const r1Local = clamp((entryP - (delay + 0.03)) / 0.30, 0, 1);
      ref.ring1.setAttribute("opacity", (easeOut(r1Local) * 0.55).toFixed(3));
      if (ref.ring2) {
        const r2Local = clamp((entryP - (delay + 0.06)) / 0.30, 0, 1);
        ref.ring2.setAttribute("opacity", (easeOut(r2Local) * 0.32).toFixed(3));
      }
      ref.label.setAttribute("opacity", ap.toFixed(3));
    });

    // Network dim 2900→3300
    const dimLocal = clamp((elapsed - A.dimStart) / (A.dimEnd - A.dimStart), 0, 1);
    const introNetVis = lerp(1.0, NET_DIM, easeInOut(dimLocal));

    // During the intro the intro curve owns the network; once the intro is over,
    // scrollNetVis takes over and brightens the network as the logo docks out of
    // the diagram into the menu bar.
    const netVis = elapsed < A.total ? introNetVis : scrollNetVis;
    applyNetVis(netVis);

    // Tracers
    refs.tracers.forEach((tr, i) => {
      const launchT  = A.tracerStart + i * A.tracerStagger;
      const arriveT  = launchT + A.tracerDur;
      const migrateT = arriveT + A.migrateHold;
      const landT    = migrateT + A.migrateDur;

      let cx, cy, op = 0, r = TRACER_START_R, fill = tr.hub.color, scale = 1;

      if (elapsed < launchT) {
        cx = tr.hub.x; cy = tr.hub.y; op = 0;
      } else if (elapsed < arriveT) {
        const p = (elapsed - launchT) / A.tracerDur;
        const e = easeInOut(p);
        const pt = pointOnPath(tr.path, e);
        cx = pt[0]; cy = pt[1];
        op = p < 0.08 ? (p / 0.08) : 1;
      } else if (elapsed < migrateT) {
        cx = AI_POS[0]; cy = AI_POS[1]; op = 1;
      } else if (elapsed < landT) {
        const p = (elapsed - migrateT) / A.migrateDur;
        const e = easeInOut(p);
        cx = lerp(AI_POS[0], tr.logo.x, e);
        cy = lerp(AI_POS[1], tr.logo.y, e);
        r  = lerp(TRACER_START_R, tr.logo.r, e);
        fill = lerpColor(tr.hub.color, tr.logo.color, e);
        op = 1;
      } else {
        cx = tr.logo.x; cy = tr.logo.y; r = tr.logo.r; fill = tr.logo.color; op = 1;
      }

      // Bounce on aud (idx 5)
      if (tr.bounce && elapsed >= A.bounceStart && elapsed <= A.bounceEnd) {
        const bp = (elapsed - A.bounceStart) / (A.bounceEnd - A.bounceStart);
        if (bp < 0.5) scale = lerp(1.0, 1.4, easeOut(bp / 0.5));
        else          scale = lerp(1.4, 1.0, easeOut((bp - 0.5) / 0.5));
      }

      tr.el.setAttribute("cx", cx.toFixed(2));
      tr.el.setAttribute("cy", cy.toFixed(2));
      tr.el.setAttribute("r",  (r * scale).toFixed(3));
      tr.el.setAttribute("fill", fill);
      tr.el.setAttribute("opacity", op.toFixed(3));
    });

    if (elapsed >= A.total && !introDone) {
      introDone = true;
      if (replayBtn) replayBtn.classList.add("is-visible");
    }
  }

  function applyNetVis(v) {
    refs.edges.forEach(r => {
      const cur = parseFloat(r.el.getAttribute("opacity")) || 0;
      r.el.setAttribute("opacity", (cur * v).toFixed(3));
    });
    refs.bgDots.forEach(r => {
      const cur = parseFloat(r.el.getAttribute("opacity")) || 0;
      r.el.setAttribute("opacity", (cur * v).toFixed(3));
    });
    refs.loose.forEach(r => {
      const cur = parseFloat(r.el.getAttribute("opacity")) || 0;
      r.el.setAttribute("opacity", (cur * v).toFixed(3));
      const dCur = parseFloat(r.endDot.getAttribute("opacity")) || 0;
      r.endDot.setAttribute("opacity", (dCur * v).toFixed(3));
    });
    HUBS.forEach(h => {
      const ref = refs.hubs[h.id];
      ["core","ring1","ring2","label"].forEach(k => {
        const el = ref[k];
        if (!el) return;
        const cur = parseFloat(el.getAttribute("opacity")) || 0;
        el.setAttribute("opacity", (cur * v).toFixed(3));
      });
    });
  }

  function computeDock() {
    // Only measure while the cluster is in its home (un-docked)
    if (heroLogo.parentElement !== diagramHome) return;
    const prev = heroLogo.style.transform;
    heroLogo.style.transform = "";
    void heroLogo.offsetWidth;
    const wmRect = heroLetters.getBoundingClientRect();
    const slot   = logoSlot.getBoundingClientRect();
    heroLogo.style.transform = prev;
    if (wmRect.width === 0 || slot.width === 0) { dockMetrics = null; return; }
    // Slot is sized to the docked image (24 * 837/141), so slot-center == final-center.
    const wmCx = wmRect.left + wmRect.width / 2;
    const wmCy = wmRect.top  + wmRect.height / 2;
    const slCx = slot.left + slot.width / 2;
    const slCy = slot.top  + slot.height / 2;
    dockMetrics = {
      dx: slCx - wmCx,
      dy: slCy - wmCy,
      scale: slot.height / wmRect.height,
    };
  }

  function getSectionProgress() {
    if (!heroSection) return 0;
    const rect = heroSection.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) return 0;
    return clamp(-rect.top / total, 0, 1);
  }

  function replay() {
    mountTime = performance.now();
    introDone = false;
    forcedIntroMs = null;
    if (replayBtn) replayBtn.classList.remove("is-visible");
  }

  function applyScroll() {
    scrollT = getSectionProgress();
    const raw = clamp((scrollT - 0.15) / 0.40, 0, 1);
    dockE = raw >= 0.98 ? 1 : easeInOut(raw);
    dockP = raw;

    const shouldDock = dockE >= 1;
    if (shouldDock !== dockedFired) {
      dockedFired = shouldDock;
      if (shouldDock) {
        heroLogo.style.transform = "";
        heroLogo.style.opacity = "";
        heroLetters.style.opacity = "";
        logoSlot.appendChild(heroLogo);
      } else {
        diagramHome.appendChild(heroLogo);
        computeDock();
        replay();
      }
      siteNav.classList.toggle("is-docked", shouldDock);
      window.dispatchEvent(new CustomEvent("logo:dock", { detail: { docked: shouldDock }}));
    }

    if (shouldDock) {
      // The cluster has left the diagram — give the network its full opacity
      // back. CSS .nav-logo-slot rules govern the docked appearance.
      scrollNetVis = 1.0;
      return;
    }

    // Pre-dock: in-flight cluster
    const wmOp = clamp((dockP - 0.25) / 0.55, 0, 1);
    heroLetters.style.opacity = wmOp.toFixed(3);

    if (dockMetrics) {
      const tx = dockMetrics.dx * dockE;
      const ty = dockMetrics.dy * dockE;
      const s  = 1 + (dockMetrics.scale - 1) * dockE;
      heroLogo.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
    }
    heroLogo.style.opacity = "1";

    // Scroll-driven network brightening: as the logo leaves the diagram,
    // the network climbs from its post-intro dim (NET_DIM) back to full opacity.
    scrollNetVis = NET_DIM + (1 - NET_DIM) * easeInOut(dockP);
  }

  // ===== Replay button =====
  if (replayBtn) replayBtn.addEventListener("click", replay);

  // ===== RAF loop =====
  function frame(now) {
    applyIntro(now);
    requestAnimationFrame(frame);
  }

  function init() {
    // On mobile we hide the hero animation entirely (the dock logo + the
    // network feel too busy on small screens). Skip the build and all
    // listeners so no work is wasted; the static nav logo takes over.
    const isMobile = window.matchMedia && window.matchMedia("(max-width: 760px)").matches;
    if (isMobile) return;
    build();
    const prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) {
      forcedIntroMs = A.total;
      introDone = true;
    }
    computeDock();
    mountTime = performance.now();
    requestAnimationFrame(frame);
    window.addEventListener("scroll", applyScroll, { passive: true });
    window.addEventListener("resize", () => { computeDock(); applyScroll(); });
    applyScroll();
  }

  if (heroLetters.complete && heroLetters.naturalWidth > 0) init();
  else heroLetters.addEventListener("load", init);
  setTimeout(() => { if (!refs.edges.length) init(); }, 1500);
})();
