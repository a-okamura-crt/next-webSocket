// Aタイプ用
const TYPE_A = "type_a";
// Bタイプ用
const TYPE_B = "type_b";

type Types = typeof TYPE_A | typeof TYPE_B

// webSocketから送信されるデータの型
export type MessageEventData = {
    type: Types,
    message: string
}

// フロント側でパースしたオブジェクトの型定義
export const formatSocketMessageData = (event: any): event is MessageEventData => {
    return isTypeA(event.type) || isTypeB(event.type)
}

// typeAかどうかの判定
export const isTypeA = (type: Types) => {
    return type === TYPE_A 
}
// typeBかどうかの判定
export const isTypeB = (type: Types) => {
    return type === TYPE_B 
}

// クライアント側から送信するイベント
export const CHECK_IN = "check_in";