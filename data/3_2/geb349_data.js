/**
 * GEB 349 - BIOENERGETICS
 * Dataset generated from bioenergetics/sm study/set_ans.txt
 * Last Updated: 2026-04-26
 */

const geb349_sets = [
  {
    id: "set1",
    title: "SET 1: Bioenergetics Fundamentals — Definitions & High-Energy Compounds",
    rawMd_en: `### ★ SET 1: Bioenergetics Fundamentals — Definitions & High-Energy Compounds

#### Cluster 1.1: Definition of Bioenergetics & Metabolism Correlation
**Q: What do you mean by bioenergetics? How will you correlate bioenergetics with metabolism of biomolecules? [2022, 1+4 Marks] ★**

| Concept | Explanation |
| :--- | :--- |
| **Bioenergetics** | The study of **energy transductions** (শক্তির রূপান্তর)—changes of one form of energy into another—that occur in living cells. |
| **Metabolism Correlation** | Bioenergetics describes how cells extract energy from surroundings (nutrients) and use it to maintain life. ["Energy is conserved in high-energy phosphate bonds (ATP, GTP) and reducing coenzymes (NADH, FADH<sub>2</sub>)"] |

**Correlation Framework (Exam-Ready):**
1.  **Catabolism = Energy Harvest (Exergonic):** Carbohydrates, lipids, and proteins are broken down to smaller molecules, releasing usable energy with ΔG < 0. Electrons are captured as NADH/FADH<sub>2</sub> and finally converted to ATP through <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> and oxidative phosphorylation.
2.  **Anabolism = Energy Investment (Endergonic):** Biosynthesis of proteins, nucleic acids, and polysaccharides requires energy input (ΔG > 0), so these reactions are non-spontaneous unless coupled.
3.  **ATP Coupling Bridge:** Cells connect exergonic and endergonic pathways via ATP hydrolysis:
    ATP -> ADP + P<sub>i</sub>  (ΔG°' ≈ -7.3 kcal/mol)
    This coupling makes overall biosynthetic work thermodynamically favorable.
4.  **Metabolic Flux Regulation:** ATP/ADP/AMP ratio (energy charge) controls pathway direction. High ADP/AMP signals low-energy state and stimulates catabolism; high ATP favors anabolic storage/repair processes.
5.  **Thermodynamic Basis:** By the first law, nutrient energy is transformed (not created); by the second law, oxidation to CO<sub>2</sub> and H<sub>2</sub>O increases entropy of surroundings while maintaining cellular order.

| Feature | Catabolism | Anabolism |
| :--- | :--- | :--- |
| Molecular Direction | Breakdown of carbs/fats/proteins | Synthesis of macromolecules |
| Energy Signature | Exergonic (ΔG < 0) | Endergonic (ΔG > 0) |
| Major Bioenergetic Output/Input | ATP + NADH/FADH<sub>2</sub> produced | ATP/NADPH consumed |
| Functional Correlation | Powers biosynthesis and transport | Depends on catabolic energy supply |

**Structural Correlation (from slides):** Outer mitochondrial membrane has porins (permeable to small solutes), but inner membrane is highly protein-rich and largely impermeable to ions like H<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>; this specialization preserves <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> and supports ATP synthesis.

---

#### Cluster 1.2: Gibbs Free Energy & Thermodynamics
**Q: Define Gibbs free energy, enthalpy, and entropy. Explain the equation ΔG° = -RT ln K'_eq. [2014, 4.5+6 Marks]**

*   **Gibbs Free Energy (ΔG):** The amount of energy absolutely available to do work during a reaction at constant temperature and pressure ["ΔG = ΔH − TΔS"].
*   **Enthalpy (H):** The heat content of the reacting system (বিক্রিয়ার তাপীয় মান) ["ΔH > 0 is endothermic; ΔH < 0 is exothermic"].
*   **Entropy (S):** A quantitative expression for the randomness or disorder in a system (বিশৃঙ্খলা) ["ΔS increases for spontaneous processes"].

**The Equation Reasoning:**
The standard free-energy change (ΔG°) of a chemical reaction is a thermodynamic constant that relates to the **equilibrium constant** (K'_eq).
*   If K'_eq > 1, ΔG° is **negative** (reaction proceeds forward).
*   If K'_eq < 1, ΔG° is **positive** (reaction tends to go backward).
*   **Key Numerical:** R = 8.314  J/mol.K; T = 298  K (Standard temp).
*   **Exam add-on:** Under cellular (non-standard) conditions, use ΔG = ΔG°' + RT ln Q.

---

#### Cluster 1.3: High-Energy Compounds (HEC)
**Q: Define high energy compounds. Discuss the types of HEC with examples and ΔG values. [2022, 1+5 Marks] ★**

High-energy compounds (HEC) are energy-rich molecules that, upon hydrolysis, produce free energy greater than or equal to that of ATP (ΔG = -7.3  kcal/mol or -30.5  kJ/mol).

| Type | Example | ΔG°' (kcal/mol) | Bond Nature |
| :--- | :--- | :--- | :--- |
| **Pyrophosphates** | ATP | -7.3 | Phosphoanhydride bonds (অ্যাসিড অ্যানহাইড্রাইড) ["resonance stabilization of products"]. |
| **Acyl Phosphates** | 1,3-Bisphosphoglycerate | -11.8 | Carboxylic acid + Phosphate group ["most energetic; used directly in glycolysis"]. |
| **Enol Phosphates** | Phosphoenolpyruvate (PEP) | -14.8 | Phosphate + double-bonded carbon hydroxyl ["enolate tautomerization releases energy"]. |
| **Thiol Phosphates** | Acetyl CoA | -7.7 | Thioester bond (থায়ো-এস্টার), contains sulfur ["activates acetyl group; drives biosynthesis"]. |
| **Phosphagens** | Phosphocreatine | -10.3 | Guanidine phosphate bond (গুয়ানিডিন) ["rapid ATP regeneration in muscle"]. |

**Why these are high-energy (extra scoring line):** Hydrolysis products are stabilized by resonance, ionization, and reduced electrostatic repulsion.

**Q: What are high energy compounds? Discuss exergonic and endergonic reactions. [2023, 1+2 Marks]**

**High-energy compounds:** Molecules with high group-transfer potential whose hydrolysis gives large negative free energy (comparable to or greater than ATP).

**Exergonic vs Endergonic (exam wording):**
1.  **Exergonic reaction:** Releases free energy, so ΔG is negative (for example ATP hydrolysis, NADH oxidation).
2.  **Endergonic reaction:** Requires energy input, so ΔG is positive (for example biosynthesis, active transport).
3.  **Biological coupling:** Cells drive endergonic reactions by coupling them to exergonic ATP hydrolysis ["Group-transfer coupling is more controlled than direct heat release"].

---`,
    rawMd_bn: `### বাংলা নোট (ইংরেজি কনটেন্ট মিরর)

### ★ SET 1: Bioenergetics Fundamentals — Definitions & High-Energy Compounds

#### Cluster 1.1: Definition of Bioenergetics & Metabolism Correlation
**Q: What do you mean by bioenergetics? How will you correlate bioenergetics with metabolism of biomolecules? [2022, 1+4 Marks] ★**

| Concept | Explanation |
| :--- | :--- |
| **Bioenergetics** | The study of **energy transductions** (শক্তির রূপান্তর)—changes of one form of energy into another—that occur in living cells. |
| **Metabolism Correlation** | Bioenergetics describes how cells extract energy from surroundings (nutrients) and use it to maintain life. ["Energy is conserved in high-energy phosphate bonds (ATP, GTP) and reducing coenzymes (NADH, FADH<sub>2</sub>)"] |

**Correlation Framework (Exam-Ready):**
1.  **Catabolism = Energy Harvest (Exergonic):** Carbohydrates, lipids, and proteins are broken down to smaller molecules, releasing usable energy with ΔG < 0. Electrons are captured as NADH/FADH<sub>2</sub> and finally converted to ATP through <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> and oxidative phosphorylation.
2.  **Anabolism = Energy Investment (Endergonic):** Biosynthesis of proteins, nucleic acids, and polysaccharides requires energy input (ΔG > 0), so these reactions are non-spontaneous unless coupled.
3.  **ATP Coupling Bridge:** Cells connect exergonic and endergonic pathways via ATP hydrolysis:
    ATP -> ADP + P<sub>i</sub>  (ΔG°' ≈ -7.3 kcal/mol)
    This coupling makes overall biosynthetic work thermodynamically favorable.
4.  **Metabolic Flux Regulation:** ATP/ADP/AMP ratio (energy charge) controls pathway direction. High ADP/AMP signals low-energy state and stimulates catabolism; high ATP favors anabolic storage/repair processes.
5.  **Thermodynamic Basis:** By the first law, nutrient energy is transformed (not created); by the second law, oxidation to CO<sub>2</sub> and H<sub>2</sub>O increases entropy of surroundings while maintaining cellular order.

| Feature | Catabolism | Anabolism |
| :--- | :--- | :--- |
| Molecular Direction | Breakdown of carbs/fats/proteins | Synthesis of macromolecules |
| Energy Signature | Exergonic (ΔG < 0) | Endergonic (ΔG > 0) |
| Major Bioenergetic Output/Input | ATP + NADH/FADH<sub>2</sub> produced | ATP/NADPH consumed |
| Functional Correlation | Powers biosynthesis and transport | Depends on catabolic energy supply |

**Structural Correlation (from slides):** Outer mitochondrial membrane has porins (permeable to small solutes), but inner membrane is highly protein-rich and largely impermeable to ions like H<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>; this specialization preserves <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> and supports ATP synthesis.

---

#### Cluster 1.2: Gibbs Free Energy & Thermodynamics
**Q: Define Gibbs free energy, enthalpy, and entropy. Explain the equation ΔG° = -RT ln K'_eq. [2014, 4.5+6 Marks]**

*   **Gibbs Free Energy (ΔG):** The amount of energy absolutely available to do work during a reaction at constant temperature and pressure ["ΔG = ΔH − TΔS"].
*   **Enthalpy (H):** The heat content of the reacting system (বিক্রিয়ার তাপীয় মান) ["ΔH > 0 is endothermic; ΔH < 0 is exothermic"].
*   **Entropy (S):** A quantitative expression for the randomness or disorder in a system (বিশৃঙ্খলা) ["ΔS increases for spontaneous processes"].

**The Equation Reasoning:**
The standard free-energy change (ΔG°) of a chemical reaction is a thermodynamic constant that relates to the **equilibrium constant** (K'_eq).
*   If K'_eq > 1, ΔG° is **negative** (reaction proceeds forward).
*   If K'_eq < 1, ΔG° is **positive** (reaction tends to go backward).
*   **Key Numerical:** R = 8.314  J/mol.K; T = 298  K (Standard temp).
*   **Exam add-on:** Under cellular (non-standard) conditions, use ΔG = ΔG°' + RT ln Q.

---

#### Cluster 1.3: High-Energy Compounds (HEC)
**Q: Define high energy compounds. Discuss the types of HEC with examples and ΔG values. [2022, 1+5 Marks] ★**

High-energy compounds (HEC) are energy-rich molecules that, upon hydrolysis, produce free energy greater than or equal to that of ATP (ΔG = -7.3  kcal/mol or -30.5  kJ/mol).

| Type | Example | ΔG°' (kcal/mol) | Bond Nature |
| :--- | :--- | :--- | :--- |
| **Pyrophosphates** | ATP | -7.3 | Phosphoanhydride bonds (অ্যাসিড অ্যানহাইড্রাইড) ["resonance stabilization of products"]. |
| **Acyl Phosphates** | 1,3-Bisphosphoglycerate | -11.8 | Carboxylic acid + Phosphate group ["most energetic; used directly in glycolysis"]. |
| **Enol Phosphates** | Phosphoenolpyruvate (PEP) | -14.8 | Phosphate + double-bonded carbon hydroxyl ["enolate tautomerization releases energy"]. |
| **Thiol Phosphates** | Acetyl CoA | -7.7 | Thioester bond (থায়ো-এস্টার), contains sulfur ["activates acetyl group; drives biosynthesis"]. |
| **Phosphagens** | Phosphocreatine | -10.3 | Guanidine phosphate bond (গুয়ানিডিন) ["rapid ATP regeneration in muscle"]. |

**Why these are high-energy (extra scoring line):** Hydrolysis products are stabilized by resonance, ionization, and reduced electrostatic repulsion.

**Q: What are high energy compounds? Discuss exergonic and endergonic reactions. [2023, 1+2 Marks]**

**High-energy compounds:** Molecules with high group-transfer potential whose hydrolysis gives large negative free energy (comparable to or greater than ATP).

**Exergonic vs Endergonic (exam wording):**
1.  **Exergonic reaction:** Releases free energy, so ΔG is negative (for example ATP hydrolysis, NADH oxidation).
2.  **Endergonic reaction:** Requires energy input, so ΔG is positive (for example biosynthesis, active transport).
3.  **Biological coupling:** Cells drive endergonic reactions by coupling them to exergonic ATP hydrolysis ["Group-transfer coupling is more controlled than direct heat release"].

---`
  },
  {
    id: "set2",
    title: "SET 2: ATP — Energy Currency and Regulation",
    rawMd_en: `### ★ SET 2: ATP — Energy Currency and Regulation

#### Cluster 2.1: ATP as Energy Currency & <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span> Protein
**Q: "ATP is the cell's energy currency" — explain. How does <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span> inhibitory protein prevent ATP hydrolysis during ischemia? [2023, 2+4 Marks] ★**

**ATP as Currency:**
ATP serves as the link between exergonic catabolic reactions and endergonic anabolic work. It is not a long-term storage form but a **universal intermediate** that can be "spent" immediately for muscle contraction, active transport, and biosynthesis.

**Slide-linked context:** ATP demand-response is continuous; ATP is regenerated rapidly by oxidative phosphorylation in mitochondria rather than stored in large amounts.

**<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span> and Ischemia (রক্তস্বল্পতা / lack of oxygen):**
1.  **The Crisis:** During ischemia, oxygen supply stops, collapsing the **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Proton-Motive Force</span> (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>)**. Without <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>, <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> might reverse and consume (hydrolyze) ATP.
2.  **Activation:** Lack of O<sub>2</sub> forces anaerobic glycolysis, which produces lactic acid, lowering cellular **pH to < 6.5**.
3.  **Mechanism:** Low pH triggers **<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span>** to form a **dimer** (ডাইমার / pair). This dimer binds simultaneously to two <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> molecules, blocking their ATPase activity and saving cellular ATP.

---

#### Cluster 2.2: Na+/K+-ATPase Pump
**Q: How does the sodium-potassium pump transport ions across the membrane with ATP energy? [2016, 2017, 5.5 Marks]**

The Na<sup>+</sup>/K<sup>+</sup>-ATPase is a **P-type ATPase** (found in the cytoplasmic membrane) that uses the energy of ATP hydrolysis to maintain electrochemical gradients.

1.  **Process:** It moves **3 Na<sup>+</sup> ions** out of the cell and **2 K<sup>+</sup> ions** into the cell against their concentration gradients.
2.  **Coupling:** The hydrolysis of ATP provides the energy needed for the protein to change shape (conformational change) to move the ions.
3.  **Energy Value:** ATP hydrolysis releases **-7.3 kcal/mol** which is controlled by the enzyme to drive this "uphill" transport.
4.  **Physiology line for marks:** Because 3 positive charges leave and only 2 enter, the pump is **electrogenic** and helps maintain resting membrane potential.

---

### 💡 Exam Tips: Why/Why Not?

*   **Why is ATP unstable?** The three phosphate groups are negatively charged and repel each other (নিউক্লিয়ার বিকর্ষণ). This repulsion makes the bonds inherently unstable and easy to break, releasing energy.
*   **Why choose group transfer over simple hydrolysis?** ATP usually provides energy by transferring its **gamma-phosphate** (gamma-phosphate) to a substrate (phosphoryl transfer) via **kinase** enzymes. This energizes the substrate instead of just releasing wasted heat.
*   **Student Mistake Alert:** In Cluster 1.3, do not forget **Thiol Phosphates** (like Acetyl CoA). Even though they don't have a phosphate-to-phosphate bond, they are high-energy due to the **Thioester bond**.
*   **Bangla Key Terms:** 
    *   *Exergonic:* তাপমোচী/শক্তি-মুক্তকারী বিক্রিয়া.
    *   *Endergonic:* তাপশোষী/শক্তি-প্রয়োজন বিক্রিয়া.
    *   *Ischemia:* কলায় রক্ত সঞ্চালনের অভাব.


Here are the exam-ready solutions for **SET 3** and **SET 4** of your Bioenergetics course.

---`,
    rawMd_bn: `### বাংলা নোট (ইংরেজি কনটেন্ট মিরর)

### ★ SET 2: ATP — Energy Currency and Regulation

#### Cluster 2.1: ATP as Energy Currency & <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span> Protein
**Q: "ATP is the cell's energy currency" — explain. How does <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span> inhibitory protein prevent ATP hydrolysis during ischemia? [2023, 2+4 Marks] ★**

**ATP as Currency:**
ATP serves as the link between exergonic catabolic reactions and endergonic anabolic work. It is not a long-term storage form but a **universal intermediate** that can be "spent" immediately for muscle contraction, active transport, and biosynthesis.

**Slide-linked context:** ATP demand-response is continuous; ATP is regenerated rapidly by oxidative phosphorylation in mitochondria rather than stored in large amounts.

**<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span> and Ischemia (রক্তস্বল্পতা / lack of oxygen):**
1.  **The Crisis:** During ischemia, oxygen supply stops, collapsing the **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Proton-Motive Force</span> (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>)**. Without <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>, <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> might reverse and consume (hydrolyze) ATP.
2.  **Activation:** Lack of O<sub>2</sub> forces anaerobic glycolysis, which produces lactic acid, lowering cellular **pH to < 6.5**.
3.  **Mechanism:** Low pH triggers **<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span>** to form a **dimer** (ডাইমার / pair). This dimer binds simultaneously to two <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> molecules, blocking their ATPase activity and saving cellular ATP.

---

#### Cluster 2.2: Na+/K+-ATPase Pump
**Q: How does the sodium-potassium pump transport ions across the membrane with ATP energy? [2016, 2017, 5.5 Marks]**

The Na<sup>+</sup>/K<sup>+</sup>-ATPase is a **P-type ATPase** (found in the cytoplasmic membrane) that uses the energy of ATP hydrolysis to maintain electrochemical gradients.

1.  **Process:** It moves **3 Na<sup>+</sup> ions** out of the cell and **2 K<sup>+</sup> ions** into the cell against their concentration gradients.
2.  **Coupling:** The hydrolysis of ATP provides the energy needed for the protein to change shape (conformational change) to move the ions.
3.  **Energy Value:** ATP hydrolysis releases **-7.3 kcal/mol** which is controlled by the enzyme to drive this "uphill" transport.
4.  **Physiology line for marks:** Because 3 positive charges leave and only 2 enter, the pump is **electrogenic** and helps maintain resting membrane potential.

---

### 💡 Exam Tips: Why/Why Not?

*   **Why is ATP unstable?** The three phosphate groups are negatively charged and repel each other (নিউক্লিয়ার বিকর্ষণ). This repulsion makes the bonds inherently unstable and easy to break, releasing energy.
*   **Why choose group transfer over simple hydrolysis?** ATP usually provides energy by transferring its **gamma-phosphate** (gamma-phosphate) to a substrate (phosphoryl transfer) via **kinase** enzymes. This energizes the substrate instead of just releasing wasted heat.
*   **Student Mistake Alert:** In Cluster 1.3, do not forget **Thiol Phosphates** (like Acetyl CoA). Even though they don't have a phosphate-to-phosphate bond, they are high-energy due to the **Thioester bond**.
*   **Bangla Key Terms:** 
    *   *Exergonic:* তাপমোচী/শক্তি-মুক্তকারী বিক্রিয়া.
    *   *Endergonic:* তাপশোষী/শক্তি-প্রয়োজন বিক্রিয়া.
    *   *Ischemia:* কলায় রক্ত সঞ্চালনের অভাব.


Here are the exam-ready solutions for **SET 3** and **SET 4** of your Bioenergetics course.

---`
  },
  {
    id: "set3",
    title: "SET 3: Biological Oxidation-Reduction — Redox Reactions & Electron Carriers",
    rawMd_en: `### ★ SET 3: Biological Oxidation-Reduction — Redox Reactions & Electron Carriers

#### Cluster 3.1: Biological Redox & Enzymes
**Q: Briefly describe the enzymes involved in biological oxidation-reduction reactions. [2023, 5 Marks] ★**

Enzymes catalyzing redox reactions are known as **Oxidoreductases** (অক্সিডোরিডাকটেজ). They are categorized based on their substrate and electron acceptor involvement:

| Enzyme Class | Primary Function | Key Features | Typical Reaction (HTML Rendered) |
| :--- | :--- | :--- | :--- |
| **Oxidases** (অক্সিডেজ) | Use molecular O<sub>2</sub> as a hydrogen/electron acceptor. | Form H<sub>2</sub>O or H<sub>2</sub>O<sub>2</sub> (হাইড্রোজেন পারক্সাইড); include Cytochrome oxidase, the terminal <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> component. | AH<sub>2</sub> + 1/2 O<sub>2</sub> -> A + H<sub>2</sub>O  (or AH<sub>2</sub> + O<sub>2</sub> -> A + H<sub>2</sub>O<sub>2</sub>) |
| **Dehydrogenases** (ডিহাইড্রোজেনেজ) | Transfer hydrogen from one substrate to another in coupled reactions. | Cannot use O<sub>2</sub> as an acceptor; use coenzymes like NAD<sup>+</sup> (pyridine-linked) or FMN/FAD (flavin-linked). | AH<sub>2</sub> + NAD<sup>+</sup> -> A + NADH + H<sup>+</sup> |
| **Hydroperoxidases** (হাইডরোপেরক্সিডেজ) | Use H<sub>2</sub>O<sub>2</sub> as a substrate to neutralize free radicals. | Include **Catalase** (ক্যাটালেজ) and **Peroxidases**; found heavily in peroxisomes. | Catalase: 2 H<sub>2</sub>O<sub>2</sub> -> 2 H<sub>2</sub>O + O<sub>2</sub>; Peroxidase: ROOH + 2 H<sup>+</sup> + 2 e<sup>-</sup> -> ROH + H<sub>2</sub>O |
| **Oxygenases** (অক্সিজেনেজ) | Catalyze the direct transfer and incorporation of O<sub>2</sub> into a substrate. | Divided into Dioxygenases (incorporate both O atoms) and Monooxygenases (incorporate one O atom). | Dioxygenase: A + O<sub>2</sub> -> AO<sub>2</sub>; Monooxygenase: RH + O<sub>2</sub> + NADPH + H<sup>+</sup> -> ROH + H<sub>2</sub>O + NADP<sup>+</sup> |

**Logical Reasoning (Why/Why not):** 
*   **Why use Dehydrogenases in respiration?** They allow the energy from nutrient oxidation to be captured in mobile carriers (NADH/FADH2) rather than being released instantly as heat.
*   **Why use Hydroperoxidases?** Partial reduction of O<sub>2</sub> creates toxic Reactive Oxygen Species (<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span>); these enzymes protect cells by converting H<sub>2</sub>O<sub>2</sub> to H<sub>2</sub>O.

**Q: How does electron transfer occur from one molecule to another? [2022, 4 Marks]**

Electron transfer occurs through ordered redox pairs where the donor is oxidized and the acceptor is reduced.

1.  **Two-half-reaction concept:**
    *   Oxidation: donor loses electrons.
    *   Reduction: acceptor gains electrons.
2.  **Carrier sequence in cells:** NADH/FADH<sub>2</sub> -> flavins/Fe-S -> CoQ -> cytochromes -> O<sub>2</sub>.
3.  **Driving force:** Electrons flow spontaneously from lower to higher standard reduction potential (E°') ["Positive DeltaE°' gives negative DeltaG°'"]
4.  **Biological significance:** Stepwise transfer conserves energy for proton pumping instead of releasing all energy as heat at once.

---

#### Cluster 3.2: Electron Carriers — Mode of Action
**Q: Illustrate the mode of action of NAD+, FMN, and Coenzyme Q. [2016, 2x3 Marks]**

1.  **NAD+ (Nicotinamide Adenine Dinucleotide):** It acts as a soluble electron "escort". It accepts a hydride ion (H<sup>-</sup>, which has 2 electrons and 1 proton) from a substrate, becoming NADH while a second proton is released into the medium.
2.  **FMN (Flavin Mononucleotide):** It is a protein-bound prosthetic group. It undergoes reversible reduction by accepting one or two hydrogen atoms (H<sup>•</sup>). Accepting one H forms a stable **semiquinone** (সেমিকুইনোন / free radical) while two H form FMNH_2.
3.  **Coenzyme Q (Ubiquinone):** A small, fat-soluble, mobile carrier with a long isoprenoid tail. It can exist in three states: fully oxidized (**Ubiquinone**), semiquinone radical (**•QH**), or fully reduced (**Ubiquinol / QH<sub>2</sub>**).

**Numerical Values:** 
*   Standard reduction potential (E°): Affinity for electrons. 
*   A reaction with a **+ve ΔE°** has a **-ve ΔG°**, making it **exergonic** (শক্তি-মুক্তকারী).

---`,
    rawMd_bn: `### বাংলা নোট (ইংরেজি কনটেন্ট মিরর)

### ★ SET 3: Biological Oxidation-Reduction — Redox Reactions & Electron Carriers

#### Cluster 3.1: Biological Redox & Enzymes
**Q: Briefly describe the enzymes involved in biological oxidation-reduction reactions. [2023, 5 Marks] ★**

Enzymes catalyzing redox reactions are known as **Oxidoreductases** (অক্সিডোরিডাকটেজ). They are categorized based on their substrate and electron acceptor involvement:

| Enzyme Class | Primary Function | Key Features | Typical Reaction (HTML Rendered) |
| :--- | :--- | :--- | :--- |
| **Oxidases** (অক্সিডেজ) | Use molecular O<sub>2</sub> as a hydrogen/electron acceptor. | Form H<sub>2</sub>O or H<sub>2</sub>O<sub>2</sub> (হাইড্রোজেন পারক্সাইড); include Cytochrome oxidase, the terminal <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> component. | AH<sub>2</sub> + 1/2 O<sub>2</sub> -> A + H<sub>2</sub>O  (or AH<sub>2</sub> + O<sub>2</sub> -> A + H<sub>2</sub>O<sub>2</sub>) |
| **Dehydrogenases** (ডিহাইড্রোজেনেজ) | Transfer hydrogen from one substrate to another in coupled reactions. | Cannot use O<sub>2</sub> as an acceptor; use coenzymes like NAD<sup>+</sup> (pyridine-linked) or FMN/FAD (flavin-linked). | AH<sub>2</sub> + NAD<sup>+</sup> -> A + NADH + H<sup>+</sup> |
| **Hydroperoxidases** (হাইডরোপেরক্সিডেজ) | Use H<sub>2</sub>O<sub>2</sub> as a substrate to neutralize free radicals. | Include **Catalase** (ক্যাটালেজ) and **Peroxidases**; found heavily in peroxisomes. | Catalase: 2 H<sub>2</sub>O<sub>2</sub> -> 2 H<sub>2</sub>O + O<sub>2</sub>; Peroxidase: ROOH + 2 H<sup>+</sup> + 2 e<sup>-</sup> -> ROH + H<sub>2</sub>O |
| **Oxygenases** (অক্সিজেনেজ) | Catalyze the direct transfer and incorporation of O<sub>2</sub> into a substrate. | Divided into Dioxygenases (incorporate both O atoms) and Monooxygenases (incorporate one O atom). | Dioxygenase: A + O<sub>2</sub> -> AO<sub>2</sub>; Monooxygenase: RH + O<sub>2</sub> + NADPH + H<sup>+</sup> -> ROH + H<sub>2</sub>O + NADP<sup>+</sup> |

**Logical Reasoning (Why/Why not):** 
*   **Why use Dehydrogenases in respiration?** They allow the energy from nutrient oxidation to be captured in mobile carriers (NADH/FADH2) rather than being released instantly as heat.
*   **Why use Hydroperoxidases?** Partial reduction of O<sub>2</sub> creates toxic Reactive Oxygen Species (<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span>); these enzymes protect cells by converting H<sub>2</sub>O<sub>2</sub> to H<sub>2</sub>O.

**Q: How does electron transfer occur from one molecule to another? [2022, 4 Marks]**

Electron transfer occurs through ordered redox pairs where the donor is oxidized and the acceptor is reduced.

1.  **Two-half-reaction concept:**
    *   Oxidation: donor loses electrons.
    *   Reduction: acceptor gains electrons.
2.  **Carrier sequence in cells:** NADH/FADH<sub>2</sub> -> flavins/Fe-S -> CoQ -> cytochromes -> O<sub>2</sub>.
3.  **Driving force:** Electrons flow spontaneously from lower to higher standard reduction potential (E°') ["Positive DeltaE°' gives negative DeltaG°'"]
4.  **Biological significance:** Stepwise transfer conserves energy for proton pumping instead of releasing all energy as heat at once.

---

#### Cluster 3.2: Electron Carriers — Mode of Action
**Q: Illustrate the mode of action of NAD+, FMN, and Coenzyme Q. [2016, 2x3 Marks]**

1.  **NAD+ (Nicotinamide Adenine Dinucleotide):** It acts as a soluble electron "escort". It accepts a hydride ion (H<sup>-</sup>, which has 2 electrons and 1 proton) from a substrate, becoming NADH while a second proton is released into the medium.
2.  **FMN (Flavin Mononucleotide):** It is a protein-bound prosthetic group. It undergoes reversible reduction by accepting one or two hydrogen atoms (H<sup>•</sup>). Accepting one H forms a stable **semiquinone** (সেমিকুইনোন / free radical) while two H form FMNH_2.
3.  **Coenzyme Q (Ubiquinone):** A small, fat-soluble, mobile carrier with a long isoprenoid tail. It can exist in three states: fully oxidized (**Ubiquinone**), semiquinone radical (**•QH**), or fully reduced (**Ubiquinol / QH<sub>2</sub>**).

**Numerical Values:** 
*   Standard reduction potential (E°): Affinity for electrons. 
*   A reaction with a **+ve ΔE°** has a **-ve ΔG°**, making it **exergonic** (শক্তি-মুক্তকারী).

---`
  },
  {
    id: "set4",
    title: "SET 4: Electron Transport Chain — Complexes & Mechanisms",
    rawMd_en: `### ★ SET 4: Electron Transport Chain — Complexes & Mechanisms

#### Cluster 4.1: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> Complexes & Separation
**Q: Briefly describe the NADH-CoQ reductase complex (Complex I) and its separation process. [2023, 5+4 Marks] ★**

**Part A: Complex I (NADH Dehydrogenase):**
*   **Structure:** The largest complex (850 kDa), "L" shaped, containing 42+ polypeptide chains.
*   **Prosthetic Groups:** Contains FMN and at least 6 Iron-Sulfur (Fe-S) centers.
*   **Mechanism:** It accepts 2 electrons from NADH. Electrons flow from NADH → FMN → Fe-S centers → CoQ.
*   **Proton Pumping:** Per electron pair, it vectorially pumps **4 H<sup>+</sup>** from the matrix (N side) to the intermembrane space (P side).
*   **Inhibitors:** Blocked by **Rotenone** and **Amytal**.
*   **Direction words:** N side = matrix (negative), P side = intermembrane side (positive).

**Part B: Separation Process (Diagram Description):**
1.  Treat isolated mitochondria with the detergent **digitonin** to remove the outer membrane.
2.  Fragments of the inner membrane are obtained via **osmotic rupture**.
3.  Solubilize these fragments with a second detergent and resolve the mixture using **ion-exchange chromatography**.
4.  Result: Four distinct functional complexes (I, II, III, IV) and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> (Complex V) are isolated into different fractions.
5.  **Slide add-on:** In vitro, isolated <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> commonly shows ATPase activity unless a proper proton gradient is reconstituted.

**Q: Briefly describe the large enzyme complexes of the electron transport chain. [2022, 6 Marks]**

1.  **Complex I (NADH-CoQ reductase):** FMN + multiple Fe-S centers; transfers electrons from NADH to CoQ and pumps 4 H<sup>+</sup>.
2.  **Complex II (Succinate-CoQ reductase):** Contains FAD and Fe-S centers; transfers electrons from succinate/FADH<sub>2</sub> to CoQ; does not pump protons.
3.  **Complex III (CoQH<sub>2</sub>-cytochrome c reductase):** Contains cytochrome b, cytochrome c1 and Rieske Fe-S protein; performs <span style="background-color:#c8e6c9; padding:0 2px; border-radius:3px;">Q-cycle</span> and pumps protons.
4.  **Complex IV (Cytochrome c oxidase):** Contains heme a, a3 and CuA/CuB; transfers electrons to O<sub>2</sub> to form H<sub>2</sub>O and pumps protons.
5.  **Key integration line:** Complexes I, III, IV are proton pumps; Complex II is not ["therefore NADH yields 10 H<sup>+</sup> translocation, succinate yields 6 H<sup>+</sup>"].

---

#### Cluster 4.2: Q-Cycle & Cytochrome c Oxidase
**Q: What is the "<span style="background-color:#c8e6c9; padding:0 2px; border-radius:3px;">Q-cycle</span>"? Discuss the flow of electrons from Cyt c to O<sub>2</sub> in Complex IV. [2014, 7.5 Marks]**

**The Q-Cycle:** 
It is a mechanism in Complex III that facilitates electron transfer from a 2-electron carrier (QH<sub>2</sub>) to a 1-electron carrier (Cytochrome c). It involves a bifurcated flow (দ্বিখণ্ডিত প্রবাহ) where one electron goes to Cyt c and the other is "recycled" to reduce a second ubiquinone.

**Complex IV (Cytochrome c Oxidase):**
1.  **Carriers:** Contains 2 heme groups (Heme a, a_3) and 2 copper centers (Cu_A, Cu_B).
2.  **Path:** 4 Cyt c molecules deliver 1 electron each to Cu_A → Heme a → a_3-Cu_B binuclear center → O<sub>2</sub>.
3.  **Products:** O<sub>2</sub> is reduced to **2 H<sub>2</sub>O**.
4.  **H<sup>+</sup> Stoichiometry:** For every 4 electrons, it consumes **4 "substrate" H<sup>+</sup>** from the matrix and pumps **4 "vectorial" H<sup>+</sup>** to the P side. (Net: 2 pumped H<sup>+</sup> per electron pair).
5.  **Chain summary line:** Total translocation is about **10 H<sup>+</sup> per NADH** (Complexes I + III + IV) but **6 H<sup>+</sup> per succinate/FADH<sub>2</sub>** because Complex II does not pump protons.

---

#### Cluster 4.3: Experimental Proof (Proton Transport)
**Q: Provide experimental demonstration that electron transport is coupled to proton transport using succinate. [2023, 6 Marks] ★**

1.  **Setup:** Isolated mitochondria are suspended in a buffered medium depleted of O<sub>2</sub> but containing succinate, ADP, and P_i.
2.  **Trigger:** Injecting O<sub>2</sub> solution triggers immediate electron transport.
3.  **Observation:** The medium outside the mitochondria becomes sharply **acidic** (pH drops), as measured by a pH electrode. 
4.  **Logical Deduction:** This proves that electron flow drives protons out of the matrix into the surrounding medium.
5.  **Role of <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span> & K<sup>+</sup>:** These are added to **dissipate the voltage gradient** (বিভব পার্থক্য দূর করা) generated by H<sup>+</sup> translocation so that all pumped protons contribute clearly to the measured pH change.
6.  **Succinate vs NADH:** Succinate (FADH<sub>2</sub>) has less potential energy and bypasses Complex I; thus, it translocates only **6 H<sup>+</sup>** per electron pair compared to NADH's **10 H<sup>+</sup>**.
7.  **Exam wording tip:** Mention "smaller external acidification with succinate" to directly link observation with lower proton pumping.

**Q: Demonstrate that electron transfer from reduced cytochrome c to O<sub>2</sub> via cytochrome c oxidase is coupled to proton transport. [2022, 5 Marks]**

1.  Reconstitute purified cytochrome c oxidase (Complex IV) into liposomes with cytochrome c binding site facing outside.
2.  Add reduced cytochrome c and O<sub>2</sub>; monitor external pH.
3.  Add valinomycin + K<sup>+</sup> to dissipate membrane potential so pumped H<sup>+</sup> contributes fully to Delta pH.
4.  Observation: rapid pH drop outside vesicles (acidification), then return toward baseline as system equilibrates.
5.  Interpretation: electron transfer through Complex IV is directly coupled to proton translocation ["approximately 2 H<sup>+</sup> transported per O atom reduced"].

---

### 💡 Exam Tips: Why/Why Not? & Common Mistakes

*   **Student Mistake Alert:** Many students say Complex IV pumps 4 H<sup>+</sup> per electron pair. **Correction:** It pumps **4 H<sup>+</sup> per O<sub>2</sub> molecule reduced** (which needs 4 electrons). Per electron pair, it is **2 H<sup>+</sup>**.
*   **Why does Succinate pump fewer protons?** Electrons in FADH<sub>2</sub> have lower potential energy (43.4 kcal/mol) than NADH (52.6 kcal/mol).
*   **Memory Tip for Inhibitors:** 
    *   Complex I: **R**otenone (**R**educed NADH starts here).
    *   Complex III: **A**ntimycin A (**A**fter Ubiquinol).
    *   Complex IV: **C**yanide (**C**omplex 4 / **C**lose to O<sub>2</sub>).
*   **Bangla Key Terms:** 
    *   *Prosthetic group:* কৃত্রিম মূলক/স্থায়ীভাবে যুক্ত গ্রুপ.
    *   *Vectorial:* নির্দিষ্ট অভিমুখী.
    *   *Coupled:* সংশ্লিষ্ট/একত্রে পরিচালিত.

Here are the exam-ready solutions for SET 5 and SET 6 of your Bioenergetics course, focusing on the inhibition and mechanical synthesis of ATP.

---`,
    rawMd_bn: `### বাংলা নোট (ইংরেজি কনটেন্ট মিরর)

### ★ SET 4: Electron Transport Chain — Complexes & Mechanisms

#### Cluster 4.1: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> Complexes & Separation
**Q: Briefly describe the NADH-CoQ reductase complex (Complex I) and its separation process. [2023, 5+4 Marks] ★**

**Part A: Complex I (NADH Dehydrogenase):**
*   **Structure:** The largest complex (850 kDa), "L" shaped, containing 42+ polypeptide chains.
*   **Prosthetic Groups:** Contains FMN and at least 6 Iron-Sulfur (Fe-S) centers.
*   **Mechanism:** It accepts 2 electrons from NADH. Electrons flow from NADH → FMN → Fe-S centers → CoQ.
*   **Proton Pumping:** Per electron pair, it vectorially pumps **4 H<sup>+</sup>** from the matrix (N side) to the intermembrane space (P side).
*   **Inhibitors:** Blocked by **Rotenone** and **Amytal**.
*   **Direction words:** N side = matrix (negative), P side = intermembrane side (positive).

**Part B: Separation Process (Diagram Description):**
1.  Treat isolated mitochondria with the detergent **digitonin** to remove the outer membrane.
2.  Fragments of the inner membrane are obtained via **osmotic rupture**.
3.  Solubilize these fragments with a second detergent and resolve the mixture using **ion-exchange chromatography**.
4.  Result: Four distinct functional complexes (I, II, III, IV) and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> (Complex V) are isolated into different fractions.
5.  **Slide add-on:** In vitro, isolated <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> commonly shows ATPase activity unless a proper proton gradient is reconstituted.

**Q: Briefly describe the large enzyme complexes of the electron transport chain. [2022, 6 Marks]**

1.  **Complex I (NADH-CoQ reductase):** FMN + multiple Fe-S centers; transfers electrons from NADH to CoQ and pumps 4 H<sup>+</sup>.
2.  **Complex II (Succinate-CoQ reductase):** Contains FAD and Fe-S centers; transfers electrons from succinate/FADH<sub>2</sub> to CoQ; does not pump protons.
3.  **Complex III (CoQH<sub>2</sub>-cytochrome c reductase):** Contains cytochrome b, cytochrome c1 and Rieske Fe-S protein; performs <span style="background-color:#c8e6c9; padding:0 2px; border-radius:3px;">Q-cycle</span> and pumps protons.
4.  **Complex IV (Cytochrome c oxidase):** Contains heme a, a3 and CuA/CuB; transfers electrons to O<sub>2</sub> to form H<sub>2</sub>O and pumps protons.
5.  **Key integration line:** Complexes I, III, IV are proton pumps; Complex II is not ["therefore NADH yields 10 H<sup>+</sup> translocation, succinate yields 6 H<sup>+</sup>"].

---

#### Cluster 4.2: Q-Cycle & Cytochrome c Oxidase
**Q: What is the "<span style="background-color:#c8e6c9; padding:0 2px; border-radius:3px;">Q-cycle</span>"? Discuss the flow of electrons from Cyt c to O<sub>2</sub> in Complex IV. [2014, 7.5 Marks]**

**The Q-Cycle:** 
It is a mechanism in Complex III that facilitates electron transfer from a 2-electron carrier (QH<sub>2</sub>) to a 1-electron carrier (Cytochrome c). It involves a bifurcated flow (দ্বিখণ্ডিত প্রবাহ) where one electron goes to Cyt c and the other is "recycled" to reduce a second ubiquinone.

**Complex IV (Cytochrome c Oxidase):**
1.  **Carriers:** Contains 2 heme groups (Heme a, a_3) and 2 copper centers (Cu_A, Cu_B).
2.  **Path:** 4 Cyt c molecules deliver 1 electron each to Cu_A → Heme a → a_3-Cu_B binuclear center → O<sub>2</sub>.
3.  **Products:** O<sub>2</sub> is reduced to **2 H<sub>2</sub>O**.
4.  **H<sup>+</sup> Stoichiometry:** For every 4 electrons, it consumes **4 "substrate" H<sup>+</sup>** from the matrix and pumps **4 "vectorial" H<sup>+</sup>** to the P side. (Net: 2 pumped H<sup>+</sup> per electron pair).
5.  **Chain summary line:** Total translocation is about **10 H<sup>+</sup> per NADH** (Complexes I + III + IV) but **6 H<sup>+</sup> per succinate/FADH<sub>2</sub>** because Complex II does not pump protons.

---

#### Cluster 4.3: Experimental Proof (Proton Transport)
**Q: Provide experimental demonstration that electron transport is coupled to proton transport using succinate. [2023, 6 Marks] ★**

1.  **Setup:** Isolated mitochondria are suspended in a buffered medium depleted of O<sub>2</sub> but containing succinate, ADP, and P_i.
2.  **Trigger:** Injecting O<sub>2</sub> solution triggers immediate electron transport.
3.  **Observation:** The medium outside the mitochondria becomes sharply **acidic** (pH drops), as measured by a pH electrode. 
4.  **Logical Deduction:** This proves that electron flow drives protons out of the matrix into the surrounding medium.
5.  **Role of <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span> & K<sup>+</sup>:** These are added to **dissipate the voltage gradient** (বিভব পার্থক্য দূর করা) generated by H<sup>+</sup> translocation so that all pumped protons contribute clearly to the measured pH change.
6.  **Succinate vs NADH:** Succinate (FADH<sub>2</sub>) has less potential energy and bypasses Complex I; thus, it translocates only **6 H<sup>+</sup>** per electron pair compared to NADH's **10 H<sup>+</sup>**.
7.  **Exam wording tip:** Mention "smaller external acidification with succinate" to directly link observation with lower proton pumping.

**Q: Demonstrate that electron transfer from reduced cytochrome c to O<sub>2</sub> via cytochrome c oxidase is coupled to proton transport. [2022, 5 Marks]**

1.  Reconstitute purified cytochrome c oxidase (Complex IV) into liposomes with cytochrome c binding site facing outside.
2.  Add reduced cytochrome c and O<sub>2</sub>; monitor external pH.
3.  Add valinomycin + K<sup>+</sup> to dissipate membrane potential so pumped H<sup>+</sup> contributes fully to Delta pH.
4.  Observation: rapid pH drop outside vesicles (acidification), then return toward baseline as system equilibrates.
5.  Interpretation: electron transfer through Complex IV is directly coupled to proton translocation ["approximately 2 H<sup>+</sup> transported per O atom reduced"].

---

### 💡 Exam Tips: Why/Why Not? & Common Mistakes

*   **Student Mistake Alert:** Many students say Complex IV pumps 4 H<sup>+</sup> per electron pair. **Correction:** It pumps **4 H<sup>+</sup> per O<sub>2</sub> molecule reduced** (which needs 4 electrons). Per electron pair, it is **2 H<sup>+</sup>**.
*   **Why does Succinate pump fewer protons?** Electrons in FADH<sub>2</sub> have lower potential energy (43.4 kcal/mol) than NADH (52.6 kcal/mol).
*   **Memory Tip for Inhibitors:** 
    *   Complex I: **R**otenone (**R**educed NADH starts here).
    *   Complex III: **A**ntimycin A (**A**fter Ubiquinol).
    *   Complex IV: **C**yanide (**C**omplex 4 / **C**lose to O<sub>2</sub>).
*   **Bangla Key Terms:** 
    *   *Prosthetic group:* কৃত্রিম মূলক/স্থায়ীভাবে যুক্ত গ্রুপ.
    *   *Vectorial:* নির্দিষ্ট অভিমুখী.
    *   *Coupled:* সংশ্লিষ্ট/একত্রে পরিচালিত.

Here are the exam-ready solutions for SET 5 and SET 6 of your Bioenergetics course, focusing on the inhibition and mechanical synthesis of ATP.

---`
  },
  {
    id: "set5",
    title: "SET 5: Inhibitors, Uncouplers & Special Proteins",
    rawMd_en: `### ★ SET 5: Inhibitors, Uncouplers & Special Proteins

#### Cluster 5.1: Inhibitors of <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> & <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>
**Q: Mention two inhibitors each of electron transfer and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> with mode of action. [2023, 2 Marks] ★**

| Inhibitor Type | Example | Target Site | Mode of Action (কার্যপদ্ধতি) |
| :--- | :--- | :--- | :--- |
| **Electron Transfer** | **Rotenone** | Complex I | Prevents electron transfer from Fe-S centers to Ubiquinone (CoQ). |
| | **Cyanide (CN<sup>-</sup>)** | Complex IV | Reacts with the ferric (Fe<sup>3+</sup>) form of Heme a_3, stopping O<sub>2</sub> reduction. |
| **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>** | **Oligomycin** | F_o subunit | Blocks the proton channel, preventing the influx of H<sup>+</sup> into the matrix. |
| | **DCCD** | F_o subunit | Covalently binds to the c-ring, stopping rotation and H<sup>+</sup> flow. |

**Extra common <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> inhibitor (optional to mention):** **Antimycin A** blocks Complex III (cytochrome b to cytochrome c_1).

**Logical Reasoning (Recovery):**
*   **Rotenone Recovery:** If <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> is blocked at Complex I, it can be "recovered" by adding **Succinate**. Succinate donates electrons to Complex II, bypassing the block at Complex I to reach CoQ.
*   **Antimycin A:** It blocks Complex III. Adding **Ascorbate** can rescue the chain because it donates electrons directly to Cytochrome c, bypassing Complex III.

**Q: Provide evidence that inhibitors of electron flow to O<sub>2</sub> block ATP synthesis in intact mitochondria. [2022, 6 Marks]**

1.  Prepare intact mitochondria with ADP, Pi, and oxidizable substrate.
2.  Measure baseline oxygen consumption and ATP formation.
3.  Add <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> inhibitor (for example rotenone, antimycin A, or cyanide).
4.  Observation: electron flow to O<sub>2</sub> falls sharply; ATP synthesis stops simultaneously.
5.  Control recovery logic:
    *   Rotenone block can be bypassed with succinate (Complex II entry), partially restoring respiration/ATP.
    *   Cyanide (Complex IV) cannot be bypassed, so both remain blocked.
6.  Conclusion: ATP synthesis depends on electron transfer-generated proton motive force ["no electron flow -> no <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> -> no ATP synthesis"].

---

#### Cluster 5.2: <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">UCP-1</span> & Ionophores
**Q: Define ionophore. Briefly describe FCCP and DNP as ionophores. [2022, 2+5 Marks] ★**

**Definition:** Ionophores (আয়ন বাহক) are small hydrophobic molecules that dissolve in lipid bilayers, shielding the charge of ions to allow their diffusion across the membrane.

1.  **DNP (2,4-Dinitrophenol):**
    *   **Mechanism:** It is a lipid-soluble weak acid. It picks up a proton (H<sup>+</sup>) in the intermembrane space (high H<sup>+</sup>), diffuses across, and releases it in the matrix (low H<sup>+</sup>).
    *   **Effect:** It "short-circuits" (শর্ট-সার্কিট) the proton battery, dissipating the <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> without making ATP. Energy is released as **heat**.
2.  **FCCP:** A more potent proton ionophore than DNP; it acts as a mobile carrier that makes the membrane "leaky" to protons, uncoupling respiration from phosphorylation.
3.  **<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span>:** A K<sup>+</sup> ionophore. It binds K<sup>+</sup> in its hydrophilic center and carries it across the membrane, dissipating the **electrical potential (Δpsi)**.

**<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">UCP-1</span> (Thermogenin):** Found in **Brown Fat** (বাদামী চর্বি) of newborns and hibernating animals. It provides a natural "back door" for protons to generate heat instead of ATP to maintain body temperature.

**Q: Briefly describe K<sup>+</sup> ionophore valinomycin. [2023, 5 Marks]**

1.  **Nature:** <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span> is a cyclic, lipid-soluble ionophore with high selectivity for K<sup>+</sup> over Na<sup>+</sup>.
2.  **Mechanism:** It shields K<sup>+</sup> charge in a hydrophobic shell and ferries K<sup>+</sup> across membranes.
3.  **Bioenergetic effect:** It collapses membrane potential (Delta psi), thereby modifying the proton motive force.
4.  **Experimental role:** In proton-pumping assays, valinomycin + K<sup>+</sup> is added to dissipate voltage so proton pumping is seen mainly as Delta pH ["this sharpens pH-electrode readout"].
5.  **Exam caution:** <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span> is primarily a K<sup>+</sup> carrier; FCCP/DNP are protonophores.

---

#### Cluster 5.3: Ischemic Protection (<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span> Protein)
**Q: How does <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span> inhibitory protein prevent ATP hydrolysis during ischemia? [2023, 4 Marks] ★**

1.  **Scenario:** During **Ischemia** (রক্তস্বল্পতা/lack of O<sub>2</sub>), electron transport stops and the <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Proton-Motive Force</span> (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>) collapses.
2.  **The Threat:** Without <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>, <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> reverses its direction—acting as an ATPase—hydrolyzing (ভেঙে ফেলা) cellular ATP to pump protons out.
3.  **Activation:** Ischemia forces anaerobic glycolysis, which produces lactic acid, dropping the cellular **pH below 6.5**.
4.  **Mechanism:** Low pH triggers **<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span>** to form a **dimer**. This dimer binds to the F_1 domain (at the alpha-beta interface), locking the motor and preventing ATP destruction.

**Q: Briefly describe the role of <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span> inhibitory protein during ischemia. [2022, 4 Marks]**

<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span> acts as an emergency ATP-sparing brake during oxygen deprivation.

1.  Ischemia collapses electron transport and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>.
2.  <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> tends to reverse and hydrolyze ATP.
3.  Acidic pH activates <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span> binding to F_1 sector.
4.  Result: ATP hydrolysis is inhibited, preserving cellular ATP for survival-critical processes.

---`,
    rawMd_bn: `### বাংলা নোট (ইংরেজি কনটেন্ট মিরর)

### ★ SET 5: Inhibitors, Uncouplers & Special Proteins

#### Cluster 5.1: Inhibitors of <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> & <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>
**Q: Mention two inhibitors each of electron transfer and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> with mode of action. [2023, 2 Marks] ★**

| Inhibitor Type | Example | Target Site | Mode of Action (কার্যপদ্ধতি) |
| :--- | :--- | :--- | :--- |
| **Electron Transfer** | **Rotenone** | Complex I | Prevents electron transfer from Fe-S centers to Ubiquinone (CoQ). |
| | **Cyanide (CN<sup>-</sup>)** | Complex IV | Reacts with the ferric (Fe<sup>3+</sup>) form of Heme a_3, stopping O<sub>2</sub> reduction. |
| **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>** | **Oligomycin** | F_o subunit | Blocks the proton channel, preventing the influx of H<sup>+</sup> into the matrix. |
| | **DCCD** | F_o subunit | Covalently binds to the c-ring, stopping rotation and H<sup>+</sup> flow. |

**Extra common <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> inhibitor (optional to mention):** **Antimycin A** blocks Complex III (cytochrome b to cytochrome c_1).

**Logical Reasoning (Recovery):**
*   **Rotenone Recovery:** If <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> is blocked at Complex I, it can be "recovered" by adding **Succinate**. Succinate donates electrons to Complex II, bypassing the block at Complex I to reach CoQ.
*   **Antimycin A:** It blocks Complex III. Adding **Ascorbate** can rescue the chain because it donates electrons directly to Cytochrome c, bypassing Complex III.

**Q: Provide evidence that inhibitors of electron flow to O<sub>2</sub> block ATP synthesis in intact mitochondria. [2022, 6 Marks]**

1.  Prepare intact mitochondria with ADP, Pi, and oxidizable substrate.
2.  Measure baseline oxygen consumption and ATP formation.
3.  Add <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> inhibitor (for example rotenone, antimycin A, or cyanide).
4.  Observation: electron flow to O<sub>2</sub> falls sharply; ATP synthesis stops simultaneously.
5.  Control recovery logic:
    *   Rotenone block can be bypassed with succinate (Complex II entry), partially restoring respiration/ATP.
    *   Cyanide (Complex IV) cannot be bypassed, so both remain blocked.
6.  Conclusion: ATP synthesis depends on electron transfer-generated proton motive force ["no electron flow -> no <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> -> no ATP synthesis"].

---

#### Cluster 5.2: <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">UCP-1</span> & Ionophores
**Q: Define ionophore. Briefly describe FCCP and DNP as ionophores. [2022, 2+5 Marks] ★**

**Definition:** Ionophores (আয়ন বাহক) are small hydrophobic molecules that dissolve in lipid bilayers, shielding the charge of ions to allow their diffusion across the membrane.

1.  **DNP (2,4-Dinitrophenol):**
    *   **Mechanism:** It is a lipid-soluble weak acid. It picks up a proton (H<sup>+</sup>) in the intermembrane space (high H<sup>+</sup>), diffuses across, and releases it in the matrix (low H<sup>+</sup>).
    *   **Effect:** It "short-circuits" (শর্ট-সার্কিট) the proton battery, dissipating the <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> without making ATP. Energy is released as **heat**.
2.  **FCCP:** A more potent proton ionophore than DNP; it acts as a mobile carrier that makes the membrane "leaky" to protons, uncoupling respiration from phosphorylation.
3.  **<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span>:** A K<sup>+</sup> ionophore. It binds K<sup>+</sup> in its hydrophilic center and carries it across the membrane, dissipating the **electrical potential (Δpsi)**.

**<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">UCP-1</span> (Thermogenin):** Found in **Brown Fat** (বাদামী চর্বি) of newborns and hibernating animals. It provides a natural "back door" for protons to generate heat instead of ATP to maintain body temperature.

**Q: Briefly describe K<sup>+</sup> ionophore valinomycin. [2023, 5 Marks]**

1.  **Nature:** <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span> is a cyclic, lipid-soluble ionophore with high selectivity for K<sup>+</sup> over Na<sup>+</sup>.
2.  **Mechanism:** It shields K<sup>+</sup> charge in a hydrophobic shell and ferries K<sup>+</sup> across membranes.
3.  **Bioenergetic effect:** It collapses membrane potential (Delta psi), thereby modifying the proton motive force.
4.  **Experimental role:** In proton-pumping assays, valinomycin + K<sup>+</sup> is added to dissipate voltage so proton pumping is seen mainly as Delta pH ["this sharpens pH-electrode readout"].
5.  **Exam caution:** <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span> is primarily a K<sup>+</sup> carrier; FCCP/DNP are protonophores.

---

#### Cluster 5.3: Ischemic Protection (<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF1</span> Protein)
**Q: How does <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span> inhibitory protein prevent ATP hydrolysis during ischemia? [2023, 4 Marks] ★**

1.  **Scenario:** During **Ischemia** (রক্তস্বল্পতা/lack of O<sub>2</sub>), electron transport stops and the <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Proton-Motive Force</span> (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>) collapses.
2.  **The Threat:** Without <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>, <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> reverses its direction—acting as an ATPase—hydrolyzing (ভেঙে ফেলা) cellular ATP to pump protons out.
3.  **Activation:** Ischemia forces anaerobic glycolysis, which produces lactic acid, dropping the cellular **pH below 6.5**.
4.  **Mechanism:** Low pH triggers **<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span>** to form a **dimer**. This dimer binds to the F_1 domain (at the alpha-beta interface), locking the motor and preventing ATP destruction.

**Q: Briefly describe the role of <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span> inhibitory protein during ischemia. [2022, 4 Marks]**

<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span> acts as an emergency ATP-sparing brake during oxygen deprivation.

1.  Ischemia collapses electron transport and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>.
2.  <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> tends to reverse and hydrolyze ATP.
3.  Acidic pH activates <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">IF_1</span> binding to F_1 sector.
4.  Result: ATP hydrolysis is inhibited, preserving cellular ATP for survival-critical processes.

---`
  },
  {
    id: "set6",
    title: "SET 6: <span style=\"background-color:#fff59d; padding:0 2px; border-radius:3px;\">Oxidative Phosphorylation</span> & <span style=\"background-color:#fff59d; padding:0 2px; border-radius:3px;\">ATP Synthase</span>",
    rawMd_en: `### ★ SET 6: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> & <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>

#### Cluster 6.1: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Chemiosmotic</span> Theory & Evidence
**Q: State the chemiosmotic model theory. Show evidence for the role of a proton gradient in ATP synthesis. [2022, 2+5 Marks] ★**

**The Theory (Peter Mitchell):**
The energy from electron transfer is used to pump protons "uphill" across the inner membrane, creating an **electrochemical gradient** (তড়িৎ-রাসায়নিক নতিমাত্রা). The "downhill" return of these protons through <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> provides the energy for ATP synthesis.

**High-yield form:** Δp = Δpsi - (2.303RT/F)ΔpH (proton-motive force combines electrical and chemical terms).

**Experimental Evidence (The Jagendorf/Acid-Base Transition):**
1.  **Setup:** Isolated mitochondria are incubated in a **pH 9** buffer with KCl until the matrix reaches equilibrium.
2.  **The Shift:** They are suddenly moved to a **pH 7** buffer containing **<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span>** but no KCl.
3.  **Observation:** K<sup>+</sup> flows out (driven by valinomycin), creating a negative charge inside, while the pH difference creates a chemical gradient.
4.  **Result:** ATP is synthesized **without any electron transport** occurring.
5.  **Logic:** This proves that the **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Proton-Motive Force</span> (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>) alone** is sufficient to drive ATP synthesis.

**Q: Briefly describe the experiment showing that inhibition of ATP synthesis blocks electron transfer in intact mitochondria. [2023, 6 Marks]**

1.  Intact mitochondria are provided with substrate, ADP, Pi, and O<sub>2</sub>; respiration proceeds with ATP synthesis.
2.  Add oligomycin (F_o inhibitor) to block proton flow through <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>.
3.  Proton re-entry stops, proton gradient rises to a back-pressure state.
4.  Electron transport then slows/stops because further proton pumping becomes thermodynamically unfavorable.
5.  If an uncoupler (for example DNP/FCCP) is added afterward, electron flow resumes without ATP synthesis.
6.  Conclusion: In intact mitochondria, ATP synthesis and electron transfer are tightly coupled through chemiosmotic linkage.

**Q: Define proton-motive force. How is proton-motive force generated in cells to drive ATP synthesis? [2022]**

**Definition:** Proton-motive force (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>, Delta p) is the electrochemical potential energy of protons across a membrane.

1.  <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> has two components: electrical potential (Delta psi) and chemical potential (Delta pH).
2.  <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> Complexes I, III, and IV pump protons from matrix to intermembrane space.
3.  This creates outside-positive and outside-acidic conditions relative to matrix.
4.  <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> uses proton return flow through F_o to synthesize ATP from ADP + Pi.

**Q: "The proton-motive force alone suffices to drive ATP synthesis" - explain with experiment. [2023]**

In the acid-base transition experiment, mitochondria pre-equilibrated at pH 9 are shifted to pH 7 medium with valinomycin (no oxidizable substrate). The imposed Delta pH plus Delta psi generates <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>, and ATP is synthesized even without electron transport ["direct proof that <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> is the immediate driving force"].

**Q: State and briefly describe the chemiosmotic model theory. [2023]**

Mitchell's model states that respiratory electron transfer is coupled to proton pumping, generating <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>; <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> then couples proton re-entry to ATP formation. So oxidative phosphorylation is membrane-dependent and gradient-driven, not based on a soluble high-energy intermediate.

---

#### Cluster 6.2: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span> Structure & Binding Change Model
**Q: Discuss the binding change model of ATP synthesis by <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>. [2023, 5 Marks] ★**

Proposed by **Paul Boyer**, this model explains the "Rotary Engine" mechanism.

1.  **The Rotor:** The central **gamma (gamma) shaft** rotates, driven by proton flow through the F_o base.
2.  **Conformational States:** As the gamma shaft turns, it forces the three beta subunits to cycle through three states:
    *   **Loose (L):** Binds ADP and P_i loosely.
    *   **Tight (T):** Substrates are tightly squeezed together to form ATP.
    *   **Open (O):** Has low affinity for ATP, allowing the newly made ATP to be **released**.
3.  **Numerical Value:** Each 360° rotation of the shaft produces **3 ATP** molecules (one per beta subunit).
4.  **Slide-linked structure line:** F_1 head is alpha_3beta_3gammadeltaepsilon and membrane F_o contains a,b,c subunits; proton flow through F_o drives gamma rotation.

**Diagram Description:** Imagine a hexamer (6 parts) of alternating alpha and beta proteins. In the center is an asymmetrical "L-shaped" shaft (gamma). As the shaft spins, it pushes against the beta subunits one by one, changing their internal shape to bind, build, or release ATP.

**Q: What are ATPases? Compare ATPase types, state <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">V-ATPase</span> role, and mention F_o composition. [2022, multi-part]**

**ATPases:** Enzymes that couple ATP hydrolysis/synthesis with ion transport or mechanical work.

| ATPase Type | Main Role | Location | Direction of H<sup>+</sup> movement |
| :--- | :--- | :--- | :--- |
| **F-type (F-ATPase)** | ATP synthesis (mainly) | Mitochondria, bacteria, chloroplasts | Down gradient through F_o drives ATP formation |
| **V-type (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">V-ATPase</span>)** | Acidifies organelles | Lysosome, endosome, Golgi, vacuole | Uses ATP to pump H<sup>+</sup> into organelle lumen |
| **P-type** | Pumps cations (Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>) | Plasma membrane, ER/SR | ATP-driven conformational cycle |

**Physiological role of <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">V-ATPase</span>:** Maintains acidic pH for lysosomal hydrolases, receptor recycling, and vesicle trafficking ["defects can impair endocytosis and protein degradation"].

**F_o subunit composition (mitochondrial):** Core membrane part contains a, b, and c subunits (c-ring + a-subunit proton half-channels + peripheral stalk components).

**Q: What are ATP synthases? Describe structural features of <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>. [2022]**

<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> is the F-type rotary enzyme complex that synthesizes ATP using <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>.

1.  **F_1 sector (matrix side):** catalytic head with alpha<sub>3</sub>beta<sub>3</sub> and central stalk (gamma, delta, epsilon).
2.  **F_o sector (membrane):** proton channel machinery with a, b, and c subunits.
3.  **Function coupling:** Proton flow through F_o rotates gamma shaft, forcing beta subunits through L-T-O catalytic states to produce ATP.

**Q: Compare different ATPase types. [2022]**

1.  **F-type ATPase:** Primarily synthesizes ATP using proton gradient.
2.  **V-type ATPase:** Hydrolyzes ATP to pump protons and acidify intracellular organelles.
3.  **P-type ATPase:** Uses ATP-driven phosphorylation cycle to transport cations (Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>).

**Q: Discuss / Mention the physiological role of V-ATPases. [2022, 2023]**

V-ATPases maintain acidic luminal pH in lysosomes/endosomes/Golgi, enabling hydrolase activity, receptor-ligand dissociation, vesicle trafficking, and normal intracellular protein turnover.

**Q: Describe the subunit composition of F0. [2022]**

F_o is composed mainly of a, b, and c subunits: the c-ring rotates, subunit a provides proton half-channels, and b participates in the peripheral stalk that stabilizes the catalytic head during rotation.

---

### 💡 Exam Tips & Logical Summary

*   **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> Components:** Remember <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> = Chemical Potential  (ΔpH) + Electrical Potential  (Δpsi). 
*   **Why/Why Not:** Why doesn't DNP stop respiration? DNP stops **ATP synthesis**, but respiration (Oxygen consumption) actually **increases** because the cell tries desperately to restore the gradient that DNP is constantly destroying.
*   **Student Mistake Alert:** Do not confuse **Oligomycin** (inhibitor) with **DNP** (uncoupler). 
    *   Oligomycin = Stops both O<sub>2</sub> use and ATP synthesis by *blocking* the hole.
    *   DNP = Increases O<sub>2</sub> use but stops ATP synthesis by *leaking* the protons elsewhere.
*   **Numerical Check:** It takes approximately **3 to 4 H<sup>+</sup>** to synthesize 1 ATP (3 for rotation + 1 for phosphate transport).
*   **Bangla Help:** 
    *   *Ischemia:* টিস্যুতে অক্সিজেনের অভাব.
    *   *Uncoupler:* বিযোজক (যা ইলেকট্রন ট্রান্সপোর্ট এবং এটিপি তৈরির সম্পর্ক বিচ্ছিন্ন করে).
    *   *Short-circuit:* শক্তির অপচয় বা বিপথগামী হওয়া.


Here are the exam-ready solutions for **SET 7** and **SET 8** of your Bioenergetics question bank. These clusters focus on the transport of molecules across the mitochondrial membrane and the comparison between oxidative and photophosphorylation.

---`,
    rawMd_bn: `### বাংলা নোট (ইংরেজি কনটেন্ট মিরর)

### ★ SET 6: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> & <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>

#### Cluster 6.1: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Chemiosmotic</span> Theory & Evidence
**Q: State the chemiosmotic model theory. Show evidence for the role of a proton gradient in ATP synthesis. [2022, 2+5 Marks] ★**

**The Theory (Peter Mitchell):**
The energy from electron transfer is used to pump protons "uphill" across the inner membrane, creating an **electrochemical gradient** (তড়িৎ-রাসায়নিক নতিমাত্রা). The "downhill" return of these protons through <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> provides the energy for ATP synthesis.

**High-yield form:** Δp = Δpsi - (2.303RT/F)ΔpH (proton-motive force combines electrical and chemical terms).

**Experimental Evidence (The Jagendorf/Acid-Base Transition):**
1.  **Setup:** Isolated mitochondria are incubated in a **pH 9** buffer with KCl until the matrix reaches equilibrium.
2.  **The Shift:** They are suddenly moved to a **pH 7** buffer containing **<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">Valinomycin</span>** but no KCl.
3.  **Observation:** K<sup>+</sup> flows out (driven by valinomycin), creating a negative charge inside, while the pH difference creates a chemical gradient.
4.  **Result:** ATP is synthesized **without any electron transport** occurring.
5.  **Logic:** This proves that the **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Proton-Motive Force</span> (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>) alone** is sufficient to drive ATP synthesis.

**Q: Briefly describe the experiment showing that inhibition of ATP synthesis blocks electron transfer in intact mitochondria. [2023, 6 Marks]**

1.  Intact mitochondria are provided with substrate, ADP, Pi, and O<sub>2</sub>; respiration proceeds with ATP synthesis.
2.  Add oligomycin (F_o inhibitor) to block proton flow through <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>.
3.  Proton re-entry stops, proton gradient rises to a back-pressure state.
4.  Electron transport then slows/stops because further proton pumping becomes thermodynamically unfavorable.
5.  If an uncoupler (for example DNP/FCCP) is added afterward, electron flow resumes without ATP synthesis.
6.  Conclusion: In intact mitochondria, ATP synthesis and electron transfer are tightly coupled through chemiosmotic linkage.

**Q: Define proton-motive force. How is proton-motive force generated in cells to drive ATP synthesis? [2022]**

**Definition:** Proton-motive force (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>, Delta p) is the electrochemical potential energy of protons across a membrane.

1.  <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> has two components: electrical potential (Delta psi) and chemical potential (Delta pH).
2.  <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> Complexes I, III, and IV pump protons from matrix to intermembrane space.
3.  This creates outside-positive and outside-acidic conditions relative to matrix.
4.  <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> uses proton return flow through F_o to synthesize ATP from ADP + Pi.

**Q: "The proton-motive force alone suffices to drive ATP synthesis" - explain with experiment. [2023]**

In the acid-base transition experiment, mitochondria pre-equilibrated at pH 9 are shifted to pH 7 medium with valinomycin (no oxidizable substrate). The imposed Delta pH plus Delta psi generates <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>, and ATP is synthesized even without electron transport ["direct proof that <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> is the immediate driving force"].

**Q: State and briefly describe the chemiosmotic model theory. [2023]**

Mitchell's model states that respiratory electron transfer is coupled to proton pumping, generating <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>; <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> then couples proton re-entry to ATP formation. So oxidative phosphorylation is membrane-dependent and gradient-driven, not based on a soluble high-energy intermediate.

---

#### Cluster 6.2: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span> Structure & Binding Change Model
**Q: Discuss the binding change model of ATP synthesis by <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>. [2023, 5 Marks] ★**

Proposed by **Paul Boyer**, this model explains the "Rotary Engine" mechanism.

1.  **The Rotor:** The central **gamma (gamma) shaft** rotates, driven by proton flow through the F_o base.
2.  **Conformational States:** As the gamma shaft turns, it forces the three beta subunits to cycle through three states:
    *   **Loose (L):** Binds ADP and P_i loosely.
    *   **Tight (T):** Substrates are tightly squeezed together to form ATP.
    *   **Open (O):** Has low affinity for ATP, allowing the newly made ATP to be **released**.
3.  **Numerical Value:** Each 360° rotation of the shaft produces **3 ATP** molecules (one per beta subunit).
4.  **Slide-linked structure line:** F_1 head is alpha_3beta_3gammadeltaepsilon and membrane F_o contains a,b,c subunits; proton flow through F_o drives gamma rotation.

**Diagram Description:** Imagine a hexamer (6 parts) of alternating alpha and beta proteins. In the center is an asymmetrical "L-shaped" shaft (gamma). As the shaft spins, it pushes against the beta subunits one by one, changing their internal shape to bind, build, or release ATP.

**Q: What are ATPases? Compare ATPase types, state <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">V-ATPase</span> role, and mention F_o composition. [2022, multi-part]**

**ATPases:** Enzymes that couple ATP hydrolysis/synthesis with ion transport or mechanical work.

| ATPase Type | Main Role | Location | Direction of H<sup>+</sup> movement |
| :--- | :--- | :--- | :--- |
| **F-type (F-ATPase)** | ATP synthesis (mainly) | Mitochondria, bacteria, chloroplasts | Down gradient through F_o drives ATP formation |
| **V-type (<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">V-ATPase</span>)** | Acidifies organelles | Lysosome, endosome, Golgi, vacuole | Uses ATP to pump H<sup>+</sup> into organelle lumen |
| **P-type** | Pumps cations (Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>) | Plasma membrane, ER/SR | ATP-driven conformational cycle |

**Physiological role of <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">V-ATPase</span>:** Maintains acidic pH for lysosomal hydrolases, receptor recycling, and vesicle trafficking ["defects can impair endocytosis and protein degradation"].

**F_o subunit composition (mitochondrial):** Core membrane part contains a, b, and c subunits (c-ring + a-subunit proton half-channels + peripheral stalk components).

**Q: What are ATP synthases? Describe structural features of <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>. [2022]**

<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> is the F-type rotary enzyme complex that synthesizes ATP using <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>.

1.  **F_1 sector (matrix side):** catalytic head with alpha<sub>3</sub>beta<sub>3</sub> and central stalk (gamma, delta, epsilon).
2.  **F_o sector (membrane):** proton channel machinery with a, b, and c subunits.
3.  **Function coupling:** Proton flow through F_o rotates gamma shaft, forcing beta subunits through L-T-O catalytic states to produce ATP.

**Q: Compare different ATPase types. [2022]**

1.  **F-type ATPase:** Primarily synthesizes ATP using proton gradient.
2.  **V-type ATPase:** Hydrolyzes ATP to pump protons and acidify intracellular organelles.
3.  **P-type ATPase:** Uses ATP-driven phosphorylation cycle to transport cations (Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>).

**Q: Discuss / Mention the physiological role of V-ATPases. [2022, 2023]**

V-ATPases maintain acidic luminal pH in lysosomes/endosomes/Golgi, enabling hydrolase activity, receptor-ligand dissociation, vesicle trafficking, and normal intracellular protein turnover.

**Q: Describe the subunit composition of F0. [2022]**

F_o is composed mainly of a, b, and c subunits: the c-ring rotates, subunit a provides proton half-channels, and b participates in the peripheral stalk that stabilizes the catalytic head during rotation.

---

### 💡 Exam Tips & Logical Summary

*   **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> Components:** Remember <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> = Chemical Potential  (ΔpH) + Electrical Potential  (Δpsi). 
*   **Why/Why Not:** Why doesn't DNP stop respiration? DNP stops **ATP synthesis**, but respiration (Oxygen consumption) actually **increases** because the cell tries desperately to restore the gradient that DNP is constantly destroying.
*   **Student Mistake Alert:** Do not confuse **Oligomycin** (inhibitor) with **DNP** (uncoupler). 
    *   Oligomycin = Stops both O<sub>2</sub> use and ATP synthesis by *blocking* the hole.
    *   DNP = Increases O<sub>2</sub> use but stops ATP synthesis by *leaking* the protons elsewhere.
*   **Numerical Check:** It takes approximately **3 to 4 H<sup>+</sup>** to synthesize 1 ATP (3 for rotation + 1 for phosphate transport).
*   **Bangla Help:** 
    *   *Ischemia:* টিস্যুতে অক্সিজেনের অভাব.
    *   *Uncoupler:* বিযোজক (যা ইলেকট্রন ট্রান্সপোর্ট এবং এটিপি তৈরির সম্পর্ক বিচ্ছিন্ন করে).
    *   *Short-circuit:* শক্তির অপচয় বা বিপথগামী হওয়া.


Here are the exam-ready solutions for **SET 7** and **SET 8** of your Bioenergetics question bank. These clusters focus on the transport of molecules across the mitochondrial membrane and the comparison between oxidative and photophosphorylation.

---`
  },
  {
    id: "set7",
    title: "SET 7: Mitochondrial Transport, Shuttle Systems & TCA Regulation",
    rawMd_en: `### ★ SET 7: Mitochondrial Transport, Shuttle Systems & TCA Regulation

#### Cluster 7.1: Mitochondrial Shuttle Systems
**Q: What is a mitochondrial shuttle system? Describe the malate-aspartate shuttle system. [2023, 1+4 Marks] ★**

| Feature | Description |
| :--- | :--- |
| **Definition** | A shuttle system (শাটল সিস্টেম) is a mechanism that transports reducing equivalents (বিজারণ ক্ষমতা) from cytosolic NADH into the mitochondrial matrix, as NADH itself cannot cross the inner membrane. |
| **Organs** | Primarily found in the **heart, liver, and kidneys**. |
| **Efficiency** | More efficient than the glycerol-3-P shuttle, yielding **2.5 ATP** per cytosolic NADH. |

**Mechanism (Logic & Steps):**
1.  **Cytosol:** NADH transfers electrons to Oxaloacetate, forming **Malate**.
2.  **Transport:** Malate enters the matrix via the **Malate-alpha-ketoglutarate transporter** (an antiporter).
3.  **Matrix:** Malate is oxidized back to Oxaloacetate, generating **matrix NADH** which enters Complex I.
4.  **Recycle:** Oxaloacetate cannot exit directly; it is transaminated to **Aspartate**, which exits to the cytosol via the **Glutamate-aspartate transporter** to restart the cycle.

**Q: What is mitochondrial shuttle system? Illustrate different shuttles. [2022, 5+5 Marks]**

**Different shuttles (high-yield):**
1.  **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Malate-Aspartate</span> Shuttle:** Transfers cytosolic reducing equivalents to matrix NADH (high ATP yield).
2.  **Glycerol-3-Phosphate Shuttle:** Transfers reducing equivalents to mitochondrial FAD (lower ATP yield).

**Quick comparison:**
| Feature | <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Malate-Aspartate</span> | Glycerol-3-Phosphate |
| :--- | :--- | :--- |
| Entry point in <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> | Complex I (NADH) | CoQ level via FAD |
| ATP equivalent per cytosolic NADH | ~2.5 | ~1.5 |
| Major tissues | Liver, heart, kidney | Brain, skeletal muscle |

["NADH cannot cross inner membrane; only reducing equivalents are shuttled"]

---

#### Cluster 7.2: ATP-ADP Translocase (The Energy Exchanger)
**Q: What is ATP-ADP translocase? Narrate its mode of action and inhibitors. [2023, 5 Marks] ★**

**Definition:** The Adenine Nucleotide Translocase (স্থানান্তরককারী বাহক) is an integral membrane protein (antiporter) that exchanges matrix ATP for cytosolic ADP.

**Mode of Action (The Charge Logic):**
*   **Charge Difference:** Matrix ATP has **4 negative charges** (ATP<sup>4-</sup>), while ADP has **3** (ADP<sup>3-</sup>).
*   **Driving Force:** The proton-motive force (electrical gradient) drives the exit of one ATP<sup>4-</sup> and the entry of one ADP<sup>3-</sup>, resulting in a net movement of **one negative charge out** of the matrix.
*   **Mechanism:** The protein has a single binding site that flips its orientation (Eversion) between the matrix and cytosol.
*   **Extra coupling fact:** ATP export is coordinated with phosphate import via a H<sup>+</sup>/P_i symporter, contributing to the practical ~4H<sup>+</sup> cost per ATP delivered to cytosol.

**★ High-Priority Inhibitors:**
1.  **Atractyloside (ATR):** Binds from the **cytoplasmic side**, locking the translocase in the "outward-facing" conformation.
2.  **Bongkrekic Acid:** Binds from the **matrix side**, locking it in the "inward-facing" conformation.
*   **Result:** Inhibition of this exchanger stops <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> because the matrix runs out of ADP substrate.

---

#### Cluster 7.3: [ADP] Regulation of TCA & Respiration
**Q: How does [ADP] affect the rate of the TCA cycle and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span>? [2022, 5 Marks] ★**

This regulation is known as **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Acceptor Control</span>** or **Respiratory Control**.

1.  **The Need for ADP:** Electrons do not flow through the <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> to O<sub>2</sub> unless ADP is simultaneously being phosphorylated to ATP.
2.  **Logical Chain (High Workload):**
    *   Muscle work consumes ATP -> **[ADP] rises**.
    *   Increased ADP speeds up **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>** and **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>**.
    *   <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> consumes NADH faster -> **[NAD<sup>+</sup>] rises**.
    *   High NAD<sup>+</sup> stimulates key TCA enzymes (e.g., Isocitrate dehydrogenase) -> **TCA cycle speeds up**.
3.  **Low ADP (Resting):** In resting cells, low ADP limits <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>; NADH builds up, which inhibits the TCA cycle.

**Q: How is ATP synthesis coupled to glycolysis, TCA cycle and beta-oxidation? [2023, 6 Marks]**

1.  **Fuel generation stage:** Glycolysis, pyruvate oxidation, TCA, and beta-oxidation generate NADH/FADH<sub>2</sub>.
2.  **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> coupling stage:** NADH/FADH<sub>2</sub> donate electrons to <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>, which pumps protons and creates <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>.
3.  **ATP formation stage:** <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> uses <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> to convert ADP + Pi to ATP.
4.  **Demand feedback (acceptor control):** Higher ATP use raises ADP, which accelerates oxidative phosphorylation and upstream catabolic flux.
5.  **Integrated pathway logic:** When ATP demand is high, glycolysis/TCA/beta-oxidation all accelerate because NAD<sup>+</sup> and CoA are regenerated faster by the respiratory chain.
6.  **Conclusion line:** Cellular ATP need is the master controller linking substrate oxidation to oxidative phosphorylation.

**Q: "Rate of oxidative phosphorylation is determined by the need for ATP" - explain. [2023]**

This is acceptor control: when ATP demand rises, ADP rises; ADP availability accelerates <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>, which increases proton re-entry and relieves back-pressure on <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>, so respiration and NADH oxidation increase. When ADP is low, the chain slows, NADH accumulates, and oxidative phosphorylation rate falls.

**Q: Illustrate the regulation of ATP-producing steps of TCA cycle. [2023]**

ATP-producing flux in TCA is controlled by energy charge and redox state:
1.  High ADP and NAD<sup>+</sup> activate key dehydrogenases (especially isocitrate dehydrogenase).
2.  High ATP and NADH inhibit these enzymes.
3.  Therefore ATP demand indirectly speeds TCA by enhancing NADH reoxidation in <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> ["tight coupling between TCA, <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>, and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>"].

---`,
    rawMd_bn: `### বাংলা নোট (ইংরেজি কনটেন্ট মিরর)

### ★ SET 7: Mitochondrial Transport, Shuttle Systems & TCA Regulation

#### Cluster 7.1: Mitochondrial Shuttle Systems
**Q: What is a mitochondrial shuttle system? Describe the malate-aspartate shuttle system. [2023, 1+4 Marks] ★**

| Feature | Description |
| :--- | :--- |
| **Definition** | A shuttle system (শাটল সিস্টেম) is a mechanism that transports reducing equivalents (বিজারণ ক্ষমতা) from cytosolic NADH into the mitochondrial matrix, as NADH itself cannot cross the inner membrane. |
| **Organs** | Primarily found in the **heart, liver, and kidneys**. |
| **Efficiency** | More efficient than the glycerol-3-P shuttle, yielding **2.5 ATP** per cytosolic NADH. |

**Mechanism (Logic & Steps):**
1.  **Cytosol:** NADH transfers electrons to Oxaloacetate, forming **Malate**.
2.  **Transport:** Malate enters the matrix via the **Malate-alpha-ketoglutarate transporter** (an antiporter).
3.  **Matrix:** Malate is oxidized back to Oxaloacetate, generating **matrix NADH** which enters Complex I.
4.  **Recycle:** Oxaloacetate cannot exit directly; it is transaminated to **Aspartate**, which exits to the cytosol via the **Glutamate-aspartate transporter** to restart the cycle.

**Q: What is mitochondrial shuttle system? Illustrate different shuttles. [2022, 5+5 Marks]**

**Different shuttles (high-yield):**
1.  **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Malate-Aspartate</span> Shuttle:** Transfers cytosolic reducing equivalents to matrix NADH (high ATP yield).
2.  **Glycerol-3-Phosphate Shuttle:** Transfers reducing equivalents to mitochondrial FAD (lower ATP yield).

**Quick comparison:**
| Feature | <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Malate-Aspartate</span> | Glycerol-3-Phosphate |
| :--- | :--- | :--- |
| Entry point in <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> | Complex I (NADH) | CoQ level via FAD |
| ATP equivalent per cytosolic NADH | ~2.5 | ~1.5 |
| Major tissues | Liver, heart, kidney | Brain, skeletal muscle |

["NADH cannot cross inner membrane; only reducing equivalents are shuttled"]

---

#### Cluster 7.2: ATP-ADP Translocase (The Energy Exchanger)
**Q: What is ATP-ADP translocase? Narrate its mode of action and inhibitors. [2023, 5 Marks] ★**

**Definition:** The Adenine Nucleotide Translocase (স্থানান্তরককারী বাহক) is an integral membrane protein (antiporter) that exchanges matrix ATP for cytosolic ADP.

**Mode of Action (The Charge Logic):**
*   **Charge Difference:** Matrix ATP has **4 negative charges** (ATP<sup>4-</sup>), while ADP has **3** (ADP<sup>3-</sup>).
*   **Driving Force:** The proton-motive force (electrical gradient) drives the exit of one ATP<sup>4-</sup> and the entry of one ADP<sup>3-</sup>, resulting in a net movement of **one negative charge out** of the matrix.
*   **Mechanism:** The protein has a single binding site that flips its orientation (Eversion) between the matrix and cytosol.
*   **Extra coupling fact:** ATP export is coordinated with phosphate import via a H<sup>+</sup>/P_i symporter, contributing to the practical ~4H<sup>+</sup> cost per ATP delivered to cytosol.

**★ High-Priority Inhibitors:**
1.  **Atractyloside (ATR):** Binds from the **cytoplasmic side**, locking the translocase in the "outward-facing" conformation.
2.  **Bongkrekic Acid:** Binds from the **matrix side**, locking it in the "inward-facing" conformation.
*   **Result:** Inhibition of this exchanger stops <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> because the matrix runs out of ADP substrate.

---

#### Cluster 7.3: [ADP] Regulation of TCA & Respiration
**Q: How does [ADP] affect the rate of the TCA cycle and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span>? [2022, 5 Marks] ★**

This regulation is known as **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Acceptor Control</span>** or **Respiratory Control**.

1.  **The Need for ADP:** Electrons do not flow through the <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> to O<sub>2</sub> unless ADP is simultaneously being phosphorylated to ATP.
2.  **Logical Chain (High Workload):**
    *   Muscle work consumes ATP -> **[ADP] rises**.
    *   Increased ADP speeds up **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>** and **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>**.
    *   <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> consumes NADH faster -> **[NAD<sup>+</sup>] rises**.
    *   High NAD<sup>+</sup> stimulates key TCA enzymes (e.g., Isocitrate dehydrogenase) -> **TCA cycle speeds up**.
3.  **Low ADP (Resting):** In resting cells, low ADP limits <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>; NADH builds up, which inhibits the TCA cycle.

**Q: How is ATP synthesis coupled to glycolysis, TCA cycle and beta-oxidation? [2023, 6 Marks]**

1.  **Fuel generation stage:** Glycolysis, pyruvate oxidation, TCA, and beta-oxidation generate NADH/FADH<sub>2</sub>.
2.  **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> coupling stage:** NADH/FADH<sub>2</sub> donate electrons to <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>, which pumps protons and creates <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span>.
3.  **ATP formation stage:** <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> uses <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">PMF</span> to convert ADP + Pi to ATP.
4.  **Demand feedback (acceptor control):** Higher ATP use raises ADP, which accelerates oxidative phosphorylation and upstream catabolic flux.
5.  **Integrated pathway logic:** When ATP demand is high, glycolysis/TCA/beta-oxidation all accelerate because NAD<sup>+</sup> and CoA are regenerated faster by the respiratory chain.
6.  **Conclusion line:** Cellular ATP need is the master controller linking substrate oxidation to oxidative phosphorylation.

**Q: "Rate of oxidative phosphorylation is determined by the need for ATP" - explain. [2023]**

This is acceptor control: when ATP demand rises, ADP rises; ADP availability accelerates <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>, which increases proton re-entry and relieves back-pressure on <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>, so respiration and NADH oxidation increase. When ADP is low, the chain slows, NADH accumulates, and oxidative phosphorylation rate falls.

**Q: Illustrate the regulation of ATP-producing steps of TCA cycle. [2023]**

ATP-producing flux in TCA is controlled by energy charge and redox state:
1.  High ADP and NAD<sup>+</sup> activate key dehydrogenases (especially isocitrate dehydrogenase).
2.  High ATP and NADH inhibit these enzymes.
3.  Therefore ATP demand indirectly speeds TCA by enhancing NADH reoxidation in <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> ["tight coupling between TCA, <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span>, and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span>"].

---`
  },
  {
    id: "set8",
    title: "SET 8: Photosynthesis vs. <span style=\"background-color:#fff59d; padding:0 2px; border-radius:3px;\">Oxidative Phosphorylation</span>",
    rawMd_en: `### SET 8: Photosynthesis vs. <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span>

#### Cluster 8.1: Light Reactions & <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Photophosphorylation</span>
**Q: How is light energy converted to chemical energy? PS I vs. PS II. [2016, 5 Marks]**

*   **Process:** Absorption of a photon (কোয়ান্টাম আলোক) by chlorophyll excites an electron to a higher energy level. This high-energy electron is passed through a chain of carriers to create a proton gradient.
*   **PS II vs. PS I:**
    *   **PS II (P_680):** Occurs first; splits **H<sub>2</sub>O** to release electrons, O<sub>2</sub>, and protons.
    *   **PS I (P_700):** Receives electrons from PS II; final step reduces **NADP<sup>+</sup> to NADPH**.

---

#### Cluster 8.2: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> vs. <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Photophosphorylation</span>
**Q: Compare <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Photophosphorylation</span>. [2014, 2016, 4 Marks]**

| Feature | <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> | <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Photophosphorylation</span> |
| :--- | :--- | :--- |
| **Location** | Mitochondrial Inner Membrane. | Thylakoid Membrane (Chloroplast). |
| **Electron Source** | NADH & FADH<sub>2</sub> (from food). | H<sub>2</sub>O. |
| **Final Acceptor** | Molecular O<sub>2</sub> (reduced to H<sub>2</sub>O). | NADP<sup>+</sup> (reduced to NADPH). |
| **Energy Source** | Chemical energy from substrate oxidation. | Light energy (photons). |
| **Commonality** | Both use **Proton Gradient** and **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>**. | Both use **Proton Gradient** and **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>**. |

---

### 💡 Summary & Exam Tips

*   **Why is the Glycerol-3-P Shuttle less efficient?** Because it delivers electrons to **FAD** (Complex II level) instead of NAD+ (Complex I). It bypasses the first proton pump, yielding only **1.5 ATP** instead of 2.5.
*   **Atractyloside vs. Bongkrekic Acid:** 
    *   *Memory Tip:* **A**tractyloside = **A**side (Cytoplasmic side). **B**ongkrekic = **B**elow (Matrix side). 
*   **Common Mistake:** Students often forget that in the <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Malate-Aspartate</span> shuttle, the **Aspartate** step is necessary because **Oxaloacetate** cannot cross the membrane.
*   **Root Meanings:** 
    *   *Antiporter:* (বিপরীতমুখী বাহক) - Two molecules move in opposite directions.
    *   *Symporter:* (একমুখী বাহক) - Two molecules move in the same direction (e.g., Phosphate + H<sup>+</sup>).
    *   *Eversion:* প্রোটিনের গঠন পরিবর্তন করে উল্টে যাওয়া.

**Numerical Values to Memorize:**
*   NADH -> 2.5 ATP
*   Succinate/FADH<sub>2</sub> -> 1.5 ATP
*   Total ATP from 1 Glucose (Aerobic): **30 or 32** (older texts say 36/38).

---`,
    rawMd_bn: `### বাংলা নোট (ইংরেজি কনটেন্ট মিরর)

### SET 8: Photosynthesis vs. <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span>

#### Cluster 8.1: Light Reactions & <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Photophosphorylation</span>
**Q: How is light energy converted to chemical energy? PS I vs. PS II. [2016, 5 Marks]**

*   **Process:** Absorption of a photon (কোয়ান্টাম আলোক) by chlorophyll excites an electron to a higher energy level. This high-energy electron is passed through a chain of carriers to create a proton gradient.
*   **PS II vs. PS I:**
    *   **PS II (P_680):** Occurs first; splits **H<sub>2</sub>O** to release electrons, O<sub>2</sub>, and protons.
    *   **PS I (P_700):** Receives electrons from PS II; final step reduces **NADP<sup>+</sup> to NADPH**.

---

#### Cluster 8.2: <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> vs. <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Photophosphorylation</span>
**Q: Compare <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> and <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Photophosphorylation</span>. [2014, 2016, 4 Marks]**

| Feature | <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Oxidative Phosphorylation</span> | <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Photophosphorylation</span> |
| :--- | :--- | :--- |
| **Location** | Mitochondrial Inner Membrane. | Thylakoid Membrane (Chloroplast). |
| **Electron Source** | NADH & FADH<sub>2</sub> (from food). | H<sub>2</sub>O. |
| **Final Acceptor** | Molecular O<sub>2</sub> (reduced to H<sub>2</sub>O). | NADP<sup>+</sup> (reduced to NADPH). |
| **Energy Source** | Chemical energy from substrate oxidation. | Light energy (photons). |
| **Commonality** | Both use **Proton Gradient** and **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>**. | Both use **Proton Gradient** and **<span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP Synthase</span>**. |

---

### 💡 Summary & Exam Tips

*   **Why is the Glycerol-3-P Shuttle less efficient?** Because it delivers electrons to **FAD** (Complex II level) instead of NAD+ (Complex I). It bypasses the first proton pump, yielding only **1.5 ATP** instead of 2.5.
*   **Atractyloside vs. Bongkrekic Acid:** 
    *   *Memory Tip:* **A**tractyloside = **A**side (Cytoplasmic side). **B**ongkrekic = **B**elow (Matrix side). 
*   **Common Mistake:** Students often forget that in the <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">Malate-Aspartate</span> shuttle, the **Aspartate** step is necessary because **Oxaloacetate** cannot cross the membrane.
*   **Root Meanings:** 
    *   *Antiporter:* (বিপরীতমুখী বাহক) - Two molecules move in opposite directions.
    *   *Symporter:* (একমুখী বাহক) - Two molecules move in the same direction (e.g., Phosphate + H<sup>+</sup>).
    *   *Eversion:* প্রোটিনের গঠন পরিবর্তন করে উল্টে যাওয়া.

**Numerical Values to Memorize:**
*   NADH -> 2.5 ATP
*   Succinate/FADH<sub>2</sub> -> 1.5 ATP
*   Total ATP from 1 Glucose (Aerobic): **30 or 32** (older texts say 36/38).

---`
  },
  {
    id: "set9",
    title: "SET 9: Oxygen Toxicity, <span style=\"background-color:#ffcdd2; padding:0 2px; border-radius:3px;\">ROS</span> & Mitochondrial Diseases",
    rawMd_en: `### ★ SET 9: Oxygen Toxicity, <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> & Mitochondrial Diseases

#### Cluster 9.1: Oxygen Toxicity, <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> & Antioxidant Defense Systems
**Q: What is oxygen toxicity? How do cells defend against reactive oxygen species (<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span>)? [HIGH ★]**

**Oxygen Toxicity — Univalent Reduction (from slides):**
When O<sub>2</sub> is reduced univalently instead of tetravalently, toxic **Reactive Oxygen Species (<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span>)** are generated. This occurs during metabolic leakage in the electron transport chain (particularly at Complexes I and III).

| <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> Type | Formula | Source | Hazard |
| :--- | :--- | :--- | :--- |
| **Superoxide radical** | O<sub>2</sub><sup>•−</sup> | Complex I, III leak | Damages lipids, proteins, DNA |
| **Hydrogen peroxide** | H<sub>2</sub>O<sub>2</sub> | Superoxide dismutase reaction | Permeates membranes; toxic in excess |
| **Hydroxyl radical** | •OH | Iron-catalyzed from H<sub>2</sub>O<sub>2</sub> | Most reactive; causes direct DNA/lipid damage |
| **Singlet oxygen** | <sup>1</sup>O<sub>2</sub> | Photosensitizer-mediated | Electrophilic; damages multiple biomolecules |

**Antioxidant Defense (slide-linked systems):**
1.  **Enzymatic defenses (from slides):**
    *   **Superoxide dismutase (SOD):** 2 O<sub>2</sub><sup>•−</sup> + 2 H<sup>+</sup> → H<sub>2</sub>O<sub>2</sub> + O<sub>2</sub> ["found in mitochondrial matrix and cytosol"]
    *   **Catalase:** 2 H<sub>2</sub>O<sub>2</sub> → 2 H<sub>2</sub>O + O<sub>2</sub> ["concentrated in peroxisomes; processes 1 million H<sub>2</sub>O<sub>2</sub> molecules per second"]
    *   **Glutathione peroxidase:** H<sub>2</sub>O<sub>2</sub> + 2 GSH → GSSG + 2 H<sub>2</sub>O ["selenium-dependent; primary defense in mitochondria"]
2.  **Non-enzymatic defenses:**
    *   **Vitamin E (α-tocopherol):** Membrane-embedded; scavenges lipid peroxyl radicals.
    *   **Vitamin C (ascorbate):** Aqueous-phase scavenger; regenerates Vitamin E.
    *   **Glutathione (GSH):** Tripeptide; reduces H<sub>2</sub>O<sub>2</sub> and disulfide bonds in proteins.
    *   **β-carotene, flavonoids:** Singlet oxygen quenchers.

---

#### Cluster 9.2: Mitochondrial Diseases — LHON & MERRF
**Q: Describe mitochondrial genetic diseases: LHON and MERRF. How do mtDNA mutations cause disease? [MED]**

| Disease | Full Name | Mutation | Phenotype | Slide Notes |
| :--- | :--- | :--- | :--- | :--- |
| **LHON** | Leber Hereditary Optic Neuropathy | ND1, ND4, ND6 (Complex I genes) | Sudden vision loss (20-50 yrs); more severe in males | ["mtDNA heteroplasmy causes variable penetrance; neural tissue is especially vulnerable to ATP deficit"] |
| **MERRF** | Myoclonic Epilepsy with Ragged-Red Fibers | tRNA<sup>Lys</sup> or ND5 mutations | Progressive myopathy, myoclonus, ataxia, dementia | ["ragged-red fibers visible under microscopy due to abnormal mitochondrial proliferation"] |

**Mechanism (from biochemistry):**
1.  **mtDNA mutations reduce ATP output** — The respiratory chain cannot function efficiently, leading to energy crisis.
2.  **Tissues most affected:** Neural, cardiac, and skeletal muscle (high ATP demand, depend on aerobic metabolism).
3.  **Heteroplasmy:** Cells contain both normal (N) and mutant (M) mtDNA; disease severity depends on M/N ratio.
4.  **Maternal inheritance:** All mtDNA comes from the egg; affected mothers pass disease to ~all children.
5.  **Threshold effect (from slides):** Symptoms appear only when mutant mtDNA exceeds ~60–90% of total cellular mtDNA.

**Exam Angle (High-Yield Facts):**
- **Why Complex I?** ND genes encode 7 of 45 Complex I subunits; mutations severely impact proton pumping.
- **Why LHON is sudden?** Possibly threshold-triggered; mild energy shortage becomes acute depletion above a critical point.
- **MERRF muscle phenotype:** tRNA<sup>Lys</sup> mutations cause frameshifts in multi-gene transcripts, collapsing <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> function.

---

### 💡 Final Exam Summary — All Sets

**Core Concepts to Master (Set-by-Set):**
- **SET 1–2:** ATP as universal currency; energetics of all reactions.
- **SET 3–4:** How electrons move; proton gradient creation (the engine).
- **SET 5–6:** Inhibitors and uncouplers; <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> mechanics (the turbine).
- **SET 7:** Shuttles, translocases, regulation (housekeeping).
- **SET 8:** Light → chemical energy (parallel process).
- **SET 9:** <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> danger; mitochondrial disease (pathophysiology).

**Memory Anchors:**
- **10 H<sup>+</sup>/NADH**, **6 H<sup>+</sup>/FADH<sub>2</sub>** → Proton stoichiometry.
- **3 ATP per 4 H<sup>+</sup>** → <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> efficiency.
- **SOD → Catalase → Glutathione** → <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> defense pipeline.
- **Maternal inheritance + heteroplasmy threshold** → mtDNA disease logic.
*   Total ATP from 1 Glucose (Aerobic): **30 or 32** (older texts say 36/38).
---

### Connect & Subscribe(jajakallah)

- 💼 LinkedIn: [https://www.linkedin.com/in/sm-ashikur-rahman/](https://www.linkedin.com/in/sm-ashikur-rahman/)
- 💻 GitHub: [https://github.com/ashiq-sm](https://github.com/ashiq-sm)
- ▶️ YouTube: [https://www.youtube.com/@smashiqurrahman8150](https://www.youtube.com/@smashiqurrahman8150)
- 𝕏 Twitter (X): [https://x.com/smar1ashiq](https://x.com/smar1ashiq)
- ✍️ Blog: [http://smashiq.blogspot.com/](http://smashiq.blogspot.com/)
- 📘 Facebook: [https://facebook.com/sm1ar](https://facebook.com/sm1ar)
- 📣 Telegram: [https://t.me/sm_ash1q](https://t.me/sm_ash1q)
- 💬 WhatsApp: [https://wa.me/+8801773971905](https://wa.me/+8801773971905)
- 🌐 BioNotes: [https://sm-nextgen-bionotes.vercel.app/](https://sm-nextgen-bionotes.vercel.app/)`,
    rawMd_bn: `### বাংলা নোট (ইংরেজি কনটেন্ট মিরর)

### ★ SET 9: Oxygen Toxicity, <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> & Mitochondrial Diseases

#### Cluster 9.1: Oxygen Toxicity, <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> & Antioxidant Defense Systems
**Q: What is oxygen toxicity? How do cells defend against reactive oxygen species (<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span>)? [HIGH ★]**

**Oxygen Toxicity — Univalent Reduction (from slides):**
When O<sub>2</sub> is reduced univalently instead of tetravalently, toxic **Reactive Oxygen Species (<span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span>)** are generated. This occurs during metabolic leakage in the electron transport chain (particularly at Complexes I and III).

| <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> Type | Formula | Source | Hazard |
| :--- | :--- | :--- | :--- |
| **Superoxide radical** | O<sub>2</sub><sup>•−</sup> | Complex I, III leak | Damages lipids, proteins, DNA |
| **Hydrogen peroxide** | H<sub>2</sub>O<sub>2</sub> | Superoxide dismutase reaction | Permeates membranes; toxic in excess |
| **Hydroxyl radical** | •OH | Iron-catalyzed from H<sub>2</sub>O<sub>2</sub> | Most reactive; causes direct DNA/lipid damage |
| **Singlet oxygen** | <sup>1</sup>O<sub>2</sub> | Photosensitizer-mediated | Electrophilic; damages multiple biomolecules |

**Antioxidant Defense (slide-linked systems):**
1.  **Enzymatic defenses (from slides):**
    *   **Superoxide dismutase (SOD):** 2 O<sub>2</sub><sup>•−</sup> + 2 H<sup>+</sup> → H<sub>2</sub>O<sub>2</sub> + O<sub>2</sub> ["found in mitochondrial matrix and cytosol"]
    *   **Catalase:** 2 H<sub>2</sub>O<sub>2</sub> → 2 H<sub>2</sub>O + O<sub>2</sub> ["concentrated in peroxisomes; processes 1 million H<sub>2</sub>O<sub>2</sub> molecules per second"]
    *   **Glutathione peroxidase:** H<sub>2</sub>O<sub>2</sub> + 2 GSH → GSSG + 2 H<sub>2</sub>O ["selenium-dependent; primary defense in mitochondria"]
2.  **Non-enzymatic defenses:**
    *   **Vitamin E (α-tocopherol):** Membrane-embedded; scavenges lipid peroxyl radicals.
    *   **Vitamin C (ascorbate):** Aqueous-phase scavenger; regenerates Vitamin E.
    *   **Glutathione (GSH):** Tripeptide; reduces H<sub>2</sub>O<sub>2</sub> and disulfide bonds in proteins.
    *   **β-carotene, flavonoids:** Singlet oxygen quenchers.

---

#### Cluster 9.2: Mitochondrial Diseases — LHON & MERRF
**Q: Describe mitochondrial genetic diseases: LHON and MERRF. How do mtDNA mutations cause disease? [MED]**

| Disease | Full Name | Mutation | Phenotype | Slide Notes |
| :--- | :--- | :--- | :--- | :--- |
| **LHON** | Leber Hereditary Optic Neuropathy | ND1, ND4, ND6 (Complex I genes) | Sudden vision loss (20-50 yrs); more severe in males | ["mtDNA heteroplasmy causes variable penetrance; neural tissue is especially vulnerable to ATP deficit"] |
| **MERRF** | Myoclonic Epilepsy with Ragged-Red Fibers | tRNA<sup>Lys</sup> or ND5 mutations | Progressive myopathy, myoclonus, ataxia, dementia | ["ragged-red fibers visible under microscopy due to abnormal mitochondrial proliferation"] |

**Mechanism (from biochemistry):**
1.  **mtDNA mutations reduce ATP output** — The respiratory chain cannot function efficiently, leading to energy crisis.
2.  **Tissues most affected:** Neural, cardiac, and skeletal muscle (high ATP demand, depend on aerobic metabolism).
3.  **Heteroplasmy:** Cells contain both normal (N) and mutant (M) mtDNA; disease severity depends on M/N ratio.
4.  **Maternal inheritance:** All mtDNA comes from the egg; affected mothers pass disease to ~all children.
5.  **Threshold effect (from slides):** Symptoms appear only when mutant mtDNA exceeds ~60–90% of total cellular mtDNA.

**Exam Angle (High-Yield Facts):**
- **Why Complex I?** ND genes encode 7 of 45 Complex I subunits; mutations severely impact proton pumping.
- **Why LHON is sudden?** Possibly threshold-triggered; mild energy shortage becomes acute depletion above a critical point.
- **MERRF muscle phenotype:** tRNA<sup>Lys</sup> mutations cause frameshifts in multi-gene transcripts, collapsing <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ETC</span> function.

---

### 💡 Final Exam Summary — All Sets

**Core Concepts to Master (Set-by-Set):**
- **SET 1–2:** ATP as universal currency; energetics of all reactions.
- **SET 3–4:** How electrons move; proton gradient creation (the engine).
- **SET 5–6:** Inhibitors and uncouplers; <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> mechanics (the turbine).
- **SET 7:** Shuttles, translocases, regulation (housekeeping).
- **SET 8:** Light → chemical energy (parallel process).
- **SET 9:** <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> danger; mitochondrial disease (pathophysiology).

**Memory Anchors:**
- **10 H<sup>+</sup>/NADH**, **6 H<sup>+</sup>/FADH<sub>2</sub>** → Proton stoichiometry.
- **3 ATP per 4 H<sup>+</sup>** → <span style="background-color:#fff59d; padding:0 2px; border-radius:3px;">ATP synthase</span> efficiency.
- **SOD → Catalase → Glutathione** → <span style="background-color:#ffcdd2; padding:0 2px; border-radius:3px;">ROS</span> defense pipeline.
- **Maternal inheritance + heteroplasmy threshold** → mtDNA disease logic.
*   Total ATP from 1 Glucose (Aerobic): **30 or 32** (older texts say 36/38).
---

### Connect & Subscribe(jajakallah)

- 💼 LinkedIn: [https://www.linkedin.com/in/sm-ashikur-rahman/](https://www.linkedin.com/in/sm-ashikur-rahman/)
- 💻 GitHub: [https://github.com/ashiq-sm](https://github.com/ashiq-sm)
- ▶️ YouTube: [https://www.youtube.com/@smashiqurrahman8150](https://www.youtube.com/@smashiqurrahman8150)
- 𝕏 Twitter (X): [https://x.com/smar1ashiq](https://x.com/smar1ashiq)
- ✍️ Blog: [http://smashiq.blogspot.com/](http://smashiq.blogspot.com/)
- 📘 Facebook: [https://facebook.com/sm1ar](https://facebook.com/sm1ar)
- 📣 Telegram: [https://t.me/sm_ash1q](https://t.me/sm_ash1q)
- 💬 WhatsApp: [https://wa.me/+8801773971905](https://wa.me/+8801773971905)
- 🌐 BioNotes: [https://sm-nextgen-bionotes.vercel.app/](https://sm-nextgen-bionotes.vercel.app/)`
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { geb349_sets };
}
if (typeof window !== 'undefined') {
  window.geb349_sets = geb349_sets;
}
