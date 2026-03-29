================================================================
[Q023] Growth Factor Signaling & Receptor Tyrosine Kinases (2014, 14 marks)

🎯 KEYWORD BREAKDOWN:
• "Growth factor signaling" = extracellular ligand → intracellular proliferation signals
• "RTK" = Receptor Tyrosine Kinase = has intrinsic kinase activity (unlike GPCR)
• "Autophosphorylation" = kinase phosphorylates itself (transmit activation)

📝 MNEMONIC:
🔡 "RTK-AUTO-PAIR" = Receptor Tyrosine Kinase - AUTOphosphorylation - dimerization activation Pair

✍️ COMPREHENSIVE SOLUTION (14 marks across 4 parts):

a) **Growth Factor Definition & Role; Characteristics** (2+2 = 4 marks)

**Definition** (সংজ্ঞা):

Growth factor (বৃদ্ধি উপাদান) = Extracellular signaling protein that promotes cell proliferation, survival, differentiation, or migration

Biological role (জৈবিক ভূমিকা):
• Stimulus for cell division (S-phase entry)
• Prevention of apoptosis (survival signal)
• Cell migration (wound healing, immune cell trafficking)
• Differentiation (cell specialization)
• Tissue remodeling (angiogenesis, ECM alterations)

**Characteristics** (বৈশিষ্ট্য):

| Feature | Description | Biological Significance |
|---------|-------------|------------------------|
| **Secretion** | Paracrine/endocrine signal | Reach distant cells or local neighborhood |
| **Binding** | High affinity (Kd pM-nM) | Detect low hormone concentrations |
| **Specificity** | Receptor-selective | Prevent crosstalk between pathways |
| **Stability** | Hours-days (stable in serum) | Sustained signal possible |
| **Potency** | Nanomolar concentrations effective | Small amounts cause large cellular effects |
| **Examples** | EGF, FGF, PDGF, VEGF, NGF | Different tissues, different effects |
| **Evolution** | Conserved across metazoans | Critical for multicellular organization |

b) **RTK Structure & Mechanism; Difference from GPCR** (4 marks)

**RTK Structure** (সংরচনা):

```
Single polypeptide with 3 regions:

1. EXTRACELLULAR DOMAIN:
   • Growth factor binding pocket
   • Typically 500-1000 amino acids
   • Shape: can bind a specific growth factor (EGF → EGFR, FGF → FGFR, etc.)
   • Specificity: Lock-and-key interaction with ligand

2. TRANSMEMBRANE DOMAIN:
   • 1 hydrophobic α-helix
   • Spans plasma membrane once (unlike GPCR's 7 times!)
   • Connects extracellular to intracellular

3. INTRACELLULAR DOMAIN:
   • Tyrosine kinase catalytic domain
   • ATP-binding pocket
   • Substrate-binding pocket (tyrosine residues)
   • Regulatory region
   • Autophosphorylation sites (tyrosines)
```

**RTK vs GPCR Mechanisms** (RTK বনাম GPCR পার্থক্য):

| Feature | RTK | GPCR |
|---------|-----|------|
| **Structure** | Single TM helix | 7 TM helices |
| **Kinase activity** | ✅ INTRINSIC (part of receptor) | ❌ NO (recruits external kinases) |
| **Ligand binding** | Extracellular N-terminus | Between TM helices |
| **G-protein coupling** | ❌ NO G-protein involved | ✅ YES (Gαs, Gαi, Gαq) |
| **Signal mechanism** | Autophosphorylation → Y-residues → dock proteins | GDP-GTP exchange on G-protein |
| **Signaling speed** | Fast (kinase-mediated) | Medium-fast (G-protein relay) |
| **Duration** | Seconds-minutes (phosphatase) | Seconds-minutes (GTPase) |
| **Amplification** | Via kinase activity | Via G-protein × adenylyl cyclase cascade |
| **Spatial control** | Membrane-proximal | Diffusible second messengers |
| **Termination** | Internalization + phosphatase | Desensitization + GTPase |
| **Example** | EGF → EGFR | Epinephrine → β-adrenergic GPCR |

c) **Autophosphorylation Mechanism & MAPK Activation** (4 marks)

**Autophosphorylation Cascade** (স্ব-ফসফোরিলেশন ক্যাসকেড):

