/**
 * WHITE-LABEL CONFIGURATION
 * 
 * This is the master configuration file for customizing the platform for different clients.
 * When creating a new fork, update all values in this file according to the client's requirements.
 */

export const WHITE_LABEL_CONFIG = {
  brandColors: {
    primary: "black:700" as const,
    primaryContent: "white" as const,
    primaryContentAlt: "gray:300" as const,
    
    secondary: "silver:100" as const,
    secondaryContent: "black:700" as const,
    secondaryContentAlt: "black:400" as const,
    
    accent1: "red:500" as const,  
    accent1Content: "white" as const,
    accent1ContentAlt: "red:100" as const,
    
    accent2: "green:500" as const,
    accent2Content: "black:700" as const,
    accent2ContentAlt: "green:800" as const,
  },

  // ===========================
  // TYPOGRAPHY
  // ===========================
  typography: {
    // Font family for CSS (used in Panda config)
    fontFamily: "Geist, sans-serif",
    // Next.js font import name (should match the import)
    fontImport: "GeistSans" as const,
  },

  // ===========================
  // UNIFIED TOKENS CONFIGURATION
  // ===========================
  tokens: {
    // Main protocol stablecoin
    mainToken: {
      name: "gyUSD",
      symbol: "gyUSD" as const, 
      ticker: "gyUSD",
      decimals: 18,
      description: "USD-pegged stablecoin by Your Protocol",
      icon: "main-token",
      // Core protocol contracts (deployment addresses TBD)
      deployments: {
        646: { // Ronin
          token: "0x0000000000000000000000000000000000000000", // TBD - YOUR deployment
          collateralRegistry: "0x0000000000000000000000000000000000000000", // TBD
          governance: "0x0000000000000000000000000000000000000000", // TBD
          hintHelpers: "0x0000000000000000000000000000000000000000", // TBD
          multiTroveGetter: "0x0000000000000000000000000000000000000000", // TBD
          exchangeHelpers: "0x0000000000000000000000000000000000000000", // TBD
        },
        // Placeholder for build compatibility (remove after deployment)
        1: { // Mainnet (placeholder)
          token: "0x0000000000000000000000000000000000000000",
          collateralRegistry: "0x0000000000000000000000000000000000000000",
          governance: "0x0000000000000000000000000000000000000000",
          hintHelpers: "0x0000000000000000000000000000000000000000",
          multiTroveGetter: "0x0000000000000000000000000000000000000000",
          exchangeHelpers: "0x0000000000000000000000000000000000000000",
        },
        11155111: { // Sepolia (placeholder)
          token: "0x0000000000000000000000000000000000000000",
          collateralRegistry: "0x0000000000000000000000000000000000000000",
          governance: "0x0000000000000000000000000000000000000000",
          hintHelpers: "0x0000000000000000000000000000000000000000",
          multiTroveGetter: "0x0000000000000000000000000000000000000000",
          exchangeHelpers: "0x0000000000000000000000000000000000000000",
        },
      },
    },

    // Governance token (exists but no functionality at launch)
    governanceToken: {
      name: "Your Governance Token",
      symbol: "GOV" as const,
      ticker: "GOV",
      icon: "governance-token",
      // Only used as collateral, no governance features
      deployments: {
        646: { // Ronin mainnet
          token: "0x0000000000000000000000000000000000000000",
          staking: "0x0"
        },
        1: {
          token: "0x0000000000000000000000000000000000000000",
          staking: "0x0"
        },
        11155111: {
          token: "0x0000000000000000000000000000000000000000",
          staking: "0x0"
        },
      },
    },

    // Collateral tokens (for borrowing) - Multi-chain support
    collaterals: [
      // === ETH-based collaterals (110% MCR, 90.91% max LTV) ===
      {
        symbol: "ETH" as const,
        name: "ETH",
        icon: "eth",
        collateralRatio: 1.1, // 110% MCR
        maxDeposit: "100000000", // $100M initial debt limit
        maxLTV: 0.9091, // 90.91% max LTV
        // Deployment info (per chain)
        deployments: {
          646: { // Your chain ID (TBD - needs actual deployment)
            collToken: "0x0000000000000000000000000000000000000000", // TBD
            leverageZapper: "0x0000000000000000000000000000000000000000", // TBD
            stabilityPool: "0x0000000000000000000000000000000000000000", // TBD
            troveManager: "0x0000000000000000000000000000000000000000", // TBD
          },
          // Placeholder deployments for build compatibility
          1: {
            collToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            leverageZapper: "0x978d7188ae01881d254ad7e94874653b0c268004",
            stabilityPool: "0xf69eb8c0d95d4094c16686769460f678727393cf",
            troveManager: "0x81d78814df42da2cab0e8870c477bc3ed861de66",
          },
          11155111: {
            collToken: "0x8116d0a0e8d4f0197b428c520953f302adca0b50",
            leverageZapper: "0x482bf4d6a2e61d259a7f97ef6aac8b3ce5dd9f99",
            stabilityPool: "0x89fb98c98792c8b9e9d468148c6593fa0fc47b40",
            troveManager: "0x364038750236739e0cd96d5754516c9b8168fb0c",
          },
        },
      },
      {
        symbol: "RETH" as const,
        name: "Rocket Pool ETH", 
        icon: "reth",
        collateralRatio: 1.1, // 110% MCR for LSTs
        maxDeposit: "25000000", // $25M initial debt limit
        maxLTV: 0.9091, // 90.91% max LTV
        deployments: {
          646: { // Your chain ID (TBD - needs actual rETH deployment)
            collToken: "0x0000000000000000000000000000000000000000", // TBD
            leverageZapper: "0x0000000000000000000000000000000000000000", // TBD
            stabilityPool: "0x0000000000000000000000000000000000000000", // TBD
            troveManager: "0x0000000000000000000000000000000000000000", // TBD
          },
          // Placeholder deployments for build compatibility
          1: {
            collToken: "0xae78736cd615f374d3085123a210448e74fc6393",
            leverageZapper: "0x7d5f19a1e48479a95c4eb40fd1a534585026e7e5",
            stabilityPool: "0xc4463b26be1a6064000558a84ef9b6a58abe4f7a",
            troveManager: "0xde026433882a9dded65cac4fff8402fafff40fca",
          },
          11155111: {
            collToken: "0xbdb72f78302e6174e48aa5872f0dd986ed6d98d9",
            leverageZapper: "0x251dfe2078a910c644289f2344fac96bffea7c02",
            stabilityPool: "0x8492ad1df9f89e4b6c54c81149058172592e1c94",
            troveManager: "0x310fa1d1d711c75da45952029861bcf0d330aa81",
          },
        },
      },
      {
        symbol: "WSTETH" as const,
        name: "wstETH",
        icon: "wsteth",
        collateralRatio: 1.2,
        maxDeposit: "100000000",
        maxLTV: 0.916,
        deployments: {
          1: {
            collToken: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
            leverageZapper: "0xc3d864adc2a9b49d52e640b697241408d896179f",
            stabilityPool: "0xcf46dab575c364a8b91bda147720ff4361f4627f",
            troveManager: "0xb47ef60132deabc89580fd40e49c062d93070046",
          },
          11155111: {
            collToken: "0xff9f477b09c6937ff6313ae90e79022609851a9c",
            leverageZapper: "0xea7fb1919bf9bae007df10ad8b748ee75fd5971d",
            stabilityPool: "0x68320bd4bbc16fe14f91501380edaa9ffe5890e1",
            troveManager: "0xa7b57913b5643025a15c80ca3a56eb6fb59d095d",
          },
        },
      },
      {
        symbol: "RON" as const,
        name: "Wrapped Ronin",
        icon: "ron",
        collateralRatio: 1.3, // 130% MCR
        maxDeposit: "5000000",
        maxLTV: 0.769231,
        deployments: {
          1: {
            collToken: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          11155111: {
            collToken: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          2020: {
            collToken: "0xe514d9deb7966c8be0ca922de8a064264ea6bcd4",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
        },
      },
      {
        symbol: "LRON" as const,
        name: "Liquid RON",
        icon: "lron",
        collateralRatio: 1.4, // 140% MCR
        maxDeposit: "3000000",
        maxLTV: 0.714286,
        deployments: {
          1: {
            collToken: "0xcad9e7aa2c3ef07bad0a7b69f97d059d8f36edd2",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          11155111: {
            collToken: "0xcad9e7aa2c3ef07bad0a7b69f97d059d8f36edd2",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          2020: {
            collToken: "0xcad9e7aa2c3ef07bad0a7b69f97d059d8f36edd2",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
        },
      },
      {
        symbol: "AXS" as const,
        name: "Axie Infinity",
        icon: "axs",
        collateralRatio: 1.5, // 150% MCR
        maxDeposit: "2000000",
        maxLTV: 0.666667,
        deployments: {
          1: {
            collToken: "0x97a9107c1793bc407d6f527b77e7fff4d812bece",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          11155111: {
            collToken: "0x97a9107c1793bc407d6f527b77e7fff4d812bece",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          2020: {
            collToken: "0x97a9107c1793bc407d6f527b77e7fff4d812bece",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
        },
      },
      {
        symbol: "SLP" as const,
        name: "Smooth Love Potion",
        icon: "slp",
        collateralRatio: 1.7, // 170% MCR
        maxDeposit: "1000000",
        maxLTV: 0.588235,
        deployments: {
          1: {
            collToken: "0xa8754b9fa15fc18bb59458815510e40a12cd2014",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          11155111: {
            collToken: "0xa8754b9fa15fc18bb59458815510e40a12cd2014",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          2020: {
            collToken: "0xa8754b9fa15fc18bb59458815510e40a12cd2014",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
        },
      },
      {
        symbol: "FBTC" as const,
        name: "Function BTC",
        icon: "fbtc",
        collateralRatio: 1.12, // 112% MCR
        maxDeposit: "100000000",
        maxLTV: 0.892857,
        deployments: {
          1: {
            collToken: "0xc96de26018a54d51c097160568752c4e3bd6c364",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          11155111: {
            collToken: "0xc96de26018a54d51c097160568752c4e3bd6c364",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
          2020: {
            collToken: "0xc96de26018a54d51c097160568752c4e3bd6c364",
            leverageZapper: "0x0000000000000000000000000000000000000001",
            stabilityPool: "0x0000000000000000000000000000000000000002",
            troveManager: "0x0000000000000000000000000000000000000003",
          },
        },
      },
    ],

    // Other tokens in the protocol
    otherTokens: {
      // ETH for display purposes
      eth: {
        symbol: "ETH" as const,
        name: "ETH",
        icon: "eth",
      },
      // SBOLD - yield-bearing version of the main token
      sbold: {
        symbol: "SBOLD" as const,
        name: "sYOUR Token",
        icon: "sbold",
      },
      // Staked version of main token
      staked: {
        symbol: "sYOUR" as const,
        name: "Staked YOUR",
        icon: "staked-main-token",
      },
      lusd: {
        symbol: "LUSD" as const,
        name: "LUSD",
        icon: "legacy-stablecoin",
      },
    },
  },

  // ===========================
  // BRANDING & CONTENT
  // ===========================
  branding: {
    // Core app identity
    appName: "Gyoza",
    brandName: "Gyoza",
    appTagline: "Next-gen borrowing protocol",
    appDescription: "A new borrowing protocol that lets users deposit ETH or LSTs as collateral",
    appUrl: "https://www.gyoza.finance/",
    
    // External links
    links: {
      docs: {
        base: "https://docs.yourprotocol.com/",
        redemptions: "https://docs.yourprotocol.com/redemptions",
        liquidations: "https://docs.yourprotocol.com/liquidations",
        delegation: "https://docs.yourprotocol.com/delegation",
        interestRates: "https://docs.yourprotocol.com/interest-rates",
        earn: "https://docs.yourprotocol.com/earn",
        staking: "https://docs.yourprotocol.com/staking",
      },
      dune: "https://dune.com/yourprotocol",
      discord: "https://discord.gg/yourprotocol",
      github: "https://github.com/yourorg/yourprotocol",
      x: "https://x.com/yourprotocol",
      friendlyForkProgram: "https://yourprotocol.com/ecosystem",
    },
    
    // Feature flags and descriptions
    features: {
      showV1Legacy: false, // No V1 legacy content
      friendlyFork: {
        enabled: true,
        title: "Learn more about the Friendly Fork Program",
        description: "A program for collaborative protocol development",
      },
    },
    
    // Navigation configuration  
    navigation: {
      showBorrow: true,
      showEarn: true,
      showStake: false,
    },
    
    // Menu labels (can be customized per deployment)
    menu: {
      dashboard: "Dashboard",
      borrow: "Borrow",
      multiply: "Multiply", 
      earn: "Earn",
      stake: "Stake"
    },
    
    // Common UI text
    ui: {
      connectWallet: "Connect",
      wrongNetwork: "Wrong network",
      loading: "Loading...",
      error: "Error",
    },
  },

  // ===========================
  // EARN POOLS CONFIGURATION
  // ===========================
  earnPools: {
    enableStakedMainToken: false,
    
    // Enable/disable stability pools for collaterals
    enableStabilityPools: true,
    
    // Custom pools configuration (beyond collateral stability pools)
    customPools: [] as Array<{
      symbol: string;
      name: string;
      enabled: boolean;
    }>,
  },
};

// Type exports for TypeScript support
export type WhiteLabelConfig = typeof WHITE_LABEL_CONFIG;

// Utility functions for dynamic configuration
export function getAvailableEarnPools() {
  const pools: Array<{ symbol: string; name: string; type: 'stability' | 'staked' | 'custom' }> = [];
  
  // Add stability pools for enabled collaterals
  if (WHITE_LABEL_CONFIG.earnPools.enableStabilityPools) {
    WHITE_LABEL_CONFIG.tokens.collaterals.forEach(collateral => {
      pools.push({
        symbol: collateral.symbol.toLowerCase(),
        name: `${collateral.name} Stability Pool`,
        type: 'stability',
      });
    });
  }
  
  // Add custom pools
  WHITE_LABEL_CONFIG.earnPools.customPools.forEach(pool => {
    if (pool.enabled) {
      pools.push({
        symbol: pool.symbol.toLowerCase(),
        name: pool.name,
        type: 'custom',
      });
    }
  });
  
  return pools;
}

export function getEarnPoolSymbols() {
  return getAvailableEarnPools().map(pool => pool.symbol);
}

export function getCollateralSymbols() {
  return WHITE_LABEL_CONFIG.tokens.collaterals.map(collateral => collateral.symbol.toLowerCase());
}