/**
 * GEB334 - ONCOLOGY & VIROLOGY
 * Structured course data with Standard & Smart Mix views
 * Last Updated: April 2026
 */

const GEB334Data = {
  courseTitle: 'GEB334: Oncology & Virology',
  courseCode: 'GEB334',
  credits: 3,
  semesters: [2023, 2022, 2021, 2020, 2017, 2016, 2015, 2014, 2013],
  
  sets: [
    {
      setNumber: 1,
      setTitle: 'Introduction to Oncology',
      clusters: [
        {
          clusterId: '1.1',
          clusterName: 'Core Definitions and Growth Kinetics',
          years: [2023, 2022, 2016, 2015, 2014, 2013],
          marks: '1-5',
          questions: [
            {
              id: 'Q1.1.1',
              type: 'definition',
              standard: 'Define: Oncology, Neoplasm, Tumor, Cancer, Tumorigenesis',
              smartmix: `ONCOLOGY [অর্বুদবিজ্ঞান]: Branch of medicine dealing with prevention, diagnosis, and treatment of cancer. Root: Oncos (mass/bulk) + Logia (study).

NEOPLASM [নতুন কোষ সমষ্টির অস্বাভাবিক বৃদ্ধি]: Group of cells undergoing autonomous, unregulated growth forming a mass or distributed diffusely. Root: Neo (new) + Plasm (formation).

TUMOR [টিউমার/অর্বুদ]: Mass or lump of tissue developed when cells reproduce too quickly. Not all tumors are cancerous; some benign.

CANCER [কর্কটরোগ]: Group of diseases characterized by abnormal cell growth with potential to invade or spread. Forms subset of neoplasm.

TUMORIGENESIS [ক্যান্সার সৃষ্টির প্রক্রিয়া]: Multi-step process by which normal cells transform into cancer cells. Also called oncogenesis or carcinogenesis.`,
              years: [2023, 2022, 2016, 2015],
              marks: [1, 3, 4, 5]
            },
            {
              id: 'Q1.1.2',
              type: 'mechanism',
              question: 'What is neoplasm? Describe in brief the mechanism of tumor cell growth.',
              standard: 'Neoplasm: autonomous growth of cellular mass. Mechanism: mutations disrupt regulatory circuits → autonomous signaling → invasion.',
              smartmix: `NEOPLASM DEFINITION: Group of cells undergoing autonomous, unregulated growth, forming mass or distributed diffusely.

MECHANISM OF TUMOR CELL GROWTH:
1. GENETIC MUTATION [DNA 손상]: Cell undergoes DNA damage disrupting regulatory circuits controlling growth
2. AUTONOMOUS SIGNALING [자율 신호]: Cells divide without "Go" signals from body; growth factor independence [성장인자 독립성]
3. ADHESION LOSS [부착 분자 손실]: Cancer cells lack molecules (cadherins, integrins) holding them together → enabling invasion of nearby tissues [인접 조직 침략]
4. UNCONTROLLED PROLIFERATION [무제어 증식]: Division continues without normal growth checkpoints, causing exponential increase in cellular mass`,
              years: [2023],
              marks: 4
            },
            {
              id: 'Q1.1.3',
              type: 'kinetics',
              question: 'What do you mean by neoplasm? Write down the kinetics of tumor cell growth.',
              standard: 'Kinetics: Doubling time (~36 days), Growth fraction (~30%), Gompertzian growth pattern',
              smartmix: `KINETICS OF TUMOR CELL GROWTH [종양 세포 성장 역학]:

1. DOUBLING TIME [배 증가 시간]: Time taken for tumor to double in size. Brain tumors approximately 36 days. Varies by tumor type and location [종류 및 위치에 따라 변함]. Calculated as: ln(2)/ln(GF × division rate)

2. GROWTH FRACTION [성장 분율]: Percentage of cells actively proceeding through cell cycle (M, S, G1, G2 phases). Averages only ~30% in most tumors. Most tumor cells in G0 (resting state) [휴지 상태], not dividing [분열 중 아님].

3. GOMPERTZIAN GROWTH [곰페르츠 성장]:
   - As tumor enlarges, doubling time INCREASES not decreases
   - Growth fraction DECREASES due to limited nutrients [영양 부족][산소 부족]
   - Hypoxia [저산소증] in tumor core triggers necrosis [괴사]
   - Larger tumors grow MORE slowly proportionally
   - Model: dV/dt = λV ln(V_max/V)`,
              years: [2015, 2014],
              marks: 5
            },
            {
              id: 'Q1.1.4',
              type: 'signs_symptoms',
              question: 'Define cancer. Write down the signs and symptoms of cancer.',
              standard: 'Cancer: disease of abnormal cell growth with invasion and metastasis potential',
              smartmix: `CANCER DEFINITION [암/악성 신생물]: Group of diseases characterized by abnormal cell growth with potential to invade nearby tissues and metastasize to distant organs. Forms subset of neoplasm; subset have metastatic capability.

SIGNS AND SYMPTOMS OF CANCER [암의 징후와 증상]:

A. LOCAL SYMPTOMS [국소 증상] (at tumor site):
   - Lump/Mass formation [종괴 형성] (e.g., breast cancer palpable mass)
   - Skin changes [피부 변화]: dimpling, erythema [홍반], ulceration [궤양]
   - Discharge [분비물]: nipple discharge [유두 분비], bloody stools [혈변]
   - Pain [통증]: persistent, localized to tumor area
   - Organ dysfunction [장기 기능 부전]: hoarseness (throat), difficulty swallowing (esophagus)

B. SYSTEMIC SYMPTOMS [전신 증상] (widespread/constitutional):
   - Cachexia [극심한 악액질]: severe malnutrition/wasting state [극심한 주리ity—অত্যন্ত কৃশতা], loss of appetite [식욕 부진], weight loss >10% body weight
   - Anemia [빈혈]: Low hemoglobin [Hb ↓], fatigue [피로], dyspnea [호흡곤란]
   - Fever [열]: Low-grade persistent fever, night sweats [야간 발한]
   - Lymphadenopathy [림프절병]: enlargement of lymph nodes [림프절 종대]

C. NEUROLOGICAL SYMPTOMS [신경학적 증상] (brain involvement):
   - Seizures [경련/발작—খিঁচুনি]: convulsions, loss of consciousness [의식 소실]
   - Headaches [두통]: persistent, often worse in morning [아침에 더 악화]
   - Ataxia [운동실조]: loss of coordination [협응 상실]
   - Cognitive changes [인지 변화]: confusion, memory loss [기억력 손상]

D. PARANEOPLASTIC SYNDROMES [부종양 증후군]:
   - Hypercalcemia [고칼슘혈증]: excessive calcium, PTHrP secretion [뼈 가용화]
   - Hyponatremia [저나트륨]: SIADH from small cell lung cancer
   - Thrombosis [혈전증]: hypercoagulability [응고 증가]`,
              years: [2023],
              marks: 3
            }
          ]
        },
        {
          clusterId: '1.2',
          clusterName: 'Benign vs Malignant Tumors',
          years: [2023, 2022, 2021, 2017],
          marks: '4-5',
          questions: [
            {
              id: 'Q1.2.1',
              type: 'comparison',
              question: 'What do you mean by benign and malignant tumor? Differentiate between benign and malignant tumor.',
              standard: 'Benign: slow growth, encapsulated, no metastasis. Malignant: rapid growth, invasive, metastatic',
              smartmix: `BENIGN TUMOR [양성 종양]:
- Growth Rate [성장 속도]: Slow [ধীর গতি], years to decades
- Encapsulation [캡슐화]: Well-defined capsule [잘 정의된 캡슐], contained growth
- Invasiveness [침습성]: Non-invasive [비침습적], respects tissue borders
- Metastasis [전이]: Never metastasizes, remains at original site
- Cellular Differentiation: Well-differentiated [잘 분화됨], resembles normal cells
- Growth Control: Responds to growth factors, has growth limits
- Recurrence [재발]: Rarely recurs after complete removal [완벽 제거 후 드물게 재발]
- Pathological Grade: Low grade, slow proliferation [낮은 등급]

MALIGNANT TUMOR (CANCER) [악성 종양]:
- Growth Rate [성장 속도]: Rapid [দ্রুত গতি], months to years
- Encapsulation: Not encapsulated [আবরণীহীন], infiltrates surrounding tissues
- Invasiveness [침습성]: Invasive [অনুপ্রবেশকারী/আক্রমণাত্মক], invades adjacent structures/organs
- Metastasis: Can metastasize [স্থানান্তর কর다] to distant organs via blood/lymph
- Cellular Differentiation: Poorly differentiated [poorly—분화되지 않은], "primitive" appearance, high nuclear:cytoplasmic ratio
- Growth Control: Growth factor-independent [인자 무관], no growth limits [성장 제한 없음]
- Recurrence: Often recurs even after complete removal [제거 후에도 재발]
- Pathological Grade: High grade, high proliferation [높은 등급]

KEY DISTINCTION: Malignant tumors penetrate basement membrane [기저막 관통] and enter bloodstream [혈류 진입] to form secondary tumors [2차 종양] in distant organs.`,
              years: [2023],
              marks: 4
            }
          ]
        }
      ]
    },
    {
      setNumber: 2,
      setTitle: 'Spread of Tumors',
      clusters: [
        {
          clusterId: '2.1',
          clusterName: 'Tumor Invasion and Dissemination',
          years: [2023, 2022, 2016, 2014, 2013],
          marks: '1-5',
          questions: [
            {
              id: 'Q2.1.1',
              type: 'mechanism',
              question: 'What do you mean by tumor invasion? Describe in brief the pathway of tumor invasion.',
              standard: 'Invasion: capacity to breach basement membrane and penetrate stroma through 3-step process',
              smartmix: `TUMOR INVASION [종양 침입]: The distinguishing hallmark of malignancy [악성성의 특징]. Capacity of tumor cells to disrupt basement membrane [기저막—종양 주변의 단백질 층] and penetrate underlying stroma [기질—세포 주변의 구조].

Unlike benign growths, invasive cells DO NOT RESPECT anatomical boundaries [해부학적 경계 무시].

3-STEP INVASION THEORY [3단계 침입 이론]:

STEP 1 - ATTACHMENT [접착]:
- Tumor cells bind to extracellular matrix (ECM) [세포 외 기질]
- Mechanism: Surface receptors (integrins [인테그린], cadherins) bind ECM proteins (fibronectin, laminin)
- Role: 아드헤시온 분자 [attachmentike adhesion—아착분자들]

STEP 2 - PROTEOLYSIS [단백질 분해]:
- Local degradation of basement membrane and ECM [기저막과 세포외기질 분해]
- Mechanism: Secretion of Matrix Metalloproteinases (MMPs) [기질금속단백분해효소]
  * MMP-2 (gelatinase A) [젤라틴분해효소-A]
  * MMP-9 (gelatinase B)
  * Other collagenases [콜라게나제]
- These enzymes "melt away" collagen [콜라겐 용해], fibronectin pathways
- Process: Enzyme breaks peptide bonds [펩 결합 끊김] in structural proteins [구조 단백질]
- Tissue literally degraded: 에서지운데 깎아낸다 [enzyme으로 tissue를 깎아내어 erosion]

STEP 3 - LOCOMOTION [이동]:
- Migration into degraded region [부식된 영역으로 이동]
- Mechanism: Formation of invadopodia [침입감지세포현상—pseudopodia-like extensions]
  * Actin-rich protrusions [액틴 풍부한 돌출]
  * Extending into newly created gaps [새로 만든 간격으로 확장]
  * Allow cell body to follow [세포체 따라 이동]
- Chemotaxis [화학주성]: Movement toward chemotactic gradients [화학 기울기 방향]`,
              years: [2023],
              marks: 4
            }
          ]
        },
        {
          clusterId: '2.2',
          clusterName: 'Metastasis and Spread',
          years: [2023, 2022, 2017, 2016, 2014, 2013],
          marks: '1-5',
          questions: [
            {
              id: 'Q2.2.1',
              type: 'steps',
              question: 'What is metastasis? Write down the steps involved in metastasis.',
              standard: 'Metastasis: growth separate from primary; involves 7-step metastatic cascade',
              smartmix: `METASTASIS [전이]: A growth, separate from the primary tumor, that has arisen from detached, transported fragments of the original mass. Root: Meta (change) + Stasis (place) [স্থানান্তর/দূরবর্তী অঙ্গে বিস্তার].

THE METASTATIC CASCADE - 7 STAGES [전이 폭폭포]:

STAGE 1 - INVASION [침수]:
- Breaking through basement membrane into local tissue
- Process: Tumor cells use MMPs to degrade BM [기저막 분해]
- Result: Access to stromal tissue and vasculature [혈관계]
- Example: Epithelial cancer cells breach epithelial-stromal border

STAGE 2 - ANGIOGENESIS [혈관신생]:
- Induction of new blood vessel formation around tumor
- Mechanism: Tumor secretes VEGF (Vascular Endothelial Growth Factor) [혈관내피세포 성장인자]
- Purpose: Provide nutrients [영양], oxygen [산소], entry route for circulation
- Without angiogenesis: Can't grow beyond 2-3 mm³ (diffusion limit) [확산 한계]

STAGE 3 - INTRAVASATION [정맥내유입]:
- Entry of tumor cells into blood or lymph stream [혈류 진입]
- Process: Cancer cells invade through vessel walls [혈관 벽 침입]
- Mechanism: Similar to tissue invasion—MMPs degrade endothelial basement membrane [혈관 내피세포 기저막]

STAGE 4 - CIRCULATION [순환]:
- Travel through body as Circulating Tumor Cells (CTCs) [순환 종양 세포]
- Challenge: Blood turbulence, mechanical shearing [기계적 손상]
- Defense Mechanism: CTCs clump with platelets [혈소판과 응집] for protection
- Hostile Environment: Immune cells attack; endothelial damage possible

STAGE 5 - ARREST [정지]:
- Mechanical wedging or sticking to capillary walls of distant organ [어느 먼쪽 장기의 모세혈관]
- Process: Physical size match—CTC lodges in narrow capillary
- Selectivity: Not random; certain cancers preferentially arrest in specific organs
- Timeline: Usually occurs within hours of entering circulation [몇 시간 내]

STAGE 6 - EXTRAVASATION [혈관외유출]:
- Cells slip out of vessel and into organ's tissue [혈관에서 조직으로 빠져나감]
- Process: Cells adhere, degrade endothelial BM, exit into stroma [기질로 퇴출]
- Duration: Takes 8–24 hours; most laboriously step [가장 힘든 단계]
- Survival: <0.01% of CTCs successfully extravasate

STAGE 7 - GROWTH [성장]:
- Proliferation into secondary tumor/metastatic colony [2차 종양 덩어리로 증식]
- Requirement: Must adapt to new microenvironment [새로운 미세환경]
- Speed: Initially slow (dormancy), then accelerating [초기: 느림 (휴면); 후: 가속]
- Challenge: May face immune recognition in new organ [새로운 장기에서 면역 인식]`,
              years: [2023],
              marks: 4
            }
          ]
        }
      ]
    },
    {
      setNumber: 3,
      setTitle: 'Molecular Basis of Cancer',
      clusters: [
        {
          clusterId: '3.1',
          clusterName: 'Proto-oncogenes and Oncogene Activation',
          years: [2023, 2022, 2021, 2017, 2016, 2015, 2014, 2013],
          marks: '1-9',
          questions: [
            {
              id: 'Q3.1.1',
              type: 'definition_mechanism',
              question: 'What is proto-oncogene? Write down the mechanism of oncogene activation.',
              standard: 'Proto-oncogene: normal growth gene. Activation: 5 mechanisms create overactive form',
              smartmix: `PROTO-ONCOGENE [원암기인자]: Normal cellular genes that regulate cell growth, division, differentiation [정상적인 성장 조절 유전자]. Present in ALL normal cells. Root: Pro (before) + Onco (cancer) [암이 되기 전의 기인자].

ONCOGENE [암유전자]: Mutated or overexpressed version of proto-oncogene with cancer-causing potential [암유전자—ক్ୟান्সার সৃষ्টिକारী जिन]. Expression leads to uncontrolled growth [조절되지 않는 성장].

5 MECHANISMS OF ONCOGENE ACTIVATION [5 가지 활성화 메커니즘] (M-A-I-D-T):

1. POINT MUTATION [점 돌연변이]:
   - Single DNA base pair change (e.g., G→T)
   - Result: Alters single amino acid in protein
   - Effect: Makes protein rigid or hyperactive [단백질 과활성]
   - Example: ras gene mutation (G at codon 12 → A) [라스 유전자 돌연변이]
   - Consequence: p21 protein CANNOT hydrolyze GTP → permanently ACTIVE

2. AMPLIFICATION [유전자 증폭]:
   - Increase in gene copy number [유전자 카피 수 증가]
   - Mechanism: Unequal crossing over [부등 교차], breakage-fusion-bridge cycles
   - Result: Overproduction of encoded protein [단백질 과다 생산]
   - Example: HER-2/neu in breast cancer (10-100x copy number) [유방암의 HER-2/neu]
   - Detected: By fluorescence in situ hybridization (FISH) [형광 제자리 하이브리드화]

3. INSERTION [삽입]:
   - Viral DNA regulatory sequences (LTRs—Long Terminal Repeats) integrate [바이러스 DNA 삽입]
   - Mechanism: Retroviral integration near proto-oncogene
   - Effect: LTR enhancer drives proto-oncogene transcription
   - Example: Rous Sarcoma Virus (RSV) src insertion [라우스 육종 바이러스]
   - Result: Constitutive src kinase activity [계속적인 활성]

4. DELETION [유전자 결손]:
   - Loss of chromosomal segment [염색체 부분 손실]
   - Effect: Removes tumor suppressor gene "brakes" [종양억제 유전자 제거]
   - Two-Hit Hypothesis: Loss of BOTH alleles required [양쪽 대립유전자 모두 손실]
   - Example: RB1 deletion in Retinoblastoma [망막모세포종에서 RB1 결손]
   - Consequence: "Unmasking" of malignancy [악성 노출]

5. TRANSLOCATION [염색체 전위]:
   - Gene moves to new chromosomal position [새로운 염색체 위치로 이동]
   - Usually: Next to active promoter/enhancer [활성 프로모터/증강자 근처]
   - Result: Overexpression via new regulatory context [새로운 조절 환경에서 과발현]
   - Example: c-myc t(8;14) in Burkitt's lymphoma [버킷 림프종의 c-myc 전위]
     * c-myc (chr 8) → next to Ig Heavy chain enhancer (chr 14)
     * Result: 10-100x deregulated expression [조절되지 않은 발현]`,
              years: [2023],
              marks: 4
            }
          ]
        },
        {
          clusterId: '3.2',
          clusterName: 'Oncogene Products and Gene Families',
          years: [2023, 2021, 2017, 2015, 2014, 2013],
          marks: '4-5',
          questions: [
            {
              id: 'Q3.2.1',
              type: 'function',
              question: 'What do you mean by oncogene products? Discuss the characteristics and function of oncogene products.',
              standard: 'Oncogene products are proteins mimicking growth signals but permanently activated',
              smartmix: `ONCOGENE PRODUCTS [암유전자 산물]: Proteins encoded by mutated or overexpressed oncogenes. These proteins MIMIC normal signaling molecules BUT remain "PERMANENTLY SWITCHED ON" [항상 켜진 상태].

KEY CHARACTERISTIC: Bypass physiological requirements for growth signals [성장 신호 요구 우회].

FUNCTIONAL CLASSIFICATION OF ONCOGENE PRODUCTS [기능적 분류]:

1. GROWTH FACTORS (External Signals) [성장인자]:
   - Location: Extracellular [세포외]
   - Example: sis (PDGF—Platelet-Derived Growth Factor) [혈소판 유래 성장인자]
   - Function: Stimulate cell proliferation [세포 증식 자극]
   - Mechanism: Autocrine loop—tumor cell makes its own growth signals [자동분비 루프]

2. GROWTH FACTOR RECEPTORS (Signal Receivers) [성장인자 수용체]:
   - Location: Cell Membrane [세포막]
   - Examples: erb-B (EGF-R), HER-2/neu, FGFR
   - Function: Transmit growth signals into cell [세포 내로 신호 전달]
   - Mechanism: Ligand binding → conformational change → cytoplasmic tail phosphorylation [인산화]

3. SIGNAL TRANSDUCERS (Intracellular Messengers) [신호 전달자]:
   - Location: Cytoplasm [세포질]
   - Examples: ras family (H-ras, K-ras, N-ras), src, abl
   - Function: Relay growth messages from membrane to nucleus [막에서 핵까지]
   - Mechanism: Protein kinases [단백질 키나제] phosphorylate downstream effectors

4. TRANSCRIPTION FACTORS (Gene Controllers) [전사 인자]:
   - Location: Nucleus [핵]
   - Examples: myc family (c-myc, N-myc, L-myc), fos, jun
   - Function: Regulate gene expression [유전자 발현 조절]
   - Mechanism: Bind DNA consensus sequences → activate/repress transcription

UNIVERSAL CHARACTERISTICS:
- Autonomous Activity [자율적 활동]: No external trigger needed for activation [활성화에 외적 자극 불필요]
- Dominant Action [우성 작용]: Single mutant allele sufficient for transformation [하나의 돌연변이 대립유전자로 충분]
- Constitutive Expression [구성적 발현]: Always "ON"; no off switch [항상 켜져 있음]
- Enhanced Stability [향상된 안정성]: Longer protein half-life than normal [정상보다 더 긴 반감기]`,
              years: [2023],
              marks: 4
            }
          ]
        }
      ]
    }
  ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GEB334Data;
}