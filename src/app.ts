// Special TS comment with 3 x / for imports
// /// <reference path="components/project-input.ts" />
// /// <reference path="components/project-list.ts" />
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
