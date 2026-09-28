# PROJECT_PLAYBOOK.md

## Working rule for every phase

Read `README.md`, `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, and this playbook before making changes. Implement only the phase explicitly requested. Do not automatically continue to the next phase.

Keep the project simple and editable by the team. Do not generate detailed styling, decorative assets, unapproved features, or fake claims that a real hospital service is operational.

---

## Phase 1 — Documentation and repository foundation

### Objective

Prepare a consistent project foundation that the team and Antigravity can use for later phases. This phase is for documentation and repository setup only.

### Antigravity implementation prompt

Read the existing `README.md`, `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, and `PROJECT_PLAYBOOK.md` completely.

Then do the following:

1. Inspect the current project directory. Check whether a Git repository and any project files already exist.
2. Preserve existing work. Do not overwrite a file or initialize a second repository if it already exists.
3. Check that the documents agree on these decisions:
   - The current focus is a very basic React frontend.
   - Java and Spring Boot are planned for a later backend phase.
   - Database access and real CRUD are not part of the current frontend phase.
   - The planned areas are OPD, IPD, Hospital Operations, and Emergency.
   - Emergency Ward and Ambulance Request are planned frontend pages.
   - Ambulance booking or dispatch must not be presented as a working real-world service during the frontend demo.
   - Pages and components will use simple HTML, minimal CSS, and clearly marked sample data.
4. If the documents contain a contradiction, make the smallest clear correction and report exactly what changed. Do not invent a missing product decision.
5. Add a basic `.gitignore` appropriate for future frontend and backend development. Exclude dependencies, build output, local environment files, secrets, and editor-generated files. Do not delete or ignore the project documents.
6. If this directory is not already a Git repository, initialize Git locally. Do not create a GitHub remote, push code, or change an existing remote.
7. Ensure the root documentation files have the exact agreed names:
   - `README.md`
   - `ARCHITECTURE.md`
   - `PROJECT_STRUCTURE.md`
   - `PROJECT_PLAYBOOK.md`
8. Create a brief `PHASE_STATUS.md` recording that Phase 1 has been checked, what was completed, and what remains for Phase 2. Mark Phase 1 complete only after the acceptance checks below pass.

### Boundaries

- Do not build React screens or components in Phase 1.
- Do not create the Spring Boot application in Phase 1.
- Do not choose a database, authentication provider, or AI/ML feature.
- Do not generate hospital images, icons, videos, or detailed CSS.
- Do not put real patient data or credentials in the repository.
- Do not create empty folders merely to make the proposed structure look complete.

### Acceptance checks

Phase 1 is complete when:

- The project documents exist and do not contradict the agreed scope.
- Existing files and Git history have been preserved.
- `.gitignore` exists and excludes local secrets and generated output.
- `PHASE_STATUS.md` accurately records the result.
- No application feature has been implemented as part of this phase.

### Required response after implementation

Report:

1. Files created or changed.
2. Any document contradiction found and how it was resolved.
3. Whether Git already existed or was initialized locally.
4. Results of the acceptance checks.
5. The remaining work for Phase 2.

Stop after reporting Phase 1. Wait for an explicit instruction before implementing Phase 2.

---

## Phase 2 — Complete basic React page structure

### Objective

Build a locally running React frontend with navigation and the basic structure of every agreed page.

Every page should be present and recognizable, but intentionally simple. The team will manually improve design and behaviour in later phases. This phase does not include a Spring Boot backend or real database operations.

### Prerequisite

