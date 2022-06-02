/**
 * 抽象策略类
 * void 0 === undefined
 */

const strategies = {
    isNonEmpty(value: string, errorMsg: string) {
        return value === '' ?
            errorMsg : void 0
    },
    minLength(value: string, length: string | number, errorMsg: string) {
        return value.length < length ?
            errorMsg : void 0
    },
    isMoblie(value: string, errorMsg: string) {
        return !/^1(3|5|7|8|9)[0-9]{9}$/.test(value) ?
            errorMsg : void 0
    },
    isEmail(value: string, errorMsg: string) {
        return !/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value) ?
            errorMsg : void 0
    }
}

/**
 * Validator 具体策略类
 *
 * 使用方式:
 * validator.start(); // 开始校验
 * validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空')
 * validator.add(registerForm.userName, [{
 * strategy: 'isNonEmpty',
 * errorMsg: '用户名不能为空！'
 *}, {
 *     strategy: 'minLength:6',
 *     errorMsg: '用户名长度不能小于6位！'
 *}])
 */
class Validator {
    validateRules: Array<any>;

    constructor() {
        this.validateRules = [];
    }

    add(val, rules) {
        if (!rules) { // 如果没有传入rules，则直接抛出异常
            throw new Error('rules is required');
        }
        for (let rule of rules) {
            const strategyName = rule.strategy.split(':')[0]; // 获取策略名 例如：isNonEmpty|minLength
            const strategyParams = rule.strategy.split(':')[1]; // 取出策略参数, 譬如：minLength:6 的 "6"
            const errorMsg = rule.errorMsg;
            this.validateRules.push(() => {
                if (strategyParams) {
                    return strategies[strategyName](val, strategyParams, errorMsg);
                }
                return strategies[strategyName](val, errorMsg);
            })
        }
    }
    start(){

    }
}
