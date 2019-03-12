export interface Stats {
    funded_txo_count: number;
    funded_txo_sum: number;
    spent_txo_count: number;
    spent_txo_sum: number;
    tx_count: number;
}


export interface AddressResponse {
    address: string;
    chain_stats: Stats;
    mempool_stats: Stats;
}



export interface Status {
    block_height: number;
    block_hash: string;
    block_time: number;
    confirmed: boolean;
}
export interface Vin {
    is_coinbase: boolean;
    prevout: {
        scriptpubkey: string;
        scriptpubkey_address: string;
        scriptpubkey_asm: string;
        scriptpubkey_type: string;
        value: number;

    };
    scriptsig: string;
    scriptsig_asm: string;
    sequence: number;
    txid: string;
    vout: number;
    witness: any;
}

export interface Vout {
    scriptpubkey: string;
    scriptpubkey_address: string;
    scriptpubkey_asm: string;
    scriptpubkey_type: string;
    value: number;
}

export interface TxResponse {
    txid: string;
    status: Status;
    size: number;
    weight: number;
    fee: number;
    version: number;
    locktime: number;
    vin: Vin[];
    vout: Vout[];

}

export type OutspendsResponse = (OutspendsResponseUnspentItem | OutspendsResponseSpentItem )[];

export interface OutspendsResponseUnspentItem {
    spent: false;
    status: null;
    txid: null;
    vin: null;
}

export interface OutspendsResponseSpentItem {
    spent: true;
    status: Status;
    txid: string;
    vin: number;
}