Read `README.md`, `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, `PROJECT_PLAYBOOK.md`, and `PHASE_STATUS.md`.

Inspect the repository before editing. Preserve existing files and adapt an existing React app if one is already present. Do not create a second frontend application.

### Antigravity implementation prompt

Implement **Phase 2 only**.

#### A. Application foundation

1. Set up or complete the React application in `frontend/`.
2. Add a shared layout with a text header, simple navigation, and main content area.
3. Add working routes or equivalent navigation for every page listed below.
4. Use plain React components, semantic HTML, and minimal CSS.
5. Keep components small and understandable so team members can edit individual files later.
6. Document accurate install, run, and build commands in `README.md`.

#### B. Shared pages

Create these pages:

- `LoginPage`: basic username/email and password fields, plus a visible note that authentication is not connected yet.
- `DashboardPage`: simple links to OPD, IPD, Hospital Operations, and Emergency.
- `NotFoundPage`: link back to the dashboard.

Do not simulate a successful login or claim that role-based access works.

#### C. OPD pages

Create these basic pages:

1. `PatientListPage`
   - Page heading
   - Simple `SearchBar`
   - Basic patient table using clearly labelled sample data
   - Link to patient registration

2. `PatientRegistrationPage`
   - Basic patient information form
   - Clearly labelled demo submit action
   - No claim that a patient record was saved

3. `PatientProfilePage`
   - Patient summary area
   - Simple sections for visits, prescriptions, and lab records
   - Use sample data or empty states

4. `AppointmentsPage`
   - Appointment list or basic calendar placeholder
   - Simple booking form structure
   - No real appointment confirmation

5. `OPDQueuePage`
   - Basic queue table with sample statuses
   - Link or navigation toward consultation

6. `ConsultationPage`
   - Patient summary
   - Notes input area
   - Prescription form structure
   - No medical decision automation or real record saving

#### D. IPD pages

Create these basic pages:

1. `AdmissionsPage`: admission list and basic admission form structure.
2. `BedsPage`: simple bed list or grid with sample availability states.
3. `InpatientRecordPage`: patient summary and daily notes section.
4. `DischargePage`: discharge summary form structure and bill reference placeholder.

All data and actions in this phase must remain demo-only.

#### E. Hospital Operations pages

Create these basic pages:

1. `DoctorsStaffPage`: staff list and simple search.
2. `DepartmentsPage`: department list.
3. `LabPage`: test order form structure and results table.
4. `PharmacyPage`: prescription fulfilment and medicine list structure.
5. `InventoryPage`: stock table with sample quantities.
6. `BillingPage`: bill items and total display using sample values.
7. `ReportsPage`: simple report headings and placeholder summary areas.

Do not add payment processing or claim that inventory, lab, or billing data is live.

#### F. Emergency pages

Create these basic pages:

1. `EmergencyWardPage`
   - Emergency arrival list with sample statuses
   - Basic case detail area
   - Clear demo-data label

2. `AmbulanceRequestPage`
   - Basic request form structure
   - Request-status display using sample data or a clear empty state
   - Prominent text that this is a frontend demo and does not contact emergency services

Do not show “ambulance booked,” “ambulance dispatched,” or any similar real-world confirmation.

#### G. Reusable components

Where used by more than one page, create simple components such as:

- `Header`
- `Sidebar` or `NavigationMenu`
- `PageHeader`
- `SearchBar`
- `BasicTable`
- `FormField`
- `StatusBadge`
- `EmptyState`

Keep these components visually basic. Each component should receive data through props and report actions through callbacks when needed.

#### H. Data and file organization

1. Place sample records in a clearly named file under `frontend/src/data/`.
2. Use fictional records only; do not include real patient information.
3. Keep full screens in `pages/`, reusable interface pieces in `components/`, and application setup in `app/`.
4. Create `services/` only if it contains a useful interface or documented placeholder. Do not add fake API calls.
5. Follow `PROJECT_STRUCTURE.md` unless an existing file layout requires a small, documented adjustment.

### Boundaries

- Do not build the Java or Spring Boot backend.
- Do not connect a database or implement real CRUD.
- Do not implement real login, payments, lab processing, pharmacy fulfilment, or ambulance dispatch.
- Do not introduce AI/ML features.
- Do not use heavy CSS, UI frameworks, animations, or generated assets.
- Do not automatically continue to Phase 3.
- Do not show fake success messages for actions that were not persisted.

### Acceptance checks

Phase 2 is complete when:

1. The documented frontend install command works.
2. The documented development command starts the React app.
3. Every page listed in sections B–F can be opened through navigation or a documented route.
4. Every page has its stated basic sections, form structure, table, or empty state.
5. Shared components render on the pages that use them.
6. Sample data is clearly distinguishable from real data.
7. Demo forms do not pretend to save records or contact emergency services.
8. The production build succeeds.
9. `README.md` includes accurate run instructions.
10. `PHASE_STATUS.md` lists what was verified and what remains for Phase 3.

If a check fails, fix it before marking Phase 2 complete.

### Required response after implementation

Report:

1. Files created or changed.
2. The routes and pages that now exist.
3. Exact commands used to install, run, and build.
4. Acceptance checks passed or failed.
5. Any unresolved issue.
6. Suggested independent page/component tasks for the frontend team.

Stop after Phase 2 and wait for an explicit instruction before implementing Phase 3.
---

## Phase 3 — Interactive OPD frontend demo

### Objective

Turn the basic OPD page structures from Phase 2 into one connected, usable frontend demonstration:

Patient registration → Patient list/profile → Appointment → OPD queue → Consultation → Updated patient profile

This phase uses fictional sample data and React state. It does not save data to a database or provide a real clinical service.

### Prerequisite

Read these files completely:

- `README.md`
- `ARCHITECTURE.md`
- `PROJECT_STRUCTURE.md`
- `PROJECT_PLAYBOOK.md`
- `PHASE_STATUS.md`

Inspect the actual React files. Confirm Phase 2 is complete. Preserve its existing routes, shared layout, and non-OPD pages. If Phase 2 is incomplete, report the missing items before starting Phase 3; do not silently rebuild the project.

### Antigravity implementation prompt

Implement **Phase 3 only**. Improve the existing OPD pages and connect them into a consistent frontend demo.

#### 1. Shared OPD demo data

Create one clear source of truth for OPD demo data using React state or a small React context. Avoid adding a state-management library solely for this phase.

Maintain consistent fictional records for:

- Patients
- Appointments
- Queue entries
- Consultation notes
- Demo prescription entries, if the existing consultation page includes them

Each record should have a stable demo ID. Related records must reference the same patient ID. Do not duplicate unrelated copies of the same patient across pages.

State may reset when the browser refreshes. Display a clear note such as: **“Demo data only — changes are not saved after refresh.”**

Do not use real patient names, contact details, medical histories, or credentials.

#### 2. Patient registration

Improve `PatientRegistrationPage` so that:

- Every input has a visible label.
- Required fields are clearly marked.
- Empty required fields show an understandable validation message.
- Submitting valid data adds a fictional/demo patient to the current in-memory state.
- The new patient appears in `PatientListPage`.
- The result says the patient was added **to this demo session**, not saved to a hospital database.
- A user can open the new patient's profile.

Keep the form simple. Do not add document upload, identity verification, or a real patient ID system.

#### 3. Patient list and search

Improve `PatientListPage` so that:

- It shows the patients in the shared demo state.
- `SearchBar` filters by agreed visible fields, such as demo ID or name.
- It shows a useful empty state when nothing matches.
- Each row has a clear link or button to the patient profile.
- The registration page is easy to reach.

The search component should receive its value and callbacks through props. It should not directly own or modify all patient records.

#### 4. Patient profile

Improve `PatientProfilePage` so that:

- The selected patient is determined by its route or ID, not by a hardcoded first record.
- The page displays basic details, appointments, and consultation entries belonging to that patient.
- It provides clear navigation to create an appointment for that patient.
- Unknown patient IDs show a safe “Patient not found” state.
- No data from another demo patient appears in the selected profile.

#### 5. Appointments

Improve `AppointmentsPage` so that:

- A user can choose an existing demo patient and a displayed appointment date/time.
- Required inputs are validated.
- A submitted appointment appears in the current demo session's appointment list.
- The appointment is linked to the correct patient.
- Status labels are consistent, for example `Scheduled`, `Checked in`, and `Completed`.
- The page does not claim a real hospital slot has been reserved.

Keep scheduling rules basic. Do not claim to check a real doctor's availability unless that data and behaviour actually exist.

#### 6. OPD queue

Improve `OPDQueuePage` so that:

- It derives or displays entries from the shared appointment state.
- A demo appointment can be marked as checked in.
- A checked-in appointment appears in the queue.
- The queue shows patient, appointment, and status clearly.
- The user can open the relevant consultation page.
- Changes to appointment status remain consistent across the OPD pages for the current session.

Do not simulate clinical priority decisions or emergency triage.

#### 7. Consultation page

Improve `ConsultationPage` so that:

- It opens for a selected demo patient or queue entry.
- It shows the correct patient's basic profile.
- It has clearly labelled inputs for consultation notes.
- If a prescription section exists, keep it as a simple text-entry demo.
- Required inputs have basic validation.
- Completing the demo consultation updates its in-memory status and shows the entry on that patient's profile.
- The appointment or queue entry is marked completed consistently.

Use neutral fictional text in samples. Do not generate a diagnosis, medicine recommendation, dosage, or treatment decision.

#### 8. Component boundaries

Reuse Phase 2 shared components where they fit:

- `SearchBar`
- `BasicTable`
- `FormField`
- `StatusBadge`
- `EmptyState`
- `PageHeader`

Move OPD-specific repeated UI into a clearly named feature component only when it is actually reused. Avoid making a large generic component that handles unrelated forms.

Keep the styling minimal and consistent with the existing frontend.

#### 9. Navigation and routes

Keep the existing application layout. Ensure a user can move through the complete OPD demo flow without manually editing a URL.

Use stable route paths for patient profiles and consultations. Document the chosen paths in the implementation summary. Preserve working IPD, Operations, and Emergency routes from Phase 2.

#### 10. Documentation and status

Update `README.md` to explain:

- How to run the frontend
- The OPD demo flow
- Which actions work only in browser memory
- That refresh may reset changes
- That no real database or clinical service is connected

Update `PHASE_STATUS.md` with verified Phase 3 results and remaining Phase 4 work. Do not mark Phase 3 complete based only on files existing.

### Boundaries

- Work on OPD frontend behaviour only.
- Do not implement IPD, Operations, or Emergency interactions in this phase.
- Do not create Spring Boot APIs or a database.
- Do not implement real CRUD persistence, login, payment, or notifications.
- Do not add AI diagnosis or treatment suggestions.
- Do not show messages implying that a real patient record, appointment, or prescription has been saved.
- Do not replace the minimal UI with elaborate styling or generated assets.
- Do not start Phase 4 automatically.

### Acceptance checks

Complete the following checks before marking Phase 3 done:

1. Frontend starts using the documented command.
2. Production build succeeds.
3. Registering a valid demo patient makes that patient appear in the list and opens the correct profile.
4. Empty or invalid required inputs show useful validation messages.
5. Search finds the correct demo patient and handles no results.
6. Creating a demo appointment links it to the correct patient.
7. Checking in an appointment updates the queue consistently.
8. Opening consultation shows the intended patient.
9. Completing a demo consultation updates the correct patient profile and queue status.
10. Unknown patient or consultation IDs show a safe error/empty state.
11. Refresh behaviour matches the README description.
12. IPD, Operations, and Emergency pages from Phase 2 still open.
13. No screen implies that real hospital data was saved or real care was provided.

Test the main flow in the running application where possible. If a check cannot be performed, state why in `PHASE_STATUS.md`; do not report it as passed.

### Suggested team task boundaries

After the shared OPD data shape and component contracts are agreed:

- Task A: Patient registration, patient list, and search
- Task B: Patient profile and appointments
- Task C: OPD queue and consultation
- Integration owner: shared state, routes, consistency checks, and pull request review

Assign actual people according to the team's availability. Avoid parallel edits to the same shared state or route file without coordination.

### Required response after implementation

Report:

1. Files created or changed.
2. Routes added or changed.
3. The exact OPD demo flow that works.
4. Where demo state lives and what happens on refresh.
5. Build and acceptance-check results, including failures.
6. Any known limitations.
7. What remains for Phase 4.

Stop after Phase 3 and wait for an explicit instruction before implementing Phase 4.
---

## Phase 4 — Interactive IPD, Operations, and Emergency frontend demo

### Objective

Improve the Phase 2 page structures for IPD, Hospital Operations, and Emergency. Connect their basic interactions to fictional, in-memory demo data while preserving the OPD flow completed in Phase 3.

The entire frontend should remain simple and easy for team members to edit manually. No backend, database, or real-world hospital action is part of this phase.

### Prerequisite

Read `README.md`, `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, `PROJECT_PLAYBOOK.md`, and `PHASE_STATUS.md`.

