import type { Schema, Attribute } from '@strapi/strapi';

export interface DefaultSeoDefaultSeo extends Schema.Component {
  collectionName: 'components_default_seo_default_seos';
  info: {
    displayName: 'DefaultSEO';
    description: '';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text & Attribute.DefaultTo<'MetaDescription'>;
    ShareImage: Attribute.Media;
    DisableIndexing: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'default-seo.default-seo': DefaultSeoDefaultSeo;
    }
  }
}
