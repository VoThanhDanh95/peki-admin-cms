import type { Config } from "tailwindcss"

const globalTokens = {
  base: {
    transparent: "transparent",
    current: "currentcolor",
    black: "#000000",
    white: "#ffffff",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3b0",
    500: "#6b7280",
    600: "#4b5563",
    700: "#384252",
    800: "#1f2937",
    900: "#111827",
  },
  primary: {
    50: "#f6f5ff",
    100: "#e7e8fe",
    200: "#d5d4fc",
    300: "#b5b2ff",
    400: "#8480f4",
    500: "#6255ec",
    600: "#4538d6",
    700: "#312fac",
    800: "#2d2c96",
    900: "#252475",
  },
  red: {
    50: "#fef1f1",
    100: "#fee1e1",
    200: "#fec8c8",
    300: "#fca6a6",
    400: "#f87272",
    500: "#ef4343",
    600: "#dc2828",
    700: "#ba1c1c",
    800: "#981b1b",
    900: "#811d1d",
  },
  yellow: {
    50: "#fffbeb",
    100: "#fef3c8",
    200: "#fde68b",
    300: "#fcd44f",
    400: "#fbbd23",
    500: "#f59f0a",
    600: "#db7706",
    700: "#b35309",
    800: "#91400d",
    900: "#76350f",
  },
  green: {
    50: "#edfdf5",
    100: "#d1fae5",
    200: "#a5f3cf",
    300: "#6ee7b7",
    400: "#36d399",
    500: "#10b77f",
    600: "#059467",
    700: "#047756",
    800: "#066046",
    900: "#064c39",
  },
  blue: {
    50: "#f0f6ff",
    100: "#dcebfe",
    200: "#bedbfe",
    300: "#91c3fd",
    400: "#61a6fa",
    500: "#3c83f6",
    600: "#2463eb",
    700: "#1d4fd7",
    800: "#1e3fae",
    900: "#1e3b8a",
  },
}

const semanticTokens = {
  background: {
    default: globalTokens.gray[50],
  },
  text: {
    placeholder: globalTokens.gray[400],
    subdued: globalTokens.gray[500],
    default: globalTokens.gray[700],
    emphasized: globalTokens.gray[900],
    disabled: globalTokens.gray[400],
    "primary-default": globalTokens.primary[500],
    "primary-emphasized": globalTokens.primary[600],
    "on-primary": globalTokens.base.white,
    "critical-default": globalTokens.red[500],
    "critical-emphasized": globalTokens.red[600],
    "critical-disabled": globalTokens.gray[200],
    "warning-default": globalTokens.yellow[500],
    "warning-emphasized": globalTokens.yellow[600],
    "success-default": globalTokens.green[500],
    "success-emphasized": globalTokens.green[600],
    "info-default": globalTokens.blue[500],
    "info-emphasized": globalTokens.blue[600],
  },
  actions: {
    "primary-default": globalTokens.primary[500],
    "primary-hovered": globalTokens.primary[600],
    "primary-disabled": globalTokens.gray[200],
    "secondary-default": globalTokens.base.white,
    "secondary-hovered": globalTokens.gray[50],
    "secondary-disabled": globalTokens.gray[100],
    "critical-default": globalTokens.red[500],
    "critical-hovered": globalTokens.red[600],
    "critical-disabled": globalTokens.gray[200],
  },
  surface: {
    default: globalTokens.base.white,
    subdued: globalTokens.gray[50],
    emphasized: globalTokens.gray[100],
    "hovered-default": globalTokens.gray[50],
    "hovered-emphasized": globalTokens.gray[100],
    disabled: globalTokens.gray[100],
    "primary-default": globalTokens.primary[100],
    "primary-emphasized": globalTokens.primary[200],
    "primary-subdued": globalTokens.primary[50],
    "dark-subdued": globalTokens.gray[600],
    "dark-default": globalTokens.gray[700],
    "dark-selected": globalTokens.gray[900],
    "dark-emphasized": globalTokens.gray[800],
    "critical-subdued": globalTokens.red[50],
    "critical-default": globalTokens.red[100],
    "warning-subdued": globalTokens.yellow[50],
    "warning-default": globalTokens.yellow[100],
    "success-subdued": globalTokens.green[50],
    "success-default": globalTokens.green[100],
    "info-subdued": globalTokens.blue[50],
    "info-default": globalTokens.blue[100],
    "gray-200": globalTokens.gray[200], // TODO: [CHECK] Verify naming convention
  },
  overlay: {
    default: "rgba(0, 0, 0, 0.4)",
  },
  border: {
    "primary-subdued": globalTokens.primary[300],
    "primary-default": globalTokens.primary[400],
    "primary-emphasized": globalTokens.primary[500],
    subdued: globalTokens.gray[100],
    default: globalTokens.gray[200],
    emphasized: globalTokens.gray[300],
    "critical-subdued": globalTokens.red[300],
    "critical-default": globalTokens.red[400],
    "critical-emphasized": globalTokens.red[500],
    "on-primary": globalTokens.base.white,
    "warning-subdued": globalTokens.yellow[300],
    "warning-default": globalTokens.yellow[400],
    "warning-emphasized": globalTokens.yellow[500],
    "success-subdued": globalTokens.green[300],
    "success-default": globalTokens.green[400],
    "success-emphasized": globalTokens.green[500],
    dark: globalTokens.gray[900],
  },
  icons: {
    "primary-default": globalTokens.primary[500],
    "primary-subdued": globalTokens.primary[300],
    "primary-emphasized": globalTokens.primary[600],
    "on-destructive": globalTokens.base.white,
    "on-primary": globalTokens.base.white,
    subdued: globalTokens.gray[300],
    default: globalTokens.gray[500],
    emphasized: globalTokens.gray[900],
    disabled: globalTokens.gray[400],
    "critical-default": globalTokens.red[500],
    "critical-emphasized": globalTokens.red[600],
    "warning-default": globalTokens.yellow[500],
    "warning-emphasized": globalTokens.yellow[600],
    "success-default": globalTokens.green[500],
    "success-emphasized": globalTokens.green[600],
    "info-default": globalTokens.blue[500],
    "info-emphasized": globalTokens.blue[600],
  },
  placeholder: {
    default: globalTokens.gray[400],
  },
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: {
      ...globalTokens.base,
      ...semanticTokens.background,
      actions: semanticTokens.actions,
      surface: semanticTokens.surface,
      overlay: semanticTokens.overlay,
      icons: semanticTokens.icons,
    },
    borderColor: {
      ...globalTokens.base,
      ...semanticTokens.border,
    },
    textColor: {
      ...globalTokens.base,
      ...semanticTokens.text,
      icons: semanticTokens.icons,
    },
    placeholderColor: {
      ...semanticTokens.placeholder,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0px 0px 1px rgba(0, 0, 0, 0.16), 0px 1px 6px rgba(0, 0, 0, 0.06)",
        md: "0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 0 2px 0 rgba(0, 0, 0, 0.15)",
        lg: "0 4px 20px 0 rgba(0, 0, 0, 0.15), 0 0 3px 0 rgba(0, 0, 0, 0.1)",
        xl: "0 8px 40px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.1)",
        "modal-drop-shadow": "0px 4px 34px rgba(0, 0, 0, 0.15)",
      },
      dropShadow: {
        base: [
          "0px 0px 1px rgba(0, 0, 0, 0.16)",
          "0px 1px 6px rgba(0, 0, 0, 0.06)",
        ],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
export default config
