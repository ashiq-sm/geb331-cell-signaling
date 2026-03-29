# ⏰ GEB 331 Last-Hour Cheat Sheet (1-Page Quick Reference)
**Print this! Study this! Take this to exam if allowed (for review after exam)**

---

## 🎯 TOP 5 PATHWAYS (Memory in order)

### 1️⃣ GPCR → cAMP → PKA (Q013)
```
Hormone → GPCR (7-TM)
         ↓ Gαs-GTP exchange
         → Adenylyl Cyclase
         ↓ Makes cAMP (2nd messenger)
         → PKA activation
         → Phosphorylates targets
         
DESENSITIZE: GRK phosphorylates GPCR → β-arrestin blocks → cAMP ↓
```
**Key**: T in GTP = Turned on | D in GDP = Disabled

---

### 2️⃣ RTK → Ras → MAPK (Q024)
```
Growth factor → RTK (phosphorylated)
             ↓ recruits GRB2-SOS adapter
             → SOS catalyzes GDP→GTP on Ras
             → Ras-GTP recruits Raf (MAPKKK)
             → Raf phosphorylates MEK (MAPKK)
             → MEK phosphorylates ERK (MAPK)
             → Nuclear → Gene expression

CANCER: Ras-G12V mutation LOCKS GTP (can't hydrolyze)
        GAP CAN'T RECOGNIZE G12V → STUCK ON → uncontrolled division
```
**Key**: Cascade = amplification. Ras is master regulator.

---

### 3️⃣ Wnt/Notch → Proteolysis (Q032, Q013)
```
NOTCH PATHWAY:
Delta ligand → Notch
            ↓ S1 cleavage (TNFα convertase)
            → S2 cleavage (ADAM protease - MEMBRANE)
            → S3 cleavage (γ-secretase - INSIDE)
            → NICD freed → nucleus with RBPj → transcription

Mnemonic: "TAN" = TNF-convertase, ADAM, γ-secretase

WNT/β-CATENIN:
Wnt → Frizzled+LRP
    ↓ Disrupts APC-Axin complex
    → β-catenin NOT phosphorylated
    → β-catenin accumulates (NOT degraded)
    → β-catenin → nucleus with TCF/LEF
    → "GO DIVIDE" genes on

CANCER: APC lost → Can't form destruction complex → β-catenin always high
```
**Key**: Notch = proteolysis (3 cuts). Wnt = prevent degradation (save protein).

---

### 4️⃣ TGF-β → SMAD (Q040)
```
TGF-β → TβRII (constitutive) → TβRI (kinase activated)
      → Phosphorylates SMAD2/3 (R-SMADs)
      → pSMAD2/3 + SMAD4 (Co-SMAD) = trimer
      → Nuclear with TCF/LEF
      → p15/p21 (CDK inhibitors) ↑ → CELL CYCLE STOP

DUAL ROLE:
- Early cancer (wild-type): STOPS division (tumor suppressor) ✓
- Late cancer (SMAD4 lost): Promotes EMT + metastasis (tumor promoter) ✗

KEY DIFFERENCE FROM BMP:
BMP-2 uses SMAD1/5/8 (different R-SMADs) + SMAD4
→ Same SMAD4, different R-SMADs = selectivity!
```
**Key**: TGF-β can suppress OR promote cancer (context = mutations present).

---

### 5️⃣ ER Stress → UPR (Q051)
```
Misfolded proteins ↓
BiP gets distracted (runs to help unfold proteins)
             ↓ RELEASES latch on:

🟠 PERK→eIF2α    → BLOCK translation of EVERYTHING
                  BUT ALLOW ATF4 → makes CHOP (apoptosis if stress too long)

🟢 IRE1→XBP1     → SPLICE XBP1 mRNA → XBP1s (active TF)
                  → Makes ER chaperones (BIP, GRP94, PDI)

🔵 ATF6→cleavage → pATF6 (active fragment)
                  → Makes chaperones + CHOP

OUTCOME: Recovery (chaperones help) OR Apoptosis (CHOP dominates)
```
**Key**: PIE proteins. B BiP is master sensor. All 3 go = serious stress.

---

## 🔬 MOLECULAR "ON/OFF" RULES

