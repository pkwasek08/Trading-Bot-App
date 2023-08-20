export class Trade {
    openPrice!: number;
    closePrice!: number;
    amount!: number;
    profitLose!: number;
    dateOpen!: Date
    dateClose!: Date;
    stopLoss!: number;
    takeProfit!: number;
    comment!: string;
    type!: string
}