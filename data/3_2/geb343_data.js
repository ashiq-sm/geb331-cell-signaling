/**
 * GEB 343 - BIOPROCESS ENGINEERING
 * Dataset generated from all_answers.txt
 * Last Updated: April 8, 2026
 */

const geb343_sets = [
  {
    id: "set1",
    title: '🔹 SET 1 — BIOPROCESS ENGINEERING – DEFINITION, SCOPE & OVERVIEW',
    rawMd_en: `### **SET 1: BIOPROCESS ENGINEERING – DEFINITION, SCOPE & OVERVIEW**

---

#### **1.1 DEFINITION & BASIC CONCEPTS**

**What do you mean by bioprocess engineering? (2-7M, Repeat: 6, High)**
**Bioprocess Engineering** is an **interdisciplinary** (আন্তঃবিষয়ক) field that integrates principles of biology, chemistry, and engineering to design, develop, and optimize processes using biological systems—such as microorganisms (অণুজীব), plant cells, animal cells, or enzymes—to produce products of commercial value. It serves as a bridge between laboratory-scale discoveries and large-scale industrial manufacturing. Essentially, it involves the application of chemical engineering principles (such as mass transfer, heat transfer, and fluid mechanics) to biological processes.

**Briefly describe the scopes of bioprocess engineering. (2-7M, Repeat: 6, High)**
The scope of bioprocess engineering is immense, covering a wide array of sectors and unit operations:
*   **Pharmaceutical Sector:** Production of vaccines, monoclonal antibodies (mAbs), insulin, and hormones.
*   **Energy & Environment:** Development of biofuels like ethanol, biodiesel, and biogas, alongside wastewater treatment and biocomposting.
*   **Food & Agriculture:** Engineering fermented products (yogurt, beer), industrial enzymes (amylases, proteases), and biopesticides or biofertilizers.
*   **Process Engineering:** Involves **Upstream Processing** (cell growth), **Bioreactor Engineering** (design and control), and **Downstream Processing** (recovery and purification).
*   **Precision Biomanufacturing:** Modern scope includes synthetic biology and metabolic engineering to enhance yield and productivity.

| **Feature** | **Bioprocess Engineering** | **Traditional Chemical Engineering** |
| :--- | :--- | :--- |
| **Catalyst** | Living cells/enzymes (জৈব অনুঘটক) | Inorganic/Synthetic catalysts |
| **Raw Materials** | Renewable resources (sugars, agricultural waste) | Often fossil fuel-based |
| **Conditions** | Mild (Low temp, neutral pH) | Often extreme (High temp/pressure) |

**Logical Reasoning:**
*   **Why Bioprocess Engineering?** It allows for the synthesis of complex biomolecules (like therapeutic proteins) that are impossible to create via traditional chemistry.
*   **Why Not?** Biological systems are highly sensitive to environmental fluctuations and contamination, making process control more difficult than in pure chemical reactions.

---

#### **1.2 ADVANTAGES vs LIMITATIONS**

**Advantages of bioprocessing over traditional chemical process. (3-5M, Repeat: 4, High)**
*   **Sustainability (টেকসইযোগ্যতা):** It provides a renewable alternative for producing chemicals and energy, reducing dependence on fossil fuels.
*   **High Specificity:** Biocatalysts (enzymes) are highly specific, reducing unwanted byproducts.
*   **Mild Operating Conditions:** Processes typically occur at lower temperatures and pressures, which can be safer and more energy-efficient.
*   **Complex Product Synthesis:** Enabling the production of advanced therapeutics like gene therapies and monoclonal antibodies.

**Mention advantage and limitations over chemical process. (5M, Repeat: 3, Med)**
*   **Advantages:** Lower environmental footprint and the ability to use waste materials (agricultural residue, $CO_2$) as feedstocks.
*   **Limitations (সীমাবদ্ধতা):** 
    *   **Slow Reaction Rates:** Biological growth and fermentation are generally slower than chemical reactions.
    *   **Complexity:** Downstream processing is extremely difficult and accounts for **50–80% of total production costs**.
    *   **Contamination Sensitivity:** Maintaining **aseptic** (জীবাণুমুক্ত) conditions is mandatory and expensive.

**Comment on laboratory vs industry-based bioprocess. (6M, Repeat: 2, Low)**
*   **Laboratory-scale (Micro-scale):** Focuses on research, strain selection, and process development, usually in volumes of 1 to 10L. It prioritizes small-scale kinetic modeling and genetic enhancement.
*   **Industry-based (Production-scale):** Involves volumes from 100 to 2000L+. It focuses on **Scale-up** (স্কেল-আপ), addressing challenges like oxygen transfer limitations, heat removal, and maintaining consistent product yields at large volumes.

---

#### **1.3 PHASES & PROCEDURE**

**How many phases in bioprocess engineering? Illustrate steps for commercial products. (8M, Repeat: 4, High)**
A traditional bioprocess generally consists of **five major stages** to reach a commercial product:
1.  **Selection:** Choosing biological systems, substrates, and the target product.
2.  **Genetic/Kinetic Modeling:** Enhancing strains and conducting small-scale experimentation.
3.  **Scale-up:** Catalyzation in larger bioreactors and moving operational units.
4.  **Downstream Processing:** Filtration, separation, and purification of the product.
5.  **Recovery:** Final product recovery or waste elimination.

**Briefly discuss total bioprocess procedure and stages of bioprocessing. (5-7M, Repeat: 5, High)**
The procedure is strategically divided into two primary, synergistic stages:
*   **Upstream Processing (USP):** Involves preparation and cultivation. Steps include strain selection, **inoculum** (ইনোকুলাম) development, media formulation, sterilization, and fermentation/cell culture.
*   **Downstream Processing (DSP):** Begins after fermentation. It focuses on isolating, purifying, and stabilizing the target product from the complex mixture of the culture broth.

**Schematically outline upstream and downstream processing operations. (6-7M, Repeat: 5, High)**

| **Operation** | **Upstream (USP) Steps** | **Downstream (DSP) Steps** |
| :--- | :--- | :--- |
| **Preparation** | Strain selection -> Inoculum expansion | Cell harvest (Centrifugation/Filtration) |
| **Core Process** | Media formulation -> Sterilization | Cell disruption (if intracellular product) |
| **Production/Recovery** | Fermentation/Cell Culture | Product isolation (Extraction/Precipitation) |
| **Finalization** | Monitoring and control | Purification -> Polishing & Formulation |

**Logical Reasoning:**
*   **Why is USP critical?** It determines the initial product yield; better conditions upstream mean more product and lower downstream burden.
*   **Why Not skip DSP?** Because biological broths contain cells, nutrients, and impurities; the product must be purified to near 100% for human safety (especially in pharmaceuticals).

---

#### **1.4 DOWNSTREAM PROCESSING – PROTEIN PURIFICATION**

**Schematically show the steps for purification of intracellular proteins. (5M, Repeat: 1, Low)**
For products located inside the cell (like recombinant insulin), the purification sequence is:
1.  **Harvesting:** Separation of cells from the broth using centrifugation or filtration.
2.  **Cell Disruption:** Breaking the cell wall/membrane via mechanical (High-pressure homogenizer, Bead mill) or non-mechanical (Enzymatic lysis) methods.
3.  **Isolation:** Concentrating the protein and removing bulk impurities through solvent extraction or salt precipitation.
4.  **Purification:** Achieving high purity using chromatography (affinity, ion exchange) or electrophoresis.
5.  **Polishing & Formulation:** Final stabilization (e.g., lyophilization/freeze-drying) and packaging.

---

#### **1.5 INDUSTRIAL SECTORS & APPLICATIONS**

**Give a list of important industrial sectors that produce bioprocess products. (6-8M, Repeat: 4, High)**
1.  **Pharmaceutical Industry:** Producing monoclonal antibodies (mAbs), vaccines, and therapeutic proteins (insulin).
2.  **Agricultural Biotechnology:** Creating biopesticides (*B. thuringiensis*) and biofertilizers.
3.  **Renewable Energy:** Manufacturing biofuels like ethanol, biodiesel, and biogas.
4.  **Food and Beverage:** Fermentation of dairy (yogurt, cheese), brewing (beer, wine), and industrial enzyme production.
5.  **Environmental Engineering:** Wastewater treatment, bioremediation, and landfill gas recovery.

**How does bioprocess engineering play a role in antibiotics and healthcare? (4M, Repeat: 2, Low)**
Bioprocess engineering is central to healthcare by enabling the mass production of antibiotics, which are secondary **metabolites** (মেটাবোলাইট) typically produced during the stationary phase (**idiophase**) of microbial growth. It optimizes the environment (pH, temp, $O_2$) in bioreactors to ensure high titers of medicine while maintaining strict sterility to prevent dangerous contaminants. For example, it allows for the precision biomanufacturing of life-saving COVID-19 vaccines and personalized gene therapies.

**Describe current engineering processes for industrial production of fermented products. (5M, Repeat: 3, Med)**
Current industrial fermentation utilizes **Stirred-Tank Bioreactors (STRs)**, which are mechanically agitated and aerated to maintain homogeneous conditions. **Fed-batch fermentation** is the most common operating mode, where nutrients are fed gradually to maximize cell density and product yield. Advanced **Process Control & Automation** (pH, Dissolved Oxygen, and Temperature sensors) are employed to maintain consistency, improve quality, and minimize energy or nutrient wastage.

**Logical Reasoning:**
*   **Why use STRs?** They provide the most efficient mixing and oxygen transfer for robust aerobic microorganisms used in food and antibiotics.
*   **Why Not only Batch mode?** Fed-batch is preferred because it prevents substrate inhibition and extends the production phase, leading to significantly higher concentrations of the desired product.

================================================================================

---

### **SET 1 COMPARISON TABLES (High-Yield Review)**

| Dimension | Bioprocess Engineering | Traditional Chemical Process | Exam Insight |
|---|---|---|---|
| Catalyst type | Living cells/enzymes | Inorganic/chemical catalysts | Mention selectivity advantage for +mark |
| Feedstock | Renewable biomass/waste streams | Fossil-based feedstock | Use sustainability angle in long answers |
| Operating window | Mild pH/T/P | Often harsh pH/T/P | Connect to lower energy load |
| Product complexity | Excellent for proteins/biologics | Better for simple molecules | Use insulin/mAb example |
| Purification burden | Often high (DSP intensive) | Usually lower than biologics DSP | State DSP as cost bottleneck |

| USP vs DSP | Upstream Processing (USP) | Downstream Processing (DSP) |
|---|---|---|
| Goal | Biomass/product generation | Product recovery and polishing |
| Typical steps | Inoculum, media, sterilization, fermentation | Harvest, disruption, isolation, chromatography, formulation |
| Main controls | DO, pH, temperature, feed profile | Purity, yield, contaminant removal |
| Cost share trend | Lower | Higher in biologics workflows |
`,
    rawMd_bn: `[Bengali version not yet implemented — using English with Bengali terms in parentheses as per user preference]`
  },
  {
    id: "set2",
    title: '🔹 SET 2 — FLUID FLOW PHENOMENA (Static Fluid, Pressure, Viscosity, Laminar/Turbulent)',
    rawMd_en: `### **SET 2: FLUID FLOW PHENOMENA (Static Fluid, Pressure, Viscosity, Laminar/Turbulent)**
================================================================================

#### **2.1 KEY DEFINITIONS – FLUID MECHANICS**

*   **Fluid Mechanics (তরণবিজ্ঞান):** The application of engineering principles to study how fluids (liquids and gases) move, which is essential for ensuring effective mass transfer and nutrient distribution in bioreactors.
*   **Fluid Velocity Profile (বেগের রূপরেখা):** In a pipe or channel, the velocity is not uniform; it is zero at the solid boundary (**no-slip condition**) and reaches a maximum at the center, creating a specific curve or profile.
*   **Velocity Gradient (বেগের নতিমাত্রা):** The change in fluid velocity per unit distance as one moves perpendicular to the direction of flow; it describes how adjacent layers of fluid "slide" past each other.
*   **Viscosity (সান্দ্রতা):** A fundamental property representing a fluid's internal friction or resistance to flow or deformation.
*   **Shear Stress (কর্তন পীড়ন):** The force per unit area applied parallel to the surface of the fluid layers, causing them to slide.
*   **Coefficient of Viscosity (সান্দ্রতা গুণাঙ্ক):** For Newtonian fluids, this is the proportionality constant relating shear stress to the velocity gradient.

| **Viscosity Type** | **Definition** | **Units / Formula** |
| :--- | :--- | :--- |
| **Dynamic Viscosity ($\\mu$)** | Measures the force required to make a fluid flow. | Poise (P) or Centipoise (cP). |
| **Kinematic Viscosity ($\\nu$)** | Measures a fluid’s resistive flow under the influence of gravity. | Stokes (St) or $\\nu = \\mu / \\rho$. |

**Logical Reasoning:**
*   **Why use Viscosity?** It determines the power required for agitation and the efficiency of oxygen transfer in a culture broth.
*   **Why Not ignore Velocity Gradients?** Without gradients, there would be no internal mixing or heat transfer between the bulk fluid and reactor walls.

---

#### **2.2 LAMINAR vs TURBULENT FLOW**

*   **Laminar Flow (স্তরবিন্যস্ত প্রবাহ):** Occurs at low **Reynolds numbers** ($Re < 2300$ for pipes); fluid moves in smooth, parallel layers (**laminae**) without macroscopic mixing.
*   **Turbulent Flow (বিক্ষুব্ধ প্রবাহ):** Occurs at high Reynolds numbers ($Re > 20,000$ for agitated tanks); characterized by chaotic eddies, rapid fluctuations, and vigorous mixing.

| **Feature** | **Laminar Flow** | **Turbulent Flow** |
| :--- | :--- | :--- |
| **Particle Motion** | Orderly, parallel layers. | Random, chaotic eddies. |
| **Velocity Profile** | Parabolic (তীক্ষ্ণ আকৃতি). | Flatter (সমতল আকৃতি). |
| **Mixing Rate** | Low (Diffusion only). | High (Macroscopic mixing). |
| **Energy Loss** | Minimal. | High energy loss. |
| **Typical Use** | Sensitive cells (Mammalian). | Robust microbes (Bacteria/Yeast). |

**Logical Reasoning:**
*   **Why choose Turbulent flow?** It significantly enhances heat transfer and homogenization time in robust fermentations.
*   **Why Not use it for CHO cells?** The high shear stress in turbulent regimes can damage or kill fragile mammalian cells.

---

#### **2.3 BOUNDARY LAYER (সীমানা স্তর)**

*   **Definition:** A thin region near a solid surface (like a bioreactor wall or impeller blade) where the fluid velocity increases from zero at the wall to the free-stream velocity.
*   **Formation in Straight Tubes:** As fluid enters a tube, viscous effects start at the wall. The **boundary layer thickness** grows along the surface until it meets in the center, at which point the flow is "fully developed".
*   **Significance:** This layer is where heat transfer is dominated by **conduction** rather than convection, often acting as a bottleneck.

---

#### **2.4 FLUID PRESSURE & MANAGEMENT**

*   **Fluid Pressure:** The normal force exerted by a fluid per unit area ($P=F/A$).
*   **Management Factors:**
    1.  **Aseptic Conditions:** Bioreactors are kept at **0.2 to 0.5 bar(g)** (slightly pressurized) to prevent outside air from entering.
    2.  **Safety:** Management involves **Pressure Relief Valves** and rupture discs to prevent vessel failure due to overpressure.
    3.  **Consistency:** **Pressure-Reducing Valves (PRVs)** help maintain steady downstream pressure despite upstream fluctuations.
*   **Pressure Drop Measurement:** Calculated using **Differential Pressure Gauges**, which measure the difference between two points (e.g., across a filter to monitor clogging).

---

#### **2.5 PRESSURE MEASUREMENT INSTRUMENTS**

*   **Pressure Gauge (চাপমাপক যন্ত্র):** An instrument used to monitor fluid pressure for safe operation and process control.
*   **Types & Principles:**
    *   **Bourdon Tube Gauge:** A C-shaped tube that tends to straighten under pressure, moving a pointer across a dial.
    *   **Diaphragm Gauge:** Uses a flexible membrane; ideal for **corrosive or viscous** bioprocess fluids.
    *   **Digital/Electronic Gauge:** Uses electronic sensors for high precision and real-time data logging in automated facilities.

---

#### **2.6 NEWTONIAN vs NON-NEWTONIAN FLUIDS**

*   **Newtonian Fluid:** Viscosity remains constant regardless of the shear rate (e.g., water, dilute sugar solutions, honey).
*   **Non-Newtonian Fluid:** Viscosity changes as shear stress is applied (e.g., concentrated microbial broths, polymer solutions).
    *   **Pseudoplastic (Shear-thinning):** Viscosity **decreases** as shear rate increases (e.g., Xanthan gum, blood).
    *   **Bingham Plastic:** Requires a threshold **yield stress** before it begins to flow (e.g., toothpaste, ketchup).
*   **Properties of Static Fluid:**
    1.  Pressure acts **equally in all directions** at any given point.
    2.  Pressure increases linearly with **depth** due to the fluid's weight.
    3.  Static fluids are typically considered **incompressible** in liquid form.

**Logical Reasoning:**
*   **Why characterize these?** If a fermentation broth is pseudoplastic, increasing impeller speed will "thin" the fluid, making mixing easier at high speeds.
*   **Why Not assume all fluids are Newtonian?** High-density cell cultures behave very differently than water; assuming Newtonian behavior would lead to incorrect scale-up and pump sizing.

---

### **SET 2 COMPARISON TABLES (Flow & Rheology)**

| Parameter | Laminar Flow | Turbulent Flow | Bioprocess Implication |
|---|---|---|---|
| Reynolds zone | Low Re | High Re | Decide mixing regime by cell sensitivity |
| Velocity profile | Parabolic | Flatter | Influences wall shear and transport |
| Mixing mode | Diffusion-dominant | Eddy/convective | Turbulence improves homogeneity |
| Shear exposure | Lower | Higher | Mammalian cells prefer controlled shear |
| Energy requirement | Lower | Higher | Trade-off between transfer and power |

| Fluid type | Newtonian | Non-Newtonian (e.g., pseudoplastic broth) | Design consequence |
|---|---|---|---|
| Viscosity behavior | Constant with shear | Changes with shear | Pump/impeller sizing differs |
| Scale-up reliability | Easier correlations | More complex correlations | Requires rheology-aware scale-up |
| Typical examples | Water, dilute media | Dense cell/polymer broth | Use in agitation answer for extra credit |
`,
    rawMd_bn: `[Bengali version not yet implemented — using English with Bengali terms in parentheses as per user preference]`
  },
  {
    id: "set3",
    title: '🔹 SET 3 — CELL DISRUPTION & DISRUPTION OF MICROBIAL CELLS',
    rawMd_en: `### **SET 3: CELL DISRUPTION & DISRUPTION OF MICROBIAL CELLS**

#### **3.1 DEFINITION, PURPOSE & IMPORTANCE**
*   **Definition:** **Cell Disruption** (Root: *Dis* = apart + *Rupt* = break) is the process of breaking microbial cell walls and membranes to release **intracellular** (অন্তকোষীয়) components into the surrounding liquid medium.
*   **Purpose:** The primary objective is to recover valuable molecules trapped inside the cell envelope, such as enzymes (amylase, protease), recombinant proteins (insulin, vaccines), DNA, and RNA.
*   **Significance:** It is the essential first step of **downstream processing** (Root: *Down* = lower/after + *Stream* = flow) for products not naturally secreted by the host organism. Without efficient disruption, these trapped products remain inaccessible, directly affecting overall process yield and purity.

| **Feature** | **Description** |
| :--- | :--- |
| **Primary Goal** | Release of **intracellular** (অন্তকোষীয়) biomolecules. |
| **Target Organisms** | Bacteria (*E. coli*), Yeast (*S. cerevisiae*), Fungi, and Algae. |
| **Placement** | Occurs after cell harvesting and before purification. |

**Logical Reasoning:**
*   **Why Disruption?** Because most industrially important products in microbial systems are stored within the cytoplasm or periplasm.
*   **Why Not skip?** Skipping disruption would result in zero recovery of non-secreted products like recombinant insulin produced in *E. coli*.

---

#### **3.2 FACTORS TO CONSIDER DURING CELL DISRUPTION**
*   **Cell Wall Strength:** Different organisms have varying resistance; for example, fungi have tough chitin-containing walls, while mammalian cells are **fragile** (ভঙ্গুর) as they lack walls.
*   **Product Stability:** Disruption methods must ensure that **labile** (অস্থির/সহজে পরিবর্তনীয়) materials are not **denatured** (বিপ্রকৃতিস্থকরণ) by heat or hydrolyzed by internal enzymes. (Root: *De* = away + *Nature* = natural state).
*   **Downstream Impact:** The method influences the particle size and viscosity of the mixture; for instance, releasing too much DNA can make the broth highly **viscous** (আঠালো), complicating filtration.
*   **Scalability:** While sonication works well at a lab scale, only methods like High-Pressure Homogenization or Bead Milling are truly **scalable** (স্তরযোগ্য) for industrial production.

---

#### **3.3 MECHANICAL METHODS – BALL MILL & COLLOID MILL**
*   **Principle:** In these mills (often called bead mills), cell disruption occurs through high-speed **collisions and grinding** (ঘর্ষণ).
*   **Mechanism:** A cell suspension is agitated at high velocities with small, mechanically resistant beads made of glass, alumina ceramics, or titanium. Disruption efficiency is influenced by the charge of the beads and the speed of the rotating discs.
*   **Application:** This is a highly **scalable** (স্তরযোগ্য) method suitable for bacterial and fungal biomass.

---

#### **3.4 FRENCH PRESS TECHNOLOGY**
*   **Principle:** A hydraulic press forces a cell suspension through a small **orifice** (ছিদ্র) at extremely high pressure (up to 40,000 psi).
*   **Mechanism:** The disruption is caused by a combination of intense **liquid shear** and sudden **decompression** (চাপমুক্তি) as the cells exit the tiny hole, causing their membranes to rupture cleanly.
*   **Comparison:** It is highly efficient for bacterial cells and provides "clean lysis," but it is difficult to scale for large-scale production.

---

#### **3.5 HOMOGENIZER DESIGN**
*   **Variables:** Key design considerations include the size of the **pressure drop** across the valve, the shape of the impact ring, and the number of passes through the machine.
*   **Mechanism of HPH:** The **High-Pressure Homogenizer** (HPH) is the most common industrial method. It uses a positive displacement pump to force cells through an adjustable valve, inducing shear, impact, and **cavitation** (ক্যাভিটেশন—তীব্র চাপের ফলে বুদবুদ সৃষ্টি ও বিস্ফোরণ) to break the cells.

---

#### **3.6 ENZYMATIC METHODS**
*   **Enzymes Used:**
    *   **Lysozyme:** Digests bacterial peptidoglycan walls.
    *   **Cellulase/Pectinase:** Breaks down plant cell walls.
    *   **Lyticase/Glucanase:** Used for yeast cell disruption.
*   **Detergents Used:**
    *   **Ionic:** Sodium dodecyl sulfate (SDS).
    *   **Non-ionic:** Triton X-100.
    *   **Zwitterionic:** CHAPS.

| **Method** | **Advantages** | **Disadvantages** |
| :--- | :--- | :--- |
| **Enzymatic** | Highly specific and **gentle** (কোমল); preserves protein activity. | Slow and expensive; enzymes must be removed later. |
| **Chemical** | Simple and effective for protein extraction. | Contaminates the preparation; reagents are hard to remove. |

---

#### **3.7 SONICATION/ULTRASONICATION**
*   **Principle:** Uses high-frequency sound waves (~20 kHz) to create **cavitation** bubbles in a liquid. (Root: *Sonic* = sound).
*   **Procedure:** A vibrating probe is immersed in the cell suspension; the implosion of bubbles creates shock waves and intense localized shear that tear cell membranes. To prevent heat damage, it is applied in multiple short bursts while the sample is kept in an ice bath.
*   **Applications:** Ideal for small laboratory volumes (<100 mL) and fragmenting DNA to reduce the **viscosity** of lysates.

---

#### **3.8 INTEGRATION WITH DOWNSTREAM PROCESSING**
*   **Explanation:** Cell disruption cannot be viewed in **isolation** (বিচ্ছিন্নতা) because it determines the starting quality of the downstream feed. (Root: *Isolation* = set apart).
*   **Impact:** The degree of disruption directly affects the amount of protein released and the difficulty of subsequent **separation**. Over-disruption creates fine debris and releases high-molecular-weight DNA, making centrifugation and filtration significantly more difficult and costly.

**Logical Reasoning:**
*   **Why Integrate?** A balance must be struck between maximum product release and the cost/effort of the following purification steps.
*   **Why Not over-disrupt?** Because excessive shearing can damage the target protein and create an unmanageable "sludge" of cell fragments.

---

### **SET 3 COMPARISON TABLES (Cell Disruption Strategy)**

| Method class | Mechanical | Non-Mechanical | When preferred |
|---|---|---|---|
| Principle | Shear/impact/pressure/cavitation | Enzyme/detergent/osmotic action | Protein stability-driven selection |
| Throughput | High (industrial) | Low to moderate | Pilot/lab or sensitive targets |
| Capital cost | Higher equipment cost | Lower hardware, higher reagent cost | Scale and economics decide |
| Product damage risk | Heat/shear risk | Chemical carryover risk | Choose based on target fragility |

| Technique | Strength | Limitation | Best use case |
|---|---|---|---|
| High-pressure homogenizer | Scalable and robust | Heat rise, multiple passes | Bacterial biomass at production scale |
| French press | Clean lysis quality | Poor large-scale practicality | Small-scale high-quality lysis |
| Sonication | Fast in micro-volumes | Hard to scale | Lab extraction and DNA shearing |
| Enzymatic lysis | Gentle, selective | Slow and expensive | Labile intracellular proteins |
`,
    rawMd_bn: `[Bengali version not yet implemented — using English with Bengali terms in parentheses as per user preference]`
  },
  {
    id: "set4",
    title: '🔹 SET 4 — AGITATION AND MIXING OF LIQUIDS',
    rawMd_en: `### **SET 4: AGITATION AND MIXING OF LIQUIDS**

---

#### **4.1 DEFINITION, CONCEPTS & DIFFERENTIATION**

*   **Agitation (আলোড়ন):** The induced motion of a liquid by mechanical means, typically using an impeller (ইম্পেলার) or stirrer, to create fluid movement within a vessel. (Root: *Agitare* = to put into motion).
*   **Mixing (মিশ্রণ):** The random distribution of two or more initially separate phases into one another to achieve **homogeneity** (সমজাতীয় অবস্থা). (Root: *Miscere* = to blend).
*   **Factors Affecting Agitation:** 
    1.  **Impeller Geometry:** Type, diameter, and blade angle.
    2.  **Agitation Speed (RPM):** Determines the energy input and flow regime.
    3.  **Fluid Properties:** Specifically **viscosity** (সান্দ্রতা) and density.
    4.  **Vessel Design:** Presence of **baffles** (ব্যাফেলস) and the aspect ratio of the tank.

**Agitation vs. Mixing Comparison Table:**

| **Feature** | **Agitation (Action)** | **Mixing (Result)** |
| :--- | :--- | :--- |
| **Primary Goal** | Inducing circulation/motion. | Blending components uniformly. |
| **Mechanism** | Mechanical force (impellers, blades). | Random distribution of phases. |
| **Fluid State** | Often homogeneous initially. | Often heterogeneous (separate phases). |
| **Focus** | Movement of the bulk fluid. | Achieving uniform composition. |

**Laminar vs. Turbulent Flow:**

| **Feature** | **Laminar Flow (স্তরবিন্যস্ত)** | **Turbulent Flow (বিক্ষুব্ধ)** |
| :--- | :--- | :--- |
| **Motion** | Smooth, parallel layers; no cross-mixing. | Random, chaotic motion with **eddies** (ঘূর্ণি). |
| **Mixing Rate** | Low (driven by molecular diffusion). | High (macroscopic mixing). |
| **Energy Loss** | Minimal. | High due to fluctuations. |
| **Velocity Profile** | **Parabolic** (পরাবৃত্তাকার). | Flatter profile. |

**Evaluation of Perfect Mixture Condition:**
A "perfect mixture" is achieved when any sample taken from the vessel has the same composition as the bulk. In bioprocessing, this means zero concentration or temperature gradients. However, achieving this is difficult in large scales where "dead zones" (মৃত অঞ্চল) might exist.

---

#### **4.2 PURPOSES OF AGITATION**

1.  **Blending Miscible Liquids:** Ensuring uniform composition of solutions (e.g., mixing ethanol and water).
2.  **Suspending Solid Particles:** Keeping cells, microorganisms, or catalysts evenly distributed to prevent settling.
3.  **Gas Dispersion (গ্যাস বিচ্ছুরণ):** Breaking gas into bubbles to facilitate reactions like **oxygen transfer** (অক্সিজেন স্থানান্তর) in aerobic fermentation.
4.  **Heat Transfer Enhancement:** Reducing temperature gradients and improving efficiency by circulating fluid against cooling surfaces.
5.  **Liquid-Liquid Dispersion:** Helping form stable emulsions or suspensions.

---

#### **4.3 IMPELLER TYPES & DESIGN**

*   **Impeller (ইম্পেলার) Role:** It is the rotating component that converts mechanical energy from a motor into fluid motion.
*   **Major Types used in Bioprocessing:**

| **Impeller Type** | **Flow Pattern** | **Shear Level** | **Typical Use** |
| :--- | :--- | :--- | :--- |
| **Rushton Turbine** | **Radial** (পার্শ্বীয়) | High | Aerobic bacteria/yeast; gas dispersion. |
| **Hydrofoil** | **Axial** (অক্ষীয়) | Low | Animal/mammalian cells; gentle mixing. |
| **Pitched-Blade** | **Mixed** (মিশ্রিত) | Moderate | General purpose; balanced mixing. |
| **Anchor/Ribbon** | **Tangential** | Very Low | Highly viscous or non-Newtonian fluids. |

*   **Visual Sketch Descriptors:**
    *   *Rushton:* A flat disk with 4-6 vertical blades.
    *   *Pitched-Blade:* 4 blades mounted at a 45° angle.
    *   *Hydrofoil:* 3-4 tapered/curved blades.

---

#### **4.4 FLOW PATTERNS IN MIXING**

1.  **Axial Flow (Longitudinal):** Fluid moves parallel to the impeller shaft (top-to-bottom). Induced by propellers and hydrofoils. Best for solid suspension.
2.  **Radial Flow:** Fluid is pushed outward toward the vessel walls, splitting into two loops (upper/lower). Induced by Rushton turbines. Best for bubble breakup.
3.  **Tangential Flow (Swirling):** Fluid moves in a circular path around the shaft.

**The Vortex (ঘূর্ণি):**
*   **Definition:** A powerful circular current or "swirling" motion of water.
*   **Is it Beneficial?** Generally **NO**.
*   **Justifications:**
    *   **Why Not:** It creates poor top-to-bottom mixing, causes air entrapment (leading to unwanted foaming), and limits the power input that can be effectively used for mixing.
    *   **Exception:** In very specific cases, it might be used to pull floating solids from the surface, but this is rare in controlled bioreactors.

---

#### **4.5 BAFFLES & THEIR ROLE**

*   **Purpose:** Baffles are vertical plates mounted on the vessel wall to **disrupt tangential flow** and eliminate the vortex. They convert swirling motion into beneficial axial and radial currents.
*   **Heat Transfer Correlation:**
    *   **Opinion:** There is a **strong positive correlation**. 
    *   **Reasoning:** Agitation reduces the thickness of the **thermal boundary layer** (তাপীয় সীমানা স্তর) at the reactor wall. Pairing a radial impeller (like Rushton) with **tubular baffles** (which can act as internal heat exchangers) induces distributed turbulence along the baffle surface, significantly enhancing the heat transfer coefficient ($h$).

---

#### **4.6 MIXING PERFORMANCE EVALUATION**

Mixing is evaluated using dimensionless numbers:
1.  **Reynolds Number ($Re$):** $\\frac{\\rho v L}{\\mu}$. Classifies flow as laminar ($Re < 2300$) or turbulent ($Re > 20,000$).
2.  **Power Number ($N_P$):** $\\frac{P}{\\rho N^3 D^5}$. Relates power input to fluid density and impeller speed.
3.  **Pumping Number ($N_Q$):** $\\frac{Q}{ND^3}$. Measures the volumetric flow rate discharged by the impeller.
4.  **Mixing Time:** The time required to reach a specific level of homogeneity (e.g., 95%) after adding a tracer.

---

#### **4.7 EQUIPMENT USED IN AGITATION**

*   **Stirred-Tank Bioreactor (STR):** The most common vessel using mechanical impellers.
*   **Magnetic Agitators:** Used in small laboratory settings using a rotating magnetic field.
*   **Jet Mixers:** Use high-velocity fluid jets instead of moving parts.
*   **Static (Motionless) Mixers:** Rely on the fluid's own flow through structured internal channels.
*   **Airlift Bioreactors:** Use gas bubbles to induce circulation without mechanical stirrers (low shear).

---

**Logical Reasoning Summary:**
*   **Why use Baffles?** Without them, the fluid just spins (tangential flow), resulting in poor mixing and a deep vortex. Baffles turn that energy into useful vertical and horizontal circulation.
*   **Why choose Rushton for Bacteria?** Because bacteria need massive amounts of oxygen, and the high-shear radial flow of a Rushton turbine is the most effective at breaking air bubbles into a large surface area for gas transfer.
*   **Why use Hydrofoils for CHO cells?** Mammalian cells lack a cell wall and are **shear-sensitive** (কর্তন-সংবেদনশীল). Hydrofoils move large volumes of liquid at lower speeds, providing necessary mixing without tearing the cells apart.

---

### **SET 4 COMPARISON TABLES (Agitation & Mixing)**

| Item | Agitation | Mixing | Key distinction |
|---|---|---|---|
| Meaning | Mechanical fluid motion input | Uniformity outcome in vessel | Action vs result |
| Primary control knobs | Impeller type, RPM, baffles | Time-to-homogeneity, gradients | Evaluate with mixing time |
| Failure mode | Vortexing, poor circulation zones | Concentration/temperature non-uniformity | Use baffles to convert flow pattern |

| Impeller | Flow pattern | Shear level | Typical biological system |
|---|---|---|---|
| Rushton turbine | Radial | High | Aerobic bacteria/yeast |
| Hydrofoil | Axial | Low | Shear-sensitive cell cultures |
| Pitched blade | Mixed axial-radial | Medium | General-purpose bioreactor duty |
| Anchor/ribbon | Tangential in viscous media | Low-medium | High-viscosity/non-Newtonian fluids |
`,
    rawMd_bn: `[Bengali version not yet implemented — using English with Bengali terms in parentheses as per user preference]`
  },
  {
    id: "set5",
    title: '🔹 SET 5 — HEAT TRANSFER (Conduction, Convection, Heat Exchanger, Dimensionless Numbers)',
    rawMd_en: `### **SET 5: HEAT TRANSFER (Conduction, Convection, Heat Exchanger, Dimensionless Numbers)**

---

#### **5.1 HEAT TRANSFER MECHANISMS & FOURIER'S LAW**

*   **Natural Convection (প্রাকৃতিক পরিচলন):** This occurs when fluid motion is initiated by **density differences** (ঘনত্বের পার্থক্য) caused by temperature gradients, such as warmer fluid rising and cooler fluid falling. (Root: *Con* = together + *vehere* = to carry).
*   **Dimensionless Number (মাত্রাবিহীন সংখ্যা):** Ratios with no physical units used to compare the strength of different forces or transport types acting on a fluid. (Root: *Di* = apart + *Metri* = measure).
*   **Four Examples:** Reynolds number (Re), Prandtl number (Pr), Nusselt number (Nu), and Grashof number (Gr).
*   **Fourier's Law of Conduction (পরিবহনের ফুরিয়ার নীতি):** The fundamental governing equation is $Q = -kA \\cdot \\frac{dT}{dx}$. Here, $Q$ is the heat transfer rate, $k$ is thermal conductivity, $A$ is the area, and $\\frac{dT}{dx}$ is the temperature gradient. The negative sign indicates that heat flows from high to low temperature.
*   **Steps of Heat Transfer by Conduction:** 
    1.  Transfer occurs through solid materials or stationary fluids via **molecular vibrations**.
    2.  Energy is transferred between **adjacent molecules**.
    3.  Heat moves from a higher temperature region to a lower temperature region without bulk material movement.

---

#### **5.2 HEAT CONDUCTION CALCULATIONS**

*   **Steady-State Slab Formula:** For constant temperatures over time, use $Q = \\frac{kA(T_1 - T_2)}{L}$.
*   **Glass Window (কাঁচের জানালা):** Glass is a **poor conductor** with a thermal conductivity ($k$) of 1–1.5 W/m·K.
*   **Iron Piece Calculation (লোহার টুকরো):** Stainless steel is a **good conductor** ($k = 15–20$). 
    *   *Example Calculation:* For a 5mm ($0.005$m) wall with area $3.0$ m² and $\\Delta T = 17^\\circ$C, $Q = \\frac{16 \\cdot 3.0 \\cdot 17}{0.005} = 163,200$ W or **163.2 kW**.

---

#### **5.3 CONVECTION & CONVECTIVE COOLING**

*   **Forced Convection (প্রণোদিত পরিচলন):** Heat transfer where fluid is forced to flow over a surface by **external means** such as a pump, fan, or impeller.
*   **Applications:**
    *   **Man-made:** Agitation by impellers in Stirred-Tank Bioreactors (STRs), pumped cooling water in jackets, and sparged air circulation.
    *   **Natural:** Buoyancy effects (উত্থান শক্তি) like air rising from a radiator or water circulating in a pot before boiling.
*   **Convective Cooling Process:**
    1.  At the heated body's surface, fluid velocity is zero (**no-slip condition**).
    2.  Heat transfer from the surface to the adjacent thin layer is by **pure conduction**.
    3.  Outside this **boundary layer** (সীমানা স্তর), bulk fluid motion (convection) carries the heat away.

---

#### **5.4 DIMENSIONLESS NUMBERS (Reynolds, Prandtl, Nusselt)**

*   **Necessity:** They allow fair comparisons between small laboratory models and full-size industrial equipment (**scaling laws**) and identify which forces control fluid behavior.
*   **Nusselt Number (Nu):** Compares **convective heat transfer** (পরিচলন) to **conductive heat transfer** (পরিবহন). Significance: Represents the enhancement of heat transfer due to fluid motion.
*   **Reynolds Number (Re):** Ratio of **inertia forces** (জড়তা) to **viscous forces** (সান্দ্রতা). Physical significance: Indicates whether flow is laminar (smooth) or turbulent (chaotic).
*   **Prandtl Number (Pr):** Relates **momentum diffusivity** to **thermal diffusivity**. Physical significance: Describes the relative thickness of velocity and thermal boundary layers.
*   **Overall Heat Transfer Coefficient (U):** A measure of the total ability of a series of conductive and convective barriers to transfer heat. $Q = U \\cdot A \\cdot \\Delta T$.

---

#### **5.5 HEAT EXCHANGER – DEFINITION & SIGNIFICANCE**

*   **Definition:** A device designed to separate vapors from boiling liquids or transfer thermal energy between two fluids separated by a structural wall.
*   **Industrial Significance:**
    1.  **Enzyme Reactors:** Maintaining optimal catalytic temperature (30–40°C).
    2.  **Fermentation:** Removing **metabolic heat** produced by cell growth (e.g., 60–70 kW in a 10,000L reactor).
    3.  **Downstream:** Crucial for concentration, crystallization, and drying.

---

#### **5.6 HEAT EXCHANGER TYPES & MODES**

| **Exchanger Type** | **Mode of Action / Principle** | **Typical Example** |
| :--- | :--- | :--- |
| **Shell and Tube** | One fluid flows through tubes while another flows in the "shell" around them. Baffles redirect flow to improve the HTC. | Large-scale utility cooling. |
| **Plate** | Thin metal sheets allow heat transfer across the plate by **pure conduction**. | Downstream protein processing. |
| **Agitated Thin-Film** | Wiper blades distribute feed as a thin film over a heating jacketed surface. | Highly viscous or heat-sensitive products. |

---

#### **5.7 HEAT EXCHANGER EFFICIENCY & FACTORS**

1.  **Thermal Conductivity (k):** High $k$ materials like stainless steel are more efficient than glass.
2.  **Surface Area (A):** Larger areas allow more heat exchange.
3.  **Temperature Difference ($\\Delta T$):** Higher driving force increases heat flux.
4.  **Fouling/Scale Formation (আস্তরণ জমা):** Undesirable deposits add significant thermal resistance, drastically reducing efficiency.

---

#### **5.8 HEAT TRANSFER MECHANISMS IN DETAIL**

*   **Conduction:** Transfer through vessel walls or internal coils via molecular vibration.
*   **Convection:** Dominant mode in culture broth; involves macroscopic fluid motion induced by agitation.
*   **Radiation (বিকিরণ):** Heat transfer by electromagnetic waves. (Root: *Radius* = ray). Significance: Usually **minor** in liquid bioprocessing because temperatures are moderate (30–120°C) and surfaces have low emissivity.

---

#### **5.9 HEAT TRANSFER TYPES & INFLUENCE ON FLUID FLOW**

*   **Influence on Fluid Flow:** Agitation reduces the thickness of the **thermal boundary layer**, significantly enhancing the heat transfer coefficient ($h$). **Turbulent flow** enhances mixing and heat transfer but increases **shear stress**.
*   **Gel-like Products (জেল-জাতীয় পণ্য):** Choosing **evaporation** is common for concentrated/viscous products. Agitated thin-film (wiped-film) evaporators are ideal as they handle viscosities up to **100 poise**. (Root: *Vapor* = steam).
*   **Hydrophobic Channels (জলবিদ্বেষী চ্যানেল):** Driving fluid through such channels with localized heaters creates temperature gradients that can influence thin-film flow and metabolic states in micro-scale processing.

---

### **Logical Reasoning: Whys & Why Nots**

*   **Why use Stainless Steel Bioreactors?** Because they have high thermal conductivity ($k = 16–20$), facilitating efficient removal of metabolic heat compared to glass or plastic.
*   **Why use Forced Convection?** Natural convection is too weak and non-uniform, which could lead to **"hot spots"** (উত্তপ্ত এলাকা) and cell death in large-scale fermenters.
*   **Why Not ignore Fouling?** Scale formation acts as an additional conductive layer with **poor conductivity**, acting as a major industrial bottleneck in heat removal.

---

### **SET 5 COMPARISON TABLES (Heat Transfer Master Table)**

| Mode | Driving mechanism | Dominant domain | Bioprocess relevance |
|---|---|---|---|
| Conduction | Temperature gradient in stationary medium | Walls/coils/solid layers | Controls wall-to-fluid heat path |
| Convection | Bulk fluid motion + gradient | Agitated broth and jackets | Main mechanism in stirred vessels |
| Radiation | Electromagnetic emission | High-temperature surfaces | Usually minor in liquid bioprocessing |

| Dimensionless number | Physical meaning | Typical interpretation |
|---|---|---|
| Reynolds (Re) | Inertial vs viscous effect | Flow regime indicator |
| Prandtl (Pr) | Momentum diffusivity vs thermal diffusivity | Relative boundary layer thickness |
| Nusselt (Nu) | Convective vs conductive heat transfer | Heat transfer enhancement metric |
| Overall U | Combined resistance through all layers | Directly tied to exchanger duty |
`,
    rawMd_bn: `[Bengali version not yet implemented — using English with Bengali terms in parentheses as per user preference]`
  },
  {
    id: "set6",
    title: '🔹 SET 6 — EVAPORATION (Principles, Types, Industrial Applications, Multiple Effects)',
    rawMd_en: `### **SET 6: EVAPORATION (Principles, Types, Industrial Applications, Multiple Effects)**

---

#### **6.1 DEFINITION & PRACTICAL CONCEPTS**

*   **Evaporation (Engineering Sense):** It is a **thermal separation process** (তাপীয় পৃথকীকরণ প্রক্রিয়া) where a solvent (usually water) is removed from a liquid solution by **controlled boiling** (নিয়ন্ত্রিত স্ফুটন) to concentrate non-volatile solutes. (Root: *Vapor* = steam).
*   **Evaporator:** A specialized **heat exchanger** (তাপবিনিময়কারী যন্ত্র) designed to separate vapors from boiling liquids. It consists of a heating unit, a vapor separation area, and a structural body.
*   **Properly Designed Evaporator Criteria:**
    1.  **Heat Transfer Rate:** Must provide high rates to boil the solvent efficiently.
    2.  **Residence Time** (বাসস্থানকাল): Must be kept short for heat-sensitive biological products.
    3.  **Fouling Resistance:** Designed to minimize **undesirable deposits** (আস্তরণ জমা) on heating surfaces.
    4.  **Vapor-Liquid Separation:** Must effectively separate the concentrated solute from the vapor.

#### **6.2 EVAPORATION vs BOILING**
| **Feature** | **Evaporation (Industrial)** | **Boiling (General)** |
| :--- | :--- | :--- |
| **Context** | A unit operation used for **product concentration**. | A physical phase change from liquid to gas. |
| **Control** | Occurs under controlled pressure and temperature using equipment. | Occurs whenever vapor pressure equals external pressure. |
| **Purpose** | To increase **solute concentration** (ঘনত্ব বৃদ্ধি). | Simple change of state. |

---

#### **6.3 FACTORS AFFECTING EVAPORATION RATE**

1.  **Available Surface Area ($A$):** Larger areas allow more thermal energy to be transferred, increasing the rate.
2.  **Temperature Difference ($\\Delta T$):** The driving force; a larger gradient between the heating medium (steam) and the liquid increases evaporation.
3.  **Heat Transfer Coefficient ($U$):** Measures how efficiently heat moves; it is limited by **viscosity** (সান্দ্রতা) and surface **fouling**.
4.  **Viscosity:** As a liquid concentrates, its viscosity increases, which thickens the liquid film and slows down heat transfer.
5.  **Boiling Point Elevation (BPE):** The boiling point of a solution is higher than that of pure water, requiring more energy to maintain the rate.

---

#### **6.4 FALLING FILM EVAPORATOR**

*   **Process:** Liquid is fed at the **top** of long vertical tubes and flows downward by gravity, assisted by vapor drag. It forms a thin, fast-moving film (reaching velocities up to 200 m/s).
*   **Suitability:** Ideal for **highly heat-sensitive** products like milk or fruit juices because it offers extremely short residence times (20–40 seconds).

#### **6.5 CLIMBING FILM (RISING FILM) EVAPORATOR**

*   **Working Principle:** Feed enters at the **bottom** of long tubes. As it boils, vapor bubbles form and carry the liquid **upward** as a thin, turbulent film.
*   **Requirements:** Needs a minimum $\\Delta T$ of **15°C** between the heating medium and the liquid to overcome gravity. Best for **low-viscosity** liquids.

#### **6.6 WIPED FILM (AGITATED THIN-FILM) EVAPORATOR**

*   **Description:** Consists of a heating jacket and a **rotor with wiper blades**. These blades mechanically distribute the feed as a very thin film over the heating wall.
*   **Advantage:** Achieves high heat transfer for **highly viscous** (up to 100 poise), foamy, or extremely heat-sensitive materials.

---

#### **6.7 MULTIPLE EFFECT EVAPORATORS (MEE)**

*   **Action:** To improve **steam economy** (বাষ্প সাশ্রয়), several evaporators are connected in series. The vapor produced from the first "effect" serves as the heating medium for the second, which operates at a **lower pressure**.
*   **Feeding Procedures:**
    *   **Forward Feed:** Feed and steam enter the first (hottest) effect; best for hot/sensitive feeds.
    *   **Backward Feed:** Feed enters the last (coldest) effect; best for viscous products.
    *   **Parallel Feed:** Feed is added independently to each effect; used for crystallization.
*   **Economic Balance:** Adding effects increases **capital investment** (a two-effect system costs twice as much as a single-effect). However, it drastically reduces **operating costs**; for example, a second effect can halve steam consumption.

---

#### **6.8 EVAPORATION IN BIOPROCESSING & FERMENTERS**

*   **Significance:** Evaporation is a critical part of **downstream processing** (DSP) used to:
    1.  **Concentrate bioactives** (e.g., proteins, enzymes) while preserving their stability using vacuum.
    2.  **Reduce volume** to lower transportation and storage costs.
    3.  **Prepare feeds** for further steps like drying (spray-drying) or crystallization.

#### **6.9 EVAPORATION MEASUREMENT METHODS**

*   **Measurement/Estimation:**
    1.  **Dimensionless Analysis:** Calculating the **Nusselt Number ($Nu$)**, which compares convective to conductive heat transfer, to estimate enhancement from fluid motion.
    2.  **Simulation Software:** Using CFD (Computational Fluid Dynamics) to find average heat transfer coefficients ($h$) via surface integrals.

---

#### **6.10 INDUSTRIAL APPLICATIONS**
| **Sector** | **Application Example** |
| :--- | :--- |
| **Dairy** | Pre-concentrating milk to 50% solids before producing **milk powder**. |
| **Beverage** | Concentrating orange juice worldwide (triple-effect is common). |
| **Food** | Producing **tomato paste** at temperatures below 70°C to preserve color/flavor. |
| **Sugar** | Refining sugar by concentrating juice from 12 Brix to 65 Brix. |
| **Pharma** | Recovering organic acids or concentrating enzymes. |

---

### **Logical Reasoning: Whys & Why Nots**

*   **Why use Falling Film for Milk?** Because it has the shortest residence time (seconds), which prevents **protein denaturation** (বিপ্রকৃতিস্থকরণ) and "cooked" flavors.
*   **Why use Multiple Effects?** It is only cost-effective when evaporation rates exceed **1,000 kg/h**; the energy savings justify the high initial cost of the extra vessels.
*   **Why Not use Rising Film for Viscous fluids?** A thicker film impedes heat transfer and prevents the vapor from efficiently pushing the liquid up the tubes, causing stalling.

---

### **SET 6 COMPARISON TABLES (Evaporation Design Choices)**

| Evaporator type | Film behavior | Best for | Limitation |
|---|---|---|---|
| Falling film | Thin film down tube wall | Heat-sensitive liquids | Requires good distribution |
| Climbing/rising film | Vapor-lifted upward film | Low-viscosity feeds | Not ideal for very viscous fluids |
| Wiped/agitated thin film | Mechanically renewed thin layer | Viscous/foamy/thermal-sensitive products | Higher mechanical complexity |

| Configuration | Steam economy | Capital cost | Typical use case |
|---|---|---|---|
| Single-effect | Low | Low | Small throughput operations |
| Multiple-effect | High | Higher | Large-scale concentration lines |
| Forward feed | Simpler hot-feed progression | Moderate | Heat-sensitive feeds |
| Backward feed | Better for viscous final liquor | More pumping load | High-viscosity product targets |
`,
    rawMd_bn: `[Bengali version not yet implemented — using English with Bengali terms in parentheses as per user preference]`
  },
  {
    id: "set7",
    title: '🔹 SET 7 — BIOCOMPOSTING PROCESSES & FACTORS',
    rawMd_en: `### **SET 7: BIOCOMPOSTING PROCESSES & FACTORS**

---

#### **7.1 BASICS**

**Define bio-composting/composting. Outline process. (5-8M, Repeat: 6, High)**
*   **Composting:** The **aerobic** (সবাত/অক্সিজেন-নির্ভর) decomposition of organic materials by microorganisms under controlled conditions. (Root: *Com* = together + *Posit* = place/put).
*   **Bio-composting:** A natural process involving the **decomposition** (পচন/বিশ্লেষণ) of organic wastes (plant residues, food waste, manure) by a community of **microorganisms** (bacteria, fungi) and **macro-organisms** (worms, insects) into a nutrient-rich, soil-like substance called compost.
*   **Process Outline:** 
    1.  **Feedstocks:** Mixing "Green" (nitrogen-rich) and "Brown" (carbon-rich) materials.
    2.  **Microbial Action:** Bacteria and fungi break down simple sugars and starches.
    3.  **Heat Production:** Biological activity generates heat (up to 70°C), killing **pathogens** (রোগজীবাণু).
    4.  **Maturation:** Materials transform into stable organic matter, minerals, and beneficial microbes.

**Types of biocomposting: aerobic vs. anaerobic. (5-6M, Repeat: 5-6, High)**
1.  **Aerobic Composting:** Decomposition in the presence of oxygen, producing $CO_2$, heat, and water vapor. It is fast and efficient.
2.  **Anaerobic Composting (Digestion):** Occurs without oxygen. Anaerobic bacteria produce methane ($CH_4$), $CO_2$, and organic acids. It is slower and often used for biogas production.
3.  **Vermicomposting:** Uses earthworms (e.g., *Eisenia fetida*) to consume and convert waste into nutrient-rich castings.
4.  **Bokashi Composting:** An anaerobic fermentation process using specific microorganisms and airtight containers.

---

#### **7.2 AEROBIC vs. ANAEROBIC COMPOSTING**

| **Feature** | **Aerobic Bio-Composting** | **Anaerobic Bio-Composting** |
| :--- | :--- | :--- |
| **Oxygen** | Required. | Not required. |
| **Mixing** | Requires regular turning/aeration. | Typically does not require mixing. |
| **Heat** | Significant heat produced (kills pathogens). | No heat produced. |
| **Decomposition Time** | Short (weeks to months). | Long (months to years). |
| **Byproducts** | $CO_2$ and water vapor. | Methane ($CH_4$) and $CO_2$. |

**Benefits of Aerobic Composting (6M, Repeat: 4, High):**
It is highly efficient for waste volume reduction, produces no foul odors if managed correctly, and the high temperatures reached (thermophilic phase) effectively eliminate weed seeds and harmful microbes.

---

#### **7.3 MICROBES IN COMPOSTING**

**Role of nematodes, actinomycetes, worms during bio-composting. (6M, Repeat: 3, Med)**
*   **Microbes (Bacteria/Actinomycetes):** Perform the primary biochemical breakdown of sugars, simple celluloses, and proteins. **Actinomycetes** are particularly effective in the later stages of breakdown.
*   **Macro-organisms (Worms/Insects):** Act as mechanical shredders and processors. **Earthworms** (Vermiculture) consume organic matter and excrete vermicompost, which is rich in enzymes and beneficial soil microbes.

**Describe bio-enriched compost production method. (6M, Repeat: 4, High)**
Bio-enrichment involves adding specific microbial cultures to enhance the nutrient profile:
1.  **Preparation:** Moisten organic base (e.g., coir pith) to 60-70% moisture.
2.  **Inoculation:** Add **bioinoculants** (জৈব-টিকা) like *Trichoderma*, *Azotobacter*, or Phosphate Solubilizing Bacteria (PSB).
3.  **Supplementation:** Optionally add nitrogen sources like urea to boost initial microbial proliferation.
4.  **Management:** Maintain temperature (30-35°C) and turn every 7-10 days for 30-40 days until maturation.

**Why is Trichoderma spp. known as compost fungal activator? (3-4M, Repeat: 5, High)**
*   **Cellulolytic activity:** It produces enzymes that rapidly break down **cellulose** (সেলুলোজ) and **lignin** (লিগনিন), which are otherwise resistant to degradation.
*   **Pathogen suppression:** It acts as a **bio-fungicide**, inhibiting the growth of harmful soil fungi.

---

#### **7.4 COMPOSTING PHASES & TIMELINE**

**Phases of Bio-Composting (3M, Repeat: 3, Med)**
1.  **Lag Phase:** Adaptation period; microbes feed on simple sugars/amino acids. Temperature begins to rise.
2.  **Active Phase (High Rate):** Exponential microbial growth and intensified bio-oxidation. Temperatures can reach **70°C**. Lasts 1-5 weeks.
3.  **Curing Phase (Maturation):** Formation of stable, humus-like substances. Microbial activity and temperature decline to ambient levels.

---

#### **7.5 & 7.6 FACTORS & CONDITIONS**

**Major Factors Affecting Bio-composting (5M, Repeat: 4, High):**
1.  **Feedstock Selection:** A balanced mix of nitrogen-rich "Green" and carbon-rich "Brown" materials.
2.  **C:N Ratio:** The ideal ratio is **25-30:1**. Too much carbon slows the process; too much nitrogen causes odors.
3.  **Moisture Content:** Must be kept at **50-60%**. Insufficient moisture stops microbial growth.
4.  **Aeration:** Essential for oxygen supply; maintained via regular turning.
5.  **Temperature:** 54-71°C is ideal for decomposition and safety.
6.  **pH Level:** A neutral to slightly alkaline pH (**7-8**) is optimal.

---

#### **7.7 BENEFITS & APPLICATIONS**

*   **Soil Improvement:** Improves soil structure, aeration, and water retention capacity.
*   **Nutrient Recycling:** Returns N, P, and K to the soil, reducing reliance on chemical fertilizers.
*   **Environmental Conservation:** Reduces greenhouse gas emissions by diverting waste from landfills where it would produce methane.
*   **Pollution Reduction:** Helps detoxify contaminated soils and reduces leachate (পচানো তরল বর্জ্য) production.

---

#### **7.8 ADVANCED COMPOSTING METHODS**

*   **Rapid Production:** Utilizing *Trichoderma* can reduce maturation time to **30-40 days**.
*   **Aerated Static Pile:** Uses large linear piles with a **forced air** supply (fans/pipes) to maintain oxygen levels without manual turning.
*   **Bio-energy:** Compostable waste can be diverted to produce **bio-ethanol** through fermentation or **biogas** through anaerobic digestion.

---

#### **7.9 ANAEROBIC DIGESTION (AD) & BIOGAS PRODUCTION**

**Definition and Role (6M, Repeat: 4, High):**
**Anaerobic Digestion** is a four-stage biological process that converts organic matter into methane-rich biogas in the absence of oxygen. It is vital for **waste-to-energy** conversion and sustainable waste management.

**Four Stages of AD & Microbes Involved (8M, Repeat: 3, Med):**
1.  **Hydrolysis:** Polymers (carbohydrates, lipids, proteins) $\\rightarrow$ Monomers. Microbes: *Firmicutes, Bacteroidetes*.
2.  **Acidogenesis:** Monomers $\\rightarrow$ Volatile Fatty Acids (VFAs) and alcohols. Microbes: Acidogenic bacteria.
3.  **Acetogenesis:** VFAs $\\rightarrow$ Acetate and Hydrogen. Microbes: **Acetogens** (e.g., *Syntrophobacter*).
4.  **Methanogenesis:** Acetate/Hydrogen $\\rightarrow$ Methane ($CH_4$) and $CO_2$. Microbes: **Methanogenic Archaea**.

**Methanogens vs. Acetogens (6M, Repeat: 2, Low):**
Acetogens convert acids into acetate and hydrogen, while methanogens consume these products to create methane. They exist in **syntrophy** (সহজৈবিক পুষ্টি/পারস্পরিক সহায়তা), as methanogens keep hydrogen levels low enough for acetogens to function.

**Efficiency Factors (6M, Repeat: 3, Med):**
Efficiency is influenced by **temperature** (Mesophilic: 30-38°C vs. Thermophilic: 50-57°C), **pH** (Methanogens need 6.5-8.0), and the **C/N ratio**.

---

### **Logical Reasoning: Whys & Why Nots**

*   **Why turn aerobic compost?** To supply oxygen to microbes and prevent the pile from becoming anaerobic, which would cause foul odors and slow down decomposition.
*   **Why is Hydrolysis the bottleneck?** Because extracellular enzymes must break down large, insoluble **biopolymers** (জৈব পলিমার), which is a slow and often incomplete process.
*   **Why Not use compost immediately?** "Raw" compost can contain pathogens or high levels of organic acids that harm plants. The **curing phase** ensures the material is stable and safe for soil application.
*   **Why use Trichoderma for Coir Pith?** Coir pith has very high lignin and cellulose; *Trichoderma* is uniquely equipped with the enzymatic "machinery" to digest these tough fibers quickly.



================================================================================

---

### **SET 7 COMPARISON TABLES (Composting & Biogas)**

| Feature | Aerobic composting | Anaerobic digestion |
|---|---|---|
| Oxygen requirement | Required | Excluded |
| Main outputs | Stabilized compost + CO2 + heat | Biogas (CH4/CO2) + digestate |
| Process speed | Faster | Slower but energy-producing |
| Odor profile | Lower when properly aerated | Higher risk if poorly controlled |
| Core application | Soil conditioner production | Waste-to-energy systems |

| AD stage | Main conversion | Dominant microbial group | Control focus |
|---|---|---|---|
| Hydrolysis | Polymers to monomers | Hydrolytic bacteria | Retention time, particle size |
| Acidogenesis | Monomers to VFAs/alcohols | Acidogens | pH drift monitoring |
| Acetogenesis | VFAs to acetate/H2/CO2 | Acetogens | Hydrogen balance |
| Methanogenesis | Acetate/H2 to methane | Methanogenic archaea | Strict pH and toxicity control |
`,
    rawMd_bn: `[Bengali version not yet implemented — using English with Bengali terms in parentheses as per user preference]`
  },
  {
    id: "set8",
    title: '🔹 SET 8 — INTEGRATED BIOPROCESS CONCEPTS',
    rawMd_en: `### **SET 8: INTEGRATED BIOPROCESS CONCEPTS**
================================================================================

#### **8.1 MICRO-SCALE BIOPROCESSING**
*   **Definition:** **Micro-scale bioprocessing** refers to laboratory-scale (গবেষণাগার-স্কেল) operations, typically ranging from **0.5 to 10 Liters**. It is the fundamental stage where biological systems are first studied and optimized before moving to larger volumes. (Root: *Micro* = small + *Scale* = relative size).
*   **Benefits:**
    1.  **Process Development:** Allows for the study of flow-pattern decisions and early process definitions.
    2.  **Strain Selection:** Ideal for testing high-performing cell lines or modified microbial strains under precisely controlled conditions.
    3.  **Cost-Efficiency:** Reduces the consumption of expensive media and reagents while identifying optimal growth kinetics.
    4.  **Kinetic Modeling:** Enables small-scale experimentation to predict oxygen demand and metabolic behavior.

**Logical Reasoning:**
*   **Why start at Micro-scale?** Because it is safer and more economical to fail or optimize at a 1L scale than in a 2000L production fermenter.
*   **Why Not stay at Micro-scale?** While excellent for research, it cannot produce the large quantities of products (like vaccines or biofuels) required to meet global commercial demand.

---

#### **8.2 SOLUTION PROCESSING & SCOPE**
*   **Scope in Bioprocessing:** In the context of engineering, this involves managing the **culture broth** (কালচার ব্রোথ—অণুজীব ও পুষ্টির মিশ্রণ) or liquid production mixture.
*   **Key Scopes include:**
    1.  **Separation:** Removing cells or solid debris from the harvested liquid mixture using centrifugation or filtration.
    2.  **Concentration:** Using unit operations like **evaporation** (বাষ্পীভবন) to reduce volume and increase the stability of bioactives in the solution.
    3.  **Purification:** Selectively isolating the target molecule from the liquid phase through chromatography or ultrafiltration.
    4.  **Formulation:** Preparing the final product by adding stabilizers or buffers to the purified solution.

---

#### **8.3 FACTORS AFFECTING BIOPROCESSING (Internal & External)**
A bioprocess is a dynamic system influenced by biological (internal) and environmental/mechanical (external) variables.

| **Category** | **Specific Factors** | **Impact on Process** |
| :--- | :--- | :--- |
| **Internal Factors** (আভ্যন্তরীণ) | Metabolic Pathways & Kinetics | Determines the rate of biochemical reactions and product formation. |
| | Cell Physiology & Growth Phase | Influences how cells respond to stress and when they produce metabolites. |
| | Genetic Stability | Ensures the production host maintains high productivity throughout the run. |
| **External Factors** (বাহ্যিক) | **Physicochemical:** pH, Temp, $DO$, Pressure | Critical for maintaining the optimal environment for enzyme activity and cell life. |
| | **Mechanical:** Agitation, Aeration, Shear Stress | Affects the efficiency of oxygen/nutrient transfer and can damage sensitive cells. |
| | **Nutritional:** Media composition & Feeding strategy | Directly affects biomass density and total product titer. |

**Logical Reasoning:**
*   **Why monitor External Factors?** Biological systems are highly **sensitive** (সংবেদনশীল) to fluctuations; even a ±0.1°C change can cause heat-shock responses or protein denaturation in mammalian cells.
*   **Why focus on Internal Kinetics?** Understanding the "bottlenecks" in a cell's metabolism allows engineers to use genetic manipulation to bypass those limits and increase yield.

---

#### **8.4 BIOTECHNOLOGIST ROLES IN BIOPROCESSING**
*   **Bridge Maker:** The biotechnologist serves as the essential bridge between laboratory-scale genetic discoveries and industrial-scale manufacturing.
*   **Major Roles:**
    1.  **Strain Improvement:** Selecting and genetically modifying microorganisms or cell lines to achieve high productivity.
    2.  **Process Optimization:** Designing nutrient-rich media and finding the "operating window" (perfect pH, temp, $O_2$ balance) for growth.
    3.  **Scale-up Expertise:** Solving challenges related to maintaining efficiency (mixing, heat transfer) when moving from 1L to 2000L volumes.
    4.  **Regulatory Compliance:** Ensuring that bioprocesses follow strict guidelines like **GMP** (Good Manufacturing Practice) and **Safety Standards**, especially for pharmaceuticals.
    5.  **Downstream Strategy:** Designing efficient recovery routes to ensure high product purity while minimizing costs.

**Logical Reasoning:**
*   **Why is the Biotechnologist role unique?** Unlike traditional engineers, they must understand both the "living" nature of the catalyst (biology) and the "physical" constraints of the equipment (engineering) to succeed.

---

### **SET 8 COMPARISON TABLES (Integrated Decision Framework)**

| Scale | Typical volume | Main objective | Typical risk |
|---|---|---|---|
| Micro-scale | 0.5-10 L | Screening/kinetics/proof-of-concept | Poor scale relevance if overfitted |
| Pilot-scale | 10-500 L | Transfer validation and parameter window | Transfer mismatch |
| Production-scale | 500 L to multi-m3 | Cost, robustness, compliance | Mixing/heat/oxygen bottlenecks |

| Factor class | Representative variables | Typical impact |
|---|---|---|
| Internal (biological) | Metabolic pathway, growth phase, genetic stability | Sets intrinsic yield/productivity ceiling |
| External physicochemical | pH, temperature, DO, pressure | Directly controls cellular performance |
| External mechanical | Agitation, aeration, shear | Defines transport efficiency and cell stress |
| External nutritional | Medium composition, feed strategy | Controls biomass and product titer trajectory |
`,
    rawMd_bn: `[Bengali version not yet implemented — using English with Bengali terms in parentheses as per user preference]`
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = geb343_sets;
}