```
STEP 1: LIGAND-INDUCED DIMERIZATION
────────────────────────────────────
Growth factor (e.g., EGF) binds EGFR extracellular domain
EGF is BIVALENT (has 2 receptor binding surfaces)
  OR: Each EGFR monomer exposes hidden dimerization interface when EGF-bound
Result: 2 EGFR molecules now juxtaposed (brought into contact)

STEP 2: TRANS-AUTOPHOSPHORYLATION
────────────────────────────────
Each EGFR's kinase domain phosphorylates the OTHER EGFR's kinase domain
  • EGFR-A kinase domain phosphorylates EGFR-B on specific tyrosine residues
  • EGFR-B kinase domain phosphorylates EGFR-A back
  • "Trans" = one molecule modifying the other (not self-modification)
  • Autophosphorylation creates DOCKING SITES for adapter proteins

Phosphorylated tyrosine residues:
  • Y1068, Y1173, Y1148 (etc., specific to EGFR)
  • Act as "handles" for SH2/SH3 domain proteins to grip

STEP 3: RECRUITMENT OF ADAPTER PROTEINS
──────────────────────────────────────
Phosphotyrosine residues recognized by:
  • SH2 domains ("Src-Homology 2") — bind phosphotyrosine specifically
  • SH3 domains — bind proline-rich sequences

Key adapters:
  1. **Grb2** (GRB2 = Growth factor Receptor Bound 2)
     • 2 SH3 domains (bind proline-rich sequences)
     • 1 SH2 domain (binds phosphotyrosine on EGFR)
     • Acts as bridge between receptor + next kinase

  2. **SOS** (Son-of-Sevenless guanine nucleotide exchange factor)
     • RGD catalytic domain (Ras GEF)
     • Recruited to membrane by Grb2-SH3 binding
     • Now positioned to activate Ras

  3. **Other adapters**: GAB1, IRS-1 (insulin receptor substrate)

STEP 4: RAS ACTIVATION AT MEMBRANE
───────────────────────────────────
SOS (brought to membrane by Grb2) acts on Ras:
  • Ras bound to GDP in resting state (cytoplasm/membrane interface)
  • SOS = Ras GEF (guanine nucleotide exchange factor)
  • SOS catalyzes: Ras-GDP + SOS → GDP leaves, GTP enters
  • Ras-GTP is ACTIVE (small GTPase, like Gα but distinct)
  • Ras-GTP now recruits RAF kinase to membrane

STEP 5: RAF-MEK-ERK CASCADE ACTIVATION
──────────────────────────────────────
RAF kinase (activated by Ras-GTP membrane recruitment):
  • Phosphorylates MEK kinase (dual specificity)
  • MEK now active: phosphorylates ERK (MAP kinase)
  • ERK now active (Thr + Tyr residues phosphorylated)
  • ERK enters nucleus
  • ERK phosphorylates transcription factors (c-fos, c-jun, ELK-1)
  • Gene expression altered (growth genes, differentiation genes)

AMPLIFICATION CASCADE:
1 EGF → 1 EGFR → 10 Grb2 → 10 SOS → 100 Ras-GTP → 1000 RAF → 10000 MEK → 100000 ERK → MASSIVE proliferation signal!

Timeline:
  • EGF binding: Milliseconds
  • EGFR autophosphorylation: ~10 ms
  • Grb2-SOS recruitment: ~100 ms
  • Ras activation: ~100-500 ms
  • ERK activation: ~1-2 seconds
  • c-fos expression: ~5-30 minutes
  • S-phase entry: ~6-12 hours
```

d) **Biological Consequences of RTK Activation** (4 marks)

**Acute Responses** (তাৎক্ষণিক প্রতিক্রিয়া) — minutes via phosphorylation:

```
1. METABOLISM SHIFT:
   • ERK phosphorylates key metabolic enzymes
   • ↑ Glucose uptake (GLUT1 translocation)
   • ↑ Glycolysis (PFK-2 activation)
   • ↑ ATP production (supports biosynthesis)

2. CYTOSKELETAL REARRANGEMENT:
   • PA-activated kinases phosphorylate actin-binding proteins
   • Filament reorganization
   • Cell protrusion for migration (in fibroblasts)
   • OR: Cell rounding for division (in epithelial cells)

3. APOPTOSIS INHIBITION:
   • ERK phosphorylates pro-apoptotic proteins (Bad, BIM)
   • PI3K-Akt pathway activated in parallel → ↑ survival signals
   • Results: Cell survives period of proliferation (prevents suicide)
```

**Delayed Responses** (বিলম্বিত প্রতিক্রিয়া) — hours via gene expression:

