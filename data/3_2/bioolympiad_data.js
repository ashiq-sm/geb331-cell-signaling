/**
 * IBO Preparation - BioOlympiad
 * Comprehensive Dataset generated for International Biology Olympiad preparation.
 * Contains both English and Bengali versions with advanced formatting.
 */

const bioolympiad_sets = [
  {
    id: "set1",
    title: '🔹 SET 1: CELL BIOLOGY (20%) - Molecular Energetics & Cellular Architecture',
    rawMd_en: `# SET 1: CELL BIOLOGY (20%)
    
The International Biology Olympiad (IBO) requires a sophisticated mastery of biological principles that extend well beyond secondary education, necessitating an understanding of systems-level interactions and molecular precision. The study of cells is governed by the cell theory, which posits that all living organisms are composed of cells, the cell is the basic unit of life, and all cells arise from pre-existing cells.

---

## 1.1 ENZYMATIC CATALYSIS AND KINETIC REGULATION

Biochemical reactions within a cell are governed by enzymes, proteinaceous catalysts that lower the activation energy ($\\Delta G^\\ddagger$) of transitions without altering the thermodynamic equilibrium of the system.

### 🔬 Enzyme Structure
A nuanced understanding of enzyme structure is required:
*   **Apoenzyme:** The inactive protein part.
*   **Cofactor/Coenzyme:** Necessary non-protein components. Inorganic ions are cofactors; organic molecules (like $NAD^+$ and $FAD$) are coenzymes.

The binding of a substrate to the active site follows an **induced-fit model**, where the enzyme undergoes conformational changes to stabilize the transition state.

### 📊 Michaelis-Menten Kinetic Model
The quantification of these interactions is typically performed through the Michaelis-Menten kinetic model, which describes the rate of reaction ($v$) relative to substrate concentration:

$$ v = \\frac{V_{max}[S]}{K_m + [S]} $$

*   **$V_{max}$:** Represents the maximum potential velocity of the reaction when all active sites are saturated.
*   **$K_m$ (Michaelis constant):** Indicates the substrate concentration at half $V_{max}$. A lower $K_m$ suggests a higher affinity for the substrate.

### 🛑 Enzyme Inhibition Types

| Inhibition Type | Impact on $V_{max}$ | Impact on $K_m$ | Mechanism of Action |
| :--- | :--- | :--- | :--- |
| **Competitive** | Unchanged | Increases | Inhibitor competes for the active site |
| **Non-competitive** | Decreases | Unchanged | Inhibitor binds to an allosteric site |
| **Uncompetitive** | Decreases | Decreases | Inhibitor binds only to the enzyme-substrate complex |

---

## 1.2 PATHWAYS OF CELLULAR RESPIRATION & ENERGY TRANSDUCTION

The metabolic harvesting of energy from glucose occurs through a sequence of highly regulated pathways.

| Intermediate Phase | Primary Products (per Glucose) | Mitochondrial Location |
| :--- | :--- | :--- |
| **Glycolysis** | 2 Pyruvate, 2 ATP, 2 NADH | Cytoplasm |
| **Pyruvate Oxidation** | 2 Acetyl-CoA, 2 NADH, 2 $CO_2$ | Matrix |
| **Citric Acid Cycle (Krebs)** | 6 NADH, 2 $FADH_2$, 2 ATP, 4 $CO_2$ | Matrix |
| **Oxidative Phosphorylation** | $\\approx 26-28$ ATP, $H_2O$ | Inner Membrane |

**Oxidative Phosphorylation:** The site of the greatest ATP yield, driven by the Electron Transport Chain (ETC) and chemiosmosis. Electrons from NADH and $FADH_2$ pass through a series of transmembrane protein complexes (Complexes I-IV), providing the energy to pump protons ($H^+$) from the matrix into the intermembrane space. This establishes the proton-motive force, which drives $H^+$ back into the matrix through ATP synthase.

---

## 1.3 PHOTOSYNTHETIC CARBON FIXATION

In autotrophic organisms, the conversion of light energy to chemical energy occurs in the chloroplasts.
*   **Light-dependent reactions:** Take place in the thylakoid membranes, utilizing Photosystems II and I to generate ATP and NADPH. Water is photolyzed to provide electrons, releasing $O_2$ as a byproduct.
*   **Calvin cycle (light-independent):** Occurs in the stroma and involves the fixation of atmospheric $CO_2$ into organic molecules. It is catalyzed by the enzyme RuBisCO and proceeds through three stages: **carbon fixation** (forming 3-phosphoglycerate), **reduction** (utilizing ATP and NADPH to produce G3P), and **regeneration** of the $CO_2$ acceptor, ribulose-1,5-bisphosphate (RuBP).

---

## 1.4 PROTEIN SYNTHESIS & CELL CYCLE DYNAMICS

### 🧬 Molecular Information Flow
The "central dogma" of molecular biology: **DNA $\\rightarrow$ RNA $\\rightarrow$ Protein**
1.  **Transcription:** Involves the synthesis of mRNA from a DNA template by RNA polymerase. In eukaryotes, pre-mRNA undergoes processing: addition of a 5' methylguanosine cap, a 3' poly-A tail, and excision of introns by the spliceosome.
2.  **Translation:** Occurs at the ribosome. tRNA molecules, charged with specific amino acids, pair their anticodons with mRNA codons.

### 🔄 Mitosis and Meiosis
*   **Mitosis:** Ensures daughter cells receive an identical complement of chromosomes. Divided into prophase, prometaphase, metaphase, anaphase, and telophase.
*   **Meiosis:** Involves two successive divisions (Meiosis I and II) to reduce the chromosome number from diploid (2n) to haploid (n). Crossing over at chiasmata during Prophase I significantly increases genetic variation.`,
    rawMd_bn: `# সেট ১: কোষীয় জীববিজ্ঞান (Cell Biology - ২০%)

কোষের শক্তি উৎপাদন এবং তথ্য প্রবাহের প্রক্রিয়াগুলো অলিম্পিয়াডের মূল ভিত্তি। 

---

## ১.১ বিপাকীয় প্রক্রিয়ার তুলনামূলক সারণি

| প্রক্রিয়া | স্থান (Location) | নিট উৎপাদন (per Glucose) | বিশেষ তথ্য (Critical Details) |
| :--- | :--- | :--- | :--- |
| **গ্লাইকোলাইসিস** | সাইটোপ্লাজম | ২ পাইরুভেট, ২ ATP, ২ NADH | এটি সবাত ও অবাত উভয় শ্বসনের সাধারণ ধাপ (Universal Step)। |
| **ক্রেবস চক্র** | মাইটোকন্ড্রিয়া ম্যাট্রিক্স | ৬ NADH, ২ $FADH_2$, ২ ATP, ৪ $CO_2$ | একে সাইট্রিক অ্যাসিড চক্র বলা হয় কারণ এর প্রথম উৎপাদ সাইট্রেট (৬-কার্বন)। |
| **অক্সিডেটিভ ফসফোরাইলেশন** | মাইটোকন্ড্রিয়া অন্তঃপর্দা | প্রায় ২৬-২৮ ATP, $H_2O$ | এখানে অক্সিজেন চূড়ান্ত ইলেকট্রন গ্রহীতা (Final Electron Acceptor) হিসেবে কাজ করে। |
| **ক্যালভিন চক্র** | ক্লোরোপ্লাস্ট স্ট্রোমা | শর্করা (G3P) | একে আলোক-নিরপেক্ষ পর্যায় বলা হয় কারণ এটি সরাসরি আলোর ওপর নির্ভরশীল নয়। |

---

## ১.২ এনজাইম কাইনেটিক্স (Enzyme Kinetics)

*   **অ্যাপোএনজাইম (Apoenzyme):** এনজাইমের শুধুমাত্র প্রোটিন অংশ যা এককভাবে নিষ্ক্রিয়।
*   **কো-এনজাইম (Coenzyme):** এনজাইমের সাথে যুক্ত জৈব নন-প্রোটিন অংশ (যেমন- $NAD^+$, $FAD$)। 
*   **মাইকেলিস-মেন্টেন মডেল:** এটি এনজাইমের সাবস্ট্রেট ঘনত্বের সাথে বিক্রিয়ার হারের সম্পর্ক দেখায়। 
    $$ v = \\frac{V_{max}[S]}{K_m + [S]} $$
    *   **$K_m$ (Michaelis Constant):** এটি সেই সাবস্ট্রেট ঘনত্ব যেখানে বিক্রিয়ার হার সর্বোচ্চ হারের অর্ধেক ($1/2 V_{max}$)। $K_m$ এর মান যত কম, এনজাইমের সাবস্ট্রেটের প্রতি আকর্ষণ (Affinity) তত বেশি। 

---

### 💡 শেষ মুহূর্তের অলিম্পিয়াড টিপস: 
**কেন গ্লাইকোলাইসিস অক্সিজেনের ওপর নির্ভর করে না?** 
কারণ এটি সাইটোপ্লাজমে ঘটে এবং এর জন্য ইলেকট্রন ট্রান্সপোর্ট চেইনের প্রয়োজন হয় না; এটি সরাসরি সাবস্ট্রেট লেভেল ফসফোরাইলেশনের মাধ্যমে শক্তি উৎপাদন করে।

**কেন এনজাইম উচ্চ তাপমাত্রায় কাজ করে না?** 
কারণ এনজাইম প্রোটিন দিয়ে তৈরি এবং অতিরিক্ত তাপে প্রোটিনের ত্রিমাত্রিক গঠন ভেঙে যায় (Denaturation - প্রোটিনের স্বাভাবিক সক্রিয়তা হারানো), ফলে এনজাইম অকার্যকর হয়ে পড়ে।`
  },
  {
    id: "set2",
    title: '🔹 SET 2: PLANT ANATOMY & PHYSIOLOGY (15%) - Architecture & Reproduction',
    rawMd_en: `# SET 2: PLANT ANATOMY & PHYSIOLOGY (15%)

Plant systems represent 15% of the theoretical marks, with a heavy focus on the structural adaptations of tracheophytes (vascular plants). Growth is localized in meristems: apical meristems facilitate primary growth (length), while lateral meristems (vascular and cork cambium) facilitate secondary growth (girth) in woody plants.

---

## 2.1 ARCHITECTURE OF LEAVES AND STEMS

| Plant Organ | Primary Tissues | Functional Adaptation |
| :--- | :--- | :--- |
| **Leaf** | Mesophyll (Parenchyma) | Optimized for photosynthesis and gas exchange. Internal structure is partitioned into palisade mesophyll (tightly packed) and spongy mesophyll (loose for gas diffusion). |
| **Stem** | Vascular Bundles | Structural support and long-distance transport. |
| **Root** | Endodermis / Stele | Nutrient absorption and anchoring. |

### 🌿 Vascular Systems
*   **Xylem:** Composed of dead tracheids and vessel elements, transports water and minerals upward via the cohesion-tension mechanism.
*   **Phloem:** Consisting of living sieve-tube elements and companion cells, transports photosynthates from source to sink via the pressure-flow hypothesis.
*   **Endodermis:** In the root, it contains the **Casparian strip**, a suberized layer that prevents apoplastic transport into the vascular cylinder, forcing selective symplastic movement of minerals.

---

## 2.2 PLANT REPRODUCTION AND LIFE CYCLES

The alternation of generations is a hallmark of the plant kingdom, involving a haploid gametophyte and a diploid sporophyte.
*   **Bryophytes (e.g., Polytrichum):** The gametophyte is the dominant, free-living generation.
*   **Seed Plants:** Dominated by the sporophyte, with the gametophyte highly reduced and dependent on the parent plant.

### 🌸 Double Fertilization in Angiosperms
Angiosperm reproduction involves the unique process of double fertilization:
1.  Within the ovule, one sperm cell fuses with the egg to form the **2n zygote**.
2.  The second sperm cell fuses with two polar nuclei to form the **3n endosperm**, which serves as a nutritive tissue for the embryo.`,
    rawMd_bn: `# সেট ২: উদ্ভিদ শারীরস্থান ও শারীরতত্ত্ব (Plant Anatomy & Physiology - ১৫%)

উদ্ভিদের গঠন এবং জনুঃক্রম (Alternation of Generations - জীবনচক্রে হ্যাপ্লয়েড ও ডিপ্লয়েড পর্যায়ের পর্যায়ক্রমিক আবর্তন) বোঝা জরুরি।

---

## ২.১ পরিবহন ও প্রজননতন্ত্র

*   **জাইলেম (Xylem):** এটি ট্রাকিড ও ভেসেল (মৃত কোষ) দিয়ে গঠিত যা পানি ও খনিজ লবণ পরিবহন করে। এর পরিবহন একমুখী (নিচ থেকে উপরে)।
*   **ফ্লোয়েম (Phloem):** সীভ নল ও সঙ্গী কোষ (জীবিত কোষ) দিয়ে গঠিত যা শর্করা পরিবহন করে। এর পরিবহন উভয়মুখী।
*   **দ্বিনিষেক (Double Fertilization):** আবৃতবীজী উদ্ভিদের (Angiosperms) অনন্য বৈশিষ্ট্য। একটি শুক্রাণু ডিম্বাণুর সাথে মিলে জাইগোট (2n) এবং অন্যটি গৌণ নিউক্লিয়াসের সাথে মিলে এন্ডোস্পার্ম বা শস্য (3n) তৈরি করে।

---

## ২.২ জনুঃক্রমের তুলনা

| উদ্ভিদের ধরন | প্রধান পর্যায় | বৈশিষ্ট্য |
| :--- | :--- | :--- |
| **মস (Bryophytes)** | গ্যামেটোফাইট (হ্যাপ্লয়েড) | এদের গ্যামেটোফাইট পর্যায়টি প্রধান ও স্বতন্ত্র। স্পোরোফাইট গ্যামেটোফাইটের ওপর নির্ভরশীল। |
| **ফার্ন ও বীজধারী উদ্ভিদ** | স্পোরোফাইট (ডিপ্লয়েড) | এদের স্পোরোফাইট পর্যায়টি প্রধান। উন্নত উদ্ভিদে গ্যামেটোফাইট অত্যন্ত সংক্ষিপ্ত এবং স্পোরোফাইটের ভেতর অবস্থান করে। |

---

### 💡 শেষ মুহূর্তের অলিম্পিয়াড টিপস: 
**কেন প্রস্বেদনকে 'প্রয়োজনীয় ক্ষতি' (Necessary Evil) বলা হয়?** 
কারণ এটি উদ্ভিদের পানি পরিবহনের জন্য জরুরি (বাষ্পীভবন টান তৈরি করে), কিন্তু অতিরিক্ত পানি হারিয়ে উদ্ভিদ মারাও যেতে পারে।`
  },
  {
    id: "set3",
    title: '🔹 SET 3: ANIMAL PHYSIOLOGY (25%) - Homeostatic Control',
    rawMd_en: `# SET 3: ANIMAL PHYSIOLOGY (25%)

Animal physiology accounts for 25% of the IBO examination, with a specific focus on vertebrate and human-centered systems. This section emphasizes the maintenance of dynamic equilibrium (homeostasis) through feedback loops and hormonal regulation.

---

## 3.1 DIGESTION, ABSORPTION & RESPIRATION

*   **Digestion:** The human digestive system is compartmentalized. Enzymes such as salivary amylase, gastric pepsin, and pancreatic lipases target carbohydrates, proteins, and lipids respectively. Absorption occurs primarily in the small intestine, where surface area is maximized by villi and microvilli. Nutrients enter the hepatic portal vein to the liver.
*   **Gas Exchange:** Facilitated by the lungs, where oxygen diffuses across the thin alveolar epithelium into the blood.
*   **Circulatory System:** Powered by a four-chambered heart maintaining double circulation: the pulmonary circuit and the systemic circuit. Capillaries are the primary site for exchange, governed by hydrostatic and osmotic pressures.

---

## 3.2 RENAL FUNCTION AND OSMOREGULATION

The kidney filters blood and produces urine through the activity of the nephron, involving four key stages:
1.  **Filtration:** Occurs in the glomerulus; blood pressure forces water and solutes into Bowman’s capsule.
2.  **Reabsorption:** Reclaiming essential solutes (glucose, amino acids) in the proximal tubule.
3.  **Secretion:** Active removal of toxins and excess ions ($H^+$, $K^+$).
4.  **Concentration:** The Loop of Henle and collecting duct use a countercurrent multiplier system and antidiuretic hormone (ADH) to regulate water reabsorption.

---

## 3.3 ENDOCRINE AND IMMUNE COORDINATION

The endocrine system utilizes hormones for long-distance signaling. 

| Endocrine Gland | Hormone | Physiological Effect |
| :--- | :--- | :--- |
| **Pancreas (Beta cells)** | Insulin | Lowers blood glucose by promoting cellular uptake |
| **Pancreas (Alpha cells)** | Glucagon | Raises blood glucose by promoting glycogenolysis |
| **Adrenal Medulla** | Epinephrine | Facilitates the "fight-or-flight" acute stress response |
| **Posterior Pituitary** | ADH | Increases water permeability in the collecting duct |

**Immune System:** Provides multi-layered protection. 
*   **Innate:** Immediate, non-specific defenses (phagocytosis, inflammation).
*   **Adaptive:** Characterized by memory and specificity involving B cells (humoral immunity via antibodies) and T cells (cell-mediated immunity).`,
    rawMd_bn: `# সেট ৩: প্রাণী শারীরতত্ত্ব (Animal Physiology - ২৫%)

প্রাণীদেহের ভারসাম্য বা হোমলিওস্ট্যাসিস (Homeostasis - দেহের অভ্যন্তরীণ পরিবেশ স্থিতিশীল রাখা) রক্ষায় বিভিন্ন তন্ত্রের ভূমিকা মানুষের ওপর আলোকপাত করে।

---

## ৩.১ বিভিন্ন তন্ত্রের কার্যাবলি

*   **পরিপাক ও শোষণ:** ক্ষুদ্রান্ত্রের ভিলাস (Villi - আঙুলের মতো অভিক্ষেপ) শোষণের তলদেশ বৃদ্ধি করে। চর্বি জাতীয় খাদ্য ল্যাকটিয়াল নালীর মাধ্যমে শোষিত হয়। 
*   **রক্ত সংবহন:** হৃদপিণ্ডের ডান অংশ কার্বন ডাই-অক্সাইড যুক্ত রক্ত ফুসফুসে পাঠায় এবং বাম অংশ অক্সিজেন যুক্ত রক্ত সারাদেহে পাম্প করে। কৈশিক জালিকা (Capillaries) হলো গ্যাসীয় বিনিময়ের মূল স্থান।
*   **নেফ্রন (Nephron):** এটি বৃক্কের কার্যকরী একক। গ্লোমেরুলাস ফিল্ট্রেশনের মাধ্যমে রক্ত ছেঁকে প্রাথমিক মূত্র তৈরি করে। প্রক্সিমাল প্যাঁচানো নালিকায় গুরুত্বপূর্ণ পুষ্টি পুনরায় শোষিত হয়।

---

## ৩.২ অন্তঃক্ষরা গ্রন্থি (Endocrine Glands)

| গ্রন্থি | কাজ ও নিঃসৃত হরমোন |
| :--- | :--- |
| **পিটুইটারি (Pituitary)** | মাস্টার গ্ল্যান্ড, দেহের বৃদ্ধি ও অন্য গ্রন্থিকে নিয়ন্ত্রণ করে। |
| **অ্যাড্রেনাল (Adrenal)** | 'ফাইট অর ফ্লাইট' (Fight or Flight - জরুরি অবস্থা মোকাবিলা) হরমোন (এপিনেফ্রিন) ক্ষরণ করে। |
| **আইলেটস অব ল্যাঙ্গারহ্যান্স** | অগ্ন্যাশয়ে অবস্থিত। ইনসুলিন ও গ্লুকাগন ক্ষরণ করে রক্তে শর্করার মাত্রা নিয়ন্ত্রণ করে। |`
  },
  {
    id: "set4",
    title: '🔹 SET 4: ETHOLOGY (5%) - Animal Behavior',
    rawMd_en: `# SET 4: ETHOLOGY (5%)

Ethology represents 5% of the syllabus, examining the biological basis of behavior from both proximate (mechanistic) and ultimate (evolutionary) perspectives.

---

## 4.1 CATEGORIES OF BEHAVIOR

*   **Innate Behavior:** Genetically programmed behaviors that do not require prior experience. An example includes **Fixed Action Patterns (FAPs)**, which are highly stereotyped sequence of behaviors triggered by a specific stimulus (sign stimulus).
*   **Learned Behavior:** Behaviors modified by experience. Types include:
    *   *Imprinting:* Phase-sensitive learning occurring at a particular age or life stage.
    *   *Habituation:* A decrease in response to a stimulus after repeated presentations.
    *   *Classical Conditioning:* Learning to associate a neutral stimulus with a biologically potent stimulus (e.g., Pavlov's dogs).

---

## 4.2 COMMUNICATION, FORAGING, AND BIORHYTHMS

*   **Communication:** Animals use visual, auditory, chemical (pheromones), and tactile signals. For example, songbirds use complex vocalizations for territory defense and mate attraction, often regulated by seasonal shifts in hormone levels like melatonin.
*   **Optimal Foraging Theory:** Suggests that animals maximize their net energy intake per unit time spent foraging, balancing the energy gained against the energy expended and risk of predation.
*   **Mating Systems:** Include monogamy, polygyny, and polyandry, determined by the needs of the offspring and resource distribution.
*   **Biological Rhythms:** Circadian clocks synchronize animal activities with environmental cycles, often controlled by the pineal gland in vertebrates.`,
    rawMd_bn: `# সেট ৪: আচরণবিদ্যা (Ethology - ৫%)

প্রাণীর আচরণের জৈবিক ভিত্তি, যোগাযোগ, এবং জীবনচক্রের সময়কাল এই অংশের মূল আলোচ্য বিষয়।

---

## ৪.১ আচরণের প্রকারভেদ

*   **সহজাত আচরণ (Innate Behavior):** যা প্রাণীর জিনগতভাবে নির্ধারিত। এই আচরণ শেখার প্রয়োজন হয় না। 
    > **উদাহরণ:** মাকড়সার জাল বোনা, বা কোনো নির্দিষ্ট প্যাটার্ন দেখে পাখির প্রতিক্রিয়া (Fixed Action Pattern)। 
*   **অর্জিত আচরণ (Learned Behavior):** যা অভিজ্ঞতার মাধ্যমে শেখা হয়। 
    > **উদাহরণ:** কুকুরের ঘণ্টা শুনে লালা ক্ষরণ (Classical Conditioning - প্যাভলভের পরীক্ষা) বা ইমপ্রিন্টিং (হাঁসের বাচ্চার প্রথম দেখা চলন্ত বস্তুকে অনুসরণ করা)।

---

## ৪.২ অন্যান্য আচরণগত বৈশিষ্ট্য

*   **খাদ্য অনুসন্ধান (Optimal Foraging):** প্রাণীরা এমনভাবে খাদ্য খোঁজে যাতে কম শ্রমে বেশি শক্তি পাওয়া যায়।
*   **বায়োরিদম (Biorhythm):** প্রাণীর ২৪ ঘণ্টার জৈবিক ঘড়ি (Circadian Rhythm) যা ঘুম ও জেগে থাকার চক্র নিয়ন্ত্রণ করে। এটি পরিবেশের আলো-আঁধারি চক্রের সাথে সম্পর্কিত।`
  },
  {
    id: "set5",
    title: '🔹 SET 5: GENETICS & EVOLUTION (20%) - Inheritance & Population Change',
    rawMd_en: `# SET 5: GENETICS & EVOLUTION (20%)

Moving from Mendelian ratios to the mathematics of population genetics.

---

## 5.1 MENDELIAN AND POST-MENDELIAN GENETICS

Mendel’s laws (Segregation and Independent Assortment) describe the transmission of alleles. 
Advanced complications include:
*   **Linkage:** Genes on the same chromosome do not assort independently.
*   **Pleiotropy:** One gene affecting multiple traits.
*   **Epistasis:** Interaction between different genes where one masks the effect of another.
*   **Polygenic Inheritance:** Additive effects of many genes resulting in continuous variation (e.g., skin color).

---

## 5.2 THE HARDY-WEINBERG PRINCIPLE

The Hardy-Weinberg equilibrium provides a null model for studying evolution. In a population where $p$ is the frequency of the dominant allele and $q$ is the frequency of the recessive allele:

$$ p + q = 1 $$
$$ p^2 + 2pq + q^2 = 1 $$

Where:
*   **$p^2$:** Frequency of homozygous dominant individuals.
*   **$2pq$:** Frequency of heterozygous individuals.
*   **$q^2$:** Frequency of homozygous recessive individuals.

### 🧬 Mechanisms of Evolution
Evolution occurs when allele frequencies change due to:
1.  **Natural Selection:** Acts on the phenotype, favoring individuals with higher fitness, leading to adaptation.
2.  **Genetic Drift:** Random changes in allele frequencies, significant in small populations (bottleneck or founder effects).
3.  **Gene Flow:** Migration of individuals between populations.
4.  **Mutation:** The ultimate source of new genetic variation.`,
    rawMd_bn: `# সেট ৫: বংশগতিবিদ্যা ও বিবর্তন (Genetics & Evolution - ২০%)

মেন্ডেলীয় বংশগতি থেকে শুরু করে পপুলেশন জেনেটিক্সের গাণিতিক বিশ্লেষণ।

---

## ৫.১ মেন্ডেলীয় বংশগতি

*   **মেন্ডেলীয় অনুপাত:** একসংকর (Monohybrid) ক্রসে ৩:১ এবং দ্বিসংকর (Dihybrid) ক্রসে ৯:৩:৩:১ অনুপাত পাওয়া যায়।
*   **অন্যান্য জিনগত মিথস্ক্রিয়া:** প্লিয়োট্রপি (একটি জিন একাধিক বৈশিষ্ট্য নিয়ন্ত্রণ করে), এপিস্ট্যাসিস (একটি জিন অন্য জিনের প্রকাশে বাধা দেয়), এবং পলিজেনিক ইনহেরিটেন্স (একাধিক জিন মিলে একটি বৈশিষ্ট্য নিয়ন্ত্রণ করে)।

---

## ৫.২ হার্ডি-ওয়াইনবার্গ নীতি ও বিবর্তন

**হার্ডি-ওয়াইনবার্গ নীতি ($p^2 + 2pq + q^2 = 1$):** 
একটি আদর্শ পপুলেশনে বিবর্তনীয় বল (যেমন- প্রাকৃতিক নির্বাচন, মিউটেশন) না থাকলে অ্যালিল ফ্রিকোয়েন্সি স্থির থাকে। 

**বিবর্তনের মেকানিজম (Mechanisms of Evolution):**
1.  **প্রাকৃতিক নির্বাচন (Natural Selection):** যোগ্যতমের টিকে থাকাকে নিশ্চিত করে। পরিবেশের সাথে মানানসই বৈশিষ্ট্যগুলো পরবর্তী প্রজন্মে বেশি স্থানান্তরিত হয়।
2.  **জেনেটিক ড্রিফট (Genetic Drift):** ছোট পপুলেশনে হঠাৎ করে কোনো অ্যালিলের ফ্রিকোয়েন্সি পরিবর্তন হওয়া।
3.  **আইসোলেশন (Isolation - বিচ্ছিন্নতা):** নতুন প্রজাতি সৃষ্টিতে (Speciation) সাহায্য করে।

---

### 💡 শেষ মুহূর্তের অলিম্পিয়াড টিপস: 
**কেন হার্ডি-ওয়াইনবার্গ সাম্যাবস্থা বাস্তবে দেখা যায় না?** 
কারণ প্রাকৃতিক পপুলেশনে সবসময়ই মিউটেশন, মাইগ্রেশন (পরিযান) এবং প্রাকৃতিক নির্বাচন কাজ করে, যা অ্যালিল ফ্রিকোয়েন্সি বদলে দেয়।`
  },
  {
    id: "set6",
    title: '🔹 SET 6: ECOLOGY (10%) - Ecosystem Dynamics',
    rawMd_en: `# SET 6: ECOLOGY (10%)

Ecology focuses on the interactions within and between populations, energy flow, and nutrient cycling.

---

## 6.1 POPULATION GROWTH & RESOURCE LIMITATION

*   **Exponential Growth:** Populations grow exponentially (J-shaped curve) when resources are unlimited. The rate of growth is proportional to population size.
*   **Logistic Growth:** Populations transition to logistic growth (S-shaped curve) as they approach the **carrying capacity ($K$)** of their environment, where resource limitations restrict further growth.

### 🌍 Ecological Niche
The **niche** of a species encompasses the total of its use of biotic and abiotic resources. 
*   **Competitive Exclusion Principle:** States that two species cannot occupy the exact same niche in the exact same habitat indefinitely; one will outcompete the other.

---

## 6.2 ENERGY FLOW AND BIOGEOCHEMICAL CYCLING

Energy flows **one-way** through ecosystems, entering as sunlight, converted to chemical energy by primary producers, and dissipating as heat. 

Conversely, nutrients **cycle** through biogeochemical pathways:
*   **Carbon Cycle:** Driven primarily by photosynthesis and cellular respiration.
*   **Nitrogen Cycle:** Relies heavily on bacteria for nitrogen fixation, nitrification, and denitrification.
*   **Phosphorus Cycle:** Primarily a sedimentary cycle involving the weathering of rocks and sedimentation, lacking a significant gaseous phase.`,
    rawMd_bn: `# সেট ৬: বাস্তুসংস্থান (Ecology - ১০%)

পপুলেশন ডায়নামিক্স এবং ইকোসিস্টেমের শক্তি ও পুষ্টি প্রবাহ।

---

## ৬.১ পপুলেশন বৃদ্ধি

*   **লজিস্টিক বনাম এক্সপোনেনশিয়াল বৃদ্ধি:** 
    *   পরিবেশের সম্পদ অসীম হলে **এক্সপোনেনশিয়াল (J-shaped)** বৃদ্ধি ঘটে। 
    *   কিন্তু প্রাকৃতিক পরিবেশে রিসোর্স সীমিত হওয়ায় **লজিস্টিক (S-shaped)** বৃদ্ধি ঘটে, যা বহন ক্ষমতা বা **Carrying Capacity ($K$)** (একটি পরিবেশ সর্বোচ্চ যত প্রাণী ধারণ করতে পারে) অতিক্রম করতে পারে না।

## ৬.২ নিশ ও প্রতিযোগিতা

*   **নিশ (Niche):** একটি বাস্তুতন্ত্রে কোনো প্রজাতির নির্দিষ্ট ভূমিকা বা পেশা। এটি তার খাদ্য, বাসস্থান এবং পরিবেশের সাথে মিথস্ক্রিয়া অন্তর্ভুক্ত করে।
*   **কম্পিটিটিভ এক্সক্লুশন (Competitive Exclusion Principle):** দুটি প্রজাতি কখনোই দীর্ঘ সময় ধরে একই নিশ দখল করতে পারে না; অধিকতর যোগ্য প্রজাতিটি অন্যটিকে হটিয়ে দেয়।

## ৬.৩ পুষ্টি চক্র

বাস্তুতন্ত্রে শক্তি একমুখী প্রবাহিত হলেও পুষ্টি উপাদানগুলো চক্রাকারে ঘোরে (যেমন- কার্বন চক্র, নাইট্রোজেন চক্র, ফসফরাস চক্র)।`
  },
  {
    id: "set7",
    title: '🔹 SET 7: BIOSYSTEMATICS (5%) - Taxonomic Identification Guide',
    rawMd_en: `# SET 7: BIOSYSTEMATICS (5%)

Biosystematics requires the identification and classification of specific taxa based on evolutionary relationships. The IBO emphasizes the use of dichotomous keys and morphological characters for specific genera.

---

## 7.1 DICHOTOMOUS IDENTIFICATION GUIDE

The following guide facilitates the identification of the representative genera required by the IBO Theoretical Syllabus:

### 🔬 Unicellular Organisms
| Genus | Kingdom/Domain | Diagnostic Features |
| :--- | :--- | :--- |
| ***Chlamydomonas*** | Protista (Green Algae) | Autotrophic, biflagellated, possesses a cup-shaped chloroplast. |
| ***Rhizobium*** | Bacteria | Heterotrophic, nitrogen-fixing bacterium; often forms symbiotic root nodules in legumes. |

### 🍄 Fungi & Plants (Multicellular)
| Genus | Kingdom | Diagnostic Features |
| :--- | :--- | :--- |
| ***Penicillium*** | Fungi | Filamentous mold characterized by brush-like conidiophores. |
| ***Polytrichum*** | Plantae (Bryophyte) | Non-vascular plant with a dominant gametophyte generation. |
| ***Pinus*** | Plantae (Gymnosperm) | Vascular, seed-producing plant with needle-like leaves and reproductive cones. |
| ***Magnolia*** | Plantae (Angiosperm) | Vascular, seed-producing plant with large flowers and primitive floral features (spiral arrangement). |

### 🐾 Animals (Heterotrophic, no cell walls)
| Genus | Phylum/Class | Diagnostic Features |
| :--- | :--- | :--- |
| ***Lumbricus*** | Annelida | Invertebrate, segmented earthworm moving via setae. |
| ***Drosophila*** | Arthropoda (Insecta) | Dipteran insect (fruit fly), commonly used in genetic studies. |
| ***Rana*** | Chordata (Amphibia) | Vertebrate amphibian, tailless adult (frog) with moist permeable skin. |
| ***Rattus*** | Chordata (Mammalia) | Vertebrate mammal, rodent characterized by hair and mammary glands. |`,
    rawMd_bn: `# সেট ৭: শ্রেণিবিন্যাসতত্ত্ব (Biosystematics - ৫%)

নির্দিষ্ট গণের (Genus) সনাক্তকারী বৈশিষ্ট্য এবং বিবর্তনীয় সম্পর্ক বিশ্লেষণ।

---

## ৭.১ নির্দিষ্ট গণ সনাক্তকরণ সারণি

| গণ (Genus) | সনাক্তকারী বৈশিষ্ট্য (Diagnostic Features) |
| :--- | :--- |
| ***Chlamydomonas*** | এককোষী সবুজ শৈবাল, দুটি ফ্ল্যাজেলা এবং কাপ-আকৃতির ক্লোরোপ্লাস্ট যুক্ত। |
| ***Rhizobium*** | গ্রাম-নেগেটিভ ব্যাকটেরিয়া, মটর জাতীয় গাছের মূলে নডিউল (গুটিকা) তৈরি করে। |
| ***Penicillium*** | বহুকোষী ছত্রাক, যার কনিডিওফোর দেখতে ব্রাশের মতো (Conidia বিন্যাস)। |
| ***Polytrichum*** | উন্নত মস, যার গ্যামেটোফাইট কাণ্ড ও পাতার মতো অংশে বিভক্ত। |
| ***Pinus*** | ব্যক্তিবীজী উদ্ভিদ, সূঁচালো পাতা (Needle-like leaves) এবং কোন (Cone) বহন করে। |
| ***Magnolia*** | আদিম আবৃতবীজী উদ্ভিদ, বড় ফুল এবং সর্পিলাকার (Spiral) পুষ্পপত্র বিন্যাস। |
| ***Lumbricus*** | কেঁচো, যার দেহ খণ্ডিত (Segmented) এবং সিটা (Setae) দিয়ে চলাচল করে। |
| ***Drosophila*** | ফলের মাছি, লাল চোখ এবং দেহে স্পষ্ট খণ্ডায়ন দেখা যায়। |
| ***Rana*** | ব্যাঙ, সিক্ত ত্বক এবং ল্যাজবিহীন উভচর। |
| ***Rattus*** | ইঁদুর, স্তন্যপায়ী প্রাণী, বড় ইনসাইজর দাঁত এবং লোমযুক্ত দেহ। |`
  }
];
