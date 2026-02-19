# Continuity 25A → MCG 25B: Proposed Corrections

**Date**: 2026-02-19
**Scope**: Correct all event codes, names, and prerequisite references in 5 Continuity 25A JSON files to match official MCG 25B numbering.

**Bottom line**: Every single event code in the continuity is from the old 25A numbering scheme. MCG 25B completely renumbered all phases. This document lists every correction needed, organized by phase, for human validation before any changes are applied.

---

## Summary

| Phase | Continuity Events | Matched | Unmatched | Code Changes | Name Changes | Human Review Items |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|
| **CF** | 51 | 42 | 4 (chase section) + 5 ambiguous (RPA) | 42 | ~25 | 9 |
| **FQ** | 26 | 26 | 0 (but 4 structural issues) | 26 | ~15 | 4 |
| **PF** | 35 | 19 | 3 (DAS planeside) | 19 | ~10 | 5 |
| **SY** | 23 | 21 | 2 (cyber labs) | 21 | ~14 | 2 |
| **TF** | 13 | 13 | 0 | 13 | 8 | 1 |
| **Total** | **148** | **121** | **14** | **121** | **~72** | **21** |

---

## CF Phase (Check Flights) — 51 events

### Airmanship Section (7 events)

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 1 | CF 6151FE | C-172 Airmanship FA-1 | **CF 6110F** | C-172 Airmanship FA-1 | Code only |
| 2 | CF 6152FE | C-172 Airmanship FA-2 | **CF 6111F** | C-172 Airmanship FA-2 | Code only |
| 3 | CF 6153FE | C-172 Airmanship FA-3 | **CF 6112F** | C-172 Airmanship FA-3 | Code only |
| 4 | CF 6154FE | C-172 Airmanship FA-4 | **CF 6113F** | C-172 Airmanship FA-4 | Code only |
| 5 | CF 6155FE | C-172 Airmanship FA-5 | **CF 6114F** | C-172 Airmanship FA-5 | Code only |
| 6 | CF 6156FC | C-172 Airmanship CA-1 | **CF 6120F** | C-172 Airmanship CA-1 | Code only |
| 7 | CF 6157FC | C-172 Airmanship CA-2 | **CF 6121F** | C-172 Airmanship CA-2 | Code only |

### Glider Section (3 events)

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 8 | CF 6251FJ | Glider Fam | **CF 6202F** | Glider Familiarization Flight 1 | Code + name |
| 9 | CF 6252FP | SGS 2-33 | **CF 6202F or 6203F** | Glider Familiarization Flight 1 or 2 | **REVIEW**: Which flight? |
| 10 | CF 6251FP | Glider Fam and Solo | **CF 6210F** | Glider Fam and Solo Flight 1 | Code + name |

### T-38 Section (8 events)

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 11 | CF 6342SN | T-38 Cockpit Fam | **CF 6304S** | T-38 Cockpit Familiarization | Code + name |
| 12 | CF 6342SP | T-38 CPT | **CF 6305S** | T-38 Cockpit Procedures Training | Code + name |
| 13 | CF 6351FP | T-38 CF-1 | **CF 6360F** | T-38 CF-1 | Code only |
| 14 | CF 6352FP | T-38 CF-2 (T-38 DG ONLY) | **CF 6361F** | T-38 CF-2 | Code + remove annotation |
| 15 | CF 6353FP | T-38 CF-3 | **CF 6362F** | T-38 CF-3 | Code only |
| 16 | CF 6354FP | T-38 CF-FORM | **CF 6701F** | T-38 CF-Form | Code only |
| 17 | CF 6355FN | T-38 Flight Training | **CF 6370F** | T-38 Flight Training | Code only |
| 18 | CF 6356FM | T-38 Weapons Fam | **CF 6381F** | T-38 Weapons Familiarization | Code + name |

### Learjet Section (2 events)

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 19 | CF 6451FB | Learjet CF-1 | **CF 6402F** | Learjet CF-1 | Code only |
| 20 | CF 6452FB | Learjet CF-2 | **CF 6403F** | Learjet CF-2 | Code only |

