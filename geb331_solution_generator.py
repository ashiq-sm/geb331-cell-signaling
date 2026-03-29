#!/usr/bin/env python3
"""
GEB331 Cell Signaling Solutions Generator
Converts structured solutions → JSON → HTML/PDF/Markdown/Word/LaTeX

Usage: python3 geb331_solution_generator.py [--batch A|B|C|all] [--format html|pdf|md|docx|tex|all]
"""

import json
import os
from datetime import datetime
from pathlib import Path

class SolutionGenerator:
    def __init__(self):
        self.workspace = Path("/home/sm/Documents/3.2/cell signal/exports")
        self.solutions_db = {
            "metadata": {
                "title": "GEB331 Cell Signaling - Comprehensive Solutions",
                "institution": "Shahjalal University of Science & Technology",
                "course": "GEB 331 - Cell Signaling",
                "total_questions": 99,
                "total_marks": 800,
                "generated_date": datetime.now().isoformat(),
                "version": "1.0"
            },
            "batches": {},
            "questions": {},
            "indices": {
                "by_set": {},
                "by_marks": {},
                "by_star_rating": {}
            }
        }
        
    def create_question_template(self, q_id, exam_year, marks, set_num, stars, topic):
        """Create standardized question solution template"""
        return {
            "id": q_id,
            "exam_year": exam_year,
            "marks": marks,
            "set": set_num,
            "star_rating": stars,
            "topic": topic,
            "keywords": {},
            "mnemonic": {
                "acronym": "",
                "narrative": ""
            },
            "solution": {
                "main": "",
                "parts": {},
                "key_points": []
            },
            "table": {
                "exists": False,
                "content": ""
            },
            "flowchart": {
                "exists": False,
                "ascii_diagram": ""
            },
            "citations": [],
            "exam_insight": {
                "what_examiners_want": [],
                "common_mistakes": [],
                "perfect_answer_elements": []
            }
        }
    
    def format_bengali_english(self, english_term, bengali_term, meaning=""):
        """Format Bengali-English bilingual content"""
        if meaning:
            return f"{english_term} ({bengali_term} — {meaning})"
        return f"{english_term} ({bengali_term})"
    
    def generate_batch_a(self):
        """Generate all Q001-Q022 solutions"""
        batch_a_questions = {
            "Q001": {
                "exam_year": 2012,
                "marks": 14,
                "set": 1,
                "stars": 4,  # High frequency (appears in 2012, 2015, 2016 variations)
                "topic": "Intracellular Signaling Pathway"
            },
            "Q002": {
                "exam_year": 2015,
                "marks": 3,
                "set": 1,
                "stars": 3,
                "topic": "Components of Cell Signaling"
            },
            "Q003": {
                "exam_year": 2015,
                "marks": 3,
                "set": 1,
                "stars": 2,
                "topic": "Ligand-Receptor Interactions"
            },
            "Q004": {
                "exam_year": 2015,
                "marks": 3,
                "set": 1,
                "stars": 2,
                "topic": "Dual-Function Molecules"
            },
            "Q005": {
                "exam_year": 2015,
                "marks": 3,
                "set": 1,
                "stars": 3,
                "topic": "Signaling Mechanisms"
            },
            "Q006": {
                "exam_year": 2016,
                "marks": 14,
                "set": 1,
                "stars": 3,
                "topic": "Cell Signaling Molecules"
            },
            "Q007": {
                "exam_year": 2016,
                "marks": 14,
                "set": 1,
                "stars": 2,
                "topic": "Orphan and Nuclear Receptors"
            },
            "Q008": {
                "exam_year": 2014,
                "marks": 14,
                "set": 1,
                "stars": 3,
                "topic": "Cell-to-Cell Communication"
            },
            "Q009": {
                "exam_year": 2017,
                "marks": 7,
                "set": 1,
                "stars": 2,
                "topic": "Cell Signaling Types"
            },
            "Q010": {
                "exam_year": 2018,
                "marks": 14,
                "set": 1,
                "stars": 3,
                "topic": "Cell Communication Comprehensive"
            },
            "Q011": {
                "exam_year": 2020,
                "marks": 5,
                "set": 1,
                "stars": 2,
                "topic": "Features of Different Signaling Types"
            },
            "Q012": {
                "exam_year": 2022,
                "marks": 12,
                "set": 1,
                "stars": 4,
                "topic": "Cell Signaling Types & Concepts"
            },
            "Q013": {
                "exam_year": 2012,
                "marks": 14,
                "set": 2,
                "stars": 4,
                "topic": "G-Protein & PKA Signaling"
            },
            "Q014": {
                "exam_year": 2015,
                "marks": 3,
                "set": 2,
                "stars": 4,
                "topic": "G-Protein Function"
            },
            "Q015": {
                "exam_year": 2015,
                "marks": 4,
                "set": 2,
                "stars": 3,
                "topic": "Phototransduction"
            },
            "Q016": {
                "exam_year": 2015,
                "marks": 3,
                "set": 2,
                "stars": 2,
                "topic": "Cellular Responses of GPCRs"
            },
            "Q017": {
                "exam_year": 2016,
                "marks": 14,
                "set": 2,
                "stars": 3,
                "topic": "Phospholipase C & PKC Signaling"
            },
            "Q018": {
                "exam_year": 2016,
                "marks": 14,
                "set": 2,
                "stars": 3,
                "topic": "Olfactory Signaling"
            },
            "Q019": {
                "exam_year": 2016,
                "marks": 5,
                "set": 2,
                "stars": 2,
                "topic": "Cyclic AMP Signaling"
            },
            "Q020": {
                "exam_year": 2017,
                "marks": 7,
                "set": 2,
                "stars": 3,
                "topic": "GDP-GTP Exchange"
            },
            "Q021": {
                "exam_year": 2020,
                "marks": 6,
                "set": 2,
                "stars": 3,
                "topic": "GPCR Mode of Action"
            },
            "Q022": {
                "exam_year": 2022,
                "marks": 14,
                "set": 2,
                "stars": 4,
                "topic": "GPCR Questions (from 2022 paper)"
            }
        }
        
        # Create template for each question
        for q_id, q_metadata in batch_a_questions.items():
            self.solutions_db["questions"][q_id] = self.create_question_template(
                q_id,
                q_metadata["exam_year"],
                q_metadata["marks"],
                q_metadata["set"],
                q_metadata["stars"],
                q_metadata["topic"]
            )
    
    def export_json(self):
        """Export solutions to JSON"""
        json_path = self.workspace / "GEB331_SOLUTIONS_DATABASE.json"
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(self.solutions_db, f, indent=2, ensure_ascii=False)
        print(f"✅ JSON database created: {json_path}")
        return json_path
    
    def create_html_template(self):
        """Create interactive HTML5 template"""
        html_content = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GEB331 Cell Signaling - Comprehensive Solutions</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            line-height: 1.6;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 1.1em;
            opacity: 0.9;
        }
        
        .search-filter {
            padding: 30px;
            background: #f8f9fa;
            border-bottom: 2px solid #e0e0e0;
        }
        
        .search-box {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        
        input[type="search"],
        select {
            flex: 1;
            min-width: 200px;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1em;
            transition: border-color 0.3s;
        }
        
        input[type="search"]:focus,
        select:focus {
            outline: none;
            border-color: #667eea;
        }
        
        button {
            padding: 12px 30px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            font-weight: 600;
            transition: background 0.3s;
        }
        
        button:hover {
            background: #5568d3;
        }
        
        .questions-container {
            padding: 30px;
        }
        
        .question-card {
            background: white;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .question-card:hover {
            border-color: #667eea;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
            transform: translateY(-5px);
        }
        
        .question-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .question-title {
            font-size: 1.3em;
            font-weight: bold;
            color: #667eea;
        }
        
        .question-meta {
            display: flex;
            gap: 15px;
            font-size: 0.9em;
            color: #777;
        }
        
        .marks {
            background: #ffd700;
            color: #333;
            padding: 5px 10px;
            border-radius: 5px;
            font-weight: bold;
        }
        
        .stars {
            color: #ffc107;
            font-size: 1.2em;
        }
        
        .solution-content {
            display: none;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 2px solid #f0f0f0;
        }
        
        .solution-content.show {
            display: block;
        }
        
        .mnemonic, .table, .flowchart, .references {
            margin: 15px 0;
            padding: 15px;
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            border-radius: 5px;
        }
        
        .mnemonic {
            border-left-color: #ff6b6b;
        }
        
        .table {
            border-left-color: #51cf66;
        }
        
        .flowchart {
            border-left-color: #4dabf7;
        }
        
        .references {
            border-left-color: #ffa94d;
        }
        
        .section-title {
            font-weight: bold;
            font-size: 1.1em;
            color: #333;
            margin-bottom: 10px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
        }
        
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background: #667eea;
            color: white;
            font-weight: bold;
        }
        
        tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        .footer {
            padding: 20px;
            text-align: center;
            background: #f8f9fa;
            color: #777;
            font-size: 0.9em;
            border-top: 2px solid #e0e0e0;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.8em;
            }
            
            .question-header {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .search-box {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📚 GEB331 Cell Signaling Solutions</h1>
            <p>Comprehensive, Interactive, Searchable | All 99 Questions with Bengali-English Mix</p>
        </div>
        
        <div class="search-filter">
            <div class="search-box">
                <input type="search" id="searchBox" placeholder="🔍 Search questions, keywords, solutions...">
                <select id="filterSet">
                    <option value="">Filter by Set (All Sets)</option>
                    <option value="1">Set 1: Fundamentals</option>
                    <option value="2">Set 2: GPCR & G-Protein</option>
                    <option value="3">Set 3: RTK/PI3K/MAPK</option>
                    <option value="4">Set 4: Notch/NF-κB/Wnt</option>
                    <option value="5">Set 5: TGF-β/BMP</option>
                    <option value="6">Set 6: Ca²⁺/ER/UPR</option>
                    <option value="7">Set 7: Integration</option>
                </select>
                <select id="filterMarks">
                    <option value="">Filter by Marks (All)</option>
                    <option value="3">3 marks</option>
                    <option value="5">5 marks</option>
                    <option value="7">7 marks</option>
                    <option value="12-14">12-14 marks</option>
                </select>
                <button onclick="resetFilters()">Reset Filters</button>
            </div>
            <div style="color: #666; font-size: 0.9em;">
                <span id="resultCount">Loading questions...</span>
            </div>
        </div>
        
        <div class="questions-container" id="questionsContainer">
            <!-- Questions will be loaded here -->
        </div>
        
        <div class="footer">
            <p>📖 Generated with references to Lehninger & Alberts textbooks</p>
            <p>All 99 questions | 7 Sets | 2012-2022 + 2025-2026 Curriculum</p>
            <p>Last Updated: March 27, 2026</p>
        </div>
    </div>
    
    <script>
        // Placeholder for interactive JavaScript
        // Full implementation in next phase
        
        function toggleSolution(event) {
            const card = event.currentTarget;
            const content = card.querySelector('.solution-content');
            content.classList.toggle('show');
        }
        
        function resetFilters() {
            document.getElementById('searchBox').value = '';
            document.getElementById('filterSet').value = '';
            document.getElementById('filterMarks').value = '';
        }
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            console.log('GEB331 Solutions Dashboard initialized');
            // Load questions from embedded JSON
        });
    </script>
</body>
</html>
'''
        
        html_path = self.workspace / "GEB331_SOLUTIONS_MASTER_DATABASE_v1.html"
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"✅ HTML template created: {html_path}")
        return html_path
    
    def log_progress(self):
        """Log implementation progress"""
        progress = {
            "timestamp": datetime.now().isoformat(),
            "batch_a_questions": 22,
            "status": "Batch A template initialized, HTML template created",
            "next_steps": [
                "1. Populate Batch A Q006-Q022 full solutions",
                "2. Generate Batch B solutions (Q023-Q047, Q059-Q075)",
                "3. Generate Batch C solutions (Q048-Q058, Q076-Q099)",
                "4. Assemble Master JSON database",
                "5. Generate interactive HTML with embedded solutions",
                "6. Export to PDF/Markdown/Word/LaTeX formats"
            ]
        }
        
        log_path = self.workspace / "IMPLEMENTATION_PROGRESS.json"
        with open(log_path, 'w', encoding='utf-8') as f:
            json.dump(progress, f, indent=2)
        print(f"✅ Progress logged: {log_path}")

if __name__ == "__main__":
    print("\n🚀 GEB331 Solution Generator Initialization\n")
    print("=" * 70)
    
    gen = SolutionGenerator()
    print("✅ Generator initialized")
    
    print("\n📋 Generating Batch A metadata...")
    gen.generate_batch_a()
    print(f"✅ Batch A: 22 questions configured")
    
    print("\n💾 Exporting JSON database...")
    gen.export_json()
    
    print("\n🎨 Creating HTML5 template...")
    gen.create_html_template()
    
    print("\n📊 Logging progress...")
    gen.log_progress()
    
    print("\n" + "=" * 70)
    print("✨ PHASE 1 COMPLETE: Infrastructure initialized")
    print("\n📝 Next: Populate Batch A solutions (Q006-Q022) with full content")
    print("=" * 70 + "\n")