```
1. IMMEDIATE EARLY GENES (IEGs):
   • c-fos, c-jun, egr1, atf3
   • Expressed within 15-30 minutes
   • Encode transcription factors
   • These IEG-encoded TFs activate next layer of genes

2. GROWTH-ASSOCIATED GENES:
   • Cyclin D1 (cell cycle progression → S-phase)
   • Cyclin E (S-phase entry)
   • CDKs (cyclin-dependent kinases)
   • DNA polymerase, dTTP synthase (replication enzymes)
   • Result: Cell commits to DNA synthesis

3. METABOLIC ADAPTATION GENES:
   • PGC-1α (mitochondrial biogenesis)
   • Glucose transporter (GLUT1)
   • Glycolytic enzymes
   • Result: Cell prepares energy for biosynthesis

4. DIFFERENTIATION GENES (context-dependent):
   • If growth factor = TGF-β (different RTK context): ↑ Differentiation genes (collagen, smooth muscle actin)
   • If growth factor = EGF (epithelial context): ↑ Survival but not differentiation
   • Cell fate depends on: ligand type + contextual signals + prior developmental state
```

**Cell Fate Determination** (পরিণতি নির্ধারণ):

```
Example: Fibroblast response to different signals

Signal 1: EGF alone
  • ↑ Proliferation (G1→S transition)
  • ↓ Differentiation
  • Cell fate: PROLIFERATION (dividing cells)

Signal 2: TGF-β (alternative ligand, activates different TK receptor)
  • ↑ EMT (epithelial-mesenchymal transition) genes
  • ↑ Collagen, fibronectin production
  • Cell fate: DIFFERENTIATION (myofibroblast phenotype)

Signal 3: EGF + TGF-β together
  • Complex: EGF = growth, TGF-β = differentiation
  • Integration of signals determines outcome
  • Possible: Proliferation WITH differentiation (rare but happens in wound healing)

Signal 4: EGF + withdrawal of nutrients
  • Growth signals (EGF) present, but amino acids scarce
  • mTOR senses amino acid depletion → turns OFF growth despite EGF
  • Cell fate: ARREST (waits for conditions to improve)

Lesson: Single growth factor receptor activation ≠ cell fate determination
  • Context (other signals, metabolic state, developmental history) critical
  • Multiple signals integrated for final decision
```

📚 References: [Alberts Ch.15, "Growth Factor Signaling"] + [Lehninger Ch.12, "RTK Mechanism"] + [Molecular Biology texts on Ras-MAPK cascade]

================================================================

[Q024] MAPK Pathway Activation (2017, 12 marks)

🎯 KEYWORD BREAKDOWN:
• "MAPK" = Mitogen-Activated Protein Kinase = ERK1/2 primarily (also p38, JNK)
• "Cascade" = sequential kinase phosphorylation (RAF→MEK→ERK)
• "Gene expression" = ERK enters nucleus, phosphorylates TFs

📝 MNEMONIC:
🔡 "RAF-MEK-ERK" = Rapid ↑ c-fos - MEK (kinase) - ERK kinase; Activates FOS, Jun regulating

✍️ COMPREHENSIVE SOLUTION (12 marks across 3 parts):

a) **MAPK Pathway Cascade Steps** (4 marks)

[See Q023d detailed MAPK activation mechanism]

**Extended Step-by-Step** (বিস্তারিত ধাপে ধাপে):