### C-12 Section (7 events)

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 21 | CF 6542SE | C-12 Cockpit Fam | **CF 6503S** | C-12 Cockpit Familiarization | Code + name |
| 22 | CF 6542SD | C-12 CPT | **CF 6504S** | C-12 Cockpit Procedures Training | Code + name |
| 23 | CF 6551FP | C-12 CF-1 | **CF 6540F** | C-12 CF-1 | Code only |
| 24 | CF 6552FP | C-12 CF-2 | **CF 6541F** | C-12 CF-2 | Code only |
| 25 | CF 6553FP | C-12 CF-3 | **CF 6542F** | C-12 CF-3 | Code only |
| 26 | CF 6554FN | C-12 Flight Training | **CF 6550F** | C-12 Flight Training (ABM/CSO/FTE) | Code only |
| 27 | CF 6554FP | C-12 Flight Training | **CF 6551F** | C-12 Flight Training (non-DG pilot) | Code only |

### RPA Section (8 events) — NEEDS REVIEW

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 28 | CF 6650FR | C-172 CF-1 (RPA) | **???** | No clear MCG match | **REVIEW**: MCG has no RPA C-172 check flights |
| 29 | CF 6651FR | C-172 CF-2 (RPA) | **???** | No clear MCG match | **REVIEW**: Same issue |
| 30 | CF 6642HR | C-12C CPT (RPA) | **CF 6504S?** | C-12 Cockpit Procedures Training | **REVIEW**: Likely same event, RPA applicability |
| 31 | CF 6641SR | T-38 CPT (RPA) | **CF 6305S?** | T-38 Cockpit Procedures Training | **REVIEW**: Likely same event, RPA applicability |
| 32 | CF 6652FR | C-12 CF-3 (RPA) | **CF 6552F** | C-12 Flight Training (RPA) | Code change |
| 33 | CF 6653FR | T-38 CF-4 (RPA) | **???** | No T-38 CF-4 in MCG | **REVIEW**: MCG only goes to CF-3 |
| 34 | CF 6654FR | C-12 CF-5 (RPA) | **CF 6720F?** | C-12 Form | **REVIEW**: Tentative match |
| 35 | CF 6655FR | T-38 CF-6 (RPA) | **CF 6710F?** | T-38 Form | **REVIEW**: Tentative match |

### F-16 Section (11 events)

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 36 | CF 6703CE | CR INTRO | **CF 6621C** | Control Room Familiarization | Code + name |
| 37 | CF 6731SP | F-16 EP | **CF 6610S** | F-16 Emergency Procedures Sim | Code + name |
| 38 | CF 6732SP | F-16 EP Checkout | **CF 6660S** | F-16 Emergency Procedures Checkout | Code + name |
| 39 | CF 6742SJ | F-16 Cockpit Fam | **CF 6604S** | F-16 Cockpit Familiarization | Code + name |
| 40 | CF 6742SP | F-16 CPT | **CF 6605S** | F-16 Cockpit Procedures Training | Code + name |
| 41 | CF 6751FP | F-16 CF-1 | **CF 6670F** | F-16 CF-1 | Code only |
| 42 | CF 6752FP | F-16 CF-2 | **CF 6671F** | F-16 CF-2 | Code only |
| 43 | CF 6753FP | F-16 CF-3 | **CF 6672F** | F-16 CF-3 | Code only |
| 44 | CF 6755FJ | F-16 Flight Training | **CF 6680F** | F-16 Flight Training (ABM/CSO/FTE/RPA) | Code only |
| 45 | CF 6755FP | F-16 Flight Training | **CF 6681F** | F-16 Flight Training (non-DG pilot) | Code only |
| 46 | CF 6756F | F-16 Departure Flight | **CF 6691F** | F-16 Departure Flight | Code only |

### Photo / Safety Chase Section (4 events) — NO MCG MATCH

| # | Old Code | Old Name | Status |
|:-:|----------|----------|--------|
| 47 | CF 6951FN | T-38 Photo/Safety Chase Fam | **CONTINUITY-ONLY** — no MCG event |
| 48 | CF 6951FP | T-38 Chase Introduction | **CONTINUITY-ONLY** — no MCG event |
| 49 | CF 6953FR | C-12 Photo/Safety Chase | **CONTINUITY-ONLY** — no MCG event |
| 50 | CF 6953RP | C-12 Photo/Safety Target | **CONTINUITY-ONLY** — no MCG event |