Inspect the existing React code and confirm that Phase 3's OPD demo works. Reuse its patient IDs and shared patient state where appropriate. Do not create a separate, contradictory copy of the patient list.

If an earlier phase is incomplete, report the gap before implementing dependent work.

### Antigravity implementation prompt

Implement **Phase 4 only**.

#### A. Shared demo-data rules

1. Use one consistent set of fictional patient records across OPD, IPD, and Emergency pages.
2. Keep IPD admissions, beds, lab orders, stock, bills, emergency cases, and ambulance requests in clearly named in-memory demo state.
3. Give related records stable demo IDs and link them to the correct patient where applicable.
4. Show a visible message that changes are for demonstration and may reset on refresh.
5. Never use real patient information, actual emergency contact details, or real credentials.

Avoid adding a state-management dependency unless the existing React structure genuinely requires it. Keep data flow understandable.

#### B. IPD pages and flow

Implement a connected demo flow:

Patient profile → Admission → Bed assignment → Inpatient record → Discharge

**`AdmissionsPage`**

- Show a list of demo admissions.
- Allow choosing an existing demo patient.
- Provide a simple admission form with labelled required fields.
- Add a valid admission to the current demo session.
- Link each admission to its patient.
- Display a clear status such as `Admitted` or `Discharged`.
- Do not claim that a real hospital admission has been created.

**`BedsPage`**

- Show basic bed identifiers and sample availability.
- Allow an available demo bed to be assigned to an active demo admission.
- Prevent assigning the same bed to two active admissions in the demo state.
- Show which demo admission occupies a bed.
- Keep the bed view consistent with the admission view.

**`InpatientRecordPage`**

- Open the selected admission using a stable ID.
- Show patient, admission, and assigned-bed information.
- Allow a plain-text daily note to be added to the demo session.
- Show a useful empty state if no notes exist.
- Do not provide automatic clinical interpretation or treatment advice.

**`DischargePage`**

- Open the correct active admission.
- Provide a basic discharge summary form.
- On demo completion, mark the admission discharged.
- Release its demo bed in the same state update.
- Show the discharge summary in the relevant demo record.
- Do not claim a real discharge, medical clearance, or final hospital bill.

Unknown IDs should show safe “not found” states.

#### C. Hospital Operations pages

These pages should have small, understandable interactions. They do not need a full production workflow.

**`DoctorsStaffPage`**

- Display fictional staff entries and simple search/filter controls.
- Do not imply that real staff accounts or permissions were created.

**`DepartmentsPage`**

- Display sample departments and their basic descriptions.
- Keep department names consistent wherever used in the demo.

**`LabPage`**

- Show fictional lab orders linked to demo patients.
- Provide a simple order form or status update for the demo session.
- Display a pending/empty result state.
- Do not invent medical findings or claim a real test was performed.

**`PharmacyPage`**

- Show a sample medicine list and demo prescription entries if available.
- Display a basic fulfilment-status interface.
- Do not claim a medicine was dispensed in the real world.
- Do not generate medicine choices, dosages, or treatment recommendations.

**`InventoryPage`**

- Display fictional stock items with quantity and status.
- If a quantity is edited, change only the in-memory demo state.
- Do not imply that real hospital stock has changed.

**`BillingPage`**

- Display sample bill items, quantities, and a correctly calculated demo total.
- Link a demo bill to the relevant demo patient or admission where applicable.
- Label the bill as an estimate/demo.
- Do not collect payment or show a real payment confirmation.

**`ReportsPage`**

- Show simple counts or summaries computed from the available demo state where practical.
- Label the numbers as sample/demo figures.
- Do not describe them as real hospital analytics.

#### D. Emergency pages

**`EmergencyWardPage`**

- Show a list of fictional emergency cases with basic status labels.
- Allow staff-facing demo status changes through in-memory state.
- Link a case to a demo patient only if a patient has been selected.
- Show a safe empty or “case not found” state.
- Do not automatically assign medical urgency or recommend treatment.

