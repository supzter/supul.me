// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
    site: isGithubPages ? 'https://supzter.github.io' : 'https://supul.me',
    base: isGithubPages ? '/supul.me' : '/',
    vite: {
        plugins: [tailwind()],
    },
});