> **Decision needed**: Keep these 4 chase events with their old codes (scheduling constructs not in MCG), or remove them?

---

## FQ Phase (Flying Qualities) — 26 events

| # | Old Code(s) | Old Name | New Code(s) | New Name | Notes |
|:-:|-------------|----------|-------------|----------|-------|
| 1 | FQ 6331S | FQ Sim | **FQ 6210S** | Flying Qualities Sim | Code + name |
| 2 | FQ 6351FA | Learjet Long Stability Flight | **FQ 6221F** | (same) | Code only |
| 3 | FQ 6352FA | Learjet Lat-Dir Stability Flight | **FQ 6222F** | (same) | Code only |
| 4 | FQ 6353FN | Learjet Combined Long/Lat-Dir | **FQ 6223F** | + "Flight" suffix | Code + minor name |
| 5 | FQ 6354F | Glider Flying Qualities Flight | **FQ 6230F** | (same) | Code only |
| 6 | FQ 6551F | C-12 Static Stability Sortie | **FQ 6241F** | C-12 Static Stability Flight | Code + "Sortie"→"Flight" |
| 7a | FQ 6553FH | T-38 Dynamics Flight | **FQ 6251F** | (same) | Code only |
| 7b | FQ 6553CE | T-38 Dynamics Control Room | **FQ 6252C** | (same) | Code only |
| 8a | FQ 6751F | T-38 FQ Test Plan Data Flights | **FQ 6310F/6311F** | Data Flight 1 / 2 | Code + split into 2 |
| 8b | FQ6751CE | (Control Room for above) | **???** | No MCG CR for data flights | **REVIEW** |
| 9a | FQ 7553FH | F-16 Structures Envelope Expansion | **FQ 7232F** | (same) | Code only |
| 9b | FQ 7553CE | (Control Room) | **FQ 7231C** | (same) | Code only |
| 10 | FQ 7641G | Learjet FCS Verification Ground Test | **FQ 7221I** | (same, type G→I) | Code only |
| 11 | FQ 8131S | HQ Sim I | **FQ 8110S** | Handling Qualities Sim | Code + name |
| 12 | FQ 8133S | PIO Sim | **FQ 8111S** | PIO Sim | Code only |
| 13 | FQ 8153F | Learjet HQ Flight | **FQ 8131F** | Learjet Handling Qualities Project Flight | Code + name |
| 14 | FQ 8154FA | Learjet PIO Flight | **FQ 8171F** | Learjet PIO Flight | Code only |
| 15a | FQ 8753FA | T-38 HQ Flight | **FQ 8141F** | T-38 Handling Qualities Flight | Code + "HQ"→full |
| 15b | FQ 8753R | (Target) | **FQ 8150F** | Target for T-38 HQ Flight | Code + type R→F |
| 16 | FQ 8754FP | T-38 Stall Flight | **FQ 9221F** | T-38 Stall Flight | Code only |
| 17 | FQ 8755FJ | T-38 Combined HQ/Stall Flight | **FQ 8160F** | T-38 Combined Handling Qualities/Stall Flight | Code + name |
| 18a | FQ 8756F | T-38 HQ Test Plan Data Flight | **FQ 8202F** | T-38 Handling Qualities Test Plan Data Flight | Code + name |
| 18b | FQ 8756R | (Target) | **???** | No MCG target event | **REVIEW** |
| 19 | FQ 8951F | VISTA HQ Flight 1 | **FQ 8181F** | VISTA Handling Qualities Flight | Code + name |
| 20 | FQ 8952FA | VISTA HQ Flight 2 | **???** | MCG has only 1 VISTA flight | **REVIEW** |
| 21 | FQ 8954F | C-12 Multi Engine HQ Flight | **FQ 8121F** | C-12 Multi Engine Handling Qualities Flight | Code + name |
| 22 | FQ 9551F | C-12 Engine Out Testing Flight | **FQ 9111F** | KC-135/C-12 Engine Out Testing Flight | Code + name |
| 23 | FQ 9751F | Glider Spin Flight | **FQ 9211F** | (same) | Code only |
| 24a | FQ 9775FH | F-16 High AOA Env Exp Data Flight | **FQ 9236F** | F-16 High AOA EE Data Flight | Code + minor name |
| 24b | FQ 9775CE | (Control Room) | **FQ 9237C** | (same) | Code only |
| 25 | FQ 9958SB | Sim FQ Practical Exam | **FQ 9502S** | Sim Flying Qualities Practical Exam | Code + name |
| 26a | FQ 9959FP | T-38 FQ Practical Exam | **FQ 9511F** | T-38 Flying Qualities Practical Exam | Code + name |
| 26b | FQ 9959CE | (Control Room) | **FQ 9512C** | (same) | Code only |

