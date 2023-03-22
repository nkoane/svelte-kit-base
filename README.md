# S:KIT Starter Pack

This is just my startup kit for svelte-kit development. It's not meant to be used by anyone else, but feel free to use it if you want. I am still loking for something (a package) I can use handle form data parsing and returning json and/or array object. I tried [zod](https://zod.dev) but it's not working for me.

> It is heavily opinionated. I will detail exactly what, in a later update.

## Creating a project

And here are steps to be taken;

```bash
# clone this repo
gh repo clone nkoane/svelte-kit-base [scaffold-dir]

# change into your scaffolded-dir then delete the .git folder
cd [scaffold-dir]
rm -rf .git

# install all dependencies
pnpm install

# start the dev server
pnpm run dev -- --open
```

## Features

This has the following scafolded into it:

-   [x] [SvelteKit](https://kit.svelte.dev/)
-   [x] [TailwindCSS](https://tailwindcss.com/)
-   [x] [Prettier](https://prettier.io/)
-   [x] [ESLint](https://eslint.org/)
-   [x] [Feather Icons](https://feathericons.com/)

## Questions?

I do not know why you'd need to ask questions, but shoot your shot.

el oh el.
