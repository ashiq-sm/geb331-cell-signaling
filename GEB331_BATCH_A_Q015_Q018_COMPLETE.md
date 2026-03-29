================================================================
[Q015] Signal Amplification in GPCR Cascade (2016, 7 marks)

🎯 KEYWORD BREAKDOWN:
• "Amplification" = multiplication factor at each step
• "Cascade" = sequential steps multiplying signal
• "Exponential" = 1→10→100→1000 progression

📝 MNEMONIC:
🔡 "AMP-CASCADE" = Amplification through Multiple Protein-phosphorylation Cascade ADE-nucleotide exponential

✍️ COMPREHENSIVE SOLUTION (7 marks):

a) **Signal Amplification Mechanism** (3 marks)

**Definition**: Signal amplification (সংকেত বর্ধন) = exponential increases in signal molecules at each layer of cascade

**Amplification Factors at Each Step**:

```
STARTING SIGNAL: 1 epinephrine molecule (nM blood concentration)
│
├─ RECEPTOR LAYER: 1 activated β-adrenergic receptor → 10 receptor-G-protein interactions
└─ AMPLIFICATION FACTOR: ×10
│
├─ G-PROTEIN LAYER: 10 activated G-proteins → 100 adenylyl cyclase enzymes activated
└─ AMPLIFICATION FACTOR: ×10 (each G-protein activates 10 adenylyl cyclases on average)
│
├─ ADENYLYL CYCLASE LAYER: 100 active adenylyl cyclases → 1000 cAMP molecules/sec/enzyme
│  (each enzyme has Vmax ~1000 molecules/sec)
│  Total cAMP produced: 100,000 molecules in seconds
└─ AMPLIFICATION FACTOR: ×1000 (catalytic rate of enzyme)
│
├─ cAMP LAYER: 100,000 cAMP → PKA activation via cooperative binding
│  (each Regulatory subunit binds 2 cAMP molecules in cooperative fashion)
│  ~10,000 PKA catalytic subunits freed
└─ AMPLIFICATION FACTOR: ×10 (catalytic multiplicity + partial cooperative activation)
│
├─ PKA LAYER: 10,000 PKA → 1,000,000 phosphorylation events (each PKA phosphorylates ~100 substrate molecules)
└─ AMPLIFICATION FACTOR: ×100 (Vmax of kinase ~100 molecules/sec per active site)
│
FINAL AMPLIFICATION: 1 → 10 → 100 → 100,000 → 1,000,000 ← CELLULAR RESPONSE
TOTAL AMPLIFICATION FACTOR: ~10,000,000 fold (10⁷)

BIOLOGICAL SIGNIFICANCE:
Allows detection of hormone concentrations as low as 1-10 nM
Produces cellular response measurable in seconds
Enables dramatic energy mobilization from tiny hormonal stimulus
```

**Amplification Table**:

| Step | Input | Output | Multiplication | Cumulative |
|------|-------|--------|-----------------|----------|
| 1. Ligand-receptor | 1 hormone | 10 G-proteins | ×10 | 10 |
| 2. G-protein activation | 10 Gα-GTP | 100 adenylyl cyclase | ×10 | 100 |
| 3. Second messenger | 100 adenylyl cyclase | 100,000 cAMP | ×1,000 | 100,000 |
| 4. Effector activation | 100,000 cAMP | 10,000 PKA | ×10 (cooperative) | 1,000,000 |
| 5. Substrate phosphorylation | 10,000 PKA | 1,000,000+ phosphorylation events | ×100+ | **10,000,000+** |

b) **Comparison: Linear vs Exponential Amplification** (2 marks)

**Linear Amplification** (রৈখিক বর্ধন):
• Each step adds same number of molecules
• 1→11→21→31 (+ 10 each step)
• Total after 4 steps: ~30
• Example: Some kinase cascades where substrate is limiting

