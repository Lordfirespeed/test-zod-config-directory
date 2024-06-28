Example results from preliminary testing:

```bash
lordfirespeed@test-zod-config$ pnpm exec tsx src/main.ts
{ foo: 'hiya, ', bar: 10, baz: { qux: 'hehee', corge: '!' } }
lordfirespeed@test-zod-config$ export NODE_ENV="production"
lordfirespeed@test-zod-config$ pnpm exec tsx src/main.ts
{ foo: 'hello', bar: 10, baz: { qux: 'world', corge: '!' } }
lordfirespeed@test-zod-config$ pnpm exec tsup
lordfirespeed@test-zod-config$ node dist/main.js
{ foo: 'hello', bar: 10, baz: { qux: 'world', corge: '!' } }
```