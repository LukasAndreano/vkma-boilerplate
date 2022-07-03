export default class themeManager {
  constructor() {
    this.theme = localStorage.getItem("theme") ?? "bright_light";
    this.platform = new URLSearchParams(window.location.search).get(
      "vk_platform"
    );

    if (
      ["desktop_web", "mobile_web"].includes(this.platform) &&
      localStorage.getItem("theme") === null
    ) {
      this.setTheme();
    }

    if (this.theme === "space_gray") this.setTheme(this.theme);
  }

  detectBrowserTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "space_gray"
      : "client_light";
  }

  setTheme(theme = null) {
    if (theme !== null) localStorage.setItem("theme", theme);

    window.themeSetted = true;
    this.theme = theme ? theme : this.detectBrowserTheme();
    const schemeAttribute = document.createAttribute("scheme");
    schemeAttribute.value = this.theme;
    document.body.attributes.setNamedItem(schemeAttribute);
  }
}
