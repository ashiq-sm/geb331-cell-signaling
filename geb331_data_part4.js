const geb331_sets_part4 = [
{
id: "set8",
title: "🔹 SET 8 — DNA DAMAGE, APOPTOSIS & UPR (Master Set)",
rawMd: `### DNA Damage Response (DDR)
**[Q097] List the components of DDR signaling.**

**Ans:** কোষের DNA ক্ষতিগ্রস্ত হলে (যেমন UV রশ্মি বা কেমিক্যাল দ্বারা), কোষ নিজেকে রক্ষা করতে একটি সিগন্যালিং পাথওয়ে চালায়।
1.  **Sensors:** **ATM** (Double strand break) এবং **ATR** (Single strand break) নামক প্রোটিন লিক সনাক্ত করে।
2.  **Mediators:** **p53** প্রোটিন এখানে প্রধান ভূমিকা রাখে। একে "Guardian of the Genome" বলা হয়।
3.  **Effectors:** **p21** (Cell cycle arrest করে repair করার সময় দেয়) এবং **BAX/PUMA** (যদি ড্যামেজ খুব বেশি হয়, তবে কোষকে apoptosis-এর মাধ্যমে মেরে ফেলে) [২৯৩, ২৯৪]।

---

### Apoptosis vs Necrosis
**[Q098] Differentiate between Apoptosis and Necrosis.**

**Ans:**
*   **Apoptosis:** এটি একটি নিয়ন্ত্রিত কোষ মৃত্যু (Programmed cell death)। এতে কোষ চুপসে যায়, কিন্তু চারপাশের কোষে প্রদাহ (inflammation) হয় না।
*   **Necrosis:** এটি অনিয়ন্ত্রিত কোষ মৃত্যু (Accidental death - যেমন আঘাত বা বিষক্রিয়া)। এতে কোষ ফেটে যায় এবং চারপাশের কোষে প্রদাহ সৃষ্টি করে।

---

### Final Master Review
**[Q100+] Final Summary of Components.**

**Ans:**
1.  **Ligands:** Primary messengers (e.g., Insulin, Adrenaline).
2.  **Receptors:** GPCR, RTK, Ion Channels, Nuclear Receptors.
3.  **Second Messengers:** cAMP, cGMP, IP3, DAG, Ca2+, NO.
4.  **Molecular Switches:** GEF/GAP (G-proteins) and Kinase/Phosphatase.`
}
];

if (typeof geb331_sets !== "undefined") {
  const s8idx = geb331_sets.findIndex((s) => s.id === "set8");
  if (s8idx !== -1) geb331_sets[s8idx] = geb331_sets_part4[0];
  else geb331_sets.push(geb331_sets_part4[0]);
}
