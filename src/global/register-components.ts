import type { App } from "vue";
import PiggyLogo from "@/components/piggy-logo";

const components = [PiggyLogo];

export default function (app: App): void {
  components.forEach((component) => {
    app.component(component.name as string, component);
  });
}