**`AmbulanceRequestPage`**

- Provide a clearly labelled demo request form.
- Validate required fields.
- A valid submission may add an item to an on-screen **demo request list only**.
- Display prominently: “Demo only — this form does not contact an ambulance or emergency service.”
- Do not display `Booked`, `Dispatched`, `On the way`, or a similar real-world status unless an actual dispatch system is integrated in a later phase.
- Use neutral demo states such as `Draft demo request`.

Emergency pages must not be presented as an operational way to obtain emergency help.

#### E. Shared components and navigation

1. Reuse existing `PageHeader`, `FormField`, `BasicTable`, `StatusBadge`, `SearchBar`, and `EmptyState` where useful.
2. Create a new reusable component only when two or more pages need the same behaviour.
3. Keep labels and navigation clear.
4. Make every page reachable through the app's navigation or related page links.
5. Preserve all Phase 3 OPD routes and behaviour.
6. Keep styling minimal; do not replace the team's editable foundation with a finished visual design.

#### F. Documentation and status

Update `README.md` to explain:

- The IPD, Operations, and Emergency demo flows
- Which interactions work only in browser memory
- What resets on refresh
- That ambulance requests do not contact a real service
- That lab, pharmacy, stock, billing, and reports use demo data

Update `PHASE_STATUS.md` with verified Phase 4 results and what remains for the backend foundation in Phase 5.

### Boundaries

- Do not create Spring Boot code, API endpoints, or a database.
- Do not implement real CRUD persistence.
- Do not add real authentication, payment, lab processing, medicine dispensing, or ambulance dispatch.
- Do not add AI/ML diagnosis, triage, or treatment recommendations.
- Do not include real patient data or secrets.
- Do not break or replace the existing OPD flow.
- Do not start Phase 5 automatically.

### Acceptance checks

Before marking Phase 4 complete, verify:

1. The documented frontend run command works.
2. The production build succeeds.
3. Phase 3 OPD registration, appointment, queue, and consultation demo still work.
4. An existing demo patient can be admitted.
5. A demo bed cannot be assigned to two active admissions.
6. The correct patient and bed appear on the inpatient record.
7. Demo discharge updates the admission and releases the bed.
8. Operations pages render their stated data and basic interactions.
9. Demo bill totals are calculated correctly for the displayed items.
10. Reports clearly label all figures as demo data.
11. Emergency Ward displays only fictional cases and does not perform automatic triage.
12. Ambulance Request clearly states it does not contact emergency services and never claims a real dispatch.
13. Unknown record IDs show safe empty or not-found states.
14. `README.md` and `PHASE_STATUS.md` describe the actual verified behaviour.

If a check fails, fix it or record the failure. Do not mark an unverified check as passed.

### Suggested team task boundaries

- Task A: Admissions, beds, inpatient record, and discharge
- Task B: Lab, pharmacy, inventory, billing, and reports
- Task C: Staff, departments, Emergency Ward, and Ambulance Request
- Integration owner: shared patient state, navigation, cross-page consistency, and review

Assign actual members according to availability. Agree on shared data shapes before parallel work, and avoid simultaneous edits to shared state files.

### Required response after implementation

Report:

1. Files created or changed.
2. Routes and interactions added.
3. Where demo data lives and how refresh affects it.
4. Results of each acceptance check.
5. Any limitations or unfinished items.
6. What remains for Phase 5.

Stop after Phase 4. Wait for an explicit instruction before implementing Phase 5.

---

## Phase 5 — Spring Boot backend foundation and API plan

### Objective

Create a locally running Java and Spring Boot backend that the React frontend can connect to in later phases.

This phase establishes the backend application, configuration, health check, package structure, and documented API contracts. It does not implement patient CRUD or connect a hospital database.

### Prerequisite

Read `README.md`, `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, `PROJECT_PLAYBOOK.md`, and `PHASE_STATUS.md`.

Inspect the repository and the existing frontend. Preserve completed frontend work. Confirm which Java version and build tool are already available in the development environment.

Before generating the project, check current official Spring Boot requirements and choose a compatible stable Spring Boot and Java combination. Record the selected versions in `README.md`. Do not guess version compatibility.

### Antigravity implementation prompt

Implement **Phase 5 only**.

#### 1. Backend application

1. Create a Spring Boot application inside the existing `backend/` folder. If one already exists, inspect and adapt it rather than creating a second application.
2. Use Java and one build tool. Prefer the project's existing build-tool convention; otherwise choose Maven and include its wrapper.
3. Include only dependencies needed for this phase, such as Spring Web, validation if used, and a health-check facility.
4. Do not add a database driver or JPA solely to make the project appear complete.
5. Keep the package names and project metadata simple and consistent.
6. Make sure the backend can start independently of the frontend and without database credentials.

#### 2. Basic package boundaries

Use a small, understandable structure. For example:

backend/
├── pom.xml or build.gradle
├── mvnw / mvnw.cmd or the chosen build-tool wrapper
└── src/
    ├── main/
    │   ├── java/<base-package>/
    │   │   ├── HospitalManagementApplication.java
    │   │   └── common/
    │   │       └── health/
    │   └── resources/
    │       └── application.properties or application.yml
    └── test/
        └── java/<base-package>/

Create only packages containing actual code. Future feature packages for patients, appointments, admissions, billing, and emergency can be added when those phases begin.

#### 3. Health check

Expose a small endpoint or standard health check that confirms the backend process is running.

The response must describe **application availability only**. It must not say that the database, ambulance dispatch, billing, or clinical services are working.

Document its path and sample response in `README.md`.

#### 4. Configuration

1. Keep the local server configuration understandable and documented.
2. Read environment-specific values from configuration or environment variables.
3. Do not hardcode secrets, passwords, API keys, or real patient data.
4. If local React-to-backend communication needs CORS configuration, permit only the documented local frontend origin for development. Do not use unrestricted CORS as a shortcut.
5. Keep production configuration decisions for a later deployment phase.

#### 5. API contract planning

Create `API_CONTRACTS.md` as a **proposal for later implementation**, not as a claim that endpoints already work.

For each planned area, list the expected resource names and questions that must be resolved:

- Patients and OPD visits
- Appointments and queue
- Consultations
- Admissions and beds
- Lab and pharmacy
- Billing and inventory
- Emergency cases and ambulance requests

For each proposed endpoint that is sufficiently defined, record:

- HTTP method and path
- Purpose
- Request fields
- Response fields
- Relevant status codes
- Which role should eventually be allowed to use it
- Whether it is planned or implemented

Do not invent a clinical rule, ambulance integration, payment provider, or finalized database schema. Mark undecided details as `Decision pending`.

Ensure the proposed resource IDs and field names can later connect to the React pages without duplicating patient records.

#### 6. Database decision checkpoint

Document in `API_CONTRACTS.md` or `PHASE_STATUS.md` that the database technology has **not yet been selected**.

Before Phase 6 starts, the team must decide:

- Database technology
- Local development setup
- Initial patient and OPD data model
- Schema migration approach
- Which data is allowed in development samples

Do not silently choose and configure a production database in Phase 5.

#### 7. Documentation

Update `README.md` with:

- Selected Java, Spring Boot, and build-tool versions
- Prerequisites
- Exact backend start and test commands
- Health-check URL
- How the frontend and backend are run separately
- The fact that only the backend foundation works so far

Update `ARCHITECTURE.md` only where needed to reflect the actual backend layout. Update `PHASE_STATUS.md` with verified results and pending decisions.

### Boundaries

- Do not implement patient, appointment, consultation, admission, billing, or emergency CRUD in Phase 5.
- Do not create database tables or store real hospital records.
- Do not build login or claim that role-based access is operational.
- Do not connect the React demo forms to a non-existent API.
- Do not implement ambulance dispatch, payment, clinical decisions, or AI/ML features.
- Do not replace the basic React frontend or introduce elaborate styling.
- Do not start Phase 6 automatically.

### Acceptance checks

Phase 5 is complete when:

1. The documented Java and build-tool prerequisites are accurate.
2. The backend builds successfully.
3. Backend tests pass, if tests were added.
4. The backend starts locally without database credentials.
5. The documented health-check URL responds as described.
6. The response does not misrepresent unimplemented hospital services.
7. `API_CONTRACTS.md` clearly separates proposed endpoints from implemented ones.
8. The database choice and unresolved data-model decisions are recorded.
9. The Phase 3 and Phase 4 React demo still builds.
10. `README.md` and `PHASE_STATUS.md` accurately describe what was verified.

Do not mark an untested item as passed.

### Required response after implementation

Report:

1. Files created or changed.
2. Selected Java, Spring Boot, and build-tool versions.
3. Exact commands used to build, test, and run the backend.
4. Health-check path and observed result.
5. Acceptance-check results and any failures.
6. Database and API decisions still pending before Phase 6.

Stop after Phase 5. Wait for an explicit instruction before implementing Phase 6.

---

## Phase 6 — OPD database and backend APIs

### Objective

Implement the first real backend CRUD flow for the OPD area using Java, Spring Boot, and a local PostgreSQL database:

Patient → Appointment → Check-in/queue → Consultation record

This is a development system using fictional records. It is not ready to store real patient data or be exposed publicly.

### Prerequisite

Read `README.md`, `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, `PROJECT_PLAYBOOK.md`, `API_CONTRACTS.md`, and `PHASE_STATUS.md`.

