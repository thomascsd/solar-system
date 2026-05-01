## ADDED Requirements

### Requirement: Animation Pause Button

The system SHALL provide a button to pause and resume the orbital animation of all planets.

#### Scenario: Toggle animation state

- **WHEN** user clicks the "Pause" button
- **THEN** all planets MUST stop moving in their orbits, and the button text MUST change to "Resume".
- **WHEN** user clicks the "Resume" button
- **THEN** all planets MUST continue moving from their last positions, and the button text MUST change to "Pause".
