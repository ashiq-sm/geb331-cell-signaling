# Common Exam Mistakes & How to Avoid Them
**GEB 331 Cell Signaling | High-Value Learning**

---

## Q001: Intracellular Signaling Pathway ⭐⭐⭐⭐⭐⭐

### ❌ MISTAKE 1: Mixing Paracrine & Autocrine
**Wrong**: "Paracrine signals travel through blood like endocrine"
**Correct**: Paracrine = LOCAL only (cell-to-cell next to each other, ~100 μm range)
- Endocrine → BLOOD (long distance, slow)
- Paracrine → DIFFUSION (short distance, local)
- Autocrine → SAME CELL (feedback loop)
**Exam Tip**: Draw arrows showing DISTANCE covered by each type

### ❌ MISTAKE 2: "Signal Transduction = Signal Amplification" (not always!)
**Wrong**: "Transduction always amplifies signal strength"
**Correct**: Transduction = converting format of signal
- Amplification CAN happen (cAMP cascade = 1 hormone → 1000 cAMP)
- But some transductions reduce signal (lipid raft rafting concentrates, but then dissipates)
- Key: Transduction = CONVERSION, amplification is OPTIONAL consequence
**Exam Tip**: Use term "conversion or amplification" not just "amplification"

---

## Q013: G-Protein & PKA Signaling ⭐⭐⭐⭐⭐⭐

