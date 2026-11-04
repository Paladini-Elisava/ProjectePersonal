---
name: GitHub Project Continuity
description: Maintain continuity across work sessions by reading the project's definition files before making changes and updating LOG.md at the end of every session.
---

# GitHub Project Continuity

## Purpose

Keep work on this repository consistent across sessions, tools and AI assistants. Treat the repository as the source of truth for project context, working principles, task criteria and session history.

This skill is designed to be usable with ChatGPT, Codex and Claude Code. Adapt commands and Git operations to the environment in use; never assume a tool or permission is available.

## Activation

Activate this workflow when the user:
- invokes `/project`;
- asks to start or continue work on this project;
- asks to inspect, modify, debug or extend project files.

Use `/close-project` to explicitly close a work session. If the user ends a work session without invoking it, perform the session-close procedure whenever practical.

## Source-of-truth files

At the beginning of a session, inspect the repository and look for these files:

1. `README.md` — project overview and setup.
2. `SOUL.md` — how the AI should work with and respond to the user.
3. `CONTEXT.md` — project question, data, tone, references, decisions, hypotheses, discarded directions and current state.
4. `INSTRUCTIONS.md` — task-specific request and verifiable acceptance/rejection criteria.
5. `LOG.md` — chronological record of work sessions, experiments and lessons learned.

Use these exact filenames and capitalisation. They are the canonical project documents. Do not create parallel files such as `personalidad.md`, `contexto.md`, `criterio.md` or `log.md`.

The files may be in the repository root or in a clearly named documentation/context folder. Locate them; do not create duplicates simply because they are not in the root.

### How to use each document

- Read `SOUL.md` for stable collaboration rules: role, response style, permitted scope, prohibitions and what to do when uncertain. Do not treat it as project background.
- Read `CONTEXT.md` for the project's actual context and current decisions. Distinguish confirmed facts from hypotheses and missing information.
- Read the relevant entry in `INSTRUCTIONS.md` for the current task. Its acceptance criteria must be verifiable. If no applicable entry exists, clarify the task and criteria when needed; do not invent them.
- Read the latest relevant entries in `LOG.md` to understand what has already been tried and learned. Do not repeat failed approaches without a reason.
- Read `README.md` for the project overview and setup information.

If one or more files do not exist:
- report which ones are missing;
- do not invent their contents or pretend they were read;
- continue only with the context that is actually available;
- create missing documents only when the user asks or their absence blocks the requested work.

## Start-of-session procedure

1. Confirm the repository and active branch. If either is ambiguous, ask before editing.
2. Inspect the repository structure and locate the source-of-truth files.
3. Read `README.md`, `SOUL.md`, `CONTEXT.md`, `INSTRUCTIONS.md` and the latest relevant entries in `LOG.md`, where available.
4. Summarise the current project state briefly: purpose, collaboration rules, relevant context, task criteria, recent decisions and pending work.
5. Confirm the specific task and its scope when it is not already clear.
6. Before changing files, inspect the relevant existing content and consider the impact on other work.

## Working rules

- Follow the collaboration rules in `SOUL.md`, the project facts and decisions in `CONTEXT.md`, and the applicable acceptance criteria in `INSTRUCTIONS.md`.
- Treat explicit user decisions as authoritative. Do not silently reverse or reinterpret them.
- Prefer small, focused changes that solve the requested task.
- Inspect relevant files before editing them; never replace whole files based on partial excerpts.
- Do not invent project requirements, technical facts, completed work or test results.
- Distinguish confirmed facts, hypotheses and assumptions. State when something is unknown.
- If instructions conflict, explain the conflict and ask for a decision when it materially affects the result.
- Keep the user informed about important decisions, risks and scope changes.
- Run appropriate checks or tests when available. Clearly distinguish checks that passed, failed or could not be run.
- Never expose, copy into logs or commit secrets, credentials, tokens or private keys.
- Do not commit or push unless the user has authorised repository writes. When authorised, use a clear, descriptive commit message and report the resulting commit.

## Task-specific instructions

Before starting a substantial task, check `INSTRUCTIONS.md` for a matching request and its criteria.

The document may contain multiple dated task blocks. Apply only the block relevant to the current request; do not assume that criteria from an unrelated task apply universally.

If the user asks for a new task and its success conditions are not clear, help define a concise block with:
- date and short task name;
- `QUIERO`: the requested outcome;
- `SERÁ BUENO SI`: observable acceptance conditions;
- `NO SIRVE SI`: concrete rejection conditions;
- `LO SABRÉ PORQUE`: how the result will be checked.

Do not add or change task instructions without the user's approval.

## End-of-session procedure

Before closing a work session, update `LOG.md` in the repository.

Use the existing structure and append a dated entry; never overwrite previous history. The log records one entry per request or meaningful work session, concisely.

Each entry should include, as applicable:
- **Date and request** — what the user asked for.
- **Criterion** — the key acceptance condition from `INSTRUCTIONS.md`, if one exists.
- **Work completed** — what was actually done.
- **Iterations and result** — number of meaningful attempts and whether the criterion was met; use clear status markers if the file's format does so.
- **Files changed** — files created, modified or inspected when relevant.
- **Learned** — what the next attempt or future work should do differently.
- **Pending** — unresolved questions or next steps, when useful.

Record outcomes, not speculation. Do not claim that a criterion passed unless it was checked. Do not log sensitive information.

After updating the log:
1. Review the diff or reread the updated file.
2. Verify that the entry accurately reflects the work performed.
3. Commit and push the log and other authorised changes when repository write access and user authorisation are available.
4. If a commit or push cannot be completed, state exactly what remains uncommitted or unpublished.

## Session commands

### `/project`

Start or resume the project workflow:
- identify repository and branch;
- inspect the repository structure;
- read the canonical source-of-truth files;
- review the latest relevant log entry;
- summarise context, collaboration rules, task criteria and pending work;
- then proceed with the user's task.

### `/close-project`

Close the current work session:
- summarise completed work;
- append an accurate entry to `LOG.md`;
- verify the log entry;
- commit/push when authorised and possible;
- report pending work and commit status.

## First-session behaviour

When using this skill for the first time in a repository, inspect the repository before assuming project definition files or history exist. Do not manufacture project context or past sessions.

If `LOG.md` has only its template, treat the current session as the first recorded session. Preserve the template's intended format when adding the first entry.

## Completion report

At the end of a session, tell the user:
- what was changed;
- whether `LOG.md` was updated;
- whether changes were committed and pushed;
- what remains pending.
