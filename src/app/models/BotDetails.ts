import { Trade } from "./Trade";

export class BotDetails{
    id!: number;
    name!: string;
    startDate!: Date;
    endDate!: Date;
    createDate!: Date;
    pairStock!: string;
    budget!: number;
    resultValue!: number;
    parameters!: string;
    amount!: number;
    resampleFreq!: string;
    roi!: number;
    wlRatio!: number;
    tradeList!: Trade[];
}
