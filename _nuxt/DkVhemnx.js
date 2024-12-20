import {
  k as v,
  A as f,
  r as g,
  o as r,
  c as p,
  a as s,
  t as n,
  d as l,
  F as k,
  i as y,
  p as $,
  h as a,
  y as _,
  B as h,
  b as c,
} from "./DgJarliK.js";
import { _ as C, a as S, b as x, c as D } from "./gHkazuSg.js";
const L = { class: "container p-2" },
  F = { class: "row g-3" },
  B = { class: "col-12" },
  A = { class: "card" },
  V = { class: "card-header" },
  M = { class: "fs-6 text-white" },
  N = { class: "card-body" },
  P = { class: "row gx-2 gy-3" },
  U = { class: "col-12" },
  T = { class: "row gy-2 gx-1" },
  X = { class: "col-12" },
  z = { class: "col" },
  E = {
    href: "https://www.patreon.com/bePatron?u=61283131",
    class: "w-100 btn btn-secondary",
    target: "_blank",
  },
  I = { class: "ms-2 d-none d-sm-inline" },
  J = { class: "col" },
  K = {
    href: "https://ko-fi.com/freddecgames",
    class: "w-100 btn btn-secondary",
    target: "_blank",
  },
  Q = { class: "ms-2 d-none d-sm-inline" },
  W = {
    class: "col",
    action: "https://www.paypal.com/cgi-bin/webscr",
    method: "post",
    target: "_blank",
  },
  Y = { type: "submit", class: "w-100 btn btn-secondary" },
  Z = { class: "ms-2 d-none d-sm-inline" },
  j = { class: "col" },
  q = {
    href: "https://discord.gg/ZXrggavUpv",
    class: "w-100 btn btn-secondary",
    target: "_blank",
  },
  G = { class: "ms-2 d-none d-sm-inline" },
  H = { class: "col-12" },
  O = { class: "col-12" },
  R = { class: "col-12" },
  ss = { class: "card" },
  os = { class: "card-header" },
  ts = { class: "fs-6 text-white" },
  ns = { class: "card-body" },
  es = { class: "row gy-2 gx-1" },
  as = ["onClick"],
  is = ["src"],
  ls = { class: "col-12" },
  ds = { class: "ms-1 form-check" },
  cs = { class: "form-check-label", for: "showLocked" },
  rs = { class: "col-12" },
  ps = { class: "ms-1 form-check" },
  _s = { class: "form-check-label", for: "showCompleted" },
  hs = { class: "col-12" },
  ms = { class: "card" },
  ws = { class: "card-header" },
  bs = { class: "fs-6 text-white" },
  us = { class: "card-body" },
  vs = { class: "row gx-1 gy-3" },
  fs = { class: "col-12 col-md-6" },
  gs = { class: "row gy-2 gx-1" },
  ks = { class: "col-12" },
  ys = {
    id: "localData",
    spellcheck: "false",
    rows: "3",
    class: "w-100 form-control",
    disabled: "",
    readonly: "",
  },
  $s = { class: "col-4" },
  Cs = { class: "ms-2" },
  Ss = { class: "col-4" },
  xs = { class: "ms-2" },
  Ds = { class: "col-4" },
  Ls = { class: "ms-2" },
  Fs = { class: "col-12 col-md-6" },
  Bs = { class: "row gy-2 gx-1" },
  As = { class: "col-4 ms-auto" },
  Vs = { class: "ms-2" },
  Ts = {
    __name: "options",
    setup(Ms) {
      const i = v(),
        { locale: m, locales: w, setLocale: b } = f(),
        u = function (t) {
          b(t), (i.locale = t);
        };
      return (t, o) => {
        const d = g("font-awesome-icon");
        return (
          r(),
          p("div", L, [
            s("div", F, [
              s("div", B, [
                s("div", A, [
                  s("div", V, [s("span", M, n(t.$t("options_about")), 1)]),
                  s("div", N, [
                    s("div", P, [
                      s("div", U, [
                        s("div", T, [
                          s("div", X, [
                            s("span", null, n(t.$t("options_love")), 1),
                          ]),
                          s("div", z, [
                            s("a", E, [
                              o[6] ||
                                (o[6] = s(
                                  "img",
                                  { src: C, width: "16", height: "16" },
                                  null,
                                  -1
                                )),
                              s("span", I, n(t.$t("options_patreon")), 1),
                            ]),
                          ]),
                          s("div", J, [
                            s("a", K, [
                              o[7] ||
                                (o[7] = s(
                                  "img",
                                  { src: S, width: "16", height: "16" },
                                  null,
                                  -1
                                )),
                              s("span", Q, n(t.$t("options_kofi")), 1),
                            ]),
                          ]),
                          s("form", W, [
                            o[9] ||
                              (o[9] = s(
                                "input",
                                {
                                  type: "hidden",
                                  name: "cmd",
                                  value: "_s-xclick",
                                },
                                null,
                                -1
                              )),
                            o[10] ||
                              (o[10] = s(
                                "input",
                                {
                                  type: "hidden",
                                  name: "hosted_button_id",
                                  value: "7XYD7SJFKQ8M4",
                                },
                                null,
                                -1
                              )),
                            s("button", Y, [
                              o[8] ||
                                (o[8] = s(
                                  "img",
                                  { src: x, width: "16", height: "16" },
                                  null,
                                  -1
                                )),
                              s("span", Z, n(t.$t("options_paypal")), 1),
                            ]),
                          ]),
                          s("div", j, [
                            s("a", q, [
                              o[11] ||
                                (o[11] = s(
                                  "img",
                                  { src: D, width: "16", height: "16" },
                                  null,
                                  -1
                                )),
                              s("span", G, n(t.$t("options_discord")), 1),
                            ]),
                          ]),
                        ]),
                      ]),
                      s("div", H, [
                        s("span", null, n(t.$t("options_iconsBy")), 1),
                        o[12] ||
                          (o[12] = s(
                            "a",
                            {
                              href: "https://fontawesome.com/",
                              target: "_blank",
                            },
                            "Fontawesome",
                            -1
                          )),
                        o[13] || (o[13] = l(", ")),
                        o[14] ||
                          (o[14] = s(
                            "a",
                            {
                              href: "https://www.flaticon.com/",
                              target: "_blank",
                            },
                            "Flaticon",
                            -1
                          )),
                        o[15] || (o[15] = l(", ")),
                        o[16] ||
                          (o[16] = s(
                            "a",
                            {
                              href: "https://www.freepik.com/",
                              target: "_blank",
                            },
                            "Freepik",
                            -1
                          )),
                      ]),
                      s("div", O, [
                        s("span", null, n(t.$t("options_scenariosBy")), 1),
                        o[17] ||
                          (o[17] = s(
                            "a",
                            {
                              href: "https://www.factorio.com/",
                              target: "_blank",
                            },
                            "Factorio",
                            -1
                          )),
                        o[18] || (o[18] = l(", ")),
                        o[19] ||
                          (o[19] = s(
                            "a",
                            {
                              href: "https://www.satisfactorygame.com/",
                              target: "_blank",
                            },
                            "Satisfactory",
                            -1
                          )),
                        o[20] || (o[20] = l(", ")),
                        o[21] ||
                          (o[21] = s(
                            "a",
                            {
                              href: "https://store.steampowered.com/app/1366540/",
                              target: "_blank",
                            },
                            "Dyson Sphere Program",
                            -1
                          )),
                        o[22] || (o[22] = l(", ")),
                        o[23] ||
                          (o[23] = s(
                            "a",
                            {
                              href: "https://store.steampowered.com/app/1284190/",
                              target: "_blank",
                            },
                            "The Planet Crafter",
                            -1
                          )),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              s("div", R, [
                s("div", ss, [
                  s("div", os, [s("span", ts, n(t.$t("options_settings")), 1)]),
                  s("div", ns, [
                    s("div", es, [
                      (r(!0),
                      p(
                        k,
                        null,
                        y(
                          a(w),
                          (e) => (
                            r(),
                            p("div", { key: e.code, class: "col-auto" }, [
                              s(
                                "button",
                                {
                                  type: "button",
                                  class: $([
                                    "btn btn-secondary",
                                    { "text-bg-primary": a(m) == e.code },
                                  ]),
                                  onClick: (Ns) => u(e.code),
                                },
                                [
                                  s(
                                    "img",
                                    {
                                      src:
                                        "/fgfactory3/flags/" + e.code + ".png",
                                      width: "24",
                                      height: "24",
                                    },
                                    null,
                                    8,
                                    is
                                  ),
                                ],
                                10,
                                as
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                      s("div", ls, [
                        s("div", ds, [
                          _(
                            s(
                              "input",
                              {
                                type: "checkbox",
                                class: "form-check-input",
                                id: "showLocked",
                                "onUpdate:modelValue":
                                  o[0] || (o[0] = (e) => (a(i).showLocked = e)),
                              },
                              null,
                              512
                            ),
                            [[h, a(i).showLocked]]
                          ),
                          s("label", cs, n(t.$t("options_showLocked")), 1),
                        ]),
                      ]),
                      s("div", rs, [
                        s("div", ps, [
                          _(
                            s(
                              "input",
                              {
                                type: "checkbox",
                                class: "form-check-input",
                                id: "showCompleted",
                                "onUpdate:modelValue":
                                  o[1] ||
                                  (o[1] = (e) => (a(i).showCompleted = e)),
                              },
                              null,
                              512
                            ),
                            [[h, a(i).showCompleted]]
                          ),
                          s("label", _s, n(t.$t("options_showCompleted")), 1),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              s("div", hs, [
                s("div", ms, [
                  s("div", ws, [
                    s("span", bs, n(t.$t("options_localData")), 1),
                  ]),
                  s("div", us, [
                    s("div", vs, [
                      s("div", fs, [
                        s("div", gs, [
                          s("div", ks, [
                            s("textarea", ys, n(a(i).localStorageData), 1),
                          ]),
                          s("div", $s, [
                            s(
                              "button",
                              {
                                type: "button",
                                class: "w-100 btn btn-danger text-truncate",
                                onClick:
                                  o[2] ||
                                  (o[2] = (e) => {
                                    a(i).showModal("modalWipe");
                                  }),
                              },
                              [
                                s("span", null, [
                                  c(d, { icon: "fas fa-skull" }),
                                ]),
                                s("span", Cs, n(t.$t("options_wipeSave")), 1),
                              ]
                            ),
                          ]),
                          s("div", Ss, [
                            s(
                              "button",
                              {
                                type: "button",
                                class: "w-100 btn btn-secondary text-truncate",
                                onClick:
                                  o[3] ||
                                  (o[3] = (e) => {
                                    a(i).exportAppState();
                                  }),
                              },
                              [
                                s("span", null, [
                                  c(d, { icon: "fas fa-copy" }),
                                ]),
                                s("span", xs, n(t.$t("options_exportSave")), 1),
                              ]
                            ),
                          ]),
                          s("div", Ds, [
                            s(
                              "button",
                              {
                                type: "button",
                                class: "w-100 btn btn-secondary text-truncate",
                                onClick:
                                  o[4] ||
                                  (o[4] = (e) => {
                                    a(i).downloadAppState();
                                  }),
                              },
                              [
                                s("span", null, [
                                  c(d, { icon: "fas fa-download" }),
                                ]),
                                s(
                                  "span",
                                  Ls,
                                  n(t.$t("options_downloadSave")),
                                  1
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                      s("div", Fs, [
                        s("div", Bs, [
                          o[24] ||
                            (o[24] = s(
                              "div",
                              { class: "col-12" },
                              [
                                s("textarea", {
                                  spellcheck: "false",
                                  rows: "3",
                                  id: "importData",
                                  class: "w-100 form-control",
                                }),
                              ],
                              -1
                            )),
                          s("div", As, [
                            s(
                              "button",
                              {
                                type: "button",
                                class: "w-100 btn btn-secondary text-truncate",
                                onClick:
                                  o[5] ||
                                  (o[5] = (e) => {
                                    a(i).importAppState();
                                  }),
                              },
                              [
                                s("span", null, [
                                  c(d, { icon: "fas fa-upload" }),
                                ]),
                                s("span", Vs, n(t.$t("options_importSave")), 1),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  };
export { Ts as default };
