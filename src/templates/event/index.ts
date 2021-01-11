import * as Mustache from "mustache";

import { EventPartial, ContentPartial } from "./types";

export const renderEventTemplate = ({
  template,
  partials,
}: {
  template: string;
  partials: EventPartial;
}) => {
  const output = Mustache.render(template, partials);
  return output;
};

export const renderContentTemplate = ({
  template,
  partials,
}: {
  template: string;
  partials: ContentPartial;
}) => {
  const output = Mustache.render(template, partials);
  return output;
};

export { EventPartial, ContentPartial };