**FQ formatting fixes**: Continuity has `FQ6751CE` (missing space) — fix to `FQ 6751CE` before code correction.

**Systematic FQ name changes**: "HQ" → "Handling Qualities" throughout (8 events).

---

## PF Phase (Performance) — 35 events

### DAS Planeside (3 events) — NO MCG MATCH

| # | Old Code | Old Name | Status |
|:-:|----------|----------|--------|
| 1 | PF 5341HG / PF 5342HG | DAS Planeside Academics, C-12 | **CONTINUITY-ONLY** |
| 2 | PF 5342H | DAS Planeside Academics, T-38 | **CONTINUITY-ONLY** |
| 3 | PF 5343HG / PF 5341HG | DAS Planeside Academics, F-16D | **CONTINUITY-ONLY** |

> **Decision needed**: These may map to CF 5251H "DAS Planeside Academics" or be PF-specific scheduling events. Keep as-is or remap?

### Matched Events (19 events across remaining sections)

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 4 | PF 6152F | T-38 Low L/D Flight | **PF 6121F** | (same) | Code only |
| 5 | PF 7151FP | Tower Flyby, F-16 | **PF 7112F** | F-16/T-38 Tower Flyby Flight | Code + name |
| 6 | PF 7151FJ | Tower Flyby, T-38 (tower crew) | **PF 7111C** | F-16/T-38 Tower Flyby Tower | Code + name |
| 7 | PF 7351FH | T-38 Aero Model Flight | **PF 6221F** | T-38 Aerodynamic Modeling Flight | Code + name |
| 8 | PF 7352F | Aero Model Data, C-12 | **PF 6230F** | Data Group Aerodynamic Modeling Data | Code + name |
| 9 | PF 8353FN | C-12 Level Accel/Turn Perf Flight | **PF 8211F** | (same) | Code only |
| 10 | PF 8354FA | T-38 Level Accel/Sawtooth Climb | **PF 8222F** | T-38 Level Accel/Turn Perf Flight | Code + name change |
| 11 | PF 8355F | LA/SC Data 1, C-12 | **PF 8230F** | Data Group LA/TP Data Flight 1 | Code + name |
| 12 | PF 8356F | LA/SC Data 2, C-12 | **PF 8231F** | Data Group LA/TP Data Flight 2 | Code + name |
| 13 | PF 8354FP | LA/SC Data 2, T-38 | **PF 8231F** | (consolidated) | Code |
| 14 | PF 8355FP | LA/SC Data 2, F-16D | **PF 8231F** | (consolidated) | Code |
| 15 | PF 8357FA | Turn Perf Flight, F-16D | **PF 8222F** | T-38 Level Accel/Turn Perf Flight | Code + consolidated |
| 16 | PF 8357CE | Turn Perf, Control Room | **PF 8221C** | T-38 Level Accel/Turn Perf CR | Code only |
| 17 | PF 8358F | Turn Perf Data 1 | **PF 8232F?** | Data Group LA/TP Data Flight 3 | **REVIEW**: See note below |
| 18 | PF 8359F | Turn Perf Data 2 | **???** | May not exist in MCG 25B | **REVIEW**: See note below |
| 19 | PF 8951FB | C-12 AP FCS Flight | **PF 8302F** | C-12 Autopilot FCS Flight | Code only |
| 20 | PF 8952FB | C-12 Perf Practical Exam | **PF 8311F** | C-12 Performance Practical Flight | Code + "Exam"→"Flight" |
| 21 | PF 8959FD | C-12 Perf Practical Exam (P/FTE) | **PF 8332F** | Multi-Engine Performance Practical | Code + major name change |

