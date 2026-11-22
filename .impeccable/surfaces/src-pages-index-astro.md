---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/posts/[slug].astro","src/pages/404.astro"]
---

## Scope and mode

Homepage of conneroh.com (plus post pages and 404 in the same world). Mode: Experience. Audience: hiring managers and recruiters evaluating Conner. Job: see his range in one screen, open a few repos, find contact links.

## Direction contract

THESIS: Conner presented as the output of `kubectl auth whoami -o yaml`. The four areas of work are his `groups`; picking one prints `kubectl describe group <name>` beside it. Refuses the category default of a dark hero plus a grid of repo cards.

OWN-WORLD: Light paper #f4f5f2, ink #111, mute #63635e, hairline rules #d6d7d2, one accent #2b44ff that appears only on the active group, its panel links, and hover. Martian Mono for commands, YAML keys, and data. Schibsted Grotesk for values, names, and prose. Hierarchy by scale and weight only. No cards, shadows, gradients, or rounded containers. YAML nesting is drawn as 1px indent guides.

STORY: The visitor reads the name, sees four areas at headline size, clicks or hovers one, and the panel lists the real repos with language and stars. Experience and writing follow as `kubectl get` tables. Each project links to its GitHub repo; posts open on-site.

FIRST VIEWPORT: Left 7/12: prompt line, apiVersion/kind, then `username:` with "conner ohnesorge" at ~6rem 800 weight, then the four groups at ~3rem with repo counts, then `extra:` role, education, location, links. Right 5/12, sticky, 1px ink rule on its left: the describe panel for the active group. Primary action is selecting a group.

FORM: kubectl whoami SelfSubjectReview, master/detail variant B1, chosen by the user after two prototype rounds (prototype/b.html). Original seed key 9649793d (roll assigned The Manual Page; the user steered to the kubectl direction).

Signature interaction: group select (hover on fine pointers, click/tap and arrow keys everywhere) re-renders the describe panel like fresh command output, a clip-path reveal staggered per row, disabled under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

Contact email not provided; site links GitHub and X only.