**Exponential Amplification** (সূচকীয় বর্ধন) — WHAT HAPPENS IN GPCR:
• Each step multiplies previous level
• 1→10→100→1000 (×10 each step)
• Total after 4 steps: ~1000
• Ratio: Exponential/Linear = 1000/30 = **33× more signal**
• Example: GPCR-cAMP-PKA cascade

**In Biology**: GPCR cascades use EXPONENTIAL to achieve massive responses from tiny stimuli

c) **Biological Advantage of Amplification** (2 marks)

1. **SENSITIVITY** (সংবেদনশীলতা):
   • Hormone present at nM concentrations in blood
   • Without amplification: need mM levels (organs would see constant background noise)
   • With amplification: detect pM-nM range (allows fine-tuning)
   
2. **SPEED** (দ্রুততা):
   • Amplification at enzymatic steps (not protein synthesis)
   • Signal spreads in seconds (vs hours for transcription)
   • Allows instant fight-or-flight response
   
3. **DYNAMIC RANGE** (গতিশীল পরিসীমা):
   • Small changes in hormone → large cellular response
   • Cell can respond to 10-fold changes in hormone level
   • Maintains responsiveness across wide range
   
4. **COST-EFFICIENCY** (খরচ কার্যকারিতা):
   • Cell doesn't need massive amounts of receptor
   • Single receptor can activate dozens of downstream molecules
   • Saves energy on protein synthesis

📚 References: [Alberts Ch.15, "Signal Amplification"] + [Lehninger Ch.12, "Cascade Kinetics"]

================================================================

[Q016] Gβγ Dimer Signaling & Independent Function (2019, 10 marks)

🎯 KEYWORD BREAKDOWN:
• "Gβγ dimer" = NOT just a Gα inhibitor! Independent signaler!
• "Effectors" = PLC, ion channels, PI3K
• "Independence" = can signal when Gα-GTP is still active

📝 MNEMONIC:
🔡 "BETA-GAMA-SIGNALS" = Both signal independently ; ETA-activated ion channels, TAlpha-inhibited channels

✍️ COMPREHENSIVE SOLUTION (10 marks):

a) **Gβγ Sub-complex Structure; Effectors & Release Mechanism** (5 marks)

**Structure** (গঠন):

Gβγ = inseparable dimer (NOT separate proteins!)

1. **Gβ Subunit** (~36 kDa):
   • Seven-bladed β-propeller structure (β1-β7 blades)
   • Each blade = 4-stranded β-sheet
   • Creates wheel-like shape with central channel
   • Interaction surface: Contacts Gγ on one face, holds Gα-GDP on opposite face

2. **Gγ Subunit** (~8 kDa):
   • Extended helix-like structure (intertwines through Gβ propeller)
   • ~5 different γ isoforms in humans (γ1-5)
   • γ-isoform determines some functional specificity
   • Prenylated (geranylgeranylated) — helps anchor to membrane

3. **Gβγ Complex**:
   • Complementary interface: α-helix of Gγ fits into grooves of Gβ propeller
   • Extremely stable (NEVER dissociate under normal conditions!)
   • Acts as single functional unit

**Effectors Activated by Gβγ** (Gβγ সক্রিয়করণের লক্ষ্য):

| Effector | Mechanism | Cell Type | Response |
|----------|-----------|-----------|----------|
| **PLC-β** | GTPase domain binds Gβγ directly | Heart, neurons | ↑ IP₃, DAG → inositol signaling |
| **Ion Channels (K⁺)** | Direct activation by Gβγ | Heart, neurons | Hyperpolarization (↓ excitability) |
| **Ion Channels (Ca²⁺)** | Inhibition by Gβγ | Neurons | ↓ Ca²⁺ influx (↓ neurotransmitter release) |
| **PI3K-γ** | Regulatory subunit binds Gβγ | T-cells, leukocytes | ↑ PIP₃ → cell migration |
| **GIRK Channels** | G-protein inactivated K⁺ channels | Heart, smooth muscle | Direct gating by Gβγ |
| **Adenylyl cyclase** | Inhibition (some isoforms) | Brain, heart | Negative regulation of cAMP |

