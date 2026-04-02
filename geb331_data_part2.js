const geb331_sets_part2 = [
    {
        id: "set3",
        title: "🔹 SET 3 — Enzyme-Linked Receptors (RTK, MAPK, PI3K)",
        rawMd_bn: `### Enzyme-Linked Receptors & Cancer

**[Q023] MARKS: 6**  
**a) Types of Enzyme-Linked Receptors and General Properties [3]**

**Ans:** Enzyme-linked receptors হলো **single-pass transmembrane protein** যারা নিজেরাই enzyme হিসেবে কাজ করে অথবা সরাসরি কোনো enzyme-এর সাথে যুক্ত থাকে।

| Type | Enzyme Activity | Example Ligand | Example Receptor |
|------|-----------------|----------------|------------------|
| **Receptor Tyrosine Kinases (RTKs)** | Target protein-এর Tyrosine (Tyr) residue-কে phosphorylate করে [184,185] | EGF, PDGF, Insulin, NGF | EGFR, PDGFR, InsR [201,343] |
| **Receptor Serine/Threonine Kinases** | Serine/Threonine (Ser/Thr) residue-কে phosphorylate করে | TGF-β, BMP, Activin | TβRI, TβRII, BMPRI [14,37] |
| **Receptor Guanylyl Cyclases** | সরাসরি GTP থেকে cGMP তৈরি করে | ANF, BNP | NPR-A, NPR-B [38,232] |
| **Receptor Tyrosine Phosphatases** | Tyrosine থেকে phosphate remove করে | Pleiotrophin | RPTPζ, CD45 |
| **Tyrosine-kinase-associated receptors** | নিজে kinase নয়, কিন্তু cytoplasmic kinase (যেমন JAK)-এর সাথে যুক্ত থাকে | Cytokines (IL-2, IL-6), Interferons | IFN-γR, IL-2R [185] |

**General Properties (সাধারণ বৈশিষ্ট্য):**
1. **Single transmembrane domain:** GPCR-এর মতো 7-pass নয়, এরা membrane-কে মাত্র একবার cross করে (একক α-helix) [83,184]।
2. **Ligand-induced dimerization (ডাইমারাইজেশন):** Extracellular ligand bind করলেই দুটি receptor একত্রিত হয়ে dimer তৈরি করে।
3. **Trans-autophosphorylation:** Dimerization-এর ফলে একটি receptor অন্যটির intracellular kinase domain-কে phosphorylate করে সক্রিয় করে তোলে।
4. **Slow but sustained response:** GPCR-এর (milliseconds) তুলনায় এদের response ধীর (minutes to hours) কিন্তু দীর্ঘস্থায়ী।
5. **No second messenger required:** বেশিরভাগ ক্ষেত্রে receptor নিজেই effector হিসেবে কাজ করে বা সরাসরি অন্যান্য protein-কে recruit করে, second messenger লাগে না (ব্যতিক্রম: PI3K pathway)।

**স্যারের স্লাইড থেকে:** "Ligand binding to enzyme-linked receptors usually promotes their dimerization, which activates their kinase domains causing them to phosphorylate themselves on specific tyrosine residues."

---

**b) "Structural modifications of enzyme-linked receptors may lead to cancer" — Explain [3]**

**Ans:** স্বাভাবিক অবস্থায় RTK সিগন্যালিং অত্যন্ত নিয়ন্ত্রিত থাকে। Ligand আসলে এরা active হয়, আর কাজ শেষে lysosome-এ গিয়ে নষ্ট হয় (degraded)। 

কিন্তু DNA মিউটেশনের কারণে রিসেপ্টরের গঠনে পরিবর্তন (structural modification) হলে তা ক্যান্সারের কারণ হতে পারে:

| Mutation Type | Mechanism | Example in Cancer |
|--------------|-----------|---------|
| **Point mutations in kinase domain** | Ligand ছাড়াই kinase domain সব সময় সক্রিয় (constitutively active) থাকে। | EGFR mutation in lung cancer (L858R) |
| **Receptor overexpression** | Membrane-এ এতো বেশি receptor তৈরি হয় যে তারা ligand ছাড়াই নিজেদের সাথে ধাক্কা লেগে dimerize করে ফেলে। | HER2 amplification in breast cancer |
| **Gene fusion** | দুটি ভিন্ন জিন মিলে একটি অস্বাভাবিক, অবিরাম সক্রিয় kinase প্রোটিন তৈরি করে। | BCR-ABL in Chronic Myeloid Leukemia (CML) |
| **Deletion of extracellular domain** | Ligand-binding ডোমেন বাদ পড়ে যায়, ফলে inhibitory control থাকে না। একে **ErbB oncoprotein** বলে। | EGFRvIII in glioblastoma [45,201] |

**ফলাফল:** এই মিউটেশনগুলোর কারণে কোষ অবিরাম "বিভাজিত হও (Divide)" সংকেত পেতে থাকে, ফলে টিউমার বা Cancer সৃষ্টি হয়।

---

### Ras Protein & PI3K/Akt Survival Signaling

**[Q024] MARKS: 5**  
**a) Ras Protein and Its Role in Cancer [3]**

**Ans:** **Ras** হলো একটি **monomeric GTPase** (একক সাবইউনিট বিশিষ্ট ছোট জি-প্রোটিন, ~21 kDa) যা কোষ বিভাজনের অন্যতম প্রধান molecular switch [89,92]। এটি farnesyl lipid anchor দ্বারা membrane-এর ভেতরের দিকে যুক্ত থাকে।

**Normal Ras cycle:**
* **Inactive state:** GDP-bound অবস্থায় থাকে।
* **Activation:** RTK সক্রিয় হলে Grb2 (adaptor) এবং **SOS** (একটি GEF) membrane-এ আসে। SOS তখন Ras-এর GDP সরিয়ে GTP বসিয়ে দেয় → **Ras-GTP (Active)** [93,249]।
* **Inactivation:** কাজ শেষে **RasGAP** প্রোটিন Ras-এর intrinsic GTPase activity-কে ত্বরান্বিত করে, ফলে GTP ভেঙে পুনরায় GDP হয় → **Ras-GDP (Inactive)** [92,244]।

**Ras and Cancer:**
* মানুষের প্রায় **৩০% ক্যানসারে (pancreatic, colon, lung cancers)** Ras জিনের (যেমন KRAS, HRAS) মিউটেশন পাওয়া যায় [40,203]।
* সবচেয়ে সাধারণ মিউটেশন হলো (G12V বা Q61L) — যার কারণে Ras তার **GTPase activity সম্পূর্ণ হারিয়ে ফেলে** [11,40,92]।
* ফলে RasGAP শত চেষ্টা করেও Ras-এর GTP ভাঙতে পারে না। Ras চিরকালের জন্য **GTP-bound বা "ON"** অবস্থায় আটকে থাকে।
* এটি অবিরাম MAPK পাথওয়ে চালু রাখে, যা কোষকে আনলিমিটেড বিভাজনের নির্দেশ দেয়, ফলে ক্যান্সার হয়।

---

**b) "Active PI-3 kinase stimulates expression of anti-apoptotic proteins" — justify. [2]**

**Ans:** **PI3K (Phosphoinositide 3-kinase)** কোষকে বাঁচিয়ে রাখার (survival) একটি প্রধান pathway [112,249]। 

**Justification (যৌক্তিকতা):**
১. সক্রিয় RTK বা Ras, membrane-এ থাকা **PI3K**-কে activate করে।
২. PI3K মেমব্রেনের PIP₂-কে **PIP₃**-তে রূপান্তরিত করে [112,249]।
৩. PIP₃ সাইটোসোল থেকে **Akt (PKB)** কাইনেজকে মেমব্রেনে টেনে আনে এবং PDK1 তাকে সক্রিয় করে।
৪. সক্রিয় Akt গিয়ে **Bad** নামক একটি প্রো-অ্যাপোপ্টোটিক (মৃত্যু-সৃষ্টিকারী) প্রোটিনকে phosphorylate করে নিষ্ক্রিয় করে দেয় (14-3-3 প্রোটিনের সাথে বেঁধে রাখে) [112,250]।
৫. ফলে **Bcl-2** নামক অ্যান্টি-অ্যাপোপ্টোটিক (জীবনরক্ষাকারী) প্রোটিনটি Bad-এর কবল থেকে মুক্ত হয়ে যায়।
৬. মুক্ত Bcl-2 তখন mitochondria-র উপর কাজ করে কোষকে মৃত্যু (Apoptosis) থেকে রক্ষা করে [112,113]।

সুতরাং, PI3K পাথওয়ে পরোক্ষভাবে anti-apoptotic প্রোটিনকে (Bcl-2) মুক্ত ও সক্রিয় করে কোষের বাঁচার সম্ভাবনা বাড়ায়।

---

### MAP Kinase Cascades (ERK, JNK, p38)

**[Q025 / Q029] MARKS: 12**  
**The MAPK Cascade — Classification and Functions**

**Ans:** **MAP kinase (Mitogen-Activated Protein kinase)** সিগন্যালিং হলো একটি **three-tier kinase cascade** (তিন স্তরের ফসফোরাইলেশন চেইন) যা কোষের সারফেস থেকে সংকেত সোজা নিউক্লিয়াসে পাঠায় [95,245]।

**সাধারণ গঠন:**
\`\`\`
Stimulus (Growth factor / Stress)
       ↓
MAPKKK (MAP Kinase Kinase Kinase) — e.g., Raf
       ↓
MAPKK (MAP Kinase Kinase) — e.g., MEK1/2
       ↓
MAPK (MAP Kinase) — e.g., ERK1/2
       ↓
Transcription factors (Nuclear response)
\`\`\`

**তিনটি প্রধান MAPK Pathways:**

| Pathway | MAPKKK | MAPKK | MAPK | Activating Stimulus | Cellular Response |
|---------|--------|-------|------|---------------------|-------------------|
| **ERK pathway** | Raf | MEK1/2 | ERK1/2 | Growth factors, mitogens (via Ras) | Proliferation, differentiation, survival [95,245] |
| **JNK pathway** | ASK1 | MKK4/7 | JNK | UV rays, heat shock, inflammatory cytokines | Apoptosis, stress response, inflammation [102,196] |
| **p38 pathway** | TAK1 | MKK3/6 | p38 | Inflammatory cytokines, osmotic stress | Inflammation, cell cycle arrest [102,196] |

**Serine/Threonine Phosphorylation Cascade by Ras (ERK Pathway in Detail):**
১. **Ras activation:** GTP-bound Ras সক্রিয় হয়ে **Raf (MAPKKK)**-কে সাইটোসোল থেকে মেমব্রেনে টেন আনে।
২. **Raf activation:** মেমব্রেনে আসলে Raf সক্রিয় হয়। এটি একটি Serine/Threonine kinase [16,189]।
৩. **MEK activation:** Raf এরপর **MEK1/2 (MAPKK)**-কে Serine residue-তে phosphorylate করে সক্রিয় করে।
৪. **ERK activation:** MEK একটি dual-specificity kinase। এটি **ERK1/2 (MAPK)**-এর Threonine এবং Tyrosine উভয় স্থানেই (Thr183, Tyr185) phosphorylate করে তাকে সম্পূর্ণ সক্রিয় করে [95,248]।
৫. **Cellular response:** সক্রিয় ERK নিউক্লিয়াসে প্রবেশ করে Elk-1 বা c-Fos এর মতো transcription factor-কে phosphorylate করে কোষ বিভাজনের জিন (immediate early genes) চালু করে।

**স্যারের স্লাইড থেকে:** "The MAP kinase cascade is highly conserved and relays signals from the plasma membrane to the nucleus. One activated MAPKKK can activate many MAPKK, providing massive signal amplification."

---

### ERK in Cell Differentiation & SH2 Domains

**[Q026] MARKS: 5**  
**ERK in Cell Differentiation [3]**

**Ans:** ERK সাধারণত কোষ বিভাজন (Proliferation) করায়। কিন্তু সিগন্যালের **duration (স্থায়িত্ব)**-এর উপর নির্ভর করে এটি কোষের differentiation (বিশেষায়ন)-ও ঘটাতে পারে।

**Classical Model (PC12 cells):**
* **Transient ERK (ক্ষণস্থায়ী):** EGF (Epidermal Growth Factor) দিলে ERK মাত্র কয়েক মিনিটের জন্য সক্রিয় হয়। এতে কোষ শুধু বিভাজিত হয় (Proliferation) [96,99]।
* **Sustained ERK (দীর্ঘস্থায়ী):** NGF (Nerve Growth Factor) দিলে ERK কয়েক ঘণ্টা ধরে সক্রিয় থাকে। দীর্ঘস্থায়ী সিগন্যালের কারণে কোষ বিভাজন বন্ধ করে দেয় এবং **neuronal differentiation** শুরু করে (অ্যাক্সন তৈরি করে স্নায়ুকোষে পরিণত হয়) [96,99]।

**Mechanism:** Sustained ERK নিউক্লিয়াসে ক্রমাগত Elk-1 এবং CREB-কে phosphorylate করে differentiation-এর জন্য প্রয়োজনীয় specific জিনের (যেমন- neurofilaments) expression ঘটায়।

**[Q030 part 1] What are SH2 Domains? [2]**

**Ans:** **SH2 (Src Homology 2) domain** হলো প্রোটিনের একটি বিশেষ অংশ (~100 amino acids) যা শুধুমাত্র কনফর্মেশনগতভাবে **phosphotyrosine (pTyr)**-এর সাথে নির্দিষ্টভাবে যুক্ত হতে পারে [17,110,156]।

* যখন RTK নিজে autophosphorylate হয় (Tyr-এ ফসফেট যুক্ত হয়), তখন SH2 domain-যুক্ত প্রোটিনগুলো (যেমন Grb2, PI3K, STAT) ভাসতে ভাসতে এসে ঠিক ওই phosphorylated tyrosine-এর সাথে ছাঁচের মতো (lock-and-key) আটকে যায়।
* ফসফেট না থাকলে SH2 domain যুক্ত হতে পারে না [156,314]।

---

### Insulin Signaling & Glycogen Metabolism

**[Q030/Q075] MARKS: 5**  
**Role of Insulin in Glycogen Metabolism**

**Ans:** ইনসুলিন (Insulin) রক্তে গ্লুকোজ বেড়ে গেলে নিঃসৃত হয় এবং লিভার বা পেশীর কোষে গ্লাইকোজেন (glycogen) তৈরিতে সাহায্য করে।

**Pathway:**
১. **Receptor binding:** Insulin তার Receptor Tyrosine Kinase (α₂β₂ tetramer)-এ bind করে। ফলে β-subunit autophosphorylation হয় [19,20]।
২. **IRS-1 recruitment:** Phosphorylated receptor-টি **IRS-1 (Insulin Receptor Substrate-1)** নামক adaptor-কে phosphorylate করে।
৩. **PI3K activation:** PI3K তার p85 সাবইউনিটের **SH2 domain** দিয়ে IRS-1-এর phosphotyrosine-এ যুক্ত হয়ে সক্রিয় হয় [24,343]।
৪. **Akt activation:** PI3K মেমব্রেনে PIP₃ তৈরি করে, যা **Akt (PKB)**-কে মেমব্রেনে টেনে এনে সক্রিয় করে।
৫. **GSK3 inactivation:** সক্রিয় Akt তখন **GSK3 (Glycogen Synthase Kinase 3)**-কে phosphorylate করে। মজার ব্যাপার হলো, phosphorylate হলে GSK3 **নিষ্ক্রিয় (inactivated)** হয়ে যায় [19,20]।
৬. **Glycogen Synthesis:** সাধারণভাবে GSK3 গ্লাইকোজেন তৈরি বন্ধ রাখে (Glycogen Synthase-কে ফসফোরাইলেট করে)। কিন্তু Akt যখন GSK3-কে নিষ্ক্রিয় করে দেয়, তখন **Glycogen Synthase সক্রিয় হয়ে মাথা চাড়া দেয়** এবং গ্লুকোজকে জোড়া লাগিয়ে গ্লাইকোজেন তৈরি শুরু করে [19,20]।

**মনে রাখার ট্রিক:** "Insulin → PI3K → Akt → Kills GSK3 → Frees Glycogen Synthase → Glycogen made!"`,
        rawMd_en: `### Enzyme-Linked Receptors & Cancer

**[Q023] MARKS: 6**  
**a) Types of Enzyme-Linked Receptors and General Properties [3]**

**Ans:** Enzyme-linked receptors are **single-pass transmembrane proteins** that either act as enzymes themselves or are directly associated with an enzyme.

| Type | Enzyme Activity | Example Ligand | Example Receptor |
|------|-----------------|----------------|------------------|
| **Receptor Tyrosine Kinases (RTKs)** | Phosphorylates Tyrosine (Tyr) residues on targets [184,185] | EGF, PDGF, Insulin, NGF | EGFR, PDGFR, InsR [201,343] |
| **Receptor Serine/Threonine Kinases** | Phosphorylates Serine/Threonine (Ser/Thr) residues | TGF-β, BMP, Activin | TβRI, TβRII, BMPRI [14,37] |
| **Receptor Guanylyl Cyclases** | Directly synthesizes cGMP from GTP | ANF, BNP | NPR-A, NPR-B [38,232] |
| **Receptor Tyrosine Phosphatases** | Removes phosphate from Tyrosine residues | Pleiotrophin | RPTPζ, CD45 |
| **Tyrosine-kinase-associated receptors** | Not a kinase itself, but recruits cytoplasmic kinases (like JAK) | Cytokines (IL-2, IL-6), Interferons | IFN-γR, IL-2R [185] |

**General Properties:**
1. **Single transmembrane domain:** Unlike the 7-pass GPCRs, these cross the membrane only once (a single α-helix) [83,184].
2. **Ligand-induced dimerization:** Binding of the extracellular ligand causes two receptors to come together to form a dimer.
3. **Trans-autophosphorylation:** Once dimerized, the internal kinase domains of the two receptors phosphorylate each other to become fully active.
4. **Slow but sustained response:** Response time is slower (minutes to hours) compared to GPCRs but lasts much longer.
5. **No second messenger required:** In most cases, the receptor acts as the effector directly or recruits proteins without needing second messengers (exception: PI3K pathway).

**From Sir's Slide:** *"Ligand binding to enzyme-linked receptors usually promotes their dimerization, which activates their kinase domains causing them to phosphorylate themselves on specific tyrosine residues."*

---

**b) "Structural modifications of enzyme-linked receptors may lead to cancer" — Explain [3]**

**Ans:** Normally, RTK signaling is strictly controlled. They activate when a ligand is present and are degraded in lysosomes when the job is done. 

However, structural modifications due to DNA mutations can lead to uncontrolled signaling and cancer:

| Mutation Type | Mechanism | Example in Cancer |
|--------------|-----------|---------|
| **Point mutations in kinase domain** | The kinase domain stays permanently "ON" (constitutively active) even without a ligand. | EGFR mutation in lung cancer (L858R) |
| **Receptor overexpression** | Too many receptors on the membrane collide and dimerize even without ligands. | HER2 amplification in breast cancer |
| **Gene fusion** | Two genes fuse to create a hybrid, non-stop active kinase protein. | BCR-ABL in Chronic Myeloid Leukemia (CML) |
| **Deletion of extracellular domain** | The ligand-binding part is lost, removing inhibitory control. This is the **ErbB oncoprotein**. | EGFRvIII in glioblastoma [45,201] |

**Result:** These mutations keep the cell in a constant "Divide Now" state, leading to tumor formation and Cancer.

---

### Ras Protein & PI3K/Akt Survival Signaling

**[Q024] MARKS: 5**  
**a) Ras Protein and Its Role in Cancer [3]**

**Ans:** **Ras** is a **monomeric GTPase** (a small, single-subunit G-protein, ~21 kDa) that acts as a vital molecular switch for cell division [89,92].

**Normal Ras Cycle:**
* **Inactive State:** Bound to GDP.
* **Activation:** RTK activation recruits **SOS** (a GEF), which kicks out GDP and puts in GTP → **Ras-GTP (Active)** [93,249].
* **Inactivation:** After its job, a **RasGAP** protein speeds up Ras's internal "timer" to break down GTP back into GDP → **Ras-GDP (Inactive)** [92,244].

**Ras and Cancer:**
* Mutations in Ras genes (like KRAS) are found in ~**30% of human cancers** (pancreatic, lung, etc.) [40,203].
* The common mutation (like G12V) causes Ras to **LOSE its intrinsic GTPase activity**.
* Effectively, its "Off Timer" is broken. Ras gets stuck in the **Permanent ON** (GTP-bound) position.
* It sends a non-stop "Divide" signal through the MAPK pathway, leading to cancer.

---

**b) "Active PI-3 kinase stimulates expression of anti-apoptotic proteins" — justify. [2]**

**Ans:** **PI3K (Phosphoinositide 3-kinase)** is a major "Survival Pathway" for cells [112,249]. 

**Justification:**
1. Active RTK or Ras triggers **PI3K** on the membrane.
2. PI3K converts the membrane lipid PIP₂ into **PIP₃**.
3. PIP₃ recruits **Akt (PKB)** kinase to the membrane, where it is activated.
4. Active Akt then phosphorylates and **disables Bad** (a cell-death promoting protein) [112,250].
5. This frees up **Bcl-2** (a pro-survival protein) which was being held back by Bad.
6. The free **Bcl-2** then protects the mitochondria and prevents **Apoptosis** (cell death) [112,113].

Thus, the PI3K pathway indirectly activates anti-apoptotic proteins (Bcl-2) to ensure the cell stays alive.

---

### MAP Kinase Cascades (ERK, JNK, p38)

**[Q025 / Q029] MARKS: 12**  
**The MAPK Cascade — Classification and Functions**

**Ans:** **MAP kinase (Mitogen-Activated Protein kinase)** signaling is a **three-tier kinase cascade** that relays signals from the cell surface directly to the nucleus.

**The Hierarchical Structure:**
\`\`\`
Stimulus (Growth factor / Stress)
       ↓
MAPKKK (e.g., Raf)
       ↓
MAPKK (e.g., MEK1/2)
       ↓
MAPK (e.g., ERK1/2)
       ↓
Transcription factors (Nuclear response)
\`\`\`

**Three Major MAPK Pathways:**

| Pathway | MAPKKK | MAPKK | MAPK | Stimulus | Response |
|---------|--------|-------|------|----------|----------|
| **ERK Pathway** | Raf | MEK1/2 | ERK1/2 | Growth Factors (via Ras) | Proliferation & Survival |
| **JNK Pathway** | ASK1 | MKK4/7 | JNK | UV rays, Heat, Stress | Apoptosis & Inflammation |
| **p38 Pathway** | TAK1 | MKK3/6 | p38 | Stress & Cytokines | Inflammation & Cycle Arrest |

**The ERK Pathway in Detail (The Amplification Cascade):**
1. **Ras Activation**: Active Ras pulls **Raf (MAPKKK)** from the cytoplasm to the membrane.
2. **Raf Activation**: Once at the membrane, Raf (a Ser/Thr kinase) becomes active [16,189].
3. **MEK Activation**: Raf phosphorylates **MEK (MAPKK)** to turn it on.
4. **ERK Activation**: MEK is a unique "dual-specificity" kinase that adds phosphates to both Threonine and Tyrosine on **ERK (MAPK)** to fully activate it [95,248].
5. **Nuclear Action**: Active ERK enters the nucleus to activate gene switches (like c-Fos) for cell division.

**From Sir's Slide:** *"The MAP kinase cascade is highly conserved and relays signals from the plasma membrane to the nucleus. One activated MAPKKK can activate many MAPKK, providing massive signal amplification."*

---

### ERK in Cell Differentiation & SH2 Domains

**[Q026] MARKS: 5**  
**ERK in Cell Differentiation [3]**

**Ans:** While ERK usually drives cell division, the **duration** of the signal determines if a cell will just divide or actually change its type (differentiation).

**The PC12 Cell Model:**
* **Transient ERK (Short Duration):** Adding EGF triggers ERK for just minutes, causing the cells to divide (**Proliferation**) [96,99].
* **Sustained ERK (Long Duration):** Adding NGF keeps ERK active for hours. This long signal forces the cell to stop dividing and turn into a **Neuron** (Differentiation) [96,99].

**Mechanism**: Sustained ERK keeps nuclear switches active long enough to build complex neuronal structures (neurofilaments).

**[Q030 part 1] What are SH2 Domains? [2]**

**Ans:** **SH2 (Src Homology 2)** is a specific protein module (~100 amino acids) that acts like a "sensor" for **phosphotyrosine (pTyr)** residues [17,110,156].

* When a receptor phosphorylates its own tyrosine (RTK activation), SH2-containing proteins (like Grb2 or PI3K) recognize it and snap onto it like a **lock-and-key**.
* Without that phosphate "tag" on the tyrosine, the SH2 domain cannot bind. This ensures only active receptors recruit signaling help [156,314].

---

### Insulin Signaling & Glycogen Metabolism

**[Q030/Q075] MARKS: 5**  
**Role of Insulin in Glycogen Metabolism**

**Ans:** Insulin is released when blood sugar is high. It signals liver and muscle cells to store glucose as glycogen.

**The Pathway:**
1. **Binding**: Insulin binds its RTK receptor, causing internal phosphorylation [19,20].
2. **IRS-1 Recruitment**: The receptor phosphorylates an adapter protein called **IRS-1**.
3. **PI3K Activation**: PI3K uses its **SH2 domain** to bind to IRS-1 and becomes active [24,343].
4. **Akt Activation**: PI3K makes PIP₃, which pulls **Akt (PKB)** to the membrane to activate it.
5. **GSK3 Inactivation**: Active Akt phosphorylates **GSK3**. Interestingly, phosphorylation **TURNS OFF** GSK3 [19,20].
6. **Glycogen Synthesis**: Normally, GSK3 stops glycogen from being made. But because Akt has "killed" (inactivated) GSK3, the enzyme **Glycogen Synthase** is now free to build glycogen non-stop!

**Memory Trick:** *"Insulin triggers PI3K → Akt kills the 'Guard' (GSK3) → Now 'Builder' (Glycogen Synthase) is free to build!"*`
    },
    {
        id: "set4",
        title: "🔹 SET 4 — Proteolysis & Cell Fate Signaling (Notch, Wnt, NF-κB)",
        rawMd_bn: `### Notch Processing by Proteolytic Cleavage

**[Q032] MARKS: 14**  
**a) Processing and activation of Notch by proteolytic cleavage [3]**

**Ans:** Notch সিগন্যালিং একটি ভিন্ন ধরণের মেকানিজম, যেখানে সিগন্যাল পাঠানোর জন্য রিসেপ্টরটিকে সরাসরি **তিনবার কেটে টুকরো (proteolytic cleavage)** হতে হয়। এটি **Contact-dependent / Juxtacrine signaling**-এর সেরা উদাহরণ [23,101]।

**The 3 Cleavages (৩টি কর্তন):**

| Cleavage | Protease (এনজাইম) | Location | Trigger & Effect |
|----------|----------|----------|--------|
| **S1** | **Furin** | Trans-Golgi | কোষের ভেতরে তৈরি হওয়ার সময়ই এটি কাটা পড়ে Heterodimer তৈরি করে, যা মেমব্রেনে যায় [52,125]। |
| **S2** | **ADAM10 / TACE** | Extracellular (মেমব্রেনের ঠিক বাইরে) | যখন পাশের কোষের **Delta ligand** এসে Notch-এ bind করে, তখন একটি টান পড়ে এবং ADAM এনজাইম বাইরের অংশটি কেটে ফেলে [52,126]। |
| **S3** | **γ-secretase** | Transmembrane (মেমব্রেনের ভেতরে) | S2 কাটার সাথে সাথেই γ-secretase মেমব্রেনের ভেতরের ডোমেনটি কেটে দেয়। এর ফলে সাইটোসোলিক অংশ **NICD (Notch Intracellular Domain)** মুক্ত হয় [53,126]। |

**Activation:** মুক্ত হওয়া NICD সরাসরি নিউক্লিয়াসে চলে যায়। সেখানে এটি **CSL (CBF1)** নামক একটি transcription factor-এ bind করে। CSL এতক্ষণ কাজ বন্ধ করে রাখছিল (repressor), কিন্তু NICD যুক্ত হতেই এটি activator-এ পরিণত হয় এবং MAML-কে রিক্রুট করে **Hes / Hey** জিনের expression শুরু করে [51,124]।

**স্যারের স্লাইড থেকে:** "The Notch receptor undergoes three successive proteolytic cleavage steps; the last two depend on ligand binding. The final cleavage releases the intracellular domain of the receptor (NICD), which translocates to the nucleus to directly control gene transcription."

---

### β-Catenin & The Destruction Complex

**b) Consequences of β-Catenin binding to the degradation complex [4]**

**Ans:** Wnt সিগন্যাল যখন থাকে না (Wnt OFF state), তখন কোষের সাইটোসোলে **Destruction Complex (ধ্বংসকারী প্রোটিন গুচ্ছ)** বসে থাকে β-Catenin-কে ধ্বংস করার জন্য [57,131]। 

**The Destruction Complex components:**
* **APC (Adenomatous polyposis coli):** Scaffold বা মাচা হিসেবে কাজ করে।
* **Axin:** প্রধান scaffold প্রোটিন।
* **GSK3β (Glycogen synthase kinase 3β):** প্রধান Kinase এনজাইম।
* **CK1α (Casein kinase 1α):** Priming (প্রাথমিক) Kinase।

**What happens step-by-step:**
১. সাইটোসোলের মুক্ত **β-catenin** এই Destruction complex-এর Axin-এর সাথে bind করে।
২. **CK1α** প্রথমে β-catenin-এর Ser45 পজিশনে একটি ফসফেট বসায় (priming) [57,132]।
৩. এরপর **GSK3β** পরপর কয়েকটি স্থানে (Thr41, Ser37, Ser33) ফসফেট যুক্ত করে [57,132]।
৪. ফসফোরাইলেটেড β-catenin-কে **β-TrCP** নামক E3 ubiquitin ligase চিনে ফেলে এবং এতে **ubiquitin** ট্যাগ লাগিয়ে দেয়।
৫. Ubiquitin ট্যাগযুক্ত β-catenin-কে কোষের ময়লা ফেলার জায়গা **26S proteasome** এসে কুচি কুচি করে কেটে ধ্বংস (Degrade) করে দেয় [57,62]।

**Consequence (ফলাফল):** β-catenin ধ্বংস হয়ে যাওয়ায় তা নিউক্লিয়াসে যেতে পারে না। ফলে TCF/LEF ট্রান্সক্রিপশন ফ্যাক্টরগুলো Groucho নামক repressor-এর সাথে আটকে থাকে এবং Wnt-এর target জিনগুলো (c-Myc, Cyclin D1) বন্ধ থাকে [62,133]। কোষ সাধারণ অবস্থায় থাকে, অতিরিক্ত বিভাজিত হয় না।

---

### NF-κB Pathway Activation by TNFα

**c) Activation of NF-κB Pathway by TNFα [7]**

**Ans:** **NF-κB** হলো একটি transcription factor যা কোষের inflammation, survival এবং immune response-এর জন্য দায়ী। সাধারণত এটি সাইটোসোলে **IκB (Inhibitor of κB)** দ্বারা বন্দি অবস্থায় নিষ্ক্রিয় থাকে।

**Canonical Pathway via TNFα (ধাপে ধাপে):**

১. **Ligand Binding:** ইনফ্ল্যামেটরি সাইটোকাইন **TNFα** এসে তার রিসেপ্টর **TNFR1**-এ bind করে, ফলে রিসেপ্টর trimerization হয় [67,138]।
২. **Adaptor Recruitment:** TNFR1-এর সাইটোপ্লাজমিক অঙ্গে (Death domain) TRADD, TRAF2 এবং **RIP1** নামক প্রোটিনগুলো যুক্ত হয়।
৩. **Kinase Activation:** RIP1 তখন **TAK1** নামক একটি কাইনেজকে সক্রিয় করে।
৪. **IKK Complex Activation:** সক্রিয় TAK1 তখন **IKK complex (IKKα, IKKβ, NEMO/IKKγ)**-কে সক্রিয় করে [67,138]।
৫. **IκB Phosphorylation:** সক্রিয় IKKβ গিয়ে NF-κB-কে বন্দি করে রাখা **IκB** প্রোটিনটিকে ফসফোরাইলেট (Ser32, Ser36) করে [66,138]।
৬. **IκB Degradation:** ফসফোরাইলেটেড IκB-কে ubiquitin ট্যাগ লাগিয়ে proteasome দ্বারা ধ্বংস করে দেওয়া হয় [67,138]।
৭. **NF-κB Translocation:** IκB মরে যাওয়ায় **NF-κB (p65/p50 dimer)** মুক্ত হয়ে পড়ে এবং এর NLS (Nuclear Localization Signal) উন্মুক্ত হয়। এটি সোজা নিউক্লিয়াসে ঢুকে পড়ে।
৮. **Gene Expression:** নিউক্লিয়াসে গিয়ে NF-κB নির্দিষ্ট κB site-এ বাইন্ড করে প্রদাহ সৃষ্টিকারী (IL-6, IL-8) এবং জীবন রক্ষাকারী (Bcl-2, Bcl-xL) জিন চালু করে দেয় [65,138]।

**স্যারের স্লাইড থেকে:** "The NF-κB proteins are latent gene regulatory proteins that lie at the heart of most inflammatory responses. In unstimulated cells, they are kept inactive in the cytosol by binding to an inhibitory protein called IκB."

---

### Wnt Signaling in Development

**[Q039] MARKS: 7**  
**Describe Wnt signaling pathway and its role in development.**

**Ans:** (Wnt OFF state আগেই b-তে ব্যাখ্যা করা হয়েছে। এখানে **Wnt ON statement** দেওয়া হলো)

**When Wnt is Present (Wnt ON):**
১. **Ligand Binding:** Wnt প্রোটিন এসে **Frizzled** (GPCR-like) রিসেপ্টর এবং তার কো-রিসেপ্টর **LRP5/6**-এ bind করে [58,59,129]।
২. **Dishevelled Activation:** Frizzled তখন সাইটোসোলিক প্রোটিন **Dishevelled (Dvl)**-কে সক্রিয় করে মেমব্রেনে টেনে আনে।
৩. **Destruction Complex Disassembly:** Dvl তখন Axin-কে মেমব্রেনের LRP5/6-এর কাছে টেনে নেয়। এর ফলে Destruction complex (APC, Axin, GSK3) ভেঙে যায় (Disassembled) [59,62,133]।
৪. **GSK3 Inhibition:** GSK3 আর β-catenin-কে phosphorylate করতে পারে না।
৫. **β-Catenin Accumulation:** ফসফোরাইলেশন না হওয়ায় β-catenin ধ্বংস হয় না। এটি সাইটোসোলে বিপুল পরিমাণে জমতে থাকে (accumulates) এবং নিউক্লিয়াসে প্রবেশ করে।
৬. **Gene Expression:** নিউক্লিয়াসে গিয়ে β-catenin **TCF/LEF** ট্রান্সক্রিপশন ফ্যাক্টর থেকে Groucho (repressor)-কে লাথি মেরে বের করে দেয় এবং co-activator নিয়ে Wnt target জিনগুলো (যেমন c-Myc, Cyclin D1) চালু করে কোষ বিভাজন ফাস্ট করে দেয় [120,209]।

**Role in Development (বিকাশে ভূমিকা):**
* **Axis Patterning:** ভ্রূণের 앞-পেছন এবং পিঠ-পেট (anterior-posterior, dorsal-ventral axis) নির্ধারণে Wnt গ্রেডিয়েন্ট কাজ করে।
* **Tissue Regeneration:** অন্ত্রের (intestine) স্টেম সেলগুলো আজীবন টিকে থাকে Wnt সিগন্যালের কারণে। Wnt বন্ধ হলে স্টেম সেল ধ্বংস হয়ে যায়।
* **Limb Development:** হাত-পায়ের সঠিক বিকাশে Wnt কাজ করে।

---

### Lateral Inhibition & Cancer

**[Q034] MARKS: 6**  
**a) Lateral Inhibition via Notch-Delta Signaling [3]**

**Ans:** **Lateral inhibition (পার্শ্বীয় বাধা)** হলো এমন একটি মেকানিজম যেখানে একটি কোষ নিজে কোনো একটি নির্দিষ্ট cell fate (যেমন- নিউরন হওয়া) গ্রহণ করে এবং তার চারপাশের প্রতিবেশী কোষগুলোকে একই fate গ্রহণ করতে জোরালোভাবে বাধা দেয় [49,123]। 

**Mechanism:**
১. ভ্রূণের অবস্থার শুরুতে একগুচ্ছ কোষের সবার গায়েন উভয়ই (Notch receptor এবং Delta ligand) থাকে।
২. যেকোনো কারণে (Stochastic fluctuation) একটি কোষে সামান্য বেশি **Delta** তৈরি হয়।
৩. সেই কোষের বেশি Delta তার পাশের কোষগুলোর **Notch**-কে সক্রিয় করে দেয়।
৪. পাশের কোষগুলো Notch সিগন্যাল পেয়ে **Hes/Hey** জিন চালু করে, যার ফলে তাদের নিজেদের Delta তৈরি হওয়া পুরোপুরি বন্ধ হয়ে যায় (Cis-inhibition suppressed) [49,125]।
৫. ফলে যেই কোষটা শুরু করেছিল, সে নিরিবিলি নিউরন (Neuroblast) হয়ে যায়, এবং তার চাপায় বাকি কোষগুলো সাধারণ এপিডার্মাল কোষে পরিণত হয়। ড্রোসোফিলা মাছিদের স্নায়ুতন্ত্র এভাবেই তৈরি হয়।

**b) APC Gene Mutation and Cancer [3]**

**Ans:** **APC (Adenomatous Polyposis Coli)** হলো একটি গুরুত্বপূর্ণ tumor suppressor gene [61,134]।

* **Normal function:** স্বাভাবিক অবস্থায় এটি Wnt পাথওয়ের Destruction complex-এর একটি মাচা (scaffold) হিসেবে কাজ করে, যা β-catenin-কে আটকে ধরে ধ্বংস করতে সাহায্য করে [57,131]।
* **Mutation & Cancer:** যদি কোনো কারণে APC জিনে মিউটেশন হয় (যেমন FAP বা Familial Adenomatous Polyposis নামক বংশগত রোগে), তাহলে Destruction complex আর গঠিত হতে পারে না [61,134]।
* **Consequence:** এর ফলে Wnt সিগন্যাল ছাড়াই কোষে প্রচুর পরিমাণে **β-catenin** জমতে থাকে। β-catenin নিউক্লিয়াসে গিয়ে c-Myc এবং Cyclin D1 জিন অবিরাম চালু রাখে।
* **Result:** অন্ত্রের কোষে অনিয়ন্ত্রিত বিভাজন হয়, যার ফলে শত শত পলিপস (polyps) তৈরি হয় এবং শেষমেশ তা **Colorectal Cancer** (মলাশয়ের ক্যানসার)-এ পরিণত হয় [61,134]।`,
        rawMd_en: `### Notch Processing by Proteolytic Cleavage

**[Q032] MARKS: 14**  
**a) Processing and activation of Notch by proteolytic cleavage [3]**

**Ans:** Notch signaling is a unique mechanism where the receptor must be physically **cleaved (cut into pieces)** three times to send its signal. It is the classic example of **Contact-dependent (Juxtacrine) signaling** [23,101].

**The 3 Cleavages (Sequential Cuts):**

| Cleavage | Protease (Enzyme) | Location | Trigger & Effect |
|----------|----------|----------|--------|
| **S1** | **Furin** | Trans-Golgi | Occurs during receptor synthesis. It cuts Notch into two subunits that stay held together as they move to the membrane [52,125]. |
| **S2** | **ADAM10 / TACE** | Extracellular Surface | Triggered only when the **Delta ligand** (from a neighbor cell) binds. It pulls Notch, exposing the "cut site" for ADAM to remove the outer part [52,126]. |
| **S3** | **γ-secretase** | Inside Membrane | Immediately after S2, the γ-secretase complex cuts the internal part. This frees the **NICD (Notch Intracellular Domain)** into the cytosol [53,126]. |

**Activation:** The freed NICD travels directly into the nucleus. It binds to a protein called **CSL**. Previously, CSL was blocking genes, but once NICD joins, it turns into an **activator** and switches on genes like **Hes / Hey** to determine cell fate [51,124].

**From Sir's Slide:** *"The Notch receptor undergoes three successive proteolytic cleavage steps; the last two depend on ligand binding. The final cleavage releases the intracellular domain of the receptor (NICD), which translocates to the nucleus to directly control gene transcription."*

---

### β-Catenin & The Destruction Complex

**b) Consequences of β-Catenin binding to the degradation complex [4]**

**Ans:** When the Wnt signal is absent (Wnt OFF state), a group of proteins called the **Destruction Complex** waits in the cell's fluid to capture and destroy the messenger protein β-Catenin [57,131].

**The "Destruction Squad" Components:**
* **APC**: The main structure (scaffold) that holds everything together.
* **Axin**: Another structural support protein.
* **GSK3β**: The main kinase that "tags" β-catenin for death.
* **CK1α**: The initial "primer" kinase.

**What happens step-by-step:**
1. Free **β-catenin** in the cytosol is "captured" by Axin in this complex.
2. **CK1α** adds the first phosphate "tag" to β-catenin [57,132].
3. **GSK3β** then adds several more phosphate tags.
4. An enzyme called **β-TrCP** recognizes these death tags and attaches **Ubiquitin** (the cell's "trash" label) to β-catenin.
5. The **26S Proteasome** (the cell's shredder) finds the labeled β-catenin and destroys it entirely [57,62].

**The Result:** Because β-catenin is destroyed, it cannot reach the nucleus. Genes that drive cell division (like c-Myc) remain **Switched OFF**. The cell behaves normally and does not over-divide.

---

### NF-κB Pathway Activation by TNFα

**c) Activation of NF-κB Pathway by TNFα [7]**

**Ans:** **NF-κB** is a critical transcription factor for immunity and inflammation. In a quiet cell, it is held "hostage" in the cytosol by an inhibitor called **IκB**.

**How the Signal Sets it Free (Canonical Pathway):**
1. **Binding**: The inflammatory protein **TNFα** binds to its receptor (TNFR1), causing it to cluster into groups of three [67,138].
2. **Kinase Activation**: This recruits helper proteins that activate a master kinase called **TAK1**.
3. **IKK Complex Power-up**: TAK1 activates the **IKK complex** [67,138].
4. **IκB Phosphorylation**: The active IKK complex "stabs" the inhibitor **IκB** with phosphate tags [66,138].
5. **IκB Shredded**: The cell's proteasome recognizes the tags and destroys IκB, finally releasing NF-κB from its chains!
6. **Nuclear Entry**: Freed **NF-κB** enters the nucleus.
7. **Action**: It turns on genes for inflammation (IL-6) and cell survival (Bcl-2) to fight infection or stress [65,138].

**From Sir's Slide:** *"The NF-κB proteins are latent gene regulatory proteins that lie at the heart of most inflammatory responses. In unstimulated cells, they are kept inactive in the cytosol by binding to an inhibitory protein called IκB."*

---

### Wnt Signaling in Development

**[Q039] MARKS: 7**  
**Describe Wnt signaling pathway and its role in development.**

**Ans:** When the Wnt signal arrives (**Wnt ON state**), the cell's behavior changes dramatically:

**The Activation Sequence:**
1. **Binding**: Wnt binds to its receptors (**Frizzled** and **LRP5/6**) on the surface [58,59,129].
2. **Recruitment**: This pulls a protein called **Dishevelled (Dvl)** to the membrane.
3. **Complex Shutdown**: Dvl pulls the "Destruction Squad" (Axin/GSK3) to the membrane, causing it to **disassemble** [59,62,133].
4. **β-Catenin Escapes**: Because the destruction complex is broken, **β-catenin** is no longer destroyed. It builds up in the cytoplasm and floods into the nucleus!
5. **Gene Activation**: In the nucleus, β-catenin kicks out negative blockers and starts the massive transcription of division genes like **c-Myc** and **Cyclin D1** [120,209].

**Role in Development:**
* **Mapping the Body**: Wnt gradients help the embryo figure out which end is the "Head" and which is the "Tail."
* **Stem Cell Survival**: In our intestines, Wnt is required every day to keep stem cells alive so our gut can regenerate.
* **Building Limbs**: It's essential for the core patterning of fingers, toes, and limbs.

---

### Lateral Inhibition & Cancer

**[Q034] MARKS: 6**  
**a) Lateral Inhibition via Notch-Delta Signaling [3]**

**Ans:** **Lateral inhibition** is a competitive "winner-takes-all" mechanism where one cell chooses a fate (like becoming a brain cell) and forcefully tells its neighbors **NOT** to do the same [49,123].

**The Mechanism:**
1. Early on, all cells look the same and express both Notch and Delta.
2. By chance, one cell starts producing **slightly more Delta ligand**.
3. Its Delta activates the **Notch** receptors on its neighbors.
4. The neighbors receive a signal to **STOP** making their own Delta.
5. **The Winner**: The cell with the most Delta becomes a **Neuron**.
6. **The Losers**: The neighbors, having their Delta production suppressed, become basic skin cells (**Epidermis**). This is how our complex nervous system is built.

**b) APC Gene Mutation and Cancer [3]**

**Ans:** **APC** is a critical "Tumor Suppressor" gene that acts as a brake on cell division [61,134].

* **Normal Role**: It acts as the backbone of the destruction complex that kills β-catenin [57,131].
* **Mutation**: In inherited disorders like **FAP** (Polyposis), the APC gene is broken [61,134].
* **Disaster**: Without a working APC, the destruction complex cannot form. **β-catenin** builds up non-stop, even when NO Wnt signal is present.
* **Cancer**: The nucleus is flooded with "Divide" signals. This leads to hundreds of polyps in the colon, eventually turning into **Colorectal Cancer** [61,134].`
    }
];

// If geb331_sets is already defined (from geb331_data.js), we merge them.
if (typeof geb331_sets !== 'undefined') {
    // Find the current set3 and set4 and replace them, or push if not present
    const set3Index = geb331_sets.findIndex(s => s.id === "set3");
    if (set3Index !== -1) geb331_sets[set3Index] = geb331_sets_part2[0];
    else geb331_sets.push(geb331_sets_part2[0]);

    const set4Index = geb331_sets.findIndex(s => s.id === "set4");
    if (set4Index !== -1) geb331_sets[set4Index] = geb331_sets_part2[1];
    else geb331_sets.push(geb331_sets_part2[1]);
}
