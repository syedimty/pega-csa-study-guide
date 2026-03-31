# Module 29: Adding Optional Actions to Workflow

**Duration:** ~25 mins | **Topics:** 1 | **Level:** Intermediate

## Overview
Implement optional actions that users can choose to perform during case processing. Optional actions provide flexibility without making actions mandatory.

## Learning Objectives
- Design optional workflow actions.
- Configure conditional optional actions.
- Implement user-selected optional processes.

## Topic 1: Optional Workflow Actions
### Overview
Optional actions allow users to take additional steps during case processing if needed, without making those steps mandatory. This provides flexibility while maintaining core workflow.

### Key Concepts
- **Optional action:** Available but not required
- **User choice:** Users decide to perform or skip
- **Business logic:** Condition when action is offered
- **Menu items:** Present options to users
- **Conditional availability:** Show/hide based on case state
- **Impact isolation:** Optional actions don't block completion
- **Audit trail:** Track which optional actions were taken

### How It Works
Developers configure optional actions that users can initiate. These actions are offered to users but aren't required for case progression. Users can choose to perform them or skip to case completion. Conditions determine when optional actions are available.

### Takeaways
- Optional actions provide workflow flexibility
- Users decide whether to perform actions
- Conditions determine availability
- Actions don't block case progression
- Useful for supplemental processes

## Module Summary
Optional actions add flexibility to workflows by letting users choose supplemental processes when needed. This design pattern accommodates diverse case scenarios without requiring all users to execute all steps.

## CSA Exam Tips
1. Understand that optional actions are offered but not required
2. Know that users choose whether to perform optional actions
3. Remember that optional actions don't block progression
4. Understand conditional availability of optional actions
5. Be prepared to explain when optional actions are appropriate