> **PF Data Flight consolidation note**: Continuity has 4 data flight groups (LA/SC Data 1, LA/SC Data 2, Turn Perf Data 1, Turn Perf Data 2). MCG has 3 (Data Flight 1, 2, 3). Best guess mapping:
> - LA/SC Data 1 → PF 8230F (Data Flight 1)
> - LA/SC Data 2 → PF 8231F (Data Flight 2)
> - Turn Perf Data 1 → PF 8232F (Data Flight 3)
> - Turn Perf Data 2 → **Removed in MCG 25B?**
>
> **Decision needed**: Confirm this 4→3 mapping or provide correct assignment.

> **"Sawtooth Climb" vs "Turn Perf"**: Continuity separates these as distinct events. MCG 25B combines them under "Level Accel/Turn Perf." This is a curriculum content change, not just renumbering.

> **"HU-16" references**: Event #21 prereqs still reference "HU-16 Ground School" — this aircraft name is obsolete in MCG 25B, replaced with "Multi-Engine Performance Practical."

---

## SY Phase (Systems) — 23 events

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 1 | SY 5711L | Avionics Testing Lab | **SY 5102L** | Avionics Testing Lab | Code only |
| 2 | SY 6551F | F-16 Sensor Flight | **SY 6131F** | F-16 Sensors Flight | Code + "Sensor"→"Sensors" |
| 3 | SY 6321L | TPS Radar Lab 1 | **SY 6120L** | RADAR Lab | Code + name (labs merged) |
| 4 | SY 6322L | TPS Radar Lab 2 | **SY 6120L** | RADAR Lab | Code + name (same as above) |
| 5 | SY 6331SF | Un-Cleared Radar Sim | **SY 6122S** | RADAR Simulator for Uncleared Students | Code + name |
| 6 | SY 6331SU | Cleared Radar Sim | **SY 6121S** | RADAR Simulator for Cleared Students | Code + name |
| 7 | SY 7561S | F-16 Weapons Delivery Sim | **SY 7211S** | (same) | Code only |
| 8 | SY 7561FH | F-16 Weapons Delivery Intro | **SY 7212F** | F-16 Weapons Delivery Flight | Code + "Intro"→"Flight" |
| 9 | SY 7561CE | Control Room | **SY 7213C** | F-16 Weapons Delivery Control Room | Code + name |
| 10 | SY 8221LU | US Only Integrated Systems Lab | **SY 8210L** | Integrated Systems Lab | Code + drop "US Only" |
| 11 | SY 8521SU | Cleared EW Sim | **SY 8410S** | Electronic Warfare Simulator for Cleared Students (F-22 SIL) | Code + name |
| 12 | SY 8521LF | Uncleared EW Lab | **SY 8411L** | Electronic Warfare Lab for Uncleared Students (Mission Systems Lab) | Code + name |
| 13 | SY 8511L | Software Dev and Test Fund Lab | **SY 7111L** | Computer Software and Networks Lab | Code + completely different name |
| 14 | SY 9221LU | US Only Cyber Vulnerabilities Case Study Lab (1st) | **???** | No MCG match | **REVIEW** |
| 15 | SY 9221LU | Cyber Vulnerabilities Case Studies Lab (2nd) | **???** | No MCG match | **REVIEW** |
| 16 | SY 7752FU | US Only MQ-9 Advanced System Flight | **SY 7312F** | MQ-9 Evaluation Flight | Code + name |
| 17 | SY 7751FU | F-15E Systems Eval | **SY 7303F** | F-15E Systems Evaluation Flight | Code + name |
| 18 | SY 7669FP | F-16 Systems Practical Exam Flight | **SY 7511F** | (same) | Code only |
| 19 | SY 7669CE | Control Room | **SY 7512C** | F-16 Systems Practical Exam Control Room | Code + name |
| 20 | SY 7659SB | MQ-9 Systems Practical Exam Sim | **SY 7502S** | (same) | Code only |
| 21 | SY 7659FB | MQ-9 Systems Practical Exam | **SY 7503F** | (same) | Code only |
| 22 | SY 9771XU | US Only 5th Gen Tour | **SY 9130H** | Advanced Aircraft Tour | Code + name |
| 23 | SY 9771SU | US Only 5th Gen Sims | **SY 9120S** | 5th Generation Simulator | Code + name |