**Release Mechanism** (মুক্তি প্রক্রিয়া):

```
INACTIVE STATE:
Gα-GDP—Gβγ complex associated (all three bound together)
  • Gα-GDP C-terminus contacts Gβγ N-terminal regions
  • Gβγ stably positioned but quiescent
  • Gβγ does NOT interact with effectors (blocked by Gα-GDP)

GPCR ACTIVATION:
Receptor acts as GEF → GDP leaves Gα
GTP enters Gα pocket → Gα conformational change
Switch regions I & II move

GΒΓ RELEASE:
Gα-GTP undergoes major conformational change:
  • Switch II loop moves 7 Angstroms
  • Releases one-third of Gβγ contact interface
  • Dissociation rate increases ~1000 fold
  • Gβγ dimer physically uncouples from Gα-GTP
  • BUT: Gα-GTP is still membrane bound (via N-terminal lipidation)
  • Gβγ is now FREE TO DIFFUSE

FREED GBγ SIGNALING:
  • Gβγ migrates laterally in membrane
  • Encounters and activates nearby effector proteins
  • Can activate multiple distinct effectors (not just one like Gα)
  • Independent of Gα-GTP activity!

RE-COUPLING (termination):
GTP hydrolysis by Gα (intrinsic or RGS-catalyzed)
Gα-GDP reforms (conformational change reverses)
Gβγ re-associates with newly formed Gα-GDP
Signal OFF
```

b) **Functional Significance of Gβγ Independent Signaling** (3 marks)

**Biological Significance** (জৈবিক তাৎপর্য):

1. **DUAL SIGNAL FROM ONE GPCR** (একটি GPCR থেকে দ্বিগুণ সংকেত):
   
   • Traditional view: 1 GPCR → 1 Gα-GTP → 1 pathway (e.g., cAMP)
   • Reality: 1 GPCR → 2 signals:
     - Gα-GTP → activates adenylyl cyclase → ↑ cAMP
     - Gβγ → activates K⁺ channel → hyperpolarization
   
   Result: **TWO DIFFERENT cellular responses from ONE receptor activation**
   
   Example: M2 muscarinic GPCR on cardiac cells:
   • Gαi → ↓ cAMP → ↓ heart rate (expected)
   • BUT ALSO: Gβγ → ↑ K⁺ channel → ↑ hyperpolarization → ↓ heart rate even MORE
   • Both effects are needed for full cardiac slowing!

2. **OPPOSING EFFECTS BALANCE RESPONSE** (বিপরীত প্রভাব ভারসাম্য):
   
   Some pathways show Gα vs Gβγ opposition:
   • Gα-GTP activates adenylyl cyclase (↑ cAMP)
   • Gβγ inhibits adenylyl cyclase (↓ cAMP)
   
   Net effect = controlled cAMP increase (not runaway)
   Allows fine-tuning of amplitude

3. **INTEGRATION OF MULTIPLE INPUTS** (একাধিক ইনপুট সংহত করা):
   
   Different GPCRs release Gβγ:
   • β-adrenergic GPCR → Gαs + Gβγ₁ → cAMP + some K⁺ opening
   • M2 muscarinic GPCR → Gαi + Gβγ₂ → lower cAMP + strong K⁺ opening
   
   Different Gβγ combinations (β-isoform × γ-isoform):
   • Gβ1γ1 activates different effectors than Gβ1γ3
   
   Result: **Cell can encode WHICH GPCR activated by signature of effector activation**

4. **SPATIAL SPECIFICITY** (স্থানিক নির্দিষ্টতা):
   
   • Gβγ remains associated with membrane (not diffusible like cAMP)
   • Activates membrane-bound effectors (ion channels, PI3K)
   • Creates localized signaling domains
   • Protects signaling from being "diluted" by cytoplasmic volume

c) **Examples: Gβγ Signaling in Specific Cells** (2 marks)

**CARDIAC MYOCYTES** (হৃৎ পেশী কোশ):