```
STEP 1: RAS ACTIVATION (from RTK, described in Q023)
────────────────────
Ras is small GTPase (similar structure to Gα but independent protein)
  • Localized to membrane via C-terminal lipidation (farnesyl group)
  • Switches between GDP-bound (OFF) and GTP-bound (ON) states
  • GTP hydrolysis: intrinsic ~0.1 sec⁻¹ rate
  • GAPs (GTPase-activating proteins) like NF1 accelerate GTPase

STEP 2: RAF KINASE RECRUITMENT TO MEMBRANE
─────────────────────────────────────────
Ras-GTP recruits RAF kinase from cytoplasm to membrane
  • RAF recognizes Ras-GTP (not Ras-GDP) via RAS-binding domain (RBD)
  • RAF protein: ~100 kDa, has regulatory region + kinase domain
  • At membrane, RAF undergoes conformational change
  • Inhibitory domain dissociates from catalytic domain
  • RAF becomes partially active (but not fully)

STEP 3: RAF FULL ACTIVATION (DIMERIZATION)
──────────────────────────────────────────
RAF kinase molecules dimerize on membrane:
  • RAF-A associates with RAF-B (or same RAF homodimerizes)
  • Each RAF phosphorylates the other's kinase domain (trans-phosphorylation)
  • Phosphorylation relieves autoinhibition
  • FULLY ACTIVE RAF ready to phosphorylate MEK

WHY DIMERIZATION NEEDED?
  • Single RAF partially active only
  • Dimerization guarantees strong activation
  • Prevents spurious signaling from single RAF-GTP contact
  • Acts as THRESHOLD (must have sufficient Ras-GTP to recruit enough RAF for dimer formation)

STEP 4: MEK PHOSPHORYLATION BY RAF
────────────────────────────────
RF kinase (now active) phosphorylates MEK (also called MAP2K = MAPK kinase):
  • MEK = dual-specificity kinase (phosphorylates both Thr and Tyr)
  • RAF phosphorylates MEK on Ser residues
  • Phosphorylation activates MEK (removes autoinhibition)
  • Active MEK is NOW ready to phosphorylate ERK

STEP 5: ERK PHOSPHORYLATION BY MEK
──────────────────────────────────
Active MEK phosphorylates ERK (ERK1/2 = MAP kinase)
  • MEK is DUAL-SPECIFIC: phosphorylates ERK on both Thr and Tyr residues
  • In activation loop: Thr-Tyr-Gly (TEY motif)
  • Both Thr + Tyr must be phosphorylated for FULL ERK activation
  • Singly phosphorylated ERK (Thr or Tyr only) = partially active

ACTIVATION LOGIC:
  • Thr phosphorylation alone: ~10% activity
  • Tyr phosphorylation alone: ~5% activity
  • Both Thr + Tyr: ~100% activity
  
  Why: Dual phosphorylation repositions catalytic residues correctly
       Single phosphorylation = partial conformational change only

STEP 6: NUCLEAR TRANSLOCATION OF ERK
─────────────────────────────────────
Fully active ERK (doubly phosphorylated):
  • Leaves S-phase of cell cycle
  • Recognizes nuclear localization signals (NLS) on itself or binding partners
  • Interacts with nucleoporins
  • Enters nucleus through nuclear pores (active transport)
  • Phosphorylates transcription factors inside nucleus

STEP 7: TRANSCRIPTION FACTOR PHOSPHORYLATION
─────────────────────────────────────────────
ERK phosphorylates multiple transcription factors:

  1. ELK-1 (ETS domain transcription factor)
     • ERK phosphorylates Ser residues in ELK-1
     • Phosphorylated ELK-1 binds SRE (serum response element) DNA sequences
     • ELK-1 recruits coactivators (p300 histone acetyltransferase)
     • Gene transcription ↑ (targeted genes have SRE)

  2. c-FOS / c-JUN proteins (if already made)
     • Usually already present from rapid IEG transcription
     • ERK phosphorylates c-FOS and c-JUN
     • Phosphorylation enhances c-FOS/c-JUN transcriptional activity
     • c-FOS/c-JUN form AP-1 complex
     • AP-1 drives growth genes & differentiation genes

  3. CREB (alternative to cAMP-PKA pathway)
     • ERK can phosphorylate CREB (different phosphorylation site than PKA)
     • Leads to CRE-mediated gene expression
     • Overlaps with cAMP pathway (integration point!)

STEP 8: SIGNAL TERMINATION
────────────────────────
Dual-specificity phosphatases (DUSP/MKP families) dephosphorylate ERK:
  • DUSP1 (MKP1 = MAP Kinase Phosphatase-1)
  • Removes Thr and Tyr phosphates from ERK
  • ERK returns to inactive state (dephosphorylated)
  
  Timing: ERK activated ~2-5 seconds, peak activity ~30 seconds, OFF by 2-5 minutes
  
  Feedback: High ERK → ERK phosphorylates Elk-1 → Elk-1 promotes c-fos transcription
            c-FOS produces DUSP1 (MKP1 gene transcrip)
            DUSP1 dephosphorylates ERK
            Result: Self-limiting negative feedback

OVERALL TIMELINE:
  ├─ 0 ms: EGF binds EGFR
  ├─ 100 ms: EGFR autophosphorylates
  ├─ 200 ms: Grb2-SOS recruited, Ras activated
  ├─ 500 ms: RAF recruited, dimerizes
  ├─ 1 sec: RAF phosphorylates MEK
  ├─ 2 sec: MEK phosphorylates ERK
  ├─ 3 sec: ERK enters nucleus
  ├─ 5 sec: ERK phosphorylates ELK-1
  ├─ 10 sec: c-fos transcription starts
  ├─ 30 sec: c-FOS protein starting to be made
  ├─ 2 min: Peak c-FOS production
  ├─ 5 min: DUSP1 dephosphorylates ERK
  ├─ 10 min: ERK signal OFF
  └─ 30+ min: Gene expression continues (DUSP1/c-FOS negative feedback establishes new baseline)
```

b) **Different MAPK Pathways (p38, JNK vs ERK)** (4 marks)

**Three Major MAPK Family Members** (তিনটি MAPK):

