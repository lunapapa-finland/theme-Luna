import { currentColorScheme } from "../main";

export default () => ({
  colorSchemes: [
    { label: "dark", value: "dark", icon: "i-gg-moon" },
    { label: "light", value: "light", icon: "i-gg-sun" },
  ],
  currentValue: currentColorScheme,
  get colorScheme() {
    return this.colorSchemes.find((x) => x.value === this.currentValue);
  },
  get nextColorScheme() {
    const index = this.colorSchemes.findIndex((x) => x.value === this.currentValue);
    return this.colorSchemes[(index + 1) % this.colorSchemes.length];
  },
});
