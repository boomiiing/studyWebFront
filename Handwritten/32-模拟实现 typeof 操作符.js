
//typeof 返回以下值之一： "undefined" "boolean" "number" "string" "symbol" "bigint" "object" "function"
//null或array返回"object"
function myTypeOf(value) {
    // 处理 null 的特殊情况
    if (value === null) {
        return "object";
    }

    // 使用 Object.prototype.toString.call 来获取内部 [[Class]] 值
    const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

    // 特殊处理：对于原始类型，直接返回对应的字符串
    if (type === "number" || type === "string" || type === "boolean" || type === "undefined" || type === "symbol" || type === "bigint") {
        return type;
    }

    // 对于 function 类型，也直接返回 "function"
    if (type === "function") {
        return "function";
    }

    // 其他情况（如 object、array 等）统一返回 "object"
    return "object";
}