
Hooks.on("updateActor", function (actor, updatedPartial) {
  fetch(`https://pudding.obitur.com/actor/${actor._id}`, {
    method: "POST",
    body: JSON.stringify(updatedPartial),
  });
});