| Feature | ERK1/2 | p38 | JNK |
|---------|--------|-----|-----|
| **Activation trigger** | Growth factors (EGF, PDGF) | Stress (heat, UV, osmotic) | Stress (TNFα, UV) |
| **Upstream kinase** | RAF-MEK (as above) | MKK3/MKK6 | MKK4/MKK7 |
| **GTPase** | Ras (small GTPase) | Rac/Rho/Cdc42 (small GTPases) | Rac1/Rho1K (small GTPases) |
| **Kinase domain** | Tyrosine kinase | Tyrosine kinase | Tyrosine kinase |
| **Duration** | 5-30 minutes | Minutes to hours | Hours |
| **Main goal** | ↑ Proliferation (G1→S) | ↑ Apoptosis OR ↓ Growth | ↑ Apoptosis OR ↓ Growth |
| **TF targets** | ELK-1, SRF | p53, ATF2, CHOP | c-JUN, ATF2 |
| **Gene outcomes** | Growth genes (cyclin D, E) | Stress response (p21, p27) | Apoptotic genes (BAX, FAS) |
| **Tissue context** | Broadest (all cells) | Immune, epithelial | Immune, neural |
| **RGS-like control** | Feedback via DUSP1 | Feedback via DUSP4, DUSP10 | Feedback via DUSP7 |

**Why Different Responses?**

```
Same MAPK architecture (sequential kinase cascade: A→B→C)
But different inputs (growth factors vs stress signals)
→ Different GTPases activated (Ras vs Rho/Rac)
→ Different intermediate kinases (RAF vs MKK)
→ Different FINAL targets (proliferation genes vs apoptosis genes)
→ Different PHYSIOLOGICAL OUTCOMES

Key insight: Architecture conserved, but CONTEXT determines outcome
```

c) **Feedback Regulation & Signal Termination** (4 marks)

**Negative Feedback Loops** (নেতিবাচক প্রতিক্রিয়া):

```
FEEDBACK LOOP 1: DUSP1 Induction
──────────────────────────────
Active ERK → Phosphorylates ELK-1/c-FOS
  ↓
ELK-1 drives c-fos transcription
  ↓
c-FOS protein made
  ↓
c-FOS (in AP-1 complex) drives DUSP1 gene transcription
  ↓
DUSP1 protein made
  ↓
DUSP1 dephosphorylates ERK
  ↓
ERK becomes INACTIVE
  ↓
c-fos transcription STOPS (no longer driven by active ERK)
  ↓
New equilibrium: Lower baseline of c-fos/c-FOS

Result: Oscillating response
  • First wave: Strong ERK
  • Second wave: Weak ERK (DUSP1-mediated)
  • Further waves: Damping oscillations
  • Eventually: Return to basal state (or low sustained level)

Timeline for feedback:
  • ERK activation: Seconds
  • c-fos transcription: 5-10 seconds
  • c-FOS protein: 1-2 minutes
  • DUSP1 transcription: Coincident with c-fos (both driven by c-FOS)
  • DUSP1 protein: 2-5 minutes
  • ERK dephosphorylation: 5-10 minutes

FEEDBACK LOOP 2: RAF Autoinhibition (Longer-term)
──────────────────────────────────────────────────
Active ERK can phosphorylate RAF itself
  ↓
RAF becomes PHOSPHORYLATED (at inhibitory sites)
  ↓
Phosphorylated RAF: ↓ activity (autoinhibition)
  ↓
MEK no longer activated
  ↓
Cascade breaks
  ↓
Second layer of feedback OFF-switch

This feedback is SLOWER (minutes) but ensures sustained signal doesn't continue indefinitely

FEEDBACK LOOP 3: IRS-1 Negative Feedback
────────────────────────────────────────
ERK phosphorylates IRS-1 (insulin receptor substrate)
  ↓
Phosphorylated IRS-1: ↓ ability to recruit PI3K
  ↓
PI3K signaling reduced
  ↓
Survival signals weakened (Akt less active)
  ↓
Cells become more sensitive to apoptosis during division
  ↓
Prevents runaway proliferation

WHY MULTIPLE NEGATIVE FEEDBACKS?
  1. Temporal layering: Different feedbacks kick in at different times
  2. Robustness: If one feedback fails, others still work
  3. Tunability: Can fine-tune signal amplitude by adjusting feedback strength
  4. Prevents pathology: Without feedbacks → continuous proliferation → cancer!
```

**Phosphatase-Mediated Termination** (ফসফেটেজ দ্বারা বন্ধ):

```
Dual-specificity phosphatases (DUSPs) specifically dephosphorylate MAP kinases
  • DUSP1 (MKP1): primarily ERK-specific
  • DUSP2 (PAC1): p38/JNK-specific
  • DUSP3 (VHR): broad specificity
  • DUSP4, DUSP6: ERK-specific (in nucleus)

Mechanism:
  • Recognizes phosphotyrosine residues
  • Catalytic cysteine attacks phosphate bonds
  • Removes both Thr and Tyr phosphates
  • ERK returns to fully inactive state

Contrast with protein phosphatases (PP1, PP2A):
  • DUSP = FASTER & more specific (milliseconds after peak)
  • PP = slower, general (used for basal housekeeping)
  • Result: ERK termination is RAPID and complete (unlike cAMP PKA signals lasting longer)

Evolutionary significance:
  • Growth signals must turn OFF quickly
  • Prevents uncontrolled proliferation
  • DUSP genes are induced as part of ERK response itself
  • Self-limiting system (built-in safety)
```

