# 🎯 Teach-Back Prompts - Test Your Understanding
**GEB 331 Cell Signaling | Deep Learning Verification**

**How to use**: After studying each pathway, try to explain WITHOUT NOTES. If you can do this, you understand the mechanism (not just memorized facts).

---

## SECTION 1: G-Protein Coupled Receptor Pathway (Q013)

### Teach-Back Prompt 1: The GDP-GTP Switch
**"Your friend asks: How can a G-protein be a switch? How does GTP turning into GDP turn OFF the signal?"**

**What your answer should include:**
- [ ] GTP bound = active state (ON), GDP bound = inactive state (OFF)
- [ ] When NOT signaling: Gα-GDP sits with Gβγ (inactive complex)
- [ ] GPCR acts as GEF (guanine exchange factor) = helps GDP leave, GTP enter
- [ ] Gα-GTP separates from Gβγ (dissociation = activation)
- [ ] Intrinsic GTPase activity of Gα: GTP → GDP (hydrolysis, slow)
- [ ] OR GAP speeds up this hydrolysis (makes it faster)
- [ ] When GTP becomes GDP: Gα-GDP reunites with Gβγ (complex inactive again)
- [ ] Explains the TIMING: natural rate ~5-10 sec, GRK/β-arrestin makes it ~1-2 sec

**If you said this correctly**: ✅ You understand G-protein mechanics
**If you skipped any step**: Study that specific part more

**Common Wrong Answers to AVOID**:
- ❌ "GTP is the signal" (No! GTP is the STATE, Gα-GTP is what activates downstream)
- ❌ "GAP makes GTP" (No! GAP helps GTP→GDP hydrolysis, REMOVES activity)
- ❌ "GTP never hydrolyzes on its own" (No! It does, but slowly ~10 sec)

---

### Teach-Back Prompt 2: Desensitization vs Adaptation
**"A student says: 'Why do we need BOTH GRK/β-arrestin AND phosphodiesterase if they both turn off the signal?' Explain the difference."**

**What your answer should include:**
- [ ] GRK/β-arrestin acts in SECONDS (immediate desensitization)
  - GRK phosphorylates GPCR C-terminus → Receptor can't release more cAMP
  - β-arrestin blocks G-protein coupling → Blocks signal EARLY
- [ ] Phosphodiesterase acts in MINUTES (cAMP degradation)
  - Breaks down cAMP (2nd messenger) that already exists
  - Removes the "echo" of the signal
- [ ] TOGETHER = biphasic OFF:
  1. Fast: GRK/β-arrestin stop NEW cAMP production
  2. Slow: Phosphodiesterase clears OLD cAMP
- [ ] Advantage of two mechanisms: Prevents OVERSHOOTING signal

**If you said this correctly**: ✅ You understand multi-layered regulation
**If you mixed them up**: Study "receptor phosphorylation vs second messenger degradation"

---

## SECTION 2: RTK-Ras-MAPK Cascade (Q024)

### Teach-Back Prompt 3: Why Is Ras-G12V LOCKED?
**"Explain in detail: Why can't cells with Ras-G12V cancer be rescued by adding MORE GAP protein?"**

**What your answer should include:**
- [ ] Normal Ras: Intrinsic GTPase activity (slow), GAP speeds it up (recognition site)
- [ ] G12V mutation: AT amino acid position 12 of Ras protein
- [ ] This position is PART OF THE GAP RECOGNITION SITE
- [ ] G12V = changes the shape at that site
- [ ] Result: GAP protein physically CANNOT BIND to position 12
- [ ] If GAP can't bind → can't catalyze GTP → GDP hydrolysis
- [ ] Even if you have 10x MORE GAP: Still can't recognize G12V
- [ ] Ras-GTP stays hydrolysis-blocked = LOCKED ON
- [ ] Solution: Block DOWNSTREAM instead (MEK inhibitor, Raf inhibitor)

