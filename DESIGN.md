---
name: conneroh.com
description: Conner Ohnesorge, printed as the output of `kubectl auth whoami -o yaml`.
colors:
  paper: "#f4f5f2"
  ink: "#111111"
  mute: "#63635e"
  rule: "#d6d7d2"
  lit: "#2b44ff"
  lit-wash: "#dfe3ff"
  code-wash: "#fbfbf9"  # var(--code-wash); code tokens render in ink and mute only
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 7.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  display-post:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 3.6vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  body-prose:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  yaml:
    fontFamily: "Martian Mono Variable, ui-monospace, monospace"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.75
  command:
    fontFamily: "Martian Mono Variable, ui-monospace, monospace"
    fontSize: "0.85rem"
    fontWeight: 600
  label:
    fontFamily: "Martian Mono Variable, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  max: "1320px"
  row: "14px"
  panel-inset: "36px"
  column-gap: "64px"
  section: "96px"
  foot: "120px"
components:
  group-tab:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
  group-tab-active:
    textColor: "{colors.lit}"
    typography: "{typography.headline}"
  describe-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0 0 0 36px"
  repo-link:
    textColor: "{colors.lit}"
    typography: "{typography.command}"
  prompt-line:
    textColor: "{colors.mute}"
    typography: "{typography.command}"
    padding: "0 0 14px 0"
  get-table-header:
    textColor: "{colors.mute}"
    typography: "{typography.label}"
    padding: "14px 24px 10px 0"
  get-table-cell:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "14px 24px 14px 0"
  code-block:
    backgroundColor: "{colors.code-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px 20px"
---

# Design System: conneroh.com

## Overview

**Creative North Star: "The Terminal Readout"**

Every page is the printed output of a command. The homepage is `kubectl auth whoami -o yaml`, the post page is `kubectl get post <slug> -o yaml`, the 404 is the server's own `NotFound` error, and the lists under the fold are `kubectl get` tables. A `$ command` line in Martian Mono heads each region. Below it, YAML keys in mute mono label values set in Schibsted Grotesk. Scale and weight set the hierarchy, from a 6rem 800-weight name down to a 0.72rem mono column header. Nothing is boxed.

The surface is light paper with ink type, one hairline grey and one electric blue. The blue marks only what is selected, what links out to a repo, and what the pointer is over. Depth comes from 1px rules: hairline indent guides draw YAML nesting, and solid ink rules divide a command from its output. There are no cards, shadows, gradients or rounded containers. Motion is limited to one authored gesture: the describe panel re-renders like fresh command output.

Density is low on the first screen, where the name and the four groups get room to breathe, and high in the tables, where rows sit on 14px padding and hairlines.

**Key Characteristics:**
- Commands in mono, values in grotesk, keys in mute.
- One accent (`lit`), reserved for selection, outbound repo links and hover.
- 1px rules carry all structure; zero radius everywhere.
- Hierarchy by size and weight only, never by color fills or containers.
- A single motion: the clip-path "print" reveal on the active panel.

## Colors

A cool off-white paper and a near-black ink carry almost all of the page. A warm-grey mute and a hairline grey do the structural work. Electric blue appears only where the visitor acts.

### Primary
- **Signal Blue** (`lit`): the active group name and its repo count, every repo link in the describe panel, the group name in the panel's `$ kubectl describe group` line, global link hover, the table row name on hover/focus, the focus ring, and the caret. This is the only saturated color in the system.

### Neutral
- **Terminal Paper** (`paper`): page background, `theme-color`, and the favicon field. Slightly green-cool, never pure white.
- **Ink** (`ink`): all primary text. Also the 1px structural rules: under section commands, left of the describe panel (above it on mobile), above the footer, and above code blocks.
- **Mute Grey** (`mute`): YAML keys, prompt context (`conner@conneroh.com ~`), table headers, metadata (language, stars, dates), descriptions in tables, footer text, blockquotes.
- **Hairline** (`rule`): YAML indent guides, table row dividers, repo-list dividers, `hr`, and the code-block bottom edge.
- **Selection Wash** (`lit-wash`): text selection background only.
- **Code Wash** (`code-wash`): the faint fill behind `pre` blocks in posts. It is the only filled surface in the system.