Acetylcholine → M2 muscarinic GPCR:
1. Gαi-GTP → ↓ adenylyl cyclase → ↓ cAMP → ↓ PKA activity
2. Gβγ → opens GIRK (K-Ir3.1) K⁺ channels → K⁺ efflux → hyperpolarization
3. Result: ↓ pacemaker frequency (bradycardia), ↓ AV conduction

WITHOUT Gβγ contribution:
• Muscarinic would only lower cAMP (modest effect)
• With Gβγ K⁺ channel activation: POWERFUL hyperpolarization
• Combined: both cAMP lowering + hyperpolarization = large ↓ HR

**NEURONAL CELLS** (স্নায়ু কোশ):

GABA_B GPCR (inhibitory):
1. Gαi-GTP → ↓ cAMP
2. Gβγ → closes Ca²⁺ channels → ↓ neurotransmitter release
3. Gβγ → opens K⁺ channels → hyperpolarization
4. Result: Strong inhibition (presynaptic + postsynaptic)

**T-LYMPHOCYTES** (টি-লসিকা):

Chemokine receptor GPCR (e.g., CCR5):
1. Gαi reduces cAMP
2. Gβγ → activates PI3K-γ → ↑ PIP₃ → ↑ Akt → cell migration
3. Result: **Gβγ is PRIMARY driver of T-cell migration** (not Gα!)

If only Gα worked: T-cells couldn't migrate properly to infection sites
Gβγ role is CRITICAL for immune function

📚 References: [Alberts Ch.15, "Gβγ Signaling"] + [Lehninger Ch.12, "Independent Gβγ Functions"]

================================================================

[Q017] G-protein GTPase Activity & Signal Termination (2013, 10 marks)

🎯 KEYWORD BREAKDOWN:
• "GTPase activity" = intrinsic hydrolysis of GTP by Gα
• "Termination" = how signal switches OFF
• "RGS" =  regulators (catalytic accelerators)

📝 MNEMONIC:
🔡 "GTP-HYDRO-RGS" = GTP dissociates to GDP; HYdrolysis turns off Reaction; RGS accelerator system

✍️ COMPREHENSIVE SOLUTION (10 marks):

a) **Intrinsic GTPase Activity Feature; Termination Mechanism** (4 marks)

**Intrinsic GTPase Activity** (অন্তর্নিহিত GTPase কার্যকলাপ):

Definition: Gα protein has inherent ability to hydrolyze GTP to GDP + Pi (slow but reliable)

```
CHEMICAL REACTION:
GTP + H₂O  →[Gα enzyme] GDP + Pi

Key features:
• NOT dependent on other proteins (intrinsic)
• Measurable without RGS: t½ ~10-30 seconds
• Kinetic parameters: Vmax ~0.1 sec⁻¹, Km ~0.1 mM ATP
• Provides SELF-LIMITING signal (automatic turn-off)

WHY SELF-LIMITING IS IMPORTANT (নিজে-সীমিত কেন গুরুত্বপূর্ণ):
• Even if hormone keeps binding receptors
• Gα will eventually run out of GTP (converts to GDP)
• Signal naturally decays (no additional "off-switch" needed)
• Allows cells to adapt even with continuous stimulus
• Prevents runaway signaling
```

**Mechanistic Details**:

```
STEP 1: GTP-BOUND STATE
Gα-GTP (active):
  • Switch I & II regions positioned "on"
  • Effector binding possible
  • Gβγ dissociated

STEP 2: NUCLEOPHILIC ATTACK (Water activation)
Glutamine-61 (Q61) in Gα:
  • Polarizes water molecule (H₂O)
  • Water becomes nucleophile (partial negative charge on oxygen)
  • Water hydrogen bonds to Q61 side chain carboxyl

STEP 3: PHOSPHORYL TRANSFER
Water attacks γ-phosphate of GTP:
  • Forms pentavalent phosphorus intermediate (PO₅ transient)
  • P-O bond to β-phosphate breaks
  • GTP → GDP + Pi

STEP 4: PRODUCT RELEASE
  • Pi released first (product inhibition is low)
  • GDP remains bound to Gα
  • Gα-GDP conformation shifts (Switch regions return to "off")

STEP 5: RE-COUPLING
  • Gα-GDP now has HIGH affinity for Gβγ
  • Gβγ re-associates immediately
  • Signal OFF (receptor cannot reactivate Gα-GDP efficiently without new GTP)
```

