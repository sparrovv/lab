Rules:

1. One project = one folder:
   src/pages/projects/<slug>/

2. Keep projects isolated.

3. Project-specific files remain inside project folder:
   - layout
   - styles
   - markdown
   - scripts
   - components
   - datasets

4. Do not modify unrelated projects.

5. Shared code only in src/components or src/lib.

6. New projects must automatically add themselves to homepage.

7. Every PR must pass:

pnpm run build

8. Prefer static implementations.

9. Avoid backend services.

10. Keep dependencies minimal.

11. Preserve independent deployment capability.