Inspect the existing backend and frontend. Confirm that Phase 5's backend builds, starts, and responds through its health check. Preserve completed work.

The proposed database for this phase is **PostgreSQL**. If the project documents already record a different approved database decision, follow that decision and explain the difference. Do not configure two competing databases.

### Antigravity implementation prompt

Implement **Phase 6 only**.

#### 1. Database foundation

1. Configure the existing Spring Boot backend for a local PostgreSQL database.
2. Read database URL, username, and password from local environment configuration. Do not commit credentials.
3. Provide an example configuration file containing variable names and safe placeholder values only.
4. Add one schema migration mechanism and use it consistently. Do not rely on destructive schema recreation at every startup.
5. Document how a teammate creates the local database and runs migrations.
6. Use only fictional development data. Never import actual patient information.

#### 2. Backend code boundaries

Organize the OPD code so that:

- Controllers handle HTTP requests and responses.
- Request and response DTOs define the API data shape.
- Validation checks incoming fields.
- Services contain workflow rules.
- Repositories handle persistence.
- Entities represent stored data.
- Migrations define database schema changes.

Do not return database entities directly from API controllers if they expose fields the frontend does not need.

#### 3. Patient records

Implement the agreed patient fields and endpoints documented in `API_CONTRACTS.md`.

The API should support:

- Create a fictional development patient
- List/search patients
- Retrieve one patient by ID
- Update permitted patient details
- Handle an unknown patient ID clearly

Choose stable generated IDs. Validate required fields and reject malformed requests with useful error responses.

Do not add fields merely because they appeared in a different project. If the patient fields remain undecided in the documents, settle and record the minimal field list before writing the migration and DTOs.

Do not implement hard deletion of a patient who has linked appointments or consultations without a documented rule. Prefer leaving deletion out of this phase until its record-retention behaviour is decided.

#### 4. Appointments and check-in

Implement backend operations to:

- Create an appointment linked to an existing patient
- List appointments, with basic patient/date filtering
- Retrieve one appointment
- Update an appointment's permitted details or status
- Check in a scheduled appointment
- Show the OPD queue derived from checked-in appointments

Use a small, documented set of statuses, such as `SCHEDULED`, `CHECKED_IN`, `COMPLETED`, and `CANCELLED`. Define valid status transitions in the service layer. Prevent duplicate check-ins or completion of a cancelled appointment.

Do not claim to verify a real doctor's calendar unless doctor availability has actually been modelled.

#### 5. Consultation records

Implement a consultation record linked to the correct patient and appointment.

The API should allow an authorized future workflow to:

- Create consultation notes for a checked-in appointment
- Retrieve the consultation by ID or patient
- Update notes according to a documented rule
- Mark the associated appointment completed when the consultation is completed

For now, the system has no real authentication or clinical authorization. Run this phase only with fictional local development data. Do not add AI diagnosis, medicine selection, dosage advice, or automated treatment decisions.

If the frontend has a demo prescription field, document whether it is included in this phase's API. Do not silently add a full pharmacy workflow.

#### 6. Data consistency

1. Reject links to patient or appointment IDs that do not exist.
2. Keep patient, appointment, queue, and consultation relationships consistent.
3. Use a transaction where one action must update multiple records together.
4. Return consistent error responses for validation failures, missing records, and invalid workflow transitions.
5. Keep database schema, entity fields, DTOs, and `API_CONTRACTS.md` aligned.

#### 7. API documentation

Update `API_CONTRACTS.md` so every Phase 6 endpoint shows:

- HTTP method and path
- Request fields and example
- Response fields and example
- Validation rules
- Possible success and error status codes
- Whether it is implemented and verified

Mark IPD, Operations, and Emergency endpoints as planned, not implemented.

#### 8. Frontend boundary

Do not switch all React OPD pages from demo state to backend data in this phase. That integration requires a deliberate plan for replacing shared in-memory state without breaking the existing demo.

It is acceptable to use an API client, HTTP requests, or automated tests to verify the backend independently. Document the base URL for later frontend integration.

#### 9. Documentation

Update `README.md` with:

- PostgreSQL local setup
- Required environment variables
- Migration and backend startup commands
- How to call the OPD API locally
- A clear statement that only fictional development records are allowed