### Named Rules
**The Lit-Means-Live Rule.** Blue marks only the selected group, outbound repo links, and pointer or focus state. If an element is not selected, not an outbound link, and not under the pointer, it is not blue.

**The Two Greys Rule.** Mute is for text and hairline is for lines. Don't use hairline for text, and don't use mute for rules.

## Typography

**Display Font:** Schibsted Grotesk Variable (with system-ui, sans-serif)
**Body Font:** Schibsted Grotesk Variable (with system-ui, sans-serif)
**Label/Mono Font:** Martian Mono Variable, wdth axis (with ui-monospace, monospace)

**Character:** Martian Mono is the machine voice: commands, keys, slugs, dates, counts. Schibsted Grotesk is the human voice: the name, the areas of work, and the prose. The grotesk goes heavy and tight at large sizes. The mono stays small and quiet.

### Hierarchy
- **Display** (800, clamp(2.8rem, 7.4vw, 6rem), 0.92, -0.035em): the username, set on two lines. Used once per site.
- **Display Post** (800, clamp(2.2rem, 5vw, 4.2rem), 1, -0.03em): the post title under `spec.title:`, max 20ch.
- **Headline** (700, clamp(1.8rem, 3.6vw, 3.1rem), 1.12, -0.02em): the four group names, each led by a mono `-` and followed by a mono repo count.
- **Title** (750, 1.6rem, -0.015em): the describe-panel group name and post `h2`s.
- **Body** (400, 1.0625rem, 1.55): default text and table cells. Panel summaries and the `extra:` values run 1.05rem/1.5, with summaries capped at 46ch.
- **Body Prose** (400, 1.125rem, 1.65): post articles, capped at 70ch.
- **YAML** (mono 400, 0.9rem, 1.75): the whoami block on the homepage. Post headers use 0.85rem.
- **Command** (mono, 0.85rem): `$` prompt lines. The command itself is bold ink (600); the user@host context is mute. Inside the panel it drops to 0.8rem.
- **Label** (mono 600, 0.72rem, 0.06em, uppercase source text): `kubectl get` column headers (NAME, ORG, PERIOD).
- **Data** (mono, 0.75–0.8rem, tabular-nums): language, stars, dates, slugs.

### Named Rules
**The Command/Value Split Rule.** Anything a terminal would print as a key, command or identifier is set in mono. Anything a person would say is set in grotesk. Repo names are identifiers, so they are mono.

**The Weight-Not-Color Rule.** Step down the hierarchy by size and weight. Color (mute vs ink) separates keys from values; it never stands in for a heading level.

## Layout

The page sits in a single centered column (max 1320px) with a fluid gutter (clamp(20px, 4vw, 56px)). The homepage's first screen is a 7fr/5fr grid with a 64px column gap. It is at least `100svh - 80px` tall and aligned to the top. The left column is the YAML document. The right column is the describe panel: sticky at 24px, set off by a 1px ink rule on its left, with 36px inset.

YAML nesting is real indentation: each level is 2ch of left padding against a 1px hairline guide offset 0.5ch. `extra:` is a two-column definition grid (max-content key, 1fr value).

Below the fold, each `kubectl get` section starts 96px down with a command line underlined in ink, then a full-width table. The footer sits 120px below the last section, under an ink rule.

Post pages reuse the prompt and YAML header. The title and prose then indent 3rem as if nested under `spec.title:`; that indent drops to 0 below 700px.

**Responsive:** at 900px and below, the whoami grid collapses to one column. The describe panel loses its sticky position and its left rule switches to a top rule (26px above, 36px margin). `extra:` stacks, and table columns marked "hide on small" (DESCRIPTION, SLUG) drop out. At 600px and below, ORG drops out of the table and reappears as a mute sub-line under the role name. On touch devices, selecting a group scrolls its panel into view when the panel sits below 60% of the viewport.

## Elevation & Depth

The system is completely flat. There are no shadows, no blur, no gradients and no layered surfaces. Line weight and line color convey depth and grouping instead. A 1px **ink** rule means "a command's output starts here" or "this is a separate pane". A 1px **hairline** means "next row" or "nested level". The only filled surface is the faint code wash behind `pre` blocks.

### Named Rules
**The Rule-Not-Box Rule.** Group content with a single 1px line on one side, never with a box enclosing it. A region gets at most one ink rule.

