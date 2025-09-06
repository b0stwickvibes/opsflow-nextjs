import { Config } from '@markdoc/markdoc';

const config = {
  tags: {
    callout: {
      render: 'Callout',
      attributes: {
        type: {
          type: String,
          default: 'info',
          matches: ['info', 'warning', 'error', 'success']
        },
        title: {
          type: String
        }
      }
    },
    card: {
      render: 'Card',
      attributes: {
        title: {
          type: String
        },
        href: {
          type: String
        }
      }
    },
    'code-block': {
      render: 'CodeBlock',
      attributes: {
        language: {
          type: String,
          default: 'text'
        },
        title: {
          type: String
        },
        showLineNumbers: {
          type: Boolean,
          default: false
        }
      }
    }
  },
  nodes: {
    fence: {
      render: 'CodeBlock',
      attributes: {
        language: {
          type: String,
          default: 'text'
        }
      }
    },
    heading: {
      render: 'Heading',
      attributes: {
        id: { type: String },
        level: { type: Number, required: true }
      }
    },
    link: {
      render: 'Link',
      attributes: {
        href: { type: String, required: true },
        target: { type: String }
      }
    }
  }
};

export default config;
