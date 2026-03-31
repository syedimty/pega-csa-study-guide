# Module 2: Defining a Customer Microjourney

**Duration:** ~45 mins | **Topics:** 4 | **Level:** Beginner

## Overview
Learn how Case Types represent a customer Microjourney from beginning to a desired outcome. Design the life cycle of a Case Type as a series of Steps organized into Stages that reflect major milestones in Case processing. This module introduces the fundamental concept of breaking customer journeys into smaller, manageable microjourneys.

## Learning Objectives
- Identify the elements of a Case Life Cycle: Stages, Processes, and Steps.
- Differentiate between a Primary Stage and Alternate Stage.
- Model the life cycle of a Case Type.
- Understand how microjourneys drive business outcomes.

## Topic 1: Case Life Cycle
### Overview
Customer interactions represent journeys in Pega Platform. The platform breaks customer journeys into smaller pieces called Microjourneys™ that drive the organization to achieve specific goals. This approach contrasts with traditional applications based on individual transactions and siloed departmental systems.

### Key Concepts
- **Microjourney™:** Smaller pieces of a larger customer journey that drive the organization to achieve a specific goal
- **Case Type:** An abstract model of a business transaction that can be repeated
- **Case:** A specific instance of a Case Type transaction
- Traditional applications make it difficult for departments to collaborate effectively
- Pega applications model work the same way users think about and describe their work

### How It Works
In a Microjourney-based approach, applications are built around how users actually think about their work. For example, an online order process includes: submit order, process order, and deliver order. Each customer interaction creates a new Case instance. The application follows the same logical sequence that users understand naturally.

### Takeaways
- Microjourneys align applications with how business users think about work
- Case Types represent repeatable business transaction models
- Cases are instances of Case Types that track specific transactions
- This approach enables better cross-departmental collaboration

## Topic 2: Case Life Cycle Design
### Overview
Pega Platform supports the Case Life Cycle design modeling technique that enables business users to see and interact with Cases the same way they think about them. Each Case Life Cycle contains Stages, Processes, and Steps, accommodating business complexity and specific organizational needs.

### Key Concepts
- **Stages:** Major milestones in case processing that represent phases of work
- **Primary Stage:** The main flow of case processing
- **Alternate Stage:** Alternative paths or phases outside the primary flow
- **Processes:** Collections of work within stages
- **Steps:** Individual actions or tasks within processes
- Case Life Cycle design allows visual representation of business workflows
- Different types and configurations support various business needs

### How It Works
A Case Life Cycle is designed as a visual workflow showing how a case progresses through different stages. For example, an Onboarding Case Type might flow through stages for HR setup, Facilities setup, and IT setup. Within each stage, there are processes (collections of activities) and steps (individual actions) that team members complete.

### Takeaways
- Stages provide a high-level view of case progression through major milestones
- Processes and Steps break down work into manageable units
- Case Life Cycle design enables visual collaboration between teams
- The design reflects how business teams think about completing work

## Topic 3: Multi-step Forms
### Overview
Multi-step forms allow developers to collect user information across multiple pages within a single case, improving user experience and data organization during case processing.

### Key Concepts
- Forms can be structured across multiple steps rather than single lengthy forms
- Improves user experience by breaking data collection into logical chunks
- Each step can be associated with case progress or workflow stages
- Multi-step approach reduces cognitive load on users
- Data is collected progressively as the case advances

### How It Works
Multi-step forms present information collection to users in sequential steps, often aligned with the case's progression through different stages. This guides users through the process naturally and collects relevant data at appropriate points in the workflow.

### Takeaways
- Multi-step forms improve user experience and engagement
- Break large data collection requirements into logical sequences
- Align forms with case progression for natural workflow integration
- Reduce user burden by requesting information when needed

## Topic 4: Draft Mode
### Overview
Draft mode allows cases to be created and modified without immediately committing them to the system, enabling users to prepare and review case information before submission and processing.

### Key Concepts
- Cases can exist in draft status before being officially submitted
- Allows users time to prepare complete information
- Review and editing capabilities before final submission
- Transitions from draft to active case processing
- Reduces data entry errors through review opportunities

### How It Works
Users create cases in draft mode, allowing them to enter information, review details, and make changes without the case entering official processing. Once the user is satisfied with the information, they submit the case, transitioning it from draft mode to active processing.

### Takeaways
- Draft mode supports incomplete case preparation
- Enables user review before case submission
- Reduces errors through iterative editing
- Provides transition point from case creation to processing

## Module Summary
This module establishes the core concept of Microjourneys as a method for breaking complex customer interactions into manageable, goal-oriented pieces. It introduces Case Types and Cases as the modeling constructs for representing business transactions, and explains how Case Life Cycles organize work through Stages, Processes, and Steps. The module demonstrates that Pega applications align with how business users naturally think about and describe their work, enabling better collaboration across departments. Supporting features like multi-step forms and draft mode enhance the user experience and data quality throughout the case lifecycle. This foundation is critical for understanding how to design effective applications in Pega Platform.

## CSA Exam Tips
1. Remember the Microjourney™ definition - it's a smaller piece of a larger customer journey designed to achieve a specific organizational goal
2. Understand the relationship: Case Type (template) → Case (instance) - similar to class and object in programming
3. Know that Case Life Cycle consists of three elements: Stages (major milestones), Processes (collections of work), and Steps (individual actions)
4. Be prepared to distinguish between Primary Stages (main flow) and Alternate Stages (alternative paths)
5. Understand that the core principle is that applications should model work the way users naturally think about and describe it
