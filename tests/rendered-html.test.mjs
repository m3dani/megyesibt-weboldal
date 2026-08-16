import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete Hungarian one-page site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Tűzifa házhozszállítás Nemeskolta környékén \| Megyesi Bt\.<\/title>/i,
  );
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.match(html, />Tűzifa házhozszállítással<\/h1>/i);

  for (const id of [
    "bemutatkozas",
    "termekek",
    "arak",
    "szallitas",
    "rendeles",
    "kapcsolat",
  ]) {
    assert.match(html, new RegExp(`id=["']${id}["']`, "i"));
  }

  assert.match(html, /Üdvözöljük a MEGYESI BT\. weboldalán!/);
  assert.match(html, /fakitermelés/i);
  assert.match(html, /komplex erdészeti szolgáltatások/);
  assert.doesNotMatch(html, /PLACEHOLDER – CSERÉLENDŐ/);
  assert.match(html, /30\+ év/);
  assert.match(html, /AA8633932/);
  assert.match(html, /30 000 Ft/);
  assert.match(html, /33 000 Ft/);
  assert.match(html, /tel:\+36309869255/);
  assert.match(html, /mailto:megyesibt@gmail\.com/);
  assert.match(html, /google\.com\/maps\?q=Nemeskolta(?:&|&amp;)output=embed/);
  assert.doesNotMatch(html, /<form\b/i);
});

test("keeps the order constraints visible", async () => {
  const html = await (await render()).text();
  assert.match(html, /3–6 m³ \/ fuvar/);
  assert.match(html, /Minimum rendelés: 3 m³/);
  assert.match(html, /Egy fuvar maximum 6 m³/);
  assert.match(html, /Szállítás az árban/);
  assert.match(html, /számlát adunk/i);
  assert.match(html, /Szombathely/);
  assert.match(html, /Körmend/);
  assert.match(html, /Vasvár/);
  assert.match(html, /Sárvár/);
  assert.match(html, /Vép/);
});
