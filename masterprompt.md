# MASTER_PROMPT.md

## Your task

You are implementing our Hospital Management System group project from the existing project documents and code.

Read the project first. Then implement the documented phases in order, starting from the first phase that is not actually complete. Do not assume that a phase is complete just because its prompt has been written.

The frontend uses React. The backend uses Java and Spring Boot. The initial frontend should remain deliberately basic so our team can improve pages and components manually.

## 1. Read before editing

Inspect the repository and read these files completely if they exist:

1. `README.md`
2. `ARCHITECTURE.md`
3. `PROJECT_STRUCTURE.md`
4. `PROJECT_PLAYBOOK.md`
5. `PHASE_STATUS.md`
6. `API_CONTRACTS.md`
7. `ACCESS_CONTROL.md`
8. Any applicable repository instructions

Inspect the existing `frontend/` and `backend/` code, build files, migrations, tests, and Git status. Ignore generated dependency and build directories when reading the project.

If a required planning document is missing, report it. Create it only when the relevant phase calls for it; do not invent product requirements to fill gaps.

## 2. Source of truth

Follow the user's confirmed decisions and the project documents. Use `PROJECT_PLAYBOOK.md` for the detailed scope and acceptance checks of each phase.

If two documents conflict:

1. Preserve the user's latest confirmed decision.
2. Prefer a specific, later decision over an older general description.
3. Make the smallest consistent documentation correction.
4. Report the conflict and correction.

Do not silently replace existing code or assume that a previously discussed file was actually pasted into this repository.

## 3. Implementation order

Work through the nine documented phases in order:

1. Documentation and repository foundation
2. Complete basic React page structure
3. Interactive OPD frontend demo
4. Interactive IPD, Operations, and Emergency frontend demo
5. Spring Boot backend foundation and API plan
6. OPD database and backend APIs
7. IPD and Hospital Operations backend APIs
8. Emergency backend and frontend API integration
9. Authentication, access control, final verification, and handoff

Before starting a phase, inspect `PHASE_STATUS.md` and verify the preceding phase's acceptance checks against the actual files and running application.

For this master execution, the instruction in individual phase prompts to “wait before the next phase” means: **finish and verify the current phase before proceeding**. You may continue through the next documented phase without asking for a separate “continue” message. Do not skip a failed prerequisite.

If a decision genuinely blocks safe implementation, record the exact decision needed and stop the dependent work. Continue any independent work that remains possible.

## 4. Current product boundaries

- Keep the React UI simple: semantic HTML, minimal CSS, reusable components, and clear navigation.
- Do not generate decorative assets, animations, or a polished final design.
- Preserve the OPD, IPD, Hospital Operations, and Emergency structure.
- Keep patient IDs and linked records consistent across modules.
- Use fictional development records only.
- Never present sample data as real hospital data.
- An internal ambulance request is not a real booking or dispatch.
- Do not add automated diagnosis, triage, treatment, or medicine recommendations.
- Do not import real patient information or commit credentials.
- Do not deploy publicly as part of this task.

## 5. Code and collaboration rules

- Preserve existing work and Git history.
- Adapt an existing React or Spring Boot app rather than creating a duplicate.
- Follow the folder and component boundaries in the documents.
- Keep controllers, services, repositories, DTOs, and database migrations distinct where the backend phase requires them.
- Keep browser API calls in the frontend service layer.
- Use configuration or environment variables for local connection settings and secrets.
- Do not push to a remote repository, merge team branches, or overwrite teammates' changes without an explicit instruction.
- Keep changes reviewable by phase.

## 6. Verification rule

For every phase:

1. Implement only the scope described for that phase.
2. Run its relevant install, build, test, migration, API, and browser checks.
3. Fix failures that are within that phase's scope.
4. Update `PHASE_STATUS.md` with passed, failed, and unverified checks.
5. Update documentation when the actual implementation changes.
6. Move to the next phase only when the current phase's required checks pass.

Do not invent test results. A successful build does not prove that every user flow works. A written prompt does not prove that its code exists.

## 7. Database and security

The Phase 6 playbook proposes local PostgreSQL. Check whether the repository records a later approved database choice before configuring it. Use one consistent database and versioned migrations.

Until Phase 9 security is implemented and verified, use fictional local development data only and keep the backend off public deployment.

At Phase 9, enforce permissions in Spring Boot as well as showing appropriate navigation in React. A frontend route guard alone does not protect an API.

## 8. Final output

After implementation, give a concise, factual report containing:

- Which phases were actually completed
- Files and modules created or changed
- Exact commands to set up and run frontend, backend, and database
- Build, test, migration, API, and browser verification results
- Failed or unverified acceptance checks
- Remaining decisions and limitations
- Any work that was blocked and why

Do not say the Hospital Management System is complete unless all required Phase 9 acceptance checks have passed.

Begin by inspecting the repository and identifying the first incomplete phase. Then start implementation.