📚 References: [Alberts Ch.15, "MAPK Cascade Kinetics"] + [Lehninger Ch.12, "MAP Kinase Regulatory Points"]

================================================================

[Q025] Cell Cycle Regulation by Growth Signals (2016, 10 marks)

🎯 KEYWORD BREAKDOWN:
• "Cell cycle" = G1→S→G2→M phases with checkpoint controls
• "Growth signals" = ERK, Akt pathways driving proliferation
• "Cyclins & CDKs" = cyclin-dependent kinases = molecular clock

📝 MNEMONIC:
🔡 "CDK-CYCLIN-GATE" = CDK needs partner cyclin Binding; Gated at checkpoints; Activating transition elements

✍️ COMPREHENSIVE SOLUTION (10 marks across 3 parts):

a) **Cell Cycle Phases & Checkpoint Controls** (3 marks)

**Four Cell Cycle Phases** (চার পর্যায়):

```
G1 PHASE (Gap 1 = 6-12 hours):
  State: Cell at rest (G0 in non-dividing cells)
  Activity: ↑ Cell size, ↑ Organelle content, ↑ Nutrient uptake
  Prep: Accumulating molecules needed for DNA replication
  CyclinE/CDKs: LOW (G1/S CDK dormant)
  Exit requirement: Growth signals + nutrient availability
  
  KEY EVENT: G1-to-S CHECKPOINT (restriction point)
    • Check: Is cell large enough? Nutrients available? DNA intact?
    • Decision point: COMMIT to DNA replication or ABORT
    • If GO: Rb protein inactivated → E2F TF released → S-phase genes activated
    • If STOP: p27 CDK inhibitor accumulates → CDK stalled

S PHASE (Synthesis = 6-8 hours):
  State: DNA replication underway
  Activity: dNTP synthesis, DNA polymerase, origin firing
  Cyclins: D/CDK2, E/CDK2 (high)
  Protein check: DNA damage → p53 activation → halt replication fork → repair
  
  KEY EVENT: Intra-S checkpoint
    • Check: Is DNA replication error-free? Origins firing only once?
    • Problem: Stalled fork → ATR kinase → p53 → halt
    • If OK: Continue through S phase normally

G2 PHASE (Gap 2 = 3-4 hours):
  State: DNA replication complete, gap before mitosis
  Activity: Checkpoint assessment, mitotic protein accumulation
  Cyclins: B/CDK1 (medium), A/CDK2 (declining)
  Protein check: DNA damage → p53 → p21 CDK inhibitor → halt
  
  KEY EVENT: G2-to-M CHECKPOINT
    • Check: Is all DNA replicated? Undamaged? Correct ploidy?
    • Problem: Unrepaired DNA → ATM kinase → p53 → p21 → stop
    • If OK: Wee1 kinase inactivated, CDC25A phosphatase active
    • Result: CDK1 gets dephosphorylated → becomes ACTIVE → entry into M phase

M PHASE (Mitosis = 30-60 min):
  State: Chromosomal segregation + cytokinesis
  Activity: Spindle formation, chromosome condensation, cell division
  Cyclins: B/CDK1 (MAXIMUM), A/CDK1 (high)
  
  KEY EVENT: Spindle Assembly Checkpoint
    • Check: Are all chromosomes attached to spindle poles (bi-orientation)?
    • BubR1 and Mad proteins "count" attached chromosomes
    • Unattached chromosome → BubR1 silences APC/C (ubiquitin ligase)
    • Result: Cyclin B NOT degraded → CDK1 stays active → mitosis stalled
    • Once all chromosomes attached: APC/C activated → cyclin B degraded → CDK1 inactivated → cytokinesis
  
  Exit from M phase:
    • APC/C-ubiquitinated cyclin B → proteasomal degradation
    • CDK1 activity drops dramatically
    • Exit from mitosis ("mitotic exit")
    • Cell divides into 2 daughter cells
    • Daughters enter G1 phase of next cell cycle

G0 PHASE (Growth arrest = indefinite):
  State: Quiescent, non-dividing cells
  Examples: Neurons, muscle cells (post-differentiation)
  Entry trigger: Differentiation signals (TGF-β) or nutrient deprivation
  Exit trigger: Growth factor restoration OR developmental signals
  Molecular state: Very low cyclin/CDK activity, high CDK inhibitors (p27, p16)
```