Update `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, and `PHASE_STATUS.md` to match the implementation where necessary.

### Boundaries

- Do not implement IPD, billing, lab, pharmacy, inventory, or emergency APIs yet.
- Do not implement real ambulance dispatch or payments.
- Do not expose this unauthenticated development backend publicly.
- Do not use real patient data.
- Do not introduce AI/ML clinical features.
- Do not delete or rewrite the working React frontend.
- Do not start Phase 7 automatically.

### Acceptance checks

Verify before marking Phase 6 complete:

1. Backend builds and starts with the documented local PostgreSQL setup.
2. Migrations apply to a fresh local database.
3. Creating a fictional patient returns an ID and the record can be retrieved.
4. Invalid patient input returns a useful validation error.
5. An appointment cannot reference a missing patient.
6. Check-in creates the expected queue state without duplicate entries.
7. Invalid appointment status transitions are rejected.
8. A consultation links to the correct patient and appointment.
9. Completing consultation updates appointment status consistently.
10. Unknown IDs return a clear not-found response.
11. Backend tests cover the main persistence and status-transition risks.
12. The existing React production build still succeeds.
13. No real credentials or patient data are committed.
14. Documentation matches the observed API behaviour.

If any check cannot run, record it as unverified rather than passed.

### Required response after implementation

Report:

1. Files and migrations created or changed.
2. Database and environment setup commands.
3. Implemented API endpoints.
4. Build, test, migration, and HTTP verification results.
5. Unresolved decisions, especially patient deletion and prescription scope.
6. Work remaining for Phase 7.

Stop after Phase 6 and wait for an explicit instruction before implementing Phase 7.
---

## Phase 7 — IPD and Hospital Operations backend APIs

### Objective

Extend the Phase 6 Spring Boot and PostgreSQL backend for:

- IPD admissions, beds, inpatient notes, and discharge
- Departments and staff directory
- Lab orders
- Pharmacy and inventory demo records
- Billing and basic reports

Reuse the existing patient IDs, database configuration, migrations, error format, and code conventions. This phase uses fictional development data. Emergency APIs belong to Phase 8.

### Prerequisite

Read `README.md`, `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, `PROJECT_PLAYBOOK.md`, `API_CONTRACTS.md`, and `PHASE_STATUS.md`.

Inspect the actual backend code and migrations. Verify that Phase 6's patient, appointment, check-in, and consultation APIs work against the local development database. Do not assume that writing the Phase 6 prompt means Phase 6 was implemented.

If Phase 6 is incomplete, report the missing work and complete only the necessary prerequisite fixes before beginning Phase 7.

### Antigravity implementation prompt

Implement **Phase 7 only**.

#### 1. Data model and migration

Add versioned migrations for the approved IPD and Operations records. Reuse the Phase 6 patient table and IDs.

Document the relationships before creating tables:

- An admission belongs to one patient.
- An active admission may occupy one bed.
- An inpatient note belongs to one admission.
- A discharge summary belongs to one admission.
- A lab order belongs to a patient and may reference a visit or admission.
- A bill belongs to a patient and may reference a visit or admission.
- Inventory entries identify stock items; stock changes need a traceable reason.

Use clear constraints for required fields and references. Do not erase or recreate Phase 6 data during migration.

#### 2. IPD admission API

Implement endpoints to:

- Create an admission for an existing patient
- List and filter admissions
- Retrieve an admission by ID
- Update the permitted admission details
- Show its current status

Define and document a small status set, such as `ADMITTED` and `DISCHARGED`. Reject invalid transitions and references to missing patients.

For this development phase, use fictional records only. Do not claim that a backend record constitutes a real hospital admission.

#### 3. Bed management API

Implement endpoints to:

- List beds and their availability
- Retrieve one bed
- Assign an available bed to an active admission
- Release a bed when its admission is discharged

Prevent the same bed from being assigned to two active admissions, including when two requests arrive close together. Keep admission and bed state consistent in a transaction.

Define what happens if an admission has no bed yet. Do not silently assign a bed.

#### 4. Inpatient notes and discharge API

- Add and list plain-text inpatient notes for the correct admission.
- Create a discharge summary for an active admission.
- Mark the admission discharged and release its bed as one consistent operation.
- Reject repeat discharge and notes linked to an unknown admission.
- Return a clear not-found or conflict response where appropriate.

Do not generate diagnosis, treatment, medicine dosage, or medical clearance automatically.

#### 5. Departments and staff directory

Implement basic directory APIs for fictional departments and staff records.

Keep these records separate from login accounts. A staff directory entry does not grant access to patient data. Authentication and authorization remain for Phase 9.

Do not create real staff credentials or imply role-based security is already active.

#### 6. Lab orders

Implement a basic lab-order API linked to an existing patient:

- Create an order
- List orders by patient or status
- Retrieve an order
- Change its administrative status using documented transitions

A result field may be included only if the approved contract defines it. Use fictional development text; do not invent clinical findings or claim that a test was performed.

#### 7. Inventory and pharmacy records

Implement a small stock-item API with:

- Item identity and quantity
- List and detail endpoints
- Documented stock adjustments
- Rejection of invalid or negative quantities
- A simple record of why an adjustment occurred

If the pharmacy page needs fulfilment status, implement it as an administrative development record linked to an existing demo prescription. Do not select medicines or dosages for a patient. Do not describe a status update as real-world dispensing.

Keep stock changes and any associated fulfilment update consistent when both are part of the same action.

#### 8. Billing

Implement demo bills and bill items linked to the correct patient or admission.

- Calculate totals on the server from line items.
- Use decimal money values; do not use floating-point arithmetic for totals.
- Validate non-negative prices and positive quantities.
- Define whether a bill is draft or finalized.
- Prevent accidental modification of a finalized bill unless the contract explicitly permits it.

Do not integrate payment collection or report a bill as paid without a payment workflow.

#### 9. Reports

Provide a few simple aggregate endpoints based on the fictional database, such as counts of active admissions, available beds, and pending lab orders.

Document what each count includes. Do not label development figures as actual hospital statistics.

#### 10. API quality and documentation

For every implemented endpoint:

- Use request and response DTOs.
- Validate inputs at the API boundary.
- Keep workflow rules in services.
- Return consistent errors for validation, not-found, and conflict cases.
- Avoid exposing internal entities or secret configuration.
- Use transactions for linked updates.
- Add focused tests for state transitions and data consistency.

Update `API_CONTRACTS.md` with actual paths, methods, fields, examples, and statuses. Clearly mark Phase 8 Emergency APIs as planned, not implemented.

Update `README.md` with local database setup, migration, run, and verification commands. Update `PHASE_STATUS.md` with observed results.

### Frontend boundary

Do not automatically replace the React in-memory demo with API calls in this phase. Keep existing frontend flows working. Frontend-to-backend integration should be handled as an explicit later task with clear loading, error, and success states.