**Signal Termination Cascade**:

| Event | Time | Process |
|-------|------|---------|
| Hormone removed | t=0 | GPCR stops activating G-proteins |
| Existing Gα-GTP continues signaling | 0-5 sec | Intrinsic GTPase active |
| GTP → GDP hydrolysis | 5-30 sec | Accumulating Gα-GDP |
| cAMP still present | 5-30 sec | Persisting PKA activation |
| PDE degrades cAMP | 30-60 sec | cAMP → AMP degradation |
| PKA loses cAMP | 30-60 sec | PKA catalytic subunit inhibited |
| **Full signal termination** | **30-60 sec** | **Cellular response ends** |

b) **Rate Enhancement by RGS Proteins (Regulators of G-protein Signaling)** (3 marks)

**RGS Act as GAPs** (GTPase-Activating Proteins):

Definition: RGS proteins bind Gα-GTP and accelerate its GTPase activity

```
INTRINSIC RATE (no RGS):
  • Gα GTPase: k_cat ~0.1-0.3 sec⁻¹
  • Signal duration: 10-30 seconds

WITH RGS PROTEIN:
  • RGS binding: High affinity for Gα-GTP (Kd ~1-10 nM)
  • Gα GTPase accelerated: k_cat ~10-100 sec⁻¹
  • Signal duration: 1-5 seconds
  • ACCELERATION FACTOR: 50-1000 fold!
```

**RGS Mechanism** (প্রক্রিয়া):

```
Step 1: RGS RECOGNITION
  • RGS binds ONLY Gα-GTP (not Gα-GDP)
  • Has specific recognition sites for Switch regions
  • Binding is reversible (off-rate ~1 sec⁻¹)

Step 2: TRANSITION STATE STABILIZATION
  • RGS positions catalytic residue (Q61) correctly
  • Stabilizes penta-valent phosphate intermediate
  • Lowers activation energy by ~5 kcal/mol
  • Result: Rate increases 50-1000 fold

Step 3: PRODUCT RELEASE FACILITATION
  • After hydrolysis, RGS dissociates from Gα-GDP
  • Allows Gβγ reassociation
  • Signal cleanly terminated

WHY RGS SELECTIVITY MATTERS:
• Different Gα proteins have different intrinsic rates
• RGS proteins are selected for specific Gα
• Gαs-mediated signals (adrenergic) use RGS4, RGS2 (fast dissociation needed)
• Gαi-mediated signals (inhibitory tone) use RGS7, RGS11 (slower off-switch)
• Result: Cell tunes signal duration per pathway
```

**RGS Family Table**:

| RGS Type | Gα Specificity | GTPase Acceleration | Typical Signal Duration | Function |
|----------|------------------|-------------------|-----------------------|----------|
| **RGS1-3** | Gαs, Gαq (general) | 50-100 fold | 1-5 seconds | Broad inhibition |
| **RGS4, RGS8** | Gαq (best) | 100-200 fold | 1-3 seconds | Strong suppression |
| **RGS7, RGS11** | Gαi, Gαo, Gαq | 50-100 fold | 2-5 seconds | Neural/immune fine-tuning |
| **RGS-Z** | Gαi/o | 50 fold | 5-10 seconds | Slower signaling |
| **p115-RGS** | Gα12/13 | Variable | 10-20 seconds | Rho pathway timing |

c) **Pathophysiology: GTPase Defects & Cancer** (2 marks)

**What Happens When GTPase Breaks** (GTPase ভাঙ্গলে):

Oncogenic Ras mutations (G-protein similar to Gα):

