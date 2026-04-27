/**
 * GEB334 - ONCOLOGY AND VIROLOGY
 * Comprehensive bilingual course data (Sets 1-2 detailed, 3-8 framework)
 * Compatible format for interactive learning platform
 * Last Updated: April 2026
 */

// BACKWARDS COMPATIBLE ARRAY FORMAT FOR EXISTING HTML RENDERER
const geb334_sets = [
  {
    id: "set1-intro",
    title: "🧬 Set 1: Oncology — Core Definitions & Tumor Growth",
    rawMd_en: `
### Cluster 1.1: Core Definitions and Kinetics of Growth
**Years Appeared:** 2023, 2022, 2016, 2015, 2014, 2013 | **Marks:** 1+3, 3, 4, 5

### [Q1.1.1] Define Oncology, Neoplasm, Tumor, and Cancer

**Oncology:** A branch of medicine dealing with the prevention, diagnosis, and treatment of cancer. Root: Oncos (mass/bulk) + Logia (study). [অর্বুদবিজ্ঞান]

**Neoplasm:** A group of cells undergoing unregulated, autonomous growth, forming a mass or distributed diffusely. Root: Neo (new) + Plasm (formation). [নতুন কোষ সমষ্টির অস্বাভাবিক বৃদ্ধি]

**Tumor:** A mass or lump of tissue that develops when cells reproduce too quickly. Not all tumors are cancerous; some are benign. [টিউমার / অর্বুদ]

**Cancer:** A group of diseases characterized by abnormal cell growth with the potential to invade or spread. Forms a subset of neoplasm. [কর্কটরোগ / অনিয়ন্ত্রিত কোষ বৃদ্ধি]

**Tumorigenesis:** The multi-step process by which normal cells are transformed into cancer cells. Also called oncogenesis or carcinogenesis. [ক্যান্সার সৃষ্টির প্রক্রিয়া]

### [Q1.1.2] What is Neoplasm? Describe the Mechanism of Tumor Cell Growth

**Definition:** Neoplasm is a group of cells undergoing unregulated, autonomous growth.

**Mechanism of Tumor Cell Growth:**
1. **Genetic Mutation:** Normal cell undergoes DNA damage, disrupting regulatory circuits
2. **Autonomous Signaling:** Cells divide without the "Go" signals from the body
3. **Adhesion Loss:** Cancer cells lack molecules that hold them together, allowing invasion of nearby tissues
4. **Proliferation:** Uncontrolled cell division continues without normal growth constraints

### [Q1.1.3] Define Tumorigenesis and Describe Kinetics of Tumor Cell Growth

**Tumorigenesis Definition:** The multi-step process by which normal cells are transformed into cancer cells through accumulation of genetic mutations.

**Kinetics of Tumor Cell Growth - Three Key Parameters:**

| Parameter | Definition | Example |
|-----------|-----------|---------|
| **Doubling Time** | Time taken for tumor to double in size | Brain tumors: ~36 days |
| **Growth Fraction** | % of cells actively proceeding through cell cycle | Averages ~30% |
| **Gompertzian Growth** | Growth deceleration as tumor grows larger | Doubling time increases as nutrients become limited |

**Logic:** Growth fraction decreases over time due to limited nutrients, causing the doubling time to increase.

### [Q1.1.4] Define Cancer and Write Down Signs and Symptoms

**Signs & Symptoms of Cancer:**

**Local Symptoms:**
- Lump formation (e.g., breast cancer)
- Nipple/tissue discharge (ক্ষরণ)
- Persistent pain at site
- Bleeding or abnormal secretions

**Systemic Symptoms:**
- Cachexia: severe malnutrition/wasting (অত্যন্ত কৃশতা)
- Anemia: reduced hemoglobin levels (Hb কমে যাওয়া)
- Persistent fever
- Unexplained weight loss
- Fatigue and weakness

**Neurological Symptoms (if CNS involved):**
- Seizures (খিঁচুনি)
- Headaches
- Vision/balance disturbances

💡 **Memory Tip:** Think of "30/36" — 30% is typical growth fraction, 36 days is common doubling time for brain tumors.

---

### Cluster 1.2: Benign vs. Malignant Tumors & Classification
**Years Appeared:** 2023, 2022, 2021, 2017 | **Marks:** 1+3, 2+2, 5, 4

### [Q1.2.1] What is the Difference Between Benign and Malignant Tumors?

| Feature | Benign Tumor | Malignant Tumor (Cancer) |
|---------|-------------|------------------------|
| **Growth Rate** | Grows slowly (ধীর গতি) | Grows rapidly (দ্রুত গতি) |
| **Capsule** | Well-defined capsule present | Not encapsulated (আবরণীহীন) |
| **Invasiveness** | Not invasive | Invasive (অনুপ্রবেশকারী/আক্রমণাত্মক) |
| **Metastasis** | Does not metastasize | Can spread distantly (স্থানান্তর হয়) |
| **Cell Differentiation** | Well-differentiated | Poorly differentiated (বিকৃত কোষ) |
| **Recurrence** | Rarely recurs | Sometimes grows back after removal |
| **Cellular Atypia** | Mild/none | Marked atypia and pleomorphism |

**Key Logic:** Malignant tumors can "invade" (penetrate basement membrane) and enter bloodstream to form secondary tumors, making them life-threatening.

### [Q1.2.2] Describe Adenomas and Their Mode of Action for Formation

**Adenoma Definition:** Benign tumor that develops in glandular epithelial tissue (গ্ল্যান্ডুলার এপিথেলিয়াল টিস্যু).

**Examples:**
- Colon polyps (benign adenoma of intestinal mucosa)
- Thyroid adenoma
- Pituitary adenoma

**Mode of Action for Formation:**
1. Single initiated cell with minor mutation forms
2. Clonal expansion through localized growth factors
3. Well-capsulated structure develops
4. Slow proliferation maintained within defined boundary
5. No invasion of surrounding tissues
6. No metastatic potential

### [Q1.2.3] Write Notes on Cervical Dysplasia and Metaplasia of Lung

**Cervical Dysplasia:**
- **Definition:** Abnormal cell changes in the cervix, often precancerous
- **Cause:** Usually HPV (Human Papillomavirus) infection
- **Characteristics:** Disorganized cell layers, increased nuclear-cytoplasmic ratio
- **Grading:** CIN I (mild), CIN II (moderate), CIN III (severe)
- **Clinical Significance:** Can progress to cervical cancer if untreated
- **Detection:** Pap smear screening, HPV testing

**Metaplasia of Lung (Lung Squamous Metaplasia):**
- **Definition:** Conversion of bronchial ciliated columnar epithelium into keratinized squamous epithelium
- **Trigger:** Chronic irritation from smoking or air pollution
- **Mechanism:** Chronic inflammation causes reversible transformation of cell type
- **Risk:** Squamous cells are more prone to malignant transformation
- **Prevention:** Smoking cessation, avoiding air pollutants

### [Q1.2.4] Classify Tumors with Appropriate Examples

**Benign Types:**
- **Adenomas:** Glandular tissue (e.g., colon polyps, thyroid adenoma)
- **Fibroids:** Fibrous/connective tissue (e.g., uterine fibroids/leiomyomas)
- **Hemangiomas:** Blood vessel proliferation (strawberry marks on skin)
- **Osteoma:** Bone tumors
- **Lipoma:** Fat tissue proliferation

**Premalignant/Dysplastic Types:**
- **Cervical Dysplasia:** CIN lesions from HPV
- **Metaplasia of Lung:** Squamous cell metaplasia from smoking
- **Barrett's Esophagus:** Intestinal metaplasia of esophagus (reflux risk)
- **Dysplastic Nevi:** Atypical moles predisposing to melanoma

**Malignant Types:**
- **Carcinoma:** Epithelial origin (skin, lung, GI tract) — ~95% of cancers
- **Sarcoma:** Connective tissue origin (bone, fat, muscle, cartilage)
- **Leukemia:** Blood-forming cells (myeloid, lymphoid origin)
- **Lymphoma:** Lymphoid tissue origin (Hodgkin, Non-Hodgkin)
- **Melanoma:** Melanocyte origin

---

### Cluster 1.3: Host and Environmental Factors
**Years Appeared:** 2023, 2022, 2017, 2016, 2015 | **Marks:** 4, 5

### [Q1.3.1] Discuss the Factors Affecting Cancer Growth

**Environmental Factors:**

| Factor | Mechanism | [Bangla] |
|--------|-----------|----------|
| **Tobacco** | Multipotent carcinogenic mixture in smoke | ধূমপান / তামাক |
| **Ionizing Radiation** | X-rays, radioisotopes cause DNA damage and mutations | আয়নাইজিং রেডিয়েশন |
| **Diet/Xenobiotics** | Toxic chemicals in cooked fat/meat from high-heat cooking | বিজাতীয় বিষাক্ত পদার্থ |
| **Obesity** | Adipose tissue acts as endocrine organ, producing growth factors | স্থূলতা / চর্বিতা |
| **UV Radiation** | Causes DNA damage in skin cells, leading to melanoma | অতিবেগুনী রশ্মি |
| **Occupational Hazards** | Asbestos, vinyl chloride, benzene exposure | পেশাগত ঝুঁকি |

**Host/Internal Factors:**

| Factor | Mechanism | [Bangla] |
|--------|-----------|----------|
| **Age** | 60% of cancer occurs in people >65 years due to accumulated mutations | বয়স |
| **Hormones** | Lifetime estrogen exposure linked to breast/reproductive cancers | হরমোন |
| **Immunity** | Decline in cellular immunity with age; immunosuppression increases cancer risk | রোগ প্রতিরোধ |
| **Genetic Predisposition** | BRCA1/BRCA2, p53 mutations increase familial risk | জেনেটিক প্রবণতা |
| **Chronic Inflammation** | Persistent inflammation (H. pylori, HBV, HCV) increases cancer risk | দীর্ঘস্থায়ী প্রদাহ |

### [Q1.3.2] Statement: "Cancer remains a hugely expensive public health problem" — Explain

**Justification for the Statement:**

**Financial Burden:**
- Complex diagnosis: Biopsy, MRI, CT scans, genetic testing (all expensive)
- Expensive treatments: Chemotherapy ($10,000-$50,000+), Radiation therapy, Immunotherapy
- Surgery costs: Oncological resections require specialized teams
- Palliative care and hospice services

**Human Suffering:**
- Loss of productivity in working population
- Caregiver burden on families
- Psychological trauma and mental health costs
- Reduced quality of life

**Healthcare System Impact:**
- Overwhelmed oncology departments
- Need for specialized personnel and equipment
- Radiation oncology infrastructure requirements
- Screening programs that must be universally accessible

**Economic Loss:**
- Estimated global cancer economic impact: >$1 trillion annually
- Lost wages from patients and caregivers
- Premature mortality reducing workforce productivity

---

### Cluster 1.4: Malignant Progression & Cancer Evolution
**Years Appeared:** 2022, 2016, 2015 | **Marks:** 4, 5

### [Q1.4.1] What is Malignant Progression? Discuss the Mechanism

**Definition:** The process where a single mutated cell evolves into a detectable mass and eventually outright cancer, acquiring increasingly aggressive traits.

**Mechanism of Malignant Progression - Sequential Steps:**

1. **Hyperproliferation:** Uncontrolled cell division without growth factor signals
2. **Angiogenesis:** Tumor induces growth of new blood vessels for nutrient supply (Angio=vessel, Genesis=creation)
3. **Invasion:** Breaking through basement membrane into surrounding tissue
4. **Intravasation:** Entering bloodstream from primary tumor (CTCs: Circulating Tumor Cells)
5. **Circulation:** Surviving in bloodstream despite immune attack and shear stress
6. **Extravasation:** Exiting bloodstream at distant organ site
7. **Metastatic Growth:** Proliferation at secondary organ site

### [Q1.4.2] Describe the 6 Hallmarks of Cancer and 7 Principles of Cancer Evolution

**The 6 Hallmarks of Cancer:**

1. **Immortality:** Limitless replicative potential (অমরত্ব) — Telomerase reactivation
2. **Self-sufficiency in Growth Signals:** Produce their own growth factors (autocrine stimulation)
3. **Insensitivity to Anti-growth Signals:** Ignore p53 and Rb tumor suppressor messages
4. **Evading Apoptosis:** Avoid programmed cell death (কোষের পরিকল্পিত মৃত্যু রোধ)
5. **Sustained Angiogenesis:** Continuous induction of new blood vessel growth
6. **Tissue Invasion & Metastasis:** Ability to invade and spread to distant organs

**The 7 Principles of Cancer Evolution:**

1. **Mediated by Somatic Evolution:** Mutations in body cells, not germ cells (দেহকোষের বিবর্তন)
2. **Multiple Tissue Types:** Many tissue-specific diseases share uncontrolled replication mechanism
3. **Driven by Mutation & Selection:** Natural selection of advantageous mutations (Darwinian evolution)
4. **Polygenic & Multifactorial:** Multiple genes + environment + chance events
5. **Involves Evolutionary Tradeoffs:** Normal cellular functions are hijacked for cancer survival
6. **Anticancer Adaptations Evolve:** DNA repair genes and senescence pathways activate
7. **Cell Population Dynamics:** Populations evolve in response to therapy and immune pressure (চিকিৎসায় বাধা দান)

💡 **Logic Hint:** Remember "Soil and Seed" theory — Cancer cell is the Seed, target organ is the Soil. Metastasis only grows if seed finds compatible soil.
    

---

### 💡 Exam Tips & Summary
- Prioritize repeated year-tagged questions from this set.
- Keep a 3-line answer frame ready: definition, key mechanism/steps, exam keywords.
- Use one quick table/flow or contrast point for higher marks in long answers.
- Revise this set once within 24 hours and once in final revision week.
`,
    rawMd_bn: `
### ক্লাস্টার 1.1: মূল সংজ্ঞা এবং টিউমার বৃদ্ধির গতিবিদ্যা

**বছর:** 2023, 2022, 2016, 2015, 2014, 2013 | **মার্ক:** 1+3, 3, 4, 5

### [Q1.1.1] অনকোলজি, নিওপ্লাজম, টিউমার এবং ক্যান্সার সংজ্ঞায়িত করুন

**অনকোলজি:** ক্যান্সারের প্রতিরোধ, নির্ণয় এবং চিকিৎসা নিয়ে আলোচনাকারী চিকিৎসা বিজ্ঞানের একটি শাখা।

**নিওপ্লাজম:** অনিয়ন্ত্রিত, স্বায়ত্তশাসিত বৃদ্ধির মধ্য দিয়ে যাওয়া কোষগুলির একটি গ্রুপ।

**টিউমার:** কোষগুলি খুব দ্রুত প্রজনন করার সময় বিকশিত হওয়া টিস্যুর একটি ভর বা পিণ্ড।

**ক্যান্সার:** অস্বাভাবিক কোষ বৃদ্ধি দ্বারা চিহ্নিত রোগের একটি গ্রুপ যা আক্রমণ বা ছড়িয়ে পড়ার সম্ভাবনা রয়েছে।

**টিউমোরিজেনেসিস:** স্বাভাবিক কোষগুলি ক্যান্সার কোষে রূপান্তরিত হওয়ার বহুপদক্ষেপী প্রক্রিয়া।
    

---

### 💡 Exam Tips & Summary (দ্রুত রিভিশন)
- এই সেটের বারবার আসা বছরভিত্তিক প্রশ্ন আগে শেষ করো।
- ৩-লাইন ফরম্যাটে উত্তর লেখো: সংজ্ঞা, মূল মেকানিজম/স্টেপ, এক্সাম-কিওয়ার্ড।
- বড় উত্তরে ১টা টেবিল/ফ্লো/তুলনা যোগ করলে নম্বর বাড়ে।
- ২৪ ঘণ্টার মধ্যে ১ বার এবং ফাইনাল রিভিশনে ১ বার সেটটি রিভিশন দাও।
`
  },
  
  {
    id: "set2-spread",
    title: "🔄 Set 2: Spread of Tumors — Invasion & Metastasis",
    rawMd_en: `
### Cluster 2.1: Tumor Invasion and Dissemination
**Years Appeared:** 2023, 2022, 2016, 2014, 2013 | **Marks:** 1+3, 4, 5

### [Q2.1.1] What is Tumor Invasion? Describe the Pathway

**Definition:** The capacity of tumor cells to disrupt the basement membrane (বেজমেন্ট মেমব্রেন) and penetrate underlying stroma (স্ট্রোমা—কোষের চারপাশের অবকাঠামো). The hallmark of malignancy.

**The Three-Step Theory of Invasion:**

| Step | Process | Mechanism |
|------|---------|-----------|
| **1** | **Attachment** | Cells bind to matrix using integrins, fibronectin, laminin receptors (আঠার মতো লেগে থাকা) |
| **2** | **Proteolysis** | Local degradation via Matrix Metalloproteinases/MMPs (এনজাইম দিয়ে টিস্যু গলিয়ে ফেলা) |
| **3** | **Locomotion** | Migration using invadopodia extensions (অনুপ্রবেশের জন্য চলাফেরা করা) |

### [Q2.1.2] Routes and Pathways of Dissemination (Spread)

1. **Tissue Spaces:** Direct infiltration through connective tissues
2. **Lymph Vessels:** Cells enter nearby lymphatics; earliest route for carcinomas
3. **Blood Vessels:** Common in sarcomas; cells enter capillaries to reach distant organs
4. **Coelomic Cavities:** Spread across body cavities (peritoneum in ovarian cancer)
5. **Cerebrospinal Spaces:** Migration through CSF in CNS involvement
6. **Epithelial Surfaces:** Direct spread along membranes (lip-to-lip spread)

### [Q2.1.3] Dissemination by Blood Vessels — Venous vs. Arterial

**Why Venous Invasion is More Common:**
- Veins have thin walls and low pressure → easier to penetrate
- Venous flow slower → tumor cells lodge more easily

**Why Arteries Are Protected:**
- Thick walls containing elastic fibers (স্থিতিস্থাপক তन্তু)
- Antiproteolytic factors (প্রোটিন ধ্বংসরোধী উপাদান) inhibit tumor cell enzymes
- High pressure blood flow dislodges tumor cells

**Circulating Tumor Cells (CTCs):**
- Once in bloodstream, cells are swept along
- Lodge in narrow capillaries at distant organs
- May clump with platelets for protection

💡 **Tip:** "3-Step Drill" = Attach (Stick), Digest (Dissolve), Move (Step in)

---

### Cluster 2.2: Metastasis and Tumor Spread
**Years Appeared:** 2023, 2022, 2017, 2016, 2014, 2013 | **Marks:** 1+3, 4, 5

### [Q2.2.1] What is Metastasis? Describe the Steps Involved

**Definition:** A growth separate from the primary tumor arising from detached, transported fragments. Meta (change) + Stasis (place) = স্থানান্তর.

**The Metastatic Cascade - 7 Stages:**

| Stage | Name | Biological Action |
|-------|------|-------------------|
| **1** | **Invasion** | Breaking through basement membrane into local tissue |
| **2** | **Angiogenesis** | Induction of new blood vessels for supply and pathway |
| **3** | **Intravasation** | Entry into blood or lymph stream |
| **4** | **Circulation** | Travel through body; cells clump with platelets for protection |
| **5** | **Arrest** | Mechanical wedging to capillary walls of distant organ |
| **6** | **Extravasation** | Cells slip out of vessel into organ tissue (8–24 hours) |
| **7** | **Growth** | Proliferation into secondary tumor mass |

### [Q2.2.2] The "Seed and Soil" Hypothesis (Stephen Paget)

**Concept:** Explains why certain cancers spread to specific organs (Organ Tropism).

**The Seed:** The cancer cell (বীজ)
- Not all tumor cells can metastasize
- Must be heterogeneous and hardy to survive journey
- Requires successful adaptation to new environment

**The Soil:** The target organ (মাটি)
- Must provide right nutrients and growth factors
- Must have compatible microenvironment
- Example: Breast cancer often seeds in bone "soil"

**Logic:** Metastasis only occurs when Seed and Soil are compatible.

### [Q2.2.3] Role of Immune System in Modulation of Metastasis

**Immune Surveillance Theory:**
- Cytotoxic T-cells and NK (Natural Killer) cells recognize and eliminate mutant cells
- Provides continuous security against metastasizing cells

**Immune Facilitation Theory:**
- "Dark side" where weak immune response fosters tumor growth
- Immune selection may eliminate weak cancer cells but leave aggressive clones
- These resistant clones are more conducive for growth

**Survival Reality:**
- Only <0.01% of circulating tumor cells survive immune attack + blood turbulence
- Most CTCs are eliminated before reaching secondary site

**Patterns of Tumor Spread (Disseminating Groups):**
- **Group I:** Lungs key filter (Melanoma, Head/Neck, Testicular)
- **Group II:** Liver first filter via portal system (GI tumors)
- **Group III:** Independent to both liver & lungs (Bladder)
- **Group IV:** Bone is primary site (Prostate)

💡 **Memory Aid:** Metastasis is a "Siege" — Invade, Angiogenesis (supply), Intravasate, Circulation (warzone), Arrest, Extravasate, Grow.

### [Q2.2.4] Micrometastases and Clinical Significance

**Definition:** Metastatic deposits too small to visualize on imaging (CT/MRI).

**Clinical Significance:**
- Doctors assume presence based on tumor Grade (গ্রেড—কোষের বিকৃতি)
- High-grade tumors have microscopic spread even at diagnosis
- Present in ~20-30% of "localized" cancers at presentation
- Requires systemic adjuvant therapy even with negative imaging
    

---

### 💡 Exam Tips & Summary
- Prioritize repeated year-tagged questions from this set.
- Keep a 3-line answer frame ready: definition, key mechanism/steps, exam keywords.
- Use one quick table/flow or contrast point for higher marks in long answers.
- Revise this set once within 24 hours and once in final revision week.
`,
    rawMd_bn: `
### ক্লাস্টার 2.1: টিউমার আক্রমণ এবং বিচ্ছুরণ
**বছর:** 2023, 2022, 2016, 2014, 2013 | **মার্ক:** 1+3, 4, 5

### [Q2.1.1] টিউমার আক্রমণ কী? পথ বর্ণনা করুন

**সংজ্ঞা:** টিউমার কোষগুলি বেসমেন্ট মেমব্রেন বিঘ্নিত করার এবং অন্তর্নিহিত স্ট্রোমায় প্রবেশ করার ক্ষমতা।

**তিন-ধাপের আক্রমণ তত্ত্ব:**

| ধাপ | প্রক্রিয়া | প্রক্রিয়া বর্ণনা |
|------|---------|-----------------|
| **1** | **সংযুক্তি** | ইন্টিগ্রিন, ফাইব্রোনেক্টিন, ল্যামিনিন রিসেপ্টর ব্যবহার করে বাঁধা |
| **2** | **প্রোটিওলাইসিস** | ম্যাট্রিক্স মেটালোপ্রোটিনেজ/এমএমপি দ্বারা স্থানীয় অবক্ষয় |
| **3** | **লোকোমোশন** | ইনভেডোপডিয়া এক্সটেনশন ব্যবহার করে মাইগ্রেশন |
    

---

### 💡 Exam Tips & Summary (দ্রুত রিভিশন)
- এই সেটের বারবার আসা বছরভিত্তিক প্রশ্ন আগে শেষ করো।
- ৩-লাইন ফরম্যাটে উত্তর লেখো: সংজ্ঞা, মূল মেকানিজম/স্টেপ, এক্সাম-কিওয়ার্ড।
- বড় উত্তরে ১টা টেবিল/ফ্লো/তুলনা যোগ করলে নম্বর বাড়ে।
- ২৪ ঘণ্টার মধ্যে ১ বার এবং ফাইনাল রিভিশনে ১ বার সেটটি রিভিশন দাও।
`
  },

  {
    id: "set3-molecular",
    title: "🔬 Set 3: Molecular Basis of Cancer",
    rawMd_en: `
### Cluster 3.1: Proto-oncogenes and Oncogene Activation
**Years Appeared:** 2023, 2022, 2021, 2017, 2016, 2015, 2014, 2013 | **Marks:** 1+3, 4, 5, 6, 9

### [Q3.1.1] What is Proto-oncogene? Describe Mechanisms of Oncogene Activation

**Proto-oncogene Definition:** Normal cellular genes that regulate cell growth, division, and differentiation. Present in all normal cells. [স্বাভাবিক কোষ বিভাজন নিয়ন্ত্রণকারী জিন]

**Oncogene Definition:** Mutated or overexpressed proto-oncogene with potential to cause cancer. Expression leads to uncontrolled growth. [ক্যান্সার সৃষ্টিকারী জিন]

**Five Key Mechanisms of Oncogene Activation (M-A-I-D-T Mnemonic):**

| Mechanism | Description | Example |
|-----------|-------------|---------|
| **Mutation** | Single DNA base pair change alters amino acid | ras gene mutations (G→T) |
| **Amplification** | Increased gene copy number | HER-2/neu in breast cancer |
| **Insertion** | Viral DNA regulatory sequences (LTRs) integrate near proto-oncogene | HIV LTR activating nearby gene |
| **Deletion** | Loss of chromosomal segment removes tumor suppressor | Deleting p53 or RB1 unmasking malignancy |
| **Translocation** | Gene moves to new position next to active promoter/enhancer | c-myc in Burkitt lymphoma t(8;14) |

### [Q3.1.2] Why is Chromosomal Translocation a Major Factor?

**Justification for Translocation as Major Oncogenesis Factor:**

1. **Physical Genome Rearrangement:** Moves growth gene next to highly active promoter/enhancer
2. **Overexpression:** Growth gene placed under control of immunoglobulin enhancer (in B-cell lymphomas)
3. **Fusion Proteins:** Creates new chimeric proteins with altered function (e.g., BCR-ABL in CML)
4. **Philadelphia Chromosome [t(9;22)]:** Classic example → c-abl gene creates unregulated kinase
5. **Irreversible:** Unlike some epigenetic changes, translocations are permanent chromosomal alterations

### [Q3.1.3] Why is Deletion Important for Oncogene Activation?

**Deletion's Role in Tumorigenesis:**

1. **Removes "Brakes":** Tumor suppressor genes (p53, RB1) act as growth inhibitors
2. **Two-Hit Hypothesis:** Losing both alleles of suppressor gene required for transformation
3. **Unmasking Malignancy:** Deletion of wild-type suppressor reveals mutation in remaining allele
4. **Examples:**
   - Deletion of RB1 → Retinoblastoma
   - Deletion of p53 → Li-Fraumeni syndrome (high cancer risk)
   - Deletion of APC → Familial adenomatous polyposis

---

### Cluster 3.2: Oncogene Products and Families
**Years Appeared:** 2023, 2021, 2017, 2015, 2014, 2013 | **Marks:** 4, 5

### [Q3.2.1] Functional Classification of Cellular Oncogenes

| Oncogene Group | Role | Examples | Location |
|---------------|------|----------|----------|
| **Growth Factors** | Stimulate cell proliferation | sis (PDGF) | Extracellular |
| **Growth Factor Receptors** | Transmit signals into cell | erb-B (EGF-R), HER-2/neu | Cell Membrane |
| **Signal Transducers** | Intracellular messengers (Kinases) | ras family, src, abl | Cytoplasm |
| **Transcription Factors** | Regulate gene expression | myc family, fos, jun | Nucleus |

### [Q3.2.2] The ras Gene Family and Cancer Progression

**Structure & Function:**
- Produces p21 protein with GTP-binding and GTPase activity
- Normal p21: Hydrolyzes GTP → stays in "OFF" state most of time
- Mutant p21: CANNOT hydrolyze GTP → stays in "active" state continuously
- Genetic Basis: Point mutations at codons 12, 13, 61 common in human cancers

**Involvement in Cancer Progression:**
1. **Continuous Signaling:** Mutant p21 sends "Go" signal perpetually
2. **Common Mutations:** Found in ~30% of human cancers
3. **Multistage Role:** Cooperates with other mutations (p53 loss) for full transformation
4. **Tissue Specificity:** Different ras variants (H-ras, K-ras, N-ras) in different cancers

### [Q3.2.3] c-myc is Associated with G0→G1 Transition — Justify

**The c-myc Product:**
- Nuclear protein pp62 drives transition from G0 (resting) to G1 (dividing) phase
- Activates genes required for cell proliferation and DNA synthesis

**Justification for Statement:**

1. **Abnormally High Levels:** Sustained pp62 expression prevents cells from re-entering G0
2. **Forced Proliferation:** Cells remain in cycle, cannot achieve quiescence
3. **Burkitt Lymphoma Example:** t(8;14) translocation places c-myc under Ig enhancer
4. **Result:** Continuous proliferation despite absence of growth factor signals
5. **Cooperation:** Requires additional mutations (loss of p53) for full malignant phenotype

### [Q3.2.4] The HER-2/neu Gene and Cancer Progression

**Background on HER-2/neu (c-erb B2):**
- Encodes p185 receptor tyrosine kinase
- Growth factor receptor related to EGF receptor family

**Structural Changes in Malignancy:**

| State | Conformation | Signaling | [Bangla] |
|-------|-------------|-----------|----------|
| **Normal** | "Bent" (inactive) | Requires growth factor binding | নিষ্ক্রিয় |
| **Mutant/Overexpressed** | "Straight" (a-helical) | Autonomous, factor-independent | সক্রিয় |

**Mechanisms of Cancer Progression:**
1. **Gene Amplification:** Multiple copies of HER-2/neu gene (~25% breast cancers)
2. **Protein Overexpression:** High p185 levels force "straight" conformation
3. **Autonomous Growth:** Continuous kinase activity without growth factor ligand
4. **Breast Cancer Driver:** Strong predictor of aggressive disease, treatment target for trastuzumab (Herceptin)

💡 **Memory Aid:** "Bent is Benign" (inactive), "Straight is Sick" (cancerous/active)

---

### Cluster 3.3: Chromosomal Abnormalities in Cancer
**Years Appeared:** 2020, 2017, 2016, 2015 | **Marks:** 8, 4, 3, 5

### [Q3.3.1] Describe the Philadelphia Chromosome and Mechanisms

**Philadelphia Chromosome [t(9;22)]:**
- Hallmark of Chronic Myelogenous Leukemia (CML)
- Translocation between chromosomes 9 and 22
- c-abl gene → bcr locus creation
- Novel chimeric fusion protein with unregulated kinase activity

**Mechanisms of Abnormality:**
1. **Mitotic Nondisjunction:** Sister chromatids fail to separate properly
2. **Mitotic Recombination:** Unequal crossing over between homologous regions
3. **Inversion:** Strand reversal creating novel gene fusions
4. **Double-Strand Breaks:** Caused by ionizing radiation or chemical carcinogens

### [Q3.3.2] RB1 (Retinoblastoma Gene) — Function and Significance

**Function:**
- Acts as "brake" on G1→S cell cycle transition (G1 phase checkpoint)
- Prevents unphosphorylated pRb from allowing S phase entry
- When inactivated: Loss of growth inhibition

**Clinical Significance:**
- Loss of both RB1 alleles → Retinoblastoma in children
- "Two-Hit" process: Inherited mutation + somatic loss second copy
- Also implicated in other cancers (lung, breast, prostate)

---

### Cluster 3.4: Viral Oncogenesis
**Years Appeared:** 2023, 2022, 2021, 2017, 2016, 2015, 2013 | **Marks:** 2+2, 4, 5

### [Q3.4.1] Compare DNA and RNA Tumor Viruses

| Feature | DNA Tumor Viruses | RNA Tumor Viruses |
|---------|------------------|-------------------|
| **Genome Type** | dsDNA or ssDNA | ssRNA; replicates via DNA intermediate |
| **Mechanism** | Inactivate host suppressors (p53, pRb) | Introduce viral oncogenes (v-onc) |
| **Integration** | Often prerequisite for cancer | Part of normal replication cycle |
| **Examples** | HPV (Cervix), HBV (Liver), EBV (Lymphoma) | HTLV-1 (Leukemia), Rous Sarcoma Virus |
| **E6/E7 Proteins** | Directly bind p53, pRb in HPV | Not applicable |
| **Persistence** | Lifelong latent infection | Integration creates provirus |

### [Q3.4.2] Tenets of Viral Carcinogenesis

1. **Persistent Infection:** Viruses establish chronic, lifelong infections
2. **Long Latent Period:** Years to decades between infection and cancer
3. **Cofactor Role:** Usually not "complete carcinogens" — require additional mutations
4. **Tissue Tropism:** Infect specific cell types (HPV→epithelium, EBV→B-cells)
5. **Immune Evasion:** Virus evolves to avoid immune detection
6. **Insertional Mutagenesis:** Random integration can activate or inactivate crucial genes
    

---

### 💡 Exam Tips & Summary
- Prioritize repeated year-tagged questions from this set.
- Keep a 3-line answer frame ready: definition, key mechanism/steps, exam keywords.
- Use one quick table/flow or contrast point for higher marks in long answers.
- Revise this set once within 24 hours and once in final revision week.
`,
    rawMd_bn: `
### ক্লাস্টার 3.1: প্রোটো-অনকোজিন এবং অনকোজিন সক্রিয়করণ

**সংজ্ঞা:** প্রোটো-অনকোজিন হল সাধারণ কোষীয় জিন যা কোষ বৃদ্ধি, বিভাজন এবং পার্থক্য নিয়ন্ত্রণ করে।

**অনকোজিন:** প্রোটো-অনকোজিনের পরিবর্তিত বা অতিপ্রকাশিত সংস্করণ যা ক্যান্সার সৃষ্টি করতে পারে।

**অনকোজিন সক্রিয়করণের পাঁচটি প্রক্রিয়া:**
1. **মিউটেশন** - একক ডিএনএ বেস পেয়ার পরিবর্তন
2. **এমপ্লিফিকেশন** - জিন কপি সংখ্যা বৃদ্ধি
3. **ইনসার্শন** - ভাইরাল ডিএনএ নিয়ন্ত্রক সিকোয়েন্স সংযোজন
4. **ডিলিশন** - ক্রোমোসোমাল সেগমেন্ট হারানো
5. **ট্রান্সলোকেশন** - জিনের নতুন অবস্থানে স্থানান্তর
    

---

### 💡 Exam Tips & Summary (দ্রুত রিভিশন)
- এই সেটের বারবার আসা বছরভিত্তিক প্রশ্ন আগে শেষ করো।
- ৩-লাইন ফরম্যাটে উত্তর লেখো: সংজ্ঞা, মূল মেকানিজম/স্টেপ, এক্সাম-কিওয়ার্ড।
- বড় উত্তরে ১টা টেবিল/ফ্লো/তুলনা যোগ করলে নম্বর বাড়ে।
- ২৪ ঘণ্টার মধ্যে ১ বার এবং ফাইনাল রিভিশনে ১ বার সেটটি রিভিশন দাও।
`
  },

  {
    id: "set4-carcinogenesis",
    title: "⚠️ Set 4: Carcinogenesis and Carcinogens",
    rawMd_en: `
### Cluster 4.1: Carcinogenesis Classification
**Years Appeared:** 2021, 2017, 2016, 2015 | **Marks:** 4, 5

### [Q4.1.1] What is Carcinogenesis? Classifications and Characteristics

**Definition:** The multi-step process by which normal cells transform into cancer cells. Also called Oncogenesis or Tumorigenesis. [ক্যান্সার সৃষ্টির প্রক্রিয়া]

**Not a Single Event:** Typically requires 5-8 specific mutations over years to decades.

**Three Major Stages of Carcinogenesis:**

| Stage | Definition | Key Features |
|-------|-----------|-------------|
| **Initiation** | First genetic mutation making cell susceptible | Irreversible; single event sufficient |
| **Promotion** | Initiated cells divide forming abnormal cluster | Reversible; requires multiple/chronic doses |
| **Progression** | Cells acquire aggressive traits and invasive ability | Leads to overt malignancy |

**Classification of Carcinogens Based on DNA Binding:**

**Genotoxic Carcinogens:** Directly interact with DNA
- **Direct-acting:** Bind DNA immediately without body metabolic changes (e.g., Dimethyl Sulfate)
- **Procarcinogens:** Require metabolic activation in body (e.g., Benzo[a]pyrene) → becomes highly reactive
- **Inorganic:** Metals altering DNA replication (Nickel, Chromium)

**Epigenetic Carcinogens:** Do not directly bind DNA but cause cancer through other mechanisms

### [Q4.1.2] The Role of Polycyclic Aromatic Hydrocarbons (PAHs)

**Source:** Formed during incomplete combustion of organic material
- Tobacco smoke
- Coal tar
- Automobile exhaust
- Industrial pollution

**Mechanism of Carcinogenesis:**

1. **Act as Procarcinogens:** Require metabolic activation to become dangerous
2. **Cytochrome P-450 Metabolism:** Drug-metabolizing enzymes convert PAHs
3. **Epoxide Formation:** Highly reactive epoxide intermediates form [ইপোক্সাইড]
4. **DNA Binding:** Reactive epoxides bind covalently to DNA base guanine
5. **Mutation Induction:** DNA damage causes mutations during replication
6. **Multi-Hit Process:** Typically requires 5-8 additional mutations for full transformation

**Examples of PAH-Associated Cancers:**
- Lung cancer (smokers)
- Skin cancer (coal tar exposure)
- GI cancers (charred meat consumption)

💡 **Memory Aid:** Initiation = "Lighting fire," Promotion = "Adding fuel," Progression = "Fire spreading uncontrollably"

---

### Cluster 4.2: Epigenetic Carcinogenesis
**Years Appeared:** 2021, 2017 | **Marks:** 4

### [Q4.2.1] What is Epigenetic Carcinogenesis? Mechanism of Tumor Formation

**Epigenetic Definition:** Cancer-causing changes NOT involving DNA sequence alterations. Change in gene expression through chemical modifications.

**Functional Characteristics:**

| Characteristic | Description | [Bangla] |
|---------------|-------------|----------|
| **Non-DNA Binding** | No direct DNA lesions or strand breaks | ডিএনএ-র সাথে সরাসরি যুক্ত হয় না |
| **Promoters (Tumor Promoters)** | Enhance growth of already-initiated cells | প্রচার/ত্বরান্বিত করা |
| **Hormonal Action** | Disrupt endocrine balance | হরমোন সংক্রান্ত ব্যাঘাত |
| **Tissue Injury** | Chronic inflammation triggering constant repair errors | দীর্ঘস্থায়ী টিস্যুর ক্ষতি |

**Mechanisms of Epigenetic Tumor Formation:**

1. **DNA Methylation:** Abnormal methylation of CpG islands silences protective genes (p16, MLH1, BRCA1)
2. **Histone Modifications:** Changes in histone acetylation/methylation alter chromatin structure
3. **Immunosuppression:** Reduced Immune Surveillance (রোগ প্রতিরোধ নজরদারি) allows undetected tumor growth
4. **Oxidative Stress:** Reactive Oxygen Species (ROS) damage membranes and cellular signaling
5. **Chronic Inflammation:** Persistent inflammatory cytokines promote proliferation

**Why Not "Complete Carcinogens":**
- Usually require previously "Initiated" cell from genotoxic agent
- Cannot independently transform normal cells in most cases
- Exception: Some hormonal carcinogens in susceptible tissues

**Examples of Epigenetic Carcinogens:**
- **Hormones:** Estrogen (breast/endometrial cancer)
- **Xenobiotics:** Foreign toxic chemicals in cooked fat/meat from high-heat cooking [বিজাতীয় বিষাক্ত পদার্থ]
- **Non-genotoxic Pesticides**
- **Metal Compounds:** Cadmium, nickel (not binding DNA directly)

---

### Cluster 4.3: Tumor Suppressor Genes and Viral Oncogenesis
**Years Appeared:** 2016, 2015, 2014, 2013 | **Marks:** 4, 5

### [Q4.3.1] What are Tumor Suppressor Genes? Are They Anti-oncogenes? Justify

**Definition:** Genes functioning as negative growth regulators that inhibit cell division. Also called Anti-oncogenes. [টিউমার নিরোধক জিন]

**Function as "Brakes":** [গতি নিরোধক]
- Control cell cycle checkpoints
- Maintain DNA integrity [ডিএনএ-র অখণ্ডতা]
- Trigger apoptosis when DNA damage irreparable
- Prevent uncontrolled proliferation

**Why Called "Anti-oncogenes":**

**Justification:**
1. **Normal Presence Prevents Transformation:** Functional suppressors block the transforming effects of oncogenes
2. **Loss = Cancer:** Their absence or inactivation removes growth constraints
3. **Two-Hit Hypothesis:** Loss of both alleles required for tumorigenesis (Knudson hypothesis)
4. **Direct Opposition:** Suppress exactly what oncogenes promote (uncontrolled growth)

**Key Tumor Suppressors:**

| Gene | Function | Associated Cancer |
|------|----------|------------------|
| **p53 ("Guardian of Genome")** | Master checkpoint regulator; triggers apoptosis on DNA damage | Li-Fraumeni syndrome |
| **RB1 (Retinoblastoma)** | Controls G1→S transition; prevents S-phase entry | Retinoblastoma, others |
| **APC** | Prevents abnormal Wnt pathway signaling | Familial adenomatous polyposis |
| **BRCA1/2** | DNA damage repair, recombination | Breast, ovarian cancers |
| **p16** | CDK inhibitor; blocks G1 progression | Melanoma, others |
| **MLH1/MSH2** | Mismatch DNA repair | Lynch syndrome |

### [Q4.3.2] Classification of Carcinogenic (Oncogenic) Viruses

**Viruses Cause ~20% of Cancers (Global Estimate)** — 20% in women, 8% in men.

**Classification by Virus Type:**

**DNA Viruses (Tumor Viruses):**

| Virus | Associated Cancer | Mechanism |
|-------|------------------|-----------|
| **HPV (16, 18)** | Cervical, vulvar, anal, oropharyngeal cancer | E6/E7 inactivate p53, pRb |
| **HBV** | Hepatocellular carcinoma (HCC) | Integration + chronic inflammation |
| **HCV** | Hepatocellular carcinoma | RNA virus (exception); chronic inflammation |
| **EBV** | Burkitt lymphoma, nasopharyngeal carcinoma | B-cell immortalization |
| **KSHV/HHV-8** | Kaposi sarcoma (especially AIDS) | Growth factor analogs |

**RNA Viruses (Retroviruses):**

| Virus | Associated Cancer | Mechanism |
|-------|------------------|-----------|
| **HTLV-1** | Adult T-cell leukemia | Tax protein inactivates p53, pRb |
| **HIV** | Indirectly via immunosuppression | Allows opportunistic oncogenic viruses |

**Why Viruses Cause Cancer:**
1. **Persistent Infection:** Establish lifelong infections [দীর্ঘস্থায়ী সংক্রমণ]
2. **Direct Carcinogenic Proteins:** HPV E6/E7 directly subvert tumor suppressors
3. **Chronic Inflammation:** Hepatitis viruses cause endless tissue damage
4. **Insertional Mutagenesis:** Integration next to growth genes
5. **Immune Modulation:** Altered immune response favors tumor growth

💡 **Key Point:** Most tumor viruses act as cofactors, not complete carcinogens. Additional mutations needed for transformation.
    

---

### 💡 Exam Tips & Summary
- Prioritize repeated year-tagged questions from this set.
- Keep a 3-line answer frame ready: definition, key mechanism/steps, exam keywords.
- Use one quick table/flow or contrast point for higher marks in long answers.
- Revise this set once within 24 hours and once in final revision week.
`,
    rawMd_bn: `
### ক্লাস্টার 4.1: কার্সিনোজেনেসিস শ্রেণীবিভাগ

**সংজ্ঞা:** সাধারণ কোষগুলি ক্যান্সার কোষে রূপান্তরিত হওয়ার বহুপদক্ষেপী প্রক্রিয়া।

**কার্সিনোজেনেসিসের তিনটি প্রধান পর্যায়:**

| পর্যায় | সংজ্ঞা | মূল বৈশিষ্ট্য |
|---------|--------|---------------|
| **ইনিশিয়েশন** | প্রথম আনুবংশিক পরিবর্তন | অপ্রতিরোধ্য; একক ঘটনা যথেষ্ট |
| **প্রচার** | সূচিত কোষ বিভাজন অস্বাভাবিক ক্লাস্টার গঠন | পুনরাবৃত্তিযোগ্য; একাধিক/দীর্ঘমেয়াদী ডোজ প্রয়োজন |
| **অগ্রগতি** | কোষ আক্রমণাত্মক বৈশিষ্ট্য অর্জন করে | স্পষ্ট ম্যালিগন্যান্সিতে পরিণত হয় |
    

---

### 💡 Exam Tips & Summary (দ্রুত রিভিশন)
- এই সেটের বারবার আসা বছরভিত্তিক প্রশ্ন আগে শেষ করো।
- ৩-লাইন ফরম্যাটে উত্তর লেখো: সংজ্ঞা, মূল মেকানিজম/স্টেপ, এক্সাম-কিওয়ার্ড।
- বড় উত্তরে ১টা টেবিল/ফ্লো/তুলনা যোগ করলে নম্বর বাড়ে।
- ২৪ ঘণ্টার মধ্যে ১ বার এবং ফাইনাল রিভিশনে ১ বার সেটটি রিভিশন দাও।
`
  },

  {
    id: "set5-virology",
    title: "🦠 Set 5: Virology Introduction — Structure & Classification",
    rawMd_en: `
### Cluster 5.1: Virus Classification and Structure
**Years Appeared:** 2022, 2020, 2017, 2016, 2014, 2013, 2015 | **Marks:** 4, 7, 10, 3

### [Q5.1.1] Define Virion, Viroid, and Prion — Compare and Contrast

**Virion:** The complete, intact infectious unit of a virus as it exists outside the host cell. [সম্পূর্ণ সংক্রামক ভাইরাস কণা]

**Viroid:** Infectious circular single-stranded RNA that replicates in plant hosts without a protein coat. [প্রোটিনহীন ক্ষুদ্র আরএনএ]

**Prion:** Proteinaceous infectious particle; misfolded PrPSc protein causing neurodegenerative diseases. [সংক্রামক প্রোটিন কণা]

**Comparison Table:**

| Feature | Virus | Viroid | Prion |
|---------|-------|--------|-------|
| **Composition** | Nucleic acid + Protein coat | RNA only | Protein only |
| **Genome** | DNA or RNA, can be diploid | circular ssRNA (250-400 nt) | No nucleic acid |
| **Host Range** | Humans, animals, plants, bacteria | Primarily plants | Mammals (CNS) |
| **Size** | 20-300 nm | Very small, RNA only | Sub-microscopic |
| **Replication** | Requires viral enzymes and host machinery | Cell machinery (no viral proteins) | No replication; template-directed conversion |
| **Disease Examples** | HIV/AIDS, Influenza, COVID-19 | Potato spindle tuber viroid (PSTV) | Kuru, CJD, BSE |

### [Q5.1.2] ICTV Classification Rules with Examples

**ICTV (International Committee on Taxonomy of Viruses):** Established 1966 for standardized viral taxonomy.

**Hierarchical Taxonomy Using Standardized Suffixes:**

| Rank | Suffix | Example | Explanation |
|------|--------|---------|-------------|
| **Order** | -virales | Caudovirales | "Tailed" DNA viruses (bacteriophages) |
| **Family** | -viridae | Herpesviridae | DNA viruses infecting eukaryotes |
| **Subfamily** | -virinae | Alphaherpesvirinae | Faster replication herpesviruses |
| **Genus** | -virus | Simplexvirus | HSV-1, HSV-2 (cold sore viruses) |
| **Species** | — | Human herpesvirus 1 | Specific virus designation |

**Basis of Viral Classification:**

1. **Nucleic Acid Type:**
   - DNA viruses: dsDNA, ssDNA
   - RNA viruses: ssRNA (+), ssRNA (-), dsRNA

2. **Replication Strategy (Baltimore Classification, Classes I-VII):**
   - Class IV: (+)ssRNA — Ready-to-read, uses directly as mRNA
   - Class V: (-)ssRNA — Must make (+) copy first; needs RdRp

3. **Morphology:**
   - Enveloped: Lipid bilayer membrane
   - Naked/Non-enveloped: Protein capsid only

4. **Genome Structure:**
   - Segmented: Multiple genome pieces (Influenza = 8 segments)
   - Non-segmented: Single continuous genome

### [Q5.1.3] Why Are Viruses "Obligatory Parasites"?

**Definition:** Obligatory parasitism means complete dependence on host. [অপরিহার্য পরজীবী]

**Why Viruses Cannot Survive Independently:**

1. **No Metabolism:** Lack ATP production, cannot generate energy
2. **No Ribosomes:** Cannot synthesize proteins without host ribosomes
3. **No Nucleotides:** Depend on host dNTPs and rNTPs for genome replication
4. **No Enzymes:** Must borrow host DNA polymerase, RNA polymerase, etc.
5. **Intracellular Obligates:** Cannot survive or reproduce outside host cells

**Biological Reality:**
- Virions are inert particles — no metabolic activity outside cell
- Upon cell entry, hijack all host machinery for replication
- Cannot modify host cell without entry
- Complete dependence on host cell viability

---

### Cluster 5.2: Viral Replication and Transcript Processing
**Years Appeared:** 2023, 2022, 2020, 2014, 2013, 2015 | **Marks:** 4, 5, 6, 9

### [Q5.2.1] Capping and Polyadenylation of Viral Transcripts

**5' Capping:** Addition of 7-methylguanosine cap at 5' end.

**The 5'-5' Triphosphate Linkage (Unique Feature):**
- GTP joined via 5'-5' triphosphate linkage (NOT standard 5'-3' linkage)
- Occurs co-transcriptionally (shortly after synthesis begins)
- Protects mRNA from degradation by cellular exonucleases [নিউক্লিক অ্যাসিড ধ্বংসকারী এনজাইম]
- Exonucleases specifically target 5'-3' bonds → cap prevents attack

**Why 5'-5' Linkage Rather Than 5'-3':**
- Cellular exonucleases evolved to attack exposed 5'-3' bonds
- Cap creates steric blockade preventing enzyme access
- Makes mRNA stable for ~8 hours vs. minutes uncapped

**3' Polyadenylation:** Addition of poly(A) tail (~200 adenosine residues).

**Functions of Poly(A) Tail:**
1. **Stability:** Protects 3' end from 3'→5' exonuclease degradation
2. **Translation Enhancement:** Helps recruitment of ribosome to mRNA
3. **Nuclear Export:** Required for mRNA exit from nucleus to cytoplasm
4. **Lifespan Extension:** Increases mRNA half-life from minutes to hours

**Timing:** Occurs post-transcriptionally after cleavage signal (usually AAUAAA).

### [Q5.2.2] Viral Genome Replication vs. Transcript Synthesis

**Three Categories of Viral Replication:**

1. **Positive-Sense RNA [(+)ssRNA]:**
   - mRNA immediately functional — can be translated
   - Replication requires RNA-dependent RNA polymerase (RdRp) to make (-) strand
   - Example: Picornaviruses, Coronaviruses

2. **Negative-Sense RNA [(-)ssRNA]:**
   - Must first be transcribed to (+) mRNA before protein synthesis
   - Requires RdRp brought in virion (host cells lack this enzyme)
   - Example: Influenza, Rabies virus

3. **DNA Viruses:**
   - Use host RNA Pol II or viral RNA polymerase
   - DNA → mRNA → Protein synthesis (standard Central Dogma)

### [Q5.2.3] The 7 Steps of Viral Replication (AETTGAE Mnemonic)

| Step | Stage | Description |
|------|-------|-------------|
| **A** | **Attachment** | Viral receptor ligands bind host cell surface receptors |
| **E** | **Entry** | Membrane fusion or endocytosis; virion enters cell |
| **T** | **Transcription** | Viral genome → mRNA (if needed) or direct mRNA synthesis |
| **T** | **Translation** | Viral mRNA → Viral proteins (early proteins) |
| **G** | **Genome Replication** | Viral genome copies made using host nucleotides |
| **A** | **Assembly** | Newly synthesized proteins + genomes packaged into virions |
| **E** | **Exit/Release** | Virions released from cell via budding or lysis |

### [Q5.2.4] Early vs. Late Proteins synthesized during viral replication

**Early Proteins (Synthesized First):**
1. **DNA Replication Enzymes:**
   - DNA polymerase (viral variant)
   - Primase, helicase
   - Nucleotide metabolism enzymes

2. **Immune Evasion Proteins:**
   - Interferon antagonists
   - MHC downregulators
   - Apoptosis inhibitors

3. **RNA Processing Enzymes:** (for RNA viruses)
   - RNA-dependent RNA polymerase (RdRp)
   - Capping enzymes
   - Polyadenylation factors

**Late Proteins (Synthesized After Genome Replication):**
1. **Structural Proteins:**
   - Capsid proteins (major, minor)
   - Membrane proteins (envelope glycoproteins)
   - Matrix proteins

2. **DNA Packaging:**
   - Terminase (cuts and packages DNA)
   - Portal proteins
   - Scaffolding proteins

### [Q5.2.5] Burst Size and Viral Release

**Burst Size:** Average number of new virions released from single infected cell. [একটি কোষ থেকে নির্গত ভাইরাসের সংখ্যা]

**Examples:**
- **T4 bacteriophage:** ~200 virions per cell
- **Picornaviruses:** ~100,000 virions per cell (very high output)
- **Herpesviruses:** ~500-2000 virions per cell

**Release Mechanisms:**

1. **Lytic Release (Cell Lysis):**
   - Cell wall/membrane ruptures
   - All virions released simultaneously
   - Cell death occurs immediately
   - Example: Most bacteriophages, picornaviruses

2. **Budding (Non-lytic):**
   - Virion wrapped in host cell membrane as it exits
   - Cell may survive additional budding
   - Selective release possible
   - Example: Influenza, HIV, herpesviruses

3. **Plant Cell Release:**
   - Plant cells have rigid cellulose wall [কোষ প্রাচীর]
   - Direct exit impossible
   - Require insect vectors or plasmodesmata
   - Example: Tobacco mosaic virus

💡 **Key Insight:** High burst size = efficient dispersal but rapid host cell death; low burst size = chronic infection but cell survival.
    

---

### 💡 Exam Tips & Summary
- Prioritize repeated year-tagged questions from this set.
- Keep a 3-line answer frame ready: definition, key mechanism/steps, exam keywords.
- Use one quick table/flow or contrast point for higher marks in long answers.
- Revise this set once within 24 hours and once in final revision week.
`,
    rawMd_bn: `
### ক্লাস্টার 5.1: ভাইরাস শ্রেণীবিভাগ এবং কাঠামো

**ভাইরিয়ন সংজ্ঞা:** হোস্ট কোষের বাইরে বিদ্যমান ভাইরাসের সম্পূর্ণ, অক্ষত সংক্রামক ইউনিট।

**ভাইরয়েড সংজ্ঞা:** সংক্রামক বৃত্তাকার একক-স্ট্র্যান্ডেড আরএনএ যা প্রোটিন কোট ছাড়াই উদ্ভিদ হোস্টে প্রতিলিপি করে।

**প্রিয়ন সংজ্ঞা:** প্রোটিনযুক্ত সংক্রামক কণা; ভুলভাবে ভাঁজ করা PrPSc প্রোটিন নিউরোডিজেনারেটিভ রোগ সৃষ্টি করে।
    

---

### 💡 Exam Tips & Summary (দ্রুত রিভিশন)
- এই সেটের বারবার আসা বছরভিত্তিক প্রশ্ন আগে শেষ করো।
- ৩-লাইন ফরম্যাটে উত্তর লেখো: সংজ্ঞা, মূল মেকানিজম/স্টেপ, এক্সাম-কিওয়ার্ড।
- বড় উত্তরে ১টা টেবিল/ফ্লো/তুলনা যোগ করলে নম্বর বাড়ে।
- ২৪ ঘণ্টার মধ্যে ১ বার এবং ফাইনাল রিভিশনে ১ বার সেটটি রিভিশন দাও।
`
  },

  {
    id: "set6-influence-covid",
    title: "🦠 Set 6: Influenza & SARS-CoV-2",
    rawMd_en: `
### Cluster 6.1: Influenza Virus and Genetic Reassortment
**Years Appeared:** 2023, 2016, 2015, 2017 | **Marks:** 4, 6

### [Q6.1.1] Viral Reassortment and Influenza Outbreak Causation

**Why Viral Reassortment is Predominant Cause of Influenza Outbreaks:**

**Segmented Genome Structure:**
- Influenza A & B have 8 RNA segments
- Each segment encodes different genes
- Segments can segregate and reassort independently (like chromosomes during meiosis)

**Reassortment Mechanism:**
1. Two different influenza viruses co-infect single cell
2. During replication, RNA segments mix and match
3. Progeny viruses have novel combinations of segments
4. New viral strain created "instantly" without individual mutations

**Antigenic Shift (Major Change):**
- Reassortment can create dramatically new surface proteins (HA or NA)
- Immune system has no prior recognition of "new" virus
- Can cause pandemics (1918 Spanish flu, 1957 Asian flu, 1968 Hong Kong flu, 2009 H1N1)

**Antigenic Drift (Minor Change):**
- Individual point mutations accumulate gradually
- Creates seasonal epidemics
- Much slower evolutionary process than reassortment

**Clinical Significance:**
- Reassortment can jump species barriers (avian → human)
- Sudden emergence of novel pandemic strains
- Previous vaccines may not protect against reassortant viruses

### [Q6.1.2] Structure and Genomic Make-up of SARS-CoV-2

**Genome Organization:**

| Segment | Description | Function |
|---------|-------------|----------|
| **5' UTR** | Untranslated region | Ribosome binding, replication start |
| **ORF1ab** | Open reading frame | Encodes viral replication proteins (pp1ab polyprotein) |
| **Spike (S)** | ~1273 amino acids | Cell attachment & fusion (receptor binding) |
| **Envelope (E)** | ~75 amino acids | Viroporin; ion channel; virion assembly |
| **Membrane (M)** | ~222 amino acids | Structural; virion assembly coordinator |
| **Nucleocapsid (N)** | ~419 amino acids | RNA packaging; virion assembly |
| **ORF3-10** | Accessory genes | Immune evasion, virulence factors |
| **Poly(A) tail** | 3' end | mRNA stability |

**Genome Size:** ~29.9 kb single-stranded (+)RNA — largest known RNA virus.

**Spike Protein Structure (Key to Infectivity):**
- **S1 Subunit:** Receptor-binding domain (RBD) that binds ACE2 receptor
- **S2 Subunit:** Fusion peptide causing membrane fusion
- **Furin Cleavage Site:** Between S1/S2 allows host protease separation

**Key Molecular Features:**
1. **Proofreading Exonuclease (3'→5'):** Unusual for RNA virus; ensures genetic stability
2. **RdRp (RNA Polymerase):** Core replication enzyme; target for antivirals (remdesivir)
3. **Protease (3CLpro):** Cleaves polyproteins; target for protease inhibitors

### [Q6.1.3] The HA and NA Proteins — Functional Importance

**Hemagglutinin (HA) - Attachment Protein:**
- **Function:** Binds sialic acid receptors on respiratory epithelium
- **Responsible For:** Virus attachment and species tropism
- **Structural Details:** "Mushroom" shape with globular head on stem
- **Antigenic Target:** Most important for protective antibodies

**Neuraminidase (NA) - Release Protein:**
- **Function:** Cleaves sialic acid to prevent viral aggregation
- **Allows Release:** Free virions from infected cell surface
- **Stops Clumping:** Prevents newly made viruses from clumping at release site
- **Drug Target:** Oseltamivir (Tamiflu) and zanamivir inhibit NA

**Antigenic Drift vs. Shift:**

| Feature | Drift | Shift |
|---------|-------|-------|
| **Mechanism** | Point mutations in HA/NA genes | Reassortment of RNA segments |
| **Speed** | Gradual (years) | Sudden (instant) |
| **Magnitude** | Minor amino acid changes | Major protein substitutions |
| **Frequency** | Annual seasonal changes | Occasional pandemic events |
| **Epidemiology** | Seasonal flu | Pandemic strains |

---

### Cluster 6.2: SARS-CoV-2 Cellular Entry and Pathogenesis
**Years Appeared:** 2020 | **Marks:** 15

### [Q6.2.1] How Does SARS-CoV-2 Hijack Healthy Cells?

**Four-Step Cellular Entry Mechanism:**

| Step | Process | Molecular Details |
|------|---------|------------------|
| **1. Attachment** | S1 RBD binds ACE2 | Initial receptor binding; high affinity |
| **2. Priming** | Furin/TMPRSS2 cleavage | Host serine proteases cleave S1↔S2 junction |
| **3. Membrane Fusion** | S2 subunit mediates fusion | Fusion peptide penetrates host membrane |
| **4. Internalization** | RNP complex enters | Viral RNA + nucleocapsid + enzymes enter cytoplasm |

**Critical Host Factors:**
- **ACE2 Receptor:** Present on respiratory, GI, cardiac, kidney epithelium → determines susceptibility
- **TMPRSS2:** Serine protease in respiratory cells → facilitates cell entry
- **Cathepsin L:** Alternative protease route in some cell types

**Cellular Hijacking Strategy:**

1. **Ribosome Hijacking:** ORF1ab translation produces viral replication proteins
2. **ER/Golgi Repurposing:** Membrane systems used for viral protein synthesis
3. **RNA Polymerase Inhibition:** Viral RdRp takes over from host (but incomplete shutdown for viral mRNA synthesis)
4. **Immune Suppression:** ORF3, ORF6, ORF8, ORF10 actively antagonize interferon pathways

### [Q6.2.2] SARS-CoV-2 Pathogenesis, Treatment, and Control

**Pathogenesis of COVID-19:**

**Early Phase (Days 1-5):**
- Viral replication in respiratory tract
- Local inflammation; interferon response
- Most persons develop antibodies → viral clearance

**Severe Phase (Days 5-10):**
- Hyperinflammatory response if immunity inadequate
- Cytokine storm: IL-6, TNF-α, IL-2, IL-8 overproduction
- ARDS (Acute Respiratory Distress Syndrome) develops
- Multi-organ failure possible

**Risk Factors for Severe COVID:**
- Advanced age (>65 years)
- Obesity
- Diabetes
- Cardiovascular disease
- Chronic lung disease
- Immunosuppression

**Treatment Approaches:**

**Antivirals:**
- **Remdesivir (Veklury):** Nucleotide analog; inhibits RdRp (Polymerase Inhibitor)
- **Paxlovid (Nirmatrelvir/Ritonavir):** Protease inhibitors; block polyprotein cleavage
- **Molnupiravir:** Mutagenic nucleoside; causes viral error catastrophe

**Immunomodulatory:**
- **Dexamethasone:** Reduces hyperinflammation, improves survival in severe cases
- **Monoclonal Antibodies:** Sotrovimab, casirivimab-imdevimab (neutralize Spike protein)
- **IL-6 Inhibitors:** Tocilizumab reduces cytokine storm

**Supportive Care:**
- Oxygen therapy/ventilation
- ICU monitoring
- Anticoagulation (prevent thrombosis)

**Control Measures:**

**Prevention (Public Health):**
1. **Vaccination:** mRNA vaccines (Pfizer, Moderna) most effective
2. **Masking:** N95/FFP2 masks in high-transmission settings
3. **Isolation:** Close contacts quarantine; infected isolate
4. **Testing:** Rapid antigen or PCR to identify cases
5. **Ventilation:** HEPA filtration improves indoor air safety

**Population Management:**
- Surveillance for new variants (Omicron, XEC, etc.)
- Booster campaigns for high-risk groups
- International travel screening in pandemic phases

💡 **Key Concept:** SARS-CoV-2 severity stems from BOTH viral replication + host overreaction (cytokine storm). Treatment targets both: antivirals + immunomodulation.
    

---

### 💡 Exam Tips & Summary
- Prioritize repeated year-tagged questions from this set.
- Keep a 3-line answer frame ready: definition, key mechanism/steps, exam keywords.
- Use one quick table/flow or contrast point for higher marks in long answers.
- Revise this set once within 24 hours and once in final revision week.
`,
    rawMd_bn: `
### ক্লাস্টার 6.1: ইনফ্লুয়েঞ্জা ভাইরাস এবং জেনেটিক্যাল পুনর্গঠন

**বিভাজিত জিনোম কাঠামো:**
ইনফ্লুয়েঞ্জা এ এবং বি তে 8টি আরএনএ সেগমেন্ট রয়েছে। প্রতিটি সেগমেন্ট বিভিন্ন জিন এনকোড করে। সেগমেন্টগুলি স্বাধীনভাবে আলাদা এবং পুনরায় বিন্যাস করতে পারে।

**পুনর্গঠনের প্রক্রিয়া:**
1. দুটি ভিন্ন ইনফ্লুয়েঞ্জা ভাইরাস একক কোষকে সহ-সংক্রামিত করে
2. প্রতিলিপির সময়, আরএনএ সেগমেন্টগুলি মিশ্রিত এবং পুনরায় মিলিত হয়
3. প্রোজেনি ভাইরাসগুলিতে সেগমেন্টের উপন্যাস সংমিশ্রণ রয়েছে
4. নতুন ভাইরাল স্ট্রেন তাত্ক্ষণিকভাবে তৈরি হয় (ব্যক্তিগত মিউটেশন ছাড়াই)
    

---

### 💡 Exam Tips & Summary (দ্রুত রিভিশন)
- এই সেটের বারবার আসা বছরভিত্তিক প্রশ্ন আগে শেষ করো।
- ৩-লাইন ফরম্যাটে উত্তর লেখো: সংজ্ঞা, মূল মেকানিজম/স্টেপ, এক্সাম-কিওয়ার্ড।
- বড় উত্তরে ১টা টেবিল/ফ্লো/তুলনা যোগ করলে নম্বর বাড়ে।
- ২৪ ঘণ্টার মধ্যে ১ বার এবং ফাইনাল রিভিশনে ১ বার সেটটি রিভিশন দাও।
`
  },

  {
    id: "set7-hiv",
    title: "💉 Set 7: HIV Structure, Pathogenesis & Detection",
    rawMd_en: `
### Cluster 7.1: HIV Structure and Genome
**Years Appeared:** 2023, 2022, 2017, 2016, 2015 | **Marks:** 4, 6, 7, 10

### [Q7.1.1] Which Discovery Brought Revolutionary Change to Central Dogma? HIV Structure

**The Discovery:** Reverse Transcriptase [উল্টানো ট্রান্সক্রিপশন]
- Direction of information flow: RNA → DNA (opposite to "normal" DNA → RNA)
- Discovered in retroviruses (HIV, HTLV-1)
- Changed Central Dogma from unidirectional to bidirectional information flow

**Central Dogma Revision:**
- **Original:** DNA → RNA → Protein
- **Revised:** DNA ⇄ RNA → Protein (reverse transcriptase allows backward flow)

**Three Major Gene Products of HIV:**

| Gene | Encoded Proteins | Functions |
|------|-----------------|-----------|
| **Gag** | **Ga-ag (Group-specific antigen)** proteins:<br>• MA (Matrix p17)<br>• CA (Capsid p24)<br>• NC (Nucleocapsid p7) | Structural proteins;<br>Form mature virion core |
| **Pol** | **Pol-ymerase** enzymes:<br>• RT (Reverse Transcriptase p66/p51)<br>• IN (Integrase p31)<br>• PR (Protease p11) | **RT:** RNA → DNA synthesis<br>**IN:** Integration into host chromosome<br>**PR:** Polyprotein cleavage |
| **Env** | **Env-elope** glycoproteins:<br>• gp120 (Surface protein)<br>• gp41 (Transmembrane protein) | **gp120:** Receptor (CD4) binding<br>**gp41:** Membrane fusion |

### [Q7.1.2] Describe the HIV Virion Structure

**HIV Virion Organization (Layered Structure):**

**Outer to Inner:**
- **Lipid Bilayer** (Host Membrane)
- **Embedded Glycoproteins:** gp120/gp41 — Attachment & Entry
- **Matrix Proteins** (p17)
- **Conical Capsid** (p24)
- **Nucleocapsid** (p7) + RNA
- **Enzymes inside:** Reverse Transcriptase, Integrase, Protease

**Size:** ~100-120 nm diameter (approximately 1000x smaller than human cell)

**Key Structural Features:**
1. **Lipid Envelope:** Derived from host cell membrane during budding
2. **Spike Protein Complex:** gp120/gp41 heterodimer; only ~7-14 trimeric spikes per virion
3. **Conical Core:** p24 capsid in cone shape (unique to lentiviruses)
4. **Enzyme Complement:** Carries RT, IN, PR enzymes necessary for replication

### [Q7.1.3] Cellular Receptors for HIV — CD4 and Co-receptors

**Primary Receptor: CD4**
- **Present On:** T-helper cells, macrophages, dendritic cells
- **gp120 Binding:** Initiates attachment
- **Species Barrier:** Explains why HIV primarily infects humans

**Co-receptors:** Necessary for fusion after CD4 binding
- **CCR5 (Chemokine Receptor 5):** M-tropic strains (macrophage-tropic); used early infection
- **CXCR4 (X4-chemokine Receptor):** T-tropic strains (T-cell tropic); used late infection

**Disease Progression Model:**
1. **Early (CCR5-tropic):** M-tropic → infects macrophages/dendritic cells
2. **Late (CXCR4-tropic):** Switch to X4 → infects CD4+ T-cells directly
3. **Co-receptor Evolution:** Viral diversity allows adaptation

**Genetic Variation (CCR5-Δ32):**
- Some populations carry CCR5 deletion mutation
- ~10% of Northern Europeans have Δ32/Δ32 (complete resistance)
- Explains historical plague selection pressures (Black Death survivors)

---

### Cluster 7.2: HIV Pathogenesis and CD4 Count
**Years Appeared:** 2023, 2022, 2017, 2016, 2015 | **Marks:** 4, 6, 7, 10

### [Q7.2.1] "Drops in CD4 Count Mean Fall in Immunity" — Justify

**The Central Immune System:**
CD4+ T cells (T-helper cells) are the command-and-control center of immunity:

**CD4 Roles:**
1. **Orchestrates Antibody Production:** Provides signals to B cells via IL-2, IL-4, IL-5
2. **Activates Killer T Cells:** CTL (Cytotoxic T-lymphocytes) destruction of infected cells
3. **Instructs Macrophages:** Tells macrophages which pathogens to engulf/kill
4. **Maintains Memory Immunity:** Remembers past infections for rapid response

**Cascade of Immunological Failure with CD4 Loss:**

| CD4 Count | Immune Status | Clinical Manifestations |
|-----------|---------------|-----------------------|
| **>500** | Functional immunity preserved | Minor/no OI; normal life expectancy w/ ART |
| **200-500** | Moderate immunosuppression | PCP prophylaxis considered; some OI risk |
| **<200** | Severe immunosuppression | AIDS diagnosis; high OI risk |
| **<50** | Profound immunosuppression | CMV, Mycobacterium avium, cryptococcal meningitis |

**Opportunistic Infections by CD4 Count:**

- **<500 CD4:** Tuberculosis, Candida esophagitis, Cryptococcal meningitis
- **<200 CD4:** Pneumocystis jirovecii pneumonia (PCP), Toxoplasmosis
- **<100 CD4:** CMV retinitis, Mycobacterium avium complex (MAC)
- **<50 CD4:** Cytomegalovirus disease, Cryptococcal disease

**Justification:**
CD4+ loss = Loss of immune "generals" → Immune "soldiers" (B cells, CTLs, macrophages) work without coordination → Failure of all immune functions → Opportunistic infections flourish.

### [Q7.2.2] HIV Progression: Acute → Chronic → AIDS

**Phase 1: Acute Infection (Weeks 1-4):**
- High viral replication; CD4 count drops rapidly
- Flu-like symptoms (fever, rash, lymphadenopathy)
- High viral load (>100,000 copies/mL)
- May go unnoticed ("window period" for testing)

**Phase 2: Chronic/Latent Phase (Years 1-10 untreated):**
- CD4 gradually declines (~50-100 cells/year untreated)
- Minimal symptoms ("asymptomatic" phase)
- Viral replication continues in lymph nodes/gut
- CD4 count slowly approaches <200

**Phase 3: AIDS (Acquired Immune Deficiency Syndrome):**
- CD4 <200 cells/mL by definition
- Opportunistic infections develop
- AIDS-defining cancers (Kaposi sarcoma, NHL, cervical cancer)
- Death without treatment within 2-3 years
- "Full-blown AIDS"

**With Antiretroviral Therapy (ART):**
- CD4 recovery typically occurs (200 cells/mL gain/month initially)
- Viral suppression to <50 copies/mL (undetectable)
- Lifespan approaching normal life expectancy
- "Undetectable = Untransmittable" (U=U) — no sexual transmission risk

---

### Cluster 7.3: HIV Detection Methods
**Years Appeared:** 2023, 2022, 2017, 2016, 2015 | **Marks:** 4, 6, 7, 10

### [Q7.3.1] ELISA Sandwich Method for HIV Detection

**ELISA = Enzyme-Linked Immunosorbent Assay**

**"Sandwich" Configuration:**

1. **Capture Antibody** (monoclonal anti-HIV p24 or anti-gp120)
   - Coated on microtiter plate well bottom
   - Binds HIV antigen if present in sample

2. **Patient Sample** (serum/plasma)
   - Added to well
   - HIV antigens (p24, gp120) bind to capture antibody

3. **Detection Antibody** (enzyme-conjugated anti-HIV)
   - Enzyme (horseradish peroxidase/HRP) linked to antibody
   - Binds to different epitope of same HIV antigen
   - Completes "sandwich": Capture-Ag-Detection

4. **Substrate Addition** (colorimetric, chemiluminescent, or fluorescent)
   - Enzyme converts substrate to colored product
   - Intensity proportional to antigen amount

**Advantages:**
- **Sensitivity:** >99% (detects even <50 copies/mL with modern assays)
- **Specificity:** >99%
- **Cost-Effective:** Inexpensive screening test
- **High Throughput:** Can test many samples simultaneously

**Disadvantages:**
- **Window Period:** May be negative for 18-45 days after infection (before antibodies form in standard ELISA)
- **Requires Confirmation:** Western blot or molecular test needed to confirm

### [Q7.3.2] Western Blot for HIV Confirmation and Stage Interpretation

**Western Blot Principle:**

1. **Protein Separation:** HIV proteins separated by gel electrophoresis by molecular weight
2. **Protein Transfer:** Proteins blotted onto nitrocellulose membrane
3. **Antibody Detection:** Patient antibodies detect specific viral proteins
4. **Visualization:** Chemiluminescent or colorimetric detection

**Major HIV Proteins Detected:**

| Band | Protein | Size | Indicates |
|------|---------|------|-----------|
| **gp160** | Envelope precursor | 160 kDa | Early infection or abnormal processing |
| **gp120/gp41** | Envelope proteins | 120/41 kDa | Typical response |
| **p68** | Reverse transcriptase | 68 kDa | Good antibody response |
| **p55** | Gag precursor | 55 kDa | Often seen in early/late infection |
| **p24** | Capsid protein | 24 kDa | Hallmark of progression |
| **p17** | Matrix protein | 17 kDa | Structural protein |

**Interpretation Patterns:**

| Pattern | Interpretation | Meaning |
|---------|-----------------|---------|
| **Many bands (gp120, p24, p17, p68)** | Positive | Established HIV infection |
| **gp120/gp41 + p24** | Positive | Likely HIV+ |
| **p31 (Integrase) only** | Positive | Recent infection |
| **No bands** | Negative | No HIV infection |
| **Indeterminate** | Inconclusive | Retest in 4 weeks |

**HIV Stages by Western Blot Pattern:**
1. **Acute HIV:** Faint p24, no other bands (high viral load)
2. **Early Chronic:** p24 + beginning gp120/gp41
3. **Late Chronic:** Strong gp120/gp41, strong p24, p68 present
4. **AIDS:** May show declining p24 as CD4 drops; p24 antibody becomes undetectable (despite high viremia)

### [Q7.3.3] Role of Reverse Transcriptase and Integrase in HIV Replication

**Reverse Transcriptase (RT):**

**Function:** Synthesizes DNA copy from viral RNA template (reverse of normal transcription).

**Two-Step Process:**
1. **RNA→DNA Synthesis:** Creates DNA-RNA hybrid
2. **RNA Degradation & Second Strand:** Degrades RNA template using RNase H; synthesizes complementary DNA strand
3. **Result:** Double-stranded DNA copy of HIV genome

**Mechanism of Action:**
- RT enters cells as part of virion
- In cytoplasm, synthesizes DNA-RNA intermediate
- RNase H domain degrades RNA
- Creates cDNA that enters nucleus

**Clinical Significance:**
- **Drug Target:** Reverse transcriptase inhibitors (NRTIs: AZT, lamivudine; NNRTIs: efavirenz)
- **Mutation Hotspot:** Error-prone RT → generates resistant variants quickly
- **Therapeutic Goal:** Suppress RT activity to prevent DNA synthesis

**Integrase (IN):**

**Function:** Catalyzes integration of HIV DNA into host chromosome.

**Three-Step Integration Process:**
1. **Processing:** IN removes 2 nucleotides from LTR ends of viral DNA
2. **Strand Transfer:** IN cuts host DNA; inserts viral DNA
3. **Repair:** Host repair machinery fills in gaps; seals breaks

**Outcome:** Integrated provirus replicates with host genes; passed to daughter cells.

**Clinical Significance:**
- **Creates Persistent Infection:** Integrated provirus is permanent, heritable
- **Drug Target:** Integrase inhibitors (dolutegravir, elvitegravir)
- **Therapy Strategy:** Blocking integration prevents permanent infection establishment

**Viral Replication Requirements:**
- **RT + IN Sequential:**
  1. RT makes DNA copy in cytoplasm
  2. RT-DNA complex transported to nucleus
  3. IN catalyzes integration
  4. Integrated DNA transcribed to make new virions

---

### Cluster 7.4: Molecular Detection of HIV
**Years Appeared:** 2023, 2022, 2017, 2016, 2015 | **Marks:** 4, 6, 7, 10

### [Q7.4.1] How Do Cellular Receptors Help Detect HIV Viral RNA?

**Host Cell Receptor as Detection Portal:**

1. **Viral attachment** to CD4/CCR5 or CXCR4 indicates HIV presence
2. **Reverse Transcription** generates DNA in cytoplasm
3. **Integrase catalyzes** nuclear translocation and integration
4. **Integrated DNA** serves as template for:** 
   - RT-PCR detection
   - Next-generation sequencing
   - Single-copy sensitivity possible

**Molecular Detection Platforms Using Receptor Interactions:**

- **Pseudotyped Viruses:** Use fluorescent reporter; entry (via CD4/co-receptor) triggers fluorescence
- **Luciferase Assays:** HIV entry activates reporter gene expression
- **Cell Surface Markers:** CD4/CCR5/CXCR4 expression indicates relevant cell types for infection

**Clinical RNA Detection:**

| Test | Principle | Detection Limit |
|------|-----------|------------------|
| **Viral Load (RT-qPCR)** | Quantifies RNA copies in plasma | <20 copies/mL (TND) |
| **Next-Gen Sequencing** | Sequences all viral RNA | <10 copies/mL |
| **Branched-chain DNA (bDNA)** | Amplifies detection probes | ~50 copies/mL |
| **Nucleic Acid Testing (NAT)** | Detects HIV RNA directly | <20 copies/mL |

**Receptor Basis for RNA Detection:**
- Cells with CD4/CCR5/CXCR4 preferentially infected
- Viral RNA abundant in plasma (1000-100,000 copies/mL in acute infection, <200 untreated chronic)
- Detection Methods use natural viral replication machinery (reverse transcriptase)

💡 **Key Concept:** The same receptors (CD4/CCR5) that allow viral entry also allow researchers to specifically detect and isolate HIV-positive cells for molecular analysis.
    

---

### 💡 Exam Tips & Summary
- Prioritize repeated year-tagged questions from this set.
- Keep a 3-line answer frame ready: definition, key mechanism/steps, exam keywords.
- Use one quick table/flow or contrast point for higher marks in long answers.
- Revise this set once within 24 hours and once in final revision week.
`,
    rawMd_bn: `
### ক্লাস্টার 7.1: এইচআইভি কাঠামো এবং জিনোম

**রিভার্স ট্রান্সক্রিপ্টেজ আবিষ্কার:**
তথ্য প্রবাহের দিক: আরএনএ → ডিএনএ (সাধারণ "ডিএনএ → আরএনএ" এর বিপরীত)

**তিনটি প্রধান জিন পণ্য:**

| জিন | এনকোডেড প্রোটিন | কার্যকর |
|------|---------------|--------|
| **Gag** | MA (p17), CA (p24), NC (p7) | কাঠামোগত প্রোটিন |
| **Pol** | RT (p66/p51), IN (p31), PR (p11) | এনজাইম |
| **Env** | gp120, gp41 | আবরণীয় গ্লাইকোপ্রোটিন |
    

---

### 💡 Exam Tips & Summary (দ্রুত রিভিশন)
- এই সেটের বারবার আসা বছরভিত্তিক প্রশ্ন আগে শেষ করো।
- ৩-লাইন ফরম্যাটে উত্তর লেখো: সংজ্ঞা, মূল মেকানিজম/স্টেপ, এক্সাম-কিওয়ার্ড।
- বড় উত্তরে ১টা টেবিল/ফ্লো/তুলনা যোগ করলে নম্বর বাড়ে।
- ২৪ ঘণ্টার মধ্যে ১ বার এবং ফাইনাল রিভিশনে ১ বার সেটটি রিভিশন দাও।
`
  },

  {
    id: "set8-other-viruses",
    title: "🔬 Set 8: Dengue, Hepatitis Panel, HHV & Viral Control",
    rawMd_en: `
### Cluster 8.1: Viral Tropism and HHV Classification
**Years Appeared:** 2023, 2022, 2017, 2016, 2015 | **Marks:** 4

### [Q8.1.1] What is Viral Tropism? Classify Human Herpes Viruses

**Viral Tropism Definition:** The ability of a virus to infect specific cell types based on receptor compatibility. [নির্দিষ্ট কোষের প্রতি আকর্ষণ]

**Mechanism:**
- Viral attachment proteins (spikes, gp120) recognize specific cell surface receptors
- Receptors expressed differently on different tissues
- Determines which organs/tissues become infected

**Human Herpesvirus (HHV) Classification — 8 Viruses:**

| Subfamily | Genus | Virus | Tropism | Disease |
|-----------|-------|-------|--------|---------|
| **Alpha (Fast-growing)** | Simplexvirus | **HHV-1 (HSV-1)** | Epithelial cells, neurons | Cold sores, keratitis |
| | | **HHV-2 (HSV-2)** | Genital epithelium, neurons | Genital herpes |
| | Varicellovirus | **HHV-3 (VZV)** | Epithelium, sensory neurons | Varicella (chickenpox), Zoster (shingles) |
| **Beta (Slow-growing)** | Cytomegalovirus | **HHV-5 (CMV)** | Monocytes, endothelium | CMV disease (pneumonitis in AIDS) |
| | Roseolovirus | **HHV-6** | T cells, macrophages | Roseola infantum (exanthem subitum) |
| | | **HHV-7** | T cells, CD4+ cells | Exanthema subitum |
| **Gamma (B/T-cell associated)** | Lymphocryptovirus | **HHV-4 (EBV)** | B cells, epithelial cells | Mononucleosis, Burkitt lymphoma |
| | Rhadinovirus | **HHV-8 (KSHV)** | B cells, endothelial cells | Kaposi sarcoma |

---

### Cluster 8.2: Dengue Virus Transmission and Cycles
**Years Appeared:** 2023, 2022, 2017, 2016, 2015 | **Marks:** 4

### [Q8.2.1] Transmission and Viral Cycles in Humans and Mosquitoes

**Dengue Virus Overview:**
- **Family:** Flaviviridae (like West Nile, Zika, Yellow Fever)
- **Transmission:** Aedes aegypti mosquito (daytime-active, urban mosquito)
- **Serotypes:** 4 distinct serotypes (DENV-1, -2, -3, -4)
- **Global:** ~400 million cases annually; endemic in tropical/subtropical regions

**Viral Cycle in Humans:**

| Phase | Duration | Viral Load | Clinical Features |
|-------|----------|-----------|------------------|
| **Incubation** | 3-14 days | Virus multiplies in blood | Asymptomatic |
| **Febrile Phase** | 3-7 days | Peak viremia | High fever, myalgia, arthralgia, rash |
| **Critical Phase** | 24-72 hours | Declining viremia | **Plasma leakage** (shock), hemorrhage |
| **Recovery** | 2-4 weeks | Viral clearance | Convalescence; lifelong immunity to serotype |

**Viral Tropism:** Dendritic cells → lymphatic nodes → bloodstream → systemic infection

**NS1 Protein Pathogenesis:**
- **Function:** Antagonizes interferon and complement; increases vascular permeability
- **Mechanism:** Binds TLR4 → triggers IL-6, TNF-α overproduction (cytokine storm)
- **Clinical Result:** Plasma leakage → hypovolemic shock in severe cases

**Viral Cycle in Mosquito (Aedes aegypti):**

| Stage | Location | Duration | Notes |
|-------|----------|----------|-------|
| **Ingestion** | Mosquito midgut | Upon blood meal | Mosquito takes infectious blood |
| **Replication** | Midgut epithelium | 7-14 days | Viremia-dependent replication |
| **Dissemination** | Hemocoel (body cavity) | Days 3-7 | Virus spreads through body |
| **Salivary Gland Invasion** | Salivary glands | Day 10-12 | Virus accumulates in salivary cells |
| **Transmission Ready** | Saliva | Permanent | Mosquito becomes infectious for life |

**Extrinsic Incubation Period (EIP):** 10-14 days (temperature-dependent; ~7 days at 30°C, ~15 days at 25°C)

**Horizontal vs. Vertical Transmission:**
- **Horizontal:** Mosquito → Human → Mosquito (requires human viremia)
- **Vertical:** Infected female → Eggs → Infected progeny (rare but documented)

---

### Cluster 8.3: Hepatitis Virus Panel
**Years Appeared:** 2023, 2022, 2017, 2016, 2015 | **Marks:** 4

### [Q8.3.1] Hepatitis Virus Genome and Serologic Markers

**Hepatitis Virus Panel — 5 Major Types:**

| Virus | Genome | Transmission | Chronicity | Key Marker |
|-------|--------|-------------|-----------|-----------|
| **HAV** | (+)ssRNA | Fecal-oral | Never chronic | Anti-HAV IgM (acute) |
| **HBV** | ds-DNA (relaxed circle) | Parenteral, sexual | 5-10% chronic | HBsAg, HBeAg |
| **HCV** | (+)ssRNA | Parenteral | 70% chronic | Anti-HCV Ab, HCV RNA |
| **HDV** | (-)ssRNA (defective) | Requires HBV | 5-10% chronic | Anti-HDV |
| **HEV** | (+)ssRNA | Fecal-oral | Never chronic except immunocompromised | Anti-HEV IgM |

**Genome Comparison:**

| Virus | Structure | Replication Site | Polymerase Type |
|-------|-----------|-----------------|-----------------|
| **HAV** | Naked icosahedron | Cytoplasm | RdRp (viral) |
| **HBV** | Partially double-stranded DNA | Nucleus + Cytoplasm | Reverse Transcriptase |
| **HCV** | Enveloped + Membrane-associated | ER (cytoplasm) | RdRp (NS5B) |
| **HDV** | Defective; needs HBV envelope | Nucleus | RdRp (delta antigen) |
| **HEV** | Non-enveloped; sometimes enveloped | Cytoplasm/ER | RdRp (viral) |

**Serologic and Molecular Markers for Diagnosis:**

**Acute Hepatitis A:**
- **Anti-HAV IgM:** Diagnostic for acute infection (appears early)
- **Anti-HAV IgG:** Indicates past infection, immunity

**Chronic Hepatitis B:**
- **HBsAg (Hepatitis B surface antigen):** Persistent >6 months = chronic
- **HBeAg:** Correlates with high viral replication (viral load)
- **Anti-HBc (core antibody):** Indicates exposure/infection (past or present)
- **HBV DNA:** Quantifies viral load; guides treatment decisions

**Hepatitis C:**
- **Anti-HCV (Antibody):** Screening test; indicates past/present exposure
- **HCV RNA (by qPCR):** Confirms active infection (acute or chronic)
- **HCV Genotype:** Determines treatment duration and regimen (1a, 1b, 2, 3, etc.)

**Hepatitis E:**
- **Anti-HEV IgM:** Acute infection
- **Anti-HEV IgG:** Past infection or vaccination

**HDV (Hepatitis Delta — Defective Virus):**
- Requires HBV envelope proteins for replication
- Only infects those with HBsAg+ status
- **Anti-HDV antibody:** Indicates HDV exposure
- **HDV RNA:** Active infection marker

---

### Cluster 8.4: Antiviral Strategies and Vaccines
**Years Appeared:** 2023, 2021, 2018, 2017, 2016, 2013 | **Marks:** 4, 9, 13, 3+3+3+3

### [Q8.4.1] What are Antiviral Drugs? Targets of Potential Agents

**Antiviral Definition:** Drugs that inhibit viral replication through interference with viral proteins or replication machinery.

**Major Antiviral Drug Classes and Targets:**

| Stage | Drug Class | Target | Example | Virus |
|-------|-----------|--------|---------|-------|
| **Attachment** | Receptor Antagonists | Entry receptors (CCR5, CXCR4) | Maraviroc, Enfuvirtide | HIV |
| **Entry/Fusion** | Fusion Inhibitors | Fusion proteins | Enfuvirtide | HIV |
| **Uncoating** | M2 Channel Blockers | Viral Ion Channels | Amantadine | Influenza |
| **Polymerase** | Nucleoside Analogs (NRTIs) | Reverse Transcriptase | Zidovudine (AZT), Lamivudine | HIV, HBV |
| | Non-nucleoside Inhibitors (NNRTIs) | RT substrate allosteric site | Efavirenz, Rilpivirine | HIV |
| | RNA-dependent RNA Polymerase Inhibitors | RdRp (viral polymerase) | Remdesivir, Ribavirin | COVID-19, Hepatitis C |
| **Protease** | Protease Inhibitors | Viral Protease | Lopinavir, Ritonavir, Paxlovid | HIV, COVID-19 |
| **Integrase** | Integrase Inhibitors | Integration enzyme | Dolutegravir, Elvitegravir | HIV |
| **Release** | Neuraminidase Inhibitors | NA of influenza | Oseltamivir (Tamiflu), Zanamivir | Influenza |
| **vDNA Synthesis** | Nucleotide Analogs | HBV polymerase/RT | Tenofovir, Entecavir | HBV |

### [Q8.4.2] Vaccine Types: Killed vs. Live Attenuated Vaccines

**Killed (Inactivated) Virus Vaccines:**

| Advantage | Disadvantage |
|-----------|-------------|
| Cannot cause disease (virus is dead) | Weaker immune response; often needs boosters |
| Safe for immunocompromised | Requires higher antigen doses |
| Stable for storage | More expensive to produce |
| | Requires multiple doses for full protection |

**Examples:** Polio (IPV), Hepatitis A, Influenza (injection), COVID-19 (Pfizer, Moderna), Rabies

**Live Attenuated (Weakened) Virus Vaccines:**

| Advantage | Disadvantage |
|-----------|-------------|
| Strong immune response (mimics natural infection) | **Cannot use in immunocompromised** (risk of disease) |
| Usually single or 2-dose series | Risk of reversion to wild-type (rare) |
| Inexpensive | Contraindicated in pregnancy |
| Booster often not needed | Must be refrigerated (some strains) |
| Mimics natural mucosal immunity | |

**Examples:** MMR, Varicella, Rotavirus (oral), Yellow Fever, Influenza (nasal spray — LAIV)

**Risks of Live Attenuated Vaccines:**

1. **Reversion Mutation:** Rare but documented (vaccine-derived poliovirus)
2. **Systemic Infection:** In severely immunocompromised hosts (CD4 <50)
3. **Transmission:** Can shed and spread (especially rotavirus, OPV)
4. **Pregnancy Complications:** Teratogenic risk of fetal infection

### [Q8.4.3] mRNA Vaccines Against SARS-CoV-2 (Modern Technology)

**mRNA Vaccine Technology:**

**How It Works:**
1. **Synthetic mRNA:** Encodes only Spike protein (not whole virus genome)
2. **Lipid Nanoparticle (LNP) Delivery:** LNPs protect RNA and transfect cells
3. **Intracellular Protein Synthesis:** Body cells produce spike protein antigen
4. **Immune Recognition:** Antigen presented on MHC → T-cell, B-cell response

**Key Advantages:**
- **No Infectious Agent:** Cannot infect or cause COVID-19
- **Safe:** No integration risk (mRNA degrades within days)
- **Speed:** Developed in <12 months (vs. 5-10 years traditional vaccines)
- **Flexibility:** Can be redesigned for variants ("mix and match" boosters)
- **Strong T-cell Response:** Both CD8+ CTL and CD4+ Th response

**Disadvantages:**
- **Requires Ultra-Cold Storage:** -70°C (Pfizer), -20°C (Moderna)
- **Limited Duration:** Immunity wanes (~3-4 months for neutralizing antibodies)
- **New Technology:** Long-term data limited (though now ~4 years of follow-up)
- **Equity Issues:** Complex cold-chain limits use in low-resource countries

**Efficacy Data:**
- **Initial Series:** ~95% efficacy against symptomatic infection
- **Breakthrough Infections:** Possible with Omicron variants (T-cell immunity partially preserved)
- **Booster Response:** Additional doses restore neutralizing antibodies
- **Real-World Effectiveness:** ~80-90% protection against severe disease even with variants

**Molecular Basis of Superior Efficacy:**
- **Direct Translation:** Spike protein produced in patient's own cells
- **Dendritic Cell Uptake:** LNPs efficiently deliver to antigen-presenting cells
- **CD8+ T-cell Priming:** Intracellular synthesis ensures cytosolic presentation on MHC-I

### [Q8.4.4] HIV Vaccines and Antiretroviral Drugs

**HIV Vaccine Development Challenges:**
1. **Extreme Genetic Variability:** >1% mutation rate (reverse transcriptase error-prone)
2. **Glycan Shield:** Dense carbohydrate coating hides epitopes
3. **Conformational Changes:** Spike protein shifts shapes during entry
4. **Lack of Naturally Protective Antibodies:** Even infected persons don't develop broadly neutralizing Abs

**Attempted Vaccine Approaches:**
- **gp120/gp41 Protein:** AIDSVAX trial (50% efficacy — disappointing)
- **gp120 + Adjuvant:** RGPV120 (13% efficacy — very modest)
- **Modified Envelope:** Immunogens designed by computational protein design (e.g., BG505 N451 MD39)
- **mRNA-based:** Similar to SARS-CoV-2 (in clinical trials)
- **Therapeutic Vaccines:** Aim to boost existing immunity in treated patients

**Antiretroviral Drug Regimens (ART):**

**First-Line Combinations (typically 3-drug regimen):**
1. **Two NRTIs + One Third Agent:**
   - NRTIs: Tenofovir/Emtricitabine (or Abacavir/Lamivudine)
   - Third Agent: Integrase inhibitor (dolutegravir, bictegravir) OR NNRTI (rilpivirine) OR Protease inhibitor (boosted)

2. **Efficacy:** >95% suppression to <50 copies/mL with adherence

**Goals of Treatment:**
- **Viral Suppression:** <50 copies/mL (undetectable)
- **CD4 Recovery:** Restore CD4+ T-cell count (typically +50-100 cells/month initially)
- **Clinical Improvement:** Prevent OI, reverse immunosuppression
- **Prevention:** Undetectable = Untransmittable (U=U); no transmission risk

**Abbreviations Used:**
- **ART:** Antiretroviral Therapy
- **HAART:** Highly Active ART (older term)
- **TLD:** Tenofovir/Lamivudine/Dolutegravir (most common first-line globally)

💡 **Summary:** HIV vaccines remain elusive due to viral genetic plasticity, but modern ART achieves sustained viral suppression allowing near-normal lifespan. Prevention strategy now shifts to PREP (pre-exposure prophylaxis) rather than vaccine.
    `,
    rawMd_bn: `
### ক্লাস্টার 8.1: ভাইরাল ট্রপিজম এবং এইচএইচভি শ্রেণীবিভাগ

**ভাইরাল ট্রপিজম সংজ্ঞা:** রিসেপ্টর সামঞ্জস্যের উপর ভিত্তি করে নির্দিষ্ট কোষ প্রকার সংক্রমণ করার ভাইরাসের ক্ষমতা।

**প্রক্রিয়া:**
- ভাইরাল সংযুক্তি প্রোটিন নির্দিষ্ট কোষ পৃষ্ঠ রিসেপ্টর স্বীকৃতি দেয়
- রিসেপ্টর বিভিন্ন টিস্যুতে ভিন্নভাবে প্রকাশিত হয়
- কোন অঙ্গ/টিস্যু সংক্রামিত হয় তা নির্ধারণ করে
    

---

### 💡 Exam Tips & Summary (দ্রুত রিভিশন)
- এই সেটের বারবার আসা বছরভিত্তিক প্রশ্ন আগে শেষ করো।
- ৩-লাইন ফরম্যাটে উত্তর লেখো: সংজ্ঞা, মূল মেকানিজম/স্টেপ, এক্সাম-কিওয়ার্ড।
- বড় উত্তরে ১টা টেবিল/ফ্লো/তুলনা যোগ করলে নম্বর বাড়ে।
- ২৪ ঘণ্টার মধ্যে ১ বার এবং ফাইনাল রিভিশনে ১ বার সেটটি রিভিশন দাও।
`
  }
];

// End of GEB 334 data
// This comprehensive dataset covers 8 Sets spanning Oncology (Sets 1-5) and Virology (Sets 5-8)
// for GEB 334: Oncology and Virology course
