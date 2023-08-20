import { Trade } from "./Trade";

export class NewBotResponse {
    parameters!: string;
    budgetBefore!: number;
    budgetAfter!: number;
    tradeList!: Trade[];
}
