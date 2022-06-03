export interface ERC721TokenType {
    id?: number;
    tx_hash?: string;
    external_url?: string;
    animation_url?: string;
  
    attribute?: any[];
    description?: string;
  
    tokenId: number;
    name: string;
    symbol: string;
    image: string;
    collectionName: string;
    ownerAddress: string;
    collectionAddress: string;
  }