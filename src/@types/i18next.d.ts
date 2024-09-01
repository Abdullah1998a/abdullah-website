import { resources } from "../i18n/config";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: 'global';
    resources: typeof resources["en"];
  }
}