## Shapes

All corners are square (0px). Rules are 1px, with no 2px exceptions except the focus outline (2px lit, 3px offset). Lists are unbulleted in UI: each row is separated by a top hairline. The YAML list dash (`-`) is the only bullet mark on the homepage. Post prose keeps native markdown bullets.

## Components

### Group Tab (signature)
The primary action of the site. It is a vertical tablist of four area names at headline size.
- **Default:** ink grotesk 700, led by a mute mono `-` (0.9rem), followed by a mute mono count (`4 repos`, 0.8rem).
- **Selected:** the name and the count both turn lit.
- **Interaction:** on fine pointers, hovering selects. Click and tap select everywhere, and arrow keys plus Home/End move through the tabs (roving tabindex). Color transitions over 0.2s with the `ease-out` curve. Hover on an unselected tab stays ink: hover does not preview the accent here, because hover selects.
- **Without JS:** each tab is an anchor to its panel, and all panels render stacked.

### Describe Panel (signature)
The output of `kubectl describe group <name>`.
- **Structure:** a mute command line naming the group in lit, then a title-size group name, a 46ch summary, and an unbulleted repo list.
- **Repo row:** a top hairline and 14px vertical padding. A lit mono repo link (0.9rem, 600, no underline, underlined on hover) is justified against mute mono metadata (`Go · 25 stars`). A one-line description sits below.
- **Motion:** on activation, the panel and then each row reveal top-down via `clip-path: inset(0 0 100% 0)` to full, over 0.45s/0.5s with the `ease-out` curve. Rows are staggered 40ms apart. Under reduced motion, durations collapse to 1ms.

### Prompt Line
A `$ command` line that heads every region. Mono 0.85rem in mute, with the command in bold ink. The `rule` variant adds 14px of bottom padding and a 1px ink underline, and heads each `kubectl get` section. On post pages, the user@host segment links home (mute, hairline-colored underline, lit on hover).

### Get Table
A `kubectl get` listing.
- **Header:** mute mono label caps with no bottom border.
- **Rows:** a 1px hairline on top and 14px/24px cell padding.
- **Cells:** the name cell is bold ink and turns lit on row hover or focus-within. The description cell is mute, max 56ch. Period and date cells are mono 0.8rem tabular-nums. Slug cells are mono and break anywhere.
- **Responsive:** columns hide progressively at 900px and 600px, as described in Layout.

### Links
- **Inline:** ink with a 1px underline at 3px offset. Hover turns the link lit.
- **Panel repo links and table names:** no underline at rest. Color or the hover underline carries the affordance.

### Code Block (posts)
A flat `code-wash` fill with 18px/20px padding and mono 0.85rem. A 1px ink rule runs on top and a 1px hairline on the bottom, with no side borders and no radius. Inline code is mono at 0.85em with no fill.

### Error Line (404)
The page renders the server's real error string in mono 600 at clamp(1.1rem, 2.4vw, 1.7rem), max 46ch, with the missing path filled in. A plain grotesk sentence follows with links home and to GitHub.

## Do's and Don'ts

### Do:
- **Do** head every new region or page with a `$` prompt line that names a real command, and render the content as that command's output (YAML keys in mute mono, values in grotesk).
- **Do** keep `lit` (#2b44ff) to selection, outbound repo links, hover and focus. Count the blue elements on a screen; each must be one of those four.
- **Do** draw nesting with 2ch indents against 1px `rule` guides, and separate output from command with a single 1px `ink` rule.
- **Do** set identifiers (repo names, slugs, dates, counts, languages) in Martian Mono, and names and prose in Schibsted Grotesk.
- **Do** step hierarchy by size and weight: 800 display, 700 headline, 750 title, 400 body.
- **Do** keep every authored motion behind the `prefers-reduced-motion` collapse, and give new reveals the `ease-out` curve.

### Don't:
- **Don't** put content in cards, rounded containers, shadowed panels or gradient fills. Use a 1px rule on one side instead.
- **Don't** introduce a second accent hue or tint backgrounds with blue. `lit-wash` is for text selection only.
- **Don't** use corner radius anywhere (0px).
- **Don't** add decorative motion beyond the describe-panel print reveal.
- **Don't** set commands or keys in grotesk, or names and prose in mono.
