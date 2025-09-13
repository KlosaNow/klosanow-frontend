// vite.config.ts
import { defineConfig } from "file:///C:/Users/hp/Desktop/klosanow-frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/hp/Desktop/klosanow-frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/hp/Desktop/klosanow-frontend/node_modules/@svgr/rollup/dist/index.js";
import tsconfigPaths from "file:///C:/Users/hp/Desktop/klosanow-frontend/node_modules/vite-tsconfig-paths/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\hp\\Desktop\\klosanow-frontend";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      typescript: true,
      prettier: false,
      svgo: false,
      titleProp: true,
      ref: true
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxocFxcXFxEZXNrdG9wXFxcXGtsb3Nhbm93LWZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxocFxcXFxEZXNrdG9wXFxcXGtsb3Nhbm93LWZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ocC9EZXNrdG9wL2tsb3Nhbm93LWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgc3ZnciBmcm9tIFwiQHN2Z3Ivcm9sbHVwXCI7XHJcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICAgIHN2Z3Ioe1xyXG4gICAgICB0eXBlc2NyaXB0OiB0cnVlLFxyXG4gICAgICBwcmV0dGllcjogZmFsc2UsXHJcbiAgICAgIHN2Z286IGZhbHNlLFxyXG4gICAgICB0aXRsZVByb3A6IHRydWUsXHJcbiAgICAgIHJlZjogdHJ1ZSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgc3JjOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUyxTQUFTLG9CQUFvQjtBQUN4VSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsTUFDSCxZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