### Safety and scope boundaries

- Use fictional local development data only.
- Keep the unauthenticated development backend off public deployment.
- Do not implement Emergency Ward or ambulance dispatch APIs; those belong to Phase 8.
- Do not add payment processing, AI diagnosis, clinical decision support, or real lab processing.
- Do not rewrite OPD APIs or migrations without a necessary, documented compatibility fix.
- Do not start Phase 8 automatically.

### Acceptance checks

Verify the following before marking Phase 7 complete:

1. Existing Phase 6 migrations and APIs still work.
2. New migrations apply to a fresh database and to a database already containing Phase 6 fictional data.
3. An admission links to the correct patient.
4. A missing patient cannot be admitted.
5. A bed cannot belong to two active admissions.
6. Discharge changes the admission status and releases its bed together.
7. Duplicate discharge is rejected.
8. Inpatient notes cannot reference a missing admission.
9. Lab orders and bills reference the correct patient.
10. Invalid stock adjustments are rejected.
11. Bill totals are calculated correctly on the server.
12. Reports match the fictional records used in verification.
13. Backend build and relevant tests pass.
14. The React production build still passes.
15. No real patient data, credentials, or API secrets are committed.
16. Documentation matches the implemented behaviour.

Record any failed or unverified check honestly in `PHASE_STATUS.md`.

### Required response after implementation

Report:

1. Files and migrations created or changed.
2. Implemented endpoints by module.
3. Build, test, migration, and API verification results.
4. Any changed Phase 6 contract and why.
5. Known limitations.
6. Work remaining for Phase 8.

Stop after Phase 7 and wait for an explicit instruction before implementing Phase 8.
---

## Phase 8 — Emergency backend and frontend API integration

### Objective

Build a local development workflow for Emergency Ward cases and ambulance requests. Then connect the existing React pages to the implemented Spring Boot APIs across OPD, IPD, Operations, and Emergency.

This phase uses fictional development data only. An ambulance request stored in this system does **not** book or dispatch an ambulance.

### Prerequisite

Read `README.md`, `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, `PROJECT_PLAYBOOK.md`, `API_CONTRACTS.md`, and `PHASE_STATUS.md`.

Inspect the actual React and Spring Boot code. Verify that Phase 6 and Phase 7 APIs, migrations, and tests work. A written playbook prompt is not proof that those phases were implemented.

If a required API is missing, record the gap and fix only the necessary prerequisite before connecting its frontend page.

### Antigravity implementation prompt

Implement **Phase 8 only**.

#### 1. Emergency Ward data model and API

Create a versioned migration and API for fictional emergency case records.

A case may reference an existing patient. If the person is not registered, document a simple development-only intake approach without silently creating a complete patient record.

Implement operations to:

- Create a fictional emergency case
- List and filter cases
- Retrieve a case by ID
- Update permitted administrative details
- Change its workflow status through documented transitions

Keep statuses descriptive of internal record handling, such as `OPEN` and `CLOSED`. Do not equate a status with medical triage, diagnosis, or treatment.

The API must not automatically assign clinical urgency or recommend care.

#### 2. Ambulance request data model and API

Create a separate record type for an ambulance request.

Implement operations to:

- Create a local development request record
- List requests
- Retrieve one request
- Update or cancel an allowed request
- Link it to an emergency case only when appropriate

Use status names that do not imply an external ambulance service has accepted a request. For example, `DRAFT`, `RECORDED_IN_DEMO`, and `CANCELLED`.

Do **not** use statuses such as `BOOKED`, `DISPATCHED`, or `ON_THE_WAY`. No real dispatch provider has been selected or integrated.

Do not send SMS, place calls, share a location, or contact emergency services.

#### 3. Emergency data consistency

- Validate required request fields.
- Reject links to non-existent patient or case IDs.
- Define permitted status transitions.
- Prevent contradictory state between an emergency case and its linked request.
- Use transactions when one operation updates related records.
- Return consistent validation, not-found, and conflict responses.

Use fictional contact and location examples only. Do not commit actual patient or caller details.

#### 4. Frontend API service layer

Use `frontend/src/services/` as the single place for backend requests.

- Configure the local API base URL through frontend environment configuration.
- Do not hardcode passwords, database details, or secrets in React.
- Create small service functions matching implemented endpoints.
- Handle network failures and non-success HTTP responses.
- Map backend response fields consistently into the existing pages.
- Keep loading, empty, error, and success states distinct.

Do not call the database directly from React.

#### 5. Replace demo state deliberately

Connect pages to real local development APIs in a controlled order:

1. OPD patient, appointment, queue, and consultation pages
2. IPD admission, bed, inpatient note, and discharge pages
3. Operations pages with implemented Phase 7 APIs
4. Emergency Ward and Ambulance Request pages

For each page, remove the old in-memory behaviour only after its API-backed flow works. Do not mix sample and database records without clearly separating them.

If an Operations page still has no corresponding backend API, keep it visibly marked as a demo page and record the gap. Do not invent a successful API response.

#### 6. Frontend workflow behaviour

A successful form submission should show success only after the backend confirms it.

- Show useful validation errors from the API.
- Show an error when the server cannot be reached.
- Refresh the displayed list or detail after a confirmed change.
- Preserve the selected patient/admission/case ID across related pages.
- Avoid duplicate submissions while a request is pending.

On `AmbulanceRequestPage`, display prominently:

**“Development demo only. This request does not contact or dispatch an ambulance.”**

Even if the backend saves the request record, do not display a real-world booking confirmation.

#### 7. Local integration configuration

Document the commands and environment variables needed to run:

- PostgreSQL
- Spring Boot backend
- React frontend

Configure development CORS for the actual local React origin. Avoid unrestricted CORS. Keep the backend local; authentication and access control are not complete until Phase 9.

Do not deploy the system publicly in Phase 8.

#### 8. API contracts and documentation

Update `API_CONTRACTS.md` with the implemented Emergency endpoints, request and response examples, status transitions, and errors.

Update `README.md` with the complete local run order and the difference between API-backed records and any remaining demo-only pages.

Update `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, and `PHASE_STATUS.md` where the actual integration changes their descriptions.

### Boundaries

- Do not integrate an external ambulance provider.
- Do not claim to provide emergency assistance.
- Do not perform AI triage, diagnosis, or treatment decisions.
- Do not process real patient data.
- Do not collect payments or add unrelated features.
- Do not expose the unauthenticated system publicly.
- Do not mark Phase 9 security or final testing as complete.
- Do not automatically start Phase 9.

### Acceptance checks

Verify and record the outcome of each check:

