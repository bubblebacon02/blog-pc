import type { App } from "vue";
import PiggyLogo from "@/components/piggy-logo";
import IframeEmbed from "@/components/iframe-embed";

const components = [PiggyLogo, IframeEmbed];

export default function (app: App): void {
  components.forEach((component) => {
    app.component(component.name as string, component);
  });
}