1. **Ras-G12V (glycine-12 valine mutation)**:
   • Replaces Alo-146 analogue
   • Prevents catalytic glutamine (Q61 equivalent) from positioning correctly
   • GTPase activity LOST completely
   • Ras-GTP never hydrolyzes to Ras-GDP
   • Signal is **CONSTITUTIVELY ON**
   • Result: Constant growth factor signaling → **UNCONTROLLED CANCER**

2. **Loss of RGS Function**:
   • Rare RGS1 mutations in lymphomas
   • RGS1 can't accelerate Gα GTPase
   • Signals last 10-100× longer than normal
   • Excessive lymphocyte activation
   • Result: **LYMPHOID CANCERS**

3. **Pertussis Toxin (Bacterial Infection)**:
   • Listeria monocytogenes secretly uses G-proteins for infection!
   • Pertussis toxin: inactivates Gαi by ADP-ribosylation
   • Cells can't shut down growth signals
   • Result: Excessive cAMP → whooping cough inflammation

**Clinical Significance**:
• ~30% of cancers have Ras mutations (permanently active → cancer)
• ~10% of cancers have NF1 mutations (NF1 = RGS-like regulator → lost braking → cancer)
• Understanding intrinsic GTPase is KEY to cancer therapy
• KRAS G12V can ONLY be targeted by blocking downstream effectors (no way to accelerate GTPase that's broken!)

📚 References: [Alberts Ch.15, "GTP Hydrolysis"] + [Lehninger Ch.12, "RGS Proteins"]

================================================================

[Q018] cAMP: Second Messenger & Cellular Functions (2017, 12 marks)

🎯 KEYWORD BREAKDOWN:
• "cAMP" = cyclic adenosine monophosphate = adenylyl cyclase product
• "Second messenger" = relay between receptor + effector
• "Functions" = multiple endpoint (gene expression + metabolism)

📝 MNEMONIC:
🔡 "cAMP-PKA-GEAR" = cyclic AMP - Protein Kinase A - Gene Expression, Adenylyl cyclase Regulation, Epinephrine Response

✍️ COMPREHENSIVE SOLUTION (12 marks across 4 parts):

a) **Structure, Synthesis & Degradation of cAMP** (2 marks)

**Structure** (গঠন):

```
cyclic-Adenosine-Monophosphate (cAMP):

    Adenosine ring:
    ┌─ Purine base (same as in ATP, ATP, cATP...)
    │
    ├─ Ribose sugar (5-carbon)
    │  • 3'-OH on third carbon of ribose
    │  • 5'-phosphate terminus
    │
    └─ Phosphate group (single, not triple!)
       • Forms CYCLIC bond: 3'-OH bonded to 5'-phosphate
       • Result: "Cyclic" phosphodiester bond
       • Molecular weight: 329 Da (small!)

Formula: C₁₀H₁₂N₅O₆P (adenosine ring + 1 phosphate)
Differs from AMP: Cyclic vs linear (3'→5' phosphodiester in cAMP)
Structure in cells: EXISTS AS Mg²⁺-cAMP COMPLEX (binary state)
```

**Synthesis** (সংশ্লেষণ):

```
ENZYME: Adenylyl cyclase (also adcyclase, AC)
Reaction:
  ATP + adenylyl cyclase → cAMP + PPi (phosphodiester linkage formed)
  
Activation:
  • GPCR-Gαs-GTP activates adenylyl cyclase
  • Active site position shifts (conformational change)
  • ATP ATP can now access catalytic pocket (from Gαs-GTP positioning)
  
Kinetics:
  • Vmax ~1000 cAMP/second per active adenylyl cyclase molecule
  • Km ~1-10 μM (ATP abundant, so always saturated)
  • Result: Rapid synthesis (cAMP levels ↑ within seconds of GPCR activation)

Localization:
  • Adenylyl cyclase is MEMBRANE-BOUND (contains 12 transmembrane domains!)
  • Positioned near plasma membrane where Gαs-GTP can reach
  • This ensures local cAMP production (elevated near receptor)

Multiple Isoforms:
  • ~9 different adenylyl cyclase isoforms in mammals
  • AC1, AC3, AC5 = brain-predominant (neural cAMP signaling)
  • AC2, AC4 = broadly expressed
  • Each has different Gα preference (AC1 loves Gαs more than Gαi)
```

