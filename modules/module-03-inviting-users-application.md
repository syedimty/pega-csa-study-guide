# Module 3: Inviting Users to an Application

**Duration:** ~10 mins | **Topics:** 1 | **Level:** Beginner

## Overview
Add Personas and Channel interfaces to an application and assign users to Personas based on how they interact with a Case. This module focuses on user management and security by organizing application users into distinct roles with appropriate access controls.

## Learning Objectives
- Explain the relationship between users and Personas.
- Manage an application's Personas and Channel interfaces.
- Invite a user to an application.
- Add a Persona to an application user.

## Topic 1: Users and Personas
### Overview
Applications have users who perform different tasks and need different levels of access. Pega Platform provides User Management features to organize users into Personas that share common application security and Assignments. Proper Persona assignment is a critical aspect of application security.

### Key Concepts
- **Persona:** Business representation of a type of user
- **User Management:** Feature to organize application users into Personas
- **Channel Interfaces:** Different user interfaces for different user types
- **Security:** Personas control access to features and data
- **Assignments:** Work items assigned to specific Personas
- Service Representatives may access different interfaces than Clients
- Each Persona can have distinct security controls and access permissions

### How It Works
Users are assigned to Personas based on their role and how they interact with the application. Each Persona has associated Channel interfaces that define what the user can see and do. Security controls are applied at the Persona level, ensuring users only access appropriate features and assignments.

### Takeaways
- Personas provide a secure way to manage user roles and access
- Different Personas can have different Channel interfaces and feature access
- User assignment to Personas is a fundamental security practice
- Channel interfaces deliver role-specific application experiences
- Security should be comprehensive, including proper Persona assignment

## Module Summary
This brief module establishes the importance of Personas in organizing application users and controlling their access. By creating distinct Personas and assigning users appropriately, developers can ensure that each user type sees only the relevant features and receives only appropriate work assignments. Personas serve as the foundation for both user experience customization and security control in Pega applications. This organization is essential for creating secure, user-friendly applications that serve diverse user populations effectively.

## CSA Exam Tips
1. Understand that Personas are business representations of user types - not the same as individual users
2. Know that Personas control both security (what users can access) and assignments (what work they receive)
3. Remember that proper Persona assignment is critical to application security
4. Understand the relationship between Personas and Channel interfaces - different Personas can have different interfaces
5. Be prepared to explain how Persona assignment differs from user authentication - it's about role-based access control