| Molecule | ON State | OFF State | What TURNS it ON | What TURNS it OFF |
|----------|----------|-----------|------------------|-------------------|
| Ras | GTP | GDP | SOS (GEF) | GAP (GTPase activator) |
| G-protein (Gα) | GTP | GDP | GPCR + GEF | Intrinsic GTPase + GAP |
| CaMKII | Phosphorylated (Thr286) | Unphosphorylated | Itself (autophos) + high Ca²⁺ | Phosphatase (PP1) |
| NF-κB | Free in nucleus | Bound to IκBα in cytoplasm | TNFα→IKK phosphorylates IκBα | New IκBα synthesized |
| HIF-1α | Protein stable (nucleus) | Protein degraded (proteasome) | Hypoxia (PHD inactive) | Normoxia (PHD active hydroxylates) |
| ERK/MAPK | Phosphorylated | Unphosphorylated | MEK kinase | Phosphatase (MKP) |
| β-catenin | Free + nucleus | Bound + cytoplasm (destroyed) | Wnt (breaks APC complex) | APC-Axin-GSK3 (phosphorylates for ubiquitin) |
| NICD | Free (cleaved NICD) | Bound (uncleaved Notch) | S1/S2/S3 cleavage | Ubiquitin degradation (after act) |

---

## 🧠 MEMORY TRICKS

### Distinguish Similar Proteins:
```
SMAD2 vs SMAD3:     Both activated by TGF-β, but SMAD3→activation, SMAD2→repression
SMAD2/3 vs SMAD4:   SMAD4 is Co-SMAD (works with BOTH R-SMADs)
SMAD vs IDRP:       I-SMAD (6,7) = Inhibitors! SMAD7 blocks TGF-β
```

### Distinguish Similar PATHWAYS:
```
GPCR (Gs):     Hormone → 2nd messenger (cAMP) → PKA phosphorylates
RTK:           Growth factor → adapter → kinase cascade → nuclear TF
TGF-β:         Cytokine → SMAD recruitment → SMAD complex → nuclear
Wnt/Notch:     Proteolysis (cut protein) → release intracellular domain → nuclear
```

### Three ways to STOP a pathway:
```
1. PHOSPHATASE: Removes phosphate (PP1, MKP, PTP)
2. GAP/GTPase: Converts GTP→GDP (stops Ras, G-proteins)
3. UBIQUITIN: Marks for destruction (IκBα, β-catenin, NICD)
```

---

## 📋 EXAM STRATEGY (60 marks, ~3 hours)

**First 5 minutes**: Scan all questions, count marks
**Rule**: 1 minute per mark of question (14-mark Q = 14 min)

**Priority ORDER**:
1. ⭐⭐⭐⭐⭐⭐ questions first (highest marks + high confidence)
2. ⭐⭐⭐⭐⭐ next
3. ⭐⭐⭐⭐ and below last

**What to write**:
- Draw pathway (shows understanding)
- Label inputs/outputs
- Show intermediate steps
- Circle/box the key ON→OFF step
- Add Bengali term if you know it (bonus marks!)

**Common pitfalls to AVOID**:
- ❌ Confusing GTP with GDP
- ❌ Mixing Ras with G-protein
- ❌ Saying "always off" or "always on" (specify the NORMAL state)
- ❌ Forgetting what STOPS the signal
- ❌ Not distinguishing cancer from normal

---

## 🎨 COLOR CODE FOR DIAGRAMS (Quick Visual Memory)

```
🔵 BLUE = INPUT node (Receptor, Signal, Sensor)
🟢 GREEN = PROCESS node (Kinase, Phosphorylation, Activation)
🔴 RED = OUTPUT node (Gene Expression, Response, Outcome)
🟠 ORANGE = FEEDBACK/INHIBITION (GAP, SMAD7, IκBα, degradation)
🟣 PURPLE = DECISION node (Stress, Apoptosis vs Recovery)
```

---

## ⚡ FAST FACTS FOR EACH ⭐⭐⭐⭐⭐⭐ QUESTION

