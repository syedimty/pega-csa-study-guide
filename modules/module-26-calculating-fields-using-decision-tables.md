# Module 26: Calculating Fields Using Decision Tables

**Duration:** ~25 mins | **Topics:** 1 | **Level:** Intermediate

## Overview
Use Decision Tables to calculate field values based on multiple criteria. Decision Tables provide an intuitive way to implement complex calculations.

## Learning Objectives
- Design Decision Tables for field calculations.
- Implement multi-criteria calculations.
- Configure Decision Table lookups.

## Topic 1: Decision Table Calculations
### Overview
Decision Tables calculate field values by matching criteria against a matrix of conditions and results. They're ideal for complex multi-criteria calculations that would be cumbersome to express in code.

### Key Concepts
- **Decision Table:** Matrix of conditions and results
- **Criteria:** Input conditions to evaluate
- **Lookup:** Find matching row in table
- **Result:** Output value from matched row
- **Precedence:** Handle multiple matches
- **Maintenance:** Easy to modify and understand
- **Business rules:** Encode business pricing/scoring logic

### How It Works
A Decision Table stores a matrix where rows represent different combinations of criteria, and columns contain condition inputs and result outputs. When called, the table evaluates input criteria, finds the matching row, and returns the result value. If multiple rows match, precedence rules determine which is used.

### Takeaways
- Decision Tables simplify complex calculations
- Intuitive matrix format aids understanding
- Easy to modify without code changes
- Ideal for business rules implementation
- Better than nested if-then logic

## Module Summary
Decision Tables provide an effective way to implement complex multi-criteria calculations. By using tables rather than conditional logic, applications remain maintainable and aligned with how business stakeholders think about rules.

## CSA Exam Tips
1. Understand that Decision Tables use matrix format for calculations
2. Know that they're ideal for multi-criteria logic
3. Remember that they're maintainable by business users
4. Understand precedence handling for multiple matches
5. Be prepared to explain when Decision Tables are appropriate
