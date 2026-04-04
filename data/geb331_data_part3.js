const geb331_sets_part3 = [
    {
        id: "set5",
        title: "🔹 SET 5 — TGF-β & SMAD Signaling Pathways",
        rawMd_bn: `### TGF-β: Definition, Functions, & Canonical Pathway

**[Q040] MARKS: 13**  
**a) What is TGF-β? Write the Functions of TGF-β [5]**

**Ans:** **TGF-β (Transforming Growth Factor-β)** হলো একটি বহুমুখী (pleiotropic) সাইটোকাইন বা গ্রোথ ফ্যাক্টর। এটি **TGF-β superfamily**-এর প্রধান সদস্য, যার মধ্যে BMPs, Activins, Nodal ইত্যাদিও পড়ে। 

এরা সাধারণত cell cycle arrest, extracellular matrix (ECM) তৈরি, এবং ভ্রূণের বিকাশে ভূমিকা রাখে। সিগন্যালিংয়ের জন্য এরা **Serine/Threonine kinase receptor** ব্যবহার করে [14,37]।

**Biological Functions of TGF-β (বিবিধ কার্যাবলী):**

| Context | Function | Mechanism/Details |
|---------|----------|-------------------|
| **Cell Proliferation** | **Anti-proliferative** (কোষ বিভাজন থামায়) | p21 এবং p15 জিন চালু করার মাধ্যমে কোষকে G1 phase-এ আটকে দেয় (Tumor suppressor হিসেবে কাজ করে) |
| **EMT (Epithelial-Mesenchymal Transition)** | এপিথেলিয়াল কোষকে মেসেনকাইমালে বদলায় | Snail, ZEB নামক জিন চালু করে, ফলে ক্যানসার কোষ চারদিকে ছড়িয়ে পড়তে (Metastasis) পারে |
| **Immunosuppression** | রোগ প্রতিরোধ ক্ষমতা কমায় | T cells এবং Macrophage-এর কাজকে বাধা দেয়, যা ক্যানসার কোষকে ইমিউন সিস্টেম থেকে বাঁচায় |
| **Wound Healing** | ক্ষতস্থান সারিয়ে তোলে | ফাইব্রোব্লাস্ট (Fibroblast) অ্যাক্টিভেট করে কোলাজেন ও ECM তৈরি বাড়ায় |
| **Development** | ভ্রূণের গঠন | Left-right axis, ঠোঁট ও তালুর (palate) সঠিক গঠনে সাহায্য করে |

---

**b) Illustrate the Canonical TGF-β Signaling Pathway [5]**

**Ans:** এই পাথওয়েটি **SMAD** প্রোটিনের মাধ্যমে কাজ করে। 

**Receptors:**
* **Type II receptor (TβRII):** এটি স্বতঃস্ফূর্তভাবেই সক্রিয় কাইনেজ (constitutively active)।
* **Type I receptor (TβRI / ALK5):** এটি Type II দ্বারা ফসফোরাইলেটেড হওয়ার পর সক্রিয় হয়।

**Canonical SMAD Pathway (ধাপে ধাপে):**

১. **Ligand Binding:** TGF-β ডাইমার হিসেবে এসে প্রথমে **Type II receptor (TβRII)**-এর সাথে bind করে।
২. **Receptor Activation:** TβRII তখন **Type I receptor (TβRI)**-কে টেনে আনে এবং এর GS domain-এ ফসফোরাইলেট করে সচল করে তুলে [13,37]।
৩. **SMAD Phosphorylation:** সক্রিয় TβRI সাইটোসোলে ভাসমান **R-SMADs (SMAD2 বা SMAD3)**-এর C-terminal অংশে ফসফেট যুক্ত করে।
৪. **Complex Formation:** ফসফোরাইলেটেড SMAD2/3 রিসেপ্টর থেকে আলাদা হয়ে **Co-SMAD (SMAD4)**-এর সাথে যুক্ত হয়ে একটি trimeric complex তৈরি করে [14,20]।
৫. **Nuclear Translocation:** এই কমপ্লেক্সটি importin-এর সাহায্যে সোজা নিউক্লিয়াসে প্রবেশ করে।
৬. **Gene Expression:** নিউক্লিয়াসে গিয়ে এরা **SBE (SMAD-Binding Elements)** নামক DNA সিকোয়েন্সে বাইন্ড করে টার্গেট জিনগুলো (p15, p21, PAI-1) চালু বা বন্ধ করে [14,37]।

**মনে রাখার ট্রিক:** "TGF-β binds Type II → activates Type I → phosphorylates SMAD2/3 → binds SMAD4 → enters nucleus → gene active!"

**SMAD Classification (SMAD প্রোটিনের প্রকারভেদ):**
* **R-SMADs (Receptor-regulated):** SMAD1, 2, 3, 5, 8 (সরাসরি রিসেপ্টর দ্বারা ফসফোরাইলেটেড হয়)।
* **Co-SMAD (Common-mediator):** SMAD4 (সকল পাথওয়েতে কমন)।
* **I-SMADs (Inhibitory):** SMAD6, SMAD7 (সিগন্যালিং বন্ধ করতে বাধা দেয়)।

---

**c) How Inhibitory SMAD Inhibits BMP Signaling [3]**

**Ans:** **SMAD6** হলো প্রধান Inhibitory SMAD যা **BMP (Bone Morphogenetic Protein)** সিগন্যালিংকে বাধা দেয়।

**Inhibition Mechanism (কীভাবে বাধা দেয়):**
১. **Receptor Blockade (রিসেপ্টর ব্লক):** SMAD6 সরাসরি BMP Type I রিসেপ্টরে গিয়ে বসে থাকে। এর ফলে রিয়েল R-SMADs (SMAD1/5/8) রিসেপ্টরের কাছে এসে ফসফোরাইলেটেড হতে পারে না।
২. **SMAD4 Disruption (কমপ্লেক্স তৈরিতে বাধা):** যদি কোনোভাবে SMAD1 ফসফোরাইলেটেড হয়েও যায়, তবে SMAD6 গিয়ে SMAD1-এর সাথে যুক্ত হয়ে একটি অকার্যকর (inactive) কমপ্লেক্স তৈরি করে (SMAD1-SMAD6)। ফলে SMAD4 আর সুযোগ পায় না [17,38]।
৩. **Degradation (ধ্বংস):** SMAD6 **SMURF1** নামক E3 ligase-কে টেনে এনে রিসেপ্টরকে ধ্বংস (ubiquitination) করে দেয়।

**ফলাফল:** BMP সিগন্যাল বন্ধ হয়ে যায়, যা কোষকে অতিরিক্ত হাড় বা তরুণাস্থি (bone/cartilage) তৈরি করা থেকে প্রতিরোধ করে।

---

### TGF-β in Cancer Progression

**[Q044 / Q045b] MARKS: 4**  
**Dual Role of TGF-β in Cancer (ক্যানসারে দ্বৈত ভূমিকা)**

**Ans:** TGF-β ক্যানসারের ক্ষেত্রে একটি অদ্ভুত বা দ্বৈত (Paradoxical) ভূমিকা পালন করে: এটি **প্রথম দিকে রক্ষক (Tumor suppressor)** কিন্তু **পরের দিকে ভক্ষক (Tumor promoter)** হিসেবে কাজ করে [39,41,52]।

| Phase (পর্যায়) | Role (ভূমিকা) | Mechanism (মেকানিজম) |
|--------------|------------|----------------------|
| **Early Cancer (প্রাথমিক অবস্থা)** | **Tumor Suppressor (ক্যানসার দমনকারী)** | TGF-β এপিথেলিয়াল কোষের বিভাজন থামায়। এটি **p15 এবং p21** জিন চালু করে cell cycle-কে G1 ফেজে আটকে দেয় এবং c-Myc-কে বন্ধ করে কোষ বিভাজন থামায় [37,53]। |
| **Late Cancer (চূড়ান্ত অবস্থা)** | **Tumor Promoter (ক্যানসার বৃদ্ধিকারী)** | মিউটেশনের কারণে ক্যানসার কোষ TGF-β-এর বিভাজন-রোধী সিগন্যাল শোনা বন্ধ করে দেয় (যেমন SMAD4 নষ্ট হয়ে যায়)। কিন্তু TGF-β-এর অন্যান্য ক্ষতিকর সিগন্যাল ঠিকই কাজ করে। এটি **EMT (Epithelial-Mesenchymal Transition)** ঘটায়, ফলে ক্যানসার কোষ চারদিকে ছড়িয়ে পড়ে (Metastasis)। এটি ইমিউন সিস্টেমকেও দমিয়ে দেয়, কোষকে বাঁচতে সাহায্য করে [39,41,52]। |

**স্যারের স্লাইড থেকে:** "In normal cells and early carcinomas, TGF-β acts as a tumor suppressor. However, in advanced cancers, TGF-β loses its growth-inhibitory function and instead promotes tumor invasion, metastasis, and immune evasion."

---

### BMP Signaling in Bone Development

**[Q046] MARKS: 7**  
**Role of BMP Signaling in Bone Development**

**Ans:** **BMPs (Bone Morphogenetic Proteins)** হলো TGF-β পরিবারের সদস্য যা হাড় (osteogenesis), তরুণাস্থি (chondrogenesis) এবং কঙ্কালতন্ত্র গঠনে মুখ্য ভূমিকা রাখে [27,28]।

**কীভাবে কাজ করে (Pathway):**
* BMP লিগ্যান্ড (যেমন BMP-2, BMP-4) Type II এবং Type I (ALK3/6) রিসেপ্টরের মাধ্যমে **SMAD1/5/8**-কে ফসফোরাইলেট করে।
* এটি SMAD4-এর সাথে মিলে নিউক্লিয়াসে যায়।

**Role in Bone Development (হাড় গঠনে ভূমিকা):**
১. **Osteoblast Differentiation (হাড়ের কোষ তৈরি):** BMP-2 সিগন্যাল **Runx2** নামক মাস্টার ট্রান্সক্রিপশন ফ্যাক্টরকে চালু করে। Runx2 তখন Osteocalcin, Collagen I জিন চালু করে কোষকে পরিণত হাড়ের কোষে (Osteoblast) রূপান্তরিত করে [27,28]।
২. **Chondrogenesis (তরুণাস্থি তৈরি):** BMP-2/4 মেসেনকাইমাল কোষকে জড়ো করে **SOX9** জিনের মাধ্যমে তরুণাস্থির কোষে (chondrocytes) পরিণত হতে নির্দেশ দেয়।
৩. **Limb Patterning (হাত-পায়ের আকার গঠন):** হাত-পায়ের আঙুলের মাঝখানের কোষগুলোকে মেরে ফেলে (Apoptosis) সুন্দর আঙুল তৈরি করতে BMP কাজ করে।
৪. **Fracture Healing (প্লাস্টার/হাড় জোড়া লাগানো):** হাড় ভেঙে গেলে সেখানে নতুন হাড় তৈরি করার জন্য ক্লিনিক্যালি রিকম্বিন্যান্ট BMP-2 এবং BMP-7 ব্যবহার করা হয়।

**Disease (রোগ):** BMP রিসেপ্টরে মিউটেশন হলে **FOP (Fibrodysplasia ossificans progressiva)** নামক ভয়াবহ রোগ হয়, যেখানে মাংসপেশিগুলো নিজে নিজেই শক্ত হাড়ে পরিণত হয়ে যায় [28]।`,
        rawMd_en: `### TGF-β: Definition, Functions, & Canonical Pathway

**[Q040] MARKS: 13**  
**a) What is TGF-β? Write the Functions of TGF-β [5]**

**Ans:** **TGF-β (Transforming Growth Factor-β)** is a multifunctional (pleiotropic) cytokine or growth factor. It is the primary member of the **TGF-β superfamily**, which also includes BMPs, Activins, and Nodal.

These molecules typically control cell cycle arrest, the creation of the extracellular matrix (ECM), and embryonic development. They signal through specialized **Serine/Threonine kinase receptors** [14,37].

**Biological Functions of TGF-β:**

| Context | Function | Mechanism/Details |
|---------|----------|-------------------|
| **Cell Proliferation** | **Anti-proliferative** (Stops growth) | It locks cells in the G1 phase by activating **p21 and p15** genes (acting as a tumor suppressor). |
| **EMT** | **Transition into Metastasis** | It changes epithelial cells into mesenchymal cells (via Snail/ZEB genes), helping cancer spread. |
| **Immunosuppression** | **Dampens Immunity** | It inhibits T cells and Macrophages, allowing cancer to hide from the immune system. |
| **Wound Healing** | **Repairs Tissue** | It activates fibroblasts to increase collagen and ECM production. |
| **Development** | **Body Patterning** | Crucial for forming the left-right axis and the proper shape of the palate (lips/mouth). |

---

**b) Illustrate the Canonical TGF-β Signaling Pathway [5]**

**Ans:** This pathway is essentially the journey of **SMAD** proteins from the cell surface to the nucleus.

**Receptors:**
* **Type II Receptor (TβRII):** Always active (constitutively on).
* **Type I Receptor (TβRI):** Becomes active ONLY after Type II phosphorylates it.

**The Canonical SMAD Journey:**
1. **Binding**: The TGF-β dimer binds to the **Type II receptor**.
2. **Activation**: Type II pulls in the **Type I receptor** and phosphorylates it to turn it on [13,37].
3. **SMAD Tagging**: The active Type I receptor adds a phosphate group to floating **R-SMADs** (SMAD2 or SMAD3).
4. **Partnering up**: Phosphorylated SMAD2/3 detach from the receptor and bind with **Co-SMAD (SMAD4)** to form a powerful trio complex [14,20].
5. **Moving In**: This complex enters the nucleus (via the protein **importin**).
6. **Action**: In the nucleus, they bind to **SBE (SMAD-Binding Elements)** on DNA and switch on genes like **p21** to stop cell division [14,37].

**Memory Trick:** *"TGF-β grabs II → II ignites I → I tags SMAD2/3 → they grab SMAD4 → they enter the 'VIP Nucleus' → Gene ON!"*

---

**c) How Inhibitory SMAD Inhibits BMP Signaling [3]**

**Ans:** **SMAD6** is the primary "Bouncer" or **Inhibitory SMAD** that stops BMP (Bone Morphogenetic Protein) signals.

**How it works (Inhibition Mechanism):**
1. **The Block**: SMAD6 literally sits on the BMP Type I receptor. This prevents the real "workers" (SMAD1/5) from getting phosphorylated.
2. **The Fake Out**: Even if SMAD1 gets a phosphate, SMAD6 can bind to it and form a "useless complex" (SMAD1-SMAD6), blocking it from partnering with SMAD4 [17,38].
3. **The Eraser**: SMAD6 recruits the enzyme **SMURF1** to destroy the receptor (via ubiquitination).

**Result**: BMP signaling stops, preventing the body from making too much bone or cartilage in the wrong places.

---

### TGF-β in Cancer Progression

**[Q044 / Q045b] MARKS: 4**  
**Dual Role of TGF-β in Cancer**

**Ans:** TGF-β plays a "Double Agent" (Paradoxical) role in cancer: it is a **Protector (Suppressor)** in early stages but an **Attacker (Promoter)** in late stages [39,41,52].

| Phase | Role | Mechanism |
|-------|------|-----------|
| **Early Cancer** | **Tumor Suppressor** | It stops healthy cells from turning cancerous by freezing the cell cycle in G1 (via p15/p21 genes) [37,53]. |
| **Late Cancer** | **Tumor Promoter** | Cancer cells mutate and "stop listening" to the "Stop Growth" signal (e.g., SMAD4 is lost). However, they still use TGF-β to spread (**EMT**) and to hide from the immune system [39,41,52]. |

**From Sir's Slide:** *"In normal cells and early carcinomas, TGF-β acts as a tumor suppressor. However, in advanced cancers, TGF-β loses its growth-inhibitory function and instead promotes tumor invasion, metastasis, and immune evasion."*

---

### BMP Signaling in Bone Development

**[Q046] MARKS: 7**  
**Role of BMP Signaling in Bone Development**

**Ans:** **BMPs (Bone Morphogenetic Proteins)** are members of the TGF-β family that are the "Master Architects" of bone, cartilage, and our entire skeleton [27,28].

**How it Builds Bone (Pathway):**
* BMPs trigger a SMAD cascade (**SMAD1/5/8**) that goes into the nucleus.
* **Master Switch**: In the nucleus, they switch on the gene **Runx2**.

**Functions in Development:**
1. **Osteogenesis**: Runx2 tells the cell to become a mature **Osteoblast** (bone-building cell).
2. **Chondrogenesis**: BMPs tell mesenchymal cells to form cartilage via the **SOX9** gene.
3. **Limb Shaping**: BMPs are responsible for "sculpting" our fingers and toes by clearing out the webbing between them.
4. **Repairing Breaks**: Clinically, Doctors use synthetic BMP-2 and BMP-7 to help heal severe bone fractures.

**Disease Fact**: A mutation in the BMP pathway causes **FOP**, a horrific condition where muscles and tissues spontaneously turn into solid bone [28].`
    },
    {
        id: "set6",
        title: "🔹 SET 6 — Calcium Memory, UPR & ER Stress",
        rawMd_bn: `### CaMKII as an Intracellular Memory Device

**[Q048 / Q052] MARKS: 3**  
**"CaMKII is an intracellular memory device for a prior calcium pulse" — Explain**

**Ans:** **CaMKII (Ca²⁺/Calmodulin-dependent Protein Kinase II)** হলো একটি ১২-টি সাবইউনিট বিশিষ্ট চাকার মতো এনজাইম, যা ব্রেনের স্নায়ুকোষে (neurons) স্মৃতি (memory) ধরে রাখার কাজ করে।

**The Memory Mechanism (স্মৃতি ধরে রাখার মেকানিজম):**
১. **Activation:** যখন কোষে ক্যালসিয়াম (Ca²⁺) বাড়ে, তখন Ca²⁺/CaM কমপ্লেক্স এসে CaMKII-কে সক্রিয় করে দেয়।
২. **Autophosphorylation (নিজেকে নিজে ফসফেটযুক্ত করা):** চাকার মধ্যে পাশাপাশি থাকা সক্রিয় সাবইউনিটগুলো একে অপরের **Thr286 (Threonine-286)** পজিশনে একটি ফসফেট বসিয়ে দেয় (trans-autophosphorylation) [155,157]।
৩. **Autonomous Activity (স্বাধীন সক্রিয়তা):** একবার Thr286-এ ফসফেট বসে গেলে, Ca²⁺ লেভেল কমে যাওয়ার পরও (এমনকি CaM সরে যাওয়ার পরও) CaMKII **একটানা সক্রিয় (active) থেকে যায়**!
৪. **Memory Formation:** এই ফসফোরাইলেশনটি কয়েক মিনিট থেকে কয়েক ঘণ্টা পর্যন্ত স্থায়ী হতে পারে। এটি স্নায়ুকোষে **LTP (Long-Term Potentiation)** ঘটায়, যা শেখা এবং স্মৃতি সংরক্ষণের (learning and memory) আণবিক ভিত্তি [3,165,168]।

**সিদ্ধান্ত:** যেহেতু CaMKII ক্যালসিয়াম চলে যাওয়ার পরও সিগন্যালটি "মনে রাখে" এবং কাজ চালিয়ে যায়, তাই একে **Intracellular memory device (অন্তঃকোষীয় স্মৃতি যন্ত্র)** বলা হয়।

---

### Calcium-Induced Calcium Release (CICR)

**[Q050] MARKS: 3**  
**"Calcium can regulate its own release" — Explain**

**Ans:** এই চমৎকার মেকানিজমটিকে **CICR (Calcium-Induced Calcium Release)** বা "ক্যালসিয়াম দ্বারা ক্যালসিয়াম আত্ম-নিঃসরণ" বলা হয় [143,145]। মানে হলো, সামান্য একটু ক্যালসিয়াম কোষকে উদ্দীপিত করে ভেতর থেকে আরও শত শত ক্যালসিয়াম বের করে আনতে পারে।

**Mechanism (মেকানিজম):**
১. **Initial Trigger:** পরিবেশ থেকে বা IP₃ সিগন্যালের কারণে সামান্য একটু Ca²⁺ সাইটোসোল (cytosol)-এ প্রবেশ করে।
২. **RyR Activation:** এই সামান্য Ca²⁺ গিয়ে এন্ডোপ্লাজমিক রেটিকুলামের (ER) গায়ে থাকা **Ryanodine Receptors (RyR)** নামক ক্যালসিয়াম চ্যানেলের সাথে বাইন্ড করে চ্যানেলটিকে পুরোপুরি খুলে দেয় [143,145]।
৩. **Positive Feedback:** চ্যানেল খুলে যাওয়ায় ER-এর ভেতর জমা থাকা বিপুল পরিমাণ Ca²⁺ স্রোতের মতো সাইটোসোলে বেরিয়ে আসে। 
৪. **Wave Propagation:** এই অতিরিক্ত Ca²⁺ তখন পাশের RyR চ্যানেলগুলোকেও খুলে দেয়, যা কোষের ভেতর একটি **Ca²⁺ Wave (ক্যালসিয়ামের ঢেউ)** তৈরি করে [146,148]।

**উদাহরণ:** আমাদের হৃৎপিণ্ডের পেশি (cardiac muscle) সংকোচন এভাবেই কাজ করে। সামান্য ক্যালসিয়াম ঢুকে পেশির ভেতরের ক্যালসিয়ামের বিশাল ভান্ডার খুলে দেয়, যার একযোগে পেশি সংকুচিত হয় (heartbeat)।

---

### ER Stress, Chaperones, & UPR

**[Q051 / Q053] MARKS: 6+5**  
**Define ER Stress. Explain ER Stress Signaling Pathway (UPR)**

**Ans:** **ER Stress (Endoplasmic Reticulum Stress)** হলো কোষের এমন একটি বিপদজনক অবস্থা যখন ER-এর মধ্যে প্রচুর পরিমাণে **Misfolded (ভুল কাঠামোর)** প্রোটিন জমা হতে থাকে এবং ER প্রোটিন ভাজ (fold) করার স্বাভাবিক ক্ষমতা হারিয়ে ফেলে [96,109]। 

**The UPR (Unfolded Protein Response) Pathway:**
ER Stress থেকে কোষকে বাঁচানোর জন্য যে emergency alarm বা সিগন্যালিং পাথওয়ে চালু হয় তাকে UPR বলে। এর মূল সেন্সর হলো **BiP (GRP78)** নামক চ্যাপেরন প্রোটিন। স্বাভাবিক অবস্থায় BiP ৩টি সেন্সরকে (PERK, IRE1, ATF6) নিষ্ক্রিয় করে আটকে রাখে। স্ট্রেস দেখা দিলে BiP তাদের ছেড়ে দেয় এবং ৩টি পাথওয়ে চালু হয়:

**The Three Arms of UPR (৩টি প্রধান শাখা):**

| Arm / Sensor | Mechanism (কীভাবে কাজ করে) | Cellular Result (ফলাফল) |
|--------------|--------------------------|-----------------------|
| **1. PERK (Kinase)** | PERK সক্রিয় হয়ে **eIF2α**-কে phosphorylate করে। | এটি কোষে **নতুন প্রোটিন তৈরি হওয়া প্রায় পুরোপুরি বন্ধ করে দেয়** (Global translation attenuation), যাতে ER-এর ওপর চাপ কমে। তবে এটি **ATF4** জিন চালু করে যা চাপ মোকাবিলায় সাহায্য করে [97,110]। |
| **2. IRE1 (RNase)** | IRE1 একটি এনজাইম হিসেবে **XBP1** mRNA-কে কেটে জোড়া লাগিয়ে (splice) অ্যাক্টিভ করে [97,110]। | XBP1s একটি transcription factor যা ER-এ চ্যাপেরন (BiP) এবং ময়লা পরিষ্কার করার মেকানিজম (ERAD) জিনগুলো বাড়িয়ে দেয়। |
| **3. ATF6 (TF)** | ATF6 ER থেকে গলজি (Golgi)-তে যায়, সেখানে এটি কাটা পড়ে নিউক্লিয়াসে ঢোকে [98,111]। | এটিও নতুন চ্যাপেরন প্রোটিন (BiP) তৈরি করতে সাহায্য করে, যাতে প্রোটিনগুলো ঠিকমতো ভাঁজ হতে পারে। |

**UPR Outcomes (পরিনতি):**
* **Adaptive (বাঁচার লড়াই):** যদি স্ট্রেস দ্রুত সামলে নেওয়া যায়, তবে চ্যাপেরন বেড়ে এবং প্রোটিন লোড কমে কোষ বেঁচে যায়।
* **Apoptotic (মৃত্যু):** যদি স্ট্রেস কোনোভাবেই সামলানো না যায় (Prolonged stress), তবে PERK পাথওয়ের **CHOP জিন** চালু হয়ে যায়, যা কোষকে আত্মহত্যার (Apoptosis) নির্দেশ দেয় [99,112]।

---

### Hypoxia & Metabolism (HIF-1α)

**[Q054 / Q055] MARKS: 3+4**  
**Illustrate How Hypoxia Inhibits the TCA Cycle & Differences with Normoxia**

**Ans:** **Hypoxia (অক্সিজেন স্বল্পতা)** হলো কোষের এমন একটি অবস্থা যেখানে অক্সিজেন ঠিকমতো পৌঁছায় না। এই অবস্থায় কোষ তার বেঁচে থাকার মেকানিজম (Metabolism) পুরোপুরি পরিবর্তন করে ফেলে **HIF-1α (Hypoxia-Inducible Factor 1α)**-এর মাধ্যমে [101,115]।

**কীভাবে Hypoxia TCA Cycle (ক্রেবস চক্র)-কে বন্ধ করে দেয়:**
১. অক্সিজেন না থাকায় माइटोकन्ड्रिया (Mitochondria)-র Electron Transport Chain (ETC) বন্ধ হয়ে যায়।
২. এর ফলে কোষে HIF-1α জমতে থাকে এবং এটি নিউক্লিয়াসে গিয়ে **PDK1 (Pyruvate Dehydrogenase Kinase 1)** নামক একটি এনজাইমের তৈরি বাড়ায় [89,103,116]।
৩. PDK1 গিয়ে **Pyruvate Dehydrogenase (PDH)** এনজাইমটিকে ফসফোরাইলেট করে নিষ্ক্রিয় করে দেয়।
৪. PDH বন্ধ মানে Pyruvate আর Acetyl-CoA-তে পরিণত হতে পারে না।
৫. Acetyl-CoA তৈরি না হওয়ায় **TCA Cycle চলার রসদ পায় না এবং চক্রটি বন্ধ হয়ে যায়** [89,103,116]।
৬. এর ফলে কোষ Warburg Effect অনুসরণ করে: অক্সিডেটিভ পসফোরিলেশনের বদলে গ্লাইকোলাইসিস (Anaerobic glycolysis)-এর মাধ্যমে পাইরুভেট থেকে **Lactate (ল্যাকটিক এসিড)** তৈরি করতে বাধ্য হয়।

**Differences: Normoxia vs Hypoxia (পার্থক্য):**

| Feature | Normoxia (Normal O₂) | Hypoxia (Low O₂) |
|---------|---------------------|------------------|
| **PHD Enzymes** | Active (অক্সিজেন ব্যবহার করে কাজ করে) | Inactive (অক্সিজেন ছাড়া কাজ করতে পারে না) |
| **HIF-1α status** | Hydroxylated হয়ে যায়, ফলে **VHL** তাকে চিনতে পেরে ধ্বংস করে দেয় (Degraded) [101,114] | Hydroxylated হয় না, ফলে জমা হতে থাকে (Stable) এবং নিউক্লিয়াসে যায় [102,115] |
| **Gene Expression** | HRE (Hypoxia Response Elements) জিনগুলো বন্ধ থাকে | **VEGF** (নতুন রক্তনালী তৈরি), **GLUT1** (গ্লুকোজ গ্রহণ বৃদ্ধি), **EPO** (রক্তকণিকা বৃদ্ধি) জিনগুলো চালু হয় |
| **Metabolism** | Oxidative Phosphorylation (TCA Cycle) | Anaerobic Glycolysis (Lactate তৈরি) |

**স্যারের স্লাইড থেকে:** "Under normoxia, HIF-1α is continually degraded. Under hypoxia, HIF-1α escapes degradation, dimerizes with HIF-1β, and translocates to the nucleus to activate genes promoting survival in low oxygen."`,
        rawMd_en: `### CaMKII as an Intracellular Memory Device

**[Q048 / Q052] MARKS: 3**  
**"CaMKII is an intracellular memory device for a prior calcium pulse" — Explain**

**Ans:** **CaMKII** is a wheel-shaped enzyme in our neurons that acts as a physical store for "memories" of calcium signals.

**The Memory Mechanism:**
1. **Activation**: When calcium (Ca²⁺) floods the cell, it activates the CaMKII wheel.
2. **Self-Tagging (Autophosphorylation)**: The active parts of the wheel add a phosphate tag to their neighbors (at the **Thr286** position) [155,157].
3. **The "Memory" State**: Once tagged, the enzyme **STAYS ACTIVE** even after the calcium has disappeared!
4. **Learning**: This prolonged activity strengthens the connection between neurons (**LTP**), which is how we learn and store memories [3,165,168].

**Conclusion**: Because the enzyme "remembers" the signal long after the signal is gone, it is called an **Intracellular Memory Device**.

---

### Calcium-Induced Calcium Release (CICR)

**[Q050] MARKS: 3**  
**"Calcium can regulate its own release" — Explain**

**Ans:** This is a "Chain Reaction" mechanism where a small amount of calcium triggers the release of a massive flood of calcium from within the cell [143,145].

**How it works:**
1. **The Spark**: A tiny bit of Ca²⁺ enters the cell from the outside.
2. **The Sensor**: This Ca²⁺ binds to **Ryanodine Receptors (RyR)** on the ER (the cell's calcium warehouse).
3. **The Flood**: The RyR channels snap open, and the massive store of Ca²⁺ within the ER floods into the cell [143,145].

**Real-world Example**: This is exactly how your **Heart** beats! A small electrical trigger lets in a tiny bit of calcium, which then releases the flood needed to make the heart muscle contract [146,148].

---

### ER Stress, Chaperones, & UPR

**[Q051 / Q053] MARKS: 6+5**  
**Define ER Stress. Explain ER Stress Signaling Pathway (UPR)**

**Ans:** **ER Stress** is an emergency state where the cell's "factory" (the ER) gets clogged with **Misfolded Proteins** and cannot process them properly [96,109].

**The UPR (Unfolded Protein Response) - The Rescue Plan:**
To save the cell, the ER launches an alarm system called UPR. It has 3 main arms to solve the problem:

| Arm | Action | Goal |
|-----|--------|------|
| **PERK** | Stops worldwide protein production. | **Reduces the load** on the ER factory so it can catch up [97,110]. |
| **IRE1** | Switches on genes for "cleaners" (ERAD). | **Destroys the broken proteins** to clear the clog [97,110]. |
| **ATF6** | Produces more "Helpers" (Chaperones). | **Helps fold** the remaining proteins correctly [98,111]. |

**Final Decision**: If the factory is sorted out, the cell lives. If the stress is too high for too long, the cell activates the **CHOP gene** and commits suicide (Apoptosis) to protect the surrounding tissue [99,112].

---

### Hypoxia & Metabolism (HIF-1α)

**[Q054 / Q055] MARKS: 3+4**  
**Illustrate How Hypoxia Inhibits the TCA Cycle & Differences with Normoxia**

**Ans:** **Hypoxia (Low Oxygen)** forces cells to completely change how they produce energy. Instead of burning fuel efficiently with oxygen, they switch to a survive-at-all-costs mode using **HIF-1α** [101,115].

**How Hypoxia Shuts Down the TCA Cycle (The Warburg Effect):**
1. Without oxygen, the cell stabilizes the protein **HIF-1α**.
2. HIF-1α switches ON the gene **PDK1** [89,103,116].
3. PDK1 "kills" (inhibits) the enzyme needed to enter the TCA cycle (PDH).
4. **Result**: The cell stops burning fuels in the mitochondria and instead turns everything into **Lactate**. This is less efficient but doesn't require oxygen.

**Normoxia vs. Hypoxia:**

| Feature | Normoxia (Normal O₂) | Hypoxia (Low O₂) |
|---------|---------------------|------------------|
| **HIF-1α** | **Destroyed** instantly by the cell's "shredder" (VHL). | **Stays Active** and builds up in the nucleus [101,114]. |
| **Genes** | Normal housekeeping genes. | **Emergency Genes** ON: VEGF (New blood vessels), GLUT1 (More sugar) [102,115]. |
| **Energy** | Efficient energy from Oxygen. | Inefficient speed-mode (Anaerobic Glycolysis). |`
    },
    {
        id: "set7",
        title: "🔹 SET 7 — Chemotaxis, Cross-talk & Gap Junctions",
        rawMd_bn: `### Bacterial Chemotaxis

**[Q059 / Q074] MARKS: 6+14**  
**a) Define Chemotaxis. Illustrate the Bacterial Chemotaxis Mechanism**

**Ans:** **Chemotaxis (কেমোট্যাক্সিস):** রাসায়নিক পদার্থের ঘনত্বের উপর ভিত্তি করে কোনো জীবের নির্দিষ্ট দিকে চলাকে Chemotaxis বলে। ব্যাকটেরিয়া পুষ্টির (attractants) দিকে এগোয় (positive) এবং বিষাক্ত পদার্থ (repellents) থেকে দূরে সরে যায় (negative) [46,49]।

এটি ব্যাকটেরিয়ার **Two-Component Signaling System**-এর একটি চমৎকার উদাহরণ। এখানে কোনো সেকেন্ড মেসেঞ্জার নেই, শুধু ফসফেট ট্রান্সফার হয়।

**The Two-Component Paradigm:**
1. **Sensor Histidine Kinase (CheA):** সিগন্যাল পেলে নিজের Histidine এমিনো এসিডে ফসফেট যুক্ত করে (autophosphorylation) [46,49]।
2. **Response Regulator (CheY):** সেন্সর থেকে ফসফেটটি গ্রহণ করে এক্টিভ হয় এবং ফ্ল্যাজেলা মোটরে গিয়ে সিগন্যাল দেয় [46,49]।

**Mechanism (E. coli-তে মেকানিজম):**

**অবস্থা ১: কোনো খাবার (Attractant) নেই (Tumbling / ঘুরপাক খাওয়া):**
* ব্যাকটেরিয়ার মেমব্রেনে থাকা **MCP (Receptors)** অবিরাম **CheA** কাইনেজকে সক্রিয় রাখে।
* CheA নিজের গায়ে ফসফেট বসায় (CheA-P) এবং তা **CheY** রেগুলেটরের কাছে পাস করে (CheY-P)।
* CheY-P গিয়ে সোজা ফ্ল্যাজেলার মোটরে (Flagellar motor)-এ ধাক্কা দেয়, ফলে মোটরটি **Clockwise (CW - ঘড়ির কাঁটার দিকে)** ঘোরে।
* এর ফলে ব্যাকটেরিয়া এক জায়গায় দাঁড়িয়ে লক্ষ্যহীনভাবে ঘুরপাক খায় (Tumble)।

**অবস্থা ২: খাবার (Attractant) পাওয়া গেলো (Running / সোজা দৌড়ানো):**
* খাবার এসে **MCP**-এর সাথে বাইন্ড করলে MCP-এর আকার বদলে যায়।
* এটি **CheA**-কে **নিষ্ক্রিয় (Inhibited)** করে দেয়। ফলে CheA আর নিজেকে ফসফোরাইলেট করতে পারে না [47,48]।
* যেহেতু CheA-P নেই, তাই **CheY-ও ফসফেট পায় না**।
* CheY-P মোটরে ধাক্কা দিতে না পারায় মোটরটি তার ডিফল্ট মোডে **Counter-clockwise (CCW)** ঘোরে।
* ফলে ব্যাকটেরিয়া সোজা খাবারের দিকে মসৃণভাবে দৌড়াতে থাকে (Smooth Run)!
* একইসাথে **CheZ** নামক ফসফাটেজ পুরোনো CheY-P গুলোকে দ্রুত ফসফেটমুক্ত করে দেয়।

**Adaptation (মানিয়ে নেওয়া):** যদি ব্যাকটেরিয়া অনেকক্ষণ খাবারের মধ্যে থাকে, তখন **CheR** নামের এনজাইম MCP-তে মিথাইল (Methyl) গ্রুপ যুক্ত করে তাকে আবার অবশ করে দেয় (Sensitization reset), ফলে ব্যাকটেরিয়া আবার নতুন করে গ্রেডিয়েন্ট মাপে [47,50]।

---

### Gap Junctions & Paracrine Coordination

**[Q059b / Q062] MARKS: 3+3**  
**Significance of Gap Junctions & Hepatic Coordination**

**Ans:** **Gap Junction** হলো কোষের মেমব্রেনে থাকা ছোট চ্যানেল, যা **Connexin** প্রোটিন দিয়ে তৈরি। এরা দুটি পাশাপাশি কোষের সাইটোপ্লাজমকে সরাসরি সংযুক্ত করে, ফলে আয়ন এবং ১০০০ ডাল্টনের চেয়ে ছোট অণু (যেমন cAMP, Ca²⁺, IP₃) এক কোষ থেকে অন্য কোষে বিনাবাধায় পার হতে পারে [197,235]।

**Role in Hepatocytes (লিভারে গ্লাইকোজেন ভাঙার উদাহরণ):**
আমাদের লিভারে sympathetic স্নায়ুর প্রান্ত লিভারের মাত্র ৩-৫% কোষে (periportal hepatocytes) সরাসরি পৌঁছায়। কিন্তু গ্লুকোজ দরকার পড়লে লিভারের ১০০% কোষকেই কাজ করতে হবে। 
১. স্নায়ু থেকে **Noradrenaline** রিলিজ হয়ে ওই ৩-৫% কোষের GPCR-এ বাইন্ড করে।
২. কোষে PLC পাথওয়ের মাধ্যমে **IP₃ এবং Ca²⁺** তৈরি হয় [197,330]।
৩. এই বিপুল পরিমাণ **Ca²⁺ এবং IP₃ Gap Junction দিয়ে সরাসরি পাশের লিভার কোষগুলোতে ঢুকে পড়ে**।
৪. দেখতে দেখতে پورے লিভারে ক্যালসিয়ামের ঢেউ (Ca²⁺ wave) ছড়িয়ে পড়ে। 
৫. ক্যালসিয়াম সব কোষের Phoshphorylase kinase-কে সক্রিয় করে, যা গ্লাইকোজেন ভেঙে গ্লুকোজ রক্তে রিলিজ করে [332,339]।

---

### Nitric Oxide (NO) Signaling in Vasodilation

**[Q063] MARKS: 4**  
**Nitric Oxide Signaling Pathway**

**Ans:** **Nitric Oxide (NO)** হলো একটি গ্যাসীয় সিগন্যালিং অণু যা সহজেই মেমব্রেন ভেদ করে কোষে কোষে সিগন্যাল পাঠাতে পারে [105,107]। এটি মূলত রক্তনালী প্রসারিত করে (Vasodilation) রক্তচাপ কমাতে সাহায্য করে।

**Pathway (ধাপে ধাপে):**
১. রক্তনালীর ভেতরের আস্তরণের কোষে (Endothelial cell) Acetylcholine বাইন্ড করলে Ca²⁺ বাড়ে।
২. Ca²⁺ গিয়ে **eNOS (endothelial NO Synthase)** এনজাইমকে সক্রিয় করে। eNOS কার্বন-যৌগ আর্জিনিনকে (L-Arginine) ভেঙে **NO গ্যাস** তৈরি করে [105,107]।
৩. NO গ্যাস দ্রুত ব্যাপিত (diffuse) হয়ে পাশের মসৃণ পেশিকোষে (Smooth muscle cell) প্রবেশ করে।
৪. পেশিকোষের ভেতরে NO সরাসরি **sGC (Soluble Guanylyl Cyclase)** এনজাইমের সাথে বাইন্ড করে তাকে সক্রিয় করে দেয় [107,284]।
৫. সক্রিয় sGC কোষের GTP-কে ভেঙে **cGMP** নামের সেকেন্ড মেসেঞ্জার তৈরি করে।
৬. cGMP তখন **PKG (Protein Kinase G)**-কে এক্টিভ করে [284,288]।
৭. PKG পেশির সংকোচন প্রোটিনগুলোকে নিষ্ক্রিয় করে দেয়। ফলে পেশি শিথিল হয়ে যায় (Relaxation) এবং রক্তনালী প্রসারিত (Vasodilation) হয় [107,284]।

---

### Integration: Receptors as Effectors & Signal Classifications

**[Q065 / Q066] MARKS: 3+3**  
**"Same molecule can be receptor and effector for a particular signal" — Explain**

**Ans:** সাধারণত কোষে সিগন্যাল রিসিভ করার জন্য থাকে "রিসেপ্টর" এবং আসল কাজটা করার জন্য থাকে "ইফেক্টর" (যেমন এনজাইম)। কিন্তু কিছু কিছু অণু একইসাথে সিগন্যাল রিসিভও করে এবং নিজের এনজাইম অ্যাক্টিভিটি দিয়ে কাজও সেরে ফেলে। এদেরকেই **Receptor and Effector dual-function molecule** বলে।

**উদাহরণ:**
১. **Receptor Tyrosine Kinases (RTKs):** যেমন EGF Receptor। এর বাইরের অংশ সিগন্যাল (EGF) রিসিভ করে (Receptor হিসেবে), আর ভেতরের অংশ নিজেই একটি কাইনেজ এনজাইম (Effector) হিসেবে প্রোটিন ফসফোরাইলেট করে। 
২. **Nuclear Receptors:** স্টেরয়েড হরমোন রিসেপ্টরগুলো নিজেই সাইটোসোলে সিগন্যাল ধরে (Receptor) এবং নিজেই সোজা নিউক্লিয়াসে ঢুকে ট্রান্সক্রিপশন ফ্যাক্টর হিসেবে জিন এক্সপ্রেস করে (Effector) [247,248]।

---

**Differentiate Between Endocrine and Synaptic Signaling**

| Feature | Endocrine Signaling | Synaptic Signaling |
|---------------------|-----------------------------------|----------------------------------|
| **Signal molecule** | **Hormones** | **Neurotransmitters** |
| **Path & Distance** | Via bloodstream (many meters) | Via the tiny gap (20 nm) |
| **Speed** | **Slow** (minutes to hours) | **Extremely Fast** (milliseconds) |
| **Target** | Broad (any cell with receptor) | Precise (one neuron or muscle) |`,
        rawMd_en: `### Bacterial Chemotaxis

**[Q059 / Q074] MARKS: 6+14**  
**a) Define Chemotaxis. Illustrate the Bacterial Chemotaxis Mechanism**

**Ans:** **Chemotaxis** is defined as the movement of an organism (like bacteria) in response to a chemical gradient. Bacteria move TOWARDS food (**Positive Chemotaxis**) and AWAY from toxins (**Negative Chemotaxis**) [46,49].

**The Two-Component System (The Brain of the Bacteria):**
Bacteria don't use second messengers; they use a simple "Relay" system involving two main proteins:
1. **CheA (The Sensor)**: It adds a phosphate to itself when triggered (Autophosphorylation).
2. **CheY (The Motor-Switcher)**: It takes the phosphate from CheA and acts on the motor.

**How it works (The Tumble vs. Run):**

**Scenario 1: NO Food (Tumbling / Random Search)**
* Receptors on the membrane keep **CheA ACTIVE**.
* Active CheA passes a phosphate to **CheY**.
* **CheY-P** hits the flagellar motor, forcing it to spin **Clockwise (CW)**.
* **Result**: The bacteria tumbles in place, looking around randomly.

**Scenario 2: Food FOUND (Smooth Running)**
* Food binds to the receptor, which **STOPS (Inhibits) CheA**.
* Since CheA is off, there is no phosphate for CheY.
* Without CheY-P, the flagellar motor spins in its default **Counter-Clockwise (CCW)** mode.
* **Result**: The bacteria "runs" in a straight, smooth line toward the food!

---

### Gap Junctions & Paracrine Coordination

**[Q059b / Q062] MARKS: 3+3**  
**Significance of Gap Junctions & Hepatic Coordination**

**Ans:** **Gap Junctions** are tiny "bridges" (channels) made of **Connexin** proteins that directly connect the interiors of neighboring cells [197,235].

**The Liver Coordination Power (Why Gap Junctions matter):**
In the liver, nerves only touch about 3-5% of the cells directly. However, when we need sugar, the **WHOLE liver** responds instantly.
1. Nerves trigger only those 3-5% of cells to produce **Calcium and IP₃**.
2. **The Wave**: These small signaling molecules flood into the neighboring 95% of cells directly through **Gap Junctions**.
3. **Coordinated Action**: This causes a "Calcium Wave" to sweep across the entire liver, triggering all cells to break down glycogen and release glucose simultaneously [197,330,332].

---

### Nitric Oxide (NO) Signaling in Vasodilation

**[Q063] MARKS: 4**  
**Nitric Oxide Signaling Pathway**

**Ans:** **Nitric Oxide (NO)** is a gaseous signal that relaxes blood vessels to lower blood pressure. Since it's a gas, it diffuses effortlessly through cell membranes [105,107].

**The Vasodilation Sequence:**
1. Acetylcholine on blood vessel walls triggers a rise in **Calcium**.
2. Calcium activates the enzyme **eNOS**, which creates NO gas from the amino acid Arginine [105,107].
3. NO gas diffuses into the nearby muscle cells.
4. Inside the muscle, NO activates the enzyme **sGC**, which creates the second messenger **cGMP**.
5. **cGMP** turns on **PKG**, which tells the muscle to **RELAX**.
6. **Result**: The blood vessel widens (Vasodilation), allowing more blood flow and lower pressure.

**The "Blue Pill" Fact**: Medicines like Viagra work by blocking the enzyme (**PDE5**) that breaks down cGMP, keeping the muscle in a relaxed, open state for longer [284,288].

---

### Integration: Receptors as Effectors & Signal Classifications

**[Q065 / Q066] MARKS: 3+3**  
**"Same molecule can be receptor and effector for a particular signal" — Explain**

**Ans:** Normally, you have a "Receptor" to hear the signal and an "Effector" (like an enzyme) to do the work. However, some molecules are "Self-Sufficient" and do both jobs themselves.

**Examples:**
1. **RTKs (e.g., Insulin Receptor)**: The top part is the receptor (hears insulin), and the bottom part is the enzyme (performs the work of phosphorylation). No middle-man needed.
2. **Nuclear Receptors**: They bind to the steroid hormone (Receptor) and then travel to the DNA to directly switch on genes (Effector) [247,248].

---

**Differentiate Between Endocrine and Synaptic Signaling**

| Feature | Endocrine Signaling | Synaptic Signaling |
|---------------------|-----------------------------------|----------------------------------|
| **Signal Source** | **Hormones** (Global) | **Neurotransmitters** (Local) |
| **Speed** | **Slow** (Minutes to Hours) | **Instant** (Fraction of a millisecond) |
| **Precision** | Broad (Targets the whole body) | Pinpoint (Targets one specific cell) |
| **Removal** | Slow (Liver/Kidneys) | Fast (Instant destruction) |`
    }
];

// If geb331_sets is already defined (from geb331_data.js and part2), we merge them.
if (typeof geb331_sets !== 'undefined') {
    // Inject or update set5, set6, and set7
    const set5Index = geb331_sets.findIndex(s => s.id === s.id && s.id === "set5");
    if (set5Index !== -1) geb331_sets[set5Index] = geb331_sets_part3[0];
    else geb331_sets.push(geb331_sets_part3[0]);

    const set6Index = geb331_sets.findIndex(s => s.id === s.id && s.id === "set6");
    if (set6Index !== -1) geb331_sets[set6Index] = geb331_sets_part3[1];
    else geb331_sets.push(geb331_sets_part3[1]);

    const set7Index = geb331_sets.findIndex(s => s.id === s.id && s.id === "set7");
    if (set7Index !== -1) geb331_sets[set7Index] = geb331_sets_part3[2];
    else geb331_sets.push(geb331_sets_part3[2]);
}
