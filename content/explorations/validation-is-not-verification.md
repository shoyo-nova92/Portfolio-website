---
title: Validation is not verification
description: Two different questions inside Nova's intent-to-action pipeline.
topic: Agent systems
---

Nova's architecture separates a proposed action from the code that carries it out. That creates two useful questions: is the plan well formed, and did the intended change actually happen?

## Before execution

Nova's public plan validator checks for a valid plan, nonempty steps, step identifiers, resolved operations, and resolved context references. Those checks establish structural requirements. They do not establish that a window is still open, a target still exists, or a browser will be in the expected state.

## After execution

An execution result needs to connect to the requested outcome. A returned success status and an observed change are different kinds of evidence. That distinction motivates the verification stage in Nova's design.

The engineering question is how to make the expected outcome explicit enough to check, while allowing the runtime to report uncertainty or failure. This is a design direction, not a claim that every action is already verified reliably.

## Source

[Nova plan validator](https://github.com/shoyo-nova92/Nova-AI/blob/main/src/plan_validator.cpp) and the builder-supplied project architecture.