| Q# | Topic | KEY CONCEPT | ONE-LINER |
|---|-------|------------|-----------|
| Q001 | Central Dogma | Signal→Transduce→Execute | Three steps: Reception, Transduction, Response |
| Q013 | GPCR-PKA | Gαs-GTP → cAMP (2nd messenger) → PKA phosphorylates | Second messenger amplifies signal ~1000x |
| Q024 | Ras-G12V Cancer | G12V locks GTP (can't turn off) | Constitutive MAPK activation without growth factor |
| Q032 | Notch: S1/S2/S3 | Three cleavages release NICD | TAN = TNFα/ADAM/γ-secretase |
| Q032 | Wnt: β-catenin saved | APC lost → β-catenin accumulates | Destruction complex broken = Wnt always on |
| Q032 | NF-κB: IκBα signal | TNFα→IKK→phosphorylates IκBα→degraded→NF-κB free | Free IκBα allows NF-κB nuclear entry |
| Q040 | TGF-β: Tumor Suppressor (early) or Promoter (late) | SMAD4 deletion changes role | Context wins: mutations determine outcome |

---

## 🧪 "TEACH-BACK" SELF-CHECK (2 min per topic)

After you STUDY, try to TEACH without notes:

**Q: Explain why Ras-G12V is LOCKED in GTP state**
Your answer should include:
- G12V is at amino acid position 12
- Prevents GAP recognition
- GAP normally removes GTP phosphate
- With G12V, GAP can't remove phosphate → GTP stays
- Result: Ras always signals (no OFF switch)

**Q: Why does SMAD7 make TGF-β pro-cancer?**
Your answer should include:
- SMAD7 is INHIBITOR (not activator like SMAD2/3)
- Blocks TβRI from phosphorylating SMAD2/3
- Breaking canonical pathway → non-canonical EMT pathway activates
- EMT = epithelial to mesenchymal = cell migration = metastasis

If you can explain these, you understand the MECHANISM.
If you just memorize "G12V = cancer", exam will fail you.

---

## 🚨 TOP EXAM TRAPS

| Trap | Why Students Fall | How to Avoid |
|------|------------------|--------------|
| "GTP = active" always assumed true | Most proteins, but not ALL | Ask: Does this protein have GTPase activity? Or is GTP catalyptically stuck? |
| Confuse "pathway activated" with "cell divides" | Students think activation = instant division | Remember: MAPK activated, but needs sustaining signals, takes TIME |
| Think Wnt/Notch are similar | Both use "intracellular domains" | NO! Wnt saves β-catenin (prevent degradation), Notch produces NICD (proteolysis) |
| Assume tumor = more growth signals | Actually often = loss of brakes + gain of gas pedal | Example: APC loss = BOTH tumor suppressor loss + Wnt pathway on |
| Forgot what STOPS signaling | Students explain only the "on" part | EXAM MARK: Writing what turns signal OFF gets +20% bonus |

---

## 📱 LAST-SECOND MENTAL TRICKS

- **GPCR = 7 transmembrane** (draw 7 wiggles = 7 helices crossing membrane)
- **cAMP = second messenger** (molecule, NOT protein like Gαs)
- **Ras = adapter GTPase**, NOT G-protein (different families!)
- **SMAD = mother of transcription** (MOM = "mediates outside/inside" = SMAD)
- **β-catenin = accumulates** (Wnt stops destruction, NOT makes new)
- **NICD = nucleus-acting domain** (answer is in the NAME: intracellular domain)
- **APC = "almost protein-counting"** (lost = loses ability to count/phosphorylate β-catenin)
- **NF-κB = "nuclear factor κ-light chain enhancer of B cells"** (originally found in B cells)

---

## 🕐 TIMING GUIDE

**3-Day Exam Prep:**
- Day 1 (48h before): Read all ⭐⭐⭐⭐⭐⭐ questions + draw diagrams = 4h
- Day 2 (24h before): Practice 4-5 high-point questions timed = 3h
- Day 3 (12h before): Review this cheat sheet 3x, mnemonics out loud = 1h
- Morning of: Read this sheet once, THEN SLEEP = 30 min

**2-Hour Before Exam:**
- Do NOT study anything new (consolidation needs time)
- Review diagrams mentally
- Practice writing ONE answer by hand (gets pen moving)
- Eat glucose-based snack (brain fuel)
- Sleep 20-min power nap if possible

**DURING EXAM:**
- First 5 min: Scan, plan order
- Answer high-star questions first
- If stuck 5+ min: MOVE ON, come back
- Last 10 min: Check that you explained what STOPS each pathway

---

*Good luck! You've got this! 🚀*
*Remember: Understand > Memorize. Draw pathways, write about stopping mechanisms.*
