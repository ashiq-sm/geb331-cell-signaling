#!/usr/bin/env python3
"""
GEB 331 Mock Exam Generator
Generates randomized 60-mark mock exams matching the 2022 format
"""

import json
import random
from datetime import datetime
from pathlib import Path

# Question database (simplified version - expand with all 98 questions)
QUESTIONS = {
    "Q001": {"topic": "Intracellular Signaling", "marks": 14, "stars": 6, "section": "Principles"},
    "Q002": {"topic": "Signal Types", "marks": 7, "stars": 4, "section": "Principles"},
    "Q003": {"topic": "Ligand-Receptor", "marks": 5, "stars": 3, "section": "Principles"},
    "Q013": {"topic": "GPCR-PKA Pathway", "marks": 14, "stars": 6, "section": "G-Protein"},
    "Q024": {"topic": "Ras-G12V Cancer", "marks": 14, "stars": 6, "section": "RTK-MAPK"},
    "Q028": {"topic": "Mutation Effects", "marks": 7, "stars": 4, "section": "RTK-MAPK"},
    "Q032": {"topic": "Notch Pathway", "marks": 14, "stars": 6, "section": "Proteolysis"},
    "Q034": {"topic": "Wnt Beta-Catenin", "marks": 10, "stars": 5, "section": "Proteolysis"},
    "Q035": {"topic": "NF-kB TNFa", "marks": 7, "stars": 4, "section": "Proteolysis"},
    "Q040": {"topic": "TGF-beta SMAD", "marks": 14, "stars": 5, "section": "SMAD"},
    "Q045": {"topic": "BMP vs TGF-beta", "marks": 8, "stars": 4, "section": "SMAD"},
    "Q051": {"topic": "ER Stress UPR", "marks": 14, "stars": 5, "section": "Calcium"},
    "Q056": {"topic": "Hypoxia HIF1a", "marks": 10, "stars": 3, "section": "Calcium"},
    "Q059": {"topic": "Bacterial Chemotaxis", "marks": 10, "stars": 4, "section": "Bacterial"},
    "Q049": {"topic": "CaMKII Memory LTP", "marks": 7, "stars": 3, "section": "Learning"},
}

