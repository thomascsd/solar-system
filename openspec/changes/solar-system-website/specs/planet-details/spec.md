## ADDED Requirements

### Requirement: Info Panel Visibility

The system SHALL provide a way to show detailed information about a selected planet.

#### Scenario: Open info panel

- **WHEN** user clicks on a planet
- **THEN** a panel MUST appear showing the planet's data (e.g., Name, Diameter, Distance from Sun).

### Requirement: Panel Content

The panel SHALL display dynamic content based on the selected planet.

#### Scenario: Display planet data

- **WHEN** user clicks on Mars
- **THEN** the panel MUST show "Mars" as title and display its specific scientific data.

### Requirement: Close Panel

The system SHALL allow users to close the information panel.

#### Scenario: Hide info panel

- **WHEN** user clicks a "Close" button or clicks outside the panel
- **THEN** the info panel MUST be hidden.
