import { registerSettings } from "./settings";

Hooks.once("init", async function () {
  console.log(
    "Pudding Character | Loading Pudding Character for FoundryVTT..."
  );
  registerSettings();
});

console.log(" Pudding Character | Registering 'updateActor' hook");
Hooks.on("updateActor", function (actor, updatedPartial) {
  fetch(`https://pudding.obitur.com/actor/${actor._id}`, {
    method: "POST",
    body: JSON.stringify(updatedPartial),
  });
});