1. Existing Phase 6 and Phase 7 backend tests pass.
2. Emergency migrations apply without deleting existing fictional data.
3. Emergency cases can be created, listed, retrieved, and updated through the API.
4. Invalid patient or case references are rejected.
5. Invalid emergency and ambulance status transitions are rejected.
6. Ambulance requests are stored only as internal development records.
7. The React OPD flow works with its implemented backend APIs.
8. The React IPD flow works with its implemented backend APIs.
9. Operations pages correctly use implemented APIs or clearly remain demo-only.
10. Emergency Ward displays API-backed fictional cases.
11. Ambulance Request never claims real booking or dispatch.
12. Form success appears only after a successful API response.
13. Network and validation failures are understandable to the user.
14. Refreshing an API-backed page retrieves its records from the local database.
15. Frontend build and backend build succeed.
16. No secrets or real patient records are committed.
17. The backend remains local and is not publicly deployed.

If a check fails or cannot be performed, document that result instead of marking it passed.

### Required response after implementation

Report:

1. Files and migrations created or changed.
2. Emergency endpoints implemented.
3. Frontend pages now connected to APIs.
4. Pages still using demo data, if any.
5. Exact local run commands.
6. Build, test, and end-to-end flow results.
7. Limitations and work remaining for Phase 9.

Stop after Phase 8.
---

## Phase 9 — Authentication, access control, final verification, and handoff

### Objective

Complete the local-development Hospital Management System by adding staff authentication, backend-enforced permissions, frontend login behaviour, and end-to-end verification of the implemented flows.

This is the final phase of the current playbook. Completion means the agreed development system is verified; it does not automatically authorize public deployment or use of real patient data.

### Prerequisite

Read `README.md`, `ARCHITECTURE.md`, `PROJECT_STRUCTURE.md`, `PROJECT_PLAYBOOK.md`, `API_CONTRACTS.md`, and `PHASE_STATUS.md`.

Inspect the actual code and verify what Phases 1–8 implemented. A prompt marked “written” is not an implemented feature. Record missing prerequisites and fix them before claiming final completion.

### Antigravity implementation prompt

Implement **Phase 9 only**.

#### 1. Define the access matrix first

Before changing security code, document which staff roles can read or change each resource:

- Patients and OPD records
- Appointments and queue
- Consultations
- Admissions and beds
- Lab orders
- Pharmacy and inventory
- Billing and reports
- Emergency cases and ambulance request records
- Staff accounts and configuration

Use the roles actually approved for this project. A possible starting set is `ADMIN`, `RECEPTION`, `DOCTOR`, `LAB`, `PHARMACY`, and `BILLING`, but do not assume every role needs access to every patient record.

Record the final role-to-action matrix in `ACCESS_CONTROL.md`. Apply least privilege: access that is not explicitly granted should be denied.

#### 2. Backend authentication

Add Spring Security using a mechanism suitable for the existing React and Spring Boot setup. Document the chosen session or token approach and its local-development behaviour.

- Store only securely encoded password values; never plaintext passwords.
- Do not commit working passwords, signing keys, or session secrets.
- Provide a safe way to create fictional local development accounts.
- Implement login, current-user, and logout behaviour as required by the chosen approach.
- Reject invalid credentials without revealing whether a username exists.
- Return consistent unauthenticated and forbidden responses.

Configure CSRF protection appropriately for the selected browser authentication mechanism. Do not disable security protections merely to make frontend requests succeed.

#### 3. Backend authorization

Enforce the documented access matrix in Spring Boot on protected endpoints. The browser's role display is not a security boundary.

Verify both:

- **Action access:** whether a role may perform an operation.
- **Record access:** whether that user may access the specific record when the project's rules require it.

Protect every existing OPD, IPD, Operations, and Emergency endpoint. Review health-check exposure separately. Do not leave a second unprotected route to the same sensitive data.

Only `ADMIN` or another explicitly authorized role may manage staff accounts and role assignments. A request must not be able to grant itself a stronger role.

#### 4. React authentication flow

Connect the existing `LoginPage` to the implemented backend authentication flow.

- Load the current signed-in user and role.
- Show navigation that matches the user's permitted sections.
- Guard protected routes.
- Handle expired login, forbidden actions, and logout clearly.
- Remove text that says login is only a placeholder once real local authentication works.

Route guards improve the interface; backend authorization remains mandatory. Do not store passwords in browser storage.

#### 5. Data and operational checks

- Keep using fictional records for verification.
- Confirm validation and error messages do not expose secrets or unnecessary patient details.
- Confirm database credentials come from environment configuration.
- Check that migrations preserve existing development records.
- Check CORS against the actual frontend origin.
- Do not claim ambulance dispatch, real payment, clinical diagnosis, or production readiness if those integrations do not exist.
- Keep the application local unless a separately approved deployment plan is created.

#### 6. End-to-end verification

Test complete flows with permitted and forbidden roles:

1. Login and logout.
2. Register a fictional patient.
3. Book and check in an appointment.
4. Enter a fictional consultation record.
5. Admit a patient and assign a bed.
6. Add an inpatient note and discharge, releasing the bed.
7. Create a fictional lab order.
8. View stock and calculate a demo bill.
9. Record an emergency case.
10. Save an internal demo ambulance request without contacting a service.
11. Confirm unauthorized users cannot view or change restricted records.
12. Confirm errors and unavailable backend states are shown honestly in React.

Use meaningful automated tests for authorization and core data consistency. Manually check the browser flow where automation does not cover it. Record exactly which checks were performed.

#### 7. Documentation and handoff

Update:

- `README.md` with exact local setup, run order, test commands, and fictional account setup
- `ARCHITECTURE.md` with the implemented authentication and authorization flow
- `API_CONTRACTS.md` with authentication requirements and verified endpoints
- `ACCESS_CONTROL.md` with the final role matrix
- `PHASE_STATUS.md` with passed, failed, and unverified checks

Provide a short team handoff explaining how a member can clone the repository, configure local environment values, run PostgreSQL, start Spring Boot, start React, and test the fictional workflows.

### Acceptance checks

Do not mark Phase 9 complete until:

1. Frontend and backend builds pass.
2. Backend security and core workflow tests pass.
3. Login and logout work in the browser.
4. An unauthenticated request cannot access protected APIs.
5. A lower-permission role cannot access another role's restricted action.
6. A user cannot change their own role through an API request.
7. Protected records are checked against the documented record-access rules.
8. All implemented end-to-end flows have observed results.
9. Refresh and expired-login behaviour are handled correctly.
10. No working credentials or real patient records are committed.
11. Ambulance requests remain clearly internal development records.
12. Documentation matches the actual running system.

Record failures and unverified items explicitly. Do not describe the project as fully complete if a required acceptance check has not passed.

### Required response after implementation

Report:

1. Files created or changed.
2. Authentication mechanism and final role matrix.
3. Builds and automated test results.
4. Browser flows actually verified.
5. Failed or unverified checks.
6. Remaining limitations before any real-world use or deployment.

Stop after Phase 9. Do not deploy publicly or import real patient data as part of this phase.