**Checkpoint Controls Summary Table**:

| Checkpoint | Phase | Check | Signal Stop | Resume When |
|-----------|-------|-------|-------------|-------------|
| **G1/S** | G1-S | Cell size, nutrients, DNA integrity | p53 → p21 ↑ CDK inhibitor | Rb inactivation OK |
| **Intra-S** | S | DNA damage, replication fork stress | ATR → p53 → stop origin firing | Fork stabilized, repair done |
| **G2/M** | G2-M | DNA damage, mitotic protein prep | ATM → p53 → p21 ↑ CDK inhibitor | All DNA intact |
| **Spindle** | M | Chromosome attachment | BubR1 silences APC/C | All chromosomes bi-oriented |

b) **Cyclin-CDK Complexes & G1-S Transition** (4 marks)

**Cyclin & CDK Partners** (চক্রীয় এবং নির্ভর মিথস্ক্রিয়া):

```
CDKs (Cyclin-Dependent Kinases):
  • Catalytic subunits (Ser/Thr kinases)
  • Inactive when alone
  • ~4-5 main types: CDK1, CDK2, CDK4, CDK6, CDK7

Cyclins:
  • Regulatory subunits
  • ~20+ types: Cyclin A-H, etc.
  • Each activates specific CDK at specific phase
  • Cyclins have "cyclic" protein levels (hence name) — peak then degrade

PHASE-SPECIFIC ACTIVE COMPLEXES:

G1 phase:  Cyclin D / CDK4 or CDK6
  • Cyclin D ↑ in early G1 (in response to growth factors)
  • Cyclin D/CDK4 phosphorylates Rb (retinoblastoma protein) partially
  • Result: Rb begins releasing E2F transcription factor (but not complete)

Late G1:  Cyclin E / CDK2
  • Cyclin E ↑ later in G1
  • Cyclin E/CDK2 phosphorylates Rb FULLY (multiple sites now phosphorylated)
  • Fully phosphorylated Rb releases E2F completely
  • E2F drives S-phase genes: Cyclin A, CDK2, DNA polymerase, dNTP synthase
  • Cell COMMITS to S phase (restriction point passed)

S phase:   Cyclin A / CDK2
  • Cyclin A ↑ at S/G2 boundary
  • Cyclin A/CDK2 phosphorylates many targets needed for replication
  • Maintains Rb phosphorylation (keeps E2F active if needed)
  • Also prepares for G2-M transition

G2-M:      Cyclin B / CDK1
  • Cyclin B ↑ in G2
  • Cyclin B/CDK1 (also called M-phase promoting factor, MPF)
  • Most active kinase of cycle (1000-5000× more active than CDK2)
  • Phosphorylates nuclear lamins → nuclear envelope breakdown
  • Phosphorylates histone H1 → chromosome condensation
  • Phosphorylates microtubule-associated proteins → spindle assembly
  • Phosphorylates APC/C cofactors → setting up mitotic exit cascade
```

**G1-S Transition Detailed** (G1-S সংক্রমণ):