### ❌ MISTAKE 1: "Gαs·GTP is the second messenger"
**Wrong**: "Gαs·GTP molecule = second messenger"
**Correct**: Gαs·GTP is a PROTEIN. It ACTIVATES adenylyl cyclase. cAMP (small molecule) = SECOND MESSENGER
- First messenger = hormone (big, can't cross membrane)
- Second messenger = small diffusible molecule (cAMP, IP3, DAG, etc.)
- Gαs·GTP = INTERMEDIARY protein, NOT a messager
**Exam Tip**: Draw 3 layers: Hormone | Gαs·GTP | cAMP. Only cAMP is "second messenger"

### ❌ MISTAKE 2: "G-protein always stays in ON state until new signal"
**Wrong**: "Once activated by GPCR, Gαs·GTP stays active forever"
**Correct**: Gαs has intrinsic GTPase activity! It hydrolyzes GTP → GDP on its own (slowly)
- Timeline: ~5-10 seconds for one GTP hydrolysis cycle
- β-arrestin/GRK just SPEEDS UP the OFF process (desensitization)
- Without new signal, Gαs EVENTUALLY turns off anyway (just slowly)
**Exam Tip**: Remember: "GTP has timer built in. GAP/GRK just set faster timer"

### ❌ MISTAKE 3: Confusing PKA with PLC
**Wrong**: "PKA breaks PIP2 into IP3 and DAG"
**Correct**: 
- PKA = activated by cAMP (GPCR → Gαs branch)
- PLC = activated by Gαq branch (different G-protein)
- PLC breaks PIP2 → IP3 + DAG
- PKA phosphorylates PROTEINS (glycogen phosphorylase, CREB, etc.)
**Exam Tip**: Two pathways: Gαs→cAMP→PKA (phosphorylation) vs Gαq→PLC→IP3 (calcium release)

---

## Q024: Ras Protein and Cancer ⭐⭐⭐⭐⭐⭐

### ❌ MISTAKE 1: "Ras-G12V makes MORE GTPase activity"
**Wrong**: "G12V mutation = Ras cuts GTP faster"
**Correct**: G12V mutation PREVENTS GAP-catalyzed GTP hydrolysis
- Normal: Ras-GTP → Ras-GDP (via GAP recognition) = SLOW OFF
- G12V: Ras-GTP → Ras-GTP (GAP can't recognize) = STUCK ON
- "Loss of OFF, not gain of ON"
**Exam Tip**: Write "G12V = CANNOT BE TURNED OFF" (not "always on")

### ❌ MISTAKE 2: "Ras directly produces cAMP like PKA does"
**Wrong**: "Ras-GTP makes cAMP continuously"
**Correct**: Ras is NOT a G-protein! It recruits proteins (Raf), not enzymes that make messengers
- Ras pathway: RTK → Grb2-SOS → Ras-GTP → Raf recruits → MAPK chain
- cAMP pathway: GPCR → Gαs → Adenylyl cyclase → cAMP
- Different amplification mechanisms!
**Exam Tip**: Ras is "adapter GTPase" not "messenger GTPase"

### ❌ MISTAKE 3: "If you add MORE GAP, Ras-G12V cancer will be cured"
**Wrong**: "Overexpression of GAP protein fixes G12V"
**Correct**: GAP can't recognize G12V! Adding more ineffective GAP does nothing
- The problem is RECOGNITION site mutated, not GAP quantity
- Solution: Block downstream (MEK inhibitor, Raf inhibitor) instead
- Or: Prevent Ras membrane anchoring (farnesyl transferase inhibitors)
**Exam Tip**: "You can't fix broken recognition by having more of the broken key"

### ❌ MISTAKE 4: "Ras-G12V only affects MAPK pathway"
**Wrong**: "All cancers with Ras-G12V use only ERK signaling"
**Correct**: Ras-GTP recruits MULTIPLE effectors:
- Raf (leads to MAPK/ERK cascade)
- PI3K (leads to AKT survival pathway)
- RalGDS (leads to Ral signaling - migration)
- PLCε (leads to calcium/DAG signaling)
**Exam Tip**: When asked about Ras-G12V, mention "multiple downstream arms activated simultaneously"

---

## Q032: Notch Proteolysis & β-Catenin & NF-κB ⭐⭐⭐⭐⭐⭐

### ❌ MISTAKE 1: "Notch cleavage happens all at once"
**Wrong**: "Delta ligand binds Notch and NICD is immediately released"
**Correct**: THREE sequential cleavages needed!
1. S1 (TNFα convertase - extracellular)
2. S2 (ADAM protease - at membrane surface)
3. S3 (γ-secretase - inside membrane)
- Each cleavage exposes next site
- Without all 3, NICD NEVER reaches nucleus!
**Exam Tip**: Draw as 3-step process: Delta | S1 cut | S2 cut | S3 cut → NICD FREE

### ❌ MISTAKE 2: "Wnt and Notch are the same pathway"
**Wrong**: "Wnt and Notch both use NICD signaling"
**Correct**: Completely DIFFERENT mechanisms!
- Wnt: Prevents β-catenin DEGRADATION (it accumulates)
- Notch: PRODUCES NICD (proteolytic release)
- Both end in nucleus, but different molecules and processes
**Exam Tip**: Wnt="save β-catenin" vs Notch="make NICD"

### ❌ MISTAKE 3: "APC loss means cancer GROWS more"
**Wrong**: "APC mutation = cancer grows because β-catenin makes growth signals"
**Correct**: It's both parts:
1. Loss of tumor suppressor (APC normally stops cell division)
2. Gain of Wnt pathway (β-catenin stabilizes)
- Without APC, β-catenin accumulates AND can't be degraded
- Two-hit consequence: BOTH loss + gain
**Exam Tip**: When APC lost, mention "tumor suppressor deletion + β-catenin accumulation"

### ❌ MISTAKE 4: "NF-κB IκBα is always ON"
**Wrong**: "IκBα constantly blocks NF-κB"
**Correct**: In resting cells:
- IκBα BOUND to NF-κB = COMPLEX stays in cytoplasm (OFF)
- Upon TNFα: IKK phosphorylates IκBα → ubiquitin → degradation
- FREE NF-κB enters nucleus (ON)
- NEW IκBα is transcribed (feedback = turns itself off again!)
**Exam Tip**: Draw cycle: IκBα+NF-κB (off) → phosphorylation → IκBα degraded → NF-κB free → NEW IκBα made → repeat

---

## Q040: TGF-β Canonical Pathway ⭐⭐⭐⭐⭐

### ❌ MISTAKE 1: "TGF-β is ONLY a tumor suppressor"
**Wrong**: "TGF-β always stops cancer"
**Correct**: Context-dependent dual role!
- **Early cancer** (normal cells): TGF-β stops division (tumor SUPPRESSOR)
- **Late cancer** (SMAD4 deleted): TGF-β promotes EMT & metastasis (tumor PROMOTER)
- **Why**: SMAD4 deletion removes brake, non-canonical arms activate
**Exam Tip**: If question doesn't specify cancer stage, say "depends on mutation status"

### ❌ MISTAKE 2: "SMAD2 and SMAD3 are identical"
**Wrong**: "SMAD2 and SMAD3 do the exact same thing"
**Correct**: They're related but distinct:
- SMAD2: More involved in transcriptional repression
- SMAD3: More involved in transcriptional activation
- Both are phosphorylated by TβRI kinase
- Both need SMAD4 to be effective
- Redundant in many contexts, BUT differ in fine regulation
**Exam Tip**: "SMAD2/3 are both P-SMAD responses, but SMAD3 leans toward activation"

### ❌ MISTAKE 3: "BMP-2 and TGF-β use same SMAD complex"
**Wrong**: "Both TGF-β and BMP use SMAD2/3 + SMAD4"
**Correct**: Different SMAD combinations!
- **TGF-β**: pSMAD2/3 + SMAD4
- **BMP**: pSMAD1/5/8 + SMAD4
- Same SMAD4, different R-SMADs
- This allows selectivity! One TβRI doesn't activate BMP pathway
**Exam Tip**: TGF-β=2/3, BMP=1/5/8. Different R-SMAD = different gene targets

### ❌ MISTAKE 4: "SMAD7 is a type of SMAD like SMAD2"
**Wrong**: "SMAD7 is just another R-SMAD variant"
**Correct**: SMAD7 is an INHIBITOR!
- Competes for TβRI binding (blocks SMAD2/3 recruitment)
- Gets transcribed by TGF-β itself (negative feedback)
- High TGF-β → TGF-β makes its own brake (SMAD7 ↑)
- In late cancer, SMAD7↑ blocks canonical pathway, allows non-canonical
**Exam Tip**: "SMAD7 = STOP sign for TGF-β pathway"

---

## Q051: ER Stress UPR Response ⭐⭐⭐⭐⭐

### ❌ MISTAKE 1: "BiP always stays bound to PERK/IRE1/ATF6"
**Wrong**: "BiP constantly holds these proteins inactive"
**Correct**: BiP is the SENSOR - it changes state!
- **Normal ER**: BiP bound, all three sleeping
- **Stress**: Misfolded proteins accumulate, BiP's attention diverted
- **BiP releases** PERK/IRE1/ATF6 (not that they escape, BiP lets go intentionally)
**Exam Tip**: "BiP = master switch. Turns OFF the brakes when it senses trouble"

### ❌ MISTAKE 2: "PERK blocks translation of ALL proteins"
**Wrong**: "When PERK activates eIF2α, nothing gets translated"
**Correct**: It's selective!
- Global translation DOWN (saves energy)
- BUT ATF4 mRNA still gets translated (uORF bypass mechanism)
- ATF4 then makes CHOP (apoptosis gene)
- This is INTENTIONAL death pathway if stress too long
**Exam Tip**: "PERK blocks most, but ALLOWS ATF4 (the death messenger)"

### ❌ MISTAKE 3: "IRE1 splices ALL mRNA"
**Wrong**: "IRE1 goes around cutting random mRNA"
**Correct**: IRE1 specifically recognizes XBP1 mRNA structure
- Cuts specific 23 base pair intron from XBP1 mRNA
- Only shifts reading frame → XBP1s (spliced) produced
- XBP1s = active transcription factor (makes ER chaperones)
- OTHER mRNAs not touched (they degrade via other mechanisms)
**Exam Tip**: "IRE1 is a specialist, not a generalist. Only targets XBP1"

### ❌ MISTAKE 4: "ATF6 is made in response to ER stress"
**Wrong**: "Cells make new ATF6 when ER stress happens"
**Correct**: ATF6 already exists, just gets ACTIVATED!
- ATF6 protein sits in Golgi normally
- Upon ER stress: ATF6 cleaved at S1P/S2P protease sites
- pATF6 = active fragment, goes to nucleus
- Not made new, just LIBERATED from Golgi
**Exam Tip**: "ATF6 is pre-made, just waiting to be freed (like NICD with Notch)"

---

## Q056: Hypoxia and HIF-1α ⭐⭐⭐

### ❌ MISTAKE 1: "PHD doesn't work in hypoxia because it has no oxygen"
**Wrong**: "PHD can't hydroxylate without O₂, so always inactive"
**Correct**: That's exactly right mechanism BUT stated backwards:
- In NORMOXIA (high O₂): PHD ACTIVE → hydroxylates HIF-1α → VHL binds → degradation
- In HYPOXIA (low O₂): PHD INACTIVE → CAN'T hydroxylate → HIF-1α stable
- Low O₂ = PHD substrate (oxygen) is gone = HIF-1α escapes
**Exam Tip**: "O₂ is the PHD fuel. No fuel = PHD stops, HIF-1α free"

### ❌ MISTAKE 2: "HIF-1α is only made in hypoxia"
**Wrong**: "Cells don't make HIF-1α unless starved of oxygen"
**Correct**: HIF-1α is ALWAYS being made!
- Constitutive transcription (always there)
- But in normoxia, it gets DEGRADED immediately (short half-life ~5 min)
- In hypoxia, it ACCUMULATES (protected from PHD)
- Not that hypoxia "turns on" HIF-1α gene, it prevents HIF-1α DESTRUCTION
**Exam Tip**: "HIF-1α is constantly being made AND destroyed. Hypoxia just prevents destruction"

### ❌ MISTAKE 3: "Tumor cells don't need HIF-1α because they have good blood supply"
**Wrong**: "Cancer cells are well-oxygenated, so no HIF-1αneeded"
**Correct**: Tumors are PARADOXICALLY HYPOXIC and HIF-1α-DEPENDENT!
- Tumor center: poorly vascularized (diffusion limit ~100 μm for oxygen)
- Even though blood enters, oxygen can't reach center
- HIF-1α is CRITICAL for tumor survival! (makes VEGF for new vessels, EPO for RBCs, glycolysis enzymes)
- Cancer cells NEED HIF-1α even with "good" overall blood supply
**Exam Tip**: "Tumors are hypoxic INSIDE. HIF-1α is their survival kit"

### ❌ MISTAKE 4: "If you give hypoxia, cancer cells die"
**Wrong**: "Oxygen deprivation = cancer cell death"
**Correct**: Oxygen deprivation = ACTIVATES HIF-1α survival pathways!
- Hypoxia → HIF-1α ↑ → VEGF ↑ (make more vessels)
- Hypoxia → HIF-1α ↑ → EPO ↑ (make more RBCs to carry O₂)
- Hypoxia → HIF-1α ↑ → Glycolysis switched on (Warburg effect)
- Net: Cancer cells THRIVE in low-O₂ environment
**Exam Tip**: "Hypoxia triggers HIF-1α survival programs. Cancer exploits this!"

---

## Q059: Bacterial Chemotaxis ⭐⭐⭐⭐

### ❌ MISTAKE 1: "CheY directly binds FliM and spins the flagellum"
**Wrong**: "P~CheY grabs FliM and physically rotates it"
**Correct**: CheY (and P~CheY) acts as a SIGNAL, not a motor
- P~CheY migrates to FliM (flagellar motor complex)
- When P~CheY CONCENTRATION high: FliM adopts CW rotation (tumble)
- When P~CheY CONCENTRATION low: FliM adopts CCW rotation (smooth run)
- It's about CONCENTRATION gradient, not physical torque from CheY
**Exam Tip**: "CheY is a signal flag, not a wrench. The motor reads concentration"

### ❌ MISTAKE 2: "Bacterial chemotaxis is permanent memory (like learning)"
**Wrong**: "Bacteria remember where the attractant was"
**Correct**: Chemotaxis is TEMPORAL sensing (not spatial memory!)
- Bacteria compare: Is attractant INCREASING? Keep running
- Is attractant DECREASING? Tumble & try new direction
- They DON'T remember past locations
- Methylation (CheR) resets the sensitivity after a few seconds
**Exam Tip**: "Bacteria have NO memory. They respond to gradients in real-time"

### ❌ MISTAKE 3: "MCP directly senses the molecule"
**Wrong**: "Glucose gets detected by glucose-specific MCP"
**Correct**: MCP senses via MULTIPLE mechanisms:
- Some MCPs: Direct binding of attractant (aspartate, serine)
- Some MCPs: Binding of ligand-protein COMPLEX (not the molecule alone)
- All MCPs: Interact with same CheA (specificity via MCP diversity)
- ONE bacterium can have 5-10 different MCPs (can sense multiple stimuli)
**Exam Tip**: "MCP = "multi-substrate methyl-accepting protein" - diversity enables sensitivity"

---

## Q049: CaMKII Memory & LTP ⭐⭐⭐

### ❌ MISTAKE 1: "CaMKII becomes active when Ca²⁺ enters, and stays active because of continued Ca²⁺"
**Wrong**: "Learning works because neurons stay flooded with Ca²⁺"
**Correct**: That's NOT the mechanism!
- Ca²⁺ SPIKE activates CaMKII briefly
- At high Ca²⁺: CaMKII phosphorylates itself (Thr286)
- P~CaMKII (autonomous form) STAYS ACTIVE even when Ca²⁺ DROPS
- This is the MEMORY: autonomously active kinase persists
**Exam Tip**: "It's not Ca²⁺ that has memory. It's the phosphorylated CaMKII that remembers"

### ❌ MISTAKE 2: "CaMKII phosphorylation of AMPA receptors increases their number"
**Wrong**: "CaMKII makes the cell build more AMPA receptors"
**Correct**: CaMKII phosphorylates existing AMPA receptors to:
1. Increase current per channel (more permeable)
2. Facilitate trafficking/insertion of existing AMPA into synapse
3. NOT increasing total receptor count (that takes hours/translation)
- Short-term (seconds): Phosphorylation effect
- Long-term (hours): Synthesis & insertion (other mechanisms)
**Exam Tip**: "CaMKII doesn't build new receptors, it activates existing ones"

### ❌ MISTAKE 3: "Repeated learning strengthens only by making more CaMKII"
**Wrong**: "Each learning session makes more CaMKII protein"
**Correct**: Repeated learning works by:
1. **First exposure**: CaMKII phosphorylates → P~CaMKII forms
2. **Second exposure**: Same CaMKII phosphorylated AGAIN at Thr286
3. **Consolidation**: PP1 phosphatase would normally remove P~, but repetition prevents this
4. **Net**: P~CaMKII persists longer with repetition (not more CaMKII made, but phosphorylation maintained)
- Protein synthesis (making new genes) happens over HOURS, not seconds
**Exam Tip**: "Repetition maintains the phosphorylation. Doesn't make new protein"

---

## CROSS-CUTTING MISTAKES (Appear in multiple questions)

### ❌ MISTAKE A: "Protein X always means pathway is ON"
**Correct**: Activation is CONTEXT-dependent
- Ras-GTP = ON (but G12V is STUCK on)
- Gαs-GTP = ON (but has intrinsic timeout)
- P~SMAD = ON (but SMAD7 can block it)
- P~CaMKII = ON (but phosphatases can turn off)
**Exam Tip**: When you see a phosphoprotein, ask "what turns it off?"

### ❌ MISTAKE B: "All signaling cascades amplify signals"
**Correct**: Amplification depends on architecture
- GPCR→cAMP→PKA: 1 hormone → 1000 cAMP → massive amplification
- RTK→Ras→MAPK: More linear, less amplification per step
- Notch: Proteolytic release (no amplification, 1:1)
**Exam Tip**: Don't assume amplification. Ask about ratio each step

### ❌ MISTAKE C: "Once a protein is phosphorylated, it stays phosphorylated"
**Correct**: Phosphorylation is REVERSIBLE (phosphatases always working)
- Kinases ADD phosphate
- Phosphatases REMOVE phosphate
- Steady state = balance of kinase vs phosphatase activity
- Change in balance = change in phosphorylation level
**Exam Tip**: Every phosphorylation question should consider: "What phosphatase removes this?"

### ❌ MISTAKE D: "Proteins that bind DNA always activate genes"
**Correct**: Can activate OR repress!
- SMAD complexes: Can activate + repress depending on cofactors
- NF-κB: Mostly activates, but represses some anti-inflammatory genes
- NICD: Usually activates (with RBPj), but context matters
**Exam Tip**: "DNA-binding doesn't mean 'turning on.' Confirm transcriptional effect"

---

## LAST-MINUTE CHEAT: How to Spot Your Mistake During Exam

**Question asks about**: "Explain pathway X"
- **You wrote**: Long explanation with correct steps
- **But you made MISTAKE**: Confused active vs inactive form, or mixed up similar proteins

**Quick self-check** (2 minutes):
1. ☐ Did I use right ON/OFF state? (GTP=ON, GDP=OFF, etc.)
2. ☐ Did I distinguish this protein from similar ones? (SMAD2 vs SMAD4, PERK vs IRE1)
3. ☐ Did I mention what STOPS the signal? (GAP, phosphatase, new IκBα)
4. ☐ Did I use correct intermediate molecules? (cAMP vs IP3, NICD vs β-catenin)
5. ☐ Did I address cancer/disease context if mentioned? (G12V specific), not general)

---

*Prepare for exam by covering up answers and checking yourself against these mistakes!*
*If you made 3+ of these errors on practice questions, STOP and study that concept more.*
