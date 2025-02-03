import { registerSettings } from "./settings";

Hooks.once("init", async function () {
  registerSettings();
});

Hooks.on("updateActor", function (actor, updatedPartial) {
  fetch(`https://pudding.obitur.com/actor/${actor._id}`, {
    method: "POST",
    body: JSON.stringify(updatedPartial),
  });
});
