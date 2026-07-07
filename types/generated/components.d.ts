import type { Schema, Struct } from '@strapi/strapi';

export interface ContactActionCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_action_cards';
  info: {
    description: 'Kartu topik Kontak dengan CTA Hubungi Kami';
    displayName: 'Action card';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Hubungi Kami'>;
    ctaLink: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageAgentCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_agent_cards';
  info: {
    description: 'Cards for Agen Perubahan section';
    displayName: 'Agent Card';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageAwardsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_awards_sections';
  info: {
    description: 'Section for awards and recognition logos';
    displayName: 'Awards Section';
  };
  attributes: {
    awardByLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    images: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface HomepageDidYouKnow extends Struct.ComponentSchema {
  collectionName: 'components_homepage_did_you_knows';
  info: {
    description: 'Carousel text for did you know section';
    displayName: 'Did You Know';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomepageFeaturedBy extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_bies';
  info: {
    description: 'Marquee section for sponsor logos';
    displayName: 'Featured By';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageImpactStat extends Struct.ComponentSchema {
  collectionName: 'components_homepage_impact_stats';
  info: {
    description: 'Statistics for impact section with icon/image';
    displayName: 'Impact Stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageInstagramSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_instagram_sections';
  info: {
    description: 'Instagram section details';
    displayName: 'Instagram Section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    instagramLink: Schema.Attribute.Text;
  };
}

export interface HomepageSupporterAndCollabolators
  extends Struct.ComponentSchema {
  collectionName: 'components_homepage_supporter_and_collabolators';
  info: {
    displayName: 'Supporter and Collabolators';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFlowStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_flow_steps';
  info: {
    description: 'Step in a process flow';
    displayName: 'Flow Step';
  };
  attributes: {
    button1Label: Schema.Attribute.String;
    button1Link: Schema.Attribute.String;
    button2Label: Schema.Attribute.String;
    button2Link: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_social_links';
  info: {
    displayName: 'footerSocialLinks';
    icon: 'globe';
  };
  attributes: {
    facebook: Schema.Attribute.Text;
    instagram: Schema.Attribute.Text;
    linkedin: Schema.Attribute.Text;
    tiktok: Schema.Attribute.Text;
    youtube: Schema.Attribute.Text;
  };
}

export interface SharedInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_cards';
  info: {
    description: 'Small text card for hero section';
    displayName: 'Info Card';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Information for a social media link';
    displayName: 'Social Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStoreLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_store_links';
  info: {
    description: 'E-commerce platform link (e.g. Tokopedia, Shopee)';
    displayName: 'Store Link';
  };
  attributes: {
    platformName: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTargetDonaturCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_target_donatur_cards';
  info: {
    displayName: 'targetDonaturCard';
    icon: 'restaurant';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTargetPenerimaCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_target_penerima_cards';
  info: {
    displayName: 'targetPenerimaCard';
    icon: 'handHeart';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.action-card': ContactActionCard;
      'homepage.agent-card': HomepageAgentCard;
      'homepage.awards-section': HomepageAwardsSection;
      'homepage.did-you-know': HomepageDidYouKnow;
      'homepage.featured-by': HomepageFeaturedBy;
      'homepage.impact-stat': HomepageImpactStat;
      'homepage.instagram-section': HomepageInstagramSection;
      'homepage.supporter-and-collabolators': HomepageSupporterAndCollabolators;
      'shared.flow-step': SharedFlowStep;
      'shared.footer-social-links': SharedFooterSocialLinks;
      'shared.info-card': SharedInfoCard;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
      'shared.store-link': SharedStoreLink;
      'shared.target-donatur-card': SharedTargetDonaturCard;
      'shared.target-penerima-card': SharedTargetPenerimaCard;
    }
  }
}