class MockExamGenerator:
    def __init__(self, total_marks=60, min_6star=2, min_5star=2):
        self.total_marks = total_marks
        self.min_6star = min_6star
        self.min_5star = min_5star
        self.selected_questions = []
        
    def generate(self):
        """Generate a mock exam meeting all constraints"""
        random.seed(datetime.now().timestamp())
        
        # Separate questions by star rating
        q6 = [q for q, d in QUESTIONS.items() if d["stars"] == 6]
        q5 = [q for q, d in QUESTIONS.items() if d["stars"] == 5]
        q4 = [q for q, d in QUESTIONS.items() if d["stars"] == 4]
        q3 = [q for q, d in QUESTIONS.items() if d["stars"] == 3]
        
        # Select minimum required high-star questions
        selected = []
        selected_marks = 0
        
        # Force at least min_6star questions with 6 stars
        for q in random.sample(q6, min(self.min_6star, len(q6))):
            selected.append(q)
            selected_marks += QUESTIONS[q]["marks"]
        
        # Force at least min_5star questions with 5 stars
        for q in random.sample(q5, min(self.min_5star, len(q5))):
            if q not in selected:
                selected.append(q)
                selected_marks += QUESTIONS[q]["marks"]
        
        # Fill remaining marks with random selection
        all_q = [q for q in QUESTIONS.keys() if q not in selected]
        random.shuffle(all_q)
        
        for q in all_q:
            if selected_marks >= self.total_marks:
                break
            if selected_marks + QUESTIONS[q]["marks"] <= self.total_marks + 2:  # Allow small overage
                selected.append(q)
                selected_marks += QUESTIONS[q]["marks"]
        
        self.selected_questions = sorted(selected)
        return self.selected_questions, selected_marks
    
    def generate_pdf_content(self):
        """Generate text content for exam paper"""
        content = []
        content.append("=" * 80)
        content.append("GEB 331 CELL SIGNALING - MOCK EXAM PAPER")
        content.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
        content.append("=" * 80)
        content.append("")
        content.append("INSTRUCTIONS:")
        content.append("- Answer ALL questions")
        content.append("- Time: 3 hours (total 60 marks)")
        content.append("- Time management: 1 minute per mark")
        content.append("- Show all working and pathways")
        content.append("- Answer high-mark questions first")
        content.append("")
        content.append("=" * 80)
        content.append("")
        
        total_marks = 0
        for i, q_id in enumerate(self.selected_questions, 1):
            q_data = QUESTIONS[q_id]
            marks = q_data["marks"]
            total_marks += marks
            
            content.append(f"QUESTION {i}: {q_id}")
            content.append(f"Topic: {q_data['topic']} ({q_data['stars']}* stars)")
            content.append(f"Marks: {marks}")
            content.append("-" * 40)
            content.append("[Question text would appear here - see main study guide]")
            content.append(f"Space for answer ({marks} marks):")
            content.append("\n" * (marks // 2))  # Space proportional to marks
            content.append("=" * 80)
            content.append("")
        
        content.append(f"TOTAL MARKS: {total_marks}")
        return "\n".join(content)
    
    def generate_answer_key_template(self):
        """Generate template for answer key"""
        content = []
        content.append("=" * 80)
        content.append("MODEL ANSWER KEY - FOR MARKING ONLY")
        content.append(f"Exam Date: {datetime.now().strftime('%Y-%m-%d')}")
        content.append("=" * 80)
        content.append("")
        
        total_marks = 0
        for q_id in self.selected_questions:
            q_data = QUESTIONS[q_id]
            marks = q_data["marks"]
            total_marks += marks
            
            content.append(f"\n{q_id}: {q_data['topic']} ({marks} marks)")
            content.append("-" * 40)
            content.append(f"Model Answer: [See main study guide - {q_id} section]")
            content.append(f"Marking Rubric:")
            content.append(f"  - Understanding of concept: {marks // 2} marks")
            content.append(f"  - Explanation & detail: {marks // 4} marks")
            content.append(f"  - Clarity & diagram: {marks // 4} marks")
            content.append("")
        
        content.append("=" * 80)
        content.append(f"TOTAL MARKS: {total_marks}")
        return "\n".join(content)


def generate_practice_schedule():
    """Generate a study schedule for practice exams"""
    schedule = """
GEB 331 MOCK EXAM PRACTICE SCHEDULE
====================================

WEEK 1: Foundation
  Monday: Generate Mock Exam 1, Take it (3 hours)
  Tuesday: Review answers, identify weak topics (2 hours)
  Wednesday: Study weak topics (3 hours)
  
WEEK 2: Intermediate
  Monday: Generate Mock Exam 2, Take it (3 hours)
  Tuesday: Review, compare with Exam 1 progress (2 hours)
  Wednesday: Targeted review of new weak areas (3 hours)
  
WEEK 3: Advanced
  Monday: Generate Mock Exam 3, Take it (3 hours, timed strictly)
  Tuesday: Full review + self-assessment (2 hours)
  Wednesday: Final targeted study of most difficult topics (3 hours)
  
EXAM WEEK
  Monday: Light review, no new material
  Tuesday: Review this cheat sheet 3x
  Wednesday: EXAM DAY - Rest, don't cram!

TIPS FOR EACH MOCK EXAM:
✓ Time yourself! Use timer set to (marks × 1 minute)
✓ Write on paper as if real exam
✓ Don't look at notes during exam (use for checking after)
✓ Score yourself HONESTLY (mark wrong answers)
✓ Identify patterns in what you got wrong:
  - Same topic repeated? Study that section more
  - Time management issue? Practice faster writing
  - Concept confusion? Use teach-back prompts
"""
    return schedule


# Command-line interface
if __name__ == "__main__":
    import sys
    
    print("GEB 331 MOCK EXAM GENERATOR")
    print("=" * 60)
    print()
    
    # Generate exam
    generator = MockExamGenerator(total_marks=60, min_6star=2, min_5star=2)
    questions, total = generator.generate()
    
    print(f"Generated Mock Exam ({total} marks)")
    print(f"Questions: {', '.join(questions)}")
    print()
    
    # Export options
    print("Options:")
    print("1. Generate exam paper (text)")
    print("2. Generate answer key template")
    print("3. Show study schedule")
    print("4. Generate new exam")
    
    choice = input("\nSelect option (1-4): ").strip()
    
    if choice == "1":
        content = generator.generate_pdf_content()
        filename = f"MockExam_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
        Path(filename).write_text(content)
        print(f"\n✓ Exam paper saved to: {filename}")
        print(content[:500] + "\n[... content truncated ...]")
        
    elif choice == "2":
        content = generator.generate_answer_key_template()
        filename = f"AnswerKey_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
        Path(filename).write_text(content)
        print(f"\n✓ Answer key template saved to: {filename}")
        
    elif choice == "3":
        schedule = generate_practice_schedule()
        print(schedule)
        
    elif choice == "4":
        print("\n" + "=" * 60)
        generator2 = MockExamGenerator()
        q2, t2 = generator2.generate()
        print(f"New Exam Generated: {', '.join(q2)} ({t2} marks)")
        
    else:
        print("Invalid choice")