**Degradation** (অবক্ষয়):

```
ENZYME: Phosphodiesterase (PDE) — specifically PDE4 for cAMP
  • ~11 different PDE isoforms exist (PDE1-PDE11)
  • PDE4 is specializing cAMP hydrolyze (not GMP, not cGMP)
  • Part of PDE4A, PDE4B, PDE4C, PDE4D families
  
Reaction:
  cAMP + PDE4 → AMP (cleaves cyclic phosphodiester bond → linear AMP)
  
Kinetics:
  • Vmax ~1000 cAMP molecules/second per active PDE
  • Km ~0.5-5 μM (cAMP dependent)
  • Critical: Km < [cAMP] means PDE is saturated (running at max speed)
  • Result: cAMP degradation matches (or exceeds) synthesis

Regulation of PDE:
  • PKA phosphorylates PDE4 → INCREASES degradation rate
  • NEGATIVE FEEDBACK: cAMP↑ → PKA↑ → PKA phosphorylates PDE → ↑ PDE activity → ↓ cAMP
  • Result: Signal self-limits automatically!
  
Half-Life of cAMP:
  • Without degradation: Would accumulate indefinitely
  • Actual t½ of cAMP: ~1-5 seconds in most cells
  • Allows rapid signal termination when synthesis stops
  • Enables signal "pulsing" (ON-OFF-ON cycles possible)
```

**Synthesis-Degradation Balance Table**:

| Condition | Adenylyl Cyclase Rate | PDE4 Rate | cAMP Equilibrium | Effect |
|-----------|---------------------|-----------|-----------------|--------|
| No stimulus | Basal (~100/sec) | Basal (~100/sec) | Low (resting) | No signal |
| GPCR activated | ↑↑ (~10,000/sec) | Basal (~100/sec) | ↑ ++ (5-10 min) | cAMP RISE |
| Full signal | ~10,000/sec | ~10,000/sec | Plateau | Sustained effect |
| PKA feedback | ~10,000/sec | ↑↑ (40,000/sec) | Falls | Self-limiting |
| Signal removed | Basal (~100/sec) | ↑↑ (40,000/sec) | Rapid ↓ | Quick OFF-switch |

b) **cAMP as Second Messenger: Role & Functions** (4 marks)

[See Q009a, Q012 — cAMP amplifies signal, propagates through cell, acts on many targets]

**Primary Functions** (প্রধান কাজ):

```
1. SIGNAL AMPLIFICATION (সংকেত বর্ধন)
   • Single activated adenylyl cyclase produces 1000s of cAMP/second
   • cAMP then activates many PKA molecules
   • Net: 1 hormone → 1 receptor → millions of PKA → millions of phosphorylations

2. SIGNAL SPREADING (সংকেত ছড়ানো)
   • cAMP diffuses through cytoplasm
   • Reaches compartments FAR from original receptor
   • Activates PKA everywhere in cell
   • BUT: Also tethered locally (local cAMP signaling domains exist)

3. TEMPORAL CONTROL (সময় নিয়ন্ত্রণ)
   • cAMP has SHORT half-life (1-5 seconds)
   • Rapid synthesis (seconds) + rapid degradation (seconds)
   • Allows fine-tuned temporal control
   • Can generate oscillations (cAMP pulses)

4. INTEGRATION POINT (সমন্বয় পয়েন্ট)
   • Multiple GPCRs feed into cAMP pathway
   • β-adrenergic → Gαs → cAMP↑
   • M2 muscarinic → Gαi → cAMP↓
   • Net response = sum of competing signals
   • Cell integration/decision-making at cAMP level
```

c) **Second Messenger Properties Demonstrated by cAMP** (3 marks)

