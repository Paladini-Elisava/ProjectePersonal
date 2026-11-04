---
name: GitHub Project Continuity
description: Maintain continuity across work sessions by reading project definition files before making changes and updating the project log at the end of every session.
---

# GitHub Project Continuity

## Purpose

Keep work on this repository consistent across sessions, tools and AI assistants. Treat the repository as the source of truth for project context, decisions, working criteria and session history.

This skill is designed to be usable with ChatGPT, Codex and Claude Code. Adapt the commands and Git operations to the environment in use; never assume a tool or permission is available.

## Activation

Activate this workflow when the user:
- invokes `/project`;
- asks to start or continue work on this project;
- asks to inspect, modify, debug or extend project files.

Use `/close-project` to explicitly close a work session. If the user ends a work session without invoking it, still perform the session-close procedure whenever practical.

## Source-of-truth files

At the beginning of a session, look for these files in the repository:

1. `README.md` — project overview and setup.
2. `personalidad.md` — voice, identity and personality.
3. `contexto.md` — background, goals, users and project context.
4. `criterio.md` — principles, constraints, quality standards and decision rules.
5. `log.md` — chronological record of previous work sessions.

The files may be in the repository root or in a clearly named documentation/context folder. Locate them; do not create duplicates simply because they are not in the root.

If one or more files do not exist:
- report which ones are missing;
- do not invent their contents or pretend they were read;
- continue only with the context that is actually available;
- create or propose missing definition files only when the user asks, or when their absence blocks the requested work.

## Start-of-session procedure

1. Confirm the repository and the active branch. If either is ambiguous, ask before editing.
2. Inspect the repository structure and identify the source-of-truth files.
3. Read `README.md`, `personalidad.md`, `contexto.md`, `criterio.md` and the latest relevant entries in `log.md`, where available.
4. Summarise the current project state briefly: purpose, relevant constraints, recent decisions and pending work.
5. Confirm the specific task and its scope when it is not already clear.
6. Before changing files, consider the impact on existing work and preserve unrelated changes.

## Working rules

- Follow the project's documented personality, context and criteria.
- Treat explicit user decisions as authoritative. Do not silently reverse or reinterpret them.
- Prefer small, focused changes that solve the requested task.
- Inspect relevant files before editing them; do not replace whole files based on partial excerpts.
- Do not invent project requirements, technical facts, completed work or test results.
- If instructions conflict, explain the conflict and ask for a decision when it materially affects the result.
- Keep the user informed about important decisions, risks and scope changes.
- Run appropriate checks or tests when available. Clearly distinguish checks that passed, failed, or could not be run.
- Never expose, copy into logs, or commit secrets, credentials, tokens or private keys.
- Do not commit or push unless the user has authorised repository writes. When authorised, use a clear, descriptive commit message and report the resulting commit.

## End-of-session procedure

Before closing a work session, update `log.md` in the repository.

Create `log.md` only if it does not already exist. Preserve its existing structure and append a new dated entry rather than overwriting previous history.

Each entry should include:

- **Date**
- **Session objective**
- **Work completed**
- **Files created or modified**
- **Decisions made** and the reasoning that should carry into future sessions
- **Problems, risks or unresolved questions**
- **Checks/tests performed** and their actual results
- **Pending tasks / next steps**

Be concise but specific enough that another assistant can resume without reconstructing the whole conversation. Record outcomes, not speculation. Do not log sensitive information.

After updating the log:
1. Review the diff or reread the updated file.
2. Verify that the entry accurately reflects the work performed.
3. Commit and push the log and other authorised changes when repository write access and user authorisation are available.
4. If a commit or push cannot be completed, state exactly what remains uncommitted or unpublished.

## Session commands

### `/project`

Start or resume the project workflow:
- identify repository and branch;
- read the source-of-truth files;
- review the latest log entry;
- summarise context and pending work;
- then proceed with the user's task.

### `/close-project`

Close the current work session:
- summarise completed work;
- update `log.md`;
- verify the log entry;
- commit/push when authorised and possible;
- report pending work and the commit status.

## First-session behaviour

If this skill is being used for the first time in a repository, inspect the repository before assuming it already has project definition files. Do not manufacture project history. The first log entry should explicitly say that it is the initial recorded session when applicable.

## Completion report

At the end of a session, tell the user:
- what was changed;
- whether `log.md` was updated;
- whether changes were committed and pushed;
- what remains pending.
