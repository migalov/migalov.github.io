import { defineConfig } from 'astro/config';

const breakpoints = {
  // These are default values
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData(source, filePath) {
            // Exclude file, prevents module loop
            if (filePath.includes('use-')) return source;
            // if (filePath.includes('my-vars.scss')) return source;
            return `
            @use "astro-breakpoints/use-breakpoints.scss" as * with (
              $breakpoints: (
                "xs": ${breakpoints.xs},
                "sm": ${breakpoints.sm},
                "md": ${breakpoints.md},
                "lg": ${breakpoints.lg},
                "xl": ${breakpoints.xl},
              )
            );
            ${source}
          `;
          },
        },
      },
    },
  },
});
