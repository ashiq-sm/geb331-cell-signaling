const geb331_sets = [
{
id: "set1",
title: "🔹 SET 1 — PRINCIPLES OF CELL SIGNALING",
rawMd: `### Intracellular Signaling Pathway
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
Monomeric: 1 subunit (Ras, Rho). Modulated by GEF/GAPs directly.`
},
{
id: "set2",
title: "🔹 SET 2 — GPCR & G-PROTEIN SIGNALING (Expanded & Detailed)",
rawMd: `### G-Protein & PKA Signaling

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
* **Frequency Decoding:** ক্যালসিয়ামের ঘনঘন স্পন্দনে (High frequency cycles) এনজাইমটি পুরোপুরি বন্ধ হওয়ার আগেই পরবর্তী সংকেত পায়। এর ফলে এটি **Autophosphorylation**-এর মাধ্যমে নিজের সক্রিয়তা বজায় রাখে এবং সিগন্যাল শেষ হওয়ার পরেও সক্রিয় থাকতে পারে [১৫৫, ১৬০, ২৪৫]। এভাবে এটি ক্যালসিয়ামের কম্পাঙ্ক বিশ্লেষণ করে ভিন্ন ভিন্ন সাড়া তৈরি করে।`
},
{
id: "set3",
title: "🔹 SET 3 — ENZYME-LINKED RECEPTORS (RTK, MAPK, PI3K)",
rawMd: `### RTKs
**[Q023] Enzyme-linked receptors properties [6]**
Ans: Single trans-membrane, homodimerization, autophosphorylation. Cancer connection: EGF receptor mutant ErbB lacks ligand-binding part, constantly dimerized/active (Constitutive activation).

### Ras
**[Q024] a) Ras protein and cancer [5]**
Ans: Small monomeric GTPase. Oncogenic mutations (G12V, Q61L) destroy GTPase activity, perpetually signaling MAPK pathway (30% humans cancers).
**b) PI-3 kinase and anti-apoptotic [5]**
Ans: RTK → PI3K → PIP3 → Akt → phosphorylates Bad → disables Bad from inhibiting Bcl2 → Bcl2 keeps mitochondria intact → blocks apoptosis.

### MAPK
**[Q025] a) MAP kinase pathway [5]**
Ans: Three tiers: MAPKKK (Raf) → MAPKK (MEK) → MAPK (ERK).
**b) Role of p38 [5]**
Ans: Stress-activated. Arrests cell cycle via p53-p21 or promotes proliferation in special cases (immune cells).

### JNK, ERK, Calcium
**[Q026] a) JNK [4]**
Ans: Stress kinase, promotes apoptosis via Bim/Bad, c-Jun.
**b) ERK [5]**
Ans: Growth factor signaling. Sustained ERK = differentiation (e.g. PC12 to neuron). Transient = proliferation.
**c) "Ca2+ as messenger" [5]**
Ans: Steep concentration gradient. Opens channels quickly. Binds troponin C, Calmodulin, PKC, synaptotagmin.

### Cascades & Adaptors
**[Q029] Serine/threonine cascade by Ras [7]**
Ans: Ras(GTP) hooks Raf to membrane. Raf activates MEK, MEK activates ERK (Thr/Tyr). Massive amplification.
**[Q030/075] SH2 domain in glycogen [8]**
Ans: SH2 binds phospho-tyrosine. Insulin binds RTK → recruits IRS-1 (PTB) → PI3K (SH2) → Akt → inactivates GSK3 → glycogen synthase turns ON.
**[Q084] Rac GTPase:** Lamellipodia formation (actin edge).
**[Q085] SH2 vs SH3:** SH2 binds P-Tyr; SH3 binds PxxP (proline). Grb2 has both.`
},
{
id: "set4",
title: "🔹 SET 4 — NOTCH-DELTA, NF-κB, Wnt/β-CATENIN",
rawMd: `### Notch Signaling
**[Q032] a) Notch activation by proteolytic cleavage [3]**
Ans:
1st cleavage: Furin in Golgi (creates dual subunit).
2nd cleavage: ADAM metalloprotease after Delta binds (removes extracellular piece).
3rd cleavage: γ-secretase complex (liberates NICD to nucleus).
**[Q034] a) Lateral inhibition [6]**
Ans: Future neuron upregulates Delta → binds Notch on neighbor → neighbor expresses Hes/Hey → represses pro-neural genes. Single cell forms neuron while neighbors become epidermis.

### Wnt / β-Catenin
**[Q032] b) β-catenin degradation complex [4]**
Ans: Axin + APC scaffold. CK1 primes, GSK3 phosphorylates β-catenin → ubiquitinated by β-TrCP → proteasome degradation. Keeps nuclear Wnt genes Off.
**[Q034] b) APC mutation in cancer [6]**
Ans: APC mutant cannot scaffold β-catenin. Accumulates everywhere → goes to nucleus → excessive transcription of c-Myc, cyclin D1 → colon cancer (FAP disorder).
**[Q039] Wnt regulation [7]**
Ans: Wnt binds Frizzled/LRP → activates Dishevelled (Dvl) → pulls Axin away → frees β-catenin from degradation → runs to nucleus with TCF/LEF to drive transcription.

### NF-κB
**[Q032] c) NF-κB by TNFα [7]**
Ans: TNFα binds TNFR1 → trimerization → IKK complex activated → phosphorylates IκBα → IκBα degraded → NF-κB free to enter nucleus → drives immunity/inflammation genes.`
},
{
id: "set5",
title: "🔹 SET 5 — TGF-β & BMP/SMAD SIGNALING",
rawMd: `### Canonical TGF-β
**[Q040] Canonical pathway [5]**
Ans: TGF-β dimer → Type II receptor → phosphorylates Type I receptor → phosphorylates R-Smad (2/3) → binds co-Smad (4) → nucleus for gene targets (p15, p21).
**[Q044] Dual role in cancer [4]**
Ans: Early: tumor suppressor (apoptosis/arrest). Late: tumor promoter (EMT, metastasis, immunosuppression). Lost Smad4 often causes the switch.

### BMP
**[Q046] BMP signaling in bone [7]**
Ans: BMPs (2/4/7) bind BMPRII/BMPRI → Smad1/5/8 → Smad4 → nucleus → osteoblast genes (Runx2, Osterix).

### TGF-β Basics
**[Q088] Superfamily [ADDITION]**
Ans: 42 genes. Subfamilies: TGF-βs (fibrosis), BMPs (bone), Activins/Inhibins (reproduction). Form active homo/heterodimers.
**[Q089] Maturation [ADDITION]**
Ans: Secreted as Large Latent Complex (with LAP and LTBP) to extracellular matrix. Activated by mechanical pulling by integrins, extreme pH, or proteases releasing mature TGF-β dimer.`
},
{
id: "set6",
title: "🔹 SET 6 — ER STRESS, HYPOXIA, DNA DAMAGE",
rawMd: `### Memory and Calcium
**[Q048] CaMKII [3]**
Ans: Autophosphorylation at Thr286 sustains activity. Retains memory of past Ca2+ fluxes.
**[Q050] CICR [3]**
Ans: Calcium Induced Calcium Release (RyR receptors amplify IP3 signals on ER).

### ER Stress / UPR
**[Q053] UPR signaling [5]**
Ans: Unfolded Protein Response. Sensors: IRE1, PERK, ATF6. Halts translation, induces chaperones (BiP). If unresolved, triggers apoptosis via CHOP.

### Hypoxia
**[Q055] Hypoxia vs Normoxia [4]**
Ans:
Normoxia: HIF-1α is hydroxylated by PHD (using O2) → recognized by VHL → Proteasome degradation.
Hypoxia: PHD inactive. HIF-1α stabilizes → moves to nucleus → dimer with HIF-1β → activates VEGF (angiogenesis), glycolytic enzymes.

### DNA Damage
**[Q097] DNA Damage Response [ADDITION]**
Ans: ATM/ATR kinases detect breaks → p53 stabilized. Promotes p21 for G1/S arrest or activates BAX/PUMA for apoptosis if repair fails. Keeps genome integrity.`
},
{
id: "set7",
title: "🔹 SET 7 — CROSS-TALK, NO, INTEGRATION",
rawMd: `### Chemotaxis
**[Q059] Bacterial chemotaxis [6]**
Ans: Two-component system (Histidine Kinase CheA + Response Regulator CheY). Tumbles (CW) or Runs (CCW). Adapt via methylation of receptors by CheR/CheB.

### NO Signaling
**[Q062/063] Vasodilation [9]**
Ans: ACh on endothelial cells → Ca2+ → eNOS makes NO from Arginine → NO diffuses to smooth muscle → binds soluble Guanylyl Cyclase (sGC) → makes cGMP → PKG → muscle relaxation. Viagra inhibits cGMP PDE.

### Gap Junctions & Comparisons
**Gap junctions [3]**
Ans: Connexin hexamers. Allow electrical coupling and small metabolic molecules (< 1 kDa) like cAMP/Ca2+ to pass for coordinated responses.
**[Q099] Taste vs Olfaction [ADDITION]**
Ans: Olfaction relies purely on cAMP/cNg channels. Taste uses IP3/Ca2+ (Sweet/Bitter/Umami) and TRPM5 channels. Both create action potentials to the brain.`
}
];
