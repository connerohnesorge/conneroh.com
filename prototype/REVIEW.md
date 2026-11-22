# PROTOTYPE visual review

Run: `python3 -m http.server 8787 -b 127.0.0.1 -d prototype` then open http://127.0.0.1:8787/?variant=A

Question: which concept should the conneroh.com homepage commit to for a hiring audience, A (CONNER(1) man page) or B (kubectl auth whoami -o yaml)?

| Variant | Viewport | State | Screenshot | Defects found | Disposition |
|---|---|---|---|---|---|
| A | 1440x900 | default, then hover --fpga | review/A-1440-top.png, A-1440-hover-fpga.png | Synopsis too large and wrapped to 4 lines. Project columns misaligned across groups. Filler "AI engineering." text in history | Fixed: smaller synopsis, fixed project columns, filler removed |
| A | 390x844 | top, scrolled to OPTIONS | review/A-390-top.png, A-390-options.png | Synopsis and readout overflowed the right edge. Switcher labels wrapped | Fixed: readout wraps, synopsis scales down, switcher label hidden on narrow screens |
| B | 1440x900 | default, then click nix | review/B-1440-top.png, B-1440-click-nix.png | Group bullets misaligned | Fixed |
| B | 390x844 | top | review/B-390-top.png | `extra` key/value grid cramped | Fixed: stacks on narrow screens |

Remaining known gaps (prototype scope): email is a placeholder, post links are `#`, fonts load from Google Fonts CDN.

## Round 2: kubectl variants (b.html)

URL: http://127.0.0.1:8787/b.html?variant=B1 (B1, B2, B3)

| Variant | Viewport | State | Screenshot | Defects found | Disposition |
|---|---|---|---|---|---|
| B1 | 1440 / 390 | default | review/r2-B1-1440.png, r2-B1-390.png | none new | — |
| B2 | 1440 / 390 | all on, then go+nix toggled off (count reads "8 projects") | review/r2-B2-1440.png, r2-B2-1440-filtered.png, r2-B2-390.png | Duplicate `esc` declaration broke scripts on first load | Fixed |
| B3 | 1440 / 390 | default | review/r2-B3-1440.png, r2-B3-390.png | Rollout table overflowed to 431px on mobile | Fixed: ORG folds under ROLE on narrow screens. All variants measure 390px wide |