> **SY Radar Lab merge**: Labs 1 and 2 (SY 6321L / 6322L) both map to single RADAR Lab (SY 6120L). The continuity currently schedules these as two separate events. Decision: merge into one, or keep two entries pointing to same MCG code?

> **SY Cyber Vulnerabilities (events 14-15)**: Two entries with identical code SY 9221LU have no MCG 25B equivalent. Content may have been absorbed into SY 7111L (Computer Software and Networks). Decision: remove from continuity, or flag as legacy?

---

## TF Phase (Test Fundamentals) — 13 events

| # | Old Code | Old Name | New Code | New Name | Notes |
|:-:|----------|----------|----------|----------|-------|
| 1 | TF 5311S | Human Systems Integration Sim/Lab | **TF 5202S** | (same) | Code only |
| 2 | TF 5321L | Anthro Measurements Lab | **TF 5210L** | Anthropometric Measurements Lab | Code + name |
| 3 | TF 6331SE | Sim/CR Test Conduct Primer | **TF 6221C** | Control Room Test Conduct Primer | Code + "Sim/CR"→"Control Room" |
| 4 | TF 6351F | C-12 Airborne Test Conduct Intro | **TF 6241F** | (same) | Code only |
| 5 | TF 6359F | C-12 Intermediate Airborne | **TF 6251F** | C-12 Intermediate Airborne Test Conduct | Code + add "Test Conduct" |
| 6 | TF 6361C | F-16 Control Room TC Intro | **TF 6231C** | F-16/Control Room Test Conduct Intro | Code + add "/" |
| 7 | TF 7151F | Graded Qual Eval 1 Flight | **TF 7112F** | (same) | Code only |
| 8 | TF 7152F | Graded Qual Eval 2 Flight | **TF 7122F** | (same) | Code only |
| 9 | TF 7153F | Graded Qual Eval 3 Flight | **TF 7132F** | (same) | Code only |
| 10 | TF 7351-56F | Exp Broadening Qual Eval 1-6 Flt | **TF 7220-25F** | Experience Broadening Qual Eval Flight 1-6 | Code + minor name |
| 11 | TF 7357F | C-17 Exp Broadening Qual Eval Flt | **TF 7231F** | C-17 Experience Broadening Qual Eval Flight | Code + "Flt"→"Flight" |
| 12 | TF 7550F | Intro to Rotary Wing Flight | **TF 7303F** | (same) | Code only |
| 13 | TF 7760O | US Only Real-World CR Obsv | **TF 7401C** | Real-World Control Room Observation | Code + name + type O→C |

---

## Items Requiring Human Review

### Must-Decide (blocking corrections)

| # | Phase | Issue | Options |
|:-:|:-----:|-------|---------|
| 1 | CF | **RPA C-172 flights** (CF 6650FR, 6651FR) — no MCG match. MCG has no separate RPA C-172 check flights. | A) Remove from continuity B) Map to CA-1/CA-2 (CF 6120F/6121F) C) Keep with old codes |
| 2 | CF | **T-38 CF-4 RPA** (CF 6653FR) — MCG only goes to CF-3. | A) Remove B) Map to CF 6362F (T-38 CF-3) C) Keep with old code |
| 3 | CF | **Chase section** (4 events) — no MCG equivalent. | A) Keep with old codes as scheduling-only B) Remove |
| 4 | FQ | **FQ6751CE** (no space, CR for data flights) — no MCG CR for FQ data flights. | A) Remove B) Keep with corrected code as scheduling construct |
| 5 | FQ | **FQ 8756R** (Target for HQ Test Plan Data Flight) — no MCG target event. | A) Remove B) Keep as scheduling construct |
| 6 | FQ | **FQ 8952FA** (VISTA HQ Flight 2) — MCG has only 1 VISTA flight. | A) Remove B) Map to FQ 8181F (same as Flight 1) |
| 7 | PF | **DAS Planeside** (3 events) — no MCG PF equivalent. | A) Map to CF 5251H B) Keep as PF scheduling events C) Remove |
| 8 | PF | **Data flight 4→3 consolidation** — Turn Perf Data 2 (PF 8359F) may not exist in MCG. | A) Remove Turn Perf Data 2 B) Map to PF 8232F |
| 9 | SY | **Cyber Vulnerabilities Labs** (2x SY 9221LU) — removed from MCG 25B. | A) Remove B) Keep as legacy |

