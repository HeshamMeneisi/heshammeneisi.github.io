// Hand-drawn, simple monochrome glyphs for brands that simple-icons does not
// ship (trademark removals). Same filled, single-color style as the rest of the
// set: they inherit grey via currentColor and tint to `hex` on card hover.
// Keyed by the tech item's display name.

export interface CustomIcon {
  /** inner SVG markup for a 0 0 24 24 viewBox */
  svg: string;
  /** brand color shown on hover; falls back to the accent when omitted */
  hex?: string;
}

export const customIcons: Record<string, CustomIcon> = {
  // Stacked storage bars = a database.
  SQL: {
    svg:
      '<rect x="3" y="4" width="18" height="4.6" rx="2.3"/>' +
      '<rect x="3" y="9.7" width="18" height="4.6" rx="2.3"/>' +
      '<rect x="3" y="15.4" width="18" height="4.6" rx="2.3"/>',
  },

  // Database bars over a stream = streaming SQL.
  KSQL: {
    svg:
      '<rect x="3" y="3.5" width="18" height="4.4" rx="2.2"/>' +
      '<rect x="3" y="9" width="18" height="4.4" rx="2.2"/>' +
      '<path d="M3 18 q2.25 -2.4 4.5 0 t4.5 0 t4.5 0 t4.5 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  },

  // Hexagon = the dbt mark.
  dbt: {
    svg: '<path d="M12 2 20.66 7 V17 L12 22 3.34 17 V7 Z"/>',
    hex: "FF694A",
  },

  // Four-point sparkle = the Dagster mark.
  Dagster: {
    svg:
      '<path d="M12 2 Q12.8 11.2 22 12 Q12.8 12.8 12 22 Q11.2 12.8 2 12 Q11.2 11.2 12 2 Z"/>',
    hex: "654FF0",
  },

  // Node cluster = a Redshift warehouse cluster.
  Redshift: {
    svg:
      '<circle cx="12" cy="12" r="2.3"/>' +
      '<circle cx="12" cy="4.6" r="1.7"/>' +
      '<circle cx="18.4" cy="8.3" r="1.7"/>' +
      '<circle cx="18.4" cy="15.7" r="1.7"/>' +
      '<circle cx="12" cy="19.4" r="1.7"/>' +
      '<circle cx="5.6" cy="15.7" r="1.7"/>' +
      '<circle cx="5.6" cy="8.3" r="1.7"/>',
    hex: "8C4FFF",
  },

  // Angular triangle = the Azure "A".
  Azure: {
    svg:
      '<path fill-rule="evenodd" d="M12 3 L21.5 21 H2.5 Z M12 10.5 L16.5 19 H7.5 Z"/>',
    hex: "0089D6",
  },

  // Ascending bars = Power BI.
  "Power BI": {
    svg:
      '<rect x="3" y="12" width="3.5" height="9" rx="1.2"/>' +
      '<rect x="8.2" y="8" width="3.5" height="13" rx="1.2"/>' +
      '<rect x="13.4" y="4" width="3.5" height="17" rx="1.2"/>' +
      '<rect x="18.6" y="1.5" width="3.5" height="19.5" rx="1.2"/>',
    hex: "F2C811",
  },
};
