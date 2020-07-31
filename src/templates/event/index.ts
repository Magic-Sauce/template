import * as Mustache from 'mustache';

import { EventPartial } from "./types";

export const renderEventTemplate = ({template, partials}:{template: string, partials: EventPartial}) => {
  const output = Mustache.render(template, partials);
  return output;
}

export {EventPartial}