### Verify (non-blocking, agent's best guess)

| # | Phase | Issue | Agent's Guess |
|:-:|:-----:|-------|---------------|
| 10 | CF | CF 6252FP "SGS 2-33" — which glider fam flight? | CF 6202F or CF 6203F (Fam Flight 1 or 2) |
| 11 | CF | CF 6642HR "C-12C CPT (RPA)" | CF 6504S (C-12 CPT, with RPA applicability) |
| 12 | CF | CF 6641SR "T-38 CPT (RPA)" | CF 6305S (T-38 CPT, with RPA applicability) |
| 13 | CF | CF 6654FR "C-12 CF-5 (RPA)" | CF 6720F (C-12 Form) — tentative |
| 14 | CF | CF 6655FR "T-38 CF-6 (RPA)" | CF 6710F (T-38 Form) — tentative |
| 15 | PF | "Sawtooth Climb" vs "Turn Perf" — same MCG event? | Yes, MCG combined them under PF 8222F |
| 16 | SY | Radar Labs 1+2 → single RADAR Lab | Both → SY 6120L (one event, scheduled twice?) |
| 17 | FQ | "TF 6361CE F-16 Propulsion Intro" in prereqs | Maps to TF 6231C "F-16/Control Room Test Conduct Intro" — name mismatch, same code |

### Cross-Phase References (resolved)

These were confirmed by comparing all 5 agents' lookup tables:

| Reference | Resolution |
|-----------|------------|
| CF → SY: "SY 7911 WEAPONS LECTURE" | **SY 7201A** Weapons Integration and Testing Lecture |
| FQ/PF → TF: "TF 6351F C-12 Airborne TC Intro" | **TF 6241F** (confirmed) |
| FQ/PF → TF: "TF 6314A Perf TC Lecture" | **TF 6202B** Performance Test Conduct Lecture |
| FQ → PF: "PF 8357CE Turn Perf CR" | **PF 8221C** T-38 Level Accel/Turn Perf CR |
| SY → TF: "TF 6713A Deficiency Reports" | **TF 6410A** Deficiency Reports Lecture |
| SY → TF: "TF 6111A Test Planning" | **TF 6103A** Test Planning Lecture |
| SY → CF: "CF 6356FM T-38 Weapons Fam" | **CF 6381F** T-38 Weapons Familiarization |
| TF → CF: "CF 6703CE CR Familiarization" | **CF 6621C** Control Room Familiarization |
| TF → CF: "CF 6552FP C-12 CF-2" | **CF 6541F** C-12 CF-2 |
| TF → CF: "CF 6652FR C-12 CF-3 (RPA)" | **CF 6542F** C-12 CF-3 |
| TF → CF: "CF 6554FN/FP C-12 Training" | **CF 6550F + CF 6551F** |
| TF → CF: "CF 6755FJ F-16 Training (FTE)" | **CF 6680F** F-16 Flight Training |

### Cross-Phase References (unresolved — needs human input)

| Reference | Issue |
|-----------|-------|
| FQ/SY → TF: "TF 6361CE F-16 Propulsion Intro" | TF agent says TF 6361C → TF 6231C "F-16/Control Room Test Conduct Intro". Name "Propulsion Intro" doesn't match — same event? |
| FQ → CF: "CF 6551 T-38 Chase Fam" | CF 6551 in MCG = C-12 Flight Training (wrong aircraft). Chase events are continuity-only. What should this prereq point to? |

---

## What Happens Next

Once you validate the corrections above (especially the 9 must-decide items), I will:

1. **Update all 5 continuity JSON files** with corrected codes and names
2. **Update all prerequisite references** within each event
3. **Resolve cross-phase prereqs** using the confirmed lookup table
4. **Commit and push** to the `continuity` branch

No changes will be made until you approve.
