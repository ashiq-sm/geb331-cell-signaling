const geb331_sets = [
{
id: "set1",
title: "🔹 SET 1 — PRINCIPLES OF CELL SIGNALING",
rawMd_bn: `### Intracellular Signaling Pathway
**[Q001] MARKS: 14**
a) Illustrate a simple intracellular signaling pathway activated by an extracellular signaling molecule. [3]
Ans: এই pathway-টির কাজ হলো extracellular signal (বহিঃকোষীয় সংকেত)-কে কোষের ভিতরে নিয়ে গিয়ে response (সাড়া) তৈরি করা।

| ধাপ | কী ঘটে | বিস্তারিত |
|---|---|---|
| ১ | Ligand binding | একটি extracellular signaling molecule (ligand — ল্যাটিন ligare = "to bind") target cell-এর receptor protein-এর সাথে bind করে [29, 59]। Hydrophilic ligand হলে receptor cell surface-এ, hydrophobic হলে intracellular-এ থাকে। |
| ২ | Receptor activation | Bind করার ফলে receptor-এ conformational change (conformare = "to shape" — মানে গঠনগত পরিবর্তন) হয়, যা receptor-কে activate করে [29, 148]। |
| ৩ | Signal relay | Activated receptor তখন এক বা একাধিক intracellular signaling protein-কে activate করে। এরা signal-টিকে কোষের ভিতরে relay (relayer = ফরাসি "to pass on") করে — এক প্রোটিন থেকে অন্য প্রোটিনে হস্তান্তর করে [29, 148]। |
| ৪ | Effector activation | Pathway-র শেষে থাকে effector protein (efficere = ল্যাটিন "to accomplish") — যেমন metabolic enzyme, gene regulator, বা cytoskeletal protein। এটাই চূড়ান্ত কাজটি করে [29, 60]। |
| ৫ | Cellular response | Effector protein সক্রিয় হয়ে কাজ করে — যেমন enzyme activate করা, ion channel খোলা, বা gene expression change করা [29, 148]। |

মনে রাখার ট্রিক: "Ligand binds → Receptor changes → Relay proteins pass → Effector acts → Cell responds"

**b) Compare synaptic and endocrine signaling. [3]**
Ans: এরা signaling-এর দুটি ভিন্ন পদ্ধতি — একটা দ্রুত ও স্থানীয় (synaptic) , অন্যটি ধীর ও দূরবর্তী (endocrine) ।

| Feature | Synaptic Signaling | Endocrine Signaling |
|---|---|---|
| Signal molecule | Neurotransmitter (neuron = স্নায়ু + transmittere = "to send") — যেমন acetylcholine, GABA, glutamate | Hormone (hormao = গ্রিক "to excite/stir up") — যেমন insulin, adrenaline, thyroid hormone |
| Delivery medium | সরাসরি synaptic cleft (synapsis = গ্রিক "connection") — অর্থাৎ দুই নিউরনের মধ্যবর্তী ফাঁকা জায়গা | Bloodstream (রক্তপ্রবাহ) — হরমোন রক্তের মাধ্যমে সারা শরীরে ছড়িয়ে পড়ে |
| Distance traveled | অত্যন্ত কম — ~20-50 nanometers (cleft-এর প্রস্থ) | অনেক দূর — দূরবর্তী target cell পর্যন্ত পৌঁছায় |
| Speed of response | দ্রুত — milliseconds — electrical signal + chemical release-এ মিলিসেকেন্ডে হয় | ধীর — minutes to hours — hormone transport করতে সময় লাগে |
| Specificity | একদম precise — শুধু post-synaptic neuron-টাই target | Broad — যেকোনো cell যার matching receptor আছে, সেটাই target হতে পারে |
| Signal removal | দ্রুত — neurotransmitter reuptake বা enzymatic degradation (যেমন AChE) | ধীর — hormone liver-এ metabolized হয় বা kidney-এ excreted হয় |

**c) Why are the speeds of responses to a variety of extracellular signals different? [3]**
Ans: Response-এর speed নির্ভর করে তিনটি প্রধান কারণের ওপর:

১. Response mechanism type:
- Post-translational modification (e.g. phosphorylation, ion channel opening) — milliseconds to seconds.
- Gene expression — minutes to hours.
২. Signal delivery method (Electrical vs Endocrine).
৩. Pathway length.

**d) How does a typical cell respond to specific combinations? [5]**
Ans: একটি কোষ একই সময়ে hundreds of different signals পায়। Cell-এর response নির্ভর করে combination-এর ওপর।
Integration mechanisms:
১. AND gate logic: Two different signals simultaneously needed.
২. OR gate logic: Multiple signals trigger same response.
৩. Scaffold proteins: Keep pathway proteins together.
৪. Combinatorial control of gene expression.
৫. Survival vs death decision: Without survival signals, cell defaults to apoptosis.

### Components of Cell Signaling
**[Q002] MARKS: 3**
What are components of cell signaling? Define signal transduction and write down its general features.
Ans:
Components of cell signaling (৭টি প্রধান উপাদান):
১. Signaling cell, ২. Signaling molecule / Ligand, ৩. Target cell, ৪. Receptor, ৫. Intracellular signaling proteins, ৬. Second messengers, ৭. Effector proteins.

Signal transduction (transducere = ল্যাটিন "to lead across" — মানে এক রূপ থেকে অন্য রূপে নিয়ে যাওয়া):
যে process-এ extracellular signal-কে intracellular chemical signal-এ convert করা হয়।

General features (৫টি প্রধান বৈশিষ্ট্য):
- Specificity: Lock-and-key model.
- Amplification: ১টি molecule অনেক signal তৈরি করতে পারে।
- Integration: Multiple signals একসাথে প্রসেস হয়।
- Desensitization / Adaptation: Long-term exposure-এ cell response কমিয়ে দেয়।
- Modularity: Conserved domains (SH2, SH3) reuse হয়।

### Ligand–Receptor Interactions
**[Q003] MARKS: 3**
"Binding on same receptor a ligand may elicit different pattern of responses in different types of cells" — explain.
Ans: কারণ different cell types-এ different intracellular machinery থাকে।
৪টি কারণ:
১. Different downstream signaling proteins (e.g. different G-proteins).
২. Different effector proteins.
৩. Different gene expression patterns.
৪. Different scaffold proteins.
Classic Example: Acetylcholine (ACh)
- Heart pacemaker: M2 receptor → Gᵢ → Heart rate slows down.
- Salivary gland: M3 receptor → Gq → Saliva secretion increases.
- Smooth muscle: M3 receptor → Gq → Contraction.

### Dual‑Function Molecules
**[Q004] MARKS: 3**
"Same signaling molecule can be receptor and effector for a particular ligand" — explain.
Ans: Best উদাহরণ হলো nuclear receptors।
Mechanism:
১. Ligand entry: Hydrophobic ligand সরাসরি plasma membrane ভেদ করে।
২. Receptor binding: ভেতরে nuclear receptor-এর সাথে bind করে।
৩. DNA binding: Complex সরাসরি DNA-তে HRE sequence-তে bind করে।
৪. Gene regulation: নিজেই transcription factor হিসেবে কাজ করে। (Thus acts as both receptor and effector).

### Cell Signaling Molecules
**[Q006] MARKS: 14**
**a) What are the cell signaling molecules? [5]**
Ans: Chemical substances যা একটি কোষ থেকে secrete হয়ে অন্য কোষে গিয়ে information transfer করে। Examples: Hormones, Neurotransmitters, Local mediators, Contact-dependent signals.

**b) Mention different types of signal methods. [5]**
Ans: Endocrine (bloodstream), Paracrine (local fluid), Synaptic (neurotransmitter), Contact-dependent / Juxtacrine.

**c) Write examples of hydrophilic and hydrophobic signaling molecules. [4]**
Ans:
- Hydrophilic: Insulin, Epinephrine, Growth factors. (Cells surface receptors).
- Hydrophobic: Steroid hormones, Nitric Oxide. (Intracellular receptors).

### Orphan and Nuclear Receptors
**[Q007] MARKS: 14**
**a) What are orphan receptors? [4]**
Ans: Receptors যাদের endogenous ligand (natural ligand) এখনও discover করা যায়নি।

**b) Nuclear receptors are receptors and effectors... Explain. [5]**
(See Q004).

**c) Classification and functions of nuclear receptors. [5]**
Ans:
Type I (Cytoplasm to Nucleus, Homodimers) - GR, ER, AR.
Type II (Already in Nucleus, Heterodimers with RXR) - TR, RAR, VDR.
Functions: Metabolism, Development/differentiation, Reproduction, Inflammation/immunity.

### Molecular Switches in Cell Signaling
**[Q076] (ADDITION)**
Ans: Molecular switch হলো protein যা two stable states (ON and OFF)-এর মধ্যে পরিবর্তিত হতে পারে।
১. Phosphorylation switch: Kinase on, Phosphatase off.
২. GTP-binding switch: GTP bound (ON), GDP bound (OFF). Use GEF (ON) and GAP (OFF).

### Properties of Second Messengers
**[Q077] (ADDITION)**
Ans: Key properties: Small size (cAMP, Ca2+), rapid synthesis, rapid degradation, diffusibility, amplification, gap junction permeability.
Why preferred: Diffuse fast, energy efficient, specific spatial range.

### Monomeric vs Heterotrimeric G‑proteins
**[Q078] (ADDITION)**
Ans:
Heterotrimeric: 3 subunits (α, β, γ). Coupled to GPCR.
Monomeric: 1 subunit (Ras, Rho). Modulated by GEF/GAPs directly.`,
rawMd_en: `### Intracellular Signaling Pathway
**[Q001] MARKS: 14**
a) Illustrate a simple intracellular signaling pathway activated by an extracellular signaling molecule. [3]
Ans: This pathway serves to take an extracellular signal and convert it into a specific cellular response within the target cell.

| Step | Action | Detail |
|---|---|---|
| 1 | Ligand binding | An extracellular signaling molecule (ligand — from Latin ligare = "to bind") binds to the receptor protein of a target cell [29, 59]. |
| 2 | Receptor activation | Binding causes a conformational change (conformare = "to shape") in the receptor, which activates it [29, 148]. |
| 3 | Signal relay | The activated receptor then triggers one or more intracellular signaling proteins. These relay (from French relayer = "to pass on") the signal deeper into the cell [29, 148]. |
| 4 | Effector activation | At the end of the pathway is an effector protein (efficere = "to accomplish") — such as a metabolic enzyme or gene regulator — which carries out the final task [29, 60]. |
| 5 | Cellular response | The effector protein acts to change the cell's behavior, such as activating an enzyme or changing gene expression [29, 148]. |

Memory Trick: "Ligand binds → Receptor changes → Relay proteins pass → Effector acts → Cell responds"

**b) Compare synaptic and endocrine signaling. [3]**
Ans: These are two distinct methods of distance signaling: one is fast and localized (synaptic), while the other is slower and widespread (endocrine).

| Feature | Synaptic Signaling | Endocrine Signaling |
|---|---|---|
| Signal molecule | Neurotransmitter (e.g. acetylcholine, GABA, glutamate) | Hormone (e.g. insulin, adrenaline, thyroid hormone) |
| Delivery medium | Synaptic cleft — the tiny gap between neurons | Bloodstream — hormones distribute throughout the entire body |
| Distance traveled | Very short — ~20-50 nanometers across the cleft | Long distances — reaches distant target cells anywhere in the body |
| Speed of response | Fast — milliseconds — rapid electrical-to-chemical switch | Slow — minutes to hours — takes time for transport and distribution |
| Specificity | Highly precise — only the post-synaptic neuron is targeted | Broad — any cell with a matching receptor can respond |
| Signal removal | Fast — rapid reuptake or enzymatic breakdown (like AChE) | Slow — metabolized in the liver or excreted by the kidneys |

**c) Why are the speeds of responses to a variety of extracellular signals different? [3]**
Ans: The speed depends on three primary factors:
1. **Response Mechanism Type**: Protein modification (fast) vs. Gene expression (slow).
2. **Signal Delivery Method**: Electrical pulses (very fast) vs. Blood circulation (slower).
3. **Pathway Complexity**: Short cascades are faster than long, highly amplified ones.

**d) How does a typical cell respond to specific combinations? [5]**
Ans: A cell receives hundreds of signals simultaneously and integrates them via:
1. **AND gate logic**: Requiring multiple signals at once for activation.
2. **OR gate logic**: Different signals trigger the same vital response.
3. **Scaffold proteins**: Organizing protein complexes to ensure correct signal flow.
4. **Survival vs Death logic**: In the absence of specific survival signals, a cell programmedly undergoes apoptosis.

### Components of Cell Signaling
**[Q002] MARKS: 3**
What are components of cell signaling? Define signal transduction and write down its general features.
Ans:
**7 Components:** 1. Signaling cell, 2. Ligand, 3. Target cell, 4. Receptor, 5. Intracellular signaling proteins, 6. Second messengers, 7. Effector proteins.
**Signal Transduction**: The process of converting an extracellular signal into an intracellular chemical signal.
**5 General Features**:
- **Specificity**: High affinity binding between ligand and receptor.
- **Amplification**: A small signal triggers a massive enzyme cascade.
- **Integration**: Merging multiple inputs into a single output.
- **Desensitization**: Reducing sensitivity when signal persists (adaptation).
- **Modularity**: Using shared protein domains (like SH2) to form different complexes.

### Ligand–Receptor Interactions
**[Q003] MARKS: 3**
"Binding on same receptor a ligand may elicit different pattern of responses in different types of cells" — explain.
Ans: This happens because different cell types contain different intracellular machinery (downstream proteins and gene expression).
Example: **Acetylcholine (ACh)**
- **Heart pacemaker**: Binds M2 receptor → G-protein (Gi) → slows heart rate.
- **Salivary gland**: Binds M3 receptor → G-protein (Gq) → increases saliva secretion.

### Dual‑Function Molecules
**[Q004] MARKS: 3**
"Same signaling molecule can be receptor and effector for a particular ligand" — explain.
Ans: **Nuclear Receptors** are the perfect example. They bind the ligand directly and then function as transcription factors (effectors) to regulate DNA, combining both roles into one protein.

### Cell Signaling Molecules
**[Q006] MARKS: 14**
**a) What are the cell signaling molecules? [5]**
Ans: Chemical substances (ligands) secreted by one cell to transfer information to another (e.g., hormones, neurotransmitters).

**b) Mention different types of signal methods. [5]**
Ans: Endocrine (via blood), Paracrine (local), Synaptic (neurons), and Contact-dependent (direct touch).

**c) Write examples of hydrophilic and hydrophobic signaling molecules. [4]**
Ans:
- **Hydrophilic**: Insulin, Epinephrine (cannot cross membrane).
- **Hydrophobic**: Steroid hormones, Nitric Oxide (diffuse directly through membrane).

### Orphan and Nuclear Receptors
**[Q007] MARKS: 14**
**a) What are orphan receptors? [4]**
Ans: Receptors whose natural biological ligand is yet to be discovered.

**b) Nuclear receptors are receptors and effectors... Explain. [5]**
(Refer to Q004).

**c) Classification and functions of nuclear receptors. [5]**
Ans: 
- **Type I**: Homodimers in cytoplasm (e.g., Estrogen Receptor).
- **Type II**: Heterodimers already in the nucleus (e.g., Thyroid Receptor).
- **Functions**: Regulate growth, metabolism, and reproduction.

### Molecular Switches in Cell Signaling
**[Q076] (ADDITION)**
Ans: Proteins that flip between ON (active) and OFF (inactive) states.
1. **Phosphorylation switch**: Added by kinases (ON), removed by phosphatases (OFF).
2. **GTP-binding switch**: Active when bound to GTP, inactive when bound to GDP.`
},
{
id: "set2",
title: "🔹 SET 2 — GPCR & G-PROTEIN SIGNALING (Expanded & Detailed)",
rawMd_bn: `### G-Protein & PKA Signaling

**[Q013] MARKS: 14**

**a) Show the activation of Protein Kinase A by G-protein signaling. [5]**

**Ans:** এই প্রক্রিয়াটি মূলত **\u03b2-adrenergic pathway**-এর মাধ্যমে ঘটে যেখানে বহিঃকোষীয় সংকেত থেকে কোষের ভেতর এনজাইম সক্রিয় হয়।

| ধাপ | কী ঘটে | বিস্তারিত মেকানিজম |
|:---:|:---|:---|
| ১ | **Ligand Binding** | এপিনেফ্রিন (Epinephrine) বা গ্লুকাগন (Glucagon) লিগ্যান্ড হিসেবে **GPCR**-এর সাথে যুক্ত হয় [১১, ৪২৭]। |
| ২ | **G-Protein Activation** | রিসেপ্টরে কনফরমেশনাল পরিবর্তন ঘটে যা **Gs\u03b1** সাবইউনিটের GDP-কে GTP দ্বারা প্রতিস্থাপন (Exchange) করে একে সক্রিয় করে [৮, ১১]। |
| ৩ | **Adenylyl Cyclase** | সক্রিয় Gs\u03b1 সাবইউনিট রিসেপ্টর থেকে আলাদা হয়ে মেমব্রেনে থাকা **Adenylyl Cyclase** এনজাইমকে সক্রিয় করে [৮, ১১]। |
| ৪ | **cAMP Creation** | এই এনজাইম ATP-কে **Second Messenger cAMP**-এ রূপান্তরিত করে। এটি একটি সিগন্যাল এমপ্লিফিকেশন ধাপ [৮, ১১]। |
| ৫ | **PKA Activation** | **cAMP** অণুগুলো PKA-এর রেগুলেটরি সাবইউনিটের সাথে যুক্ত হয়, ফলে ক্যাটালিটিক সাবইউনিটগুলো মুক্ত ও সক্রিয় হয়ে টার্গেট প্রোটিনকে ফসফোরাইলেট করে [১০, ১২, ১৫]। |

**b) Describe the signaling occurred by calmodulin. [5]**

**Ans:** **Calmodulin** হলো একটি অত্যন্ত গুরুত্বপূর্ণ **Calcium-responsive adapter protein** যা ক্যালসিয়াম সিগন্যালকে কার্যকর করে।
* **Ca\u00b2\u207a Binding:** যখন সাইটোসোলে ক্যালসিয়ামের মাত্রা বেড়ে **10\u207b\u2076 M** হয়, তখন ৪টি ক্যালসিয়াম আয়ন ক্যালমোডুলিনের ৪টি 'EF hand' বাইন্ডিং ডোমেনে যুক্ত হয় [৪৩, ১৫১]।
* **Conformational Change:** ক্যালসিয়াম যুক্ত হওয়ার সাথে সাথে ক্যালমোডুলিনের আকৃতি পরিবর্তন হয়ে একটি 'Dumbbell' বা ডাম্বেল আকৃতি ধারণ করে যা টার্গেট প্রোটিনকে জড়িয়ে ধরতে পারে।
* **Target Interaction:** এই সক্রিয় ক্যালমোডুলিন কমপ্লেক্স তখন **CaM-kinase**, **Myosin Light Chain Kinase (MLCK)** বা **Plasma membrane Ca\u00b2\u207a pump**-এর সাথে যুক্ত হয়ে কোষীয় প্রক্রিয়া শুরু করে [৪৩, ৪৬, ১৫২]।

**c) Schematically represent the desensitization of G-protein coupled receptors. [4]**

**Ans:** **Desensitization** হলো সেই প্রক্রিয়া যার মাধ্যমে কোষ দীর্ঘক্ষণ একই লিগ্যান্ডের প্রভাবে সাড়া দেওয়া বন্ধ করে দেয়।
১. **Phosphorylation (ফসফোরাইলেশন):** সক্রিয় রিসেপ্টরকে **GRK** (GPCR Kinase) এনজাইম ফসফোরাইলেট করে চিহ্নিত করে [৩০, ১৭০]।
২. **Arrestin Binding:** ফসফোরাইলেটেড রিসেপ্টরের সাথে **Arrestin** প্রোটিন যুক্ত হয়, যা জি-প্রোটিনের সাথে রিসেপ্টরের যোগাযোগ বিচ্ছিন্ন করে দেয় [৩২, ৩৪, ১৭০]।
৩. **Endocytosis/Sequestration:** অ্যারেস্টিন-রিসেপ্টর কমপ্লেক্সটি কোষের ভেতরে ভেসিকলে (Endosome) ঢুকে যায় (Internalization), ফলে বাইরে থেকে আর সংকেত নিতে পারে না [৩৪, ১৬৯]।

---

### G-Protein Function & Specificity

**[Q014] MARKS: 3**

**a) What is G-protein? Why can't ATP activate G-protein?**

**Ans:** **G-protein** হলো গুয়ানিন নিউক্লিওটাইড (GTP/GDP) বাইন্ডকারী প্রোটিন যা সিগন্যালিংয়ের **Molecular Switch** হিসেবে কাজ করে [১৮৯, ২২৩]।
* **ATP Issue:** জি-প্রোটিনের আলফা সাবইউনিটে থাকা **Alanine-146 (Ala-146)** অ্যামিনো অ্যাসিডটি গুয়ানিনের অক্সিজেন পরমাণুর সাথে হাইড্রোজেন বন্ড তৈরি করে সুনির্দিষ্টভাবে GTP-র সাথে বাইন্ড করে। ATP-র (Adenine) কাঠামোতে এই অক্সিজেন পরমাণু নেই, তাই এটি সক্রিয় হতে পারে না [১৮, ২০, ১৯২, ৩৮৮]।

**b) "Cholera toxicity is manifested by the loss of self-inactivating property of G-protein" \u2014 explain.**

**Ans:** কোলেরা টক্সিন (*Vibrio cholerae*) Gs\u03b1 সাবইউনিটের আর্জিনিন রেসিডিউতে **ADP-ribosylation** ঘটায় [২৪, ২০৩, ৩১৬]। ফলস্বরূপ:
* জি-প্রোটিন তার **Self-inactivating property (Intrinsic GTPase activity)** হারিয়ে ফেলে—অর্থাৎ এটি আর GTP-কে ভেঙে GDP তৈরি করে নিজেকে বন্ধ করতে পারে না।
* জি-প্রোটিন স্থায়ীভাবে 'On' থাকে এবং অবিরাম **cAMP** তৈরি করে কোষ থেকে প্রচুর লবণ ও পানি বের করে দেয়, যা মারাত্মক ডায়রিয়া ঘটায় [২৪, ২৫, ৩১৬]।

---

### Phototransduction & Olfaction

**[Q015] MARKS: 4**

**"Phototransduction is an electrical transmission mediated by GPCRs" \u2014 explain.**

**Ans:** চোখের রড কোষে আলো দেখার প্রক্রিয়াটি একটি ট্রান্সডাকশন ক্যাসকেড:
১. **Light Detection:** আলো (Photon) যখন **Rhodopsin (GPCR)**-এর ওপর পড়ে, তখন এর রেটিনাল অংশ সোজা হয়ে যায়।
২. **Transducin Activation:** এটি **Transducin (Gt)** নামক জি-প্রোটিনকে সক্রিয় করে [৭৩, ১৬৩]।
৩. **PDE Action:** সক্রিয় Transducin তখন **cGMP Phosphodiesterase (PDE)** এনজাইমকে সক্রিয় করে যা দ্রুত cGMP ভেঙে ফেলে [৭৬, ২৪৮]।
৪. **Channel Closing:** cGMP কমে যাওয়ায় সোডিয়াম চ্যানেল বন্ধ হয় এবং কোষ **Hyperpolarized** হয়ে ইলেকট্রিক্যাল সিগন্যাল হিসেবে মস্তিষ্কে পৌঁছায় [৭৬, ২৪৮, ৩৪১]।

**[Q018] MARKS: 14**

**a) Describe the olfactory signal transduction pathway. [5]**

**Ans:** নাকের ঘ্রাণ রিসেপ্টর (OR) সিগন্যালিং নিম্নে বর্ণিত হলো:
* **Binding:** সুগন্ধি অণু (Odorant) নাকের সিলিয়ায় থাকা রিসেপ্টরের সাথে যুক্ত হয় [৮২, ১৬২]।
* **G-olf Activation:** এটি ঘ্রাণ-নির্দিষ্ট জি-প্রোটিন **Golf**-কে সক্রিয় করে [৮২, ১৬২]।
* **cAMP Increase:** সক্রিয় Golf এনজাইম এডিনাইলাইল সাইক্লেসকে চালু করে প্রচুর **cAMP** তৈরি করে [৮২, ১৬২]।
* **Ion Flux:** cAMP তখন **Cyclic-nucleotide gated (CNG)** চ্যানেলগুলো খুলে দেয়, ফলে Na\u207a এবং Ca\u00b2\u207a কোষে ঢোকে এবং ঘ্রাণের স্নায়বিক সংকেত তৈরি হয় [৮২, ৮৯, ১৬২]।

**b) How does combinatorial coding work in olfactory signaling? [5]**

**Ans:** মানুষের প্রায় ৩৫০-৪০০ ধরনের ঘ্রাণ রিসেপ্টর থাকলেও আমরা ১০,০০০-এর বেশি ঘ্রাণ চিনতে পারি। একে বলা হয় **Combinatorial Coding**।
* প্রতিটি সুগন্ধি অণু কেবল একটি নয়, বরং একাধিক রিসেপ্টরকে ভিন্ন ভিন্ন মাত্রায় সক্রিয় করে।
* আবার একটি রিসেপ্টর একাধিক অণুর সাথে যুক্ত হতে পারে।
* মস্তিষ্ক এই ভিন্ন ভিন্ন সংমিশ্রণ বা **Neural patterns** বিশ্লেষণ করে নির্দিষ্ট ঘ্রাণ শনাক্ত করে [১০7, ১৬২]।

---

### Phospholipase C & CaM Kinase

**[Q017] MARKS: 14**

**a) What is phospholipase C? Discuss the role of phospholipase C in cell signaling. [5]**

**Ans:** **Phospholipase C (PLC)** হলো একটি মেমব্রেন-বাউন্ড এনজাইম যা **Gq protein** দ্বারা সক্রিয় হয়। এটি সিগন্যালিংয়ের অন্যতম প্রধান উৎস [৩৭, ৩৮, ১৩৭]।
* **Cleavage:** এটি মেমব্রেন লিপিড **PIP\u2082**-কে ভেঙে দুটি অত্যন্ত গুরুত্বপূর্ণ সেকেন্ড মেসেঞ্জার তৈরি করে: **IP\u2083 (Inositol trisphosphate)** এবং **DAG (Diacylglycerol)** [৩৮, ১৩৭, ২৩৯]।

**b) Describe the signaling pathway activated by diacylglycerol (DAG) and protein kinase C (PKC). [5]**

**Ans:** **DAG** এবং **PKC** একত্রে কোষ বিভাজন ও মেটাবলিজম নিয়ন্ত্রণ করে:
১. PLC অ্যাক্টিভেশনে IP\u2083 সাইটোসোলে ক্যালসিয়াম বাড়িয়ে দেয়।
২. মেমব্রেনে থাকা **DAG** এবং এই বাড়তি **Ca\u00b2\u207a** একত্রে **Protein Kinase C (PKC)**-কে আকর্ষণ করে মেমব্রেনে নিয়ে আসে এবং সক্রিয় করে [৪১, ১৩৮, ১৪১]।
৩. সক্রিয় PKC বিভিন্ন টার্গেট প্রোটিন ও জিনের প্রকাশ নিয়ন্ত্রণ করে কোষের গ্রোথ এবং প্রোলাইফারেশন নিশ্চিত করে [৪১, ৫৩, ১৪১]।

**c) What is CaM kinase? How does CaM kinase frequency-decode calcium oscillations? [4]**

**Ans:** **CaM kinase II** হলো ক্যালসিয়াম- Calmodulin নির্ভর প্রোটিন কাইনেজ যা কোষের **Memory Device** হিসেবে কাজ করে।
* **Frequency Decoding:** ক্যালসিয়ামের ঘনঘন স্পন্দনে (High frequency cycles) এনজাইমটি পুরোপুরি বন্ধ হওয়ার আগেই পরবর্তী সংকেত পায়। এর ফলে এটি **Autophosphorylation**-এর মাধ্যমে নিজের সক্রিয়তা বজায় রাখে এবং সিগন্যাল শেষ হওয়ার পরেও সক্রিয় থাকতে পারে [১৫৫, ১৬০, ২৪৫]। এভাবে এটি ক্যালসিয়ামের কম্পাঙ্ক বিশ্লেষণ করে ভিন্ন ভিন্ন সাড়া তৈরি করে।`,
rawMd_en: `### G-Protein & PKA Signaling

**[Q013] MARKS: 14**

**a) Show the activation of Protein Kinase A by G-protein signaling. [5]**

**Ans:** This process primarily occurs via the **\u03b2-adrenergic pathway**, converting extracellular signals into massive intracellular enzyme activity.

| Step | Event | Detailed Mechanism |
|:---:|:---|:---|
| 1 | **Ligand Binding** | Ligands like **Epinephrine** or **Glucagon** bind to their specific **GPCR** on the cell surface [11, 427]. |
| 2 | **G-Protein Activation** | The receptor undergoes a shape change, allowing the **Gs\u03b1** subunit to exchange its GDP for **GTP**, activating it [8, 11]. |
| 3 | **Adenylyl Cyclase** | The active Gs\u03b1 subunit detaches and activates the membrane-bound enzyme **Adenylyl Cyclase** [8, 11]. |
| 4 | **cAMP Creation** | This enzyme converts ATP into the second messenger **cAMP**. This is a major amplification step [8, 11]. |
| 5 | **PKA Activation** | **cAMP** molecules bind to PKA's regulatory subunits, freeing the catalytic subunits to go and phosphorylate target proteins [10, 12, 15]. |

**b) Describe the signaling occurred by calmodulin. [5]**

**Ans:** **Calmodulin** is a vital **Calcium-responsive adapter protein** that translates calcium signals into cellular action.
* **Ca\u00b2\u207a Binding:** When cytosolic Ca\u00b2\u207a rises to ~**10\u207b\u2076 M**, 4 calcium ions bind to Calmodulin's 'EF hand' domains [43, 151].
* **Conformational Change:** Calmodulin changes into a 'Dumbbell' shape, allowing it to "wrap around" and activate various target proteins.
* **Target Interaction:** Active Calmodulin triggers **CaM-kinases**, **MLCK** (for muscle contraction), or calcium pumps to reset the cell [43, 46, 152].

**c) Schematically represent the desensitization of G-protein coupled receptors. [4]**

**Ans:** **Desensitization** is how a cell "stops listening" to a signal that persists for too long.
1. **Phosphorylation**: The active receptor is tagged by **GRK** (GPCR Kinase) enzymes [30, 170].
2. **Arrestin Binding**: A protein called **Arrestin** binds to the phosphorylated receptor, physically blocking its contact with G-proteins [32, 34, 170].
3. **Endocytosis**: The entire Arrestin-receptor complex is "swallowed" into the cell (internalized), making it invisible to outside ligands [34, 169].

---

### G-Protein Function & Specificity

**[Q014] MARKS: 3**

**a) What is G-protein? Why can't ATP activate G-protein?**

**Ans:** **G-protein** functions as a **Molecular Switch** that uses Guanine nucleotides (GTP/GDP) to control signal flow [189, 223].
* **The ATP Issue**: Specificity is key! The **Alanine-146** residue in the G-protein forms a perfect hydrogen bond with the Oxygen atom of Guanine. ATP (Adenine) lacks this Oxygen atom, making it a "bad fit" that cannot activate the switch [18, 20, 192, 388].

**b) "Cholera toxicity is manifested by the loss of self-inactivating property of G-protein" \u2014 explain.**

**Ans:** The cholera toxin (*Vibrio cholerae*) chemically modifies the Gs\u03b1 subunit via **ADP-ribosylation** [24, 203, 316].
* **The Result**: The G-protein loses its **intrinsic GTPase activity** (its "off timer").
* It gets stuck in the **PERMANENT ON** position, creating endless cAMP. This forces water and salt out of the cells, causing severe diarrhea [24, 25, 316].

---

### Phototransduction & Olfaction

**[Q015] MARKS: 4**

**"Phototransduction is an electrical transmission mediated by GPCRs" \u2014 explain.**

**Ans:** Vision in rod cells is a rapid signaling cascade:
1. **Light Detection**: A photon hits **Rhodopsin (GPCR)**; its retinal part flips shape.
2. **Transducin Activation**: This triggers the G-protein **Transducin (Gt)** [73, 163].
3. **PDE Action**: Active Transducin turns on a **Phosphodiesterase (PDE)** enzyme which rapidly destroys cGMP [76, 248].
4. **Hyperpolarization**: Lower cGMP causes sodium channels to close, generating an electrical pulse sent to the brain [76, 248, 341].

**[Q018] MARKS: 14**

**a) Describe the olfactory signal transduction pathway. [5]**

**Ans:** Smelling involves specific GPCR signaling:
* **Binding**: Odor molecules bind to Olfactory Receptors (OR) in the nose [82, 162].
* **G-olf Activation**: This triggers **Golf**, a specialized G-protein [82, 162].
* **cAMP Burst**: Active Golf drives Adenylyl Cyclase to produce massive **cAMP** [82, 162].
* **Ion Flux**: cAMP opens **Cyclic-nucleotide gated (CNG)** channels; the flow of Na\u207a and Ca\u00b2\u207a creates the neural signal of smell [82, 89, 162].

**b) How does combinatorial coding work in olfactory signaling? [5]**

**Ans:** Humans have ~400 receptor types but can detect 10,000+ smells. This "magic" is called **Combinatorial Coding**.
* Each odor molecule activates a specific **pattern** of multiple receptors, not just one.
* One receptor can also detect multiple different molecules.
* The brain interprets these "neural fingerprints" (combinations) to identify specific complex scents [107, 162].

---

### Phospholipase C & CaM Kinase

**[Q017] MARKS: 14**

**a) What is phospholipase C? Discuss the role of phospholipase C in cell signaling. [5]**

**Ans:** **Phospholipase C (PLC)** is an enzyme activated by **Gq proteins**. It acts as a major "signal splitter" [37, 38, 137].
* **Cleavage**: It breaks down the membrane lipid **PIP\u2082** into TWO powerful messengers: **IP\u2083** (releases calcium) and **DAG** (activates kinase PKC) [38, 137, 239].

**b) Describe the signaling pathway activated by diacylglycerol (DAG) and protein kinase C (PKC). [5]**

**Ans:** **DAG** works with **PKC** to control cell growth and metabolism:
1. **IP\u2083** (from PLC) releases calcium into the cytosol.
2. The combination of membrane-bound **DAG** and high **Calcium** recruits and activates **Protein Kinase C (PKC)** on the membrane [41, 138, 141].
3. PKC then phosphorylates targets that drive cell growth and proliferation [41, 53, 141].

**c) What is CaM kinase? How does CaM kinase frequency-decode calcium oscillations? [4]**

**Ans:** **CaM kinase II** acts as a molecular "Memory Device."
* **Frequency Decoding**: In high-frequency calcium pulses, the enzyme doesn't have time to fully deactivate between pulses. It uses **Autophosphorylation** to stay active longer, essentially "counting" the signal frequency to choose different cellular outcomes [155, 160, 245].`
}
];
