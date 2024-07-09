import { Manifest } from "deno-slack-sdk/mod.ts";
import { AIIncidentSummaryFunction } from "./functions/ai_incident_summary_function.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "ai-summarize-function-db",
  description: "Summarize an incident with openAI",
  icon: "assets/default_new_app_icon.png",
  functions: [AIIncidentSummaryFunction],
  workflows: [],
  outgoingDomains: ["api.openai.com"],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "channels:history",
  ],
});
