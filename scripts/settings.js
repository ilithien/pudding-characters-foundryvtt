import { MODULE_NAME } from "./constants.js";

export function registerSettings() {
  game.settings.register(MODULE_NAME, "clientId", {
    name: "API Client ID",
    hint: "A valid client ID to update the actors",
    scope: "world",
    config: true,
    type: new foundry.data.fields.StringField({
      required: true,
      blank: false,
      initial: "default",
    }),
    requiresReload: true,
  });

  game.settings.register(MODULE_NAME, "clientId", {
    name: "API Client Key",
    hint: "API Client key",
    scope: "world",
    config: true,
    type: new foundry.data.fields.StringField({
      required: true,
      blank: false,
      initial: "default",
    }),
    requiresReload: true,
  });
}
