import "./components/Contact/contact.js";

import { DataGraphisme } from "./data/DataGraphisme.js";
import { Graphisme } from "./components/Graphisme/graphisme.js";
Graphisme.render("#graphisme-container", DataGraphisme);

import { DataIntegration } from "./data/DataIntegration.js";
import { Integration } from "./components/Integration/integration.js";
Integration.render("#integration-container", DataIntegration);

import { Data3D } from "./data/Data3D.js";
import { TroisD } from "./components/3D/3D.js";
TroisD.render("#troisd-container", Data3D);

import { DataMotion } from "./data/DataMotion.js";
import { Motion } from "./components/Motion/motion.js";
Motion.render("#motion-design-container", DataMotion);

import { DataUXUI } from "./data/DataUXUI.js";
import { UXUI } from "./components/UX-UI/ux-ui.js";
UXUI.render("#ux-ui-container", DataUXUI);