**If you said this correctly**: ✅ You understand mutation-specific mechanisms
**If you said "GAP is broken"**: Not specific enough. The RECOGNITION is broken.

**Exam-Winning Detail**: "The mutation is not at the GTPase catalytic site, but at the GAP-RECOGNITION site. GAP can still cut other Ras proteins fine, just not this mutant."

---

### Teach-Back Prompt 4: Ras vs G-Protein (Not the Same!)
**"A struggling student conflates Ras with G-protein, saying 'Ras and Gαs both use GDP-GTP cycling, so they're similar.' How would you explain the REAL differences?"**

**What your answer should include:**
- [ ] **Similarity**: Both are small GTPases (yes, both use GTP/GDP)
- [ ] **DIFFERENCE 1 - Location**:
  - Gαs: Anchored to membrane, works there
  - Ras: Anchored to membrane, but stays on longer
- [ ] **DIFFERENCE 2 - GAP Sensitivity**:
  - Gαs: Intrinsic GTPase fast + GAP speeds further (HRGAPs, RGS)
  - Ras: Intrinsic GTPase VERY slow + GAP critical (NF1-GAP, p120RasGAP)
  - Result: Ras signals/cycles slower than Gαs
- [ ] **DIFFERENCE 3 - Effectors**:
  - Gαs activates Adenylyl Cyclase (makes cAMP)
  - Ras recruits Raf kinase (cascades phosphorylation)
  - Different downstream machinery!
- [ ] **DIFFERENCE 4 - Mutations**:
  - Ras-G12V locks GTP → cancer
  - Similar mutation in Gαs would lock it → hyperactive hormone response (different pathology)

**If you said this correctly**: ✅ You distinguish protein families properly
**If you said "they do the same thing"**: You're not deep enough. Study "which GTPase goes where"

---

## SECTION 3: Notch/Wnt/NF-κB Proteolysis (Q032)

### Teach-Back Prompt 5: Three Cleavages, Not One
**"Draw the Notch pathway from start to finish, showing all THREE cleavage sites. Why does Notch need S1, S2, AND S3, not just one cut?"**

**What your answer should include:**
- [ ] S1 cut (by TNFα convertase): Removes extracellular domain (outside cell)
  - Leaves transmembrane domain + intracellular domain still stuck in membrane
- [ ] S2 cut (by ADAM protease): Cuts at membrane surface
  - Exposes S3 site (which is INSIDE the membrane)
  - WITHOUT S2, S3 site not accessible to γ-secretase
- [ ] S3 cut (by γ-secretase): Cuts INSIDE the lipid bilayer
  - Requires S2 first (S3 site hidden until exposed)
  - Releases NICD (intracellular domain) into cytoplasm