```
STEP 1: GROWTH FACTOR → CYCLIN D INDUCTION
──────────────────────────────────────────
EGF binds EGFR → Ras-MAPK → ERK phosphorylates ELK-1
ERK also phosphorylates c-FOS/c-JUN
c-FOS/c-JUN → AP-1 complex drives cyclin D1 gene transcription
Cyclin D1 protein accumulates in G1

STEP 2: CYCLIN D / CDK4 ACTIVITY
────────────────────────────────
RB PHOSPHORYLATION (hypophosphorylated state):
  • Unphosphorylated Rb (hypophosphorylated): TIGHT complex with E2F
  • E2F transcription factor is SEQUESTERED (cannot access DNA)
  • S-phase genes OFF
  
PARTIAL RB PHOSPHORYLATION (by cyclin D/CDK4):
  • Cyclin D/CDK4 phosphorylates Rb at specific sites (Ser/Thr residues)
  • Each phosphorylation event weakens Rb-E2F interaction
  • After ~3-5 phosphates: Rb affinity for E2F ↓ significantly
  • E2F begins to dissociate (but slowly)

STEP 3: CYCLIN E / CDK2 ACTIVATION (LATE G1)
─────────────────────────────────────────────
E2F (partially released from Rb) drives cyclin E1 gene transcription
Cyclin E1 accumulates
Cyclin E/CDK2 forms:
  • Much more active kinase than CDK4
  • HYPERPHOSPHORYLATES Rb (multiple sites rapidly)
  • Fully phosphorylated Rb (hyperphosphorylated): no longer grips E2F
  • E2F COMPLETELY RELEASED

STEP 4: E2F DRIVES S-PHASE GENES
─────────────────────────────────
Free E2F (now active transcription factor):
  • Enters nucleus
  • Binds E2F response elements (promoters of S-phase genes)
  • Recruits coactivators (histone acetyltransferases)
  • Drives transcription of:
    - Cyclin A (perpetuates S-phase machinery)
    - CDK1, CDK2 (more kinase available)
    - DNA polymerase α, β, γ (replication)
    - dNTP synthase, ribonucleotide reductase (nucleotide precursors)
    - Thymidylate synthase (dTTP production)
    - PCNA (processivity factor)

POSITIVE FEEDBACK (accelerates commitment):
  • Cyclin A (from E2F target genes) forms complex with CDK2
  • Cyclin A/CDK2 phosphorylates Rb again (if not fully phosphorylated)
  • Ensures full Rb release
  • Cyclin A/CDK2 also promotes cyclin E degradation (SCF complex ubiquitinates)
  • Maintains high Cyclin A/CDK2 activity through S phase

STEP 5: RESTRICTION POINT (정지점 아님)
──────────────────────────────────────
Once in S phase (DNA replication started):
  • Cell is committed to complete division
  • No longer depends on external growth factors
  • Even if growth factor withdrawn: cell continues through S-G2-M
  • This is the "Restriction Point" — no turning back (unless DNA damage triggers p53)

STEP 6: CDK INHIBITOR CHECKPOINT (p27 / CDK inhibitor)
────────────────────────────────────────────────────
If growth signals are LOW:
  • p27 (CDK inhibitor) accumulates
  • p27 binds cyclin/CDK complexes
  • Blocks ATP-binding or substrate access
  • CDK becomes INACTIVE
  • Cell cycle HALTS in G1
  • Prevents wasteful S phase entry without growth signal

p27 levels:
  • HIGH in G0 and early G1 (keeps CDKs OFF)
  • ↓ DOWN in S phase (cyclin E/CDK2 phosphorylates p27 → degradation)
  • ↑↑ VERY HIGH if nutrients scarce (TOR senses amino acids)
  • ↑↑ HIGH after mitogen withdrawal (cell arrests)
```

c) **DNA Damage Response & p53 Tumor Suppressor** (3 marks)

**p53 Checkpoint Control** (p53 টিউমার দমন কারক):

```
IF DNA DAMAGE DETECTED:
  • Sensor proteins (ATM, ATR kinases) detect double-strand breaks or stalled replication forks
  • ATM/ATR phosphorylate p53 protein
  • p53 accumulates (normally degraded rapidly, but phosphorylation stabilizes it)

p53 AS TRANSCRIPTION FACTOR:
  • p53 enters nucleus
  • Binds p53-response elements (promoters of checkpoint genes)
  • Drives transcription of:
    1. p21 (CDK inhibitor)
       → CDK activity ↓
       → Rb stays phosphorylated OR
       → Cyclin/CDK inactivated
       → Cell cycle HALTS
    
    2. DNA repair genes (GADD45, XPC, DDB2)
       → Nucleotide excision repair kit
       → Base excision repair kit
       → Mismatch repair kit
       → Attempt to fix DNA
    
    3. Growth arrest genes
       → Further ensure cell doesn't divide
    
    4. Apoptotic genes (BAX, PUMA, NOXA, FAS)
       → IF DNA damage too severe to repair
       → Triggers programmed cell death
       → Removes damaged cell (prevents cancer)

OUTCOME DEPENDS ON DAMAGE SEVERITY:
  • Minor damage: p53 ↑ repair gene expression, cell cycle halts, repair occurs, cell resumes
  • Major damage: p53 ↑ apoptotic gene expression, cell self-destructs (prevents cancer formation)

WHY p53 CALLED "GUARDIAN OF GENOME":
  • Monitors DNA integrity
  • Responds immediately to damage
  • Initiates either repair (if fixable) or death (if irreparable)
  • Without p53: Damaged DNA replicates → mutations accumulate → CANCER
  • ~50% of cancers have p53 mutations (lost checkpoint control)

Example p53 Mutations in Cancer:
  • Li-Fraumeni syndrome: Germline p53 mutation → multiple cancers early in life
  • Breast cancer: ~80% have wild-type p53, but some have p53 mutations (aggressive)
  • Lung cancer: ~50% have p53 mutations (associated with poor prognosis)
  • Colorectal cancer: ~50% have p53 mutations (late-stage progression)
```

📚 References: [Alberts Ch.17, "Cell Cycle Regulation"] + [Lehninger Ch.12, "CDK Control & Checkpoints"]

================================================================
[Q026-Q031 QUEUED FOR NEXT FILE CONTINUATION]
================================================================
