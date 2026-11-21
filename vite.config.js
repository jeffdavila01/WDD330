import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({root:'src',publicDir:'public',build:{outDir:'../dist',emptyOutDir:true,rollupOptions:{input:{home:resolve('src/index.html'),product:resolve('src/product/index.html'),cart:resolve('src/cart/index.html'),checkout:resolve('src/checkout/index.html'),success:resolve('src/success/index.html')}}}});