- [ ] Why three steps?
  - Provides SPECIFICITY (can't just any protease release NICD)
  - Provides CONTROL (multi-step process slowed, regulated)
  - Provides SUBSTRATE PROTECTION (prevents ectodomain shedding unless signal present)

**If you said this correctly**: ✅ You understand sequential specificity
**If you said "any cut releases NICD"**: Wrong. Know the SEQUENCE and WHY.

**Exam Bonus**: "S3 cleavage happens INSIDE the membrane (only γ-secretase can), which is why it's the specific, regulated step"

---

### Teach-Back Prompt 6: Wnt vs Notch (Not the Same Proteolysis!)
**"A student says: 'Both Notch and Wnt use proteolysis to release proteins into nucleus.' How would you correct this oversimplification?"**

**What your answer should include:**
- [ ] **Notch**: PRODUCES something (cuts Notch → releases NICD)
  - Three sequential cuts
  - NICD is 100% new product (only appears after cleavage)
  - Constitutive degradation then (NICD gets ubiquitinated after)
  
- [ ] **Wnt**: PREVENTS something (doesn't cut β-catenin, saves it from cutting!)
  - No proteolysis of β-catenin itself
  - Wnt BLOCKS the destruction complex (APC-Axin-GSK3)
  - β-catenin already exists, just normally DESTROYED
  - Wnt signals → complex breaks → β-catenin saved/accumulates
  
- [ ] **The key distinction**:
  - Notch: Proteolysis IS the activation (cut = release = activate)
  - Wnt: Inhibiting proteolysis IS the activation (don't cut = save = accumulate)
  
- [ ] **Why this matters for cancer**:
  - Notch cancer: Gain NICD production (activating mutations)
  - Wnt cancer: Lose APC (can't make destruction complex)

**If you said this correctly**: ✅ You think critically about mechanisms
**If you said "both are proteolysis"**: True, but superficial. Know the FUNCTIONAL DIFFERENCE.

---

### Teach-Back Prompt 7: APC Loss = TWO Problems
**"Explain: APC gene loss in cancer causes BOTH tumor suppression loss AND Wnt pathway activation. Why are these TWO separate things, not just one?"**

**What your answer should include:**
- [ ] **APC as Tumor Suppressor**:
  - APC is scaffolding protein (holds destruction complex)
  - Loss of APC = loss of growth control machinery
  - Cells now more permissible to divide (brake removed)
  - This is INDEPENDENT of β-catenin!

- [ ] **APC as Wnt Pathway Regulator**:
  - When APC present: Holds β-catenin for phosphorylation/ubiquitination
  - When APC lost: β-catenin NEVER reaches destruction machinery
  - β-catenin accumulates unbounded
  - Goes nuclear, activates TCF/LEF → c-myc, cyclin expression
  - This is the "ON" gain

- [ ] **Both together**:
  1. Loss of brake (APC gone = no growth control)
  2. Gain of gas pedal (β-catenin ON continuously)
  - Result: DOUBLE PROBLEM = very strong cancer driver

- [ ] **Clinical insight**:
  - APC mutations in familial adenomatous polyposis (FAP)
  - Nearly 100% develop colorectal cancer
  - Because BOTH mechanisms broken simultaneously

**If you said this correctly**: ✅ You understand multi-hit tumorigenesis
**If you only mentioned one**: Study "why APC loss = two distinct consequences"

---

## SECTION 4: TGF-β SMAD Signaling (Q040)

### Teach-Back Prompt 8: How Can TGF-β Be BOTH Good and Bad?
**"Explain: TGF-β is a tumor suppressor in early cancer but a tumor promoter in late cancer. Why does mutation status flip its role?"**

**What your answer should include:**
- [ ] **EARLY CANCER (Wild-type genes)**:
  - TGF-β → TβRII → TβRI phosphorylates SMAD2/3
  - pSMAD2/3 + SMAD4 → nucleus
  - Activates p15/p21 (CDK inhibitors)
  - Result: Cell cycle STOPS ✓ (tumor suppressive)

- [ ] **LATE CANCER (SMAD4 deleted)**:
  - TGF-β → TβRII → phosphorylates alternative pathways
  - Without SMAD4: Canonical pathway broken
  - Non-canonical arms activate: PI3K, Rho, PAR1
  - These promote EMT (epithelial → mesenchymal)
  - EMT = lose cell-cell contacts → migrate → metastasize ✗ (tumor promoting)

- [ ] **Why SMAD4 is the KEY**:
  - SMAD4 is "gatekeeper" for canonical pathway
  - Without it: Signal splits to alternative consequences
  - Different outcomes WITH vs WITHOUT SMAD4
  - This explains pancreatic cancer (50% have SMAD4 deletion)

- [ ] **The Clinical Insight**:
  - TGF-β inhibitors might HELP early cancer (less suppression needed)
  - But TGF-β inhibitors might HURT late cancer (lose EMT suppression?)`
  - Context = mutation status determines treatment strategy

**If you said this correctly**: ✅ You understand context-dependent signaling
**If you said "TGF-β is always suppressive"**: Not nuanced enough for advanced exam

---

### Teach-Back Prompt 9: SMAD2 vs SMAD3 (Know the Distinction!)
**"Briefly explain: SMAD2 and SMAD3 are both activated by TGF-β, but they don't do EXACTLY the same thing. What's the functional difference?"**

**What your answer should include:**
- [ ] **Similarity**: Both are R-SMADs (receptor-regulated), both phosphorylated by TβRI
- [ ] **SMAD3 = Transcriptional ACTIVATOR** (leans toward "GO" signals)
  - More strongly cooperates with co-activators
  - Prominent in p15/p21 activation (cell cycle stop)
  - Stronger with TCF/LEF for Wnt-interfering genes
  
- [ ] **SMAD2 = Transcriptional REPRESSOR** (leans toward "STOP" signals)
  - Better cooperates with co-repressors
  - More involved in silencing anti-apoptotic genes
  - Stronger with repressive chromatin factors
  
- [ ] **Redundancy + Specificity**:
  - Both activated together (redundancy = robustness)
  - But lean toward different outcomes (specificity = nuance)
  - Explains why loss of EITHER still has phenotype, but BOTH loss more severe

- [ ] **Exam Tip**: You don't need to memorize every target. Just know: "SMAD3 leans activation, SMAD2 leans repression"

**If you said this correctly**: ✅ You know proteins are not identical
**If you said "they're the same"**: True functionally, but missing important nuance

---

## SECTION 5: ER Stress Response (Q051)

### Teach-Back Prompt 10: BiP is the Master Sensor
**"BiP protein is called 'master sensor' of ER stress. Explain why BiP is so important, and what happens when it 'lets go' of PERK/IRE1/ATF6."**

**What your answer should include:**
- [ ] **Normal ER (no stress)**:
  - BiP protein sits on/near PERK, IRE1, ATF6
  - BiP keeps them in "sleeping" state (inhibited)
  - All three are HELD INACTIVE by BiP interaction
  
- [ ] **Why BiP has so much power**:
  - BiP is THE ER chaperone (most abundant)
  - BiP normally helps proteins fold (normal ER job)
  - But BiP is also regulatory (dual function!)
  
- [ ] **ER Stress (misfolded proteins accumulate)**:
  - Misfolded proteins accumulate in ER lumen
  - These misfolded proteins GRAB BiP's attention
  - BiP gets overloaded helping misfolds (runs around)
  - BiP STOPS interacting with PERK/IRE1/ATF6
  - This is NOT a "forced release," BiP just gets busy elsewhere
  
- [ ] **PERK/IRE1/ATF6 are now FREE**:
  - PERK autophosphorylates → active
  - IRE1 autophosphorylates → active
  - ATF6 gets cleaved (proteolysis) → active
  - All three now can execute their programs
  
- [ ] **The brilliance of this system**:
  - ONE sensor (BiP) monitors ER health
  - ONE sensor signals THREE independent pathways
  - Three parallel responses = robust recovery

**If you said this correctly**: ✅ You understand sensor logic
**If you said "BiP releases them"**: Close, but BiP doesn't "release" voluntarily. BiP gets distracted.

---

### Teach-Back Prompt 11: PERK Allows ATF4 Specifically
**"PERK phosphorylates eIF2α, blocking global translation. But ATF4 STILL gets translated. How is this possible? Why not block EVERYTHING?"**

**What your answer should include:**
- [ ] **PERK's job**: Phosphorylates eIF2α (initiation factor)
  - Phosphorylated eIF2α can't re-initiate translation
  - Blocks MOST mRNAs from starting new translation
  - This saves RESOURCES during stress
  
- [ ] **The uORF (upstream open reading frame) trick**:
  - ATF4 mRNA has small "dummy" ORF upstream of main ATF4 sequence
  - Normally: Ribosomes scan, hit uORF, translate dummy peptide, then STALL
  - Ribosome re-initiates at real ATF4 ORF (happens anyway)
  - Result: Low ATF4 production normally
  
- [ ] **Under ER stress (phosphorylated eIF2α)**:
  - Global eIF2α phosphorylation blocks MOST mRNAs still
  - BUT ATF4 has mechanism to bypass:
  - Ribosome hits uORF, phospho-eIF2α makes it WAIT (stall longer)
  - During wait, downstream reinitiation sites become ACCESSIBLE
  - Ribosome re-initiates DOWNSTREAM at main ATF4 ORF
  - Result: HIGH ATF4 production under stress!
  
- [ ] **Why this matters**:
  - ATF4 makes CHOP (apoptosis factor)
  - High ATF4 = high CHOP = apoptosis if stress too long
  - But also ATF4 makes some survival genes
  - It's a DECISION POINT: Recovery OR Death

- [ ] **The design principle**:
  - Global translation down (saves energy)
  - Specific stress-response messages still made (ATF4)
  - Brilliant = selective amplification during stress

**If you said this correctly**: ✅ You understand translational control nuances
**If you said "just ATF4 isn't blocked"**: True, but HOW is equally important

---

## SECTION 6: HIF-1α and Hypoxia (Q056)

### Teach-Back Prompt 12: PHD Needs Oxygen to WORK
**"Explain: PHD enzyme requires oxygen to function. So in hypoxia (low O₂), what exactly STOPS PHD from working?"**

**What your answer should include:**
- [ ] **PHD (prolyl hydroxylase) is an ENZYME**:
  - PHD catalyzes: Proline residue (on HIF-1α) + O₂ → hydroxyproline
  - Requires O₂ as SUBSTRATE (not cofactor)
  - No O₂ = no substrate = no reaction = PHD stops

- [ ] **Normal normoxia (high O₂)**:
  - PHD has plenty of O₂
  - Hydroxylates HIF-1α at Pro 564 and Pro 402
  - Hydroxylated HIF-1α → VHL recognizes and binds
  - VHL→ubiquitin→proteasome → HIF-1α DESTROYED
  - Result: HIF-1α protein is short-lived (~5 min half-life)

- [ ] **Hypoxia (low O₂)**:
  - O₂ becomes LIMITING (not saturating PHD anymore)
  - PHD can't hydroxylate HIF-1α fast enough
  - Even if PHD active: not enough O₂ substrate to keep up
  - HIF-1α accumulates faster than it's destroyed
  - Net result: HIF-1α builds up in cytoplasm

- [ ] **Not that PHD is "broken" in hypoxia**:
  - PHD still exists
  - PHD still HAS activity
  - But activity is substrate-limited (not enough O₂)
  - Like a car with no gas: engine works, but can't go!

- [ ] **The elegance**:
  - O₂ is the SENSOR
  - Cells didn't need to "invent" hypoxia sensor
  - Biochemistry of PHD already uses O₂ as substrate
  - High O₂ = HIF-1α destroyed, Low O₂ = HIF-1α saved
  - Evolution hack: repurposed existing biochemistry as sensor!

**If you said this correctly**: ✅ You understand substrate-limited enzyme kinetics
**If you said "PHD shuts down in hypoxia"**: Imprecise. PHD still works, just substrate-limited.

---

## SCORING YOUR TEACH-BACKS

**For Each Prompt**:
- [ ] 8+ checkboxes checked = **EXCELLENT** ✅ You understand this deeply
- [ ] 6-7 checkboxes checked = **GOOD** 🟢 You understand the basics
- [ ] 4-5 checkboxes checked = **NEEDS WORK** 🟡 Study this section more
- [ ] <4 checkboxes checked = **REVIEW ASAP** 🔴 Major gaps in understanding

**If you scored <6 on more than 2 prompts**: Spend more time on those specific topics before exam!

---

*Remember: The goal is NOT to memorize these answers, but to be able to explain the REASONING. If you can teach it, you can answer exam questions about it.*

