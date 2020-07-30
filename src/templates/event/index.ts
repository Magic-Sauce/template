import * as Mustache from 'mustache';

import { RenderEventTemplateData } from "./types";

export const renderEventTemplate = ({template, partials}:{template: string, partials: RenderEventTemplateData}) => {
  const output = Mustache.render(template, partials);
  return output;
}