[See Q009b detailed comparison — cAMP exemplifies all second messenger properties:
1. Small size (329 Da) — diffuses freely
2. Rapid synthesis (not transcription-dependent)
3. Rapid degradation (via PDE4)
4. High affinity for PKA (cooperative binding)
5. Amplifies signal
6. Reversible
]

d) **Physiological Responses to cAMP** (3 marks)

**ACUTE RESPONSES** (তাৎক্ষণিক প্রতিক্রিয়া) — Seconds to minutes via PKA phosphorylation:

```
MUSCULAR SYSTEM:
  • PKA phosphorylates glycogen phosphorylase kinase
  • Glycogen phosphorylase becomes active
  • Glycogen → glucose (fast energy source mobilization)
  • Skeletal: ↑ glucose for fight/flight
  • Cardiac: ↑ glucose for increased heart rate

CARDIOVASCULAR:
  • PKA phosphorylates ryanodine receptor (Ca²⁺ channel in SR)
  • ↑ Ca²⁺ release → ↑ Heart contractility
  • β1-adrenergic: "Beat harder!" (↑ cardiac output)
  
  • PKA phosphorylates phospholamban
  • Phospholamban releases SERCA2 (Ca²⁺ pump inhibition lifted)
  • ↑ Sarcoplasmic reticulum Ca²⁺ reuptake (shorter relaxation time)
  • Result: ↑ Heart rate (HR ↑ from 70→150 bpm in stress)

METABOLIC:
  • Glycogen breakdown (hepatocytes)
  • Adipose tissue: PKA phosphorylates hormone-sensitive lipase → fatty acid mobilization
  • Pancreas: ↑ Glucagon secretion (via β-cells detecting glucose drop)
  • Overall: ENERGY MOBILIZATION (fight/flight response)

NEURAL:
  • PKA phosphorylates ion channels → altered neuronal excitability
  • Some neurons: ↑ excitability (↑ AP frequency)
  • Other neurons: ↓ excitability (hyperpolarization)
  • Grunts/screams during fight/flight (altered voice control)
```

**DELAYED RESPONSES** (বিলম্বিত প্রতিক্রিয়া) — Minutes to hours via gene expression:

```
CREB Pathway (cAMP Response Element Binding):
  1. PKA phosphorylates CREB transcription factor (Ser133)
  2. Phosphorylated CREB enters nucleus
  3. CREB binds CRE DNA sequences (promoters of metabolic genes)
  4. Recruits CBP (CREB-binding protein) = histone acetyltransferase
  5. Acetylates histones → chromatin opens → genes transcribed
  
Gene products activated:
  • c-fos, c-jun (immediate early genes, cellular "alarm" markers)
  • PGC-1α (mitochondrial biogenesis → more ATP production)
  • Tyrosine hydroxylase (dopamine synthesis → alertness)
  • Gluconeogenic enzymes (PEPCK, G6Pase → prolonged glucose production)
  
Timeline: Gene transcription starts ~30 min, proteins made ~2 hours
Duration: Hours to days (proteins stable, transcription sustained)
```

**FEEDBACK REGULATION** (প্রতিক্রিয়া নিয়ন্ত্রণ):

```
Negative feedback via PDE upregulation:
  • High cAMP → ↑ PKA activity
  • PKA phosphorylates PDE4 → ↑ PDE4 activity
  • ↑ PDE4 degrades remaining cAMP faster
  • cAMP drops → PKA activity falls
  • Over-stimulation prevented automatically

Alternative negative feedback via receptor desensitization:
  • Sustained high cAMP
  • β-arrestin proteins accumulate at receptors
  • β-arrestin blocks G-protein coupling
  • GPCR loses ability to activate G-proteins
  • Signal OFF even if ligand still present
  • Adaptation (cell becomes insensitive to background stimulus)
```

📚 References: [Alberts Ch.15, "cAMP as Second Messenger"] + [Lehninger Ch.12, "cAMP Metabolism"]

================================================================
[Q019-Q022 QUESTIONS QUEUED FOR NEXT FILE - CONTINUING BATCH A COMPLETION]
================================================================
